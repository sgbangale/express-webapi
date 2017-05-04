import express from 'express'
var router = express.Router();
import user from '../models/user';
import jwt from 'jsonwebtoken';

router.post('/', function(req,res){
    user.findOne({emailAddress:req.body.EmailAddress},function(e,user){
        if (e) {
         return   res.status(200).send('invalid email address or password.')
        } else {
            user.comparePassword(req.body.Password,function(ismatch){
                if (ismatch) {
var token =jwt.sign(user,'supersecrete',{expiresIn:1440});                    
 return res.status(200).send({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
                }
                else{
                     return   res.status(200).send('invalid email address or password.')
                }
            });
        }
    });
});



module.exports = router;