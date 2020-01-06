# Księgarnia

System e-księgarni zbudowany w oparciu o architekturę mikrousług.

## Schemat wysokiego poziomu
![schemat mikrousług](detail.png)

## Użyte technologia
Prawie wszystkie serwisy (błącznie z bramą API) są napisane w node.js
Serwis orders napisany jest w Javie z użyciem Spring Boot.
Każdy serwis żyje w kontenerze Dockera. Kontenery te są orkiestrowane przez kubernetesa.

## Użycie


### Logowanie
```
curl -H "Content-Type: application/json" -X POST -d '{"username":"admin", "password": "password"}' http://192.168.99.100:30000/login
```

### Zapytanie o książki

```
curl -H "Authorization: eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE1NzgzMjc5ODIsImV4cCI6MTU3ODM3MTE4MiwiYXVkIjoiY3VzdG9tZXJzIiwiaXNzIjoiaWFtIiwic3ViIjoib3JkZXJzIn0.FapiR6u43F6dx9vC59i0T3Mvmcpps_g1WZMVArRjAZJZ1xaWi-s6qjGPX-sL0ypmk55KBO3JBalWylw_Gj_x_Q" http://192.168.99.100:30000/books
```

o dostawców:
```
curl -i --request GET http://192.168.99.100:30000/shippings
```

składanie zamówienia:
```
curl -H "Content-Type: application/json" -H "Authorization: eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE1NzgzMjc5ODIsImV4cCI6MTU3ODM3MTE4MiwiYXVkIjoiY3VzdG9tZXJzIiwiaXNzIjoiaWFtIiwic3ViIjoib3JkZXJzIn0.FapiR6u43F6dx9vC59i0T3Mvmcpps_g1WZMVArRjAZJZ1xaWi-s6qjGPX-sL0ypmk55KBO3JBalWylw_Gj_x_Q" -X POST -d '{"id": 2, "bookId": 3}' http://localhost:8080/orders
```


eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE1NzgzMjY5OTksImV4cCI6MTU3ODM3MDE5OSwiYXVkIjoiY3VzdG9tZXJzIiwiaXNzIjoiaWFtIiwic3ViIjoib3JkZXJzIn0.EBNPkxTd18Rqm4FqocX1ID5LyKxhFvmHVaNOWwnMNywpUrKlihGTBWxS0K3LHbtSkO-BDFx967L59Ai9bY4wzg
