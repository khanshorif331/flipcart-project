import React from 'react';
import Carousel from "react-multi-carousel";

import 'react-multi-carousel/lib/styles.css';
import { Box, Typography,styled } from '@mui/material';



const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Component = styled(Box)`
    margin-top: 10px;
    background : #FFFFFF
`

const Deal = styled(Box)`
    padding: 15px 20px
`

const Slide = ({products}) => {
    return (
        <Component>
            <Deal>
                <Typography>Deal of the Day</Typography>
            </Deal>
            <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            centerMode={true}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            containerClass="carousel-container"
        >
            {
                products.map(product => {
                    return (
                        <img src={product.url} alt='product'></img>
                    )
                })
            }
        </Carousel>
        </Component>
    );
};

export default Slide;