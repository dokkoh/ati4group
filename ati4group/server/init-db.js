import sequelize from "./app/database.js";
//importation des models 
import Participant from "./app/models/Participant.js";
import Edition from "./app/models/Edition.js";
import Ebillet from "./app/models/Ebillet.js";
import Admin from "./app/models/Admin.js";
import Media from "./app/models/Media.js";
import Contacte from "./app/models/Contacte.js";

//tentative connection
try {
    await sequelize.authenticate();
    console.log('Connection avec la database réussie');
} catch (error) {
    console.error('Impossible de ce connecter a la database:', error);
}

try {
    await sequelize.drop({ cascade: true });
    await sequelize.sync();
    console.log('Table ok');
} catch (error) {
    console.error('Il y a un probleme', error);
}

try { //seeding
    await Participant.create({
        lastname: 'citron',
        firstname: 'virginie',
        email: 'virginie@coucou.fr',
        phonenumber: '0602030405',
        category: 'thebest',
        role: 'boss',
        language: 'chakra',
        experience: 'grande monarque',
    });
    await Edition.create({
        date: '12/07/2023',
        time: '19H-21H30',
        title: 'Super test edition',
        location: 'BRASSERIE METEOR 10 RUE DU 22 NOVEMBRE',
        description: 'ceci est le premier test',
        maxcapacity: 250,
        state: 'ENCOURS',
    });
    await Ebillet.create({
        qrcode: 'clergeaud',
        ticketnumber: 'coucou',
        ParticipantId: 1,
        EditionId: 1,
    });
    await Contacte.create({
        firstname: 'jojo',
        lastname: 'lafrite',
        email: 'jojo@gmail.com',
        comment: 'ceci est un super commentaire car j\'aime les frites',
    });
    const admin = await Admin.create({
        email: 'jeje@gmail.com',
        password: 'password',
        Media: [
            {
                type: 'photo',
                url: 'https://www.lespommesdeterre.com/wp-content/uploads/2017/10/frites-maison-c-shutterstock_bd.jpg'
            },
            {
                type: 'photo',
                url: 'https://www.lespommesdeterre.com/wp-content/uploads/2017/10/frites-maison-c-shutterstock_bd.jpg'
            }
        ]
    }, {
        include: [Media]
    });
    const edition = await Edition.create({

        date: '12/07/2023',
        time: '19H-21H30',
        title: 'Super test edition',
        location: 'BRASSERIE METEOR 10 RUE DU 22 NOVEMBRE',
        description: 'ceci est le premier test',
        maxcapacity: 250,
        state:'FUTURE',
        Media: [
            {
                type: 'video',
                url: 'https://youtu.be/VtEdpjCHgD4',
            }
        ]
    }, {
        include: [Media]
    })

    console.log('C EST OK');
} catch (error) {
    console.error(error);
}