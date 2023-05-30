const { Thought, Reaction } = require('../models');

module.exports = {
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(users))
            .catch((err) -> res.status(500).json(err));
    },
    getSingleThought(req, res) {

    },
    createThought(req, res) {

    },
    updateThought(req, res) {

    },
    deleteThought(req, res) {

    },
    addReaction(req, res) {

    },
    removeReaction(req, res) {

    },
};