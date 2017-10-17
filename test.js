'use strict';

require('mocha');
var fs = require('fs');
var assert = require('assert');
var name = require('./');

describe('name', function() {
  it('should return the name from git config:', function() {
    if (process.env.TRAVIS || process.env.CI) {
      assert.equal(name(), 'gfc-test');
    } else {
      assert.equal(name(), 'jonschlinkert');
    }
  });
});
