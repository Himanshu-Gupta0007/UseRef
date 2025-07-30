const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1/mongopractice`);

const userSchema = mongoose.Schema({
    name:String,
    username:String,
    emali:String
})


module.exports=   mongoose.model('user' , userSchema)