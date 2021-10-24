const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    validated: Boolean,
    urlImage: String
})

userSchema.methods.isValidated = (userId) => {
    const user = this.model('users').find({ _id: userId })
    return user.validated
}

const User = mongoose.model('user', userSchema);

module.exports = User;