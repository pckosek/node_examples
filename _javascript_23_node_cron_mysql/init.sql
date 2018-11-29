DROP TABLE IF EXISTS students;
CREATE TABLE students(id INT, s_name VARCHAR(100), home VARCHAR(100), points INT, PRIMARY KEY(id));
INSERT INTO students(id, s_name, home, points) VALUES (1, 'George', 'VA', 0);
INSERT INTO students(id, s_name, home, points) VALUES (2, 'John', 'MA', 1);
INSERT INTO students(id, s_name, home, points) VALUES (3, 'Thom', 'VA', 100);
INSERT INTO students(id, s_name, home, points) VALUES (4, 'James', 'VA', 1000);