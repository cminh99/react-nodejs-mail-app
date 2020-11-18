require('dotenv').config();

const express = require('express');
const sendEmail = require('./mail');

const port = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/api/mail', (req, res, next) => {
  console.log(req.body);
  const { name, email } = req.body;
  sendEmail(name, email);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
