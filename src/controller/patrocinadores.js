const { patrocinadores } = require('../Database/dataBase.orm'); // Asegúrate de que la ruta sea correcta

// Controlador de patrocinadores
const patrocinadoresCtl = {};

// Crear un nuevo patrocinador
patrocinadoresCtl.crearPatrocinador = async (req, res, next) => {
  const { nombre, descripcion, contacto, estado } = req.body;

  try {
    // Verificar si el patrocinador ya existe
    const existingPatrocinador = await patrocinadores.findOne({ where: { nombre } });
    if (existingPatrocinador) {
      return res.status(400).json({ message: 'El patrocinador ya está registrado.' });
    }

    // Validar que el estado es un valor ENUM válido
    const validStates = ['activo', 'inactivo', 'eliminado'];
    if (!validStates.includes(estado)) {
      return res.status(400).json({ message: 'El estado debe ser uno de los siguientes valores: activo, inactivo, eliminado.' });
    }

    // Crear un nuevo patrocinador
    const newPatrocinador = await patrocinadores.create({
      nombre,
      descripcion,
      contacto,
      estado
    });

    // Responder con el nuevo patrocinador
    res.status(201).json({ message: 'Patrocinador creado con éxito', patrocinador: newPatrocinador });

  } catch (error) {
    console.error('Error en la creación del patrocinador:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Obtener todos los patrocinadores
patrocinadoresCtl.getPatrocinadores = async (req, res) => {
  try {
    // Filtrar para obtener solo los patrocinadores que no están eliminados
    const patrocinadoresList = await patrocinadores.findAll({
      where: { estado: 'activo' }
    });
    res.status(200).json(patrocinadoresList);
  } catch (error) {
    console.error('Error al obtener los patrocinadores:', error.message);
    res.status(500).json({ error: 'Error al obtener los patrocinadores', details: error.message });
  }
};

// Obtener un patrocinador por ID
patrocinadoresCtl.getPatrocinadorById = async (req, res) => {
  try {
    const patrocinador = await patrocinadores.findByPk(req.params.id);
    if (patrocinador && patrocinador.estado === 'activo') {
      res.status(200).json(patrocinador);
    } else {
      res.status(404).json({ error: 'Patrocinador no encontrado' });
    }
  } catch (error) {
    console.error('Error al obtener el patrocinador:', error.message);
    res.status(500).json({ error: 'Error al obtener el patrocinador', details: error.message });
  }
};

// Actualizar un patrocinador por ID
patrocinadoresCtl.updatePatrocinador = async (req, res) => {
  const validStates = ['activo', 'inactivo', 'eliminado']; // Definir aquí el array de estados válidos

  try {
    const patrocinador = await patrocinadores.findByPk(req.params.id);
    if (patrocinador) {
      // Validar que el estado es un valor ENUM válido si está presente
      if (req.body.estado !== undefined && !validStates.includes(req.body.estado)) {
        return res.status(400).json({ message: `El estado debe ser uno de los siguientes valores: ${validStates.join(', ')}.` });
      }
      await patrocinador.update(req.body);
      res.status(200).json(patrocinador);
    } else {
      res.status(404).json({ error: 'Patrocinador no encontrado' });
    }
  } catch (error) {
    console.error('Error al actualizar el patrocinador:', error.message);
    res.status(500).json({ error: 'Error al actualizar el patrocinador', details: error.message });
  }
};

// Borrar un patrocinador por ID (Marcar como eliminado)
patrocinadoresCtl.deletePatrocinador = async (req, res) => {
  try {
    const patrocinador = await patrocinadores.findByPk(req.params.id);
    if (patrocinador && patrocinador.estado === 'activo') {
      // Marcar el patrocinador como eliminado
      await patrocinador.update({ estado: 'eliminado' });
      res.status(204).send();
    } else if (patrocinador && patrocinador.estado === 'eliminado') {
      res.status(404).json({ error: 'Patrocinador ya ha sido eliminado' });
    } else {
      res.status(404).json({ error: 'Patrocinador no encontrado' });
    }
  } catch (error) {
    console.error('Error al borrar el patrocinador:', error.message);
    res.status(500).json({ error: 'Error al borrar el patrocinador', details: error.message });
  }
};

module.exports = patrocinadoresCtl;
