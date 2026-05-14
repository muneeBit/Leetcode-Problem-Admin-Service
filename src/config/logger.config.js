const winston = require('winston');
require('winston-mongodb');
const { LOG_DB_URL } = require('./server.config')

const allowedTransports = [];

// The below transport configuratuion enables logging on console
allowedTransports.push(new winston.transports.Console({
    format: winston.format.combine(
        
        winston.format.colorize(),
       winston.format.timestamp({
        format:'YYYY-MM-DD HH:mm:ss'
       }),

       winston.format.printf((log) => `${log.timestamp} [${log.level}]: ${log.message}`)
        
        
        )
})); 

//below transport configuration enables logging on MongoDB

allowedTransports.push(new winston.transports.MongoDB({
    level: 'error',
    db: LOG_DB_URL,
    collection: 'logs'
}))

//below transport configuration enables logging on files

allowedTransports.push(new winston.transports.File({
    filename: `app.log`


}))

const logger = winston.createLogger({

    //default formatting

    format: winston.format.combine(
        // first argument of combine method is defining how we want the timestamp to come up
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),

        //second argument to the combine method,which defines what is exactly going to be printed in log
        winston.format.printf((log) =>`${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}` )

    ),
    transports: allowedTransports

});




module.exports = logger;