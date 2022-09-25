import {Sorter} from "./Sorter";
import {NumbersCollection} from "./NumbersCollection";
import {CharactersCollection} from "./CharectersCollection";
import {LinkedList} from "./LinkedList";

// const numbersCollections = new NumbersCollection([0,-5,10,-20])
// const sorter = new Sorter(numbersCollections)
// sorter.sort()
// console.log(numbersCollections.data)

// const characterCollection = new CharactersCollection("Salam")
// const sorter = new Sorter(characterCollection)
// sorter.sort()
// console.log("characterCollection", characterCollection)

const linkedList = new LinkedList();

linkedList.add(500);
linkedList.add(-10);
linkedList.add(-23);
linkedList.add(0);
linkedList.add(250);

const sorter = new Sorter(linkedList)
sorter.sort()
linkedList.print()