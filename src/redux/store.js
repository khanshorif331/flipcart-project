import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { getProductsReducer } from './reducers/productReducer'

const reducer = combineReducers({
	getProducts: getProductsReducer,
})

const middleware = [thunk]

// createStore function takes two parameter...first take the rooot reducer and second is middleware
const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(...middleware))
)

export default store
