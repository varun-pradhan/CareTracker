const http = require('http');
const fs = require('fs').promises;

const port = process.env.port || 4455;

http.createServer( (req,res)=>{
    if( req.url == '/' ){
        fs.readFile( "./index.html", (err,data)=>{
            // eturn data;
        });
        if (err) throw err ;
            
        res.writeHead(200,{ 'Content-type':'text/html'});
        res.write(data);
        res.end();
    }
    else if( req.url == '/signin' ){
        fs.readFile( "./signin.html", (err,data)=>{
            // eturn data;
        });
        if (err) throw err ;
            
        res.writeHead(200,{ 'Content-type':'text/html'});
        res.write(data);
        res.end();
    }
    });