import express from 'express';
import editionController from './controllers/editionController.js';
import participantController from './controllers/participantController.js';
import contacteController from './controllers/contactController.js';
import ebilletController from './controllers/ebilletController.js';
import mediaController from './controllers/mediaController.js';
import adminController from './controllers/adminController.js'

const router = express.Router();

//Home
router.get('/', (req, res) => res.send('Welcome'));

//Participants
router.post('/api/participants', participantController.createParticipant);
router.get('/api/participants', participantController.getAllParticipant);
router.get('/api/participants/:id', participantController.getOneParticipant);
router.patch('/api/participants/:id', participantController.updateOneParticipant);
router.delete('/api/participants/:id', participantController.deleteOneParticipant);

//Editions
router.post('/api/editions',editionController.createEdition);
router.get('/api/editions',editionController.getAllEdition);
router.get('/api/editions/:id',editionController.getOneEdition);
router.get('/api/editions/status/:state',editionController.getEditionStatus);
router.patch('/api/editions/:id',editionController.updateOneEdition);
router.delete('/api/editions/:id',editionController.deleteOneEdition);

//Contactes
router.post('/api/contactes', contacteController.createContacte);
router.get('/api/contactes', contacteController.getAllContacte);
router.get('/api/contactes/:id', contacteController.getOneContacte);
router.patch('/api/contactes/:id', contacteController.updateOneContacte);
router.delete('/api/contactes/:id', contacteController.deletOneContacte);

//Ebillets
router.post('/api/ebillets', ebilletController.createEbillet);
router.get('/api/ebillets', ebilletController.getAllEbillet);
router.get('/api/ebillets/:id', ebilletController.getOneEbillet);
router.patch('/api/ebillets/:id', ebilletController.updateOneEbillet);
router.delete('/api/ebillets/:id', ebilletController.deletOneEbillet);

//Medias
router.post('/api/medias', mediaController.createMedia);
router.get('/api/medias', mediaController.getAllMedia);
router.get('/api/medias/:id', mediaController.getOneMedia);
router.patch('/api/medias/:id', mediaController.updateOneMedia);
router.delete('/api/medias/:id', mediaController.deletOneMedia);

//Admins
router.post('/api/admins', adminController.createAdmin);
router.get('/api/admins', adminController.getAllAdmin);
router.get('/api/admins/:id', adminController.getOneAdmin);
router.patch('/api/admins/:id', adminController.updateOneAdmin);
router.delete('/api/admins/:id', adminController.deletOneAdmin);


export default router;

