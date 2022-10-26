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


export const ordersFetch = createAsyncThunk(
    'orders/ordersFetch',
    async (id = null, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${url}/orders`);
            return response.data;
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data);
            return rejectWithValue("erreur: Impossible de harger les commandes")
        }
    }
)

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: {
        [ordersFetch.pending]: (state, action)=>{
            state.status = 'pending'
        },
        [ordersFetch.fulfilled]: (state, action)=>{
            state.status = 'success';
            state.items = action.payload;
        },
        [ordersFetch.rejected]: (state, action)=>{
            state.status = 'rejected'
        },
    }
})

export default ordersSlice.reducer