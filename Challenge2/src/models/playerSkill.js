import { DataTypes } from 'sequelize';
import sequelize from '../db/postgres';

const playerSkill = sequelize.define(
    'player_skill', {
        id: {
            primaryKey: true,
            type: DataTypes.UUIDV4,
            allowNull: false,
        },
        speed: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        stamina: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        mentality: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        control: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
    }, {
        freezeTableName: true,
        tableName: 'player_skill',
        underscored: true,
    }
);

export default playerSkill;