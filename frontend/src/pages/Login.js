import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:4000/login', { email, password });
      localStorage.setItem('token', res.data.token);
      if (remember) localStorage.setItem('rememberMe', 'true');
      else localStorage.removeItem('rememberMe');
      navigate('/profile');
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{color:'red'}}>{error}</p>}
      <input placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder='Password' type='password' value={password} onChange={e => setPassword(e.target.value)} />
      <label>
        <input type='checkbox' checked={remember} onChange={e => setRemember(e.target.checked)} /> Remember me
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;