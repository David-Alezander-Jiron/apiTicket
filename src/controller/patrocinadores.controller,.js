const Sponsor = require('../models/sponsor');

exports.getSponsors = async (req, res) => {
    const sponsors = await Sponsor.findAll({ where: { estado: true } });
    res.json(sponsors);
};

exports.createSponsor = async (req, res) => {
    const newSponsor = await Sponsor.create(req.body);
    res.json(newSponsor);
};

exports.updateSponsor = async (req, res) => {
    const { id } = req.params;
    const updatedSponsor = await Sponsor.update(req.body, { where: { id } });
    res.json(updatedSponsor);
};

exports.deleteSponsor = async (req, res) => {
    const { id } = req.params;
    await Sponsor.update({ estado: false }, { where: { id } });
    res.json({ message: 'Sponsor deleted logically' });
};
