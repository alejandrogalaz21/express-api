import mongoose from 'mongoose'
import * as regex from './../../helpers/regex'

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId
const schemaConfig = {
  strict: true,
  versionKey: false,
  toJSON: { virtuals: true },
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(
  {
    email: {
      desc: "The user's email address.",
      trim: true,
      type: String,
      index: true,
      unique: true,
      required: true,
      validator: email => regex.email.test(email),
      message: 'Not a valid email'
    },
    password: {
      desc: 'user password',
      trim: true,
      type: String,
      required: true,
      validator: password => regex.password.test(password),
      message: 'Minimum eight characters, at least one letter and one number'
    },
    name: {
      desc: "The user's name.",
      trim: true,
      type: String,
      required: true
    },
    age: {
      desc: "The users's age.",
      type: Number,
      validate: {
        validator: v => v > 0,
        message: 'Age must be greater than 0'
      }
    },
    gender: {
      desc: 'user gender.',
      trim: true,
      type: String,
      enum: ['Male', 'Female', 'Others'],
      default: 'Others',
      required: true
    },
    userType: {
      desc: 'user roles.',
      trim: true,
      type: String,
      enum: ['Admin', 'User'],
      default: 'Admin',
      required: true
    },
    isActive: {
      desc: 'is Active.',
      type: Boolean,
      default: true,
      required: true
    }
  },
  schemaConfig
)

//schema.virtual('fullName').get(function () {
//  return this.name + ' ' + this.lastName
//})

export default mongoose.model('user', schema)
