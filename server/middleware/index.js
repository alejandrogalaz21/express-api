// * Import Config App Middleware
import config from './../config'
import morgan from './morgan'
import morganDB from './mmorgan'
import helmet from './helmet'
import bodyParser from './bodyParser'
import fileUpload from 'express-fileupload'
import express from 'express'
import graphQl from './graphQl'
import passporJwt from './jwtMiddleware'

export default [
  helmet,
  bodyParser,
  morgan,
  morganDB,
  passporJwt,
  // ! move this to a middleware style
  express.static(config.uploadsPath),
  // ! this need a different config
  // ? check the past config API
  express.static(config.publicPath),
  fileUpload(),
  graphQl
]
