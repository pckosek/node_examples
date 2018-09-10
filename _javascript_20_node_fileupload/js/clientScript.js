// FORM VALIDATION FUNCTION

function highlightMissing(elem) {
    elem.animate( 
        {borderColor: "#F00"}, 50
                      ).animate(
        {borderColor: "#FFF"}, 2000 );
}

function validateForm(formdata) {

    label_missing = false;
    image_missing = false;

    if (formdata.get("image_class")=="--select--") {
        label_missing = true;
        highlightMissing($("#flower_chooser"))
    }
    if (formdata.get("image_file").name==="") {
        image_missing = true;
        highlightMissing($("#image_chooser"))
    }
    
    valid = (!label_missing && !image_missing); 
    return valid;
}


// FORM SUBMISSION FUNCTION
function submitFlowerForm() {
    
    form_dom = document.getElementById("flower_form");
    formdata = new FormData(form_dom);

    // run validation, return if form is incomplete
    valid = validateForm(formdata);
    if (valid===false) {
        return false;
    }
    
    //disable button and display loader
    ub = document.getElementById("upload_button");
    ub.disabled = true;
    
    ld = document.getElementById("loader_display");
    ld.className = 'loader';
    
    // perform ajax request
     $.ajax({
            url: "process_form",
            type: "post",
            enctype: 'multipart/form-data',
            processData: false, 
            contentType: false,            
            data: formdata,
            success: function(response) {
                displayResult(response);
            },
            error: function(err) {
                displayResult(err.statusText);
            }
        });         
            
}

// OPERATE ON RESULTANT DATA
function displayResult(response) {
    result_element = document.getElementById('server_response');
    result_element.innerHTML = response;

    f = document.getElementById("upload_button");
    f.disabled = false;

    ld = document.getElementById("loader_display");
    ld.className = 'null';
    
    fs = document.getElementById("flower_select")
    fs.selectedIndex = 0;
    
    ul = document.getElementById('f_upload');
    ul.value = [];
    
} 