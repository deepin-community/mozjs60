// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.every
es5id: 15.4.4.16-3-12
description: >
    Array.prototype.every - 'length' is a string containing a negative
    number
---*/

function callbackfn1(val, idx, obj) {
  return val > 10;
}

function callbackfn2(val, idx, obj) {
  return val > 11;
}

var obj = { 0: 11, 1: 12, 2: 9, length: "-4294967294" };

assert(Array.prototype.every.call(obj, callbackfn1), 'Array.prototype.every.call(obj, callbackfn1) !== true');
assert(Array.prototype.every.call(obj, callbackfn2), 'Array.prototype.every.call(obj, callbackfn2) !== true');

reportCompare(0, 0);
