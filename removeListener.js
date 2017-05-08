var http = require('http');
var server = http.createServer();

var testFunction = function(req,res){
  if(req.url!=='/favicon.ico')
    console.log('发送响应完毕。');
};

// 为server服务器在接收到客户端请求时出发的request事件绑定多个时间处理函数
server.on('request', function(req,res){
  if(req.url!='/favicon.ico'){
    console.log("接受到客户端请求。");
  }
});
server.on('request',function(req,res){
  if(req!=='/favicon.ico'){
    console.log(req.url)
  }
  res.end();
});

server.on('request',testFunction);
server.removeListener('request',testFunction);
server.listen(1337,"127.0.0.1");
