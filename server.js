const express = require('express');
const friendsController = require('./controllers/friends.controller');
const messagesController = require('./controllers/messages.controller');
const app = express();
const PORT = 3000;

app.use((req,res,next) => {
    const start = Date.now();
    // make sure to call next so it goes to the next step!
    next();
    // actions go here that execute before the request goes back
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} took ${delta} seconds`);
});

// built in middleware to parse JSON
app.use(express.json());

app.get('/friends', friendsController.getFriends);
app.post('/friends',friendsController.postFriend);
app.get('/friends/:friendId', friendsController.getFriend);

app.get('/messages', messagesController.getMessages);
app.post('/message', messagesController.postMessage);

app.get('/', friendsController);

app.listen(PORT, () => {
    console.log('server is running');
});