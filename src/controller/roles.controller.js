const Role = require('../models/role');

exports.getRoles = async (req, res) => {
    const roles = await Role.findAll({ where: { estado: true } });
    res.json(roles);
};

exports.createRole = async (req, res) => {
    const newRole = await Role.create(req.body);
    res.json(newRole);
};

exports.updateRole = async (req, res) => {
    const { id } = req.params;
    const updatedRole = await Role.update(req.body, { where: { id } });
    res.json(updatedRole);
};

exports.deleteRole = async (req, res) => {
    const { id } = req.params;
    await Role.update({ estado: false }, { where: { id } });
    res.json({ message: 'Role deleted logically' });
};
