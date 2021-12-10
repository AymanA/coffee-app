# Coffee App

## Getting Started!

### Installation

```sh
 cd coffee-app
 npm install
 npm run dev
```

### Database 

- add the following keys to your .env  file

```
DB_CONNECTION=mysql
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_DB_NAME=
```
- run the following command to migrate tables in database 

```
node ace migration:run
```

- to run seeders

```
node ace db:seed
```

### Task Notes

- product types will be 1,2,3 for machines 
- product types will be 4,5,6 for pods
- pack sizes will be 1,2,3,4 

## Examples
- to get large coffee machines
```
GET /api/v1/machines?productType=1
```
- to get all espresso machines

```
GET /api/v1/machines?productType=3
```
result
```
{
    "data": [
        "EM001",
        "EM002",
        "EM003"
    ]
}
```
- to get all small pods

```
GET /api/v1/pods?productType=5
```

result 
```
{
    "data": [
        "CP001",
        "CP003",
        "CP011",
        "CP013",
        "CP021",
        "CP023",
        "CP031",
        "CP033",
        "CP041",
        "CP043"
    ]
}
```

- to get all pods sold in 7 dozen packs

```
GET /api/v1/pods?packSize=4
```

result 
```
{
    "data": [
        "EP007",
        "EP017"
    ]
}
```