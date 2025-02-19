const data = require('./index2');
const _ = require('lodash');

console.log(data.people);
data.test();

console.log(_.last(data.people));