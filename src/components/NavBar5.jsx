import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, } from 'react-redux';
import logo from '../img/axe-therm.jpeg'
import '../css/NavBar5.css'
import { Link } from 'react-router-dom'
import Styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { Device } from '../helpers/device';
import Modal from 'react-modal';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalMallSharpIcon from '@mui/icons-material/LocalMallSharp';
import QuestionMarkSharpIcon from '@mui/icons-material/QuestionMarkSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import { useGetAllProductsQuery } from "../features/productsApi";
import AdminPanelSettingsSharpIcon from '@mui/icons-material/AdminPanelSettingsSharp';

const customStyles = {
    content: {
        top: '22%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: "999",
        width: '60%'
    },
};

// Modal.setAppElement('#App');

export const NavBar5 = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState(false);
    const { cartTotalQuantity } = useSelector((state) => state.cart);
    const auth = useSelector(state => state.auth);
    const { data, error, isLoading } = useGetAllProductsQuery();
    const [dataResultOpen, setDataResultOpen] = useState(false);
    const [openNavLinks, setOpenNavLinks] = useState(true);

    const handleChange = e => {
        const searchText = e.target.value;
        if (searchText.length > 2) {
            setSearchText(e.target.value);
            setDataResultOpen(true);
            setIsOpen(true)
        } else if (searchText.length < 3) {
            setSearchText('');
            setDataResultOpen(false);
            setOpenNavLinks(true)

        }
    }

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const _cartTotalQuantity = () => {
        return cartTotalQuantity
    }

    useEffect(() => {
        _cartTotalQuantity()
    })

    return (
        <NavBar>
            <div className="Left">
                <a href="/"><img className="logo" src={logo} alt="logo Axé Thermique" /></a>
                <div className="devis">
                    <Link to="/">
                        <EmailSharpIcon fontSize="large" /><br />
                        Contact
                    </Link>

                </div>
            </div>

            <Center>
                <Form>
                    <Input onChange={handleChange} type='search' placeholder={auth._id ? ` Qu'est ce qui vous ferrait plaisir ${auth.firstName} ?` : "Rchercher un article, une référence..."} />
                </Form>

                {/* <div className='links'> */}

                <div className={`menu-area  ${openNavLinks ? 'menu-area-hiden' : "menu-area"}`}>
                    <ul >
                        <li>Pièces électriques
                            <ul className="dropdown">
                                <li>Service 1</li>
                                <li>Service 2</li>
                                <li>Service 3</li>
                                <li>Service 4</li>
                            </ul>
                        </li>
                        <li>Pièces frigorifiques
                            <ul className="dropdown">
                                <li>Service 1</li>
                                <li>Service 2</li>
                                <li>Service 3</li>
                                <li>Service 4</li>
                            </ul>
                        </li>
                        <li>Pièces Hydrauliques
                            <ul className="dropdown">
                                <li>Service 1</li>
                                <li>Service 2</li>
                                <li>Service 3</li>
                                <li>Service 4</li>
                            </ul>
                        </li>
                        <li>Pièces carénages
                            <ul className="dropdown">
                                <li>Service 1</li>
                                <li>Service 2</li>
                                <li>Service 3</li>
                                <li>Service 4</li>
                            </ul>
                        </li>
                        <li>Les accéssoires
                            <ul className="dropdown">
                                <li>Service 1</li>
                                <li>Service 2</li>
                                <li>Service 3</li>
                                <li>Service 4</li>
                            </ul>
                        </li>
                        <li>Bons plans
                            <ul className="dropdown">
                                <li>Service 1</li>
                                <li>Service 2</li>
                                <li>Service 3</li>
                                <li>Service 4</li>
                            </ul>
                        </li>
                        <li>Entretiens, SAV
                            <ul className="dropdown">
                                <li>Service 1</li>
                                <li>Service 2</li>
                                <li>Service 3</li>
                                <li>Service 4</li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </Center>

            <div className="Rigth">
            <Link to="/">
                    <QuestionMarkSharpIcon fontSize="large" /><br />
                    Une question ?
                </Link>
                {auth.isAdmin ? (
                    <Link to="/admin">
                    <AdminPanelSettingsSharpIcon fontSize="large" /><br />
                    Admin
                </Link>
                ): null}

                <Link to="/my-account">
                    <PersonOutlineOutlinedIcon fontSize="large" /><br />
                    {auth._id ? "Mon compte" : "Me connecter"}
                </Link>

                <Link to="/cart">
                    <LocalMallSharpIcon fontSize="large" /><br />
                    {cartTotalQuantity ? _cartTotalQuantity() : "Mon panier"}
                </Link>
            </div>
            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className={`data-result  ${dataResultOpen ? 'null' : 'flexSearched-data-results'}`} >
                    {data?.filter((val) => {
                        return val.name.toLowerCase().includes(searchText.toLocaleLowerCase()) || val.desc.toLowerCase().includes(searchText.toLocaleLowerCase())
                    }).map(article => {
                        return <div className="flexSearched" key={article._id}>
                            <a href={`/product/${article._id}`}>{article.name}</a>
                        </div>;
                    })}
                </div>
            </Modal>
        </NavBar>

    )


}


const NavBar = Styled.nav`
    height:10vh;
    margin-bottom: 2.5rem;
    background-color: color.red;
    width: 100%;
    display: flex;
`

const Left = Styled.div`
    
`
const Center = Styled.div`
    /* background-color: #ddda1a; */
    height: 100%;
    width: 60%;
    z-index: 1000;

`
const Rigth = Styled.div`
    
`
const Form = Styled.form`
    /* background-color: #ec0fa2; */
    height: 40%;
    margin:1.8rem;
    border:none;
`

const Input = Styled.input`
    width: 100%;
    height:45px;
    background: #dfdfdf;
    outline: none;
    border-radius: 10px;
    border: none;
    padding:  1em;
    color:red;
    font-weight: bold;

    &:hover{
        color:black;
    }
`

const Links = Styled.div`
    text-align: center;
`

const ContainerRigth = Styled.div`
    display: flex;
    justify-content: center;
    background-color: orange;
    height: 100%;
`
const MonCompte = Styled.div`
    background-color:grey;
    width: 50%;
    height: 100%;
    text-align: center;

    &a:{
        color: black
    }

`

const MonPanier = Styled.div`
    background-color: #ce1010;
    width: 50%;
    height: 100%;
    text-align: center;
`
