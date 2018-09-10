## This example passes binary and keyed data back and forth to python

This example performs passes complex data into python, and shows how to get it back. The key elements are that:
 * if you want to get multiple pieces of data into python from node, you have to do bundle it into a json object, and then stringify
   * this is line 29-35 of test.js
 * if you want to pass binary data or complexly structured data from python back to node, you can bundle it into stringified json
   * line 26 of test.py handles this

NOTE - that this is not a server example!!!! This is a demonstrative example!! Use this process to make it work
  * Create necessary files on server
  * run the javascript file (in linux: node test.js)