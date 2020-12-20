const express = require('express');
const router = express.Router();
const EnrollmentController = require('../controllers/EnrollmentController');

router.get('', EnrollmentController.getEnrollments)
router.post('', EnrollmentController.addEnrollment)
router.put('', EnrollmentController.updateEnrollment)
router.delete('/:id', EnrollmentController.deleteEnrollment)

module.exports = router;
