import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'
import Cryptr from 'cryptr'
import { message } from 'antd'
import jwtDecode from 'jwt-decode'

dotenvExpand(dotenv.config())

const crypt = new Cryptr(process.env.REACT_APP_SECRET_TOKEN)

export const encryptData = data => crypt.encrypt(JSON.stringify(data))
export const decryptData = data => crypt.decrypt(data)

export const errorResponse = (error, name) => {
    if (error) {
        if (error.response) {
            if (error.response.data.description) {
                message.error(`${name}: ${error.response.data.description}`)
            } else {
                message.error(`${name}: ${error.message}`)
            }
        } else {
            message.error(`${name}: ${error.message}`)
        }
    }
}

export const getMyIdsStores = () => {
    let session = localStorage.getItem('TOKEN')
    if (session) {
        let decoded = jwtDecode(session)
        return JSON.parse(decoded.extra).stores
    }

    return []
}

export const myStores = async (my, all) => {
    let stores = (await my) ? my : all
    stores = (await stores) && (stores.content ? stores.content : stores)
    return (await stores) && stores.filter(q => q.address.id)
}

export const isEmpty = obj => {
    if (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) return false
        }
        return true
    }
    return false
}
