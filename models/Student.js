const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    id: {
        type: String,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    father_name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    }
}, { timestamps: true })


const Student = mongoose.model('Student', studentSchema)

module.exports = Student;
