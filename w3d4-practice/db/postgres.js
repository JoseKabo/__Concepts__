import { Sequelize } from 'sequelize';

const POSTGRES_USER = process.env.POSTGRES_USER;
const POSTGRES_PASSWORD = process.env.POSTGRES_PWD;

const sequelize = new Sequelize(`postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:5432/practicePostgres`);

Promise.resolve(sequelize.authenticate())
    .then(() => {
        console.log('Connected to postgresDB')
    })
    .catch((err) => {
        console.log("🚀 ~ file: postgres.js ~ line 13 ~ err", err)

    });