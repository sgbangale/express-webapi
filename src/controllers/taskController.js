import Task from '../models/task';
module.exports = {
    post: function(req, res) {
        Task.create({
                taskName: req.body.TaskName,
                isCompleted: req.body.IsCompleted,
                taskOwner:req.decoded.User,
                taskModifiedBy:req.decoded.User,
                taskHours: req.body.TaskHours
            },
            function(err, Task) {
                if (err) return res.status(500).send("There was a problem adding the information to the database.");

                res.status(200).send(Task);

            });
    },
    get: function(req, res) {
        Task.find({},function(err, Tasks) {
            if (err) return res.status(500).send("There was a problem finding the Tasks.");
            res.status(200).send(Tasks);
        });
    },
    getId: function(req, res) {
        Task.findById(req.params.id, function(err, Task) {
            if (err) return res.status(500).send("There was a problem finding the Task.");
            if (!Task) return res.status(404).send("No Task found.");
            res.status(200).send(Task);
        });
    },
    delete: function(req, res) {
        Task.findByIdAndRemove(req.params.id, function(err, Task) {
            if (err) return res.status(500).send("There was a problem deleting the Task.");
            if(Task)res.status(200).send("Task " + Task.taskName + " was deleted.");
            else return res.status(500).send("Task is not found !! ");
        });
    },
    update:function(req,res)
    {
           
        Task.findOne({_id:req.body.id}, function(err, Task) {
         
            if (err) return res.status(500).send("There was a problem updating the Task.");
            var task =req.body.Task;
            task.taskModifiedBy ={};
            task.taskModifiedBy =req.decoded.User;
            console.log(task);
            Task.update({_id:Task._id},{$set: task},(err,Task1)=>{
            if (err) return res.status(500).send("There was a problem deleting the Task.");
             return res.status(200).send(Task1);
            });

        });
    }
};
