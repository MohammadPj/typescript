import {Sorter} from "./Sorter";
import {NumbersCollection} from "./NumbersCollection";
import {CharactersCollection} from "./CharectersCollection";

// const numbersCollections = new NumbersCollection([0,-5,10,-20])
// const sorter = new Sorter(numbersCollections)
// sorter.sort()
// console.log(numbersCollections.data)

const characterCollection = new CharactersCollection("Salam")
const sorter = new Sorter(characterCollection)
sorter.sort()
console.log("characterCollection", characterCollection)