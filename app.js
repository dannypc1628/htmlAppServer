var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/',function (req,res){
	//sres.send('Hello World');
	res.sendFile(__dirname+"/"+"public"+"/"+"login.html");	
});

app.get('/api/addFriend',function(req,res){
	console.log("收到新會員請求 ="+req.query.name);

});

app.get('/user/login',function(req,res){
	console.log("收到登入請求 = "+req.query.session);
});

app.get('/api/monster',function(req,res){
	console.log("收到搜尋附近怪物請求 = ");
});


app.listen(1337,function(){
	console.log('ready on port 1337');
});

