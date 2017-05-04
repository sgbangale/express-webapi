"use strict";var _user = require("../models/user");var _user2 = _interopRequireDefault(_user);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
module.exports = {
    post: function post(req, res) {
        _user2.default.create({
            emailAddress: req.body.EmailAddress,
            password: req.body.Password,
            firstName: req.body.FirstName,
            lastName: req.body.LastName },

        function (err, user) {
            console.log(err);
            if (err) return res.status(500).send("There was a problem adding the information to the database.");

            res.status(200).send(user);
        });
    },
    get: function get(req, res) {
        console.log(req.decoded);
        _user2.default.find({}, function (err, users) {
            if (err) return res.status(500).send("There was a problem finding the users.");
            res.status(200).send(users);
        });
    },
    getId: function getId(req, res) {
        _user2.default.findById(req.params.id, function (err, user) {
            if (err) return res.status(500).send("There was a problem finding the user.");
            if (!user) return res.status(404).send("No user found.");
            res.status(200).send(user);
        });
    },
    delete: function _delete(req, res) {
        _user2.default.findByIdAndRemove(req.params.id, function (err, user) {
            if (err) return res.status(500).send("There was a problem deleting the user.");
            res.status(200).send("User " + user.name + " was deleted.");
        });
    } };