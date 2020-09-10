import User from './../user/user'
import { Router } from 'express'
import { red, green, blue } from './../../helpers/chalk.helper'
const router = new Router()

export function authController(User) {
  // ======
  // Routes
  // ======
  router.post('/', login)

  // ======
  // Method
  // ======
  async function login(req, res) {
    try {
      blue('auths > controller > login')

      const user = await User.findOne({ email }).lean()

      if (!user) {
        return res.status(400).json({ message: 'Credenciales inválidas' })
      } else if (user) {
        const correctCredentials = bcrypt.compareSync(password, user.password)
        if (!correctCredentials) {
          return res.status(400).json({ message: 'Credenciales inválidas' })
        } else if (user.isActive !== true) {
          return res.status(400).json({ message: 'Usuario inactivo' })
        }
      }
      const token = await createJWT({ ...user }, config.secret, config.expiresIn)
      return res.status(200).json(token)
    } catch (error) {
      red(error)
      res.status(500).send(error)
      return
    }
  }

  return router
}

export const auth = router.use('/auth', authController(User))
