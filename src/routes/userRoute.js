import express from 'express'
var router = express.Router();
import UserController from '../controllers/userController';
import auth from '../middleware/auth';

//router.use(auth);

router.post('/',auth('ADMIN','add_user'), UserController.post);

router.get('/', UserController.get);

router.get('/:id',auth('ADMIN','add_user'), UserController.getId);

router.put('/',UserController.update);
module.exports = router;