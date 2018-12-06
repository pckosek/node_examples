## sql code join

this script pre-populates two tables, one with game data and one with reference data for boost amounts.

the idea here is that you can select a value that references another table.

See it in action:
* `SOURCE` initialize.sql
* `UPDATE gamedata AS dest, (SELECT click_boost_amount FROM gamedata JOIN boosters on gamedata.click_booster_level = boosters.level where id = 0) AS src SET dest.clicks = dest.clicks + src.click_boost_amount WHERE dest.id = 0`
* `UPDATE gamedata AS dest, (SELECT click_boost_amount FROM gamedata JOIN boosters on gamedata.click_booster_level = boosters.level WHERE id = 1) AS src SET dest.clicks = dest.clicks + src.click_boost_amount WHERE dest.id = 1`

SPECIFCIALLY, the structure is as follows:
`UPDATE 
	gamedata AS dest,
	(
		SELECT click_boost_amount 
		FROM gamedata 
			JOIN boosters on gamedata.click_booster_level = boosters.level 
		WHERE id = 1
	) AS src 
SET dest.clicks = dest.clicks + src.click_boost_amount
WHERE dest.id = 1`