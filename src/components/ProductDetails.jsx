import React from 'react';
import { useLocation } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom'
import Title from '../helpers/Title';
import '../css/ProductDetails.css';
import { Button } from '@mui/material';
import { useDispatch, } from "react-redux";
import { addToCart } from "../features/cartSlice"
import { useGetAllProductsQuery } from "../features/productsApi";


const ProductDetails = (props) => {
    const location = useLocation()
    // console.log(location);

    const product = location.state;

    // console.log(useParams);

    const navigate = useNavigate()
    // const { items: products, status } = useSelector((state) => state.product);

    const { data, error, isLoading } = useGetAllProductsQuery();

    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart(product));
        navigate('/cart')
    };
    return (
        <div className="container-product">
            <div className="flex">
                <div className="left">
                    <img src={location.state.image.url} />
                </div>
                <span className="center">
                    <Title className='title' name={location.state.name}>{props.name}</Title>
                    <div className="description">
                        <p>{location.state.desc}</p>
                    </div>
                </span>
                <span className="right">
                    <div>
                        <span>Produit neuf</span>
                    </div>
                    <div>
                        <span>TVA inclus dans le prix.</span>
                    </div>
                    <span className="product-detail-price">{location.state.price} €</span>
                    <div>
                        <Button onClick={() => handleAddToCart()} className='btn-add-cart'>Ajouter au panier</Button>
                        <div>
                            <span>Il en reste 4 en stock</span>
                        </div>
                    </div>
                </span>

            </div>
        </div>
    )
}

export default ProductDetails