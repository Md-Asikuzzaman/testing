'use client';

import React, { useState } from 'react';

const Login = ({ login }: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await login(username, password);
      console.log('clicked');
    } catch (err) {
      setError('Invalid credentials');
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input
          placeholder='Username'
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor='password'>Password</label>
        <input
          placeholder='Password'
          id='password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type='submit'>Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
