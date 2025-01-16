const { createServer } = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
/* function(__dirname, __filename, modul, require, exports) {
  console-log(__dirname);
  console.log(__filename)
  const add = require("./calculator.js");
  console.log(add(2,3));
  const http = require("http");
  
}
 const server = hhtp.creatserver(funciton(red,res)){
 request:
 URL pl http://localhost:8080/<path>
 Method pl GET, POST, DELETE, Patch 
*/
