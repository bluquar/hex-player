/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _controller = __webpack_require__(1);
	
	var _standaloneDom = __webpack_require__(126);
	
	var _window = window;
	var _document = document;
	
	function main() {
	  var controller = new _controller.Controller();
	  controller.init();
	  controller.attach_to_dom(new _standaloneDom.StandaloneDOM(_document), function () {
	    console.log('Attached');
	  });
	  console.log(controller.log());
	  _window.c = controller;
	}
	
	document.addEventListener('DOMContentLoaded', function (event) {
	  return main();
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Controller = undefined;
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(84);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _aicontroller = __webpack_require__(92);
	
	var _gamestate = __webpack_require__(107);
	
	var _gamestateviewer = __webpack_require__(134);
	
	var _hexdom = __webpack_require__(124);
	
	var _renderable = __webpack_require__(93);
	
	var _statusbar = __webpack_require__(125);
	
	var _domutils = __webpack_require__(128);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Controller = exports.Controller = function (_Renderable) {
	  (0, _inherits3.default)(Controller, _Renderable);
	
	  function Controller() {
	    (0, _classCallCheck3.default)(this, Controller);
	    return (0, _possibleConstructorReturn3.default)(this, (Controller.__proto__ || (0, _getPrototypeOf2.default)(Controller)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(Controller, [{
	    key: 'init',
	    value: function init() {
	      this._statusBar = new _statusbar.StatusBar();
	      this._gameState = new _gamestate.GameState();
	      this._aiController = new _aicontroller.AIController(new _gamestateviewer.GameStateViewer(this._gameState));
	    }
	  }, {
	    key: 'attach_to_dom',
	    value: function attach_to_dom(dom, attached) {
	      this._dom = dom;
	      this.render();
	      attached();
	    }
	  }, {
	    key: 'refresh',
	    value: function refresh() {
	      this.render();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var elem = (0, _domutils.makeDiv)(null, 'controller');
	      var gshook = (0, _domutils.makeDiv)(null, 'gshook');
	      var aihook = (0, _domutils.makeDiv)(null, 'aihook');
	      gshook.appendChild(this._gameState.render(gshook));
	      aihook.appendChild(this._aiController.render(aihook));
	      elem.appendChild(gshook);
	      elem.appendChild(aihook);
	      this._dom.setNode(elem);
	      return elem;
	    }
	  }, {
	    key: 'log',
	    value: function log() {
	      return {
	        'Game State': this.game ? this.game.log() : 'uninitialized',
	        'AI Controller': this.ai ? this.ai.log() : 'uninitialized'
	      };
	    }
	  }, {
	    key: 'game',
	    get: function get() {
	      return this._gameState;
	    }
	  }, {
	    key: 'status',
	    get: function get() {
	      return this._statusBar;
	    }
	  }, {
	    key: 'ai',
	    get: function get() {
	      return this._aiController;
	    }
	  }]);
	  return Controller;
	}(_renderable.Renderable);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	module.exports = __webpack_require__(15).Object.getPrototypeOf;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(5)
	  , $getPrototypeOf = __webpack_require__(7);
	
	__webpack_require__(13)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(6);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(8)
	  , toObject    = __webpack_require__(5)
	  , IE_PROTO    = __webpack_require__(9)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(10)('keys')
	  , uid    = __webpack_require__(12);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(11)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 12 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(14)
	  , core    = __webpack_require__(15)
	  , fails   = __webpack_require__(24);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(11)
	  , core      = __webpack_require__(15)
	  , ctx       = __webpack_require__(16)
	  , hide      = __webpack_require__(18)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
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

/***/ },
/* 15 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(17);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(19)
	  , createDesc = __webpack_require__(27);
	module.exports = __webpack_require__(23) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(20)
	  , IE8_DOM_DEFINE = __webpack_require__(22)
	  , toPrimitive    = __webpack_require__(26)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(23) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(21);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(23) && !__webpack_require__(24)(function(){
	  return Object.defineProperty(__webpack_require__(25)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(24)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(21)
	  , document = __webpack_require__(11).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(21);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(30);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(31), __esModule: true };

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(32);
	var $Object = __webpack_require__(15).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(14);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(23), 'Object', {defineProperty: __webpack_require__(19).f});

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(34);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(35);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(64);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(36), __esModule: true };

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(37);
	__webpack_require__(59);
	module.exports = __webpack_require__(63).f('iterator');

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(38)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(40)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(39)
	  , defined   = __webpack_require__(6);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(41)
	  , $export        = __webpack_require__(14)
	  , redefine       = __webpack_require__(42)
	  , hide           = __webpack_require__(18)
	  , has            = __webpack_require__(8)
	  , Iterators      = __webpack_require__(43)
	  , $iterCreate    = __webpack_require__(44)
	  , setToStringTag = __webpack_require__(57)
	  , getPrototypeOf = __webpack_require__(7)
	  , ITERATOR       = __webpack_require__(58)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(18);

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(45)
	  , descriptor     = __webpack_require__(27)
	  , setToStringTag = __webpack_require__(57)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(18)(IteratorPrototype, __webpack_require__(58)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(20)
	  , dPs         = __webpack_require__(46)
	  , enumBugKeys = __webpack_require__(55)
	  , IE_PROTO    = __webpack_require__(9)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(25)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(56).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(19)
	  , anObject = __webpack_require__(20)
	  , getKeys  = __webpack_require__(47);
	
	module.exports = __webpack_require__(23) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(48)
	  , enumBugKeys = __webpack_require__(55);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(8)
	  , toIObject    = __webpack_require__(49)
	  , arrayIndexOf = __webpack_require__(52)(false)
	  , IE_PROTO     = __webpack_require__(9)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(50)
	  , defined = __webpack_require__(6);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(51);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 51 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(49)
	  , toLength  = __webpack_require__(53)
	  , toIndex   = __webpack_require__(54);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(39)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(39)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(11).document && document.documentElement;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(19).f
	  , has = __webpack_require__(8)
	  , TAG = __webpack_require__(58)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(10)('wks')
	  , uid        = __webpack_require__(12)
	  , Symbol     = __webpack_require__(11).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(60);
	var global        = __webpack_require__(11)
	  , hide          = __webpack_require__(18)
	  , Iterators     = __webpack_require__(43)
	  , TO_STRING_TAG = __webpack_require__(58)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(61)
	  , step             = __webpack_require__(62)
	  , Iterators        = __webpack_require__(43)
	  , toIObject        = __webpack_require__(49);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(40)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(58);

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(65), __esModule: true };

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(66);
	__webpack_require__(77);
	__webpack_require__(78);
	__webpack_require__(79);
	module.exports = __webpack_require__(15).Symbol;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(11)
	  , has            = __webpack_require__(8)
	  , DESCRIPTORS    = __webpack_require__(23)
	  , $export        = __webpack_require__(14)
	  , redefine       = __webpack_require__(42)
	  , META           = __webpack_require__(67).KEY
	  , $fails         = __webpack_require__(24)
	  , shared         = __webpack_require__(10)
	  , setToStringTag = __webpack_require__(57)
	  , uid            = __webpack_require__(12)
	  , wks            = __webpack_require__(58)
	  , wksExt         = __webpack_require__(63)
	  , wksDefine      = __webpack_require__(68)
	  , keyOf          = __webpack_require__(69)
	  , enumKeys       = __webpack_require__(70)
	  , isArray        = __webpack_require__(73)
	  , anObject       = __webpack_require__(20)
	  , toIObject      = __webpack_require__(49)
	  , toPrimitive    = __webpack_require__(26)
	  , createDesc     = __webpack_require__(27)
	  , _create        = __webpack_require__(45)
	  , gOPNExt        = __webpack_require__(74)
	  , $GOPD          = __webpack_require__(76)
	  , $DP            = __webpack_require__(19)
	  , $keys          = __webpack_require__(47)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(75).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(72).f  = $propertyIsEnumerable;
	  __webpack_require__(71).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(41)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
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
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(18)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(12)('meta')
	  , isObject = __webpack_require__(21)
	  , has      = __webpack_require__(8)
	  , setDesc  = __webpack_require__(19).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(24)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(11)
	  , core           = __webpack_require__(15)
	  , LIBRARY        = __webpack_require__(41)
	  , wksExt         = __webpack_require__(63)
	  , defineProperty = __webpack_require__(19).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(47)
	  , toIObject = __webpack_require__(49);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(47)
	  , gOPS    = __webpack_require__(71)
	  , pIE     = __webpack_require__(72);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 71 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 72 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(51);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(49)
	  , gOPN      = __webpack_require__(75).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(48)
	  , hiddenKeys = __webpack_require__(55).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(72)
	  , createDesc     = __webpack_require__(27)
	  , toIObject      = __webpack_require__(49)
	  , toPrimitive    = __webpack_require__(26)
	  , has            = __webpack_require__(8)
	  , IE8_DOM_DEFINE = __webpack_require__(22)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(23) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 77 */
/***/ function(module, exports) {



/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(68)('asyncIterator');

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(68)('observable');

/***/ },
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(85);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(89);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(34);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(86), __esModule: true };

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(87);
	module.exports = __webpack_require__(15).Object.setPrototypeOf;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(14);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(88).set});

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(21)
	  , anObject = __webpack_require__(20);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(16)(Function.call, __webpack_require__(76).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(90), __esModule: true };

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(91);
	var $Object = __webpack_require__(15).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(14)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(45)});

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AIController = undefined;
	
	var _getIterator2 = __webpack_require__(98);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(84);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _graphicpoint = __webpack_require__(111);
	
	var _renderable = __webpack_require__(93);
	
	var _strategystore = __webpack_require__(129);
	
	var _domutils = __webpack_require__(128);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DEBUG_MODE = true;
	
	var AIController = exports.AIController = function (_Renderable) {
	  (0, _inherits3.default)(AIController, _Renderable);
	
	  function AIController(gameView) {
	    (0, _classCallCheck3.default)(this, AIController);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (AIController.__proto__ || (0, _getPrototypeOf2.default)(AIController)).call(this));
	
	    _this._gameView = gameView;
	    return _this;
	  }
	
	  (0, _createClass3.default)(AIController, [{
	    key: 'render',
	    value: function render() {
	      var text = document.createTextNode('AI Controller');
	      var header = document.createElement('h1');
	      header.appendChild(text);
	      var div = (0, _domutils.makeDiv)([], 'aicontroller', null, new _graphicpoint.GraphicPoint(50, 500));
	      div.appendChild(header);
	      div.appendChild(this._renderStrategySelector());
	      div.appendChild(this._renderStrategyControls());
	      this._elem = div;
	
	      this._setStrategyConfig(_strategystore.StrategyStore.getDefaultStrategyConfig());
	      return div;
	    }
	  }, {
	    key: '_setStrategyConfig',
	    value: function _setStrategyConfig(strategyConfig) {
	      if (this._elem == null) return;
	      if (!this._strategyHook) {
	        this._strategyHook = document.createElement('div');
	        if (this._elem != null) {
	          this._elem.appendChild(this._strategyHook);
	        }
	      }
	
	      this._strategyConfig = strategyConfig;
	      this._strategy = strategyConfig.getStrategy(this._strategyHook, DEBUG_MODE);
	      this._showStrategy();
	    }
	  }, {
	    key: '_showStrategy',
	    value: function _showStrategy() {
	      if (this._strategy != null) {
	        this._strategy.show(this._gameView);
	      }
	    }
	  }, {
	    key: '_makeMove',
	    value: function _makeMove() {
	      if (this._strategy == null) {
	        return;
	      }
	      var move = this._strategy.chooseMove(this._gameView);
	      this._gameView.commitMove(move);
	      this._showStrategy();
	    }
	  }, {
	    key: '_renderStrategyControls',
	    value: function _renderStrategyControls() {
	      var controls = (0, _domutils.makeDiv)(['aicontrols'], null, null, null);
	      controls.appendChild(this._renderMakeMoveControl());
	      return controls;
	    }
	  }, {
	    key: '_renderMakeMoveControl',
	    value: function _renderMakeMoveControl() {
	      var _this2 = this;
	
	      var button = document.createElement('button');
	      button.type = 'button';
	      button.appendChild(document.createTextNode('Make Move'));
	      button.onclick = function () {
	        return _this2._makeMove();
	      };
	      return button;
	    }
	  }, {
	    key: '_renderStrategySelector',
	    value: function _renderStrategySelector() {
	      var _this3 = this;
	
	      var select = document.createElement('select');
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = (0, _getIterator3.default)(_strategystore.StrategyStore.strategyConfigs()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var strategyConfig = _step.value;
	
	          var name = strategyConfig.name;
	          var option = document.createElement('option');
	          option.value = name;
	          option.appendChild(document.createTextNode(name));
	          select.appendChild(option);
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	
	      ;
	      select.onchange = function () {
	        var strategyConfig = _strategystore.StrategyStore.getByName(select.value);
	        if (strategyConfig != null) {
	          _this3._setStrategyConfig(strategyConfig);
	        }
	      };
	      return select;
	    }
	  }, {
	    key: 'log',
	    value: function log() {
	      return {
	        strategy: this._strategyConfig == null ? null : this._strategyConfig.name
	      };
	    }
	  }]);
	  return AIController;
	}(_renderable.Renderable);
	
	;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Renderable = undefined;
	
	var _regenerator = __webpack_require__(94);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _getIterator2 = __webpack_require__(98);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Renderable = exports.Renderable = function () {
	  function Renderable(children) {
	    (0, _classCallCheck3.default)(this, Renderable);
	
	    this._children = children || [];
	  }
	
	  (0, _createClass3.default)(Renderable, [{
	    key: 'addChild',
	    value: function addChild(child) {
	      this._children.push(child);
	    }
	  }, {
	    key: 'children',
	    value: _regenerator2.default.mark(function children() {
	      var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, child;
	
	      return _regenerator2.default.wrap(function children$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              _iteratorNormalCompletion = true;
	              _didIteratorError = false;
	              _iteratorError = undefined;
	              _context.prev = 3;
	              _iterator = (0, _getIterator3.default)(this._children);
	
	            case 5:
	              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
	                _context.next = 12;
	                break;
	              }
	
	              child = _step.value;
	              _context.next = 9;
	              return child;
	
	            case 9:
	              _iteratorNormalCompletion = true;
	              _context.next = 5;
	              break;
	
	            case 12:
	              _context.next = 18;
	              break;
	
	            case 14:
	              _context.prev = 14;
	              _context.t0 = _context['catch'](3);
	              _didIteratorError = true;
	              _iteratorError = _context.t0;
	
	            case 18:
	              _context.prev = 18;
	              _context.prev = 19;
	
	              if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	              }
	
	            case 21:
	              _context.prev = 21;
	
	              if (!_didIteratorError) {
	                _context.next = 24;
	                break;
	              }
	
	              throw _iteratorError;
	
	            case 24:
	              return _context.finish(21);
	
	            case 25:
	              return _context.finish(18);
	
	            case 26:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, children, this, [[3, 14, 18, 26], [19,, 21, 25]]);
	    })
	  }, {
	    key: 'render',
	    value: function render() {
	      throw 'abstract';
	    }
	  }, {
	    key: 'getNode',
	    value: function getNode() {
	      throw 'abstract';
	    }
	  }, {
	    key: 'log',
	    value: function log() {
	      throw 'abstract';
	    }
	  }]);
	  return Renderable;
	}();

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(95);


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g =
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this;
	
	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;
	
	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;
	
	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;
	
	module.exports = __webpack_require__(96);
	
	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };
	
	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return Promise.resolve(value.arg).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = arg;
	
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(97)))

