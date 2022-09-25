"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const CharectersCollection_1 = require("./CharectersCollection");
// const numbersCollections = new NumbersCollection([0,-5,10,-20])
// const sorter = new Sorter(numbersCollections)
// sorter.sort()
// console.log(numbersCollections.data)
const characterCollection = new CharectersCollection_1.CharactersCollection("Salam");
const sorter = new Sorter_1.Sorter(characterCollection);
sorter.sort();
console.log("characterCollection", characterCollection);
