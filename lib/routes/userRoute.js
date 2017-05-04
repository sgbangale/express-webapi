'use strict';var _express = require('express');var _express2 = _interopRequireDefault(_express);

var _userController = require('../controllers/userController');var _userController2 = _interopRequireDefault(_userController);
var _auth = require('../middleware/auth');var _auth2 = _interopRequireDefault(_auth);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var router = _express2.default.Router();

router.use(_auth2.default);

router.post('/', _userController2.default.post);

router.get('/', _userController2.default.get);

router.get('/:id', _userController2.default.getId);


module.exports = router;