/**
 * Modules
 */

var isArray = require('@micro-js/is-array')
var isObject = require('@micro-js/is-object')
var filterObj = require('@micro-js/filter-obj')
var filterArr = require('@micro-js/filter-array')

/**
 * Expose filter
 */

module.exports = filter['default'] = filter

/**
 * filter
 */

function filter (fn, val) {
  if (isObject(val)) return filterObj(fn, val)
  if (isArray(val)) return filterArr(fn, val)
  // More things here?
}
