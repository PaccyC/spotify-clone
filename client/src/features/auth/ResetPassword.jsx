import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { resetPassword } from './authSlice';

const ResetPassword = () => {
    const disptch= useDispatch();
    const navigate=useNavigate()
    const [newPassword,setNewPassword]= useState('');

    const token= new URLSearchParams(window.location.search).get('token');
    const handleSubmit= async(e)=>{
        e.preventDefault();
        try {
            
            disptch(resetPassword({token,newPassword}))
            navigate("/login")
        } catch (error) {
            console.error('Failed to reset password: ',error )
        }
    }

  return (
    <form onSubmit={handleSubmit}>

      <input 
        type="password" 
        name="newPassword" 
        value={newPassword} 
        onChange={(e)=>setNewPassword(e.target.value)}/>
        <button type="submit">Reset Password</button>
    </form>
  )
}

export default ResetPassword
