const { db } = require('./database')    
const subscriptions = require('../models/subscriptions')
const axios = require('axios')

const slackService = require('./slack')
const emailService = require('./email')

const getDate = () => {
    let today = new Date()
    let date = today.getDate()
    let month = today.getMonth() + 1
    let year = today.getFullYear()
    return `${date > 9 ? date : '0' + date }-${month > 9 ? month : '0' + month}-${year}`
}
const apiCall = (pincode, date) => {
    return axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${date}&t=${Date.now()}`, { headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36',
        'X-Request-ID': Date.now(),
    }}).then(resp => resp.data).catch(err => console.error(err))
}
const main = async ({ userid, pincode, age, slack, email, name, notifCount }) => {
    if(notifCount > 3) {
        console.log(`Max notifications reached already for ${userid}, ${pincode}, ${age}`)
        return
    }
    // if(notifyCount === 0 ) return
    if(!pincode) { return }
    const date = getDate()
    const resp = await apiCall(pincode, date)
    const available = []
    resp.centers.forEach(center => {
        center.sessions.forEach(session => {
            if(session.min_age_limit === age && session.available_capacity > 0) {
                let { date, available_capacity, vaccine, slots } = session
                available.push({ center: center.name, date, available_capacity, vaccine, slots })
            }
        })
    })
    available.length ? console.table(available) : console.error(`${pincode} ${new Date()}: None found !`)
    if(available.length > 0){
        // notify(`Vaccine available in ${resp.centers.length} centers !`)
        // Read : https://bit.ly/3bbBLKN
        // update notyif count
        subscriptions.updateNotifCount(userid, pincode, age)
        slack && slackService.notify(slack, available, email)
        email && emailService.notify(email, pincode, name)
    }
}

const start = async () => {
    const allRecords = await subscriptions.findAll()
    allRecords.forEach(main)
}

module.exports = { 
    start
}
