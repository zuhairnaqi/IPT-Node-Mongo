const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EnrollmentSchema = new Schema({
    student_id: {
        type: String,
        require: true,
    },
    course_id: {
        type: String,
        require: true,
    },
    term: {
        type: String,
        require: true,
    },
}, { timestamps: true })

const Enrollment = mongoose.model('Enrollment', EnrollmentSchema);

module.exports = Enrollment;