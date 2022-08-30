# crud-nodejs

## STEPS

1. Install packages and dependencies

```
npm install
npm install express mysql2 sequelize bcrypt jsonwebtoken dotenv cors nodemon
npm install --save-dev sequelize-cli

```

2. Create database using sequelize (\*note: must change config.json setting)

```
npx sequelize-cli init

npx sequelize-cli model:generate --name User --attributes username:string,password:string,active:integer

npx sequelize-cli model:generate --name Product --attributes productName:string,premium:float

npx sequelize-cli model:generate --name Transaction --attributes transactionDate:date,UserId:integer,ProductId:integer,qtyOrder:integer,totalOrder:float

npm run db-install
```

3. RUN SERVER

```
npm start
```

4. Test Postman

### User

```
GET AllUsers:
localhost:3000/api/users

GET OneUser
localhost:3000/api/users/detail

POST CreateUser
localhost:3000/api/users/register

POST Login
localhost:3000/api/users/login

DELETE User
localhost:3000/api/users/:id

PUT UpdateUser
localhost:3000/api/users
```

### Product

```
GET AllProducts:
localhost:3000/api/products

GET OneProduct
localhost:3000/api/products/:id

POST CreateProduct
localhost:3000/api/products

DELETE Product
localhost:3000/api/products/:id

PUT UpdateProduct
localhost:3000/api/products/:id
```

### Transaction

```
GET AllTransactions:
localhost:3000/api/transactions

GET OneTransaction
localhost:3000/api/transactions

POST Order
localhost:3000/api/transactions

DELETE Transaction
localhost:3000/api/transactions/:id

PUT UpdateTransaction
localhost:3000/api/transactions/:id
```
