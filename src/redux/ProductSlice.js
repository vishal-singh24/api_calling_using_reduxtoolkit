import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {authApi} from './services/instance'

export const fetchProducts = createAsyncThunk('FetchProducts', async () => {
    try{
        const res = await authApi.get('/products');
    console.log('Product response' + res)
    return res.data;

    }catch(error){
        console.log("error from products"+error)
    }
    

})

const ProductSlice = createSlice({
    name: 'Product',
    initialState: {
        data: null,
        isLoader: false,
        isError: false
    },
    extraReducers: (builder) => {

        builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoader = true;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isError = true;
            state.isLoader = false;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoader = false;
            state.data = action.payload;
        })
    }
})


export default ProductSlice.reducer;