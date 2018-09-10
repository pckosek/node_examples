// FORM VALIDATION FUNCTION

function validateBallForm() {
    ball_form_element = document.getElementById('ball_form');
    
    if (ball_form_element.shape.value==="") {
        return false;
    } else {
        return true;
    }
}

// FORM SUBMISSION FUNCTION
function submitBallForm() {
    
    // run validation, return if form is incomplete
    valid = validateBallForm();
    if (valid===false) {
        return false;
    }
    
    // perform ajax request
     $.ajax({
            url: "process_ball_form",       // goes to https://user.tjhsst.edu/pckosek/process_ball_form
            type: "get",
            data:  $('#ball_form').serialize(),
            success: function(response) {
                displayResult(response);
            }            
        });         
            
}

// OPERATE ON RESULTANT DATA
function displayResult(response) {
    result_element = document.getElementById('results');
    result_element.innerHTML = response;
} 