import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'
import { url } from './api';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';


const initialState = {
    token: localStorage.getItem('token'),
    lastName: "",
    firstName: "",
    email: "",
    _id: "",
    isAdmin: false,
    registerStatus: "",
    registerError: "",
    loginStatus: "",
    loginError: "",
    userLoaded: false
};

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (user, { rejectWithValue }) => {
        try {
            const token = await axios.post(`${url}/login`, {
                email: user.email,
                password: user.password,
            });

            localStorage.setItem("token", token.data.token);
            return token.data.token; 
            //Si on ne retourne que token.data dans l'onglet application du navigateur, parti local storage on aura [objet objet] en valeur du token//
            //Qui nous generera un blocage de l'application.

        } catch (error) {
            console.log(error.response);
            return rejectWithValue(error.response.data);
        }
    }
);

export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (user, { rejectWithValue }) => {
        try {

            const token = await axios.post(`${url}/register`, {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: user.password
            });

            localStorage.setItem('token', token.data);

            toast.success(`Bonjour et bienvenue`, {
                position: "bottom-left",
            });

            return token.data

        } catch (err) {
            console.log(err.response.data);
            return rejectWithValue(err.response.data)
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loadUser(state, action) {
            const token = state.token;

            if (token) {
                const user = jwtDecode(token);
                return {
                    ...state,
                    token,
                    name: user.name,
                    email: user.email,
                    _id: user._id,
                    isAdmin: user.isAdmin,
                    userLoaded: true,
                };
            } else return { ...state, userLoaded: true };
        },
        logoutUser(state, action) {
            localStorage.removeItem('token')

            return {
                ...state,
                token: "",
                lastName: "",
                firstName: "",
                email: "",
                _id: "",
                isAdmin: false,
                registerStatus: "",
                registerError: "",
                loginStatus: "",
                loginError: "",
                userLoaded: false
            }

        }
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state, action) => {
            return { ...state, registerStatus: 'pending' }
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            if (action.payload) {
                const user = jwtDecode(action.payload)

                return {
                    ...state,
                    token: action.payload,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    _id: user._id,
                    registerStatus: "success"
                }
            } else return state
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            return {
                ...state,
                registerStatus: "rejected",
                registerError: action.payload
            }
        });

        //LOGIN
        builder.addCase(loginUser.pending, (state, action) => {
            return { ...state, loginStatus: "pending" };
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            if (action.payload) {
                const user = jwtDecode(action.payload);
                return {
                    ...state,
                    token: action.payload,
                    name: user.name,
                    email: user.email,
                    _id: user._id,
                    isAdmin: user.isAdmin,
                    loginStatus: "success",
                };
            } else return state;
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            return {
                ...state,
                loginStatus: "rejected",
                loginError: action.payload,
            };
        });
    },

})

export const { loadUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
