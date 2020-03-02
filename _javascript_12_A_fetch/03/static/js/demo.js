function purchase() {

    var salad_chx = document.querySelector('input[name=salad]:checked').value;
    var main_chx  = document.querySelector('input[name=main]:checked').value;

    var params = {
        'salad' : salad_chx,
        'main'  : main_chx
    }

    fetch('https://user.tjhsst.edu/pckosek/get_order', {
        'method'  : 'POST',
        'body'    : JSON.stringify(params),
        'headers' : {
          'Content-Type': 'application/json'
        },        
    })
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log( data )
        update_total(data)
    });
}

function update_total(data) {
    var span = document.getElementById('purchase_tot');
    span.innerHTML = data['cost'];  
}
