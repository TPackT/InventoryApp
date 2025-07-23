SELECT * FROM "products"
ORDER BY "id" ASC;







DELETE FROM "products";
COMMIT;



--BEGIN
--DBMS_NETWORK_ACL_ADMIN.APPEND_HOST_ACE(
--host => '*',
--ace => xs$ace_type(privilege_list => xs$name_list('resolve'),
--principal_name => 'PUBLIC',
--principal_type => xs_acl.ptype_db));
--DBMS_NETWORK_ACL_ADMIN.APPEND_HOST_ACE(
--host => '*',
--ace => xs$ace_type(privilege_list => xs$name_list('connect'),
--principal_name => 'PUBLIC',
--principal_type => xs_acl.ptype_db));
--END;
--/
--COMMIT;

SELECT * FROM "products"
WHERE REGEXP_LIKE("size",  '^\d+,\d+[a-zA-Z]+$');

SELECT * FROM "products"
WHERE REGEXP_LIKE("size",  '^\d+ [A-Z]+$', 'c');

SELECT * FROM "products"
WHERE "size" LIKE '%l%';

UPDATE "products"
SET "size" = REPLACE ("size", 'L', 'l')
WHERE "size" LIKE '%L%';

SELECT *
FROM "products"
WHERE "quantity" IS NULL;

UPDATE "products"
SET "quantity" = 0
WHERE "quantity" IS NULL;



UPDATE "products"
SET "size" = REGEXP_REPLACE("size", '(\d+,d+)([a-zA-Z]+)', '\1 \2')
WHERE REGEXP_LIKE("size",  '^\d+,\d+[a-zA-Z]+$');


COMMIT;