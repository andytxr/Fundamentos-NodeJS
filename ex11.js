const http = require('http');
const server = http.createServer(function(req,res){

    res.writeHead(200, {"Content-Type": "text/html"})
    res.end("<h1>Use o express! </h1>")

});

let porta = 3000;
server.listen(porta, function(){

    console.log(`A porta ${porta} está sendo escutada`);

})