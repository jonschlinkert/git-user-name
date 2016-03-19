'use strict';

require('mocha');
var assert = require('assert');
var name = require('./');

describe('name', function() {
  it('should return the name from git config:', function() {
    assert.equal(name(), 'jonschlinkert');
  });
});
