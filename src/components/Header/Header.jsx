import { AppBar,Toolbar , styled, Box} from '@mui/material';
import React from 'react';

const StyledHeader = styled(AppBar)`
  background-color: #2874f0;
  height: 55px;`

const Header = () => {
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    return (
        <div>
           <StyledHeader>
            <Toolbar>
              <Box>
                <img src={logoURL} alt="logo" style={{width:75}}/>
              </Box>
            </Toolbar>
           </StyledHeader>
        </div>
    );
};

export default Header;