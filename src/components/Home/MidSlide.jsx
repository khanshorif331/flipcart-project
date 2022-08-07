import { Box,styled } from '@mui/material';
import React from 'react';
import Slide from './Slide';

const Component = styled(Box)`
    display: flex;
`
const LeftComponent = styled(Box)`
    width: 83%;
`
const RightComponent = styled(Box)(({theme})=> ({
    background: '#FFFFFF',
    padding: 5,
    marginTop:'10px',
    marginLeft: '10px',
    width: '17%'  ,
    textAlign: 'center',
    [theme.breakpoints.down('md')]:{
        display: 'none'
    }
}));

const MidSlide = ({products,title, timer}) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    return (
        <Component>
            <LeftComponent>
                <Slide
                    products={products}
                    title={title}
                    timer={timer}
                >
                </Slide>
            </LeftComponent>
            <RightComponent>
                <img src={adURL} style={{width:207}} alt="side slider add" />
            </RightComponent>
        </Component>
    );
};

export default MidSlide;