import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Lakukan autentikasi disini (misal: kirim permintaan ke server atau cek di state)
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
