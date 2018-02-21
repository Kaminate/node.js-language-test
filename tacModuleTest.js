//"use strict"

var tacModuleTestCallCount = 0
function Qux()
{
  tacModuleTestCallCount++
  console.log( "tac module test call count: ", tacModuleTestCallCount ) 
  console.log( "qux" )
}

console.log( "I'm just a random log inside a module" )

module.exports =
{
  //foo: 4,
  bar: Qux,
  //myDateTime : function ()
  //{
  //   return Date();
  //}
  
}
