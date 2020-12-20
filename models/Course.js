const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    theory_hours: {
        type: Number,
        required: true
    },
    lab_hours: {
        type: Number,
        default: 0
    },
}, { timestamps: true })

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;