SELECT
    W.name,
    W.population,
    W.area
FROM
    World as W
WHERE
    W.area >= 3000000
    OR W.population >= 25000000;