import { Model, DataTypes } from 'sequelize';
import sequelize from '../database.js';
import Admin from './Admin.js';
import Edition from './Edition.js';

class Media extends Model { }


Media.init({
    type: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    }
}, {
    sequelize,
    modelName: 'Media',
    tableName: 'media',
});

Admin.belongsToMany(Media, { through: 'AdminHasMedia' });
Media.belongsToMany(Admin, { through: 'AdminHasMedia' });

Edition.belongsToMany(Media, { through: 'EditionHasMedia' });
Media.belongsToMany(Edition, { through: 'EditionHasMedia' });


export default Media;