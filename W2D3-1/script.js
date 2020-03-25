// zet de functie om naar een arrow functie
// const ikRockArrowFunctions = function () {
//     console.log("Joe, ik rock de arrow functions!");
//   };
//A
const ikRockArrowFunctions = () => {
    console.log("Joe, ik rock de arrow functions!");
}

ikRockArrowFunctions();

//B
// const fivePlusSeven = function () {
//     return 5 + 7
//   };

const fivePlusSeven = () => 5+7;

console.log(fivePlusSeven()); //12

//C
() => 1+2;

//D
const myFunction = (a,b) => a + b;
console.log(myFunction(1,2)); //3

//E
const addFive = a => a + 5;
console.log(addFive(1)); //6

//F
const createObject = () => ({greeting: "hoi"});
console.log(createObject());