const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
// const bigNumber = 4545345897458974587n converted into bigint      
const heroes = ["anil", "sudani"];
const myobj = {
    name: "aniil", 
    age: 22
}
console.log(heroes);
console.log(myobj);

const  myfunction = Function()
{
      console.log("hello world");
}   
console.log(anotherId);

// +++++++++++++++++++++++++++++
    // Stack(Primitive), Heap(Non Primitive)

    let myYoutubeName = "anilsudani01.com"
    anotherName = myYoutubeName
    anotherName = "Chaiaurcode"
    console.log(anotherName);
    console.log(myYoutubeName);
let userOne = {     
    email: "manish.com",
    upi: "man@ibl"
}
let userTwo = userOne
userTwo.email = "aaaa.com"
console.log(userOne.email);
console.log(userTwo.email);