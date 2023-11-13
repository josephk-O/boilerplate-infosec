const express = require('express');
const app = express();
const serverless = require=('serverless-http');
const helmet = require('helmet');











































app.use(helmet());
app.use(express.static('public'));
app.disable('strict-transport-security');




const api = require('./server.js');
app.use('/_api', api);

// module.exports.handler = serverless(app);

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});


module.exports = app;