const name = "anil"
const repoCount = 50
// console.log(name + repoCount + " value"); not used in modern days

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('aniljj')
// open google and paste above line in inspection/console tab and observe every function of string.
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.charAt(2));
// console.log(gameName.toUpperCase());
// console.log(gameName.indexOf('i'));
const gameName1 = new String('jinalnilu')
const newString = gameName1.substring(0, 3)
console.log(newString);
const anotherString = gameName1.slice(-8, 4)
console.log(anotherString);
 
const newStringOne = " anilsudani "
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.trimEnd());

const url ="https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20', '_'));
console.log(url.includes('hit'));

const myName = "anil-sudani-01"
console.log(myName.split('-'));
