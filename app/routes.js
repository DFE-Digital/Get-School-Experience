const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


// MANAGE DATES ROUTING

router.post('/manage-dates/add-date/add-date', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var isMultiple = req.session.data['multiple-date']

  // Check whether the variable matches a condition
  if (isMultiple == "recurring-event"){
    // Send user to recurring option
    res.redirect('/manage-dates/add-date/recurring')
  } else {
    // Send user to experience type
    res.redirect('/manage-dates/add-date/experience-type')
  }

})



module.exports = router
