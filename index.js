
/*console.log("I like Pizza!");
console.log("It's really good!");

//window.alert("This is Alert!")
//This is alert.
let age = 22;
age = age ** 2;
console.log("You are",age,"years old!");
let firstname = "Yordanos";
console.log("Hello",firstname);
let student=true;
console.log(student);  

document.getElementById("p1").innerHTML ="HI " + firstname;
document.getElementById("p2").innerHTML = "OHH " + age + " years old!";
document.getElementById("p3").innerHTML ="Enrolled " + student;

//let username = window.prompt("What is your name?");
//console.log(username);
 let username ;
 document.getElementById("mybutton").onclick = function(){
    username = document.getElementById("mytext").value;
    console.log(username);
    document.getElementById("mylabel").innerHTML ="Hello " + username;
 }
    
   let age =window.prompt("How old are you?");
   console.log(typeof age);
   age = Number(age);
   console.log(typeof age);
   age += 1;
   console.log("Happy Birthday ! You are " + age + " years old.");
   
  const PI = 3.14;
  let radius;
  let circumference ;
  radius = window.prompt("Enter a radius :");
  radius = Number(radius);
  circumference = 2 * radius * PI;
  console.log("The Circumference of the circle is : ", circumference);
  
 let a,b,c;
 a =window.prompt("Enter side A :");
 a = Number(a);
 b = window.prompt("Enter side B :");
 b = Number(b);
 c = Math.pow(a,2) + Math.pow(b,2);
 c = Math.sqrt(c);
 console.log("Hypothesis ",c);
 
let a,b,c;
document.getElementById("butt").onclick =function(){
 a = document.getElementById("sideA").value;
 b = document.getElementById("sideB").value;
 c = Math.pow(a,2) + Math.pow(b,2);
 c= Math.sqrt(c);
 console.log("Hypothesis : ",c);
 document.getElementById("sideC").innerHTML = "Hypothesis : " + c;
}*/
let count =0;
document.getElementById("dec").onclick = function(){
count -= 1;
document.getElementById("lab").innerHTML = count;
}

document.getElementById("res").onclick = function(){
    count = 0;
    document.getElementById("lab").innerHTML = count;
    }

    document.getElementById("inc").onclick = function(){
        count += 1;
        document.getElementById("lab").innerHTML = count;
        }