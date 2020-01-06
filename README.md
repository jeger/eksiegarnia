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

<!-- ## Instalacja
Założenie: zainstalowany menedżer pakietów npm
```
chmod +x install.sh
./install.sh
```

## Włączanie
Sposób manualny, odpalamy kilka terminali i wklejamy komendy. Założenie: zainstalowany node. Preferowane jest jednak użycie Dockera ponieważ są już obecne pliki Dockerfile.

Uruchomienie usługi inventory na porcie 10001:
```
node inventory/inventory.js
```
Uruchomienie usługi bramy API na porcie 10000:
```
node api_gateway/api_gateway.js
```
Uruchomienie usługi przewoźników na porcie 10002:
```
node shipping/shipping.js
```

## Użycie -->

### Logowanie
```
curl -H "Content-Type: application/json" -X POST -d '{"username":"admin", "password": "password"}' http://localhost:10000/login
```

Odpytanie bramy API o książki. Brama API oddeleguje to zapytanie do usługi inventory.
https://github.com/iluwatar/java-design-patterns/tree/master/api-gateway
```
curl -i --request GET localhost:10000/books
```
