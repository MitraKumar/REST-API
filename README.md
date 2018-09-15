# REST-API
A simple implementation of REST Api with CRUD functionality.\
Here no actual database is used the data is simply stored in json file.

## Requirments
1) [Node Js](https://nodejs.org/en/)

## Installation
1) Run `git clone https://github.com/MitraKumar/REST-API.git`
2) Run `npm install`
3) Run `npm start`

> Open [localhost:3000/passwords](https://localhost:3000/passwords) to see the passwords\
> Open [localhost:3000/users](https://localhost:3000/passwords) to see the users

## Routes

> `GET` Request to `/passwords` will show all the passwords.\
> `GET` Request to `/users` will show all the users.

> `POST` Request to `/passwords` will save a password.\
> `POST` Request to `/users` will save a user.

> `PUT` Request to `/passwords` will update a password.\
> `PUT` Request to `/users` will update a user..

> `DELETE` Request to `/passwords` will delete a password.\
> `DELETE` Request to `/users` will delete a user.

## Data format

> ### Password
```
{
  id: 
  website:
  password:
}
```

> ### User
```
{
  name:
  password:
}
```
