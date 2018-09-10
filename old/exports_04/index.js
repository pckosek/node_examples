#!/usr/bin/nodejs

// LOAD CUSTOM EXPORTS
var mym = require('./my_module.js')

var txt = mym.read_a_file('foo.txt');
console.log(txt);