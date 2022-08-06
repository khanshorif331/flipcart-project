import { Box, Menu, MenuItem, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';

const Profile = ({account}) => {
    const [open,setOpen] = useState(false)
    const handleClick = (event) => {
        setOpen(event.currentTarget)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <>
            <Box onClick={handleClick}>
                <Typography style={{marginTop:2}}>{account}</Typography>
            </Box>   
            <Menu
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </>
    );
};

export default Profile;