import { Box, Typography } from '@mui/material';
import React from 'react';

const TotalView = ({cartItems}) => {
    return (
        <Box>
            <Box>
                <Typography>PRICE DETAILS</Typography>
            </Box>
            <Box>
                <Typography>Price ({cartItems?.length} item)
                    <Box component='span'>₹100</Box>
                </Typography>
                <Typography>Discount ({cartItems?.length} item)
                    <Box component='span'>-₹100</Box>
                </Typography>
                <Typography>Delivery Charges ({cartItems?.length} item)
                    <Box component='span'>₹100</Box>
                </Typography>
                <Typography>Total Amount ({cartItems?.length} item)
                    <Box component='span'>₹100</Box>
                </Typography>
                <Typography>You will save ₹100 on this order.</Typography>
            </Box>
        </Box>
    );
};

export default TotalView;