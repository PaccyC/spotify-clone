import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


const baseUrl='http://localhost:3001'
export const registerUser =createAsyncThunk(
    'auth/registerUser',
    async(userData,{rejectWithValue})=>{
        try {
            const response= await axios.post(baseUrl+'/auth/signup',userData)
            return response.data;
        } catch (error) {
             return rejectWithValue(error.response.data)
        }
    }
)

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (userData,{rejectWithValue})=>{
        try {
            
            const response= await axios.post(baseUrl+'/auth/signin',userData)
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const requestPasswordReset = createAsyncThunk(
    'auth/requestPasswordReset',
    async (email,{rejectWithValue})=>{
        try {
            const response= await axios.post(baseUrl+'/auth/request-password-reset',email)
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const resetPassword = createAsyncThunk(
    'auth/resetPassword',
    async ({token,newPassword},{rejectWithValue})=>{
        console.log('Sending request to reset password:', { token, newPassword }); // Debugging line
        try {
            const response= await axios.post(baseUrl+'/auth/reset-password',{token,newPassword})
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)


const authSlice= createSlice({
    name:"auth",
    initialState:{
        user:null,
        isAuthenticated:false,
        error:null,
        message:null
    },
    reducers:{},
    extraReducers:(builder)=>{
    
        builder
         .addCase(registerUser.fulfilled,(state,action)=>{
            state.user= action.payload;
            state.isAuthenticated= true;
            state.error=null;
         })
         .addCase(registerUser.rejected,(state,action)=>{
            state.error= action.payload;
         })
         .addCase(loginUser.fulfilled,(state,action)=>{
            state.user= action.payload;
            state.isAuthenticated= true;
            state.error=null;
         })
         .addCase(loginUser.rejected,(state,action)=>{
            state.error= action.payload;
         })
         .addCase(requestPasswordReset.fulfilled,(state,action)=>{
            state.message= action.payload;
            state.error=null;
         })
         .addCase(requestPasswordReset.rejected,(state,action)=>{
            state.error= action.payload;
         })
         .addCase(resetPassword.fulfilled,(state,action)=>{
            state.message= action.payload;
            state.error=null;
         })
         .addCase(resetPassword.rejected,(state,action)=>{
            state.error= action.payload;
         })
    }
})

export default authSlice.reducer;

