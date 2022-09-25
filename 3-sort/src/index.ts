import {Sorter} from "./Sorter";
import {NumbersCollection} from "./NumbersCollection";

const numbersCollections = new NumbersCollection([0,-5,10,-20])
const sorter = new Sorter(numbersCollections)
sorter.sort()
console.log(numbersCollections.data)