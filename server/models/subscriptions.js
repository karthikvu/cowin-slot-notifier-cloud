const { db } = require('../lib/database')

const findAll = () => db.any('SELECT * FROM subscriptions')
const findByUserId = (id) => db.any('SELECT * FROM subscriptions where userid = $1', id)
const findByName = name => db.any('SELECT * FROM subscriptions where name = $1', name)
const findByBUNumber = email => db.any('SELECT * FROM subscriptions where email = $1', email)
const findByPhone = phone => db.any('SELECT * FROM subscriptions where phone = $1 or phoneAlt = $1', phone)
const create = (subscription) => {
    return db.query(`INSERT INTO subscriptions (
        userid,
        name,
        phone,
        email,
        age,
        pincode,
        slack,
        active,
        deleted,
        "createdAt",
        "updatedAt"
    ) VALUES (
        $[userId],
        $[name],
        $[phone],
        $[email],
        $[age],
        $[pincode],
        $[slack],
        true,
        false,
        now(),
        now()
) RETURNING *`, subscription)
}
const update = (id, patient) => {}
const deleteOne = id => {}

module.exports = {
    findAll,
    findByUserId,
    findByBUNumber, 
    findByName, 
    findByPhone,
    create
}