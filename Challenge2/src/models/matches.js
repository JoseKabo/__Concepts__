import { DataTypes } from 'sequelize';
import sequelize from '../db/postgres';

const matches = sequelize.define('player_skill', {
    id: {
        primaryKey: true,
        type: DataTypes.UUIDV4,
        allowNull: false,
    },
    teamA: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    teamB: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    scoreA: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    scoreB: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
});

export default matches;