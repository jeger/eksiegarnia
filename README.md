# Księgarnia

System e-księgarni zbudowany w oparciu o architekturę mikrousług. 
Wersja demo.

## Instalacja
```
chmod +x run.sh
./run.sh
```

## Włączanie
```
node inventory/inventory.js
node api_gateway/api_gateway.js
```

## Użycie
```
curl -i --request GET localhost:10000/books
```



