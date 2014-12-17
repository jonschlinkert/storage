/*!
 * storage <https://github.com/jonschlinkert/storage>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

/**
 * Expose `storage`
 */

module.exports = Storage;

/**
 * Create a new instance of `Storage`, optionally
 * passing a default `cache` object to initialize with.
 *
 * ```js
 * var Storage = require('storage');
 * var storage = new Storage();
 * ```
 *
 * @param {Object} `cache`
 * @api public
 */

function Storage(cache) {
  this.cache = cache || {};
}

/**
 * Assign `value` to `key`.
 *
 * @param {String} `key`
 * @param {*} `value`
 * @api public
 */

Storage.prototype.set = function(key, value) {
  this.cache[key] = value;
  return this;
};

/**
 * Get the stored vale of `key`.
 *
 * @param {String} `key`
 * @return {*} Returns the stored value of `key`
 * @api public
 */

Storage.prototype.get = function(key) {
  return this.cache[key];
};