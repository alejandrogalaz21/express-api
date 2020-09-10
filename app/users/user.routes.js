import { Router } from 'express'
import { crudGenerator } from '../../core/crud.generator'
import model from './user.routes'

const router = new Router()
const generator = crudGenerator(model)

export const users = router.use('/users', generator)
