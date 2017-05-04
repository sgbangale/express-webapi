import express from 'express'
var router = express.Router();
import UserController from '../controllers/userController';
import jwt from 'jsonwebtoken';

router.use(function(req,res,next){
   var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, 'supersecrete', function(err, decoded) {      
      if (err) {
          console.log(err);
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;    
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });
    
  }
});

router.post('/', UserController.post);

router.get('/', UserController.get);

router.get('/:id', UserController.getId);


module.exports = router;