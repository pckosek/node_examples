// HOW TO GET THE VALUE FROM THE FORM

function checkBallForm() {
    // This is a simple example of form validation.

    ball_form_element = document.getElementById('ball_form');
    
    if (ball_form_element.shape.value==="") {
        return false;
    } else {
        return true;
    }

}

// GET THE USER INFO FROM SUBMIT

function usernameSubmitForm () {
    // get the form as a dom js element. Used for the validation.
    user_form_element = document.getElementById('user_form');

    // get the form as a jquery element. This is almost the same as above - but 
    // it is easier to serialize down in the ajax request.
    jquser_form_element = $('#user_form');
    
    // VALIDATE FORM
    // - RETURN (exit function) IF THE FORM IS INCOMPLETE
    if (user_form_element.username.value==="") {
        console.log('no username present')
        return false;
    } else if (user_form_element.password.value==="") {
        console.log('no password present')
        return false;
    } 
        
    $.ajax({
        url: "submit_userpass",
        type: "GET",
        data: $(jquser_form_element).serialize(),
        success: function(response) {
            console.log(response);
        }            
    });        
            
}