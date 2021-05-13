import axios from 'axios'

export const getSubscription = () => axios.get("/api/subscriptions")
export const createSubscription = subscription => axios.post("/api/subscriptions", subscription )
export const renewSubscription = (userid, pincode, age) => axios.post("/api/subscriptions/renew", { userid, pincode, age } )