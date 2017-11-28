const fs = require('fs');
const path = require('path');
const querystring = require('querystring');

const homepage = (request, response) =>{
  fs.readFile(path.join(__dirname, "..","public", "index.html"), (err, file)=>{
    if (err){
      response.writeHead(500, {"content-type":"text/html"});
      response.end("<h1 style = 'text-align: center;'>SERVER ERROR</h1>");}
  else {
  response.writeHead(200, {"content-type":"text/html"
});
  response.end(file);
}
});
}

const handler = (request, response) => {

  const url = request.url;
  const extension = url.split(".")[1];
  const filetype = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    json: "application/json"
  };

  fs.readFile(path.join(__dirname, "..", url), function (err, file){
    if(err){
      response.writeHead(500, {"content-type":"text/html"});
      response.end("<h1 style = 'text-align: center;'>SERVER ERROR</h1>");
    }
    else {
      response.writeHead(200, "Content-Type:" + filetype[extension])
      response.end(file);
    }
  });
  }

const getGame = (request, response) => {
  var name=request.game;
  console.log(name);
    request.on('data', function (chunkOfData) {
        allGame += chunkOfData;
    });
    request.on('end', function () {
    var convertedData = querystring.parse(allGame);
    response.writeHead(302, {'Location': '/'});
    fs.readFile(path.join(__dirname , 'games.json'), function(error, game) {
      if (error) {
        console.log(error);
        return;
      }
      response.end();
    });
  });

}



  module.exports = {
    homepage,
    handler
    }
