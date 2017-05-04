import dotenv from 'dotenv';
dotenv.load();

import db from './db';
import express from 'express';
import bodyParser from 'body-parser';
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
import userRoutes from './routes/userRoute';
import accoountRoutes from './routes/accountRoute';
app.use('/auth', accoountRoutes);
app.use('/api/users', userRoutes);

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.listen(process.env.PORT , function () {
  console.log('Example app listening on port '+process.env.PORT+'!')
});