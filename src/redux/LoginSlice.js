import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi } from './services/instance'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const login = createAsyncThunk('Login', async ({ username, password }, { rejectWithValue }) => {

    try {

        const res = await authApi.post('/auth/login', { username, password });
        console.log("Full Response:", res);

        console.log("response from api " + res.data.token)
        // await AsyncStorage.setItem('token', res.data.token)


        return res.data.token;

    } catch (error) {
        if (error) {
            console.log(error)
        }
    }
});

const LoginSlice = createSlice({
    name: 'Login',
    initialState: {
        isloading: false,
        userToken: null,
        isError: false,

    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.isloading = false;
            state.userToken = action.payload;
        })

        builder.addCase(login.rejected, (state, action) => {
            state.isloading = false;
            state.isError = true;
        })
        builder.addCase(login.pending, (state, action) => {
            state.isloading = true;
            state.isError = false
        }
        )
    }
}
)

export default LoginSlice.reducer