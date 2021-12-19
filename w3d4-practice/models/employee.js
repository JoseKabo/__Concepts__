import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('postgresql');

const Employee = sequelize.define('Employee', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id: {
        type: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    notes: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Employee;