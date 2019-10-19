const decorator = () => null;

// @babel/plugin-syntax-decorators
@decorator
class Something {
  thing = {
    ...{
      one: 1,
    },
    two: 2,
  };
}

function printThing() {
  console.log(this.thing);
}

const instance = new Something();

// @babel/plugin-proposal-function-bind
instance::printThing();

export default Something;
