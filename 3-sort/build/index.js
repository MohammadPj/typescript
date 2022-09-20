"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const numbersCollections = new NumbersCollection_1.NumbersCollection([0, -5, 10, -20]);
const sorter = new Sorter_1.Sorter(numbersCollections);
sorter.sort();
console.log(numbersCollections.data);
