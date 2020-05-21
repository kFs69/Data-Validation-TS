import express from 'express';
const app = express();
import bodyParser from 'body-parser';

import Validate from './function/Validate';

app.use(bodyParser.json());

app.post('/validate', (req, res) => {
  const { name, email, password, phoneNumber } = req.body;

  var validation = Validate({
    name: { value: name, required: true, type: String },
    email: { value: email, required: true, type: String, identify: 'email' },
    password: { value: password, required: true, type: String, min: 6, max: 10 },
    phoneNumber: { value: phoneNumber, required: false, type: Number },
  })

  console.log(validation)

  if(validation.isValid) {
    res.json({ ok: true });
  }
});

app.listen(8080);
