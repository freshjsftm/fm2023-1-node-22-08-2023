'use strict';
const { Component } = require('./Component');
const { MyMath } = require('./MyMath');
const data = require('./test');
console.log('hi, node!', data);

const result = MyMath.mult(2, 4);
console.log('result = ', result);

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