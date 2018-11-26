# drop existing procedure
DROP PROCEDURE IF EXISTS simple_proc; 
 
# change delimiter to $$ --> i.e. the statement terminator is changed to $$
DELIMITER $$ 
 
# name the procedure; this one will have no arguments
CREATE PROCEDURE simple_proc() 
BEGIN

SELECT home FROM students WHERE id=1;

# statement (therefore, procedure) is over
END$$ 

# change the delimiter back to normal
DELIMITER ; 