import { Box, styled } from '@mui/material';
import React from 'react';
import Banner from './Banner';
import NavBar from './NavBar';
import { useEffect } from 'react';
import { getProducts } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import Slide from './Slide'
import MidSlide from './MidSlide';
import MidSection from './MidSection';


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
                <MidSlide products={products} title='Deal of the Day' timer={true}></MidSlide>
                <MidSection></MidSection>
                <Slide products={products} title='Discounts for You' timer={false}></Slide>
                <Slide products={products} title='Suggested Items' timer={false}></Slide>
                <Slide products={products} title='Top Selection' timer={false}></Slide>
                <Slide products={products} title='Recommended Items' timer={false}></Slide>
                <Slide products={products} title='Trending Offers' timer={false}></Slide>
                <Slide products={products} title="Season's top Picks" timer={false}></Slide>
                <Slide products={products} title="Top Deals on Accessories" timer={false}></Slide>
            </Component>
        </>
    );
};

export default Home;