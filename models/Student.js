const {Schema, model} = require('mongoose');

const studentSchema = new Schema({
    timeLimit: Number,
    status: String,
    createdAt: Date,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    admin: {
        type: Schema.Types.ObjectId,
        ref: 'Admin'
    }
});

const Student = model('Student', studentSchema);
module.exports = Student;