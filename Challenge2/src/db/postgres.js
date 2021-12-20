import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import debug from 'debug';

dotenv.config();

const PG_USER = process.env.PG_USER;
const PG_PWD = process.env.PG_PWD;
const PORT = process.env.PG_PORT;
const log = debug('dev:URI_Connection');

const config = {
    define: {
        createdAt: 'createdat',
        updatedAt: 'updatedat',
    },
};

const sequelize = new Sequelize(
    `postgres://${PG_USER}:${PG_PWD}@localhost:${PORT}/globant_footballSoccer`, {
        dialect: 'postgres',
        quoteIdentifiers: false,
        define: {
            timestamps: false,
            // underscored: true,
            // createdAt: 'created_at',
            // updatedAt: 'updated_at',
        },
    }
);

Promise.resolve(sequelize.authenticate())
    .then(() => log('Connection has been succefully'))
    .catch((err) => log(`Connection wrong - ${err}`));

export default sequelize;