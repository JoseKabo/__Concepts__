import { DataTypes } from 'sequelize';
import sequelize from '../db/postgres';

const team = sequelize.define(
    'team', {
        id: {
            primaryKey: true,
            type: DataTypes.UUIDV4,
            allowNull: false,
        },
        name: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
    }, {
        freezeTableName: true,
        tableName: 'team',
        underscored: true,
    }
);

export default team;