const http = require('http') // http is used to start the server
// will recruite the http library with the code

const port = 3000
const fs = require('fs')
// the server needs the request and response argument to
// be passed in.
// This ensures that the entire server is consitently listening to
// new clients that is trying to connect


const server = http.createServer(function(req, res)
{
  // Tell the browser that we are going to be writing html
  res.writeHead(200, { 'Content-Type':'text/html'})      // Everything went well
  // and parse the html
  fs.readFile('index.html', function(error, data){    // reads the actual html file
      if (error){
          res.writeHead(404)                      // gives the error and display this messages
          res.write('Error:File Not Found')
      } else {
        res.write(data)               // data is the html file
      }
      res.end()
  })


})

// either passes the error or nothing if and only if
// it occures
// Usually listens to erros before the clients are trying to connects
server.listen(port, function(error){
  if (error) {
    console.log('Something went wrong' ,error)
  } else {
    console.log('server is listening on port ' + port)
  }

})
