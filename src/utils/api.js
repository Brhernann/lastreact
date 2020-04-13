import axios from 'axios'
import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'

/* Config Vars */
dotenvExpand(dotenv.config())

const generateHeaders = params => {
    const token = localStorage.getItem('TOKEN')

    if (token) {
        return {
            params,
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': process.env.REACT_APP_API_KEY,
                Authorization: `Bearer ${token}`,
            },
        }
    }

    return {
        params,
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': process.env.REACT_APP_API_KEY,
        },
    }
}

const pdfGenerateHeaders = params => {
    return {
        responseType: 'blob',
        params,
        headers: {
            Accept: 'application/pdf',
            'X-Api-Key': process.env.REACT_APP_API_KEY,
        },
    }
}
export default class API {
    constructor() {
        this.baseUrl = process.env.REACT_APP_API_BASE_URL
    }

    get(endPoint, params) {
        return axios.get(`${this.baseUrl}/${endPoint}`, generateHeaders(params))
    }

    getpdf(endPoint, params) {
        return axios.get(
            `${this.baseUrl}/${endPoint}`,
            pdfGenerateHeaders(params)
        )
    }

    post(endPoint, body) {
        return axios.post(
            `${this.baseUrl}/${endPoint}`,
            body,
            generateHeaders()
        )
    }

    put(endPoint, body) {
        return axios.put(`${this.baseUrl}/${endPoint}`, body, generateHeaders())
    }

    patch(endPoint, body) {
        return axios.patch(
            `${this.baseUrl}/${endPoint}`,
            body,
            generateHeaders()
        )
    }

    delete(endPoint) {
        return axios.delete(`${this.baseUrl}/${endPoint}`, generateHeaders())
    }
}
