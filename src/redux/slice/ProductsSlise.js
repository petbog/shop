import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const getProducts = createAsyncThunk(
     'products/getProducts',
async function(){
    try {
        const {data}=await axios.get(` https://api.escuelajs.co/api/v1/products`)
        return data
    } catch (error) {
        console.log(error)
    }
}
)


const initialState = {
    products: []
}


export const ProductsSlise = createSlice({
    name: "products",
    initialState,
    extraReducers: {
        [getProducts.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getProducts.fulfilled]: (state, action) => {
            state.status = 'success'
            state.products = action.payload

        },
        [getProducts.rejected]: (state, action) => {
            state.status = 'error'
        },
    }

})

export default ProductsSlise.reducer