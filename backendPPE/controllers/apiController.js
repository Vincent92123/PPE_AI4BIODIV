require('../models/db');
const Api = require('../models/api');

exports.listForum = async (req, res) => {
    let { name, q } = req.query;

    let query = {};
    if (name) query.name = name;
    if (q) {
        query = { $text: { $search: q } };
    }

    try {
        const forum = await Api.find(query);
        res.json(forum);
    } catch (err) {
        res.status(400).json({ message: err })
    }
}

exports.insertForum = async (req, res) => {
    const newForum = new Api({
        name: req.body.name,
        description: req.body.description
    });

    try {
        await newForum.save();
        res.json(newForum);
    } catch (err) {
        res.status(400).json({ message: err })
    }
}

exports.updateForum = async (req, res) => {
    let paramID = req.params.id;
    let description = req.body.description;

    try {
        const updateForum = await Api.updateOne({ _id: paramID }, { description: description });
        res.json(updateForum);
    } catch (err) {
        res.status(400).json({ message: err })
    }
}

exports.deleteForum = async (req, res) => {
    let paramID = req.params.id;

    try {
        const data = await Api.deleteOne({ _id: paramID });
        res.json(data);
    } catch (err) {
        res.status(400).json({ message: err })
    }
}