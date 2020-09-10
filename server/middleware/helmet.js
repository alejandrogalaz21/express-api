import helmet from 'helmet'
import { Router } from 'express'

const router = new Router()
const oneDay = 86400

// Middleware
router.use(helmet())
// Sets "Strict-Transport-Security: one day max-age=86400; includeSubDomains".
router.use(helmet.hsts({ maxAge: oneDay }))
// Sets "X-XSS-Protection: 1; mode=block".
router.use(helmet.xssFilter())

export default router
