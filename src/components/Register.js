import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Lakukan pendaftaran disini (misal: kirim permintaan ke server atau simpan di state)
  };

  return (
    <div className='form-login'>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
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
        <button type="submit">Register</button>
        <Link to={`/`}> <button variant="primary">Back</button></Link>
      </form>
    </div>
  );
};

export default Register;
