import '../css/navbarBottom.css'
import logo from '../img/axe-therm.jpeg'
import { useSelector, useDispatch, } from 'react-redux';
import { useEffect } from 'react'
import { logoutUser } from '../features/authSlice';

import { Link, useNavigate } from "react-router-dom"

import Badge from '@mui/material/Badge';
import { styled, createTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import blue from '@mui/material/colors/blue';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import NavBarSouth from './navBar-south';

const NavBarBottom = () => {

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

    const handleSearch = () => {

    }

    useEffect(() => {
        _cartTotalQuantity()
    })

    return (
        <header className="header">
            <nav>
                <Link to={`/`}>
                    Account
                </Link>
                
                <div className="nav-liens">

                    {/* <a href="#">Pièces détachés</a>
                    <a href="#">Destockage</a>
                    <a href="#">Pompes à chaleur</a> */}

                    <Link to={"/cart"}>
                        <IconButton aria-label="LocalMall">
                            <StyledBadge badgeContent={cartTotalQuantity > 0 ? cartTotalQuantity : 0} color="error" size="25">
                                <LocalMallIcon fontSize="large" color="blue" />
                            </StyledBadge>
                        </IconButton>
                    </Link>

                </div>
            </nav>
        </header>

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
export default NavBarBottom