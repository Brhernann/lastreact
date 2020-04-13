import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import combineReducers from '../Reducer'
import dotenv from "dotenv"

// /* Config Vars */
dotenv.config()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(combineReducers, applyMiddleware(thunk))

if (process.env.REACT_APP_ENVIRONMENT === 'dev') {
    store = createStore(
        combineReducers,
        composeEnhancers(applyMiddleware(thunk))
    )
}

export default store
