import { Dialog } from '@mui/material'
import React from 'react'

const LoginDialogue = ({ open, setOpen }) => {
	const handleClose = () => {
		setOpen(false)
	}
	return (
		<Dialog open={open} onClose={handleClose}>
			Helloo
		</Dialog>
	)
}

export default LoginDialogue
