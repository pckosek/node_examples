## sql code join

this script pre-populates two tables, one with game data and one with reference data for boost amounts.

the idea here is that you can select a value that references another table.

See it in action:
* `SOURCE` initialize.sql
* `SELECT click_boost_amount FROM gamedata JOIN boosters ON gamedata.click_booster_level = boosters.level where id = 0`
* `SELECT click_boost_amount FROM gamedata JOIN boosters ON gamedata.click_booster_level = boosters.level where id = 1`

SPECIFCIALLY, the structure is as follows:
<pre><code>
SELECT click_boost_amount
 FROM gamedata 
 JOIN boosters 
 	ON gamedata.click_booster_level = boosters.level
 WHERE id = 1
</code></pre>


- [ref 1](https://www.codeproject.com/Articles/33052/Visual-Representation-of-SQL-Joins)
- [ref 2](http://www.sql-join.com/)