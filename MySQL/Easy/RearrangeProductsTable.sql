SELECT
    product_id,
    store,
    CASE
        store
        WHEN 'store1' THEN store1
        WHEN 'store2' THEN store2
        WHEN 'store3' THEN store3
    END AS price
FROM
    Products
    CROSS JOIN (
        SELECT
            'store1' AS store
        UNION
        ALL
        SELECT
            'store2'
        UNION
        ALL
        SELECT
            'store3'
    ) stores
WHERE
    CASE
        store
        WHEN 'store1' THEN store1
        WHEN 'store2' THEN store2
        WHEN 'store3' THEN store3
    END IS NOT NULL;