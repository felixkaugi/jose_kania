var mongoose = require('mongoose') 
mongoose.connect('mongodb://localhost:27017/Userauth')
//user schema
var Userschema = mongoose.Schema({
   username: {
        type: String
        // required: true,
        // minlength: 5,
        // maxlength: 50
    },
    email:{
         type: String
    },
    password: {
        type: String
        // required: true,
        // minlength: 5,
        // maxlength: 255
    }
})
 
 
var User = module.exports = mongoose.model('User', Userschema)
module.exports.createUser = function(newUser, callback){
    
    newUser.save(callback)
}
module.exports.authenticate = function(email,password, callback){
//console.log(email)
// console.log(password)
    User.findOne({email: email,password: password})
    .exec(function(err, user){
        // console.log(err)
        // console.log(user)
        if(err){
            return callback(err)
        }else {
           
           return callback(err,user)
        }
        
    })
}

module.exports.getUsers = function(callback){
    User.find({}).exec(function(err,user){
        if(err){
            return callback(err)
        }
        else{
            return callback(err, user)
        }
    })
}
// //module to update data
module.exports.updateUser = function(username, email,callback){
    User.findOneAndUpdate({Username: username, Email: email})
    .exec(function(err,user){
      if(err){
          return callback(err)
      }
      else{
          return callback(err, user)
      }
    })
}
