/**
 * @export
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @description cors middleware to allow request from
 * external connections.
 */
export default function cors(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With'
  )
  next()
}
