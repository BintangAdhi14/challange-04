import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const apiUrl = 'https://shy-cloud-3319.fly.dev/api/v1/auth/login';
    
    axios.post(apiUrl, { email, password })
      .then(response => {
        // Tangani respons sukses di sini (misal: menyimpan token)
        console.log(response.data);
      })
      .catch(error => {
        // Tangani kesalahan autentikasi di sini
        console.error(error);
      });
  };

  return (
    <div className='form-login'>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input className='input-login'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input className='input-login'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
        <Link to={`/`}> <button variant="primary">Back</button></Link>
      </form>
      
    </div>
    
  );
};

export default Login;
