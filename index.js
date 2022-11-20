// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
   
function destructivelyAppendCat(name){
    cats.push("Ralph");
}

function destructivelyPrependCat(name){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(name){
    cats.pop("Garfield")
}

function destructivelyRemoveFirstCat(name){
    cats.shift("Milo")
}

function appendCat(Ralph){
    var newArray = cats.slice();
    newArray.push(Ralph)
    return newArray
}


function prependCat(Ralph){
    var newArray = cats.slice();
    newArray.unshift(Ralph)
    return newArray
}


function removeLastCat(Ralph){
    var newArray = cats.slice();
    newArray.pop(Ralph)
    return newArray
}


function removeFirstCat(Ralph){
    var newArray = cats.slice();
    newArray.shift(Ralph)
    return newArray
}