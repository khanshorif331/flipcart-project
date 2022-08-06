import axios from 'axios'
// import { GET_PRODUCTS_SUCCESS } from "../constants/productConstant"
import * as actionTypes from '../constants/productConstant'

const URL = 'http://localhost:5000'

export const getProducts = () => async dispatch => {
	try {
		const { data } = await axios.get(`${URL}/products`)
		dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data })
		// console.log(data)
	} catch (err) {
		dispatch({ type: actionTypes.GET_PRODUCTS_FAILED, payload: err.message })
		console.log('Error while calling getPrducts api', err.message)
	}
}
