function Component(constructor: Function) {
  console.log("component decorator called");
  constructor.prototype.uniqueId = Date.now();
  constructor.prototype.insertInDom = () => {
    console.log("inserting the component in the Dom");
  };
}

@Component
class ProfileComponent {}

// کد بالا رو به شکل زیر هم میشه نوشت

class Componentt{
  insertInDOM() {
    console.log("insert component in dom")
  }
}

class ProfileComponentt extends Componentt {

}
