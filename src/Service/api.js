import axios from 'axios'

const URL = 'http://localhost:5001'

export const authenticateSignup = async data => {
	try {
		return await axios.post(`${URL}/signup`, data)
	} catch (error) {
		console.log('Error while calling signup api', error.message)
	}
}

export const authenticateLogin = async data => {
	try {
		return await axios.post(`${URL}/login`, data)
	} catch (error) {
		console.log('Error while calling login api', error.message)
		return error.response
	}
}
