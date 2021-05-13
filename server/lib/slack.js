const axios = require('axios')

const notify = (url, data) => {
    return axios.post(slack, {data : JSON.stringify(available)})
}

module.exports = { notify }