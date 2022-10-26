import React from 'react'
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

export const TopHeader = () => {
  return (
    <Container>
        <a href='/'>Qui sommes nous</a>
        <a href='/'>Contactez-nous</a>
        <a>Site sécurisé</a>
        <a>Livraison</a>
    </Container>
  )
}


const Container = Styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-bottom: 1px solid #DFDFDF;
`