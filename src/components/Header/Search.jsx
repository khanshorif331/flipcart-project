import { Box, InputBase,List,ListItem,styled } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

import {useSelector,useDispatch} from 'react-redux'
import {getProducts} from '../../redux/actions/productActions'
import { useEffect } from 'react';

const SearchContainer = styled(Box)`
    background-color: #fff;
    width: 38%;
    border-radius: 2px;
    margin-left: 10px;
    display: flex;
`

const InputSearchBase = styled(InputBase)`
    padding-left: 10px;
    width: 100%;
    font-size: unset;
`

const SearchIconWrapper = styled(Box)`
    color: blue;
    padding : 5px;
    display: flex
`


const Search = () => {
    const [text,setText] = useState('')
    const dispatch = useDispatch()
    const {products} = useSelector(state => state.getProducts)

    useEffect( () => {
        dispatch(getProducts())
    },[dispatch])

    const getText = (text) => {
        setText(text)
    }
    return (
        <SearchContainer>
            <InputSearchBase
            placeholder='Search for products, brands and more'
            onChange={(e) => getText(e.target.value)}
            >
            </InputSearchBase>
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
            {
                text && 
                <List>
                    {
                        products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => {
                            return <ListItem key={product.id}>
                                {product.title.longTitle}
                            </ListItem>
                        })
                    }
                </List>
            }
        </SearchContainer>
    );
};

export default Search;