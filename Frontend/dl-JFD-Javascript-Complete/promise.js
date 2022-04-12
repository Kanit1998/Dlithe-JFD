//Promises are used to handle asynchronous operations in JavaScript.

var promise = new Promise(function(resolve, reject) {
  const x = "bank";
  const y = "bank"
  if(x === y) {
    resolve();
  } else {
    reject();
  }
});
   
promise.
    then(function () {
       document.write('Success');
    }).
    catch(function () {
        document.write('Some error has occurred');