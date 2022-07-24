import {
	Box,
	Dialog,
	TextField,
	Button,
	Typography,
	styled,
} from '@mui/material'
import React from 'react'

const Component = styled(Box)`
	height: 70vh;
	width: 50vw;
`
//  https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png

const Image = styled(Box)`
	background: #2874f0
		url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
		no-repeat center 85%;
	height: 100%;
	width: 30%;
	padding: 45px 35px;
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
`

const LoginDialogue = ({ open, setOpen }) => {
	const handleClose = () => {
		setOpen(false)
	}
	return (
		<Dialog open={open} onClose={handleClose}>
			<Component>
				<Box style={{ display: 'flex', height: '100%' }}>
					<Image>
						<Typography variant='h5'>Login</Typography>
						<Typography style={{ marginTop: 20 }}>
							Get access to your Orders, Wishlist and Recommendations
						</Typography>
					</Image>
					<Wrapper>
						<TextField
							variant='standard'
							label='Enter Email/Mobile Number'
						></TextField>
						<TextField
							variant='standard'
							label='Enter Password'
						></TextField>
						<Typography>
							By continuing, you agree to Flipkart's Terms of Use and
							Privacy Policy.
						</Typography>
						<LoginButton>Login</LoginButton>
						<Typography>OR</Typography>
						<Button>Request OTP</Button>
						<Typography>New to Flipkart? Create an account</Typography>
					</Wrapper>
				</Box>
			</Component>
		</Dialog>
	)
}

export default LoginDialogue
