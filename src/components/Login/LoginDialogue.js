import {
	Box,
	Dialog,
	TextField,
	Button,
	Typography,
	styled,
} from '@mui/material'
import React, { useState, useContext } from 'react'
import { DataContext } from '../../context/DataProvider.jsx'
import { authenticateSignup } from '../../Service/api.js'

const Component = styled(Box)`
	height: 70vh;
	width: 50vw;
`

const Image = styled(Box)`
	background: #2874f0
		url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
		no-repeat center 85%;
	height: 80%;
	width: 28%;
	padding: 45px 35px;
	& > p,
	& > h5 {
		color: #fff;
		font-weight: 600;
	}
`

const Wrapper = styled(Box)`
	display: flex;
	flex-direction: column;
	padding: 25px 35px;
	flex: 1;
	& > div,
	& > button,
	& > p {
		margin-top: 20px;
	}
`

const LoginButton = styled(Button)`
	text-transform: none;
	background: #fb641b;
	color: #fff;
	height: 48px;
	border-radius: 2px;
`
const RequestOTP = styled(Button)`
	text-transform: none;
	background: #fff;
	color: #287480;
	height: 48px;
	border-radius: 2px;
	box-shadow: 0px 2px 4px 0 rgba(0 0 0/ 20%);
`

const Text = styled(Typography)`
	font-size: 12px;
	color: #878787;
`

const CreateAccount = styled(Typography)`
	font-size: 14px;
	text-align: center;
	color: #2874f0;
	font-weight: 600;
	cursor: pointer;
`

const accountIntitialValues = {
	login: {
		view: 'login',
		heading: 'Login',
		subHeading: 'Get access to your Orders, Wishlist and Recommendations',
	},
	signup: {
		view: 'signup',
		heading: 'Looks like you are new here',
		subHeading: 'Sign up with your mobile number to get started',
	},
}

const signupInitialValues = {
	firstname: '',
	lastname: '',
	username: '',
	email: '',
	password: '',
	phone: '',
}

const LoginDialogue = ({ open, setOpen }) => {
	const [account, toggleAccount] = useState(accountIntitialValues.login)
	const [signup, setSignup] = useState(signupInitialValues)

	const [setAccount] = useContext(DataContext)

	const toggleSignup = () => {
		toggleAccount(accountIntitialValues.signup)
	}

	const handleClose = () => {
		setOpen(false)
		toggleAccount(accountIntitialValues.login)
	}

	const onInputChange = e => {
		setSignup({ ...signup, [e.target.name]: e.target.value })
	}

	const signupUser = async () => {
		let response = await authenticateSignup(signup)
		if (!response) return
		handleClose()
		setAccount(signup.firstname)
	}

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			PaperProps={{ sx: { maxWidth: 'unset', maxHeight: 'unset' } }}
		>
			<Component>
				<Box style={{ display: 'flex', height: '100%' }}>
					<Image>
						<Typography variant='h5'>{account.heading}</Typography>
						<Typography style={{ marginTop: 20 }}>
							{account.subHeading}
						</Typography>
					</Image>
					{account.view === 'login' ? (
						<Wrapper>
							<TextField
								variant='standard'
								label='Enter Email/Mobile Number'
							></TextField>
							<TextField
								variant='standard'
								label='Enter Password'
							></TextField>
							<Text>
								By continuing, you agree to Flipkart's Terms of Use and
								Privacy Policy.
							</Text>
							<LoginButton>Login</LoginButton>
							<Typography style={{ textAlign: 'center' }}>OR</Typography>
							<RequestOTP>Request OTP</RequestOTP>
							<CreateAccount onClick={() => toggleSignup()}>
								New to Flipkart? Create an account
							</CreateAccount>
						</Wrapper>
					) : (
						<Wrapper>
							<TextField
								onChange={e => onInputChange(e)}
								name='firstname'
								variant='standard'
								label='Enter First Name'
							></TextField>
							<TextField
								onChange={e => onInputChange(e)}
								name='lastname'
								variant='standard'
								label='Last Name'
							></TextField>
							<TextField
								onChange={e => onInputChange(e)}
								name='username'
								variant='standard'
								label='Enter Username'
							></TextField>
							<TextField
								onChange={e => onInputChange(e)}
								name='email'
								variant='standard'
								label='Enter Email'
							></TextField>
							<TextField
								onChange={e => onInputChange(e)}
								name='password'
								variant='standard'
								label='Enter Password'
							></TextField>
							<TextField
								onChange={e => onInputChange(e)}
								name='phone'
								variant='standard'
								label='Enter Phone'
							></TextField>
							<LoginButton
								onClick={() => {
									signupUser()
								}}
							>
								Continue
							</LoginButton>
						</Wrapper>
					)}
				</Box>
			</Component>
		</Dialog>
	)
}

export default LoginDialogue
