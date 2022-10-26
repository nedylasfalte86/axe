import React from 'react'

import Styled from 'styled-components'
import { Device } from '../helpers/device';


export const BannerHomme2 = () => {
    return (
        <Container>
            <Flex>
                <Section style={{ display: 'flex', alignSself: 'center' }}>
                    <img style={{ width: 44, height: 44 }} src="https://cdn-icons-png.flaticon.com/512/4947/4947506.png" />
                    <article>
                        <H2>EN STOCK</H2>
                        <Span>+10 000 pièces</Span>
                    </article>
                </Section>
                <Section style={{ display: 'flex', alignSself: 'center' }}>
                    <img style={{ width: 44, height: 44 }} src="https://cdn-icons-png.flaticon.com/512/1187/1187577.png" />
                    <article>
                        <H2>COMPATIBILITÉ </H2>
                        <Span>avec +20 marques</Span>
                    </article>
                </Section>
                <Section style={{ display: 'flex', alignSself: 'center' }}>
                    <img style={{ width: 44, height: 44 }} src="https://cdn-icons-png.flaticon.com/512/2331/2331115.png" />
                    <article>
                        <H2>LIVRAISON</H2>
                        <Span>Gratuite</Span>
                    </article>
                </Section>
                <Section style={{ display: 'flex', alignSself: 'center' }}>
                    <img style={{ width: 44, height: 44 }} src="https://cdn-icons-png.flaticon.com/512/3922/3922182.png" />
                    <article>
                        <H2>Paiement en plusieurs fois</H2>
                        <Span>Jusqu'a 24 mois</Span>
                    </article>
                </Section>
                <Section style={{ display: 'flex', alignSself: 'center' }}>
                    <img style={{ width: 44, height: 44 }} src="https://cdn-icons-png.flaticon.com/128/3401/3401621.png" />
                    <article>
                        <H2>INSTALLATION</H2>
                        <Span>via un réseau d'experts</Span>
                    </article>
                </Section>
            </Flex>
        </Container>
    )
}

const Container = Styled.div`
    width: 100%;
    border-top: 1px solid #DFDFDF;
    border-bottom: 1px solid #DFDFDF;
    align-self: center;
    margin-top:5rem;

    @media ${Device.mobileS}{
        width: 100%;
    /* background-color: green; */
}
    @media ${Device.mobileM}{
        width: 100%;
    /* background-color: #dbd4db; */
}

    @media ${Device.mobileL}{
        width: 100%;
    /* background-color: #dae905; */
}
    @media ${Device.tablet}{
        width: 100%;
    /* background-color: #461010; */
}
`

const Flex = Styled.div`
    padding: 1rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media ${Device.mobileS}{
        width: 100%;
    /* background-color: green; */
    /* align-items: center; */
    text-align: center;
    /* flex-direction: column; */
    /* justify-content: center; */
}

`

const Section = Styled.section`
margin: 0 1rem;

@media ${Device.mobileS}{
    /* background-color: green; */
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: 1rem 0;

}
`

const Img = Styled.img`
    width: 100%;
    height:24px
`

const H2 = Styled.h2`
    color: rgb(214, 47, 47);
    margin: 0 1rem;
    @media ${Device.tablet}{
        font-size: 18px;

}
`

const Span = Styled.span`
    font-weight: 900;
    fontSize: 352px
`