import '../css/NavBar4.css'
import logo from '../img/axe-therm.jpeg'
import { useSelector, useDispatch, } from 'react-redux';
import { useEffect, useRef, useState } from 'react'
import { logoutUser } from '../features/authSlice';
import { Link, useNavigate } from "react-router-dom"
import styled2 from "styled-components";

import Badge from '@mui/material/Badge';
import { styled, createTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import blue from '@mui/material/colors/blue';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppSharpIcon from '@mui/icons-material/ExitToAppSharp';
import { useGetAllProductsQuery } from "../features/productsApi";
import { Searched } from './Searched';
import { FormSearched } from './formSearched';

const NavBar4 = () => {

    const { items: products, status } = useSelector((state) => state.products);
    // const donnees = useSelector(state => state.products)
    const { data, error, isLoading } = useGetAllProductsQuery();

    console.log('data', data);

    const [openSearched, setOpenSearched] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    const keys = ['name', 'desc', 'marque']
    const [searchText, setSearchText] = useState("")

    const btmHamburger = useRef(null)
    const navLink = useRef(null)

    useEffect(() => {

    })


    const showNavlinks = () => {
        setOpenMenu(!openMenu)
    }


    const openresultSearch = () => {
        setOpenSearched(true)
    }

    const theme = createTheme({
        palette: {
            white: "white",
        },
    });

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { cartTotalQuantity } = useSelector(state => state.cart);
    const auth = useSelector(state => state.auth);

    const _cartTotalQuantity = () => {
        return cartTotalQuantity
    }

    const lougOut = () => {
        dispatch(logoutUser(null));
        navigate('/login')
    }

    const handleSearchText = (e) => {
        let value = e.target.value;
        setSearchText(value)
    }
    console.log(searchText);

    const handleChange = e => {
        if (e.target.value.length > 2) {
            setSearchText(e.target.value);
            setOpenMenu(true)
        } else {
            setSearchText('');
        }
    }

    useEffect(() => {
        _cartTotalQuantity()
    })

    const myAcount = () => {
        return "/my-account"
        setOpenMenu(false)
    }


    return (
        <nav>
            <div className="topMenu">
                <a href={`/`}>
                    <div className="container-logo">
                        <img className="logo" src={logo} alt="logo Axé Thermique" />
                    </div>
                </a>
                <FormSearched />
                <div className="panierAndMenuHamburger">
                    {!auth._id ? (
                        <Link to={"/login"}>
                            <span className="infos-user">
                                Me connectez
                            </span>
                        </Link>
                    ) : (
                        // <Link to={"/my-account"}>
                        <a href="/my-account">
                            <span className="infos-user">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                </svg>
                                {auth.lastName} {auth.firstName}
                            </span>
                        </a>
                        // </Link>
                    )}

                    <div className="SearchSharpIcon">
                        <SearchSharpIcon color="primary">

                        </SearchSharpIcon>
                    </div>


                    <a href={"/cart"}>

                        <div className="iconButton">
                            <IconButton aria-label="LocalMall" >
                                <StyledBadge badgeContent={cartTotalQuantity > 0 ? cartTotalQuantity : 0} color="error" size="25">
                                    <LocalMallIcon fontSize="24" color="blue" sx={{ color: "black" }} />
                                </StyledBadge>
                            </IconButton>
                        </div>
                    </a>
                    <div className="menu-hamburger">

                        {openMenu ?
                            <CloseSharpIcon onClick={showNavlinks}>

                            </CloseSharpIcon>
                            :
                            <MenuIcon onClick={showNavlinks}>

                            </MenuIcon>
                        }
                    </div>
                </div>
            </div>
            <div className={`barNav ${openMenu ? "barNav " : "barNav-none"}`}>

                <div className={`nav-links  ${openMenu ? "barNav-mobile" : 'barNav-none'}`} >

                    {auth._id ?
                        <a href="/my-account" className="nomUser">
                            Bonjour, {auth.lastName} {auth.firstName}
                        </a>
                        :
                        <a href={'/login'}>
                            <span className="nomUser">
                                Connectez-vous
                            </span>
                        </a>}


                    <ul>
                        {/* <li> <a href="/spare-parts">Pièces détachés</a> <ChevronRightSharpIcon></ChevronRightSharpIcon></li>
                        <li> <a href="/destocking">Déstockage</a><ChevronRightSharpIcon></ChevronRightSharpIcon></li>
                        <li> <a href="">Pompes à chaleur</a><ChevronRightSharpIcon></ChevronRightSharpIcon></li>
                        <li> <a href="">Pièces détachés</a><ChevronRightSharpIcon></ChevronRightSharpIcon></li>
                        <li> <a href="">Déstockage</a><ChevronRightSharpIcon></ChevronRightSharpIcon></li>
                        <li> <a href="">Pompes à chaleur</a><ChevronRightSharpIcon></ChevronRightSharpIcon></li> */}
                        {/* <div className="footer">

                            {auth._id ?
                                <h6>
                                    <a href={`${myAcount()}`}><PersonIcon></PersonIcon>Mon compte</a>
                                </h6>
                                :
                                null}



                            {auth._id ?
                                <h6><ExitToAppSharpIcon></ExitToAppSharpIcon>
                                    <a href="" onClick={() => dispatch(logoutUser(null))}>
                                        Me déconnecter
                                    </a>
                                </h6>

                                :
                                null
                            }
                        </div> */}
                    </ul>
                </div>

            </div>
            <form className="form-mobile">
                <div className='flex-input-iconSearch'>
                    <input type="search" className="" placeholder={`${auth._id ? `Qu'et-ce qui vous ferait plaisir ${auth.lastName} ? ... Articles, références...` : "Rechercher un article, une référence..."}`} />
                    <SearchSharpIcon className="search-icon"></SearchSharpIcon>
                </div>
            </form>
        </nav>
    )
}


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -1,
        top: 10,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const ResultSearched = styled2.div`
color: #6d4f4f;

`
export default NavBar4