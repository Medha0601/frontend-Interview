// hoisting
// let var const

// scope
// variable shadwoing

/* INVALID SHADWOING
function test() {
  var a = "hello";
  let b = "hi";
  if (true) {
    let a = "by1";
    var b = "bye2";
    console.log(a);
    console.log(b);
  }
}

test();
*/

// DECLARATION
// var can only be redecalared in the SAME SCOPE

// VALID
let a;
{
    let a
}

// RE-INITIALISATION
// const cannot be re initialisation

// creation phase and execution phase
// creation
//  create global or window object
// setup heap for memory or funtion
// iniliase the function(store the entire fn) and variable with undefined
// Execution

// HOISTING
// var-- global or window object (o/p-- undefined)
// let and const--hoisted at the temporal dead zone- (o/p -- reference error)
// TEMPORAL DEAD ZONE- the time between the decalaration and inilialisation of let and const


function abc(){
    console.log(a)
    var a= 10
}
abc()