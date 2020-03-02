function purchase() {
    var url = new URL( 'https://user.tjhsst.edu/pckosek/get_order' );

    var salad_chx = document.querySelector('input[name=salad]:checked').value;
    var main_chx  = document.querySelector('input[name=main]:checked').value;

    var params = {
        'salad' : salad_chx,
        'main'  : main_chx
    }

    Object.keys(params).forEach( function(elem) {
        url.searchParams.append(elem, params[elem])
    })

    console.log('--- THE URL IS ---')
    console.log(url.href)

	fetch(url)
	.then((response) => {
		return response.json()
	})
	.then((data) => {
		update_total(data)
	});
}

function update_total(data) {
	var span = document.getElementById('purchase_tot');
	span.innerHTML = data['cost'];	
}
