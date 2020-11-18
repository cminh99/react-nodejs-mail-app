import React, { useState } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState("I'll send you an email 😇");

  const handleInputChange = e => {
    e.preventDefault();
    if (e.target.name === 'name') setName(e.target.value);
    if (e.target.name === 'email') setEmail(e.target.value);
    setText("I'll send you an email 😇");
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (name === '' && email === '') {
      setText('⚠ Please enter your name and email');
      return;
    }

    const dataToSubmit = { name, email };
    axios.post('/api/mail', dataToSubmit);
  };

  return (
    <div className="app">
      <img src={logo} className="app-logo" alt="logo" />
      <h1 className="title">React & Nodejs Mail App!</h1>

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
        <button type="submit">Submit</button>
      </form>

      <p>{text}</p>
    </div>
  );
}

export default App;
