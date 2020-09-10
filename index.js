import '@babel/polyfill'
import http from 'http'
import chalk from 'chalk'
import express from 'express'
//data source's
import { mongooseConnection } from './server/db/mongoose.connection'
// middleware
import morgan from './server/middleware/morgan'
import helmet from './server/middleware/helmet'
import bodyParser from './server/middleware/bodyParser'
import passportJwt from './server/middleware/jwtMiddleware'
import cors from './server/middleware/cors'
import fileUpload from 'express-fileupload'
// key's
import { PORT, MONGO_DB } from './keys'
// route's
import { apiRoutes } from './app/routes'

// Create express instance's
const app = express()
const api = http.Server(app)
const files = fileUpload()

// makes /foo and /Foo the same
app.set('case sensitive routing', false)
// makes /foo and /foo/ the same
app.set('strict routing', false)
// # of spaces to indent prettified json
app.set('json spaces', 2)
// setup all the config middleware
app.use(morgan)
app.use(helmet)
app.use(bodyParser)
app.use(passportJwt)
app.use(cors)
app.use(files)
// set app route's
app.use('/api', apiRoutes)
app.get('/*', (req, res, next) => res.send('hello world'))

api.listen(PORT, () => {
  //Data Sources Instances
  mongooseConnection(MONGO_DB)

  console.log(chalk.green('server started :'))
  console.log(chalk.blue(`http://localhost:${PORT}`))
  console.log(chalk.yellow(`http://localhost:${PORT}/api`))
})
