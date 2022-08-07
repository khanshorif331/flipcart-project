import { Box ,Button} from '@mui/material';
import React from 'react';


const ActionItem = ({product}) => {
    return (
        <Box>
            <img src={product.detailUrl} alt="" />
            <Button variant='contained'>Add to Cart</Button>
            <Button variant='contained'>Buy Now</Button>
        </Box>
    );
};

export default ActionItem;