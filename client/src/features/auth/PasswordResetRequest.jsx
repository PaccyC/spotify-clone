import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { requestPasswordReset } from "./authSlice";

const PasswordResetRequest = () => {

    const [email,setEmail]= useState('');
    const dispatch= useDispatch();

    const {error,message}= useSelector((state)=>state.auth)

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(requestPasswordReset({email}))
    }
  return (
    <div className=" min-h-screen bg-black">
    <form onSubmit={handleSubmit}>
      <input 
        type="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        required
        placeholder="Enter your email address"

       />
       <button type="submit">Send Link</button>
       {error && <p>{error.message}</p>}
       {message && <p>{message}</p>}
    </form>
    </div>
  )
}

export default PasswordResetRequest
