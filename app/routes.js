const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


// MANAGE DATES ROUTING

//is recurring
router.post('/manage-dates/add-date/handle-recurring', function (req, res) {
	
	console.debug('from add date to recurring')
	
	var isRecurring = req.session.data['is-repeat-event']
	
	if (isRecurring == "yes-is-repeat"){
	    // Send user to recurring option
	    res.redirect('/manage-dates/add-date/recurring')
	  } else {
	    // Send user to details
	    res.redirect('/manage-dates/add-date/details')
	  }
	
})


//is recurring custom date
router.post('/manage-dates/add-date/handle-custom', function (req, res) {
	
	console.debug('from add date to recurring')
	
	var isRecurringCustom = req.session.data['recurring-type']
	
	if (isRecurringCustom == "custom"){
	    // Send user to recurring option
	    res.redirect('/manage-dates/add-date/exclude-dates-B')
	  } else {
	    // Send user to details
	    res.redirect('/manage-dates/add-date/exclude-dates')
	  }
	
})



//is secondary school
router.post('/manage-dates/add-date/handle-placement-details', function (req, res) {

  var isSecondary = req.session.data['school-phase']
  
  if (isSecondary == "secondary"){

    res.redirect('/manage-dates/add-date/secondary-type')
    
  } else {

    res.redirect('/manage-dates/add-date/check-answers')
  }

})


//is secondary school subject specific
router.post('/manage-dates/add-date/handle-subject-specific', function (req, res) {

  var isSecondary = req.session.data['secondary-type']
  
  if (isSecondary == "specific-subject"){

    res.redirect('/manage-dates/add-date/secondary-subjects')
    
  } else {

    res.redirect('/manage-dates/add-date/check-answers')
  }

})






//is secondary school subject specific - NOT NEEDED?
router.post('/manage-dates/add-date/handle-exclude-dates', function (req, res) {
	
	console.debug('from subject select to details page')
	
	res.redirect('/manage-dates/add-date/details')
	
})




module.exports = router
