class Component {
  render() {
    console.log('Component!!!');
  }
}
// module.exports = Component; //CommonJS
//exports.Component = Component;//CommonJS

export default Component; //ESModules
