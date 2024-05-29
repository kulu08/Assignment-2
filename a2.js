/*********************************************************************************
* WEB700 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Kulpreet Singh Student ID: ksingh688 Date: May 28th, 2024
*
********************************************************************************/

const collegeData = require('./modules/collegeData'); // Import the collegeData module

collegeData.initialize() // Initialize the collegeData module
  .then(() => {
    // If initialization is successful, proceed to get all students
    // console.log('Initialization successful'); // This line is commented out but can be used for debugging
    return collegeData.getAllStudents(); // Fetch all students
  })
  .then(students => {
    // After successfully retrieving students
    console.log(`Successfully retrieved ${students.length} students`); // Log the number of students retrieved
    return collegeData.getCourses(); // Fetch all courses
  })
  .then(courses => {
    // After successfully retrieving courses
    console.log(`Successfully retrieved ${courses.length} courses`); // Log the number of courses retrieved
    return collegeData.getTAs(); // Fetch all TAs (Teaching Assistants)
  })
  .then(tas => {
    // After successfully retrieving TAs
    console.log(`Successfully retrieved ${tas.length} TAs`); // Log the number of TAs retrieved
  })
  .catch(err => {
    // Handle any errors that occur during any of the above steps
    console.error(err); // Log the error
  });
