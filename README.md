# REST-API
A simple implementation of REST Api with CRUD functionality.\
Here no actual database is used the data.\
Database is implemented using vanilla javascript.\
Check out the database in this [repo](https://github.com/MitraKumar/Database.git).

## Requirments
1) [Node Js](https://nodejs.org/en/)

## Installation
```
 git clone https://github.com/MitraKumar/REST-API.git
 npm install
 npm start
```
> For runnig a dev server run `npm run dev`

## Routes

> `GET` Request to `/api/passwords` will show all the passwords.\
> `GET` Request to `/api/users` will show all the users.

> `GET` Request to `/api/passwords/:_id` will show the password with a id of _id.\
> `GET` Request to `/api/users/:_id` will show the user with a id of _id.

> `POST` Request to `/api/passwords` will save a password.\
> `POST` Request to `/api/users` will save a user.

> `PUT` Request to `/api/passwords/:_id` will update a password with id of _id.\
> `PUT` Request to `/api/users/:_id` will update a user with id of _id.

> `DELETE` Request to `/api/passwords/:_id` will delete a password with id of _id.\
> `DELETE` Request to `/api/users/:_id` will delete a user with id of _id.