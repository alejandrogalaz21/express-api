import { Router } from 'express'
import { usersGenerator } from '../../core/crud.generator'
import model from './user'

const router = new Router()
const generator = usersGenerator(model)

export const users = router.use('/users', generator)
