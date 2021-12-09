/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})


//select all subjects (add/manage dates)

document.getElementById('select-all').onclick = function() {
  var checkboxes = document.getElementsByName('subject');
  for (var checkbox of checkboxes) {
    checkbox.checked = this.checked;
  }
}
