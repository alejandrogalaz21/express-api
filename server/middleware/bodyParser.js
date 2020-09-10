import { Router } from 'express'
import bodyParser from 'body-parser'

const router = new Router()

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))

export default router
