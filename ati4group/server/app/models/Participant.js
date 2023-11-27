import { Model, DataTypes } from 'sequelize';
import sequelize from '../database.js';



class Participant extends Model { }


Participant.init({
    lastname: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    firstname: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
            isEmail: true,
        },
    },
    phonenumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            not: /^[a-z]+$/i,
        },
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    role: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    language: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    experience: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
}, {
    sequelize,
    modelName: 'Participant',
    tableName: 'participant',
});


export default Participant;