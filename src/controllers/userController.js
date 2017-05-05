import User from '../models/user';
module.exports = {
    post: function(req, res) {
        User.create({
                emailAddress: req.body.EmailAddress,
                password: req.body.Password,
                firstName: req.body.FirstName,
                lastName: req.body.LastName,
                role:req.body.Role
            },
            function(err, user) {
                if (err) return res.status(500).send("There was a problem adding the information to the database.");

                res.status(200).send(user);
            });
    },
    get: function(req, res) {
      console.log(req.decoded);
        User.find({}, function(err, users) {
            if (err) return res.status(500).send("There was a problem finding the users.");
            res.status(200).send(users);
        });
    },
    getId: function(req, res) {
        User.findById(req.params.id, function(err, user) {
            if (err) return res.status(500).send("There was a problem finding the user.");
            if (!user) return res.status(404).send("No user found.");
            res.status(200).send(user);
        });
    },
    delete: function(req, res) {
        User.findByIdAndRemove(req.params.id, function(err, user) {
            if (err) return res.status(500).send("There was a problem deleting the user.");
            res.status(200).send("User " + user.name + " was deleted.");
        });
    },
    update:function(req,res)
    {
        User.findOne({emailAddress:req.body.EmailAddress}, function(err, user) {
            console.log(user);
            if (err) return res.status(500).send("There was a problem updating the user.");
            User.update({_id:user._id},{$set: req.body.user},(err,user1)=>{
            if (err) return res.status(500).send("There was a problem deleting the user.");
             return res.status(200).send(user1);

            });

        });
    }
};
