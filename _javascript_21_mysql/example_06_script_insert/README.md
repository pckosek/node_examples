## Putting it all together, so far

This example performs an insert, and then reads out multiple results

NOTE - that this is not a server example!!!! This is still a demonstrative example!! Use this process to make it work
  * Create necessary files on server
  * determine path to .sql file (in linux: readlink -f foo.sql)
  * populate your sql database (in sql: SOURCE /the/full/file/path/with/slashes/foo.sql) 
  * run the node file that inserts a record (in linux: node test_1.js)
  * verify that your db has been updated (in sql: SELECT * FROM students;) 
  * run the node file that reads multiple records (in linux: node test_2.js)