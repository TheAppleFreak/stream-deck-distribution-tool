"use strict";

const signale = require("signale");
const bin = require(".");

bin.run(["-v"])
    .then(() => {
        signale.success(`Installed Stream Deck distribution tool binary!`);
    })
    .catch(err => {
        signale.fatal(`${err.message}\nStream Deck distribution tool binary installation failed!`)
    });