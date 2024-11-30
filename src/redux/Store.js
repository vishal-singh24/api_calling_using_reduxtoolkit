import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './Slice'


const Store=configureStore({
    reducer:{
        Product: ProductReducer
    }

})

export default Store;

