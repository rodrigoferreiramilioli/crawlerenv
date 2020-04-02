const chri = require('cheerio');
const request = require('request');

function requestMercado (search, limit){        
    return new Promise((resolve, reject)=>{
        let count =1;        
        let url = 'https://lista.mercadolivre.com.br/'+search.replace(' ','-');
        request(url, (error, response, body) => {
            if(error && response.statusCode !== 200){ 
                message = {
                    "status" : response.statusCode,
                    "error" : error
                }
                return reject(message);
            }
            else {
                let arrayEnv = [];
                let arrayReturn = {
                    "name": "",
                    "link": "",
                    "price": 0,
                    "store": null,
                    "state": null
                }
                const dataLoad = chri.load(body);
                dataLoad('ol[id=searchResults]').each(function (index, html){                
                    const fillHtml = chri.load(html);              
                    fillHtml('div[class="item__info item--hide-right-col "]').each(function(inx,objData){
                        if(count <= parseInt(limit)){
                            var arrayReturn = {};
                            const objFish = chri.load(objData);
                            let price = objFish('span[class="price__fraction"]').text();                           
                            let decimal = objFish('span[class="price__decimals"]').text();
                            price = decimal === "" ? price : price + '.' + decimal;
                            arrayReturn.name = objFish('span[class=main-title]').text();
                            arrayReturn.link = objFish('a[class=item__info-title]').attr('href');
                            arrayReturn.price = price;
                            arrayReturn.store =null;
                            arrayReturn.state =null;
                            arrayEnv.push(arrayReturn);
                            count++;
                        }
                    })   
                            
                });
                resolve(arrayEnv);
            }
        });
    })
}
module.exports.requestMercado = requestMercado;