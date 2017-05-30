# Grenache fibonacci example server

Install Grape:

```
npm i -g grenache-grape
```

Start 2 Grapes:

```
grape --dp 20001 --apw 30001 --aph 30002 --bn '127.0.0.1:20002'
grape --dp 20002 --apw 40001 --aph 40002 --bn '127.0.0.1:20001'
```

Boot the server:

```
node server.js
```


After starting the server and grape, run:

```
node grenache-nodejs-example-fib-client/client.js
```
