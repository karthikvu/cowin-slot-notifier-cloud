var cron = require('node-cron');
const { start } = require('./checkAndNotify')
const initializeScheduler = () => {
    cron.schedule('*/15 * * * * *', start);
}

module.exports = {
    initializeScheduler
}