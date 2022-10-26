import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";
import { url, setHeaders } from '../../features/api'
import { render } from 'react-dom';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';

import { PostList, PostEdit, PostCreate, PostIcon } from './posts';
import { ProductsList, ProductEdit, ProductCreate, ProductIcon } from './products';
import { useGetAllProductsQuery } from "../../features/productsApi";

const Summary = () => {
    const navigate = useNavigate();
    const auth = useSelector((state => state.auth))

    const dataProvider = restProvider(`${url}`)

    const { data, error, isLoading } = useGetAllProductsQuery();



    useEffect(() => {
        !auth.isAdmin && navigate('/NotFound');
    })

    render(
        <Admin dataProvider={dataProvider}>
            <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
            <Resource name="products" list={ProductsList} edit={ProductEdit} create={ProductCreate} icon={ProductIcon} />
        </Admin>,
        document.getElementById('root')
    )
}

export default Summary;

