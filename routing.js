const fs = require('fs');
const http = require("http");
const url = require("url");
const port = 5502;

const server = http.createServer(
    (req,resp)=>{
        const URLObject = url.parse(req.url,true);
        // const URLpath = 
        resp.writeHead(200,{'Content-Type':'text/plain'});
        const filename = "./public"+URLObject.pathname;

        fs.readFile(filename, (err,data)=>{
            if (err){
                resp.writeHead(404,{'Content-Type':'text/html'});
                resp.end("404 File not found");
            }

            resp.writeHead(200,{'Content-Type':'text/html'});
            resp.write(data);

        });


        resp.end()
    }
).listen(5502,()=>{
    console.log("server running at port :"+5502);
});

module.exports = server;

