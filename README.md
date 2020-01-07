# Księgarnia

System e-księgarni zbudowany w oparciu o architekturę mikrousług.

## Schemat wysokiego poziomu
![schemat mikrousług]("detail.png")

## Użyte technologie
Prawie wszystkie serwisy (błącznie z bramą API) są napisane w node.js
Serwis orders napisany jest w Javie z użyciem Spring Boot.
Każdy serwis żyje w kontenerze Dockera. Kontenery te są orkiestrowane przez kubernetesa.

## Uruchamianie klastra Kubernetesa
Potrzebne są: minikube, kubectl (skonfigurowany z virtualbox)

```
minikube start
```

a następnie w katalogu gdzie zapisaliśmy plik deployment.yml

```
kubectl create -f deployment.yml
```

Klaster zostanie uruchomiony i będzie dostępny pod adresem 192.168.99.100:30000
(domyślne IP + port bramy API zdefiniowany w deployment.yml)

## Użycie


### Logowanie
```
curl -H "Content-Type: application/json" -X POST -d '{"username":"admin", "password": "password"}' http://192.168.99.100:30000/login
```

### Zapytanie o książki

```
curl http://192.168.99.100:30000/books
```

### Zapytanie o dostawców:
```
curl http://192.168.99.100:30000/shippings
```

### Zapytanie do składania zamówienia:
```
curl -H "Content-Type: application/json" -H "Authorization: eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE1NzgzMjc5ODIsImV4cCI6MTU3ODM3MTE4MiwiYXVkIjoiY3VzdG9tZXJzIiwiaXNzIjoiaWFtIiwic3ViIjoib3JkZXJzIn0.FapiR6u43F6dx9vC59i0T3Mvmcpps_g1WZMVArRjAZJZ1xaWi-s6qjGPX-sL0ypmk55KBO3JBalWylw_Gj_x_Q" -X POST -d '{"id": 2, "bookId": 3, shippingId: 1}' http://192.168.99.100:30000/orders
```
