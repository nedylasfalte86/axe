import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import Styled from 'styled-components';
import '../css//ProfilePage.css'
import { toast } from 'react-toastify';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {NavBar5} from '../components/NavBar5'

import { logoutUser } from '../features/authSlice'


export default function ProfilPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if (!auth._id) {
      // toast.error(`veuillez vous connectez pour acceder à votre compte`, {
      //   position: "bottom-left",
      // });
      navigate('/login')
    }
  }, [auth._id, navigate]);

  return (
    <div className="container">
          <NavBar5/>

      <div>
        <h2>Votre compte {auth.email}</h2>
        <div className="card-container">
          <Card sx={{ maxWidth: 345 }} className="Card">
            <CardActionArea>
              <CardMedia
                component="img"
                height="80"
                image="https://media.istockphoto.com/photos/young-woman-holding-gift-box-picture-id826888674?k=20&m=826888674&s=612x612&w=0&h=Z1wxM4C1YpqMcvnIi1TS1UxuXZ1KMJewkn0R-K5-Oao="
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Mes commandes
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Voir tous les détails de vos commandes passés.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }} className="Card">
            <CardActionArea>
              <CardMedia
                component="img"
                height="80"
                image="https://media.istockphoto.com/photos/data-protection-and-internet-security-picture-id1412687244?k=20&m=1412687244&s=612x612&w=0&h=qenTvT14dpqGrDsu6Vc4rezqhKTuPD9mGS60xf_GdT4="
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Connexion et sécurité
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Modifier mes informations...
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card><Card sx={{ maxWidth: 345 }} className="Card">
            <CardActionArea>
              <CardMedia
                component="img"
                height="80"
                image="https://media.istockphoto.com/vectors/home-flat-icon-pixel-perfect-for-mobile-and-web-vector-id1145840259?k=20&m=1145840259&s=612x612&w=0&h=4ejY4fSiFcyk3MsQx8bOpeJ_rf5_yeDGuIoH5rpPAbY="
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Mes adresses de livraison
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ajouterou modifier vos adresses de livraisons
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card><Card sx={{ maxWidth: 345 }} className="Card">
            <CardActionArea>
              <CardMedia
                component="img"
                height="80"
                image="https://media.istockphoto.com/photos/gift-card-with-tied-bow-picture-id1289735749?k=20&m=1289735749&s=612x612&w=0&h=8lWt-gAEZ4VxIWAcnun3mDrmNWlR7o31RAXIocvpUxo="
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cartes cadeaux
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Disponible prochainement
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          {/* <button onClick={() => { logoutUser() }}>Déconnexion</button> */}

          {
            auth._id ? (
              <Logout onClick={() => {
                dispatch(logoutUser(null));
                toast.warning('Déconnexion réussie', { position: "bottom-left" })
              }}>Déconnexion 
              </Logout>
            ) : null
          }
        </div>
      </div>
    </div>
  )
}



const AuthLinks = Styled.div`
a{
    &:last-child{
        margin-left:0.2rem;
    }
}
`

const Logout = Styled.div`
    color: black;
    cursor: pointer;
`