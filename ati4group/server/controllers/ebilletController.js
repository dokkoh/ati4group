import Ebillet from "../app/models/Ebillet.js";

const ebilletController = {
    createEbillet: async (req, res) => {
        try {
            if (req.body) {
                const ebillet = await Ebillet.create(req.body);
                res.json(ebillet);

            } else {
                res.status(401).json({ error: "Ebillet invalide" });
            }
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    getAllEbillet: async (req, res) => {
        try {
            const ebillet = await Ebillet.findAll();
            res.json(ebillet);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    getOneEbillet: async (req, res) => {
        try {
            const ebillet = await Ebillet.findByPk(req.params.id);
            if (ebillet) {
                res.json(ebillet);
            } else {
                res.status(404).json({ error: "Ebillet introuvable" });
            }
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    updateOneEbillet: async (req, res) => {
        try {
            const { id } = req.params;
            const [affectedRows] = await Ebillet.update(req.body, {
                where: { id },
            });
            if (affectedRows === 0) {
                return res.status(404).json({ error: "Ebillet introuvable" });
            }
            const updatedRecord = await Ebillet.findByPk(id);
            res.json({ ebillet: updatedRecord });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    deletOneEbillet: async (req, res) => {
        try {
            const ebillet = await Ebillet.findByPk(req.params.id);
            console.log(ebillet);
            if (ebillet) {
                await ebillet.destroy();
                res.json({ message: "Ebillet supprimé avec succès" });
            } else {
                res.status(404).json({ error: "Ebillet introuvable" });
            }
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
};

export default ebilletController;