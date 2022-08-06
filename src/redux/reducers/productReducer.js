// import * as actionType from '../constants/productConstants.js'
import * as actionType from '../constants/productConstant'

export const getProductsReducer = (state = { products: [] }, action) => {
	switch (action.type) {
		case actionType.GET_PRODUCTS_SUCCESS:
			return { products: action.payload }
		case actionType.GET_PRODUCTS_FAILED:
			return { error: action.payload }
		default:
			return state
	}
}
