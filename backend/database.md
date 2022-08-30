```
npx sequelize-cli model:generate --name User --attributes username:string,password:string,active:integer

npx sequelize-cli model:generate --name Product --attributes productName:string,premium:float

npx sequelize-cli model:generate --name Transaction --attributes transactionDate:date,UserId:integer,ProductId:integer,qtyOrder:integer,totalOrder:float

```