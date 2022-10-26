import { useEffect } from 'react'
import { useSelector, useDispatch, } from 'react-redux';
import '../css/NavBar.css';
import { Link, useNavigate, NavLink } from "react-router-dom"
import logo from '../img/axe-therm.jpeg'
import Styled from 'styled-components'
import { logoutUser } from '../features/authSlice';
import { toast } from 'react-toastify';

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';

const Navbar = () => {
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

    const handleSearch = () => {

    }

    useEffect(() => {
        _cartTotalQuantity()
    })


    return (
        <header className="header">
            <nav className="nav-bar">
                <div>
                    <Link to={`/`}>
                        <img src={logo} alt="logo Axé Thermique" />
                    </Link>
                </div>
                <div className="search-container">
                    <form>
                        <input type="text" className="search-top" placeholder='Rechercher un article, une reférence...' />
                        {/* <button onClick={() => handleSearch()}>Rechercher</button> */}
                    </form>
                </div>
                <div className="nav-bag">
                    <LinkNav>
                        <div className="nameLastNameContainer">
                            <Link to={"/my-account"}>
                                <div className="nameLastName">
                                    {auth.lastName} {auth.firstName}
                                </div>
                            </Link>

                            <div className="cart-icon">
                                <Link to={"/cart"}>
                                    <IconButton aria-label="LocalMall">
                                        <StyledBadge badgeContent={cartTotalQuantity > 0 ? cartTotalQuantity : 0} color="secondary" size="25">
                                            <LocalMallIcon fontSize="large" />
                                        </StyledBadge>
                                    </IconButton>
                                </Link>

                                {auth._id ? (
                                    <Logout onClick={() => {
                                        dispatch(logoutUser(null));
                                        toast.warning('Déconnexion réussie', { position: "bottom-left" })
                                    }}>&nbsp;&nbsp;&nbsp;
                                    </Logout>
                                ) : (
                                    <AuthLinks>
                                        <Link to='/register'>Inscription</Link>
                                        <Link to='/login'>
                                            <IconButton aria-label="LocalMall">
                                                <StyledBadge badgeContent="" color="secondary" size="25">
                                                    <PersonIcon fontSize="large" />
                                                </StyledBadge>
                                            </IconButton>
                                        </Link>
                                    </AuthLinks>
                                )}
                            </div>
                        </div>
                    </LinkNav>
                </div>
            </nav >
        </header >
    );
};

export default Navbar;


const AuthLinks = Styled.div`
a{
    &:last-child{
        margin-left:0.2rem;
        color: #000000;
    }
}
`

const Logout = Styled.div`
    color: black;
    cursor: pointer;
`

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -1,
        top: 10,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const LinkNav = Styled.div`
    color: gray;
    margin-right: 5px;
    align-items: center;
    text-transform : capitalize; //Permet de mettre la première lettre de chaque mot en majuscule
`

