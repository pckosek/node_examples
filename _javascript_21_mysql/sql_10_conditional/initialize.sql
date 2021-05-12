DROP TABLE IF EXISTS gamedata;
CREATE TABLE gamedata(id INT, clicks INT, profit INT, PRIMARY KEY(id));
INSERT INTO gamedata(id,clicks,profit) VALUES (0, 0, 0);
INSERT INTO gamedata(id,clicks,profit) VALUES (1, 12, 0);

#-------- PROCEDURE --------

# drop existing procedure
DROP PROCEDURE IF EXISTS boost_by_hundred;

DELIMITER $$ 

CREATE PROCEDURE boost_by_hundred(IN usr INT)

BEGIN
    # this is a local variable for reading into
    DECLARE queried_value INT;
    
    # select the user's click total, and save it as queried_value
    SELECT clicks INTO queried_value
        FROM gamedata
        WHERE id = usr;
    
    # conditional check
    IF queried_value = 12 THEN
       UPDATE gamedata SET clicks=clicks+100 WHERE id = usr;
    END IF;

END;$$

DELIMITER ;  # change the delimiter back to normal