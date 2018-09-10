// Identify the text input area
var zipInput = document.getElementById('in_1');


// script tied to button press. called on the client side
function clientGetWeather() {
    
    // STEP 1 - DETERMINE IF THIS IS A VALID ZIP CODE
    zipCode = isValidZipCode(zipInput.value);
    
    // STEP 2 - (zipCode will be null if invalid)
    //        - GET THE WEATHER FOR THIS ZIP CODE
    if (zipCode !== null) {

        // Make asyncronous call to:
        //   https://user.tjhsst.edu/pckosek/get_the_weather?city=DDDDD
        // THIS MUST THEN BE HANDLED ON YOUR SERVER AT:
        //   app.get('/getweather', function(req, res){ ...

        $.get( "getweather", { city: zipCode },
            //Define callback function for when the resut is fetched.
            function( data ) {
                console.log("DATA BACK FROM SERVER:");
                console.log(data);
                updateDisplay(data);
            })
    }
}

// Client side function to determine if this is a valid zip code
// RETURNS THE 5 DIGIT ZIP CODE IF VALID, ELSE RETURNS NULL
function isValidZipCode(zipstr) {
    if (zipstr.length == 5) {
        
        // Cleanest way to solve this problem is regex... 
        // https://stackoverflow.com/questions/11127515/regex-for-5-digit-zip-or-empty
        var zipCodeRegex = /^(\d{5})?$/;
        if (zipCodeRegex.test(zipstr)) {
            return parseInt(zipstr);
        }
    }
    return null;
}

function updateDisplay(weatherOBJ) {
    var cityDisp = document.getElementById('city');
    var tempDisp = document.getElementById('temp');
    var presDisp = document.getElementById('press');
    
    console.log('WEATHER OBJECT!');
    console.log(weatherOBJ);
    
    cityDisp.innerHTML = weatherOBJ['city'];
    tempDisp.innerHTML = weatherOBJ['temp'];
    presDisp.innerHTML = weatherOBJ['pressure'];
}