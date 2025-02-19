
CREATE TABLE "products" (
    "id" NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "barcode" VARCHAR2(255),
    "name" VARCHAR2(255) NOT NULL,
    "size" VARCHAR2(255),
    "description" VARCHAR2(255),
    "price" NUMBER,
    "quantity" NUMBER,
    "category_id" NUMBER,
    "created_at" TIMESTAMP,
    "updated_at" TIMESTAMP
);

DROP TABLE products