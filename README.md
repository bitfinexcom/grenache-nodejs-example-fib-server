# Grenache fibonacci example server

Install Grape:

```
npm i -g grenache-grape
```

Start 2 Grapes:

```
grape --dp 20001 --aph 30001 --bn '127.0.0.1:20002'
grape --dp 20002 --aph 40001 --bn '127.0.0.1:20001'
```

Boot the server:

```
node server.js
```


After starting the server and grape, run:

```
node grenache-nodejs-example-fib-server/server.js
```
