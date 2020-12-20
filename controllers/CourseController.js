const Course = require('../models/Course');

const express = require('express');
const router = express.Router();

const getCourses = (req, res, next) => {
    Course.find()
    .then(courses => res.json({ courses }))
    .catch(error => res.json({ error }))
}

const getCourseById = (req, res, next) => {
    const id = req.params.id;
    Course.findOne({ id })
    .then(course => res.json({ course }))
    .catch(error => res.json({ error }))
}

const addCourse = (req, res, next) => {
    const { id, name, theory_hours, lab_hours } = req.body;
    const course = new Course({
        id, name, theory_hours, lab_hours
    })
    try {
        course.save()
        .then(response => res.json({ response, message: 'Course Added Successfully' }))
        .catch(error => res.json({ error }))
    } catch (error) {
        res.json({ error })
    }
}

const updateCourse = (req, res, next) => {
    Course.findOneAndUpdate({ id: req.body.id }, { $set: req.body })
    .then(response => res.json({ response, message: 'Course Updated Successfully' }))
    .catch(error => res.json({ error }))
}

const deleteCourse = (req, res, next) => {
    const id = req.params.id
    Course.findOneAndDelete({ id })
    .then(response => res.json({ response, message: 'Course Deleted Successfully' }))
    .catch(error => res.json({ error }))
}

module.exports = {
    getCourses,
    getCourseById,
    addCourse,
    updateCourse,
    deleteCourse
}
