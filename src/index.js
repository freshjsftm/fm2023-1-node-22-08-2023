'use strict';
//const _ = require('lodash');
import _ from 'lodash';
import math from './math';
import Component from './Component';
require('./style.css');
const {sum, sub} = math;

console.log(_.random(10, 100));
console.log(math);

const component = new Component();
component.render();

const result = sub(8,3);

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
