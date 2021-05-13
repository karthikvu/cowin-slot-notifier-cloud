const pgpOptions = {}

const pgp = require('pg-promise')(pgpOptions)
const monitor = require('pg-monitor')

monitor.attach(pgpOptions)
const connectionString = process.env.DATABASE_URL
console.log(connectionString)
const db = pgp(connectionString)
// console.log(db)

module.exports = { db, connectionString }