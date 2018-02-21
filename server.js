// This is the main script file that the server is running
//

// Treat warnings as errors
"use strict"

//var poo = require( "./poo" )
var tacA = require( "./tacModuleTest" )
var tacB = require( "./tacModuleTestB" )
var tac = {}
Object.assign( tac, tacA )
Object.assign( tac, tacB )
console.log( "tac: ", tac )
for( var i = 0; i < 3; i++ )
  tac.bar()

var http = require( "http" )
var port = process.env.PORT || 12345

var rootPath = "/"
var debugLogPath = null

var server = null

function TacRequestListener( request, response )
{
  response.writeHead( 200, { "Content-Type": "text/plain" } )
  response.write( "Hello World" )
  response.end()
}
server = http.createServer( TacRequestListener )
console.log( "Attempting to listen on port " + port )
server.listen( port )

// Test references
{
  function containerAFunc()
  {
   console.log( "original function" ) 
  }
  var containerA =
  {
    func : containerAFunc,
    func2:function()
    {
      console.log( "func2" )
    }
    
  }
  var containerB = 
  {
    func : containerA.func
  }
  function containerAFuncChanged()
  {
   console.log( "new function" ) 
  }

  containerA.func()
  containerB.func()
  containerB.func = containerAFuncChanged
  containerA.func()
  containerB.func()

}




