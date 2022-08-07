import React from 'react';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom'
import {getProductDetails} from '../../redux/actions/productActions'

const DetailView = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    useEffect(()=> {
        dispatch(getProductDetails(id))
    },[dispatch,id])
    return (
        <div>
            <h1>HHello</h1>
        </div>
    );
};

export default DetailView;