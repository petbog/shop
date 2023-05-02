import axios from "axios";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");



export const GetCategories = createAsyncThunk(
    'search/SearchVideo',
    async function () {
        try {
            const { data } = await axios.get(`https://api.escuelajs.co/api/v1/categories`)
            return data
        } catch (error) {
            console.log(error)
        }

    }
)



const initialState = {
    item: [],
    status: 'loading' || 'success' || 'error',
}


export const CategoriesSlice = createSlice({
    name: 'categories',
    initialState,
    extraReducers: {
        [GetCategories.pending]: (state, action) => {
            state.status = 'loading'
        },
        [GetCategories.fulfilled]: (state, action) => {
            state.status = 'success'
            state.item = action.payload

        },
        [GetCategories.rejected]: (state, action) => {
            state.status = 'error'
        },
    }
}) 

export default CategoriesSlice.reducer