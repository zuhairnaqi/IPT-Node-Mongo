const express = require('express');
const router = express.Router();
const CourseController = require('../controllers/CourseController');

router.get('', CourseController.getCourses)
router.get('/:id', CourseController.getCourseById)
router.post('', CourseController.addCourse)
router.put('', CourseController.updateCourse)
router.delete('/:id', CourseController.deleteCourse)

module.exports = router;
