const jsonServer = require('json-server')


const server = jsonServer.create()
const router = jsonServer.router('api/db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
// server.use((req, res, next) => {
//   res.header('Content-Range', 'posts 0-20/20')
//   next()
// })
server.use(router)
server.use(jsonServer.bodyParser)

server.listen(5000, () => {
  console.log('JSON Server is running')
})