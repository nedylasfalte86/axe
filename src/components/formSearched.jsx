import React from 'react'
import { useSelector, useDispatch, } from 'react-redux';
import { useEffect, useRef, useState } from 'react'
import { useGetAllProductsQuery } from "../features/productsApi";
import styled2 from "styled-components";
import { Searched } from './Searched';
import { Link, useNavigate } from 'react-router-dom';


export const FormSearched = () => {
    const keys = ['name', 'desc', 'marque']
    const [searchText, setSearchText] = useState("")

    const auth = useSelector(state => state.auth)

    const { items: products, status } = useSelector((state) => state.products);
    const { data, error, isLoading } = useGetAllProductsQuery();

    const [dataResultOpen, setDataResultOpen] = useState(false);
    const [difSearch, setdifSearch] = useState("Aucun résultat trouvé")

    const handleChange = e => {
        const searchText = e.target.value;
        if (searchText.length > 2) {
            setSearchText(e.target.value);
            setDataResultOpen(true)
        } else if (searchText.length < 3) {
            setSearchText('');
            setDataResultOpen(false)
        }
    }

    const closeResults = () => {
        setDataResultOpen(false)
    }
    const onInput = (e) => {
        if (searchText.length < 1) {
            setDataResultOpen(false)
        }
    }
    // const viewProduct = () => {
    //     return "/my-account"
    //     setOpenMenu(false)
    // }
    const viewProduct = () => {
        return "/product/${val.name.replace(/\s+/g, '-').trim()}"
        setDataResultOpen(false)
    }

    return (
        <div className="container-form ">
            <form>
                <div className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    <input onInput={ onInput} onChange={handleChange} type="search" className="" placeholder={`${auth._id ? `Qu'et-ce qui vous ferait plaisir ${auth.lastName} ? ... Articles, références...` : "Rechercher un article, une référence..."}`} />
                    {/* <input type="submit" value="Rechercher" /> */}
                </div>
            </form>

            {data ? <containerResultSearch className={`data-result  ${dataResultOpen ? 'null' : 'flexSearched-data-results '}`} >
                {data?.filter((val) => {
                    return val.name.toLowerCase().includes(searchText.toLocaleLowerCase()) || val.desc.toLowerCase().includes(searchText.toLocaleLowerCase())
                }).map((val) => {
                    return <div className="component-searched">
                        <Link
                            to={`product/${val.name.replace(/\s+/g, '-').trim()}`}
                            state={val}
                        >
                            <Searched result={val} />
                        </Link>
                    </div>
                })}
            </containerResultSearch> : null}
        </div>

    )
}


const containerResultSearch = styled2.div`

`