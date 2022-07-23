import { Box, styled } from '@mui/material';
import React from 'react';
import { navData } from '../../constants/data';

const Component = styled(Box)`
    display: flex;
`

const NavBar = () => {
    return (
        <Component>
            {
                navData.map(data => {
                   return (
                   <Box>
                        <img src={data.url} alt='nav'></img>
                        <p>{data.text}</p>
                    </Box>
                    )
                   }
                    
                )
            }
        </Component>
    );
};

export default NavBar;