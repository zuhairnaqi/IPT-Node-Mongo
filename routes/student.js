const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/StudentController');

router.get('', StudentController.getStudentsList)
router.get('/:id', StudentController.getStudentByID)
router.post('', StudentController.addStudent)
router.put('', StudentController.updateStudent)
router.delete('/:id', StudentController.deleteStudent)

module.exports = router;
