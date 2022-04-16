const express = require('express');

const friendsController = require('../controllers/friends.controller');

const friendsRouter = express.Router();

// applies middleware to just this router
friendsRouter.use((req, res, next) => {
    console.log('ip address: ',req.ip);
    next();
});

// OLD
// friendsRouter.get('/friends', friendsController.getFriends);
// friendsRouter.post('/friends',friendsController.postFriend);
// friendsRouter.get('/friends/:friendId', friendsController.getFriend);

// NEW using relative path from friends
friendsRouter.get('/', friendsController.getFriends);
friendsRouter.post('/',friendsController.postFriend);
friendsRouter.get('/:friendId', friendsController.getFriend);

module.exports = friendsRouter;