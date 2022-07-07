const {Schema, model} = require('mongoose');

const profileSchema = new Schema({
    firstName: String,
    lastName: String,
    phoneNo: String,
    photo: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }

});

const Profile = model('Profile', profileSchema);
module.exports = Profile;