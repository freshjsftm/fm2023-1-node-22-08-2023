'use strict';
const fs = require('fs/promises');
// const fs = require('fs').promises;
// console.log(fs);
fs.readFile('./text.txt', 'utf-8')
  .then((content) => {
    console.log(content);
    content += '\n';
    //створити файл і записати в нього content
    fs.appendFile('./new2.txt', content, 'utf-8').then(() => {
      console.log('file create');
    });
  })
  .catch((error) => {
    console.log(error);
  });

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
