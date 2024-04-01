// first class functions
// can be passed as argument
// assign to argument
// return argument

function square(num) {
  return num * num;
}

function displaySquare(fn, num) {
  console.log(`the sq is: ${fn(num)}`);
}

// displaySquare(square, 5);

// Function scope

var x = 10;
var y = 5;
var name = "hello";
function multi() {
  console.log(x * y);
}

// multi();

function test() {
  var x = 1;
  var y = 2;

  console.log(x + y, name);
}

// test()

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 3000);
}

// if i is inialized with let
// o/p- 0, 1 ,2

// if i is inialized with var
// o/p-- 333

// as such var doesn't have a function scope.
// so, callback settim
