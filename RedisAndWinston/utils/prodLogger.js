import { createLogger, format, transports } from 'winston';

const prodFormat = format.printf(({ level, message, timestamp }) => {
    return `${timestamp} - [${level}] : ${message}`;
})

const prodLogger = () => createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        prodFormat
    ),
    transports: [new transports.Console(), new transports.File({
        filename: 'prod.log'
    })],
});

export default prodLogger;