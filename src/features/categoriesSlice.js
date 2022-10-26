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

export const categoryFetch = createAsyncThunk(
    'category/categoryFetch',
    async (id = null, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${url}/category`);
            return response?.data;

        } catch (error) {
            console.log(error);
            toast.error(error.response?.data);
            return rejectWithValue("Une erreur c'est produite : catégorie non crée")
        }
    }
)

export const createCategory = createAsyncThunk(
    "category/categoryCreate",
    async (name, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${url}/category`,
                name,
                setHeaders()
            )
            return response?.data
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data);
            return rejectWithValue('Impossible de créer la catégorie')
        }
    }
)

export const categoryDelete = createAsyncThunk(
    "category/categoryDelete",
    async (_id, { rejectWithValue }) => {
        try {
            const deleteCategory = await axios.delete(`${url}/category/${_id}`)
            return deleteCategory?.data
        } catch (err) {
            console.log(err);
            return rejectWithValue("Une erreur c'est produite : deleteCategory")
        }
    }
)

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: {
        [createCategory.pending]: (state, action) => {
            state.status = "pending"
        },
        [createCategory.fulfilled]: (state, action) => {
            state.status = "success";
            toast.success(`La catégorie a été ajoutée`);
        },
        [createCategory.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        },
        //////category create
        [categoryFetch.pending]: (state, action) => {
            state.status = "pending";
        },
        [categoryFetch.fulfilled]: (state, action) => {
            state.status = "success";
            state.items = action.payload;
        },
        [categoryFetch.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        },
        [categoryDelete.pending]: (state, action) => {
            state.status = "pending"
        },
        [categoryDelete.fulfilled]: (state, action) => {
            state.items.filter((del) => del.id != action.payload)
            state.status = "success"
            toast.error(`La catégorie a été supprimer`);
        },
        [categoryDelete.rejected]: (state, action) => {
            state.createStatus = "rejected"
        },
    }
})

export default categorySlice.reducer