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

export const marksFetch = createAsyncThunk(
    'marks/marksFetch',
    async (id = null, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${url}/marks`);
            return response?.data;

        } catch (error) {
            console.log(error);
            toast.error(error.response?.data);
            return rejectWithValue("Une erreur c'est produite : catégorie non crée")
        }
    }
)

export const createMark = createAsyncThunk(
    "marks/marksCreate",
    async (name, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${url}/marks`,
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

export const marksDelete = createAsyncThunk(
    "marks/marksDelete",
    async (_id, { rejectWithValue }) => {
        try {
            const markDelete = await axios.delete(`${url}/marks/${_id}`)
            return markDelete?.data
        } catch (err) {
            console.log(err);
            return rejectWithValue("Une erreur c'est produite : markDelete")
        }
    }
)

export const markEdit = createAsyncThunk(
    'marks/marksEdit',
    async (_id, { rejectWithValue }) => {
        try {
            const markEdit = await axios.put(`${url}/marks/${_id}`)
            return markEdit?.data
        } catch (error) {
            console.log(error);
        }
    }
)

const marksSlice = createSlice({
    name: 'mark',
    initialState,
    reducers: {},
    extraReducers: {
        [createMark.pending]: (state, action) => {
            state.status = "pending"
        },
        [createMark.fulfilled]: (state, action) => {
            state.status = "success";
            toast.success('Marque ajoutée');
        },
        [createMark.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        },
        [marksFetch.pending]: (state, action) => {
            state.status = "pending";
        },
        [marksFetch.fulfilled]: (state, action) => {
            state.status = "success";
            state.items = action.payload;
        },
        [marksFetch.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        },
        [marksDelete.pending]: (state, action) => {
            state.status = "pending"
        },
        [marksDelete.fulfilled]: (state, action) => {
            state.items.filter((del) => del.id != action.payload)
            state.status = "success"
            toast.error(`La marque a été supprimer`);
        },
        [marksDelete.rejected]: (state, action) => {
            state.createStatus = "rejected"
        },
        [markEdit.pending]: (state, action) => {
            state.status = "pending"
        },
        [markEdit.fulfilled]: (state, action) => {
            state.status = "success"
            toast.error(`La marque a été mise à jour`);
        },
        [markEdit.rejected]: (state, action) => {
            state.createStatus = "rejected"
        }
    }
})

export default marksSlice.reducer