import mongoose from 'mongoose'

var TaskSchema = mongoose.Schema({
    taskName : {type : String,trim : true},
    isCompleted :{type : Boolean,default:false},
    taskOwner:{type:mongoose.Schema.Types.Mixed},
    taskModifiedBy:{type:mongoose.Schema.Types.Mixed},
    taskHours : {type:Number}
});



mongoose.model('Task', TaskSchema,'task');
module.exports = mongoose.model('Task');