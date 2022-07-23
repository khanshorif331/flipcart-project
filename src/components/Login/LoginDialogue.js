import { Box, Dialog, TextField, Button, Typography } from '@mui/material'
import React from 'react'

const LoginDialogue = ({ open, setOpen }) => {
	const handleClose = () => {
		setOpen(false)
	}
	return (
		<Dialog open={open} onClose={handleClose}>
			<Box>
				<Box></Box>
				<Box>
					<TextField
						variant='standard'
						label='Enter Email/Mobile Number'
					></TextField>
					<TextField variant='standard' label='Enter Password'></TextField>
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
		</Dialog>
	)
}

export default LoginDialogue
