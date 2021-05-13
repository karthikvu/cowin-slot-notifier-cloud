import axios from 'axios'

export const getSubscription = () => axios.get("/api/subscriptions")
export const createSubscription = subscription => axios.post("/api/subscriptions", subscription )