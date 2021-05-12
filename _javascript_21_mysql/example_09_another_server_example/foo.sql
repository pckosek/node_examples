DROP TABLE IF EXISTS foods;
CREATE TABLE foods(id INT, f_name VARCHAR(100), menu VARCHAR(100), price DECIMAL(4,2), PRIMARY KEY(id));
INSERT INTO foods(id, f_name, menu, price) VALUE (1, 'Soup', 'appetizer', 1.50);
INSERT INTO foods(id, f_name, menu, price) VALUE (2, 'Eggrolls', 'appetizer', 2.75);
INSERT INTO foods(id, f_name, menu, price) VALUE (3, 'salad', 'side', 3.99);
INSERT INTO foods(id, f_name, menu, price) VALUE (4, 'Chicken', 'main', 8.50 );
INSERT INTO foods(id, f_name, menu, price) VALUE (5, 'Tofu', 'main', 7.95);
INSERT INTO foods(id, f_name, menu, price) VALUE (6, 'Brownies', 'dessert', 2.99);


# drop existing visitors_proc
DROP PROCEDURE IF EXISTS menu_proc; 
 
DELIMITER $$ 
 
# name the procedure; this one will have no arguments
CREATE PROCEDURE menu_proc() 
BEGIN

SELECT * FROM foods WHERE menu='appetizer';
SELECT * FROM foods WHERE menu='side';
SELECT * FROM foods WHERE menu='main';
SELECT * FROM foods WHERE menu='dessert';

# statement (therefore, procedure) is over
END$$ 

# change the delimiter back to normal
DELIMITER ; 