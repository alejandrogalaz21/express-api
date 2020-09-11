import dotenv from 'dotenv'
dotenv.config()

export const ENV = process.env.NODE_ENV || 'development'
export const SECRET = process.env.SECRET || 'a211221684app'
export const PORT = process.env.PORT || 5001
export const EXPIRES_IN = process.env.EXPIRES_IN || '1 days'
export const MONGO_DB = process.env.MONGO_DB || 'mongodb://localhost:27017/app'
export const MAILER_HOST = process.env.MAILER_HOST || 'smtp.office365.com'
export const MAILER_USER = process.env.MAILER_USER || 'probono@softtek.com'
export const MAILER_PASS = process.env.MAILER_PASS
export const MAILER_EMAIL = process.env.MAILER_EMAIL || 'probono@softtek.com'
export const MAILER_PORT = process.env.MAILER_PORT || 587

export const MAILER = {
  host: MAILER_HOST,
  port: MAILER_PORT,
  auth: {
    user: MAILER_USER,
    pass: MAILER_PASS
  }
}
