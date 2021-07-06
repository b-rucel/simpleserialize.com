/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 260);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(144);
} else {}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(241)();
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var core = __webpack_require__(23);
var hide = __webpack_require__(11);
var redefine = __webpack_require__(17);
var ctx = __webpack_require__(47);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(46)('wks');
var uid = __webpack_require__(21);
var Symbol = __webpack_require__(4).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(8)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  hash: true
};
Object.defineProperty(exports, "hash", {
  enumerable: true,
  get: function get() {
    return _compat.hash;
  }
});

var _interface = __webpack_require__(161);

Object.keys(_interface).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _interface[key];
    }
  });
});

var _types = __webpack_require__(105);

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types[key];
    }
  });
});

var _backings = __webpack_require__(80);

Object.keys(_backings).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _backings[key];
    }
  });
});

var _compat = __webpack_require__(83);

var _byteArray = __webpack_require__(22);

Object.keys(_byteArray).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _byteArray[key];
    }
  });
});

var _tree = __webpack_require__(108);

Object.keys(_tree).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tree[key];
    }
  });
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(91);
var toPrimitive = __webpack_require__(45);
var dP = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTypeOf = isTypeOf;
exports.Type = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable @typescript-eslint/member-ordering */

/* eslint-disable @typescript-eslint/camelcase */

/**
 * Check if `type` is an instance of `typeSymbol` type
 *
 * Used by various isFooType functions
 */
function isTypeOf(type, typeSymbol) {
  return type._typeSymbols.has(typeSymbol);
}
/**
 * A Type is either a BasicType of a CompositeType
 */


class Type {
  /**
   * Symbols used to track the identity of a type
   *
   * Used by various isFooType functions
   */
  constructor() {
    _defineProperty(this, "_typeSymbols", void 0);

    this._typeSymbols = new Set();
  }

  /**
   * Valid value assertion
   */
  assertValidValue(value) {
    return this.struct_assertValidValue(value);
  }
  /**
   * Default constructor
   */


  defaultValue() {
    return this.struct_defaultValue();
  }
  /**
   * Clone / copy
   */


  clone(value) {
    return this.struct_clone(value);
  }
  /**
   * Equality
   */


  equals(value1, value2) {
    return this.struct_equals(value1, value2);
  } // Serialization / Deserialization

  /**
   * Check if type has a variable number of elements (or subelements)
   *
   * For basic types, this is always false
   */


  /**
   * Serialized byte length
   */
  size(value) {
    return this.struct_getSerializedLength(value);
  }
  /**
   * Low-level deserialization
   */


  fromBytes(data, start, end) {
    return this.struct_deserializeFromBytes(data, start, end);
  }
  /**
   * Deserialization
   */


  deserialize(data) {
    return this.fromBytes(data, 0, data.length);
  }
  /**
   * Low-level serialization
   *
   * Serializes to a pre-allocated Uint8Array
   */


  toBytes(value, output, offset) {
    return this.struct_serializeToBytes(value, output, offset);
  }
  /**
   * Serialization
   */


  serialize(value) {
    const output = new Uint8Array(this.size(value));
    this.toBytes(value, output, 0);
    return output;
  }
  /**
   * Merkleization
   */


  hashTreeRoot(value) {
    return this.struct_hashTreeRoot(value);
  }
  /**
   * Convert from JSON-serializable object
   */


  fromJson(data, options) {
    return this.struct_convertFromJson(data, options);
  }
  /**
   * Convert to JSON-serializable object
   */


  toJson(value, options) {
    return this.struct_convertToJson(value, options);
  }

}

exports.Type = Type;
//# sourceMappingURL=type.js.map

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ serialize_browser_esm_serializeStyles; });

// CONCATENATED MODULE: ./node_modules/@emotion/hash/dist/hash.browser.esm.js
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ var hash_browser_esm = (murmur2);

// CONCATENATED MODULE: ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ var unitless_browser_esm = (unitlessKeys);

// CONCATENATED MODULE: ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ var memoize_browser_esm = (memoize);

// CONCATENATED MODULE: ./node_modules/@emotion/serialize/dist/serialize.browser.esm.js




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = memoize_browser_esm(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var serialize_browser_esm_processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitless_browser_esm[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (false) { var hyphenatedCache, hyphenPattern, msPattern, oldProcessStyleValue, contentValues, contentValuePattern; }

var shouldWarnAboutInterpolatingClassNameFromCss = true;

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if (false) {}

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if (false) {}

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (false) {}

        break;
      }

    case 'string':
      if (false) { var replaced, matched; }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];

  if (false) {}

  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + serialize_browser_esm_processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + serialize_browser_esm_processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if (false) {}

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;

if (false) {} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serialize_browser_esm_serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if (false) {}

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      if (false) {}

      styles += strings[i];
    }
  }

  var sourceMap;

  if (false) {} // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = hash_browser_esm(styles) + identifierName;

  if (false) {}

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};




/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var createDesc = __webpack_require__(24);
module.exports = __webpack_require__(5) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getRegisteredStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return insertStyles; });
var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};




/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(48);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(145);
} else {}


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var hide = __webpack_require__(11);
var has = __webpack_require__(18);
var SRC = __webpack_require__(21)('src');
var $toString = __webpack_require__(142);
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(23).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 18 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(67);
var defined = __webpack_require__(48);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(27);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHexString = toHexString;
exports.fromHexString = fromHexString;
exports.byteArrayEquals = byteArrayEquals;
exports.getByteBits = getByteBits;
// Caching this info costs about ~1000 bytes and speeds up toHexString() by x6
const hexByByte = [];

function toHexString(bytes) {
  let hex = "0x";

  for (const byte of bytes) {
    if (!hexByByte[byte]) {
      hexByByte[byte] = byte < 16 ? "0" + byte.toString(16) : byte.toString(16);
    }

    hex += hexByByte[byte];
  }

  return hex;
}

function fromHexString(hex) {
  if (typeof hex !== "string") {
    throw new Error("Expected hex string to be a string");
  }

  if (hex.startsWith("0x")) {
    hex = hex.slice(2);
  }

  if (hex.length % 2 !== 0) {
    throw new Error("Expected an even number of characters");
  }

  const bytes = [];

  for (let i = 0, len = hex.length; i < len; i += 2) {
    const byte = parseInt(hex.slice(i, i + 2), 16);
    bytes.push(byte);
  }

  return new Uint8Array(bytes);
}

function byteArrayEquals(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

function getByteBits(target, offset) {
  const byte = target[offset];

  if (!byte) {
    return [false, false, false, false, false, false, false, false];
  }

  const bits = Array.prototype.map.call(byte.toString(2).padStart(8, "0"), c => c === "1" ? true : false).reverse();
  return bits;
}
//# sourceMappingURL=byteArray.js.map

/***/ }),
/* 23 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(93);
var enumBugKeys = __webpack_require__(71);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(58);
var test = {};
test[__webpack_require__(3)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(17)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(156);
var step = __webpack_require__(157);
var Iterators = __webpack_require__(28);
var toIObject = __webpack_require__(19);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(100)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _abstract = __webpack_require__(78);

Object.keys(_abstract).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _abstract[key];
    }
  });
});

var _boolean = __webpack_require__(106);

Object.keys(_boolean).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _boolean[key];
    }
  });
});

var _uint = __webpack_require__(107);

Object.keys(_uint).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _uint[key];
    }
  });
});

var _wellKnown = __webpack_require__(162);

Object.keys(_wellKnown).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _wellKnown[key];
    }
  });
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.compose = exports.identity = exports.LeafNode = exports.BranchNode = exports.Node = void 0;
const hash_1 = __webpack_require__(109);
const ERR_INVALID_TREE = "Invalid tree";
const ERR_NOT_IMPLEMENTED = "Not implemented";
class Node {
    get root() {
        throw new Error(ERR_NOT_IMPLEMENTED);
    }
    isLeaf() {
        throw new Error(ERR_NOT_IMPLEMENTED);
    }
    get left() {
        throw new Error(ERR_NOT_IMPLEMENTED);
    }
    get right() {
        throw new Error(ERR_NOT_IMPLEMENTED);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    rebindLeft(left) {
        throw new Error(ERR_NOT_IMPLEMENTED);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    rebindRight(right) {
        throw new Error(ERR_NOT_IMPLEMENTED);
    }
}
exports.Node = Node;
class BranchNode extends Node {
    constructor(_left, _right) {
        super();
        this._left = _left;
        this._right = _right;
        this._root = null;
        if (!_left || !_right)
            throw new Error(ERR_INVALID_TREE);
    }
    get root() {
        if (!this._root) {
            this._root = hash_1.hash(this.left.root, this.right.root);
        }
        return this._root;
    }
    isLeaf() {
        return false;
    }
    get left() {
        return this._left;
    }
    set left(n) {
        this._left = n;
    }
    get right() {
        return this._right;
    }
    set right(n) {
        this._right = n;
    }
    rebindLeft(left) {
        return new BranchNode(left, this.right);
    }
    rebindRight(right) {
        return new BranchNode(this.left, right);
    }
}
exports.BranchNode = BranchNode;
class LeafNode extends Node {
    constructor(_root) {
        super();
        this._root = _root;
        if (_root.length !== 32)
            throw new Error(ERR_INVALID_TREE);
    }
    get root() {
        return this._root;
    }
    isLeaf() {
        return true;
    }
}
exports.LeafNode = LeafNode;
function identity(n) {
    return n;
}
exports.identity = identity;
function compose(inner, outer) {
    return function (n) {
        return outer(inner(n));
    };
}
exports.compose = compose;


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _inheritsLoose; });

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(51);
var createDesc = __webpack_require__(24);
var toIObject = __webpack_require__(19);
var toPrimitive = __webpack_require__(45);
var has = __webpack_require__(18);
var IE8_DOM_DEFINE = __webpack_require__(91);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(5) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(12);
var dPs = __webpack_require__(95);
var enumBugKeys = __webpack_require__(71);
var IE_PROTO = __webpack_require__(70)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(92)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(149).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(2);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(5), 'Object', { defineProperty: __webpack_require__(7).f });


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(4);
var has = __webpack_require__(18);
var DESCRIPTORS = __webpack_require__(5);
var $export = __webpack_require__(2);
var redefine = __webpack_require__(17);
var META = __webpack_require__(151).KEY;
var $fails = __webpack_require__(8);
var shared = __webpack_require__(46);
var setToStringTag = __webpack_require__(56);
var uid = __webpack_require__(21);
var wks = __webpack_require__(3);
var wksExt = __webpack_require__(97);
var wksDefine = __webpack_require__(152);
var enumKeys = __webpack_require__(153);
var isArray = __webpack_require__(98);
var anObject = __webpack_require__(12);
var isObject = __webpack_require__(14);
var toObject = __webpack_require__(15);
var toIObject = __webpack_require__(19);
var toPrimitive = __webpack_require__(45);
var createDesc = __webpack_require__(24);
var _create = __webpack_require__(36);
var gOPNExt = __webpack_require__(154);
var $GOPD = __webpack_require__(35);
var $GOPS = __webpack_require__(50);
var $DP = __webpack_require__(7);
var $keys = __webpack_require__(26);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(39).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(51).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(25)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(11)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(93);
var hiddenKeys = __webpack_require__(71).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(8);

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(62), exports);
__exportStar(__webpack_require__(109), exports);
__exportStar(__webpack_require__(32), exports);
__exportStar(__webpack_require__(82), exports);
__exportStar(__webpack_require__(172), exports);
__exportStar(__webpack_require__(173), exports);
__exportStar(__webpack_require__(111), exports);


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(169)
var ieee754 = __webpack_require__(170)
var isArray = __webpack_require__(171)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(102)))

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@emotion/sheet/dist/sheet.browser.esm.js
var sheet_browser_esm = __webpack_require__(66);

// CONCATENATED MODULE: ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ var stylis_browser_esm = (stylis_min);

// CONCATENATED MODULE: ./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js
var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

/* harmony default export */ var weak_memoize_browser_esm = (weakMemoize);

// CONCATENATED MODULE: ./node_modules/@emotion/cache/dist/cache.browser.esm.js




// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
// inlined to avoid umd wrapper and peerDep warnings/installing stylis
// since we use stylis after closure compiler
var delimiter = '/*|*/';
var needle = delimiter + '}';

function toSheet(block) {
  if (block) {
    Sheet.current.insert(block + '}');
  }
}

var Sheet = {
  current: null
};
var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
  switch (context) {
    // property
    case 1:
      {
        switch (content.charCodeAt(0)) {
          case 64:
            {
              // @import
              Sheet.current.insert(content + ';');
              return '';
            }
          // charcode for l

          case 108:
            {
              // charcode for b
              // this ignores label
              if (content.charCodeAt(2) === 98) {
                return '';
              }
            }
        }

        break;
      }
    // selector

    case 2:
      {
        if (ns === 0) return content + delimiter;
        break;
      }
    // at-rule

    case 3:
      {
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            {
              Sheet.current.insert(selectors[0] + content);
              return '';
            }

          default:
            {
              return content + (at === 0 ? delimiter : '');
            }
        }
      }

    case -2:
      {
        content.split(needle).forEach(toSheet);
      }
  }
};

var cache_browser_esm_createCache = function createCache(options) {
  if (options === undefined) options = {};
  var key = options.key || 'css';
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var stylis = new stylis_browser_esm(stylisOptions);

  if (false) {}

  var inserted = {}; // $FlowFixMe

  var container;

  {
    container = options.container || document.head;
    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
    Array.prototype.forEach.call(nodes, function (node) {
      var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

      attrib.split(' ').forEach(function (id) {
        inserted[id] = true;
      });

      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    });
  }

  var _insert;

  {
    stylis.use(options.stylisPlugins)(ruleSheet);

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      Sheet.current = sheet;

      if (false) { var map; }

      stylis(selector, serialized.styles);

      if (shouldCache) {
        cache.inserted[name] = true;
      }
    };
  }

  if (false) { var commentEnd, commentStart; }

  var cache = {
    key: key,
    sheet: new sheet_browser_esm["a" /* StyleSheet */]({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  return cache;
};

/* harmony default export */ var cache_browser_esm = __webpack_exports__["a"] = (cache_browser_esm_createCache);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  ssz: true
};
exports.ssz = void 0;

var _types = __webpack_require__(208);

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});

var _ssz = _interopRequireWildcard(__webpack_require__(239));

exports.ssz = _ssz;

var _StringType = __webpack_require__(240);

Object.keys(_StringType).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _StringType[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _StringType[key];
    }
  });
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//# sourceMappingURL=index.js.map

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(14);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(23);
var global = __webpack_require__(4);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(25) ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(34);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 48 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(27);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 50 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 51 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(2);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(148).set });


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(15);
var $getPrototypeOf = __webpack_require__(72);

__webpack_require__(73)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(2);
var create = __webpack_require__(36);
var aFunction = __webpack_require__(34);
var anObject = __webpack_require__(12);
var isObject = __webpack_require__(14);
var fails = __webpack_require__(8);
var bind = __webpack_require__(96);
var rConstruct = (__webpack_require__(4).Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(2);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(36) });


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(7).f;
var has = __webpack_require__(18);
var TAG = __webpack_require__(3)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(99)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(100)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(68);
var TAG = __webpack_require__(3)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(30);
var getKeys = __webpack_require__(26);
var redefine = __webpack_require__(17);
var global = __webpack_require__(4);
var hide = __webpack_require__(11);
var Iterators = __webpack_require__(28);
var wks = __webpack_require__(3);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(47);
var IObject = __webpack_require__(67);
var toObject = __webpack_require__(15);
var toLength = __webpack_require__(20);
var asc = __webpack_require__(158);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTreeBacked = isTreeBacked;
exports.createTreeBacked = createTreeBacked;
exports.getTreeValueClass = getTreeValueClass;
exports.proxyWrapTreeValue = proxyWrapTreeValue;
exports.ContainerTreeValue = exports.CompositeListTreeValue = exports.BasicListTreeValue = exports.CompositeArrayTreeValue = exports.BasicArrayTreeValue = exports.TreeValue = exports.TreeProxyHandler = void 0;

var _types = __webpack_require__(105);

var _byteArray = __webpack_require__(22);

var _tree = __webpack_require__(108);

let _Symbol$iterator;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function isTreeBacked(value) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return value && value.type && value.tree && (0, _tree.isTree)(value.tree);
}
/**
 * Return an ES6 Proxy-wrapped tree value (ergonomic getter/setter/iteration)
 */


function createTreeBacked(type, tree) {
  const TreeValueClass = getTreeValueClass(type);
  return proxyWrapTreeValue(new TreeValueClass(type, tree));
}

function getTreeValueClass(type) {
  if ((0, _types.isListType)(type)) {
    if ((0, _types.isBasicType)(type.elementType)) {
      return BasicListTreeValue;
    } else {
      return CompositeListTreeValue;
    }
  } else if ((0, _types.isVectorType)(type)) {
    if ((0, _types.isBasicType)(type.elementType)) {
      return BasicArrayTreeValue;
    } else {
      return CompositeArrayTreeValue;
    }
  } else if ((0, _types.isContainerType)(type)) {
    return ContainerTreeValue;
  }
}
/**
 * Wrap a TreeValue in a Proxy that adds ergonomic getter/setter
 */


function proxyWrapTreeValue(value) {
  return new Proxy(value, TreeProxyHandler);
}
/**
 * Proxy handler that adds ergonomic get/set and exposes TreeValue methods
 */


const TreeProxyHandler = {
  get(target, property) {
    if (property in target) {
      return target[property];
    } else {
      return target.getProperty(property);
    }
  },

  set(target, property, value) {
    return target.setProperty(property, value);
  },

  ownKeys(target) {
    return target.getPropertyNames();
  },

  getOwnPropertyDescriptor(target, property) {
    if (target.type.getPropertyType(property)) {
      return {
        configurable: true,
        enumerable: true,
        writable: true
      };
    } else {
      return undefined;
    }
  }

};
/**
 * Convenience wrapper around a type and tree
 */

exports.TreeProxyHandler = TreeProxyHandler;
_Symbol$iterator = Symbol.iterator;

class TreeValue {
  constructor(type, tree) {
    _defineProperty(this, "type", void 0);

    _defineProperty(this, "tree", void 0);

    this.type = type;
    this.tree = tree;
  }

  clone() {
    const TreeValueClass = Object.getPrototypeOf(this).constructor;
    return proxyWrapTreeValue(new TreeValueClass(this.type, this.tree.clone()));
  }

  valueOf() {
    return this.type.tree_convertToStruct(this.tree);
  }

  equals(other) {
    if (isTreeBacked(other)) {
      return (0, _byteArray.byteArrayEquals)(this.hashTreeRoot(), other.hashTreeRoot());
    } else {
      return this.type.struct_equals(this, other);
    }
  }

  size() {
    return this.type.tree_getSerializedLength(this.tree);
  }

  toStruct() {
    return this.type.tree_convertToStruct(this.tree);
  }

  toBytes(output, offset) {
    return this.type.tree_serializeToBytes(this.tree, output, offset);
  }

  serialize() {
    const output = new Uint8Array(this.type.tree_getSerializedLength(this.tree));
    this.toBytes(output, 0);
    return output;
  }

  hashTreeRoot() {
    return this.tree.root;
  }

  createProof(paths) {
    return this.type.tree_createProof(this.tree, paths);
  }

  getPropertyNames() {
    return this.type.tree_getPropertyNames(this.tree);
  }

  [_Symbol$iterator]() {
    return this.values();
  }

}

exports.TreeValue = TreeValue;

class BasicArrayTreeValue extends TreeValue {
  constructor(type, tree) {
    super(type, tree);

    _defineProperty(this, "type", void 0);

    this.type = type;
  }

  getProperty(property) {
    return this.type.tree_getProperty(this.tree, property);
  }

  setProperty(property, value) {
    return this.type.tree_setProperty(this.tree, property, value);
  }

  *keys() {
    const propNames = this.getPropertyNames(); // pop off "length"

    propNames.pop();
    yield* propNames.map(String);
  }

  values() {
    return this.type.tree_iterateValues(this.tree);
  }

  *entries() {
    const keys = this.getPropertyNames();
    let i = 0;

    for (const value of this.values()) {
      yield [String(keys[i]), value];
      i++;
    }
  }

  readonlyValues() {
    return this.type.tree_readonlyIterateValues(this.tree);
  }

  *readonlyEntries() {
    const keys = this.getPropertyNames();
    let i = 0;

    for (const value of this.readonlyValues()) {
      yield [String(keys[i]), value];
      i++;
    }
  }

}

exports.BasicArrayTreeValue = BasicArrayTreeValue;

class CompositeArrayTreeValue extends TreeValue {
  constructor(type, tree) {
    super(type, tree);

    _defineProperty(this, "type", void 0);

    this.type = type;
  }

  getProperty(property) {
    if (property === "length") {
      return this.type.tree_getProperty(this.tree, property);
    }

    return createTreeBacked(this.type.elementType, this.type.tree_getProperty(this.tree, property));
  }

  setProperty(property, value) {
    return this.type.tree_setProperty(this.tree, property, isTreeBacked(value) ? value.tree : this.type.elementType.struct_convertToTree(value));
  }

  *keys() {
    const propNames = this.getPropertyNames(); // pop off "length"

    propNames.pop();
    yield* propNames.map(String);
  }

  *values() {
    for (const tree of this.type.tree_iterateValues(this.tree)) {
      yield createTreeBacked(this.type.elementType, tree);
    }
  }

  *entries() {
    const keys = this.getPropertyNames();
    let i = 0;

    for (const value of this.values()) {
      yield [String(keys[i]), value];
      i++;
    }
  }

  *readonlyValues() {
    for (const tree of this.type.tree_readonlyIterateValues(this.tree)) {
      yield createTreeBacked(this.type.elementType, tree);
    }
  }

  *readonlyEntries() {
    const keys = this.getPropertyNames();
    let i = 0;

    for (const value of this.readonlyValues()) {
      yield [String(keys[i]), value];
      i++;
    }
  }

}

exports.CompositeArrayTreeValue = CompositeArrayTreeValue;

class BasicListTreeValue extends BasicArrayTreeValue {
  constructor(type, tree) {
    super(type, tree);

    _defineProperty(this, "type", void 0);

    this.type = type;
  }

  push(...values) {
    return this.type.tree_push(this.tree, ...values);
  }

  pop() {
    return this.type.tree_pop(this.tree);
  }

}

exports.BasicListTreeValue = BasicListTreeValue;

class CompositeListTreeValue extends CompositeArrayTreeValue {
  constructor(type, tree) {
    super(type, tree);

    _defineProperty(this, "type", void 0);

    this.type = type;
  }

  push(...values) {
    const convertedValues = values.map(value => isTreeBacked(value) ? value.tree : this.type.elementType.struct_convertToTree(value));
    return this.type.tree_push(this.tree, ...convertedValues);
  }

  pop() {
    return this.type.tree_pop(this.tree);
  }

}

exports.CompositeListTreeValue = CompositeListTreeValue;

class ContainerTreeValue extends TreeValue {
  constructor(type, tree) {
    super(type, tree);

    _defineProperty(this, "type", void 0);

    this.type = type;
  }

  getProperty(property) {
    if (!this.type.fields[property]) {
      return undefined;
    }

    const propType = this.type.getPropertyType(property);
    const propValue = this.type.tree_getProperty(this.tree, property);

    if ((0, _types.isCompositeType)(propType)) {
      return createTreeBacked(propType, propValue);
    } else {
      return propValue;
    }
  }

  setProperty(property, value) {
    const propType = this.type.getPropertyType(property);

    if ((0, _types.isCompositeType)(propType)) {
      if (isTreeBacked(value)) {
        return this.type.tree_setProperty(this.tree, property, value.tree);
      } else {
        return this.type.tree_setProperty(this.tree, property, propType.struct_convertToTree(value));
      }
    } else {
      return this.type.tree_setProperty(this.tree, property, value);
    }
  }

  *keys() {
    yield* this.getPropertyNames();
  }

  *values() {
    for (const [_key, value] of this.entries()) {
      yield value;
    }
  }

  *entries() {
    const keys = this.getPropertyNames();
    let i = 0;

    for (const value of this.type.tree_iterateValues(this.tree)) {
      const propName = keys[i];
      const propType = this.type.getPropertyType(propName);

      if ((0, _types.isCompositeType)(propType)) {
        yield [propName, createTreeBacked(propType, value)];
      } else {
        yield [propName, value];
      }

      i++;
    }
  }

  *readonlyValues() {
    for (const [_key, value] of this.readonlyEntries()) {
      yield value;
    }
  }

  *readonlyEntries() {
    const keys = this.getPropertyNames();
    let i = 0;

    for (const value of this.type.tree_readonlyIterateValues(this.tree)) {
      const propName = keys[i];
      const propType = this.type.getPropertyType(propName);

      if ((0, _types.isCompositeType)(propType)) {
        yield [propName, createTreeBacked(propType, value)];
      } else {
        yield [propName, value];
      }

      i++;
    }
  }

}

exports.ContainerTreeValue = ContainerTreeValue;
//# sourceMappingURL=treeValue.js.map

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.gindexChild = exports.gindexParent = exports.gindexSibling = exports.concatGindices = exports.gindexIterator = exports.iterateAtDepth = exports.countToDepth = exports.toGindexBitstring = exports.toGindex = exports.bitIndexBigInt = void 0;
function bitIndexBigInt(v) {
    return v.toString(2).length - 1;
}
exports.bitIndexBigInt = bitIndexBigInt;
function toGindex(depth, index) {
    const anchor = BigInt(1) << BigInt(depth);
    if (index >= anchor) {
        throw new Error("index too large for depth");
    }
    return anchor | index;
}
exports.toGindex = toGindex;
function toGindexBitstring(depth, index) {
    const str = index ? index.toString(2) : "";
    if (str.length > depth) {
        throw new Error("index too large for depth");
    }
    else {
        return "1" + str.padStart(depth, "0");
    }
}
exports.toGindexBitstring = toGindexBitstring;
// Get the depth (root starting at 0) necessary to cover a subtree of `count` elements.
// (in out): (0 0), (1 0), (2 1), (3 2), (4 2), (5 3), (6 3), (7 3), (8 3), (9 4)
function countToDepth(count) {
    if (count <= 1) {
        return 0;
    }
    return (count - BigInt(1)).toString(2).length;
}
exports.countToDepth = countToDepth;
/**
 * Iterate through Gindexes at a certain depth
 */
function iterateAtDepth(depth, startIndex, count) {
    const anchor = BigInt(1) << BigInt(depth);
    if (startIndex + count > anchor) {
        throw new Error("Too large for depth");
    }
    let i = toGindex(depth, startIndex);
    const last = i + count;
    return {
        [Symbol.iterator]() {
            return {
                next() {
                    if (i < last) {
                        const value = i;
                        i++;
                        return { done: false, value };
                    }
                    else {
                        return { done: true, value: undefined };
                    }
                },
            };
        },
    };
}
exports.iterateAtDepth = iterateAtDepth;
const ERR_INVALID_GINDEX = "Invalid gindex";
function gindexIterator(gindex) {
    let bitstring;
    if (typeof gindex === "string") {
        if (!gindex.length) {
            throw new Error(ERR_INVALID_GINDEX);
        }
        bitstring = gindex;
    }
    else {
        if (gindex < 1) {
            throw new Error(ERR_INVALID_GINDEX);
        }
        bitstring = gindex.toString(2);
    }
    let i = 1;
    const next = () => {
        if (i === bitstring.length) {
            return { done: true, value: undefined };
        }
        const bit = Number(bitstring[i]);
        i++;
        return { done: false, value: bit };
    };
    return {
        [Symbol.iterator]() {
            return { next };
        },
        remainingBitLength() {
            return bitstring.length - i;
        },
    };
}
exports.gindexIterator = gindexIterator;
/**
 * Concatenate Generalized Indices
 * Given generalized indices i1 for A -> B, i2 for B -> C .... i_n for Y -> Z, returns
 * the generalized index for A -> Z.
 */
function concatGindices(gindices) {
    return BigInt(gindices.reduce((acc, gindex) => acc + gindex.toString(2).slice(1), "0b1"));
}
exports.concatGindices = concatGindices;
function gindexSibling(gindex) {
    return gindex ^ BigInt(1);
}
exports.gindexSibling = gindexSibling;
function gindexParent(gindex) {
    return gindex / BigInt(2);
}
exports.gindexParent = gindexParent;
function gindexChild(gindex, rightChild) {
    return gindex * BigInt(2) + BigInt(rightChild);
}
exports.gindexChild = gindexChild;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=types.js.map

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ssz = exports.ts = void 0;

var _ts = _interopRequireWildcard(__webpack_require__(209));

exports.ts = _ts;

var _ssz = _interopRequireWildcard(__webpack_require__(213));

exports.ssz = _ssz;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//# sourceMappingURL=index.js.map

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {


				var addMethods = __webpack_require__(243)
				var methods = ["createRandomValueWorker","serialize"]
				module.exports = function() {
					var w = new Worker(__webpack_require__.p + "4549562a0e97dff0d8f4.worker.js", { name: "[hash].worker.js" })
					addMethods(w, methods)
					
					return w
				}
			

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StyleSheet; });
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      var _tag = createStyleElement(this);

      var before;

      if (this.tags.length === 0) {
        before = this.before;
      } else {
        before = this.tags[this.tags.length - 1].nextSibling;
      }

      this.container.insertBefore(_tag, before);
      this.tags.push(_tag);
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is a really hot path
        // we check the second character first because having "i"
        // as the second character will happen less often than
        // having "@" as the first character
        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools

        sheet.insertRule(rule, // we need to insert @import rules before anything else
        // otherwise there will be an error
        // technically this means that the @import rules will
        // _usually_(not always since there could be multiple style tags)
        // be the first ones in prod and generally later in dev
        // this shouldn't really matter in the real world though
        // @import is generally only used for font faces from google fonts and etc.
        // so while this could be technically correct then it would be slower and larger
        // for a tiny bit of correctness that won't matter in the real world
        isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
        if (false) {}
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();




/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(68);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 68 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(19);
var toLength = __webpack_require__(20);
var toAbsoluteIndex = __webpack_require__(49);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(46)('keys');
var uid = __webpack_require__(21);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 71 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(18);
var toObject = __webpack_require__(15);
var IE_PROTO = __webpack_require__(70)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(2);
var core = __webpack_require__(23);
var fails = __webpack_require__(8);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(2);

$export($export.P, 'Function', { bind: __webpack_require__(96) });


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(2);
var $map = __webpack_require__(60)(1);

$export($export.P + $export.F * !__webpack_require__(40)([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(15);
var $keys = __webpack_require__(26);

__webpack_require__(73)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(12);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBasicType = isBasicType;
exports.BasicType = exports.BASIC_TYPE = void 0;

var _type = __webpack_require__(9);

/* eslint-disable @typescript-eslint/camelcase */

/* eslint-disable @typescript-eslint/member-ordering */

/* eslint-disable @typescript-eslint/no-unused-vars */
const BASIC_TYPE = Symbol.for("ssz/BasicType");
exports.BASIC_TYPE = BASIC_TYPE;

function isBasicType(type) {
  return (0, _type.isTypeOf)(type, BASIC_TYPE);
}
/**
 * A BasicType is a terminal type, which has no flexibility in its representation.
 *
 * It is serialized as, at maximum, 32 bytes and merkleized as, at maximum, a single chunk
 */


class BasicType extends _type.Type {
  constructor() {
    super();

    this._typeSymbols.add(BASIC_TYPE);
  }

  struct_clone(value) {
    return value;
  }

  struct_equals(value1, value2) {
    this.assertValidValue(value1);
    this.assertValidValue(value2);
    return value1 === value2;
  }
  /**
   * Check if type has a variable number of elements (or subelements)
   *
   * For basic types, this is always false
   */


  hasVariableSerializedLength() {
    return false;
  }

  getMaxSerializedLength() {
    return this.struct_getSerializedLength();
  }

  getMinSerializedLength() {
    return this.struct_getSerializedLength();
  }

  bytes_validate(data, offset) {
    if (!data) {
      throw new Error("Data is null or undefined");
    }

    if (data.length === 0) {
      throw new Error("Data is empty");
    }

    const length = data.length - offset;

    if (length < this.struct_getSerializedLength()) {
      throw new Error("Data length of ".concat(length, " is too small, expect ").concat(this.struct_getSerializedLength()));
    } // accept data length > this.size()

  }

  struct_hashTreeRoot(value) {
    const output = new Uint8Array(32);
    this.struct_serializeToBytes(value, output, 0);
    return output;
  }

}

exports.BasicType = BasicType;
//# sourceMappingURL=abstract.js.map

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isCompositeType = isCompositeType;
exports.CompositeType = exports.COMPOSITE_TYPE = void 0;

var _backings = __webpack_require__(80);

var _type = __webpack_require__(9);

var _persistentMerkleTree = __webpack_require__(41);

var _compat = __webpack_require__(83);

var _byteArray = __webpack_require__(22);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const COMPOSITE_TYPE = Symbol.for("ssz/CompositeType");
exports.COMPOSITE_TYPE = COMPOSITE_TYPE;

function isCompositeType(type) {
  return (0, _type.isTypeOf)(type, COMPOSITE_TYPE);
}
/**
 * A CompositeType is a type containing other types, and is flexible in its representation.
 *
 */


class CompositeType extends _type.Type {
  constructor() {
    super();

    _defineProperty(this, "_chunkDepth", void 0);

    _defineProperty(this, "_defaultNode", void 0);

    this._typeSymbols.add(COMPOSITE_TYPE);
  }

  tree_equals(tree1, tree2) {
    return (0, _byteArray.byteArrayEquals)(tree1.root, tree2.root);
  }

  bytes_equals(bytes1, bytes2) {
    return (0, _byteArray.byteArrayEquals)(bytes1, bytes2);
  }

  tree_defaultValue() {
    return new _persistentMerkleTree.Tree(this.tree_defaultNode());
  }

  tree_clone(value) {
    return value.clone();
  }

  bytes_clone(value, start = 0, end = value.length) {
    const bytes = new Uint8Array(end - start);
    value.subarray(start, end).set(bytes);
    return bytes;
  }

  struct_serialize(struct, data) {
    const output = new Uint8Array(this.struct_getSerializedLength(struct));
    return this.struct_serializeToBytes(struct, output, 0);
  }

  tree_serialize(tree, data) {
    const output = new Uint8Array(this.tree_getSerializedLength(tree));
    return this.tree_serializeToBytes(tree, output, 0);
  }

  bytes_validate(data, start, end) {
    if (!data) {
      throw new Error("Data is null or undefined");
    }

    if (data.length === 0) {
      throw new Error("Data is empty");
    }

    if (start < 0) {
      throw new Error("Start param is negative: ".concat(start));
    }

    if (start > data.length) {
      throw new Error("Start param: ".concat(start, " is greater than length: ").concat(data.length));
    }

    if (end < 0) {
      throw new Error("End param is negative: ".concat(end));
    }

    if (end > data.length) {
      throw new Error("End param: ".concat(end, " is greater than length: ").concat(data.length));
    }

    const length = end - start;

    if (!this.hasVariableSerializedLength() && length !== this.struct_getSerializedLength(null)) {
      throw new Error("Incorrect data length ".concat(length, ", expect ").concat(this.struct_getSerializedLength(null)));
    }

    if (end - start < this.getMinSerializedLength()) {
      throw new Error("Data length ".concat(length, " is too small, expect at least ").concat(this.getMinSerializedLength()));
    }
  }

  struct_deserialize(data) {
    return this.struct_deserializeFromBytes(data, 0, data.length);
  }

  tree_deserialize(data) {
    return this.tree_deserializeFromBytes(data, 0, data.length);
  }

  struct_getChunkCount(struct) {
    return this.getMaxChunkCount();
  }

  tree_getChunkCount(target) {
    return this.getMaxChunkCount();
  }

  *struct_yieldChunkRoots(struct) {
    const chunkCount = this.struct_getChunkCount(struct);

    for (let i = 0; i < chunkCount; i++) {
      yield this.struct_getRootAtChunkIndex(struct, i);
    }
  }

  getChunkDepth() {
    if (!this._chunkDepth) {
      this._chunkDepth = (0, _persistentMerkleTree.countToDepth)(BigInt(this.getMaxChunkCount()));
    }

    return this._chunkDepth;
  }

  getGindexAtChunkIndex(index) {
    return (0, _persistentMerkleTree.toGindex)(this.getChunkDepth(), BigInt(index));
  }

  tree_getSubtreeAtChunkIndex(target, index) {
    return target.getSubtree(this.getGindexAtChunkIndex(index));
  }

  tree_setSubtreeAtChunkIndex(target, index, value, expand = false) {
    target.setSubtree(this.getGindexAtChunkIndex(index), value, expand);
  }

  tree_getRootAtChunkIndex(target, index) {
    return target.getRoot(this.getGindexAtChunkIndex(index));
  }

  tree_setRootAtChunkIndex(target, index, value, expand = false) {
    target.setRoot(this.getGindexAtChunkIndex(index), value, expand);
  }

  /**
   * Navigate to a subtype & gindex using a path
   */
  getPathInfo(path) {
    const gindices = [];
    let type = this;

    for (const prop of path) {
      if (!isCompositeType(type)) {
        throw new Error("Invalid path: cannot navigate beyond a basic type");
      }

      gindices.push(type.getPropertyGindex(prop));
      type = type.getPropertyType(prop);
    }

    return {
      type,
      gindex: (0, _persistentMerkleTree.concatGindices)(gindices)
    };
  }

  getPathGindex(path) {
    return this.getPathInfo(path).gindex;
  }
  /**
   * Get leaf gindices
   *
   * Note: This is a recursively called method.
   * Subtypes recursively call this method until basic types / leaf data is hit.
   *
   * @param target Used for variable-length types.
   * @param root Used to anchor the returned gindices to a non-root gindex.
   * This is used to augment leaf gindices in recursively-called subtypes relative to the type.
   * @returns The gindices corresponding to leaf data.
   */


  tree_createProof(target, paths) {
    const gindices = paths.map(path => {
      const {
        type,
        gindex
      } = this.getPathInfo(path);

      if (!isCompositeType(type)) {
        return gindex;
      } else {
        // if the path subtype is composite, include the gindices of all the leaves
        return type.tree_getLeafGindices(type.hasVariableSerializedLength() ? target.getSubtree(gindex) : undefined, gindex);
      }
    }).flat(1);
    return target.getProof({
      type: _persistentMerkleTree.ProofType.treeOffset,
      gindices
    });
  }

  tree_createFromProof(root, proof) {
    const tree = _persistentMerkleTree.Tree.createFromProof(proof);

    if (!(0, _byteArray.byteArrayEquals)(tree.root, root)) {
      throw new Error("Proof does not match trusted root");
    }

    return tree;
  }

  tree_createFromProofUnsafe(proof) {
    return _persistentMerkleTree.Tree.createFromProof(proof);
  }

  struct_hashTreeRoot(struct) {
    return (0, _compat.merkleize)(this.struct_yieldChunkRoots(struct), this.getMaxChunkCount());
  }

  tree_hashTreeRoot(tree) {
    return tree.root;
  } // convenience

  /**
   * Valid value assertion
   */


  assertValidValue(value) {
    this.struct_assertValidValue(value);
  }
  /**
   * Equality
   */


  equals(value1, value2) {
    if ((0, _backings.isBackedValue)(value1) && (0, _backings.isBackedValue)(value2)) {
      return value1.equals(value2);
    } else {
      return this.struct_equals(value1, value2);
    }
  }
  /**
   * Default constructor
   */


  defaultValue() {
    return this.struct_defaultValue();
  }
  /**
   * Clone / copy
   */


  clone(value) {
    if ((0, _backings.isBackedValue)(value)) {
      return value.clone();
    } else {
      return this.struct_clone(value);
    }
  } // Serialization / Deserialization

  /**
   * Serialized byte length
   */


  size(value) {
    if ((0, _backings.isBackedValue)(value)) {
      return value.size();
    } else {
      return this.struct_getSerializedLength(value);
    }
  }
  /**
   * Maximal serialized byte length
   */


  maxSize() {
    return this.getMaxSerializedLength();
  }
  /**
   * Minimal serialized byte length
   */


  minSize() {
    return this.getMinSerializedLength();
  }
  /**
   * Low-level deserialization
   */


  fromBytes(data, start, end) {
    return this.struct_deserializeFromBytes(data, start, end);
  }
  /**
   * Deserialization
   */


  deserialize(data) {
    return this.fromBytes(data, 0, data.length);
  }
  /**
   * Low-level serialization
   *
   * Serializes to a pre-allocated Uint8Array
   */


  toBytes(value, output, offset) {
    if ((0, _backings.isBackedValue)(value)) {
      return value.toBytes(output, offset);
    } else {
      return this.struct_serializeToBytes(value, output, offset);
    }
  }
  /**
   * Serialization
   */


  serialize(value) {
    if ((0, _backings.isBackedValue)(value)) {
      return value.serialize();
    } else {
      const output = new Uint8Array(this.size(value));
      this.toBytes(value, output, 0);
      return output;
    }
  } // Merkleization

  /**
   * Merkleization
   */


  hashTreeRoot(value) {
    if ((0, _backings.isBackedValue)(value)) {
      return value.hashTreeRoot();
    } else {
      return this.struct_hashTreeRoot(value);
    }
  }
  /**
   * Convert from a JSON-serializable object
   */


  fromJson(data, options) {
    return this.struct_convertFromJson(data, options);
  }
  /**
   * Convert to a JSON-serializable object
   */


  toJson(value, options) {
    return this.struct_convertToJson(value, options);
  }

  createTreeBacked(tree) {
    return (0, _backings.createTreeBacked)(this, tree);
  }

  createTreeBackedFromStruct(value) {
    return this.createTreeBacked(this.struct_convertToTree(value));
  }

  createTreeBackedFromBytes(data) {
    return this.createTreeBacked(this.tree_deserialize(data));
  }

  createTreeBackedFromJson(data, options) {
    return this.createTreeBackedFromStruct(this.struct_convertFromJson(data, options));
  }

  createTreeBackedFromProof(root, proof) {
    return this.createTreeBacked(this.tree_createFromProof(root, proof));
  }

  createTreeBackedFromProofUnsafe(proof) {
    return this.createTreeBacked(this.tree_createFromProofUnsafe(proof));
  }

  defaultTreeBacked() {
    return (0, _backings.createTreeBacked)(this, this.tree_defaultValue());
  }

}

exports.CompositeType = CompositeType;
//# sourceMappingURL=abstract.js.map

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tree = __webpack_require__(81);

Object.keys(_tree).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tree[key];
    }
  });
});

var _backedValue = __webpack_require__(165);

Object.keys(_backedValue).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _backedValue[key];
    }
  });
});

var _readonlyIterate = __webpack_require__(166);

Object.keys(_readonlyIterate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _readonlyIterate[key];
    }
  });
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _interface = __webpack_require__(164);

Object.keys(_interface).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _interface[key];
    }
  });
});

var _treeValue = __webpack_require__(61);

Object.keys(_treeValue).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _treeValue[key];
    }
  });
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.zeroNode = void 0;
const node_1 = __webpack_require__(32);
const zeroes = [new node_1.LeafNode(new Uint8Array(32))];
function zeroNode(depth) {
    if (depth >= zeroes.length) {
        for (let i = zeroes.length; i <= depth; i++) {
            zeroes[i] = new node_1.BranchNode(zeroes[i - 1], zeroes[i - 1]);
        }
    }
    return zeroes[depth];
}
exports.zeroNode = zeroNode;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hash = hash;
exports.merkleize = merkleize;
exports.mixInLength = mixInLength;

var _hash2 = __webpack_require__(84);

var _merkleize2 = __webpack_require__(176);

function hash(...inputs) {
  return Uint8Array.from((0, _hash2.hash)(...inputs.map(Buffer.from)));
}

function merkleize(chunks, padTo) {
  return (0, _merkleize2.merkleize)(Array.from(chunks).map(Buffer.from), padTo);
}

function mixInLength(root, length) {
  const lengthBuf = Buffer.alloc(32);
  lengthBuf.writeUIntLE(length, 0, 6);
  return hash(root, lengthBuf);
}
//# sourceMappingURL=compat.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(42).Buffer))

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hash = hash;

var _asSha = _interopRequireDefault(__webpack_require__(110));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @module ssz */

/**
 * Hash used for hashTreeRoot
 */
function hash(...inputs) {
  return _asSha.default.digest(Buffer.concat(inputs));
}
//# sourceMappingURL=hash.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(42).Buffer))

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BYTES_PER_LENGTH_PREFIX = exports.BYTES_PER_CHUNK = void 0;

/** @module ssz */
// Number of bytes per chunk.

/** @ignore */
const BYTES_PER_CHUNK = 32; // Number of bytes per serialized length prefix.

/** @ignore */

exports.BYTES_PER_CHUNK = BYTES_PER_CHUNK;
const BYTES_PER_LENGTH_PREFIX = 4;
exports.BYTES_PER_LENGTH_PREFIX = BYTES_PER_LENGTH_PREFIX;
//# sourceMappingURL=constants.js.map

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompositeArrayType = exports.BasicArrayType = void 0;

var _abstract = __webpack_require__(79);

var _errorPath = __webpack_require__(113);

var _persistentMerkleTree = __webpack_require__(41);

var _treeValue = __webpack_require__(61);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class BasicArrayType extends _abstract.CompositeType {
  constructor(options) {
    super();

    _defineProperty(this, "elementType", void 0);

    this.elementType = options.elementType;
  }

  struct_getSerializedLength(value) {
    return this.elementType.struct_getSerializedLength() * this.struct_getLength(value);
  }

  getMaxSerializedLength() {
    return this.getMaxLength() * this.elementType.getMaxSerializedLength();
  }

  getMinSerializedLength() {
    return this.getMinLength() * this.elementType.getMinSerializedLength();
  }

  struct_assertValidValue(value) {
    for (let i = 0; i < this.struct_getLength(value); i++) {
      try {
        this.elementType.struct_assertValidValue(value[i]);
      } catch (e) {
        throw new Error("Invalid element ".concat(i, ": ").concat(e.message));
      }
    }
  }

  struct_equals(value1, value2) {
    if (this.struct_getLength(value1) !== this.struct_getLength(value2)) {
      return false;
    }

    for (let i = 0; i < this.struct_getLength(value1); i++) {
      if (!this.elementType.struct_equals(value1[i], value2[i])) {
        return false;
      }
    }

    return true;
  }

  struct_clone(value) {
    const newValue = this.struct_defaultValue();

    for (let i = 0; i < this.struct_getLength(value); i++) {
      newValue[i] = this.elementType.struct_clone(value[i]);
    }

    return newValue;
  }

  struct_deserializeFromBytes(data, start, end) {
    this.bytes_validate(data, start, end);
    const elementSize = this.elementType.struct_getSerializedLength();
    return Array.from({
      length: (end - start) / elementSize
    }, (_, i) => this.elementType.struct_deserializeFromBytes(data, start + i * elementSize));
  }

  struct_serializeToBytes(value, output, offset) {
    const length = this.struct_getLength(value);
    let index = offset;

    for (let i = 0; i < length; i++) {
      index = this.elementType.struct_serializeToBytes(value[i], output, index);
    }

    return index;
  }

  struct_getRootAtChunkIndex(value, index) {
    const output = new Uint8Array(32);
    const itemSize = this.elementType.struct_getSerializedLength();
    const itemsInChunk = Math.floor(32 / itemSize);
    const firstIndex = index * itemsInChunk; // not inclusive

    const lastIndex = Math.min(this.struct_getLength(value), firstIndex + itemsInChunk); // i = array index, grows by 1
    // j = data offset, grows by itemSize

    for (let i = firstIndex, j = 0; i < lastIndex; i++, j += itemSize) {
      this.elementType.struct_serializeToBytes(value[i], output, j);
    }

    return output;
  }

  struct_getPropertyNames(value) {
    const length = this.struct_getLength(value);
    return Array.from({
      length
    }, (_, i) => i).concat(["length"]);
  }

  struct_convertFromJson(data) {
    return Array.from({
      length: data.length
    }, (_, i) => this.elementType.fromJson(data[i]));
  }

  struct_convertToJson(value) {
    return Array.from({
      length: this.struct_getLength(value)
    }, (_, i) => this.elementType.struct_convertToJson(value[i]));
  }

  struct_convertToTree(value) {
    if ((0, _treeValue.isTreeBacked)(value)) return value.tree.clone();
    const contents = [];

    for (const chunk of this.struct_yieldChunkRoots(value)) {
      contents.push(new _persistentMerkleTree.LeafNode(chunk));
    }

    return new _persistentMerkleTree.Tree((0, _persistentMerkleTree.subtreeFillToContents)(contents, this.getChunkDepth()));
  }

  tree_convertToStruct(target) {
    const value = this.struct_defaultValue();
    const length = this.tree_getLength(target);

    for (let i = 0; i < length; i++) {
      value[i] = this.tree_getValueAtIndex(target, i);
    }

    return value;
  }

  tree_getSerializedLength(target) {
    return this.elementType.struct_getSerializedLength() * this.tree_getLength(target);
  }

  tree_deserializeFromBytes(data, start, end) {
    const target = this.tree_defaultValue();
    const byteLength = end - start;
    const chunkCount = Math.ceil(byteLength / 32);

    for (let i = 0; i < chunkCount; i++) {
      // view of the chunk, shared buffer from `data`
      const dataChunk = new Uint8Array(data.buffer, data.byteOffset + start + i * 32, Math.min(32, byteLength - i * 32)); // copy chunk into new memory

      const chunk = new Uint8Array(32);
      chunk.set(dataChunk);
      this.tree_setRootAtChunkIndex(target, i, chunk, true // expand tree as needed
      );
    }

    return target;
  }

  tree_serializeToBytes(target, output, offset) {
    const size = this.tree_getSerializedLength(target);
    const fullChunkCount = Math.floor(size / 32);
    const remainder = size % 32;
    let i = 0;

    if (fullChunkCount > 0) {
      for (const node of target.iterateNodesAtDepth(this.getChunkDepth(), 0, fullChunkCount)) {
        output.set(node.root, offset + i * 32);
        i++;
      }
    }

    if (remainder) {
      output.set(this.tree_getRootAtChunkIndex(target, fullChunkCount).slice(0, remainder), offset + i * 32);
    }

    return offset + size;
  }

  getPropertyGindex(prop) {
    return this.getGindexAtChunkIndex(this.getChunkIndex(prop));
  } // eslint-disable-next-line @typescript-eslint/no-unused-vars


  getPropertyType(prop) {
    return this.elementType;
  }

  *tree_iterateValues(target) {
    const length = this.tree_getLength(target);

    if (length === 0) {
      return;
    }

    const elementSize = this.elementType.struct_getSerializedLength();

    if (32 % elementSize !== 0) {
      throw new Error("cannot handle a non-chunk-alignable elementType");
    }

    let left = length;

    for (const node of target.iterateNodesAtDepth(this.getChunkDepth(), 0, this.tree_getChunkCount(target))) {
      const chunk = node.root;

      for (let offset = 0; offset < 32; offset += elementSize) {
        yield this.elementType.struct_deserializeFromBytes(chunk, offset);
        left--;

        if (left === 0) {
          return;
        }
      }
    }
  }

  *tree_readonlyIterateValues(target) {
    yield* this.tree_iterateValues(target);
  }

  getChunkOffset(index) {
    const elementSize = this.elementType.struct_getSerializedLength();
    return index % Math.ceil(32 / elementSize) * elementSize;
  }

  getChunkIndex(index) {
    return Math.floor(index / Math.ceil(32 / this.elementType.struct_getSerializedLength()));
  }

  tree_getValueAtIndex(target, index) {
    const chunk = this.tree_getRootAtChunkIndex(target, this.getChunkIndex(index));
    return this.elementType.struct_deserializeFromBytes(chunk, this.getChunkOffset(index));
  }

  tree_setValueAtIndex(target, index, value, expand = false) {
    const chunkGindex = this.getGindexAtChunkIndex(this.getChunkIndex(index)); // copy data from old chunk, use new memory to set a new chunk

    const chunk = new Uint8Array(32);
    chunk.set(target.getRoot(chunkGindex));
    this.elementType.struct_serializeToBytes(value, chunk, this.getChunkOffset(index));
    target.setRoot(chunkGindex, chunk, expand);
    return true;
  }

  tree_getProperty(target, property) {
    const length = this.tree_getLength(target);

    if (property === "length") {
      return length;
    }

    const index = Number(property);

    if (Number.isNaN(index)) {
      return undefined;
    }

    if (index >= length) {
      return undefined;
    }

    return this.tree_getValueAtIndex(target, index);
  }

  tree_setProperty(target, property, value, expand = false) {
    return this.tree_setValueAtIndex(target, property, value, expand);
  }

  tree_deleteProperty(target, property) {
    return this.tree_setProperty(target, property, this.elementType.struct_defaultValue());
  }

  tree_getPropertyNames(target) {
    return Array.from({
      length: this.tree_getLength(target)
    }, (_, i) => String(i)).concat("length");
  } // eslint-disable-next-line @typescript-eslint/no-unused-vars


  bytes_getVariableOffsets(target) {
    return [];
  }

  tree_getLeafGindices(target, root = BigInt(1)) {
    const chunkCount = this.tree_getChunkCount(target);
    const startIndex = (0, _persistentMerkleTree.concatGindices)([root, (0, _persistentMerkleTree.toGindex)(this.getChunkDepth(), BigInt(0))]);
    const gindices = [];

    for (let i = 0, gindex = startIndex; i < chunkCount; i++, gindex++) {
      gindices.push(gindex);
    }

    return gindices;
  }

}

exports.BasicArrayType = BasicArrayType;

class CompositeArrayType extends _abstract.CompositeType {
  constructor(options) {
    super();

    _defineProperty(this, "elementType", void 0);

    this.elementType = options.elementType;
  }

  struct_getSerializedLength(value) {
    if (this.elementType.hasVariableSerializedLength()) {
      let s = 0;

      for (let i = 0; i < this.struct_getLength(value); i++) {
        s += this.elementType.struct_getSerializedLength(value[i]) + 4;
      }

      return s;
    } else {
      return this.elementType.struct_getSerializedLength(null) * this.struct_getLength(value);
    }
  }

  getMaxSerializedLength() {
    if (this.elementType.hasVariableSerializedLength()) {
      return this.getMaxLength() * 4 + this.getMaxLength() * this.elementType.getMaxSerializedLength();
    } else {
      return this.getMaxLength() * this.elementType.getMaxSerializedLength();
    }
  }

  getMinSerializedLength() {
    if (this.elementType.hasVariableSerializedLength()) {
      return this.getMinLength() * 4 + this.getMinLength() * this.elementType.getMinSerializedLength();
    } else {
      return this.getMinLength() * this.elementType.getMinSerializedLength();
    }
  }

  struct_assertValidValue(value) {
    for (let i = 0; i < this.struct_getLength(value); i++) {
      try {
        this.elementType.struct_assertValidValue(value[i]);
      } catch (e) {
        throw new Error("Invalid element ".concat(i, ": ").concat(e.message));
      }
    }
  }

  struct_equals(value1, value2) {
    if (this.struct_getLength(value1) !== this.struct_getLength(value2)) {
      return false;
    }

    for (let i = 0; i < this.struct_getLength(value1); i++) {
      if (!this.elementType.struct_equals(value1[i], value2[i])) {
        return false;
      }
    }

    return true;
  }

  struct_clone(value) {
    const newValue = this.struct_defaultValue();

    for (let i = 0; i < this.struct_getLength(value); i++) {
      newValue[i] = this.elementType.struct_clone(value[i]);
    }

    return newValue;
  }

  struct_deserializeFromBytes(data, start, end) {
    this.bytes_validate(data, start, end);

    if (start === end) {
      return [];
    }

    if (this.elementType.hasVariableSerializedLength()) {
      const value = []; // all elements variable-sized
      // indices contain offsets

      let currentIndex = start;
      let nextIndex; // data exists between offsets

      const fixedSection = new DataView(data.buffer, data.byteOffset);
      const firstOffset = start + fixedSection.getUint32(start, true);
      let currentOffset = firstOffset;
      let nextOffset;

      while (currentIndex < firstOffset) {
        if (currentOffset > end) {
          throw new Error("Offset out of bounds");
        }

        nextIndex = currentIndex + 4;
        nextOffset = nextIndex === firstOffset ? end : start + fixedSection.getUint32(nextIndex, true);

        if (currentOffset > nextOffset) {
          throw new Error("Offsets must be increasing");
        }

        try {
          value.push(this.elementType.struct_deserializeFromBytes(data, currentOffset, nextOffset));
        } catch (e) {
          throw new _errorPath.SszErrorPath(e, value.length);
        }

        currentIndex = nextIndex;
        currentOffset = nextOffset;
      }

      if (firstOffset !== currentIndex) {
        throw new Error("First offset skips variable data");
      }

      return value;
    } else {
      const elementSize = this.elementType.struct_getSerializedLength(null);
      return Array.from({
        length: (end - start) / elementSize
      }, (_, i) => this.elementType.struct_deserializeFromBytes(data, start + i * elementSize, start + (i + 1) * elementSize));
    }
  }

  struct_serializeToBytes(value, output, offset) {
    const length = this.struct_getLength(value);

    if (this.elementType.hasVariableSerializedLength()) {
      let variableIndex = offset + length * 4;
      const fixedSection = new DataView(output.buffer, output.byteOffset + offset);

      for (let i = 0; i < length; i++) {
        // write offset
        fixedSection.setUint32(i * 4, variableIndex - offset, true); // write serialized element to variable section

        variableIndex = this.elementType.struct_serializeToBytes(value[i], output, variableIndex);
      }

      return variableIndex;
    } else {
      let index = offset;

      for (let i = 0; i < length; i++) {
        index = this.elementType.struct_serializeToBytes(value[i], output, index);
      }

      return index;
    }
  }

  struct_getRootAtChunkIndex(value, index) {
    return this.elementType.hashTreeRoot(value[index]);
  }

  struct_getPropertyNames(value) {
    const length = this.struct_getLength(value);
    return Array.from({
      length
    }, (_, i) => i).concat(["length"]);
  }

  struct_convertFromJson(data, options) {
    return Array.from({
      length: data.length
    }, (_, i) => this.elementType.struct_convertFromJson(data[i], options));
  }

  struct_convertToJson(value, options) {
    return Array.from({
      length: this.struct_getLength(value)
    }, (_, i) => this.elementType.struct_convertToJson(value[i], options));
  }

  struct_convertToTree(value) {
    if ((0, _treeValue.isTreeBacked)(value)) return value.tree.clone();
    const contents = [];

    for (const element of value) {
      contents.push(this.elementType.struct_convertToTree(element).rootNode);
    }

    return new _persistentMerkleTree.Tree((0, _persistentMerkleTree.subtreeFillToContents)(contents, this.getChunkDepth()));
  }

  tree_convertToStruct(target) {
    const value = this.struct_defaultValue();
    const length = this.tree_getLength(target);

    for (let i = 0; i < length; i++) {
      value[i] = this.elementType.tree_convertToStruct(this.tree_getSubtreeAtChunkIndex(target, i));
    }

    return value;
  }

  tree_getSerializedLength(target) {
    if (this.elementType.hasVariableSerializedLength()) {
      let s = 0;

      for (let i = 0; i < this.tree_getLength(target); i++) {
        s += this.elementType.tree_getSerializedLength(this.tree_getSubtreeAtChunkIndex(target, i)) + 4;
      }

      return s;
    } else {
      return this.elementType.tree_getSerializedLength(null) * this.tree_getLength(target);
    }
  }

  tree_serializeToBytes(target, output, offset) {
    const length = this.tree_getLength(target);

    if (this.elementType.hasVariableSerializedLength()) {
      let variableIndex = offset + length * 4;
      const fixedSection = new DataView(output.buffer, output.byteOffset + offset, length * 4);
      let i = 0;

      for (const node of target.iterateNodesAtDepth(this.getChunkDepth(), i, length)) {
        // write offset
        fixedSection.setUint32(i * 4, variableIndex - offset, true); // write serialized element to variable section

        variableIndex = this.elementType.tree_serializeToBytes(new _persistentMerkleTree.Tree(node), output, variableIndex);
        i++;
      }

      return variableIndex;
    } else {
      let index = offset;
      let i = 0;

      for (const node of target.iterateNodesAtDepth(this.getChunkDepth(), i, length)) {
        index = this.elementType.tree_serializeToBytes(new _persistentMerkleTree.Tree(node), output, index);
        i++;
      }

      return index;
    }
  }

  getPropertyGindex(prop) {
    return this.getGindexAtChunkIndex(prop);
  } // eslint-disable-next-line @typescript-eslint/no-unused-vars


  getPropertyType(prop) {
    return this.elementType;
  }

  tree_getProperty(target, property) {
    const length = this.tree_getLength(target);

    if (property === "length") {
      return length;
    }

    const index = Number(property);

    if (Number.isNaN(index)) {
      return undefined;
    }

    if (index >= length) {
      return undefined;
    }

    return this.tree_getSubtreeAtChunkIndex(target, index);
  }

  tree_setProperty(target, property, value, expand = false) {
    this.tree_setSubtreeAtChunkIndex(target, property, value, expand);
    return true;
  }

  tree_deleteProperty(target, property) {
    return this.tree_setProperty(target, property, this.elementType.tree_defaultValue());
  }

  tree_getPropertyNames(target) {
    return Array.from({
      length: this.tree_getLength(target)
    }, (_, i) => i).concat(["length"]);
  }

  *tree_iterateValues(target) {
    for (const gindex of (0, _persistentMerkleTree.iterateAtDepth)(this.getChunkDepth(), BigInt(0), BigInt(this.tree_getLength(target)))) {
      yield target.getSubtree(gindex);
    }
  }

  *tree_readonlyIterateValues(target) {
    for (const node of target.iterateNodesAtDepth(this.getChunkDepth(), 0, this.tree_getLength(target))) {
      yield new _persistentMerkleTree.Tree(node);
    }
  }

  bytes_getVariableOffsets(target) {
    if (this.elementType.hasVariableSerializedLength()) {
      if (target.length === 0) {
        return [];
      }

      const offsets = []; // all elements are variable-sized
      // indices contain offsets, which are indices deeper in the byte array

      const fixedSection = new DataView(target.buffer, target.byteOffset);
      const firstOffset = fixedSection.getUint32(0, true);
      let currentOffset = firstOffset;
      let nextOffset;
      let currentIndex = 0;
      let nextIndex = 0;

      while (currentIndex < firstOffset) {
        if (currentOffset > target.length) {
          throw new Error("Offset out of bounds");
        }

        nextIndex = currentIndex + 4;
        nextOffset = nextIndex === firstOffset ? target.length : fixedSection.getUint32(nextIndex, true);

        if (currentOffset > nextOffset) {
          throw new Error("Offsets must be increasing");
        }

        offsets.push([currentOffset, nextOffset]);
        currentIndex = nextIndex;
        currentOffset = nextOffset;
      }

      if (firstOffset !== currentIndex) {
        throw new Error("First offset skips variable data");
      }

      return offsets;
    } else {
      return [];
    }
  }

  tree_getLeafGindices(target, root = BigInt(1)) {
    // Underlying elements exist one per chunk
    // Iterate through chunk gindices, recursively fetching leaf gindices from each chunk
    const chunkCount = this.tree_getChunkCount(target);
    const gindices = [];
    const startIndex = (0, _persistentMerkleTree.toGindex)(this.getChunkDepth(), BigInt(0));
    const extendedStartIndex = (0, _persistentMerkleTree.concatGindices)([root, startIndex]);

    if (this.elementType.hasVariableSerializedLength()) {
      if (!target) {
        throw new Error("variable type requires tree argument to get leaves");
      } // variable-length elements must pass the underlying subtrees to determine the length


      for (let i = 0, gindex = startIndex, extendedGindex = extendedStartIndex; i < chunkCount; i++, gindex++, extendedGindex++) {
        gindices.push(...this.elementType.tree_getLeafGindices(target.getSubtree(gindex), extendedGindex));
      }
    } else {
      for (let i = 0, gindex = extendedStartIndex; i < chunkCount; i++, gindex++) {
        gindices.push(...this.elementType.tree_getLeafGindices(undefined, gindex));
      }
    }

    return gindices;
  }

}

exports.CompositeArrayType = CompositeArrayType;
//# sourceMappingURL=array.js.map

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isVectorType = isVectorType;
exports.CompositeVectorType = exports.BasicVectorType = exports.VectorType = exports.VECTOR_TYPE = void 0;

var _array = __webpack_require__(86);

var _basic = __webpack_require__(31);

var _type = __webpack_require__(9);

var _persistentMerkleTree = __webpack_require__(41);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const VECTOR_TYPE = Symbol.for("ssz/VectorType"); // eslint-disable-next-line @typescript-eslint/no-explicit-any

exports.VECTOR_TYPE = VECTOR_TYPE;

function isVectorType(type) {
  return (0, _type.isTypeOf)(type, VECTOR_TYPE);
} // eslint-disable-next-line @typescript-eslint/no-explicit-any


// Trick typescript into treating VectorType as a constructor
const VectorType = // eslint-disable-next-line @typescript-eslint/no-explicit-any
function VectorType(options) {
  if ((0, _basic.isBasicType)(options.elementType)) {
    return new BasicVectorType(options);
  } else {
    return new CompositeVectorType(options);
  }
};

exports.VectorType = VectorType;

class BasicVectorType extends _array.BasicArrayType {
  constructor(options) {
    super(options);

    _defineProperty(this, "length", void 0);

    this.length = options.length;

    this._typeSymbols.add(VECTOR_TYPE);
  }

  struct_defaultValue() {
    return Array.from({
      length: this.length
    }, () => {
      return this.elementType.struct_defaultValue();
    });
  } // eslint-disable-next-line @typescript-eslint/no-unused-vars


  struct_getLength(value) {
    return this.length;
  }

  getMaxLength() {
    return this.length;
  }

  getMinLength() {
    return this.length;
  }

  bytes_validate(data, start, end) {
    super.bytes_validate(data, start, end);

    if (end - start !== this.size(null)) {
      throw new Error("Incorrect deserialized vector length");
    }
  }

  struct_deserializeFromBytes(data, start, end) {
    this.bytes_validate(data, start, end);
    return super.struct_deserializeFromBytes(data, start, end);
  }

  struct_assertValidValue(value) {
    const actualLength = value.length;
    const expectedLength = this.struct_getLength(value);

    if (actualLength !== expectedLength) {
      throw new Error("Invalid vector length: expected ".concat(expectedLength, ", actual ").concat(actualLength));
    }

    super.struct_assertValidValue(value);
  }

  struct_convertFromJson(data) {
    if (!Array.isArray(data)) {
      throw new Error("Invalid JSON vector: expected an Array");
    }

    const expectedLength = this.length;

    if (data.length !== expectedLength) {
      throw new Error("Invalid JSON vector length: expected ".concat(expectedLength, ", actual ").concat(data.length));
    }

    return super.struct_convertFromJson(data);
  }

  tree_defaultNode() {
    if (!this._defaultNode) {
      this._defaultNode = (0, _persistentMerkleTree.subtreeFillToLength)((0, _persistentMerkleTree.zeroNode)(0), this.getChunkDepth(), this.getMaxChunkCount());
    }

    return this._defaultNode;
  }

  tree_defaultValue() {
    return new _persistentMerkleTree.Tree(this.tree_defaultNode());
  } // eslint-disable-next-line @typescript-eslint/no-unused-vars


  tree_getLength(target) {
    return this.length;
  }

  tree_deserializeFromBytes(data, start, end) {
    if (end - start !== this.struct_getSerializedLength(null)) {
      throw new Error("Incorrect deserialized vector length");
    }

    return super.tree_deserializeFromBytes(data, start, end);
  }

  tree_setProperty(target, property, value) {
    if (property >= this.tree_getLength(target)) {
      throw new Error("Invalid array index");
    }

    return super.tree_setProperty(target, property, value, false);
  }

  hasVariableSerializedLength() {
    return false;
  }

  getMaxChunkCount() {
    return Math.ceil(this.length * this.elementType.size() / 32);
  }

}

exports.BasicVectorType = BasicVectorType;

class CompositeVectorType extends _array.CompositeArrayType {
  constructor(options) {
    super(options);

    _defineProperty(this, "length", void 0);

    this.length = options.length;

    this._typeSymbols.add(VECTOR_TYPE);
  }

  struct_defaultValue() {
    return Array.from({
      length: this.length
    }, () => {
      return this.elementType.struct_defaultValue();
    });
  } // eslint-disable-next-line @typescript-eslint/no-unused-vars


  struct_getLength(value) {
    return this.length;
  }

  getMaxLength() {
    return this.length;
  }

  getMinLength() {
    return this.length;
  }

  struct_deserializeFromBytes(data, start, end) {
    this.bytes_validate(data, start, end);
    const value = super.struct_deserializeFromBytes(data, start, end);

    if (value.length !== this.length) {
      throw new Error("Incorrect deserialized vector length");
    }

    return value;
  }

  struct_assertValidValue(value) {
    const actualLength = value.length;
    const expectedLength = this.struct_getLength(value);

    if (actualLength !== expectedLength) {
      throw new Error("Invalid vector length: expected ".concat(expectedLength, ", actual ").concat(actualLength));
    }

    super.struct_assertValidValue(value);
  }

  struct_convertFromJson(data) {
    if (!Array.isArray(data)) {
      throw new Error("Invalid JSON vector: expected an Array");
    }

    const expectedLength = this.length;

    if (data.length !== expectedLength) {
      throw new Error("Invalid JSON vector length: expected ".concat(expectedLength, ", actual ").concat(data.length));
    }

    return super.struct_convertFromJson(data);
  }

  tree_defaultNode() {
    if (!this._defaultNode) {
      this._defaultNode = (0, _persistentMerkleTree.subtreeFillToLength)(this.elementType.tree_defaultNode(), this.getChunkDepth(), this.length);
    }

    return this._defaultNode;
  }

  tree_defaultValue() {
    return new _persistentMerkleTree.Tree(this.tree_defaultNode());
  } // eslint-disable-next-line @typescript-eslint/no-unused-vars


  tree_getLength(target) {
    return this.length;
  }

  tree_deserializeFromBytes(data, start, end) {
    const target = this.tree_defaultValue();

    if (this.elementType.hasVariableSerializedLength()) {
      const offsets = this.bytes_getVariableOffsets(new Uint8Array(data.buffer, data.byteOffset + start, end - start));

      if (offsets.length !== this.length) {
        throw new Error("Incorrect deserialized vector length");
      }

      for (let i = 0; i < offsets.length; i++) {
        const [currentOffset, nextOffset] = offsets[i];
        this.tree_setSubtreeAtChunkIndex(target, i, this.elementType.tree_deserializeFromBytes(data, start + currentOffset, start + nextOffset));
      }
    } else {
      const elementSize = this.elementType.struct_getSerializedLength(null);
      const length = (end - start) / elementSize;

      if (length !== this.length) {
        throw new Error("Incorrect deserialized vector length");
      }

      for (let i = 0; i < length; i++) {
        this.tree_setSubtreeAtChunkIndex(target, i, this.elementType.tree_deserializeFromBytes(data, start + i * elementSize, start + (i + 1) * elementSize));
      }
    }

    return target;
  }

  setProperty(target, property, value) {
    if (property >= this.tree_getLength(target)) {
      throw new Error("Invalid array index");
    }

    return super.tree_setProperty(target, property, value, false);
  }

  hasVariableSerializedLength() {
    return this.elementType.hasVariableSerializedLength();
  }

  getMaxChunkCount() {
    return this.length;
  }

}

exports.CompositeVectorType = CompositeVectorType;
//# sourceMappingURL=vector.js.map

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ssz = exports.ts = void 0;

var _ts = _interopRequireWildcard(__webpack_require__(231));

exports.ts = _ts;

var _ssz = _interopRequireWildcard(__webpack_require__(236));

exports.ssz = _ssz;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//# sourceMappingURL=index.js.map

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "cache", function() { return /* binding */ emotion_esm_cache; });
__webpack_require__.d(__webpack_exports__, "css", function() { return /* binding */ emotion_esm_css; });
__webpack_require__.d(__webpack_exports__, "cx", function() { return /* binding */ emotion_esm_cx; });
__webpack_require__.d(__webpack_exports__, "flush", function() { return /* binding */ flush; });
__webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return /* binding */ getRegisteredStyles; });
__webpack_require__.d(__webpack_exports__, "hydrate", function() { return /* binding */ hydrate; });
__webpack_require__.d(__webpack_exports__, "injectGlobal", function() { return /* binding */ emotion_esm_injectGlobal; });
__webpack_require__.d(__webpack_exports__, "keyframes", function() { return /* binding */ emotion_esm_keyframes; });
__webpack_require__.d(__webpack_exports__, "merge", function() { return /* binding */ emotion_esm_merge; });
__webpack_require__.d(__webpack_exports__, "sheet", function() { return /* binding */ sheet; });

// EXTERNAL MODULE: ./node_modules/@emotion/cache/dist/cache.browser.esm.js + 2 modules
var cache_browser_esm = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/@emotion/serialize/dist/serialize.browser.esm.js + 3 modules
var serialize_browser_esm = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@emotion/utils/dist/utils.browser.esm.js
var utils_browser_esm = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/create-emotion/dist/create-emotion.browser.esm.js




function insertWithoutScoping(cache, serialized) {
  if (cache.inserted[serialized.name] === undefined) {
    return cache.insert('', serialized, cache.sheet, true);
  }
}

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = Object(utils_browser_esm["a" /* getRegisteredStyles */])(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var create_emotion_browser_esm_createEmotion = function createEmotion(options) {
  var cache = Object(cache_browser_esm["a" /* default */])(options); // $FlowFixMe

  cache.sheet.speedy = function (value) {
    if (false) {}

    this.isSpeedy = value;
  };

  cache.compat = true;

  var css = function css() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var serialized = Object(serialize_browser_esm["a" /* serializeStyles */])(args, cache.registered, undefined);
    Object(utils_browser_esm["b" /* insertStyles */])(cache, serialized, false);
    return cache.key + "-" + serialized.name;
  };

  var keyframes = function keyframes() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var serialized = Object(serialize_browser_esm["a" /* serializeStyles */])(args, cache.registered);
    var animation = "animation-" + serialized.name;
    insertWithoutScoping(cache, {
      name: serialized.name,
      styles: "@keyframes " + animation + "{" + serialized.styles + "}"
    });
    return animation;
  };

  var injectGlobal = function injectGlobal() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    var serialized = Object(serialize_browser_esm["a" /* serializeStyles */])(args, cache.registered);
    insertWithoutScoping(cache, serialized);
  };

  var cx = function cx() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return merge(cache.registered, css, classnames(args));
  };

  return {
    css: css,
    cx: cx,
    injectGlobal: injectGlobal,
    keyframes: keyframes,
    hydrate: function hydrate(ids) {
      ids.forEach(function (key) {
        cache.inserted[key] = true;
      });
    },
    flush: function flush() {
      cache.registered = {};
      cache.inserted = {};
      cache.sheet.flush();
    },
    // $FlowFixMe
    sheet: cache.sheet,
    cache: cache,
    getRegisteredStyles: utils_browser_esm["a" /* getRegisteredStyles */].bind(null, cache.registered),
    merge: merge.bind(null, cache.registered, css)
  };
};

var classnames = function classnames(args) {
  var cls = '';

  for (var i = 0; i < args.length; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

/* harmony default export */ var create_emotion_browser_esm = (create_emotion_browser_esm_createEmotion);

// CONCATENATED MODULE: ./node_modules/emotion/dist/emotion.esm.js


var _createEmotion = create_emotion_browser_esm(),
    flush = _createEmotion.flush,
    hydrate = _createEmotion.hydrate,
    emotion_esm_cx = _createEmotion.cx,
    emotion_esm_merge = _createEmotion.merge,
    getRegisteredStyles = _createEmotion.getRegisteredStyles,
    emotion_esm_injectGlobal = _createEmotion.injectGlobal,
    emotion_esm_keyframes = _createEmotion.keyframes,
    emotion_esm_css = _createEmotion.css,
    sheet = _createEmotion.sheet,
    emotion_esm_cache = _createEmotion.cache;




/***/ }),
/* 90 */
/***/ (function(module) {

module.exports = JSON.parse("{\"private\":true,\"name\":\"simpleserialize.com\",\"version\":\"0.1.0\",\"repository\":\"https://github.com/chainsafe/simpleserialize.com\",\"author\":\"Chainsafe Systems\",\"license\":\"MIT\",\"scripts\":{\"check-types\":\"tsc\",\"dev\":\"cross-env NODE_ENV=development webpack serve --color --progress\",\"build\":\"cross-env NODE_ENV=production webpack --color --progress\",\"start\":\"serve dist\",\"lint\":\"eslint --ext .tsx src/\",\"lint:fix\":\"eslint --ext .tsx src/ --fix\"},\"dependencies\":{\"@babel/runtime\":\"^7.14.6\",\"@chainsafe/lodestar-types\":\"^0.25.0\",\"@chainsafe/ssz\":\"^0.8.11\",\"bn.js\":\"^5.2.0\",\"bulma\":\"^0.9.3\",\"core-js\":\"2\",\"eyzy-tree\":\"^0.2.2\",\"file-saver\":\"^2.0.5\",\"js-yaml\":\"^4.1.0\",\"react\":\"^16.8.6\",\"react-alert\":\"^7.0.1\",\"react-alert-template-basic\":\"^1.0.0\",\"react-dom\":\"^16.8.6\",\"react-loading-overlay\":\"^1.0.1\",\"react-spinners\":\"^0.8.3\"},\"devDependencies\":{\"@babel/core\":\"^7.14.6\",\"@babel/preset-env\":\"^7.14.7\",\"@babel/preset-react\":\"^7.14.5\",\"@babel/preset-typescript\":\"^7.14.5\",\"@types/bn.js\":\"^5.1.0\",\"@types/deep-equal\":\"^1.0.1\",\"@types/file-saver\":\"^2.0.2\",\"@types/node\":\"^15.14.0\",\"@types/react\":\"^16.8.19\",\"@types/react-dom\":\"^16.8.4\",\"@typescript-eslint/eslint-plugin\":\"^2.32.0\",\"@typescript-eslint/parser\":\"^4.28.1\",\"babel-loader\":\"^8.2.2\",\"cross-env\":\"^7.0.3\",\"css-loader\":\"^5.2.6\",\"eslint\":\"^7.30.0\",\"eslint-plugin-import\":\"^2.23.4\",\"eslint-plugin-react\":\"^7.20.0\",\"html-webpack-plugin\":\"^4.5.2\",\"mini-css-extract-plugin\":\"^1.6.2\",\"node-sass\":\"^4.0.0\",\"sass-loader\":\"^10.2.0\",\"serve\":\"^12.0.0\",\"style-loader\":\"^3.0.0\",\"typescript\":\"^4.3.5\",\"webpack\":\"^4.43.0\",\"webpack-cli\":\"^4.7.2\",\"webpack-dev-server\":\"^3.11.2\",\"workerize-loader\":\"^1.3.0\"}}");

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(8)(function () {
  return Object.defineProperty(__webpack_require__(92)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
var document = __webpack_require__(4).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(18);
var toIObject = __webpack_require__(19);
var arrayIndexOf = __webpack_require__(69)(false);
var IE_PROTO = __webpack_require__(70)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var anObject = __webpack_require__(12);
var getKeys = __webpack_require__(26);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(34);
var isObject = __webpack_require__(14);
var invoke = __webpack_require__(150);
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(3);


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(68);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(27);
var defined = __webpack_require__(48);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(25);
var $export = __webpack_require__(2);
var redefine = __webpack_require__(17);
var hide = __webpack_require__(11);
var Iterators = __webpack_require__(28);
var $iterCreate = __webpack_require__(155);
var setToStringTag = __webpack_require__(56);
var getPrototypeOf = __webpack_require__(72);
var ITERATOR = __webpack_require__(3)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7).f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(5) && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),
/* 102 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(17)(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(160);
var anObject = __webpack_require__(12);
var $flags = __webpack_require__(77);
var DESCRIPTORS = __webpack_require__(5);
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(17)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(8)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _basic = __webpack_require__(31);

Object.keys(_basic).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _basic[key];
    }
  });
});

var _composite = __webpack_require__(163);

Object.keys(_composite).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _composite[key];
    }
  });
});

var _type = __webpack_require__(9);

Object.keys(_type).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _type[key];
    }
  });
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBooleanType = isBooleanType;
exports.BooleanType = exports.BOOLEAN_TYPE = void 0;

var _type = __webpack_require__(9);

var _abstract = __webpack_require__(78);

/* eslint-disable @typescript-eslint/camelcase */
const BOOLEAN_TYPE = Symbol.for("ssz/BooleanType");
exports.BOOLEAN_TYPE = BOOLEAN_TYPE;

function isBooleanType(type) {
  return (0, _type.isTypeOf)(type, BOOLEAN_TYPE);
}

class BooleanType extends _abstract.BasicType {
  constructor() {
    super();

    this._typeSymbols.add(BOOLEAN_TYPE);
  }

  struct_getSerializedLength() {
    return 1;
  }

  struct_assertValidValue(value) {
    if (value !== true && value !== false) {
      throw new Error("Boolean value must be true or false");
    }
  }

  struct_defaultValue() {
    return false;
  }

  struct_serializeToBytes(value, output, offset) {
    output[offset] = value ? 1 : 0;
    return offset + 1;
  }

  struct_deserializeFromBytes(data, offset) {
    this.bytes_validate(data, offset);

    if (data[offset] === 1) {
      return true;
    } else if (data[offset] === 0) {
      return false;
    } else {
      throw new Error("Invalid boolean value");
    }
  }

  struct_convertFromJson(data) {
    this.struct_assertValidValue(data);
    return data;
  }

  struct_convertToJson(value) {
    return value;
  }

}

exports.BooleanType = BooleanType;
//# sourceMappingURL=boolean.js.map

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUintType = isUintType;
exports.isNumberUintType = isNumberUintType;
exports.isBigIntUintType = isBigIntUintType;
exports.BigIntUintType = exports.BIGINT_UINT_TYPE = exports.NumberUintType = exports.NUMBER_UINT_TYPE = exports.UintType = exports.UINT_TYPE = void 0;

var _type = __webpack_require__(9);

var _abstract = __webpack_require__(78);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const UINT_TYPE = Symbol.for("ssz/UintType");
exports.UINT_TYPE = UINT_TYPE;

function isUintType(type) {
  return (0, _type.isTypeOf)(type, UINT_TYPE);
} // eslint-disable-next-line @typescript-eslint/no-explicit-any


class UintType extends _abstract.BasicType {
  constructor(options) {
    super();

    _defineProperty(this, "byteLength", void 0);

    this.byteLength = options.byteLength;

    this._typeSymbols.add(UINT_TYPE);
  }

  struct_getSerializedLength() {
    return this.byteLength;
  }

}

exports.UintType = UintType;
const NUMBER_UINT_TYPE = Symbol.for("ssz/NumberUintType");
exports.NUMBER_UINT_TYPE = NUMBER_UINT_TYPE;
const BIGINT_4_BYTES = BigInt(32);

function isNumberUintType(type) {
  return (0, _type.isTypeOf)(type, NUMBER_UINT_TYPE);
}

class NumberUintType extends UintType {
  constructor(options) {
    super(options);

    _defineProperty(this, "_maxBigInt", void 0);

    this._typeSymbols.add(NUMBER_UINT_TYPE);
  }

  struct_assertValidValue(value) {
    if (value !== Infinity && (!Number.isSafeInteger(value) || value > BigInt(2) ** (BigInt(8) * BigInt(this.byteLength)))) {
      throw new Error("Uint value is not a number");
    }

    if (value < 0) {
      throw new Error("Uint value must be gte 0");
    }
  }

  struct_defaultValue() {
    return 0;
  }

  struct_getMaxBigInt() {
    if (this._maxBigInt === undefined) {
      this._maxBigInt = BigInt(2) ** BigInt(this.byteLength * 8) - BigInt(1);
    }

    return this._maxBigInt;
  }

  struct_serializeToBytes(value, output, offset) {
    if (this.byteLength > 6 && value === Infinity) {
      for (let i = offset; i < offset + this.byteLength; i++) {
        output[i] = 0xff;
      }
    } else {
      let v = value;
      const MAX_BYTE = 0xff;

      for (let i = 0; i < this.byteLength; i++) {
        output[offset + i] = v & MAX_BYTE;
        v = Math.floor(v / 256);
      }
    }

    return offset + this.byteLength;
  }

  struct_deserializeFromBytes(data, offset) {
    this.bytes_validate(data, offset);
    let isInfinity = true;
    let output = 0;

    for (let i = 0; i < this.byteLength; i++) {
      output += data[offset + i] * 2 ** (8 * i);

      if (data[offset + i] !== 0xff) {
        isInfinity = false;
      }
    }

    if (this.byteLength > 6 && isInfinity) {
      return Infinity;
    }

    return Number(output);
  }

  struct_convertFromJson(data) {
    let n;
    const bigN = BigInt(data);

    if (bigN === this.struct_getMaxBigInt()) {
      n = Infinity;
    } else if (bigN < Number.MAX_SAFE_INTEGER) {
      n = Number(bigN);
    } else {
      throw new Error("Uint value unsafe");
    }

    this.assertValidValue(n);
    return n;
  }

  struct_convertToJson(value) {
    if (this.byteLength > 4) {
      if (value === Infinity) {
        return this.struct_getMaxBigInt().toString();
      }

      return String(value);
    }

    return value;
  }

}

exports.NumberUintType = NumberUintType;
const BIGINT_UINT_TYPE = Symbol.for("ssz/BigIntUintType");
exports.BIGINT_UINT_TYPE = BIGINT_UINT_TYPE;

function isBigIntUintType(type) {
  return (0, _type.isTypeOf)(type, BIGINT_UINT_TYPE);
}

class BigIntUintType extends UintType {
  constructor(options) {
    super(options);

    this._typeSymbols.add(BIGINT_UINT_TYPE);
  }

  struct_assertValidValue(value) {
    if (typeof value !== "bigint") {
      throw new Error("Uint value is not a bigint");
    }

    if (value < 0) {
      throw new Error("Uint value must be gte 0");
    }
  }

  struct_defaultValue() {
    return BigInt(0);
  }

  struct_serializeToBytes(value, output, offset) {
    // Motivation
    // BigInt bit shifting and BigInt allocation is slower compared to number
    // For every 4 bytes, we extract value to groupedBytes
    // and do bit shifting on the number
    let v = value;
    let groupedBytes = Number(BigInt.asUintN(32, v));

    for (let i = 0; i < this.byteLength; i++) {
      output[offset + i] = Number(groupedBytes & 0xff);

      if ((i + 1) % 4 !== 0) {
        groupedBytes >>= 8;
      } else {
        v >>= BIGINT_4_BYTES;
        groupedBytes = Number(BigInt.asUintN(32, v));
      }
    }

    return offset + this.byteLength;
  }

  struct_deserializeFromBytes(data, offset) {
    this.bytes_validate(data, offset); // Motivation:
    //   Creating BigInts and bitshifting is more expensive than
    // number bitshifting.
    // Implementation:
    //   Iterate throuth the bytearray, bitshifting the data into a 'groupOutput' number, byte by byte
    // After each 4 bytes, bitshift the groupOutput into the bigint output and clear the groupOutput out
    // After iterating through the bytearray,
    // There may be additional data in the groupOutput if the bytearray if the bytearray isn't divisible by 4

    let output = BigInt(0);
    let groupIndex = 0,
        groupOutput = 0;

    for (let i = 0; i < this.byteLength; i++) {
      groupOutput += data[offset + i] << 8 * (i % 4);

      if ((i + 1) % 4 === 0) {
        // Left shift returns a signed integer and the output may have become negative
        // In that case, the output needs to be converted to unsigned integer
        if (groupOutput < 0) {
          groupOutput >>>= 0;
        } // Optimization to set the output the first time, forgoing BigInt addition


        if (groupIndex === 0) {
          output = BigInt(groupOutput);
        } else {
          output += BigInt(groupOutput) << BigInt(32 * groupIndex);
        }

        groupIndex++;
        groupOutput = 0;
      }
    } // if this.byteLength isn't a multiple of 4, there will be additional data


    if (groupOutput) {
      output += BigInt(groupOutput >>> 0) << BigInt(32 * groupIndex);
    }

    return output;
  }

  struct_convertFromJson(data) {
    const value = BigInt(data);
    this.assertValidValue(value);
    return value;
  }

  struct_convertToJson(value) {
    if (this.byteLength > 4) {
      return value.toString();
    } else {
      return Number(value);
    }
  }

}

exports.BigIntUintType = BigIntUintType;
//# sourceMappingURL=uint.js.map

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTree = isTree;

function isTree(value) {
  return Boolean(value.rootNode && value.rootNode.isLeaf);
}
//# sourceMappingURL=tree.js.map

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.hash = void 0;
const as_sha256_1 = __webpack_require__(110);
const input = new Uint8Array(64);
/**
 * Hash two 32 byte arrays
 */
function hash(a, b) {
    input.set(a, 0);
    input.set(b, 32);
    return as_sha256_1.default.digest64(input);
}
exports.hash = hash;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _wasm = __webpack_require__(167);

class SHA256 {
  constructor() {
    this.ctx = (0, _wasm.newInstance)();
  }

  init() {
    this.ctx.init();
    return this;
  }

  update(data) {
    const INPUT_LENGTH = this.ctx.INPUT_LENGTH;
    const input = new Uint8Array(this.ctx.memory.buffer, this.ctx.input.value, INPUT_LENGTH);

    if (data.length > INPUT_LENGTH) {
      for (let i = 0; i < data.length; i += INPUT_LENGTH) {
        const sliced = data.slice(i, i + INPUT_LENGTH);
        input.set(sliced);
        this.ctx.update(this.ctx.input.value, sliced.length);
      }
    } else {
      input.set(data);
      this.ctx.update(this.ctx.input.value, data.length);
    }

    return this;
  }

  final() {
    this.ctx.final(this.ctx.output.value);
    const output = new Uint8Array(32);
    output.set(new Uint8Array(this.ctx.memory.buffer, this.ctx.output.value, 32));
    return output;
  }

  static digest(data) {
    if (data.length <= staticInstance.ctx.INPUT_LENGTH) {
      const input = new Uint8Array(staticInstance.ctx.memory.buffer, staticInstance.ctx.input.value, staticInstance.ctx.INPUT_LENGTH);
      input.set(data);
      staticInstance.ctx.digest(data.length);
      const output = new Uint8Array(32);
      output.set(new Uint8Array(staticInstance.ctx.memory.buffer, staticInstance.ctx.output.value, 32));
      return output;
    }

    return staticInstance.init().update(data).final();
  }

  static digest64(data) {
    if (data.length == 64) {
      const input = new Uint8Array(staticInstance.ctx.memory.buffer, staticInstance.ctx.input.value, staticInstance.ctx.INPUT_LENGTH);
      input.set(data);
      staticInstance.ctx.digest64(staticInstance.ctx.input.value, staticInstance.ctx.output.value);
      const output = new Uint8Array(32);
      output.set(new Uint8Array(staticInstance.ctx.memory.buffer, staticInstance.ctx.output.value, 32));
      return output;
    }

    throw new Error("InvalidLengthForDigest64");
  }

}

exports.default = SHA256;
const staticInstance = new SHA256();

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeProof = exports.serializeProof = exports.createNodeFromProof = exports.createProof = exports.ProofTypeSerialized = exports.ProofType = void 0;
const single_1 = __webpack_require__(112);
const treeOffset_1 = __webpack_require__(174);
var ProofType;
(function (ProofType) {
    ProofType["single"] = "single";
    ProofType["treeOffset"] = "treeOffset";
})(ProofType = exports.ProofType || (exports.ProofType = {}));
/**
 * Serialized proofs are prepended with a single byte, denoting their type
 */
exports.ProofTypeSerialized = [
    ProofType.single,
    ProofType.treeOffset, // 1
];
function createProof(rootNode, input) {
    switch (input.type) {
        case ProofType.single: {
            const [leaf, witnesses] = single_1.createSingleProof(rootNode, input.gindex);
            return {
                type: ProofType.single,
                gindex: input.gindex,
                leaf,
                witnesses,
            };
        }
        case ProofType.treeOffset: {
            const [offsets, leaves] = treeOffset_1.createTreeOffsetProof(rootNode, input.gindices);
            return {
                type: ProofType.treeOffset,
                offsets,
                leaves,
            };
        }
        default:
            throw new Error("Invalid proof type");
    }
}
exports.createProof = createProof;
function createNodeFromProof(proof) {
    switch (proof.type) {
        case ProofType.single:
            return single_1.createNodeFromSingleProof(proof.gindex, proof.leaf, proof.witnesses);
        case ProofType.treeOffset:
            return treeOffset_1.createNodeFromTreeOffsetProof(proof.offsets, proof.leaves);
        default:
            throw new Error("Invalid proof type");
    }
}
exports.createNodeFromProof = createNodeFromProof;
function serializeProof(proof) {
    switch (proof.type) {
        case ProofType.single:
            throw new Error("Not implemented");
        case ProofType.treeOffset: {
            const output = new Uint8Array(1 + treeOffset_1.computeTreeOffsetProofSerializedLength(proof.offsets, proof.leaves));
            output[0] = exports.ProofTypeSerialized.indexOf(ProofType.treeOffset);
            treeOffset_1.serializeTreeOffsetProof(output, 1, proof.offsets, proof.leaves);
            return output;
        }
        default:
            throw new Error("Invalid proof type");
    }
}
exports.serializeProof = serializeProof;
function deserializeProof(data) {
    const proofType = exports.ProofTypeSerialized[data[0]];
    if (!proofType) {
        throw new Error("Invalid proof type");
    }
    switch (proofType) {
        case ProofType.single:
            throw new Error("Not implemented");
        case ProofType.treeOffset: {
            const [offsets, leaves] = treeOffset_1.deserializeTreeOffsetProof(data, 1);
            return {
                type: ProofType.treeOffset,
                offsets,
                leaves,
            };
        }
        default:
            throw new Error("Invalid proof type");
    }
}
exports.deserializeProof = deserializeProof;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createNodeFromSingleProof = exports.createSingleProof = exports.ERR_INVALID_NAV = void 0;
const node_1 = __webpack_require__(32);
const gindex_1 = __webpack_require__(62);
exports.ERR_INVALID_NAV = "Invalid tree navigation";
function createSingleProof(rootNode, index) {
    const witnesses = [];
    let node = rootNode;
    for (const i of gindex_1.gindexIterator(index)) {
        if (i) {
            if (node.isLeaf())
                throw new Error(exports.ERR_INVALID_NAV);
            witnesses.push(node.left.root);
            node = node.right;
        }
        else {
            if (node.isLeaf())
                throw new Error(exports.ERR_INVALID_NAV);
            witnesses.push(node.right.root);
            node = node.left;
        }
    }
    return [node.root, witnesses.reverse()];
}
exports.createSingleProof = createSingleProof;
function createNodeFromSingleProof(gindex, leaf, witnesses) {
    let node = new node_1.LeafNode(leaf);
    const w = witnesses.reverse();
    while (gindex > 1) {
        const sibling = new node_1.LeafNode(w.pop());
        if (gindex % BigInt(2) === BigInt(0)) {
            node = new node_1.BranchNode(node, sibling);
        }
        else {
            node = new node_1.BranchNode(sibling, node);
        }
        gindex = gindex / BigInt(2);
    }
    return node;
}
exports.createNodeFromSingleProof = createNodeFromSingleProof;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderJsonPath = renderJsonPath;
exports.SszErrorPath = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Tracks the JSON path location of nested errors
 */
class SszErrorPath extends Error {
  constructor(e, keyOrIndex) {
    const prevJsonPath = e instanceof SszErrorPath ? e.jsonPath : [];
    const jsonPath = [keyOrIndex, ...prevJsonPath];
    const rawMessage = e instanceof SszErrorPath ? e.rawMessage : e.message;
    super("".concat(renderJsonPath(jsonPath), ": ").concat(rawMessage));

    _defineProperty(this, "jsonPath", void 0);

    _defineProperty(this, "rawMessage", void 0);

    this.jsonPath = jsonPath;
    this.rawMessage = rawMessage;
  }

}
/**
 * Render an array of JSON path items
 * @param jsonPath ["a", 2, "n", "m"]
 * @returns "a[2].n.m"
 */


exports.SszErrorPath = SszErrorPath;

function renderJsonPath(jsonPath) {
  let path = "";

  for (const item of jsonPath) {
    switch (typeof item) {
      case "number":
        path += "[".concat(item, "]");
        break;

      case "string":
      default:
        path += path.length > 0 ? ".".concat(item) : item;
        break;
    }
  }

  return path;
}
//# sourceMappingURL=errorPath.js.map

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isListType = isListType;
exports.CompositeListType = exports.BasicListType = exports.ListType = exports.LIST_TYPE = exports.LENGTH_GINDEX = void 0;

var _array = __webpack_require__(86);

var _basic = __webpack_require__(31);

var _type = __webpack_require__(9);

var _compat = __webpack_require__(83);

var _persistentMerkleTree = __webpack_require__(41);

var _treeValue = __webpack_require__(61);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * SSZ Lists (variable-length arrays) include the length of the list in the tree
 * This length is always in the same index in the tree
 * ```
 *   1
 *  / \
 * 2   3 // <-here
 * ```
 */
const LENGTH_GINDEX = BigInt(3);
exports.LENGTH_GINDEX = LENGTH_GINDEX;
const LIST_TYPE = Symbol.for("ssz/ListType"); // eslint-disable-next-line @typescript-eslint/no-explicit-any

exports.LIST_TYPE = LIST_TYPE;

function isListType(type) {
  return (0, _type.isTypeOf)(type, LIST_TYPE);
} // Trick typescript into treating ListType as a constructor


const ListType = // eslint-disable-next-line @typescript-eslint/no-explicit-any
function ListType(options) {
  if ((0, _basic.isBasicType)(options.elementType)) {
    return new BasicListType(options);
  } else {
    return new CompositeListType(options);
  }
};

exports.ListType = ListType;

class BasicListType extends _array.BasicArrayType {
  constructor(options) {
    super(options);

    _defineProperty(this, "limit", void 0);

    this.limit = options.limit;

    this._typeSymbols.add(LIST_TYPE);
  }

  struct_defaultValue() {
    return [];
  }

  struct_getLength(value) {
    return value.length;
  }

  getMaxLength() {
    return this.limit;
  }

  getMinLength() {
    return 0;
  }

  bytes_validate(data, start, end) {
    super.bytes_validate(data, start, end);

    if (end - start > this.getMaxSerializedLength()) {
      throw new Error("Deserialized list length greater than limit");
    }
  }

  struct_deserializeFromBytes(data, start, end) {
    this.bytes_validate(data, start, end);
    return super.struct_deserializeFromBytes(data, start, end);
  }

  struct_getChunkCount(value) {
    return Math.ceil(value.length * this.elementType.struct_getSerializedLength() / 32);
  }

  struct_hashTreeRoot(value) {
    return (0, _compat.mixInLength)(super.struct_hashTreeRoot(value), value.length);
  } // eslint-disable-next-line @typescript-eslint/no-unused-vars


  struct_convertFromJson(data, options) {
    if (!Array.isArray(data)) {
      throw new Error("Invalid JSON list: expected an Array");
    }

    const maxLength = this.limit;

    if (data.length > maxLength) {
      throw new Error("Invalid JSON list: length ".concat(data.length, " greater than limit ").concat(maxLength));
    }

    return super.struct_convertFromJson(data);
  }

  struct_convertToTree(value) {
    if ((0, _treeValue.isTreeBacked)(value)) return value.tree.clone();
    const tree = super.struct_convertToTree(value);
    this.tree_setLength(tree, value.length);
    return tree;
  }

  tree_defaultNode() {
    if (!this._defaultNode) {
      this._defaultNode = new _persistentMerkleTree.BranchNode((0, _persistentMerkleTree.zeroNode)(super.getChunkDepth()), (0, _persistentMerkleTree.zeroNode)(0));
    }

    return this._defaultNode;
  }

  tree_defaultValue() {
    return new _persistentMerkleTree.Tree(this.tree_defaultNode());
  }

  tree_getLength(target) {
    return _basic.number32Type.struct_deserializeFromBytes(target.getRoot(LENGTH_GINDEX), 0);
  }

  tree_setLength(target, length) {
    const chunk = new Uint8Array(32);

    _basic.number32Type.toBytes(length, chunk, 0);

    target.setRoot(LENGTH_GINDEX, chunk);
  }

  tree_deserializeFromBytes(data, start, end) {
    const length = (end - start) / this.elementType.struct_getSerializedLength();

    if (!Number.isSafeInteger(length)) {
      throw new Error("Deserialized list byte length must be divisible by element size");
    }

    if (length > this.limit) {
      throw new Error("Deserialized list length greater than limit");
    }

    const value = super.tree_deserializeFromBytes(data, start, end);
    this.tree_setLength(value, length);
    return value;
  }

  tree_getChunkCount(target) {
    return Math.ceil(this.tree_getLength(target) * this.elementType.struct_getSerializedLength() / 32);
  }

  getChunkDepth() {
    return super.getChunkDepth() + 1;
  }

  tree_setProperty(target, property, value) {
    const length = this.tree_getLength(target);

    if (property > length) {
      throw new Error("Invalid length index");
    } else if (property == length) {
      this.tree_pushSingle(target, value);
      return true;
    } else {
      return this.tree_setValueAtIndex(target, property, value);
    }
  }

  tree_deleteProperty(target, property) {
    const length = this.tree_getLength(target);

    if (property > length) {
      throw new Error("Invalid length index");
    } else if (property == length) {
      this.tree_pop(target);
      return true;
    } else {
      return super.tree_deleteProperty(target, property);
    }
  }

  tree_pushSingle(target, value) {
    const length = this.tree_getLength(target);
    const expand = this.getChunkIndex(length) != this.getChunkIndex(length + 1);
    this.tree_setValueAtIndex(target, length, value, expand);
    this.tree_setLength(target, length + 1);
    return length + 1;
  }

  tree_push(target, ...values) {
    let newLength;

    for (const value of values) newLength = this.tree_pushSingle(target, value);

    return newLength;
  }

  tree_pop(target) {
    const length = this.tree_getLength(target);
    const value = this.tree_getProperty(target, length - 1);
    super.tree_deleteProperty(target, length - 1);
    this.tree_setLength(target, length - 1);
    return value;
  }

  hasVariableSerializedLength() {
    return true;
  }

  getMaxChunkCount() {
    return Math.ceil(this.limit * this.elementType.size() / 32);
  }

  tree_getLeafGindices(target, root = BigInt(1)) {
    if (!target) {
      throw new Error("variable type requires tree argument to get leaves");
    }

    const gindices = super.tree_getLeafGindices(target, root); // include the length chunk

    gindices.push((0, _persistentMerkleTree.concatGindices)([root, LENGTH_GINDEX]));
    return gindices;
  }

}

exports.BasicListType = BasicListType;

class CompositeListType extends _array.CompositeArrayType {
  constructor(options) {
    super(options);

    _defineProperty(this, "limit", void 0);

    this.limit = options.limit;

    this._typeSymbols.add(LIST_TYPE);
  }

  hasVariableSerializedLength() {
    return true;
  }

  getMaxChunkCount() {
    return this.limit;
  }

  struct_defaultValue() {
    return [];
  }

  struct_getLength(value) {
    return value.length;
  }

  getMaxLength() {
    return this.limit;
  }

  getMinLength() {
    return 0;
  }

  struct_deserializeFromBytes(data, start, end) {
    this.bytes_validate(data, start, end);
    const value = super.struct_deserializeFromBytes(data, start, end);

    if (value.length > this.limit) {
      throw new Error("Deserialized list length greater than limit: ".concat(value.length, " ").concat(this.limit));
    }

    return value;
  }

  struct_getChunkCount(value) {
    return value.length;
  }

  struct_hashTreeRoot(value) {
    return (0, _compat.mixInLength)(super.struct_hashTreeRoot(value), value.length);
  }

  struct_convertFromJson(data, options) {
    if (!Array.isArray(data)) {
      throw new Error("Invalid JSON list: expected an Array");
    }

    const maxLength = this.limit;

    if (data.length > maxLength) {
      throw new Error("Invalid JSON list: length ".concat(data.length, " greater than limit ").concat(maxLength));
    }

    return super.struct_convertFromJson(data, options);
  }

  tree_defaultNode() {
    if (!this._defaultNode) {
      this._defaultNode = new _persistentMerkleTree.BranchNode((0, _persistentMerkleTree.zeroNode)(super.getChunkDepth()), (0, _persistentMerkleTree.zeroNode)(0));
    }

    return this._defaultNode;
  }

  tree_defaultValue() {
    return new _persistentMerkleTree.Tree(this.tree_defaultNode());
  }

  struct_convertToTree(value) {
    if ((0, _treeValue.isTreeBacked)(value)) return value.tree.clone();
    const tree = super.struct_convertToTree(value);
    this.tree_setLength(tree, value.length);
    return tree;
  }

  tree_getLength(target) {
    return _basic.number32Type.struct_deserializeFromBytes(target.getRoot(LENGTH_GINDEX), 0);
  }

  tree_setLength(target, length) {
    const chunk = new Uint8Array(32);

    _basic.number32Type.struct_serializeToBytes(length, chunk, 0);

    target.setRoot(LENGTH_GINDEX, chunk);
  }

  tree_deserializeFromBytes(data, start, end) {
    const target = this.tree_defaultValue();

    if (this.elementType.hasVariableSerializedLength()) {
      const offsets = this.bytes_getVariableOffsets(new Uint8Array(data.buffer, data.byteOffset + start, end - start));

      if (offsets.length > this.limit) {
        throw new Error("Deserialized list length greater than limit");
      }

      for (let i = 0; i < offsets.length; i++) {
        const [currentOffset, nextOffset] = offsets[i];
        this.tree_setSubtreeAtChunkIndex(target, i, this.elementType.tree_deserializeFromBytes(data, start + currentOffset, start + nextOffset));
      }

      this.tree_setLength(target, offsets.length);
    } else {
      const elementSize = this.elementType.struct_getSerializedLength(null);
      const length = (end - start) / elementSize;

      if (!Number.isSafeInteger(length)) {
        throw new Error("Deserialized list byte length must be divisible by element size");
      }

      if (length > this.limit) {
        throw new Error("Deserialized list length greater than limit");
      }

      for (let i = 0; i < length; i++) {
        this.tree_setSubtreeAtChunkIndex(target, i, this.elementType.tree_deserializeFromBytes(data, start + i * elementSize, start + (i + 1) * elementSize), true // expand tree as needed
        );
      }

      this.tree_setLength(target, length);
    }

    return target;
  }

  tree_getChunkCount(target) {
    return this.tree_getLength(target);
  }

  getChunkDepth() {
    return super.getChunkDepth() + 1;
  }

  tree_setProperty(target, property, value) {
    const length = this.tree_getLength(target);

    if (property > length) {
      throw new Error("Invalid length index");
    } else if (property == length) {
      this.tree_pushSingle(target, value);
    } else {
      this.tree_setSubtreeAtChunkIndex(target, property, value);
    }

    return true;
  }

  tree_deleteProperty(target, property) {
    const length = this.tree_getLength(target);

    if (property > length) {
      throw new Error("Invalid length index");
    } else if (property == length) {
      this.tree_pop(target);
      return true;
    } else {
      return super.tree_deleteProperty(target, property);
    }
  }

  tree_pushSingle(target, value) {
    const length = this.tree_getLength(target);
    this.tree_setSubtreeAtChunkIndex(target, length, value, true);
    this.tree_setLength(target, length + 1);
    return length + 1;
  }

  tree_push(target, ...values) {
    let newLength;

    for (const value of values) newLength = this.tree_pushSingle(target, value);

    return newLength;
  }

  tree_pop(target) {
    const length = this.tree_getLength(target);
    const value = this.tree_getProperty(target, length - 1);
    this.tree_setSubtreeAtChunkIndex(target, length - 1, new _persistentMerkleTree.Tree((0, _persistentMerkleTree.zeroNode)(0)));
    this.tree_setLength(target, length - 1);
    return value;
  }

  tree_getLeafGindices(target, root = BigInt(1)) {
    if (!target) {
      throw new Error("variable type requires tree argument to get leaves");
    }

    const gindices = super.tree_getLeafGindices(target, root); // include the length chunk

    gindices.push((0, _persistentMerkleTree.concatGindices)([root, LENGTH_GINDEX]));
    return gindices;
  }

}

exports.CompositeListType = CompositeListType;
//# sourceMappingURL=list.js.map

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isByteVectorType = isByteVectorType;
exports.ByteVectorType = exports.BYTEVECTOR_TYPE = void 0;

var _vector = __webpack_require__(87);

var _basic = __webpack_require__(31);

var _type = __webpack_require__(9);

var _byteArray = __webpack_require__(22);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const BYTEVECTOR_TYPE = Symbol.for("ssz/ByteVectorType");
exports.BYTEVECTOR_TYPE = BYTEVECTOR_TYPE;

function isByteVectorType(type) {
  return (0, _type.isTypeOf)(type, BYTEVECTOR_TYPE);
}

class ByteVectorType extends _vector.BasicVectorType {
  constructor(options) {
    super(_objectSpread({
      elementType: _basic.byteType
    }, options));

    this._typeSymbols.add(BYTEVECTOR_TYPE);
  }

  struct_defaultValue() {
    return new Uint8Array(this.length);
  }

  struct_deserializeFromBytes(data, start, end) {
    this.bytes_validate(data, start, end);
    const length = end - start;

    if (length !== this.length) {
      throw new Error("Invalid deserialized vector length: expected ".concat(this.length, ", actual: ").concat(length));
    }

    const value = new Uint8Array(length);
    value.set(data.slice(start, end));
    return value;
  }

  struct_serializeToBytes(value, output, offset) {
    output.set(value, offset);
    return offset + this.length;
  }

  struct_convertFromJson(data) {
    const value = (0, _byteArray.fromHexString)(data);

    if (value.length !== this.length) {
      throw new Error("Invalid JSON vector length: expected ".concat(this.length, ", actual: ").concat(value.length));
    }

    return value;
  }

  struct_convertToJson(value) {
    return (0, _byteArray.toHexString)(value);
  }

  tree_convertToStruct(target) {
    const value = new Uint8Array(this.length);
    const chunkIterator = target.iterateNodesAtDepth(this.getChunkDepth(), 0, this.getMaxChunkCount());

    if (this.length % 32 === 0) {
      for (let i = 0; i < this.length; i += 32) {
        value.set(chunkIterator.next().value.root, i);
      }
    } else {
      let i;

      for (i = 0; i < this.length - 32; i += 32) {
        value.set(chunkIterator.next().value.root, i);
      }

      value.set(chunkIterator.next().value.root.subarray(0, this.length - i), i);
    }

    return value;
  }

}

exports.ByteVectorType = ByteVectorType;
//# sourceMappingURL=byteVector.js.map

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(77);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var hide = __webpack_require__(11);
var uid = __webpack_require__(21);
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(17);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__(27);
var toLength = __webpack_require__(20);
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(15);
var toAbsoluteIndex = __webpack_require__(49);
var toLength = __webpack_require__(20);
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=misc.js.map

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=operations.js.map

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=validator.js.map

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=api.js.map

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(214);

Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _constants[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _constants[key];
    }
  });
});

var _preset = __webpack_require__(127);

Object.keys(_preset).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _preset[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _preset[key];
    }
  });
});

var _activePreset = __webpack_require__(222);

Object.keys(_activePreset).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _activePreset[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _activePreset[key];
    }
  });
});

var _forkName = __webpack_require__(230);

Object.keys(_forkName).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _forkName[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _forkName[key];
    }
  });
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _presetName = __webpack_require__(215);

Object.keys(_presetName).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _presetName[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _presetName[key];
    }
  });
});

var _interface = __webpack_require__(216);

Object.keys(_interface).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _interface[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _interface[key];
    }
  });
});

var _ssz = __webpack_require__(217);

Object.keys(_ssz).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ssz[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ssz[key];
    }
  });
});

var _phase = __webpack_require__(128);

Object.keys(_phase).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _phase[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _phase[key];
    }
  });
});

var _altair = __webpack_require__(129);

Object.keys(_altair).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _altair[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _altair[key];
    }
  });
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _interface = __webpack_require__(218);

Object.keys(_interface).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _interface[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _interface[key];
    }
  });
});

var _ssz = __webpack_require__(219);

Object.keys(_ssz).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ssz[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ssz[key];
    }
  });
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _interface = __webpack_require__(220);

Object.keys(_interface).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _interface[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _interface[key];
    }
  });
});

var _ssz = __webpack_require__(221);

Object.keys(_ssz).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ssz[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ssz[key];
    }
  });
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ssz = exports.ts = void 0;

var _ts = _interopRequireWildcard(__webpack_require__(63));

exports.ts = _ts;

var _ssz = _interopRequireWildcard(__webpack_require__(131));

exports.ssz = _ssz;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//# sourceMappingURL=index.js.map

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParticipationFlags = exports.Domain = exports.BLSSignature = exports.BLSPubkey = exports.ForkDigest = exports.DomainType = exports.Version = exports.Root = exports.Gwei = exports.ValidatorIndex = exports.SubCommitteeIndex = exports.CommitteeIndex = exports.Epoch = exports.Slot = exports.Uint256 = exports.Uint128 = exports.Uint64 = exports.Number64 = exports.Uint32 = exports.Uint16 = exports.Uint8 = exports.Bytes96 = exports.Bytes48 = exports.Bytes32 = exports.Bytes8 = exports.Bytes4 = exports.Boolean = void 0;

var _ssz = __webpack_require__(6);

const Boolean = _ssz.booleanType;
exports.Boolean = Boolean;
const Bytes4 = new _ssz.ByteVectorType({
  length: 4
});
exports.Bytes4 = Bytes4;
const Bytes8 = new _ssz.ByteVectorType({
  length: 8
});
exports.Bytes8 = Bytes8;
const Bytes32 = new _ssz.ByteVectorType({
  length: 32
});
exports.Bytes32 = Bytes32;
const Bytes48 = new _ssz.ByteVectorType({
  length: 48
});
exports.Bytes48 = Bytes48;
const Bytes96 = new _ssz.ByteVectorType({
  length: 96
});
exports.Bytes96 = Bytes96;
const Uint8 = _ssz.byteType;
exports.Uint8 = Uint8;
const Uint16 = new _ssz.NumberUintType({
  byteLength: 2
});
exports.Uint16 = Uint16;
const Uint32 = _ssz.number32Type;
exports.Uint32 = Uint32;
const Number64 = new _ssz.NumberUintType({
  byteLength: 8
});
exports.Number64 = Number64;
const Uint64 = new _ssz.BigIntUintType({
  byteLength: 8
});
exports.Uint64 = Uint64;
const Uint128 = new _ssz.BigIntUintType({
  byteLength: 16
});
exports.Uint128 = Uint128;
const Uint256 = new _ssz.BigIntUintType({
  byteLength: 32
}); // Custom types, defined for type hinting and readability

exports.Uint256 = Uint256;
const Slot = Number64;
exports.Slot = Slot;
const Epoch = Number64;
exports.Epoch = Epoch;
const CommitteeIndex = Number64;
exports.CommitteeIndex = CommitteeIndex;
const SubCommitteeIndex = Number64;
exports.SubCommitteeIndex = SubCommitteeIndex;
const ValidatorIndex = Number64;
exports.ValidatorIndex = ValidatorIndex;
const Gwei = Uint64;
exports.Gwei = Gwei;
const Root = new _ssz.RootType({
  expandedType: () => {
    throw new Error("Generic Root type has no expanded type");
  }
});
exports.Root = Root;
const Version = Bytes4;
exports.Version = Version;
const DomainType = Bytes4;
exports.DomainType = DomainType;
const ForkDigest = Bytes4;
exports.ForkDigest = ForkDigest;
const BLSPubkey = Bytes48;
exports.BLSPubkey = BLSPubkey;
const BLSSignature = Bytes96;
exports.BLSSignature = BLSSignature;
const Domain = Bytes32;
exports.Domain = Domain;
const ParticipationFlags = Uint8;
exports.ParticipationFlags = ParticipationFlags;
//# sourceMappingURL=sszTypes.js.map

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LazyVariable = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class LazyVariable {
  constructor() {
    _defineProperty(this, "var", {
      set: false
    });
  }

  get() {
    if (!this.var.set) throw Error("variable not set");
    return this.var.value;
  }

  set(value) {
    this.var = {
      set: true,
      value
    };
  }

}

exports.LazyVariable = LazyVariable;
//# sourceMappingURL=lazyVar.js.map

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ssz = exports.ts = void 0;

var _ts = _interopRequireWildcard(__webpack_require__(237));

exports.ts = _ts;

var _ssz = _interopRequireWildcard(__webpack_require__(238));

exports.ssz = _ssz;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//# sourceMappingURL=index.js.map

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(1));

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactDom = _interopRequireDefault(__webpack_require__(16));

var _reactLifecyclesCompat = __webpack_require__(135);

var _PropTypes = __webpack_require__(136);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var UNMOUNTED = 'unmounted';
exports.UNMOUNTED = UNMOUNTED;
var EXITED = 'exited';
exports.EXITED = EXITED;
var ENTERING = 'entering';
exports.ENTERING = ENTERING;
var ENTERED = 'entered';
exports.ENTERED = ENTERED;
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

exports.EXITING = EXITING;

var Transition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  var _proto = Transition.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: null // allows for nested Transitions

    };
  };

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      var node = _reactDom.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing);

      _this2.onTransitionEnd(node, enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      this.props.addEndListener(node, this.nextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react.default.Children.only(children);

    return _react.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};
Transition.propTypes =  false ? undefined : {};

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

var _default = (0, _reactLifecyclesCompat.polyfill)(Transition);

exports.default = _default;

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.classNamesShape = exports.timeoutsShape = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeoutsShape =  false ? undefined : null;
exports.timeoutsShape = timeoutsShape;
var classNamesShape =  false ? undefined : null;
exports.classNamesShape = classNamesShape;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactLifecyclesCompat = __webpack_require__(135);

var _ChildMapping = __webpack_require__(251);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

};

var TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


    _this.state = {
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: {
        isMounting: !this.appeared
      }
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
    this.mounted = true;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? (0, _ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, _ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0, _ChildMapping.getChildMapping)(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return children;
    }

    return _react.default.createElement(Component, props, children);
  };

  return TransitionGroup;
}(_react.default.Component);

TransitionGroup.childContextTypes = {
  transitionGroup: _propTypes.default.object.isRequired
};
TransitionGroup.propTypes =  false ? undefined : {};
TransitionGroup.defaultProps = defaultProps;

var _default = (0, _reactLifecyclesCompat.polyfill)(TransitionGroup);

exports.default = _default;
module.exports = exports["default"];

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(102)))

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _reactTransitionGroup = __webpack_require__(244);

var _emotion = __webpack_require__(89);

var _Spinner = _interopRequireDefault(__webpack_require__(252));

var _styles = _interopRequireDefault(__webpack_require__(253));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LoadingOverlayWrapper =
/*#__PURE__*/
function (_Component) {
  _inherits(LoadingOverlayWrapper, _Component);

  function LoadingOverlayWrapper(props) {
    var _this;

    _classCallCheck(this, LoadingOverlayWrapper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoadingOverlayWrapper).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getStyles", function (key, providedState) {
      var base = _styles.default[key](providedState, _this.props);

      var custom = _this.props.styles[key];
      if (!custom) return base;
      return typeof custom === 'function' ? custom(base, _this.props) : custom;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "cx", function (names) {
      var arr = Array.isArray(names) ? names : [names];

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return _emotion.cx.apply(void 0, _toConsumableArray(arr.map(function (name) {
        return name ? "".concat(_this.props.classNamePrefix).concat(name) : '';
      })).concat(args));
    });

    _this.wrapper = _react.default.createRef();
    _this.state = {
      overflowCSS: {}
    };
    return _this;
  }

  _createClass(LoadingOverlayWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var wrapperStyle = window.getComputedStyle(this.wrapper.current);
      var overflowCSS = ['overflow', 'overflowX', 'overflowY'].reduce(function (m, i) {
        if (wrapperStyle[i] !== 'visible') m[i] = 'hidden';
        return m;
      }, {});
      this.setState({
        overflowCSS: overflowCSS
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var active = this.props.active;
      if (active) this.wrapper.current.scrollTop = 0;
    }
    /**
     * Return an emotion css object for a given element key
     * If a custom style was provided via props, run it with
     * the base css obj.
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var overflowCSS = this.state.overflowCSS;
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          onClick = _this$props.onClick,
          active = _this$props.active,
          fadeSpeed = _this$props.fadeSpeed,
          spinner = _this$props.spinner,
          text = _this$props.text;
      return _react.default.createElement("div", {
        "data-testid": "wrapper",
        ref: this.wrapper,
        className: this.cx(['wrapper', active && 'wrapper--active'], (0, _emotion.css)(this.getStyles('wrapper', active ? overflowCSS : {})), className)
      }, _react.default.createElement(_reactTransitionGroup.CSSTransition, {
        in: active,
        classNames: "_loading-overlay-transition",
        timeout: fadeSpeed,
        unmountOnExit: true
      }, function (state) {
        return _react.default.createElement("div", {
          "data-testid": "overlay",
          className: _this2.cx('overlay', (0, _emotion.css)(_this2.getStyles('overlay', state))),
          onClick: onClick
        }, _react.default.createElement("div", {
          className: _this2.cx('content', (0, _emotion.css)(_this2.getStyles('content')))
        }, spinner && (typeof spinner === 'boolean' ? _react.default.createElement(_Spinner.default, {
          cx: _this2.cx,
          getStyles: _this2.getStyles
        }) : spinner), text));
      }), children);
    }
  }]);

  return LoadingOverlayWrapper;
}(_react.Component);

LoadingOverlayWrapper.propTypes = {
  active: _propTypes.default.bool,
  fadeSpeed: _propTypes.default.number,
  onClick: _propTypes.default.func,
  className: _propTypes.default.string,
  classNamePrefix: _propTypes.default.string,
  spinner: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.node]),
  text: _propTypes.default.node,
  styles: _propTypes.default.shape({
    content: _propTypes.default.function,
    overlay: _propTypes.default.function,
    spinner: _propTypes.default.function,
    wrapper: _propTypes.default.function
  })
};
LoadingOverlayWrapper.defaultProps = {
  classNamePrefix: '_loading_overlay_',
  fadeSpeed: 500,
  styles: {}
};
var _default = LoadingOverlayWrapper;
exports.default = _default;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var React = __importStar(__webpack_require__(0));
var core_1 = __webpack_require__(261);
var helpers_1 = __webpack_require__(256);
var bounce = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0%, 100% {transform: scale(0)}\n  50% {transform: scale(1.0)}\n"], ["\n  0%, 100% {transform: scale(0)}\n  50% {transform: scale(1.0)}\n"])));
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.style = function (i) {
            var _a = _this.props, color = _a.color, size = _a.size;
            return core_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      position: absolute;\n      height: ", ";\n      width: ", ";\n      background-color: ", ";\n      border-radius: 100%;\n      opacity: 0.6;\n      top: 0;\n      left: 0;\n      animation-fill-mode: both;\n      animation: ", " 2.1s ", " infinite ease-in-out;\n    "], ["\n      position: absolute;\n      height: ", ";\n      width: ", ";\n      background-color: ", ";\n      border-radius: 100%;\n      opacity: 0.6;\n      top: 0;\n      left: 0;\n      animation-fill-mode: both;\n      animation: ", " 2.1s ", " infinite ease-in-out;\n    "])), helpers_1.cssValue(size), helpers_1.cssValue(size), color, bounce, i === 1 ? "1s" : "0s");
        };
        _this.wrapper = function () {
            var size = _this.props.size;
            return core_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      position: relative;\n      width: ", ";\n      height: ", ";\n    "], ["\n      position: relative;\n      width: ", ";\n      height: ", ";\n    "])), helpers_1.cssValue(size), helpers_1.cssValue(size));
        };
        return _this;
    }
    Loader.prototype.render = function () {
        var _a = this.props, loading = _a.loading, css = _a.css;
        return loading ? (core_1.jsx("div", { css: [this.wrapper(), css] },
            core_1.jsx("div", { css: this.style(1) }),
            core_1.jsx("div", { css: this.style(2) }))) : null;
    };
    Loader.defaultProps = helpers_1.sizeDefaults(60);
    return Loader;
}(React.PureComponent));
exports.default = Loader;
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(2);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(143) });


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(46)('native-function-to-string', Function.toString);


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(5);
var getKeys = __webpack_require__(26);
var gOPS = __webpack_require__(50);
var pIE = __webpack_require__(51);
var toObject = __webpack_require__(15);
var IObject = __webpack_require__(67);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(8)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var l=__webpack_require__(94),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,z=n?Symbol.for("react.memo"):60115,A=n?Symbol.for("react.lazy"):
60116,B="function"===typeof Symbol&&Symbol.iterator;function C(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E={};function F(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(C(85));this.updater.enqueueSetState(this,a,b,"setState")};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function G(){}G.prototype=F.prototype;function H(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}var I=H.prototype=new G;I.constructor=H;l(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,c){var e,d={},g=null,k=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var h=Array(f),m=0;m<f;m++)h[m]=arguments[m+2];d.children=h}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return{$$typeof:p,type:a,key:g,ref:k,props:d,_owner:J.current}}
function N(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g,Q=[];function R(a,b,c,e){if(Q.length){var d=Q.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return{result:a,keyPrefix:b,func:c,context:e,count:0}}
function S(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>Q.length&&Q.push(a)}
function T(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return c(e,a,""===b?"."+U(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){d=a[k];var f=b+U(d,k);g+=T(d,f,c,e)}else if(null===a||"object"!==typeof a?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),k=
0;!(d=a.next()).done;)d=d.value,f=b+U(d,k++),g+=T(d,f,c,e);else if("object"===d)throw c=""+a,Error(C(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function V(a,b,c){return null==a?0:T(a,"",b,c)}function U(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function W(a,b){a.func.call(a.context,b,a.count++)}
function aa(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?X(a,e,c,function(a){return a}):null!=a&&(O(a)&&(a=N(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+c)),e.push(a))}function X(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(P,"$&/")+"/");b=R(b,g,e,d);V(a,aa,b);S(b)}var Y={current:null};function Z(){var a=Y.current;if(null===a)throw Error(C(321));return a}
var ba={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:l};exports.Children={map:function(a,b,c){if(null==a)return a;var e=[];X(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=R(null,null,b,c);V(a,W,b);S(b)},count:function(a){return V(a,function(){return null},null)},toArray:function(a){var b=[];X(a,b,null,function(a){return a});return b},only:function(a){if(!O(a))throw Error(C(143));return a}};
exports.Component=F;exports.Fragment=r;exports.Profiler=u;exports.PureComponent=H;exports.StrictMode=t;exports.Suspense=y;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ba;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(C(267,a));var e=l({},a.props),d=a.key,g=a.ref,k=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,k=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(h in b)K.call(b,h)&&!L.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==f?f[h]:b[h])}var h=arguments.length-2;if(1===h)e.children=c;else if(1<h){f=Array(h);for(var m=0;m<h;m++)f[m]=arguments[m+2];e.children=f}return{$$typeof:p,type:a.type,
key:d,ref:g,props:e,_owner:k}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:x,render:a}};exports.isValidElement=O;
exports.lazy=function(a){return{$$typeof:A,_ctor:a,_status:-1,_result:null}};exports.memo=function(a,b){return{$$typeof:z,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return Z().useCallback(a,b)};exports.useContext=function(a,b){return Z().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return Z().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return Z().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return Z().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return Z().useMemo(a,b)};exports.useReducer=function(a,b,c){return Z().useReducer(a,b,c)};exports.useRef=function(a){return Z().useRef(a)};exports.useState=function(a){return Z().useState(a)};exports.version="16.14.0";


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.14.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(0),n=__webpack_require__(94),r=__webpack_require__(146);function u(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(u(227));
function ba(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var da=!1,ea=null,fa=!1,ha=null,ia={onError:function(a){da=!0;ea=a}};function ja(a,b,c,d,e,f,g,h,k){da=!1;ea=null;ba.apply(ia,arguments)}function ka(a,b,c,d,e,f,g,h,k){ja.apply(this,arguments);if(da){if(da){var l=ea;da=!1;ea=null}else throw Error(u(198));fa||(fa=!0,ha=l)}}var la=null,ma=null,na=null;
function oa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=na(c);ka(d,b,void 0,a);a.currentTarget=null}var pa=null,qa={};
function ra(){if(pa)for(var a in qa){var b=qa[a],c=pa.indexOf(a);if(!(-1<c))throw Error(u(96,a));if(!sa[c]){if(!b.extractEvents)throw Error(u(97,a));sa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;if(ta.hasOwnProperty(h))throw Error(u(99,h));ta[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ua(k[e],g,h);e=!0}else f.registrationName?(ua(f.registrationName,g,h),e=!0):e=!1;if(!e)throw Error(u(98,d,a));}}}}
function ua(a,b,c){if(va[a])throw Error(u(100,a));va[a]=b;wa[a]=b.eventTypes[c].dependencies}var sa=[],ta={},va={},wa={};function xa(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!qa.hasOwnProperty(c)||qa[c]!==d){if(qa[c])throw Error(u(102,c));qa[c]=d;b=!0}}b&&ra()}var ya=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),za=null,Aa=null,Ba=null;
function Ca(a){if(a=ma(a)){if("function"!==typeof za)throw Error(u(280));var b=a.stateNode;b&&(b=la(b),za(a.stateNode,a.type,b))}}function Da(a){Aa?Ba?Ba.push(a):Ba=[a]:Aa=a}function Ea(){if(Aa){var a=Aa,b=Ba;Ba=Aa=null;Ca(a);if(b)for(a=0;a<b.length;a++)Ca(b[a])}}function Fa(a,b){return a(b)}function Ga(a,b,c,d,e){return a(b,c,d,e)}function Ha(){}var Ia=Fa,Ja=!1,Ka=!1;function La(){if(null!==Aa||null!==Ba)Ha(),Ea()}
function Ma(a,b,c){if(Ka)return a(b,c);Ka=!0;try{return Ia(a,b,c)}finally{Ka=!1,La()}}var Na=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oa=Object.prototype.hasOwnProperty,Pa={},Qa={};
function Ra(a){if(Oa.call(Qa,a))return!0;if(Oa.call(Pa,a))return!1;if(Na.test(a))return Qa[a]=!0;Pa[a]=!0;return!1}function Sa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function Ta(a,b,c,d){if(null===b||"undefined"===typeof b||Sa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function v(a,b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f}var C={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){C[a]=new v(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];C[b]=new v(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){C[a]=new v(a,2,!1,a.toLowerCase(),null,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){C[a]=new v(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){C[a]=new v(a,3,!1,a.toLowerCase(),null,!1)});
["checked","multiple","muted","selected"].forEach(function(a){C[a]=new v(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){C[a]=new v(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){C[a]=new v(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){C[a]=new v(a,5,!1,a.toLowerCase(),null,!1)});var Ua=/[\-:]([a-z])/g;function Va(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(Ua,
Va);C[b]=new v(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(Ua,Va);C[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(Ua,Va);C[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){C[a]=new v(a,1,!1,a.toLowerCase(),null,!1)});
C.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){C[a]=new v(a,1,!1,a.toLowerCase(),null,!0)});var Wa=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Wa.hasOwnProperty("ReactCurrentDispatcher")||(Wa.ReactCurrentDispatcher={current:null});Wa.hasOwnProperty("ReactCurrentBatchConfig")||(Wa.ReactCurrentBatchConfig={suspense:null});
function Xa(a,b,c,d){var e=C.hasOwnProperty(b)?C[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(Ta(b,c,e,d)&&(c=null),d||null===e?Ra(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
var Ya=/^(.*)[\\\/]/,E="function"===typeof Symbol&&Symbol.for,Za=E?Symbol.for("react.element"):60103,$a=E?Symbol.for("react.portal"):60106,ab=E?Symbol.for("react.fragment"):60107,bb=E?Symbol.for("react.strict_mode"):60108,cb=E?Symbol.for("react.profiler"):60114,db=E?Symbol.for("react.provider"):60109,eb=E?Symbol.for("react.context"):60110,fb=E?Symbol.for("react.concurrent_mode"):60111,gb=E?Symbol.for("react.forward_ref"):60112,hb=E?Symbol.for("react.suspense"):60113,ib=E?Symbol.for("react.suspense_list"):
60120,jb=E?Symbol.for("react.memo"):60115,kb=E?Symbol.for("react.lazy"):60116,lb=E?Symbol.for("react.block"):60121,mb="function"===typeof Symbol&&Symbol.iterator;function nb(a){if(null===a||"object"!==typeof a)return null;a=mb&&a[mb]||a["@@iterator"];return"function"===typeof a?a:null}function ob(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}}
function pb(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ab:return"Fragment";case $a:return"Portal";case cb:return"Profiler";case bb:return"StrictMode";case hb:return"Suspense";case ib:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case eb:return"Context.Consumer";case db:return"Context.Provider";case gb:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":
"ForwardRef");case jb:return pb(a.type);case lb:return pb(a.render);case kb:if(a=1===a._status?a._result:null)return pb(a)}return null}function qb(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=pb(a.type);c=null;d&&(c=pb(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Ya,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}
function rb(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function sb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function tb(a){var b=sb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function xb(a){a._valueTracker||(a._valueTracker=tb(a))}function yb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=sb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function zb(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Ab(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=rb(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Bb(a,b){b=b.checked;null!=b&&Xa(a,"checked",b,!1)}
function Cb(a,b){Bb(a,b);var c=rb(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Db(a,b.type,c):b.hasOwnProperty("defaultValue")&&Db(a,b.type,rb(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Eb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Db(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function Fb(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function Gb(a,b){a=n({children:void 0},b);if(b=Fb(b.children))a.children=b;return a}
function Hb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+rb(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function Ib(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(u(91));return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Jb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(u(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(u(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:rb(c)}}
function Kb(a,b){var c=rb(b.value),d=rb(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function Lb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var Mb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function Nb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ob(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Nb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var Pb,Qb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==Mb.svg||"innerHTML"in a)a.innerHTML=b;else{Pb=Pb||document.createElement("div");Pb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=Pb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function Rb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}function Sb(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Tb={animationend:Sb("Animation","AnimationEnd"),animationiteration:Sb("Animation","AnimationIteration"),animationstart:Sb("Animation","AnimationStart"),transitionend:Sb("Transition","TransitionEnd")},Ub={},Vb={};
ya&&(Vb=document.createElement("div").style,"AnimationEvent"in window||(delete Tb.animationend.animation,delete Tb.animationiteration.animation,delete Tb.animationstart.animation),"TransitionEvent"in window||delete Tb.transitionend.transition);function Wb(a){if(Ub[a])return Ub[a];if(!Tb[a])return a;var b=Tb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Vb)return Ub[a]=b[c];return a}
var Xb=Wb("animationend"),Yb=Wb("animationiteration"),Zb=Wb("animationstart"),$b=Wb("transitionend"),ac="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bc=new ("function"===typeof WeakMap?WeakMap:Map);function cc(a){var b=bc.get(a);void 0===b&&(b=new Map,bc.set(a,b));return b}
function dc(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.effectTag&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function ec(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function fc(a){if(dc(a)!==a)throw Error(u(188));}
function gc(a){var b=a.alternate;if(!b){b=dc(a);if(null===b)throw Error(u(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return fc(e),a;if(f===d)return fc(e),b;f=f.sibling}throw Error(u(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(u(189));}}if(c.alternate!==d)throw Error(u(190));}if(3!==c.tag)throw Error(u(188));return c.stateNode.current===c?a:b}function hc(a){a=gc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function ic(a,b){if(null==b)throw Error(u(30));if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}function jc(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var kc=null;
function lc(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)oa(a,b[d],c[d]);else b&&oa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function mc(a){null!==a&&(kc=ic(kc,a));a=kc;kc=null;if(a){jc(a,lc);if(kc)throw Error(u(95));if(fa)throw a=ha,fa=!1,ha=null,a;}}
function nc(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function oc(a){if(!ya)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}var pc=[];function qc(a){a.topLevelType=null;a.nativeEvent=null;a.targetInst=null;a.ancestors.length=0;10>pc.length&&pc.push(a)}
function rc(a,b,c,d){if(pc.length){var e=pc.pop();e.topLevelType=a;e.eventSystemFlags=d;e.nativeEvent=b;e.targetInst=c;return e}return{topLevelType:a,eventSystemFlags:d,nativeEvent:b,targetInst:c,ancestors:[]}}
function sc(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d=c;if(3===d.tag)d=d.stateNode.containerInfo;else{for(;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo}if(!d)break;b=c.tag;5!==b&&6!==b||a.ancestors.push(c);c=tc(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=nc(a.nativeEvent);d=a.topLevelType;var f=a.nativeEvent,g=a.eventSystemFlags;0===c&&(g|=64);for(var h=null,k=0;k<sa.length;k++){var l=sa[k];l&&(l=l.extractEvents(d,b,f,e,g))&&(h=
ic(h,l))}mc(h)}}function uc(a,b,c){if(!c.has(a)){switch(a){case "scroll":vc(b,"scroll",!0);break;case "focus":case "blur":vc(b,"focus",!0);vc(b,"blur",!0);c.set("blur",null);c.set("focus",null);break;case "cancel":case "close":oc(a)&&vc(b,a,!0);break;case "invalid":case "submit":case "reset":break;default:-1===ac.indexOf(a)&&F(a,b)}c.set(a,null)}}
var wc,xc,yc,zc=!1,Ac=[],Bc=null,Cc=null,Dc=null,Ec=new Map,Fc=new Map,Gc=[],Hc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),Ic="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
function Jc(a,b){var c=cc(b);Hc.forEach(function(a){uc(a,b,c)});Ic.forEach(function(a){uc(a,b,c)})}function Kc(a,b,c,d,e){return{blockedOn:a,topLevelType:b,eventSystemFlags:c|32,nativeEvent:e,container:d}}
function Lc(a,b){switch(a){case "focus":case "blur":Bc=null;break;case "dragenter":case "dragleave":Cc=null;break;case "mouseover":case "mouseout":Dc=null;break;case "pointerover":case "pointerout":Ec.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Fc.delete(b.pointerId)}}function Mc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=Kc(b,c,d,e,f),null!==b&&(b=Nc(b),null!==b&&xc(b)),a;a.eventSystemFlags|=d;return a}
function Oc(a,b,c,d,e){switch(b){case "focus":return Bc=Mc(Bc,a,b,c,d,e),!0;case "dragenter":return Cc=Mc(Cc,a,b,c,d,e),!0;case "mouseover":return Dc=Mc(Dc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Ec.set(f,Mc(Ec.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Fc.set(f,Mc(Fc.get(f)||null,a,b,c,d,e)),!0}return!1}
function Pc(a){var b=tc(a.target);if(null!==b){var c=dc(b);if(null!==c)if(b=c.tag,13===b){if(b=ec(c),null!==b){a.blockedOn=b;r.unstable_runWithPriority(a.priority,function(){yc(c)});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}function Qc(a){if(null!==a.blockedOn)return!1;var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);if(null!==b){var c=Nc(b);null!==c&&xc(c);a.blockedOn=b;return!1}return!0}
function Sc(a,b,c){Qc(a)&&c.delete(b)}function Tc(){for(zc=!1;0<Ac.length;){var a=Ac[0];if(null!==a.blockedOn){a=Nc(a.blockedOn);null!==a&&wc(a);break}var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);null!==b?a.blockedOn=b:Ac.shift()}null!==Bc&&Qc(Bc)&&(Bc=null);null!==Cc&&Qc(Cc)&&(Cc=null);null!==Dc&&Qc(Dc)&&(Dc=null);Ec.forEach(Sc);Fc.forEach(Sc)}function Uc(a,b){a.blockedOn===b&&(a.blockedOn=null,zc||(zc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Tc)))}
function Vc(a){function b(b){return Uc(b,a)}if(0<Ac.length){Uc(Ac[0],a);for(var c=1;c<Ac.length;c++){var d=Ac[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==Bc&&Uc(Bc,a);null!==Cc&&Uc(Cc,a);null!==Dc&&Uc(Dc,a);Ec.forEach(b);Fc.forEach(b);for(c=0;c<Gc.length;c++)d=Gc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Gc.length&&(c=Gc[0],null===c.blockedOn);)Pc(c),null===c.blockedOn&&Gc.shift()}
var Wc={},Yc=new Map,Zc=new Map,$c=["abort","abort",Xb,"animationEnd",Yb,"animationIteration",Zb,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking",
"seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",$b,"transitionEnd","waiting","waiting"];function ad(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1],f="on"+(e[0].toUpperCase()+e.slice(1));f={phasedRegistrationNames:{bubbled:f,captured:f+"Capture"},dependencies:[d],eventPriority:b};Zc.set(d,b);Yc.set(d,f);Wc[e]=f}}
ad("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);
ad("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);ad($c,2);for(var bd="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),cd=0;cd<bd.length;cd++)Zc.set(bd[cd],0);
var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function F(a,b){vc(b,a,!1)}function vc(a,b,c){var d=Zc.get(b);switch(void 0===d?2:d){case 0:d=gd.bind(null,b,1,a);break;case 1:d=hd.bind(null,b,1,a);break;default:d=id.bind(null,b,1,a)}c?a.addEventListener(b,d,!0):a.addEventListener(b,d,!1)}function gd(a,b,c,d){Ja||Ha();var e=id,f=Ja;Ja=!0;try{Ga(e,a,b,c,d)}finally{(Ja=f)||La()}}function hd(a,b,c,d){ed(dd,id.bind(null,a,b,c,d))}
function id(a,b,c,d){if(fd)if(0<Ac.length&&-1<Hc.indexOf(a))a=Kc(null,a,b,c,d),Ac.push(a);else{var e=Rc(a,b,c,d);if(null===e)Lc(a,d);else if(-1<Hc.indexOf(a))a=Kc(e,a,b,c,d),Ac.push(a);else if(!Oc(e,a,b,c,d)){Lc(a,d);a=rc(a,d,null,b);try{Ma(sc,a)}finally{qc(a)}}}}
function Rc(a,b,c,d){c=nc(d);c=tc(c);if(null!==c){var e=dc(c);if(null===e)c=null;else{var f=e.tag;if(13===f){c=ec(e);if(null!==c)return c;c=null}else if(3===f){if(e.stateNode.hydrate)return 3===e.tag?e.stateNode.containerInfo:null;c=null}else e!==c&&(c=null)}}a=rc(a,d,c,b);try{Ma(sc,a)}finally{qc(a)}return null}
var jd={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kd=["Webkit","ms","Moz","O"];Object.keys(jd).forEach(function(a){kd.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);jd[b]=jd[a]})});function ld(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||jd.hasOwnProperty(a)&&jd[a]?(""+b).trim():b+"px"}
function md(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ld(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var nd=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function od(a,b){if(b){if(nd[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(u(137,a,""));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(u(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(u(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(u(62,""));}}
function pd(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var qd=Mb.html;function rd(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=cc(a);b=wa[b];for(var d=0;d<b.length;d++)uc(b[d],a,c)}function sd(){}
function td(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function ud(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function vd(a,b){var c=ud(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=ud(c)}}
function wd(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?wd(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function xd(){for(var a=window,b=td();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=td(a.document)}return b}
function yd(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}var zd="$",Ad="/$",Bd="$?",Cd="$!",Dd=null,Ed=null;function Fd(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function Gd(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var Hd="function"===typeof setTimeout?setTimeout:void 0,Id="function"===typeof clearTimeout?clearTimeout:void 0;function Jd(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}
function Kd(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if(c===zd||c===Cd||c===Bd){if(0===b)return a;b--}else c===Ad&&b++}a=a.previousSibling}return null}var Ld=Math.random().toString(36).slice(2),Md="__reactInternalInstance$"+Ld,Nd="__reactEventHandlers$"+Ld,Od="__reactContainere$"+Ld;
function tc(a){var b=a[Md];if(b)return b;for(var c=a.parentNode;c;){if(b=c[Od]||c[Md]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Kd(a);null!==a;){if(c=a[Md])return c;a=Kd(a)}return b}a=c;c=a.parentNode}return null}function Nc(a){a=a[Md]||a[Od];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function Pd(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(u(33));}function Qd(a){return a[Nd]||null}
function Rd(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}
function Sd(a,b){var c=a.stateNode;if(!c)return null;var d=la(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==typeof c)throw Error(u(231,
b,typeof c));return c}function Td(a,b,c){if(b=Sd(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a)}function Ud(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Rd(b);for(b=c.length;0<b--;)Td(c[b],"captured",a);for(b=0;b<c.length;b++)Td(c[b],"bubbled",a)}}
function Vd(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Sd(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a))}function Wd(a){a&&a.dispatchConfig.registrationName&&Vd(a._targetInst,null,a)}function Xd(a){jc(a,Ud)}var Yd=null,Zd=null,$d=null;
function ae(){if($d)return $d;var a,b=Zd,c=b.length,d,e="value"in Yd?Yd.value:Yd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return $d=e.slice(a,1<d?1-d:void 0)}function be(){return!0}function ce(){return!1}
function G(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?be:ce;this.isPropagationStopped=ce;return this}
n(G.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=be)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=be)},persist:function(){this.isPersistent=be},isPersistent:ce,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=ce;this._dispatchInstances=this._dispatchListeners=null}});G.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
G.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;de(c);return c};de(G);function ee(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}
function fe(a){if(!(a instanceof this))throw Error(u(279));a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function de(a){a.eventPool=[];a.getPooled=ee;a.release=fe}var ge=G.extend({data:null}),he=G.extend({data:null}),ie=[9,13,27,32],je=ya&&"CompositionEvent"in window,ke=null;ya&&"documentMode"in document&&(ke=document.documentMode);
var le=ya&&"TextEvent"in window&&!ke,me=ya&&(!je||ke&&8<ke&&11>=ke),ne=String.fromCharCode(32),oe={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},pe=!1;
function qe(a,b){switch(a){case "keyup":return-1!==ie.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function re(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var se=!1;function te(a,b){switch(a){case "compositionend":return re(b);case "keypress":if(32!==b.which)return null;pe=!0;return ne;case "textInput":return a=b.data,a===ne&&pe?null:a;default:return null}}
function ue(a,b){if(se)return"compositionend"===a||!je&&qe(a,b)?(a=ae(),$d=Zd=Yd=null,se=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return me&&"ko"!==b.locale?null:b.data;default:return null}}
var ve={eventTypes:oe,extractEvents:function(a,b,c,d){var e;if(je)b:{switch(a){case "compositionstart":var f=oe.compositionStart;break b;case "compositionend":f=oe.compositionEnd;break b;case "compositionupdate":f=oe.compositionUpdate;break b}f=void 0}else se?qe(a,c)&&(f=oe.compositionEnd):"keydown"===a&&229===c.keyCode&&(f=oe.compositionStart);f?(me&&"ko"!==c.locale&&(se||f!==oe.compositionStart?f===oe.compositionEnd&&se&&(e=ae()):(Yd=d,Zd="value"in Yd?Yd.value:Yd.textContent,se=!0)),f=ge.getPooled(f,
b,c,d),e?f.data=e:(e=re(c),null!==e&&(f.data=e)),Xd(f),e=f):e=null;(a=le?te(a,c):ue(a,c))?(b=he.getPooled(oe.beforeInput,b,c,d),b.data=a,Xd(b)):b=null;return null===e?b:null===b?e:[e,b]}},we={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!we[a.type]:"textarea"===b?!0:!1}
var ye={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function ze(a,b,c){a=G.getPooled(ye.change,a,b,c);a.type="change";Da(c);Xd(a);return a}var Ae=null,Be=null;function Ce(a){mc(a)}function De(a){var b=Pd(a);if(yb(b))return a}function Ee(a,b){if("change"===a)return b}var Fe=!1;ya&&(Fe=oc("input")&&(!document.documentMode||9<document.documentMode));
function Ge(){Ae&&(Ae.detachEvent("onpropertychange",He),Be=Ae=null)}function He(a){if("value"===a.propertyName&&De(Be))if(a=ze(Be,a,nc(a)),Ja)mc(a);else{Ja=!0;try{Fa(Ce,a)}finally{Ja=!1,La()}}}function Ie(a,b,c){"focus"===a?(Ge(),Ae=b,Be=c,Ae.attachEvent("onpropertychange",He)):"blur"===a&&Ge()}function Je(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return De(Be)}function Ke(a,b){if("click"===a)return De(b)}function Le(a,b){if("input"===a||"change"===a)return De(b)}
var Me={eventTypes:ye,_isInputEventSupported:Fe,extractEvents:function(a,b,c,d){var e=b?Pd(b):window,f=e.nodeName&&e.nodeName.toLowerCase();if("select"===f||"input"===f&&"file"===e.type)var g=Ee;else if(xe(e))if(Fe)g=Le;else{g=Je;var h=Ie}else(f=e.nodeName)&&"input"===f.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(g=Ke);if(g&&(g=g(a,b)))return ze(g,c,d);h&&h(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Db(e,"number",e.value)}},Ne=G.extend({view:null,detail:null}),
Oe={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pe(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Oe[a])?!!b[a]:!1}function Qe(){return Pe}
var Re=0,Se=0,Te=!1,Ue=!1,Ve=Ne.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Qe,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Re;Re=a.screenX;return Te?"mousemove"===a.type?a.screenX-b:0:(Te=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=Se;Se=a.screenY;return Ue?"mousemove"===a.type?a.screenY-b:0:(Ue=!0,0)}}),We=Ve.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Xe={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},Ye={eventTypes:Xe,extractEvents:function(a,b,c,d,e){var f="mouseover"===a||"pointerover"===a,g="mouseout"===a||"pointerout"===a;if(f&&0===(e&32)&&(c.relatedTarget||c.fromElement)||!g&&!f)return null;f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window;if(g){if(g=b,b=(b=c.relatedTarget||c.toElement)?tc(b):null,null!==b){var h=dc(b);if(b!==h||5!==b.tag&&6!==b.tag)b=null}}else g=null;if(g===b)return null;if("mouseout"===a||"mouseover"===
a){var k=Ve;var l=Xe.mouseLeave;var m=Xe.mouseEnter;var p="mouse"}else if("pointerout"===a||"pointerover"===a)k=We,l=Xe.pointerLeave,m=Xe.pointerEnter,p="pointer";a=null==g?f:Pd(g);f=null==b?f:Pd(b);l=k.getPooled(l,g,c,d);l.type=p+"leave";l.target=a;l.relatedTarget=f;c=k.getPooled(m,b,c,d);c.type=p+"enter";c.target=f;c.relatedTarget=a;d=g;p=b;if(d&&p)a:{k=d;m=p;g=0;for(a=k;a;a=Rd(a))g++;a=0;for(b=m;b;b=Rd(b))a++;for(;0<g-a;)k=Rd(k),g--;for(;0<a-g;)m=Rd(m),a--;for(;g--;){if(k===m||k===m.alternate)break a;
k=Rd(k);m=Rd(m)}k=null}else k=null;m=k;for(k=[];d&&d!==m;){g=d.alternate;if(null!==g&&g===m)break;k.push(d);d=Rd(d)}for(d=[];p&&p!==m;){g=p.alternate;if(null!==g&&g===m)break;d.push(p);p=Rd(p)}for(p=0;p<k.length;p++)Vd(k[p],"bubbled",l);for(p=d.length;0<p--;)Vd(d[p],"captured",c);return 0===(e&64)?[l]:[l,c]}};function Ze(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var $e="function"===typeof Object.is?Object.is:Ze,af=Object.prototype.hasOwnProperty;
function bf(a,b){if($e(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!af.call(b,c[d])||!$e(a[c[d]],b[c[d]]))return!1;return!0}
var cf=ya&&"documentMode"in document&&11>=document.documentMode,df={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},ef=null,ff=null,gf=null,hf=!1;
function jf(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(hf||null==ef||ef!==td(c))return null;c=ef;"selectionStart"in c&&yd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return gf&&bf(gf,c)?null:(gf=c,a=G.getPooled(df.select,ff,a,b),a.type="select",a.target=ef,Xd(a),a)}
var kf={eventTypes:df,extractEvents:function(a,b,c,d,e,f){e=f||(d.window===d?d.document:9===d.nodeType?d:d.ownerDocument);if(!(f=!e)){a:{e=cc(e);f=wa.onSelect;for(var g=0;g<f.length;g++)if(!e.has(f[g])){e=!1;break a}e=!0}f=!e}if(f)return null;e=b?Pd(b):window;switch(a){case "focus":if(xe(e)||"true"===e.contentEditable)ef=e,ff=b,gf=null;break;case "blur":gf=ff=ef=null;break;case "mousedown":hf=!0;break;case "contextmenu":case "mouseup":case "dragend":return hf=!1,jf(c,d);case "selectionchange":if(cf)break;
case "keydown":case "keyup":return jf(c,d)}return null}},lf=G.extend({animationName:null,elapsedTime:null,pseudoElement:null}),mf=G.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),nf=Ne.extend({relatedTarget:null});function of(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rf=Ne.extend({key:function(a){if(a.key){var b=pf[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=of(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?qf[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Qe,charCode:function(a){return"keypress"===
a.type?of(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?of(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),sf=Ve.extend({dataTransfer:null}),tf=Ne.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Qe}),uf=G.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),vf=Ve.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),wf={eventTypes:Wc,extractEvents:function(a,b,c,d){var e=Yc.get(a);if(!e)return null;switch(a){case "keypress":if(0===of(c))return null;case "keydown":case "keyup":a=rf;break;case "blur":case "focus":a=nf;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=
Ve;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=sf;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=tf;break;case Xb:case Yb:case Zb:a=lf;break;case $b:a=uf;break;case "scroll":a=Ne;break;case "wheel":a=vf;break;case "copy":case "cut":case "paste":a=mf;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=
We;break;default:a=G}b=a.getPooled(e,b,c,d);Xd(b);return b}};if(pa)throw Error(u(101));pa=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ra();var xf=Nc;la=Qd;ma=xf;na=Pd;xa({SimpleEventPlugin:wf,EnterLeaveEventPlugin:Ye,ChangeEventPlugin:Me,SelectEventPlugin:kf,BeforeInputEventPlugin:ve});var yf=[],zf=-1;function H(a){0>zf||(a.current=yf[zf],yf[zf]=null,zf--)}
function I(a,b){zf++;yf[zf]=a.current;a.current=b}var Af={},J={current:Af},K={current:!1},Bf=Af;function Cf(a,b){var c=a.type.contextTypes;if(!c)return Af;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function L(a){a=a.childContextTypes;return null!==a&&void 0!==a}
function Df(){H(K);H(J)}function Ef(a,b,c){if(J.current!==Af)throw Error(u(168));I(J,b);I(K,c)}function Ff(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(u(108,pb(b)||"Unknown",e));return n({},c,{},d)}function Gf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Af;Bf=J.current;I(J,a);I(K,K.current);return!0}
function Hf(a,b,c){var d=a.stateNode;if(!d)throw Error(u(169));c?(a=Ff(a,b,Bf),d.__reactInternalMemoizedMergedChildContext=a,H(K),H(J),I(J,a)):H(K);I(K,c)}
var If=r.unstable_runWithPriority,Jf=r.unstable_scheduleCallback,Kf=r.unstable_cancelCallback,Lf=r.unstable_requestPaint,Mf=r.unstable_now,Nf=r.unstable_getCurrentPriorityLevel,Of=r.unstable_ImmediatePriority,Pf=r.unstable_UserBlockingPriority,Qf=r.unstable_NormalPriority,Rf=r.unstable_LowPriority,Sf=r.unstable_IdlePriority,Tf={},Uf=r.unstable_shouldYield,Vf=void 0!==Lf?Lf:function(){},Wf=null,Xf=null,Yf=!1,Zf=Mf(),$f=1E4>Zf?Mf:function(){return Mf()-Zf};
function ag(){switch(Nf()){case Of:return 99;case Pf:return 98;case Qf:return 97;case Rf:return 96;case Sf:return 95;default:throw Error(u(332));}}function bg(a){switch(a){case 99:return Of;case 98:return Pf;case 97:return Qf;case 96:return Rf;case 95:return Sf;default:throw Error(u(332));}}function cg(a,b){a=bg(a);return If(a,b)}function dg(a,b,c){a=bg(a);return Jf(a,b,c)}function eg(a){null===Wf?(Wf=[a],Xf=Jf(Of,fg)):Wf.push(a);return Tf}function gg(){if(null!==Xf){var a=Xf;Xf=null;Kf(a)}fg()}
function fg(){if(!Yf&&null!==Wf){Yf=!0;var a=0;try{var b=Wf;cg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});Wf=null}catch(c){throw null!==Wf&&(Wf=Wf.slice(a+1)),Jf(Of,gg),c;}finally{Yf=!1}}}function hg(a,b,c){c/=10;return 1073741821-(((1073741821-a+b/10)/c|0)+1)*c}function ig(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}var jg={current:null},kg=null,lg=null,mg=null;function ng(){mg=lg=kg=null}
function og(a){var b=jg.current;H(jg);a.type._context._currentValue=b}function pg(a,b){for(;null!==a;){var c=a.alternate;if(a.childExpirationTime<b)a.childExpirationTime=b,null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);else if(null!==c&&c.childExpirationTime<b)c.childExpirationTime=b;else break;a=a.return}}function qg(a,b){kg=a;mg=lg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(a.expirationTime>=b&&(rg=!0),a.firstContext=null)}
function sg(a,b){if(mg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)mg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===lg){if(null===kg)throw Error(u(308));lg=b;kg.dependencies={expirationTime:0,firstContext:b,responders:null}}else lg=lg.next=b}return a._currentValue}var tg=!1;function ug(a){a.updateQueue={baseState:a.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}
function vg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,baseQueue:a.baseQueue,shared:a.shared,effects:a.effects})}function wg(a,b){a={expirationTime:a,suspenseConfig:b,tag:0,payload:null,callback:null,next:null};return a.next=a}function xg(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}
function yg(a,b){var c=a.alternate;null!==c&&vg(c,a);a=a.updateQueue;c=a.baseQueue;null===c?(a.baseQueue=b.next=b,b.next=b):(b.next=c.next,c.next=b)}
function zg(a,b,c,d){var e=a.updateQueue;tg=!1;var f=e.baseQueue,g=e.shared.pending;if(null!==g){if(null!==f){var h=f.next;f.next=g.next;g.next=h}f=g;e.shared.pending=null;h=a.alternate;null!==h&&(h=h.updateQueue,null!==h&&(h.baseQueue=g))}if(null!==f){h=f.next;var k=e.baseState,l=0,m=null,p=null,x=null;if(null!==h){var z=h;do{g=z.expirationTime;if(g<d){var ca={expirationTime:z.expirationTime,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null};null===x?(p=x=
ca,m=k):x=x.next=ca;g>l&&(l=g)}else{null!==x&&(x=x.next={expirationTime:1073741823,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null});Ag(g,z.suspenseConfig);a:{var D=a,t=z;g=b;ca=c;switch(t.tag){case 1:D=t.payload;if("function"===typeof D){k=D.call(ca,k,g);break a}k=D;break a;case 3:D.effectTag=D.effectTag&-4097|64;case 0:D=t.payload;g="function"===typeof D?D.call(ca,k,g):D;if(null===g||void 0===g)break a;k=n({},k,g);break a;case 2:tg=!0}}null!==z.callback&&
(a.effectTag|=32,g=e.effects,null===g?e.effects=[z]:g.push(z))}z=z.next;if(null===z||z===h)if(g=e.shared.pending,null===g)break;else z=f.next=g.next,g.next=h,e.baseQueue=f=g,e.shared.pending=null}while(1)}null===x?m=k:x.next=p;e.baseState=m;e.baseQueue=x;Bg(l);a.expirationTime=l;a.memoizedState=k}}
function Cg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=e;e=c;if("function"!==typeof d)throw Error(u(191,d));d.call(e)}}}var Dg=Wa.ReactCurrentBatchConfig,Eg=(new aa.Component).refs;function Fg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;0===a.expirationTime&&(a.updateQueue.baseState=c)}
var Jg={isMounted:function(a){return(a=a._reactInternalFiber)?dc(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=Gg(),d=Dg.suspense;
c=Hg(c,a,d);d=wg(c,d);d.tag=2;void 0!==b&&null!==b&&(d.callback=b);xg(a,d);Ig(a,c)}};function Kg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!bf(c,d)||!bf(e,f):!0}
function Lg(a,b,c){var d=!1,e=Af;var f=b.contextType;"object"===typeof f&&null!==f?f=sg(f):(e=L(b)?Bf:J.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Cf(a,e):Af);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Jg;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Mg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Jg.enqueueReplaceState(b,b.state,null)}
function Ng(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Eg;ug(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=sg(f):(f=L(b)?Bf:J.current,e.context=Cf(a,f));zg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Fg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Jg.enqueueReplaceState(e,e.state,null),zg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var Og=Array.isArray;
function Pg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(u(309));var d=c.stateNode}if(!d)throw Error(u(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Eg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(u(284));if(!c._owner)throw Error(u(290,a));}return a}
function Qg(a,b){if("textarea"!==a.type)throw Error(u(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,""));}
function Rg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Sg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Tg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Pg(a,b,c),d.return=a,d;d=Ug(c.type,c.key,c.props,null,a.mode,d);d.ref=Pg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=Vg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Wg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function p(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Tg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Za:return c=Ug(b.type,b.key,b.props,null,a.mode,c),c.ref=Pg(a,null,b),c.return=a,c;case $a:return b=Vg(b,a.mode,c),b.return=a,b}if(Og(b)||
nb(b))return b=Wg(b,a.mode,c,null),b.return=a,b;Qg(a,b)}return null}function x(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Za:return c.key===e?c.type===ab?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case $a:return c.key===e?l(a,b,c,d):null}if(Og(c)||nb(c))return null!==e?null:m(a,b,c,d,null);Qg(a,c)}return null}function z(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Za:return a=a.get(null===d.key?c:d.key)||null,d.type===ab?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case $a:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Og(d)||nb(d))return a=a.get(c)||null,m(b,a,d,e,null);Qg(b,d)}return null}function ca(e,g,h,k){for(var l=null,t=null,m=g,y=g=0,A=null;null!==m&&y<h.length;y++){m.index>y?(A=m,m=null):A=m.sibling;var q=x(e,m,h[y],k);if(null===q){null===m&&(m=A);break}a&&
m&&null===q.alternate&&b(e,m);g=f(q,g,y);null===t?l=q:t.sibling=q;t=q;m=A}if(y===h.length)return c(e,m),l;if(null===m){for(;y<h.length;y++)m=p(e,h[y],k),null!==m&&(g=f(m,g,y),null===t?l=m:t.sibling=m,t=m);return l}for(m=d(e,m);y<h.length;y++)A=z(m,e,y,h[y],k),null!==A&&(a&&null!==A.alternate&&m.delete(null===A.key?y:A.key),g=f(A,g,y),null===t?l=A:t.sibling=A,t=A);a&&m.forEach(function(a){return b(e,a)});return l}function D(e,g,h,l){var k=nb(h);if("function"!==typeof k)throw Error(u(150));h=k.call(h);
if(null==h)throw Error(u(151));for(var m=k=null,t=g,y=g=0,A=null,q=h.next();null!==t&&!q.done;y++,q=h.next()){t.index>y?(A=t,t=null):A=t.sibling;var D=x(e,t,q.value,l);if(null===D){null===t&&(t=A);break}a&&t&&null===D.alternate&&b(e,t);g=f(D,g,y);null===m?k=D:m.sibling=D;m=D;t=A}if(q.done)return c(e,t),k;if(null===t){for(;!q.done;y++,q=h.next())q=p(e,q.value,l),null!==q&&(g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);return k}for(t=d(e,t);!q.done;y++,q=h.next())q=z(t,e,y,q.value,l),null!==q&&(a&&null!==
q.alternate&&t.delete(null===q.key?y:q.key),g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);a&&t.forEach(function(a){return b(e,a)});return k}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ab&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Za:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ab){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,
k.sibling);d=e(k,f.props);d.ref=Pg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===ab?(d=Wg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Ug(f.type,f.key,f.props,null,a.mode,h),h.ref=Pg(a,d,f),h.return=a,a=h)}return g(a);case $a:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=
d.sibling}d=Vg(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Tg(f,a.mode,h),d.return=a,a=d),g(a);if(Og(f))return ca(a,d,f,h);if(nb(f))return D(a,d,f,h);l&&Qg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:throw a=a.type,Error(u(152,a.displayName||a.name||"Component"));}return c(a,d)}}var Xg=Rg(!0),Yg=Rg(!1),Zg={},$g={current:Zg},ah={current:Zg},bh={current:Zg};
function ch(a){if(a===Zg)throw Error(u(174));return a}function dh(a,b){I(bh,b);I(ah,a);I($g,Zg);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Ob(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=Ob(b,a)}H($g);I($g,b)}function eh(){H($g);H(ah);H(bh)}function fh(a){ch(bh.current);var b=ch($g.current);var c=Ob(b,a.type);b!==c&&(I(ah,a),I($g,c))}function gh(a){ah.current===a&&(H($g),H(ah))}var M={current:0};
function hh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||c.data===Bd||c.data===Cd))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.effectTag&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}function ih(a,b){return{responder:a,props:b}}
var jh=Wa.ReactCurrentDispatcher,kh=Wa.ReactCurrentBatchConfig,lh=0,N=null,O=null,P=null,mh=!1;function Q(){throw Error(u(321));}function nh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!$e(a[c],b[c]))return!1;return!0}
function oh(a,b,c,d,e,f){lh=f;N=b;b.memoizedState=null;b.updateQueue=null;b.expirationTime=0;jh.current=null===a||null===a.memoizedState?ph:qh;a=c(d,e);if(b.expirationTime===lh){f=0;do{b.expirationTime=0;if(!(25>f))throw Error(u(301));f+=1;P=O=null;b.updateQueue=null;jh.current=rh;a=c(d,e)}while(b.expirationTime===lh)}jh.current=sh;b=null!==O&&null!==O.next;lh=0;P=O=N=null;mh=!1;if(b)throw Error(u(300));return a}
function th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===P?N.memoizedState=P=a:P=P.next=a;return P}function uh(){if(null===O){var a=N.alternate;a=null!==a?a.memoizedState:null}else a=O.next;var b=null===P?N.memoizedState:P.next;if(null!==b)P=b,O=a;else{if(null===a)throw Error(u(310));O=a;a={memoizedState:O.memoizedState,baseState:O.baseState,baseQueue:O.baseQueue,queue:O.queue,next:null};null===P?N.memoizedState=P=a:P=P.next=a}return P}
function vh(a,b){return"function"===typeof b?b(a):b}
function wh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;var d=O,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.expirationTime;if(l<lh){var m={expirationTime:k.expirationTime,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null};null===h?(g=h=m,f=d):h=h.next=m;l>N.expirationTime&&
(N.expirationTime=l,Bg(l))}else null!==h&&(h=h.next={expirationTime:1073741823,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),Ag(l,k.suspenseConfig),d=k.eagerReducer===a?k.eagerState:a(d,k.action);k=k.next}while(null!==k&&k!==e);null===h?f=d:h.next=g;$e(d,b.memoizedState)||(rg=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}
function xh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);$e(f,b.memoizedState)||(rg=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
function yh(a){var b=th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:vh,lastRenderedState:a};a=a.dispatch=zh.bind(null,N,a);return[b.memoizedState,a]}function Ah(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=N.updateQueue;null===b?(b={lastEffect:null},N.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}
function Bh(){return uh().memoizedState}function Ch(a,b,c,d){var e=th();N.effectTag|=a;e.memoizedState=Ah(1|b,c,void 0,void 0===d?null:d)}function Dh(a,b,c,d){var e=uh();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&nh(d,g.deps)){Ah(b,c,f,d);return}}N.effectTag|=a;e.memoizedState=Ah(1|b,c,f,d)}function Eh(a,b){return Ch(516,4,a,b)}function Fh(a,b){return Dh(516,4,a,b)}function Gh(a,b){return Dh(4,2,a,b)}
function Hh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function Ih(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Dh(4,2,Hh.bind(null,b,a),c)}function Jh(){}function Kh(a,b){th().memoizedState=[a,void 0===b?null:b];return a}function Lh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function Mh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Nh(a,b,c){var d=ag();cg(98>d?98:d,function(){a(!0)});cg(97<d?97:d,function(){var d=kh.suspense;kh.suspense=void 0===b?null:b;try{a(!1),c()}finally{kh.suspense=d}})}
function zh(a,b,c){var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e={expirationTime:d,suspenseConfig:e,action:c,eagerReducer:null,eagerState:null,next:null};var f=b.pending;null===f?e.next=e:(e.next=f.next,f.next=e);b.pending=e;f=a.alternate;if(a===N||null!==f&&f===N)mh=!0,e.expirationTime=lh,N.expirationTime=lh;else{if(0===a.expirationTime&&(null===f||0===f.expirationTime)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.eagerReducer=f;e.eagerState=h;if($e(h,g))return}catch(k){}finally{}Ig(a,
d)}}
var sh={readContext:sg,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useResponder:Q,useDeferredValue:Q,useTransition:Q},ph={readContext:sg,useCallback:Kh,useContext:sg,useEffect:Eh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Ch(4,2,Hh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Ch(4,2,a,b)},useMemo:function(a,b){var c=th();b=void 0===b?null:b;a=a();c.memoizedState=[a,
b];return a},useReducer:function(a,b,c){var d=th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=zh.bind(null,N,a);return[d.memoizedState,a]},useRef:function(a){var b=th();a={current:a};return b.memoizedState=a},useState:yh,useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=yh(a),d=c[0],e=c[1];Eh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=
c}},[a,b]);return d},useTransition:function(a){var b=yh(!1),c=b[0];b=b[1];return[Kh(Nh.bind(null,b,a),[b,a]),c]}},qh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:wh,useRef:Bh,useState:function(){return wh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=wh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=c}},[a,b]);return d},useTransition:function(a){var b=
wh(vh),c=b[0];b=b[1];return[Lh(Nh.bind(null,b,a),[b,a]),c]}},rh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:xh,useRef:Bh,useState:function(){return xh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=xh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=c}},[a,b]);return d},useTransition:function(a){var b=xh(vh),c=b[0];b=b[1];return[Lh(Nh.bind(null,
b,a),[b,a]),c]}},Oh=null,Ph=null,Qh=!1;function Rh(a,b){var c=Sh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}
function Th(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function Uh(a){if(Qh){var b=Ph;if(b){var c=b;if(!Th(a,b)){b=Jd(c.nextSibling);if(!b||!Th(a,b)){a.effectTag=a.effectTag&-1025|2;Qh=!1;Oh=a;return}Rh(Oh,c)}Oh=a;Ph=Jd(b.firstChild)}else a.effectTag=a.effectTag&-1025|2,Qh=!1,Oh=a}}function Vh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;Oh=a}
function Wh(a){if(a!==Oh)return!1;if(!Qh)return Vh(a),Qh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Gd(b,a.memoizedProps))for(b=Ph;b;)Rh(a,b),b=Jd(b.nextSibling);Vh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(u(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if(c===Ad){if(0===b){Ph=Jd(a.nextSibling);break a}b--}else c!==zd&&c!==Cd&&c!==Bd||b++}a=a.nextSibling}Ph=null}}else Ph=Oh?Jd(a.stateNode.nextSibling):null;return!0}
function Xh(){Ph=Oh=null;Qh=!1}var Yh=Wa.ReactCurrentOwner,rg=!1;function R(a,b,c,d){b.child=null===a?Yg(b,null,c,d):Xg(b,a.child,c,d)}function Zh(a,b,c,d,e){c=c.render;var f=b.ref;qg(b,e);d=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R(a,b,d,e);return b.child}
function ai(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!bi(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ci(a,b,g,d,e,f);a=Ug(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:bf,c(e,d)&&a.ref===b.ref))return $h(a,b,f);b.effectTag|=1;a=Sg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function ci(a,b,c,d,e,f){return null!==a&&bf(a.memoizedProps,d)&&a.ref===b.ref&&(rg=!1,e<f)?(b.expirationTime=a.expirationTime,$h(a,b,f)):di(a,b,c,d,f)}function ei(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function di(a,b,c,d,e){var f=L(c)?Bf:J.current;f=Cf(b,f);qg(b,e);c=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R(a,b,c,e);return b.child}
function fi(a,b,c,d,e){if(L(c)){var f=!0;Gf(b)}else f=!1;qg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Lg(b,c,d),Ng(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=sg(l):(l=L(c)?Bf:J.current,l=Cf(b,l));var m=c.getDerivedStateFromProps,p="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;p||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l);tg=!1;var x=b.memoizedState;g.state=x;zg(b,d,g,e);k=b.memoizedState;h!==d||x!==k||K.current||tg?("function"===typeof m&&(Fg(b,c,m,d),k=b.memoizedState),(h=tg||Kg(b,c,h,d,x,k,l))?(p||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,vg(a,b),h=b.memoizedProps,g.props=b.type===b.elementType?h:ig(b.type,h),k=g.context,l=c.contextType,"object"===typeof l&&null!==l?l=sg(l):(l=L(c)?Bf:J.current,l=Cf(b,l)),m=c.getDerivedStateFromProps,(p="function"===typeof m||"function"===
typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l),tg=!1,k=b.memoizedState,g.state=k,zg(b,d,g,e),x=b.memoizedState,h!==d||k!==x||K.current||tg?("function"===typeof m&&(Fg(b,c,m,d),x=b.memoizedState),(m=tg||Kg(b,c,h,d,k,x,l))?(p||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
x,l),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,l)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=l,d=m):
("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return gi(a,b,c,d,f,e)}
function gi(a,b,c,d,e,f){ei(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Hf(b,c,!1),$h(a,b,f);d=b.stateNode;Yh.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=Xg(b,a.child,null,f),b.child=Xg(b,null,h,f)):R(a,b,h,f);b.memoizedState=d.state;e&&Hf(b,c,!0);return b.child}function hi(a){var b=a.stateNode;b.pendingContext?Ef(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Ef(a,b.context,!1);dh(a,b.containerInfo)}
var ii={dehydrated:null,retryTime:0};
function ji(a,b,c){var d=b.mode,e=b.pendingProps,f=M.current,g=!1,h;(h=0!==(b.effectTag&64))||(h=0!==(f&2)&&(null===a||null!==a.memoizedState));h?(g=!0,b.effectTag&=-65):null!==a&&null===a.memoizedState||void 0===e.fallback||!0===e.unstable_avoidThisFallback||(f|=1);I(M,f&1);if(null===a){void 0!==e.fallback&&Uh(b);if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=
b;e.sibling=c;b.memoizedState=ii;b.child=e;return c}d=e.children;b.memoizedState=null;return b.child=Yg(b,null,d,c)}if(null!==a.memoizedState){a=a.child;d=a.sibling;if(g){e=e.fallback;c=Sg(a,a.pendingProps);c.return=b;if(0===(b.mode&2)&&(g=null!==b.memoizedState?b.child.child:b.child,g!==a.child))for(c.child=g;null!==g;)g.return=c,g=g.sibling;d=Sg(d,e);d.return=b;c.sibling=d;c.childExpirationTime=0;b.memoizedState=ii;b.child=c;return d}c=Xg(b,a.child,e.children,c);b.memoizedState=null;return b.child=
c}a=a.child;if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;e.child=a;null!==a&&(a.return=e);if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=b;e.sibling=c;c.effectTag|=2;e.childExpirationTime=0;b.memoizedState=ii;b.child=e;return c}b.memoizedState=null;return b.child=Xg(b,a,e.children,c)}
function ki(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);pg(a.return,b)}function li(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailExpiration:0,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailExpiration=0,g.tailMode=e,g.lastEffect=f)}
function mi(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;R(a,b,d.children,c);d=M.current;if(0!==(d&2))d=d&1|2,b.effectTag|=64;else{if(null!==a&&0!==(a.effectTag&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&ki(a,c);else if(19===a.tag)ki(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(M,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===hh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);li(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===hh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}li(b,!0,c,null,f,b.lastEffect);break;case "together":li(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function $h(a,b,c){null!==a&&(b.dependencies=a.dependencies);var d=b.expirationTime;0!==d&&Bg(d);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw Error(u(153));if(null!==b.child){a=b.child;c=Sg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Sg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}var ni,oi,pi,qi;
ni=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};oi=function(){};
pi=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;ch($g.current);a=null;switch(c){case "input":f=zb(g,f);d=zb(g,d);a=[];break;case "option":f=Gb(g,f);d=Gb(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=Ib(g,f);d=Ib(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=sd)}od(c,d);var h,k;c=null;for(h in f)if(!d.hasOwnProperty(h)&&f.hasOwnProperty(h)&&null!=f[h])if("style"===
h)for(k in g=f[h],g)g.hasOwnProperty(k)&&(c||(c={}),c[k]="");else"dangerouslySetInnerHTML"!==h&&"children"!==h&&"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(va.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in d){var l=d[h];g=null!=f?f[h]:void 0;if(d.hasOwnProperty(h)&&l!==g&&(null!=l||null!=g))if("style"===h)if(g){for(k in g)!g.hasOwnProperty(k)||l&&l.hasOwnProperty(k)||(c||(c={}),c[k]="");for(k in l)l.hasOwnProperty(k)&&g[k]!==l[k]&&(c||(c={}),
c[k]=l[k])}else c||(a||(a=[]),a.push(h,c)),c=l;else"dangerouslySetInnerHTML"===h?(l=l?l.__html:void 0,g=g?g.__html:void 0,null!=l&&g!==l&&(a=a||[]).push(h,l)):"children"===h?g===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(h,""+l):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&(va.hasOwnProperty(h)?(null!=l&&rd(e,h),a||g===l||(a=[])):(a=a||[]).push(h,l))}c&&(a=a||[]).push("style",c);e=a;if(b.updateQueue=e)b.effectTag|=4}};
qi=function(a,b,c,d){c!==d&&(b.effectTag|=4)};function ri(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function si(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return L(b.type)&&Df(),null;case 3:return eh(),H(K),H(J),c=b.stateNode,c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),null!==a&&null!==a.child||!Wh(b)||(b.effectTag|=4),oi(b),null;case 5:gh(b);c=ch(bh.current);var e=b.type;if(null!==a&&null!=b.stateNode)pi(a,b,e,d,c),a.ref!==b.ref&&(b.effectTag|=128);else{if(!d){if(null===b.stateNode)throw Error(u(166));
return null}a=ch($g.current);if(Wh(b)){d=b.stateNode;e=b.type;var f=b.memoizedProps;d[Md]=b;d[Nd]=f;switch(e){case "iframe":case "object":case "embed":F("load",d);break;case "video":case "audio":for(a=0;a<ac.length;a++)F(ac[a],d);break;case "source":F("error",d);break;case "img":case "image":case "link":F("error",d);F("load",d);break;case "form":F("reset",d);F("submit",d);break;case "details":F("toggle",d);break;case "input":Ab(d,f);F("invalid",d);rd(c,"onChange");break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};F("invalid",d);rd(c,"onChange");break;case "textarea":Jb(d,f),F("invalid",d),rd(c,"onChange")}od(e,f);a=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(a=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(a=["children",""+h]):va.hasOwnProperty(g)&&null!=h&&rd(c,g)}switch(e){case "input":xb(d);Eb(d,f,!0);break;case "textarea":xb(d);Lb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&
(d.onclick=sd)}c=a;b.updateQueue=c;null!==c&&(b.effectTag|=4)}else{g=9===c.nodeType?c:c.ownerDocument;a===qd&&(a=Nb(e));a===qd?"script"===e?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(e,{is:d.is}):(a=g.createElement(e),"select"===e&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,e);a[Md]=b;a[Nd]=d;ni(a,b,!1,!1);b.stateNode=a;g=pd(e,d);switch(e){case "iframe":case "object":case "embed":F("load",
a);h=d;break;case "video":case "audio":for(h=0;h<ac.length;h++)F(ac[h],a);h=d;break;case "source":F("error",a);h=d;break;case "img":case "image":case "link":F("error",a);F("load",a);h=d;break;case "form":F("reset",a);F("submit",a);h=d;break;case "details":F("toggle",a);h=d;break;case "input":Ab(a,d);h=zb(a,d);F("invalid",a);rd(c,"onChange");break;case "option":h=Gb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};h=n({},d,{value:void 0});F("invalid",a);rd(c,"onChange");break;case "textarea":Jb(a,
d);h=Ib(a,d);F("invalid",a);rd(c,"onChange");break;default:h=d}od(e,h);var k=h;for(f in k)if(k.hasOwnProperty(f)){var l=k[f];"style"===f?md(a,l):"dangerouslySetInnerHTML"===f?(l=l?l.__html:void 0,null!=l&&Qb(a,l)):"children"===f?"string"===typeof l?("textarea"!==e||""!==l)&&Rb(a,l):"number"===typeof l&&Rb(a,""+l):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(va.hasOwnProperty(f)?null!=l&&rd(c,f):null!=l&&Xa(a,f,l,g))}switch(e){case "input":xb(a);Eb(a,d,!1);
break;case "textarea":xb(a);Lb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+rb(d.value));break;case "select":a.multiple=!!d.multiple;c=d.value;null!=c?Hb(a,!!d.multiple,c,!1):null!=d.defaultValue&&Hb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof h.onClick&&(a.onclick=sd)}Fd(e,d)&&(b.effectTag|=4)}null!==b.ref&&(b.effectTag|=128)}return null;case 6:if(a&&null!=b.stateNode)qi(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(u(166));
c=ch(bh.current);ch($g.current);Wh(b)?(c=b.stateNode,d=b.memoizedProps,c[Md]=b,c.nodeValue!==d&&(b.effectTag|=4)):(c=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),c[Md]=b,b.stateNode=c)}return null;case 13:H(M);d=b.memoizedState;if(0!==(b.effectTag&64))return b.expirationTime=c,b;c=null!==d;d=!1;null===a?void 0!==b.memoizedProps.fallback&&Wh(b):(e=a.memoizedState,d=null!==e,c||null===e||(e=a.child.sibling,null!==e&&(f=b.firstEffect,null!==f?(b.firstEffect=e,e.nextEffect=f):(b.firstEffect=b.lastEffect=
e,e.nextEffect=null),e.effectTag=8)));if(c&&!d&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(M.current&1))S===ti&&(S=ui);else{if(S===ti||S===ui)S=vi;0!==wi&&null!==T&&(xi(T,U),yi(T,wi))}if(c||d)b.effectTag|=4;return null;case 4:return eh(),oi(b),null;case 10:return og(b),null;case 17:return L(b.type)&&Df(),null;case 19:H(M);d=b.memoizedState;if(null===d)return null;e=0!==(b.effectTag&64);f=d.rendering;if(null===f)if(e)ri(d,!1);else{if(S!==ti||null!==a&&0!==(a.effectTag&
64))for(f=b.child;null!==f;){a=hh(f);if(null!==a){b.effectTag|=64;ri(d,!1);e=a.updateQueue;null!==e&&(b.updateQueue=e,b.effectTag|=4);null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;for(d=b.child;null!==d;)e=d,f=c,e.effectTag&=2,e.nextEffect=null,e.firstEffect=null,e.lastEffect=null,a=e.alternate,null===a?(e.childExpirationTime=0,e.expirationTime=f,e.child=null,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null):(e.childExpirationTime=a.childExpirationTime,
e.expirationTime=a.expirationTime,e.child=a.child,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,f=a.dependencies,e.dependencies=null===f?null:{expirationTime:f.expirationTime,firstContext:f.firstContext,responders:f.responders}),d=d.sibling;I(M,M.current&1|2);return b.child}f=f.sibling}}else{if(!e)if(a=hh(f),null!==a){if(b.effectTag|=64,e=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.effectTag|=4),ri(d,!0),null===d.tail&&"hidden"===d.tailMode&&!f.alternate)return b=
b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*$f()-d.renderingStartTime>d.tailExpiration&&1<c&&(b.effectTag|=64,e=!0,ri(d,!1),b.expirationTime=b.childExpirationTime=c-1);d.isBackwards?(f.sibling=b.child,b.child=f):(c=d.last,null!==c?c.sibling=f:b.child=f,d.last=f)}return null!==d.tail?(0===d.tailExpiration&&(d.tailExpiration=$f()+500),c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=$f(),c.sibling=null,b=M.current,I(M,e?b&1|2:b&1),c):null}throw Error(u(156,
b.tag));}function zi(a){switch(a.tag){case 1:L(a.type)&&Df();var b=a.effectTag;return b&4096?(a.effectTag=b&-4097|64,a):null;case 3:eh();H(K);H(J);b=a.effectTag;if(0!==(b&64))throw Error(u(285));a.effectTag=b&-4097|64;return a;case 5:return gh(a),null;case 13:return H(M),b=a.effectTag,b&4096?(a.effectTag=b&-4097|64,a):null;case 19:return H(M),null;case 4:return eh(),null;case 10:return og(a),null;default:return null}}function Ai(a,b){return{value:a,source:b,stack:qb(b)}}
var Bi="function"===typeof WeakSet?WeakSet:Set;function Ci(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=qb(c));null!==c&&pb(c.type);b=b.value;null!==a&&1===a.tag&&pb(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function Di(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){Ei(a,c)}}function Fi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Ei(a,c)}else b.current=null}
function Gi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:ig(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(u(163));}
function Hi(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.destroy;c.destroy=void 0;void 0!==d&&d()}c=c.next}while(c!==b)}}function Ii(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}
function Ji(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:Ii(3,c);return;case 1:a=c.stateNode;if(c.effectTag&4)if(null===b)a.componentDidMount();else{var d=c.elementType===c.type?b.memoizedProps:ig(c.type,b.memoizedProps);a.componentDidUpdate(d,b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}b=c.updateQueue;null!==b&&Cg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Cg(c,b,a)}return;
case 5:a=c.stateNode;null===b&&c.effectTag&4&&Fd(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Vc(c))));return;case 19:case 17:case 20:case 21:return}throw Error(u(163));}
function Ki(a,b,c){"function"===typeof Li&&Li(b);switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var d=a.next;cg(97<c?97:c,function(){var a=d;do{var c=a.destroy;if(void 0!==c){var g=b;try{c()}catch(h){Ei(g,h)}}a=a.next}while(a!==d)})}break;case 1:Fi(b);c=b.stateNode;"function"===typeof c.componentWillUnmount&&Di(b,c);break;case 5:Fi(b);break;case 4:Mi(a,b,c)}}
function Ni(a){var b=a.alternate;a.return=null;a.child=null;a.memoizedState=null;a.updateQueue=null;a.dependencies=null;a.alternate=null;a.firstEffect=null;a.lastEffect=null;a.pendingProps=null;a.memoizedProps=null;a.stateNode=null;null!==b&&Ni(b)}function Oi(a){return 5===a.tag||3===a.tag||4===a.tag}
function Pi(a){a:{for(var b=a.return;null!==b;){if(Oi(b)){var c=b;break a}b=b.return}throw Error(u(160));}b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(u(161));}c.effectTag&16&&(Rb(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Oi(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}d?Qi(a,c,b):Ri(a,c,b)}
function Qi(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=sd));else if(4!==d&&(a=a.child,null!==a))for(Qi(a,b,c),a=a.sibling;null!==a;)Qi(a,b,c),a=a.sibling}
function Ri(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Ri(a,b,c),a=a.sibling;null!==a;)Ri(a,b,c),a=a.sibling}
function Mi(a,b,c){for(var d=b,e=!1,f,g;;){if(!e){e=d.return;a:for(;;){if(null===e)throw Error(u(160));f=e.stateNode;switch(e.tag){case 5:g=!1;break a;case 3:f=f.containerInfo;g=!0;break a;case 4:f=f.containerInfo;g=!0;break a}e=e.return}e=!0}if(5===d.tag||6===d.tag){a:for(var h=a,k=d,l=c,m=k;;)if(Ki(h,m,l),null!==m.child&&4!==m.tag)m.child.return=m,m=m.child;else{if(m===k)break a;for(;null===m.sibling;){if(null===m.return||m.return===k)break a;m=m.return}m.sibling.return=m.return;m=m.sibling}g?(h=
f,k=d.stateNode,8===h.nodeType?h.parentNode.removeChild(k):h.removeChild(k)):f.removeChild(d.stateNode)}else if(4===d.tag){if(null!==d.child){f=d.stateNode.containerInfo;g=!0;d.child.return=d;d=d.child;continue}}else if(Ki(a,d,c),null!==d.child){d.child.return=d;d=d.child;continue}if(d===b)break;for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return;4===d.tag&&(e=!1)}d.sibling.return=d.return;d=d.sibling}}
function Si(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:Hi(3,b);return;case 1:return;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Nd]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Bb(c,d);pd(a,e);b=pd(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?md(c,h):"dangerouslySetInnerHTML"===g?Qb(c,h):"children"===g?Rb(c,h):Xa(c,g,h,b)}switch(a){case "input":Cb(c,d);break;
case "textarea":Kb(c,d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?Hb(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?Hb(c,!!d.multiple,d.defaultValue,!0):Hb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(u(162));b.stateNode.nodeValue=b.memoizedProps;return;case 3:b=b.stateNode;b.hydrate&&(b.hydrate=!1,Vc(b.containerInfo));return;case 12:return;case 13:c=b;null===b.memoizedState?
d=!1:(d=!0,c=b.child,Ti=$f());if(null!==c)a:for(a=c;;){if(5===a.tag)f=a.stateNode,d?(f=f.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(f=a.stateNode,e=a.memoizedProps.style,e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null,f.style.display=ld("display",e));else if(6===a.tag)a.stateNode.nodeValue=d?"":a.memoizedProps;else if(13===a.tag&&null!==a.memoizedState&&null===a.memoizedState.dehydrated){f=a.child.sibling;f.return=a;a=
f;continue}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===c)break;for(;null===a.sibling;){if(null===a.return||a.return===c)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}Ui(b);return;case 19:Ui(b);return;case 17:return}throw Error(u(163));}function Ui(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Bi);b.forEach(function(b){var d=Vi.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
var Wi="function"===typeof WeakMap?WeakMap:Map;function Xi(a,b,c){c=wg(c,null);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Yi||(Yi=!0,Zi=d);Ci(a,b)};return c}
function $i(a,b,c){c=wg(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ci(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===aj?aj=new Set([this]):aj.add(this),Ci(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
var bj=Math.ceil,cj=Wa.ReactCurrentDispatcher,dj=Wa.ReactCurrentOwner,V=0,ej=8,fj=16,gj=32,ti=0,hj=1,ij=2,ui=3,vi=4,jj=5,W=V,T=null,X=null,U=0,S=ti,kj=null,lj=1073741823,mj=1073741823,nj=null,wi=0,oj=!1,Ti=0,pj=500,Y=null,Yi=!1,Zi=null,aj=null,qj=!1,rj=null,sj=90,tj=null,uj=0,vj=null,wj=0;function Gg(){return(W&(fj|gj))!==V?1073741821-($f()/10|0):0!==wj?wj:wj=1073741821-($f()/10|0)}
function Hg(a,b,c){b=b.mode;if(0===(b&2))return 1073741823;var d=ag();if(0===(b&4))return 99===d?1073741823:1073741822;if((W&fj)!==V)return U;if(null!==c)a=hg(a,c.timeoutMs|0||5E3,250);else switch(d){case 99:a=1073741823;break;case 98:a=hg(a,150,100);break;case 97:case 96:a=hg(a,5E3,250);break;case 95:a=2;break;default:throw Error(u(326));}null!==T&&a===U&&--a;return a}
function Ig(a,b){if(50<uj)throw uj=0,vj=null,Error(u(185));a=xj(a,b);if(null!==a){var c=ag();1073741823===b?(W&ej)!==V&&(W&(fj|gj))===V?yj(a):(Z(a),W===V&&gg()):Z(a);(W&4)===V||98!==c&&99!==c||(null===tj?tj=new Map([[a,b]]):(c=tj.get(a),(void 0===c||c>b)&&tj.set(a,b)))}}
function xj(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}null!==e&&(T===e&&(Bg(b),S===vi&&xi(e,U)),yi(e,b));return e}
function zj(a){var b=a.lastExpiredTime;if(0!==b)return b;b=a.firstPendingTime;if(!Aj(a,b))return b;var c=a.lastPingedTime;a=a.nextKnownPendingLevel;a=c>a?c:a;return 2>=a&&b!==a?0:a}
function Z(a){if(0!==a.lastExpiredTime)a.callbackExpirationTime=1073741823,a.callbackPriority=99,a.callbackNode=eg(yj.bind(null,a));else{var b=zj(a),c=a.callbackNode;if(0===b)null!==c&&(a.callbackNode=null,a.callbackExpirationTime=0,a.callbackPriority=90);else{var d=Gg();1073741823===b?d=99:1===b||2===b?d=95:(d=10*(1073741821-b)-10*(1073741821-d),d=0>=d?99:250>=d?98:5250>=d?97:95);if(null!==c){var e=a.callbackPriority;if(a.callbackExpirationTime===b&&e>=d)return;c!==Tf&&Kf(c)}a.callbackExpirationTime=
b;a.callbackPriority=d;b=1073741823===b?eg(yj.bind(null,a)):dg(d,Bj.bind(null,a),{timeout:10*(1073741821-b)-$f()});a.callbackNode=b}}}
function Bj(a,b){wj=0;if(b)return b=Gg(),Cj(a,b),Z(a),null;var c=zj(a);if(0!==c){b=a.callbackNode;if((W&(fj|gj))!==V)throw Error(u(327));Dj();a===T&&c===U||Ej(a,c);if(null!==X){var d=W;W|=fj;var e=Fj();do try{Gj();break}catch(h){Hj(a,h)}while(1);ng();W=d;cj.current=e;if(S===hj)throw b=kj,Ej(a,c),xi(a,c),Z(a),b;if(null===X)switch(e=a.finishedWork=a.current.alternate,a.finishedExpirationTime=c,d=S,T=null,d){case ti:case hj:throw Error(u(345));case ij:Cj(a,2<c?2:c);break;case ui:xi(a,c);d=a.lastSuspendedTime;
c===d&&(a.nextKnownPendingLevel=Ij(e));if(1073741823===lj&&(e=Ti+pj-$f(),10<e)){if(oj){var f=a.lastPingedTime;if(0===f||f>=c){a.lastPingedTime=c;Ej(a,c);break}}f=zj(a);if(0!==f&&f!==c)break;if(0!==d&&d!==c){a.lastPingedTime=d;break}a.timeoutHandle=Hd(Jj.bind(null,a),e);break}Jj(a);break;case vi:xi(a,c);d=a.lastSuspendedTime;c===d&&(a.nextKnownPendingLevel=Ij(e));if(oj&&(e=a.lastPingedTime,0===e||e>=c)){a.lastPingedTime=c;Ej(a,c);break}e=zj(a);if(0!==e&&e!==c)break;if(0!==d&&d!==c){a.lastPingedTime=
d;break}1073741823!==mj?d=10*(1073741821-mj)-$f():1073741823===lj?d=0:(d=10*(1073741821-lj)-5E3,e=$f(),c=10*(1073741821-c)-e,d=e-d,0>d&&(d=0),d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*bj(d/1960))-d,c<d&&(d=c));if(10<d){a.timeoutHandle=Hd(Jj.bind(null,a),d);break}Jj(a);break;case jj:if(1073741823!==lj&&null!==nj){f=lj;var g=nj;d=g.busyMinDurationMs|0;0>=d?d=0:(e=g.busyDelayMs|0,f=$f()-(10*(1073741821-f)-(g.timeoutMs|0||5E3)),d=f<=e?0:e+d-f);if(10<d){xi(a,c);a.timeoutHandle=
Hd(Jj.bind(null,a),d);break}}Jj(a);break;default:throw Error(u(329));}Z(a);if(a.callbackNode===b)return Bj.bind(null,a)}}return null}
function yj(a){var b=a.lastExpiredTime;b=0!==b?b:1073741823;if((W&(fj|gj))!==V)throw Error(u(327));Dj();a===T&&b===U||Ej(a,b);if(null!==X){var c=W;W|=fj;var d=Fj();do try{Kj();break}catch(e){Hj(a,e)}while(1);ng();W=c;cj.current=d;if(S===hj)throw c=kj,Ej(a,b),xi(a,b),Z(a),c;if(null!==X)throw Error(u(261));a.finishedWork=a.current.alternate;a.finishedExpirationTime=b;T=null;Jj(a);Z(a)}return null}function Lj(){if(null!==tj){var a=tj;tj=null;a.forEach(function(a,c){Cj(c,a);Z(c)});gg()}}
function Mj(a,b){var c=W;W|=1;try{return a(b)}finally{W=c,W===V&&gg()}}function Nj(a,b){var c=W;W&=-2;W|=ej;try{return a(b)}finally{W=c,W===V&&gg()}}
function Ej(a,b){a.finishedWork=null;a.finishedExpirationTime=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Id(c));if(null!==X)for(c=X.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Df();break;case 3:eh();H(K);H(J);break;case 5:gh(d);break;case 4:eh();break;case 13:H(M);break;case 19:H(M);break;case 10:og(d)}c=c.return}T=a;X=Sg(a.current,null);U=b;S=ti;kj=null;mj=lj=1073741823;nj=null;wi=0;oj=!1}
function Hj(a,b){do{try{ng();jh.current=sh;if(mh)for(var c=N.memoizedState;null!==c;){var d=c.queue;null!==d&&(d.pending=null);c=c.next}lh=0;P=O=N=null;mh=!1;if(null===X||null===X.return)return S=hj,kj=b,X=null;a:{var e=a,f=X.return,g=X,h=b;b=U;g.effectTag|=2048;g.firstEffect=g.lastEffect=null;if(null!==h&&"object"===typeof h&&"function"===typeof h.then){var k=h;if(0===(g.mode&2)){var l=g.alternate;l?(g.updateQueue=l.updateQueue,g.memoizedState=l.memoizedState,g.expirationTime=l.expirationTime):(g.updateQueue=
null,g.memoizedState=null)}var m=0!==(M.current&1),p=f;do{var x;if(x=13===p.tag){var z=p.memoizedState;if(null!==z)x=null!==z.dehydrated?!0:!1;else{var ca=p.memoizedProps;x=void 0===ca.fallback?!1:!0!==ca.unstable_avoidThisFallback?!0:m?!1:!0}}if(x){var D=p.updateQueue;if(null===D){var t=new Set;t.add(k);p.updateQueue=t}else D.add(k);if(0===(p.mode&2)){p.effectTag|=64;g.effectTag&=-2981;if(1===g.tag)if(null===g.alternate)g.tag=17;else{var y=wg(1073741823,null);y.tag=2;xg(g,y)}g.expirationTime=1073741823;
break a}h=void 0;g=b;var A=e.pingCache;null===A?(A=e.pingCache=new Wi,h=new Set,A.set(k,h)):(h=A.get(k),void 0===h&&(h=new Set,A.set(k,h)));if(!h.has(g)){h.add(g);var q=Oj.bind(null,e,k,g);k.then(q,q)}p.effectTag|=4096;p.expirationTime=b;break a}p=p.return}while(null!==p);h=Error((pb(g.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+qb(g))}S!==
jj&&(S=ij);h=Ai(h,g);p=f;do{switch(p.tag){case 3:k=h;p.effectTag|=4096;p.expirationTime=b;var B=Xi(p,k,b);yg(p,B);break a;case 1:k=h;var w=p.type,ub=p.stateNode;if(0===(p.effectTag&64)&&("function"===typeof w.getDerivedStateFromError||null!==ub&&"function"===typeof ub.componentDidCatch&&(null===aj||!aj.has(ub)))){p.effectTag|=4096;p.expirationTime=b;var vb=$i(p,k,b);yg(p,vb);break a}}p=p.return}while(null!==p)}X=Pj(X)}catch(Xc){b=Xc;continue}break}while(1)}
function Fj(){var a=cj.current;cj.current=sh;return null===a?sh:a}function Ag(a,b){a<lj&&2<a&&(lj=a);null!==b&&a<mj&&2<a&&(mj=a,nj=b)}function Bg(a){a>wi&&(wi=a)}function Kj(){for(;null!==X;)X=Qj(X)}function Gj(){for(;null!==X&&!Uf();)X=Qj(X)}function Qj(a){var b=Rj(a.alternate,a,U);a.memoizedProps=a.pendingProps;null===b&&(b=Pj(a));dj.current=null;return b}
function Pj(a){X=a;do{var b=X.alternate;a=X.return;if(0===(X.effectTag&2048)){b=si(b,X,U);if(1===U||1!==X.childExpirationTime){for(var c=0,d=X.child;null!==d;){var e=d.expirationTime,f=d.childExpirationTime;e>c&&(c=e);f>c&&(c=f);d=d.sibling}X.childExpirationTime=c}if(null!==b)return b;null!==a&&0===(a.effectTag&2048)&&(null===a.firstEffect&&(a.firstEffect=X.firstEffect),null!==X.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=X.firstEffect),a.lastEffect=X.lastEffect),1<X.effectTag&&(null!==
a.lastEffect?a.lastEffect.nextEffect=X:a.firstEffect=X,a.lastEffect=X))}else{b=zi(X);if(null!==b)return b.effectTag&=2047,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=2048)}b=X.sibling;if(null!==b)return b;X=a}while(null!==X);S===ti&&(S=jj);return null}function Ij(a){var b=a.expirationTime;a=a.childExpirationTime;return b>a?b:a}function Jj(a){var b=ag();cg(99,Sj.bind(null,a,b));return null}
function Sj(a,b){do Dj();while(null!==rj);if((W&(fj|gj))!==V)throw Error(u(327));var c=a.finishedWork,d=a.finishedExpirationTime;if(null===c)return null;a.finishedWork=null;a.finishedExpirationTime=0;if(c===a.current)throw Error(u(177));a.callbackNode=null;a.callbackExpirationTime=0;a.callbackPriority=90;a.nextKnownPendingLevel=0;var e=Ij(c);a.firstPendingTime=e;d<=a.lastSuspendedTime?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:d<=a.firstSuspendedTime&&(a.firstSuspendedTime=
d-1);d<=a.lastPingedTime&&(a.lastPingedTime=0);d<=a.lastExpiredTime&&(a.lastExpiredTime=0);a===T&&(X=T=null,U=0);1<c.effectTag?null!==c.lastEffect?(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;if(null!==e){var f=W;W|=gj;dj.current=null;Dd=fd;var g=xd();if(yd(g)){if("selectionStart"in g)var h={start:g.selectionStart,end:g.selectionEnd};else a:{h=(h=g.ownerDocument)&&h.defaultView||window;var k=h.getSelection&&h.getSelection();if(k&&0!==k.rangeCount){h=k.anchorNode;var l=k.anchorOffset,
m=k.focusNode;k=k.focusOffset;try{h.nodeType,m.nodeType}catch(wb){h=null;break a}var p=0,x=-1,z=-1,ca=0,D=0,t=g,y=null;b:for(;;){for(var A;;){t!==h||0!==l&&3!==t.nodeType||(x=p+l);t!==m||0!==k&&3!==t.nodeType||(z=p+k);3===t.nodeType&&(p+=t.nodeValue.length);if(null===(A=t.firstChild))break;y=t;t=A}for(;;){if(t===g)break b;y===h&&++ca===l&&(x=p);y===m&&++D===k&&(z=p);if(null!==(A=t.nextSibling))break;t=y;y=t.parentNode}t=A}h=-1===x||-1===z?null:{start:x,end:z}}else h=null}h=h||{start:0,end:0}}else h=
null;Ed={activeElementDetached:null,focusedElem:g,selectionRange:h};fd=!1;Y=e;do try{Tj()}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);Y=e;do try{for(g=a,h=b;null!==Y;){var q=Y.effectTag;q&16&&Rb(Y.stateNode,"");if(q&128){var B=Y.alternate;if(null!==B){var w=B.ref;null!==w&&("function"===typeof w?w(null):w.current=null)}}switch(q&1038){case 2:Pi(Y);Y.effectTag&=-3;break;case 6:Pi(Y);Y.effectTag&=-3;Si(Y.alternate,Y);break;case 1024:Y.effectTag&=-1025;break;case 1028:Y.effectTag&=
-1025;Si(Y.alternate,Y);break;case 4:Si(Y.alternate,Y);break;case 8:l=Y,Mi(g,l,h),Ni(l)}Y=Y.nextEffect}}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);w=Ed;B=xd();q=w.focusedElem;h=w.selectionRange;if(B!==q&&q&&q.ownerDocument&&wd(q.ownerDocument.documentElement,q)){null!==h&&yd(q)&&(B=h.start,w=h.end,void 0===w&&(w=B),"selectionStart"in q?(q.selectionStart=B,q.selectionEnd=Math.min(w,q.value.length)):(w=(B=q.ownerDocument||document)&&B.defaultView||window,w.getSelection&&
(w=w.getSelection(),l=q.textContent.length,g=Math.min(h.start,l),h=void 0===h.end?g:Math.min(h.end,l),!w.extend&&g>h&&(l=h,h=g,g=l),l=vd(q,g),m=vd(q,h),l&&m&&(1!==w.rangeCount||w.anchorNode!==l.node||w.anchorOffset!==l.offset||w.focusNode!==m.node||w.focusOffset!==m.offset)&&(B=B.createRange(),B.setStart(l.node,l.offset),w.removeAllRanges(),g>h?(w.addRange(B),w.extend(m.node,m.offset)):(B.setEnd(m.node,m.offset),w.addRange(B))))));B=[];for(w=q;w=w.parentNode;)1===w.nodeType&&B.push({element:w,left:w.scrollLeft,
top:w.scrollTop});"function"===typeof q.focus&&q.focus();for(q=0;q<B.length;q++)w=B[q],w.element.scrollLeft=w.left,w.element.scrollTop=w.top}fd=!!Dd;Ed=Dd=null;a.current=c;Y=e;do try{for(q=a;null!==Y;){var ub=Y.effectTag;ub&36&&Ji(q,Y.alternate,Y);if(ub&128){B=void 0;var vb=Y.ref;if(null!==vb){var Xc=Y.stateNode;switch(Y.tag){case 5:B=Xc;break;default:B=Xc}"function"===typeof vb?vb(B):vb.current=B}}Y=Y.nextEffect}}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);Y=
null;Vf();W=f}else a.current=c;if(qj)qj=!1,rj=a,sj=b;else for(Y=e;null!==Y;)b=Y.nextEffect,Y.nextEffect=null,Y=b;b=a.firstPendingTime;0===b&&(aj=null);1073741823===b?a===vj?uj++:(uj=0,vj=a):uj=0;"function"===typeof Uj&&Uj(c.stateNode,d);Z(a);if(Yi)throw Yi=!1,a=Zi,Zi=null,a;if((W&ej)!==V)return null;gg();return null}function Tj(){for(;null!==Y;){var a=Y.effectTag;0!==(a&256)&&Gi(Y.alternate,Y);0===(a&512)||qj||(qj=!0,dg(97,function(){Dj();return null}));Y=Y.nextEffect}}
function Dj(){if(90!==sj){var a=97<sj?97:sj;sj=90;return cg(a,Vj)}}function Vj(){if(null===rj)return!1;var a=rj;rj=null;if((W&(fj|gj))!==V)throw Error(u(331));var b=W;W|=gj;for(a=a.current.firstEffect;null!==a;){try{var c=a;if(0!==(c.effectTag&512))switch(c.tag){case 0:case 11:case 15:case 22:Hi(5,c),Ii(5,c)}}catch(d){if(null===a)throw Error(u(330));Ei(a,d)}c=a.nextEffect;a.nextEffect=null;a=c}W=b;gg();return!0}
function Wj(a,b,c){b=Ai(c,b);b=Xi(a,b,1073741823);xg(a,b);a=xj(a,1073741823);null!==a&&Z(a)}function Ei(a,b){if(3===a.tag)Wj(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){Wj(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===aj||!aj.has(d))){a=Ai(b,a);a=$i(c,a,1073741823);xg(c,a);c=xj(c,1073741823);null!==c&&Z(c);break}}c=c.return}}
function Oj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);T===a&&U===c?S===vi||S===ui&&1073741823===lj&&$f()-Ti<pj?Ej(a,U):oj=!0:Aj(a,c)&&(b=a.lastPingedTime,0!==b&&b<c||(a.lastPingedTime=c,Z(a)))}function Vi(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=Gg(),b=Hg(b,a,null));a=xj(a,b);null!==a&&Z(a)}var Rj;
Rj=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==e||K.current)rg=!0;else{if(d<c){rg=!1;switch(b.tag){case 3:hi(b);Xh();break;case 5:fh(b);if(b.mode&4&&1!==c&&e.hidden)return b.expirationTime=b.childExpirationTime=1,null;break;case 1:L(b.type)&&Gf(b);break;case 4:dh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;e=b.type._context;I(jg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;
if(0!==d&&d>=c)return ji(a,b,c);I(M,M.current&1);b=$h(a,b,c);return null!==b?b.sibling:null}I(M,M.current&1);break;case 19:d=b.childExpirationTime>=c;if(0!==(a.effectTag&64)){if(d)return mi(a,b,c);b.effectTag|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);I(M,M.current);if(!d)return null}return $h(a,b,c)}rg=!1}}else rg=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Cf(b,J.current);qg(b,c);e=oh(null,
b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(L(d)){var f=!0;Gf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;ug(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Fg(b,d,g,a);e.updater=Jg;b.stateNode=e;e._reactInternalFiber=b;Ng(b,d,a,c);b=gi(null,b,d,!0,f,c)}else b.tag=0,R(null,b,e,c),b=b.child;return b;case 16:a:{e=b.elementType;null!==a&&(a.alternate=
null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;ob(e);if(1!==e._status)throw e._result;e=e._result;b.type=e;f=b.tag=Xj(e);a=ig(e,a);switch(f){case 0:b=di(null,b,e,a,c);break a;case 1:b=fi(null,b,e,a,c);break a;case 11:b=Zh(null,b,e,a,c);break a;case 14:b=ai(null,b,e,ig(e.type,a),d,c);break a}throw Error(u(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),di(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),fi(a,b,d,e,c);
case 3:hi(b);d=b.updateQueue;if(null===a||null===d)throw Error(u(282));d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;vg(a,b);zg(b,d,null,c);d=b.memoizedState.element;if(d===e)Xh(),b=$h(a,b,c);else{if(e=b.stateNode.hydrate)Ph=Jd(b.stateNode.containerInfo.firstChild),Oh=b,e=Qh=!0;if(e)for(c=Yg(b,null,d,c),b.child=c;c;)c.effectTag=c.effectTag&-3|1024,c=c.sibling;else R(a,b,d,c),Xh();b=b.child}return b;case 5:return fh(b),null===a&&Uh(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:
null,g=e.children,Gd(d,e)?g=null:null!==f&&Gd(d,f)&&(b.effectTag|=16),ei(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(R(a,b,g,c),b=b.child),b;case 6:return null===a&&Uh(b),null;case 13:return ji(a,b,c);case 4:return dh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Xg(b,null,d,c):R(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),Zh(a,b,d,e,c);case 7:return R(a,b,b.pendingProps,c),b.child;case 8:return R(a,
b,b.pendingProps.children,c),b.child;case 12:return R(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(jg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=$e(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!K.current){b=$h(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==
k){g=h.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=wg(c,null),l.tag=2,xg(h,l));h.expirationTime<c&&(h.expirationTime=c);l=h.alternate;null!==l&&l.expirationTime<c&&(l.expirationTime=c);pg(h.return,c);k.expirationTime<c&&(k.expirationTime=c);break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=
g}R(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,qg(b,c),e=sg(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,R(a,b,d,c),b.child;case 14:return e=b.type,f=ig(e,b.pendingProps),f=ig(e.type,f),ai(a,b,e,f,d,c);case 15:return ci(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,L(d)?(a=!0,Gf(b)):a=!1,qg(b,c),Lg(b,d,e),Ng(b,d,e,c),gi(null,
b,d,!0,a,c);case 19:return mi(a,b,c)}throw Error(u(156,b.tag));};var Uj=null,Li=null;function Yj(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Uj=function(a){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64))}catch(e){}};Li=function(a){try{b.onCommitFiberUnmount(c,a)}catch(e){}}}catch(d){}return!0}
function Zj(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function Sh(a,b,c,d){return new Zj(a,b,c,d)}
function bi(a){a=a.prototype;return!(!a||!a.isReactComponent)}function Xj(a){if("function"===typeof a)return bi(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===gb)return 11;if(a===jb)return 14}return 2}
function Sg(a,b){var c=a.alternate;null===c?(c=Sh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,
firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Ug(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)bi(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ab:return Wg(c.children,e,f,b);case fb:g=8;e|=7;break;case bb:g=8;e|=1;break;case cb:return a=Sh(12,c,b,e|8),a.elementType=cb,a.type=cb,a.expirationTime=f,a;case hb:return a=Sh(13,c,b,e),a.type=hb,a.elementType=hb,a.expirationTime=f,a;case ib:return a=Sh(19,c,b,e),a.elementType=ib,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case db:g=
10;break a;case eb:g=9;break a;case gb:g=11;break a;case jb:g=14;break a;case kb:g=16;d=null;break a;case lb:g=22;break a}throw Error(u(130,null==a?a:typeof a,""));}b=Sh(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Wg(a,b,c,d){a=Sh(7,a,d,b);a.expirationTime=c;return a}function Tg(a,b,c){a=Sh(6,a,null,b);a.expirationTime=c;return a}
function Vg(a,b,c){b=Sh(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function ak(a,b,c){this.tag=b;this.current=null;this.containerInfo=a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=90;this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}
function Aj(a,b){var c=a.firstSuspendedTime;a=a.lastSuspendedTime;return 0!==c&&c>=b&&a<=b}function xi(a,b){var c=a.firstSuspendedTime,d=a.lastSuspendedTime;c<b&&(a.firstSuspendedTime=b);if(d>b||0===c)a.lastSuspendedTime=b;b<=a.lastPingedTime&&(a.lastPingedTime=0);b<=a.lastExpiredTime&&(a.lastExpiredTime=0)}
function yi(a,b){b>a.firstPendingTime&&(a.firstPendingTime=b);var c=a.firstSuspendedTime;0!==c&&(b>=c?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:b>=a.lastSuspendedTime&&(a.lastSuspendedTime=b+1),b>a.nextKnownPendingLevel&&(a.nextKnownPendingLevel=b))}function Cj(a,b){var c=a.lastExpiredTime;if(0===c||c>b)a.lastExpiredTime=b}
function bk(a,b,c,d){var e=b.current,f=Gg(),g=Dg.suspense;f=Hg(f,e,g);a:if(c){c=c._reactInternalFiber;b:{if(dc(c)!==c||1!==c.tag)throw Error(u(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(L(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(u(171));}if(1===c.tag){var k=c.type;if(L(k)){c=Ff(c,k,h);break a}}c=h}else c=Af;null===b.context?b.context=c:b.pendingContext=c;b=wg(f,g);b.payload={element:a};d=void 0===
d?null:d;null!==d&&(b.callback=d);xg(e,b);Ig(e,f);return f}function ck(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function dk(a,b){a=a.memoizedState;null!==a&&null!==a.dehydrated&&a.retryTime<b&&(a.retryTime=b)}function ek(a,b){dk(a,b);(a=a.alternate)&&dk(a,b)}
function fk(a,b,c){c=null!=c&&!0===c.hydrate;var d=new ak(a,b,c),e=Sh(3,null,null,2===b?7:1===b?3:0);d.current=e;e.stateNode=d;ug(e);a[Od]=d.current;c&&0!==b&&Jc(a,9===a.nodeType?a:a.ownerDocument);this._internalRoot=d}fk.prototype.render=function(a){bk(a,this._internalRoot,null,null)};fk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;bk(null,a,null,function(){b[Od]=null})};
function gk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function hk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new fk(a,0,b?{hydrate:!0}:void 0)}
function ik(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=ck(g);h.call(a)}}bk(b,g,a,e)}else{f=c._reactRootContainer=hk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=ck(g);k.call(a)}}Nj(function(){bk(b,g,a,e)})}return ck(g)}function jk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:$a,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
wc=function(a){if(13===a.tag){var b=hg(Gg(),150,100);Ig(a,b);ek(a,b)}};xc=function(a){13===a.tag&&(Ig(a,3),ek(a,3))};yc=function(a){if(13===a.tag){var b=Gg();b=Hg(b,a,null);Ig(a,b);ek(a,b)}};
za=function(a,b,c){switch(b){case "input":Cb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Qd(d);if(!e)throw Error(u(90));yb(d);Cb(d,e)}}}break;case "textarea":Kb(a,c);break;case "select":b=c.value,null!=b&&Hb(a,!!c.multiple,b,!1)}};Fa=Mj;
Ga=function(a,b,c,d,e){var f=W;W|=4;try{return cg(98,a.bind(null,b,c,d,e))}finally{W=f,W===V&&gg()}};Ha=function(){(W&(1|fj|gj))===V&&(Lj(),Dj())};Ia=function(a,b){var c=W;W|=2;try{return a(b)}finally{W=c,W===V&&gg()}};function kk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!gk(b))throw Error(u(200));return jk(a,b,null,c)}var lk={Events:[Nc,Pd,Qd,xa,ta,Xd,function(a){jc(a,Wd)},Da,Ea,id,mc,Dj,{current:!1}]};
(function(a){var b=a.findFiberByHostInstance;return Yj(n({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wa.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=hc(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:tc,bundleType:0,version:"16.14.0",
rendererPackageName:"react-dom"});exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lk;exports.createPortal=kk;exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw Error(u(188));throw Error(u(268,Object.keys(a)));}a=hc(b);a=null===a?null:a.stateNode;return a};
exports.flushSync=function(a,b){if((W&(fj|gj))!==V)throw Error(u(187));var c=W;W|=1;try{return cg(99,a.bind(null,b))}finally{W=c,gg()}};exports.hydrate=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!0,c)};exports.render=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!1,c)};
exports.unmountComponentAtNode=function(a){if(!gk(a))throw Error(u(40));return a._reactRootContainer?(Nj(function(){ik(null,null,a,!1,function(){a._reactRootContainer=null;a[Od]=null})}),!0):!1};exports.unstable_batchedUpdates=Mj;exports.unstable_createPortal=function(a,b){return kk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!gk(c))throw Error(u(200));if(null==a||void 0===a._reactInternalFiber)throw Error(u(38));return ik(a,b,c,!1,d)};exports.version="16.14.0";


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(147);
} else {}


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var f,g,h,k,l;
if("undefined"===typeof window||"function"!==typeof MessageChannel){var p=null,q=null,t=function(){if(null!==p)try{var a=exports.unstable_now();p(!0,a);p=null}catch(b){throw setTimeout(t,0),b;}},u=Date.now();exports.unstable_now=function(){return Date.now()-u};f=function(a){null!==p?setTimeout(f,0,a):(p=a,setTimeout(t,0))};g=function(a,b){q=setTimeout(a,b)};h=function(){clearTimeout(q)};k=function(){return!1};l=exports.unstable_forceFrameRate=function(){}}else{var w=window.performance,x=window.Date,
y=window.setTimeout,z=window.clearTimeout;if("undefined"!==typeof console){var A=window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");"function"!==typeof A&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"===
typeof w&&"function"===typeof w.now)exports.unstable_now=function(){return w.now()};else{var B=x.now();exports.unstable_now=function(){return x.now()-B}}var C=!1,D=null,E=-1,F=5,G=0;k=function(){return exports.unstable_now()>=G};l=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):F=0<a?Math.floor(1E3/a):5};var H=new MessageChannel,I=H.port2;H.port1.onmessage=
function(){if(null!==D){var a=exports.unstable_now();G=a+F;try{D(!0,a)?I.postMessage(null):(C=!1,D=null)}catch(b){throw I.postMessage(null),b;}}else C=!1};f=function(a){D=a;C||(C=!0,I.postMessage(null))};g=function(a,b){E=y(function(){a(exports.unstable_now())},b)};h=function(){z(E);E=-1}}function J(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<K(e,b))a[d]=b,a[c]=e,c=d;else break a}}function L(a){a=a[0];return void 0===a?null:a}
function M(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>K(n,c))void 0!==r&&0>K(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>K(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function K(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var N=[],O=[],P=1,Q=null,R=3,S=!1,T=!1,U=!1;
function V(a){for(var b=L(O);null!==b;){if(null===b.callback)M(O);else if(b.startTime<=a)M(O),b.sortIndex=b.expirationTime,J(N,b);else break;b=L(O)}}function W(a){U=!1;V(a);if(!T)if(null!==L(N))T=!0,f(X);else{var b=L(O);null!==b&&g(W,b.startTime-a)}}
function X(a,b){T=!1;U&&(U=!1,h());S=!0;var c=R;try{V(b);for(Q=L(N);null!==Q&&(!(Q.expirationTime>b)||a&&!k());){var d=Q.callback;if(null!==d){Q.callback=null;R=Q.priorityLevel;var e=d(Q.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?Q.callback=e:Q===L(N)&&M(N);V(b)}else M(N);Q=L(N)}if(null!==Q)var m=!0;else{var n=L(O);null!==n&&g(W,n.startTime-b);m=!1}return m}finally{Q=null,R=c,S=!1}}
function Y(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}var Z=l;exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){T||S||(T=!0,f(X))};
exports.unstable_getCurrentPriorityLevel=function(){return R};exports.unstable_getFirstCallbackNode=function(){return L(N)};exports.unstable_next=function(a){switch(R){case 1:case 2:case 3:var b=3;break;default:b=R}var c=R;R=b;try{return a()}finally{R=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=Z;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=R;R=a;try{return b()}finally{R=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();if("object"===typeof c&&null!==c){var e=c.delay;e="number"===typeof e&&0<e?d+e:d;c="number"===typeof c.timeout?c.timeout:Y(a)}else c=Y(a),e=d;c=e+c;a={id:P++,callback:b,priorityLevel:a,startTime:e,expirationTime:c,sortIndex:-1};e>d?(a.sortIndex=e,J(O,a),null===L(N)&&a===L(O)&&(U?h():U=!0,g(W,e-d))):(a.sortIndex=c,J(N,a),T||S||(T=!0,f(X)));return a};
exports.unstable_shouldYield=function(){var a=exports.unstable_now();V(a);var b=L(N);return b!==Q&&null!==Q&&null!==b&&null!==b.callback&&b.startTime<=a&&b.expirationTime<Q.expirationTime||k()};exports.unstable_wrapCallback=function(a){var b=R;return function(){var c=R;R=b;try{return a.apply(this,arguments)}finally{R=c}}};


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(14);
var anObject = __webpack_require__(12);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(47)(Function.call, __webpack_require__(35).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(4).document;
module.exports = document && document.documentElement;


/***/ }),
/* 150 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(21)('meta');
var isObject = __webpack_require__(14);
var has = __webpack_require__(18);
var setDesc = __webpack_require__(7).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(8)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var core = __webpack_require__(23);
var LIBRARY = __webpack_require__(25);
var wksExt = __webpack_require__(97);
var defineProperty = __webpack_require__(7).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(26);
var gOPS = __webpack_require__(50);
var pIE = __webpack_require__(51);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(19);
var gOPN = __webpack_require__(39).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(36);
var descriptor = __webpack_require__(24);
var setToStringTag = __webpack_require__(56);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(11)(IteratorPrototype, __webpack_require__(3)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(3)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(11)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 157 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(159);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
var isArray = __webpack_require__(98);
var SPECIES = __webpack_require__(3)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(5) && /./g.flags != 'g') __webpack_require__(7).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(77)
});


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=interface.js.map

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.booleanType = exports.number32Type = exports.byteType = void 0;

var _uint = __webpack_require__(107);

var _boolean = __webpack_require__(106);

const byteType = new _uint.NumberUintType({
  byteLength: 1
});
exports.byteType = byteType;
const number32Type = new _uint.NumberUintType({
  byteLength: 4
});
exports.number32Type = number32Type;
const booleanType = new _boolean.BooleanType();
exports.booleanType = booleanType;
//# sourceMappingURL=wellKnown.js.map

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _abstract = __webpack_require__(79);

Object.keys(_abstract).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _abstract[key];
    }
  });
});

var _array = __webpack_require__(86);

Object.keys(_array).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _array[key];
    }
  });
});

var _vector = __webpack_require__(87);

Object.keys(_vector).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _vector[key];
    }
  });
});

var _list = __webpack_require__(114);

Object.keys(_list).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _list[key];
    }
  });
});

var _bitVector = __webpack_require__(179);

Object.keys(_bitVector).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _bitVector[key];
    }
  });
});

var _bitList = __webpack_require__(180);

Object.keys(_bitList).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _bitList[key];
    }
  });
});

var _byteVector = __webpack_require__(115);

Object.keys(_byteVector).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _byteVector[key];
    }
  });
});

var _root = __webpack_require__(181);

Object.keys(_root).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _root[key];
    }
  });
});

var _container = __webpack_require__(182);

Object.keys(_container).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _container[key];
    }
  });
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=interface.js.map

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBackedValue = isBackedValue;

var _tree = __webpack_require__(81);

function isBackedValue(value) {
  return (0, _tree.isTreeBacked)(value);
}
//# sourceMappingURL=backedValue.js.map

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readonlyValues = readonlyValues;
exports.readonlyEntries = readonlyEntries;

var _tree = __webpack_require__(81);

function readonlyValues(obj) {
  if ((0, _tree.isTreeBacked)(obj) && obj.readonlyValues) {
    return obj.readonlyValues();
  } else {
    return Object.values(obj);
  }
}

function readonlyEntries(obj) {
  if ((0, _tree.isTreeBacked)(obj) && obj.readonlyEntries) {
    return obj.readonlyEntries();
  } else {
    return Object.entries(obj);
  }
}
//# sourceMappingURL=readonlyIterate.js.map

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newInstance = newInstance;

var _loader = _interopRequireDefault(__webpack_require__(168));

var _buffer = __webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* babel-plugin-inline-binary-import '../build/optimized.wasm' */
const wasmCode = "\0asm\x01\0\0\0\x01\x1F\x06`\x02\x7F\x7F\0`\0\0`\x01\x7F\0`\x01\x7F\x01\x7F`\x03\x7F\x7F\x7F\0`\x04\x7F\x7F\x7F\x7F\0\x02\r\x01\x03env\x05abort\0\x05\x03\x0F\x0E\x02\x03\0\x03\x01\x01\x04\0\0\x03\x02\x02\0\x01\x05\x03\x01\0\x01\x06\xAC\x01\"\x7F\0A\x80\x04\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x7F\x01A\0\x0B\x07V\t\x06memory\x02\0\fINPUT_LENGTH\x03\0\x05input\x03\x1C\x06output\x03\x1E\x04init\0\x06\x06update\0\t\x05final\0\x0B\x06digest\0\f\bdigest64\0\r\b\x01\x0E\n\xD2\f\x0EF\x01\x02\x7F \0?\0\"\x02A\x10t\"\x01K\x04@ \x02 \0 \x01kA\xFF\xFF\x03jA\x80\x80|qA\x10v\"\x01 \x02 \x01J\x1B@\0A\0H\x04@ \x01@\0A\0H\x04@\0\x0B\x0B\x0B \0$\x17\x0BR\x01\x03\x7F \0A\xF0\xFF\xFF\xFF\x03K\x04@\0\x0B#\x17A\x10j\"\x02 \0A\x0FjApq\"\x01A\x10 \x01A\x10K\x1B\"\x03j\x10\x01 \x02A\x10k\"\x01 \x036\x02\0 \x01A\x016\x02\x04 \x01A\x006\x02\b \x01 \x006\x02\f \x02\x0B%\x01\x01\x7F\x03@ \x01\x04@ \0\"\x02A\x01j!\0 \x02A\0:\0\0 \x01A\x01k!\x01\f\x01\x0B\x0B\x0B)\x01\x01\x7F \0A\xF0\xFF\xFF\xFF\x03K\x04@A\x80\x05A\xB0\x05A6A*\x10\0\0\x0B \0\x10\x02\"\x01 \0\x10\x03 \x01\x0BG\0A\xB4\x02(\x02\0$\x01A\xE4\x04(\x02\0$\x02A\xE0\x05$\x16A\xE0\x05$\x17A\xC0\0\x10\x04$\x18#\x18$\x19A\x80\x02\x10\x04$\x1A#\x1A$\x1BA\x80\x04\x10\x04$\x1C#\x1C$\x1DA \x10\x04$\x1E#\x1E$\x1F\x0BJ\0A\xE7\xCC\xA7\xD0\x06$\x03A\x85\xDD\x9E\xDB{$\x04A\xF2\xE6\xBB\xE3\x03$\x05A\xBA\xEA\xBF\xAAz$\x06A\xFF\xA4\xB9\x88\x05$\x07A\x8C\xD1\x95\xD8y$\bA\xAB\xB3\x8F\xFC\x01$\tA\x99\x9A\x83\xDF\x05$\nA\0$ A\0$!\x0Bg\x01\x02\x7F\x02@ \x02!\x03 \0 \x01F\r\0 \0 \x01I\x04@\x03@ \x03\x04@ \0\"\x02A\x01j!\0 \x01\"\x04A\x01j!\x01 \x02 \x04-\0\0:\0\0 \x03A\x01k!\x03\f\x01\x0B\x0B\x05\x03@ \x03\x04@ \x03A\x01k\"\x03 \0j \x01 \x03j-\0\0:\0\0\f\x01\x0B\x0B\x0B\x0B\x0B\xEC\x03\x01\x01\x7F#\x03$\x0B#\x04$\f#\x05$\r#\x06$\x0E#\x07$\x0F#\b$\x10#\t$\x11#\n$\x12 \x01\x04@A\0$\x13\x03@#\x13A\x10I\x04@ \0#\x13A\x02tj \x01#\x13A\x02t\"\x02j-\0\0A\x18t \x01 \x02A\x01jj-\0\0A\x10tr \x01 \x02A\x02jj-\0\0A\btr \x01 \x02A\x03jj-\0\0r6\x02\0#\x13A\x01j$\x13\f\x01\x0B\x0BA\x10$\x13\x03@#\x13A\xC0\0I\x04@ \0#\x13A\x02tj \0#\x13A\x10kA\x02tj(\x02\0 \0#\x13A\x07kA\x02tj(\x02\0 \0#\x13A\x02kA\x02tj(\x02\0\"\x01A\x11x \x01A\x13xs \x01A\nvsj \0#\x13A\x0FkA\x02tj(\x02\0\"\x01A\x07x \x01A\x12xs \x01A\x03vsjj6\x02\0#\x13A\x01j$\x13\f\x01\x0B\x0B\x0BA\0$\x13\x03@#\x13A\xC0\0I\x04@ \0#\x13A\x02tj(\x02\0#\x01#\x13A\x02tj(\x02\0#\x12#\x0F\"\x01A\x06x \x01A\x0Bxs \x01A\x19xsj#\x0F\"\x01#\x10q#\x11 \x01A\x7Fsqsjjj$\x14#\x0B\"\x01A\x02x \x01A\rxs \x01A\x16xs#\x0B\"\x01#\f\"\x02q \x01#\r\"\x01qs \x01 \x02qsj$\x15#\x11$\x12#\x10$\x11#\x0F$\x10#\x0E#\x14j$\x0F#\r$\x0E#\f$\r#\x0B$\f#\x14#\x15j$\x0B#\x13A\x01j$\x13\f\x01\x0B\x0B#\x03#\x0Bj$\x03#\x04#\fj$\x04#\x05#\rj$\x05#\x06#\x0Ej$\x06#\x07#\x0Fj$\x07#\b#\x10j$\b#\t#\x11j$\t#\n#\x12j$\n\x0B\xB1\x01\x01\x02\x7F \x01#!j$!# \x04@A\xC0\0# k \x01L\x04@#\x19# j \0A\xC0\0# k\x10\x07# A\xC0\0# kj$ A\xC0\0# k!\x02 \x01A\xC0\0# kk!\x01#\x1B#\x19\x10\bA\0$ \x05#\x19# j \0 \x01\x10\x07 \x01# j$ \x0F\x0B\x0B\x03@ \x03 \x01A\xC0\0mH\x04@#\x1B \0 \x02j\x10\b \x03A\x01j!\x03 \x02A@k!\x02\f\x01\x0B\x0B \x01A?q\x04@#\x19# j \0 \x02j \x01A?q\"\0\x10\x07 \0# j$ \x0B\x0B\x19\0 \0A\x80\xFE\x83xqA\bw \0A\xFF\x81\xFC\x07qA\bxr\x0B\xAD\x02\x01\x02\x7F#!A?qA?H\x04@#\x19# jA\x80\x01:\0\0# A\x01j$ \x0B#!A?qA8N\x04@#\x19# j\"\x01A\xC0\0# kj!\x02\x03@ \x01 \x02I\x04@ \x01A\0:\0\0 \x01A\x01j!\x01\f\x01\x0B\x0B#\x1B#\x19\x10\bA\0$ \x0B#!A?qA?N\x04@#\x19# jA\x80\x01:\0\0# A\x01j$ \x0B#\x19# j\"\x01A8# kj!\x02\x03@ \x01 \x02I\x04@ \x01A\0:\0\0 \x01A\x01j!\x01\f\x01\x0B\x0B#\x19A8j#!A\x80\x80\x80\x80\x02m\x10\n6\x02\0#\x19A<j#!A\x03t\x10\n6\x02\0#\x1B#\x19\x10\b \0#\x03\x10\n6\x02\0 \0A\x04j#\x04\x10\n6\x02\0 \0A\bj#\x05\x10\n6\x02\0 \0A\fj#\x06\x10\n6\x02\0 \0A\x10j#\x07\x10\n6\x02\0 \0A\x14j#\b\x10\n6\x02\0 \0A\x18j#\t\x10\n6\x02\0 \0A\x1Cj#\n\x10\n6\x02\0\x0B\x0E\0\x10\x06#\x1D \0\x10\t#\x1F\x10\x0B\x0Bm\0\x10\x06#\x1B \0\x10\b#\x02A\0\x10\b \x01#\x03\x10\n6\x02\0 \x01A\x04j#\x04\x10\n6\x02\0 \x01A\bj#\x05\x10\n6\x02\0 \x01A\fj#\x06\x10\n6\x02\0 \x01A\x10j#\x07\x10\n6\x02\0 \x01A\x14j#\b\x10\n6\x02\0 \x01A\x18j#\t\x10\n6\x02\0 \x01A\x1Cj#\n\x10\n6\x02\0\x0B\x04\0\x10\x05\x0B\x0B\xAB\x05\x07\0A\x11\x0B\x8F\x02\x01\0\0\x01\0\0\0\0\0\0\0\0\x01\0\0\x98/\x8AB\x91D7q\xCF\xFB\xC0\xB5\xA5\xDB\xB5\xE9[\xC2V9\xF1\x11\xF1Y\xA4\x82?\x92\xD5^\x1C\xAB\x98\xAA\x07\xD8\x01[\x83\x12\xBE\x851$\xC3}\fUt]\xBEr\xFE\xB1\xDE\x80\xA7\x06\xDC\x9Bt\xF1\x9B\xC1\xC1i\x9B\xE4\x86G\xBE\xEF\xC6\x9D\xC1\x0F\xCC\xA1\f$o,\xE9-\xAA\x84tJ\xDC\xA9\xB0\\\xDA\x88\xF9vRQ>\x98m\xC61\xA8\xC8'\x03\xB0\xC7\x7FY\xBF\xF3\x0B\xE0\xC6G\x91\xA7\xD5Qc\xCA\x06g))\x14\x85\n\xB7'8!\x1B.\xFCm,M\x13\r8STs\ne\xBB\njv.\xC9\xC2\x81\x85,r\x92\xA1\xE8\xBF\xA2Kf\x1A\xA8p\x8BK\xC2\xA3Ql\xC7\x19\xE8\x92\xD1$\x06\x99\xD6\x855\x0E\xF4p\xA0j\x10\x16\xC1\xA4\x19\bl7\x1ELwH'\xB5\xBC\xB04\xB3\f\x1C9J\xAA\xD8NO\xCA\x9C[\xF3o.h\xEE\x82\x8Ftoc\xA5x\x14x\xC8\x84\b\x02\xC7\x8C\xFA\xFF\xBE\x90\xEBlP\xA4\xF7\xA3\xF9\xBE\xF2xq\xC6\0A\xA0\x02\x0B\x1D\x10\0\0\0\x01\0\0\0\x03\0\0\0\x10\0\0\0 \0\0\0 \0\0\0\0\x01\0\0@\0A\xC1\x02\x0B\x13\x01\0\0\x01\0\0\0\0\0\0\0\0\x01\0\0\0\0\0\x80\0A\x8D\x03\x0B\xC3\x01\x02\0\0\0\0\0\x80\0\0@\x01\0P \0\x88P\0\0\0\b\0\"\x14\0U\"B\x97\b\x05 \0\0\xA0\0\0\x88Z\0\x94\\\0\x9D\xD4\x16\0\0\x1F\x80\xFA\xD0%2\xD3YYg\x11\xDA\xBF\xE6\xF6I\x15\f\xB3P\xB0\xB2\b'L|\x9D\x93\xA3\xE2\f\xEA\xE1\xE6\x885C+\xA5Io\xA1go\x012\xD7\x91.\xEBN\xE5U\xBF]5#\xEE\x8E\xC2^\xBC\xE2\x94C?\xA8\xF7x\xADE\xCD\xD0\xF36\xE8\x05\x9C\xD9\xC7\x1DQ\xB0\xC4z\xBCi[7\x11\xBD\xE5q\xBA\xE3\xF2\x9F ;\x17\xEE\xFE\x18\xE7\xD9Z\xE2FP7\x13\x9D\b\x15\x05\x04\x0F\rONH'&\xD2(\x0114\xB4h\xC6\xCCA\bB\xB8\x11\xD3bq\xA7\x9B\xE5\x84\xA4\xA7\x85\0A\xD0\x04\x0B\x1D\x10\0\0\0\x01\0\0\0\x03\0\0\0\x10\0\0\0P\x01\0\0P\x01\0\0\0\x01\0\0@\0A\xF0\x04\x0B+\x1C\0\0\0\x01\0\0\0\x01\0\0\0\x1C\0\0\0I\0n\0v\0a\0l\0i\0d\0 \0l\0e\0n\0g\0t\0h\0A\xA0\x05\x0B5&\0\0\0\x01\0\0\0\x01\0\0\0&\0\0\0~\0l\0i\0b\0/\0a\0r\0r\0a\0y\0b\0u\0f\0f\0e\0r\0.\0t\0s";

const _module = new WebAssembly.Module(_buffer.Buffer.from(wasmCode, 'binary'));

function newInstance() {
  return _loader.default.instantiateSync(_module);
}

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Runtime header offsets
const ID_OFFSET = -8;
const SIZE_OFFSET = -4;

// Runtime ids
const ARRAYBUFFER_ID = 0;
const STRING_ID = 1;
const ARRAYBUFFERVIEW_ID = 2;

// Runtime type information
const ARRAYBUFFERVIEW = 1 << 0;
const ARRAY = 1 << 1;
const SET = 1 << 2;
const MAP = 1 << 3;
const VAL_ALIGN_OFFSET = 5;
const VAL_ALIGN = 1 << VAL_ALIGN_OFFSET;
const VAL_SIGNED = 1 << 10;
const VAL_FLOAT = 1 << 11;
const VAL_NULLABLE = 1 << 12;
const VAL_MANAGED = 1 << 13;
const KEY_ALIGN_OFFSET = 14;
const KEY_ALIGN = 1 << KEY_ALIGN_OFFSET;
const KEY_SIGNED = 1 << 19;
const KEY_FLOAT = 1 << 20;
const KEY_NULLABLE = 1 << 21;
const KEY_MANAGED = 1 << 22;

// Array(BufferView) layout
const ARRAYBUFFERVIEW_BUFFER_OFFSET = 0;
const ARRAYBUFFERVIEW_DATASTART_OFFSET = 4;
const ARRAYBUFFERVIEW_DATALENGTH_OFFSET = 8;
const ARRAYBUFFERVIEW_SIZE = 12;
const ARRAY_LENGTH_OFFSET = 12;
const ARRAY_SIZE = 16;

const BIGINT = typeof BigUint64Array !== "undefined";
const THIS = Symbol();
const CHUNKSIZE = 1024;

/** Gets a string from an U32 and an U16 view on a memory. */
function getStringImpl(buffer, ptr) {
  const U32 = new Uint32Array(buffer);
  const U16 = new Uint16Array(buffer);
  var length = U32[(ptr + SIZE_OFFSET) >>> 2] >>> 1;
  var offset = ptr >>> 1;
  if (length <= CHUNKSIZE) return String.fromCharCode.apply(String, U16.subarray(offset, offset + length));
  const parts = [];
  do {
    const last = U16[offset + CHUNKSIZE - 1];
    const size = last >= 0xD800 && last < 0xDC00 ? CHUNKSIZE - 1 : CHUNKSIZE;
    parts.push(String.fromCharCode.apply(String, U16.subarray(offset, offset += size)));
    length -= size;
  } while (length > CHUNKSIZE);
  return parts.join("") + String.fromCharCode.apply(String, U16.subarray(offset, offset + length));
}

/** Prepares the base module prior to instantiation. */
function preInstantiate(imports) {
  const baseModule = {};

  function getString(memory, ptr) {
    if (!memory) return "<yet unknown>";
    return getStringImpl(memory.buffer, ptr);
  }

  // add common imports used by stdlib for convenience
  const env = (imports.env = imports.env || {});
  env.abort = env.abort || function abort(mesg, file, line, colm) {
    const memory = baseModule.memory || env.memory; // prefer exported, otherwise try imported
    throw Error("abort: " + getString(memory, mesg) + " at " + getString(memory, file) + ":" + line + ":" + colm);
  }
  env.trace = env.trace || function trace(mesg, n) {
    const memory = baseModule.memory || env.memory;
    console.log("trace: " + getString(memory, mesg) + (n ? " " : "") + Array.prototype.slice.call(arguments, 2, 2 + n).join(", "));
  }
  imports.Math = imports.Math || Math;
  imports.Date = imports.Date || Date;

  return baseModule;
}

/** Prepares the final module once instantiation is complete. */
function postInstantiate(baseModule, instance) {
  const rawExports = instance.exports;
  const memory = rawExports.memory;
  const table = rawExports.table;
  const alloc = rawExports["__alloc"];
  const retain = rawExports["__retain"];
  const rttiBase = rawExports["__rtti_base"] || ~0; // oob if not present

  /** Gets the runtime type info for the given id. */
  function getInfo(id) {
    const U32 = new Uint32Array(memory.buffer);
    const count = U32[rttiBase >>> 2];
    if ((id >>>= 0) >= count) throw Error("invalid id: " + id);
    return U32[(rttiBase + 4 >>> 2) + id * 2];
  }

  /** Gets the runtime base id for the given id. */
  function getBase(id) {
    const U32 = new Uint32Array(memory.buffer);
    const count = U32[rttiBase >>> 2];
    if ((id >>>= 0) >= count) throw Error("invalid id: " + id);
    return U32[(rttiBase + 4 >>> 2) + id * 2 + 1];
  }

  /** Gets the runtime alignment of a collection's values. */
  function getValueAlign(info) {
    return 31 - Math.clz32((info >>> VAL_ALIGN_OFFSET) & 31); // -1 if none
  }

  /** Gets the runtime alignment of a collection's keys. */
  function getKeyAlign(info) {
    return 31 - Math.clz32((info >>> KEY_ALIGN_OFFSET) & 31); // -1 if none
  }

  /** Allocates a new string in the module's memory and returns its retained pointer. */
  function __allocString(str) {
    const length = str.length;
    const ptr = alloc(length << 1, STRING_ID);
    const U16 = new Uint16Array(memory.buffer);
    for (var i = 0, p = ptr >>> 1; i < length; ++i) U16[p + i] = str.charCodeAt(i);
    return ptr;
  }

  baseModule.__allocString = __allocString;

  /** Reads a string from the module's memory by its pointer. */
  function __getString(ptr) {
    const buffer = memory.buffer;
    const id = new Uint32Array(buffer)[ptr + ID_OFFSET >>> 2];
    if (id !== STRING_ID) throw Error("not a string: " + ptr);
    return getStringImpl(buffer, ptr);
  }

  baseModule.__getString = __getString;

  /** Gets the view matching the specified alignment, signedness and floatness. */
  function getView(alignLog2, signed, float) {
    const buffer = memory.buffer;
    if (float) {
      switch (alignLog2) {
        case 2: return new Float32Array(buffer);
        case 3: return new Float64Array(buffer);
      }
    } else {
      switch (alignLog2) {
        case 0: return new (signed ? Int8Array : Uint8Array)(buffer);
        case 1: return new (signed ? Int16Array : Uint16Array)(buffer);
        case 2: return new (signed ? Int32Array : Uint32Array)(buffer);
        case 3: return new (signed ? BigInt64Array : BigUint64Array)(buffer);
      }
    }
    throw Error("unsupported align: " + alignLog2);
  }

  /** Allocates a new array in the module's memory and returns its retained pointer. */
  function __allocArray(id, values) {
    const info = getInfo(id);
    if (!(info & (ARRAYBUFFERVIEW | ARRAY))) throw Error("not an array: " + id + " @ " + info);
    const align = getValueAlign(info);
    const length = values.length;
    const buf = alloc(length << align, ARRAYBUFFER_ID);
    const arr = alloc(info & ARRAY ? ARRAY_SIZE : ARRAYBUFFERVIEW_SIZE, id);
    const U32 = new Uint32Array(memory.buffer);
    U32[arr + ARRAYBUFFERVIEW_BUFFER_OFFSET >>> 2] = retain(buf);
    U32[arr + ARRAYBUFFERVIEW_DATASTART_OFFSET >>> 2] = buf;
    U32[arr + ARRAYBUFFERVIEW_DATALENGTH_OFFSET >>> 2] = length << align;
    if (info & ARRAY) U32[arr + ARRAY_LENGTH_OFFSET >>> 2] = length;
    const view = getView(align, info & VAL_SIGNED, info & VAL_FLOAT);
    if (info & VAL_MANAGED) {
      for (let i = 0; i < length; ++i) view[(buf >>> align) + i] = retain(values[i]);
    } else {
      view.set(values, buf >>> align);
    }
    return arr;
  }

  baseModule.__allocArray = __allocArray;

  /** Gets a live view on an array's values in the module's memory. Infers the array type from RTTI. */
  function __getArrayView(arr) {
    const U32 = new Uint32Array(memory.buffer);
    const id = U32[arr + ID_OFFSET >>> 2];
    const info = getInfo(id);
    if (!(info & ARRAYBUFFERVIEW)) throw Error("not an array: " + id);
    const align = getValueAlign(info);
    var buf = U32[arr + ARRAYBUFFERVIEW_DATASTART_OFFSET >>> 2];
    const length = info & ARRAY
      ? U32[arr + ARRAY_LENGTH_OFFSET >>> 2]
      : U32[buf + SIZE_OFFSET >>> 2] >>> align;
    return getView(align, info & VAL_SIGNED, info & VAL_FLOAT)
          .subarray(buf >>>= align, buf + length);
  }

  baseModule.__getArrayView = __getArrayView;

  /** Copies an array's values from the module's memory. Infers the array type from RTTI. */
  function __getArray(arr) {
    const input = __getArrayView(arr);
    const len = input.length;
    const out = new Array(len);
    for (let i = 0; i < len; i++) out[i] = input[i];
    return out;
  }

  baseModule.__getArray = __getArray;

  /** Copies an ArrayBuffer's value from the module's memory. */
  function __getArrayBuffer(ptr) {
    const buffer = memory.buffer;
    const length = new Uint32Array(buffer)[ptr + SIZE_OFFSET >>> 2];
    return buffer.slice(ptr, ptr + length);
  }

  baseModule.__getArrayBuffer = __getArrayBuffer;

  /** Copies a typed array's values from the module's memory. */
  function getTypedArray(Type, alignLog2, ptr) {
    return new Type(getTypedArrayView(Type, alignLog2, ptr));
  }

  /** Gets a live view on a typed array's values in the module's memory. */
  function getTypedArrayView(Type, alignLog2, ptr) {
    const buffer = memory.buffer;
    const U32 = new Uint32Array(buffer);
    const bufPtr = U32[ptr + ARRAYBUFFERVIEW_DATASTART_OFFSET >>> 2];
    return new Type(buffer, bufPtr, U32[bufPtr + SIZE_OFFSET >>> 2] >>> alignLog2);
  }

  baseModule.__getInt8Array = getTypedArray.bind(null, Int8Array, 0);
  baseModule.__getInt8ArrayView = getTypedArrayView.bind(null, Int8Array, 0);
  baseModule.__getUint8Array = getTypedArray.bind(null, Uint8Array, 0);
  baseModule.__getUint8ArrayView = getTypedArrayView.bind(null, Uint8Array, 0);
  baseModule.__getUint8ClampedArray = getTypedArray.bind(null, Uint8ClampedArray, 0);
  baseModule.__getUint8ClampedArrayView = getTypedArrayView.bind(null, Uint8ClampedArray, 0);
  baseModule.__getInt16Array = getTypedArray.bind(null, Int16Array, 1);
  baseModule.__getInt16ArrayView = getTypedArrayView.bind(null, Int16Array, 1);
  baseModule.__getUint16Array = getTypedArray.bind(null, Uint16Array, 1);
  baseModule.__getUint16ArrayView = getTypedArrayView.bind(null, Uint16Array, 1);
  baseModule.__getInt32Array = getTypedArray.bind(null, Int32Array, 2);
  baseModule.__getInt32ArrayView = getTypedArrayView.bind(null, Int32Array, 2);
  baseModule.__getUint32Array = getTypedArray.bind(null, Uint32Array, 2);
  baseModule.__getUint32ArrayView = getTypedArrayView.bind(null, Uint32Array, 2);
  if (BIGINT) {
    baseModule.__getInt64Array = getTypedArray.bind(null, BigInt64Array, 3);
    baseModule.__getInt64ArrayView = getTypedArrayView.bind(null, BigInt64Array, 3);
    baseModule.__getUint64Array = getTypedArray.bind(null, BigUint64Array, 3);
    baseModule.__getUint64ArrayView = getTypedArrayView.bind(null, BigUint64Array, 3);
  }
  baseModule.__getFloat32Array = getTypedArray.bind(null, Float32Array, 2);
  baseModule.__getFloat32ArrayView = getTypedArrayView.bind(null, Float32Array, 2);
  baseModule.__getFloat64Array = getTypedArray.bind(null, Float64Array, 3);
  baseModule.__getFloat64ArrayView = getTypedArrayView.bind(null, Float64Array, 3);

  /** Tests whether an object is an instance of the class represented by the specified base id. */
  function __instanceof(ptr, baseId) {
    const U32 = new Uint32Array(memory.buffer);
    var id = U32[(ptr + ID_OFFSET) >>> 2];
    if (id <= U32[rttiBase >>> 2]) {
      do if (id == baseId) return true;
      while (id = getBase(id));
    }
    return false;
  }

  baseModule.__instanceof = __instanceof;

  // Pull basic exports to baseModule so code in preInstantiate can use them
  baseModule.memory = baseModule.memory || memory;
  baseModule.table  = baseModule.table  || table;

  // Demangle exports and provide the usual utility on the prototype
  return demangle(rawExports, baseModule);
}

function isResponse(o) {
  return typeof Response !== "undefined" && o instanceof Response;
}

/** Asynchronously instantiates an AssemblyScript module from anything that can be instantiated. */
async function instantiate(source, imports) {
  if (isResponse(source = await source)) return instantiateStreaming(source, imports);
  return postInstantiate(
    preInstantiate(imports || (imports = {})),
    await WebAssembly.instantiate(
      source instanceof WebAssembly.Module
        ? source
        : await WebAssembly.compile(source),
      imports
    )
  );
}

exports.instantiate = instantiate;

/** Synchronously instantiates an AssemblyScript module from a WebAssembly.Module or binary buffer. */
function instantiateSync(source, imports) {
  return postInstantiate(
    preInstantiate(imports || (imports = {})),
    new WebAssembly.Instance(
      source instanceof WebAssembly.Module
        ? source
        : new WebAssembly.Module(source),
      imports
    )
  )
}

exports.instantiateSync = instantiateSync;

/** Asynchronously instantiates an AssemblyScript module from a response, i.e. as obtained by `fetch`. */
async function instantiateStreaming(source, imports) {
  if (!WebAssembly.instantiateStreaming) {
    return instantiate(
      isResponse(source = await source)
        ? source.arrayBuffer()
        : source,
      imports
    );
  }
  return postInstantiate(
    preInstantiate(imports || (imports = {})),
    (await WebAssembly.instantiateStreaming(source, imports)).instance
  );
}

exports.instantiateStreaming = instantiateStreaming;

/** Demangles an AssemblyScript module's exports to a friendly object structure. */
function demangle(exports, baseModule) {
  var module = baseModule ? Object.create(baseModule) : {};
  var setArgumentsLength = exports["__argumentsLength"]
    ? function(length) { exports["__argumentsLength"].value = length; }
    : exports["__setArgumentsLength"] || exports["__setargc"] || function() {};
  for (let internalName in exports) {
    if (!Object.prototype.hasOwnProperty.call(exports, internalName)) continue;
    const elem = exports[internalName];
    let parts = internalName.split(".");
    let curr = module;
    while (parts.length > 1) {
      let part = parts.shift();
      if (!Object.prototype.hasOwnProperty.call(curr, part)) curr[part] = {};
      curr = curr[part];
    }
    let name = parts[0];
    let hash = name.indexOf("#");
    if (hash >= 0) {
      let className = name.substring(0, hash);
      let classElem = curr[className];
      if (typeof classElem === "undefined" || !classElem.prototype) {
        let ctor = function(...args) {
          return ctor.wrap(ctor.prototype.constructor(0, ...args));
        };
        ctor.prototype = {
          valueOf: function valueOf() {
            return this[THIS];
          }
        };
        ctor.wrap = function(thisValue) {
          return Object.create(ctor.prototype, { [THIS]: { value: thisValue, writable: false } });
        };
        if (classElem) Object.getOwnPropertyNames(classElem).forEach(name =>
          Object.defineProperty(ctor, name, Object.getOwnPropertyDescriptor(classElem, name))
        );
        curr[className] = ctor;
      }
      name = name.substring(hash + 1);
      curr = curr[className].prototype;
      if (/^(get|set):/.test(name)) {
        if (!Object.prototype.hasOwnProperty.call(curr, name = name.substring(4))) {
          let getter = exports[internalName.replace("set:", "get:")];
          let setter = exports[internalName.replace("get:", "set:")];
          Object.defineProperty(curr, name, {
            get: function() { return getter(this[THIS]); },
            set: function(value) { setter(this[THIS], value); },
            enumerable: true
          });
        }
      } else {
        if (name === 'constructor') {
          (curr[name] = (...args) => {
            setArgumentsLength(args.length);
            return elem(...args);
          }).original = elem;
        } else { // instance method
          (curr[name] = function(...args) { // !
            setArgumentsLength(args.length);
            return elem(this[THIS], ...args);
          }).original = elem;
        }
      }
    } else {
      if (/^(get|set):/.test(name)) {
        if (!Object.prototype.hasOwnProperty.call(curr, name = name.substring(4))) {
          Object.defineProperty(curr, name, {
            get: exports[internalName.replace("set:", "get:")],
            set: exports[internalName.replace("get:", "set:")],
            enumerable: true
          });
        }
      } else if (typeof elem === "function" && elem !== setArgumentsLength) {
        (curr[name] = (...args) => {
          setArgumentsLength(args.length);
          return elem(...args);
        }).original = elem;
      } else {
        curr[name] = elem;
      }
    }
  }
  return module;
}

exports.demangle = demangle;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 170 */
/***/ (function(module, exports) {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 171 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.subtreeFillToContents = exports.subtreeFillToLength = exports.subtreeFillToDepth = void 0;
const node_1 = __webpack_require__(32);
const zeroNode_1 = __webpack_require__(82);
const ERR_NAVIGATION = "Navigation error";
const ERR_TOO_MANY_NODES = "Too many nodes";
// subtree filling
function subtreeFillToDepth(bottom, depth) {
    let node = bottom;
    while (depth > 0) {
        node = new node_1.BranchNode(node, node);
        depth--;
    }
    return node;
}
exports.subtreeFillToDepth = subtreeFillToDepth;
function subtreeFillToLength(bottom, depth, length) {
    const maxLength = 1 << depth;
    if (length > maxLength)
        throw new Error(ERR_TOO_MANY_NODES);
    if (length === maxLength)
        return subtreeFillToDepth(bottom, depth);
    if (depth === 0) {
        if (length === 1)
            return bottom;
        else
            throw new Error(ERR_NAVIGATION);
    }
    if (depth === 1) {
        return new node_1.BranchNode(bottom, length > 1 ? bottom : zeroNode_1.zeroNode(0));
    }
    const pivot = maxLength >> 1;
    if (length <= pivot) {
        return new node_1.BranchNode(subtreeFillToLength(bottom, depth - 1, length), zeroNode_1.zeroNode(depth - 1));
    }
    else {
        return new node_1.BranchNode(subtreeFillToDepth(bottom, depth - 1), subtreeFillToLength(bottom, depth - 1, length - pivot));
    }
}
exports.subtreeFillToLength = subtreeFillToLength;
function subtreeFillToContents(nodes, depth) {
    const maxLength = 2 ** depth;
    if (nodes.length > maxLength)
        throw new Error(ERR_TOO_MANY_NODES);
    if (depth === 0) {
        if (!nodes.length)
            return zeroNode_1.zeroNode(0);
        return nodes[0];
    }
    if (depth === 1) {
        if (!nodes.length)
            return zeroNode_1.zeroNode(1);
        return new node_1.BranchNode(nodes[0], nodes[1] || zeroNode_1.zeroNode(0));
    }
    const pivot = Math.floor(maxLength / 2);
    if (nodes.length <= pivot) {
        return new node_1.BranchNode(subtreeFillToContents(nodes, depth - 1), zeroNode_1.zeroNode(depth - 1));
    }
    else {
        return new node_1.BranchNode(subtreeFillToContents(nodes.slice(0, Number(pivot)), depth - 1), subtreeFillToContents(nodes.slice(Number(pivot)), depth - 1));
    }
}
exports.subtreeFillToContents = subtreeFillToContents;


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = void 0;
const gindex_1 = __webpack_require__(62);
const node_1 = __webpack_require__(32);
const proof_1 = __webpack_require__(111);
const single_1 = __webpack_require__(112);
const zeroNode_1 = __webpack_require__(82);
const ERR_INVALID_TREE = "Invalid tree operation";
const ERR_PARAM_LT_ZERO = "Param must be >= 0";
const ERR_COUNT_GT_DEPTH = "Count extends beyond depth limit";
class Tree {
    constructor(node, hook) {
        this._node = node;
        if (hook) {
            if (typeof WeakRef === "undefined") {
                this.hook = hook;
            }
            else {
                this.hook = new WeakRef(hook);
            }
        }
    }
    static createFromProof(proof) {
        return new Tree(proof_1.createNodeFromProof(proof));
    }
    get rootNode() {
        return this._node;
    }
    set rootNode(n) {
        this._node = n;
        if (this.hook) {
            // WeakRef should not change status during a program's execution
            // So, use WeakRef feature detection to assume the type of this.hook
            // to minimize the memory footprint of Tree
            if (typeof WeakRef === "undefined") {
                this.hook(this);
            }
            else {
                const hookVar = this.hook.deref();
                if (hookVar) {
                    hookVar(this);
                }
                else {
                    // Hook has been garbage collected, no need to keep the hookRef
                    this.hook = undefined;
                }
            }
        }
    }
    get root() {
        return this.rootNode.root;
    }
    getNode(index) {
        let node = this.rootNode;
        for (const i of gindex_1.gindexIterator(index)) {
            if (i) {
                if (node.isLeaf())
                    throw new Error(ERR_INVALID_TREE);
                node = node.right;
            }
            else {
                if (node.isLeaf())
                    throw new Error(ERR_INVALID_TREE);
                node = node.left;
            }
        }
        return node;
    }
    setter(index, expand = false) {
        let link = node_1.identity;
        let node = this.rootNode;
        const iterator = gindex_1.gindexIterator(index);
        for (const i of iterator) {
            if (i) {
                if (node.isLeaf()) {
                    if (!expand)
                        throw new Error(ERR_INVALID_TREE);
                    else {
                        const child = zeroNode_1.zeroNode(iterator.remainingBitLength() - 1);
                        node = new node_1.BranchNode(child, child);
                    }
                }
                link = node_1.compose(node.rebindRight.bind(node), link);
                node = node.right;
            }
            else {
                if (node.isLeaf()) {
                    if (!expand)
                        throw new Error(ERR_INVALID_TREE);
                    else {
                        const child = zeroNode_1.zeroNode(iterator.remainingBitLength() - 1);
                        node = new node_1.BranchNode(child, child);
                    }
                }
                link = node_1.compose(node.rebindLeft.bind(node), link);
                node = node.left;
            }
        }
        return node_1.compose(node_1.identity, link);
    }
    setNode(index, n, expand = false) {
        this.rootNode = this.setter(index, expand)(n);
    }
    getRoot(index) {
        return this.getNode(index).root;
    }
    setRoot(index, root, expand = false) {
        this.setNode(index, new node_1.LeafNode(root), expand);
    }
    getSubtree(index) {
        return new Tree(this.getNode(index), (v) => this.setNode(index, v.rootNode));
    }
    setSubtree(index, v, expand = false) {
        this.setNode(index, v.rootNode, expand);
    }
    clone() {
        return new Tree(this.rootNode);
    }
    getSingleProof(index) {
        return single_1.createSingleProof(this.rootNode, index)[1];
    }
    /**
     * Fast read-only iteration
     * In-order traversal of nodes at `depth`
     * starting from the `startIndex`-indexed node
     * iterating through `count` nodes
     */
    *iterateNodesAtDepth(depth, startIndex, count) {
        // Strategy:
        // First nagivate to the starting Gindex node,
        // At each level record the tuple (current node, the navigation direction) in a list (Left=0, Right=1)
        // Once we reach the starting Gindex node, the list will be length == depth
        // Begin emitting nodes: Outer loop:
        //   Yield the current node
        //   Inner loop
        //     pop off the end of the list
        //     If its (N, Left) (we've nav'd the left subtree, but not the right subtree)
        //       push (N, Right) and set set node as the n.right
        //       push (N, Left) and set node as n.left until list length == depth
        //   Inner loop until the list length == depth
        // Outer loop until the list is empty or the yield count == count
        if (startIndex < 0 || count < 0 || depth < 0) {
            throw new Error(ERR_PARAM_LT_ZERO);
        }
        if (BigInt(1) << BigInt(depth) < startIndex + count) {
            throw new Error(ERR_COUNT_GT_DEPTH);
        }
        if (count === 0) {
            return;
        }
        if (depth === 0) {
            yield this.rootNode;
            return;
        }
        let node = this.rootNode;
        let currCount = 0;
        const startGindex = gindex_1.toGindexBitstring(depth, BigInt(startIndex));
        const nav = [];
        for (const i of gindex_1.gindexIterator(startGindex)) {
            nav.push([node, i]);
            if (i) {
                if (node.isLeaf())
                    throw new Error(ERR_INVALID_TREE);
                node = node.right;
            }
            else {
                if (node.isLeaf())
                    throw new Error(ERR_INVALID_TREE);
                node = node.left;
            }
        }
        while (nav.length && currCount < count) {
            yield node;
            currCount++;
            if (currCount === count) {
                return;
            }
            do {
                const [parentNode, direction] = nav.pop();
                // if direction was left
                if (!direction) {
                    // now navigate right
                    nav.push([parentNode, 1]);
                    if (parentNode.isLeaf())
                        throw new Error(ERR_INVALID_TREE);
                    node = parentNode.right;
                    // and then left as far as possible
                    while (nav.length !== depth) {
                        nav.push([node, 0]);
                        if (node.isLeaf())
                            throw new Error(ERR_INVALID_TREE);
                        node = node.left;
                    }
                }
            } while (nav.length && nav.length !== depth);
        }
    }
    getProof(input) {
        return proof_1.createProof(this.rootNode, input);
    }
}
exports.Tree = Tree;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeTreeOffsetProof = exports.serializeTreeOffsetProof = exports.computeTreeOffsetProofSerializedLength = exports.createNodeFromTreeOffsetProof = exports.createTreeOffsetProof = exports.treeOffsetProofToNode = exports.nodeToTreeOffsetProof = void 0;
const node_1 = __webpack_require__(32);
const util_1 = __webpack_require__(175);
/**
 * Compute offsets and leaves of a tree-offset proof
 *
 * Recursive function
 *
 * See https://github.com/protolambda/eth-merkle-trees/blob/master/tree_offsets.md
 * @param node current node in the tree
 * @param gindex current generalized index in the tree
 * @param proofGindices generalized indices to left include in the proof - must be sorted in-order according to the tree
 */
function nodeToTreeOffsetProof(node, gindex, proofGindices) {
    if (!proofGindices.length || !proofGindices[0].startsWith(gindex)) {
        // there are no proof indices left OR the current subtree contains no remaining proof indices
        return [[], []];
    }
    else if (gindex === proofGindices[0]) {
        // the current node is at the next proof index
        proofGindices.shift();
        return [[], [node.root]];
    }
    else {
        // recursively compute offsets, leaves for the left and right subtree
        const [leftOffsets, leftLeaves] = nodeToTreeOffsetProof(node.left, gindex + "0", proofGindices);
        const [rightOffsets, rightLeaves] = nodeToTreeOffsetProof(node.right, gindex + "1", proofGindices);
        // the offset prepended to the list is # of leaves in the left subtree
        const pivot = leftLeaves.length;
        return [[pivot].concat(leftOffsets, rightOffsets), leftLeaves.concat(rightLeaves)];
    }
}
exports.nodeToTreeOffsetProof = nodeToTreeOffsetProof;
/**
 * Recreate a `Node` given offsets and leaves of a tree-offset proof
 *
 * Recursive definition
 *
 * See https://github.com/protolambda/eth-merkle-trees/blob/master/tree_offsets.md
 */
function treeOffsetProofToNode(offsets, leaves) {
    if (!leaves.length) {
        throw new Error("Proof must contain gt 0 leaves");
    }
    else if (leaves.length === 1) {
        return new node_1.LeafNode(leaves[0]);
    }
    else {
        // the offset popped from the list is the # of leaves in the left subtree
        const pivot = offsets[0];
        return new node_1.BranchNode(treeOffsetProofToNode(offsets.slice(1, pivot), leaves.slice(0, pivot)), treeOffsetProofToNode(offsets.slice(pivot), leaves.slice(pivot)));
    }
}
exports.treeOffsetProofToNode = treeOffsetProofToNode;
/**
 * Create a tree-offset proof
 *
 * @param rootNode the root node of the tree
 * @param gindices generalized indices to include in the proof
 */
function createTreeOffsetProof(rootNode, gindices) {
    return nodeToTreeOffsetProof(rootNode, "1", util_1.computeMultiProofBitstrings(gindices.map((g) => g.toString(2))));
}
exports.createTreeOffsetProof = createTreeOffsetProof;
/**
 * Recreate a `Node` given a tree-offset proof
 *
 * @param offsets offsets of a tree-offset proof
 * @param leaves leaves of a tree-offset proof
 */
function createNodeFromTreeOffsetProof(offsets, leaves) {
    // TODO validation
    return treeOffsetProofToNode(offsets, leaves);
}
exports.createNodeFromTreeOffsetProof = createNodeFromTreeOffsetProof;
function computeTreeOffsetProofSerializedLength(offsets, leaves) {
    // add 1 for # of leaves
    return (offsets.length + 1) * 2 + leaves.length * 32;
}
exports.computeTreeOffsetProofSerializedLength = computeTreeOffsetProofSerializedLength;
// Serialized tree offset proof structure:
// # of leaves - 2 bytes
// offsets - 2 bytes each
// leaves - 32 bytes each
function serializeTreeOffsetProof(output, byteOffset, offsets, leaves) {
    const writer = new DataView(output.buffer, output.byteOffset, output.byteLength);
    // set # of leaves
    writer.setUint16(byteOffset, leaves.length, true);
    // set offsets
    const offsetsStartIndex = byteOffset + 2;
    for (let i = 0; i < offsets.length; i++) {
        writer.setUint16(i * 2 + offsetsStartIndex, offsets[i], true);
    }
    // set leaves
    const leavesStartIndex = offsetsStartIndex + offsets.length * 2;
    for (let i = 0; i < leaves.length; i++) {
        output.set(leaves[i], i * 32 + leavesStartIndex);
    }
}
exports.serializeTreeOffsetProof = serializeTreeOffsetProof;
function deserializeTreeOffsetProof(data, byteOffset) {
    const reader = new DataView(data.buffer, data.byteOffset, data.byteLength);
    // get # of leaves
    const leafCount = reader.getUint16(byteOffset, true);
    if (data.length < (leafCount - 1) * 2 + leafCount * 32) {
        throw new Error("Unable to deserialize tree offset proof: not enough bytes");
    }
    // get offsets
    const offsetsStartIndex = byteOffset + 2;
    const offsets = Array.from({ length: leafCount - 1 }, (_, i) => reader.getUint16(i * 2 + offsetsStartIndex, true));
    // get leaves
    const leavesStartIndex = offsetsStartIndex + offsets.length * 2;
    const leaves = Array.from({ length: leafCount }, (_, i) => data.subarray(i * 32 + leavesStartIndex, (i + 1) * 32 + leavesStartIndex));
    return [offsets, leaves];
}
exports.deserializeTreeOffsetProof = deserializeTreeOffsetProof;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeMultiProofBitstrings = exports.filterParentBitstrings = exports.sortInOrderBitstrings = exports.computeProofBitstrings = exports.computeProofGindices = void 0;
const gindex_1 = __webpack_require__(62);
// Not currently in use, but simpler implementation useful for testing
/**
 * Compute both the path and branch indices
 *
 * Path indices are parent indices upwards toward the root
 * Branch indices are witnesses required for a merkle proof
 */
function computeProofGindices(gindex) {
    const path = new Set();
    const branch = new Set();
    let g = gindex;
    while (g > 1) {
        path.add(g);
        branch.add(gindex_1.gindexSibling(g));
        g = gindex_1.gindexParent(g);
    }
    return { path, branch };
}
exports.computeProofGindices = computeProofGindices;
/**
 * Compute both the path and branch indices
 *
 * Path indices are parent indices upwards toward the root
 * Branch indices are witnesses required for a merkle proof
 */
function computeProofBitstrings(gindex) {
    const path = new Set();
    const branch = new Set();
    let g = gindex;
    while (g.length > 1) {
        path.add(g);
        const lastBit = g[g.length - 1];
        const parent = g.substring(0, g.length - 1);
        branch.add(parent + (Number(lastBit) ^ 1));
        g = parent;
    }
    return { path, branch };
}
exports.computeProofBitstrings = computeProofBitstrings;
/**
 * Sort generalized indices in-order
 * @param bitLength maximum bit length of generalized indices to sort
 */
function sortInOrderBitstrings(gindices, bitLength) {
    if (!gindices.length) {
        return [];
    }
    return gindices
        .map((g) => g.padEnd(bitLength))
        .sort()
        .map((g) => g.trim());
}
exports.sortInOrderBitstrings = sortInOrderBitstrings;
/**
 * Filter out parent generalized indices
 */
function filterParentBitstrings(gindices) {
    const sortedBitstrings = gindices.sort((a, b) => a.length - b.length);
    const filtered = [];
    outer: for (let i = 0; i < sortedBitstrings.length; i++) {
        const bsA = sortedBitstrings[i];
        for (let j = i + 1; j < sortedBitstrings.length; j++) {
            const bsB = sortedBitstrings[j];
            if (bsB.startsWith(bsA)) {
                continue outer;
            }
        }
        filtered.push(bsA);
    }
    return filtered;
}
exports.filterParentBitstrings = filterParentBitstrings;
/**
 * Return the set of generalized indices required for a multiproof
 * This includes all leaves and any necessary witnesses
 * @param gindices leaves to include in proof
 * @returns all generalized indices required for a multiproof (leaves and witnesses), deduplicated and sorted in-order according to the tree
 */
function computeMultiProofBitstrings(gindices) {
    // Initialize the proof indices with the leaves
    const proof = new Set(filterParentBitstrings(gindices));
    const paths = new Set();
    const branches = new Set();
    // Collect all path indices and all branch indices
    let maxBitLength = 1;
    for (const gindex of proof) {
        if (gindex.length > maxBitLength)
            maxBitLength = gindex.length;
        const { path, branch } = computeProofBitstrings(gindex);
        path.forEach((g) => paths.add(g));
        branch.forEach((g) => branches.add(g));
    }
    // Remove all branches that are included in the paths
    paths.forEach((g) => branches.delete(g));
    // Add all remaining branches to the leaves
    branches.forEach((g) => proof.add(g));
    return sortInOrderBitstrings(Array.from(proof), maxBitLength);
}
exports.computeMultiProofBitstrings = computeMultiProofBitstrings;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.merkleize = merkleize;
exports.mixInLength = mixInLength;

var _hash = __webpack_require__(84);

var _math = __webpack_require__(177);

var _zeros = __webpack_require__(178);

/** @module ssz */

/** @ignore */
function merkleize(chunks, padFor = 0) {
  const layerCount = (0, _math.bitLength)((0, _math.nextPowerOf2)(padFor || chunks.length) - 1);

  if (chunks.length == 0) {
    return _zeros.zeroHashes[layerCount];
  } // Instead of pushing on all padding zero chunks at the leaf level
  // we push on zero hash chunks at the highest possible level to avoid over-hashing


  let layer = 0;

  while (layer < layerCount) {
    // if the chunks.length is odd
    // we need to push on the zero-hash of that level to merkleize that level
    if (chunks.length % 2 == 1) {
      chunks.push(_zeros.zeroHashes[layer]);
    }

    for (let i = 0; i < chunks.length; i += 2) {
      const h = (0, _hash.hash)(chunks[i], chunks[i + 1]);
      chunks[i / 2] = Buffer.from(h.buffer, h.byteOffset, h.byteLength);
    }

    chunks.splice(chunks.length / 2, chunks.length / 2);
    layer++;
  }

  return chunks[0];
}
/** @ignore */


function mixInLength(root, length) {
  const lengthBuf = Buffer.alloc(32);
  lengthBuf.writeUIntLE(length, 0, 6);
  const h = (0, _hash.hash)(root, lengthBuf);
  return Buffer.from(h.buffer, h.byteOffset, h.byteLength);
}
//# sourceMappingURL=merkleize.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(42).Buffer))

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bitLength = bitLength;
exports.nextPowerOf2 = nextPowerOf2;
exports.previousPowerOf2 = previousPowerOf2;

/** @ignore */
function bitLength(n) {
  const bitstring = n.toString(2);

  if (bitstring === "0") {
    return 0;
  }

  return bitstring.length;
}
/** @ignore */


function nextPowerOf2(n) {
  return n <= 0 ? 1 : Math.pow(2, bitLength(n - 1));
}
/** @ignore */


function previousPowerOf2(n) {
  return n === 0 ? 1 : Math.pow(2, bitLength(n) - 1);
}
//# sourceMappingURL=math.js.map

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zeroHashes = void 0;

var _constants = __webpack_require__(85);

var _hash = __webpack_require__(84);

/** @module ssz */
// create array of "zero hashes", successively hashed zero chunks
const zeroHashes = [Buffer.alloc(_constants.BYTES_PER_CHUNK)];
exports.zeroHashes = zeroHashes;

for (let i = 0; i < 52; i++) {
  const h = (0, _hash.hash)(zeroHashes[i], zeroHashes[i]);
  zeroHashes.push(Buffer.from(h.buffer, h.byteOffset, h.byteLength));
}
//# sourceMappingURL=zeros.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(42).Buffer))

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBitVectorType = isBitVectorType;
exports.BitVectorType = exports.BITVECTOR_TYPE = void 0;

var _vector = __webpack_require__(87);

var _basic = __webpack_require__(31);

var _type = __webpack_require__(9);

var _byteArray = __webpack_require__(22);

var _constants = __webpack_require__(85);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const BITVECTOR_TYPE = Symbol.for("ssz/BitVectorType");
exports.BITVECTOR_TYPE = BITVECTOR_TYPE;

function isBitVectorType(type) {
  return (0, _type.isTypeOf)(type, BITVECTOR_TYPE);
}

class BitVectorType extends _vector.BasicVectorType {
  constructor(options) {
    super(_objectSpread({
      elementType: _basic.booleanType
    }, options));

    this._typeSymbols.add(BITVECTOR_TYPE);
  } // eslint-disable-next-line @typescript-eslint/no-unused-vars


  struct_getLength(value) {
    return this.length;
  } // eslint-disable-next-line @typescript-eslint/no-unused-vars


  struct_getByteLength(value) {
    return Math.ceil(this.length / 8);
  } // eslint-disable-next-line @typescript-eslint/no-unused-vars


  struct_getSerializedLength(value) {
    return Math.ceil(this.length / 8);
  }

  getMaxSerializedLength() {
    return this.struct_getSerializedLength(null);
  }

  getMinSerializedLength() {
    return this.struct_getSerializedLength(null);
  }

  struct_getChunkCount(value) {
    return Math.ceil(this.struct_getLength(value) / 256);
  }

  struct_getByte(value, index) {
    const firstBitIndex = index * 8;
    const lastBitIndex = Math.min(firstBitIndex + 7, value.length - 1);
    let bitstring = "0b";

    for (let i = lastBitIndex; i >= firstBitIndex; i--) {
      bitstring += value[i] ? "1" : "0";
    }

    return Number(bitstring);
  }

  struct_deserializeFromBytes(data, start, end) {
    this.bytes_validate(data, start, end);

    if (end - start !== this.size(null)) {
      throw new Error("Invalid bitvector: length not equal to vector length");
    }

    const value = [];

    for (let i = start; i < end - 1; i++) {
      value.push(...(0, _byteArray.getByteBits)(data, i));
    }

    const lastBitLength = this.length % 8;

    if (!lastBitLength) {
      // vector takes up the whole byte, no need for checks
      value.push(...(0, _byteArray.getByteBits)(data, end - 1));
    } else {
      const lastBits = (0, _byteArray.getByteBits)(data, end - 1);

      if (lastBits.slice(lastBitLength).some(b => b)) {
        throw new Error("Invalid bitvector: nonzero bits past length");
      }

      value.push(...lastBits.slice(0, lastBitLength));
    }

    return value;
  }

  struct_serializeToBytes(value, output, offset) {
    const byteLength = this.struct_getByteLength(value);

    for (let i = 0; i < byteLength; i++) {
      output[offset + i] = this.struct_getByte(value, i);
    }

    return offset + byteLength;
  }

  struct_getRootAtChunkIndex(value, chunkIndex) {
    const output = new Uint8Array(_constants.BYTES_PER_CHUNK);
    const byteLength = Math.min(_constants.BYTES_PER_CHUNK, this.struct_getByteLength(value) - chunkIndex);
    const byteOffset = chunkIndex * _constants.BYTES_PER_CHUNK;

    for (let i = 0; i < byteLength; i++) {
      output[i] = this.struct_getByte(value, i + byteOffset);
    }

    return output;
  }

  struct_convertFromJson(data) {
    const bytes = (0, _byteArray.fromHexString)(data);
    return this.fromBytes(bytes, 0, bytes.length);
  }

  struct_convertToJson(value) {
    return (0, _byteArray.toHexString)(this.serialize(value));
  }

  tree_getByteLength(target) {
    return Math.ceil(this.tree_getLength(target) / 8);
  }

  tree_getSerializedLength(target) {
    return this.tree_getByteLength(target);
  }

  tree_deserializeFromBytes(data, start, end) {
    // mask last byte to ensure it doesn't go over length
    const lastByte = data[end - 1]; // If the data len fits full bytes this check must be skipped.
    // Otherwise we must ensure that the extra bits are set to zero.

    const lastByteBitLen = this.length % 8;

    if (lastByteBitLen > 0) {
      const mask = 0xff << lastByteBitLen & 0xff;

      if ((lastByte & mask) > 0) {
        throw new Error("Invalid deserialized bitvector length");
      }
    }

    return super.tree_deserializeFromBytes(data, start, end);
  }

  getBitOffset(index) {
    return index % 8;
  }

  getChunkOffset(index) {
    return Math.floor(index % 256 / 8);
  }

  getChunkIndex(index) {
    return Math.floor(index / 256);
  }

  tree_getChunkCount(target) {
    return Math.ceil(this.tree_getLength(target) / 256);
  }

  *tree_iterateValues(target) {
    const length = this.tree_getLength(target);
    const chunkCount = this.tree_getChunkCount(target);
    const nodeIterator = target.iterateNodesAtDepth(this.getChunkDepth(), 0, chunkCount);
    let i = 0;

    for (const node of nodeIterator) {
      const chunk = node.root;

      for (let j = 0; j < 256 && i < length; i++, j++) {
        const byte = chunk[this.getChunkOffset(i)];
        yield !!(byte & 1 << this.getBitOffset(i));
      }
    }
  }

  tree_getValueAtIndex(target, index) {
    const chunk = this.tree_getRootAtChunkIndex(target, this.getChunkIndex(index));
    const byte = chunk[this.getChunkOffset(index)];
    return !!(byte & 1 << this.getBitOffset(index));
  }

  tree_setProperty(target, property, value) {
    const chunkGindex = this.getGindexAtChunkIndex(this.getChunkIndex(property));
    const chunk = new Uint8Array(32);
    chunk.set(target.getRoot(chunkGindex));
    const byteOffset = this.getChunkOffset(property);

    if (value) {
      chunk[byteOffset] |= 1 << this.getBitOffset(property);
    } else {
      chunk[byteOffset] &= 0xff ^ 1 << this.getBitOffset(property);
    }

    target.setRoot(chunkGindex, chunk);
    return true;
  }

  getMaxChunkCount() {
    return Math.ceil(this.length / 256);
  }

}

exports.BitVectorType = BitVectorType;
//# sourceMappingURL=bitVector.js.map

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBitListType = isBitListType;
exports.BitListType = exports.BITLIST_TYPE = void 0;

var _list = __webpack_require__(114);

var _basic = __webpack_require__(31);

var _type = __webpack_require__(9);

var _byteArray = __webpack_require__(22);

var _constants = __webpack_require__(85);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const BITLIST_TYPE = Symbol.for("ssz/BitListType");
exports.BITLIST_TYPE = BITLIST_TYPE;

function isBitListType(type) {
  return (0, _type.isTypeOf)(type, BITLIST_TYPE);
}

class BitListType extends _list.BasicListType {
  constructor(options) {
    super(_objectSpread({
      elementType: _basic.booleanType
    }, options));

    this._typeSymbols.add(BITLIST_TYPE);
  }

  struct_getByte(value, index) {
    const firstBitIndex = index * 8;
    const lastBitIndex = Math.min(firstBitIndex + 7, value.length - 1);
    let bitstring = "0b";

    for (let i = lastBitIndex; i >= firstBitIndex; i--) {
      bitstring += value[i] ? "1" : "0";
    }

    return Number(bitstring);
  }

  struct_getLength(value) {
    return value.length;
  }

  struct_getByteLength(value) {
    return Math.ceil(value.length / 8);
  }

  struct_getSerializedLength(value) {
    if (value.length % 8 === 0) {
      return this.struct_getByteLength(value) + 1;
    } else {
      return this.struct_getByteLength(value);
    }
  }

  getMaxSerializedLength() {
    return Math.ceil(this.limit / 8) + 1;
  }

  getMinSerializedLength() {
    return 1;
  }

  struct_getChunkCount(value) {
    return Math.ceil(this.struct_getLength(value) / 256);
  }

  struct_deserializeFromBytes(data, start, end) {
    this.bytes_validate(data, start, end);
    const value = [];

    const toBool = c => c === "1" ? true : false;

    for (let i = start; i < end - 1; i++) {
      let bitstring = data[i].toString(2);
      bitstring = "0".repeat(8 - bitstring.length) + bitstring;
      value.push(...Array.prototype.map.call(bitstring, toBool).reverse());
    }

    const lastByte = data[end - 1];

    if (lastByte === 0) {
      throw new Error("Invalid deserialized bitlist, padding bit required");
    }

    if (lastByte === 1) {
      return value;
    }

    const lastBits = Array.prototype.map.call(lastByte.toString(2), toBool).reverse();
    const last1 = lastBits.lastIndexOf(true);
    value.push(...lastBits.slice(0, last1));

    if (value.length > this.limit) {
      throw new Error("Invalid deserialized bitlist, length greater than limit");
    }

    return value;
  }

  struct_serializeToBytes(value, output, offset) {
    const byteLength = this.struct_getByteLength(value);

    for (let i = 0; i < byteLength; i++) {
      output[offset + i] = this.struct_getByte(value, i);
    }

    const newOffset = offset + byteLength;

    if (value.length % 8 === 0) {
      output[newOffset] = 1;
      return newOffset + 1;
    } else {
      output[newOffset - 1] |= 1 << value.length % 8;
      return newOffset;
    }
  }

  struct_getRootAtChunkIndex(value, chunkIndex) {
    const output = new Uint8Array(_constants.BYTES_PER_CHUNK);
    const byteLength = Math.min(_constants.BYTES_PER_CHUNK, this.struct_getByteLength(value) - chunkIndex);
    const byteOffset = chunkIndex * _constants.BYTES_PER_CHUNK;

    for (let i = 0; i < byteLength; i++) {
      output[i] = this.struct_getByte(value, i + byteOffset);
    }

    return output;
  }

  struct_convertFromJson(data) {
    const bytes = (0, _byteArray.fromHexString)(data);
    return this.struct_deserializeFromBytes(bytes, 0, bytes.length);
  }

  struct_convertToJson(value) {
    return (0, _byteArray.toHexString)(this.serialize(value));
  }

  tree_getByteLength(target) {
    return Math.ceil(this.tree_getLength(target) / 8);
  }

  tree_getSerializedLength(target) {
    const bitLength = this.tree_getLength(target);

    if (bitLength % 8 === 0) {
      return this.tree_getByteLength(target) + 1;
    } else {
      return this.tree_getByteLength(target);
    }
  }

  tree_deserializeFromBytes(data, start, end) {
    const lastByte = data[end - 1];

    if (lastByte === 0) {
      throw new Error("Invalid deserialized bitlist, padding bit required");
    }

    if (lastByte === 1) {
      const target = super.tree_deserializeFromBytes(data, start, end - 1);
      const length = (end - start - 1) * 8;
      this.tree_setLength(target, length);
      return target;
    } // the last byte is > 1, so a padding bit will exist in the last byte and need to be removed


    const target = super.tree_deserializeFromBytes(data, start, end);
    const lastGindex = this.getGindexAtChunkIndex(Math.ceil((end - start) / 32) - 1); // copy chunk into new memory

    const lastChunk = new Uint8Array(32);
    lastChunk.set(target.getRoot(lastGindex));
    const lastChunkByte = (end - start) % 32 - 1; // mask lastChunkByte

    const lastByteBitLength = lastByte.toString(2).length - 1;
    const length = (end - start - 1) * 8 + lastByteBitLength;
    const mask = 0xff >> 8 - lastByteBitLength;
    lastChunk[lastChunkByte] &= mask;
    target.setRoot(lastGindex, lastChunk);
    this.tree_setLength(target, length);
    return target;
  }

  tree_serializeToBytes(target, output, offset) {
    const sizeNoPadding = this.tree_getByteLength(target);
    const fullChunkCount = Math.floor(sizeNoPadding / 32);
    const remainder = sizeNoPadding % 32;
    let i = 0;

    if (fullChunkCount > 0) {
      for (const node of target.iterateNodesAtDepth(this.getChunkDepth(), 0, fullChunkCount)) {
        output.set(node.root, offset + i * 32);
        i++;
      }
    }

    if (remainder) {
      output.set(this.tree_getRootAtChunkIndex(target, fullChunkCount).slice(0, remainder), offset + i * 32);
    }

    const bitLength = this.tree_getLength(target);
    const size = this.tree_getSerializedLength(target);
    const newOffset = offset + size; // set padding bit

    output[newOffset - 1] |= 1 << bitLength % 8;
    return newOffset;
  }

  getBitOffset(index) {
    return index % 8;
  }

  getChunkOffset(index) {
    return Math.floor(index % 256 / 8);
  }

  getChunkIndex(index) {
    return Math.floor(index / 256);
  }

  tree_getChunkCount(target) {
    return Math.ceil(this.tree_getLength(target) / 256);
  }

  *tree_iterateValues(target) {
    const length = this.tree_getLength(target);
    const chunkCount = this.tree_getChunkCount(target);
    const nodeIterator = target.iterateNodesAtDepth(this.getChunkDepth(), 0, chunkCount);
    let i = 0;

    for (const node of nodeIterator) {
      const chunk = node.root;

      for (let j = 0; j < 256 && i < length; i++, j++) {
        const byte = chunk[this.getChunkOffset(i)];
        yield !!(byte & 1 << this.getBitOffset(i));
      }
    }
  }

  tree_getValueAtIndex(target, index) {
    const chunk = this.tree_getRootAtChunkIndex(target, this.getChunkIndex(index));
    const byte = chunk[this.getChunkOffset(index)];
    return !!(byte & 1 << this.getBitOffset(index));
  }

  tree_setValueAtIndex(target, property, value, expand = false) {
    const chunkGindex = this.getGindexAtChunkIndex(this.getChunkIndex(property));
    const chunk = new Uint8Array(32);
    chunk.set(target.getRoot(chunkGindex));
    const byteOffset = this.getChunkOffset(property);

    if (value) {
      chunk[byteOffset] |= 1 << this.getBitOffset(property);
    } else {
      chunk[byteOffset] &= 0xff ^ 1 << this.getBitOffset(property);
    }

    target.setRoot(chunkGindex, chunk, expand);
    return true;
  }

  getMaxChunkCount() {
    return Math.ceil(this.limit / 256);
  }

}

exports.BitListType = BitListType;
//# sourceMappingURL=bitList.js.map

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isRootType = isRootType;
exports.RootType = exports.ROOT_TYPE = void 0;

var _byteVector = __webpack_require__(115);

var _type = __webpack_require__(9);

var _backings = __webpack_require__(80);

var _byteArray = __webpack_require__(22);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ROOT_TYPE = Symbol.for("ssz/RootType");
exports.ROOT_TYPE = ROOT_TYPE;

function isRootType(type) {
  return (0, _type.isTypeOf)(type, ROOT_TYPE);
}

function convertRootToUint8Array(value) {
  if (value instanceof Uint8Array) {
    return value;
  } else if ((0, _backings.isTreeBacked)(value)) {
    return value.tree.root;
  } else if (Array.isArray(value)) {
    return new Uint8Array(value);
  } else {
    throw new Error("Unable to convert root to Uint8Array: not Uint8Array, tree-backed, or Array");
  }
}

class RootType extends _byteVector.ByteVectorType {
  constructor(options) {
    super({
      length: 32
    });

    _defineProperty(this, "_expandedType", void 0);

    this._expandedType = options.expandedType;

    this._typeSymbols.add(ROOT_TYPE);
  }

  get expandedType() {
    if (typeof this._expandedType === "function") {
      this._expandedType = this._expandedType();
    }

    return this._expandedType;
  }

  struct_equals(value1, value2) {
    return (0, _byteArray.byteArrayEquals)(convertRootToUint8Array(value1), convertRootToUint8Array(value2));
  }

  equals(value1, value2) {
    return this.struct_equals(value1, value2);
  }

}

exports.RootType = RootType;
//# sourceMappingURL=root.js.map

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isContainerType = isContainerType;
exports.ContainerType = exports.CONTAINER_TYPE = void 0;

var _abstract = __webpack_require__(79);

var _type = __webpack_require__(9);

var _persistentMerkleTree = __webpack_require__(41);

var _errorPath = __webpack_require__(113);

var _json = __webpack_require__(183);

var _treeValue = __webpack_require__(61);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const CONTAINER_TYPE = Symbol.for("ssz/ContainerType");
exports.CONTAINER_TYPE = CONTAINER_TYPE;

function isContainerType(type) {
  return (0, _type.isTypeOf)(type, CONTAINER_TYPE);
}

class ContainerType extends _abstract.CompositeType {
  // ES6 ensures key order is chronological
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(options) {
    super();

    _defineProperty(this, "fields", void 0);

    this.fields = _objectSpread({}, options.fields);

    this._typeSymbols.add(CONTAINER_TYPE);
  }

  struct_defaultValue() {
    const obj = {};

    for (const [fieldName, fieldType] of Object.entries(this.fields)) {
      obj[fieldName] = fieldType.struct_defaultValue();
    }

    return obj;
  }

  struct_getSerializedLength(value) {
    let s = 0;

    for (const [fieldName, fieldType] of Object.entries(this.fields)) {
      if (fieldType.hasVariableSerializedLength()) {
        s += fieldType.struct_getSerializedLength(value[fieldName]) + 4;
      } else {
        s += fieldType.struct_getSerializedLength(null);
      }
    }

    return s;
  }

  getMaxSerializedLength() {
    const fixedSize = Object.values(this.fields).reduce((total, fieldType) => total + (fieldType.hasVariableSerializedLength() ? 4 : fieldType.getMaxSerializedLength()), 0);
    const maxDynamicSize = Object.values(this.fields).reduce((total, fieldType) => total += fieldType.hasVariableSerializedLength() ? fieldType.getMaxSerializedLength() : 0, 0);
    return fixedSize + maxDynamicSize;
  }

  getMinSerializedLength() {
    const fixedSize = Object.values(this.fields).reduce((total, fieldType) => total + (fieldType.hasVariableSerializedLength() ? 4 : fieldType.getMinSerializedLength()), 0);
    const minDynamicSize = Object.values(this.fields).reduce((total, fieldType) => total += fieldType.hasVariableSerializedLength() ? fieldType.getMinSerializedLength() : 0, 0);
    return fixedSize + minDynamicSize;
  }

  struct_assertValidValue(value) {
    for (const [fieldName, fieldType] of Object.entries(this.fields)) {
      try {
        // @ts-ignore
        fieldType.struct_assertValidValue(value[fieldName]);
      } catch (e) {
        throw new Error("Invalid field ".concat(fieldName, ": ").concat(e.message));
      }
    }
  }

  struct_equals(value1, value2) {
    this.struct_assertValidValue(value1);
    this.struct_assertValidValue(value2);
    return Object.entries(this.fields).every(([fieldName, fieldType]) => {
      return fieldType.struct_equals(value1[fieldName], value2[fieldName]);
    });
  }

  struct_clone(value) {
    const newValue = {};

    for (const [fieldName, fieldType] of Object.entries(this.fields)) {
      newValue[fieldName] = fieldType.struct_clone(value[fieldName]);
    }

    return newValue;
  }

  struct_deserializeFromBytes(data, start, end) {
    this.bytes_validate(data, start, end);
    let currentIndex = start;
    let nextIndex = currentIndex;
    const value = {}; // Since variable-sized values can be interspersed with fixed-sized values, we precalculate
    // the offset indices so we can more easily deserialize the fields in once pass
    // first we get the fixed sizes

    const fixedSizes = Object.values(this.fields).map(fieldType => !fieldType.hasVariableSerializedLength() && fieldType.struct_getSerializedLength(null)); // with the fixed sizes, we can read the offsets, and store for our single pass

    const offsets = [];
    const fixedSection = new DataView(data.buffer, data.byteOffset);
    const fixedEnd = fixedSizes.reduce((index, size) => {
      if (size === false) {
        offsets.push(start + fixedSection.getUint32(index, true));
        return index + 4;
      } else {
        return index + size;
      }
    }, start);
    offsets.push(end);

    if (fixedEnd !== offsets[0]) {
      throw new Error("Not all variable bytes consumed");
    }

    let offsetIndex = 0;

    for (const [i, [fieldName, fieldType]] of Object.entries(this.fields).entries()) {
      try {
        const fieldSize = fixedSizes[i];

        if (fieldSize === false) {
          // variable-sized field
          if (offsets[offsetIndex] > end) {
            throw new Error("Offset out of bounds");
          }

          if (offsets[offsetIndex] > offsets[offsetIndex + 1]) {
            throw new Error("Offsets must be increasing");
          }

          value[fieldName] = fieldType.struct_deserializeFromBytes(data, offsets[offsetIndex], offsets[offsetIndex + 1]);
          offsetIndex++;
          currentIndex += 4;
        } else {
          // fixed-sized field
          nextIndex = currentIndex + fieldSize;
          value[fieldName] = fieldType.struct_deserializeFromBytes(data, currentIndex, nextIndex);
          currentIndex = nextIndex;
        }
      } catch (e) {
        throw new _errorPath.SszErrorPath(e, fieldName);
      }
    }

    if (offsets.length > 1) {
      if (offsetIndex !== offsets.length - 1) {
        throw new Error("Not all variable bytes consumed");
      }

      if (currentIndex !== offsets[0]) {
        throw new Error("Not all fixed bytes consumed");
      }
    } else {
      if (currentIndex !== end) {
        throw new Error("Not all fixed bytes consumed");
      }
    }

    return value;
  }

  struct_serializeToBytes(value, output, offset) {
    let variableIndex = offset + Object.values(this.fields).reduce((total, fieldType) => total + (fieldType.hasVariableSerializedLength() ? 4 : fieldType.struct_getSerializedLength(null)), 0);
    const fixedSection = new DataView(output.buffer, output.byteOffset + offset);
    let fixedIndex = offset;

    for (const [fieldName, fieldType] of Object.entries(this.fields)) {
      if (fieldType.hasVariableSerializedLength()) {
        // write offset
        fixedSection.setUint32(fixedIndex - offset, variableIndex - offset, true);
        fixedIndex += 4; // write serialized element to variable section

        variableIndex = fieldType.toBytes(value[fieldName], output, variableIndex);
      } else {
        fixedIndex = fieldType.toBytes(value[fieldName], output, fixedIndex);
      }
    }

    return variableIndex;
  }

  struct_getRootAtChunkIndex(value, index) {
    const fieldName = Object.keys(this.fields)[index];
    const fieldType = this.fields[fieldName];
    return fieldType.struct_hashTreeRoot(value[fieldName]);
  }

  struct_convertFromJson(data, options) {
    if (typeof data !== "object") {
      throw new Error("Invalid JSON container: expected Object");
    }

    const value = {};

    for (const [fieldName, fieldType] of Object.entries(this.fields)) {
      const expectedCase = options ? options.case : null;
      const expectedFieldName = (0, _json.toExpectedCase)(fieldName, expectedCase);

      if (data[expectedFieldName] === undefined) {
        throw new Error("Invalid JSON container field: expected field ".concat(expectedFieldName, " is undefined"));
      }

      value[fieldName] = fieldType.fromJson(data[expectedFieldName], options);
    }

    return value;
  }

  struct_convertToJson(value, options) {
    const data = {};
    const expectedCase = options ? options.case : null;

    for (const [fieldName, fieldType] of Object.entries(this.fields)) {
      data[(0, _json.toExpectedCase)(fieldName, expectedCase)] = fieldType.toJson(value[fieldName], options);
    }

    return data;
  }

  struct_convertToTree(value) {
    if ((0, _treeValue.isTreeBacked)(value)) return value.tree.clone();
    return new _persistentMerkleTree.Tree((0, _persistentMerkleTree.subtreeFillToContents)(Object.entries(this.fields).map(([fieldName, fieldType]) => {
      if (!(0, _abstract.isCompositeType)(fieldType)) {
        const chunk = new Uint8Array(32);
        fieldType.toBytes(value[fieldName], chunk, 0);
        return new _persistentMerkleTree.LeafNode(chunk);
      } else {
        return fieldType.struct_convertToTree(value[fieldName]).rootNode;
      }
    }), this.getChunkDepth()));
  }

  struct_getPropertyNames() {
    return Object.keys(this.fields);
  }

  bytes_getVariableOffsets(target) {
    const types = Object.values(this.fields);
    const offsets = []; // variable-sized values can be interspersed with fixed-sized values
    // variable-sized value indices are serialized as offsets, indices deeper in the byte array

    let currentIndex = 0;
    let nextIndex = 0;
    const fixedSection = new DataView(target.buffer, target.byteOffset);
    const fixedOffsets = [];
    const variableOffsets = [];
    let variableIndex = 0;

    for (const [i, fieldType] of types.entries()) {
      if (fieldType.hasVariableSerializedLength()) {
        const offset = fixedSection.getUint32(currentIndex, true);

        if (offset > target.length) {
          throw new Error("Offset out of bounds");
        }

        variableOffsets.push(offset);
        currentIndex = nextIndex = currentIndex + 4;
        variableIndex++;
      } else {
        nextIndex = currentIndex + fieldType.struct_getSerializedLength(null);
        fixedOffsets[i] = [currentIndex, nextIndex];
        currentIndex = nextIndex;
      }
    }

    variableOffsets.push(target.length);
    variableIndex = 0;

    for (const [i, fieldType] of types.entries()) {
      if (fieldType.hasVariableSerializedLength()) {
        if (variableOffsets[variableIndex] > variableOffsets[variableIndex + 1]) {
          throw new Error("Offsets must be increasing");
        }

        offsets.push([variableOffsets[variableIndex], variableOffsets[variableIndex + 1]]);
        variableIndex++;
      } else {
        offsets.push(fixedOffsets[i]);
      }
    }

    return offsets;
  }

  tree_defaultNode() {
    if (!this._defaultNode) {
      this._defaultNode = (0, _persistentMerkleTree.subtreeFillToContents)(Object.values(this.fields).map(fieldType => {
        if (!(0, _abstract.isCompositeType)(fieldType)) {
          return (0, _persistentMerkleTree.zeroNode)(0);
        } else {
          return fieldType.tree_defaultNode();
        }
      }), this.getChunkDepth());
    }

    return this._defaultNode;
  }

  tree_convertToStruct(target) {
    const value = {};

    for (const [i, [fieldName, fieldType]] of Object.entries(this.fields).entries()) {
      if (!(0, _abstract.isCompositeType)(fieldType)) {
        const chunk = this.tree_getRootAtChunkIndex(target, i);
        value[fieldName] = fieldType.struct_deserializeFromBytes(chunk, 0);
      } else {
        const subtree = this.tree_getSubtreeAtChunkIndex(target, i);
        value[fieldName] = fieldType.tree_convertToStruct(subtree);
      }
    }

    return value;
  }

  tree_getSerializedLength(target) {
    let s = 0;

    for (const [i, fieldType] of Object.values(this.fields).entries()) {
      if (fieldType.hasVariableSerializedLength()) {
        s += fieldType.tree_getSerializedLength(this.tree_getSubtreeAtChunkIndex(target, i)) + 4;
      } else {
        s += fieldType.struct_getSerializedLength(null);
      }
    }

    return s;
  }

  tree_deserializeFromBytes(data, start, end) {
    const target = this.tree_defaultValue();
    const offsets = this.bytes_getVariableOffsets(new Uint8Array(data.buffer, data.byteOffset + start, end - start));

    for (const [i, fieldType] of Object.values(this.fields).entries()) {
      const [currentOffset, nextOffset] = offsets[i];

      if (!(0, _abstract.isCompositeType)(fieldType)) {
        // view of the chunk, shared buffer from `data`
        const dataChunk = new Uint8Array(data.buffer, data.byteOffset + start + currentOffset, nextOffset - currentOffset);
        const chunk = new Uint8Array(32); // copy chunk into new memory

        chunk.set(dataChunk);
        this.tree_setRootAtChunkIndex(target, i, chunk);
      } else {
        this.tree_setSubtreeAtChunkIndex(target, i, fieldType.tree_deserializeFromBytes(data, start + currentOffset, start + nextOffset));
      }
    }

    return target;
  }

  tree_serializeToBytes(target, output, offset) {
    let variableIndex = offset + Object.values(this.fields).reduce((total, fieldType) => total + (fieldType.hasVariableSerializedLength() ? 4 : fieldType.struct_getSerializedLength(null)), 0);
    const fixedSection = new DataView(output.buffer, output.byteOffset + offset);
    let fixedIndex = offset;
    let i = 0;
    const fieldTypes = Object.values(this.fields);

    for (const node of target.iterateNodesAtDepth(this.getChunkDepth(), i, fieldTypes.length)) {
      const fieldType = fieldTypes[i];

      if (!(0, _abstract.isCompositeType)(fieldType)) {
        const s = fieldType.struct_getSerializedLength();
        output.set(node.root.slice(0, s), fixedIndex);
        fixedIndex += s;
      } else if (fieldType.hasVariableSerializedLength()) {
        // write offset
        fixedSection.setUint32(fixedIndex - offset, variableIndex - offset, true);
        fixedIndex += 4; // write serialized element to variable section

        variableIndex = fieldType.tree_serializeToBytes(new _persistentMerkleTree.Tree(node), output, variableIndex);
      } else {
        fixedIndex = fieldType.tree_serializeToBytes(new _persistentMerkleTree.Tree(node), output, fixedIndex);
      }

      i++;
    }

    return variableIndex;
  }

  getPropertyGindex(prop) {
    const chunkIndex = Object.keys(this.fields).findIndex(fieldName => fieldName === prop);

    if (chunkIndex === -1) {
      throw new Error("Invalid container field name: ".concat(String(prop)));
    }

    return this.getGindexAtChunkIndex(chunkIndex);
  }

  getPropertyType(prop) {
    const type = this.fields[prop];

    if (!type) {
      throw new Error("Invalid container field name: ".concat(String(prop)));
    }

    return type;
  }

  tree_getPropertyNames() {
    return Object.keys(this.fields);
  }

  tree_getProperty(target, prop) {
    const chunkIndex = Object.keys(this.fields).findIndex(fieldName => fieldName === prop);

    if (chunkIndex === -1) {
      return undefined;
    }

    const fieldType = this.fields[prop];

    if (!(0, _abstract.isCompositeType)(fieldType)) {
      const chunk = this.tree_getRootAtChunkIndex(target, chunkIndex);
      return fieldType.struct_deserializeFromBytes(chunk, 0);
    } else {
      return this.tree_getSubtreeAtChunkIndex(target, chunkIndex);
    }
  }

  tree_setProperty(target, property, value) {
    const chunkIndex = Object.keys(this.fields).findIndex(fieldName => fieldName === property);

    if (chunkIndex === -1) {
      throw new Error("Invalid container field name");
    }

    const chunkGindex = this.getGindexAtChunkIndex(chunkIndex);
    const fieldType = this.fields[property];

    if (!(0, _abstract.isCompositeType)(fieldType)) {
      const chunk = new Uint8Array(32);
      fieldType.struct_serializeToBytes(value, chunk, 0);
      target.setRoot(chunkGindex, chunk);
      return true;
    } else {
      target.setSubtree(chunkGindex, value);
      return true;
    }
  }

  tree_deleteProperty(target, prop) {
    const chunkIndex = Object.keys(this.fields).findIndex(fieldName => fieldName === prop);

    if (chunkIndex === -1) {
      throw new Error("Invalid container field name");
    }

    const fieldType = this.fields[prop];

    if (!(0, _abstract.isCompositeType)(fieldType)) {
      return this.tree_setProperty(target, prop, fieldType.struct_defaultValue());
    } else {
      return this.tree_setProperty(target, prop, fieldType.tree_defaultValue());
    }
  }

  *tree_iterateValues(target) {
    const gindexIterator = (0, _persistentMerkleTree.iterateAtDepth)(this.getChunkDepth(), BigInt(0), BigInt(this.getMaxChunkCount()))[Symbol.iterator]();

    for (const propType of Object.values(this.fields)) {
      const {
        value,
        done
      } = gindexIterator.next();

      if (done) {
        return;
      } else {
        if (!(0, _abstract.isCompositeType)(propType)) {
          yield propType.struct_deserializeFromBytes(value.root, 0);
        } else {
          yield target.getSubtree(value);
        }
      }
    }
  }

  *tree_readonlyIterateValues(target) {
    const chunkIterator = target.iterateNodesAtDepth(this.getChunkDepth(), 0, this.getMaxChunkCount());

    for (const propType of Object.values(this.fields)) {
      const {
        value,
        done
      } = chunkIterator.next();

      if (done) {
        return;
      } else {
        if (!(0, _abstract.isCompositeType)(propType)) {
          yield propType.struct_deserializeFromBytes(value.root, 0);
        } else {
          yield new _persistentMerkleTree.Tree(value);
        }
      }
    }
  }

  hasVariableSerializedLength() {
    return Object.values(this.fields).some(fieldType => fieldType.hasVariableSerializedLength());
  }

  getMaxChunkCount() {
    return Object.keys(this.fields).length;
  }

  tree_getLeafGindices(target, root = BigInt(1)) {
    const gindices = [];

    for (const [fieldName, fieldType] of Object.entries(this.fields)) {
      const fieldGindex = this.getPropertyGindex(fieldName);
      const extendedFieldGindex = (0, _persistentMerkleTree.concatGindices)([root, fieldGindex]);

      if (!(0, _abstract.isCompositeType)(fieldType)) {
        gindices.push(extendedFieldGindex);
      } else {
        if (fieldType.hasVariableSerializedLength()) {
          if (!target) {
            throw new Error("variable type requires tree argument to get leaves");
          }

          gindices.push(...fieldType.tree_getLeafGindices(target.getSubtree(fieldGindex), extendedFieldGindex));
        } else {
          gindices.push(...fieldType.tree_getLeafGindices(undefined, extendedFieldGindex));
        }
      }
    }

    return gindices;
  }

}

exports.ContainerType = ContainerType;
//# sourceMappingURL=container.js.map

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toExpectedCase = toExpectedCase;

var _case = _interopRequireDefault(__webpack_require__(184));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toExpectedCase(value, expectedCase = "camel") {
  switch (expectedCase) {
    case "camel":
      return _case.default.camel(value);

    case "snake":
      return _case.default.snake(value);

    default:
      return value;
  }
}
//# sourceMappingURL=json.js.map

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

/*! Case - v1.6.2 - 2020-03-24
* Copyright (c) 2020 Nathan Bubna; Licensed MIT, GPL */
(function() {
    "use strict";
    var unicodes = function(s, prefix) {
        prefix = prefix || '';
        return s.replace(/(^|-)/g, '$1\\u'+prefix).replace(/,/g, '\\u'+prefix);
    },
    basicSymbols = unicodes('20-26,28-2F,3A-40,5B-60,7B-7E,A0-BF,D7,F7', '00'),
    baseLowerCase = 'a-z'+unicodes('DF-F6,F8-FF', '00'),
    baseUpperCase = 'A-Z'+unicodes('C0-D6,D8-DE', '00'),
    improperInTitle = 'A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\.?|Via',
    regexps = function(symbols, lowers, uppers, impropers) {
        symbols = symbols || basicSymbols;
        lowers = lowers || baseLowerCase;
        uppers = uppers || baseUpperCase;
        impropers = impropers || improperInTitle;
        return {
            capitalize: new RegExp('(^|['+symbols+'])(['+lowers+'])', 'g'),
            pascal: new RegExp('(^|['+symbols+'])+(['+lowers+uppers+'])', 'g'),
            fill: new RegExp('['+symbols+']+(.|$)','g'),
            sentence: new RegExp('(^\\s*|[\\?\\!\\.]+"?\\s+"?|,\\s+")(['+lowers+'])', 'g'),
            improper: new RegExp('\\b('+impropers+')\\b', 'g'),
            relax: new RegExp('([^'+uppers+'])(['+uppers+']*)(['+uppers+'])(?=[^'+uppers+']|$)', 'g'),
            upper: new RegExp('^[^'+lowers+']+$'),
            hole: /[^\s]\s[^\s]/,
            apostrophe: /'/g,
            room: new RegExp('['+symbols+']')
        };
    },
    re = regexps(),
    _ = {
        re: re,
        unicodes: unicodes,
        regexps: regexps,
        types: [],
        up: String.prototype.toUpperCase,
        low: String.prototype.toLowerCase,
        cap: function(s) {
            return _.up.call(s.charAt(0))+s.slice(1);
        },
        decap: function(s) {
            return _.low.call(s.charAt(0))+s.slice(1);
        },
        deapostrophe: function(s) {
            return s.replace(re.apostrophe, '');
        },
        fill: function(s, fill, deapostrophe) {
            if (fill != null) {
                s = s.replace(re.fill, function(m, next) {
                    return next ? fill + next : '';
                });
            }
            if (deapostrophe) {
                s = _.deapostrophe(s);
            }
            return s;
        },
        prep: function(s, fill, pascal, upper) {
            s = s == null ? '' : s + '';// force to string
            if (!upper && re.upper.test(s)) {
                s = _.low.call(s);
            }
            if (!fill && !re.hole.test(s)) {
                var holey = _.fill(s, ' ');
                if (re.hole.test(holey)) {
                    s = holey;
                }
            }
            if (!pascal && !re.room.test(s)) {
                s = s.replace(re.relax, _.relax);
            }
            return s;
        },
        relax: function(m, before, acronym, caps) {
            return before + ' ' + (acronym ? acronym+' ' : '') + caps;
        }
    },
    Case = {
        _: _,
        of: function(s) {
            for (var i=0,m=_.types.length; i<m; i++) {
                if (Case[_.types[i]].apply(Case, arguments) === s){ return _.types[i]; }
            }
        },
        flip: function(s) {
            return s.replace(/\w/g, function(l) {
                return (l == _.up.call(l) ? _.low : _.up).call(l);
            });
        },
        random: function(s) {
            return s.replace(/\w/g, function(l) {
                return (Math.round(Math.random()) ? _.up : _.low).call(l);
            });
        },
        type: function(type, fn) {
            Case[type] = fn;
            _.types.push(type);
        }
    },
    types = {
        lower: function(s, fill, deapostrophe) {
            return _.fill(_.low.call(_.prep(s, fill)), fill, deapostrophe);
        },
        snake: function(s) {
            return Case.lower(s, '_', true);
        },
        constant: function(s) {
            return Case.upper(s, '_', true);
        },
        camel: function(s) {
            return _.decap(Case.pascal(s));
        },
        kebab: function(s) {
            return Case.lower(s, '-', true);
        },
        upper: function(s, fill, deapostrophe) {
            return _.fill(_.up.call(_.prep(s, fill, false, true)), fill, deapostrophe);
        },
        capital: function(s, fill, deapostrophe) {
            return _.fill(_.prep(s).replace(re.capitalize, function(m, border, letter) {
                return border+_.up.call(letter);
            }), fill, deapostrophe);
        },
        header: function(s) {
            return Case.capital(s, '-', true);
        },
        pascal: function(s) {
            return _.fill(_.prep(s, false, true).replace(re.pascal, function(m, border, letter) {
                return _.up.call(letter);
            }), '', true);
        },
        title: function(s) {
            return Case.capital(s).replace(re.improper, function(small, p, i, s) {
                return i > 0 && i < s.lastIndexOf(' ') ? _.low.call(small) : small;
            });
        },
        sentence: function(s, names, abbreviations) {
            s = Case.lower(s).replace(re.sentence, function(m, prelude, letter) {
                return prelude + _.up.call(letter);
            });
            if (names) {
                names.forEach(function(name) {
                    s = s.replace(new RegExp('\\b'+Case.lower(name)+'\\b', "g"), _.cap);
                });
            }
            if (abbreviations) {
                abbreviations.forEach(function(abbr) {
                    s = s.replace(new RegExp('(\\b'+Case.lower(abbr)+'\\. +)(\\w)'), function(m, abbrAndSpace, letter) {
                        return abbrAndSpace + _.low.call(letter);
                    });
                });
            }
            return s;
        }
    };

    // TODO: Remove "squish" in a future breaking release.
    types.squish = types.pascal;
    
    // Allow import default
    Case.default = Case;

    for (var type in types) {
        Case.type(type, types[type]);
    }
    // export Case (AMD, commonjs, or global)
    var define = typeof define === "function" ? define : function(){};
    define( true && module.exports ? module.exports = Case : this.Case = Case);

}).call(this);


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(12);
var toLength = __webpack_require__(20);
var advanceStringIndex = __webpack_require__(186);
var regExpExec = __webpack_require__(187);

// @@match logic
__webpack_require__(188)('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(99)(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(58);
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(189);
var redefine = __webpack_require__(17);
var hide = __webpack_require__(11);
var fails = __webpack_require__(8);
var defined = __webpack_require__(48);
var wks = __webpack_require__(3);
var regexpExec = __webpack_require__(116);

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(116);
__webpack_require__(2)({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(191)('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if (__webpack_require__(5)) {
  var LIBRARY = __webpack_require__(25);
  var global = __webpack_require__(4);
  var fails = __webpack_require__(8);
  var $export = __webpack_require__(2);
  var $typed = __webpack_require__(117);
  var $buffer = __webpack_require__(192);
  var ctx = __webpack_require__(47);
  var anInstance = __webpack_require__(119);
  var propertyDesc = __webpack_require__(24);
  var hide = __webpack_require__(11);
  var redefineAll = __webpack_require__(118);
  var toInteger = __webpack_require__(27);
  var toLength = __webpack_require__(20);
  var toIndex = __webpack_require__(120);
  var toAbsoluteIndex = __webpack_require__(49);
  var toPrimitive = __webpack_require__(45);
  var has = __webpack_require__(18);
  var classof = __webpack_require__(58);
  var isObject = __webpack_require__(14);
  var toObject = __webpack_require__(15);
  var isArrayIter = __webpack_require__(193);
  var create = __webpack_require__(36);
  var getPrototypeOf = __webpack_require__(72);
  var gOPN = __webpack_require__(39).f;
  var getIterFn = __webpack_require__(194);
  var uid = __webpack_require__(21);
  var wks = __webpack_require__(3);
  var createArrayMethod = __webpack_require__(60);
  var createArrayIncludes = __webpack_require__(69);
  var speciesConstructor = __webpack_require__(195);
  var ArrayIterators = __webpack_require__(30);
  var Iterators = __webpack_require__(28);
  var $iterDetect = __webpack_require__(196);
  var setSpecies = __webpack_require__(197);
  var arrayFill = __webpack_require__(121);
  var arrayCopyWithin = __webpack_require__(198);
  var $DP = __webpack_require__(7);
  var $GOPD = __webpack_require__(35);
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4);
var DESCRIPTORS = __webpack_require__(5);
var LIBRARY = __webpack_require__(25);
var $typed = __webpack_require__(117);
var hide = __webpack_require__(11);
var redefineAll = __webpack_require__(118);
var fails = __webpack_require__(8);
var anInstance = __webpack_require__(119);
var toInteger = __webpack_require__(27);
var toLength = __webpack_require__(20);
var toIndex = __webpack_require__(120);
var gOPN = __webpack_require__(39).f;
var dP = __webpack_require__(7).f;
var arrayFill = __webpack_require__(121);
var setToStringTag = __webpack_require__(56);
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(28);
var ITERATOR = __webpack_require__(3)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(58);
var ITERATOR = __webpack_require__(3)('iterator');
var Iterators = __webpack_require__(28);
module.exports = __webpack_require__(23).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(12);
var aFunction = __webpack_require__(34);
var SPECIES = __webpack_require__(3)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(3)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4);
var dP = __webpack_require__(7);
var DESCRIPTORS = __webpack_require__(5);
var SPECIES = __webpack_require__(3)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(15);
var toAbsoluteIndex = __webpack_require__(49);
var toLength = __webpack_require__(20);

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(2);
var aFunction = __webpack_require__(34);
var toObject = __webpack_require__(15);
var fails = __webpack_require__(8);
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(40)($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(2);
var $indexOf = __webpack_require__(69)(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(40)($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(2);
var $filter = __webpack_require__(60)(2);

$export($export.P + $export.F * !__webpack_require__(40)([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(19);
var $getOwnPropertyDescriptor = __webpack_require__(35).f;

__webpack_require__(73)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(2);
var $forEach = __webpack_require__(60)(0);
var STRICT = __webpack_require__(40)([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(2);
var ownKeys = __webpack_require__(205);
var toIObject = __webpack_require__(19);
var gOPD = __webpack_require__(35);
var createProperty = __webpack_require__(206);

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(39);
var gOPS = __webpack_require__(50);
var anObject = __webpack_require__(12);
var Reflect = __webpack_require__(4).Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(7);
var createDesc = __webpack_require__(24);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(2);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(5), 'Object', { defineProperties: __webpack_require__(95) });


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  phase0: true,
  altair: true,
  allForks: true
};
Object.defineProperty(exports, "phase0", {
  enumerable: true,
  get: function () {
    return _phase.ts;
  }
});
Object.defineProperty(exports, "altair", {
  enumerable: true,
  get: function () {
    return _altair.ts;
  }
});
Object.defineProperty(exports, "allForks", {
  enumerable: true,
  get: function () {
    return _allForks.ts;
  }
});

var _types = __webpack_require__(63);

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});

var _phase = __webpack_require__(64);

var _altair = __webpack_require__(88);

var _allForks = __webpack_require__(133);
//# sourceMappingURL=types.js.map

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _misc = __webpack_require__(122);

Object.keys(_misc).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _misc[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _misc[key];
    }
  });
});

var _operations = __webpack_require__(123);

Object.keys(_operations).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _operations[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _operations[key];
    }
  });
});

var _block = __webpack_require__(210);

Object.keys(_block).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _block[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _block[key];
    }
  });
});

var _state = __webpack_require__(211);

Object.keys(_state).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _state[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _state[key];
    }
  });
});

var _validator = __webpack_require__(124);

Object.keys(_validator).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _validator[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _validator[key];
    }
  });
});

var _wire = __webpack_require__(212);

Object.keys(_wire).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _wire[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _wire[key];
    }
  });
});

var _api = __webpack_require__(125);

Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _api[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _api[key];
    }
  });
});

var _types = __webpack_require__(63);

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=block.js.map

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=state.js.map

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=wire.js.map

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlashingProtectionAttestationLowerBound = exports.SlashingProtectionAttestation = exports.SlashingProtectionBlock = exports.Genesis = exports.BeaconBlocksByRootRequest = exports.BeaconBlocksByRangeRequest = exports.Metadata = exports.Ping = exports.Goodbye = exports.Status = exports.SignedAggregateAndProof = exports.AggregateAndProof = exports.CommitteeAssignment = exports.BeaconState = exports.EpochAttestations = exports.SignedBeaconBlock = exports.BeaconBlock = exports.BeaconBlockBody = exports.SignedVoluntaryExit = exports.VoluntaryExit = exports.ProposerSlashing = exports.Deposit = exports.AttesterSlashing = exports.Attestation = exports.SigningData = exports.PendingAttestation = exports.IndexedAttestation = exports.AttestationData = exports.Validator = exports.HistoricalBatch = exports.HistoricalStateRoots = exports.HistoricalBlockRoots = exports.ENRForkID = exports.ForkData = exports.Fork = exports.Eth1DataOrdered = exports.Eth1Data = exports.DepositEvent = exports.DepositDataRootList = exports.DepositData = exports.DepositMessage = exports.CommitteeIndices = exports.CommitteeBits = exports.Checkpoint = exports.SignedBeaconBlockHeader = exports.BeaconBlockHeader = exports.AttestationSubnets = void 0;

var _lodestarParams = __webpack_require__(126);

var _ssz = __webpack_require__(6);

var _primitive = __webpack_require__(130);

var _lazyVar = __webpack_require__(132);

const {
  Boolean,
  Bytes32,
  Number64,
  Uint64,
  Slot,
  Epoch,
  CommitteeIndex,
  ValidatorIndex,
  Gwei,
  Root,
  Version,
  ForkDigest,
  BLSPubkey,
  BLSSignature,
  Domain
} = _primitive.ssz; // So the expandedRoots can be referenced, and break the circular dependency

const typesRef = new _lazyVar.LazyVariable(); // Misc types
// ==========

const AttestationSubnets = new _ssz.BitVectorType({
  length: _lodestarParams.ATTESTATION_SUBNET_COUNT
});
exports.AttestationSubnets = AttestationSubnets;
const BeaconBlockHeader = new _ssz.ContainerType({
  fields: {
    slot: Slot,
    proposerIndex: ValidatorIndex,
    parentRoot: Root,
    stateRoot: Root,
    bodyRoot: Root
  }
});
exports.BeaconBlockHeader = BeaconBlockHeader;
const SignedBeaconBlockHeader = new _ssz.ContainerType({
  fields: {
    message: BeaconBlockHeader,
    signature: BLSSignature
  }
});
exports.SignedBeaconBlockHeader = SignedBeaconBlockHeader;
const Checkpoint = new _ssz.ContainerType({
  fields: {
    epoch: Epoch,
    root: Root
  }
});
exports.Checkpoint = Checkpoint;
const CommitteeBits = new _ssz.BitListType({
  limit: _lodestarParams.MAX_VALIDATORS_PER_COMMITTEE
});
exports.CommitteeBits = CommitteeBits;
const CommitteeIndices = new _ssz.ListType({
  elementType: ValidatorIndex,
  limit: _lodestarParams.MAX_VALIDATORS_PER_COMMITTEE
});
exports.CommitteeIndices = CommitteeIndices;
const DepositMessage = new _ssz.ContainerType({
  fields: {
    pubkey: BLSPubkey,
    withdrawalCredentials: Bytes32,
    amount: Gwei
  }
});
exports.DepositMessage = DepositMessage;
const DepositData = new _ssz.ContainerType({
  fields: {
    pubkey: BLSPubkey,
    withdrawalCredentials: Bytes32,
    amount: Gwei,
    signature: BLSSignature
  }
});
exports.DepositData = DepositData;
const DepositDataRootList = new _ssz.ListType({
  elementType: new _ssz.RootType({
    expandedType: DepositData
  }),
  limit: 2 ** _lodestarParams.DEPOSIT_CONTRACT_TREE_DEPTH
});
exports.DepositDataRootList = DepositDataRootList;
const DepositEvent = new _ssz.ContainerType({
  fields: {
    depositData: DepositData,
    blockNumber: Number64,
    index: Number64
  }
});
exports.DepositEvent = DepositEvent;
const Eth1Data = new _ssz.ContainerType({
  fields: {
    depositRoot: Root,
    depositCount: Number64,
    blockHash: Bytes32
  }
});
exports.Eth1Data = Eth1Data;
const Eth1DataOrdered = new _ssz.ContainerType({
  fields: {
    depositRoot: Root,
    depositCount: Number64,
    blockHash: Bytes32,
    blockNumber: Number64
  }
});
exports.Eth1DataOrdered = Eth1DataOrdered;
const Fork = new _ssz.ContainerType({
  fields: {
    previousVersion: Version,
    currentVersion: Version,
    epoch: Epoch
  }
});
exports.Fork = Fork;
const ForkData = new _ssz.ContainerType({
  fields: {
    currentVersion: Version,
    genesisValidatorsRoot: Root
  }
});
exports.ForkData = ForkData;
const ENRForkID = new _ssz.ContainerType({
  fields: {
    forkDigest: ForkDigest,
    nextForkVersion: Version,
    nextForkEpoch: Epoch
  }
});
exports.ENRForkID = ENRForkID;
const HistoricalBlockRoots = new _ssz.VectorType({
  elementType: new _ssz.RootType({
    expandedType: () => typesRef.get().BeaconBlock
  }),
  length: _lodestarParams.SLOTS_PER_HISTORICAL_ROOT
});
exports.HistoricalBlockRoots = HistoricalBlockRoots;
const HistoricalStateRoots = new _ssz.VectorType({
  elementType: new _ssz.RootType({
    expandedType: () => typesRef.get().BeaconState
  }),
  length: _lodestarParams.SLOTS_PER_HISTORICAL_ROOT
});
exports.HistoricalStateRoots = HistoricalStateRoots;
const HistoricalBatch = new _ssz.ContainerType({
  fields: {
    blockRoots: HistoricalBlockRoots,
    stateRoots: HistoricalStateRoots
  }
});
exports.HistoricalBatch = HistoricalBatch;
const Validator = new _ssz.ContainerType({
  fields: {
    pubkey: BLSPubkey,
    withdrawalCredentials: Bytes32,
    effectiveBalance: Gwei,
    slashed: Boolean,
    activationEligibilityEpoch: Epoch,
    activationEpoch: Epoch,
    exitEpoch: Epoch,
    withdrawableEpoch: Epoch
  }
}); // Misc dependants

exports.Validator = Validator;
const AttestationData = new _ssz.ContainerType({
  fields: {
    slot: Slot,
    index: CommitteeIndex,
    beaconBlockRoot: Root,
    source: Checkpoint,
    target: Checkpoint
  }
});
exports.AttestationData = AttestationData;
const IndexedAttestation = new _ssz.ContainerType({
  fields: {
    attestingIndices: CommitteeIndices,
    data: AttestationData,
    signature: BLSSignature
  }
});
exports.IndexedAttestation = IndexedAttestation;
const PendingAttestation = new _ssz.ContainerType({
  fields: {
    aggregationBits: CommitteeBits,
    data: AttestationData,
    inclusionDelay: Slot,
    proposerIndex: ValidatorIndex
  }
});
exports.PendingAttestation = PendingAttestation;
const SigningData = new _ssz.ContainerType({
  fields: {
    objectRoot: Root,
    domain: Domain
  }
}); // Operations types
// ================

exports.SigningData = SigningData;
const Attestation = new _ssz.ContainerType({
  fields: {
    aggregationBits: CommitteeBits,
    data: AttestationData,
    signature: BLSSignature
  }
});
exports.Attestation = Attestation;
const AttesterSlashing = new _ssz.ContainerType({
  fields: {
    attestation1: IndexedAttestation,
    attestation2: IndexedAttestation
  }
});
exports.AttesterSlashing = AttesterSlashing;
const Deposit = new _ssz.ContainerType({
  fields: {
    proof: new _ssz.VectorType({
      elementType: Bytes32,
      length: _lodestarParams.DEPOSIT_CONTRACT_TREE_DEPTH + 1
    }),
    data: DepositData
  }
});
exports.Deposit = Deposit;
const ProposerSlashing = new _ssz.ContainerType({
  fields: {
    signedHeader1: SignedBeaconBlockHeader,
    signedHeader2: SignedBeaconBlockHeader
  }
});
exports.ProposerSlashing = ProposerSlashing;
const VoluntaryExit = new _ssz.ContainerType({
  fields: {
    epoch: Epoch,
    validatorIndex: ValidatorIndex
  }
});
exports.VoluntaryExit = VoluntaryExit;
const SignedVoluntaryExit = new _ssz.ContainerType({
  fields: {
    message: VoluntaryExit,
    signature: BLSSignature
  }
}); // Block types
// ===========

exports.SignedVoluntaryExit = SignedVoluntaryExit;
const BeaconBlockBody = new _ssz.ContainerType({
  fields: {
    randaoReveal: BLSSignature,
    eth1Data: Eth1Data,
    graffiti: Bytes32,
    proposerSlashings: new _ssz.ListType({
      elementType: ProposerSlashing,
      limit: _lodestarParams.MAX_PROPOSER_SLASHINGS
    }),
    attesterSlashings: new _ssz.ListType({
      elementType: AttesterSlashing,
      limit: _lodestarParams.MAX_ATTESTER_SLASHINGS
    }),
    attestations: new _ssz.ListType({
      elementType: Attestation,
      limit: _lodestarParams.MAX_ATTESTATIONS
    }),
    deposits: new _ssz.ListType({
      elementType: Deposit,
      limit: _lodestarParams.MAX_DEPOSITS
    }),
    voluntaryExits: new _ssz.ListType({
      elementType: SignedVoluntaryExit,
      limit: _lodestarParams.MAX_VOLUNTARY_EXITS
    })
  }
});
exports.BeaconBlockBody = BeaconBlockBody;
const BeaconBlock = new _ssz.ContainerType({
  fields: {
    slot: Slot,
    proposerIndex: ValidatorIndex,
    parentRoot: new _ssz.RootType({
      expandedType: () => typesRef.get().BeaconBlock
    }),
    stateRoot: new _ssz.RootType({
      expandedType: () => typesRef.get().BeaconState
    }),
    body: BeaconBlockBody
  }
});
exports.BeaconBlock = BeaconBlock;
const SignedBeaconBlock = new _ssz.ContainerType({
  fields: {
    message: BeaconBlock,
    signature: BLSSignature
  }
}); // State types
// ===========

exports.SignedBeaconBlock = SignedBeaconBlock;
const EpochAttestations = new _ssz.ListType({
  elementType: PendingAttestation,
  limit: _lodestarParams.MAX_ATTESTATIONS * _lodestarParams.SLOTS_PER_EPOCH
});
exports.EpochAttestations = EpochAttestations;
const BeaconState = new _ssz.ContainerType({
  fields: {
    // Misc
    genesisTime: Number64,
    genesisValidatorsRoot: Root,
    slot: Slot,
    fork: Fork,
    // History
    latestBlockHeader: BeaconBlockHeader,
    blockRoots: HistoricalBlockRoots,
    stateRoots: HistoricalStateRoots,
    historicalRoots: new _ssz.ListType({
      elementType: new _ssz.RootType({
        expandedType: HistoricalBatch
      }),
      limit: _lodestarParams.HISTORICAL_ROOTS_LIMIT
    }),
    // Eth1
    eth1Data: Eth1Data,
    eth1DataVotes: new _ssz.ListType({
      elementType: Eth1Data,
      limit: _lodestarParams.EPOCHS_PER_ETH1_VOTING_PERIOD * _lodestarParams.SLOTS_PER_EPOCH
    }),
    eth1DepositIndex: Number64,
    // Registry
    validators: new _ssz.ListType({
      elementType: Validator,
      limit: _lodestarParams.VALIDATOR_REGISTRY_LIMIT
    }),
    balances: new _ssz.ListType({
      elementType: Gwei,
      limit: _lodestarParams.VALIDATOR_REGISTRY_LIMIT
    }),
    randaoMixes: new _ssz.VectorType({
      elementType: Bytes32,
      length: _lodestarParams.EPOCHS_PER_HISTORICAL_VECTOR
    }),
    // Slashings
    slashings: new _ssz.VectorType({
      elementType: Gwei,
      length: _lodestarParams.EPOCHS_PER_SLASHINGS_VECTOR
    }),
    // Attestations
    previousEpochAttestations: EpochAttestations,
    currentEpochAttestations: EpochAttestations,
    // Finality
    justificationBits: new _ssz.BitVectorType({
      length: _lodestarParams.JUSTIFICATION_BITS_LENGTH
    }),
    previousJustifiedCheckpoint: Checkpoint,
    currentJustifiedCheckpoint: Checkpoint,
    finalizedCheckpoint: Checkpoint
  }
}); // Validator types
// ===============

exports.BeaconState = BeaconState;
const CommitteeAssignment = new _ssz.ContainerType({
  fields: {
    validators: CommitteeIndices,
    committeeIndex: CommitteeIndex,
    slot: Slot
  }
});
exports.CommitteeAssignment = CommitteeAssignment;
const AggregateAndProof = new _ssz.ContainerType({
  fields: {
    aggregatorIndex: ValidatorIndex,
    aggregate: Attestation,
    selectionProof: BLSSignature
  }
});
exports.AggregateAndProof = AggregateAndProof;
const SignedAggregateAndProof = new _ssz.ContainerType({
  fields: {
    message: AggregateAndProof,
    signature: BLSSignature
  }
}); // ReqResp types
// =============

exports.SignedAggregateAndProof = SignedAggregateAndProof;
const Status = new _ssz.ContainerType({
  fields: {
    forkDigest: ForkDigest,
    finalizedRoot: Root,
    finalizedEpoch: Epoch,
    headRoot: Root,
    headSlot: Slot
  }
});
exports.Status = Status;
const Goodbye = Uint64;
exports.Goodbye = Goodbye;
const Ping = Uint64;
exports.Ping = Ping;
const Metadata = new _ssz.ContainerType({
  fields: {
    seqNumber: Uint64,
    attnets: AttestationSubnets
  }
});
exports.Metadata = Metadata;
const BeaconBlocksByRangeRequest = new _ssz.ContainerType({
  fields: {
    startSlot: Slot,
    count: Number64,
    step: Number64
  }
});
exports.BeaconBlocksByRangeRequest = BeaconBlocksByRangeRequest;
const BeaconBlocksByRootRequest = new _ssz.ListType({
  elementType: Root,
  limit: _lodestarParams.MAX_REQUEST_BLOCKS
}); // Api types
// =========

exports.BeaconBlocksByRootRequest = BeaconBlocksByRootRequest;
const Genesis = new _ssz.ContainerType({
  fields: {
    genesisValidatorsRoot: Root,
    genesisTime: Uint64,
    genesisForkVersion: Version
  }
}); // Non-speced types
// ================

exports.Genesis = Genesis;
const SlashingProtectionBlock = new _ssz.ContainerType({
  fields: {
    slot: Slot,
    signingRoot: Root
  }
});
exports.SlashingProtectionBlock = SlashingProtectionBlock;
const SlashingProtectionAttestation = new _ssz.ContainerType({
  fields: {
    sourceEpoch: Epoch,
    targetEpoch: Epoch,
    signingRoot: Root
  }
});
exports.SlashingProtectionAttestation = SlashingProtectionAttestation;
const SlashingProtectionAttestationLowerBound = new _ssz.ContainerType({
  fields: {
    minSourceEpoch: Epoch,
    minTargetEpoch: Epoch
  }
}); // MUST set typesRef here, otherwise expandedType() calls will throw

exports.SlashingProtectionAttestationLowerBound = SlashingProtectionAttestationLowerBound;
typesRef.set({
  BeaconBlock,
  BeaconState
});
//# sourceMappingURL=sszTypes.js.map

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NEXT_SYNC_COMMITTEE_INDEX_FLOORLOG2 = exports.NEXT_SYNC_COMMITTEE_INDEX = exports.FINALIZED_ROOT_INDEX_FLOORLOG2 = exports.FINALIZED_ROOT_INDEX = exports.MIN_SYNC_COMMITTEE_PARTICIPANTS = exports.MAX_REQUEST_BLOCKS = exports.SYNC_COMMITTEE_SUBNET_COUNT = exports.TARGET_AGGREGATORS_PER_SYNC_SUBCOMMITTEE = exports.ATTESTATION_SUBNET_COUNT = exports.EPOCHS_PER_RANDOM_SUBNET_SUBSCRIPTION = exports.RANDOM_SUBNETS_PER_VALIDATOR = exports.TARGET_AGGREGATORS_PER_COMMITTEE = exports.PARTICIPATION_FLAG_WEIGHTS = exports.WEIGHT_DENOMINATOR = exports.PROPOSER_WEIGHT = exports.SYNC_REWARD_WEIGHT = exports.TIMELY_HEAD_WEIGHT = exports.TIMELY_TARGET_WEIGHT = exports.TIMELY_SOURCE_WEIGHT = exports.TIMELY_HEAD_FLAG_INDEX = exports.TIMELY_TARGET_FLAG_INDEX = exports.TIMELY_SOURCE_FLAG_INDEX = exports.DOMAIN_CONTRIBUTION_AND_PROOF = exports.DOMAIN_SYNC_COMMITTEE_SELECTION_PROOF = exports.DOMAIN_SYNC_COMMITTEE = exports.DOMAIN_AGGREGATE_AND_PROOF = exports.DOMAIN_SELECTION_PROOF = exports.DOMAIN_VOLUNTARY_EXIT = exports.DOMAIN_DEPOSIT = exports.DOMAIN_RANDAO = exports.DOMAIN_BEACON_ATTESTER = exports.DOMAIN_BEACON_PROPOSER = exports.ETH1_ADDRESS_WITHDRAWAL_PREFIX = exports.BLS_WITHDRAWAL_PREFIX = exports.JUSTIFICATION_BITS_LENGTH = exports.DEPOSIT_CONTRACT_TREE_DEPTH = exports.BASE_REWARDS_PER_EPOCH = exports.FAR_FUTURE_EPOCH = exports.GENESIS_EPOCH = exports.GENESIS_SLOT = void 0;
// Misc
const GENESIS_SLOT = 0;
exports.GENESIS_SLOT = GENESIS_SLOT;
const GENESIS_EPOCH = 0;
exports.GENESIS_EPOCH = GENESIS_EPOCH;
const FAR_FUTURE_EPOCH = Infinity;
exports.FAR_FUTURE_EPOCH = FAR_FUTURE_EPOCH;
const BASE_REWARDS_PER_EPOCH = 4;
exports.BASE_REWARDS_PER_EPOCH = BASE_REWARDS_PER_EPOCH;
const DEPOSIT_CONTRACT_TREE_DEPTH = 2 ** 5; // 32

exports.DEPOSIT_CONTRACT_TREE_DEPTH = DEPOSIT_CONTRACT_TREE_DEPTH;
const JUSTIFICATION_BITS_LENGTH = 4; // Withdrawal prefixes

exports.JUSTIFICATION_BITS_LENGTH = JUSTIFICATION_BITS_LENGTH;
const BLS_WITHDRAWAL_PREFIX = Uint8Array.from([0]);
exports.BLS_WITHDRAWAL_PREFIX = BLS_WITHDRAWAL_PREFIX;
const ETH1_ADDRESS_WITHDRAWAL_PREFIX = Uint8Array.from([0]); // Domain types

exports.ETH1_ADDRESS_WITHDRAWAL_PREFIX = ETH1_ADDRESS_WITHDRAWAL_PREFIX;
const DOMAIN_BEACON_PROPOSER = Uint8Array.from([0, 0, 0, 0]);
exports.DOMAIN_BEACON_PROPOSER = DOMAIN_BEACON_PROPOSER;
const DOMAIN_BEACON_ATTESTER = Uint8Array.from([1, 0, 0, 0]);
exports.DOMAIN_BEACON_ATTESTER = DOMAIN_BEACON_ATTESTER;
const DOMAIN_RANDAO = Uint8Array.from([2, 0, 0, 0]);
exports.DOMAIN_RANDAO = DOMAIN_RANDAO;
const DOMAIN_DEPOSIT = Uint8Array.from([3, 0, 0, 0]);
exports.DOMAIN_DEPOSIT = DOMAIN_DEPOSIT;
const DOMAIN_VOLUNTARY_EXIT = Uint8Array.from([4, 0, 0, 0]);
exports.DOMAIN_VOLUNTARY_EXIT = DOMAIN_VOLUNTARY_EXIT;
const DOMAIN_SELECTION_PROOF = Uint8Array.from([5, 0, 0, 0]);
exports.DOMAIN_SELECTION_PROOF = DOMAIN_SELECTION_PROOF;
const DOMAIN_AGGREGATE_AND_PROOF = Uint8Array.from([6, 0, 0, 0]);
exports.DOMAIN_AGGREGATE_AND_PROOF = DOMAIN_AGGREGATE_AND_PROOF;
const DOMAIN_SYNC_COMMITTEE = Uint8Array.from([7, 0, 0, 0]);
exports.DOMAIN_SYNC_COMMITTEE = DOMAIN_SYNC_COMMITTEE;
const DOMAIN_SYNC_COMMITTEE_SELECTION_PROOF = Uint8Array.from([8, 0, 0, 0]);
exports.DOMAIN_SYNC_COMMITTEE_SELECTION_PROOF = DOMAIN_SYNC_COMMITTEE_SELECTION_PROOF;
const DOMAIN_CONTRIBUTION_AND_PROOF = Uint8Array.from([9, 0, 0, 0]); // Participation flag indices

exports.DOMAIN_CONTRIBUTION_AND_PROOF = DOMAIN_CONTRIBUTION_AND_PROOF;
const TIMELY_SOURCE_FLAG_INDEX = 0;
exports.TIMELY_SOURCE_FLAG_INDEX = TIMELY_SOURCE_FLAG_INDEX;
const TIMELY_TARGET_FLAG_INDEX = 1;
exports.TIMELY_TARGET_FLAG_INDEX = TIMELY_TARGET_FLAG_INDEX;
const TIMELY_HEAD_FLAG_INDEX = 2; // Incentivization weights

exports.TIMELY_HEAD_FLAG_INDEX = TIMELY_HEAD_FLAG_INDEX;
const TIMELY_SOURCE_WEIGHT = BigInt(14);
exports.TIMELY_SOURCE_WEIGHT = TIMELY_SOURCE_WEIGHT;
const TIMELY_TARGET_WEIGHT = BigInt(26);
exports.TIMELY_TARGET_WEIGHT = TIMELY_TARGET_WEIGHT;
const TIMELY_HEAD_WEIGHT = BigInt(14);
exports.TIMELY_HEAD_WEIGHT = TIMELY_HEAD_WEIGHT;
const SYNC_REWARD_WEIGHT = BigInt(2);
exports.SYNC_REWARD_WEIGHT = SYNC_REWARD_WEIGHT;
const PROPOSER_WEIGHT = BigInt(8);
exports.PROPOSER_WEIGHT = PROPOSER_WEIGHT;
const WEIGHT_DENOMINATOR = BigInt(64); // altair misc

exports.WEIGHT_DENOMINATOR = WEIGHT_DENOMINATOR;
const PARTICIPATION_FLAG_WEIGHTS = [TIMELY_SOURCE_WEIGHT, TIMELY_TARGET_WEIGHT, TIMELY_HEAD_WEIGHT]; // phase0 validator

exports.PARTICIPATION_FLAG_WEIGHTS = PARTICIPATION_FLAG_WEIGHTS;
const TARGET_AGGREGATORS_PER_COMMITTEE = 16;
exports.TARGET_AGGREGATORS_PER_COMMITTEE = TARGET_AGGREGATORS_PER_COMMITTEE;
const RANDOM_SUBNETS_PER_VALIDATOR = 1;
exports.RANDOM_SUBNETS_PER_VALIDATOR = RANDOM_SUBNETS_PER_VALIDATOR;
const EPOCHS_PER_RANDOM_SUBNET_SUBSCRIPTION = 256;
/** Rationale: https://github.com/ethereum/eth2.0-specs/blob/dev/specs/phase0/p2p-interface.md#why-are-there-attestation_subnet_count-attestation-subnets */

exports.EPOCHS_PER_RANDOM_SUBNET_SUBSCRIPTION = EPOCHS_PER_RANDOM_SUBNET_SUBSCRIPTION;
const ATTESTATION_SUBNET_COUNT = 64; // altair validator

exports.ATTESTATION_SUBNET_COUNT = ATTESTATION_SUBNET_COUNT;
const TARGET_AGGREGATORS_PER_SYNC_SUBCOMMITTEE = 4;
exports.TARGET_AGGREGATORS_PER_SYNC_SUBCOMMITTEE = TARGET_AGGREGATORS_PER_SYNC_SUBCOMMITTEE;
const SYNC_COMMITTEE_SUBNET_COUNT = 4;
exports.SYNC_COMMITTEE_SUBNET_COUNT = SYNC_COMMITTEE_SUBNET_COUNT;
const MAX_REQUEST_BLOCKS = 2 ** 10; // 1024
//

exports.MAX_REQUEST_BLOCKS = MAX_REQUEST_BLOCKS;
const MIN_SYNC_COMMITTEE_PARTICIPANTS = 1; // Lightclient pre-computed

/**
 * ```ts
 * config.types.altair.BeaconState.getPathGindex(["finalizedCheckpoint", "root"])
 * ```
 */

exports.MIN_SYNC_COMMITTEE_PARTICIPANTS = MIN_SYNC_COMMITTEE_PARTICIPANTS;
const FINALIZED_ROOT_INDEX = 105;
/**
 * ```ts
 * Math.floor(Math.log2(FINALIZED_ROOT_INDEX))
 * ```
 */

exports.FINALIZED_ROOT_INDEX = FINALIZED_ROOT_INDEX;
const FINALIZED_ROOT_INDEX_FLOORLOG2 = 6;
/**
 * ```ts
 * config.types.altair.BeaconState.getPathGindex(["nextSyncCommittee"])
 * ```
 */

exports.FINALIZED_ROOT_INDEX_FLOORLOG2 = FINALIZED_ROOT_INDEX_FLOORLOG2;
const NEXT_SYNC_COMMITTEE_INDEX = 55;
/**
 * ```ts
 * Math.floor(Math.log2(NEXT_SYNC_COMMITTEE_INDEX))
 * ```
 */

exports.NEXT_SYNC_COMMITTEE_INDEX = NEXT_SYNC_COMMITTEE_INDEX;
const NEXT_SYNC_COMMITTEE_INDEX_FLOORLOG2 = 5;
exports.NEXT_SYNC_COMMITTEE_INDEX_FLOORLOG2 = NEXT_SYNC_COMMITTEE_INDEX_FLOORLOG2;
//# sourceMappingURL=constants.js.map

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PresetName = void 0;
let PresetName;
exports.PresetName = PresetName;

(function (PresetName) {
  PresetName["mainnet"] = "mainnet";
  PresetName["minimal"] = "minimal";
})(PresetName || (exports.PresetName = PresetName = {}));
//# sourceMappingURL=presetName.js.map

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=interface.js.map

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BeaconPreset = void 0;

var _ssz = __webpack_require__(6);

var _phase = __webpack_require__(128);

var _altair = __webpack_require__(129);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const BeaconPreset = new _ssz.ContainerType({
  fields: _objectSpread(_objectSpread({}, _phase.Phase0Preset.fields), _altair.AltairPreset.fields)
});
exports.BeaconPreset = BeaconPreset;
//# sourceMappingURL=ssz.js.map

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=interface.js.map

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Phase0Preset = void 0;

var _ssz = __webpack_require__(6);

/* eslint-disable @typescript-eslint/naming-convention */
const Number64 = new _ssz.NumberUintType({
  byteLength: 8
});
const BigInt64 = new _ssz.BigIntUintType({
  byteLength: 8
});
const Phase0Preset = new _ssz.ContainerType({
  fields: {
    // Misc
    MAX_COMMITTEES_PER_SLOT: Number64,
    TARGET_COMMITTEE_SIZE: Number64,
    MAX_VALIDATORS_PER_COMMITTEE: Number64,
    SHUFFLE_ROUND_COUNT: Number64,
    HYSTERESIS_QUOTIENT: Number64,
    HYSTERESIS_DOWNWARD_MULTIPLIER: Number64,
    HYSTERESIS_UPWARD_MULTIPLIER: Number64,
    // Fork choice
    SAFE_SLOTS_TO_UPDATE_JUSTIFIED: Number64,
    // Gwei Values
    MIN_DEPOSIT_AMOUNT: BigInt64,
    MAX_EFFECTIVE_BALANCE: BigInt64,
    EFFECTIVE_BALANCE_INCREMENT: BigInt64,
    // Time parameters
    MIN_ATTESTATION_INCLUSION_DELAY: Number64,
    SLOTS_PER_EPOCH: Number64,
    MIN_SEED_LOOKAHEAD: Number64,
    MAX_SEED_LOOKAHEAD: Number64,
    EPOCHS_PER_ETH1_VOTING_PERIOD: Number64,
    SLOTS_PER_HISTORICAL_ROOT: Number64,
    MIN_EPOCHS_TO_INACTIVITY_PENALTY: Number64,
    // State vector lengths
    EPOCHS_PER_HISTORICAL_VECTOR: Number64,
    EPOCHS_PER_SLASHINGS_VECTOR: Number64,
    HISTORICAL_ROOTS_LIMIT: Number64,
    VALIDATOR_REGISTRY_LIMIT: Number64,
    // Reward and penalty quotients
    BASE_REWARD_FACTOR: BigInt64,
    WHISTLEBLOWER_REWARD_QUOTIENT: BigInt64,
    PROPOSER_REWARD_QUOTIENT: BigInt64,
    INACTIVITY_PENALTY_QUOTIENT: BigInt64,
    MIN_SLASHING_PENALTY_QUOTIENT: BigInt64,
    PROPORTIONAL_SLASHING_MULTIPLIER: BigInt64,
    // Max operations per block
    MAX_PROPOSER_SLASHINGS: Number64,
    MAX_ATTESTER_SLASHINGS: Number64,
    MAX_ATTESTATIONS: Number64,
    MAX_DEPOSITS: Number64,
    MAX_VOLUNTARY_EXITS: Number64
  }
});
exports.Phase0Preset = Phase0Preset;
//# sourceMappingURL=ssz.js.map

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=interface.js.map

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AltairPreset = void 0;

var _ssz = __webpack_require__(6);

/* eslint-disable @typescript-eslint/naming-convention */
const Number64 = new _ssz.NumberUintType({
  byteLength: 8
});
const BigInt64 = new _ssz.BigIntUintType({
  byteLength: 8
});
const AltairPreset = new _ssz.ContainerType({
  fields: {
    SYNC_COMMITTEE_SIZE: Number64,
    EPOCHS_PER_SYNC_COMMITTEE_PERIOD: Number64,
    INACTIVITY_PENALTY_QUOTIENT_ALTAIR: BigInt64,
    MIN_SLASHING_PENALTY_QUOTIENT_ALTAIR: BigInt64,
    PROPORTIONAL_SLASHING_MULTIPLIER_ALTAIR: BigInt64
  }
});
exports.AltairPreset = AltairPreset;
//# sourceMappingURL=ssz.js.map

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PROPORTIONAL_SLASHING_MULTIPLIER_ALTAIR = exports.MIN_SLASHING_PENALTY_QUOTIENT_ALTAIR = exports.INACTIVITY_PENALTY_QUOTIENT_ALTAIR = exports.EPOCHS_PER_SYNC_COMMITTEE_PERIOD = exports.SYNC_COMMITTEE_SIZE = exports.MAX_VOLUNTARY_EXITS = exports.MAX_DEPOSITS = exports.MAX_ATTESTATIONS = exports.MAX_ATTESTER_SLASHINGS = exports.MAX_PROPOSER_SLASHINGS = exports.PROPORTIONAL_SLASHING_MULTIPLIER = exports.MIN_SLASHING_PENALTY_QUOTIENT = exports.INACTIVITY_PENALTY_QUOTIENT = exports.PROPOSER_REWARD_QUOTIENT = exports.WHISTLEBLOWER_REWARD_QUOTIENT = exports.BASE_REWARD_FACTOR = exports.VALIDATOR_REGISTRY_LIMIT = exports.HISTORICAL_ROOTS_LIMIT = exports.EPOCHS_PER_SLASHINGS_VECTOR = exports.EPOCHS_PER_HISTORICAL_VECTOR = exports.MIN_EPOCHS_TO_INACTIVITY_PENALTY = exports.SLOTS_PER_HISTORICAL_ROOT = exports.EPOCHS_PER_ETH1_VOTING_PERIOD = exports.MAX_SEED_LOOKAHEAD = exports.MIN_SEED_LOOKAHEAD = exports.SLOTS_PER_EPOCH = exports.MIN_ATTESTATION_INCLUSION_DELAY = exports.EFFECTIVE_BALANCE_INCREMENT = exports.MAX_EFFECTIVE_BALANCE = exports.MIN_DEPOSIT_AMOUNT = exports.SAFE_SLOTS_TO_UPDATE_JUSTIFIED = exports.HYSTERESIS_UPWARD_MULTIPLIER = exports.HYSTERESIS_DOWNWARD_MULTIPLIER = exports.HYSTERESIS_QUOTIENT = exports.SHUFFLE_ROUND_COUNT = exports.MAX_VALIDATORS_PER_COMMITTEE = exports.TARGET_COMMITTEE_SIZE = exports.MAX_COMMITTEES_PER_SLOT = exports.ACTIVE_PRESET = void 0;

var _preset = __webpack_require__(127);

var _mainnet = __webpack_require__(224);

var _minimal = __webpack_require__(227);

// load in an "active" preset
let ACTIVE_PRESET;
exports.ACTIVE_PRESET = ACTIVE_PRESET;
let preset;

switch (process.env.LODESTAR_PRESET) {
  case _preset.PresetName.minimal:
    exports.ACTIVE_PRESET = ACTIVE_PRESET = _preset.PresetName.minimal;
    preset = _minimal.preset;
    break;

  case _preset.PresetName.mainnet:
  default:
    exports.ACTIVE_PRESET = ACTIVE_PRESET = _preset.PresetName.mainnet;
    preset = _mainnet.preset;
    break;
}

const {
  MAX_COMMITTEES_PER_SLOT,
  TARGET_COMMITTEE_SIZE,
  MAX_VALIDATORS_PER_COMMITTEE,
  SHUFFLE_ROUND_COUNT,
  HYSTERESIS_QUOTIENT,
  HYSTERESIS_DOWNWARD_MULTIPLIER,
  HYSTERESIS_UPWARD_MULTIPLIER,
  SAFE_SLOTS_TO_UPDATE_JUSTIFIED,
  MIN_DEPOSIT_AMOUNT,
  MAX_EFFECTIVE_BALANCE,
  EFFECTIVE_BALANCE_INCREMENT,
  MIN_ATTESTATION_INCLUSION_DELAY,
  SLOTS_PER_EPOCH,
  MIN_SEED_LOOKAHEAD,
  MAX_SEED_LOOKAHEAD,
  EPOCHS_PER_ETH1_VOTING_PERIOD,
  SLOTS_PER_HISTORICAL_ROOT,
  MIN_EPOCHS_TO_INACTIVITY_PENALTY,
  EPOCHS_PER_HISTORICAL_VECTOR,
  EPOCHS_PER_SLASHINGS_VECTOR,
  HISTORICAL_ROOTS_LIMIT,
  VALIDATOR_REGISTRY_LIMIT,
  BASE_REWARD_FACTOR,
  WHISTLEBLOWER_REWARD_QUOTIENT,
  PROPOSER_REWARD_QUOTIENT,
  INACTIVITY_PENALTY_QUOTIENT,
  MIN_SLASHING_PENALTY_QUOTIENT,
  PROPORTIONAL_SLASHING_MULTIPLIER,
  MAX_PROPOSER_SLASHINGS,
  MAX_ATTESTER_SLASHINGS,
  MAX_ATTESTATIONS,
  MAX_DEPOSITS,
  MAX_VOLUNTARY_EXITS,
  SYNC_COMMITTEE_SIZE,
  EPOCHS_PER_SYNC_COMMITTEE_PERIOD,
  INACTIVITY_PENALTY_QUOTIENT_ALTAIR,
  MIN_SLASHING_PENALTY_QUOTIENT_ALTAIR,
  PROPORTIONAL_SLASHING_MULTIPLIER_ALTAIR
} = preset;
exports.PROPORTIONAL_SLASHING_MULTIPLIER_ALTAIR = PROPORTIONAL_SLASHING_MULTIPLIER_ALTAIR;
exports.MIN_SLASHING_PENALTY_QUOTIENT_ALTAIR = MIN_SLASHING_PENALTY_QUOTIENT_ALTAIR;
exports.INACTIVITY_PENALTY_QUOTIENT_ALTAIR = INACTIVITY_PENALTY_QUOTIENT_ALTAIR;
exports.EPOCHS_PER_SYNC_COMMITTEE_PERIOD = EPOCHS_PER_SYNC_COMMITTEE_PERIOD;
exports.SYNC_COMMITTEE_SIZE = SYNC_COMMITTEE_SIZE;
exports.MAX_VOLUNTARY_EXITS = MAX_VOLUNTARY_EXITS;
exports.MAX_DEPOSITS = MAX_DEPOSITS;
exports.MAX_ATTESTATIONS = MAX_ATTESTATIONS;
exports.MAX_ATTESTER_SLASHINGS = MAX_ATTESTER_SLASHINGS;
exports.MAX_PROPOSER_SLASHINGS = MAX_PROPOSER_SLASHINGS;
exports.PROPORTIONAL_SLASHING_MULTIPLIER = PROPORTIONAL_SLASHING_MULTIPLIER;
exports.MIN_SLASHING_PENALTY_QUOTIENT = MIN_SLASHING_PENALTY_QUOTIENT;
exports.INACTIVITY_PENALTY_QUOTIENT = INACTIVITY_PENALTY_QUOTIENT;
exports.PROPOSER_REWARD_QUOTIENT = PROPOSER_REWARD_QUOTIENT;
exports.WHISTLEBLOWER_REWARD_QUOTIENT = WHISTLEBLOWER_REWARD_QUOTIENT;
exports.BASE_REWARD_FACTOR = BASE_REWARD_FACTOR;
exports.VALIDATOR_REGISTRY_LIMIT = VALIDATOR_REGISTRY_LIMIT;
exports.HISTORICAL_ROOTS_LIMIT = HISTORICAL_ROOTS_LIMIT;
exports.EPOCHS_PER_SLASHINGS_VECTOR = EPOCHS_PER_SLASHINGS_VECTOR;
exports.EPOCHS_PER_HISTORICAL_VECTOR = EPOCHS_PER_HISTORICAL_VECTOR;
exports.MIN_EPOCHS_TO_INACTIVITY_PENALTY = MIN_EPOCHS_TO_INACTIVITY_PENALTY;
exports.SLOTS_PER_HISTORICAL_ROOT = SLOTS_PER_HISTORICAL_ROOT;
exports.EPOCHS_PER_ETH1_VOTING_PERIOD = EPOCHS_PER_ETH1_VOTING_PERIOD;
exports.MAX_SEED_LOOKAHEAD = MAX_SEED_LOOKAHEAD;
exports.MIN_SEED_LOOKAHEAD = MIN_SEED_LOOKAHEAD;
exports.SLOTS_PER_EPOCH = SLOTS_PER_EPOCH;
exports.MIN_ATTESTATION_INCLUSION_DELAY = MIN_ATTESTATION_INCLUSION_DELAY;
exports.EFFECTIVE_BALANCE_INCREMENT = EFFECTIVE_BALANCE_INCREMENT;
exports.MAX_EFFECTIVE_BALANCE = MAX_EFFECTIVE_BALANCE;
exports.MIN_DEPOSIT_AMOUNT = MIN_DEPOSIT_AMOUNT;
exports.SAFE_SLOTS_TO_UPDATE_JUSTIFIED = SAFE_SLOTS_TO_UPDATE_JUSTIFIED;
exports.HYSTERESIS_UPWARD_MULTIPLIER = HYSTERESIS_UPWARD_MULTIPLIER;
exports.HYSTERESIS_DOWNWARD_MULTIPLIER = HYSTERESIS_DOWNWARD_MULTIPLIER;
exports.HYSTERESIS_QUOTIENT = HYSTERESIS_QUOTIENT;
exports.SHUFFLE_ROUND_COUNT = SHUFFLE_ROUND_COUNT;
exports.MAX_VALIDATORS_PER_COMMITTEE = MAX_VALIDATORS_PER_COMMITTEE;
exports.TARGET_COMMITTEE_SIZE = TARGET_COMMITTEE_SIZE;
exports.MAX_COMMITTEES_PER_SLOT = MAX_COMMITTEES_PER_SLOT;
//# sourceMappingURL=activePreset.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(223)))

/***/ }),
/* 223 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.preset = exports.commit = void 0;

var _phase = __webpack_require__(225);

var _altair = __webpack_require__(226);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const commit = "v1.1.0-alpha.7";
exports.commit = commit;

const preset = _objectSpread(_objectSpread({}, _phase.phase0), _altair.altair);

exports.preset = preset;
//# sourceMappingURL=index.js.map

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.phase0 = void 0;

/* eslint-disable @typescript-eslint/naming-convention */
// Mainnet preset
const phase0 = {
  // Misc
  // ---------------------------------------------------------------
  // 2**6 (= 64)
  MAX_COMMITTEES_PER_SLOT: 64,
  // 2**7 (= 128)
  TARGET_COMMITTEE_SIZE: 128,
  // 2**11 (= 2,048)
  MAX_VALIDATORS_PER_COMMITTEE: 2048,
  // See issue 563
  SHUFFLE_ROUND_COUNT: 90,
  // 4
  HYSTERESIS_QUOTIENT: 4,
  // 1 (minus 0.25)
  HYSTERESIS_DOWNWARD_MULTIPLIER: 1,
  // 5 (plus 1.25)
  HYSTERESIS_UPWARD_MULTIPLIER: 5,
  // Fork Choice
  // ---------------------------------------------------------------
  // 2**3 (= 8)
  SAFE_SLOTS_TO_UPDATE_JUSTIFIED: 8,
  // Gwei values
  // ---------------------------------------------------------------
  // 2**0 * 10**9 (= 1,000,000,000) Gwei
  MIN_DEPOSIT_AMOUNT: BigInt(1000000000),
  // 2**5 * 10**9 (= 32,000,000,000) Gwei
  MAX_EFFECTIVE_BALANCE: BigInt(32000000000),
  // 2**0 * 10**9 (= 1,000,000,000) Gwei
  EFFECTIVE_BALANCE_INCREMENT: BigInt(1000000000),
  // Time parameters
  // ---------------------------------------------------------------
  // 2**0 (= 1) slots 12 seconds
  MIN_ATTESTATION_INCLUSION_DELAY: 1,
  // 2**5 (= 32) slots 6.4 minutes
  SLOTS_PER_EPOCH: 32,
  // 2**0 (= 1) epochs 6.4 minutes
  MIN_SEED_LOOKAHEAD: 1,
  // 2**2 (= 4) epochs 25.6 minutes
  MAX_SEED_LOOKAHEAD: 4,
  // 2**6 (= 64) epochs ~6.8 hours
  EPOCHS_PER_ETH1_VOTING_PERIOD: 64,
  // 2**13 (= 8,192) slots ~13 hours
  SLOTS_PER_HISTORICAL_ROOT: 8192,
  // 2**2 (= 4) epochs 25.6 minutes
  MIN_EPOCHS_TO_INACTIVITY_PENALTY: 4,
  // State vector lengths
  // ---------------------------------------------------------------
  // 2**16 (= 65,536) epochs ~0.8 years
  EPOCHS_PER_HISTORICAL_VECTOR: 65536,
  // 2**13 (= 8,192) epochs ~36 days
  EPOCHS_PER_SLASHINGS_VECTOR: 8192,
  // 2**24 (= 16,777,216) historical roots, ~26,131 years
  HISTORICAL_ROOTS_LIMIT: 16777216,
  // 2**40 (= 1,099,511,627,776) validator spots
  VALIDATOR_REGISTRY_LIMIT: 1099511627776,
  // Reward and penalty quotients
  // ---------------------------------------------------------------
  // 2**6 (= 64)
  BASE_REWARD_FACTOR: BigInt(64),
  // 2**9 (= 512)
  WHISTLEBLOWER_REWARD_QUOTIENT: BigInt(512),
  // 2**3 (= 8)
  PROPOSER_REWARD_QUOTIENT: BigInt(8),
  // 2**26 (= 67,108,864)
  INACTIVITY_PENALTY_QUOTIENT: BigInt(67108864),
  // 2**7 (= 128) (lower safety margin at Phase 0 genesis)
  MIN_SLASHING_PENALTY_QUOTIENT: BigInt(128),
  PROPORTIONAL_SLASHING_MULTIPLIER: BigInt(1),
  // Max operations per block
  // ---------------------------------------------------------------
  // 2**4 (= 16)
  MAX_PROPOSER_SLASHINGS: 16,
  // 2**1 (= 2)
  MAX_ATTESTER_SLASHINGS: 2,
  // 2**7 (= 128)
  MAX_ATTESTATIONS: 128,
  // 2**4 (= 16)
  MAX_DEPOSITS: 16,
  // 2**4 (= 16)
  MAX_VOLUNTARY_EXITS: 16
};
exports.phase0 = phase0;
//# sourceMappingURL=phase0.js.map

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.altair = void 0;

/* eslint-disable @typescript-eslint/naming-convention */
const altair = {
  SYNC_COMMITTEE_SIZE: 512,
  EPOCHS_PER_SYNC_COMMITTEE_PERIOD: 256,
  INACTIVITY_PENALTY_QUOTIENT_ALTAIR: BigInt(50331648),
  MIN_SLASHING_PENALTY_QUOTIENT_ALTAIR: BigInt(64),
  PROPORTIONAL_SLASHING_MULTIPLIER_ALTAIR: BigInt(2)
};
exports.altair = altair;
//# sourceMappingURL=altair.js.map

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.preset = exports.commit = void 0;

var _phase = __webpack_require__(228);

var _altair = __webpack_require__(229);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const commit = "v1.1.0-alpha.7";
exports.commit = commit;

const preset = _objectSpread(_objectSpread({}, _phase.phase0), _altair.altair);

exports.preset = preset;
//# sourceMappingURL=index.js.map

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.phase0 = void 0;

/* eslint-disable @typescript-eslint/naming-convention */
// Minimal preset
const phase0 = {
  // Misc
  // ---------------------------------------------------------------
  // [customized] Just 4 committees for slot for testing purposes
  MAX_COMMITTEES_PER_SLOT: 4,
  // [customized] unsecure, but fast
  TARGET_COMMITTEE_SIZE: 4,
  // 2**11 (= 2,048)
  MAX_VALIDATORS_PER_COMMITTEE: 2048,
  // [customized] Faster, but unsecure.
  SHUFFLE_ROUND_COUNT: 10,
  // 4
  HYSTERESIS_QUOTIENT: 4,
  // 1 (minus 0.25)
  HYSTERESIS_DOWNWARD_MULTIPLIER: 1,
  // 5 (plus 1.25)
  HYSTERESIS_UPWARD_MULTIPLIER: 5,
  // Fork Choice
  // ---------------------------------------------------------------
  // 2**1 (= 1)
  SAFE_SLOTS_TO_UPDATE_JUSTIFIED: 2,
  // Gwei values
  // ---------------------------------------------------------------
  // 2**0 * 10**9 (= 1,000,000,000) Gwei
  MIN_DEPOSIT_AMOUNT: BigInt(1000000000),
  // 2**5 * 10**9 (= 32,000,000,000) Gwei
  MAX_EFFECTIVE_BALANCE: BigInt(32000000000),
  // 2**0 * 10**9 (= 1,000,000,000) Gwei
  EFFECTIVE_BALANCE_INCREMENT: BigInt(1000000000),
  // Time parameters
  // ---------------------------------------------------------------
  // 2**0 (= 1) slots 6 seconds
  MIN_ATTESTATION_INCLUSION_DELAY: 1,
  // [customized] fast epochs
  SLOTS_PER_EPOCH: 8,
  // 2**0 (= 1) epochs
  MIN_SEED_LOOKAHEAD: 1,
  // 2**2 (= 4) epochs
  MAX_SEED_LOOKAHEAD: 4,
  // [customized] higher frequency new deposits from eth1 for testing
  EPOCHS_PER_ETH1_VOTING_PERIOD: 4,
  // [customized] smaller state
  SLOTS_PER_HISTORICAL_ROOT: 64,

  /*
  // 2**8 (= 256) epochs
  MIN_VALIDATOR_WITHDRAWABILITY_DELAY: 256,
  // [customized] higher frequency of committee turnover and faster time to acceptable voluntary exit
  SHARD_COMMITTEE_PERIOD: 64,
  */
  // 2**2 (= 4) epochs
  MIN_EPOCHS_TO_INACTIVITY_PENALTY: 4,
  // State vector lengths
  // ---------------------------------------------------------------
  // [customized] smaller state
  EPOCHS_PER_HISTORICAL_VECTOR: 64,
  // [customized] smaller state
  EPOCHS_PER_SLASHINGS_VECTOR: 64,
  // 2**24 (= 16,777,216) historical roots
  HISTORICAL_ROOTS_LIMIT: 16777216,
  // 2**40 (= 1,099,511,627,776) validator spots
  VALIDATOR_REGISTRY_LIMIT: 1099511627776,
  // Reward and penalty quotients
  // ---------------------------------------------------------------
  // 2**6 (= 64)
  BASE_REWARD_FACTOR: BigInt(64),
  // 2**9 (= 512)
  WHISTLEBLOWER_REWARD_QUOTIENT: BigInt(512),
  // 2**3 (= 8)
  PROPOSER_REWARD_QUOTIENT: BigInt(8),
  // [customized] 2**25 (= 33,554,432)
  INACTIVITY_PENALTY_QUOTIENT: BigInt(33554432),
  // [customized] 2**6 (= 64)
  MIN_SLASHING_PENALTY_QUOTIENT: BigInt(64),
  // [customized] 2 (lower safety margin than Phase 0 genesis but different than mainnet config for testing)
  PROPORTIONAL_SLASHING_MULTIPLIER: BigInt(2),
  // Max operations per block
  // ---------------------------------------------------------------
  // 2**4 (= 16)
  MAX_PROPOSER_SLASHINGS: 16,
  // 2**1 (= 2)
  MAX_ATTESTER_SLASHINGS: 2,
  // 2**7 (= 128)
  MAX_ATTESTATIONS: 128,
  // 2**4 (= 16)
  MAX_DEPOSITS: 16,
  // 2**4 (= 16)
  MAX_VOLUNTARY_EXITS: 16
};
exports.phase0 = phase0;
//# sourceMappingURL=phase0.js.map

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.altair = void 0;

/* eslint-disable @typescript-eslint/naming-convention */
const altair = {
  SYNC_COMMITTEE_SIZE: 32,
  EPOCHS_PER_SYNC_COMMITTEE_PERIOD: 8,
  INACTIVITY_PENALTY_QUOTIENT_ALTAIR: BigInt(50331648),
  MIN_SLASHING_PENALTY_QUOTIENT_ALTAIR: BigInt(64),
  PROPORTIONAL_SLASHING_MULTIPLIER_ALTAIR: BigInt(2)
};
exports.altair = altair;
//# sourceMappingURL=altair.js.map

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ForkName = void 0;

/**
 * Forks in order of occurance
 */
let ForkName;
exports.ForkName = ForkName;

(function (ForkName) {
  ForkName["phase0"] = "phase0";
  ForkName["altair"] = "altair";
})(ForkName || (exports.ForkName = ForkName = {}));
//# sourceMappingURL=forkName.js.map

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sync = __webpack_require__(232);

Object.keys(_sync).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _sync[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sync[key];
    }
  });
});

var _committee = __webpack_require__(233);

Object.keys(_committee).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _committee[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _committee[key];
    }
  });
});

var _beacon = __webpack_require__(234);

Object.keys(_beacon).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _beacon[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _beacon[key];
    }
  });
});

var _types = __webpack_require__(63);

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});

var _misc = __webpack_require__(122);

Object.keys(_misc).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _misc[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _misc[key];
    }
  });
});

var _operations = __webpack_require__(123);

Object.keys(_operations).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _operations[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _operations[key];
    }
  });
});

var _validator = __webpack_require__(124);

Object.keys(_validator).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _validator[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _validator[key];
    }
  });
});

var _wire = __webpack_require__(235);

Object.keys(_wire).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _wire[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _wire[key];
    }
  });
});

var _api = __webpack_require__(125);

Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _api[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _api[key];
    }
  });
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=sync.js.map

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=committee.js.map

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=beacon.js.map

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=wire.js.map

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LightClientStore = exports.LightClientUpdate = exports.LightClientSnapshot = exports.BeaconState = exports.SignedBeaconBlock = exports.BeaconBlock = exports.BeaconBlockBody = exports.HistoricalBatch = exports.HistoricalStateRoots = exports.HistoricalBlockRoots = exports.SyncAggregate = exports.SyncCommitteeBits = exports.SyncAggregatorSelectionData = exports.SignedContributionAndProof = exports.ContributionAndProof = exports.SyncCommitteeContribution = exports.SyncCommitteeMessage = exports.SyncCommittee = exports.Metadata = exports.SyncSubnets = void 0;

var _lodestarParams = __webpack_require__(126);

var _ssz = __webpack_require__(6);

var _phase = __webpack_require__(64);

var _primitive = __webpack_require__(130);

var _lazyVar = __webpack_require__(132);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const {
  Bytes32,
  Number64,
  Uint64,
  Slot,
  SubCommitteeIndex,
  ValidatorIndex,
  Gwei,
  Root,
  Version,
  BLSPubkey,
  BLSSignature,
  ParticipationFlags
} = _primitive.ssz; // So the expandedRoots can be referenced, and break the circular dependency

const typesRef = new _lazyVar.LazyVariable();
const SyncSubnets = new _ssz.BitVectorType({
  length: _lodestarParams.SYNC_COMMITTEE_SUBNET_COUNT
});
exports.SyncSubnets = SyncSubnets;
const Metadata = new _ssz.ContainerType({
  fields: {
    seqNumber: Uint64,
    attnets: _phase.ssz.AttestationSubnets,
    syncnets: SyncSubnets
  }
});
exports.Metadata = Metadata;
const SyncCommittee = new _ssz.ContainerType({
  fields: {
    pubkeys: new _ssz.VectorType({
      elementType: BLSPubkey,
      length: _lodestarParams.SYNC_COMMITTEE_SIZE
    }),
    aggregatePubkey: BLSPubkey
  }
});
exports.SyncCommittee = SyncCommittee;
const SyncCommitteeMessage = new _ssz.ContainerType({
  fields: {
    slot: Slot,
    beaconBlockRoot: Root,
    validatorIndex: ValidatorIndex,
    signature: BLSSignature
  }
});
exports.SyncCommitteeMessage = SyncCommitteeMessage;
const SyncCommitteeContribution = new _ssz.ContainerType({
  fields: {
    slot: Slot,
    beaconBlockRoot: Root,
    subCommitteeIndex: SubCommitteeIndex,
    aggregationBits: new _ssz.BitVectorType({
      length: _lodestarParams.SYNC_COMMITTEE_SIZE / _lodestarParams.SYNC_COMMITTEE_SUBNET_COUNT
    }),
    signature: BLSSignature
  }
});
exports.SyncCommitteeContribution = SyncCommitteeContribution;
const ContributionAndProof = new _ssz.ContainerType({
  fields: {
    aggregatorIndex: ValidatorIndex,
    contribution: SyncCommitteeContribution,
    selectionProof: BLSSignature
  }
});
exports.ContributionAndProof = ContributionAndProof;
const SignedContributionAndProof = new _ssz.ContainerType({
  fields: {
    message: ContributionAndProof,
    signature: BLSSignature
  }
});
exports.SignedContributionAndProof = SignedContributionAndProof;
const SyncAggregatorSelectionData = new _ssz.ContainerType({
  fields: {
    slot: Slot,
    subCommitteeIndex: SubCommitteeIndex
  }
});
exports.SyncAggregatorSelectionData = SyncAggregatorSelectionData;
const SyncCommitteeBits = new _ssz.BitVectorType({
  length: _lodestarParams.SYNC_COMMITTEE_SIZE
});
exports.SyncCommitteeBits = SyncCommitteeBits;
const SyncAggregate = new _ssz.ContainerType({
  fields: {
    syncCommitteeBits: SyncCommitteeBits,
    syncCommitteeSignature: BLSSignature
  }
}); // Re-declare with the new expanded type

exports.SyncAggregate = SyncAggregate;
const HistoricalBlockRoots = new _ssz.VectorType({
  elementType: new _ssz.RootType({
    expandedType: () => typesRef.get().BeaconBlock
  }),
  length: _lodestarParams.SLOTS_PER_HISTORICAL_ROOT
});
exports.HistoricalBlockRoots = HistoricalBlockRoots;
const HistoricalStateRoots = new _ssz.VectorType({
  elementType: new _ssz.RootType({
    expandedType: () => typesRef.get().BeaconState
  }),
  length: _lodestarParams.SLOTS_PER_HISTORICAL_ROOT
});
exports.HistoricalStateRoots = HistoricalStateRoots;
const HistoricalBatch = new _ssz.ContainerType({
  fields: {
    blockRoots: HistoricalBlockRoots,
    stateRoots: HistoricalStateRoots
  }
});
exports.HistoricalBatch = HistoricalBatch;
const BeaconBlockBody = new _ssz.ContainerType({
  fields: _objectSpread(_objectSpread({}, _phase.ssz.BeaconBlockBody.fields), {}, {
    syncAggregate: SyncAggregate
  })
});
exports.BeaconBlockBody = BeaconBlockBody;
const BeaconBlock = new _ssz.ContainerType({
  fields: {
    slot: Slot,
    proposerIndex: ValidatorIndex,
    // Reclare expandedType() with altair block and altair state
    parentRoot: new _ssz.RootType({
      expandedType: () => typesRef.get().BeaconBlock
    }),
    stateRoot: new _ssz.RootType({
      expandedType: () => typesRef.get().BeaconState
    }),
    body: BeaconBlockBody
  }
});
exports.BeaconBlock = BeaconBlock;
const SignedBeaconBlock = new _ssz.ContainerType({
  fields: {
    message: BeaconBlock,
    signature: BLSSignature
  }
}); //we don't reuse phase0.BeaconState fields since we need to replace some keys
//and we cannot keep order doing that

exports.SignedBeaconBlock = SignedBeaconBlock;
const BeaconState = new _ssz.ContainerType({
  fields: {
    genesisTime: Number64,
    genesisValidatorsRoot: Root,
    slot: Slot,
    fork: _phase.ssz.Fork,
    // History
    latestBlockHeader: _phase.ssz.BeaconBlockHeader,
    blockRoots: HistoricalBlockRoots,
    stateRoots: HistoricalStateRoots,
    historicalRoots: new _ssz.ListType({
      elementType: new _ssz.RootType({
        expandedType: HistoricalBatch
      }),
      limit: _lodestarParams.HISTORICAL_ROOTS_LIMIT
    }),
    // Eth1
    eth1Data: _phase.ssz.Eth1Data,
    eth1DataVotes: new _ssz.ListType({
      elementType: _phase.ssz.Eth1Data,
      limit: _lodestarParams.EPOCHS_PER_ETH1_VOTING_PERIOD * _lodestarParams.SLOTS_PER_EPOCH
    }),
    eth1DepositIndex: Number64,
    // Registry
    validators: new _ssz.ListType({
      elementType: _phase.ssz.Validator,
      limit: _lodestarParams.VALIDATOR_REGISTRY_LIMIT
    }),
    balances: new _ssz.ListType({
      elementType: Gwei,
      limit: _lodestarParams.VALIDATOR_REGISTRY_LIMIT
    }),
    randaoMixes: new _ssz.VectorType({
      elementType: Bytes32,
      length: _lodestarParams.EPOCHS_PER_HISTORICAL_VECTOR
    }),
    // Slashings
    slashings: new _ssz.VectorType({
      elementType: Gwei,
      length: _lodestarParams.EPOCHS_PER_SLASHINGS_VECTOR
    }),
    // Participation
    previousEpochParticipation: new _ssz.ListType({
      elementType: ParticipationFlags,
      limit: _lodestarParams.VALIDATOR_REGISTRY_LIMIT
    }),
    currentEpochParticipation: new _ssz.ListType({
      elementType: ParticipationFlags,
      limit: _lodestarParams.VALIDATOR_REGISTRY_LIMIT
    }),
    // Finality
    justificationBits: new _ssz.BitVectorType({
      length: _lodestarParams.JUSTIFICATION_BITS_LENGTH
    }),
    previousJustifiedCheckpoint: _phase.ssz.Checkpoint,
    currentJustifiedCheckpoint: _phase.ssz.Checkpoint,
    finalizedCheckpoint: _phase.ssz.Checkpoint,
    // Inactivity
    inactivityScores: new _ssz.ListType({
      elementType: Number64,
      limit: _lodestarParams.VALIDATOR_REGISTRY_LIMIT
    }),
    // Sync
    currentSyncCommittee: SyncCommittee,
    nextSyncCommittee: SyncCommittee
  }
});
exports.BeaconState = BeaconState;
const LightClientSnapshot = new _ssz.ContainerType({
  fields: {
    header: _phase.ssz.BeaconBlockHeader,
    nextSyncCommittee: SyncCommittee,
    currentSyncCommittee: SyncCommittee
  }
});
exports.LightClientSnapshot = LightClientSnapshot;
const LightClientUpdate = new _ssz.ContainerType({
  fields: {
    header: _phase.ssz.BeaconBlockHeader,
    nextSyncCommittee: SyncCommittee,
    nextSyncCommitteeBranch: new _ssz.VectorType({
      elementType: Bytes32,
      length: _lodestarParams.NEXT_SYNC_COMMITTEE_INDEX_FLOORLOG2
    }),
    finalityHeader: _phase.ssz.BeaconBlockHeader,
    finalityBranch: new _ssz.VectorType({
      elementType: Bytes32,
      length: _lodestarParams.FINALIZED_ROOT_INDEX_FLOORLOG2
    }),
    syncCommitteeBits: new _ssz.BitVectorType({
      length: _lodestarParams.SYNC_COMMITTEE_SIZE
    }),
    syncCommitteeSignature: BLSSignature,
    forkVersion: Version
  }
});
exports.LightClientUpdate = LightClientUpdate;
const LightClientStore = new _ssz.ContainerType({
  fields: {
    snapshot: LightClientSnapshot,
    validUpdates: new _ssz.ListType({
      elementType: LightClientUpdate,
      limit: _lodestarParams.EPOCHS_PER_SYNC_COMMITTEE_PERIOD * _lodestarParams.SLOTS_PER_EPOCH
    })
  }
}); // MUST set typesRef here, otherwise expandedType() calls will throw

exports.LightClientStore = LightClientStore;
typesRef.set({
  BeaconBlock,
  BeaconState
});
//# sourceMappingURL=sszTypes.js.map

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# sourceMappingURL=types.js.map

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allForks = void 0;

var _phase = __webpack_require__(64);

var _altair = __webpack_require__(88);

/* eslint-disable @typescript-eslint/naming-convention */

/**
 * Index the ssz types that differ by fork
 * A record of AllForksSSZTypes indexed by fork
 */
const allForks = {
  phase0: {
    BeaconBlockBody: _phase.ssz.BeaconBlockBody,
    BeaconBlock: _phase.ssz.BeaconBlock,
    SignedBeaconBlock: _phase.ssz.SignedBeaconBlock,
    BeaconState: _phase.ssz.BeaconState,
    Metadata: _phase.ssz.Metadata
  },
  altair: {
    BeaconBlockBody: _altair.ssz.BeaconBlockBody,
    BeaconBlock: _altair.ssz.BeaconBlock,
    SignedBeaconBlock: _altair.ssz.SignedBeaconBlock,
    BeaconState: _altair.ssz.BeaconState,
    Metadata: _altair.ssz.Metadata
  }
};
exports.allForks = allForks;
//# sourceMappingURL=sszTypes.js.map

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  allForks: true,
  phase0: true,
  altair: true
};
Object.defineProperty(exports, "phase0", {
  enumerable: true,
  get: function () {
    return _phase.ssz;
  }
});
Object.defineProperty(exports, "altair", {
  enumerable: true,
  get: function () {
    return _altair.ssz;
  }
});
exports.allForks = void 0;

var _sszTypes = __webpack_require__(131);

Object.keys(_sszTypes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _sszTypes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sszTypes[key];
    }
  });
});

var _phase = __webpack_require__(64);

var _altair = __webpack_require__(88);

var _allForks = __webpack_require__(133);

const allForks = _allForks.ssz.allForks;
exports.allForks = allForks;
//# sourceMappingURL=sszTypes.js.map

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StringType = void 0;

var _ssz = __webpack_require__(6);

/* eslint-disable @typescript-eslint/naming-convention */
class StringType extends _ssz.BasicType {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  struct_getSerializedLength(data) {
    throw new Error("unsupported ssz operation");
  }

  struct_convertToJson(value) {
    return value;
  }

  struct_convertFromJson(data) {
    return data;
  }

  struct_assertValidValue(data) {
    throw new Error("unsupported ssz operation");
  }

  serialize() {
    throw new Error("unsupported ssz type for serialization");
  }

  struct_serializeToBytes() {
    throw new Error("unsupported ssz type for serialization");
  }

  struct_deserializeFromBytes() {
    throw new Error("unsupported ssz operation");
  }

  struct_defaultValue() {
    return "something";
  }

}

exports.StringType = StringType;
//# sourceMappingURL=StringType.js.map

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(242);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 243 */
/***/ (function(module, exports) {

function addMethods(worker, methods) {
  var c = 0;
  var callbacks = {};
  worker.addEventListener('message', function (e) {
    var d = e.data;
    if (d.type !== 'RPC') return;

    if (d.id) {
      var f = callbacks[d.id];

      if (f) {
        delete callbacks[d.id];

        if (d.error) {
          f[1](Object.assign(Error(d.error.message), d.error));
        } else {
          f[0](d.result);
        }
      }
    } else {
      var evt = document.createEvent('Event');
      evt.initEvent(d.method, false, false);
      evt.data = d.params;
      worker.dispatchEvent(evt);
    }
  });
  methods.forEach(function (method) {
    worker[method] = function () {
      var _arguments = arguments;
      return new Promise(function (a, b) {
        var id = ++c;
        callbacks[id] = [a, b];
        worker.postMessage({
          type: 'RPC',
          id: id,
          method: method,
          params: [].slice.call(_arguments)
        });
      });
    };
  });
}

module.exports = addMethods;
//# sourceMappingURL=rpc-wrapper.js.map


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CSSTransition = _interopRequireDefault(__webpack_require__(245));

var _ReplaceTransition = _interopRequireDefault(__webpack_require__(250));

var _TransitionGroup = _interopRequireDefault(__webpack_require__(137));

var _Transition = _interopRequireDefault(__webpack_require__(134));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Transition: _Transition.default,
  TransitionGroup: _TransitionGroup.default,
  ReplaceTransition: _ReplaceTransition.default,
  CSSTransition: _CSSTransition.default
};

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(1));

var _addClass = _interopRequireDefault(__webpack_require__(246));

var _removeClass = _interopRequireDefault(__webpack_require__(249));

var _react = _interopRequireDefault(__webpack_require__(0));

var _Transition = _interopRequireDefault(__webpack_require__(134));

var _PropTypes = __webpack_require__(136);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _addClass.default)(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _removeClass.default)(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](http://www.nganimate.org/) library, you should use it if you're
 * using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity: 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**.
 */


var CSSTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.onEnter = function (node, appearing) {
      var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
          className = _this$getClassNames.className;

      _this.removeClasses(node, 'exit');

      addClass(node, className);

      if (_this.props.onEnter) {
        _this.props.onEnter(node, appearing);
      }
    };

    _this.onEntering = function (node, appearing) {
      var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
          activeClassName = _this$getClassNames2.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onEntering) {
        _this.props.onEntering(node, appearing);
      }
    };

    _this.onEntered = function (node, appearing) {
      var appearClassName = _this.getClassNames('appear').doneClassName;

      var enterClassName = _this.getClassNames('enter').doneClassName;

      var doneClassName = appearing ? appearClassName + " " + enterClassName : enterClassName;

      _this.removeClasses(node, appearing ? 'appear' : 'enter');

      addClass(node, doneClassName);

      if (_this.props.onEntered) {
        _this.props.onEntered(node, appearing);
      }
    };

    _this.onExit = function (node) {
      var _this$getClassNames3 = _this.getClassNames('exit'),
          className = _this$getClassNames3.className;

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      addClass(node, className);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    _this.onExiting = function (node) {
      var _this$getClassNames4 = _this.getClassNames('exit'),
          activeClassName = _this$getClassNames4.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    };

    _this.onExited = function (node) {
      var _this$getClassNames5 = _this.getClassNames('exit'),
          doneClassName = _this$getClassNames5.doneClassName;

      _this.removeClasses(node, 'exit');

      addClass(node, doneClassName);

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + '-' : '';
      var className = isStringClassNames ? prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? className + '-active' : classNames[type + 'Active'];
      var doneClassName = isStringClassNames ? className + '-done' : classNames[type + 'Done'];
      return {
        className: className,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$getClassNames6 = this.getClassNames(type),
        className = _this$getClassNames6.className,
        activeClassName = _this$getClassNames6.activeClassName,
        doneClassName = _this$getClassNames6.doneClassName;

    className && removeClass(node, className);
    activeClassName && removeClass(node, activeClassName);
    doneClassName && removeClass(node, doneClassName);
  };

  _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
    // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.
    if (className) {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
      /* eslint-enable no-unused-expressions */

      addClass(node, className);
    }
  };

  _proto.render = function render() {
    var props = _extends({}, this.props);

    delete props.classNames;
    return _react.default.createElement(_Transition.default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(_react.default.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  false ? undefined : {};
var _default = CSSTransition;
exports.default = _default;
module.exports = exports["default"];

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(247);

exports.__esModule = true;
exports.default = addClass;

var _hasClass = _interopRequireDefault(__webpack_require__(248));

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}

module.exports = exports["default"];

/***/ }),
/* 247 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = hasClass;

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactDom = __webpack_require__(16);

var _TransitionGroup = _interopRequireDefault(__webpack_require__(137));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */
var ReplaceTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;

    var child = _react.default.Children.toArray(children)[idx];

    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) this.props[handler]((0, _reactDom.findDOMNode)(this));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);

    var _React$Children$toArr = _react.default.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return _react.default.createElement(_TransitionGroup.default, props, inProp ? _react.default.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : _react.default.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(_react.default.Component);

ReplaceTransition.propTypes =  false ? undefined : {};
var _default = ReplaceTransition;
exports.default = _default;
module.exports = exports["default"];

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;
exports.getInitialChildMapping = getInitialChildMapping;
exports.getNextChildMapping = getNextChildMapping;

var _react = __webpack_require__(0);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0, _react.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) _react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */


function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0, _react.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}

function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0, _react.isValidElement)(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, _react.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0, _react.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, _react.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _emotion = __webpack_require__(89);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spinner = function Spinner(_ref) {
  var getStyles = _ref.getStyles,
      cx = _ref.cx;
  return _react.default.createElement("div", {
    className: cx('spinner', (0, _emotion.css)(getStyles('spinner')))
  }, _react.default.createElement("svg", {
    viewBox: "25 25 50 50"
  }, _react.default.createElement("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none",
    strokeWidth: "2",
    strokeMiterlimit: "10"
  })));
};

Spinner.propTypes = {
  getStyles: _propTypes.default.func.isRequired,
  cx: _propTypes.default.func.isRequired
};
var _default = Spinner;
exports.default = _default;

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _emotion = __webpack_require__(89);

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    stroke-dasharray: 1,200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89,200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89,200;\n    stroke-dashoffset: -124px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var rotate360 = (0, _emotion.keyframes)(_templateObject());
var spinnerDash = (0, _emotion.keyframes)(_templateObject2());
var _default = {
  wrapper: function wrapper(state) {
    return _objectSpread({
      position: 'relative'
    }, state);
  },
  overlay: function overlay(state, props) {
    return {
      position: 'absolute',
      height: '100%',
      width: '100%',
      top: '0px',
      left: '0px',
      display: 'flex',
      textAlign: 'center',
      fontSize: '1.2em',
      color: '#FFF',
      background: 'rgba(0, 0, 0, 0.7)',
      zIndex: 800,
      transition: "opacity ".concat(props.fadeSpeed, "ms ease-in"),
      opacity: state === 'entering' || state === 'entered' ? 1 : 0
    };
  },
  content: function content() {
    return {
      margin: 'auto'
    };
  },
  spinner: function spinner(state) {
    return {
      position: 'relative',
      margin: '0px auto 10px auto',
      width: '50px',
      maxHeight: '100%',
      '&:before': {
        content: '""',
        display: 'block',
        paddingTop: '100%'
      },
      '& svg': {
        animation: "".concat(rotate360, " 2s linear infinite"),
        height: '100%',
        transformOrigin: 'center center',
        width: '100%',
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        margin: 'auto',
        '& circle': {
          animation: "".concat(spinnerDash, " 1.5s ease-in-out infinite"),
          strokeDasharray: '1,200',
          strokeDashoffset: 0,
          strokeLinecap: 'round',
          stroke: '#FFF'
        }
      }
    };
  }
};
exports.default = _default;

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(255);

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  setPrototypeOf(subClass, superClass);
}

module.exports = _inheritsLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 255 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(257));
__export(__webpack_require__(258));
__export(__webpack_require__(259));


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var commonValues = {
    loading: true,
    color: "#000000",
    css: ""
};
function sizeDefaults(sizeValue) {
    return Object.assign({}, commonValues, { size: sizeValue });
}
exports.sizeDefaults = sizeDefaults;
function sizeMarginDefaults(sizeValue) {
    return Object.assign({}, sizeDefaults(sizeValue), {
        margin: 2
    });
}
exports.sizeMarginDefaults = sizeMarginDefaults;
function heightWidthDefaults(height, width) {
    return Object.assign({}, commonValues, {
        height: height,
        width: width
    });
}
exports.heightWidthDefaults = heightWidthDefaults;
function heightWidthRadiusDefaults(height, width, radius) {
    if (radius === void 0) { radius = 2; }
    return Object.assign({}, heightWidthDefaults(height, width), {
        radius: radius,
        margin: 2
    });
}
exports.heightWidthRadiusDefaults = heightWidthRadiusDefaults;


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BasicColors;
(function (BasicColors) {
    BasicColors["maroon"] = "#800000";
    BasicColors["red"] = "#FF0000";
    BasicColors["orange"] = "#FFA500";
    BasicColors["yellow"] = "#FFFF00";
    BasicColors["olive"] = "#808000";
    BasicColors["green"] = "#008000";
    BasicColors["purple"] = "#800080";
    BasicColors["fuchsia"] = "#FF00FF";
    BasicColors["lime"] = "#00FF00";
    BasicColors["teal"] = "#008080";
    BasicColors["aqua"] = "#00FFFF";
    BasicColors["blue"] = "#0000FF";
    BasicColors["navy"] = "#000080";
    BasicColors["black"] = "#000000";
    BasicColors["gray"] = "#808080";
    BasicColors["silver"] = "#C0C0C0";
    BasicColors["white"] = "#FFFFFF";
})(BasicColors || (BasicColors = {}));
exports.calculateRgba = function (color, opacity) {
    if (Object.keys(BasicColors).includes(color)) {
        color = BasicColors[color];
    }
    if (color[0] === "#") {
        color = color.slice(1);
    }
    if (color.length === 3) {
        var res_1 = "";
        color.split("").forEach(function (c) {
            res_1 += c;
            res_1 += c;
        });
        color = res_1;
    }
    var rgbValues = color
        .match(/.{2}/g)
        .map(function (hex) { return parseInt(hex, 16); })
        .join(", ");
    return "rgba(" + rgbValues + ", " + opacity + ")";
};


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cssUnit = {
    cm: true,
    mm: true,
    in: true,
    px: true,
    pt: true,
    pc: true,
    em: true,
    ex: true,
    ch: true,
    rem: true,
    vw: true,
    vh: true,
    vmin: true,
    vmax: true,
    "%": true
};
/**
 * If size is a number, append px to the value as default unit.
 * If size is a string, validate against list of valid units.
 * If unit is valid, return size as is.
 * If unit is invalid, console warn issue, replace with px as the unit.
 *
 * @param {(number | string)} size
 * @return {LengthObject} LengthObject
 */
function parseLengthAndUnit(size) {
    if (typeof size === "number") {
        return {
            value: size,
            unit: "px"
        };
    }
    var value;
    var valueString = size.match(/^[0-9.]*/).toString();
    if (valueString.includes(".")) {
        value = parseFloat(valueString);
    }
    else {
        value = parseInt(valueString, 10);
    }
    var unit = size.match(/[^0-9]*$/).toString();
    if (cssUnit[unit]) {
        return {
            value: value,
            unit: unit
        };
    }
    console.warn("React Spinners: " + size + " is not a valid css value. Defaulting to " + value + "px.");
    return {
        value: value,
        unit: "px"
    };
}
exports.parseLengthAndUnit = parseLengthAndUnit;
/**
 * Take value as an input and return valid css value
 *
 * @param {(number | string)} value
 * @return {string} valid css value
 */
function cssValue(value) {
    var lengthWithunit = parseLengthAndUnit(value);
    return "" + lengthWithunit.value + lengthWithunit.unit;
}
exports.cssValue = cssValue;


/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(141);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(16);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// CONCATENATED MODULE: ./src/components/ForkMe.tsx

function ForkMe() {
  return /*#__PURE__*/react["createElement"]("a", {
    href: "https://github.com/chainsafe/simpleserialize.com",
    style: {
      position: "absolute",
      right: 0,
      top: 0
    }
  }, /*#__PURE__*/react["createElement"]("img", {
    width: "149",
    height: "149",
    src: "https://github.blog/wp-content/uploads/2008/12/forkme_right_orange_ff7600.png?resize=149%2C149",
    className: "attachment-full size-full",
    alt: "Fork me on GitHub",
    "data-recalc-dims": "1"
  }));
}
// CONCATENATED MODULE: ./src/components/Header.tsx
/* eslint-disable max-len */

function Header() {
  return /*#__PURE__*/react["createElement"]("div", {
    className: "section"
  }, /*#__PURE__*/react["createElement"]("div", {
    className: "container"
  }, /*#__PURE__*/react["createElement"]("h1", {
    className: "title is-family-code"
  }, "Simple Serialize", /*#__PURE__*/react["createElement"]("span", {
    className: "is-size-6"
  }, /*#__PURE__*/react["createElement"]("img", {
    src: "https://img.shields.io/badge/ETH2_Spec_Version-0.11.2-2e86c1.svg"
  }))), /*#__PURE__*/react["createElement"]("p", null, "Simple Serialize (SSZ) is a serialization and merkleization standard created specifically for Eth2. Find the specification", " ", /*#__PURE__*/react["createElement"]("a", {
    target: "_blank",
    rel: "noreferrer",
    href: "https://github.com/ethereum/eth2.0-specs/blob/v0.11.2/ssz/simple-serialize.md"
  }, "here."))));
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.set-prototype-of.js
var es6_object_set_prototype_of = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.get-prototype-of.js
var es6_object_get_prototype_of = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.reflect.construct.js
var es6_reflect_construct = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.create.js
var es6_object_create = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.define-property.js
var es6_object_define_property = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__(57);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.bind.js
var es6_function_bind = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.map.js
var es6_array_map = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__(76);

// CONCATENATED MODULE: ./src/components/display/NamedOutput.tsx



var NamedOutput_NamedOuput = function NamedOuput(_ref) {
  var name = _ref.name,
      value = _ref.value,
      textarea = _ref.textarea;
  return /*#__PURE__*/react["createElement"]("div", {
    className: "field has-addons"
  }, /*#__PURE__*/react["createElement"]("div", {
    className: "control"
  }, /*#__PURE__*/react["createElement"]("a", {
    className: "button is-static"
  }, name)), /*#__PURE__*/react["createElement"]("div", {
    className: "control is-expanded"
  }, textarea ? /*#__PURE__*/react["createElement"]("textarea", {
    className: "input",
    readOnly: true,
    value: value || ""
  }) : /*#__PURE__*/react["createElement"]("input", {
    className: "input",
    type: "text",
    readOnly: true,
    value: value || ""
  })));
};

/* harmony default export */ var NamedOutput = (NamedOutput_NamedOuput);
// CONCATENATED MODULE: ./src/components/display/ErrorBox.tsx


var ErrorBox_ErrorBox = function ErrorBox(_ref) {
  var error = _ref.error,
      hideError = _ref.hideError;
  return /*#__PURE__*/react["createElement"]("div", {
    className: "notification"
  }, /*#__PURE__*/react["createElement"]("a", {
    className: "delete",
    onClick: hideError
  }), error);
};

/* harmony default export */ var display_ErrorBox = (ErrorBox_ErrorBox);
// EXTERNAL MODULE: ./node_modules/file-saver/dist/FileSaver.min.js
var FileSaver_min = __webpack_require__(138);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.date.to-string.js
var es6_date_to_string = __webpack_require__(103);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__(104);

// EXTERNAL MODULE: ./node_modules/@chainsafe/ssz/lib/index.js
var lib = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/js-yaml/dist/js-yaml.mjs

/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function isNothing(subject) {
  return (typeof subject === 'undefined') || (subject === null);
}


function isObject(subject) {
  return (typeof subject === 'object') && (subject !== null);
}


function toArray(sequence) {
  if (Array.isArray(sequence)) return sequence;
  else if (isNothing(sequence)) return [];

  return [ sequence ];
}


function extend(target, source) {
  var index, length, key, sourceKeys;

  if (source) {
    sourceKeys = Object.keys(source);

    for (index = 0, length = sourceKeys.length; index < length; index += 1) {
      key = sourceKeys[index];
      target[key] = source[key];
    }
  }

  return target;
}


function repeat(string, count) {
  var result = '', cycle;

  for (cycle = 0; cycle < count; cycle += 1) {
    result += string;
  }

  return result;
}


function isNegativeZero(number) {
  return (number === 0) && (Number.NEGATIVE_INFINITY === 1 / number);
}


var isNothing_1      = isNothing;
var isObject_1       = isObject;
var toArray_1        = toArray;
var repeat_1         = repeat;
var isNegativeZero_1 = isNegativeZero;
var extend_1         = extend;

var common = {
	isNothing: isNothing_1,
	isObject: isObject_1,
	toArray: toArray_1,
	repeat: repeat_1,
	isNegativeZero: isNegativeZero_1,
	extend: extend_1
};

// YAML error class. http://stackoverflow.com/questions/8458984


function formatError(exception, compact) {
  var where = '', message = exception.reason || '(unknown reason)';

  if (!exception.mark) return message;

  if (exception.mark.name) {
    where += 'in "' + exception.mark.name + '" ';
  }

  where += '(' + (exception.mark.line + 1) + ':' + (exception.mark.column + 1) + ')';

  if (!compact && exception.mark.snippet) {
    where += '\n\n' + exception.mark.snippet;
  }

  return message + ' ' + where;
}


function YAMLException$1(reason, mark) {
  // Super constructor
  Error.call(this);

  this.name = 'YAMLException';
  this.reason = reason;
  this.mark = mark;
  this.message = formatError(this, false);

  // Include stack trace in error object
  if (Error.captureStackTrace) {
    // Chrome and NodeJS
    Error.captureStackTrace(this, this.constructor);
  } else {
    // FF, IE 10+ and Safari 6+. Fallback for others
    this.stack = (new Error()).stack || '';
  }
}


// Inherit from Error
YAMLException$1.prototype = Object.create(Error.prototype);
YAMLException$1.prototype.constructor = YAMLException$1;


YAMLException$1.prototype.toString = function toString(compact) {
  return this.name + ': ' + formatError(this, compact);
};


var exception = YAMLException$1;

// get snippet for a single line, respecting maxLength
function getLine(buffer, lineStart, lineEnd, position, maxLineLength) {
  var head = '';
  var tail = '';
  var maxHalfLength = Math.floor(maxLineLength / 2) - 1;

  if (position - lineStart > maxHalfLength) {
    head = ' ... ';
    lineStart = position - maxHalfLength + head.length;
  }

  if (lineEnd - position > maxHalfLength) {
    tail = ' ...';
    lineEnd = position + maxHalfLength - tail.length;
  }

  return {
    str: head + buffer.slice(lineStart, lineEnd).replace(/\t/g, '→') + tail,
    pos: position - lineStart + head.length // relative position
  };
}


function padStart(string, max) {
  return common.repeat(' ', max - string.length) + string;
}


function makeSnippet(mark, options) {
  options = Object.create(options || null);

  if (!mark.buffer) return null;

  if (!options.maxLength) options.maxLength = 79;
  if (typeof options.indent      !== 'number') options.indent      = 1;
  if (typeof options.linesBefore !== 'number') options.linesBefore = 3;
  if (typeof options.linesAfter  !== 'number') options.linesAfter  = 2;

  var re = /\r?\n|\r|\0/g;
  var lineStarts = [ 0 ];
  var lineEnds = [];
  var match;
  var foundLineNo = -1;

  while ((match = re.exec(mark.buffer))) {
    lineEnds.push(match.index);
    lineStarts.push(match.index + match[0].length);

    if (mark.position <= match.index && foundLineNo < 0) {
      foundLineNo = lineStarts.length - 2;
    }
  }

  if (foundLineNo < 0) foundLineNo = lineStarts.length - 1;

  var result = '', i, line;
  var lineNoLength = Math.min(mark.line + options.linesAfter, lineEnds.length).toString().length;
  var maxLineLength = options.maxLength - (options.indent + lineNoLength + 3);

  for (i = 1; i <= options.linesBefore; i++) {
    if (foundLineNo - i < 0) break;
    line = getLine(
      mark.buffer,
      lineStarts[foundLineNo - i],
      lineEnds[foundLineNo - i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo - i]),
      maxLineLength
    );
    result = common.repeat(' ', options.indent) + padStart((mark.line - i + 1).toString(), lineNoLength) +
      ' | ' + line.str + '\n' + result;
  }

  line = getLine(mark.buffer, lineStarts[foundLineNo], lineEnds[foundLineNo], mark.position, maxLineLength);
  result += common.repeat(' ', options.indent) + padStart((mark.line + 1).toString(), lineNoLength) +
    ' | ' + line.str + '\n';
  result += common.repeat('-', options.indent + lineNoLength + 3 + line.pos) + '^' + '\n';

  for (i = 1; i <= options.linesAfter; i++) {
    if (foundLineNo + i >= lineEnds.length) break;
    line = getLine(
      mark.buffer,
      lineStarts[foundLineNo + i],
      lineEnds[foundLineNo + i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo + i]),
      maxLineLength
    );
    result += common.repeat(' ', options.indent) + padStart((mark.line + i + 1).toString(), lineNoLength) +
      ' | ' + line.str + '\n';
  }

  return result.replace(/\n$/, '');
}


var snippet = makeSnippet;

var TYPE_CONSTRUCTOR_OPTIONS = [
  'kind',
  'multi',
  'resolve',
  'construct',
  'instanceOf',
  'predicate',
  'represent',
  'representName',
  'defaultStyle',
  'styleAliases'
];

var YAML_NODE_KINDS = [
  'scalar',
  'sequence',
  'mapping'
];

function compileStyleAliases(map) {
  var result = {};

  if (map !== null) {
    Object.keys(map).forEach(function (style) {
      map[style].forEach(function (alias) {
        result[String(alias)] = style;
      });
    });
  }

  return result;
}

function Type$1(tag, options) {
  options = options || {};

  Object.keys(options).forEach(function (name) {
    if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
      throw new exception('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
    }
  });

  // TODO: Add tag format check.
  this.options       = options; // keep original options in case user wants to extend this type later
  this.tag           = tag;
  this.kind          = options['kind']          || null;
  this.resolve       = options['resolve']       || function () { return true; };
  this.construct     = options['construct']     || function (data) { return data; };
  this.instanceOf    = options['instanceOf']    || null;
  this.predicate     = options['predicate']     || null;
  this.represent     = options['represent']     || null;
  this.representName = options['representName'] || null;
  this.defaultStyle  = options['defaultStyle']  || null;
  this.multi         = options['multi']         || false;
  this.styleAliases  = compileStyleAliases(options['styleAliases'] || null);

  if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
    throw new exception('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
  }
}

var js_yaml_type = Type$1;

/*eslint-disable max-len*/





function compileList(schema, name) {
  var result = [];

  schema[name].forEach(function (currentType) {
    var newIndex = result.length;

    result.forEach(function (previousType, previousIndex) {
      if (previousType.tag === currentType.tag &&
          previousType.kind === currentType.kind &&
          previousType.multi === currentType.multi) {

        newIndex = previousIndex;
      }
    });

    result[newIndex] = currentType;
  });

  return result;
}


function compileMap(/* lists... */) {
  var result = {
        scalar: {},
        sequence: {},
        mapping: {},
        fallback: {},
        multi: {
          scalar: [],
          sequence: [],
          mapping: [],
          fallback: []
        }
      }, index, length;

  function collectType(type) {
    if (type.multi) {
      result.multi[type.kind].push(type);
      result.multi['fallback'].push(type);
    } else {
      result[type.kind][type.tag] = result['fallback'][type.tag] = type;
    }
  }

  for (index = 0, length = arguments.length; index < length; index += 1) {
    arguments[index].forEach(collectType);
  }
  return result;
}


function Schema$1(definition) {
  return this.extend(definition);
}


Schema$1.prototype.extend = function extend(definition) {
  var implicit = [];
  var explicit = [];

  if (definition instanceof js_yaml_type) {
    // Schema.extend(type)
    explicit.push(definition);

  } else if (Array.isArray(definition)) {
    // Schema.extend([ type1, type2, ... ])
    explicit = explicit.concat(definition);

  } else if (definition && (Array.isArray(definition.implicit) || Array.isArray(definition.explicit))) {
    // Schema.extend({ explicit: [ type1, type2, ... ], implicit: [ type1, type2, ... ] })
    if (definition.implicit) implicit = implicit.concat(definition.implicit);
    if (definition.explicit) explicit = explicit.concat(definition.explicit);

  } else {
    throw new exception('Schema.extend argument should be a Type, [ Type ], ' +
      'or a schema definition ({ implicit: [...], explicit: [...] })');
  }

  implicit.forEach(function (type$1) {
    if (!(type$1 instanceof js_yaml_type)) {
      throw new exception('Specified list of YAML types (or a single Type object) contains a non-Type object.');
    }

    if (type$1.loadKind && type$1.loadKind !== 'scalar') {
      throw new exception('There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.');
    }

    if (type$1.multi) {
      throw new exception('There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.');
    }
  });

  explicit.forEach(function (type$1) {
    if (!(type$1 instanceof js_yaml_type)) {
      throw new exception('Specified list of YAML types (or a single Type object) contains a non-Type object.');
    }
  });

  var result = Object.create(Schema$1.prototype);

  result.implicit = (this.implicit || []).concat(implicit);
  result.explicit = (this.explicit || []).concat(explicit);

  result.compiledImplicit = compileList(result, 'implicit');
  result.compiledExplicit = compileList(result, 'explicit');
  result.compiledTypeMap  = compileMap(result.compiledImplicit, result.compiledExplicit);

  return result;
};


var schema = Schema$1;

var str = new js_yaml_type('tag:yaml.org,2002:str', {
  kind: 'scalar',
  construct: function (data) { return data !== null ? data : ''; }
});

var seq = new js_yaml_type('tag:yaml.org,2002:seq', {
  kind: 'sequence',
  construct: function (data) { return data !== null ? data : []; }
});

var map = new js_yaml_type('tag:yaml.org,2002:map', {
  kind: 'mapping',
  construct: function (data) { return data !== null ? data : {}; }
});

var failsafe = new schema({
  explicit: [
    str,
    seq,
    map
  ]
});

function resolveYamlNull(data) {
  if (data === null) return true;

  var max = data.length;

  return (max === 1 && data === '~') ||
         (max === 4 && (data === 'null' || data === 'Null' || data === 'NULL'));
}

function constructYamlNull() {
  return null;
}

function isNull(object) {
  return object === null;
}

var _null = new js_yaml_type('tag:yaml.org,2002:null', {
  kind: 'scalar',
  resolve: resolveYamlNull,
  construct: constructYamlNull,
  predicate: isNull,
  represent: {
    canonical: function () { return '~';    },
    lowercase: function () { return 'null'; },
    uppercase: function () { return 'NULL'; },
    camelcase: function () { return 'Null'; },
    empty:     function () { return '';     }
  },
  defaultStyle: 'lowercase'
});

function resolveYamlBoolean(data) {
  if (data === null) return false;

  var max = data.length;

  return (max === 4 && (data === 'true' || data === 'True' || data === 'TRUE')) ||
         (max === 5 && (data === 'false' || data === 'False' || data === 'FALSE'));
}

function constructYamlBoolean(data) {
  return data === 'true' ||
         data === 'True' ||
         data === 'TRUE';
}

function isBoolean(object) {
  return Object.prototype.toString.call(object) === '[object Boolean]';
}

var bool = new js_yaml_type('tag:yaml.org,2002:bool', {
  kind: 'scalar',
  resolve: resolveYamlBoolean,
  construct: constructYamlBoolean,
  predicate: isBoolean,
  represent: {
    lowercase: function (object) { return object ? 'true' : 'false'; },
    uppercase: function (object) { return object ? 'TRUE' : 'FALSE'; },
    camelcase: function (object) { return object ? 'True' : 'False'; }
  },
  defaultStyle: 'lowercase'
});

function isHexCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) ||
         ((0x41/* A */ <= c) && (c <= 0x46/* F */)) ||
         ((0x61/* a */ <= c) && (c <= 0x66/* f */));
}

function isOctCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x37/* 7 */));
}

function isDecCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */));
}

function resolveYamlInteger(data) {
  if (data === null) return false;

  var max = data.length,
      index = 0,
      hasDigits = false,
      ch;

  if (!max) return false;

  ch = data[index];

  // sign
  if (ch === '-' || ch === '+') {
    ch = data[++index];
  }

  if (ch === '0') {
    // 0
    if (index + 1 === max) return true;
    ch = data[++index];

    // base 2, base 8, base 16

    if (ch === 'b') {
      // base 2
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (ch !== '0' && ch !== '1') return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }


    if (ch === 'x') {
      // base 16
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (!isHexCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }


    if (ch === 'o') {
      // base 8
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (!isOctCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }
  }

  // base 10 (except 0)

  // value should not start with `_`;
  if (ch === '_') return false;

  for (; index < max; index++) {
    ch = data[index];
    if (ch === '_') continue;
    if (!isDecCode(data.charCodeAt(index))) {
      return false;
    }
    hasDigits = true;
  }

  // Should have digits and should not end with `_`
  if (!hasDigits || ch === '_') return false;

  return true;
}

function constructYamlInteger(data) {
  var value = data, sign = 1, ch;

  if (value.indexOf('_') !== -1) {
    value = value.replace(/_/g, '');
  }

  ch = value[0];

  if (ch === '-' || ch === '+') {
    if (ch === '-') sign = -1;
    value = value.slice(1);
    ch = value[0];
  }

  if (value === '0') return 0;

  if (ch === '0') {
    if (value[1] === 'b') return sign * parseInt(value.slice(2), 2);
    if (value[1] === 'x') return sign * parseInt(value.slice(2), 16);
    if (value[1] === 'o') return sign * parseInt(value.slice(2), 8);
  }

  return sign * parseInt(value, 10);
}

function isInteger(object) {
  return (Object.prototype.toString.call(object)) === '[object Number]' &&
         (object % 1 === 0 && !common.isNegativeZero(object));
}

var js_yaml_int = new js_yaml_type('tag:yaml.org,2002:int', {
  kind: 'scalar',
  resolve: resolveYamlInteger,
  construct: constructYamlInteger,
  predicate: isInteger,
  represent: {
    binary:      function (obj) { return obj >= 0 ? '0b' + obj.toString(2) : '-0b' + obj.toString(2).slice(1); },
    octal:       function (obj) { return obj >= 0 ? '0o'  + obj.toString(8) : '-0o'  + obj.toString(8).slice(1); },
    decimal:     function (obj) { return obj.toString(10); },
    /* eslint-disable max-len */
    hexadecimal: function (obj) { return obj >= 0 ? '0x' + obj.toString(16).toUpperCase() :  '-0x' + obj.toString(16).toUpperCase().slice(1); }
  },
  defaultStyle: 'decimal',
  styleAliases: {
    binary:      [ 2,  'bin' ],
    octal:       [ 8,  'oct' ],
    decimal:     [ 10, 'dec' ],
    hexadecimal: [ 16, 'hex' ]
  }
});

var YAML_FLOAT_PATTERN = new RegExp(
  // 2.5e4, 2.5 and integers
  '^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?' +
  // .2e4, .2
  // special case, seems not from spec
  '|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?' +
  // .inf
  '|[-+]?\\.(?:inf|Inf|INF)' +
  // .nan
  '|\\.(?:nan|NaN|NAN))$');

function resolveYamlFloat(data) {
  if (data === null) return false;

  if (!YAML_FLOAT_PATTERN.test(data) ||
      // Quick hack to not allow integers end with `_`
      // Probably should update regexp & check speed
      data[data.length - 1] === '_') {
    return false;
  }

  return true;
}

function constructYamlFloat(data) {
  var value, sign;

  value  = data.replace(/_/g, '').toLowerCase();
  sign   = value[0] === '-' ? -1 : 1;

  if ('+-'.indexOf(value[0]) >= 0) {
    value = value.slice(1);
  }

  if (value === '.inf') {
    return (sign === 1) ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;

  } else if (value === '.nan') {
    return NaN;
  }
  return sign * parseFloat(value, 10);
}


var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;

function representYamlFloat(object, style) {
  var res;

  if (isNaN(object)) {
    switch (style) {
      case 'lowercase': return '.nan';
      case 'uppercase': return '.NAN';
      case 'camelcase': return '.NaN';
    }
  } else if (Number.POSITIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase': return '.inf';
      case 'uppercase': return '.INF';
      case 'camelcase': return '.Inf';
    }
  } else if (Number.NEGATIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase': return '-.inf';
      case 'uppercase': return '-.INF';
      case 'camelcase': return '-.Inf';
    }
  } else if (common.isNegativeZero(object)) {
    return '-0.0';
  }

  res = object.toString(10);

  // JS stringifier can build scientific format without dots: 5e-100,
  // while YAML requres dot: 5.e-100. Fix it with simple hack

  return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace('e', '.e') : res;
}

function isFloat(object) {
  return (Object.prototype.toString.call(object) === '[object Number]') &&
         (object % 1 !== 0 || common.isNegativeZero(object));
}

var js_yaml_float = new js_yaml_type('tag:yaml.org,2002:float', {
  kind: 'scalar',
  resolve: resolveYamlFloat,
  construct: constructYamlFloat,
  predicate: isFloat,
  represent: representYamlFloat,
  defaultStyle: 'lowercase'
});

var json = failsafe.extend({
  implicit: [
    _null,
    bool,
    js_yaml_int,
    js_yaml_float
  ]
});

var core = json;

var YAML_DATE_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])'          + // [1] year
  '-([0-9][0-9])'                    + // [2] month
  '-([0-9][0-9])$');                   // [3] day

var YAML_TIMESTAMP_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])'          + // [1] year
  '-([0-9][0-9]?)'                   + // [2] month
  '-([0-9][0-9]?)'                   + // [3] day
  '(?:[Tt]|[ \\t]+)'                 + // ...
  '([0-9][0-9]?)'                    + // [4] hour
  ':([0-9][0-9])'                    + // [5] minute
  ':([0-9][0-9])'                    + // [6] second
  '(?:\\.([0-9]*))?'                 + // [7] fraction
  '(?:[ \\t]*(Z|([-+])([0-9][0-9]?)' + // [8] tz [9] tz_sign [10] tz_hour
  '(?::([0-9][0-9]))?))?$');           // [11] tz_minute

function resolveYamlTimestamp(data) {
  if (data === null) return false;
  if (YAML_DATE_REGEXP.exec(data) !== null) return true;
  if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
  return false;
}

function constructYamlTimestamp(data) {
  var match, year, month, day, hour, minute, second, fraction = 0,
      delta = null, tz_hour, tz_minute, date;

  match = YAML_DATE_REGEXP.exec(data);
  if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);

  if (match === null) throw new Error('Date resolve error');

  // match: [1] year [2] month [3] day

  year = +(match[1]);
  month = +(match[2]) - 1; // JS month starts with 0
  day = +(match[3]);

  if (!match[4]) { // no hour
    return new Date(Date.UTC(year, month, day));
  }

  // match: [4] hour [5] minute [6] second [7] fraction

  hour = +(match[4]);
  minute = +(match[5]);
  second = +(match[6]);

  if (match[7]) {
    fraction = match[7].slice(0, 3);
    while (fraction.length < 3) { // milli-seconds
      fraction += '0';
    }
    fraction = +fraction;
  }

  // match: [8] tz [9] tz_sign [10] tz_hour [11] tz_minute

  if (match[9]) {
    tz_hour = +(match[10]);
    tz_minute = +(match[11] || 0);
    delta = (tz_hour * 60 + tz_minute) * 60000; // delta in mili-seconds
    if (match[9] === '-') delta = -delta;
  }

  date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));

  if (delta) date.setTime(date.getTime() - delta);

  return date;
}

function representYamlTimestamp(object /*, style*/) {
  return object.toISOString();
}

var timestamp = new js_yaml_type('tag:yaml.org,2002:timestamp', {
  kind: 'scalar',
  resolve: resolveYamlTimestamp,
  construct: constructYamlTimestamp,
  instanceOf: Date,
  represent: representYamlTimestamp
});

function resolveYamlMerge(data) {
  return data === '<<' || data === null;
}

var merge = new js_yaml_type('tag:yaml.org,2002:merge', {
  kind: 'scalar',
  resolve: resolveYamlMerge
});

/*eslint-disable no-bitwise*/





// [ 64, 65, 66 ] -> [ padding, CR, LF ]
var BASE64_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r';


function resolveYamlBinary(data) {
  if (data === null) return false;

  var code, idx, bitlen = 0, max = data.length, map = BASE64_MAP;

  // Convert one by one.
  for (idx = 0; idx < max; idx++) {
    code = map.indexOf(data.charAt(idx));

    // Skip CR/LF
    if (code > 64) continue;

    // Fail on illegal characters
    if (code < 0) return false;

    bitlen += 6;
  }

  // If there are any bits left, source was corrupted
  return (bitlen % 8) === 0;
}

function constructYamlBinary(data) {
  var idx, tailbits,
      input = data.replace(/[\r\n=]/g, ''), // remove CR/LF & padding to simplify scan
      max = input.length,
      map = BASE64_MAP,
      bits = 0,
      result = [];

  // Collect by 6*4 bits (3 bytes)

  for (idx = 0; idx < max; idx++) {
    if ((idx % 4 === 0) && idx) {
      result.push((bits >> 16) & 0xFF);
      result.push((bits >> 8) & 0xFF);
      result.push(bits & 0xFF);
    }

    bits = (bits << 6) | map.indexOf(input.charAt(idx));
  }

  // Dump tail

  tailbits = (max % 4) * 6;

  if (tailbits === 0) {
    result.push((bits >> 16) & 0xFF);
    result.push((bits >> 8) & 0xFF);
    result.push(bits & 0xFF);
  } else if (tailbits === 18) {
    result.push((bits >> 10) & 0xFF);
    result.push((bits >> 2) & 0xFF);
  } else if (tailbits === 12) {
    result.push((bits >> 4) & 0xFF);
  }

  return new Uint8Array(result);
}

function representYamlBinary(object /*, style*/) {
  var result = '', bits = 0, idx, tail,
      max = object.length,
      map = BASE64_MAP;

  // Convert every three bytes to 4 ASCII characters.

  for (idx = 0; idx < max; idx++) {
    if ((idx % 3 === 0) && idx) {
      result += map[(bits >> 18) & 0x3F];
      result += map[(bits >> 12) & 0x3F];
      result += map[(bits >> 6) & 0x3F];
      result += map[bits & 0x3F];
    }

    bits = (bits << 8) + object[idx];
  }

  // Dump tail

  tail = max % 3;

  if (tail === 0) {
    result += map[(bits >> 18) & 0x3F];
    result += map[(bits >> 12) & 0x3F];
    result += map[(bits >> 6) & 0x3F];
    result += map[bits & 0x3F];
  } else if (tail === 2) {
    result += map[(bits >> 10) & 0x3F];
    result += map[(bits >> 4) & 0x3F];
    result += map[(bits << 2) & 0x3F];
    result += map[64];
  } else if (tail === 1) {
    result += map[(bits >> 2) & 0x3F];
    result += map[(bits << 4) & 0x3F];
    result += map[64];
    result += map[64];
  }

  return result;
}

function isBinary(obj) {
  return Object.prototype.toString.call(obj) ===  '[object Uint8Array]';
}

var binary = new js_yaml_type('tag:yaml.org,2002:binary', {
  kind: 'scalar',
  resolve: resolveYamlBinary,
  construct: constructYamlBinary,
  predicate: isBinary,
  represent: representYamlBinary
});

var _hasOwnProperty$3 = Object.prototype.hasOwnProperty;
var _toString$2       = Object.prototype.toString;

function resolveYamlOmap(data) {
  if (data === null) return true;

  var objectKeys = [], index, length, pair, pairKey, pairHasKey,
      object = data;

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    pairHasKey = false;

    if (_toString$2.call(pair) !== '[object Object]') return false;

    for (pairKey in pair) {
      if (_hasOwnProperty$3.call(pair, pairKey)) {
        if (!pairHasKey) pairHasKey = true;
        else return false;
      }
    }

    if (!pairHasKey) return false;

    if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
    else return false;
  }

  return true;
}

function constructYamlOmap(data) {
  return data !== null ? data : [];
}

var omap = new js_yaml_type('tag:yaml.org,2002:omap', {
  kind: 'sequence',
  resolve: resolveYamlOmap,
  construct: constructYamlOmap
});

var _toString$1 = Object.prototype.toString;

function resolveYamlPairs(data) {
  if (data === null) return true;

  var index, length, pair, keys, result,
      object = data;

  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];

    if (_toString$1.call(pair) !== '[object Object]') return false;

    keys = Object.keys(pair);

    if (keys.length !== 1) return false;

    result[index] = [ keys[0], pair[keys[0]] ];
  }

  return true;
}

function constructYamlPairs(data) {
  if (data === null) return [];

  var index, length, pair, keys, result,
      object = data;

  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];

    keys = Object.keys(pair);

    result[index] = [ keys[0], pair[keys[0]] ];
  }

  return result;
}

var pairs = new js_yaml_type('tag:yaml.org,2002:pairs', {
  kind: 'sequence',
  resolve: resolveYamlPairs,
  construct: constructYamlPairs
});

var _hasOwnProperty$2 = Object.prototype.hasOwnProperty;

function resolveYamlSet(data) {
  if (data === null) return true;

  var key, object = data;

  for (key in object) {
    if (_hasOwnProperty$2.call(object, key)) {
      if (object[key] !== null) return false;
    }
  }

  return true;
}

function constructYamlSet(data) {
  return data !== null ? data : {};
}

var set = new js_yaml_type('tag:yaml.org,2002:set', {
  kind: 'mapping',
  resolve: resolveYamlSet,
  construct: constructYamlSet
});

var _default = core.extend({
  implicit: [
    timestamp,
    merge
  ],
  explicit: [
    binary,
    omap,
    pairs,
    set
  ]
});

/*eslint-disable max-len,no-use-before-define*/







var _hasOwnProperty$1 = Object.prototype.hasOwnProperty;


var CONTEXT_FLOW_IN   = 1;
var CONTEXT_FLOW_OUT  = 2;
var CONTEXT_BLOCK_IN  = 3;
var CONTEXT_BLOCK_OUT = 4;


var CHOMPING_CLIP  = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP  = 3;


var PATTERN_NON_PRINTABLE         = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS       = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE            = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI               = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;


function _class(obj) { return Object.prototype.toString.call(obj); }

function is_EOL(c) {
  return (c === 0x0A/* LF */) || (c === 0x0D/* CR */);
}

function is_WHITE_SPACE(c) {
  return (c === 0x09/* Tab */) || (c === 0x20/* Space */);
}

function is_WS_OR_EOL(c) {
  return (c === 0x09/* Tab */) ||
         (c === 0x20/* Space */) ||
         (c === 0x0A/* LF */) ||
         (c === 0x0D/* CR */);
}

function is_FLOW_INDICATOR(c) {
  return c === 0x2C/* , */ ||
         c === 0x5B/* [ */ ||
         c === 0x5D/* ] */ ||
         c === 0x7B/* { */ ||
         c === 0x7D/* } */;
}

function fromHexCode(c) {
  var lc;

  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
    return c - 0x30;
  }

  /*eslint-disable no-bitwise*/
  lc = c | 0x20;

  if ((0x61/* a */ <= lc) && (lc <= 0x66/* f */)) {
    return lc - 0x61 + 10;
  }

  return -1;
}

function escapedHexLen(c) {
  if (c === 0x78/* x */) { return 2; }
  if (c === 0x75/* u */) { return 4; }
  if (c === 0x55/* U */) { return 8; }
  return 0;
}

function fromDecimalCode(c) {
  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
    return c - 0x30;
  }

  return -1;
}

function simpleEscapeSequence(c) {
  /* eslint-disable indent */
  return (c === 0x30/* 0 */) ? '\x00' :
        (c === 0x61/* a */) ? '\x07' :
        (c === 0x62/* b */) ? '\x08' :
        (c === 0x74/* t */) ? '\x09' :
        (c === 0x09/* Tab */) ? '\x09' :
        (c === 0x6E/* n */) ? '\x0A' :
        (c === 0x76/* v */) ? '\x0B' :
        (c === 0x66/* f */) ? '\x0C' :
        (c === 0x72/* r */) ? '\x0D' :
        (c === 0x65/* e */) ? '\x1B' :
        (c === 0x20/* Space */) ? ' ' :
        (c === 0x22/* " */) ? '\x22' :
        (c === 0x2F/* / */) ? '/' :
        (c === 0x5C/* \ */) ? '\x5C' :
        (c === 0x4E/* N */) ? '\x85' :
        (c === 0x5F/* _ */) ? '\xA0' :
        (c === 0x4C/* L */) ? '\u2028' :
        (c === 0x50/* P */) ? '\u2029' : '';
}

function charFromCodepoint(c) {
  if (c <= 0xFFFF) {
    return String.fromCharCode(c);
  }
  // Encode UTF-16 surrogate pair
  // https://en.wikipedia.org/wiki/UTF-16#Code_points_U.2B010000_to_U.2B10FFFF
  return String.fromCharCode(
    ((c - 0x010000) >> 10) + 0xD800,
    ((c - 0x010000) & 0x03FF) + 0xDC00
  );
}

var simpleEscapeCheck = new Array(256); // integer, for fast access
var simpleEscapeMap = new Array(256);
for (var i = 0; i < 256; i++) {
  simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
  simpleEscapeMap[i] = simpleEscapeSequence(i);
}


function State$1(input, options) {
  this.input = input;

  this.filename  = options['filename']  || null;
  this.schema    = options['schema']    || _default;
  this.onWarning = options['onWarning'] || null;
  // (Hidden) Remove? makes the loader to expect YAML 1.1 documents
  // if such documents have no explicit %YAML directive
  this.legacy    = options['legacy']    || false;

  this.json      = options['json']      || false;
  this.listener  = options['listener']  || null;

  this.implicitTypes = this.schema.compiledImplicit;
  this.typeMap       = this.schema.compiledTypeMap;

  this.length     = input.length;
  this.position   = 0;
  this.line       = 0;
  this.lineStart  = 0;
  this.lineIndent = 0;

  // position of first leading tab in the current line,
  // used to make sure there are no tabs in the indentation
  this.firstTabInLine = -1;

  this.documents = [];

  /*
  this.version;
  this.checkLineBreaks;
  this.tagMap;
  this.anchorMap;
  this.tag;
  this.anchor;
  this.kind;
  this.result;*/

}


function generateError(state, message) {
  var mark = {
    name:     state.filename,
    buffer:   state.input.slice(0, -1), // omit trailing \0
    position: state.position,
    line:     state.line,
    column:   state.position - state.lineStart
  };

  mark.snippet = snippet(mark);

  return new exception(message, mark);
}

function throwError(state, message) {
  throw generateError(state, message);
}

function throwWarning(state, message) {
  if (state.onWarning) {
    state.onWarning.call(null, generateError(state, message));
  }
}


var directiveHandlers = {

  YAML: function handleYamlDirective(state, name, args) {

    var match, major, minor;

    if (state.version !== null) {
      throwError(state, 'duplication of %YAML directive');
    }

    if (args.length !== 1) {
      throwError(state, 'YAML directive accepts exactly one argument');
    }

    match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);

    if (match === null) {
      throwError(state, 'ill-formed argument of the YAML directive');
    }

    major = parseInt(match[1], 10);
    minor = parseInt(match[2], 10);

    if (major !== 1) {
      throwError(state, 'unacceptable YAML version of the document');
    }

    state.version = args[0];
    state.checkLineBreaks = (minor < 2);

    if (minor !== 1 && minor !== 2) {
      throwWarning(state, 'unsupported YAML version of the document');
    }
  },

  TAG: function handleTagDirective(state, name, args) {

    var handle, prefix;

    if (args.length !== 2) {
      throwError(state, 'TAG directive accepts exactly two arguments');
    }

    handle = args[0];
    prefix = args[1];

    if (!PATTERN_TAG_HANDLE.test(handle)) {
      throwError(state, 'ill-formed tag handle (first argument) of the TAG directive');
    }

    if (_hasOwnProperty$1.call(state.tagMap, handle)) {
      throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
    }

    if (!PATTERN_TAG_URI.test(prefix)) {
      throwError(state, 'ill-formed tag prefix (second argument) of the TAG directive');
    }

    try {
      prefix = decodeURIComponent(prefix);
    } catch (err) {
      throwError(state, 'tag prefix is malformed: ' + prefix);
    }

    state.tagMap[handle] = prefix;
  }
};


function captureSegment(state, start, end, checkJson) {
  var _position, _length, _character, _result;

  if (start < end) {
    _result = state.input.slice(start, end);

    if (checkJson) {
      for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
        _character = _result.charCodeAt(_position);
        if (!(_character === 0x09 ||
              (0x20 <= _character && _character <= 0x10FFFF))) {
          throwError(state, 'expected valid JSON character');
        }
      }
    } else if (PATTERN_NON_PRINTABLE.test(_result)) {
      throwError(state, 'the stream contains non-printable characters');
    }

    state.result += _result;
  }
}

function mergeMappings(state, destination, source, overridableKeys) {
  var sourceKeys, key, index, quantity;

  if (!common.isObject(source)) {
    throwError(state, 'cannot merge mappings; the provided source object is unacceptable');
  }

  sourceKeys = Object.keys(source);

  for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
    key = sourceKeys[index];

    if (!_hasOwnProperty$1.call(destination, key)) {
      destination[key] = source[key];
      overridableKeys[key] = true;
    }
  }
}

function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode,
  startLine, startLineStart, startPos) {

  var index, quantity;

  // The output is a plain object here, so keys can only be strings.
  // We need to convert keyNode to a string, but doing so can hang the process
  // (deeply nested arrays that explode exponentially using aliases).
  if (Array.isArray(keyNode)) {
    keyNode = Array.prototype.slice.call(keyNode);

    for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
      if (Array.isArray(keyNode[index])) {
        throwError(state, 'nested arrays are not supported inside keys');
      }

      if (typeof keyNode === 'object' && _class(keyNode[index]) === '[object Object]') {
        keyNode[index] = '[object Object]';
      }
    }
  }

  // Avoid code execution in load() via toString property
  // (still use its own toString for arrays, timestamps,
  // and whatever user schema extensions happen to have @@toStringTag)
  if (typeof keyNode === 'object' && _class(keyNode) === '[object Object]') {
    keyNode = '[object Object]';
  }


  keyNode = String(keyNode);

  if (_result === null) {
    _result = {};
  }

  if (keyTag === 'tag:yaml.org,2002:merge') {
    if (Array.isArray(valueNode)) {
      for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
        mergeMappings(state, _result, valueNode[index], overridableKeys);
      }
    } else {
      mergeMappings(state, _result, valueNode, overridableKeys);
    }
  } else {
    if (!state.json &&
        !_hasOwnProperty$1.call(overridableKeys, keyNode) &&
        _hasOwnProperty$1.call(_result, keyNode)) {
      state.line = startLine || state.line;
      state.lineStart = startLineStart || state.lineStart;
      state.position = startPos || state.position;
      throwError(state, 'duplicated mapping key');
    }

    // used for this specific key only because Object.defineProperty is slow
    if (keyNode === '__proto__') {
      Object.defineProperty(_result, keyNode, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: valueNode
      });
    } else {
      _result[keyNode] = valueNode;
    }
    delete overridableKeys[keyNode];
  }

  return _result;
}

function readLineBreak(state) {
  var ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x0A/* LF */) {
    state.position++;
  } else if (ch === 0x0D/* CR */) {
    state.position++;
    if (state.input.charCodeAt(state.position) === 0x0A/* LF */) {
      state.position++;
    }
  } else {
    throwError(state, 'a line break is expected');
  }

  state.line += 1;
  state.lineStart = state.position;
  state.firstTabInLine = -1;
}

function skipSeparationSpace(state, allowComments, checkIndent) {
  var lineBreaks = 0,
      ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    while (is_WHITE_SPACE(ch)) {
      if (ch === 0x09/* Tab */ && state.firstTabInLine === -1) {
        state.firstTabInLine = state.position;
      }
      ch = state.input.charCodeAt(++state.position);
    }

    if (allowComments && ch === 0x23/* # */) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (ch !== 0x0A/* LF */ && ch !== 0x0D/* CR */ && ch !== 0);
    }

    if (is_EOL(ch)) {
      readLineBreak(state);

      ch = state.input.charCodeAt(state.position);
      lineBreaks++;
      state.lineIndent = 0;

      while (ch === 0x20/* Space */) {
        state.lineIndent++;
        ch = state.input.charCodeAt(++state.position);
      }
    } else {
      break;
    }
  }

  if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
    throwWarning(state, 'deficient indentation');
  }

  return lineBreaks;
}

function testDocumentSeparator(state) {
  var _position = state.position,
      ch;

  ch = state.input.charCodeAt(_position);

  // Condition state.position === state.lineStart is tested
  // in parent on each call, for efficiency. No needs to test here again.
  if ((ch === 0x2D/* - */ || ch === 0x2E/* . */) &&
      ch === state.input.charCodeAt(_position + 1) &&
      ch === state.input.charCodeAt(_position + 2)) {

    _position += 3;

    ch = state.input.charCodeAt(_position);

    if (ch === 0 || is_WS_OR_EOL(ch)) {
      return true;
    }
  }

  return false;
}

function writeFoldedLines(state, count) {
  if (count === 1) {
    state.result += ' ';
  } else if (count > 1) {
    state.result += common.repeat('\n', count - 1);
  }
}


function readPlainScalar(state, nodeIndent, withinFlowCollection) {
  var preceding,
      following,
      captureStart,
      captureEnd,
      hasPendingContent,
      _line,
      _lineStart,
      _lineIndent,
      _kind = state.kind,
      _result = state.result,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (is_WS_OR_EOL(ch)      ||
      is_FLOW_INDICATOR(ch) ||
      ch === 0x23/* # */    ||
      ch === 0x26/* & */    ||
      ch === 0x2A/* * */    ||
      ch === 0x21/* ! */    ||
      ch === 0x7C/* | */    ||
      ch === 0x3E/* > */    ||
      ch === 0x27/* ' */    ||
      ch === 0x22/* " */    ||
      ch === 0x25/* % */    ||
      ch === 0x40/* @ */    ||
      ch === 0x60/* ` */) {
    return false;
  }

  if (ch === 0x3F/* ? */ || ch === 0x2D/* - */) {
    following = state.input.charCodeAt(state.position + 1);

    if (is_WS_OR_EOL(following) ||
        withinFlowCollection && is_FLOW_INDICATOR(following)) {
      return false;
    }
  }

  state.kind = 'scalar';
  state.result = '';
  captureStart = captureEnd = state.position;
  hasPendingContent = false;

  while (ch !== 0) {
    if (ch === 0x3A/* : */) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following) ||
          withinFlowCollection && is_FLOW_INDICATOR(following)) {
        break;
      }

    } else if (ch === 0x23/* # */) {
      preceding = state.input.charCodeAt(state.position - 1);

      if (is_WS_OR_EOL(preceding)) {
        break;
      }

    } else if ((state.position === state.lineStart && testDocumentSeparator(state)) ||
               withinFlowCollection && is_FLOW_INDICATOR(ch)) {
      break;

    } else if (is_EOL(ch)) {
      _line = state.line;
      _lineStart = state.lineStart;
      _lineIndent = state.lineIndent;
      skipSeparationSpace(state, false, -1);

      if (state.lineIndent >= nodeIndent) {
        hasPendingContent = true;
        ch = state.input.charCodeAt(state.position);
        continue;
      } else {
        state.position = captureEnd;
        state.line = _line;
        state.lineStart = _lineStart;
        state.lineIndent = _lineIndent;
        break;
      }
    }

    if (hasPendingContent) {
      captureSegment(state, captureStart, captureEnd, false);
      writeFoldedLines(state, state.line - _line);
      captureStart = captureEnd = state.position;
      hasPendingContent = false;
    }

    if (!is_WHITE_SPACE(ch)) {
      captureEnd = state.position + 1;
    }

    ch = state.input.charCodeAt(++state.position);
  }

  captureSegment(state, captureStart, captureEnd, false);

  if (state.result) {
    return true;
  }

  state.kind = _kind;
  state.result = _result;
  return false;
}

function readSingleQuotedScalar(state, nodeIndent) {
  var ch,
      captureStart, captureEnd;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x27/* ' */) {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x27/* ' */) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);

      if (ch === 0x27/* ' */) {
        captureStart = state.position;
        state.position++;
        captureEnd = state.position;
      } else {
        return true;
      }

    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;

    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a single quoted scalar');

    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a single quoted scalar');
}

function readDoubleQuotedScalar(state, nodeIndent) {
  var captureStart,
      captureEnd,
      hexLength,
      hexResult,
      tmp,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x22/* " */) {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x22/* " */) {
      captureSegment(state, captureStart, state.position, true);
      state.position++;
      return true;

    } else if (ch === 0x5C/* \ */) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);

      if (is_EOL(ch)) {
        skipSeparationSpace(state, false, nodeIndent);

        // TODO: rework to inline fn with no type cast?
      } else if (ch < 256 && simpleEscapeCheck[ch]) {
        state.result += simpleEscapeMap[ch];
        state.position++;

      } else if ((tmp = escapedHexLen(ch)) > 0) {
        hexLength = tmp;
        hexResult = 0;

        for (; hexLength > 0; hexLength--) {
          ch = state.input.charCodeAt(++state.position);

          if ((tmp = fromHexCode(ch)) >= 0) {
            hexResult = (hexResult << 4) + tmp;

          } else {
            throwError(state, 'expected hexadecimal character');
          }
        }

        state.result += charFromCodepoint(hexResult);

        state.position++;

      } else {
        throwError(state, 'unknown escape sequence');
      }

      captureStart = captureEnd = state.position;

    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;

    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a double quoted scalar');

    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a double quoted scalar');
}

function readFlowCollection(state, nodeIndent) {
  var readNext = true,
      _line,
      _lineStart,
      _pos,
      _tag     = state.tag,
      _result,
      _anchor  = state.anchor,
      following,
      terminator,
      isPair,
      isExplicitPair,
      isMapping,
      overridableKeys = Object.create(null),
      keyNode,
      keyTag,
      valueNode,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x5B/* [ */) {
    terminator = 0x5D;/* ] */
    isMapping = false;
    _result = [];
  } else if (ch === 0x7B/* { */) {
    terminator = 0x7D;/* } */
    isMapping = true;
    _result = {};
  } else {
    return false;
  }

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(++state.position);

  while (ch !== 0) {
    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if (ch === terminator) {
      state.position++;
      state.tag = _tag;
      state.anchor = _anchor;
      state.kind = isMapping ? 'mapping' : 'sequence';
      state.result = _result;
      return true;
    } else if (!readNext) {
      throwError(state, 'missed comma between flow collection entries');
    } else if (ch === 0x2C/* , */) {
      // "flow collection entries can never be completely empty", as per YAML 1.2, section 7.4
      throwError(state, "expected the node content, but found ','");
    }

    keyTag = keyNode = valueNode = null;
    isPair = isExplicitPair = false;

    if (ch === 0x3F/* ? */) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following)) {
        isPair = isExplicitPair = true;
        state.position++;
        skipSeparationSpace(state, true, nodeIndent);
      }
    }

    _line = state.line; // Save the current line.
    _lineStart = state.lineStart;
    _pos = state.position;
    composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
    keyTag = state.tag;
    keyNode = state.result;
    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if ((isExplicitPair || state.line === _line) && ch === 0x3A/* : */) {
      isPair = true;
      ch = state.input.charCodeAt(++state.position);
      skipSeparationSpace(state, true, nodeIndent);
      composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
      valueNode = state.result;
    }

    if (isMapping) {
      storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos);
    } else if (isPair) {
      _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos));
    } else {
      _result.push(keyNode);
    }

    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if (ch === 0x2C/* , */) {
      readNext = true;
      ch = state.input.charCodeAt(++state.position);
    } else {
      readNext = false;
    }
  }

  throwError(state, 'unexpected end of the stream within a flow collection');
}

function readBlockScalar(state, nodeIndent) {
  var captureStart,
      folding,
      chomping       = CHOMPING_CLIP,
      didReadContent = false,
      detectedIndent = false,
      textIndent     = nodeIndent,
      emptyLines     = 0,
      atMoreIndented = false,
      tmp,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x7C/* | */) {
    folding = false;
  } else if (ch === 0x3E/* > */) {
    folding = true;
  } else {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';

  while (ch !== 0) {
    ch = state.input.charCodeAt(++state.position);

    if (ch === 0x2B/* + */ || ch === 0x2D/* - */) {
      if (CHOMPING_CLIP === chomping) {
        chomping = (ch === 0x2B/* + */) ? CHOMPING_KEEP : CHOMPING_STRIP;
      } else {
        throwError(state, 'repeat of a chomping mode identifier');
      }

    } else if ((tmp = fromDecimalCode(ch)) >= 0) {
      if (tmp === 0) {
        throwError(state, 'bad explicit indentation width of a block scalar; it cannot be less than one');
      } else if (!detectedIndent) {
        textIndent = nodeIndent + tmp - 1;
        detectedIndent = true;
      } else {
        throwError(state, 'repeat of an indentation width identifier');
      }

    } else {
      break;
    }
  }

  if (is_WHITE_SPACE(ch)) {
    do { ch = state.input.charCodeAt(++state.position); }
    while (is_WHITE_SPACE(ch));

    if (ch === 0x23/* # */) {
      do { ch = state.input.charCodeAt(++state.position); }
      while (!is_EOL(ch) && (ch !== 0));
    }
  }

  while (ch !== 0) {
    readLineBreak(state);
    state.lineIndent = 0;

    ch = state.input.charCodeAt(state.position);

    while ((!detectedIndent || state.lineIndent < textIndent) &&
           (ch === 0x20/* Space */)) {
      state.lineIndent++;
      ch = state.input.charCodeAt(++state.position);
    }

    if (!detectedIndent && state.lineIndent > textIndent) {
      textIndent = state.lineIndent;
    }

    if (is_EOL(ch)) {
      emptyLines++;
      continue;
    }

    // End of the scalar.
    if (state.lineIndent < textIndent) {

      // Perform the chomping.
      if (chomping === CHOMPING_KEEP) {
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
      } else if (chomping === CHOMPING_CLIP) {
        if (didReadContent) { // i.e. only if the scalar is not empty.
          state.result += '\n';
        }
      }

      // Break this `while` cycle and go to the funciton's epilogue.
      break;
    }

    // Folded style: use fancy rules to handle line breaks.
    if (folding) {

      // Lines starting with white space characters (more-indented lines) are not folded.
      if (is_WHITE_SPACE(ch)) {
        atMoreIndented = true;
        // except for the first content line (cf. Example 8.1)
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);

      // End of more-indented block.
      } else if (atMoreIndented) {
        atMoreIndented = false;
        state.result += common.repeat('\n', emptyLines + 1);

      // Just one line break - perceive as the same line.
      } else if (emptyLines === 0) {
        if (didReadContent) { // i.e. only if we have already read some scalar content.
          state.result += ' ';
        }

      // Several line breaks - perceive as different lines.
      } else {
        state.result += common.repeat('\n', emptyLines);
      }

    // Literal style: just add exact number of line breaks between content lines.
    } else {
      // Keep all line breaks except the header line break.
      state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
    }

    didReadContent = true;
    detectedIndent = true;
    emptyLines = 0;
    captureStart = state.position;

    while (!is_EOL(ch) && (ch !== 0)) {
      ch = state.input.charCodeAt(++state.position);
    }

    captureSegment(state, captureStart, state.position, false);
  }

  return true;
}

function readBlockSequence(state, nodeIndent) {
  var _line,
      _tag      = state.tag,
      _anchor   = state.anchor,
      _result   = [],
      following,
      detected  = false,
      ch;

  // there is a leading tab before this token, so it can't be a block sequence/mapping;
  // it can still be flow sequence/mapping or a scalar
  if (state.firstTabInLine !== -1) return false;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    if (state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, 'tab characters must not be used in indentation');
    }

    if (ch !== 0x2D/* - */) {
      break;
    }

    following = state.input.charCodeAt(state.position + 1);

    if (!is_WS_OR_EOL(following)) {
      break;
    }

    detected = true;
    state.position++;

    if (skipSeparationSpace(state, true, -1)) {
      if (state.lineIndent <= nodeIndent) {
        _result.push(null);
        ch = state.input.charCodeAt(state.position);
        continue;
      }
    }

    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
    _result.push(state.result);
    skipSeparationSpace(state, true, -1);

    ch = state.input.charCodeAt(state.position);

    if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
      throwError(state, 'bad indentation of a sequence entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'sequence';
    state.result = _result;
    return true;
  }
  return false;
}

function readBlockMapping(state, nodeIndent, flowIndent) {
  var following,
      allowCompact,
      _line,
      _keyLine,
      _keyLineStart,
      _keyPos,
      _tag          = state.tag,
      _anchor       = state.anchor,
      _result       = {},
      overridableKeys = Object.create(null),
      keyTag        = null,
      keyNode       = null,
      valueNode     = null,
      atExplicitKey = false,
      detected      = false,
      ch;

  // there is a leading tab before this token, so it can't be a block sequence/mapping;
  // it can still be flow sequence/mapping or a scalar
  if (state.firstTabInLine !== -1) return false;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    if (!atExplicitKey && state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, 'tab characters must not be used in indentation');
    }

    following = state.input.charCodeAt(state.position + 1);
    _line = state.line; // Save the current line.

    //
    // Explicit notation case. There are two separate blocks:
    // first for the key (denoted by "?") and second for the value (denoted by ":")
    //
    if ((ch === 0x3F/* ? */ || ch === 0x3A/* : */) && is_WS_OR_EOL(following)) {

      if (ch === 0x3F/* ? */) {
        if (atExplicitKey) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
          keyTag = keyNode = valueNode = null;
        }

        detected = true;
        atExplicitKey = true;
        allowCompact = true;

      } else if (atExplicitKey) {
        // i.e. 0x3A/* : */ === character after the explicit key.
        atExplicitKey = false;
        allowCompact = true;

      } else {
        throwError(state, 'incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line');
      }

      state.position += 1;
      ch = following;

    //
    // Implicit notation case. Flow-style node as the key first, then ":", and the value.
    //
    } else {
      _keyLine = state.line;
      _keyLineStart = state.lineStart;
      _keyPos = state.position;

      if (!composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
        // Neither implicit nor explicit notation.
        // Reading is done. Go to the epilogue.
        break;
      }

      if (state.line === _line) {
        ch = state.input.charCodeAt(state.position);

        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }

        if (ch === 0x3A/* : */) {
          ch = state.input.charCodeAt(++state.position);

          if (!is_WS_OR_EOL(ch)) {
            throwError(state, 'a whitespace character is expected after the key-value separator within a block mapping');
          }

          if (atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
            keyTag = keyNode = valueNode = null;
          }

          detected = true;
          atExplicitKey = false;
          allowCompact = false;
          keyTag = state.tag;
          keyNode = state.result;

        } else if (detected) {
          throwError(state, 'can not read an implicit mapping pair; a colon is missed');

        } else {
          state.tag = _tag;
          state.anchor = _anchor;
          return true; // Keep the result of `composeNode`.
        }

      } else if (detected) {
        throwError(state, 'can not read a block mapping entry; a multiline key may not be an implicit key');

      } else {
        state.tag = _tag;
        state.anchor = _anchor;
        return true; // Keep the result of `composeNode`.
      }
    }

    //
    // Common reading code for both explicit and implicit notations.
    //
    if (state.line === _line || state.lineIndent > nodeIndent) {
      if (atExplicitKey) {
        _keyLine = state.line;
        _keyLineStart = state.lineStart;
        _keyPos = state.position;
      }

      if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
        if (atExplicitKey) {
          keyNode = state.result;
        } else {
          valueNode = state.result;
        }
      }

      if (!atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _keyLine, _keyLineStart, _keyPos);
        keyTag = keyNode = valueNode = null;
      }

      skipSeparationSpace(state, true, -1);
      ch = state.input.charCodeAt(state.position);
    }

    if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
      throwError(state, 'bad indentation of a mapping entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  //
  // Epilogue.
  //

  // Special case: last mapping's node contains only the key in explicit notation.
  if (atExplicitKey) {
    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
  }

  // Expose the resulting mapping.
  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'mapping';
    state.result = _result;
  }

  return detected;
}

function readTagProperty(state) {
  var _position,
      isVerbatim = false,
      isNamed    = false,
      tagHandle,
      tagName,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x21/* ! */) return false;

  if (state.tag !== null) {
    throwError(state, 'duplication of a tag property');
  }

  ch = state.input.charCodeAt(++state.position);

  if (ch === 0x3C/* < */) {
    isVerbatim = true;
    ch = state.input.charCodeAt(++state.position);

  } else if (ch === 0x21/* ! */) {
    isNamed = true;
    tagHandle = '!!';
    ch = state.input.charCodeAt(++state.position);

  } else {
    tagHandle = '!';
  }

  _position = state.position;

  if (isVerbatim) {
    do { ch = state.input.charCodeAt(++state.position); }
    while (ch !== 0 && ch !== 0x3E/* > */);

    if (state.position < state.length) {
      tagName = state.input.slice(_position, state.position);
      ch = state.input.charCodeAt(++state.position);
    } else {
      throwError(state, 'unexpected end of the stream within a verbatim tag');
    }
  } else {
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {

      if (ch === 0x21/* ! */) {
        if (!isNamed) {
          tagHandle = state.input.slice(_position - 1, state.position + 1);

          if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
            throwError(state, 'named tag handle cannot contain such characters');
          }

          isNamed = true;
          _position = state.position + 1;
        } else {
          throwError(state, 'tag suffix cannot contain exclamation marks');
        }
      }

      ch = state.input.charCodeAt(++state.position);
    }

    tagName = state.input.slice(_position, state.position);

    if (PATTERN_FLOW_INDICATORS.test(tagName)) {
      throwError(state, 'tag suffix cannot contain flow indicator characters');
    }
  }

  if (tagName && !PATTERN_TAG_URI.test(tagName)) {
    throwError(state, 'tag name cannot contain such characters: ' + tagName);
  }

  try {
    tagName = decodeURIComponent(tagName);
  } catch (err) {
    throwError(state, 'tag name is malformed: ' + tagName);
  }

  if (isVerbatim) {
    state.tag = tagName;

  } else if (_hasOwnProperty$1.call(state.tagMap, tagHandle)) {
    state.tag = state.tagMap[tagHandle] + tagName;

  } else if (tagHandle === '!') {
    state.tag = '!' + tagName;

  } else if (tagHandle === '!!') {
    state.tag = 'tag:yaml.org,2002:' + tagName;

  } else {
    throwError(state, 'undeclared tag handle "' + tagHandle + '"');
  }

  return true;
}

function readAnchorProperty(state) {
  var _position,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x26/* & */) return false;

  if (state.anchor !== null) {
    throwError(state, 'duplication of an anchor property');
  }

  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an anchor node must contain at least one character');
  }

  state.anchor = state.input.slice(_position, state.position);
  return true;
}

function readAlias(state) {
  var _position, alias,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x2A/* * */) return false;

  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an alias node must contain at least one character');
  }

  alias = state.input.slice(_position, state.position);

  if (!_hasOwnProperty$1.call(state.anchorMap, alias)) {
    throwError(state, 'unidentified alias "' + alias + '"');
  }

  state.result = state.anchorMap[alias];
  skipSeparationSpace(state, true, -1);
  return true;
}

function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
  var allowBlockStyles,
      allowBlockScalars,
      allowBlockCollections,
      indentStatus = 1, // 1: this>parent, 0: this=parent, -1: this<parent
      atNewLine  = false,
      hasContent = false,
      typeIndex,
      typeQuantity,
      typeList,
      type,
      flowIndent,
      blockIndent;

  if (state.listener !== null) {
    state.listener('open', state);
  }

  state.tag    = null;
  state.anchor = null;
  state.kind   = null;
  state.result = null;

  allowBlockStyles = allowBlockScalars = allowBlockCollections =
    CONTEXT_BLOCK_OUT === nodeContext ||
    CONTEXT_BLOCK_IN  === nodeContext;

  if (allowToSeek) {
    if (skipSeparationSpace(state, true, -1)) {
      atNewLine = true;

      if (state.lineIndent > parentIndent) {
        indentStatus = 1;
      } else if (state.lineIndent === parentIndent) {
        indentStatus = 0;
      } else if (state.lineIndent < parentIndent) {
        indentStatus = -1;
      }
    }
  }

  if (indentStatus === 1) {
    while (readTagProperty(state) || readAnchorProperty(state)) {
      if (skipSeparationSpace(state, true, -1)) {
        atNewLine = true;
        allowBlockCollections = allowBlockStyles;

        if (state.lineIndent > parentIndent) {
          indentStatus = 1;
        } else if (state.lineIndent === parentIndent) {
          indentStatus = 0;
        } else if (state.lineIndent < parentIndent) {
          indentStatus = -1;
        }
      } else {
        allowBlockCollections = false;
      }
    }
  }

  if (allowBlockCollections) {
    allowBlockCollections = atNewLine || allowCompact;
  }

  if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
    if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
      flowIndent = parentIndent;
    } else {
      flowIndent = parentIndent + 1;
    }

    blockIndent = state.position - state.lineStart;

    if (indentStatus === 1) {
      if (allowBlockCollections &&
          (readBlockSequence(state, blockIndent) ||
           readBlockMapping(state, blockIndent, flowIndent)) ||
          readFlowCollection(state, flowIndent)) {
        hasContent = true;
      } else {
        if ((allowBlockScalars && readBlockScalar(state, flowIndent)) ||
            readSingleQuotedScalar(state, flowIndent) ||
            readDoubleQuotedScalar(state, flowIndent)) {
          hasContent = true;

        } else if (readAlias(state)) {
          hasContent = true;

          if (state.tag !== null || state.anchor !== null) {
            throwError(state, 'alias node should not have any properties');
          }

        } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
          hasContent = true;

          if (state.tag === null) {
            state.tag = '?';
          }
        }

        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else if (indentStatus === 0) {
      // Special case: block sequences are allowed to have same indentation level as the parent.
      // http://www.yaml.org/spec/1.2/spec.html#id2799784
      hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
    }
  }

  if (state.tag === null) {
    if (state.anchor !== null) {
      state.anchorMap[state.anchor] = state.result;
    }

  } else if (state.tag === '?') {
    // Implicit resolving is not allowed for non-scalar types, and '?'
    // non-specific tag is only automatically assigned to plain scalars.
    //
    // We only need to check kind conformity in case user explicitly assigns '?'
    // tag, for example like this: "!<?> [0]"
    //
    if (state.result !== null && state.kind !== 'scalar') {
      throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
    }

    for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
      type = state.implicitTypes[typeIndex];

      if (type.resolve(state.result)) { // `state.result` updated in resolver if matched
        state.result = type.construct(state.result);
        state.tag = type.tag;
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
        break;
      }
    }
  } else if (state.tag !== '!') {
    if (_hasOwnProperty$1.call(state.typeMap[state.kind || 'fallback'], state.tag)) {
      type = state.typeMap[state.kind || 'fallback'][state.tag];
    } else {
      // looking for multi type
      type = null;
      typeList = state.typeMap.multi[state.kind || 'fallback'];

      for (typeIndex = 0, typeQuantity = typeList.length; typeIndex < typeQuantity; typeIndex += 1) {
        if (state.tag.slice(0, typeList[typeIndex].tag.length) === typeList[typeIndex].tag) {
          type = typeList[typeIndex];
          break;
        }
      }
    }

    if (!type) {
      throwError(state, 'unknown tag !<' + state.tag + '>');
    }

    if (state.result !== null && type.kind !== state.kind) {
      throwError(state, 'unacceptable node kind for !<' + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"');
    }

    if (!type.resolve(state.result, state.tag)) { // `state.result` updated in resolver if matched
      throwError(state, 'cannot resolve a node with !<' + state.tag + '> explicit tag');
    } else {
      state.result = type.construct(state.result, state.tag);
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = state.result;
      }
    }
  }

  if (state.listener !== null) {
    state.listener('close', state);
  }
  return state.tag !== null ||  state.anchor !== null || hasContent;
}

function readDocument(state) {
  var documentStart = state.position,
      _position,
      directiveName,
      directiveArgs,
      hasDirectives = false,
      ch;

  state.version = null;
  state.checkLineBreaks = state.legacy;
  state.tagMap = Object.create(null);
  state.anchorMap = Object.create(null);

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    skipSeparationSpace(state, true, -1);

    ch = state.input.charCodeAt(state.position);

    if (state.lineIndent > 0 || ch !== 0x25/* % */) {
      break;
    }

    hasDirectives = true;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;

    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }

    directiveName = state.input.slice(_position, state.position);
    directiveArgs = [];

    if (directiveName.length < 1) {
      throwError(state, 'directive name must not be less than one character in length');
    }

    while (ch !== 0) {
      while (is_WHITE_SPACE(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      if (ch === 0x23/* # */) {
        do { ch = state.input.charCodeAt(++state.position); }
        while (ch !== 0 && !is_EOL(ch));
        break;
      }

      if (is_EOL(ch)) break;

      _position = state.position;

      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      directiveArgs.push(state.input.slice(_position, state.position));
    }

    if (ch !== 0) readLineBreak(state);

    if (_hasOwnProperty$1.call(directiveHandlers, directiveName)) {
      directiveHandlers[directiveName](state, directiveName, directiveArgs);
    } else {
      throwWarning(state, 'unknown document directive "' + directiveName + '"');
    }
  }

  skipSeparationSpace(state, true, -1);

  if (state.lineIndent === 0 &&
      state.input.charCodeAt(state.position)     === 0x2D/* - */ &&
      state.input.charCodeAt(state.position + 1) === 0x2D/* - */ &&
      state.input.charCodeAt(state.position + 2) === 0x2D/* - */) {
    state.position += 3;
    skipSeparationSpace(state, true, -1);

  } else if (hasDirectives) {
    throwError(state, 'directives end mark is expected');
  }

  composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
  skipSeparationSpace(state, true, -1);

  if (state.checkLineBreaks &&
      PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
    throwWarning(state, 'non-ASCII line breaks are interpreted as content');
  }

  state.documents.push(state.result);

  if (state.position === state.lineStart && testDocumentSeparator(state)) {

    if (state.input.charCodeAt(state.position) === 0x2E/* . */) {
      state.position += 3;
      skipSeparationSpace(state, true, -1);
    }
    return;
  }

  if (state.position < (state.length - 1)) {
    throwError(state, 'end of the stream or a document separator is expected');
  } else {
    return;
  }
}


function loadDocuments(input, options) {
  input = String(input);
  options = options || {};

  if (input.length !== 0) {

    // Add tailing `\n` if not exists
    if (input.charCodeAt(input.length - 1) !== 0x0A/* LF */ &&
        input.charCodeAt(input.length - 1) !== 0x0D/* CR */) {
      input += '\n';
    }

    // Strip BOM
    if (input.charCodeAt(0) === 0xFEFF) {
      input = input.slice(1);
    }
  }

  var state = new State$1(input, options);

  var nullpos = input.indexOf('\0');

  if (nullpos !== -1) {
    state.position = nullpos;
    throwError(state, 'null byte is not allowed in input');
  }

  // Use 0 as string terminator. That significantly simplifies bounds check.
  state.input += '\0';

  while (state.input.charCodeAt(state.position) === 0x20/* Space */) {
    state.lineIndent += 1;
    state.position += 1;
  }

  while (state.position < (state.length - 1)) {
    readDocument(state);
  }

  return state.documents;
}


function loadAll$1(input, iterator, options) {
  if (iterator !== null && typeof iterator === 'object' && typeof options === 'undefined') {
    options = iterator;
    iterator = null;
  }

  var documents = loadDocuments(input, options);

  if (typeof iterator !== 'function') {
    return documents;
  }

  for (var index = 0, length = documents.length; index < length; index += 1) {
    iterator(documents[index]);
  }
}


function load$1(input, options) {
  var documents = loadDocuments(input, options);

  if (documents.length === 0) {
    /*eslint-disable no-undefined*/
    return undefined;
  } else if (documents.length === 1) {
    return documents[0];
  }
  throw new exception('expected a single document in the stream, but found more');
}


var loadAll_1 = loadAll$1;
var load_1    = load$1;

var loader = {
	loadAll: loadAll_1,
	load: load_1
};

/*eslint-disable no-use-before-define*/





var _toString       = Object.prototype.toString;
var _hasOwnProperty = Object.prototype.hasOwnProperty;

var CHAR_BOM                  = 0xFEFF;
var CHAR_TAB                  = 0x09; /* Tab */
var CHAR_LINE_FEED            = 0x0A; /* LF */
var CHAR_CARRIAGE_RETURN      = 0x0D; /* CR */
var CHAR_SPACE                = 0x20; /* Space */
var CHAR_EXCLAMATION          = 0x21; /* ! */
var CHAR_DOUBLE_QUOTE         = 0x22; /* " */
var CHAR_SHARP                = 0x23; /* # */
var CHAR_PERCENT              = 0x25; /* % */
var CHAR_AMPERSAND            = 0x26; /* & */
var CHAR_SINGLE_QUOTE         = 0x27; /* ' */
var CHAR_ASTERISK             = 0x2A; /* * */
var CHAR_COMMA                = 0x2C; /* , */
var CHAR_MINUS                = 0x2D; /* - */
var CHAR_COLON                = 0x3A; /* : */
var CHAR_EQUALS               = 0x3D; /* = */
var CHAR_GREATER_THAN         = 0x3E; /* > */
var CHAR_QUESTION             = 0x3F; /* ? */
var CHAR_COMMERCIAL_AT        = 0x40; /* @ */
var CHAR_LEFT_SQUARE_BRACKET  = 0x5B; /* [ */
var CHAR_RIGHT_SQUARE_BRACKET = 0x5D; /* ] */
var CHAR_GRAVE_ACCENT         = 0x60; /* ` */
var CHAR_LEFT_CURLY_BRACKET   = 0x7B; /* { */
var CHAR_VERTICAL_LINE        = 0x7C; /* | */
var CHAR_RIGHT_CURLY_BRACKET  = 0x7D; /* } */

var ESCAPE_SEQUENCES = {};

ESCAPE_SEQUENCES[0x00]   = '\\0';
ESCAPE_SEQUENCES[0x07]   = '\\a';
ESCAPE_SEQUENCES[0x08]   = '\\b';
ESCAPE_SEQUENCES[0x09]   = '\\t';
ESCAPE_SEQUENCES[0x0A]   = '\\n';
ESCAPE_SEQUENCES[0x0B]   = '\\v';
ESCAPE_SEQUENCES[0x0C]   = '\\f';
ESCAPE_SEQUENCES[0x0D]   = '\\r';
ESCAPE_SEQUENCES[0x1B]   = '\\e';
ESCAPE_SEQUENCES[0x22]   = '\\"';
ESCAPE_SEQUENCES[0x5C]   = '\\\\';
ESCAPE_SEQUENCES[0x85]   = '\\N';
ESCAPE_SEQUENCES[0xA0]   = '\\_';
ESCAPE_SEQUENCES[0x2028] = '\\L';
ESCAPE_SEQUENCES[0x2029] = '\\P';

var DEPRECATED_BOOLEANS_SYNTAX = [
  'y', 'Y', 'yes', 'Yes', 'YES', 'on', 'On', 'ON',
  'n', 'N', 'no', 'No', 'NO', 'off', 'Off', 'OFF'
];

var DEPRECATED_BASE60_SYNTAX = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;

function compileStyleMap(schema, map) {
  var result, keys, index, length, tag, style, type;

  if (map === null) return {};

  result = {};
  keys = Object.keys(map);

  for (index = 0, length = keys.length; index < length; index += 1) {
    tag = keys[index];
    style = String(map[tag]);

    if (tag.slice(0, 2) === '!!') {
      tag = 'tag:yaml.org,2002:' + tag.slice(2);
    }
    type = schema.compiledTypeMap['fallback'][tag];

    if (type && _hasOwnProperty.call(type.styleAliases, style)) {
      style = type.styleAliases[style];
    }

    result[tag] = style;
  }

  return result;
}

function encodeHex(character) {
  var string, handle, length;

  string = character.toString(16).toUpperCase();

  if (character <= 0xFF) {
    handle = 'x';
    length = 2;
  } else if (character <= 0xFFFF) {
    handle = 'u';
    length = 4;
  } else if (character <= 0xFFFFFFFF) {
    handle = 'U';
    length = 8;
  } else {
    throw new exception('code point within a string may not be greater than 0xFFFFFFFF');
  }

  return '\\' + handle + common.repeat('0', length - string.length) + string;
}


var QUOTING_TYPE_SINGLE = 1,
    QUOTING_TYPE_DOUBLE = 2;

function State(options) {
  this.schema        = options['schema'] || _default;
  this.indent        = Math.max(1, (options['indent'] || 2));
  this.noArrayIndent = options['noArrayIndent'] || false;
  this.skipInvalid   = options['skipInvalid'] || false;
  this.flowLevel     = (common.isNothing(options['flowLevel']) ? -1 : options['flowLevel']);
  this.styleMap      = compileStyleMap(this.schema, options['styles'] || null);
  this.sortKeys      = options['sortKeys'] || false;
  this.lineWidth     = options['lineWidth'] || 80;
  this.noRefs        = options['noRefs'] || false;
  this.noCompatMode  = options['noCompatMode'] || false;
  this.condenseFlow  = options['condenseFlow'] || false;
  this.quotingType   = options['quotingType'] === '"' ? QUOTING_TYPE_DOUBLE : QUOTING_TYPE_SINGLE;
  this.forceQuotes   = options['forceQuotes'] || false;
  this.replacer      = typeof options['replacer'] === 'function' ? options['replacer'] : null;

  this.implicitTypes = this.schema.compiledImplicit;
  this.explicitTypes = this.schema.compiledExplicit;

  this.tag = null;
  this.result = '';

  this.duplicates = [];
  this.usedDuplicates = null;
}

// Indents every line in a string. Empty lines (\n only) are not indented.
function indentString(string, spaces) {
  var ind = common.repeat(' ', spaces),
      position = 0,
      next = -1,
      result = '',
      line,
      length = string.length;

  while (position < length) {
    next = string.indexOf('\n', position);
    if (next === -1) {
      line = string.slice(position);
      position = length;
    } else {
      line = string.slice(position, next + 1);
      position = next + 1;
    }

    if (line.length && line !== '\n') result += ind;

    result += line;
  }

  return result;
}

function generateNextLine(state, level) {
  return '\n' + common.repeat(' ', state.indent * level);
}

function testImplicitResolving(state, str) {
  var index, length, type;

  for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
    type = state.implicitTypes[index];

    if (type.resolve(str)) {
      return true;
    }
  }

  return false;
}

// [33] s-white ::= s-space | s-tab
function isWhitespace(c) {
  return c === CHAR_SPACE || c === CHAR_TAB;
}

// Returns true if the character can be printed without escaping.
// From YAML 1.2: "any allowed characters known to be non-printable
// should also be escaped. [However,] This isn’t mandatory"
// Derived from nb-char - \t - #x85 - #xA0 - #x2028 - #x2029.
function isPrintable(c) {
  return  (0x00020 <= c && c <= 0x00007E)
      || ((0x000A1 <= c && c <= 0x00D7FF) && c !== 0x2028 && c !== 0x2029)
      || ((0x0E000 <= c && c <= 0x00FFFD) && c !== CHAR_BOM)
      ||  (0x10000 <= c && c <= 0x10FFFF);
}

// [34] ns-char ::= nb-char - s-white
// [27] nb-char ::= c-printable - b-char - c-byte-order-mark
// [26] b-char  ::= b-line-feed | b-carriage-return
// Including s-white (for some reason, examples doesn't match specs in this aspect)
// ns-char ::= c-printable - b-line-feed - b-carriage-return - c-byte-order-mark
function isNsCharOrWhitespace(c) {
  return isPrintable(c)
    && c !== CHAR_BOM
    // - b-char
    && c !== CHAR_CARRIAGE_RETURN
    && c !== CHAR_LINE_FEED;
}

// [127]  ns-plain-safe(c) ::= c = flow-out  ⇒ ns-plain-safe-out
//                             c = flow-in   ⇒ ns-plain-safe-in
//                             c = block-key ⇒ ns-plain-safe-out
//                             c = flow-key  ⇒ ns-plain-safe-in
// [128] ns-plain-safe-out ::= ns-char
// [129]  ns-plain-safe-in ::= ns-char - c-flow-indicator
// [130]  ns-plain-char(c) ::=  ( ns-plain-safe(c) - “:” - “#” )
//                            | ( /* An ns-char preceding */ “#” )
//                            | ( “:” /* Followed by an ns-plain-safe(c) */ )
function isPlainSafe(c, prev, inblock) {
  var cIsNsCharOrWhitespace = isNsCharOrWhitespace(c);
  var cIsNsChar = cIsNsCharOrWhitespace && !isWhitespace(c);
  return (
    // ns-plain-safe
    inblock ? // c = flow-in
      cIsNsCharOrWhitespace
      : cIsNsCharOrWhitespace
        // - c-flow-indicator
        && c !== CHAR_COMMA
        && c !== CHAR_LEFT_SQUARE_BRACKET
        && c !== CHAR_RIGHT_SQUARE_BRACKET
        && c !== CHAR_LEFT_CURLY_BRACKET
        && c !== CHAR_RIGHT_CURLY_BRACKET
  )
    // ns-plain-char
    && c !== CHAR_SHARP // false on '#'
    && !(prev === CHAR_COLON && !cIsNsChar) // false on ': '
    || (isNsCharOrWhitespace(prev) && !isWhitespace(prev) && c === CHAR_SHARP) // change to true on '[^ ]#'
    || (prev === CHAR_COLON && cIsNsChar); // change to true on ':[^ ]'
}

// Simplified test for values allowed as the first character in plain style.
function isPlainSafeFirst(c) {
  // Uses a subset of ns-char - c-indicator
  // where ns-char = nb-char - s-white.
  // No support of ( ( “?” | “:” | “-” ) /* Followed by an ns-plain-safe(c)) */ ) part
  return isPrintable(c) && c !== CHAR_BOM
    && !isWhitespace(c) // - s-white
    // - (c-indicator ::=
    // “-” | “?” | “:” | “,” | “[” | “]” | “{” | “}”
    && c !== CHAR_MINUS
    && c !== CHAR_QUESTION
    && c !== CHAR_COLON
    && c !== CHAR_COMMA
    && c !== CHAR_LEFT_SQUARE_BRACKET
    && c !== CHAR_RIGHT_SQUARE_BRACKET
    && c !== CHAR_LEFT_CURLY_BRACKET
    && c !== CHAR_RIGHT_CURLY_BRACKET
    // | “#” | “&” | “*” | “!” | “|” | “=” | “>” | “'” | “"”
    && c !== CHAR_SHARP
    && c !== CHAR_AMPERSAND
    && c !== CHAR_ASTERISK
    && c !== CHAR_EXCLAMATION
    && c !== CHAR_VERTICAL_LINE
    && c !== CHAR_EQUALS
    && c !== CHAR_GREATER_THAN
    && c !== CHAR_SINGLE_QUOTE
    && c !== CHAR_DOUBLE_QUOTE
    // | “%” | “@” | “`”)
    && c !== CHAR_PERCENT
    && c !== CHAR_COMMERCIAL_AT
    && c !== CHAR_GRAVE_ACCENT;
}

// Simplified test for values allowed as the last character in plain style.
function isPlainSafeLast(c) {
  // just not whitespace or colon, it will be checked to be plain character later
  return !isWhitespace(c) && c !== CHAR_COLON;
}

// Same as 'string'.codePointAt(pos), but works in older browsers.
function codePointAt(string, pos) {
  var first = string.charCodeAt(pos), second;
  if (first >= 0xD800 && first <= 0xDBFF && pos + 1 < string.length) {
    second = string.charCodeAt(pos + 1);
    if (second >= 0xDC00 && second <= 0xDFFF) {
      // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
    }
  }
  return first;
}

// Determines whether block indentation indicator is required.
function needIndentIndicator(string) {
  var leadingSpaceRe = /^\n* /;
  return leadingSpaceRe.test(string);
}

var STYLE_PLAIN   = 1,
    STYLE_SINGLE  = 2,
    STYLE_LITERAL = 3,
    STYLE_FOLDED  = 4,
    STYLE_DOUBLE  = 5;

// Determines which scalar styles are possible and returns the preferred style.
// lineWidth = -1 => no limit.
// Pre-conditions: str.length > 0.
// Post-conditions:
//    STYLE_PLAIN or STYLE_SINGLE => no \n are in the string.
//    STYLE_LITERAL => no lines are suitable for folding (or lineWidth is -1).
//    STYLE_FOLDED => a line > lineWidth and can be folded (and lineWidth != -1).
function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth,
  testAmbiguousType, quotingType, forceQuotes, inblock) {

  var i;
  var char = 0;
  var prevChar = null;
  var hasLineBreak = false;
  var hasFoldableLine = false; // only checked if shouldTrackWidth
  var shouldTrackWidth = lineWidth !== -1;
  var previousLineBreak = -1; // count the first line correctly
  var plain = isPlainSafeFirst(codePointAt(string, 0))
          && isPlainSafeLast(codePointAt(string, string.length - 1));

  if (singleLineOnly || forceQuotes) {
    // Case: no block styles.
    // Check for disallowed characters to rule out plain and single.
    for (i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
  } else {
    // Case: block styles permitted.
    for (i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (char === CHAR_LINE_FEED) {
        hasLineBreak = true;
        // Check if any line can be folded.
        if (shouldTrackWidth) {
          hasFoldableLine = hasFoldableLine ||
            // Foldable line = too long, and not more-indented.
            (i - previousLineBreak - 1 > lineWidth &&
             string[previousLineBreak + 1] !== ' ');
          previousLineBreak = i;
        }
      } else if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
    // in case the end is missing a \n
    hasFoldableLine = hasFoldableLine || (shouldTrackWidth &&
      (i - previousLineBreak - 1 > lineWidth &&
       string[previousLineBreak + 1] !== ' '));
  }
  // Although every style can represent \n without escaping, prefer block styles
  // for multiline, since they're more readable and they don't add empty lines.
  // Also prefer folding a super-long line.
  if (!hasLineBreak && !hasFoldableLine) {
    // Strings interpretable as another type have to be quoted;
    // e.g. the string 'true' vs. the boolean true.
    if (plain && !forceQuotes && !testAmbiguousType(string)) {
      return STYLE_PLAIN;
    }
    return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
  }
  // Edge case: block indentation indicator can only have one digit.
  if (indentPerLevel > 9 && needIndentIndicator(string)) {
    return STYLE_DOUBLE;
  }
  // At this point we know block styles are valid.
  // Prefer literal style unless we want to fold.
  if (!forceQuotes) {
    return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
  }
  return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
}

// Note: line breaking/folding is implemented for only the folded style.
// NB. We drop the last trailing newline (if any) of a returned block scalar
//  since the dumper adds its own newline. This always works:
//    • No ending newline => unaffected; already using strip "-" chomping.
//    • Ending newline    => removed then restored.
//  Importantly, this keeps the "+" chomp indicator from gaining an extra line.
function writeScalar(state, string, level, iskey, inblock) {
  state.dump = (function () {
    if (string.length === 0) {
      return state.quotingType === QUOTING_TYPE_DOUBLE ? '""' : "''";
    }
    if (!state.noCompatMode) {
      if (DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1 || DEPRECATED_BASE60_SYNTAX.test(string)) {
        return state.quotingType === QUOTING_TYPE_DOUBLE ? ('"' + string + '"') : ("'" + string + "'");
      }
    }

    var indent = state.indent * Math.max(1, level); // no 0-indent scalars
    // As indentation gets deeper, let the width decrease monotonically
    // to the lower bound min(state.lineWidth, 40).
    // Note that this implies
    //  state.lineWidth ≤ 40 + state.indent: width is fixed at the lower bound.
    //  state.lineWidth > 40 + state.indent: width decreases until the lower bound.
    // This behaves better than a constant minimum width which disallows narrower options,
    // or an indent threshold which causes the width to suddenly increase.
    var lineWidth = state.lineWidth === -1
      ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);

    // Without knowing if keys are implicit/explicit, assume implicit for safety.
    var singleLineOnly = iskey
      // No block styles in flow mode.
      || (state.flowLevel > -1 && level >= state.flowLevel);
    function testAmbiguity(string) {
      return testImplicitResolving(state, string);
    }

    switch (chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth,
      testAmbiguity, state.quotingType, state.forceQuotes && !iskey, inblock)) {

      case STYLE_PLAIN:
        return string;
      case STYLE_SINGLE:
        return "'" + string.replace(/'/g, "''") + "'";
      case STYLE_LITERAL:
        return '|' + blockHeader(string, state.indent)
          + dropEndingNewline(indentString(string, indent));
      case STYLE_FOLDED:
        return '>' + blockHeader(string, state.indent)
          + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
      case STYLE_DOUBLE:
        return '"' + escapeString(string) + '"';
      default:
        throw new exception('impossible error: invalid scalar style');
    }
  }());
}

// Pre-conditions: string is valid for a block scalar, 1 <= indentPerLevel <= 9.
function blockHeader(string, indentPerLevel) {
  var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : '';

  // note the special case: the string '\n' counts as a "trailing" empty line.
  var clip =          string[string.length - 1] === '\n';
  var keep = clip && (string[string.length - 2] === '\n' || string === '\n');
  var chomp = keep ? '+' : (clip ? '' : '-');

  return indentIndicator + chomp + '\n';
}

// (See the note for writeScalar.)
function dropEndingNewline(string) {
  return string[string.length - 1] === '\n' ? string.slice(0, -1) : string;
}

// Note: a long line without a suitable break point will exceed the width limit.
// Pre-conditions: every char in str isPrintable, str.length > 0, width > 0.
function foldString(string, width) {
  // In folded style, $k$ consecutive newlines output as $k+1$ newlines—
  // unless they're before or after a more-indented line, or at the very
  // beginning or end, in which case $k$ maps to $k$.
  // Therefore, parse each chunk as newline(s) followed by a content line.
  var lineRe = /(\n+)([^\n]*)/g;

  // first line (possibly an empty line)
  var result = (function () {
    var nextLF = string.indexOf('\n');
    nextLF = nextLF !== -1 ? nextLF : string.length;
    lineRe.lastIndex = nextLF;
    return foldLine(string.slice(0, nextLF), width);
  }());
  // If we haven't reached the first content line yet, don't add an extra \n.
  var prevMoreIndented = string[0] === '\n' || string[0] === ' ';
  var moreIndented;

  // rest of the lines
  var match;
  while ((match = lineRe.exec(string))) {
    var prefix = match[1], line = match[2];
    moreIndented = (line[0] === ' ');
    result += prefix
      + (!prevMoreIndented && !moreIndented && line !== ''
        ? '\n' : '')
      + foldLine(line, width);
    prevMoreIndented = moreIndented;
  }

  return result;
}

// Greedy line breaking.
// Picks the longest line under the limit each time,
// otherwise settles for the shortest line over the limit.
// NB. More-indented lines *cannot* be folded, as that would add an extra \n.
function foldLine(line, width) {
  if (line === '' || line[0] === ' ') return line;

  // Since a more-indented line adds a \n, breaks can't be followed by a space.
  var breakRe = / [^ ]/g; // note: the match index will always be <= length-2.
  var match;
  // start is an inclusive index. end, curr, and next are exclusive.
  var start = 0, end, curr = 0, next = 0;
  var result = '';

  // Invariants: 0 <= start <= length-1.
  //   0 <= curr <= next <= max(0, length-2). curr - start <= width.
  // Inside the loop:
  //   A match implies length >= 2, so curr and next are <= length-2.
  while ((match = breakRe.exec(line))) {
    next = match.index;
    // maintain invariant: curr - start <= width
    if (next - start > width) {
      end = (curr > start) ? curr : next; // derive end <= length-2
      result += '\n' + line.slice(start, end);
      // skip the space that was output as \n
      start = end + 1;                    // derive start <= length-1
    }
    curr = next;
  }

  // By the invariants, start <= length-1, so there is something left over.
  // It is either the whole string or a part starting from non-whitespace.
  result += '\n';
  // Insert a break if the remainder is too long and there is a break available.
  if (line.length - start > width && curr > start) {
    result += line.slice(start, curr) + '\n' + line.slice(curr + 1);
  } else {
    result += line.slice(start);
  }

  return result.slice(1); // drop extra \n joiner
}

// Escapes a double-quoted string.
function escapeString(string) {
  var result = '';
  var char = 0;
  var escapeSeq;

  for (var i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
    char = codePointAt(string, i);
    escapeSeq = ESCAPE_SEQUENCES[char];

    if (!escapeSeq && isPrintable(char)) {
      result += string[i];
      if (char >= 0x10000) result += string[i + 1];
    } else {
      result += escapeSeq || encodeHex(char);
    }
  }

  return result;
}

function writeFlowSequence(state, level, object) {
  var _result = '',
      _tag    = state.tag,
      index,
      length,
      value;

  for (index = 0, length = object.length; index < length; index += 1) {
    value = object[index];

    if (state.replacer) {
      value = state.replacer.call(object, String(index), value);
    }

    // Write only valid elements, put null instead of invalid elements.
    if (writeNode(state, level, value, false, false) ||
        (typeof value === 'undefined' &&
         writeNode(state, level, null, false, false))) {

      if (_result !== '') _result += ',' + (!state.condenseFlow ? ' ' : '');
      _result += state.dump;
    }
  }

  state.tag = _tag;
  state.dump = '[' + _result + ']';
}

function writeBlockSequence(state, level, object, compact) {
  var _result = '',
      _tag    = state.tag,
      index,
      length,
      value;

  for (index = 0, length = object.length; index < length; index += 1) {
    value = object[index];

    if (state.replacer) {
      value = state.replacer.call(object, String(index), value);
    }

    // Write only valid elements, put null instead of invalid elements.
    if (writeNode(state, level + 1, value, true, true, false, true) ||
        (typeof value === 'undefined' &&
         writeNode(state, level + 1, null, true, true, false, true))) {

      if (!compact || _result !== '') {
        _result += generateNextLine(state, level);
      }

      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        _result += '-';
      } else {
        _result += '- ';
      }

      _result += state.dump;
    }
  }

  state.tag = _tag;
  state.dump = _result || '[]'; // Empty sequence if no valid values.
}

function writeFlowMapping(state, level, object) {
  var _result       = '',
      _tag          = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      pairBuffer;

  for (index = 0, length = objectKeyList.length; index < length; index += 1) {

    pairBuffer = '';
    if (_result !== '') pairBuffer += ', ';

    if (state.condenseFlow) pairBuffer += '"';

    objectKey = objectKeyList[index];
    objectValue = object[objectKey];

    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }

    if (!writeNode(state, level, objectKey, false, false)) {
      continue; // Skip this pair because of invalid key;
    }

    if (state.dump.length > 1024) pairBuffer += '? ';

    pairBuffer += state.dump + (state.condenseFlow ? '"' : '') + ':' + (state.condenseFlow ? '' : ' ');

    if (!writeNode(state, level, objectValue, false, false)) {
      continue; // Skip this pair because of invalid value.
    }

    pairBuffer += state.dump;

    // Both key and value are valid.
    _result += pairBuffer;
  }

  state.tag = _tag;
  state.dump = '{' + _result + '}';
}

function writeBlockMapping(state, level, object, compact) {
  var _result       = '',
      _tag          = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      explicitPair,
      pairBuffer;

  // Allow sorting keys so that the output file is deterministic
  if (state.sortKeys === true) {
    // Default sorting
    objectKeyList.sort();
  } else if (typeof state.sortKeys === 'function') {
    // Custom sort function
    objectKeyList.sort(state.sortKeys);
  } else if (state.sortKeys) {
    // Something is wrong
    throw new exception('sortKeys must be a boolean or a function');
  }

  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
    pairBuffer = '';

    if (!compact || _result !== '') {
      pairBuffer += generateNextLine(state, level);
    }

    objectKey = objectKeyList[index];
    objectValue = object[objectKey];

    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }

    if (!writeNode(state, level + 1, objectKey, true, true, true)) {
      continue; // Skip this pair because of invalid key.
    }

    explicitPair = (state.tag !== null && state.tag !== '?') ||
                   (state.dump && state.dump.length > 1024);

    if (explicitPair) {
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        pairBuffer += '?';
      } else {
        pairBuffer += '? ';
      }
    }

    pairBuffer += state.dump;

    if (explicitPair) {
      pairBuffer += generateNextLine(state, level);
    }

    if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
      continue; // Skip this pair because of invalid value.
    }

    if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
      pairBuffer += ':';
    } else {
      pairBuffer += ': ';
    }

    pairBuffer += state.dump;

    // Both key and value are valid.
    _result += pairBuffer;
  }

  state.tag = _tag;
  state.dump = _result || '{}'; // Empty mapping if no valid pairs.
}

function detectType(state, object, explicit) {
  var _result, typeList, index, length, type, style;

  typeList = explicit ? state.explicitTypes : state.implicitTypes;

  for (index = 0, length = typeList.length; index < length; index += 1) {
    type = typeList[index];

    if ((type.instanceOf  || type.predicate) &&
        (!type.instanceOf || ((typeof object === 'object') && (object instanceof type.instanceOf))) &&
        (!type.predicate  || type.predicate(object))) {

      if (explicit) {
        if (type.multi && type.representName) {
          state.tag = type.representName(object);
        } else {
          state.tag = type.tag;
        }
      } else {
        state.tag = '?';
      }

      if (type.represent) {
        style = state.styleMap[type.tag] || type.defaultStyle;

        if (_toString.call(type.represent) === '[object Function]') {
          _result = type.represent(object, style);
        } else if (_hasOwnProperty.call(type.represent, style)) {
          _result = type.represent[style](object, style);
        } else {
          throw new exception('!<' + type.tag + '> tag resolver accepts not "' + style + '" style');
        }

        state.dump = _result;
      }

      return true;
    }
  }

  return false;
}

// Serializes `object` and writes it to global `result`.
// Returns true on success, or false on invalid object.
//
function writeNode(state, level, object, block, compact, iskey, isblockseq) {
  state.tag = null;
  state.dump = object;

  if (!detectType(state, object, false)) {
    detectType(state, object, true);
  }

  var type = _toString.call(state.dump);
  var inblock = block;
  var tagStr;

  if (block) {
    block = (state.flowLevel < 0 || state.flowLevel > level);
  }

  var objectOrArray = type === '[object Object]' || type === '[object Array]',
      duplicateIndex,
      duplicate;

  if (objectOrArray) {
    duplicateIndex = state.duplicates.indexOf(object);
    duplicate = duplicateIndex !== -1;
  }

  if ((state.tag !== null && state.tag !== '?') || duplicate || (state.indent !== 2 && level > 0)) {
    compact = false;
  }

  if (duplicate && state.usedDuplicates[duplicateIndex]) {
    state.dump = '*ref_' + duplicateIndex;
  } else {
    if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
      state.usedDuplicates[duplicateIndex] = true;
    }
    if (type === '[object Object]') {
      if (block && (Object.keys(state.dump).length !== 0)) {
        writeBlockMapping(state, level, state.dump, compact);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowMapping(state, level, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object Array]') {
      if (block && (state.dump.length !== 0)) {
        if (state.noArrayIndent && !isblockseq && level > 0) {
          writeBlockSequence(state, level - 1, state.dump, compact);
        } else {
          writeBlockSequence(state, level, state.dump, compact);
        }
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowSequence(state, level, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object String]') {
      if (state.tag !== '?') {
        writeScalar(state, state.dump, level, iskey, inblock);
      }
    } else if (type === '[object Undefined]') {
      return false;
    } else {
      if (state.skipInvalid) return false;
      throw new exception('unacceptable kind of an object to dump ' + type);
    }

    if (state.tag !== null && state.tag !== '?') {
      // Need to encode all characters except those allowed by the spec:
      //
      // [35] ns-dec-digit    ::=  [#x30-#x39] /* 0-9 */
      // [36] ns-hex-digit    ::=  ns-dec-digit
      //                         | [#x41-#x46] /* A-F */ | [#x61-#x66] /* a-f */
      // [37] ns-ascii-letter ::=  [#x41-#x5A] /* A-Z */ | [#x61-#x7A] /* a-z */
      // [38] ns-word-char    ::=  ns-dec-digit | ns-ascii-letter | “-”
      // [39] ns-uri-char     ::=  “%” ns-hex-digit ns-hex-digit | ns-word-char | “#”
      //                         | “;” | “/” | “?” | “:” | “@” | “&” | “=” | “+” | “$” | “,”
      //                         | “_” | “.” | “!” | “~” | “*” | “'” | “(” | “)” | “[” | “]”
      //
      // Also need to encode '!' because it has special meaning (end of tag prefix).
      //
      tagStr = encodeURI(
        state.tag[0] === '!' ? state.tag.slice(1) : state.tag
      ).replace(/!/g, '%21');

      if (state.tag[0] === '!') {
        tagStr = '!' + tagStr;
      } else if (tagStr.slice(0, 18) === 'tag:yaml.org,2002:') {
        tagStr = '!!' + tagStr.slice(18);
      } else {
        tagStr = '!<' + tagStr + '>';
      }

      state.dump = tagStr + ' ' + state.dump;
    }
  }

  return true;
}

function getDuplicateReferences(object, state) {
  var objects = [],
      duplicatesIndexes = [],
      index,
      length;

  inspectNode(object, objects, duplicatesIndexes);

  for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
    state.duplicates.push(objects[duplicatesIndexes[index]]);
  }
  state.usedDuplicates = new Array(length);
}

function inspectNode(object, objects, duplicatesIndexes) {
  var objectKeyList,
      index,
      length;

  if (object !== null && typeof object === 'object') {
    index = objects.indexOf(object);
    if (index !== -1) {
      if (duplicatesIndexes.indexOf(index) === -1) {
        duplicatesIndexes.push(index);
      }
    } else {
      objects.push(object);

      if (Array.isArray(object)) {
        for (index = 0, length = object.length; index < length; index += 1) {
          inspectNode(object[index], objects, duplicatesIndexes);
        }
      } else {
        objectKeyList = Object.keys(object);

        for (index = 0, length = objectKeyList.length; index < length; index += 1) {
          inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
        }
      }
    }
  }
}

function dump$1(input, options) {
  options = options || {};

  var state = new State(options);

  if (!state.noRefs) getDuplicateReferences(input, state);

  var value = input;

  if (state.replacer) {
    value = state.replacer.call({ '': value }, '', value);
  }

  if (writeNode(state, 0, value, true, true)) return state.dump + '\n';

  return '';
}

var dump_1 = dump$1;

var dumper = {
	dump: dump_1
};

function renamed(from, to) {
  return function () {
    throw new Error('Function yaml.' + from + ' is removed in js-yaml 4. ' +
      'Use yaml.' + to + ' instead, which is now safe by default.');
  };
}


var Type                = js_yaml_type;
var Schema              = schema;
var FAILSAFE_SCHEMA     = failsafe;
var JSON_SCHEMA         = json;
var CORE_SCHEMA         = core;
var DEFAULT_SCHEMA      = _default;
var load                = loader.load;
var loadAll             = loader.loadAll;
var js_yaml_dump                = dumper.dump;
var YAMLException       = exception;

// Re-export all types in case user wants to create custom schema
var js_yaml_types = {
  binary:    binary,
  float:     js_yaml_float,
  map:       map,
  null:      _null,
  pairs:     pairs,
  set:       set,
  timestamp: timestamp,
  bool:      bool,
  int:       js_yaml_int,
  merge:     merge,
  omap:      omap,
  seq:       seq,
  str:       str
};

// Removed functions from JS-YAML 3.0.x
var safeLoad            = renamed('safeLoad', 'load');
var safeLoadAll         = renamed('safeLoadAll', 'loadAll');
var safeDump            = renamed('safeDump', 'dump');

var jsYaml = {
	Type: Type,
	Schema: Schema,
	FAILSAFE_SCHEMA: FAILSAFE_SCHEMA,
	JSON_SCHEMA: JSON_SCHEMA,
	CORE_SCHEMA: CORE_SCHEMA,
	DEFAULT_SCHEMA: DEFAULT_SCHEMA,
	load: load,
	loadAll: loadAll,
	dump: js_yaml_dump,
	YAMLException: YAMLException,
	types: js_yaml_types,
	safeLoad: safeLoad,
	safeLoadAll: safeLoadAll,
	safeDump: safeDump
};

/* harmony default export */ var js_yaml = (jsYaml);


// CONCATENATED MODULE: ./src/util/yaml/index.ts
// @ts-ignore

function dumpYaml(input) {
  return js_yaml.dump(input);
}
function parseYaml(input) {
  return js_yaml.load(input);
}
// CONCATENATED MODULE: ./src/util/output_types.ts







function toBase64(data) {
  var binstr = Array.prototype.map.call(data, function (ch) {
    return String.fromCharCode(ch);
  }).join('');
  return btoa(binstr);
}

var serializeOutputTypes = {
  hex: {
    dump: function dump(value) {
      return Object(lib["toHexString"])(value);
    }
  },
  base64: {
    dump: function dump(value) {
      return toBase64(value);
    }
  }
};
var deserializeOutputTypes = {
  yaml: {
    dump: function dump(value, type) {
      return dumpYaml(type.toJson(typeof value === 'number' ? value.toString() : value));
    }
  },
  json: {
    dump: function dump(value, type) {
      return JSON.stringify(type.toJson(value), null, 2);
    }
  }
};
// CONCATENATED MODULE: ./src/components/Output.tsx
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var Output_Output = /*#__PURE__*/function (_React$Component) {
  _inherits(Output, _React$Component);

  var _super = _createSuper(Output);

  function Output(props) {
    var _this;

    _classCallCheck(this, Output);

    _this = _super.call(this, props);
    _this.state = {
      showError: false,
      outputType: "hex"
    };
    return _this;
  }

  _createClass(Output, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.serializeModeOn !== this.props.serializeModeOn) {
        if (!this.props.serializeModeOn) {
          this.setOutputType("yaml");
        } else {
          this.setOutputType("hex");
        }
      }
    }
  }, {
    key: "hideError",
    value: function hideError() {
      this.setState({
        showError: false
      });
    }
  }, {
    key: "setOutputType",
    value: function setOutputType(outputType) {
      this.setState({
        outputType: outputType
      });
    }
  }, {
    key: "downloadFile",
    value: function downloadFile(contents, type) {
      var fileContents = new Blob([contents]);
      Object(FileSaver_min["saveAs"])(fileContents, this.props.sszTypeName + "." + type);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          error = _this$props.error,
          serialized = _this$props.serialized,
          deserialized = _this$props.deserialized,
          hashTreeRoot = _this$props.hashTreeRoot,
          serializeModeOn = _this$props.serializeModeOn,
          sszType = _this$props.sszType;
      var _this$state = this.state,
          showError = _this$state.showError,
          outputType = _this$state.outputType;
      var serializedStr, hashTreeRootStr;
      var deserializedStr = "";

      if (serializeModeOn) {
        var serializedOutput = serializeOutputTypes[outputType];
        serializedStr = serialized && serializedOutput ? serializedOutput.dump(serialized) : "";
        hashTreeRootStr = hashTreeRoot && serializedOutput ? serializedOutput.dump(hashTreeRoot) : "";
      } else {
        var deserializedOuput = deserializeOutputTypes[outputType];
        deserializedStr = deserialized !== undefined && deserializedOuput ? deserializedOuput.dump(deserialized, sszType) : "";
      }

      return /*#__PURE__*/react["createElement"]("div", {
        className: "container"
      }, /*#__PURE__*/react["createElement"]("h3", {
        className: "subtitle"
      }, "Output"), showError ? /*#__PURE__*/react["createElement"](display_ErrorBox, {
        error: error,
        hideError: this.hideError.bind(this)
      }) : /*#__PURE__*/react["createElement"](react["Fragment"], null, /*#__PURE__*/react["createElement"]("div", {
        className: "field is-grouped is-grouped-right"
      }, /*#__PURE__*/react["createElement"]("div", {
        className: "field has-addons"
      }, /*#__PURE__*/react["createElement"]("div", {
        className: "control"
      }, /*#__PURE__*/react["createElement"]("a", {
        className: "button is-static"
      }, "Output Type")), /*#__PURE__*/react["createElement"]("div", {
        className: "control"
      }, /*#__PURE__*/react["createElement"]("div", {
        className: "select"
      }, /*#__PURE__*/react["createElement"]("select", {
        value: outputType,
        onChange: function onChange(e) {
          return _this2.setOutputType(e.target.value);
        }
      }, Object.keys(serializeModeOn ? serializeOutputTypes : deserializeOutputTypes).map(function (name) {
        return /*#__PURE__*/react["createElement"]("option", {
          key: name,
          value: name
        }, name);
      })))))), serializeModeOn ? /*#__PURE__*/react["createElement"](react["Fragment"], null, /*#__PURE__*/react["createElement"](NamedOutput, {
        name: "HashTreeRoot",
        value: hashTreeRootStr,
        textarea: false
      }), /*#__PURE__*/react["createElement"](NamedOutput, {
        name: "Serialized",
        value: serializedStr,
        textarea: true
      }), /*#__PURE__*/react["createElement"]("button", {
        disabled: !this.props.serialized,
        onClick: function onClick() {
          return _this2.downloadFile(_this2.props.serialized, "ssz");
        }
      }, "Download data as .ssz file")) : /*#__PURE__*/react["createElement"](react["Fragment"], null, /*#__PURE__*/react["createElement"]("textarea", {
        className: "textarea",
        rows: 8,
        value: deserializedStr,
        readOnly: true
      }), /*#__PURE__*/react["createElement"]("button", {
        disabled: !deserializedStr,
        onClick: function onClick() {
          return _this2.downloadFile(deserializedStr, _this2.state.outputType);
        }
      }, "Download data as ." + this.state.outputType + " file"))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      return {
        showError: !!nextProps.error
      };
    }
  }]);

  return Output;
}(react["Component"]);


// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__(185);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.typed.uint8-array.js
var es6_typed_uint8_array = __webpack_require__(190);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.sort.js
var es6_array_sort = __webpack_require__(199);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.index-of.js
var es6_array_index_of = __webpack_require__(200);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.filter.js
var es6_array_filter = __webpack_require__(201);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js
var es6_object_get_own_property_descriptor = __webpack_require__(202);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.for-each.js
var es6_array_for_each = __webpack_require__(203);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__(204);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.define-properties.js
var es6_object_define_properties = __webpack_require__(207);

// EXTERNAL MODULE: ./node_modules/@chainsafe/lodestar-types/lib/index.js
var lodestar_types_lib = __webpack_require__(44);

// CONCATENATED MODULE: ./src/util/types.ts











function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var phase0 = lodestar_types_lib["ssz"].phase0,
    altair = lodestar_types_lib["ssz"].altair,
    allForks = lodestar_types_lib["ssz"].allForks,
    primitive = _objectWithoutProperties(lodestar_types_lib["ssz"], ["phase0", "altair", "allForks"]);

var forks = {
  phase0: _objectSpread(_objectSpread({}, phase0), primitive),
  altair: _objectSpread(_objectSpread(_objectSpread({}, phase0), altair), primitive)
};
function typeNames(types) {
  return Object.keys(types).sort();
}
// CONCATENATED MODULE: ./src/util/input_types.ts





var inputTypes = {
  yaml: {
    parse: function parse(raw, type) {
      return type.fromJson(parseYaml(raw));
    },
    dump: function dump(value, type) {
      return dumpYaml(type.toJson(typeof value === 'number' ? value.toString() : value));
    }
  },
  json: {
    parse: function parse(raw, type) {
      return type.fromJson(JSON.parse(raw));
    },
    dump: function dump(value, type) {
      return JSON.stringify(type.toJson(value), null, 2);
    }
  },
  hex: {
    parse: function parse(raw, type) {
      return type.deserialize(Object(lib["fromHexString"])(raw));
    },
    dump: function dump(value, type) {
      return Object(lib["toHexString"])(type.serialize(value));
    }
  }
};
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js + 1 modules
var inheritsLoose = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/react-alert/node_modules/react-transition-group/esm/config.js
/* harmony default export */ var config = ({
  disabled: false
});
// CONCATENATED MODULE: ./node_modules/react-alert/node_modules/react-transition-group/esm/TransitionGroupContext.js

/* harmony default export */ var TransitionGroupContext = (react_default.a.createContext(null));
// CONCATENATED MODULE: ./node_modules/react-alert/node_modules/react-transition-group/esm/Transition.js








var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition_Transition = /*#__PURE__*/function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom_default.a.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : react_dom_default.a.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom_default.a.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react_default.a.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react_default.a.cloneElement(react_default.a.Children.only(children), childProps))
    );
  };

  return Transition;
}(react_default.a.Component);

Transition_Transition.contextType = TransitionGroupContext;
Transition_Transition.propTypes =  false ? undefined : {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition_Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition_Transition.UNMOUNTED = UNMOUNTED;
Transition_Transition.EXITED = EXITED;
Transition_Transition.ENTERING = ENTERING;
Transition_Transition.ENTERED = ENTERED;
Transition_Transition.EXITING = EXITING;
/* harmony default export */ var esm_Transition = (Transition_Transition);
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function assertThisInitialized_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/react-alert/node_modules/react-transition-group/esm/utils/ChildMapping.js

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && Object(react["isValidElement"])(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) react["Children"].map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return Object(react["cloneElement"])(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!Object(react["isValidElement"])(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = Object(react["isValidElement"])(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = Object(react["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = Object(react["cloneElement"])(child, {
        in: false
      });
    } else if (hasNext && hasPrev && Object(react["isValidElement"])(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = Object(react["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}
// CONCATENATED MODULE: ./node_modules/react-alert/node_modules/react-transition-group/esm/TransitionGroup.js









var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup_TransitionGroup = /*#__PURE__*/function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(assertThisInitialized_assertThisInitialized(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/react_default.a.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/react_default.a.createElement(TransitionGroupContext.Provider, {
      value: contextValue
    }, /*#__PURE__*/react_default.a.createElement(Component, props, children));
  };

  return TransitionGroup;
}(react_default.a.Component);

TransitionGroup_TransitionGroup.propTypes =  false ? undefined : {};
TransitionGroup_TransitionGroup.defaultProps = defaultProps;
/* harmony default export */ var esm_TransitionGroup = (TransitionGroup_TransitionGroup);
// CONCATENATED MODULE: ./node_modules/react-alert/dist/esm/react-alert.js





function react_alert_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function react_alert_extends() {
  react_alert_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return react_alert_extends.apply(this, arguments);
}

function react_alert_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      react_alert_ownKeys(Object(source), true).forEach(function (key) {
        react_alert_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      react_alert_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function react_alert_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function react_alert_objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = react_alert_objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var react_alert_Context = /*#__PURE__*/Object(react["createContext"])();

var positions = {
  TOP_LEFT: 'top left',
  TOP_CENTER: 'top center',
  TOP_RIGHT: 'top right',
  MIDDLE_LEFT: 'middle left',
  MIDDLE: 'middle',
  MIDDLE_RIGHT: 'middle right',
  BOTTOM_LEFT: 'bottom left',
  BOTTOM_CENTER: 'bottom center',
  BOTTOM_RIGHT: 'bottom right'
};
var react_alert_types = {
  INFO: 'info',
  SUCCESS: 'success',
  ERROR: 'error'
};
var transitions = {
  FADE: 'fade',
  SCALE: 'scale'
};

var getStyles = function getStyles(position) {
  var initialStyles = {
    left: 0,
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    pointerEvents: 'none'
  };

  switch (position) {
    case positions.TOP_LEFT:
      return _objectSpread2(_objectSpread2({}, initialStyles), {}, {
        top: 0,
        alignItems: 'flex-start'
      });

    case positions.TOP_CENTER:
      return _objectSpread2(_objectSpread2({}, initialStyles), {}, {
        top: 0
      });

    case positions.TOP_RIGHT:
      return _objectSpread2(_objectSpread2({}, initialStyles), {}, {
        top: 0,
        alignItems: 'flex-end'
      });

    case positions.MIDDLE_LEFT:
      return _objectSpread2(_objectSpread2({}, initialStyles), {}, {
        top: '50%',
        alignItems: 'flex-start'
      });

    case positions.MIDDLE:
      {
        return _objectSpread2(_objectSpread2({}, initialStyles), {}, {
          top: '50%'
        });
      }

    case positions.MIDDLE_RIGHT:
      return _objectSpread2(_objectSpread2({}, initialStyles), {}, {
        top: '50%',
        alignItems: 'flex-end'
      });

    case positions.BOTTOM_LEFT:
      return _objectSpread2(_objectSpread2({}, initialStyles), {}, {
        bottom: 0,
        alignItems: 'flex-start'
      });

    case positions.BOTTOM_CENTER:
      return _objectSpread2(_objectSpread2({}, initialStyles), {}, {
        bottom: 0
      });

    case positions.BOTTOM_RIGHT:
      return _objectSpread2(_objectSpread2({}, initialStyles), {}, {
        bottom: 0,
        alignItems: 'flex-end'
      });

    default:
      {
        return initialStyles;
      }
  }
};

var react_alert_Wrapper = function Wrapper(_ref) {
  var children = _ref.children,
      _ref$options = _ref.options,
      position = _ref$options.position,
      containerStyle = _ref$options.containerStyle,
      props = react_alert_objectWithoutProperties(_ref, ["children", "options"]);

  var styles = Object(react["useMemo"])(function () {
    return getStyles(position);
  }, [position]);
  return children.length > 0 && /*#__PURE__*/react_default.a.createElement("div", react_alert_extends({
    style: _objectSpread2(_objectSpread2({}, styles), containerStyle)
  }, props), children);
};

var _defaultStyle, _transitionStyles;
var duration = 250;
var defaultStyle = (_defaultStyle = {}, react_alert_defineProperty(_defaultStyle, transitions.FADE, {
  transition: "opacity ".concat(duration, "ms ease"),
  opacity: 0
}), react_alert_defineProperty(_defaultStyle, transitions.SCALE, {
  transform: 'scale(1)',
  transition: "all ".concat(duration, "ms ease-in-out")
}), _defaultStyle);
var transitionStyles = (_transitionStyles = {}, react_alert_defineProperty(_transitionStyles, transitions.FADE, {
  entering: {
    opacity: 0
  },
  entered: {
    opacity: 1
  }
}), react_alert_defineProperty(_transitionStyles, transitions.SCALE, {
  entering: {
    transform: 'scale(0)'
  },
  entered: {
    transform: 'scale(1)'
  },
  exiting: {
    transform: 'scale(0)'
  },
  exited: {
    transform: 'scale(1)'
  }
}), _transitionStyles);

var react_alert_Transtion = function Transtion(_ref) {
  var children = _ref.children,
      type = _ref.type,
      props = react_alert_objectWithoutProperties(_ref, ["children", "type"]);

  var ref = Object(react["useRef"])(null);
  return (/*#__PURE__*/react_default.a.createElement(esm_Transition, react_alert_extends({
      nodeRef: ref
    }, props, {
      timeout: duration
    }), function (state) {
      return (/*#__PURE__*/react_default.a.createElement("div", {
          ref: ref,
          style: _objectSpread2(_objectSpread2({}, defaultStyle[type]), transitionStyles[type][state])
        }, children)
      );
    })
  );
};

var groupBy = function groupBy(array, fn) {
  return array.reduce(function (result, item) {
    var key = fn(item);
    if (!result[key]) result[key] = [];
    result[key].push(item);
    return result;
  }, {});
};

var react_alert_Provider = function Provider(_ref) {
  var children = _ref.children,
      offset = _ref.offset,
      position = _ref.position,
      timeout = _ref.timeout,
      type = _ref.type,
      transition = _ref.transition,
      containerStyle = _ref.containerStyle,
      AlertComponent = _ref.template,
      Context = _ref.context,
      props = react_alert_objectWithoutProperties(_ref, ["children", "offset", "position", "timeout", "type", "transition", "containerStyle", "template", "context"]);

  var root = Object(react["useRef"])(null);
  var alertContext = Object(react["useRef"])(null);
  var timersId = Object(react["useRef"])([]);

  var _useState = Object(react["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      alerts = _useState2[0],
      setAlerts = _useState2[1];

  Object(react["useEffect"])(function () {
    root.current = document.createElement('div');
    root.current.id = '__react-alert__';
    document.body.appendChild(root.current);
    var timersIdRef = timersId.current;
    return function () {
      timersIdRef.forEach(clearTimeout);
      if (root.current) document.body.removeChild(root.current);
    };
  }, []);
  var remove = Object(react["useCallback"])(function (alert) {
    setAlerts(function (currentAlerts) {
      var lengthBeforeRemove = currentAlerts.length;
      var filteredAlerts = currentAlerts.filter(function (a) {
        return a.id !== alert.id;
      });

      if (lengthBeforeRemove > filteredAlerts.length && alert.options.onClose) {
        alert.options.onClose();
      }

      return filteredAlerts;
    });
  }, []);
  var removeAll = Object(react["useCallback"])(function () {
    alertContext.current.alerts.forEach(remove);
  }, [remove]);
  var show = Object(react["useCallback"])(function () {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var id = Math.random().toString(36).substr(2, 9);

    var alertOptions = _objectSpread2({
      position: options.position || position,
      timeout: timeout,
      type: type
    }, options);

    var alert = {
      id: id,
      message: message,
      options: alertOptions
    };

    alert.close = function () {
      return remove(alert);
    };

    if (alert.options.timeout) {
      var timerId = setTimeout(function () {
        remove(alert);
        timersId.current.splice(timersId.current.indexOf(timerId), 1);
      }, alert.options.timeout);
      timersId.current.push(timerId);
    }

    setAlerts(function (state) {
      return state.concat(alert);
    });
    if (alert.options.onOpen) alert.options.onOpen();
    return alert;
  }, [position, remove, timeout, type]);
  var success = Object(react["useCallback"])(function () {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    options.type = react_alert_types.SUCCESS;
    return show(message, options);
  }, [show]);
  var error = Object(react["useCallback"])(function () {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    options.type = react_alert_types.ERROR;
    return show(message, options);
  }, [show]);
  var info = Object(react["useCallback"])(function () {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    options.type = react_alert_types.INFO;
    return show(message, options);
  }, [show]);
  alertContext.current = {
    alerts: alerts,
    show: show,
    remove: remove,
    removeAll: removeAll,
    success: success,
    error: error,
    info: info
  };
  var alertsByPosition = groupBy(alerts, function (alert) {
    return alert.options.position;
  });
  return (/*#__PURE__*/react_default.a.createElement(Context.Provider, {
      value: alertContext
    }, children, root.current && /*#__PURE__*/Object(react_dom["createPortal"])( /*#__PURE__*/react_default.a.createElement(react["Fragment"], null, Object.keys(positions).map(function (key) {
      var position = positions[key];
      return (/*#__PURE__*/react_default.a.createElement(esm_TransitionGroup, react_alert_extends({
          appear: true,
          key: position,
          options: {
            position: position,
            containerStyle: containerStyle
          },
          component: react_alert_Wrapper
        }, props), alertsByPosition[position] ? alertsByPosition[position].map(function (alert) {
          return (/*#__PURE__*/react_default.a.createElement(react_alert_Transtion, {
              type: transition,
              key: alert.id
            }, /*#__PURE__*/react_default.a.createElement(AlertComponent, react_alert_extends({
              style: {
                margin: offset,
                pointerEvents: 'all'
              }
            }, alert)))
          );
        }) : null)
      );
    })), root.current))
  );
};

react_alert_Provider.propTypes = {
  offset: prop_types_default.a.string,
  position: prop_types_default.a.oneOf(Object.keys(positions).map(function (position) {
    return positions[position];
  })),
  timeout: prop_types_default.a.number,
  type: prop_types_default.a.oneOf(Object.keys(react_alert_types).map(function (type) {
    return react_alert_types[type];
  })),
  transition: prop_types_default.a.oneOf(Object.keys(transitions).map(function (transition) {
    return transitions[transition];
  })),
  containerStyle: prop_types_default.a.object,
  template: prop_types_default.a.oneOfType([prop_types_default.a.element, prop_types_default.a.func, prop_types_default.a.elementType]).isRequired,
  context: prop_types_default.a.shape({
    Provider: prop_types_default.a.object,
    Consumer: prop_types_default.a.object
  })
};
react_alert_Provider.defaultProps = {
  offset: '10px',
  position: positions.TOP_CENTER,
  timeout: 0,
  type: react_alert_types.INFO,
  transition: transitions.FADE,
  containerStyle: {
    zIndex: 100
  },
  context: react_alert_Context
};

var react_alert_useAlert = function useAlert(Context$1) {
  var alertContext = Object(react["useContext"])(Context$1 || react_alert_Context);
  var alert = Object(react["useMemo"])(function () {
    return alertContext.current;
  }, [alertContext]);
  return alert;
};

var react_alert_withAlert = function withAlert() {
  var Context$1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : react_alert_Context;
  return function (WrappedComponent) {
    var WithAlert = function WithAlert(props, forwardedRef) {
      return (/*#__PURE__*/react_default.a.createElement(Context$1.Consumer, null, function (alert) {
          return (/*#__PURE__*/react_default.a.createElement(WrappedComponent, react_alert_extends({
              ref: forwardedRef
            }, props, {
              alert: alert.current
            }))
          );
        })
      );
    };

    WithAlert.displayName = "WithAlert(".concat(WrappedComponent.displayName || WrappedComponent.name || 'Component', ")");
    return (/*#__PURE__*/react_default.a.forwardRef(WithAlert)
    );
  };
};



// EXTERNAL MODULE: ./node_modules/workerize-loader/dist!./src/components/worker.tsx
var worker = __webpack_require__(65);
var worker_default = /*#__PURE__*/__webpack_require__.n(worker);

// CONCATENATED MODULE: ./src/components/Input.tsx
function Input_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Input_typeof = function _typeof(obj) { return typeof obj; }; } else { Input_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Input_typeof(obj); }

















function Input_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Input_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Input_createClass(Constructor, protoProps, staticProps) { if (protoProps) Input_defineProperties(Constructor.prototype, protoProps); if (staticProps) Input_defineProperties(Constructor, staticProps); return Constructor; }

function Input_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Input_setPrototypeOf(subClass, superClass); }

function Input_setPrototypeOf(o, p) { Input_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Input_setPrototypeOf(o, p); }

function Input_createSuper(Derived) { var hasNativeReflectConstruct = Input_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Input_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Input_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Input_possibleConstructorReturn(this, result); }; }

function Input_possibleConstructorReturn(self, call) { if (call && (Input_typeof(call) === "object" || typeof call === "function")) { return call; } return Input_assertThisInitialized(self); }

function Input_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Input_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Input_getPrototypeOf(o) { Input_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Input_getPrototypeOf(o); }






 // eslint-disable-line import/no-unresolved

function getRandomType(types) {
  var names = typeNames(types);
  return names[Math.floor(Math.random() * names.length)];
}

var workerInstance = worker_default()();
var DEFAULT_FORK = "phase0";

var Input_Input = /*#__PURE__*/function (_React$Component) {
  Input_inherits(Input, _React$Component);

  var _super = Input_createSuper(Input);

  function Input(props) {
    var _this;

    Input_classCallCheck(this, Input);

    _this = _super.call(this, props);
    var types = forks[DEFAULT_FORK];
    var initialType = getRandomType(types);
    var sszType = types[initialType];

    _this.props.setOverlay(true, "Generating random ".concat(initialType, " value..."));

    workerInstance.createRandomValueWorker({
      sszTypeName: initialType,
      forkName: DEFAULT_FORK
    }).then(function (value) {
      var input = inputTypes.yaml.dump(value, sszType);

      _this.setValueAndInput(value, input);

      _this.props.setOverlay(false);
    })["catch"](function (error) {
      return _this.handleError(error);
    });
    _this.state = {
      forkName: DEFAULT_FORK,
      input: "",
      sszTypeName: initialType,
      serializeInputType: "yaml",
      deserializeInputType: "hex",
      value: ""
    };
    return _this;
  }

  Input_createClass(Input, [{
    key: "setValueAndInput",
    value: function setValueAndInput(value, input) {
      this.setState({
        value: value,
        input: input
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.serializeModeOn !== this.props.serializeModeOn) {
        if (!this.props.serializeModeOn) {
          this.setInputType("hex");

          if (this.props.serialized) {
            this.setInput(Object(lib["toHexString"])(this.props.serialized));
          }
        } else {
          this.setInputType(this.state.serializeInputType);

          if (this.props.deserialized) {
            this.setState({
              value: this.props.deserialized
            });
            this.setInput(inputTypes[this.state.serializeInputType].dump(this.props.deserialized, this.props.sszType));
          }
        }
      }
    }
  }, {
    key: "handleError",
    value: function handleError(error) {
      this.showError(error.message);
      this.props.setOverlay(false);
    }
  }, {
    key: "showError",
    value: function showError(errorMessage) {
      this.props.alert.error(errorMessage);
    }
  }, {
    key: "getRows",
    value: function getRows() {
      return Math.min(16, Math.max(4, Math.floor((this.state.input.match(/\n/g) || []).length * 1.5)));
    }
  }, {
    key: "names",
    value: function names() {
      return typeNames(this.types());
    }
  }, {
    key: "types",
    value: function types() {
      return forks[this.state.forkName];
    }
  }, {
    key: "getInputType",
    value: function getInputType() {
      var serializeModeOn = this.props.serializeModeOn;
      var _this$state = this.state,
          serializeInputType = _this$state.serializeInputType,
          deserializeInputType = _this$state.deserializeInputType;
      return serializeModeOn ? serializeInputType : deserializeInputType;
    }
  }, {
    key: "parsedInput",
    value: function parsedInput() {
      var inputType = this.getInputType();
      return inputTypes[inputType].parse(this.state.input, this.types()[this.state.sszTypeName]);
    }
  }, {
    key: "resetWith",
    value: function resetWith(inputType, sszTypeName) {
      var _this2 = this;

      var types = this.types();
      var sszType = types[sszTypeName]; // get a new ssz type if it's not in our fork

      if (!sszType) {
        sszTypeName = getRandomType(types);
        sszType = types[sszTypeName];
      }

      var forkName = this.state.forkName;
      this.props.setOverlay(true, "Generating random ".concat(sszTypeName, " value..."));
      workerInstance.createRandomValueWorker({
        sszTypeName: sszTypeName,
        forkName: forkName
      }).then(function (value) {
        var input = inputTypes[inputType].dump(value, sszType);

        if (_this2.props.serializeModeOn) {
          _this2.setState({
            serializeInputType: inputType
          });
        } else {
          _this2.setState({
            deserializeInputType: inputType
          });
        }

        _this2.setState({
          sszTypeName: sszTypeName,
          input: input,
          value: value
        });

        _this2.props.setOverlay(false);
      })["catch"](function (error) {
        return _this2.handleError(error);
      });
    }
  }, {
    key: "setFork",
    value: function setFork(e) {
      var _this3 = this;

      this.setState({
        forkName: e.target.value
      }, function () {
        _this3.resetWith(_this3.getInputType(), _this3.state.sszTypeName);
      });
    }
  }, {
    key: "setInputType",
    value: function setInputType(inputType) {
      var _this$state2 = this.state,
          sszTypeName = _this$state2.sszTypeName,
          value = _this$state2.value;
      var sszType = this.types()[sszTypeName];
      var input = inputTypes[inputType].dump(value, sszType);

      if (this.props.serializeModeOn) {
        this.setState({
          serializeInputType: inputType,
          sszTypeName: sszTypeName,
          input: input
        });
      } else {
        this.setState({
          deserializeInputType: inputType,
          sszTypeName: sszTypeName,
          input: input
        });
      }
    }
  }, {
    key: "setSSZType",
    value: function setSSZType(e) {
      this.resetWith(this.getInputType(), e.target.value);
    }
  }, {
    key: "setInput",
    value: function setInput(input) {
      this.setState({
        input: input
      });
    }
  }, {
    key: "doProcess",
    value: function doProcess() {
      var _this$state3 = this.state,
          sszTypeName = _this$state3.sszTypeName,
          forkName = _this$state3.forkName;

      try {
        this.props.onProcess(forkName, sszTypeName, this.parsedInput(), this.types()[sszTypeName], this.getInputType());
      } catch (e) {
        this.handleError(e);
      }
    }
  }, {
    key: "processFileContents",
    value: function processFileContents(contents) {
      try {
        if (!this.props.serializeModeOn) {
          this.setInput(Object(lib["toHexString"])(new Uint8Array(contents)));
        } else {
          this.setInput(contents);
        }
      } catch (error) {
        this.handleError(error);
      }
    }
  }, {
    key: "onUploadFile",
    value: function onUploadFile(file) {
      if (file) {
        var reader = new FileReader();
        var processFileContents = this.processFileContents.bind(this);
        var handleError = this.handleError.bind(this);

        if (this.props.serializeModeOn) {
          reader.readAsText(file);
        } else {
          reader.readAsArrayBuffer(file);
        }

        reader.onload = function (e) {
          if (e.target) {
            processFileContents(e.target.result);
          }
        };

        reader.onerror = function (e) {
          if (e instanceof Error) {
            handleError(e);
          }
        };
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var serializeModeOn = this.props.serializeModeOn;
      var serializeInputType = this.state.serializeInputType;
      return /*#__PURE__*/react["createElement"]("div", {
        className: "container"
      }, /*#__PURE__*/react["createElement"]("h3", {
        className: "subtitle"
      }, "Input"), /*#__PURE__*/react["createElement"]("div", null, /*#__PURE__*/react["createElement"]("div", null, "Upload a file to populate field below (optional)"), /*#__PURE__*/react["createElement"]("input", {
        type: "file",
        accept: ".".concat(serializeModeOn ? serializeInputType : "ssz"),
        onChange: function onChange(e) {
          return e.target.files && _this4.onUploadFile(e.target.files[0]);
        }
      })), /*#__PURE__*/react["createElement"]("br", null), /*#__PURE__*/react["createElement"]("div", {
        className: "field is-horizontal"
      }, /*#__PURE__*/react["createElement"]("div", {
        className: "field-body"
      }, /*#__PURE__*/react["createElement"]("div", {
        className: "field has-addons"
      }, /*#__PURE__*/react["createElement"]("div", {
        className: "control"
      }, /*#__PURE__*/react["createElement"]("a", {
        className: "button is-static"
      }, "Fork")), /*#__PURE__*/react["createElement"]("div", {
        className: "control"
      }, /*#__PURE__*/react["createElement"]("div", {
        className: "select"
      }, /*#__PURE__*/react["createElement"]("select", {
        value: this.state.forkName,
        onChange: this.setFork.bind(this)
      }, Object.keys(forks).map(function (name) {
        return /*#__PURE__*/react["createElement"]("option", {
          key: name,
          value: name
        }, name);
      }))))), /*#__PURE__*/react["createElement"]("div", {
        className: "field has-addons"
      }, /*#__PURE__*/react["createElement"]("div", {
        className: "control"
      }, /*#__PURE__*/react["createElement"]("a", {
        className: "button is-static"
      }, "SSZ Type")), /*#__PURE__*/react["createElement"]("div", {
        className: "control"
      }, /*#__PURE__*/react["createElement"]("div", {
        className: "select"
      }, /*#__PURE__*/react["createElement"]("select", {
        value: this.state.sszTypeName,
        onChange: this.setSSZType.bind(this)
      }, this.names().map(function (name) {
        return /*#__PURE__*/react["createElement"]("option", {
          key: name,
          value: name
        }, name);
      }))))), serializeModeOn && /*#__PURE__*/react["createElement"]("div", {
        className: "field has-addons"
      }, /*#__PURE__*/react["createElement"]("div", {
        className: "control"
      }, /*#__PURE__*/react["createElement"]("a", {
        className: "button is-static"
      }, "Input Type")), /*#__PURE__*/react["createElement"]("div", {
        className: "control"
      }, /*#__PURE__*/react["createElement"]("div", {
        className: "select"
      }, /*#__PURE__*/react["createElement"]("select", {
        value: this.getInputType(),
        onChange: function onChange(e) {
          return _this4.setInputType(e.target.value);
        }
      }, Object.keys(inputTypes).map(function (name) {
        return /*#__PURE__*/react["createElement"]("option", {
          key: name,
          value: name
        }, name);
      }))))))), /*#__PURE__*/react["createElement"]("textarea", {
        className: "textarea",
        rows: this.state.input && this.getRows(),
        value: this.state.input,
        onChange: function onChange(e) {
          return _this4.setInput(e.target.value);
        }
      }), /*#__PURE__*/react["createElement"]("button", {
        className: "button is-primary is-medium is-fullwidth is-uppercase is-family-code submit",
        disabled: !(this.state.sszTypeName && this.state.input),
        onClick: this.doProcess.bind(this)
      }, serializeModeOn ? "Serialize" : "Deserialize"));
    }
  }]);

  return Input;
}(react["Component"]);

/* harmony default export */ var components_Input = (react_alert_withAlert()(Input_Input));
// EXTERNAL MODULE: ./node_modules/react-loading-overlay/lib/LoadingOverlay.js
var LoadingOverlay = __webpack_require__(139);
var LoadingOverlay_default = /*#__PURE__*/__webpack_require__.n(LoadingOverlay);

// EXTERNAL MODULE: ./node_modules/react-spinners/BounceLoader.js
var BounceLoader = __webpack_require__(140);
var BounceLoader_default = /*#__PURE__*/__webpack_require__.n(BounceLoader);

// CONCATENATED MODULE: ./src/components/Serialize.tsx
function Serialize_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Serialize_typeof = function _typeof(obj) { return typeof obj; }; } else { Serialize_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Serialize_typeof(obj); }














function Serialize_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Serialize_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Serialize_createClass(Constructor, protoProps, staticProps) { if (protoProps) Serialize_defineProperties(Constructor.prototype, protoProps); if (staticProps) Serialize_defineProperties(Constructor, staticProps); return Constructor; }

function Serialize_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Serialize_setPrototypeOf(subClass, superClass); }

function Serialize_setPrototypeOf(o, p) { Serialize_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Serialize_setPrototypeOf(o, p); }

function Serialize_createSuper(Derived) { var hasNativeReflectConstruct = Serialize_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Serialize_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Serialize_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Serialize_possibleConstructorReturn(this, result); }; }

function Serialize_possibleConstructorReturn(self, call) { if (call && (Serialize_typeof(call) === "object" || typeof call === "function")) { return call; } return Serialize_assertThisInitialized(self); }

function Serialize_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Serialize_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Serialize_getPrototypeOf(o) { Serialize_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Serialize_getPrototypeOf(o); }






 // eslint-disable-line import/no-unresolved

var Serialize_workerInstance = worker_default()();

var Serialize_Serialize = /*#__PURE__*/function (_React$Component) {
  Serialize_inherits(Serialize, _React$Component);

  var _super = Serialize_createSuper(Serialize);

  function Serialize(props) {
    var _this;

    Serialize_classCallCheck(this, Serialize);

    _this = _super.call(this, props);
    _this.state = {
      forkName: undefined,
      name: "",
      input: undefined,
      deserialized: undefined,
      sszType: undefined,
      error: undefined,
      serialized: undefined,
      hashTreeRoot: undefined,
      showOverlay: false,
      overlayText: ""
    };
    return _this;
  }

  Serialize_createClass(Serialize, [{
    key: "setOverlay",
    value: function setOverlay(showOverlay) {
      var overlayText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      this.setState({
        showOverlay: showOverlay,
        overlayText: overlayText
      });
    }
  }, {
    key: "process",
    value: function process(forkName, name, input, type) {
      var _this2 = this;

      var error;
      this.setOverlay(true, this.props.serializeModeOn ? "Serializing..." : "Deserializing...");
      Serialize_workerInstance.serialize({
        sszTypeName: name,
        forkName: forkName,
        input: input
      }).then(function (result) {
        _this2.setState({
          hashTreeRoot: result.root,
          serialized: result.serialized
        });

        _this2.setOverlay(false);
      })["catch"](function (e) {
        return error = e.message;
      }); // note that all bottom nodes are converted to strings, so that they do not have to be formatted,
      // and can be passed through React component properties.

      var deserialized = input;
      this.setState({
        forkName: forkName,
        name: name,
        input: input,
        sszType: type,
        error: error,
        deserialized: deserialized
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          sszType = _this$state.sszType,
          error = _this$state.error,
          serialized = _this$state.serialized,
          hashTreeRoot = _this$state.hashTreeRoot,
          deserialized = _this$state.deserialized;
      var serializeModeOn = this.props.serializeModeOn;
      var bounceLoader = /*#__PURE__*/react["createElement"](BounceLoader_default.a, {
        css: "margin: auto;"
      });
      return /*#__PURE__*/react["createElement"]("div", {
        className: "section serialize-section is-family-code"
      }, /*#__PURE__*/react["createElement"](LoadingOverlay_default.a, {
        active: this.state.showOverlay,
        spinner: bounceLoader,
        text: this.state.overlayText
      }), /*#__PURE__*/react["createElement"]("div", {
        className: "container"
      }, /*#__PURE__*/react["createElement"]("div", {
        className: "columns is-desktop"
      }, /*#__PURE__*/react["createElement"]("div", {
        className: "column"
      }, /*#__PURE__*/react["createElement"](components_Input, {
        serializeModeOn: serializeModeOn,
        onProcess: this.process.bind(this),
        sszType: sszType,
        serialized: serialized,
        deserialized: deserialized,
        setOverlay: this.setOverlay.bind(this)
      })), /*#__PURE__*/react["createElement"]("div", {
        className: "column"
      }, /*#__PURE__*/react["createElement"](Output_Output, {
        deserialized: deserialized,
        serializeModeOn: serializeModeOn,
        serialized: serialized,
        hashTreeRoot: hashTreeRoot,
        error: error,
        sszType: sszType,
        sszTypeName: this.state.name
      })))));
    }
  }]);

  return Serialize;
}(react["Component"]);


// CONCATENATED MODULE: ./src/components/Tabs.tsx
function Tabs_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Tabs_typeof = function _typeof(obj) { return typeof obj; }; } else { Tabs_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Tabs_typeof(obj); }












function Tabs_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Tabs_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Tabs_createClass(Constructor, protoProps, staticProps) { if (protoProps) Tabs_defineProperties(Constructor.prototype, protoProps); if (staticProps) Tabs_defineProperties(Constructor, staticProps); return Constructor; }

function Tabs_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Tabs_setPrototypeOf(subClass, superClass); }

function Tabs_setPrototypeOf(o, p) { Tabs_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Tabs_setPrototypeOf(o, p); }

function Tabs_createSuper(Derived) { var hasNativeReflectConstruct = Tabs_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Tabs_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Tabs_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Tabs_possibleConstructorReturn(this, result); }; }

function Tabs_possibleConstructorReturn(self, call) { if (call && (Tabs_typeof(call) === "object" || typeof call === "function")) { return call; } return Tabs_assertThisInitialized(self); }

function Tabs_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Tabs_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Tabs_getPrototypeOf(o) { Tabs_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Tabs_getPrototypeOf(o); }




var Tabs_Tabs = /*#__PURE__*/function (_React$Component) {
  Tabs_inherits(Tabs, _React$Component);

  var _super = Tabs_createSuper(Tabs);

  function Tabs(props) {
    var _this;

    Tabs_classCallCheck(this, Tabs);

    _this = _super.call(this, props);
    _this.state = {
      serializeModeOn: true
    };
    return _this;
  }

  Tabs_createClass(Tabs, [{
    key: "showSerialize",
    value: function showSerialize() {
      this.setState({
        serializeModeOn: true
      });
    }
  }, {
    key: "showDeserialize",
    value: function showDeserialize() {
      this.setState({
        serializeModeOn: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var serializeModeOn = this.state.serializeModeOn;
      return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("div", {
        className: "tabs is-centered"
      }, /*#__PURE__*/react_default.a.createElement("ul", null, /*#__PURE__*/react_default.a.createElement("li", {
        className: serializeModeOn ? "is-active" : "is-inactive",
        onClick: function onClick() {
          return _this2.showSerialize();
        }
      }, /*#__PURE__*/react_default.a.createElement("a", null, "Serialize")), /*#__PURE__*/react_default.a.createElement("li", {
        className: serializeModeOn ? "is-inactive" : "is-active",
        onClick: function onClick() {
          return _this2.showDeserialize();
        }
      }, /*#__PURE__*/react_default.a.createElement("a", null, "Deserialize")))), /*#__PURE__*/react_default.a.createElement(Serialize_Serialize, {
        serializeModeOn: serializeModeOn
      }));
    }
  }]);

  return Tabs;
}(react_default.a.Component);


// EXTERNAL MODULE: ./package.json
var package_0 = __webpack_require__(90);

// CONCATENATED MODULE: ./src/components/Footer.tsx


function Footer() {
  return /*#__PURE__*/react["createElement"]("footer", {
    className: "footer"
  }, /*#__PURE__*/react["createElement"]("div", {
    className: "content has-text-centered"
  }, "Made with \u2764\uFE0F by", " ", /*#__PURE__*/react["createElement"]("a", {
    className: "is-link has-text-danger is-family-code",
    href: "https://chainsafe.io"
  }, "ChainSafe Systems"), /*#__PURE__*/react["createElement"]("br", null), "and", " ", /*#__PURE__*/react["createElement"]("a", {
    className: "is-link has-text-danger is-family-code",
    href: "https://github.com/ChainSafe/simpleserialize.com/graphs/contributors"
  }, "ETH 2.0 friends")), /*#__PURE__*/react["createElement"]("div", {
    className: "content has-text-centered is-small is-family-code"
  }, /*#__PURE__*/react["createElement"]("div", null, /*#__PURE__*/react["createElement"]("a", {
    className: "is-link has-text-grey",
    href: "https://www.npmjs.com/package/@chainsafe/ssz"
  }, "@chainsafe/ssz ", package_0.dependencies["@chainsafe/ssz"])), /*#__PURE__*/react["createElement"]("div", null, /*#__PURE__*/react["createElement"]("a", {
    className: "is-link has-text-grey",
    href: "https://www.npmjs.com/package/@chainsafe/lodestar-types"
  }, "@chainsafe/lodestar-types ", package_0.dependencies["@chainsafe/lodestar-types"]))));
}
// CONCATENATED MODULE: ./src/App.tsx





function App() {
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(ForkMe, null), /*#__PURE__*/react_default.a.createElement(Header, null), /*#__PURE__*/react_default.a.createElement(Tabs_Tabs, null), /*#__PURE__*/react_default.a.createElement(Footer, null));
}
// CONCATENATED MODULE: ./node_modules/react-alert-template-basic/dist/esm/react-alert-template-basic.js


var react_alert_template_basic_BaseIcon = function BaseIcon(_ref) {
  var color = _ref.color,
      _ref$pushRight = _ref.pushRight,
      pushRight = _ref$pushRight === undefined ? true : _ref$pushRight,
      children = _ref.children;
  return react_default.a.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style: { marginRight: pushRight ? '20px' : '0', minWidth: 24 }
    },
    children
  );
};

var react_alert_template_basic_InfoIcon = function InfoIcon() {
  return react_default.a.createElement(
    react_alert_template_basic_BaseIcon,
    { color: '#2E9AFE' },
    react_default.a.createElement('circle', { cx: '12', cy: '12', r: '10' }),
    react_default.a.createElement('line', { x1: '12', y1: '16', x2: '12', y2: '12' }),
    react_default.a.createElement('line', { x1: '12', y1: '8', x2: '12', y2: '8' })
  );
};

var react_alert_template_basic_SuccessIcon = function SuccessIcon() {
  return react_default.a.createElement(
    react_alert_template_basic_BaseIcon,
    { color: '#31B404' },
    react_default.a.createElement('path', { d: 'M22 11.08V12a10 10 0 1 1-5.93-9.14' }),
    react_default.a.createElement('polyline', { points: '22 4 12 14.01 9 11.01' })
  );
};

var react_alert_template_basic_ErrorIcon = function ErrorIcon() {
  return react_default.a.createElement(
    react_alert_template_basic_BaseIcon,
    { color: '#FF0040' },
    react_default.a.createElement('circle', { cx: '12', cy: '12', r: '10' }),
    react_default.a.createElement('line', { x1: '12', y1: '8', x2: '12', y2: '12' }),
    react_default.a.createElement('line', { x1: '12', y1: '16', x2: '12', y2: '16' })
  );
};

var react_alert_template_basic_CloseIcon = function CloseIcon() {
  return react_default.a.createElement(
    react_alert_template_basic_BaseIcon,
    { color: '#FFFFFF', pushRight: false },
    react_default.a.createElement('line', { x1: '18', y1: '6', x2: '6', y2: '18' }),
    react_default.a.createElement('line', { x1: '6', y1: '6', x2: '18', y2: '18' })
  );
};

var react_alert_template_basic_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var alertStyle = {
  backgroundColor: '#151515',
  color: 'white',
  padding: '10px',
  textTransform: 'uppercase',
  borderRadius: '3px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0px 2px 2px 2px rgba(0, 0, 0, 0.03)',
  fontFamily: 'Arial',
  width: '300px',
  boxSizing: 'border-box'
};

var buttonStyle = {
  marginLeft: '20px',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  color: '#FFFFFF'
};

var react_alert_template_basic_AlertTemplate = function AlertTemplate(_ref) {
  var message = _ref.message,
      options = _ref.options,
      style = _ref.style,
      close = _ref.close;

  return react_default.a.createElement(
    'div',
    { style: react_alert_template_basic_extends({}, alertStyle, style) },
    options.type === 'info' && react_default.a.createElement(react_alert_template_basic_InfoIcon, null),
    options.type === 'success' && react_default.a.createElement(react_alert_template_basic_SuccessIcon, null),
    options.type === 'error' && react_default.a.createElement(react_alert_template_basic_ErrorIcon, null),
    react_default.a.createElement(
      'span',
      { style: { flex: 2 } },
      message
    ),
    react_default.a.createElement(
      'button',
      { onClick: close, style: buttonStyle },
      react_default.a.createElement(react_alert_template_basic_CloseIcon, null)
    )
  );
};

/* harmony default export */ var react_alert_template_basic = (react_alert_template_basic_AlertTemplate);

// CONCATENATED MODULE: ./src/styles.scss
// extracted by mini-css-extract-plugin

// CONCATENATED MODULE: ./src/index.tsx


function src_extends() { src_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return src_extends.apply(this, arguments); }







var src_options = {
  timeout: 3000,
  offset: "30px",
  transition: transitions.SCALE
};
react_dom_default.a.render( /*#__PURE__*/react_default.a.createElement(react_alert_Provider, src_extends({
  template: react_alert_template_basic
}, src_options), /*#__PURE__*/react_default.a.createElement(App, null)), document.getElementById("app"));

/***/ }),
/* 261 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CacheProvider", function() { return /* reexport */ CacheProvider; });
__webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return /* reexport */ ThemeContext; });
__webpack_require__.d(__webpack_exports__, "withEmotionCache", function() { return /* reexport */ emotion_element_57a3a7a3_browser_esm_withEmotionCache; });
__webpack_require__.d(__webpack_exports__, "css", function() { return /* reexport */ css_browser_esm; });
__webpack_require__.d(__webpack_exports__, "ClassNames", function() { return /* binding */ ClassNames; });
__webpack_require__.d(__webpack_exports__, "Global", function() { return /* binding */ Global; });
__webpack_require__.d(__webpack_exports__, "createElement", function() { return /* binding */ core_browser_esm_jsx; });
__webpack_require__.d(__webpack_exports__, "jsx", function() { return /* binding */ core_browser_esm_jsx; });
__webpack_require__.d(__webpack_exports__, "keyframes", function() { return /* binding */ core_browser_esm_keyframes; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js + 1 modules
var inheritsLoose = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@emotion/cache/dist/cache.browser.esm.js + 2 modules
var cache_browser_esm = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var helpers_inheritsLoose = __webpack_require__(254);

// EXTERNAL MODULE: ./node_modules/@emotion/utils/dist/utils.browser.esm.js
var utils_browser_esm = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@emotion/serialize/dist/serialize.browser.esm.js + 3 modules
var serialize_browser_esm = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/@emotion/core/dist/emotion-element-57a3a7a3.browser.esm.js






var emotion_element_57a3a7a3_browser_esm_hasOwnProperty = Object.prototype.hasOwnProperty;

var EmotionCacheContext = /*#__PURE__*/Object(react["createContext"])( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? Object(cache_browser_esm["a" /* default */])() : null);
var ThemeContext = /*#__PURE__*/Object(react["createContext"])({});
var CacheProvider = EmotionCacheContext.Provider;

var emotion_element_57a3a7a3_browser_esm_withEmotionCache = function withEmotionCache(func) {
  var render = function render(props, ref) {
    return /*#__PURE__*/Object(react["createElement"])(EmotionCacheContext.Consumer, null, function (cache) {
      return func(props, cache, ref);
    });
  }; // $FlowFixMe


  return /*#__PURE__*/Object(react["forwardRef"])(render);
};

// thus we only need to replace what is a valid character for JS, but not for CSS

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {
  if (false) {}

  var newProps = {};

  for (var key in props) {
    if (emotion_element_57a3a7a3_browser_esm_hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type; // TODO: check if this still works with all of those different JSX functions

  if (false) { var match, error; }

  return newProps;
};

var emotion_element_57a3a7a3_browser_esm_render = function render(cache, props, theme, ref) {
  var cssProp = theme === null ? props.css : props.css(theme); // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = Object(utils_browser_esm["a" /* getRegisteredStyles */])(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = Object(serialize_browser_esm["a" /* serializeStyles */])(registeredStyles);

  if (false) { var labelFromStack; }

  var rules = Object(utils_browser_esm["b" /* insertStyles */])(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (emotion_element_57a3a7a3_browser_esm_hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( true || false)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = /*#__PURE__*/Object(react["createElement"])(type, newProps);

  return ele;
}; // eslint-disable-next-line no-undef


var Emotion = /* #__PURE__ */emotion_element_57a3a7a3_browser_esm_withEmotionCache(function (props, cache, ref) {
  if (typeof props.css === 'function') {
    return /*#__PURE__*/Object(react["createElement"])(ThemeContext.Consumer, null, function (theme) {
      return emotion_element_57a3a7a3_browser_esm_render(cache, props, theme, ref);
    });
  }

  return emotion_element_57a3a7a3_browser_esm_render(cache, props, null, ref);
});

if (false) {}



// EXTERNAL MODULE: ./node_modules/@emotion/sheet/dist/sheet.browser.esm.js
var sheet_browser_esm = __webpack_require__(66);

// CONCATENATED MODULE: ./node_modules/@emotion/css/dist/css.browser.esm.js


function css_browser_esm_css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(serialize_browser_esm["a" /* serializeStyles */])(args);
}

/* harmony default export */ var css_browser_esm = (css_browser_esm_css);

// CONCATENATED MODULE: ./node_modules/@emotion/core/dist/core.browser.esm.js











var core_browser_esm_jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !emotion_element_57a3a7a3_browser_esm_hasOwnProperty.call(props, 'css')) {
    // $FlowFixMe
    return react["createElement"].apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  createElementArgArray[1] = createEmotionProps(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return react["createElement"].apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false;
var Global = /* #__PURE__ */emotion_element_57a3a7a3_browser_esm_withEmotionCache(function (props, cache) {
  if (false) {}

  var styles = props.styles;

  if (typeof styles === 'function') {
    return /*#__PURE__*/Object(react["createElement"])(ThemeContext.Consumer, null, function (theme) {
      var serialized = Object(serialize_browser_esm["a" /* serializeStyles */])([styles(theme)]);
      return /*#__PURE__*/Object(react["createElement"])(core_browser_esm_InnerGlobal, {
        serialized: serialized,
        cache: cache
      });
    });
  }

  var serialized = Object(serialize_browser_esm["a" /* serializeStyles */])([styles]);
  return /*#__PURE__*/Object(react["createElement"])(core_browser_esm_InnerGlobal, {
    serialized: serialized,
    cache: cache
  });
});

// maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var core_browser_esm_InnerGlobal = /*#__PURE__*/function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(InnerGlobal, _React$Component);

  function InnerGlobal(props, context, updater) {
    return _React$Component.call(this, props, context, updater) || this;
  }

  var _proto = InnerGlobal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.sheet = new sheet_browser_esm["a" /* StyleSheet */]({
      key: this.props.cache.key + "-global",
      nonce: this.props.cache.sheet.nonce,
      container: this.props.cache.sheet.container
    }); // $FlowFixMe

    var node = document.querySelector("style[data-emotion-" + this.props.cache.key + "=\"" + this.props.serialized.name + "\"]");

    if (node !== null) {
      this.sheet.tags.push(node);
    }

    if (this.props.cache.sheet.tags.length) {
      this.sheet.before = this.props.cache.sheet.tags[0];
    }

    this.insertStyles();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.serialized.name !== this.props.serialized.name) {
      this.insertStyles();
    }
  };

  _proto.insertStyles = function insertStyles$1() {
    if (this.props.serialized.next !== undefined) {
      // insert keyframes
      Object(utils_browser_esm["b" /* insertStyles */])(this.props.cache, this.props.serialized.next, true);
    }

    if (this.sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
      this.sheet.before = element;
      this.sheet.flush();
    }

    this.props.cache.insert("", this.props.serialized, this.sheet, false);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.sheet.flush();
  };

  _proto.render = function render() {

    return null;
  };

  return InnerGlobal;
}(react["Component"]);

var core_browser_esm_keyframes = function keyframes() {
  var insertable = css_browser_esm.apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = Object(utils_browser_esm["a" /* getRegisteredStyles */])(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var ClassNames = emotion_element_57a3a7a3_browser_esm_withEmotionCache(function (props, context) {
  return /*#__PURE__*/Object(react["createElement"])(ThemeContext.Consumer, null, function (theme) {
    var hasRendered = false;

    var css = function css() {
      if (hasRendered && "production" !== 'production') {
        throw new Error('css can only be used during render');
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var serialized = Object(serialize_browser_esm["a" /* serializeStyles */])(args, context.registered);

      {
        Object(utils_browser_esm["b" /* insertStyles */])(context, serialized, false);
      }

      return context.key + "-" + serialized.name;
    };

    var cx = function cx() {
      if (hasRendered && "production" !== 'production') {
        throw new Error('cx can only be used during render');
      }

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return merge(context.registered, css, classnames(args));
    };

    var content = {
      css: css,
      cx: cx,
      theme: theme
    };
    var ele = props.children(content);
    hasRendered = true;

    return ele;
  });
});




/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map