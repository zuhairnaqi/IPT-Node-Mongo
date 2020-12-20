const Student = require('../models/Student');

const getStudentsList = (req, res, next) => {
    Student.find()
    .then(students => res.json({ students }))
    .catch(error => res.json({ error }))
}

const getStudentByID = (req, res, next) => {
    const id = req.params.id;
    Student.findOne({ id })
    .then(student => res.json({ student }))
    .catch(error => res.json({ error }))
}

const addStudent = (req, res, next) => {
    const { id, name, father_name, address } = req.body;
    const student = new Student({
        id: id,
        name: name,
        father_name: father_name,
        address: address,
    })
    student.save()
    .then(response => res.json({ response, message: 'Student Added Successfully' }))
    .catch(error => {
        res.json({ error })
    })
}

const updateStudent = (req, res, next) => {
    const id = req.body.id;
    const student = {
        name: req.body.name,
        father_name: req.body.father_name,
        address: req.body.address,
    }
    Student.findOneAndUpdate({ id }, { $set: student })
    .then(response => res.json({ response, message: 'Student Updated Successfully' }))
    .catch(error => res.json({ error }))
}

const deleteStudent = (req, res, next) => {
    const id = req.params.id;
    Student.findOneAndDelete({ id })
    .then(response => res.json({ response, message: 'Student Deleted Successfully' }))
    .catch(error => res.json({ error }))
}

module.exports = {
    getStudentsList,
    getStudentByID,
    addStudent,
    updateStudent,
    deleteStudent,
}