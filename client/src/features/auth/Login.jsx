import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "./authSlice";
import {Link} from 'react-router-dom'
import { AiOutlineSpotify } from "react-icons/ai";

const Login = () => {
    const[formData,setFormData]=useState({
        email:"",
        password:""
    })

    const dipatch= useDispatch();
    const {error}= useSelector((state)=>state.auth)
console.log(error);
    const {email,password}= formData
    
    const onChange= (e)=>setFormData({...formData,[e.target.name]:e.target.value});

    const onSubmit= (e)=>{
      e.preventDefault();
      dipatch(loginUser(formData))
    }
      return (
 
  <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
        <div className="flex justify-center mb-8">
          <AiOutlineSpotify  className="w-48 text-white"/>
        </div>
        <h2 className="text-white text-2xl mb-8 text-center">Log in to Spotify</h2>
        <button className="bg-red-600 text-white py-2 px-4 rounded w-full mb-4">
          Continue with Google
        </button>
        <button className="bg-blue-600 text-white py-2 px-4 rounded w-full mb-4">
          Continue with Facebook
        </button>
        <button className="bg-black text-white py-2 px-4 rounded w-full mb-4">
          Continue with Apple
        </button>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <input
              
              type="email" 
              name="email" 
              value={email} 
              onChange={onChange} 
              placeholder="Email or username"
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
            name="password" 
            value={password} 
            onChange={onChange} 
              placeholder="Password"
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="remember-me" className="mr-2" />
            <label htmlFor="remember-me" className="text-white">
              Remember me
            </label>
          </div>
          <button className="bg-green-600 text-white py-2 px-4 rounded w-full">
            Log In
          </button>
          {error && <p>{error.message}</p>}
        </form>
        <div className="text-center mt-4">
          <Link to="/request-reset" className="text-green-500">
            Forgot your password?
          </Link>
        </div>
        <div className="text-center mt-4">
          <p className="text-white">
            Don't have an account?{' '}
            <a href="#" className="text-green-500">
              Sign up for Spotify
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
