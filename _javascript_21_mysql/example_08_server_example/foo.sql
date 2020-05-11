DROP TABLE IF EXISTS foods;
CREATE TABLE foods(id INT, f_name VARCHAR(100), menu VARCHAR(100), PRIMARY KEY(id));
INSERT INTO foods(id, f_name, menu) VALUE (1, 'Soup', 'appetizer');
INSERT INTO foods(id, f_name, menu) VALUE (2, 'Eggrolls', 'appetizer');
INSERT INTO foods(id, f_name, menu) VALUE (3, 'salad', 'side');
INSERT INTO foods(id, f_name, menu) VALUE (4, 'Chicken', 'main');
INSERT INTO foods(id, f_name, menu) VALUE (5, 'Tofu', 'main');
INSERT INTO foods(id, f_name, menu) VALUE (6, 'Brownies', 'dessert');