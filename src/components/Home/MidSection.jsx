import { Grid,styled } from '@mui/material';
// import { width } from '@mui/system';
import React from 'react';
import {imageURL} from '../../constants/data'


const Wrapper = styled(Grid)`
    margin-top: 10px;
    justify-content: space-between;
`

const Image = styled('img')({
    marginTop : '10px' ,
    width : '100%',
    display : 'flex',
    justifyContent : 'space-between',
})

const MidSection = () => {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

    return (
        <>
            <Wrapper lg={12} sm={12} md={12} xs={12} container>
            {
                imageURL.map(image=>{
                    return (
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <img src={image} style={{width:'100%'}} alt='midsection imaage'></img>
                        </Grid>
                    )
                })
            }
            </Wrapper>
            <Image src={url} alt="covid" />
        </>
    );
};

export default MidSection;