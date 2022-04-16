const express = require('express');
const path = require('path');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();
// tell node what templating engine to use and set views
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
const PORT = 3000;

app.use((req,res,next) => {
    const start = Date.now();
    // make sure to call next so it goes to the next step!
    next();
    // actions go here that execute before the request goes back
    const delta = Date.now() - start;
    // baseUrl + path specific for that router 
    console.log(`${req.method} ${req.baseUrl}${req.url} took ${delta} seconds`);
});
// The public folder is available at the path: 'site'
// the path we send is is relative to the path we launch our node application, use path join function to always get the correct path
app.use('/site', express.static(path.join(__dirname, 'public')));
// built in middleware to parse JSON
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index', {
        title: 'cool title',
        caption: 'Kirby'
    });
})
// Mounts the router under the path '/friends'
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.get('/', friendsController);

app.listen(PORT, () => {
    console.log('server is running');
});