const res = require("express/lib/response");
// using named functions with the function keyword allows node to tell us what function went wrong in the log when debugging. Node cant tell the name of the function if an arrow function is used. Good for debugging
function getMessages(req, res) {
    res.send('sample message')
};

function postMessage(req, res) {
    console.log('posting message');
};

module.exports = {
    getMessages,
    postMessage
};