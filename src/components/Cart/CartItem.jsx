import { Box, Typography,styled } from '@mui/material';
import React from 'react';


const Compoonent = styled(Box)`
    border-top : 1px solid #f0f0f0 ;
    display : flex
`

const LeftComponent = styled(Box)`
    margin : 20px
`

const CartItem = ({item}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    return (
        <Compoonent>
            <LeftComponent>
                <img src={item.url} alt="product" />
            </LeftComponent>
            <Box>
                <Typography>{item.title.longTitle}</Typography>
                <Typography>Seller : RetailNet
                    <Box component='span'><img src={fassured} style={{width:50,marginLeft:10}} alt="Flipcart asssured" /></Box>
                </Typography>
            </Box>
        </Compoonent>
    );
};

export default CartItem;