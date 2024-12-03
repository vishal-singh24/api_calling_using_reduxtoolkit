import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const AuthSlice=createSlice({
    name:'auth',
    initialState:{
        token:AsyncStorage.getItem('token')||null
    },
    reducers:{
        setItem:(state,action)=>{
            state.token=action.payload;
            AsyncStorage.setItem('token',action.payload)

        },
        removeItem:(state,action)=>{
            AsyncStorage.removeItem('token')
        }
    }
})

export default AuthSlice.reducer