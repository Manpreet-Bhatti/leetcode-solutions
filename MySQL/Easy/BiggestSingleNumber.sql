SELECT
    MAX(num) AS num
FROM
    (
        SELECT
            num,
            COUNT(*) AS count
        FROM
            MyNumbers
        GROUP BY
            num
    ) AS counted_numbers
WHERE
    count = 1;