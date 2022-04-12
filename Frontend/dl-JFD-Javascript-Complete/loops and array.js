<!-- //loops and Array -->

	const bank = ["Emp", "Atm"];  //array

	let text = "";
	for (let i = 0; i < bank.length; i++) {  //loop
 			 text += bank[i] + "<br>";
		}

		document.write(text);

<!-- 
	//Object Referencing -->
	let user = { name: "Kanit" };

	let admin = user; //copy the reference

	         //or

	let user = { name: 'Monika' };

	let admin = user;

	admin.name = 'Kanit'; // changed by the "admin" reference

	document.write(user.name); // 'kanit', changes are seen from the "user" reference

	//This keyword

	//this keyword refers to an object.

	const bankempdetail = {
  firstName: "Anil",
  lastName: "Sharma",
  id: 420,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
// Display data from the object:
document.write(bankempdetail.fullName());
