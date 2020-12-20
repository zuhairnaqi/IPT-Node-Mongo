const Enrollment = require('../models/Enrollment');

const getEnrollments = (req, res, next) => {
    Enrollment.aggregate([
        {
            $lookup: {
                from: 'students',
                localField: 'student_id',
                foreignField: 'id',
                as: 'student'
            }
        },
        { $unwind: "$student" },
        {
            $lookup: {
                from: 'courses',
                localField: 'course_id',
                foreignField: 'id',
                as: 'course'
            }
        },
        { $unwind: "$course" },
    ]).then(enrollments => res.json({ enrollments }))
    .catch(error => res.json({ error }))
}

const addEnrollment = (req, res, next) => {
    const enrollment = new Enrollment(req.body)
    enrollment.save()
    .then(enrollment => res.json({ enrollment, message: 'Enrollment Added Successfully'}))
    .catch(error => res.json({ error }))
}

const updateEnrollment = (req, res, next) => {
    const id = req.body.id;
    Enrollment.findOneAndUpdate({ id }, { $set: req.body })
    .then(enrollment => res.json({ enrollment, message: 'Enrollment Updated Successfully'}))
    .catch(error => res.json({ error }))
}

const deleteEnrollment = (req, res, next) => {
    const id = req.params.id;
    Enrollment.findOneAndDelete({ id })
    .then(enrollment => res.json({ enrollment, message: 'Enrollment Deleted Successfully'}))
    .catch(error => res.json({ error }))
}

module.exports = {
    addEnrollment,
    updateEnrollment,
    deleteEnrollment,
    getEnrollments
}
