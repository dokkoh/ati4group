import { Model, DataTypes } from 'sequelize';
import sequelize from '../database.js';

class Edition extends Model { }


Edition.init({
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    time: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    title: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    maxcapacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    state: {
        type: DataTypes.ENUM('ENCOURS', 'PASSEE', 'FUTURE'),
    }
}, {
    sequelize,
    modelName: 'Edition',
    tableName: 'edition',
});

export default Edition;