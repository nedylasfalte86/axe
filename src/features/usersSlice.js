import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setHeaders, url } from "./api";
import { toast } from 'react-toastify'
import axios from 'axios';

const initialState = {
    items: [],
    status: null,
    createStatus: null,
    deleteStatus: null,
    error: null
}

export const usersFetch = createAsyncThunk(
    'users/usersFetch', 
    async(id = null, { rejectWithValue })=> {
        try {
            const users = await axios.get(`${url}/users`);
            return users?.data
        } catch (error) {
            console.log(error);
            return rejectWithValue('Erreur; impossible de charger les utilisateurs')
        }
    }
)

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducer:{},
    extraReducers:{
        [usersFetch.pending] : (state, action)=>{
            state.status = 'pending'
        },
        [usersFetch.fulfilled] : (state, action)=>{
            state.status = 'success';
            state.items = action.payload;
        },
        [usersFetch.rejected] : (state, action)=>{
            state.status = 'rejected'
        }
    }
})

export default userSlice.reducer