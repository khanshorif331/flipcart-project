import { Box, Typography } from '@mui/material';
import React from 'react';

const ProductDetail = ({product}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    return (
        <div>
            <Typography>{product.title.longTitle}</Typography>
                        <Typography style={{marginTop : 5,color:'#878787',fontSize:14}}>
                            8 Ratings & 1 Reviews
                            <Box component='span'>
                                <img src={fassured} style={{width:77,marginLeft:20}} alt="" />
                            </Box>
                        </Typography>
                        <Typography>
                            <Box component='span' style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp; 
                            <Box component='span' style={{color:'#878787'}}><strike>{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                            <Box component='span' style={{color:'#388E3C'}}>{product.price.discount}</Box>
                        </Typography>
        </div>
    );
};

export default ProductDetail;