import { Box, Menu, MenuItem, Typography,styled } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component = styled(Menu)`
    margin-top : 5px
`

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
            <Component
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <PowerSettingsNewIcon></PowerSettingsNewIcon>
                    <Typography>Logout</Typography>
                </MenuItem>
                {/* <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem> */}
            </Component>
        </>
    );
};

export default Profile;