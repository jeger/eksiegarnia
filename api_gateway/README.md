logowanie (uzyskanie tokenu)
```
curl -H "Content-Type: application/json" -X POST -d '{"username":"admin", "password": "password"}' http://localhost:10000/login

```

przykładowe zapytanie 
```curl -H "Content-Type: application/json" -H "Authorization: JWT {jwt}" -X GET http://localhost:10000/books
```
