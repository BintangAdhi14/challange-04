import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  

  const handleRegister = (e) => {
    e.preventDefault();

    // Lakukan validasi input, seperti memeriksa kesesuaian password
    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match.");
      return;
    }

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

    // Lakukan logika pendaftaran pengguna di sini
    // Anda dapat mengirim data pendaftaran ke API atau menyimpannya di state

    // Setelah pendaftaran berhasil, Anda dapat mengarahkan pengguna ke halaman lain
    // Misalnya, dengan menggunakan React Router
  };

  return (
    <div className='form-login'>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <input className='input-login'
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <input className='input-login'
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <input className='input-login'
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input className='input-login'
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input className='input-login'
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Register</button>
          <Link to={`/`}> <button variant="primary">Back</button></Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
