let myName = "Harshita Verma";
let strr = "A string is a data type used in programming, such as an integer and floating point unit, but is used to represent text rather than numbers. It is comprised of a set of characters that can also contain spaces and numbers. Typically, programmers must enclose strings in quotation marks for the data to recognized as a string and not a number or variable name."

// Implementing String.charAt() method
let alphabet = myName.charAt(3);
document.getElementById("method1").innerHTML = alphabet;

// Implementing String.charAt(String.length-1) method 
let alphabet2 = myName.charAt(myName.length - 1);
document.getElementById("method2").innerHTML = alphabet2;

// Implementing String.substring(1, 6) method
let subName = myName.substring(1, 6);
document.getElementById("method3").innerHTML = subName;

// Implementing String.slice(0, 6) method
let slicedName = myName.slice(0, 6);
document.getElementById("method4").innerHTML = slicedName;

// Implementing String.indexOf(s) method
let indexName = myName.indexOf("s");
document.getElementById("method5").innerHTML = indexName;

// Implementing String.lastIndexOf("r") method 
let lindexName = myName.lastIndexOf("r");
document.getElementById("method6").innerHTML = lindexName;

// Implementing String.lastIndexOf("a", 3) method 
let ioName = myName.indexOf("a", 3);
document.getElementById("method7").innerHTML = ioName;

// Implementing String.split("used", 2) method 
let splitName = strr.split("used", 2);
document.getElementById("method8").innerHTML = splitName;

// Implementing String.replace("h", "H") method 
let replaceName = myName.replace("Verma", "Sharma");
document.getElementById("method9").innerHTML = replaceName;

// Implementing String.toUpperCase() method
let uName = myName.toUpperCase();
document.getElementById("method10").innerHTML = uName;

// Implementing String.toLowerCase() method
let lName = myName.toLowerCase();
document.getElementById("method11").innerHTML = lName;