import '../css/Home.css';
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { addToCart } from "../features/cartSlice"
import Modal from 'react-modal';
import {NavBar5} from '../components/NavBar5'
import Styled from 'styled-components'
import { Device } from '../helpers/device'
import { useGetAllProductsQuery } from "../features/productsApi";
import SliderHome from './SliderHome';
import BannerHome from './bannerHome';
import { BannerHomme2 } from './BannerHomme2';
import ConseilsHome from './ConseilsHome';
import ProduitsAlaUne from './ProduitsAlaUne';
import { CategoriesHome } from './CategoriesHome';

Modal.setAppElement();

const Home = () => {
    const navigate = useNavigate()
    // const { items: products, status } = useSelector((state) => state.products);

    const dispatch = useDispatch();

    const { data, error, isLoading } = useGetAllProductsQuery();

    console.log("data",data);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
        navigate('/cart')
    };

    return <div className="home-container">
        {isLoading ? (
            <p>Loading...</p>
        ) : error ? (
            <p>Une erreur est survenue...</p>
        ) : (<>
                    <NavBar5 />

            <SliderHome />
            <ProduitsAlaUne />
            <Products >

                {data?.slice(0, 18).map((product) => {
                    return (
                        <div key={product._id} className="product">
                            <Title>{product.name.length > 20 ? product.name.slice(0, 40) + '...' : product.name}</Title>
                            <Link
                                to={`product/${product.name.replace(/\s+/g, '-').trim()}`}
                                state={product}
                            >
                                <Image src={product.image.url} alt={product.name}></Image>
                            </Link>
                            <div className="details">
                                <Description>{product.desc.length > 15 ? product.desc.substring(0, 53 - 3) + '...' : product.desc}</Description>
                            </div>

                            {/* {product.marque != null ?
                                <Marque>
                                    Marque: <a href="/">{product.marque}</a>
                                </Marque>
                                : null
                            } */}


                            <div className="cartAndPrice">
                                <Price className="price">{product.price.toFixed(2)} €</Price>
                                <button onClick={() => handleAddToCart(product)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    )
                })
                }
            </Products>
            <CategoriesHome/>
            <BannerHome />

            {/* <ConseilsHome /> */}
            <BannerHomme2 />
        </>)}
    </div>
}

export default Home;


const Products = Styled.div`
    @media ${Device.mobileS}{
            font-size: 18px;
            /* background: red; */
            margin: 0 1rem;
    }
    @media ${Device.tablet}{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: space-evenly;
        flex-wrap: wrap;
        margin-top: 2rem;
        margin: 0 3rem;

    }
    @media ${Device.laptop}{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr ;
        justify-content: space-evenly;
        flex-wrap: wrap;
        margin-top: 2rem;
        margin: 0 3rem;

        
    }
    @media ${Device.laptopL}{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr ;
        justify-content: space-evenly;
        flex-wrap: wrap;
        margin-top: 2rem;
        margin: 0 18rem;
    }
`

const Title = Styled.h4`
    @media ${Device.mobileS}{
        font-size: 15px;
        font-weight: 900;
        text-decoration:none; 
        color: rgb(0, 0, 0);
        text-transform: uppercase;
    }
    @media ${Device.laptop}{
        font-size: 16px;
        font-weight: 900;
        text-decoration:none; 
        color: rgb(0, 0, 0);
    }
    @media ${Device.laptopL}{
        font-size: 14px;
        font-weight: 900;
        text-decoration: none;
        color: rgb(0, 0, 0);
    }
`

const Image = Styled.img`
        max-width: 70%;
    /* height: 70%; */
    margin-left: auto;
    margin-right: auto;
`

const Description = Styled.span`
    @media ${Device.mobileS}{
        font-size:14px
    }
    @media ${Device.tablet}{
        font-size:14px


    }
    @media ${Device.laptop}{
        font-size:20px
    }
    @media ${Device.laptopL}{
        font-size:15px
    }

`

const Marque = Styled.span`
    font-size: 14px;
    margin-top:2rem;
    color: rgb(0, 0, 0);
    text-decoration:none;
`

const Price = Styled.span`
    margin-top: 1px;
    font-weight: bold;
    align-content: center;
`