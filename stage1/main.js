// Get localStorage values with the keys below.
// If the keys don't exist in localStorage, the value will be null.
// If the key does exist, the value will always be a string.
const item1 = localStorage.getItem("item1");
const item2 = localStorage.getItem("item2");
const item3 = localStorage.getItem("item3");

const output = document.getElementById("output");

const p1 = document.createElement("p");
p1.innerText = "item1 is " + item1;
output.appendChild(p1);

const p2 = document.createElement("p");
p2.innerText = "item2 is " + item2;
output.appendChild(p2);

const p3 = document.createElement("p");
p3.innerText = "item3 is " + item3;
output.appendChild(p3);