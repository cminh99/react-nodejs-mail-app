/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    e.preventDefault();
    if (e.target.name === 'name') setName(e.target.value);
    if (e.target.name === 'email') setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent reload after submit
    if (name !== '' && email !== '') {
      const dataToSubmit = { name, email };
      axios.post('/api/mail', dataToSubmit);
    }
  };

  return (
    <div className="app">
      <img src={logo} className="app-logo" alt="logo" />
      <h1 className="title">Sending Email in Nodejs & React!</h1>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Send</button>
      </form>

      <p>I will send you an email to say Hello! 😇 </p>
    </div>
  );
}

export default App;
