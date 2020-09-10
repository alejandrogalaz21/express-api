import mongoose from 'mongoose'

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
      required: true
    },
    password: {
      desc: 'user password',
      trim: true,
      type: String,
      required: true,
      select: false
    },
    name: {
      desc: "The user's name.",
      trim: true,
      type: String,
      required: true
    },
    lastName: {
      desc: "The user's last name.",
      trim: true,
      type: String,
      required: true
    },
    age: {
      desc: "The users's age.",
      type: Number
    },
    gender: {
      desc: 'user gender.',
      trim: true,
      type: String,
      enum: ['Male', 'Female', 'Others'],
      default: 'Others',
      required: true
    },
    isActive: {
      desc: 'is Active.',
      type: Boolean,
      default: true,
      required: true
    },
    userType: {
      desc: 'user roles.',
      trim: true,
      type: String,
      enum: ['Admin', 'User'],
      default: 'Admin',
      required: true
    }
  },
  schemaConfig
)

schema.virtual('fullName').get(function () {
  return this.name + ' ' + this.lastName
})

export default mongoose.model('user', schema)
