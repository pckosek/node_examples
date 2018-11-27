DROP TABLE IF EXISTS students;
CREATE TABLE students(id INT, s_name VARCHAR(100), home VARCHAR(100), PRIMARY KEY(id));
INSERT INTO students(id, s_name, home) VALUE (1, 'George', 'VA');
INSERT INTO students(id, s_name, home) VALUE (2, 'John', 'MA');
INSERT INTO students(id, s_name, home) VALUE (3, 'Thom', 'VA');
INSERT INTO students(id, s_name, home) VALUE (4, 'James', 'VA');

# drop existing procedure
DROP PROCEDURE IF EXISTS get_by_state; 
 
DELIMITER $$ 

CREATE PROCEDURE get_by_state(IN usr_state CHAR(20)) # name the procedure; this one HAS ONE argument

BEGIN
SELECT s_name FROM students WHERE home=usr_state;
END$$ 

DELIMITER ;  # change the delimiter back to normal