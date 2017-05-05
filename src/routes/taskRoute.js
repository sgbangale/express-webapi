import express from 'express'
var router = express.Router();
import TaskController from '../controllers/taskController';
import auth from '../middleware/auth';

//router.use(auth);

router.post('/',auth(['ADMIN','USER']), TaskController.post);

router.get('/',auth(['ADMIN','USER']), TaskController.get);

router.get('/:id',auth(['ADMIN','USER']), TaskController.getId);

router.put('/',auth(['ADMIN','USER']),TaskController.update);

router.delete('/:id',auth(['ADMIN','USER']),TaskController.delete);
module.exports = router;