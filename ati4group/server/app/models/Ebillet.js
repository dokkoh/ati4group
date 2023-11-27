import sequelize from '../database.js';
import { Model, DataTypes } from 'sequelize';
import Participant from './Participant.js';
import Edition from './Edition.js';


class Ebillet extends Model { }


Ebillet.init({
    qrcode: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    ticketnumber: {
        type: DataTypes.STRING,
    }
}, {
    sequelize,
    modelName: 'Ebillet',
    tableName: 'ebillet',
});

Participant.hasMany(Ebillet);
Ebillet.belongsTo(Participant);

Edition.hasMany(Ebillet);
Ebillet.belongsTo(Edition);



export default Ebillet;