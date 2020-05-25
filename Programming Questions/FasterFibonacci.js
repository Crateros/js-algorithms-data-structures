function fasterFib(value) {
   var holding = [];

  for (var i = 0; i < 51; i++) {
    holding[i] = -1;
  }

  if (value <= 1) {
    console.log(value);
  }
  //if Fn is in memory, return it
  else if (holding[value] != -1) {
    console.log(holding[value]);
  }

  //else Fn <---- fib(n-1) + fib(n-2) then save Fn to memory
  //return Fn
  else {
    holding[value] = fasterFib(value - 1) + fasterFib(value - 2);
    console.log(holding[value]);
  }

}

fasterFib(10);
