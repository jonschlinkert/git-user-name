/*!
 * git-user-name <https://github.com/jonschlinkert/git-user-name>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

var shell = require('shelljs');

module.exports = function(cmd, options) {
  if (typeof cmd === 'object') {
    options = cmd;
    cmd = null;
  }

  var cmd = 'git config --get user.name';
  var opts = options || {};
  opts.silent = opts.silent || true;

  var res = shell.exec(cmd, opts);
  return res.output.trim();
};
