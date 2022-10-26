import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { url, setHeaders } from './api'
import { toast } from 'react-toastify'

const initialState = {
    items: [],
    status: null,
    createStatus: null,
    deleteStatus: null,
    error: null
}

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async (id = null, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${url}/products`)
            return response?.data;
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data);
            return rejectWithValue("Une erreur c'est produite : produit non chargé")
        }
    }
);

export const productsCreate = createAsyncThunk(
    "products/productsCreate",
    async (values, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${url}/products`,
                values,
                setHeaders()
            )
            return response?.data

        } catch (error) {
            console.log(error);
            toast.error(error.response?.data);
            return rejectWithValue("Une erreur c'est produite : productCreate")
        }
    }
)

export const productsDelete = createAsyncThunk(
    "pproduct/productDelete",
    async (_id, { rejectWithValue }) => {
        try {
            const deleteProduct = await axios.delete(`${url}/products/${_id}`)
            return deleteProduct?.data
        } catch (err) {
            console.log(err);
            return rejectWithValue("Une erreur c'est produite : productDelete")
        }
    }
)

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: {
        [productsFetch.pending]: (state, action) => {
            state.status = "pending";
        },
        [productsFetch.fulfilled]: (state, action) => {
            state.status = "success";
            state.items = action.payload;
        },
        [productsFetch.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        },
        [productsCreate.pending]: (state, action) => {
            state.status = "pending"
        },
        [productsCreate.fulfilled]: (state, action) => {
            state.createStatus = 'success';
            toast.success('Produit crée');
        },
        [productsCreate.rejected]: (state, action) => {
            state.createStatus = "rejected"
        },
        [productsDelete.pending]: (state, action) => {
            state.status = "pending"
        },
        [productsDelete.fulfilled]: (state, action) => {
            state.items.filter((del) => del.id != action.payload)
            state.status = "success"
            toast.error('Produit supprimé');
        },
        [productsDelete.rejected]: (state, action) => {
            state.createStatus = "rejected"
        },
    },
})

// export const { productsCreate, productsDelete, productsFetch } = productsSlice.actions
export default productsSlice.reducer
