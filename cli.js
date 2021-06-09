#!/usr/bin/env node

"use strict";

const { spawn } = require("child_process");
const bin = require(".");

const input = process.argv.slice(2);

spawn(bin, input, { stdio: "inherit" })
  .on("exit", process.exit);