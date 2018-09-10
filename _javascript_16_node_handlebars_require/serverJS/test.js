// source url:
// https://developer.yahoo.com/weather/

// SUPER MEGA BIGLY HINT!

request = require('request');

// ----------------------------------------- //
// YOUR OLD FAVORITE, BRUTE FORCE

queryUrl = 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="Alexandria, VA")&format=json&env=store://datatables.org/alltableswithkeys'

request.get( {url : queryUrl}, 
    // callback for when we get a response
    function (e, r, body) {
        // console.log(body);
    }
)

// ----------------------------------------- //
// SLIGHTLY MORE ELEGANT WITH A FEED DICTIONARY
// qs is a required name in the object for passing key-value pairs
// ref: https://www.npmjs.com/package/request#requestoptions-callback


feed_dict = {
    url    : 'https://query.yahooapis.com/v1/public/yql',
    method : 'GET', 
    qs     : {
        q      : 'select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="Alexandria, VA")',
        env    : 'store://datatables.org/alltableswithkeys',
        format : 'json'
    }
};

request( feed_dict, 
    // callback for when we get a response
    function (e, r, body) {
        // console.log(body);
    }
)


// ----------------------------------------- //
// SELECTIVE QUERYING

param = 'wind';
yql   = 'select ' + param + ' from weather.forecast where woeid in (select woeid from geo.places(1) where text="Alexandria, VA")'

// -- or using string templates i.e.  `` with ${} -- 
yql   = `select ${param} from weather.forecast where woeid in (select woeid from geo.places(1) where text="Alexandria, VA")`

feed_dict = {
    url    : 'https://query.yahooapis.com/v1/public/yql',
    method : 'GET', 
    qs     : {
        q      : yql,
        env    : 'store://datatables.org/alltableswithkeys',
        format : 'json'
    }
};

request( feed_dict, 
    // callback for when we get a response
    function (e, r, body) {
        console.log(body);
        console.log('-------------')
        // console.log(body.query.results.channel.wind.chill);
        obj = JSON.parse(body);
        console.log(obj.query.results.channel.wind.chill);
    }
)