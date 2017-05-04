import express from 'express'
var router = express.Router();
import user from '../models/user';
import jwt from 'jsonwebtoken';

router.post('/', function(req, res) {
    console.log(req.body.EmailAddress);
    user.findOne({
        emailAddress: req.body.EmailAddress
    }, function(e, user) {
        if (e) {
            return res.status(200).send('invalid email address or password.[error in finding user]')
        }
        else {
            console.log(user);
            if (user) {
                user.comparePassword(req.body.Password, function(ismatch) {
                    if (ismatch) {
                        var token = jwt.sign({
                            EmailAddress: user.emailAddress,
                            FirstName: user.firstName,
                            LastName: user.lastName,
                            Id: user._id
                        }, 'supersecrete', {
                            expiresIn: 1440
                        });
                        return res.status(200).send({
                            success: true,
                            message: 'Enjoy your token!',
                            token: token
                        });
                    }
                    else {
                        return res.status(200).send('invalid email address or password.[password is not match]');
                    }

                });
            }
            else {
                return res.status(200).send('invalid email address or password.[user is not found]');
            }
        }
    });
});

router.post('/forgetPassword', function(req, res) {
    user.findOne({
        emailAddress: req.body.EmailAddress
    }, function(e, user) {
        if (e) {
            return res.status(200).send('email address is not found in the system.');
        }
        else {
            user.password = 'password';
            user.save(function(e, user) {
                if (user) {
                    return res.status(200).send('password is changed to default password "password"');
                }



            });

        }
    });
});
router.post('/changePassword', function(req, res) {
    user.findOne({
        emailAddress: req.body.EmailAddress
    }, function(e, user) {
        if (e) {
            return res.status(200).send('email address is not found in the system.');
        }
        else {
            user.password = req.body.Password;
            user.save(function(e, user) {
                if (user) {
                    return res.status(200).send('password is changed to default password "password"');
                }



            });

        }
    });
});

module.exports = router;
