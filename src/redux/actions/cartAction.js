import axios from 'axios'
import * as actionTypes from '../constants/cartConstant'

const URL = 'http://localhost:5000'

// using thunk as middleware for async action
export const addToCart = (id, quantity) => async dispatch => {
	try {
		const { data } = await axios.get(`${URL}/product/${id}`)

		dispatch({
			type: actionTypes.ADD_TO_CART,
			payload: { ...data, quantity },
		})
	} catch (err) {
		dispatch({ type: actionTypes.ADD_TO_CART_ERROR, payload: err.message })
	}
}

export const removeFromCart = () => {}
