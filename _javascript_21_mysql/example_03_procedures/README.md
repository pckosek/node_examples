## This example shows how to run a sql script.

This will allow you to 'prewrite' sql procedures. The procedure is a sql function that exists on the server

Here's the process:
* place the .sql file in a folder on your server
* determine the full path to your .sql file. To do this, at the linux prompt run the command:
  * readlink -f foo.sql
* navigate to the sql command prompt and type the command:
  * SOURCE /the/full/file/path/with/slashes/proc_1.sql

 then, you can run a command like<br>
`call simple_proc;`<br>
OR<br>
`call less_simple_proc('VA')`<br>
 to see all your sql wonderfulness!