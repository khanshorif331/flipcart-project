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
	width: 90vw;
`
//  https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png

const Image = styled(Box)`
	background: #2874f0
		url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
		no-repeat center;
	height: 100%;
	width: 20%;
`

const LoginDialogue = ({ open, setOpen }) => {
	const handleClose = () => {
		setOpen(false)
	}
	return (
		<Dialog open={open} onClose={handleClose}>
			<Component>
				<Box style={{ display: 'flex', height: '100%' }}>
					<Image></Image>
					<Box>
						<TextField
							variant='standard'
							label='Enter Email/Mobile Number'
						></TextField>
						<TextField
							variant='standard'
							label='Enter Password'
						></TextField>
						<TextField>
							By continuing, you agree to Flipkart's Terms of Use and
							Privacy Policy.
						</TextField>
						<Button>Login</Button>
						<Typography>OR</Typography>
						<Button>Login</Button>
						<Typography>New to Flipkart? Create an account</Typography>
					</Box>
				</Box>
			</Component>
		</Dialog>
	)
}

export default LoginDialogue
