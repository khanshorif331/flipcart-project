import { Grid, Typography ,Box,styled} from '@mui/material';
import React from 'react';
import {useSelector} from 'react-redux'
// compoonent
import CartItem from './CartItem';
import TotalView from './TotalView';


const Container = styled(Grid) `
    padding : 30px 135px; 
`

const Header = styled(Box)`
    padding : 15px 24px
`


const Cart = () => {
    const {cartItems} = useSelector(state => state.cart)
    return (
        <>
           {
                cartItems.length ? 
                <Container container>
                    <Grid item lg={9} md={9} sm={12} xs={12}>
                        <Header>
                            <Typography>My Cart ({cartItems.length})</Typography>
                        </Header>
                        {
                            cartItems.map(item => (
                                <CartItem item={item}></CartItem>
                            ))
                        }
                    </Grid>
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <TotalView></TotalView>
                    </Grid>
                </Container>
                :
                <div>Empty</div>
           }
        </>
    );
};

export default Cart;