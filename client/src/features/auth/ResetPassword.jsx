import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetPassword } from './authSlice';
import spotifylogo from '../../assets/images/spotify-logo.png'
import { Link } from 'react-router-dom';
const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const token = new URLSearchParams(window.location.search).get('token');

  console.log(token);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (token) {
      try {
    
        await dispatch(resetPassword({ token, newPassword }));
        navigate('/login');
      } catch (err) {
        console.error('Failed to reset password:', err);
      }
    } else {
      console.error('Token is missing');
    }
  };

  return (
    <div className=" min-h-screen bg-black">
    <nav className=" flex h-36">
    <img src={spotifylogo} alt="Spotify Logo" />
    </nav>
   <div className=" w-full flex justify-center mt-3">
    <div className=" w-[400px] p-4 space-y-3">
          <h2 className=" text-3xl text-white font-semibold font-sans">Reset your password</h2>
          <p className=" text-white ">Please enter your new password below.</p>
      <form onSubmit={handleSubmit} >
<label className=' block text-white text-sm font-semibold mb-2'>New Password</label>
<input
  type="password"
  // value={newPassword}
  // onChange={(e) => setNewPassword(e.target.value)}
  required
  className=" bg-black p-4 border-white w-full text-white border mb-4"
/>
<p className='text-white font-semibold text-sm mb-4'>Your password must contain at least</p>

<ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>10 characters</li>
              <li>1 letter</li>
              <li>1 number or special character (example: # ? ! &)</li>
</ul>

<label className=' block text-white text-sm font-semibold mb-2 mt-6'>Confirm Password</label>
<input
  type="password"
  value={newPassword}
  onChange={(e) => setNewPassword(e.target.value)}
  required
  className=" bg-black p-4 border-white w-full text-white border mb-4"
/>
<Link to="https://support.spotify.com/article/reset-password/" className=" text-white underline ">Need support?</Link>

<button
    type="submit"
    className=" bg-green-500 w-full rounded-2xl text-black py-3 font-semibold  text-sm mt-4"
>Change Password</button>
<button type="submit">Reset Password</button>
</form>
  </div>
  </div> 
  </div>
  );
};

export default ResetPassword;

