require('dotenv').config();

const express = require('express');
const sendEmail = require('./mail');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/api/mail', (req, res, next) => {
  console.log(req.body);
  const { name, email } = req.body;
  sendEmail(name, email);
});

const port = 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));
