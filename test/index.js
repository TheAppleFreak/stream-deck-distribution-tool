/* eslint-env mocha */

"use strict";

const assert = require("assert");
const binCheck = require("bin-check");
const bin = require("..");

describe("sd-distribution-tool", () => {
  it("should return binary version", () => {
    return binCheck(bin, ["-v"]).then(works => {
      assert(works);
    });
  });
});