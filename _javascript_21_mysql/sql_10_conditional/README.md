## sql code showing coniditional.

this script pre-populates a simple table with id, clicks and profits.

the idea behind the procedure is that if it is called on in **id** where the clicks are equal to 12, they will be boosted by 100.

See it in action:
* `SOURCE` initialize.sql
* `SELECT * FROM gamedata;`
* `call boost_by_hundred(0);`
* `SELECT * FROM gamedata;`
* `call boost_by_hundred(1);`
* `SELECT * FROM gamedata;`
