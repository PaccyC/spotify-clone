import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "./authSlice";
import {Link} from 'react-router-dom'
const Login = () => {
    const[formData,setFormData]=useState({
        email:"",
        password:""
    })

    const dipatch= useDispatch();
    const {error}= useSelector((state)=>state.auth)

    const {email,password}= formData
    
    const onChange= (e)=>setFormData({...formData,[e.target.name]:e.target.value});

    const onSubmit= (e)=>{
      e.preventDefault();
      dipatch(loginUser(formData))
    }
      return (
    <form onSubmit={onSubmit}>
      <input 
        type="email" 
        name="email" 
        value={email} 
        onChange={onChange} />
      <input 
        type="password" 
        name="password" 
        value={password} 
        onChange={onChange} />
      <button type="submit">Login</button>
      {error && <p>{error.message}</p>}

      <Link to="/request-reset">Forgot Password?</Link>
    </form>
  )
}

export default Login
