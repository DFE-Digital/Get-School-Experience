const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


// MANAGE DATES ROUTING

//is recurring
router.post('/manage-dates/add-date/add-date', function (req, res) {

  var isMultiple = req.session.data['multiple-date']

  if (isMultiple == "recurring-event"){
    // Send user to recurring option
    res.redirect('/manage-dates/add-date/recurring')
  } else {
    // Send user to close period
    res.redirect('/manage-dates/add-date/details')
  }

})


//is custom date
router.post('/manage-dates/add-date/recurring', function (req, res) {

  
  var isExcludeOption = req.session.data['exclude-date-option']

  if (isExcludeOption == "exclude-date-check"){
    // Send user to exclude dates option
    res.redirect('/manage-dates/add-date/exclude-dates')
  } else {
    // Send user to end date page
    res.redirect('/manage-dates/add-date/details')
  }

})





//is secondary school
router.post('/manage-dates/add-date/details', function (req, res) {

  var isSecondary = req.session.data['experience-phase']

  // Check whether the variable matches a condition
  if (isSecondary == "secondary"){
    // Send user to recurring option
    res.redirect('/manage-dates/add-date/secondary-type')
  } else {
    // Send user to experience type
    res.redirect('/manage-dates/add-date/check-answers')
  }

})


//is secondary school subject specific
router.post('/manage-dates/add-date/secondary-type', function (req, res) {

  var isSecondarySubject = req.session.data['secondary-type']

  if (isSecondarySubject == "specific-subject"){
    res.redirect('/manage-dates/add-date/secondary-subjects')
  } else {
    res.redirect('/manage-dates/add-date/check-answers')
  }

})




module.exports = router
