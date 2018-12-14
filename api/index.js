const path = require('path');

//Express Server
const app = require('./app');

app.listen(8018, () => {
    console.log("Core Api Running on port %s...", 8018);
});
