/*!
 * git-user-name <https://github.com/jonschlinkert/git-user-name>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

var fs = require('fs');
var path = require('path');
var gitconfig = require('git-config-path');
var parse = require('parse-git-config');
var extend = require('extend-shallow');

module.exports = function(options) {
  options = extend({cwd: '/', path: gitconfig}, options);
  var config = parse.sync(options);
  if (typeof config === 'object' && config.hasOwnProperty('user')) {
    return config.user && config.user.name;
  }
  return null;
};
