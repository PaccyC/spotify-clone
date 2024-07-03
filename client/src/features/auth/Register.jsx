import { useState } from "react"
import { useDispatch,useSelector } from 'react-redux'
import { registerUser } from "./authSlice";
const Register = () => {
    const [formData,setFormData]= useState({
        email:'',
        username:'',
        password:'',
    })

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
     {error && error.message}   
   </form>
  )
}

export default Register
