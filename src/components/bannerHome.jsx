import styled from 'styled-components'
import '../css/bannerHome.css'
import { Avatar } from '@mui/material'

const BannerHome = () => {
    return (
        <BannerContainer>
            <div className="flex-banner">
                <div className="left">
                    <h3>
                        Besoin d'un conseil ?
                    </h3>
                    <p>
                        Besoin de conseils techniques ?
                        Notre équipe de spécialistes se tient à votre disposition du lundi au vendredi de 8h30 à 12h30 et de 13h30 à 17h au
                        <span className="span-banner"> 0678334344</span>
                    </p>
                </div>
                <div className="rigth">
                    <h3>
                        Marques populaires
                    </h3>
                    <div className="container-avatar">
                        <Avatar className="avatar" alt="Remy Sharp" src="https://www.espares.fr/images/pubs/content/homepages/espares-responsive/fr/shops/bosch.jpg" />
                        <Avatar className="avatar" alt="Remy Sharp" src="https://www.espares.fr/images/pubs/content/homepages/espares-responsive/fr/shops/karcher.jpg" />
                        <Avatar className="avatar" alt="Remy Sharp" src="https://www.espares.fr/images/pubs/content/homepages/espares-responsive/fr/shops/indesit.jpg" />
                        <Avatar className="avatar" alt="Remy Sharp" src="https://www.espares.fr/images/pubs/content/homepages/espares-responsive/fr/shops/samsung.jpg" />
                        <Avatar className="avatar" alt="Remy Sharp" src="https://www.espares.fr/images/pubs/content/homepages/espares-responsive/fr/shops/beko.jpg" />

                    </div>
                </div>            </div>
        </BannerContainer>
    )
}

export default BannerHome

const BannerContainer = styled.div`
    width: 100%;
    background-color: #d7e2f1;
    margin-top: 3rem;
    align-self: center;
    padding:1rem 0.5rem;
    margin-bottom: 3rem;
`