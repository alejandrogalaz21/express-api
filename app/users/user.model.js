import { Router } from 'express'
import { crudGenerator } from './../../core/crud.generator'
import model from './user.model'

const router = new Router()
const generator = crudGenerator(model)

export const user = router.use('/users', generator)
