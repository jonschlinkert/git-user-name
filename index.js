/*!
 * git-user-name <https://github.com/jonschlinkert/git-user-name>
 *
 * Copyright (c) 2014 Jon Schlinkert
 * Licensed under the MIT License (MIT)
 */

const shell = require('shelljs');

module.exports = shell.exec('git config --get user.name', {
  silent: true
}).output.trim();