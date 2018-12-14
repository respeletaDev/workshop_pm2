var app = require('./app.js');

// Start the server
app.start(function (error, result) {
    console.info('My worker App started -', new Date());
});
