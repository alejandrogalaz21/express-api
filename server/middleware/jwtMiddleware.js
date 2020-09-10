import passport from 'passport'
import { Strategy, ExtractJwt } from 'passport-jwt'
import User from './../../app/user/user'
import { SECRET } from './../../keys'

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET
}

export const jwtStrategy = Model =>
  new Strategy(options, (payload, done) => {
    Model.findById(payload._id)
      .then(user => {
        if (!user) return done(null, false)
        return done(null, payload)
      })
      .catch(error => console.log(error))
  })

passport.use(jwtStrategy(User))
const authInitialize = passport.initialize()
export default authInitialize
