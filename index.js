const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3001

server.use(jsonServer.bodyParser)
server.use(middlewares)

server.listen(port, () => {
 console.log('JSON Server is running')
})

server.get('/users', (request, response) => {
    if (request.method === 'GET') {
        const usernames = require('./users.json').names.sort()
        response.status(200).jsonp(usernames)
    }
})