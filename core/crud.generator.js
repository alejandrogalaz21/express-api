import { Router } from 'express'
import { red, green, blue } from './../helpers/chalk.helper'

export function crudGenerator(Collection) {
  const router = new Router()

  // ======
  // Create
  // ======
  const create = (req, res) => {
    blue('Create')
    console.log(Collection)
    const newEntry = req.body
    console.log(newEntry)
    Collection.create(newEntry, (e, result) => {
      if (e) {
        red(e)
        res.status(500).send(e)
        return
      } else {
        green(result)
        res.send(result)
        return
      }
    })
  }

  // =========
  // Read many
  // =========
  const readMany = (req, res) => {
    let query = res.locals.query || {}

    Collection.find(query, (e, result) => {
      if (e) {
        red(e)
        res.status(500).send(e)
        return
      } else {
        green(result)
        res.send(result)
        return
      }
    })
  }

  // ========
  // Read one
  // ========
  const readOne = (req, res) => {
    const { _id } = req.params

    Collection.findById(_id, (e, result) => {
      if (e) {
        red(e)
        res.status(500).send(e)
        return
      } else {
        green(result)
        res.send(result)
        return
      }
    })
  }

  // ======
  // Update
  // ======
  const update = (req, res) => {
    const changedEntry = req.body
    const { _id } = req.params
    Collection.update({ _id }, { $set: changedEntry }, (e, result) => {
      if (e) {
        red(e)
        res.status(500).send(e)
      } else {
        green(result)
        res.sendStatus(200)
        return
      }
    })
  }

  // ======
  // Remove
  // ======
  const remove = (req, res) => {
    Collection.remove({ _id: req.params._id }, (e, result) => {
      if (e) {
        red(e)
        res.status(500).send(e)
      } else {
        green(result)
        res.sendStatus(200)
        return
      }
    })
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
