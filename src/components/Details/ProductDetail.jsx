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

const ColumnText = styled(TableRow)`
    vertical-align : baseline;
    font-size : 14px;
    & > td {
        font-size : 14px;
        margin-top:10px;
        border : none
    }
`

const ProductDetail = ({product}) => {
    const date = new Date(new Date().getTime()+(5 * 24 * 60 * 60 * 1000))
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

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
                    <ColumnText>
                        <TableCell style={{color:'#878787'}}>Delivery : </TableCell>
                        <TableCell style={{fontWeight:600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color:'#878787'}}>Warranty : </TableCell>
                        <TableCell>No Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color:'#878787'}}>Seller : </TableCell>
                        <TableCell>
                            <Box component='span'  style={{color:'#2874f0'}}>SuperComNet</Box>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers from ₹{product.price.cost}</Typography>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell colSpan={2}>
                            <img src={adURL} style={{width:390}} alt="flipcart points" />
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color:'#878787'}}>Description : </TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </>
    );
};

export default ProductDetail;