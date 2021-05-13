var cron = require('node-cron');
const { start } = require('./checkAndNotify')
const initializeScheduler = () => {
    cron.schedule('*/30 * * * * *', start);
}

module.exports = {
    initializeScheduler
}