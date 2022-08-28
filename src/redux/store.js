import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {
	getProductDetailsReducer,
	getProductsReducer,
} from './reducers/productReducer'

import { cartReducer } from './reducers/cartReducer'

const reducer = combineReducers({
	getProducts: getProductsReducer,
	getProductDetails: getProductDetailsReducer,
	cart: cartReducer,
})

const middleware = [thunk]

// createStore function takes two parameter...first take the rooot reducer and second is middleware
const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(...middleware))
)

export default store
