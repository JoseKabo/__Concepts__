import { createLogger, format, transports } from 'winston';

const prodFormat = format.printf(({ level, message, timestamp }) => {
    return `${timestamp} - [${level}] : ${message}`;
})

const devLogger = () => createLogger({
    level: 'info',
    format: format.combine(
        format.colorize(),
        format.timestamp({ format: 'HH:mm:ss' }),
        prodFormat
    ),
    transports: [new transports.Console()],
});

export default devLogger