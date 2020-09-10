import mongoose from 'mongoose'
import { red, green } from './../../helpers/chalk.helper'

export const mongooseConnection = MONGO_DB =>
  mongoose.connect(
    MONGO_DB,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    e => {
      if (!e) {
        green('Successfully Established Connection with MongoDB')
      } else {
        red('Failed to Establish Connection with MongoDB with Error: ' + err)
      }
    }
  )
