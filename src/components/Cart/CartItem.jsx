import { Box, Typography,styled, Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addElipsis } from '../../utils/common-utils';
import ButtonGroup from './ButtonGroup';
import { removeFromCart } from '../../redux/actions/cartAction';


const Compoonent = styled(Box)`
    border-top : 1px solid #f0f0f0 ;
    display : flex ;
    background : #fff;
`

const LeftComponent = styled(Box)`
    margin : 20px ;
    display : flex ; 
    flex-direction : column ;
`

const SmallText = styled(Typography)`
    color:#878787 ; 
    font-size : 14px ;
    margin-top : 10px ;
`

const Remove = styled(Button)`
    margin-top : 20px;
    font-size : 16px ;
    color: #000;
    font-weight : 600;
`

const CartItem = ({item}) => {
    const dispatch = useDispatch()
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id))
    }
 
    return (
        <Compoonent>
            <LeftComponent>
                <img src={item.url} style={{height:110,width:110}} alt="product" />
                <ButtonGroup></ButtonGroup>
            </LeftComponent>
            <Box style={{margin : 20}}>
                <Typography>{addElipsis(item.title.longTitle)}</Typography>
                <SmallText>Seller : RetailNet
                    <Box component='span'><img src={fassured} style={{width:50,marginLeft:10}} alt="Flipcart asssured" /></Box>
                </SmallText>
                <Typography style={{margin: '20 0'}}>
                    <Box component='span' style={{fontWeight:600,fontSize:18}}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp; 
                    <Box component='span' style={{color:'#878787'}}><strike>{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                    <Box component='span' style={{color:'#388E3C'}}>{item.price.discount}</Box>
            </Typography>
            <Remove onClick={()=>removeItemFromCart(item?.id)}>Remove</Remove>
            </Box>
        </Compoonent>
    );
};

export default CartItem;