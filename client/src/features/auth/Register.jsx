
import { useState } from "react"
import { useDispatch,useSelector } from 'react-redux'
import { registerUser } from "./authSlice";
import { useNavigate } from "react-router-dom";

import { FaApple } from "react-icons/fa";
import googleIcon from '../../assets/images/google.png';
import facebookIcon from '../../assets/images/facebook.png';
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

        if(!error) navigate("/login")
    }
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center bg-black">
      <div className=" bg-gray-800 p-8 rounded-lg shadow-lg w-96">
      <h1 className="text-3xl text-white mb-4">Sign up to start listening</h1>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Email address
            </label>
              <input 
                type="email" 
                name="email" 
                value={email} 
                onChange={onChange}
                 className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white focus:outline-none focus:border-green-500"
                />
          </div>
          <div>
            
            <label className="block text-sm font-medium text-gray-300">
              Username
            </label>
            <input 
              type="text" 
              name="username" 
              value={username} 
              onChange={onChange}
               className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white focus:outline-none focus:border-green-500"
              />
           </div>   
            <div>
              <label className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input 
              type="password" 
              name="password" 
              value={password} 
              onChange={onChange} 
              className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white focus:outline-none focus:border-green-500"/>  
             </div>
          <button 
            type="submit"
            className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
          >Register</button>

          {error && error.message}   
        </form>
        <div className=" mt-6  text-center text-gray-400">
          <hr/>
          <p>or</p>
         <hr/>
        </div>
        <div className=" mt-4 space-y-3 w-full justify-center">
          <button 
          className="w-full py-2 px-4 bg-gray-900 text-white rounded-md flex items-center hover:bg-gray-800"
          >
             <img src={googleIcon} alt="Google" className="w-6 h-6 mr-2 rounded-full bg-gray-900" />
             Sign up with Google
          </button>
          <button className="w-full py-2 px-4 bg-gray-900 text-white rounded-md flex items-center  hover:bg-gray-800">
            <img src={facebookIcon} alt="Facebook" className="w-6 h-6 mr-2 rounded-full" />
            
            Sign up with Facebook
          </button>
          <button className=" w-full py-2 px-4 bg-gray-900 text-white rounded-md flex items-center  ">
            <FaApple className="w-6 h-6 mr-2" />
            Sign up with Apple
          </button>
        </div>
        <div className="mt-6 text-center text-gray-400">
          <p>
            Already have an account? <a href="/login" className="text-green-500 hover:underline">Log in here.</a>
          </p>
        </div>
        </div>
   </div>
  )
}

export default Register

