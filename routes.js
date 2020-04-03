const fs=require('fs');

const requestHandler=(req,res)=>{
    // Set a response type of plain text for the response
    
    if(req.url === '/'){
        res.write('<html>');
        res.write('<head><title>Hello</title></head>');
        res.write('<body><form method="POST" action="/msg"><input type="text" name="msg"><button type="submit">submit</button></form></body>');
        res.write('</html>');
    // Send back a response and end the connection
        return res.end();
    }
   

    if(req.url === '/msg' && req.method === 'POST'){
        //fs.writeFileSync('msg.txt','Dummy');
        const data=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            data.push(chunk);
        });

        return req.on('end',()=>{
            const parsedbody=Buffer.concat(data).toString();
            fs.writeFile('msg.txt',parsedbody,err=>{
                console.log(err);
                res.statusCode=302;
                res.setHeader('Location','/');
                return res.end();
            });
        });
        
        
    }

    
    res.write('<html>');
    res.write('<head><title>Hello</title></head>');
    res.write('<body><h5>Hello from labeba</h5></body>');
    res.write('</html>');
    // Send back a response and end the connection
    res.end();

}

exports.handler=requestHandler;
exports.text='just a text';