DROP TABLE IF EXISTS gamedata;
CREATE TABLE gamedata(id INT, clicks INT, click_booster_level INT, PRIMARY KEY(id));
INSERT INTO gamedata(id,clicks,click_booster_level) VALUES (0, 0, 0);
INSERT INTO gamedata(id,clicks,click_booster_level) VALUES (1, 0, 1);

DROP TABLE IF EXISTS boosters;
CREATE TABLE boosters(level INT, click_boost_amount INT, PRIMARY KEY(level));
INSERT INTO boosters(level,click_boost_amount) VALUES (0, 0);
INSERT INTO boosters(level,click_boost_amount) VALUES (1, 10);