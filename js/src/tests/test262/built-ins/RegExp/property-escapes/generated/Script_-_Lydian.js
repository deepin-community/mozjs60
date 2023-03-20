// |reftest| skip -- regexp-unicode-property-escapes is not supported
// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Lydian`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v10.0.0
  Emoji v5.0 (UTR51)
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x01093F
  ],
  ranges: [
    [0x010920, 0x010939]
  ]
});
testPropertyEscapes(
  /^\p{Script=Lydian}+$/u,
  matchSymbols,
  "\\p{Script=Lydian}"
);
testPropertyEscapes(
  /^\p{Script=Lydi}+$/u,
  matchSymbols,
  "\\p{Script=Lydi}"
);
testPropertyEscapes(
  /^\p{sc=Lydian}+$/u,
  matchSymbols,
  "\\p{sc=Lydian}"
);
testPropertyEscapes(
  /^\p{sc=Lydi}+$/u,
  matchSymbols,
  "\\p{sc=Lydi}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x01091F],
    [0x01093A, 0x01093E],
    [0x010940, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Lydian}+$/u,
  nonMatchSymbols,
  "\\P{Script=Lydian}"
);
testPropertyEscapes(
  /^\P{Script=Lydi}+$/u,
  nonMatchSymbols,
  "\\P{Script=Lydi}"
);
testPropertyEscapes(
  /^\P{sc=Lydian}+$/u,
  nonMatchSymbols,
  "\\P{sc=Lydian}"
);
testPropertyEscapes(
  /^\P{sc=Lydi}+$/u,
  nonMatchSymbols,
  "\\P{sc=Lydi}"
);

reportCompare(0, 0);
