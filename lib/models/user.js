'use strict';var _mongoose = require('mongoose');var _mongoose2 = _interopRequireDefault(_mongoose);
var _bcrypt = require('bcrypt');var _bcrypt2 = _interopRequireDefault(_bcrypt);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var UserSchema = _mongoose2.default.Schema({
  emailAddress: { type: String, unique: true, lowercase: true, trim: true },
  password: { type: String, trim: true },
  firstName: { type: String },
  lastName: { type: String } });


UserSchema.pre('save', function (next) {
  var user = this;

  _bcrypt2.default.hash(user.password, 10).then(function (hash) {
    user.password = hash;
    next();
  });
});


UserSchema.methods.comparePassword = function (attemptedPassword, callback) {
  _bcrypt2.default.compare(attemptedPassword, this.password, function (err, isMatch) {
    callback(isMatch);
  });
};

_mongoose2.default.model('User', UserSchema);
module.exports = _mongoose2.default.model('User');