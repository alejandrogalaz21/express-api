import { Router } from 'express'
import { red, green, blue } from './../../helpers/chalk.helper'
const router = new Router()

export function authController() {
  // ======
  // Routes
  // ======
  router.get('/', create)
  
  // ======
  // Method
  // ======
  async function index(req, res) {
    try {
      blue('auths > controller > index')
     
      const result = 'result'
      green(result)
      res.send(result)
      return
    } catch (error) {
      red(error)
      res.status(500).send(error)
      return
    }
  }

  
  return router
}

export const auth = router.use('/auth', authController())
