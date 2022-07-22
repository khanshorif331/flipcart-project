import { AppBar,Toolbar , styled} from '@mui/material';
import React from 'react';

const StyledHeader = styled(AppBar)`
  background-color: #2874f0
`

const Header = () => {
    return (
        <div>
           <StyledHeader>
            <Toolbar></Toolbar>
           </StyledHeader>
        </div>
    );
};

export default Header;