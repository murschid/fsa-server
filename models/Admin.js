const {Schema, model} = require('mongoose');

const adminSchema = new Schema({
    timeLimit: Number,
    status: String,
    createdAt: Date,
});

const Admin = model('Admin', adminSchema);
module.exports = Admin;