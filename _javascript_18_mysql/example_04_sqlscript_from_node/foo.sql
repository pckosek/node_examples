DROP TABLE IF EXISTS students;
CREATE TABLE students(id INT, s_name VARCHAR(100), home VARCHAR(100), PRIMARY KEY(id));
INSERT INTO students(id, s_name, home) VALUE (1, 'George', 'VA');
INSERT INTO students(id, s_name, home) VALUE (2, 'John', 'MA');
INSERT INTO students(id, s_name, home) VALUE (3, 'Thom', 'VA');
INSERT INTO students(id, s_name, home) VALUE (4, 'James', 'VA');