const Staff = require('../models/staff');

exports.getStaff = async (req, res) => {
    const staff = await Staff.findAll({ where: { estado: true } });
    res.json(staff);
};

exports.createStaff = async (req, res) => {
    const newStaff = await Staff.create(req.body);
    res.json(newStaff);
};

exports.updateStaff = async (req, res) => {
    const { id } = req.params;
    const updatedStaff = await Staff.update(req.body, { where: { id } });
    res.json(updatedStaff);
};

exports.deleteStaff = async (req, res) => {
    const { id } = req.params;
    await Staff.update({ estado: false }, { where: { id } });
    res.json({ message: 'Staff deleted logically' });
};
