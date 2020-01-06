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



Odpytanie bramy API o książki. Brama API oddeleguje to zapytanie do usługi inventory.
https://github.com/iluwatar/java-design-patterns/tree/master/api-gateway
```
curl -i --request GET http://192.168.99.100:30000/books
```

o dostawców:
```
curl -i --request GET http://192.168.99.100:30000/shippings
```
