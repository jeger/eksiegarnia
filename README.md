# Księgarnia

System e-księgarni zbudowany w oparciu o architekturę mikrousług.
Wersja demo.

## Instalacja
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

## Użycie

### Logowanie
```
curl -H "Content-Type: application/json" -X POST -d '{"username":"admin", "password": "password"}' http://localhost:10000/login
```

Odpytanie bramy API o książki. Brama API oddeleguje to zapytanie do usługi inventory.
https://github.com/iluwatar/java-design-patterns/tree/master/api-gateway
```
curl -i --request GET localhost:10000/books
```
