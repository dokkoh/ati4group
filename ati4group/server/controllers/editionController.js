import Edition from "../app/models/Edition.js";

const editionController = {
  createEdition: async (req, res) => {
    try {
      if (req.body) {
        const contacte = await Edition.create(req.body);
        res.json(contacte);
      } else {
        res.status(401).json({ error: "Edition invalide" });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  getAllEdition: async (req, res) => {
    try {
      const edition = await Edition.findAll();
      res.json(edition);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  getOneEdition: async (req, res) => {
    try {
      const edition = await Edition.findByPk(req.params.id);
      if (edition) {
        res.json(edition);
      } else {
        res.status(404).json({ error: "Edition introuvable" });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  getEditionStatus: async (req, res) => {
    try {
      const state = req.params.state.toUpperCase();
      const edition = await Edition.findAll({
        where: {
          state,
        },
      });
      if (edition) {
        res.json(edition);
      } else {
        res.status(404).json({ error: "Edition introuvable" });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  updateOneEdition: async (req, res) => {
    try {
      const { id } = req.params;
      const [affectedRows] = await Edition.update(req.body, {
        where: { id },
      });
      if (affectedRows === 0) {
        return res.status(404).json({ error: "Édition introuvable" });
      }
      const updatedRecord = await Edition.findByPk(id);
      res.json({ edition: updatedRecord });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  deleteOneEdition: async (req, res) => {
    try {
      const edition = await Edition.findByPk(req.params.id);
      if (edition) {
        await edition.destroy();
        res.json({ message: "Édition supprimée avec succès" });
      } else {
        res.status(404).json({ error: "Edition introuvable" });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

export default editionController;
