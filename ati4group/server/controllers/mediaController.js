import Media from '../app/models/Media.js';

const mediaController = {
    
    createMedia: async (req, res) => {
        try {
            if (req.body) {
                const media = await Media.create(req.body);
                res.json(media);
            } else {
                res.status(401).json({ error: "Media invalide" });
            }
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    getAllMedia: async (req, res) => {
        try {
            const media = await Media.findAll();
            res.json(media);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    getOneMedia: async (req, res) => {
        try {
            const media = await Media.findByPk(req.params.id);
            if (media) {
                res.json(media);
            } else {
                res.status(404).json({ error: "Media introuvable" });
            }
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    updateOneMedia: async (req, res) => {
        try {
            const { id } = req.params;
            const [affectedRows] = await Media.update(req.body, {
                where: { id },
            });
            if (affectedRows === 0) {
                return res.status(404).json({ error: "Media introuvable" });
            }
            const updatedRecord = await Media.findByPk(id);
            res.json({ media: updatedRecord });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    deletOneMedia: async (req, res) => {
        try {
            const media = await Media.findByPk(req.params.id);
            console.log(media);
            if (media) {
                await media.destroy();
                res.json({ message: "Media supprimé avec succès" });
            } else {
                res.status(404).json({ error: "Media introuvable" });
            }
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
};

export default mediaController;