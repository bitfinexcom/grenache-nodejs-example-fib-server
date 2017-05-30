'use strict'

const { Link, PeerRPCServer }  = require('grenache-nodejs-ws')

function fibonacci (n) {
  if (n <= 1) {
    return 1
  }

  return fibonacci(n - 1) + fibonacci(n - 2)
}

const link = new Link({
  grape: 'ws://127.0.0.1:30001'
})
link.start()

const peer = new PeerRPCServer(link, {})
peer.init()

const service = peer.transport('server')
service.listen(1337)

setInterval(() => {
  link.announce('fibonacci_worker', service.port, {})
}, 1000)

service.on('request', (rid, key, payload, handler) => {
  const result = fibonacci(payload.number)
  handler.reply(null, result)
})
