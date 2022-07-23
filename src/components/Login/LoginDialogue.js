import { Box, Dialog, TextField } from '@mui/material'
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
					<TextField></TextField>
				</Box>
			</Box>
		</Dialog>
	)
}

export default LoginDialogue
