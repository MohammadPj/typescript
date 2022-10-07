type ComponentOptions = {
  selector: string
}

function Pipe(constructor: Function) {
  console.log("pipe decorator run first")
  constructor.prototype.pipe = true
}

function Component(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log("component decorator run after");
    constructor.prototype.options = options
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDom = () => {
      console.log("inserting the component in the Dom");
    };
  }
}


// pipe run first
@Component({selector: "#id-1"})
@Pipe
class ProfileComponent {}
