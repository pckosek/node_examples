// Identify the element where we will put our result
var resultSpan = document.getElementById('res');


function flipCoin() {
    // JQUERY AJAX!!!!
    // $.get means perform a 'get request' - a function call to our server
    // $.get s performed in javascript make a server call, and get the result as a String
    // here, that strig is called data, and what you do with that string (data) is up to you!
    // I am choosing to stuff it into resultSpan
    
    // get the page at https://user.tjhsst.edu/pckosek/flipcoin
    // once fetched the source will be given to the callback function as <<data>>
    $.get( "flipcoin", function( data ) {
        console.log(data);
        resultSpan.innerHTML = data;
    })
}


function someAJAX_1() {
    //  get the page at https://user.tjhsst.edu/pckosek/1234
    // once fetched the source will be given to the callback function as <<data>>
    $.get( "1234", function( data ) {
        console.log(data);
        resultSpan.innerHTML = data;
    })
}

function someAJAX_2() {
    //  get the page at https://user.tjhsst.edu/pckosek/getpet?name=fluffy&type=dog
    // once fetched the source will be given to the callback function as <<data>>
    $.get( "getpet", 
        { name: "fluffy",
          type: "dog"
        },
        function( data ) {
            console.log(data);
            resultSpan.innerHTML = data;
        }
    )
}

function someAJAX_3() {
    //  get the page at https://user.tjhsst.edu/pckosek/getpet?name=fluffy&type=dog
    // once fetched the source will be given to the callback function as <<data>>
    
    var petName = document.getElementById('in_1').value;
    $.get( "getpet", 
        { name: petName,
          type: "dog"
        },
        function( data ) {
            console.log(data);
            resultSpan.innerHTML = data;
        }
    )
}


$('#jQueryLink').click( function() {
    resultSpan.innerHTML = 'bahahahaha';
})