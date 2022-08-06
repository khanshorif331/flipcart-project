import { Box, styled } from '@mui/material';
import React from 'react';
import Banner from './Banner';
import NavBar from './NavBar';
import { useEffect } from 'react';
import { getProducts } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import Slide from './Slide'


const Component = styled (Box)`
    padding: 10px;
    background-color: #F2F2F2;
`




const Home = () => {
    const fetchedProducts = useSelector(state => state.getProducts)
    const {products} = fetchedProducts
    // console.log(products)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
    return (
        <>
            <NavBar></NavBar>
            <Component>
                <Banner></Banner>
                <Slide products={products}></Slide>
            </Component>
        </>
    );
};

export default Home;