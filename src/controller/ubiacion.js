const ubicacionCtl = {};
const { Ubicacion } = require('../Database/dataBase.sql');

// Mostrar todas las ubicaciones
ubicacionCtl.mostrar = async (req, res) => {
    try {
        const ubicaciones = await Ubicacion.findAll();
        res.status(200).json(ubicaciones);
    } catch (error) {
        console.error("Error al obtener las ubicaciones:", error);
        res.status(500).send("Hubo un error al obtener las ubicaciones");
    }
};

// Crear una nueva ubicación
ubicacionCtl.mandar = async (req, res) => {
    const { nombre, direccion, latitud, longitud } = req.body;

    try {
        await Ubicacion.create({ nombre, direccion, latitud, longitud });
        res.status(200).send("Ubicación creada con éxito");
    } catch (error) {
        console.error("Error al crear la ubicación:", error);
        res.status(500).send("Hubo un error al crear la ubicación");
    }
};

// Obtener una ubicación por ID
ubicacionCtl.obtenerPorId = async (req, res) => {
    const { id } = req.params;

    try {
        const ubicacion = await Ubicacion.findByPk(id);

        if (!ubicacion) {
            return res.status(404).json({ message: 'Ubicación no encontrada' });
        }
        res.status(200).json(ubicacion);
    } catch (error) {
        console.error("Error al obtener la ubicación:", error);
        res.status(500).json({ message: 'Error interno del servidor: ' + error.message });
    }
};

// Eliminar una ubicación por ID
ubicacionCtl.eliminar = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await Ubicacion.destroy({ where: { id } });

        if (result) {
            res.status(200).send("Ubicación eliminada con éxito");
        } else {
            res.status(404).send("Ubicación no encontrada");
        }
    } catch (error) {
        console.error("Error al eliminar la ubicación:", error);
        res.status(500).send("Hubo un error al eliminar la ubicación");
    }
};

// Actualizar una ubicación por ID
ubicacionCtl.actualizar = async (req, res) => {
    const { id } = req.params;
    const { nombre, direccion, latitud, longitud } = req.body;

    try {
        const [updated] = await Ubicacion.update({ nombre, direccion, latitud, longitud }, {
            where: { id }
        });

        if (updated) {
            const updatedUbicacion = await Ubicacion.findByPk(id);
            res.status(200).json(updatedUbicacion);
        } else {
            res.status(404).send("Ubicación no encontrada");
        }
    } catch (error) {
        console.error("Error al actualizar la ubicación:", error);
        res.status(500).send("Hubo un error al actualizar la ubicación");
    }
};

module.exports = ubicacionCtl;