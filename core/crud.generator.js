import express from 'express'
import { red, green } from './../helpers/chalk.helper'

export function crudGenerator(Collection) {
  // ======
  // Create
  // ======
  const create = (req, res) => {
    const newEntry = req.body
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

  const router = express.Router()

  router.post('/', create)
  router.get('/', readMany)
  router.get('/:_id', readOne)
  router.put('/:_id', update)
  router.delete('/:_id', remove)

  return router
}
