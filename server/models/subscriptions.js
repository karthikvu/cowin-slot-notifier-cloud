const { db } = require("../lib/database");

const findAll = () =>
  db.any("SELECT * FROM subscriptions where active = true and deleted = false");
const findByUserId = (id) =>
  db.any("SELECT * FROM subscriptions where userid = $1", id);
const findByName = (name) =>
  db.any("SELECT * FROM subscriptions where name = $1", name);
const findByBUNumber = (email) =>
  db.any("SELECT * FROM subscriptions where email = $1", email);
const findByPhone = (phone) =>
  db.any(
    "SELECT * FROM subscriptions where phone = $1 or phoneAlt = $1",
    phone
  );
const updateNotifCount = (userid, pincode, age) =>
  db.any(
    'UPDATE subscriptions SET "notifCount" = "notifCount" + 1 where userid = $1 and pincode = $2 and age = $3',
    [userid, pincode, age]
  );
const resetNotifCount = (userid, pincode, age) =>
  db.any(
    'UPDATE subscriptions SET "notifCount" = 0 where userid = $1 and pincode = $2 and age = $3',
    [userid, pincode, age]
  );
const create = (subscription) => {
  return db.query(
    `INSERT INTO subscriptions (
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
        "updatedAt",
        "notifCount"
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
        now(),
        0
) RETURNING *`,
    subscription
  );
};
const update = (id, patient) => {};
const deleteOne = (id) => {};

module.exports = {
  findAll,
  findByUserId,
  findByBUNumber,
  findByName,
  findByPhone,
  create,
  updateNotifCount,
  resetNotifCount,
};
