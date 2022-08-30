# crud-nodejs

## STEPS

1. Create database and columns 
```
create table data_transaction (
trans_id int(10) not null auto_increment,
trans_date date,
user_id varchar(25) not null,
product_id int not null,
qty_order int not null,
total_order decimal(10,2) not null,
PRIMARY KEY (trans_id),
FOREIGN KEY (product_id) REFERENCES data_product(product_id),
FOREIGN KEY (user_id) REFERENCES data_user(user_id)
)

create table data_product (
product_id int not null auto_increment,
product_name varchar(60) not null,
premium decimal(10,2) not null,
PRIMARY KEY (product_id)
);

create table data_user (
user_id varchar(25) not null,
user_name varchar(80) not null,
active int not null,
PRIMARY KEY (user_id)
);

-- insert data user
INSERT INTO data_user VALUES ('A01', "user A01", 1);
INSERT INTO data_user VALUES ('A02', "user A02", 1);
INSERT INTO data_user VALUES ('B01', "user B01", 0);
INSERT INTO data_user VALUES ('B02', "user B02", 1);
INSERT INTO data_user VALUES ('C01', "user C01", 0);
INSERT INTO data_user VALUES ('C02', "user C02", 1);

-- insert product
INSERT INTO data_product VALUES (0,"Asuransi Mikro KKM", 50000);
INSERT INTO data_product VALUES (2,"Asuransi Pijar", 200000);
INSERT INTO data_product VALUES (3,"Asuransi Life Car", 75000);
INSERT INTO data_product VALUES (4,"Asuransi AcciCare", 35000);

-- insert data_transaction
INSERT INTO data_transaction VALUES (0,"2021-11-11", 'A01', 1, 1, 50000);
```

2. IMPORT 
```
npm i express
npm i mysql
npm i body-parser
```

3. RUN SERVER 
```
node index.js
```

4. Test Postman
```
GET User
localhost:3000/user

GET OneUser
localhost:3000/user/A02

CREATE User
localhost:3000/user

DELETE User
localhost:3000/user/B01

GET Product
localhost:3000/product

GET OneProduct
localhost:3000/product/1

CREATE Product
localhost:3000/product

DELETE Product
localhost:3000/product/2

GET Transaction
localhost:3000/transaction

GET OneTransaction
localhost:3000/transaction/1

CREATE Transaction
localhost:3000/transaction

DELETE Transaction
localhost:3000/transaction/2
```