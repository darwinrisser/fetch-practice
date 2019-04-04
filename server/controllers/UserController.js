const User = require("../models/UserModel");

exports.list = function list(request, response) {
    User.find().exec().then((users)=>{
        return response.json(users);
    })
}