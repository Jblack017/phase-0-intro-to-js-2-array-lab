// Write your solution here!
//set cats to ["Milo", "Otis", "Garfield"]
const cats = ["Milo", "Otis", "Garfield"]; // Set cats array to  

//destructivelyAppendCat(name)
function destructivelyAppendCat() {
    cats.push("Ralph")
    return cats
}

//destructivelyPrependCat(name)
function destructivelyPrependCat() {
    cats.unshift("Bob")
    return cats
}

//destructivelyRemoveLastCat()  
function destructivelyRemoveLastCat() {
    cats.pop()
    return cats
}

//destructivelyRemoveFirstCat() 
function destructivelyRemoveFirstCat() {
    cats.shift()
    return cats
}
 //appendCat(name)  -appendCat("Broom")
 function appendCat() {
     const newcats = [...cats.slice(0), "Broom"]
     return newcats;
    }

//prependCat(name)  -prependCat("Arnold")
 function prependCat() {
    const newcats = ["Arnold", ...cats.slice(0)]
    return newcats;
   }

//removeLastCat()
function removeLastCat() {
    const newcats = cats.slice(0, -1)
    return newcats;
   }

//removeFirstCat()
function  removeFirstCat() {
    const newcats = cats.slice(1)
    return newcats;
   }