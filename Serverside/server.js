const express= require('express');
const cors= require('cors');
const app = express();
const port = 4000;

app.get('/',(req,res)=> {
    res.send('<body>"hello"</body>');
}).listen(4000,()=>{
    console.log('hello world');
})
app.post(route, function(req, res){
    res.send("ggggggg");
}).listen(4000,()=>{
    console.log('hello world');
})



console.log("hello world");