import { Box, Typography,styled, Table, TableBody, TableRow, TableCell} from '@mui/material';
import React from 'react';
import {LocalOffer as Badge} from '@mui/icons-material';

const SmallText = styled(Box)`
    font-size : 14px;
    vertical-align : baseline;
    & > p {
        font-size : 14px;
        margin-top:10px
    }
`

const StyledBadge = styled(Badge)`
    margin-right: 10px ;
    color : #00CC00; 
    font-size : 15px;
`

const ProductDetail = ({product}) => {
    const date = new Date(new Date().getTime()+(5 * 24 * 60 * 60 * 1000))
    console.log(date.toDateString())
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    return (
        <>
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
            <Typography>
                   Available offers :
            </Typography>          
            <SmallText>
                <Typography><StyledBadge/>10% instant discount on SBI Mastercard Debit Cards, up to ₹250 on orders of ₹2,500 and above T&C</Typography>
                <Typography><StyledBadge/>5% Cashback on Flipkart Axis Bank Card T&C</Typography>
                <Typography><StyledBadge/>Buy this product and Get Extra 10% Up to ₹500 off on Home & Kitchen Appliances Know More</Typography>
                <Typography><StyledBadge/>Purchase this product & win a surprise cashback coupon for The Big Billion Days Sale 2022 Know More</Typography>
                <Typography><StyledBadge/>Sign up for Flipkart Pay Later and get Flipkart Gift Card worth upto ₹500* Know More</Typography>
                <Typography><StyledBadge/>No Cost EMI on Bajaj Finsery EMI cart value abouve ₹2999  T&C</Typography>
            </SmallText>  
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell style={{color:'#878787'}}>Delivery : </TableCell>
                        <TableCell style={{fontWeight:600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    );
};

export default ProductDetail;