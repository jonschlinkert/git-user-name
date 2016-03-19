'use strict';

var utils = require('lazy-cache')(require);
var fn = require;
require = utils;

/**
 * Lazily required module dependencies
 */

require('isobject', 'isObject');
require('git-config-path', 'gitconfig');
require('parse-git-config', 'parse');
require('extend-shallow', 'extend');
require = fn;

/**
 * Expose `utils` modules
 */

module.exports = utils;
