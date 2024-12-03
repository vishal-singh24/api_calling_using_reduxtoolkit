import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './ProductSlice'
import LoginReducer from './LoginSlice'
import AuthReducer from './AuthSlice'
import CartReducer from './CartSlice'


const Store = configureStore({
    reducer: {
        Product: ProductReducer,
        login: LoginReducer,
        auth: AuthReducer,
        Cart:CartReducer
    }

})

export default Store;

