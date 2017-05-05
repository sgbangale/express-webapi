import mongoose from 'mongoose';
var RoleSchema = mongoose.Schema({
    rolename :{type : String,unique: true},
    rolecode : {type: String, unique:true},
    roleaccess:{ type:[String]}
});

 mongoose.model('Role',RoleSchema);
 module.exports = mongoose.model('Role');