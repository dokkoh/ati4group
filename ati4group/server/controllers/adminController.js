import Admin from "../app/models/Admin.js";

const adminController = {

    createAdmin: async (req, res) => {
        try {
            if (req.body) {
                const admin = await Admin.create(req.body);
                res.json(admin);
            } else {
                res.status(401).json({ error: "Administrateur invalide" });
            }
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    getAllAdmin: async (req, res) => {
        try {
            const admin = await Admin.findAll();
            res.json(admin);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    getOneAdmin: async (req, res) => {
        try {
            const admin = await Admin.findByPk(req.params.id);
            if (admin) {
                res.json(admin);
            } else {
                res.status(404).json({ error: "Administrateur introuvable" });
            }
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    updateOneAdmin: async (req, res) => {
        try {
            const { id } = req.params;
            const [affectedRows] = await Admin.update(req.body, {
                where: { id },
            });
            if (affectedRows === 0) {
                return res.status(404).json({ error: "Administrateur introuvable" });
            }
            const updatedRecord = await Admin.findByPk(id);
            res.json({ admin: updatedRecord });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    deletOneAdmin: async (req, res) => {
        try {
            const admin = await Admin.findByPk(req.params.id);
            console.log(admin);
            if (admin) {
                await admin.destroy();
                res.json({ message: "Administrateur supprimé avec succès" });
            } else {
                res.status(404).json({ error: "Administrateur introuvable" });
            }
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
};
export default adminController;
