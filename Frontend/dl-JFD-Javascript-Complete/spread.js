
  //Spread operator

  let arr = ['a','b','c'];
  let arr2 = [...arr];

  document.write(arr); // [ 'a', 'b', 'c' ]

  arr2.push('d'); //inserting an element at the end of arr2

  document.write(arr2); // [ 'a', 'b', 'c', 'd' ]
  document.write(arr);