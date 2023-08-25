'use strict';
import _ from 'lodash';
// import {sub, pow} from './math'; //v1
// import * as mymath from './math'; //v2
import secretMath, * as mymath from './math'; //v3
import Component from './Component';
require('./style.css');

console.log(_.random(10, 100));
// console.log(mymath.default); //v2
console.log(secretMath); //v2

const component = new Component();
component.render();

//const result = sub(8,3); //v1
const result = mymath.pow(8,3); //v2

const root = document.getElementById('root');
root.innerText = 'Text in root, result = ' + result;

/*
require
resolving -> loading -> wrapping -> evalution -> caching

1 - core modules
2 - file 
  2.1 - *.js
  2.2 - *.json
3 - dir
  3.1 - package.json -> "main"
  3.2 - index.js | index.json
4 - node_modules
5 - throw new Error()      
*/
