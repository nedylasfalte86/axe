import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../features/authSlice';
import { StyledForm } from './StyledForm';


const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        if (auth._id) {
            navigate('/')
        }
    }, [auth._id, navigate]);

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        cPassword: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(user));
    }

    return (
        <>
            <StyledForm onSubmit={handleSubmit}>
                <h2>Register</h2>
                <input type="text" placeholder="Nom" onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
                <input type="text" placeholder="Prénom" onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
                <input type="email" placeholder="Adresse email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
                <input type="password" placeholder="Mot de passe" onChange={(e) => setUser({ ...user, password: e.target.value })} />
                <input type="password" placeholder="Confirmation du mot de passe" onChange={(e) => setUser({ ...user, cPassword: e.target.value })} />
                <button type="submit" >{auth.registerStatus === "pending" ? 'valider' : "Inscription"}</button>

                {auth.registerStatus === "rejected" ? (
                    <p>{auth.registerError}</p>
                ) : null}
            </StyledForm>
        </>
    );
}

export default Register

