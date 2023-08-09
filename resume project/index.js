const http= require('http');
const port=8000;
const fs= require('fs');
function requestHandler(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    fs.readFile('./index.html',function(err,data)
    {
        if(err)
        {
            console.log("error",err);
            return res.end('<h1>error</h1');
        }
        return res.end(data);
    })
    
}
const server= http.createServer(requestHandler);
server.listen(port,function(err){
if(err)
{
    console.log("error");
    return;
}
console.log("server is running on port")});
