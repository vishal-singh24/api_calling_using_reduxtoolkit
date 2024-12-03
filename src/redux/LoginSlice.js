import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi } from './services/instance'
import AsyncStorage from '@react-native-async-storage/async-storage';


export const login = createAsyncThunk('Login', async ({ username, password }, {dispatch, rejectWithValue }) => {

    try {

        const res = await authApi.post('/auth/login', { username, password });
        console.log("Full Response:", res);
        const token =res.data.token;

        console.log("response from api " + token)
         await AsyncStorage.setItem('token', token)

         dispatch(setItem(token));
        return token;

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
    reducers: {
        setItem: (state, action) => {
            state.userToken = action.payload;
        },
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
export const { setItem } = LoginSlice.actions; 
export default LoginSlice.reducer