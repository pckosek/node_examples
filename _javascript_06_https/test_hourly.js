
// AT THE TOP OF YOUR FILE
var  https = require('https');


// ULTIMATELY EMBED IN AN ENDPOINT
var url = 'https://api.weather.gov/points/42.9356,-78.8692'
// var url = 'https://api.weather.gov/gridpoints/BUF/35,47/forecast/hourly'
var options =  { headers : {
		'User-Agent': 'request'
	}
}

console.log('A');
https.get(url, options, function(response) {

  console.log('B')
  var rawData = '';
  response.on('data', function(chunk) {
      console.log('C')
      rawData += chunk;
  });
  console.log('D')

  response.on('end', function() {
      console.log('E')
      // console.log(rawData);  // THIS IS WHERE YOU HAVE ACCESS TO RAW DATA
      // obj = JSON.parse(rawData);
  });
  console.log('F')

}).on('error', function(e) {
    console.error(e);
});
console.log('G')