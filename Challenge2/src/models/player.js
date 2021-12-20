import { DataTypes } from 'sequelize';
import sequelize from '../db/postgres';

const player = sequelize.define(
    'player', {
        id: {
            type: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        id_skills: {
            type: DataTypes.UUIDV4,
            allowNull: false,
            references: {},
        },
        id_team: {
            type: DataTypes.UUIDV4,
            allowNull: false,
            references: {},
        },
        picture: {
            type: DataTypes.BLOB('tiny'),
        },
    }, {
        freezeTableName: true,
        tableName: 'player',
        underscored: true,
    }
);

export default player;