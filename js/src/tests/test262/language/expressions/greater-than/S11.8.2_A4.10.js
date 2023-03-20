// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If x is a prefix of y, return false
es5id: 11.8.2_A4.10
description: x and y are string primitives
---*/

//CHECK#1
if (("x" > "x") !== false) {
  $ERROR('#1: ("x" > "x") === false');
}

//CHECK#2
if (("" > "x") !== false) {
  $ERROR('#2: ("" > "x") === false');
}

//CHECK#3
if (("ab" > "abcd") !== false) {
  $ERROR('#3: ("ab" > abcd") === false');
}

//CHECK#4
if (("abcd" > "abc\u0064") !== false) {
  $ERROR('#4: ("abcd" > abc\\u0064") === false');
}

//CHECK#5
if (("x" > "x" + "y") !== false) {
  $ERROR('#5: ("x" > "x" + "y") === false');
}

//CHECK#6
var x = "x";
if ((x > x + "y") !== false) {
  $ERROR('#6: var x = "x"; (x > x + "y") === false');
}

reportCompare(0, 0);
