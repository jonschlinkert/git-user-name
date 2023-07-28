'use strict';

var mocha = require('mocha');
var describe = mocha.describe;
var it = mocha.it;
var fs = require('fs');
var assert = require('assert');
var path = require('path');
var name = require('../');

describe('name', function() {
  it('should return the name from git config', function() {
    // You cannot commit .git files, so this creates a local config
    try {
      fs.mkdirSync(path.join(__dirname, 'fixtures'));
    } catch (e) {}
    try {
      fs.mkdirSync(path.join(__dirname, 'fixtures', '.git'));
    } catch (e) {}
    try {
      fs.writeFileSync(path.join(__dirname, 'fixtures', '.git', 'config'), `
[user]
	name = Test Person
	email = test@example.com
    `);
    } catch (e) {}

    assert.equal(name({
      gitconfig: {
        type: 'local',
        cwd: path.join(__dirname, 'fixtures')
      }
    }), 'Test Person');
  });
});
