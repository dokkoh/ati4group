import Contacte from "../app/models/Contacte.js";
import nodemailer from "nodemailer";

const contacteController = {
  createContacte: async (req, res) => {
    try {
      if (req.body) {
        const contacte = await Contacte.create(req.body);
        res.json(contacte);

        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "sphinx4group@gmail.com",
            pass: "htimjlgqazwgceds",
          },
        });

        const mailOptions = {
          from: req.body.email,
          to: "virginiecitron@yahoo.fr, ceedje74@gmail.com",
          subject: `Message from ${req.body.firstname} ${req.body.lastname}`,
          text: req.body.comment,
          replyTo: req.body.email,
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
            res.status(500).send("Error sending email");
          } else {
            res.status(200).send("success");
          }
        });
      } else {
        res.status(401).json({ error: "Contacte invalide" });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  getAllContacte: async (req, res) => {
    try {
      const contacte = await Contacte.findAll();
      res.json(contacte);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  getOneContacte: async (req, res) => {
    try {
      const contacte = await Contacte.findByPk(req.params.id);
      if (contacte) {
        res.json(contacte);
      } else {
        res.status(404).json({ error: "Contacte introuvable" });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  updateOneContacte: async (req, res) => {
    try {
      const { id } = req.params;
      const [affectedRows] = await Contacte.update(req.body, {
        where: { id },
      });
      if (affectedRows === 0) {
        return res.status(404).json({ error: "Contacte introuvable" });
      }
      const updatedRecord = await Contacte.findByPk(id);
      res.json({ contacte: updatedRecord });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  deletOneContacte: async (req, res) => {
    try {
      const contacte = await Contacte.findByPk(req.params.id);
      console.log(contacte);
      if (contacte) {
        await contacte.destroy();
        res.json({ message: "Contacte supprimé avec succès" });
      } else {
        res.status(404).json({ error: "Contacte introuvable" });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
export default contacteController;
