const express = require('express');
const app = express();
const PORT = 3000;

const friends = [
    {
        id: 1,
        name: 'KJ',
    },
    {
        id: 2,
        name: 'JK'
    }
];

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

app.get('/friends', (req, res) => {
    res.json(friends);
});


app.post('/friends', (req, res) => {
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
        id: friends.length
    };
    friends.push(newFriend);

    res.json(newFriend);
});

app.get('/friends/:friendId', (req, res) => {
    const friendId = Number(req.params.friendId);
    // validation
    const friend = friends[friendId];
    if (friend) {
        res.json(friend);
    } else {
        res.status(404).json({
            error: "dont exist fam"
        });
    }
});

app.get('/', (req, res) => {
    res.send({
        id:1, name: 'KJ'
    })
});

app.post('/messages', (req, res) => {
    console.log('blah')
});

app.listen(PORT, () => {
    console.log('server is running');
});