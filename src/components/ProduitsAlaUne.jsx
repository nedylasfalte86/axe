import React from 'react'
import Styled from 'styled-components';
import { Device } from '../helpers/device';

const ProduitsAlaUne = () => {
    return (
        <Container>
            <Paragraphe >
                <span>Produits en une:</span>
            </Paragraphe>
        </Container>
    )
}
const Container = Styled.div`
        @media ${Device.laptopL}{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr ;
        justify-content: space-evenly;
        flex-wrap: wrap;
        margin-top: 2rem;
        margin: 0 18rem;
        margin-top: 3rem;        
    }
`

const Paragraphe = Styled.h2`
    margin-bottom: 0.5rem;
    text-align: center;
    background-color:  #F42B00;
    color: #FFFFFF;
    border-top-right-radius: 15px;
    border: none
`

export default ProduitsAlaUne