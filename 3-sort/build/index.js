"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharectersCollection_1 = require("./CharectersCollection");
// const numbersCollections = new NumbersCollection([0,-5,10,-20])
// const sorter = new Sorter(numbersCollections)
// sorter.sort()
// console.log(numbersCollections.data)
const characterCollection = new CharectersCollection_1.CharactersCollection("Salam");
characterCollection.sort();
console.log("characterCollection", characterCollection);
// const linkedList = new LinkedList();
//
// linkedList.add(500);
// linkedList.add(-10);
// linkedList.add(-23);
// linkedList.add(0);
// linkedList.add(250);
//
// const sorter = new Sorter(linkedList)
// sorter.sort()
// linkedList.print()