/***/ },
/* 97 */
/***/ function(module, exports) {

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
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(99), __esModule: true };

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(59);
	__webpack_require__(37);
	module.exports = __webpack_require__(100);

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(20)
	  , get      = __webpack_require__(101);
	module.exports = __webpack_require__(15).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(102)
	  , ITERATOR  = __webpack_require__(58)('iterator')
	  , Iterators = __webpack_require__(43);
	module.exports = __webpack_require__(15).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(51)
	  , TAG = __webpack_require__(58)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GameState = undefined;
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(84);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _board = __webpack_require__(108);
	
	var _graphicpoint = __webpack_require__(111);
	
	var _move = __webpack_require__(114);
	
	var _piece = __webpack_require__(116);
	
	var _renderable = __webpack_require__(93);
	
	var _tray = __webpack_require__(119);
	
	var _domutils = __webpack_require__(128);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var GameState = exports.GameState = function (_Renderable) {
	  (0, _inherits3.default)(GameState, _Renderable);
	
	  function GameState() {
	    (0, _classCallCheck3.default)(this, GameState);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (GameState.__proto__ || (0, _getPrototypeOf2.default)(GameState)).call(this));
	
	    _this._score = 0;
	    _this._board = new _board.Board();
	    _this._tray = new _tray.Tray();
	    return _this;
	  }
	
	  (0, _createClass3.default)(GameState, [{
	    key: 'gameIsOver',
	    value: function gameIsOver() {
	      // todo
	      return false;
	    }
	  }, {
	    key: 'hasUnknowns',
	    value: function hasUnknowns() {
	      // todo
	      return false;
	    }
	  }, {
	    key: 'withEachUnknownResolved',
	    value: function withEachUnknownResolved(callback) {
	      // todo
	      return;
	    }
	  }, {
	    key: 'withEachValidMoveApplied',
	    value: function withEachValidMoveApplied(callback) {
	      var _this2 = this;
	
	      this.forEachPieceInTray(function (piece) {
	        _this2._board.withEachValidMoveApplied(function (move, scoreIncrease) {
	          _this2._score += scoreIncrease;
	          callback(move);
	          _this2._score -= scoreIncrease;
	        }, piece);
	      });
	    }
	  }, {
	    key: 'withMoveApplied',
	    value: function withMoveApplied(move, callback) {
	      var _this3 = this;
	
	      this.board.withMoveApplied(move, function (move, scoreIncrease) {
	        _this3._score += scoreIncrease;
	        callback();
	        _this3._score -= scoreIncrease;
	      });
	    }
	  }, {
	    key: 'isValidCommit',
	    value: function isValidCommit(move) {
	      return this.tray.isValidCommit(move) && this.board.isValidCommit(move);
	    }
	  }, {
	    key: 'commitMove',
	    value: function commitMove(move) {
	      if (!this.isValidCommit(move)) {
	        return false;
	      }
	      this.tray.commitMove(move);
	      this._score += this.board.commitMove(move);
	      this.refresh();
	      return true;
	    }
	  }, {
	    key: 'forEachPieceInTray',
	    value: function forEachPieceInTray(callback) {
	      this.tray.forEachPiece(callback);
	    }
	  }, {
	    key: 'refresh',
	    value: function refresh() {
	      console.log('refreshing gamestate');
	      console.log(this.log());
	      if (this._hook != null) {
	        if (this._elem != null) {
	          this._hook.removeChild(this._elem);
	        }
	        var elem = this.render();
	        this._elem = elem;
	        if (this._hook != null) {
	          this._hook.appendChild(elem);
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render(hook) {
	      var score = (0, _domutils.makeDiv)(['score'], null, this.score.toString());
	      var board = this._board.render();
	      var tray = this._tray.render();
	
	      var gamestate = document.createElement('div');
	      gamestate.className = 'GameState';
	      gamestate.appendChild(score);
	      gamestate.appendChild(board);
	      gamestate.appendChild(tray);
	      if (hook != null) {
	        this._hook = hook;
	        this._elem = gamestate;
	      }
	      return gamestate;
	    }
	  }, {
	    key: 'log',
	    value: function log() {
	      return this._board && this._tray ? {
	        'Board': this.board.log(),
	        'Tray': this.tray.log(),
	        'Score': this.score
	      } : 'uninitialized';
	    }
	  }, {
	    key: 'encode',
	    value: function encode() {
	      return [this.board.encode(), this.tray.encode()].join('');
	    }
	  }, {
	    key: 'tray',
	    get: function get() {
	      return this._tray;
	    }
	  }, {
	    key: 'board',
	    get: function get() {
	      return this._board;
	    }
	  }, {
	    key: 'score',
	    get: function get() {
	      return this._score;
	    }
	  }]);
	  return GameState;
	}(_renderable.Renderable);

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Board = exports.ROW_WIDTHS = undefined;
	
	var _getIterator2 = __webpack_require__(98);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(84);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _regenerator = __webpack_require__(94);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	exports.addOffset = addOffset;
	exports.pointInBounds = pointInBounds;
	
	var _debug = __webpack_require__(109);
	
	var _cell = __webpack_require__(110);
	
	var _graphicpoint = __webpack_require__(111);
	
	var _move3 = __webpack_require__(114);
	
	var _movestack = __webpack_require__(118);
	
	var _offset = __webpack_require__(113);
	
	var _piece = __webpack_require__(116);
	
	var _pieceplacement = __webpack_require__(115);
	
	var _point = __webpack_require__(112);
	
	var _renderable = __webpack_require__(93);
	
	var _hexgraphicutils = __webpack_require__(117);
	
	var _domutils = __webpack_require__(128);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _marked = [_allPlacements].map(_regenerator2.default.mark);
	
	var ROW_WIDTHS = exports.ROW_WIDTHS = [5, //      ⬣ ⬣ ⬣ ⬣ ⬣
	6, //     ⬣ ⬣ ⬣ ⬣ ⬣ ⬣
	7, //    ⬣ ⬣ ⬣ ⬣ ⬣ ⬣ ⬣
	8, //   ⬣ ⬣ ⬣ ⬣ ⬣ ⬣ ⬣ ⬣
	9, //  ⬣ ⬣ ⬣ ⬣ ⬣ ⬣ ⬣ ⬣ ⬣
	8, //   ⬣ ⬣ ⬣ ⬣ ⬣ ⬣ ⬣ ⬣
	7, //    ⬣ ⬣ ⬣ ⬣ ⬣ ⬣ ⬣
	6, //     ⬣ ⬣ ⬣ ⬣ ⬣ ⬣
	5];
	
	var MID_ROW = 4;
	
	function addOffset(point, offset) {
	  var srcRow = point.row;
	  var srcCol = point.col;
	  var deltaRow = offset.row;
	
	  var destRow = srcRow + deltaRow;
	  var rowsBeyondMid = deltaRow >= 0 ? Math.max(0, destRow - Math.max(srcRow, MID_ROW)) : Math.min(0, Math.max(destRow, MID_ROW) - srcRow);
	
	  var deltaCol = offset.col - rowsBeyondMid;
	  var destCol = srcCol + deltaCol;
	
	  return new _point.Point(destRow, destCol);
	}
	
	function _allPlacements() {
	  var rows, row, cols, col;
	  return _regenerator2.default.wrap(function _allPlacements$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          rows = ROW_WIDTHS.length;
	          row = 0;
	
	        case 2:
	          if (!(row < rows)) {
	            _context.next = 14;
	            break;
	          }
	
	          cols = ROW_WIDTHS[row];
	          col = 0;
	
	        case 5:
	          if (!(col < cols)) {
	            _context.next = 11;
	            break;
	          }
	
	          _context.next = 8;
	          return new _point.Point(row, col);
	
	        case 8:
	          col++;
	          _context.next = 5;
	          break;
	
	        case 11:
	          row++;
	          _context.next = 2;
	          break;
	
	        case 14:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, _marked[0], this);
	}
	
	function pointInBounds(point) {
	  var row = point.row;
	  var col = point.col;
	  if (row < 0 || row >= ROW_WIDTHS.length) return false;
	  var row_width = ROW_WIDTHS[row];
	  if (col < 0 || col >= row_width) return false;
	  return true;
	}
	
	var Board = exports.Board = function (_Renderable) {
	  (0, _inherits3.default)(Board, _Renderable);
	
	  function Board() {
	    (0, _classCallCheck3.default)(this, Board);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (Board.__proto__ || (0, _getPrototypeOf2.default)(Board)).call(this));
	
	    _this._cells = ROW_WIDTHS.map(function (width, row) {
	      return new Array(width).fill().map(function (_, col) {
	        var point = new _point.Point(row, col);
	        var graphicPoint = (0, _hexgraphicutils.graphicPointOnBoard)(point);
	        return new _cell.Cell(graphicPoint);
	      });
	    });
	    _this._movestack = new _movestack.MoveStack();
	    return _this;
	  }
	
	  (0, _createClass3.default)(Board, [{
	    key: 'getCellAt',
	    value: function getCellAt(point) {
	      (0, _debug.Assert)(pointInBounds(point), 'Invalid point for getCellAt', function () {
	        return point.log();
	      });
	      return this._cells[point.row][point.col];
	    }
	  }, {
	    key: 'cellOccupiedAt',
	    value: function cellOccupiedAt(point) {
	      var cell = this.getCellAt(point);
	      return cell.isOccupied;
	    }
	  }, {
	    key: '_canPlaceTileAt',
	    value: function _canPlaceTileAt(point) {
	      if (!pointInBounds(point)) {
	        return false;
	      }
	      if (this.cellOccupiedAt(point)) {
	        return false;
	      }
	      return true;
	    }
	  }, {
	    key: 'isValidMove',
	    value: function isValidMove(move) {
	      var _this2 = this;
	
	      return move.piecePlacement.allPointsPass(function (point) {
	        return _this2._canPlaceTileAt(point);
	      });
	    }
	  }, {
	    key: 'isValidCommit',
	    value: function isValidCommit(move) {
	      return this.isValidMove(move) && this._movestack.isEmpty();
	    }
	  }, {
	    key: 'isValidUnmove',
	    value: function isValidUnmove(move) {
	      // TODO - do more thorough checking here
	      return true;
	    }
	  }, {
	    key: 'applyMove',
	    value: function applyMove(move) {
	      var _this3 = this;
	
	      (0, _debug.Assert)(this.isValidMove(move), 'Cannot apply invalid move', function () {
	        return move.log();
	      });
	      (0, _debug.Assert)(!move.applied, 'Cannot apply already applied move', function () {
	        return move.log();
	      });
	
	      var scoreIncrease = 40;
	
	      move.piecePlacement.placeOnCells(function (point) {
	        return _this3.getCellAt(point);
	      });
	
	      move.setApplied(true);
	      move.clearLines(this);
	      scoreIncrease += move.getScoreIncrease();
	      this._movestack.push(move);
	      return scoreIncrease;
	    }
	  }, {
	    key: 'unApplyMove',
	    value: function unApplyMove(move) {
	      var _this4 = this;
	
	      (0, _debug.Assert)(this.isValidUnmove(move), 'Cannot unapply invalid move', function () {
	        return move.log();
	      });
	      (0, _debug.Assert)(move.applied, 'Cannot unapply unapplied move', function () {
	        return move.log();
	      });
	
	      this._movestack.pop(move);
	      move.setApplied(false);
	      move.unclearLines(this);
	
	      move.piecePlacement.removeFromCells(function (point) {
	        return _this4.getCellAt(point);
	      });
	    }
	  }, {
	    key: 'commitMove',
	    value: function commitMove(move) {
	      var _this5 = this;
	
	      (0, _debug.Assert)(this.isValidCommit(move), 'Cannot commit invalid move to board', function () {
	        return _this5.log();
	      });
	      var scoreIncrease = this.applyMove(move);
	      this._movestack.flush();
	      return scoreIncrease;
	    }
	  }, {
	    key: 'allValidMoves',
	    value: _regenerator2.default.mark(function allValidMoves(piece) {
	      var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, placement, piecePlacement, _move;
	
	      return _regenerator2.default.wrap(function allValidMoves$(_context2) {
	        while (1) {
	          switch (_context2.prev = _context2.next) {
	            case 0:
	              _iteratorNormalCompletion = true;
	              _didIteratorError = false;
	              _iteratorError = undefined;
	              _context2.prev = 3;
	              _iterator = (0, _getIterator3.default)(_allPlacements());
	
	            case 5:
	              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
	                _context2.next = 15;
	                break;
	              }
	
	              placement = _step.value;
	              piecePlacement = new _pieceplacement.PiecePlacement(piece, placement);
	              _move = new _move3.Move(piecePlacement);
	
	              if (!this.isValidMove(_move)) {
	                _context2.next = 12;
	                break;
	              }
	
	              _context2.next = 12;
	              return _move;
	
	            case 12:
	              _iteratorNormalCompletion = true;
	              _context2.next = 5;
	              break;
	
	            case 15:
	              _context2.next = 21;
	              break;
	
	            case 17:
	              _context2.prev = 17;
	              _context2.t0 = _context2['catch'](3);
	              _didIteratorError = true;
	              _iteratorError = _context2.t0;
	
	            case 21:
	              _context2.prev = 21;
	              _context2.prev = 22;
	
	              if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	              }
	
	            case 24:
	              _context2.prev = 24;
	
	              if (!_didIteratorError) {
	                _context2.next = 27;
	                break;
	              }
	
	              throw _iteratorError;
	
	            case 27:
	              return _context2.finish(24);
	
	            case 28:
	              return _context2.finish(21);
	
	            case 29:
	            case 'end':
	              return _context2.stop();
	          }
	        }
	      }, allValidMoves, this, [[3, 17, 21, 29], [22,, 24, 28]]);
	    })
	  }, {
	    key: 'withMoveApplied',
	    value: function withMoveApplied(move, callback) {
	
	      var scoreIncrease = this.applyMove(move);
	      callback(move, scoreIncrease);
	      this.unApplyMove(move);
	    }
	  }, {
	    key: 'withEachValidMoveApplied',
	    value: function withEachValidMoveApplied(callback, piece) {
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;
	
	      try {
	        for (var _iterator2 = (0, _getIterator3.default)(this.allValidMoves(piece)), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var _move2 = _step2.value;
	
	          this.withMoveApplied(_move2, callback);
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!this._cells) {
	        return (0, _domutils.makeDiv)(['board'], null, 'uninitialized');
	      }
	      var node = (0, _domutils.makeDiv)(['board']);
	
	      this._cells.map(function (row) {
	        row.map(function (cell) {
	          node.appendChild(cell.render());
	        });
	      });
	
	      return node;
	    }
	  }, {
	    key: 'log',
	    value: function log() {
	      if (!this._cells) {
	        return 'uninitialized';
	      }
	      return this._cells.map(function (row, i) {
	        return (
	          // todo fix the spacing (zero pad, etc)
	          row.map(function (cell) {
	            return cell.isOccupied ? 'x' : '.';
	          }).join('')
	        );
	      });
	    }
	  }, {
	    key: 'encode',
	    value: function encode() {
	      return this._cells.map(function (row) {
	        return row.map(function (cell) {
	          return cell.isOccupied ? 'x' : '.';
	        }).join('');
	      }).join('');
	    }
	  }]);
	  return Board;
	}(_renderable.Renderable);

