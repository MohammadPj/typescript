"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const LinkedList_1 = require("./LinkedList");
// const numbersCollections = new NumbersCollection([0,-5,10,-20])
// const sorter = new Sorter(numbersCollections)
// sorter.sort()
// console.log(numbersCollections.data)
// const characterCollection = new CharactersCollection("Salam")
// const sorter = new Sorter(characterCollection)
// sorter.sort()
// console.log("characterCollection", characterCollection)
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-23);
linkedList.add(0);
linkedList.add(250);
const sorter = new Sorter_1.Sorter(linkedList);
sorter.sort();
linkedList.print();
