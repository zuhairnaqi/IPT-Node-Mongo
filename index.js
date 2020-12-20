const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const StudentRoute = require('./routes/student');
const CourseRoute = require('./routes/course');
const EnrollmentRoute = require('./routes/enrollment');

mongoose.connect('mongodb://localhost:27017/IPTDatabase', { useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection;

db.on('error', e => {
    console.log('error -->', e);
})

db.once('open', () => {
    console.log('DB connected established');
})

const app = express();
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)   
})

app.use('/api/student', StudentRoute)
app.use('/api/course', CourseRoute)
app.use('/api/enrollment', EnrollmentRoute)
