const { User } = require('../models');

module.exports = {
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId})
            .select('-__v')
            .then((course) =>
                !course
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(course)  
            )
            .catch((err) => res.status(500).json(err));
    },
    createUser(req, res) {

    },
    updateUser(req, res) {

    },
    deleteUser(req, res) {

    },
    addFriend(req, res) {

    },
    removeFriend(req, res) {

    },
};