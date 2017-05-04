'use strict';
var _dotenv = require('dotenv');var _dotenv2 = _interopRequireDefault(_dotenv);


var _db = require('./db');var _db2 = _interopRequireDefault(_db);
var _express = require('express');var _express2 = _interopRequireDefault(_express);
var _bodyParser = require('body-parser');var _bodyParser2 = _interopRequireDefault(_bodyParser);



var _userRoute = require('./routes/userRoute');var _userRoute2 = _interopRequireDefault(_userRoute);
var _accountRoute = require('./routes/accountRoute');var _accountRoute2 = _interopRequireDefault(_accountRoute);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}_dotenv2.default.load();var app = (0, _express2.default)();app.use(_bodyParser2.default.urlencoded({ extended: false }));app.use(_bodyParser2.default.json());
app.use('/auth', _accountRoute2.default);
app.use('/api/users', _userRoute2.default);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port ' + process.env.PORT + '!');
});