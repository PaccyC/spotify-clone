import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetPassword } from './authSlice';

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
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="New Password"
        required
      />
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default ResetPassword;
