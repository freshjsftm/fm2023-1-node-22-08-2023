const { MyMath } = require('./MyMath');
class Component {
  render() {
    console.log('Component render');
  }
}

const result = MyMath.sum(2, 4);
console.log('result = ', result);

exports.Component = Component;