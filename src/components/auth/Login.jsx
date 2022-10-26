import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../features/authSlice';
import { StyledForm } from './StyledForm';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth._id) {
      navigate('/')
    }

    if (auth.isAdmin) {
      navigate('/my-account')
    }
  }, [auth._id, navigate]);
  

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const navigateRegister = () => {
    navigate('/register')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(user));
    console.log('data user', user);
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <h2>Connexion</h2>

        <input type="email" placeholder="Adresse email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
        <input type="password" placeholder="Mot de passe" onChange={(e) => setUser({ ...user, password: e.target.value })} />
        <button type="submit" >{auth.loginStatus === "pending" ? 'Valider' : "Connexion"}</button>
        <p onClick={navigateRegister}>Créer un compte</p>
        {auth.loginStatus === "rejected" ? (
          <p>{auth.loginError}</p>
        ) : null}

      </StyledForm>
    </>
  );
}

export default Login;

