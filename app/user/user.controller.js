import Model from './user'
import { Router } from 'express'
import { red, green, blue } from './../../helpers/chalk.helper'
import bcrypt from 'bcryptjs'
import { generatePassword } from '../auth/auth.helper'
import { generateMailer } from '../../mailer'
import { ENV } from '../../keys'
const router = new Router()

export function userController(Collection) {
  // ======
  // Routes
  // ======
  router.post('/', create)
  router.get('/', readMany)
  // router.get('/:_id', readOne)
  router.put('/:_id', update)
  router.delete('/:_id', remove)

  // ======
  // Create
  // ======
  async function create(req, res) {
    try {
      blue('users > controller > create')
      const newEntry = req.body
      const password = generatePassword(10)
      const salt = await bcrypt.genSalt(10)
      const hashed = await bcrypt.hash(password, salt)
      const result = await Collection.create({ ...newEntry, password: hashed })

      const hostname = ENV === 'development' ? 'localhost:5001' : host
      const url = `http://${hostname}/login`

      const mailer = await generateMailer()
      await mailer.send({
        template: 'register',
        message: { to: result.email },
        locals: { url, password }
      })

      return res.send(result)
    } catch (error) {
      red(error)
      return res.status(500).send(error)
    }
  }

  // =========
  // Read many
  // =========
  async function readMany(req, res) {
    try {
      blue('users > controller > readMany')
      const query = req.query || {}
      const result = await Collection.find(query).select('-password')
      green(result)
      return res.json(result)
    } catch (error) {
      red(error)
      return res.status(500).send(error)
    }
  }

  // ========
  // Read one
  // ========
  async function readOne(req, res) {
    try {
      blue('users > controller > readOne')
      const { _id } = req.params
      const result = await Collection.findById(_id).select('-password')
      green(result)
      return res.send(result)
    } catch (error) {
      red(error)
      return res.status(500).send(error)
    }
  }

  // ======
  // Update
  // ======
  async function update(req, res) {
    try {
      blue('users > controller > update')
      const changedEntry = req.body
      const { _id } = req.params
      delete changedEntry.password
      const result = await Collection.update({ _id }, changedEntry, { new: true })
      green(result)
      return res.send(result)
    } catch (error) {
      red(error)
      return res.status(500).send(error)
    }
  }

  // ======
  // Remove
  // ======
  async function remove(req, res) {
    try {
      blue('users > controller > remove')
      const { _id } = req.params
      const result = await Collection.remove(_id)
      green(result)
      return res.send(result)
    } catch (error) {
      red(error)
      return res.status(500).send(error)
    }
  }

  return router
}

export const user = router.use('/user', userController(Model))
