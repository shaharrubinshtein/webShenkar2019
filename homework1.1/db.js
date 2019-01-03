
const mongoose  = require('mongoose')
const consts    = require('./consts')

const { MLAB_URL, DB_USER, DB_PASS } = consts
const url = MLAB_URL
const options = {
    useNewUrlParser: true, // For deprecation warnings
    useCreateIndex: true, // For deprecation warnings
    user: DB_USER,
    pass: DB_PASS
}
const connect = mongoose.createConnection(url, options)

connect.on('connected', () => console.log('mongoose connected'))
connect.on('error', (err) => console.error(err))

mongoose.connect(url, options)

module.exports = connect
