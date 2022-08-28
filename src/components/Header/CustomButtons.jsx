import { Box, Button, Typography,styled } from '@mui/material';
import React, { useState ,useContext} from 'react';
import {ShoppingCart} from '@mui/icons-material';
import LoginDialogue from '../Login/LoginDialogue';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';


const Wrapper = styled(Box) ( ({theme})=> ({
    display: 'flex',
    margin: '0 3% 0 auto' ,
    '& > *' :{
        marginRight: '40px',
        fontSize: '14px',
    },
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
        display :'block'
    }
}))


const Container = styled(Box) (({theme})=> ({
    display: 'flex',
    [theme.breakpoints.down('md')] : {
        display:'block'
    }
}))



const LoginButton = styled(Button)`
    color: #2874f0;
    background-color: #fff;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none; 
    font-weight: 600;
    height: 32px;
`

const CustomButtons = () => {
    const [open, setOpen] = useState(false)
    const {account,setAccount} = useContext(DataContext)
    const openDialog = () => {
        setOpen(true);
    }
    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount}></Profile> :
                <LoginButton 
                variant='contained'
                onClick={() => openDialog()}
                >Login</LoginButton>

            }
           
          
            <Typography style={{marginTop : 3 , width : 135}}>Become a Seller</Typography>
            <Typography style={{marginTop : 3}}>More</Typography>
            <Container>
                <ShoppingCart/>
                <Typography>Cart</Typography>
            </Container>
            <LoginDialogue open={open} setOpen={setOpen}></LoginDialogue>
        </Wrapper>
    );
};

export default CustomButtons;