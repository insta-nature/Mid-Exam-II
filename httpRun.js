const http = require('http');
http.createServer(function (req, res) {

  res.write('successfully Run Server ');
  res.end();
}).listen(3000);