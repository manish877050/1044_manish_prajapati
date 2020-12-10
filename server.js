var express = require('express');
var app = express();
//var path=require("path");
var fs=require("fs");


//server configuration
///app.use(express.static(path.join(__dirname,'public')));

 app.get('/',(requset, response) =>{

    console.log('inside / get router')
    response.send('inside / get router')

});
 

app.get('/hello',(req, res)=> {
  console.log("Calling rest api");
  var person={firstName:'Manish',lastName:'Prajapati',age:22};
  res.send(person);
});


app.listen(8081 ,'0.0.0.0',()=>{
    console.log("Example app listening at http://localhost:8081")
})
