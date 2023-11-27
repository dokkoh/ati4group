import Ebillet from '../app/models/Ebillet.js';
import Participant from '../app/models/Participant.js'
import QRCode from "qrcode";
import nodemailer from 'nodemailer';

const participantController = {

    createParticipant: async (req, res) => {
        try {
            if (req.body) {
                //sécurité//
                const { email } = req.body;
                const existingParticipant = await Participant.findOne({ where: { email } });
                if (existingParticipant) {
                    return res.status(400).json({ error: 'Un participant avec cette adresse e-mail existe déjà' })
                }
                const participant = await Participant.create(req.body);
                const participantDataText = JSON.stringify(participant);
                //génération du qrcode//
                const qrOpts = {
                    errorCorrectionLevel: 'M',
                    type: 'image/jpeg',
                    quality: 0.5,
                    margin: 2,
                    color: {
                        dark: "#EE7408",
                        light: "#ffffff"
                    }
                };
                const qrDataUrl = await QRCode.toDataURL(participantDataText, qrOpts);
                participant.qrDataUrl = qrDataUrl
                await Ebillet.create({
                    qrcode: qrDataUrl,
                });
                await participant.save();
                //generation du mail//
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'sphinx4group@gmail.com',
                        pass: 'htimjlgqazwgceds'
                    }
                });
                const mailOptions = {
                    from: 'sphinx4group@gmail.com',
                    to: participant.email,
                    subject: 'Votre inscription APERODEV',
                    text: 'Le HTML du mail est acctuellement non fonctionnel',
                    html: `
                    <h1>Inscription validé !</h1>
                    <p>Félicitation pour votre inscription a l'edition du "date" de "heure"</p>
                    <p>Adresse de l'evenement : "adresse"</p>
                    <p>Merci de vous munir du qr-code ci-joint le jour de l'évènement</p>
                    <img src="cid:qrcode" alt="QR-code">
                    `,
                    attachments: [{
                        filename: 'qrcode.png', // Nom de la pièce jointe créée
                        content: qrDataUrl.split('base64,')[1], // Contenu du QR code en base64
                        encoding: 'base64',
                        cid:'qrcode',//recupération du cid defini dans src
                    }],
                };
                transporter.sendMail(mailOptions, function (error) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email envoyé');
                    }
                });
                //////////////////////////////////////////////////////////
                res.json(participant);
                console.log(qrDataUrl);
            } else {
                res.status(401).json({ error: 'Participant invalide' });
            }
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    getAllParticipant: async (req, res) => {
        try {
            const participant = await Participant.findAll();
            res.json(participant);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    getOneParticipant: async (req, res) => {
        try {
            const participant = await Participant.findByPk(req.params.id);
            if (participant) {
                res.json(participant);
            } else {
                res.status(404).json({ error: 'Participant introuvable' });
            }
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    updateOneParticipant: async (req, res) => {
        try {
            const { id } = req.params;
            const [affectedRows] = await Participant.update(req.body, {
                where: { id },
            });
            if (affectedRows === 0) {
                return res.status(404).json({ error: 'Participant introuvable' });
            }
            const updatedRecord = await Participant.findByPk(id);
            res.json({ participant: updatedRecord });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    deleteOneParticipant: async (req, res) => {
        try {
            const participant = await Participant.findByPk(req.params.id);
            if (participant) {
                await participant.destroy();
                res.json({ message: 'Édition supprimée avec succès' });
            } else {
                res.status(404).json({ error: 'Participant introuvable' });
            }
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
}
export default participantController;