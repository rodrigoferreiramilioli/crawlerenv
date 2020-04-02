const dataRequest = require('../control/routebasemlivre');
module.exports.postMercadoCrawler = function (req, res, next){
    if(isNaN(req.body.limit)){
        var message = {
            statusCode: '200',
            "message": 'limit precisa ser um número'
        }
        res.send(message);
        return next();
    }
    async function sendMercadoLivre(){           
        var result = await dataRequest.requestMercado(req.body.search, req.body.limit);
        return result;
    }
    sendMercadoLivre().then((data) =>{
        res.send(data);
        return next();
    }); 
}