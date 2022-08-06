//Number buttons
const number = [one, two, three, four, five, six, seven, eight, nine, zero];
const sign = [Addition,Subtracting,Division,mulitplation];
const one = document.getElementById("One");
const two = document.getElementsById("Two");
const three = document.getElementById("Three");
const four  = document.getElementById("Four");
const five = document.getElementById("Five");
const six = document.getElementById("Six");
const seven = document.getElementById("Seven");
const eight = document.getElementById("Eight");
const nine = document.getElementById("Nine");
const zero = document.getElementById("Zero");
//Sign buttons
const Addition = document.getElementById("Addition");
const Subtracting = document.getElementById("Subtracting");
const Division = document.getElementById("Division");
const mulitplation = document.getElementById("multiplication");
//submit
const submit = document.getElementById("submit")
 

one.addEventListener("click", () => {
    submit.innerHTML = 1;
});
