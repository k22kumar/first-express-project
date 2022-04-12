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

app.get('/friends', (req, res) => {
    res.json(friends);
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
        })
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