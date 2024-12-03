import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const loadToken = createAsyncThunk('auth/loadToken', async () => {
    const token = await AsyncStorage.getItem('token');
    return token || null;
});

const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        status: 'idle'
    },
    reducers: {
        setItem: (state, action) => {
            state.token = action.payload;
            AsyncStorage.setItem('token', action.payload)

        },
        removeItem: (state, action) => {
            state.token = null;
            AsyncStorage.removeItem('token')
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(loadToken.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loadToken.fulfilled, (state, action) => {
                state.token = action.payload;
                state.status = 'succeeded';
            })
            .addCase(loadToken.rejected, (state) => {
                state.status = 'failed';
            });

    }
})

export const { setItem, removeItem } = AuthSlice.actions;

export default AuthSlice.reducer