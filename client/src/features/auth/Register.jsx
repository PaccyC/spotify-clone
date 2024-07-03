import { useState } from "react"
import { useDispatch,useSelector } from 'react-redux'
import { registerUser } from "./authSlice";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const [formData,setFormData]= useState({
        email:'',
        username:'',
        password:'',
    })
    const navigate= useNavigate();


    const dispatch= useDispatch();
    const {error}= useSelector((state)=>state.auth)
    const {email,username,password}= formData

    const onChange =(e)=>setFormData({...formData,[e.target.name]:e.target.value});
    const onSubmit =(e)=>{
        e.preventDefault();
        dispatch(registerUser(formData))
    }
  return (
   <form onSubmit={onSubmit}>
    <input 
       type="email" 
       name="email" 
       value={email} 
       onChange={onChange} />
     <input 
       type="text" 
       name="username" 
       value={username} 
       onChange={onChange} />
     <input 
       type="password" 
       name="password" 
       value={password} 
       onChange={onChange} />  

     <button type="submit">Register</button>
     {!error && navigate("/login")}
     {error && error.message}   
   </form>
  )
}

export default Register
