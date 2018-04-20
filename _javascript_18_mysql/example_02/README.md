## This example shows how to run a sql script.

This will allow you to 'prewrite' sql commands, and then run as a batch - all at once! This functionality will be immensely useful if you have larger or complicated databases.

Here's the process:
* place the .sql file in a folder on your server
* determine the full path to your .sql file. To do this, at the linux prompt run the command:
  * readlink -f foo.sql
* navigate to the sql command prompt and type the command:
  * SOURCE /the/full/file/path/with/slashes/foo.sql

 then, you can run a command like
 SELECT * FROM students;
 to see all your sql wonderfulness!