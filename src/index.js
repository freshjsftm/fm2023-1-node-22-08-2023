'use strict';
//require core module

//require node module
const _ = require('lodash');

//require own module
//const {Component} = require('./Component'); //CommonJS
import Component from './Component'; //ESModules
require('./style.css');

console.dir(Component);

console.log(_.random(10, 100));

console.log('hi!');
const resultSummaTwoNumbers = 5 + 2;
console.log(resultSummaTwoNumbers);

const component = new Component();
component.render();

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
