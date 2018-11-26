# drop existing procedure
DROP PROCEDURE IF EXISTS less_simple_proc; 
 
# change delimiter to $$ --> i.e. the statement terminator is changed to $$
DELIMITER $$ 
 
# name the procedure; this one HAS ONE argument
CREATE PROCEDURE less_simple_proc(IN usr_state CHAR(20))
BEGIN

SELECT s_name FROM students WHERE home=usr_state;

# statement (therefore, procedure) is over
END$$ 

# change the delimiter back to normal
DELIMITER ; 