/***/ },
/* 109 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Throw = Throw;
	exports.Assert = Assert;
	exports.BreakOnException = BreakOnException;
	exports.DontBreakOnException = DontBreakOnException;
	exports.SwallowErrors = SwallowErrors;
	exports.DontSwallowErrors = DontSwallowErrors;
	var BREAK_ON_EXCEPTION = false;
	var SWALLOW_ERRORS = false;
	
	function Throw(message, contextGetter) {
	  console.warn(message);
	  if (contextGetter) {
	    console.warn(contextGetter());
	  }
	  if (BREAK_ON_EXCEPTION) {
	    debugger;
	  }
	  if (!SWALLOW_ERRORS) {
	    throw message;
	  }
	}
	
	function Assert(condition, message, contextGetter) {
	  if (!condition) {
	    Throw(message, contextGetter);
	  }
	}
	
	function BreakOnException() {
	  BREAK_ON_EXCEPTION = true;
	}
	
	function DontBreakOnException() {
	  BREAK_ON_EXCEPTION = false;
	}
	
	function SwallowErrors() {
	  SWALLOW_ERRORS = true;
	}
	
	function DontSwallowErrors() {
	  SWALLOW_ERRORS = false;
	}

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Cell = undefined;
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(84);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _debug = __webpack_require__(109);
	
	var _graphicpoint = __webpack_require__(111);
	
	var _renderable = __webpack_require__(93);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CellStateTypes = {
	  UNOCCUPIED: 'UNOCCUPIED',
	  OCCUPIED: 'OCCUPIED'
	};
	
	var Cell = exports.Cell = function (_Renderable) {
	  (0, _inherits3.default)(Cell, _Renderable);
	
	  function Cell(graphicPoint) {
	    (0, _classCallCheck3.default)(this, Cell);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (Cell.__proto__ || (0, _getPrototypeOf2.default)(Cell)).call(this));
	
	    _this._state = CellStateTypes.UNOCCUPIED;
	    _this._color = null;
	    _this._graphicPoint = graphicPoint;
	    return _this;
	  }
	
	  (0, _createClass3.default)(Cell, [{
	    key: 'placeTile',
	    value: function placeTile(color) {
	      var _this2 = this;
	
	      (0, _debug.Assert)(!this.isOccupied, 'Attempt to place tile on occupied cell', function () {
	        return _this2.toConsoleOutput();
	      });
	      this._state = CellStateTypes.OCCUPIED;
	      this._color = color;
	    }
	  }, {
	    key: 'removeTile',
	    value: function removeTile() {
	      var _this3 = this;
	
	      (0, _debug.Assert)(this.isOccupied, 'Attempt to remove tile from unoccupied cell', function () {
	        return _this3.toConsoleOutput();
	      });
	      this._state = CellStateTypes.UNOCCUPIED;
	      this._color = null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var div = document.createElement('div');
	      div.className = 'hex ';
	      if (this.isOccupied) {
	        div.className += 'occupied ';
	        if (this._color) {
	          div.className += this._color;
	        }
	      } else {
	        div.className += 'unoccupied ';
	      }
	      div.style.top = this._graphicPoint.row + 'px';
	      div.style.left = this._graphicPoint.col + 'px';
	      return div;
	    }
	  }, {
	    key: 'log',
	    value: function log() {
	      return [this._state, this._color];
	    }
	  }, {
	    key: 'toConsoleOutput',
	    value: function toConsoleOutput() {
	      return;
	    }
	  }, {
	    key: 'isOccupied',
	    get: function get() {
	      return this._state === CellStateTypes.OCCUPIED;
	    }
	  }, {
	    key: 'color',
	    get: function get() {
	      if (this._color == null) {
	        throw 'Called get color on unoccupied cell';
	      }
	      return this._color;
	    }
	  }]);
	  return Cell;
	}(_renderable.Renderable);

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GraphicPoint = undefined;
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(84);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _rowcolpair = __webpack_require__(127);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var GraphicPoint = exports.GraphicPoint = function (_RowColPair) {
	  (0, _inherits3.default)(GraphicPoint, _RowColPair);

	  function GraphicPoint() {
	    (0, _classCallCheck3.default)(this, GraphicPoint);
	    return (0, _possibleConstructorReturn3.default)(this, (GraphicPoint.__proto__ || (0, _getPrototypeOf2.default)(GraphicPoint)).apply(this, arguments));
	  }

	  return GraphicPoint;
	}(_rowcolpair.RowColPair);

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Point = undefined;
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(84);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _offset = __webpack_require__(113);
	
	var _rowcolpair = __webpack_require__(127);
	
	var _board = __webpack_require__(108);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Point = exports.Point = function (_RowColPair) {
	  (0, _inherits3.default)(Point, _RowColPair);
	
	  function Point() {
	    (0, _classCallCheck3.default)(this, Point);
	    return (0, _possibleConstructorReturn3.default)(this, (Point.__proto__ || (0, _getPrototypeOf2.default)(Point)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(Point, [{
	    key: 'plus',
	    value: function plus(delta) {
	      return (0, _board.addOffset)(this, delta);
	    }
	  }]);
	  return Point;
	}(_rowcolpair.RowColPair);

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Offset = undefined;
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(84);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _rowcolpair = __webpack_require__(127);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Offset = exports.Offset = function (_RowColPair) {
	  (0, _inherits3.default)(Offset, _RowColPair);

	  function Offset() {
	    (0, _classCallCheck3.default)(this, Offset);
	    return (0, _possibleConstructorReturn3.default)(this, (Offset.__proto__ || (0, _getPrototypeOf2.default)(Offset)).apply(this, arguments));
	  }

	  return Offset;
	}(_rowcolpair.RowColPair);

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Move = undefined;
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _debug = __webpack_require__(109);
	
	var _board = __webpack_require__(108);
	
	var _pieceplacement = __webpack_require__(115);
	
	var _line = __webpack_require__(135);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Move = exports.Move = function () {
	  function Move(piecePlacement) {
	    (0, _classCallCheck3.default)(this, Move);
	
	    this._piecePlacement = piecePlacement;
	    this._applied = false;
	    this._linesCalculated = false;
	    this._linesAreCleared = false;
	    this._lines = [];
	  }
	
	  (0, _createClass3.default)(Move, [{
	    key: 'clearLines',
	    value: function clearLines(board) {
	      var _this = this;
	
	      (0, _debug.Assert)(!this._linesAreCleared, 'clearLines called on move with lines already cleared', function () {
	        return _this.log();
	      });
	      if (!this._linesCalculated) {
	        this._lines = (0, _line.checkAllLines)(board);
	        this._linesCalculated = true;
	      }
	      (0, _line.clearLines)(this._lines, board);
	      this._linesAreCleared = true;
	    }
	  }, {
	    key: 'unclearLines',
	    value: function unclearLines(board) {
	      var _this2 = this;
	
	      (0, _debug.Assert)(this._linesAreCleared, 'unclearLines called on move with lines not cleared', function () {
	        return _this2.log();
	      });
	      (0, _line.unclearLines)(this._lines, board);
	      this._linesAreCleared = false;
	    }
	  }, {
	    key: 'getScoreIncrease',
	    value: function getScoreIncrease() {
	      var _this3 = this;
	
	      (0, _debug.Assert)(this._linesAreCleared, 'getScoreIncrease called before clearLines', function () {
	        return _this3.log();
	      });
	      var scoreIncrease = 0;
	      var lineLengths = this._lines.map(function (line) {
	        return line.colors.length;
	      }).sort();
	      var lineCount = lineLengths.length;
	
	      lineLengths.forEach(function (len, i) {
	        scoreIncrease += 10 * len * (lineCount + 1) * Math.max(1, Math.pow(i, 1.2));
	      });
	      return Math.floor(scoreIncrease);
	    }
	  }, {
	    key: 'setApplied',
	    value: function setApplied(applied) {
	      this._applied = applied;
	    }
	  }, {
	    key: 'log',
	    value: function log() {
	      return this._piecePlacement.log();
	    }
	  }, {
	    key: 'piecePlacement',
	    get: function get() {
	      return this._piecePlacement;
	    }
	  }, {
	    key: 'applied',
	    get: function get() {
	      return this._applied;
	    }
	  }]);
	  return Move;
	}();

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PiecePlacement = undefined;
	
	var _regenerator = __webpack_require__(94);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _getIterator2 = __webpack_require__(98);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _cell = __webpack_require__(110);
	
	var _point = __webpack_require__(112);
	
	var _piece = __webpack_require__(116);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PiecePlacement = exports.PiecePlacement = function () {
	  function PiecePlacement(piece, placement) {
	    (0, _classCallCheck3.default)(this, PiecePlacement);
	
	    this._piece = piece;
	    this._placement = placement;
	  }
	
	  (0, _createClass3.default)(PiecePlacement, [{
	    key: 'points',
	    value: _regenerator2.default.mark(function points() {
	      var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, offset;
	
	      return _regenerator2.default.wrap(function points$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              _iteratorNormalCompletion = true;
	              _didIteratorError = false;
	              _iteratorError = undefined;
	              _context.prev = 3;
	              _iterator = (0, _getIterator3.default)(this._piece.offsets());
	
	            case 5:
	              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
	                _context.next = 12;
	                break;
	              }
	
	              offset = _step.value;
	              _context.next = 9;
	              return this._placement.plus(offset);
	
	            case 9:
	              _iteratorNormalCompletion = true;
	              _context.next = 5;
	              break;
	
	            case 12:
	              _context.next = 18;
	              break;
	
	            case 14:
	              _context.prev = 14;
	              _context.t0 = _context['catch'](3);
	              _didIteratorError = true;
	              _iteratorError = _context.t0;
	
	            case 18:
	              _context.prev = 18;
	              _context.prev = 19;
	
	              if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	              }
	
	            case 21:
	              _context.prev = 21;
	
	              if (!_didIteratorError) {
	                _context.next = 24;
	                break;
	              }
	
	              throw _iteratorError;
	
	            case 24:
	              return _context.finish(21);
	
	            case 25:
	              return _context.finish(18);
	
	            case 26:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, points, this, [[3, 14, 18, 26], [19,, 21, 25]]);
	    })
	  }, {
	    key: 'allPointsPass',
	    value: function allPointsPass(predicate) {
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;
	
	      try {
	        for (var _iterator2 = (0, _getIterator3.default)(this.points()), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var tilePlacement = _step2.value;
	
	          if (!predicate(tilePlacement)) {
	            return false;
	          }
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }
	
	      return true;
	    }
	  }, {
	    key: 'placeOnCells',
	    value: function placeOnCells(getCell) {
	      var color = this._piece.color;
	      this._applyToCells(getCell, function (cell) {
	        return cell.placeTile(color);
	      });
	    }
	  }, {
	    key: 'removeFromCells',
	    value: function removeFromCells(getCell) {
	      this._applyToCells(getCell, function (cell) {
	        return cell.removeTile();
	      });
	    }
	  }, {
	    key: '_applyToCells',
	    value: function _applyToCells(getCell, cellMutator) {
	      var _iteratorNormalCompletion3 = true;
	      var _didIteratorError3 = false;
	      var _iteratorError3 = undefined;
	
	      try {
	        for (var _iterator3 = (0, _getIterator3.default)(this.points()), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	          var point = _step3.value;
	
	          cellMutator(getCell(point));
	        }
	      } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion3 && _iterator3.return) {
	            _iterator3.return();
	          }
	        } finally {
	          if (_didIteratorError3) {
	            throw _iteratorError3;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'log',
	    value: function log() {
	      return {
	        piece: this._piece.log(),
	        placement: this._placement.log()
	      };
	    }
	  }, {
	    key: 'piece',
	    get: function get() {
	      return this._piece;
	    }
	  }, {
	    key: 'placement',
	    get: function get() {
	      return this._placement;
	    }
	  }]);
	  return PiecePlacement;
	}();
	
	;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Piece = undefined;
	
	var _regenerator = __webpack_require__(94);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _getIterator2 = __webpack_require__(98);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(84);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _cell = __webpack_require__(110);
	
	var _offset = __webpack_require__(113);
	
	var _pieceplacement = __webpack_require__(115);
	
	var _point = __webpack_require__(112);
	
	var _renderable = __webpack_require__(93);
	
	var _hexgraphicutils = __webpack_require__(117);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ORIGIN = new _point.Point(0, 0);
	
	var Piece = exports.Piece = function (_Renderable) {
	  (0, _inherits3.default)(Piece, _Renderable);
	
	  function Piece(offsets, color, alias, code) {
	    (0, _classCallCheck3.default)(this, Piece);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (Piece.__proto__ || (0, _getPrototypeOf2.default)(Piece)).call(this));
	
	    _this._offsets = offsets;
	    _this._color = color;
	    _this._alias = alias;
	    _this._code = code;
	
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	      for (var _iterator = (0, _getIterator3.default)(_this._offsets), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var offset = _step.value;
	
	        // const pointOnBoard = ORIGIN.plus(offset);
	        var row = offset.row;
	        var col = offset.col;
	        var point = new _point.Point(row, col);
	        var graphicPoint = (0, _hexgraphicutils.graphicPointOnBoard)(point);
	        var cell = new _cell.Cell(graphicPoint);
	        cell.placeTile(_this._color);
	        _this.addChild(cell);
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }
	
	    return _this;
	  }
	
	  (0, _createClass3.default)(Piece, [{
	    key: 'offsets',
	    value: _regenerator2.default.mark(function offsets() {
	      var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, offset;
	
	      return _regenerator2.default.wrap(function offsets$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              _iteratorNormalCompletion2 = true;
	              _didIteratorError2 = false;
	              _iteratorError2 = undefined;
	              _context.prev = 3;
	              _iterator2 = (0, _getIterator3.default)(this._offsets);
	
	            case 5:
	              if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
	                _context.next = 12;
	                break;
	              }
	
	              offset = _step2.value;
	              _context.next = 9;
	              return offset;
	
	            case 9:
	              _iteratorNormalCompletion2 = true;
	              _context.next = 5;
	              break;
	
	            case 12:
	              _context.next = 18;
	              break;
	
	            case 14:
	              _context.prev = 14;
	              _context.t0 = _context['catch'](3);
	              _didIteratorError2 = true;
	              _iteratorError2 = _context.t0;
	
	            case 18:
	              _context.prev = 18;
	              _context.prev = 19;
	
	              if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                _iterator2.return();
	              }
	
	            case 21:
	              _context.prev = 21;
	
	              if (!_didIteratorError2) {
	                _context.next = 24;
	                break;
	              }
	
	              throw _iteratorError2;
	
	            case 24:
	              return _context.finish(21);
	
	            case 25:
	              return _context.finish(18);
	
	            case 26:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, offsets, this, [[3, 14, 18, 26], [19,, 21, 25]]);
	    })
	  }, {
	    key: 'getPlacement',
	    value: function getPlacement(anchor) {
	      return new _pieceplacement.PiecePlacement(this, anchor);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var node = document.createElement('div');
	      node.className = 'piece';
	      var _iteratorNormalCompletion3 = true;
	      var _didIteratorError3 = false;
	      var _iteratorError3 = undefined;
	
	      try {
	        for (var _iterator3 = (0, _getIterator3.default)(this.children()), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	          var child = _step3.value;
	
	          node.appendChild(child.render());
	        }
	      } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion3 && _iterator3.return) {
	            _iterator3.return();
	          }
	        } finally {
	          if (_didIteratorError3) {
	            throw _iteratorError3;
	          }
	        }
	      }
	
	      return node;
	    }
	  }, {
	    key: 'log',
	    value: function log() {
	      return this._alias;
	    }
	  }, {
	    key: 'color',
	    get: function get() {
	      return this._color;
	    }
	  }, {
	    key: 'code',
	    get: function get() {
	      return this._code;
	    }
	  }]);
	  return Piece;
	}(_renderable.Renderable);

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.graphicPointOnBoard = graphicPointOnBoard;
	
	var _graphicpoint = __webpack_require__(111);
	
	var _point = __webpack_require__(112);
	
	var _board = __webpack_require__(108);
	
	var MAX_ROW_WIDTH = 9;
	var ROW_OFFSET = 40;
	var COL_OFFSET = 47;
	var HALF_COL_OFFSET = COL_OFFSET / 2;
	
	function graphicPointOnBoard(point) {
	  var row = point.row;
	  var col = point.col;
	  var rowWidth = _board.ROW_WIDTHS[row];
	  var colIndentation = MAX_ROW_WIDTH - rowWidth;
	  var graphicColIndentation = HALF_COL_OFFSET * colIndentation;
	  var colOffset = COL_OFFSET * col;
	  var graphicCol = graphicColIndentation + colOffset;
	  var graphicRow = ROW_OFFSET * row;
	  return new _graphicpoint.GraphicPoint(graphicRow, graphicCol);
	}

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MoveStack = undefined;
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _debug = __webpack_require__(109);
	
	var _move = __webpack_require__(114);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MoveStack = exports.MoveStack = function () {
	  function MoveStack() {
	    (0, _classCallCheck3.default)(this, MoveStack);
	
	    this._moves = [];
	  }
	
	  (0, _createClass3.default)(MoveStack, [{
	    key: 'push',
	    value: function push(move) {
	      this._moves.push(move);
	    }
	  }, {
	    key: 'pop',
	    value: function pop(move) {
	      var popped = this._moves.pop();
	      (0, _debug.Assert)(popped === move, 'Unexpected popped value from MoveStack: ' + '[expected, actual]', function () {
	        return [move, popped];
	      });
	    }
	  }, {
	    key: 'isEmpty',
	    value: function isEmpty() {
	      return this._moves.length === 0;
	    }
	  }, {
	    key: 'flush',
	    value: function flush() {
	      this._moves = [];
	    }
	  }]);
	  return MoveStack;
	}();
	
	;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Tray = undefined;
	
	var _getIterator2 = __webpack_require__(98);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(84);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _debug = __webpack_require__(109);
	
	var _move = __webpack_require__(114);
	
	var _piecedefinitions = __webpack_require__(120);
	
	var _piece = __webpack_require__(116);
	
	var _renderable = __webpack_require__(93);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _TRAY_SIZE = 3;
	
	var Tray = exports.Tray = function (_Renderable) {
	  (0, _inherits3.default)(Tray, _Renderable);
	
	  function Tray() {
	    (0, _classCallCheck3.default)(this, Tray);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (Tray.__proto__ || (0, _getPrototypeOf2.default)(Tray)).call(this));
	
	    _this._pieces = new Array(_TRAY_SIZE).fill().map(function (_, ii) {
	      return _this._getNextPiece(ii);
	    });
	    return _this;
	  }
	
	  (0, _createClass3.default)(Tray, [{
	    key: '_getNextPiece',
	    value: function _getNextPiece(ii) {
	      return _piecedefinitions.PieceDefinitions.randomPiece();
	    }
	  }, {
	    key: 'forEachPiece',
	    value: function forEachPiece(callback) {
	      this._pieces.forEach(callback);
	    }
	  }, {
	    key: 'isValidCommit',
	    value: function isValidCommit(move) {
	      var movePiece = move.piecePlacement.piece;
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = (0, _getIterator3.default)(this._pieces), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var trayPiece = _step.value;
	
	          if (trayPiece === movePiece) {
	            return true;
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	
	      return false;
	    }
	  }, {
	    key: '_replacePiece',
	    value: function _replacePiece(i) {
	      this._pieces[i] = this._getNextPiece(i);
	    }
	  }, {
	    key: 'commitMove',
	    value: function commitMove(move) {
	      var _this2 = this;
	
	      var movePiece = move.piecePlacement.piece;
	      var ii = -1;
	      this._pieces.forEach(function (trayPiece, i) {
	        if (movePiece === trayPiece) {
	          ii = i;
	        }
	      });
	      (0, _debug.Assert)(ii !== -1, 'Cannot commit invalid move to tray', function () {
	        return _this2.log();
	      });
	      this._replacePiece(ii);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var node = document.createElement('div');
	      node.className = 'tray';
	
	      this._pieces.map(function (piece, ii) {
	        var pieceNode = piece.render();
	        pieceNode.style.left = 135 * ii + 'px';
	        node.appendChild(pieceNode);
	      });
	      return node;
	    }
	  }, {
	    key: 'log',
	    value: function log() {
	      if (!this._pieces) {
	        return 'uninitialized';
	      }
	      return this._pieces.map(function (piece) {
	        return piece.log();
	      });
	    }
	  }, {
	    key: 'encode',
	    value: function encode() {
	      return this._pieces.map(function (piece) {
	        return piece.code;
	      }).join('');
	    }
	  }]);
	  return Tray;
	}(_renderable.Renderable);
	
	;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PieceDefinitions = undefined;
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _randomItemInNonEmptyArray = __webpack_require__(121);
	
	var _piece = __webpack_require__(116);
	
	var _offset = __webpack_require__(113);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _pieceDefinitions = [
	// -------------- GREEN -------------- //
	[new _piece.Piece([new _offset.Offset(0, 0), // ⬣ ⬣ ⬣ ⬣
	new _offset.Offset(0, 1), new _offset.Offset(0, 2), new _offset.Offset(0, 3)], 'green', 'line-horiz', '1'), new _piece.Piece([new _offset.Offset(0, 0), // ⬣
	new _offset.Offset(1, 1), //  ⬣
	new _offset.Offset(2, 2), //   ⬣
	new _offset.Offset(3, 3)], 'green', 'line-diag-down', '2'), new _piece.Piece([new _offset.Offset(0, 0), //     ⬣
	new _offset.Offset(1, 0), //    ⬣
	new _offset.Offset(2, 0), //   ⬣
	new _offset.Offset(3, 0)], 'green', 'line-diag-up', '3')],
	
	// -------------- PURPLE -------------- //
	
	[new _piece.Piece([new _offset.Offset(0, 0), //   ⬣
	new _offset.Offset(1, 0), //  ⬣ ⬣
	new _offset.Offset(1, 1), //   ⬣
	new _offset.Offset(2, 1)], 'purple', 'rhombus-vert', '4'), new _piece.Piece([new _offset.Offset(0, 0), //   ⬣ ⬣
	new _offset.Offset(0, 1), //  ⬣ ⬣
	new _offset.Offset(1, 0), //   
	new _offset.Offset(1, 1)], 'purple', 'rhombus-diag-up', '5'), new _piece.Piece([new _offset.Offset(0, 0), //   ⬣ ⬣
	new _offset.Offset(0, 1), //    ⬣ ⬣
	new _offset.Offset(1, 1), //   
	new _offset.Offset(1, 2)], 'purple', 'rhombus-diag-down', '6')],
	
	// -------------- YELLOW -------------- //
	
	[new _piece.Piece([new _offset.Offset(0, 0), //   ⬣ ⬣
	new _offset.Offset(0, 1), //  ⬣   ⬣
	new _offset.Offset(1, 0), //   
	new _offset.Offset(1, 2)], 'yellow', 'dome-d', '7'), new _piece.Piece([new _offset.Offset(0, 0), //  ⬣   ⬣
	new _offset.Offset(0, 2), //   ⬣ ⬣
	new _offset.Offset(1, 1), //   
	new _offset.Offset(1, 2)], 'yellow', 'dome-l', '8'), new _piece.Piece([new _offset.Offset(0, 0), //    ⬣
	new _offset.Offset(1, 1), //     ⬣
	new _offset.Offset(2, 0), // ⬣ ⬣
	new _offset.Offset(2, 1)], 'yellow', 'dome-ul', '9'), new _piece.Piece([new _offset.Offset(0, 0), //  ⬣
	new _offset.Offset(1, 0), // ⬣
	new _offset.Offset(2, 1), //  ⬣ ⬣
	new _offset.Offset(2, 2)], 'yellow', 'dome-ur', 'a'), new _piece.Piece([new _offset.Offset(0, 0), //  ⬣ ⬣
	new _offset.Offset(0, 1), //      ⬣
	new _offset.Offset(1, 2), //     ⬣
	new _offset.Offset(2, 2)], 'yellow', 'dome-dl', 'b'), new _piece.Piece([new _offset.Offset(0, 0), //  ⬣ ⬣
	new _offset.Offset(0, 1), // ⬣
	new _offset.Offset(1, 0), //. ⬣
	new _offset.Offset(2, 1)], 'yellow', 'dome-dr', 'c')],
	
	// ------------ YELLOWGREEN ----------- //
	
	[new _piece.Piece([new _offset.Offset(0, 0)], 'yellowgreen', 'singleton', 'd')],
	
	// -------------- ORANGE -------------- //
	
	[new _piece.Piece([new _offset.Offset(0, 0), //  ⬣
	new _offset.Offset(1, 0), // ⬣ ⬣ ⬣
	new _offset.Offset(1, 1), //   
	new _offset.Offset(1, 2)], 'orange', 'elbow-cc-r', 'e'), new _piece.Piece([new _offset.Offset(0, 0), // ⬣ ⬣ ⬣
	new _offset.Offset(0, 1), //     ⬣
	new _offset.Offset(0, 2), //   
	new _offset.Offset(1, 2)], 'orange', 'elbow-cc-l', 'f'), new _piece.Piece([new _offset.Offset(0, 1), //     ⬣
	new _offset.Offset(1, 0), // ⬣ ⬣
	new _offset.Offset(1, 1), //  ⬣ 
	new _offset.Offset(2, 1)], 'orange', 'elbow-cc-ur', 'g'), new _piece.Piece([new _offset.Offset(0, 0), // ⬣
	new _offset.Offset(1, 1), //  ⬣
	new _offset.Offset(2, 1), // ⬣ ⬣ 
	new _offset.Offset(2, 2)], 'orange', 'elbow-cc-ul', 'h'), new _piece.Piece([new _offset.Offset(0, 0), //  ⬣ ⬣
	new _offset.Offset(0, 1), //   ⬣
	new _offset.Offset(1, 1), //    ⬣
	new _offset.Offset(2, 2)], 'orange', 'elbow-cc-dr', 'i'), new _piece.Piece([new _offset.Offset(0, 0), //   ⬣
	new _offset.Offset(1, 0), //  ⬣ ⬣
	new _offset.Offset(1, 1), // ⬣
	new _offset.Offset(2, 0)], 'orange', 'elbow-cc-dl', 'j')],
	
	// --------------- PINK --------------- //
	
	[new _piece.Piece([new _offset.Offset(0, 0), //  ⬣ ⬣ ⬣
	new _offset.Offset(0, 1), //   ⬣
	new _offset.Offset(0, 2), //
	new _offset.Offset(1, 1)], 'pink', 'elbow-cw-r', 'k'), new _piece.Piece([new _offset.Offset(0, 1), //      ⬣
	new _offset.Offset(1, 0), //  ⬣ ⬣ ⬣
	new _offset.Offset(1, 1), //
	new _offset.Offset(1, 2)], 'pink', 'elbow-cw-l', 'l'), new _piece.Piece([new _offset.Offset(0, 0), //   ⬣
	new _offset.Offset(1, 0), //  ⬣
	new _offset.Offset(2, 0), // ⬣ ⬣
	new _offset.Offset(2, 1)], 'pink', 'elbow-cw-ur', 'm'), new _piece.Piece([new _offset.Offset(0, 0), // ⬣
	new _offset.Offset(1, 1), //  ⬣ ⬣
	new _offset.Offset(1, 2), //   ⬣
	new _offset.Offset(2, 2)], 'pink', 'elbow-cw-ul', 'n'), new _piece.Piece([new _offset.Offset(0, 0), //   ⬣
	new _offset.Offset(1, 0), //  ⬣ ⬣
	new _offset.Offset(1, 1), //      ⬣
	new _offset.Offset(2, 2)], 'pink', 'elbow-cw-dr', 'o'), new _piece.Piece([new _offset.Offset(0, 0), //  ⬣ ⬣
	new _offset.Offset(0, 1), //   ⬣
	new _offset.Offset(1, 1), //  ⬣
	new _offset.Offset(2, 1)], 'pink', 'elbow-cw-dl', 'p')]];
	
	var PieceDefinitions = exports.PieceDefinitions = function () {
	  function PieceDefinitions() {
	    (0, _classCallCheck3.default)(this, PieceDefinitions);
	  }
	
	  (0, _createClass3.default)(PieceDefinitions, null, [{
	    key: 'randomPiece',
	    value: function randomPiece() {
	      var pieceSet = (0, _randomItemInNonEmptyArray.randomItemInNonEmptyArray)(_pieceDefinitions);
	      var piece = (0, _randomItemInNonEmptyArray.randomItemInNonEmptyArray)(pieceSet);
	      return piece;
	    }
	  }, {
	    key: 'forEachDefinition',
	    value: function forEachDefinition(callback) {
	      var pieceSetCount = _pieceDefinitions.length;
	      _pieceDefinitions.forEach(function (pieceSet) {
	        var setSize = pieceSet.length;
	        var probability = 1 / (pieceSetCount * setSize);
	        pieceSet.forEach(function (piece) {
	          callback(piece, probability);
	        });
	      });
	    }
	  }]);
	  return PieceDefinitions;
	}();

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.randomItemInNonEmptyArray = randomItemInNonEmptyArray;
	
	var _randomItemInArray = __webpack_require__(122);
	
	var _randomItemInArray2 = _interopRequireDefault(_randomItemInArray);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function randomItemInNonEmptyArray(array) {
		var elem = (0, _randomItemInArray2.default)(array);
		if (elem === null || elem === undefined) {
			throw 'Array was empty';
		}
		return elem;
	}

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var randomNumberInRange = __webpack_require__(123);
	
	module.exports = function randomItemInArray (array) {
	
	  return array[
	    randomNumberInRange(
	      0,
	      array.length
	    )
	  ];
	
	}


/***/ },
/* 123 */
/***/ function(module, exports) {

	"use strict";
	
	var random = function (min, max) {
	  if (min === undefined) min = 0;
	  if (max === undefined) max = 100;
	  return Math.floor(Math.random() * (max - min)) + min;
	};
	
	exports["default"] = random;
	
	module.exports = exports.default

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HexDOM = undefined;
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var HexDOM = exports.HexDOM = function () {
	  (0, _createClass3.default)(HexDOM, null, [{
	    key: 'hookname',
	    get: function get() {
	      return 'HexDOM';
	    }
	  }]);
	
	  function HexDOM(document) {
	    (0, _classCallCheck3.default)(this, HexDOM);
	
	    this._document = document;
	  }
	
	  (0, _createClass3.default)(HexDOM, [{
	    key: 'getNode',
	    value: function getNode(nodeName) {
	      throw 'abstract';
	    }
	  }, {
	    key: 'setNode',
	    value: function setNode(node) {
	      var cls = this.constructor;
	      var hookname = cls.hookname;
	      var hook = document.getElementById(hookname);
	      if (this._oldChild) {
	        hook.removeChild(this._oldChild);
	      }
	      hook.appendChild(node);
	      this._oldChild = node;
	    }
	  }]);
	  return HexDOM;
	}();

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.StatusBar = undefined;
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(84);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _renderable = __webpack_require__(93);
	
	var _domutils = __webpack_require__(128);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var StatusBar = exports.StatusBar = function (_Renderable) {
	  (0, _inherits3.default)(StatusBar, _Renderable);
	
	  function StatusBar() {
	    (0, _classCallCheck3.default)(this, StatusBar);
	    return (0, _possibleConstructorReturn3.default)(this, (StatusBar.__proto__ || (0, _getPrototypeOf2.default)(StatusBar)).call(this));
	    // ...
	  }
	
	  (0, _createClass3.default)(StatusBar, [{
	    key: 'getNode',
	    value: function getNode() {
	      return (0, _domutils.makeDiv)(null, 'statusbar', 'Status Bar');
	    }
	  }, {
	    key: 'getKey',
	    value: function getKey() {
	      return 'statttttsss bar';
	    }
	  }, {
	    key: 'log',
	    value: function log() {
	      return 'status bar';
	    }
	  }]);
	  return StatusBar;
	}(_renderable.Renderable);

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.StandaloneDOM = undefined;
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(84);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _hexdom = __webpack_require__(124);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var StandaloneDOM = exports.StandaloneDOM = function (_HexDOM) {
	  (0, _inherits3.default)(StandaloneDOM, _HexDOM);
	
	  function StandaloneDOM() {
	    (0, _classCallCheck3.default)(this, StandaloneDOM);
	    return (0, _possibleConstructorReturn3.default)(this, (StandaloneDOM.__proto__ || (0, _getPrototypeOf2.default)(StandaloneDOM)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(StandaloneDOM, [{
	    key: 'getNode',
	    value: function getNode(nodeName) {
	      return this._document.getElementById(nodeName);
	    }
	  }]);
	  return StandaloneDOM;
	}(_hexdom.HexDOM);

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RowColPair = undefined;
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var RowColPair = exports.RowColPair = function () {
	  function RowColPair(row, col) {
	    (0, _classCallCheck3.default)(this, RowColPair);
	
	    this._row = row;
	    this._col = col;
	  }
	
	  (0, _createClass3.default)(RowColPair, [{
	    key: "log",
	    value: function log() {
	      return "(" + this.row + ", " + this.col + ")";
	    }
	  }, {
	    key: "row",
	    get: function get() {
	      return this._row;
	    }
	  }, {
	    key: "col",
	    get: function get() {
	      return this._col;
	    }
	  }]);
	  return RowColPair;
	}();

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.makeDiv = makeDiv;
	
	var _graphicpoint = __webpack_require__(111);
	
	function makeDiv(classNames, id, textContents, at) {
	  var elem = document.createElement('div');
	  if (id) {
	    elem.id = id;
	  }
	
	  classNames = classNames || [];
	  if (at) {
	    classNames.push('abs');
	  }
	
	  if (classNames.length > 0) {
	    elem.className = classNames.join(' ');
	  }
	
	  if (textContents) {
	    elem.appendChild(document.createTextNode(textContents));
	  }
	
	  if (at) {
	    elem.style.top = at.row + 'px';
	    elem.style.left = at.col + 'px';
	  }
	
	  return elem;
	}

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.StrategyStore = undefined;
	
	var _getIterator2 = __webpack_require__(98);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _strategy = __webpack_require__(130);
	
	var _randomheuristicstrategy = __webpack_require__(132);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// ---------------------------------
	
	var StrategyConfigs = [
	// First element is default
	new _strategy.StrategyConfig('Random', function (hook, debug) {
	  return new _randomheuristicstrategy.RandomHeuristicStrategy(hook, debug);
	})];
	
	// --------- Strategies ------------
	
	var StrategyStore = exports.StrategyStore = function () {
	  function StrategyStore() {
	    (0, _classCallCheck3.default)(this, StrategyStore);
	  }
	
	  (0, _createClass3.default)(StrategyStore, null, [{
	    key: 'strategyConfigs',
	    value: function strategyConfigs() {
	      return StrategyConfigs;
	    }
	  }, {
	    key: 'getDefaultStrategyConfig',
	    value: function getDefaultStrategyConfig() {
	      return StrategyConfigs[0];
	    }
	  }, {
	    key: 'getByName',
	    value: function getByName(name) {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = (0, _getIterator3.default)(StrategyStore.strategyConfigs()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var strategyConfig = _step.value;
	
	          if (strategyConfig.name === name) {
	            return strategyConfig;
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	
	      return null;
	    }
	  }]);
	  return StrategyStore;
	}();

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.StrategyConfig = exports.Strategy = undefined;
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _gameview = __webpack_require__(131);
	
	var _move = __webpack_require__(114);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Strategy = exports.Strategy = function () {
	  function Strategy(hook, debug) {
	    (0, _classCallCheck3.default)(this, Strategy);
	
	    this._hook = hook;
	    this._debug = debug;
	  }
	
	  (0, _createClass3.default)(Strategy, [{
	    key: 'chooseMove',
	    value: function chooseMove(view) {
	      throw 'abstract';
	    }
	  }, {
	    key: 'explain',
	    value: function explain(view) {
	      throw 'abstract';
	    }
	  }, {
	    key: 'show',
	    value: function show(view) {
	      if (this._shownElement != null) {
	        this._shownElement.remove();
	      }
	      var elem = this.explain(view);
	      this._hook.appendChild(elem);
	      this._shownElement = elem;
	    }
	  }]);
	  return Strategy;
	}();
	
	var StrategyConfig = exports.StrategyConfig = function () {
	  function StrategyConfig(name, strategyConstructor) {
	    (0, _classCallCheck3.default)(this, StrategyConfig);
	
	    this._name = name;
	    this._strategyConstructor = strategyConstructor;
	  }
	
	  (0, _createClass3.default)(StrategyConfig, [{
	    key: 'getStrategy',
	    value: function getStrategy(hook, debug) {
	      return this._strategyConstructor(hook, debug);
	    }
	  }, {
	    key: 'name',
	    get: function get() {
	      return this._name;
	    }
	  }]);
	  return StrategyConfig;
	}();

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _move = __webpack_require__(114);
	
	var _piece = __webpack_require__(116);

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RandomHeuristicStrategy = undefined;
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(84);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _gameview = __webpack_require__(131);
	
	var _heuristicstrategy = __webpack_require__(133);
	
	var _move = __webpack_require__(114);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var RandomHeuristicStrategy = exports.RandomHeuristicStrategy = function (_HeuristicStrategy) {
	  (0, _inherits3.default)(RandomHeuristicStrategy, _HeuristicStrategy);
	
	  function RandomHeuristicStrategy() {
	    (0, _classCallCheck3.default)(this, RandomHeuristicStrategy);
	    return (0, _possibleConstructorReturn3.default)(this, (RandomHeuristicStrategy.__proto__ || (0, _getPrototypeOf2.default)(RandomHeuristicStrategy)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(RandomHeuristicStrategy, [{
	    key: 'heuristic',
	    value: function heuristic(view, move) {
	      return 100 * Math.random();
	    }
	  }]);
	  return RandomHeuristicStrategy;
	}(_heuristicstrategy.HeuristicStrategy);

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HeuristicStrategy = undefined;
	
	var _getPrototypeOf = __webpack_require__(2);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(84);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _gameview = __webpack_require__(131);
	
	var _move = __webpack_require__(114);
	
	var _strategy = __webpack_require__(130);
	
	var _domutils = __webpack_require__(128);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ROWS_EXPANDED_BY_DEFAULT = 3;
	var TOGGLE_ARROW_EXPANDED = '▼';
	var TOGGLE_ARROW_COLLAPSED = '▶';
	
	var HeuristicStrategy = exports.HeuristicStrategy = function (_Strategy) {
	  (0, _inherits3.default)(HeuristicStrategy, _Strategy);
	
	  function HeuristicStrategy() {
	    (0, _classCallCheck3.default)(this, HeuristicStrategy);
	    return (0, _possibleConstructorReturn3.default)(this, (HeuristicStrategy.__proto__ || (0, _getPrototypeOf2.default)(HeuristicStrategy)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(HeuristicStrategy, [{
	    key: 'heuristic',
	    value: function heuristic(view, move) {
	      throw 'abstract';
	    }
	  }, {
	    key: 'explain',
	    value: function explain(view) {
	      var _this2 = this;
	
	      var scoredMoves = this._getScoredMoves(view);
	      var explainDiv = (0, _domutils.makeDiv)(['ai-heuristic-explain']);
	      var table = document.createElement('table');
	
	      var headTR = document.createElement('tr');
	      var emptyTH = document.createElement('th');
	      var scoreTH = document.createElement('th');
	      scoreTH.appendChild((0, _domutils.makeDiv)(null, null, 'Score'));
	      var boardTH = document.createElement('th');
	      boardTH.appendChild((0, _domutils.makeDiv)(null, null, 'Board'));
	      headTR.appendChild(emptyTH);
	      headTR.appendChild(scoreTH);
	      headTR.appendChild(boardTH);
	      table.appendChild(headTR);
	
	      scoredMoves.forEach(function (scoredMove, i) {
	        var expanded = i < ROWS_EXPANDED_BY_DEFAULT;
	
	        var tr = document.createElement('tr');
	        tr.className = expanded ? 'expanded' : 'collapsed';
	
	        var score = scoredMove.score;
	        var move = scoredMove.move;
	
	        var toggleTD = document.createElement('td');
	        var toggleA = document.createElement('a');
	        var toggleDiv = (0, _domutils.makeDiv)(['toggle'], null, expanded ? TOGGLE_ARROW_EXPANDED : TOGGLE_ARROW_COLLAPSED);
	        toggleA.appendChild(toggleDiv);
	        toggleA.href = '#';
	        toggleA.onclick = function () {
	          expanded = !expanded;
	          toggleA.removeChild(toggleDiv);
	          toggleDiv = (0, _domutils.makeDiv)(['toggle'], null, expanded ? TOGGLE_ARROW_EXPANDED : TOGGLE_ARROW_COLLAPSED);
	          toggleA.appendChild(toggleDiv);
	          tr.className = expanded ? 'expanded' : 'collapsed';
	        };
	        toggleTD.appendChild(toggleA);
	
	        var scoreTD = document.createElement('td');
	        scoreTD.appendChild((0, _domutils.makeDiv)(['ai-heuristic-explain-score-div'], null, score.toFixed(2)));
	
	        var moveTD = document.createElement('td');
	        var moveDiv = (0, _domutils.makeDiv)(['move']);
	        moveDiv.appendChild(_this2._getGameElementWithMoveApplied(view, move));
	        moveTD.appendChild(moveDiv);
	
	        tr.appendChild(toggleTD);
	        tr.appendChild(scoreTD);
	        tr.appendChild(moveTD);
	        table.appendChild(tr);
	      });
	      explainDiv.appendChild(table);
	      return explainDiv;
	    }
	  }, {
	    key: '_getGameElementWithMoveApplied',
	    value: function _getGameElementWithMoveApplied(view, move) {
	      var elem = (0, _domutils.makeDiv)();
	      view.withMoveApplied(move, function () {
	        elem = view.render();
	      });
	      return elem;
	    }
	  }, {
	    key: 'chooseMove',
	    value: function chooseMove(view) {
	      var scoredMoves = this._getScoredMoves(view);
	      return scoredMoves[0].move;
	    }
	  }, {
	    key: '_getScoredMoves',
	    value: function _getScoredMoves(view) {
	      var _this3 = this;
	
	      var encoded = view.encode();
	      if (this._cachedHeuristicsCode != null && this._cachedHeuristicsCode === encoded && this._cachedHeuristics != null) {
	        return this._cachedHeuristics;
	      }
	
	      var scoredMoves = [];
	      view.withEachValidMoveApplied(function (move) {
	        var score = _this3.heuristic(view, move);
	        scoredMoves.push({ move: move, score: score });
	      });
	      scoredMoves.sort(function (a, b) {
	        return a.score > b.score ? -1 : 1;
	      });
	
	      this._cachedHeuristicsCode = encoded;
	      this._cachedHeuristics = scoredMoves;
	      return this._cachedHeuristics;
	    }
	  }, {
	    key: '_logScoredMove',
	    value: function _logScoredMove(scoredMove) {
	      var score = scoredMove.score;
	      var move = scoredMove.move;
	      var piecePlacement = move.piecePlacement;
	      var piece = piecePlacement.piece;
	      var placement = piecePlacement.placement;
	      return [score, piece.log(), placement.log()];
	    }
	  }, {
	    key: '_logScoredMoves',
	    value: function _logScoredMoves(scoredMoves) {
	      var _this4 = this;
	
	      console.log('Scored', scoredMoves.map(function (scoredMove) {
	        return _this4._logScoredMove(scoredMove);
	      }));
	    }
	  }]);
	  return HeuristicStrategy;
	}(_strategy.Strategy);

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GameStateViewer = undefined;
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _gamestate = __webpack_require__(107);
	
	var _gameview = __webpack_require__(131);
	
	var _move = __webpack_require__(114);
	
	var _piece = __webpack_require__(116);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var GameStateViewer = exports.GameStateViewer = function GameStateViewer(state) {
	  (0, _classCallCheck3.default)(this, GameStateViewer);
	
	  this.gameIsOver = function () {
	    return state.gameIsOver();
	  };
	
	  this.hasUnknowns = function () {
	    return state.hasUnknowns();
	  };
	
	  this.withEachUnknownResolved = function (callback) {
	    return state.withEachUnknownResolved(callback);
	  };
	
	  this.withEachValidMoveApplied = function (callback) {
	    return state.withEachValidMoveApplied(callback);
	  };
	
	  this.withMoveApplied = function (move, callback) {
	    return state.withMoveApplied(move, callback);
	  };
	
	  this.commitMove = function (move) {
	    return state.commitMove(move);
	  };
	
	  this.forEachPieceInTray = function (callback) {
	    return state.forEachPieceInTray(callback);
	  };
	
	  this.render = function () {
	    return state.render();
	  };
	
	  this.encode = function () {
	    return state.encode();
	  };
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Line = undefined;
	
	var _getIterator2 = __webpack_require__(98);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _regenerator = __webpack_require__(94);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _classCallCheck2 = __webpack_require__(28);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(29);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	exports.checkAllLines = checkAllLines;
	exports.clearLines = clearLines;
	exports.unclearLines = unclearLines;
	
	var _board = __webpack_require__(108);
	
	var _offset = __webpack_require__(113);
	
	var _point = __webpack_require__(112);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var HorizontalOffset = new _offset.Offset(0, 1);
	var UpRightOffset = new _offset.Offset(-1, 0);
	var DownRightOffset = new _offset.Offset(1, 1);
	
	function getDirectionOffset(direction) {
	  switch (direction) {
	    case 'Horizontal':
	      return HorizontalOffset;
	    case 'UpRight':
	      return UpRightOffset;
	    case 'DownRight':
	      return DownRightOffset;
	    default:
	      throw 'Invalid';
	  }
	}
	
	var Line = exports.Line = function () {
	  function Line(start, direction) {
	    (0, _classCallCheck3.default)(this, Line);
	
	    this._start = start;
	    this._direction = direction;
	    this._offset = getDirectionOffset(direction);
	  }
	
	  (0, _createClass3.default)(Line, [{
	    key: '_points',
	    value: _regenerator2.default.mark(function _points() {
	      var point;
	      return _regenerator2.default.wrap(function _points$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              point = this._start;
	
	            case 1:
	              if (!(0, _board.pointInBounds)(point)) {
	                _context.next = 7;
	                break;
	              }
	
	              _context.next = 4;
	              return point;
	
	            case 4:
	              point = point.plus(this._offset);
	              _context.next = 1;
	              break;
	
	            case 7:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, _points, this);
	    })
	  }, {
	    key: 'isComplete',
	    value: function isComplete(board) {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = (0, _getIterator3.default)(this._points()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var point = _step.value;
	
	          if (!board.cellOccupiedAt(point)) {
	            return false;
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	
	      return true;
	    }
	  }, {
	    key: 'getClearHistory',
	    value: function getClearHistory(board) {
	      var colors = [];
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;
	
	      try {
	        for (var _iterator2 = (0, _getIterator3.default)(this._points()), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var point = _step2.value;
	
	          var cell = board.getCellAt(point);
	          colors.push(cell.color);
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }
	
	      return {
	        line: this,
	        colors: colors
	      };
	    }
	  }, {
	    key: 'clear',
	    value: function clear(board) {
	      var _iteratorNormalCompletion3 = true;
	      var _didIteratorError3 = false;
	      var _iteratorError3 = undefined;
	
	      try {
	        for (var _iterator3 = (0, _getIterator3.default)(this._points()), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	          var point = _step3.value;
	
	          var cell = board.getCellAt(point);
	          if (cell.isOccupied) {
	            cell.removeTile();
	          }
	        }
	      } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion3 && _iterator3.return) {
	            _iterator3.return();
	          }
	        } finally {
	          if (_didIteratorError3) {
	            throw _iteratorError3;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'unclear',
	    value: function unclear(board, colors) {
	      var i = 0;
	      var _iteratorNormalCompletion4 = true;
	      var _didIteratorError4 = false;
	      var _iteratorError4 = undefined;
	
	      try {
	        for (var _iterator4 = (0, _getIterator3.default)(this._points()), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	          var point = _step4.value;
	
	          var cell = board.getCellAt(point);
	          if (!cell.isOccupied) {
	            cell.placeTile(colors[i]);
	          }
	          i++;
	        }
	      } catch (err) {
	        _didIteratorError4 = true;
	        _iteratorError4 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion4 && _iterator4.return) {
	            _iterator4.return();
	          }
	        } finally {
	          if (_didIteratorError4) {
	            throw _iteratorError4;
	          }
	        }
	      }
	    }
	  }]);
	  return Line;
	}();
	
	function checkAllLines(board) {
	  var linesCleared = [];
	  var _iteratorNormalCompletion5 = true;
	  var _didIteratorError5 = false;
	  var _iteratorError5 = undefined;
	
	  try {
	    for (var _iterator5 = (0, _getIterator3.default)(Lines), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	      var _line = _step5.value;
	
	      if (_line.isComplete(board)) {
	        linesCleared.push(_line.getClearHistory(board));
	      }
	    }
	  } catch (err) {
	    _didIteratorError5 = true;
	    _iteratorError5 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion5 && _iterator5.return) {
	        _iterator5.return();
	      }
	    } finally {
	      if (_didIteratorError5) {
	        throw _iteratorError5;
	      }
	    }
	  }
	
	  return linesCleared;
	}
	
	function clearLines(lines, board) {
	  var _iteratorNormalCompletion6 = true;
	  var _didIteratorError6 = false;
	  var _iteratorError6 = undefined;
	
	  try {
	    for (var _iterator6 = (0, _getIterator3.default)(lines), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	      var lineClearHistory = _step6.value;
	
	      var _line2 = lineClearHistory.line;
	      _line2.clear(board);
	    }
	  } catch (err) {
	    _didIteratorError6 = true;
	    _iteratorError6 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion6 && _iterator6.return) {
	        _iterator6.return();
	      }
	    } finally {
	      if (_didIteratorError6) {
	        throw _iteratorError6;
	      }
	    }
	  }
	}
	
	function unclearLines(lines, board) {
	  var _iteratorNormalCompletion7 = true;
	  var _didIteratorError7 = false;
	  var _iteratorError7 = undefined;
	
	  try {
	    for (var _iterator7 = (0, _getIterator3.default)(lines), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
	      var lineClearHistory = _step7.value;
	
	      var _line3 = lineClearHistory.line;
	      var _colors = lineClearHistory.colors;
	      _line3.unclear(board, _colors);
	    }
	  } catch (err) {
	    _didIteratorError7 = true;
	    _iteratorError7 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion7 && _iterator7.return) {
	        _iterator7.return();
	      }
	    } finally {
	      if (_didIteratorError7) {
	        throw _iteratorError7;
	      }
	    }
	  }
	}
	
	var Lines = [new Line(new _point.Point(0, 0), 'Horizontal'), new Line(new _point.Point(1, 0), 'Horizontal'), new Line(new _point.Point(2, 0), 'Horizontal'), new Line(new _point.Point(3, 0), 'Horizontal'), new Line(new _point.Point(4, 0), 'Horizontal'), new Line(new _point.Point(5, 0), 'Horizontal'), new Line(new _point.Point(6, 0), 'Horizontal'), new Line(new _point.Point(7, 0), 'Horizontal'), new Line(new _point.Point(8, 0), 'Horizontal'), new Line(new _point.Point(0, 0), 'DownRight'), new Line(new _point.Point(1, 0), 'DownRight'), new Line(new _point.Point(2, 0), 'DownRight'), new Line(new _point.Point(3, 0), 'DownRight'), new Line(new _point.Point(4, 0), 'DownRight'), new Line(new _point.Point(0, 1), 'DownRight'), new Line(new _point.Point(0, 2), 'DownRight'), new Line(new _point.Point(0, 3), 'DownRight'), new Line(new _point.Point(0, 4), 'DownRight'), new Line(new _point.Point(4, 0), 'UpRight'), new Line(new _point.Point(5, 0), 'UpRight'), new Line(new _point.Point(6, 0), 'UpRight'), new Line(new _point.Point(7, 0), 'UpRight'), new Line(new _point.Point(8, 0), 'UpRight'), new Line(new _point.Point(8, 1), 'UpRight'), new Line(new _point.Point(8, 2), 'UpRight'), new Line(new _point.Point(8, 3), 'UpRight'), new Line(new _point.Point(8, 4), 'UpRight')];

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map