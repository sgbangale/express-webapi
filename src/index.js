
import dotenv from 'dotenv';
dotenv.load();

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import taskRoutes from './routes/taskRoute';
import userRoutes from './routes/userRoute';
import accoountRoutes from './routes/accountRoute';


var app = express();
mongoose.connect(process.env.mongocs);
app.disable('x-powered-by');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/auth', accoountRoutes);
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);


app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.listen(process.env.PORT , function () {
  console.log('Example app listening on port '+process.env.PORT+'!')
});


// import role from './models/role';
// role.create({rolename:'User',rolecode:'USER',roleaccess:['add_task','update_task','delete_task']});