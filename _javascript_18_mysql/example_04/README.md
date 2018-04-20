## This example opens a connection to mysql via node using prepopulated data/

This example performs only a simple, single row read.

NOTE - that this is not a server example!!!! This is still a demonstrative example!! Use this process to make it work
  * Create necessary files on server
  * determine path to .sql file (in linux: readlink -f foo.sql)
  * populate your sql database (in sql: SOURCE /the/full/file/path/with/slashes/foo.sql) 
  * run the node file