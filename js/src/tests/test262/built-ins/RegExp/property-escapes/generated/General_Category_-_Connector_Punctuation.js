// |reftest| skip -- regexp-unicode-property-escapes is not supported
// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `General_Category=Connector_Punctuation`
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
    0x00005F,
    0x002054,
    0x00FF3F
  ],
  ranges: [
    [0x00203F, 0x002040],
    [0x00FE33, 0x00FE34],
    [0x00FE4D, 0x00FE4F]
  ]
});
testPropertyEscapes(
  /^\p{General_Category=Connector_Punctuation}+$/u,
  matchSymbols,
  "\\p{General_Category=Connector_Punctuation}"
);
testPropertyEscapes(
  /^\p{General_Category=Pc}+$/u,
  matchSymbols,
  "\\p{General_Category=Pc}"
);
testPropertyEscapes(
  /^\p{gc=Connector_Punctuation}+$/u,
  matchSymbols,
  "\\p{gc=Connector_Punctuation}"
);
testPropertyEscapes(
  /^\p{gc=Pc}+$/u,
  matchSymbols,
  "\\p{gc=Pc}"
);
testPropertyEscapes(
  /^\p{Connector_Punctuation}+$/u,
  matchSymbols,
  "\\p{Connector_Punctuation}"
);
testPropertyEscapes(
  /^\p{Pc}+$/u,
  matchSymbols,
  "\\p{Pc}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00005E],
    [0x000060, 0x00203E],
    [0x002041, 0x002053],
    [0x002055, 0x00DBFF],
    [0x00E000, 0x00FE32],
    [0x00FE35, 0x00FE4C],
    [0x00FE50, 0x00FF3E],
    [0x00FF40, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{General_Category=Connector_Punctuation}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Connector_Punctuation}"
);
testPropertyEscapes(
  /^\P{General_Category=Pc}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Pc}"
);
testPropertyEscapes(
  /^\P{gc=Connector_Punctuation}+$/u,
  nonMatchSymbols,
  "\\P{gc=Connector_Punctuation}"
);
testPropertyEscapes(
  /^\P{gc=Pc}+$/u,
  nonMatchSymbols,
  "\\P{gc=Pc}"
);
testPropertyEscapes(
  /^\P{Connector_Punctuation}+$/u,
  nonMatchSymbols,
  "\\P{Connector_Punctuation}"
);
testPropertyEscapes(
  /^\P{Pc}+$/u,
  nonMatchSymbols,
  "\\P{Pc}"
);

reportCompare(0, 0);
