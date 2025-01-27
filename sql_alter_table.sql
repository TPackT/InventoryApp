INSERT INTO PRODUCTS (barcode, name, "SIZE", description, price, quantity, created_at, updated_at)
VALUES ('5449000006271', 'Fanta', '500ml', 'desc', 25, 60, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

SELECT * FROM "products";

SELECT 
    table_name
FROM
    dba_tables;


DROP TABLE "products";
