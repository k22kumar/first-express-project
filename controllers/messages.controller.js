// handles different ways operating systems handle paths to files
const path = require('path');
// using named functions with the function keyword allows node to tell us what function went wrong in the log when debugging. Node cant tell the name of the function if an arrow function is used. Good for debugging
function getMessages(req, res) {
    // res.send('sample message');
    // this needs to be an absolute path from the root of your system
    // __dirname builtin variable to get the name of the folder where the current file lives, in this case the controllers folder
    // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'KirbyFaceForward.png'));
    res.render('messages', {
        title: 'messages',
        friend: 'Elon Musk'
    })
};

function postMessage(req, res) {
    console.log('posting message');
};

module.exports = {
    getMessages,
    postMessage
};