import categories from "./slice/CategoriesSlice"
import products from "./slice/ProductsSlise"
const { configureStore } = require("@reduxjs/toolkit")




export const store = configureStore({
    reducer: {
        categories,
        products
    }
})