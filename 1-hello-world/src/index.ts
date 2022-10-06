// Generic Constraints

// ============================================= union types

function echo1<T extends string | number>(value: T): T {
  return value;
}

echo1(1);
echo1(true);

// ============================================= object

function echo2<T extends { name: string }>(value: T): T {
  return value;
}

echo2({ name: "Mohammad" });
echo2("Mohammad");

// ============================================= interface

interface IPerson {
  firstName: string;
}

interface ICustomer extends IPerson {
  lastName: string;
}

function echo3<T extends ICustomer>(value: T): T {
  return value;
}

echo3({ firstName: "Mohammad", lastName: "Bay" });
echo3({ firstName: "Mohammad" });

// ============================================= classes

class Person {
  constructor(public name: string) {}
}

function echo4<T extends Person>(value: T): T {
  return value;
}

echo4({name: "Mohammad"})
echo4("Mohammad")