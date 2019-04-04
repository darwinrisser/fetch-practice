let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    id: Number,
    name: String,
    instrument: String,
    location: String,
    Endorsements: Object
})

module.exports = mongoose.model('User', userSchema);