import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './ProductSlice'
import AuthReducer from './LoginSlice'


const Store=configureStore({
    reducer:{
        Product: ProductReducer,
        auth:AuthReducer
    }

})

export default Store;

