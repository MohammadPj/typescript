type ComponentOptions = {
  selector: string
}

function Component(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log("component decorator called");
    constructor.prototype.options = options
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDom = () => {
      console.log("inserting the component in the Dom");
    };
  }
}



@Component({selector: "#id-1"})
class ProfileComponent {}
