import { Box } from '@mui/material';
import React from 'react';
import { navData } from '../../constants/data';

const NavBar = () => {
    return (
        <Box>
            {
                navData.map(data =>{
                    return <Box>
                        <img src={data.url} alt='nav'></img>
                        <p>{data.text}</p>
                    </Box>
                })
            }
        </Box>
    );
};

export default NavBar;