//A
const arrayWithWords = ["nice","awesome","tof"]
const addTheWordCool = function(array){
    array.push("cool");
    return array;
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));

//B
const countItemsInArray = (array) => {
    return array.length;
}

console.log(countItemsInArray(['appels', 'peren', 'citroenen'])); // 3

//C
const selectBelgiumFromBenelux = (array) => array[0];
console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));  // resultaat: "Belgie"

//D
const lastElementInArray = (array) => array.pop();
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));  // resultaat: "Schildpad"

//E
const presidents = ["Trump", "Obama", "Bush", "Clinton"] 

const impeachTrumpSlice = function(array) {
    return presidents.slice(1,presidents.length);
}
const impeachTrumpSplice = function(array) {
    presidents.splice(0,1);
    return presidents;
}

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

//F
const stringsTogether = array => array.join(' ');
console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']))  //resultaat: "Winc Academy is leuk ;-}"

//G
const combineArrays = (arrayA, arrayB) => arrayA.concat(arrayB);
console.log(combineArrays([1,2,3], [4,5,6]))  // result should be [1,2,3,4,5,6]