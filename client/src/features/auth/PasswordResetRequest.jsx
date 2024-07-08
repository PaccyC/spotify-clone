import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { requestPasswordReset } from "./authSlice";
import spotifylogo from '../../assets/images/spotify-logo.png'
import { Link } from "react-router-dom";
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
      <nav className=" flex h-36">
      <img src={spotifylogo} alt="Spotify Logo" />
      </nav>
     <div className=" w-full flex justify-center mt-3">
      <div className=" w-[400px] p-4 space-y-3">
            <h2 className=" text-3xl text-white font-semibold font-sans">Reset your password</h2>
            <p className=" text-white ">Enter your email address or username,
              and we'll send you a link to get back into your account.</p>
        <form onSubmit={handleSubmit}>
          <label className=" block text-white text-sm font-semibold mb-2">Email address or username</label>
          <input 
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
            className=" bg-black p-4 border-white w-full text-white border mb-4"

          />
          <Link to="https://support.spotify.com/article/reset-password/" className=" text-white underline ">Need support?</Link>
          <button
          type="submit"
           className=" bg-green-500 w-full rounded-2xl text-black py-3 font-semibold  text-sm mt-4"
          >Send Link</button>
          {error && <p>{error.message}</p>}
          {message && <p>{message}</p>}
        </form>
    </div>
    </div> 
    </div>
  )
}

export default PasswordResetRequest
