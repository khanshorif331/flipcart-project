import { Box, Button, Typography,styled, Badge } from '@mui/material';
import React, { useState ,useContext} from 'react';
import {ShoppingCart} from '@mui/icons-material';
import LoginDialogue from '../Login/LoginDialogue';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';


const Wrapper = styled(Box) ( ({theme})=> ({
    display: 'flex',
    margin: '0 3% 0 auto' ,
    '& > *' :{
        marginRight: '40px !important' ,
        fontSize: '14px',
    },
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
        display :'block'
    }
}))


const Container = styled(Link) (({theme})=> ({
    display: 'flex',
    color: 'inherit',
    textDecoration: 'none',
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
    const {cartItems}  = useSelector(state => state.cart)
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
            <Container to='/cart'>
                <Badge badgeContent={cartItems.length} color='secondary'><ShoppingCart/></Badge>
                <Typography style={{marginLeft: 10}}>Cart</Typography>
            </Container>
            <LoginDialogue open={open} setOpen={setOpen}></LoginDialogue>
        </Wrapper>
    );
};

export default CustomButtons;