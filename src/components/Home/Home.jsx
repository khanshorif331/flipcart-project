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
                <Slide products={products} title='Deal of the Day'></Slide>
                <Slide products={products} title='Discounts for You'></Slide>
                <Slide products={products} title='Suggested Items'></Slide>
                <Slide products={products} title='Top Selection'></Slide>
                <Slide products={products} title='Recommended Items'></Slide>
                <Slide products={products} title='Trending Offers'></Slide>
                <Slide products={products} title="Season's top Picks"></Slide>
                <Slide products={products} title="Top Deals on Accessories"></Slide>
            </Component>
        </>
    );
};

export default Home;