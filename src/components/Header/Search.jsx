import { Box, InputBase,styled } from '@mui/material';
import React from 'react';


const SearchContainer = styled(Box)`
    background-color: #fff;
`

const InputSearchBase = styled(InputBase)`

`


const Search = () => {
    return (
        <SearchContainer>
            <InputSearchBase>
        
            </InputSearchBase>
        </SearchContainer>
    );
};

export default Search;