'use strict';

require('mocha');
var fs = require('fs');
var assert = require('assert');
var utils = require('./utils');
var name = require('./');

describe('name', function() {
  it('should return the name from git config:', function(cb) {
    fs.stat(utils.gitconfig, function(err) {
      if (err) return cb();
      assert.equal(name(), 'jonschlinkert');
      cb();
    });
  });
});
