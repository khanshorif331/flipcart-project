import { Grid, Typography ,Box} from '@mui/material';
import React from 'react';
import {useSelector} from 'react-redux'
const Cart = () => {
    const {cartItems} = useSelector(state => state.cart)
    return (
        <>
           {
                cartItems ? 
                <Grid container>
                    <Grid item lg={9} md={9} sm={12} xs={12}>
                        <Box>
                            <Typography>My Cart ({cartItems.length})</Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={3} sm={12} xs={12}></Grid>
                </Grid>
                :
                <div>Empty</div>
           }
        </>
    );
};

export default Cart;