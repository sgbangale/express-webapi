import express from 'express'
var router = express.Router();
import UserController from '../controllers/userController';
import auth from '../middleware/auth';

router.use(auth);

router.post('/', UserController.post);

router.get('/', UserController.get);

router.get('/:id', UserController.getId);


module.exports = router;