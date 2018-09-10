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

    // VALIDATE FORM
    // - RETURN (exit function) IF THE FORM IS INCOMPLETE
    if (user_form_element.username.value==="") {
        console.log('no username present')
        return false;
    } else if (user_form_element.password.value==="") {
        console.log('no password present')
        return false;
    } 
        
    // make an asychronous request to the url:
    // https://user.tjhsst.edu/pckosek/submit_userpass?username=1423&password=foobar
    $.ajax({
        url: "submit_userpass",                 // goes to https://user.tjhsst.edu/pckosek/submit_userpass
        type: "GET",                            // specify that this is going to be a get request
        data: $('#user_form').serialize(),      // this line uses jQuery to extract from the form a string like: username=1423&password=foobar
        success: function(response) {
            // the function we are in is called when the server responds with data
            console.log(response);              
        }            
    });        
            
}