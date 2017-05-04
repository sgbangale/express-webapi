'use strict';var _mongoose = require('mongoose');var _mongoose2 = _interopRequireDefault(_mongoose);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
console.log(process.env.mongocs);
//mongoose.connect(process.env.mongocs);
_mongoose2.default.connect('mongodb://dbuser:dbuser@ds119081.mlab.com:19081/graphql-compose-mongoose');