const model = require('../models/friends.model');

function postFriend(req, res) {
    // middleware sets body to empty object automatically if nothing was sent in
    // general pattern in express, make a return in error handler so that rest of the code is ignored
    if (!req.body.name) {
        return res.status(400).json({
            error: 'Missing friend name'
        });
    }
    // success case
    const newFriend =  {
        name: req.body.name,
        id: model.length
    };
    model.push(newFriend);

    res.json(newFriend);
};

function getFriends(req, res) {
    res.json(model);
};

function getFriend(req, res) {
    const friendId = Number(req.params.friendId);
    // validation
    const friend = model[friendId];
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error: "dont exist fam"
        });
    }
}

module.exports = {
    postFriend,
    getFriends,
    getFriend
};