# Księgarnia

System e-księgarni zbudowany w oparciu o architekturę mikrousług. 
Wersja demo.

## Instalacja
```
chmod +x install.sh
./install.sh
```

## Włączanie
Uruchomienie usługi inventory na porcie 10001:
```
node inventory/inventory.js
```
Uruchomienie usługi bramy API na porcie 10000:
```
node api_gateway/api_gateway.js
```

## Użycie
```
curl -i --request GET localhost:10000/books
```



