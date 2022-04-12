//Constructor

// Constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create a Person object
const myage = new Person("kanit", "Sharma", 23, "blue");

// Display age
document.write(myage.age);