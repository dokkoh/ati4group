import { Model, DataTypes } from 'sequelize';
import sequelize from '../database.js';
import Admin from './Admin.js';

class Contacte extends Model { }


Contacte.init({
    lastname: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
            min: 2,
        },
    },
    firstname: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
            min: 2,
        },
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: false,
        validate: {
            notEmpty: true,
            isEmail: true,
        },
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            min: 10,
        },
    },
    admin_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Admin,
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'Contacte',
    tableName: 'contacte',
});


export default Contacte;