// Synchronous and Asynchronous
//Synchronous JavaScript:

document.write("Hi"); // First
    document.write("<br>");
  
    document.write("Kanit") ;// Second
    document.write("<br>");
      
    document.write("How are you"); // Third


// Asynchronous JavaScript
     document.write("Hi");
    document.write("<br>");
  
    setTimeout(() => {
        document.write("Let us see what happens");
    }, 2000);
  
    document.write("<br>");
    document.write("End");
    document.write("<br>");