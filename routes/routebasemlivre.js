const roteBase = require('../src/routebasemlivre');
module.exports  = function(server){    
    server.post(
        '/',
        roteBase.postMercadoCrawler
    );
}