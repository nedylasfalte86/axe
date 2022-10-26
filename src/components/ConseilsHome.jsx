import React from 'react'
import styled from "styled-components";

import { Device } from "../helpers/device"
import { ButtonValidate } from "../helpers/ButtonValidate"

const ConseilsHome = () => {
    return (
        <Container>
            <Section>
                <Aticle>
                    <Prouct >
                        <Image src="https://le-cdn.website-editor.net/s/382c5d15129a414e9afb600d2a42c92b/dms3rep/multi/opt/jaruek150600093-366w.jpg?Expires=1666413718&Signature=kyWLNxT5ZXOaKfSnPclbm8gu60xai6UWRKEaMteI0xD0Q9LyCH9~fUjkynsPNmyISQO-whH-QsSYKXo0Vm89xiiKEUH5cT4vZjtsqo3O~XyfxRACP2GR6-WQ4pNk3RdpUA~HY9SIzpqs5xqweDgAMiKfePUC-aLsDI95N2z42U1FJKJXiS-j8zV8Cyv3-EKC0Ch5PiZU4qM-Nej-zKgkBd0oZ72dM4dS3ouS0PxfB9mK75DlADUo3aIP4ax6HtXHecf-Ac1mJsuSJ2IvZJPvk9yVtI7~-rAZLAfiNO0-NbeT~azFjllUqkAjKk44H7OHxXKMqKjfA6fbhOMqHCAQbg__&Key-Pair-Id=K2NXBXLF010TJW" alt=""></Image>
                        <Title>Entretien chauffage gaz et fioul</Title>
                        <Description>
                            Que ce soit pour le chauffage gaz ou fioul, nous assurons la mise en service , l'entretien et le dépannage.
                        </Description>

                        <ButtonValidate btnTitle='En savoir plus'></ButtonValidate>
                    </Prouct>
                </Aticle>
            </Section>
            <Section>
                <Aticle>
                    <Prouct >
                        <Image src="https://le-cdn.website-editor.net/s/382c5d15129a414e9afb600d2a42c92b/dms3rep/multi/opt/jaruek150600093-366w.jpg?Expires=1666413718&Signature=kyWLNxT5ZXOaKfSnPclbm8gu60xai6UWRKEaMteI0xD0Q9LyCH9~fUjkynsPNmyISQO-whH-QsSYKXo0Vm89xiiKEUH5cT4vZjtsqo3O~XyfxRACP2GR6-WQ4pNk3RdpUA~HY9SIzpqs5xqweDgAMiKfePUC-aLsDI95N2z42U1FJKJXiS-j8zV8Cyv3-EKC0Ch5PiZU4qM-Nej-zKgkBd0oZ72dM4dS3ouS0PxfB9mK75DlADUo3aIP4ax6HtXHecf-Ac1mJsuSJ2IvZJPvk9yVtI7~-rAZLAfiNO0-NbeT~azFjllUqkAjKk44H7OHxXKMqKjfA6fbhOMqHCAQbg__&Key-Pair-Id=K2NXBXLF010TJW" alt=""></Image>
                        <Title>Entretien chauffage gaz et fioul</Title>
                        <Description>
                            Que ce soit pour le chauffage gaz ou fioul, nous assurons la mise en service , l'entretien et le dépannage.
                        </Description>

                        <ButtonValidate btnTitle='En savoir plus'></ButtonValidate>
                    </Prouct>
                </Aticle>
            </Section>

        </Container>
    )
}


const Container = styled.div`
    @media ${Device.mobileS}{
        width: 100%;
        /* background-color:green; */
        display: grid;
        grid-template-columns: 1fr;
        margin-top: 2rem;
        flex-wrap:row wrap;
    }

    @media ${Device.laptop}{
        width: 100%;
        /* background-color:red; */
        display: flex;
        margin-top: 2rem;
        flex-wrap:row wrap;
    }
`

//Section
const Section = styled.section`
        @media ${Device.mobileS}{
        width: 100%;
        /* background-color:orange; */
        flex-wrap:row wrap;
        margin-bottom: 2rem;
    }

    @media ${Device.laptop}{
        width: 100%;
        /* background-color:purple; */
        flex-wrap:row wrap;
    }
`

const Aticle = styled.article`

`
const Prouct = styled.div`
`

const Title = styled.h4`

`

const Image = styled.img`
    @media ${Device.mobileS}{
        width: 100%;
    }
`

const Description = styled.span`
`






export default ConseilsHome