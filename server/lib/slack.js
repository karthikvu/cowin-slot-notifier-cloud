const axios = require('axios')

const notify = (url, data = [], user) => {
    console.log(`${new Date()} | notif::slack - ${user}`)
    return axios.post(url, {data : JSON.stringify(data)})
}

module.exports = { notify }