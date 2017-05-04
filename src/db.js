import mongoose from 'mongoose';
console.log(process.env.mongocs);
//mongoose.connect(process.env.mongocs);
mongoose.connect('mongodb://dbuser:dbuser@ds119081.mlab.com:19081/graphql-compose-mongoose');
