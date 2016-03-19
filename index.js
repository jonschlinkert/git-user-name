/*!
 * git-user-name <https://github.com/jonschlinkert/git-user-name>
 *
 * Copyright (c) 2014-2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

var utils = require('./utils');

module.exports = function(options) {
  options = utils.extend({cwd: '/', path: utils.gitconfig}, options);
  var config = utils.parse.sync(options);
  if (!utils.isObject(config) || !utils.isObject(config.user)) {
    return null;
  }
  return config.user.name;
};
