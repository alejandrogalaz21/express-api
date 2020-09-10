import Model from './user'
import { Router } from 'express'
import { red, green, blue } from './../../helpers/chalk.helper'
import bcrypt from 'bcryptjs'
const router = new Router()

export function userController(Collection) {
  // ======
  // Routes
  // ======
  router.post('/', create)
  router.get('/', readMany)
  router.get('/:_id', readOne)
  router.put('/:_id', update)
  router.delete('/:_id', remove)

  // ======
  // Create
  // ======
  async function create(req, res) {
    try {
      blue('users > controller > create')
      const newEntry = req.body
      const salt = await bcrypt.genSalt(10)
      const hashed = await bcrypt.hash(password, salt)
      const result = await Collection.create({ ...newEntry, password: hashed })
      return res.send(result.select('-password'))
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
      let query = res.locals.query || {}
      const result = await Collection.find(query)
      green(result)
      res.send(result)
      return
    } catch (error) {
      red(error)
      res.status(500).send(error)
      return
    }
  }

  // ========
  // Read one
  // ========

  async function readOne(req, res) {
    try {
      blue('users > controller > readOne')
      const { _id } = req.params
      const result = await Collection.findById(_id)
      green(result)
      res.send(result)
      return
    } catch (error) {
      red(error)
      res.status(500).send(error)
      return
    }
  }

  // ======
  // Update
  // ======
  async function update(req, res) {
    try {
      blue('users > controller > update')
      //fields validations
      if (false) {
        res.status(400).send({ message: 'validation message' })
        return
      }

      // model validations
      if (false) {
        res.status(400).send({ message: 'validation message' })
        return
      }

      const changedEntry = req.body
      const { _id } = req.params
      const result = await Collection.update({ _id }, { $set: changedEntry })
      green(result)
      res.send(result)
      return
    } catch (error) {
      red(error)
      res.status(500).send(error)
      return
    }
  }

  // ======
  // Remove
  // ======
  async function remove(req, res) {
    try {
      blue('users > controller > remove')
      //fields validations
      if (false) {
        res.status(400).send({ message: 'validation message' })
        return
      }

      // model validations
      if (false) {
        res.status(400).send({ message: 'validation message' })
        return
      }

      const { _id } = req.params
      const result = await Collection.remove(_id)
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

export const user = router.use('/user', userController(Model))
