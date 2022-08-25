import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
//import { configureStore } from '@reduxjs/toolkit'
import { productsReducer, productDetailsReducer } from './reducers/ProductReducers'
import { authReducer } from './reducers/userReducers'


//const configureStore = require('@reduxjs/toolkit').configureStore
const  reducer = combineReducers ({
    products: productsReducer,
    productDetails: productDetailsReducer,
    auth: authReducer
})

let initialState = {}

const middleware = [thunk];
const store = createStore (reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;