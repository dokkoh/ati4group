//on importe la classe la mère et la liste des types fournis par sequelize
import { Model, DataTypes } from 'sequelize';
//on importe notre client connecté à la base de données
import sequelize from '../database.js';
import Edition from './Edition.js';

//on définit le modèle qui étend la classe mère et hérite donc de ses méthodes
class Admin extends Model { }

//on execute la méthode qui sert à initialiser les propriétés de notre modèle
// on passe à init 2 objets en argument
Admin.init({
    email: {
        type: DataTypes.TEXT,// on configure un type
        allowNull: false, // on peut configurer des contraintes qui se mettront au niveau de la bdd
        unique: true,
        validate: {// en plus on peut mettre tout un tas de validateurs qui agiront au niveau des setter
            notEmpty: true,
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    }
}, {
    sequelize,//on dit dans quelle bdd devront persister les infos
    modelName: 'Admin',//on donne un nom au modèle
    tableName: 'admin',// on peut demander à sequelize de ranger les infos liées à ce modèle dans la table de notre choix
});

Edition.belongsToMany(Admin, { through: 'AdminHasEdition' });
Admin.belongsToMany(Edition, { through: 'AdminHasEdition' });

export default Admin;