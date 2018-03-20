// HOW TO GET THE VALUE FROM THE FORM

function checkBallForm() {
    ball_form_element = document.getElementById('ball_form');
    
    if (ball_form_element.shape.value==="") {
        return false;
    } else {
        return true;
    }

}

// GET THE USER INFO FROM SUBMIT

function usernameSubmitForm () {
    user_form_element = document.getElementById('user_form');
    jquser_form_element = $('#user_form');
    valid = false;
    
    if (user_form_element.username.value==="") {
        console.log('no username present')
        return valid;
    } else if (user_form_element.password.value==="") {
        console.log('no password present')
        return valid;
    } else {
        valid = true;
    }
        
    if (valid) {
        $.ajax({
            url: "submit_userpass",
            type: "GET",
            data: $(jquser_form_element).serialize(),

            success: function(response) {
                console.log(response);
            }            
        });        
            
        
    }

}