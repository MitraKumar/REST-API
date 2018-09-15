# REST-API
A simple implementation of REST Api with CRUD functionality.\
Here no actual database is used the data is simply stored in json file.

## Requirments
1) [Node Js](https://nodejs.org/en/)

## Installation
1) Run `git clone https://github.com/MitraKumar/REST-API.git`
2) Run `npm install`
3) Run `npm start`

> Open [localhost:3000/api/passwords](localhost:3000/api/passwords) to see the passwords\
> Open [localhost:3000/api/users](localhost:3000/api/passwords) to see the users

## Routes

> `GET` Request to `/api/passwords` will show all the passwords.\
> `GET` Request to `/api/users` will show all the users.

> `POST` Request to `/api/passwords` will save a password.\
> `POST` Request to `/api/users` will save a user.

> `PUT` Request to `/api/passwords` will update a password.\
> `PUT` Request to `/api/users` will update a user..

> `DELETE` Request to `/api/passwords` will delete a password.\
> `DELETE` Request to `/api/users` will delete a user.

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
  id:
  name:
  password:
}
```
