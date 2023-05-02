import categories from "./slice/CategoriesSlice"
const { configureStore } = require("@reduxjs/toolkit")




export const store = configureStore({
    reducer: {
        categories,
    }
})