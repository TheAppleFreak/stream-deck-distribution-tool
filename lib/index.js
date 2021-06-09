"use strict";

const BinWrapper = require("bin-wrapper");
const path = require("path");

const dest = path.join(__dirname, "../vendor");
const baseUrl = "https://developer.elgato.com/documentation/stream-deck/distributiontool/";

const bin = new BinWrapper()
    .src(`${baseUrl}DistributionToolWindows.zip`, `win32`)
    .src(`${baseUrl}DistributionToolMac.zip`, `darwin`)
    .dest(dest)
    .use(process.platform === "win32" ? "DistributionTool.exe" : "DistributionTool"); 

module.exports = bin;