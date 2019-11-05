## This example shows how to run a sql script.

This will allow you to 'prewrite' sql commands, and then run as a batch - all at once! This functionality will be immensely useful if you have larger or complicated databases.

Here's the process:
* place the .sql file in a folder on your server
* navigate to the sql command prompt and type the command:
  ```
  SOURCE foo.sql
  ```
* if your sql script is in a different folder, you may need to run the command:
  ```
  SOURCE /web/the/full/file/path/foo.sql
  ```

 once you have run the initialization script, at the sql prompt you can run a command like
 SELECT * FROM students;
 to see all your sql wonderfulness!
