const restify = require('restify');
const callRoutes = require('./routes/routebasemlivre');
const server = restify.createServer();
require("./routes/swagger.js").swagger(server);
server.pre(restify.plugins.bodyParser());
server.pre(restify.plugins.queryParser());
server.listen(3000);
callRoutes(server);