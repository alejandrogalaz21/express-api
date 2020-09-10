import { Router } from 'express'
import { red, green, blue } from './../helpers/chalk.helper'

export function usersGenerator(Collection) {
  const router = new Router()

  // ======
  // Create
  // ======
  async function create(req, res) {
    try {
      blue('users > controller > reate')
      const newEntry = req.body
      const result = await Collection.create(newEntry)
      green(result)
      res.send(result)
      return
    } catch (error) {
      red(error)
      res.status(500).send(error)
      return
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

  // ======
  // Routes
  // ======

  router.post('/', create)
  router.get('/', readMany)
  router.get('/:_id', readOne)
  router.put('/:_id', update)
  router.delete('/:_id', remove)

  return router
}
