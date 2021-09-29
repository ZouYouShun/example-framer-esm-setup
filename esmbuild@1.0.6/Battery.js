var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module) => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};

// node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol2 = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol2 ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol2 ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol2 ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol2 ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol2 ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol2 ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol2 ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol2 ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol2 ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol2 ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol2 ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol2 ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol2 ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol2 ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol2 ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol2 ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol2 ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol2 ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type3) {
          return typeof type3 === "string" || typeof type3 === "function" || type3 === REACT_FRAGMENT_TYPE || type3 === REACT_CONCURRENT_MODE_TYPE || type3 === REACT_PROFILER_TYPE || type3 === REACT_STRICT_MODE_TYPE || type3 === REACT_SUSPENSE_TYPE || type3 === REACT_SUSPENSE_LIST_TYPE || typeof type3 === "object" && type3 !== null && (type3.$$typeof === REACT_LAZY_TYPE || type3.$$typeof === REACT_MEMO_TYPE || type3.$$typeof === REACT_PROVIDER_TYPE || type3.$$typeof === REACT_CONTEXT_TYPE || type3.$$typeof === REACT_FORWARD_REF_TYPE || type3.$$typeof === REACT_FUNDAMENTAL_TYPE || type3.$$typeof === REACT_RESPONDER_TYPE || type3.$$typeof === REACT_SCOPE_TYPE || type3.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type3 = object.type;
                switch (type3) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type3;
                  default:
                    var $$typeofType = type3 && type3.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment2 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal3 = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment2;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal3;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/prop-types/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/prop-types/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i2 = 0; i2 < 10; i2++) {
          test2["_" + String.fromCharCode(i2)] = i2;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
          return test2[n2];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s2 = 1; s2 < arguments.length; s2++) {
        from = Object(arguments[s2]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i2 = 0; i2 < symbols.length; i2++) {
            if (propIsEnumerable.call(from, symbols[i2])) {
              to[symbols[i2]] = from[symbols[i2]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = Function.call.bind(Object.prototype.hasOwnProperty);
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x2) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values4, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error3;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.");
                err.name = "Invariant Violation";
                throw err;
              }
              error3 = typeSpecs[typeSpecName](values4, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error3 = ex;
            }
            if (error3 && !(error3 instanceof Error)) {
              printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error3 + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");
            }
            if (error3 instanceof Error && !(error3.message in loggedTypeFailures)) {
              loggedTypeFailures[error3.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning("Failed " + location + " type: " + error3.message + (stack != null ? stack : ""));
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var checkPropTypes = require_checkPropTypes();
    var has = Function.call.bind(Object.prototype.hasOwnProperty);
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x2) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement5, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x2, y2) {
        if (x2 === y2) {
          return x2 !== 0 || 1 / x2 === 1 / y2;
        } else {
          return x2 !== x2 && y2 !== y2;
        }
      }
      function PropTypeError(message) {
        this.message = message;
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
                printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.");
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i2 = 0; i2 < propValue.length; i2++) {
            var error3 = typeChecker(propValue, i2, componentName, location, propFullName + "[" + i2 + "]", ReactPropTypesSecret);
            if (error3 instanceof Error) {
              return error3;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement5(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).");
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i2 = 0; i2 < expectedValues.length; i2++) {
            if (is(propValue, expectedValues[i2])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type3 = getPreciseType(value);
            if (type3 === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error3 = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error3 instanceof Error) {
                return error3;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
          var checker = arrayOfTypeCheckers[i2];
          if (typeof checker !== "function") {
            printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i2 + ".");
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          for (var i3 = 0; i3 < arrayOfTypeCheckers.length; i3++) {
            var checker2 = arrayOfTypeCheckers[i3];
            if (checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
              return null;
            }
          }
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (!checker) {
              continue;
            }
            var error3 = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error3) {
              return error3;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (!checker) {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
            }
            var error3 = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error3) {
              return error3;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement5(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type3 = getPreciseType(value);
        switch (type3) {
          case "array":
          case "object":
            return "an " + type3;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type3;
          default:
            return type3;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/@babel/runtime/helpers/interopRequireDefault.js
var require_interopRequireDefault = __commonJS({
  "node_modules/@babel/runtime/helpers/interopRequireDefault.js"(exports, module) {
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }
    module.exports = _interopRequireDefault;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }
});

// node_modules/@material-ui/utils/chainPropTypes.js
var require_chainPropTypes = __commonJS({
  "node_modules/@material-ui/utils/chainPropTypes.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = chainPropTypes4;
    function chainPropTypes4(propType1, propType2) {
      if (false) {
        return function() {
          return null;
        };
      }
      return function validate() {
        return propType1.apply(void 0, arguments) || propType2.apply(void 0, arguments);
      };
    }
  }
});

// node_modules/@babel/runtime/helpers/extends.js
var require_extends = __commonJS({
  "node_modules/@babel/runtime/helpers/extends.js"(exports, module) {
    function _extends3() {
      module.exports = _extends3 = Object.assign || function(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      module.exports["default"] = module.exports, module.exports.__esModule = true;
      return _extends3.apply(this, arguments);
    }
    module.exports = _extends3;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }
});

// node_modules/@babel/runtime/helpers/typeof.js
var require_typeof = __commonJS({
  "node_modules/@babel/runtime/helpers/typeof.js"(exports, module) {
    function _typeof3(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        module.exports = _typeof3 = function _typeof4(obj2) {
          return typeof obj2;
        };
        module.exports["default"] = module.exports, module.exports.__esModule = true;
      } else {
        module.exports = _typeof3 = function _typeof4(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
        module.exports["default"] = module.exports, module.exports.__esModule = true;
      }
      return _typeof3(obj);
    }
    module.exports = _typeof3;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }
});

// node_modules/@material-ui/utils/deepmerge.js
var require_deepmerge = __commonJS({
  "node_modules/@material-ui/utils/deepmerge.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isPlainObject = isPlainObject2;
    exports.default = deepmerge8;
    var _extends22 = _interopRequireDefault(require_extends());
    var _typeof22 = _interopRequireDefault(require_typeof());
    function isPlainObject2(item) {
      return item && (0, _typeof22.default)(item) === "object" && item.constructor === Object;
    }
    function deepmerge8(target, source) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
        clone: true
      };
      var output = options.clone ? (0, _extends22.default)({}, target) : target;
      if (isPlainObject2(target) && isPlainObject2(source)) {
        Object.keys(source).forEach(function(key) {
          if (key === "__proto__") {
            return;
          }
          if (isPlainObject2(source[key]) && key in target) {
            output[key] = deepmerge8(target[key], source[key], options);
          } else {
            output[key] = source[key];
          }
        });
      }
      return output;
    }
  }
});

// node_modules/@material-ui/utils/elementAcceptingRef.js
var require_elementAcceptingRef = __commonJS({
  "node_modules/@material-ui/utils/elementAcceptingRef.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _chainPropTypes = _interopRequireDefault(require_chainPropTypes());
    function isClassComponent(elementType) {
      var _elementType$prototyp = elementType.prototype, prototype = _elementType$prototyp === void 0 ? {} : _elementType$prototyp;
      return Boolean(prototype.isReactComponent);
    }
    function acceptingRef(props, propName, componentName, location, propFullName) {
      var element = props[propName];
      var safePropName = propFullName || propName;
      if (element == null) {
        return null;
      }
      var warningHint;
      var elementType = element.type;
      if (typeof elementType === "function" && !isClassComponent(elementType)) {
        warningHint = "Did you accidentally use a plain function component for an element instead?";
      }
      if (warningHint !== void 0) {
        return new Error("Invalid ".concat(location, " `").concat(safePropName, "` supplied to `").concat(componentName, "`. ") + "Expected an element that can hold a ref. ".concat(warningHint, " ") + "For more information see https://material-ui.com/r/caveat-with-refs-guide");
      }
      return null;
    }
    var elementAcceptingRef2 = (0, _chainPropTypes.default)(_propTypes.default.element, acceptingRef);
    elementAcceptingRef2.isRequired = (0, _chainPropTypes.default)(_propTypes.default.element.isRequired, acceptingRef);
    var _default = elementAcceptingRef2;
    exports.default = _default;
  }
});

// node_modules/@babel/runtime/helpers/interopRequireWildcard.js
var require_interopRequireWildcard = __commonJS({
  "node_modules/@babel/runtime/helpers/interopRequireWildcard.js"(exports, module) {
    var _typeof3 = require_typeof()["default"];
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = new WeakMap();
      var cacheNodeInterop = new WeakMap();
      return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") {
        return {
          "default": obj
        };
      }
      var cache3 = _getRequireWildcardCache(nodeInterop);
      if (cache3 && cache3.has(obj)) {
        return cache3.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache3) {
        cache3.set(obj, newObj);
      }
      return newObj;
    }
    module.exports = _interopRequireWildcard;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }
});

// node_modules/@material-ui/utils/elementTypeAcceptingRef.js
var require_elementTypeAcceptingRef = __commonJS({
  "node_modules/@material-ui/utils/elementTypeAcceptingRef.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _interopRequireWildcard = require_interopRequireWildcard();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var PropTypes18 = _interopRequireWildcard(require_prop_types());
    var _chainPropTypes = _interopRequireDefault(require_chainPropTypes());
    function isClassComponent(elementType) {
      var _elementType$prototyp = elementType.prototype, prototype = _elementType$prototyp === void 0 ? {} : _elementType$prototyp;
      return Boolean(prototype.isReactComponent);
    }
    function elementTypeAcceptingRef2(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var safePropName = propFullName || propName;
      if (propValue == null) {
        return null;
      }
      var warningHint;
      if (typeof propValue === "function" && !isClassComponent(propValue)) {
        warningHint = "Did you accidentally provide a plain function component instead?";
      }
      if (warningHint !== void 0) {
        return new Error("Invalid ".concat(location, " `").concat(safePropName, "` supplied to `").concat(componentName, "`. ") + "Expected an element type that can hold a ref. ".concat(warningHint, " ") + "For more information see https://material-ui.com/r/caveat-with-refs-guide");
      }
      return null;
    }
    var _default = (0, _chainPropTypes.default)(PropTypes18.elementType, elementTypeAcceptingRef2);
    exports.default = _default;
  }
});

// node_modules/@babel/runtime/helpers/defineProperty.js
var require_defineProperty = __commonJS({
  "node_modules/@babel/runtime/helpers/defineProperty.js"(exports, module) {
    function _defineProperty2(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    module.exports = _defineProperty2;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }
});

// node_modules/@material-ui/utils/exactProp.js
var require_exactProp = __commonJS({
  "node_modules/@material-ui/utils/exactProp.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = exactProp4;
    exports.specialProperty = void 0;
    var _defineProperty2 = _interopRequireDefault(require_defineProperty());
    var _extends3 = _interopRequireDefault(require_extends());
    var specialProperty = "exact-prop: \u200B";
    exports.specialProperty = specialProperty;
    function exactProp4(propTypes) {
      if (false) {
        return propTypes;
      }
      return (0, _extends3.default)({}, propTypes, (0, _defineProperty2.default)({}, specialProperty, function(props) {
        var unsupportedProps = Object.keys(props).filter(function(prop) {
          return !propTypes.hasOwnProperty(prop);
        });
        if (unsupportedProps.length > 0) {
          return new Error("The following props are not supported: ".concat(unsupportedProps.map(function(prop) {
            return "`".concat(prop, "`");
          }).join(", "), ". Please remove them."));
        }
        return null;
      }));
    }
  }
});

// node_modules/@material-ui/utils/formatMuiErrorMessage.js
var require_formatMuiErrorMessage = __commonJS({
  "node_modules/@material-ui/utils/formatMuiErrorMessage.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = formatMuiErrorMessage;
    function formatMuiErrorMessage(code) {
      var url = "https://material-ui.com/production-error/?code=" + code;
      for (var i2 = 1; i2 < arguments.length; i2 += 1) {
        url += "&args[]=" + encodeURIComponent(arguments[i2]);
      }
      return "Minified Material-UI error #" + code + "; visit " + url + " for the full message.";
    }
  }
});

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development2 = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var REACT_ELEMENT_TYPE = 60103;
        var REACT_PORTAL_TYPE = 60106;
        var REACT_FRAGMENT_TYPE = 60107;
        var REACT_STRICT_MODE_TYPE = 60108;
        var REACT_PROFILER_TYPE = 60114;
        var REACT_PROVIDER_TYPE = 60109;
        var REACT_CONTEXT_TYPE = 60110;
        var REACT_FORWARD_REF_TYPE = 60112;
        var REACT_SUSPENSE_TYPE = 60113;
        var REACT_SUSPENSE_LIST_TYPE = 60120;
        var REACT_MEMO_TYPE = 60115;
        var REACT_LAZY_TYPE = 60116;
        var REACT_BLOCK_TYPE = 60121;
        var REACT_SERVER_BLOCK_TYPE = 60122;
        var REACT_FUNDAMENTAL_TYPE = 60117;
        var REACT_SCOPE_TYPE = 60119;
        var REACT_OPAQUE_ID_TYPE = 60128;
        var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
        var REACT_OFFSCREEN_TYPE = 60130;
        var REACT_LEGACY_HIDDEN_TYPE = 60131;
        if (typeof Symbol === "function" && Symbol.for) {
          var symbolFor = Symbol.for;
          REACT_ELEMENT_TYPE = symbolFor("react.element");
          REACT_PORTAL_TYPE = symbolFor("react.portal");
          REACT_FRAGMENT_TYPE = symbolFor("react.fragment");
          REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
          REACT_PROFILER_TYPE = symbolFor("react.profiler");
          REACT_PROVIDER_TYPE = symbolFor("react.provider");
          REACT_CONTEXT_TYPE = symbolFor("react.context");
          REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
          REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
          REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
          REACT_MEMO_TYPE = symbolFor("react.memo");
          REACT_LAZY_TYPE = symbolFor("react.lazy");
          REACT_BLOCK_TYPE = symbolFor("react.block");
          REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
          REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
          REACT_SCOPE_TYPE = symbolFor("react.scope");
          REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
          REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
          REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
          REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
        }
        var enableScopeAPI = false;
        function isValidElementType(type3) {
          if (typeof type3 === "string" || typeof type3 === "function") {
            return true;
          }
          if (type3 === REACT_FRAGMENT_TYPE || type3 === REACT_PROFILER_TYPE || type3 === REACT_DEBUG_TRACING_MODE_TYPE || type3 === REACT_STRICT_MODE_TYPE || type3 === REACT_SUSPENSE_TYPE || type3 === REACT_SUSPENSE_LIST_TYPE || type3 === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
            return true;
          }
          if (typeof type3 === "object" && type3 !== null) {
            if (type3.$$typeof === REACT_LAZY_TYPE || type3.$$typeof === REACT_MEMO_TYPE || type3.$$typeof === REACT_PROVIDER_TYPE || type3.$$typeof === REACT_CONTEXT_TYPE || type3.$$typeof === REACT_FORWARD_REF_TYPE || type3.$$typeof === REACT_FUNDAMENTAL_TYPE || type3.$$typeof === REACT_BLOCK_TYPE || type3[0] === REACT_SERVER_BLOCK_TYPE) {
              return true;
            }
          }
          return false;
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type3 = object.type;
                switch (type3) {
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                  case REACT_SUSPENSE_LIST_TYPE:
                    return type3;
                  default:
                    var $$typeofType = type3 && type3.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment2 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal3 = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isConcurrentMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
              hasWarnedAboutDeprecatedIsConcurrentMode = true;
              console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment2;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal3;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is2 = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development2();
    }
  }
});

// node_modules/@material-ui/utils/getDisplayName.js
var require_getDisplayName = __commonJS({
  "node_modules/@material-ui/utils/getDisplayName.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getFunctionName = getFunctionName;
    exports.default = getDisplayName3;
    var _typeof22 = _interopRequireDefault(require_typeof());
    var _reactIs = require_react_is2();
    var fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
    function getFunctionName(fn) {
      var match = "".concat(fn).match(fnNameMatchRegex);
      var name = match && match[1];
      return name || "";
    }
    function getFunctionComponentName(Component3) {
      var fallback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      return Component3.displayName || Component3.name || getFunctionName(Component3) || fallback;
    }
    function getWrappedName(outerType, innerType, wrapperName) {
      var functionName = getFunctionComponentName(innerType);
      return outerType.displayName || (functionName !== "" ? "".concat(wrapperName, "(").concat(functionName, ")") : wrapperName);
    }
    function getDisplayName3(Component3) {
      if (Component3 == null) {
        return void 0;
      }
      if (typeof Component3 === "string") {
        return Component3;
      }
      if (typeof Component3 === "function") {
        return getFunctionComponentName(Component3, "Component");
      }
      if ((0, _typeof22.default)(Component3) === "object") {
        switch (Component3.$$typeof) {
          case _reactIs.ForwardRef:
            return getWrappedName(Component3, Component3.render, "ForwardRef");
          case _reactIs.Memo:
            return getWrappedName(Component3, Component3.type, "memo");
          default:
            return void 0;
        }
      }
      return void 0;
    }
  }
});

// node_modules/@material-ui/utils/HTMLElementType.js
var require_HTMLElementType = __commonJS({
  "node_modules/@material-ui/utils/HTMLElementType.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = HTMLElementType3;
    function HTMLElementType3(props, propName, componentName, location, propFullName) {
      if (false) {
        return null;
      }
      var propValue = props[propName];
      var safePropName = propFullName || propName;
      if (propValue == null) {
        return null;
      }
      if (propValue && propValue.nodeType !== 1) {
        return new Error("Invalid ".concat(location, " `").concat(safePropName, "` supplied to `").concat(componentName, "`. ") + "Expected an HTMLElement.");
      }
      return null;
    }
  }
});

// node_modules/@material-ui/utils/ponyfillGlobal.js
var require_ponyfillGlobal = __commonJS({
  "node_modules/@material-ui/utils/ponyfillGlobal.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
    exports.default = _default;
  }
});

// node_modules/@material-ui/utils/refType.js
var require_refType = __commonJS({
  "node_modules/@material-ui/utils/refType.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _propTypes = _interopRequireDefault(require_prop_types());
    var refType3 = _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]);
    var _default = refType3;
    exports.default = _default;
  }
});

// node_modules/@material-ui/utils/index.js
var require_utils = __commonJS({
  "node_modules/@material-ui/utils/index.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "chainPropTypes", {
      enumerable: true,
      get: function get3() {
        return _chainPropTypes.default;
      }
    });
    Object.defineProperty(exports, "deepmerge", {
      enumerable: true,
      get: function get3() {
        return _deepmerge.default;
      }
    });
    Object.defineProperty(exports, "elementAcceptingRef", {
      enumerable: true,
      get: function get3() {
        return _elementAcceptingRef.default;
      }
    });
    Object.defineProperty(exports, "elementTypeAcceptingRef", {
      enumerable: true,
      get: function get3() {
        return _elementTypeAcceptingRef.default;
      }
    });
    Object.defineProperty(exports, "exactProp", {
      enumerable: true,
      get: function get3() {
        return _exactProp.default;
      }
    });
    Object.defineProperty(exports, "formatMuiErrorMessage", {
      enumerable: true,
      get: function get3() {
        return _formatMuiErrorMessage.default;
      }
    });
    Object.defineProperty(exports, "getDisplayName", {
      enumerable: true,
      get: function get3() {
        return _getDisplayName.default;
      }
    });
    Object.defineProperty(exports, "HTMLElementType", {
      enumerable: true,
      get: function get3() {
        return _HTMLElementType.default;
      }
    });
    Object.defineProperty(exports, "ponyfillGlobal", {
      enumerable: true,
      get: function get3() {
        return _ponyfillGlobal.default;
      }
    });
    Object.defineProperty(exports, "refType", {
      enumerable: true,
      get: function get3() {
        return _refType.default;
      }
    });
    var _chainPropTypes = _interopRequireDefault(require_chainPropTypes());
    var _deepmerge = _interopRequireDefault(require_deepmerge());
    var _elementAcceptingRef = _interopRequireDefault(require_elementAcceptingRef());
    var _elementTypeAcceptingRef = _interopRequireDefault(require_elementTypeAcceptingRef());
    var _exactProp = _interopRequireDefault(require_exactProp());
    var _formatMuiErrorMessage = _interopRequireDefault(require_formatMuiErrorMessage());
    var _getDisplayName = _interopRequireDefault(require_getDisplayName());
    var _HTMLElementType = _interopRequireDefault(require_HTMLElementType());
    var _ponyfillGlobal = _interopRequireDefault(require_ponyfillGlobal());
    var _refType = _interopRequireDefault(require_refType());
  }
});

// node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development3 = __commonJS({
  "node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol2 = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol2 ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol2 ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol2 ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol2 ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol2 ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol2 ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol2 ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol2 ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol2 ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol2 ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol2 ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol2 ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol2 ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol2 ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol2 ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol2 ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol2 ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol2 ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type3) {
          return typeof type3 === "string" || typeof type3 === "function" || type3 === REACT_FRAGMENT_TYPE || type3 === REACT_CONCURRENT_MODE_TYPE || type3 === REACT_PROFILER_TYPE || type3 === REACT_STRICT_MODE_TYPE || type3 === REACT_SUSPENSE_TYPE || type3 === REACT_SUSPENSE_LIST_TYPE || typeof type3 === "object" && type3 !== null && (type3.$$typeof === REACT_LAZY_TYPE || type3.$$typeof === REACT_MEMO_TYPE || type3.$$typeof === REACT_PROVIDER_TYPE || type3.$$typeof === REACT_CONTEXT_TYPE || type3.$$typeof === REACT_FORWARD_REF_TYPE || type3.$$typeof === REACT_FUNDAMENTAL_TYPE || type3.$$typeof === REACT_RESPONDER_TYPE || type3.$$typeof === REACT_SCOPE_TYPE || type3.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type3 = object.type;
                switch (type3) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type3;
                  default:
                    var $$typeofType = type3 && type3.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment2 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal3 = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment2;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal3;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/hoist-non-react-statics/node_modules/react-is/index.js
var require_react_is3 = __commonJS({
  "node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development3();
    }
  }
});

// node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var require_hoist_non_react_statics_cjs = __commonJS({
  "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module) {
    "use strict";
    var reactIs = require_react_is3();
    var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
    };
    var FORWARD_REF_STATICS = {
      "$$typeof": true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    };
    var MEMO_STATICS = {
      "$$typeof": true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    function getStatics(component) {
      if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
      }
      return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
    }
    var defineProperty2 = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;
    function hoistNonReactStatics2(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== "string") {
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics2(targetComponent, inheritedComponent, blacklist);
          }
        }
        var keys3 = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
          keys3 = keys3.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for (var i2 = 0; i2 < keys3.length; ++i2) {
          var key = keys3[i2];
          if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
            try {
              defineProperty2(targetComponent, key, descriptor);
            } catch (e2) {
            }
          }
        }
      }
      return targetComponent;
    }
    module.exports = hoistNonReactStatics2;
  }
});

// node_modules/shallowequal/index.js
var require_shallowequal = __commonJS({
  "node_modules/shallowequal/index.js"(exports, module) {
    module.exports = function shallowEqual(objA, objB, compare, compareContext) {
      var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
      if (ret !== void 0) {
        return !!ret;
      }
      if (objA === objB) {
        return true;
      }
      if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
        return false;
      }
      var keysA = Object.keys(objA);
      var keysB = Object.keys(objB);
      if (keysA.length !== keysB.length) {
        return false;
      }
      var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
      for (var idx = 0; idx < keysA.length; idx++) {
        var key = keysA[idx];
        if (!bHasOwnProperty(key)) {
          return false;
        }
        var valueA = objA[key];
        var valueB = objB[key];
        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
        if (ret === false || ret === void 0 && valueA !== valueB) {
          return false;
        }
      }
      return true;
    };
  }
});

// node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "node_modules/lodash/isArray.js"(exports, module) {
    var isArray = Array.isArray;
    module.exports = isArray;
  }
});

// node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "node_modules/lodash/_freeGlobal.js"(exports, module) {
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module.exports = freeGlobal;
  }
});

// node_modules/lodash/_root.js
var require_root = __commonJS({
  "node_modules/lodash/_root.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  }
});

// node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "node_modules/lodash/_Symbol.js"(exports, module) {
    var root = require_root();
    var Symbol2 = root.Symbol;
    module.exports = Symbol2;
  }
});

// node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "node_modules/lodash/_getRawTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e2) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module.exports = getRawTag;
  }
});

// node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "node_modules/lodash/_objectToString.js"(exports, module) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module.exports = objectToString;
  }
});

// node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "node_modules/lodash/_baseGetTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module.exports = baseGetTag;
  }
});

// node_modules/lodash/_overArg.js
var require_overArg = __commonJS({
  "node_modules/lodash/_overArg.js"(exports, module) {
    function overArg(func, transform2) {
      return function(arg) {
        return func(transform2(arg));
      };
    }
    module.exports = overArg;
  }
});

// node_modules/lodash/_getPrototype.js
var require_getPrototype = __commonJS({
  "node_modules/lodash/_getPrototype.js"(exports, module) {
    var overArg = require_overArg();
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    module.exports = getPrototype;
  }
});

// node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/lodash/isObjectLike.js"(exports, module) {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module.exports = isObjectLike;
  }
});

// node_modules/lodash/isPlainObject.js
var require_isPlainObject = __commonJS({
  "node_modules/lodash/isPlainObject.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var getPrototype = require_getPrototype();
    var isObjectLike = require_isObjectLike();
    var objectTag = "[object Object]";
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectCtorString = funcToString.call(Object);
    function isPlainObject2(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }
    module.exports = isPlainObject2;
  }
});

// node_modules/focus-visible/dist/focus-visible.js
var require_focus_visible = __commonJS({
  "node_modules/focus-visible/dist/focus-visible.js"(exports, module) {
    (function(global2, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory() : typeof define === "function" && define.amd ? define(factory) : factory();
    })(exports, function() {
      "use strict";
      function applyFocusVisiblePolyfill(scope) {
        var hadKeyboardEvent2 = true;
        var hadFocusVisibleRecently2 = false;
        var hadFocusVisibleRecentlyTimeout2 = null;
        var inputTypesAllowlist = {
          text: true,
          search: true,
          url: true,
          tel: true,
          email: true,
          password: true,
          number: true,
          date: true,
          month: true,
          week: true,
          time: true,
          datetime: true,
          "datetime-local": true
        };
        function isValidFocusTarget(el2) {
          if (el2 && el2 !== document && el2.nodeName !== "HTML" && el2.nodeName !== "BODY" && "classList" in el2 && "contains" in el2.classList) {
            return true;
          }
          return false;
        }
        function focusTriggersKeyboardModality2(el2) {
          var type3 = el2.type;
          var tagName = el2.tagName;
          if (tagName === "INPUT" && inputTypesAllowlist[type3] && !el2.readOnly) {
            return true;
          }
          if (tagName === "TEXTAREA" && !el2.readOnly) {
            return true;
          }
          if (el2.isContentEditable) {
            return true;
          }
          return false;
        }
        function addFocusVisibleClass(el2) {
          if (el2.classList.contains("focus-visible")) {
            return;
          }
          el2.classList.add("focus-visible");
          el2.setAttribute("data-focus-visible-added", "");
        }
        function removeFocusVisibleClass(el2) {
          if (!el2.hasAttribute("data-focus-visible-added")) {
            return;
          }
          el2.classList.remove("focus-visible");
          el2.removeAttribute("data-focus-visible-added");
        }
        function onKeyDown(e2) {
          if (e2.metaKey || e2.altKey || e2.ctrlKey) {
            return;
          }
          if (isValidFocusTarget(scope.activeElement)) {
            addFocusVisibleClass(scope.activeElement);
          }
          hadKeyboardEvent2 = true;
        }
        function onPointerDown(e2) {
          hadKeyboardEvent2 = false;
        }
        function onFocus(e2) {
          if (!isValidFocusTarget(e2.target)) {
            return;
          }
          if (hadKeyboardEvent2 || focusTriggersKeyboardModality2(e2.target)) {
            addFocusVisibleClass(e2.target);
          }
        }
        function onBlur(e2) {
          if (!isValidFocusTarget(e2.target)) {
            return;
          }
          if (e2.target.classList.contains("focus-visible") || e2.target.hasAttribute("data-focus-visible-added")) {
            hadFocusVisibleRecently2 = true;
            window.clearTimeout(hadFocusVisibleRecentlyTimeout2);
            hadFocusVisibleRecentlyTimeout2 = window.setTimeout(function() {
              hadFocusVisibleRecently2 = false;
            }, 100);
            removeFocusVisibleClass(e2.target);
          }
        }
        function onVisibilityChange(e2) {
          if (document.visibilityState === "hidden") {
            if (hadFocusVisibleRecently2) {
              hadKeyboardEvent2 = true;
            }
            addInitialPointerMoveListeners();
          }
        }
        function addInitialPointerMoveListeners() {
          document.addEventListener("mousemove", onInitialPointerMove);
          document.addEventListener("mousedown", onInitialPointerMove);
          document.addEventListener("mouseup", onInitialPointerMove);
          document.addEventListener("pointermove", onInitialPointerMove);
          document.addEventListener("pointerdown", onInitialPointerMove);
          document.addEventListener("pointerup", onInitialPointerMove);
          document.addEventListener("touchmove", onInitialPointerMove);
          document.addEventListener("touchstart", onInitialPointerMove);
          document.addEventListener("touchend", onInitialPointerMove);
        }
        function removeInitialPointerMoveListeners() {
          document.removeEventListener("mousemove", onInitialPointerMove);
          document.removeEventListener("mousedown", onInitialPointerMove);
          document.removeEventListener("mouseup", onInitialPointerMove);
          document.removeEventListener("pointermove", onInitialPointerMove);
          document.removeEventListener("pointerdown", onInitialPointerMove);
          document.removeEventListener("pointerup", onInitialPointerMove);
          document.removeEventListener("touchmove", onInitialPointerMove);
          document.removeEventListener("touchstart", onInitialPointerMove);
          document.removeEventListener("touchend", onInitialPointerMove);
        }
        function onInitialPointerMove(e2) {
          if (e2.target.nodeName && e2.target.nodeName.toLowerCase() === "html") {
            return;
          }
          hadKeyboardEvent2 = false;
          removeInitialPointerMoveListeners();
        }
        document.addEventListener("keydown", onKeyDown, true);
        document.addEventListener("mousedown", onPointerDown, true);
        document.addEventListener("pointerdown", onPointerDown, true);
        document.addEventListener("touchstart", onPointerDown, true);
        document.addEventListener("visibilitychange", onVisibilityChange, true);
        addInitialPointerMoveListeners();
        scope.addEventListener("focus", onFocus, true);
        scope.addEventListener("blur", onBlur, true);
        if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
          scope.host.setAttribute("data-js-focus-visible", "");
        } else if (scope.nodeType === Node.DOCUMENT_NODE) {
          document.documentElement.classList.add("js-focus-visible");
          document.documentElement.setAttribute("data-js-focus-visible", "");
        }
      }
      if (typeof window !== "undefined" && typeof document !== "undefined") {
        window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill;
        var event;
        try {
          event = new CustomEvent("focus-visible-polyfill-ready");
        } catch (error3) {
          event = document.createEvent("CustomEvent");
          event.initCustomEvent("focus-visible-polyfill-ready", false, false, {});
        }
        window.dispatchEvent(event);
      }
      if (typeof document !== "undefined") {
        applyFocusVisiblePolyfill(document);
      }
    });
  }
});

// node_modules/@material-ui/core/styles/colorManipulator.js
var require_colorManipulator = __commonJS({
  "node_modules/@material-ui/core/styles/colorManipulator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.hexToRgb = hexToRgb2;
    exports.rgbToHex = rgbToHex;
    exports.hslToRgb = hslToRgb2;
    exports.decomposeColor = decomposeColor2;
    exports.recomposeColor = recomposeColor2;
    exports.getContrastRatio = getContrastRatio2;
    exports.getLuminance = getLuminance2;
    exports.emphasize = emphasize;
    exports.fade = fade2;
    exports.alpha = alpha2;
    exports.darken = darken2;
    exports.lighten = lighten2;
    var _utils = require_utils();
    function clamp2(value) {
      var min = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      var max = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
      if (true) {
        if (value < min || value > max) {
          console.error("Material-UI: The value provided ".concat(value, " is out of range [").concat(min, ", ").concat(max, "]."));
        }
      }
      return Math.min(Math.max(min, value), max);
    }
    function hexToRgb2(color) {
      color = color.substr(1);
      var re2 = new RegExp(".{1,".concat(color.length >= 6 ? 2 : 1, "}"), "g");
      var colors = color.match(re2);
      if (colors && colors[0].length === 1) {
        colors = colors.map(function(n2) {
          return n2 + n2;
        });
      }
      return colors ? "rgb".concat(colors.length === 4 ? "a" : "", "(").concat(colors.map(function(n2, index3) {
        return index3 < 3 ? parseInt(n2, 16) : Math.round(parseInt(n2, 16) / 255 * 1e3) / 1e3;
      }).join(", "), ")") : "";
    }
    function intToHex(int) {
      var hex = int.toString(16);
      return hex.length === 1 ? "0".concat(hex) : hex;
    }
    function rgbToHex(color) {
      if (color.indexOf("#") === 0) {
        return color;
      }
      var _decomposeColor = decomposeColor2(color), values4 = _decomposeColor.values;
      return "#".concat(values4.map(function(n2) {
        return intToHex(n2);
      }).join(""));
    }
    function hslToRgb2(color) {
      color = decomposeColor2(color);
      var _color = color, values4 = _color.values;
      var h2 = values4[0];
      var s2 = values4[1] / 100;
      var l2 = values4[2] / 100;
      var a2 = s2 * Math.min(l2, 1 - l2);
      var f = function f2(n2) {
        var k2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : (n2 + h2 / 30) % 12;
        return l2 - a2 * Math.max(Math.min(k2 - 3, 9 - k2, 1), -1);
      };
      var type3 = "rgb";
      var rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
      if (color.type === "hsla") {
        type3 += "a";
        rgb.push(values4[3]);
      }
      return recomposeColor2({
        type: type3,
        values: rgb
      });
    }
    function decomposeColor2(color) {
      if (color.type) {
        return color;
      }
      if (color.charAt(0) === "#") {
        return decomposeColor2(hexToRgb2(color));
      }
      var marker = color.indexOf("(");
      var type3 = color.substring(0, marker);
      if (["rgb", "rgba", "hsl", "hsla"].indexOf(type3) === -1) {
        throw new Error(true ? "Material-UI: Unsupported `".concat(color, "` color.\nWe support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().") : (0, _utils.formatMuiErrorMessage)(3, color));
      }
      var values4 = color.substring(marker + 1, color.length - 1).split(",");
      values4 = values4.map(function(value) {
        return parseFloat(value);
      });
      return {
        type: type3,
        values: values4
      };
    }
    function recomposeColor2(color) {
      var type3 = color.type;
      var values4 = color.values;
      if (type3.indexOf("rgb") !== -1) {
        values4 = values4.map(function(n2, i2) {
          return i2 < 3 ? parseInt(n2, 10) : n2;
        });
      } else if (type3.indexOf("hsl") !== -1) {
        values4[1] = "".concat(values4[1], "%");
        values4[2] = "".concat(values4[2], "%");
      }
      return "".concat(type3, "(").concat(values4.join(", "), ")");
    }
    function getContrastRatio2(foreground, background) {
      var lumA = getLuminance2(foreground);
      var lumB = getLuminance2(background);
      return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
    }
    function getLuminance2(color) {
      color = decomposeColor2(color);
      var rgb = color.type === "hsl" ? decomposeColor2(hslToRgb2(color)).values : color.values;
      rgb = rgb.map(function(val) {
        val /= 255;
        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
      });
      return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
    }
    function emphasize(color) {
      var coefficient = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.15;
      return getLuminance2(color) > 0.5 ? darken2(color, coefficient) : lighten2(color, coefficient);
    }
    var warnedOnce3 = false;
    function fade2(color, value) {
      if (true) {
        if (!warnedOnce3) {
          warnedOnce3 = true;
          console.error(["Material-UI: The `fade` color utility was renamed to `alpha` to better describe its functionality.", "", "You should use `import { alpha } from '@material-ui/core/styles'`"].join("\n"));
        }
      }
      return alpha2(color, value);
    }
    function alpha2(color, value) {
      color = decomposeColor2(color);
      value = clamp2(value);
      if (color.type === "rgb" || color.type === "hsl") {
        color.type += "a";
      }
      color.values[3] = value;
      return recomposeColor2(color);
    }
    function darken2(color, coefficient) {
      color = decomposeColor2(color);
      coefficient = clamp2(coefficient);
      if (color.type.indexOf("hsl") !== -1) {
        color.values[2] *= 1 - coefficient;
      } else if (color.type.indexOf("rgb") !== -1) {
        for (var i2 = 0; i2 < 3; i2 += 1) {
          color.values[i2] *= 1 - coefficient;
        }
      }
      return recomposeColor2(color);
    }
    function lighten2(color, coefficient) {
      color = decomposeColor2(color);
      coefficient = clamp2(coefficient);
      if (color.type.indexOf("hsl") !== -1) {
        color.values[2] += (100 - color.values[2]) * coefficient;
      } else if (color.type.indexOf("rgb") !== -1) {
        for (var i2 = 0; i2 < 3; i2 += 1) {
          color.values[i2] += (255 - color.values[i2]) * coefficient;
        }
      }
      return recomposeColor2(color);
    }
  }
});

// node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "node_modules/lodash/isSymbol.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module.exports = isSymbol;
  }
});

// node_modules/lodash/_isKey.js
var require_isKey = __commonJS({
  "node_modules/lodash/_isKey.js"(exports, module) {
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp = /^\w*$/;
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type3 = typeof value;
      if (type3 == "number" || type3 == "symbol" || type3 == "boolean" || value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }
    module.exports = isKey;
  }
});

// node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "node_modules/lodash/isObject.js"(exports, module) {
    function isObject(value) {
      var type3 = typeof value;
      return value != null && (type3 == "object" || type3 == "function");
    }
    module.exports = isObject;
  }
});

// node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/lodash/isFunction.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObject = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction2(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module.exports = isFunction2;
  }
});

// node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "node_modules/lodash/_coreJsData.js"(exports, module) {
    var root = require_root();
    var coreJsData = root["__core-js_shared__"];
    module.exports = coreJsData;
  }
});

// node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "node_modules/lodash/_isMasked.js"(exports, module) {
    var coreJsData = require_coreJsData();
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    module.exports = isMasked;
  }
});

// node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "node_modules/lodash/_toSource.js"(exports, module) {
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e2) {
        }
        try {
          return func + "";
        } catch (e2) {
        }
      }
      return "";
    }
    module.exports = toSource;
  }
});

// node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "node_modules/lodash/_baseIsNative.js"(exports, module) {
    var isFunction2 = require_isFunction();
    var isMasked = require_isMasked();
    var isObject = require_isObject();
    var toSource = require_toSource();
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction2(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    module.exports = baseIsNative;
  }
});

// node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "node_modules/lodash/_getValue.js"(exports, module) {
    function getValue2(object, key) {
      return object == null ? void 0 : object[key];
    }
    module.exports = getValue2;
  }
});

// node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "node_modules/lodash/_getNative.js"(exports, module) {
    var baseIsNative = require_baseIsNative();
    var getValue2 = require_getValue();
    function getNative(object, key) {
      var value = getValue2(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    module.exports = getNative;
  }
});

// node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "node_modules/lodash/_nativeCreate.js"(exports, module) {
    var getNative = require_getNative();
    var nativeCreate = getNative(Object, "create");
    module.exports = nativeCreate;
  }
});

// node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "node_modules/lodash/_hashClear.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    module.exports = hashClear;
  }
});

// node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "node_modules/lodash/_hashDelete.js"(exports, module) {
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = hashDelete;
  }
});

// node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "node_modules/lodash/_hashGet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    module.exports = hashGet;
  }
});

// node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "node_modules/lodash/_hashHas.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    module.exports = hashHas;
  }
});

// node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "node_modules/lodash/_hashSet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    module.exports = hashSet;
  }
});

// node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "node_modules/lodash/_Hash.js"(exports, module) {
    var hashClear = require_hashClear();
    var hashDelete = require_hashDelete();
    var hashGet = require_hashGet();
    var hashHas = require_hashHas();
    var hashSet = require_hashSet();
    function Hash(entries) {
      var index3 = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index3 < length) {
        var entry = entries[index3];
        this.set(entry[0], entry[1]);
      }
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module.exports = Hash;
  }
});

// node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "node_modules/lodash/_listCacheClear.js"(exports, module) {
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    module.exports = listCacheClear;
  }
});

// node_modules/lodash/eq.js
var require_eq = __commonJS({
  "node_modules/lodash/eq.js"(exports, module) {
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    module.exports = eq;
  }
});

// node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "node_modules/lodash/_assocIndexOf.js"(exports, module) {
    var eq = require_eq();
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    module.exports = assocIndexOf;
  }
});

// node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "node_modules/lodash/_listCacheDelete.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete(key) {
      var data = this.__data__, index3 = assocIndexOf(data, key);
      if (index3 < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index3 == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index3, 1);
      }
      --this.size;
      return true;
    }
    module.exports = listCacheDelete;
  }
});

// node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "node_modules/lodash/_listCacheGet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key) {
      var data = this.__data__, index3 = assocIndexOf(data, key);
      return index3 < 0 ? void 0 : data[index3][1];
    }
    module.exports = listCacheGet;
  }
});

// node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "node_modules/lodash/_listCacheHas.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    module.exports = listCacheHas;
  }
});

// node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "node_modules/lodash/_listCacheSet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheSet(key, value) {
      var data = this.__data__, index3 = assocIndexOf(data, key);
      if (index3 < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index3][1] = value;
      }
      return this;
    }
    module.exports = listCacheSet;
  }
});

// node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "node_modules/lodash/_ListCache.js"(exports, module) {
    var listCacheClear = require_listCacheClear();
    var listCacheDelete = require_listCacheDelete();
    var listCacheGet = require_listCacheGet();
    var listCacheHas = require_listCacheHas();
    var listCacheSet = require_listCacheSet();
    function ListCache(entries) {
      var index3 = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index3 < length) {
        var entry = entries[index3];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module.exports = ListCache;
  }
});

// node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "node_modules/lodash/_Map.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Map2 = getNative(root, "Map");
    module.exports = Map2;
  }
});

// node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "node_modules/lodash/_mapCacheClear.js"(exports, module) {
    var Hash = require_Hash();
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    module.exports = mapCacheClear;
  }
});

// node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "node_modules/lodash/_isKeyable.js"(exports, module) {
    function isKeyable(value) {
      var type3 = typeof value;
      return type3 == "string" || type3 == "number" || type3 == "symbol" || type3 == "boolean" ? value !== "__proto__" : value === null;
    }
    module.exports = isKeyable;
  }
});

// node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "node_modules/lodash/_getMapData.js"(exports, module) {
    var isKeyable = require_isKeyable();
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    module.exports = getMapData;
  }
});

// node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "node_modules/lodash/_mapCacheDelete.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = mapCacheDelete;
  }
});

// node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "node_modules/lodash/_mapCacheGet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    module.exports = mapCacheGet;
  }
});

// node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "node_modules/lodash/_mapCacheHas.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    module.exports = mapCacheHas;
  }
});

// node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "node_modules/lodash/_mapCacheSet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    module.exports = mapCacheSet;
  }
});

// node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "node_modules/lodash/_MapCache.js"(exports, module) {
    var mapCacheClear = require_mapCacheClear();
    var mapCacheDelete = require_mapCacheDelete();
    var mapCacheGet = require_mapCacheGet();
    var mapCacheHas = require_mapCacheHas();
    var mapCacheSet = require_mapCacheSet();
    function MapCache(entries) {
      var index3 = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index3 < length) {
        var entry = entries[index3];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module.exports = MapCache;
  }
});

// node_modules/lodash/memoize.js
var require_memoize = __commonJS({
  "node_modules/lodash/memoize.js"(exports, module) {
    var MapCache = require_MapCache();
    var FUNC_ERROR_TEXT = "Expected a function";
    function memoize5(func, resolver) {
      if (typeof func != "function" || resolver != null && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache3 = memoized.cache;
        if (cache3.has(key)) {
          return cache3.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache3.set(key, result) || cache3;
        return result;
      };
      memoized.cache = new (memoize5.Cache || MapCache)();
      return memoized;
    }
    memoize5.Cache = MapCache;
    module.exports = memoize5;
  }
});

// node_modules/lodash/_memoizeCapped.js
var require_memoizeCapped = __commonJS({
  "node_modules/lodash/_memoizeCapped.js"(exports, module) {
    var memoize5 = require_memoize();
    var MAX_MEMOIZE_SIZE = 500;
    function memoizeCapped(func) {
      var result = memoize5(func, function(key) {
        if (cache3.size === MAX_MEMOIZE_SIZE) {
          cache3.clear();
        }
        return key;
      });
      var cache3 = result.cache;
      return result;
    }
    module.exports = memoizeCapped;
  }
});

// node_modules/lodash/_stringToPath.js
var require_stringToPath = __commonJS({
  "node_modules/lodash/_stringToPath.js"(exports, module) {
    var memoizeCapped = require_memoizeCapped();
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46) {
        result.push("");
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
      });
      return result;
    });
    module.exports = stringToPath;
  }
});

// node_modules/lodash/_arrayMap.js
var require_arrayMap = __commonJS({
  "node_modules/lodash/_arrayMap.js"(exports, module) {
    function arrayMap(array, iteratee) {
      var index3 = -1, length = array == null ? 0 : array.length, result = Array(length);
      while (++index3 < length) {
        result[index3] = iteratee(array[index3], index3, array);
      }
      return result;
    }
    module.exports = arrayMap;
  }
});

// node_modules/lodash/_baseToString.js
var require_baseToString = __commonJS({
  "node_modules/lodash/_baseToString.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var arrayMap = require_arrayMap();
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isArray(value)) {
        return arrayMap(value, baseToString) + "";
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = baseToString;
  }
});

// node_modules/lodash/toString.js
var require_toString = __commonJS({
  "node_modules/lodash/toString.js"(exports, module) {
    var baseToString = require_baseToString();
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    module.exports = toString;
  }
});

// node_modules/lodash/_castPath.js
var require_castPath = __commonJS({
  "node_modules/lodash/_castPath.js"(exports, module) {
    var isArray = require_isArray();
    var isKey = require_isKey();
    var stringToPath = require_stringToPath();
    var toString = require_toString();
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }
    module.exports = castPath;
  }
});

// node_modules/lodash/_toKey.js
var require_toKey = __commonJS({
  "node_modules/lodash/_toKey.js"(exports, module) {
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    function toKey(value) {
      if (typeof value == "string" || isSymbol(value)) {
        return value;
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = toKey;
  }
});

// node_modules/lodash/_baseGet.js
var require_baseGet = __commonJS({
  "node_modules/lodash/_baseGet.js"(exports, module) {
    var castPath = require_castPath();
    var toKey = require_toKey();
    function baseGet(object, path) {
      path = castPath(path, object);
      var index3 = 0, length = path.length;
      while (object != null && index3 < length) {
        object = object[toKey(path[index3++])];
      }
      return index3 && index3 == length ? object : void 0;
    }
    module.exports = baseGet;
  }
});

// node_modules/lodash/get.js
var require_get = __commonJS({
  "node_modules/lodash/get.js"(exports, module) {
    var baseGet = require_baseGet();
    function get3(object, path, defaultValue) {
      var result = object == null ? void 0 : baseGet(object, path);
      return result === void 0 ? defaultValue : result;
    }
    module.exports = get3;
  }
});

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
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

// node_modules/@material-ui/core/esm/Button/Button.js
var import_prop_types12 = __toModule(require_prop_types());
import {
  createElement as createElement4,
  forwardRef as forwardRef3
} from "react";

// node_modules/clsx/dist/clsx.m.js
function toVal(mix) {
  var k2, y2, str = "";
  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      for (k2 = 0; k2 < mix.length; k2++) {
        if (mix[k2]) {
          if (y2 = toVal(mix[k2])) {
            str && (str += " ");
            str += y2;
          }
        }
      }
    } else {
      for (k2 in mix) {
        if (mix[k2]) {
          str && (str += " ");
          str += k2;
        }
      }
    }
  }
  return str;
}
function clsx_m_default() {
  var i2 = 0, tmp, x2, str = "";
  while (i2 < arguments.length) {
    if (tmp = arguments[i2++]) {
      if (x2 = toVal(tmp)) {
        str && (str += " ");
        str += x2;
      }
    }
  }
  return str;
}

// node_modules/@material-ui/styles/esm/index.js
var import_utils6 = __toModule(require_utils());

// node_modules/@material-ui/styles/esm/ThemeProvider/nested.js
var hasSymbol = typeof Symbol === "function" && Symbol.for;
var nested_default = hasSymbol ? Symbol.for("mui.nested") : "__THEME_NESTED__";

// node_modules/@material-ui/styles/esm/createGenerateClassName/createGenerateClassName.js
var pseudoClasses = ["checked", "disabled", "error", "focused", "focusVisible", "required", "expanded", "selected"];
function createGenerateClassName() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var _options$disableGloba = options.disableGlobal, disableGlobal = _options$disableGloba === void 0 ? false : _options$disableGloba, _options$productionPr = options.productionPrefix, productionPrefix = _options$productionPr === void 0 ? "jss" : _options$productionPr, _options$seed = options.seed, seed = _options$seed === void 0 ? "" : _options$seed;
  var seedPrefix = seed === "" ? "" : "".concat(seed, "-");
  var ruleCounter = 0;
  var getNextCounterId = function getNextCounterId2() {
    ruleCounter += 1;
    if (true) {
      if (ruleCounter >= 1e10) {
        console.warn(["Material-UI: You might have a memory leak.", "The ruleCounter is not supposed to grow that much."].join(""));
      }
    }
    return ruleCounter;
  };
  return function(rule, styleSheet) {
    var name = styleSheet.options.name;
    if (name && name.indexOf("Mui") === 0 && !styleSheet.options.link && !disableGlobal) {
      if (pseudoClasses.indexOf(rule.key) !== -1) {
        return "Mui-".concat(rule.key);
      }
      var prefix2 = "".concat(seedPrefix).concat(name, "-").concat(rule.key);
      if (!styleSheet.options.theme[nested_default] || seed !== "") {
        return prefix2;
      }
      return "".concat(prefix2, "-").concat(getNextCounterId());
    }
    if (false) {
      return "".concat(seedPrefix).concat(productionPrefix).concat(getNextCounterId());
    }
    var suffix = "".concat(rule.key, "-").concat(getNextCounterId());
    if (styleSheet.options.classNamePrefix) {
      return "".concat(seedPrefix).concat(styleSheet.options.classNamePrefix, "-").concat(suffix);
    }
    return "".concat(seedPrefix).concat(suffix);
  };
}

// node_modules/@material-ui/styles/esm/getThemeProps/getThemeProps.js
function getThemeProps(params) {
  var theme = params.theme, name = params.name, props = params.props;
  if (!theme || !theme.props || !theme.props[name]) {
    return props;
  }
  var defaultProps2 = theme.props[name];
  var propName;
  for (propName in defaultProps2) {
    if (props[propName] === void 0) {
      props[propName] = defaultProps2[propName];
    }
  }
  return props;
}

// node_modules/tiny-warning/dist/tiny-warning.esm.js
var isProduction = false;
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }
    var text = "Warning: " + message;
    if (typeof console !== "undefined") {
      console.warn(text);
    }
    try {
      throw Error(text);
    } catch (x2) {
    }
  }
}
var tiny_warning_esm_default = warning;

// node_modules/is-in-browser/dist/module.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
  return typeof obj;
} : function(obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === "object" && document.nodeType === 9;
var module_default = isBrowser;

// node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o2, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o3, p2) {
    o3.__proto__ = p2;
    return o3;
  };
  return _setPrototypeOf(o2, p);
}

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}

// node_modules/jss/dist/jss.esm.js
var plainObjectConstrurctor = {}.constructor;
function cloneStyle(style) {
  if (style == null || typeof style !== "object")
    return style;
  if (Array.isArray(style))
    return style.map(cloneStyle);
  if (style.constructor !== plainObjectConstrurctor)
    return style;
  var newStyle = {};
  for (var name in style) {
    newStyle[name] = cloneStyle(style[name]);
  }
  return newStyle;
}
function createRule(name, decl, options) {
  if (name === void 0) {
    name = "unnamed";
  }
  var jss2 = options.jss;
  var declCopy = cloneStyle(decl);
  var rule = jss2.plugins.onCreateRule(name, declCopy, options);
  if (rule)
    return rule;
  if (name[0] === "@") {
    true ? tiny_warning_esm_default(false, "[JSS] Unknown rule " + name) : void 0;
  }
  return null;
}
var join = function join2(value, by) {
  var result = "";
  for (var i2 = 0; i2 < value.length; i2++) {
    if (value[i2] === "!important")
      break;
    if (result)
      result += by;
    result += value[i2];
  }
  return result;
};
var toCssValue = function toCssValue2(value, ignoreImportant) {
  if (ignoreImportant === void 0) {
    ignoreImportant = false;
  }
  if (!Array.isArray(value))
    return value;
  var cssValue = "";
  if (Array.isArray(value[0])) {
    for (var i2 = 0; i2 < value.length; i2++) {
      if (value[i2] === "!important")
        break;
      if (cssValue)
        cssValue += ", ";
      cssValue += join(value[i2], " ");
    }
  } else
    cssValue = join(value, ", ");
  if (!ignoreImportant && value[value.length - 1] === "!important") {
    cssValue += " !important";
  }
  return cssValue;
};
function getWhitespaceSymbols(options) {
  if (options && options.format === false) {
    return {
      linebreak: "",
      space: ""
    };
  }
  return {
    linebreak: "\n",
    space: " "
  };
}
function indentStr(str, indent) {
  var result = "";
  for (var index3 = 0; index3 < indent; index3++) {
    result += "  ";
  }
  return result + str;
}
function toCss(selector, style, options) {
  if (options === void 0) {
    options = {};
  }
  var result = "";
  if (!style)
    return result;
  var _options = options, _options$indent = _options.indent, indent = _options$indent === void 0 ? 0 : _options$indent;
  var fallbacks = style.fallbacks;
  if (options.format === false) {
    indent = -Infinity;
  }
  var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak, space = _getWhitespaceSymbols.space;
  if (selector)
    indent++;
  if (fallbacks) {
    if (Array.isArray(fallbacks)) {
      for (var index3 = 0; index3 < fallbacks.length; index3++) {
        var fallback = fallbacks[index3];
        for (var prop in fallback) {
          var value = fallback[prop];
          if (value != null) {
            if (result)
              result += linebreak;
            result += indentStr(prop + ":" + space + toCssValue(value) + ";", indent);
          }
        }
      }
    } else {
      for (var _prop in fallbacks) {
        var _value = fallbacks[_prop];
        if (_value != null) {
          if (result)
            result += linebreak;
          result += indentStr(_prop + ":" + space + toCssValue(_value) + ";", indent);
        }
      }
    }
  }
  for (var _prop2 in style) {
    var _value2 = style[_prop2];
    if (_value2 != null && _prop2 !== "fallbacks") {
      if (result)
        result += linebreak;
      result += indentStr(_prop2 + ":" + space + toCssValue(_value2) + ";", indent);
    }
  }
  if (!result && !options.allowEmpty)
    return result;
  if (!selector)
    return result;
  indent--;
  if (result)
    result = "" + linebreak + result + linebreak;
  return indentStr("" + selector + space + "{" + result, indent) + indentStr("}", indent);
}
var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
var nativeEscape = typeof CSS !== "undefined" && CSS.escape;
var escape = function(str) {
  return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, "\\$1");
};
var BaseStyleRule = /* @__PURE__ */ function() {
  function BaseStyleRule2(key, style, options) {
    this.type = "style";
    this.isProcessed = false;
    var sheet = options.sheet, Renderer = options.Renderer;
    this.key = key;
    this.options = options;
    this.style = style;
    if (sheet)
      this.renderer = sheet.renderer;
    else if (Renderer)
      this.renderer = new Renderer();
  }
  var _proto = BaseStyleRule2.prototype;
  _proto.prop = function prop(name, value, options) {
    if (value === void 0)
      return this.style[name];
    var force = options ? options.force : false;
    if (!force && this.style[name] === value)
      return this;
    var newValue = value;
    if (!options || options.process !== false) {
      newValue = this.options.jss.plugins.onChangeValue(value, name, this);
    }
    var isEmpty = newValue == null || newValue === false;
    var isDefined = name in this.style;
    if (isEmpty && !isDefined && !force)
      return this;
    var remove = isEmpty && isDefined;
    if (remove)
      delete this.style[name];
    else
      this.style[name] = newValue;
    if (this.renderable && this.renderer) {
      if (remove)
        this.renderer.removeProperty(this.renderable, name);
      else
        this.renderer.setProperty(this.renderable, name, newValue);
      return this;
    }
    var sheet = this.options.sheet;
    if (sheet && sheet.attached) {
      true ? tiny_warning_esm_default(false, '[JSS] Rule is not linked. Missing sheet option "link: true".') : void 0;
    }
    return this;
  };
  return BaseStyleRule2;
}();
var StyleRule = /* @__PURE__ */ function(_BaseStyleRule) {
  _inheritsLoose(StyleRule2, _BaseStyleRule);
  function StyleRule2(key, style, options) {
    var _this;
    _this = _BaseStyleRule.call(this, key, style, options) || this;
    var selector = options.selector, scoped = options.scoped, sheet = options.sheet, generateId = options.generateId;
    if (selector) {
      _this.selectorText = selector;
    } else if (scoped !== false) {
      _this.id = generateId(_assertThisInitialized(_assertThisInitialized(_this)), sheet);
      _this.selectorText = "." + escape(_this.id);
    }
    return _this;
  }
  var _proto2 = StyleRule2.prototype;
  _proto2.applyTo = function applyTo(renderable) {
    var renderer = this.renderer;
    if (renderer) {
      var json = this.toJSON();
      for (var prop in json) {
        renderer.setProperty(renderable, prop, json[prop]);
      }
    }
    return this;
  };
  _proto2.toJSON = function toJSON() {
    var json = {};
    for (var prop in this.style) {
      var value = this.style[prop];
      if (typeof value !== "object")
        json[prop] = value;
      else if (Array.isArray(value))
        json[prop] = toCssValue(value);
    }
    return json;
  };
  _proto2.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? _extends({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.selectorText, this.style, opts);
  };
  _createClass(StyleRule2, [{
    key: "selector",
    set: function set2(selector) {
      if (selector === this.selectorText)
        return;
      this.selectorText = selector;
      var renderer = this.renderer, renderable = this.renderable;
      if (!renderable || !renderer)
        return;
      var hasChanged = renderer.setSelector(renderable, selector);
      if (!hasChanged) {
        renderer.replaceRule(renderable, this);
      }
    },
    get: function get3() {
      return this.selectorText;
    }
  }]);
  return StyleRule2;
}(BaseStyleRule);
var pluginStyleRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    if (key[0] === "@" || options.parent && options.parent.type === "keyframes") {
      return null;
    }
    return new StyleRule(key, style, options);
  }
};
var defaultToStringOptions = {
  indent: 1,
  children: true
};
var atRegExp = /@([\w-]+)/;
var ConditionalRule = /* @__PURE__ */ function() {
  function ConditionalRule2(key, styles11, options) {
    this.type = "conditional";
    this.isProcessed = false;
    this.key = key;
    var atMatch = key.match(atRegExp);
    this.at = atMatch ? atMatch[1] : "unknown";
    this.query = options.name || "@" + this.at;
    this.options = options;
    this.rules = new RuleList(_extends({}, options, {
      parent: this
    }));
    for (var name in styles11) {
      this.rules.add(name, styles11[name]);
    }
    this.rules.process();
  }
  var _proto = ConditionalRule2.prototype;
  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  };
  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  };
  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    if (!rule)
      return null;
    this.options.jss.plugins.onProcessRule(rule);
    return rule;
  };
  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions;
    }
    var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
    if (options.indent == null)
      options.indent = defaultToStringOptions.indent;
    if (options.children == null)
      options.children = defaultToStringOptions.children;
    if (options.children === false) {
      return this.query + " {}";
    }
    var children = this.rules.toString(options);
    return children ? this.query + " {" + linebreak + children + linebreak + "}" : "";
  };
  return ConditionalRule2;
}();
var keyRegExp = /@media|@supports\s+/;
var pluginConditionalRule = {
  onCreateRule: function onCreateRule2(key, styles11, options) {
    return keyRegExp.test(key) ? new ConditionalRule(key, styles11, options) : null;
  }
};
var defaultToStringOptions$1 = {
  indent: 1,
  children: true
};
var nameRegExp = /@keyframes\s+([\w-]+)/;
var KeyframesRule = /* @__PURE__ */ function() {
  function KeyframesRule2(key, frames, options) {
    this.type = "keyframes";
    this.at = "@keyframes";
    this.isProcessed = false;
    var nameMatch = key.match(nameRegExp);
    if (nameMatch && nameMatch[1]) {
      this.name = nameMatch[1];
    } else {
      this.name = "noname";
      true ? tiny_warning_esm_default(false, "[JSS] Bad keyframes name " + key) : void 0;
    }
    this.key = this.type + "-" + this.name;
    this.options = options;
    var scoped = options.scoped, sheet = options.sheet, generateId = options.generateId;
    this.id = scoped === false ? this.name : escape(generateId(this, sheet));
    this.rules = new RuleList(_extends({}, options, {
      parent: this
    }));
    for (var name in frames) {
      this.rules.add(name, frames[name], _extends({}, options, {
        parent: this
      }));
    }
    this.rules.process();
  }
  var _proto = KeyframesRule2.prototype;
  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions$1;
    }
    var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
    if (options.indent == null)
      options.indent = defaultToStringOptions$1.indent;
    if (options.children == null)
      options.children = defaultToStringOptions$1.children;
    if (options.children === false) {
      return this.at + " " + this.id + " {}";
    }
    var children = this.rules.toString(options);
    if (children)
      children = "" + linebreak + children + linebreak;
    return this.at + " " + this.id + " {" + children + "}";
  };
  return KeyframesRule2;
}();
var keyRegExp$1 = /@keyframes\s+/;
var refRegExp = /\$([\w-]+)/g;
var findReferencedKeyframe = function findReferencedKeyframe2(val, keyframes2) {
  if (typeof val === "string") {
    return val.replace(refRegExp, function(match, name) {
      if (name in keyframes2) {
        return keyframes2[name];
      }
      true ? tiny_warning_esm_default(false, '[JSS] Referenced keyframes rule "' + name + '" is not defined.') : void 0;
      return match;
    });
  }
  return val;
};
var replaceRef = function replaceRef2(style, prop, keyframes2) {
  var value = style[prop];
  var refKeyframe = findReferencedKeyframe(value, keyframes2);
  if (refKeyframe !== value) {
    style[prop] = refKeyframe;
  }
};
var pluginKeyframesRule = {
  onCreateRule: function onCreateRule3(key, frames, options) {
    return typeof key === "string" && keyRegExp$1.test(key) ? new KeyframesRule(key, frames, options) : null;
  },
  onProcessStyle: function onProcessStyle(style, rule, sheet) {
    if (rule.type !== "style" || !sheet)
      return style;
    if ("animation-name" in style)
      replaceRef(style, "animation-name", sheet.keyframes);
    if ("animation" in style)
      replaceRef(style, "animation", sheet.keyframes);
    return style;
  },
  onChangeValue: function onChangeValue(val, prop, rule) {
    var sheet = rule.options.sheet;
    if (!sheet) {
      return val;
    }
    switch (prop) {
      case "animation":
        return findReferencedKeyframe(val, sheet.keyframes);
      case "animation-name":
        return findReferencedKeyframe(val, sheet.keyframes);
      default:
        return val;
    }
  }
};
var KeyframeRule = /* @__PURE__ */ function(_BaseStyleRule) {
  _inheritsLoose(KeyframeRule2, _BaseStyleRule);
  function KeyframeRule2() {
    return _BaseStyleRule.apply(this, arguments) || this;
  }
  var _proto = KeyframeRule2.prototype;
  _proto.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? _extends({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.key, this.style, opts);
  };
  return KeyframeRule2;
}(BaseStyleRule);
var pluginKeyframeRule = {
  onCreateRule: function onCreateRule4(key, style, options) {
    if (options.parent && options.parent.type === "keyframes") {
      return new KeyframeRule(key, style, options);
    }
    return null;
  }
};
var FontFaceRule = /* @__PURE__ */ function() {
  function FontFaceRule2(key, style, options) {
    this.type = "font-face";
    this.at = "@font-face";
    this.isProcessed = false;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  var _proto = FontFaceRule2.prototype;
  _proto.toString = function toString(options) {
    var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
    if (Array.isArray(this.style)) {
      var str = "";
      for (var index3 = 0; index3 < this.style.length; index3++) {
        str += toCss(this.at, this.style[index3]);
        if (this.style[index3 + 1])
          str += linebreak;
      }
      return str;
    }
    return toCss(this.at, this.style, options);
  };
  return FontFaceRule2;
}();
var keyRegExp$2 = /@font-face/;
var pluginFontFaceRule = {
  onCreateRule: function onCreateRule5(key, style, options) {
    return keyRegExp$2.test(key) ? new FontFaceRule(key, style, options) : null;
  }
};
var ViewportRule = /* @__PURE__ */ function() {
  function ViewportRule2(key, style, options) {
    this.type = "viewport";
    this.at = "@viewport";
    this.isProcessed = false;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  var _proto = ViewportRule2.prototype;
  _proto.toString = function toString(options) {
    return toCss(this.key, this.style, options);
  };
  return ViewportRule2;
}();
var pluginViewportRule = {
  onCreateRule: function onCreateRule6(key, style, options) {
    return key === "@viewport" || key === "@-ms-viewport" ? new ViewportRule(key, style, options) : null;
  }
};
var SimpleRule = /* @__PURE__ */ function() {
  function SimpleRule2(key, value, options) {
    this.type = "simple";
    this.isProcessed = false;
    this.key = key;
    this.value = value;
    this.options = options;
  }
  var _proto = SimpleRule2.prototype;
  _proto.toString = function toString(options) {
    if (Array.isArray(this.value)) {
      var str = "";
      for (var index3 = 0; index3 < this.value.length; index3++) {
        str += this.key + " " + this.value[index3] + ";";
        if (this.value[index3 + 1])
          str += "\n";
      }
      return str;
    }
    return this.key + " " + this.value + ";";
  };
  return SimpleRule2;
}();
var keysMap = {
  "@charset": true,
  "@import": true,
  "@namespace": true
};
var pluginSimpleRule = {
  onCreateRule: function onCreateRule7(key, value, options) {
    return key in keysMap ? new SimpleRule(key, value, options) : null;
  }
};
var plugins = [pluginStyleRule, pluginConditionalRule, pluginKeyframesRule, pluginKeyframeRule, pluginFontFaceRule, pluginViewportRule, pluginSimpleRule];
var defaultUpdateOptions = {
  process: true
};
var forceUpdateOptions = {
  force: true,
  process: true
};
var RuleList = /* @__PURE__ */ function() {
  function RuleList2(options) {
    this.map = {};
    this.raw = {};
    this.index = [];
    this.counter = 0;
    this.options = options;
    this.classes = options.classes;
    this.keyframes = options.keyframes;
  }
  var _proto = RuleList2.prototype;
  _proto.add = function add(name, decl, ruleOptions) {
    var _this$options = this.options, parent = _this$options.parent, sheet = _this$options.sheet, jss2 = _this$options.jss, Renderer = _this$options.Renderer, generateId = _this$options.generateId, scoped = _this$options.scoped;
    var options = _extends({
      classes: this.classes,
      parent,
      sheet,
      jss: jss2,
      Renderer,
      generateId,
      scoped,
      name,
      keyframes: this.keyframes,
      selector: void 0
    }, ruleOptions);
    var key = name;
    if (name in this.raw) {
      key = name + "-d" + this.counter++;
    }
    this.raw[key] = decl;
    if (key in this.classes) {
      options.selector = "." + escape(this.classes[key]);
    }
    var rule = createRule(key, decl, options);
    if (!rule)
      return null;
    this.register(rule);
    var index3 = options.index === void 0 ? this.index.length : options.index;
    this.index.splice(index3, 0, rule);
    return rule;
  };
  _proto.get = function get3(name) {
    return this.map[name];
  };
  _proto.remove = function remove(rule) {
    this.unregister(rule);
    delete this.raw[rule.key];
    this.index.splice(this.index.indexOf(rule), 1);
  };
  _proto.indexOf = function indexOf(rule) {
    return this.index.indexOf(rule);
  };
  _proto.process = function process2() {
    var plugins3 = this.options.jss.plugins;
    this.index.slice(0).forEach(plugins3.onProcessRule, plugins3);
  };
  _proto.register = function register(rule) {
    this.map[rule.key] = rule;
    if (rule instanceof StyleRule) {
      this.map[rule.selector] = rule;
      if (rule.id)
        this.classes[rule.key] = rule.id;
    } else if (rule instanceof KeyframesRule && this.keyframes) {
      this.keyframes[rule.name] = rule.id;
    }
  };
  _proto.unregister = function unregister(rule) {
    delete this.map[rule.key];
    if (rule instanceof StyleRule) {
      delete this.map[rule.selector];
      delete this.classes[rule.key];
    } else if (rule instanceof KeyframesRule) {
      delete this.keyframes[rule.name];
    }
  };
  _proto.update = function update3() {
    var name;
    var data;
    var options;
    if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) === "string") {
      name = arguments.length <= 0 ? void 0 : arguments[0];
      data = arguments.length <= 1 ? void 0 : arguments[1];
      options = arguments.length <= 2 ? void 0 : arguments[2];
    } else {
      data = arguments.length <= 0 ? void 0 : arguments[0];
      options = arguments.length <= 1 ? void 0 : arguments[1];
      name = null;
    }
    if (name) {
      this.updateOne(this.map[name], data, options);
    } else {
      for (var index3 = 0; index3 < this.index.length; index3++) {
        this.updateOne(this.index[index3], data, options);
      }
    }
  };
  _proto.updateOne = function updateOne(rule, data, options) {
    if (options === void 0) {
      options = defaultUpdateOptions;
    }
    var _this$options2 = this.options, plugins3 = _this$options2.jss.plugins, sheet = _this$options2.sheet;
    if (rule.rules instanceof RuleList2) {
      rule.rules.update(data, options);
      return;
    }
    var style = rule.style;
    plugins3.onUpdate(data, rule, sheet, options);
    if (options.process && style && style !== rule.style) {
      plugins3.onProcessStyle(rule.style, rule, sheet);
      for (var prop in rule.style) {
        var nextValue = rule.style[prop];
        var prevValue = style[prop];
        if (nextValue !== prevValue) {
          rule.prop(prop, nextValue, forceUpdateOptions);
        }
      }
      for (var _prop in style) {
        var _nextValue = rule.style[_prop];
        var _prevValue = style[_prop];
        if (_nextValue == null && _nextValue !== _prevValue) {
          rule.prop(_prop, null, forceUpdateOptions);
        }
      }
    }
  };
  _proto.toString = function toString(options) {
    var str = "";
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
    for (var index3 = 0; index3 < this.index.length; index3++) {
      var rule = this.index[index3];
      var css3 = rule.toString(options);
      if (!css3 && !link)
        continue;
      if (str)
        str += linebreak;
      str += css3;
    }
    return str;
  };
  return RuleList2;
}();
var StyleSheet = /* @__PURE__ */ function() {
  function StyleSheet2(styles11, options) {
    this.attached = false;
    this.deployed = false;
    this.classes = {};
    this.keyframes = {};
    this.options = _extends({}, options, {
      sheet: this,
      parent: this,
      classes: this.classes,
      keyframes: this.keyframes
    });
    if (options.Renderer) {
      this.renderer = new options.Renderer(this);
    }
    this.rules = new RuleList(this.options);
    for (var name in styles11) {
      this.rules.add(name, styles11[name]);
    }
    this.rules.process();
  }
  var _proto = StyleSheet2.prototype;
  _proto.attach = function attach2() {
    if (this.attached)
      return this;
    if (this.renderer)
      this.renderer.attach();
    this.attached = true;
    if (!this.deployed)
      this.deploy();
    return this;
  };
  _proto.detach = function detach2() {
    if (!this.attached)
      return this;
    if (this.renderer)
      this.renderer.detach();
    this.attached = false;
    return this;
  };
  _proto.addRule = function addRule(name, decl, options) {
    var queue = this.queue;
    if (this.attached && !queue)
      this.queue = [];
    var rule = this.rules.add(name, decl, options);
    if (!rule)
      return null;
    this.options.jss.plugins.onProcessRule(rule);
    if (this.attached) {
      if (!this.deployed)
        return rule;
      if (queue)
        queue.push(rule);
      else {
        this.insertRule(rule);
        if (this.queue) {
          this.queue.forEach(this.insertRule, this);
          this.queue = void 0;
        }
      }
      return rule;
    }
    this.deployed = false;
    return rule;
  };
  _proto.insertRule = function insertRule2(rule) {
    if (this.renderer) {
      this.renderer.insertRule(rule);
    }
  };
  _proto.addRules = function addRules(styles11, options) {
    var added = [];
    for (var name in styles11) {
      var rule = this.addRule(name, styles11[name], options);
      if (rule)
        added.push(rule);
    }
    return added;
  };
  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  };
  _proto.deleteRule = function deleteRule(name) {
    var rule = typeof name === "object" ? name : this.rules.get(name);
    if (!rule || this.attached && !rule.renderable) {
      return false;
    }
    this.rules.remove(rule);
    if (this.attached && rule.renderable && this.renderer) {
      return this.renderer.deleteRule(rule.renderable);
    }
    return true;
  };
  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  };
  _proto.deploy = function deploy() {
    if (this.renderer)
      this.renderer.deploy();
    this.deployed = true;
    return this;
  };
  _proto.update = function update3() {
    var _this$rules;
    (_this$rules = this.rules).update.apply(_this$rules, arguments);
    return this;
  };
  _proto.updateOne = function updateOne(rule, data, options) {
    this.rules.updateOne(rule, data, options);
    return this;
  };
  _proto.toString = function toString(options) {
    return this.rules.toString(options);
  };
  return StyleSheet2;
}();
var PluginsRegistry = /* @__PURE__ */ function() {
  function PluginsRegistry2() {
    this.plugins = {
      internal: [],
      external: []
    };
    this.registry = {};
  }
  var _proto = PluginsRegistry2.prototype;
  _proto.onCreateRule = function onCreateRule8(name, decl, options) {
    for (var i2 = 0; i2 < this.registry.onCreateRule.length; i2++) {
      var rule = this.registry.onCreateRule[i2](name, decl, options);
      if (rule)
        return rule;
    }
    return null;
  };
  _proto.onProcessRule = function onProcessRule(rule) {
    if (rule.isProcessed)
      return;
    var sheet = rule.options.sheet;
    for (var i2 = 0; i2 < this.registry.onProcessRule.length; i2++) {
      this.registry.onProcessRule[i2](rule, sheet);
    }
    if (rule.style)
      this.onProcessStyle(rule.style, rule, sheet);
    rule.isProcessed = true;
  };
  _proto.onProcessStyle = function onProcessStyle2(style, rule, sheet) {
    for (var i2 = 0; i2 < this.registry.onProcessStyle.length; i2++) {
      rule.style = this.registry.onProcessStyle[i2](rule.style, rule, sheet);
    }
  };
  _proto.onProcessSheet = function onProcessSheet(sheet) {
    for (var i2 = 0; i2 < this.registry.onProcessSheet.length; i2++) {
      this.registry.onProcessSheet[i2](sheet);
    }
  };
  _proto.onUpdate = function onUpdate2(data, rule, sheet, options) {
    for (var i2 = 0; i2 < this.registry.onUpdate.length; i2++) {
      this.registry.onUpdate[i2](data, rule, sheet, options);
    }
  };
  _proto.onChangeValue = function onChangeValue2(value, prop, rule) {
    var processedValue = value;
    for (var i2 = 0; i2 < this.registry.onChangeValue.length; i2++) {
      processedValue = this.registry.onChangeValue[i2](processedValue, prop, rule);
    }
    return processedValue;
  };
  _proto.use = function use(newPlugin, options) {
    if (options === void 0) {
      options = {
        queue: "external"
      };
    }
    var plugins3 = this.plugins[options.queue];
    if (plugins3.indexOf(newPlugin) !== -1) {
      return;
    }
    plugins3.push(newPlugin);
    this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function(registry, plugin) {
      for (var name in plugin) {
        if (name in registry) {
          registry[name].push(plugin[name]);
        } else {
          true ? tiny_warning_esm_default(false, '[JSS] Unknown hook "' + name + '".') : void 0;
        }
      }
      return registry;
    }, {
      onCreateRule: [],
      onProcessRule: [],
      onProcessStyle: [],
      onProcessSheet: [],
      onChangeValue: [],
      onUpdate: []
    });
  };
  return PluginsRegistry2;
}();
var SheetsRegistry = /* @__PURE__ */ function() {
  function SheetsRegistry2() {
    this.registry = [];
  }
  var _proto = SheetsRegistry2.prototype;
  _proto.add = function add(sheet) {
    var registry = this.registry;
    var index3 = sheet.options.index;
    if (registry.indexOf(sheet) !== -1)
      return;
    if (registry.length === 0 || index3 >= this.index) {
      registry.push(sheet);
      return;
    }
    for (var i2 = 0; i2 < registry.length; i2++) {
      if (registry[i2].options.index > index3) {
        registry.splice(i2, 0, sheet);
        return;
      }
    }
  };
  _proto.reset = function reset() {
    this.registry = [];
  };
  _proto.remove = function remove(sheet) {
    var index3 = this.registry.indexOf(sheet);
    this.registry.splice(index3, 1);
  };
  _proto.toString = function toString(_temp) {
    var _ref = _temp === void 0 ? {} : _temp, attached = _ref.attached, options = _objectWithoutPropertiesLoose(_ref, ["attached"]);
    var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
    var css3 = "";
    for (var i2 = 0; i2 < this.registry.length; i2++) {
      var sheet = this.registry[i2];
      if (attached != null && sheet.attached !== attached) {
        continue;
      }
      if (css3)
        css3 += linebreak;
      css3 += sheet.toString(options);
    }
    return css3;
  };
  _createClass(SheetsRegistry2, [{
    key: "index",
    get: function get3() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]);
  return SheetsRegistry2;
}();
var sheets = new SheetsRegistry();
var globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" && window.Math === Math ? window : typeof self !== "undefined" && self.Math === Math ? self : Function("return this")();
var ns = "2f1acc6c3a606b082e5eef5e54414ffb";
if (globalThis$1[ns] == null)
  globalThis$1[ns] = 0;
var moduleId = globalThis$1[ns]++;
var maxRules = 1e10;
var createGenerateId = function createGenerateId2(options) {
  if (options === void 0) {
    options = {};
  }
  var ruleCounter = 0;
  var generateId = function generateId2(rule, sheet) {
    ruleCounter += 1;
    if (ruleCounter > maxRules) {
      true ? tiny_warning_esm_default(false, "[JSS] You might have a memory leak. Rule counter is at " + ruleCounter + ".") : void 0;
    }
    var jssId = "";
    var prefix2 = "";
    if (sheet) {
      if (sheet.options.classNamePrefix) {
        prefix2 = sheet.options.classNamePrefix;
      }
      if (sheet.options.jss.id != null) {
        jssId = String(sheet.options.jss.id);
      }
    }
    if (options.minify) {
      return "" + (prefix2 || "c") + moduleId + jssId + ruleCounter;
    }
    return prefix2 + rule.key + "-" + moduleId + (jssId ? "-" + jssId : "") + "-" + ruleCounter;
  };
  return generateId;
};
var memoize = function memoize2(fn) {
  var value;
  return function() {
    if (!value)
      value = fn();
    return value;
  };
};
var getPropertyValue = function getPropertyValue2(cssRule, prop) {
  try {
    if (cssRule.attributeStyleMap) {
      return cssRule.attributeStyleMap.get(prop);
    }
    return cssRule.style.getPropertyValue(prop);
  } catch (err) {
    return "";
  }
};
var setProperty = function setProperty2(cssRule, prop, value) {
  try {
    var cssValue = value;
    if (Array.isArray(value)) {
      cssValue = toCssValue(value, true);
      if (value[value.length - 1] === "!important") {
        cssRule.style.setProperty(prop, cssValue, "important");
        return true;
      }
    }
    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.set(prop, cssValue);
    } else {
      cssRule.style.setProperty(prop, cssValue);
    }
  } catch (err) {
    return false;
  }
  return true;
};
var removeProperty = function removeProperty2(cssRule, prop) {
  try {
    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.delete(prop);
    } else {
      cssRule.style.removeProperty(prop);
    }
  } catch (err) {
    true ? tiny_warning_esm_default(false, '[JSS] DOMException "' + err.message + '" was thrown. Tried to remove property "' + prop + '".') : void 0;
  }
};
var setSelector = function setSelector2(cssRule, selectorText) {
  cssRule.selectorText = selectorText;
  return cssRule.selectorText === selectorText;
};
var getHead = memoize(function() {
  return document.querySelector("head");
});
function findHigherSheet(registry, options) {
  for (var i2 = 0; i2 < registry.length; i2++) {
    var sheet = registry[i2];
    if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }
  return null;
}
function findHighestSheet(registry, options) {
  for (var i2 = registry.length - 1; i2 >= 0; i2--) {
    var sheet = registry[i2];
    if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }
  return null;
}
function findCommentNode(text) {
  var head = getHead();
  for (var i2 = 0; i2 < head.childNodes.length; i2++) {
    var node = head.childNodes[i2];
    if (node.nodeType === 8 && node.nodeValue.trim() === text) {
      return node;
    }
  }
  return null;
}
function findPrevNode(options) {
  var registry = sheets.registry;
  if (registry.length > 0) {
    var sheet = findHigherSheet(registry, options);
    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element
      };
    }
    sheet = findHighestSheet(registry, options);
    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element.nextSibling
      };
    }
  }
  var insertionPoint = options.insertionPoint;
  if (insertionPoint && typeof insertionPoint === "string") {
    var comment = findCommentNode(insertionPoint);
    if (comment) {
      return {
        parent: comment.parentNode,
        node: comment.nextSibling
      };
    }
    true ? tiny_warning_esm_default(false, '[JSS] Insertion point "' + insertionPoint + '" not found.') : void 0;
  }
  return false;
}
function insertStyle(style, options) {
  var insertionPoint = options.insertionPoint;
  var nextNode = findPrevNode(options);
  if (nextNode !== false && nextNode.parent) {
    nextNode.parent.insertBefore(style, nextNode.node);
    return;
  }
  if (insertionPoint && typeof insertionPoint.nodeType === "number") {
    var insertionPointElement = insertionPoint;
    var parentNode = insertionPointElement.parentNode;
    if (parentNode)
      parentNode.insertBefore(style, insertionPointElement.nextSibling);
    else
      true ? tiny_warning_esm_default(false, "[JSS] Insertion point is not in the DOM.") : void 0;
    return;
  }
  getHead().appendChild(style);
}
var getNonce = memoize(function() {
  var node = document.querySelector('meta[property="csp-nonce"]');
  return node ? node.getAttribute("content") : null;
});
var _insertRule = function insertRule(container, rule, index3) {
  try {
    if ("insertRule" in container) {
      container.insertRule(rule, index3);
    } else if ("appendRule" in container) {
      container.appendRule(rule);
    }
  } catch (err) {
    true ? tiny_warning_esm_default(false, "[JSS] " + err.message) : void 0;
    return false;
  }
  return container.cssRules[index3];
};
var getValidRuleInsertionIndex = function getValidRuleInsertionIndex2(container, index3) {
  var maxIndex = container.cssRules.length;
  if (index3 === void 0 || index3 > maxIndex) {
    return maxIndex;
  }
  return index3;
};
var createStyle = function createStyle2() {
  var el2 = document.createElement("style");
  el2.textContent = "\n";
  return el2;
};
var DomRenderer = /* @__PURE__ */ function() {
  function DomRenderer2(sheet) {
    this.getPropertyValue = getPropertyValue;
    this.setProperty = setProperty;
    this.removeProperty = removeProperty;
    this.setSelector = setSelector;
    this.hasInsertedRules = false;
    this.cssRules = [];
    if (sheet)
      sheets.add(sheet);
    this.sheet = sheet;
    var _ref = this.sheet ? this.sheet.options : {}, media = _ref.media, meta = _ref.meta, element = _ref.element;
    this.element = element || createStyle();
    this.element.setAttribute("data-jss", "");
    if (media)
      this.element.setAttribute("media", media);
    if (meta)
      this.element.setAttribute("data-meta", meta);
    var nonce = getNonce();
    if (nonce)
      this.element.setAttribute("nonce", nonce);
  }
  var _proto = DomRenderer2.prototype;
  _proto.attach = function attach2() {
    if (this.element.parentNode || !this.sheet)
      return;
    insertStyle(this.element, this.sheet.options);
    var deployed = Boolean(this.sheet && this.sheet.deployed);
    if (this.hasInsertedRules && deployed) {
      this.hasInsertedRules = false;
      this.deploy();
    }
  };
  _proto.detach = function detach2() {
    if (!this.sheet)
      return;
    var parentNode = this.element.parentNode;
    if (parentNode)
      parentNode.removeChild(this.element);
    if (this.sheet.options.link) {
      this.cssRules = [];
      this.element.textContent = "\n";
    }
  };
  _proto.deploy = function deploy() {
    var sheet = this.sheet;
    if (!sheet)
      return;
    if (sheet.options.link) {
      this.insertRules(sheet.rules);
      return;
    }
    this.element.textContent = "\n" + sheet.toString() + "\n";
  };
  _proto.insertRules = function insertRules(rules, nativeParent) {
    for (var i2 = 0; i2 < rules.index.length; i2++) {
      this.insertRule(rules.index[i2], i2, nativeParent);
    }
  };
  _proto.insertRule = function insertRule2(rule, index3, nativeParent) {
    if (nativeParent === void 0) {
      nativeParent = this.element.sheet;
    }
    if (rule.rules) {
      var parent = rule;
      var latestNativeParent = nativeParent;
      if (rule.type === "conditional" || rule.type === "keyframes") {
        var _insertionIndex = getValidRuleInsertionIndex(nativeParent, index3);
        latestNativeParent = _insertRule(nativeParent, parent.toString({
          children: false
        }), _insertionIndex);
        if (latestNativeParent === false) {
          return false;
        }
        this.refCssRule(rule, _insertionIndex, latestNativeParent);
      }
      this.insertRules(parent.rules, latestNativeParent);
      return latestNativeParent;
    }
    var ruleStr = rule.toString();
    if (!ruleStr)
      return false;
    var insertionIndex = getValidRuleInsertionIndex(nativeParent, index3);
    var nativeRule = _insertRule(nativeParent, ruleStr, insertionIndex);
    if (nativeRule === false) {
      return false;
    }
    this.hasInsertedRules = true;
    this.refCssRule(rule, insertionIndex, nativeRule);
    return nativeRule;
  };
  _proto.refCssRule = function refCssRule(rule, index3, cssRule) {
    rule.renderable = cssRule;
    if (rule.options.parent instanceof StyleSheet) {
      this.cssRules[index3] = cssRule;
    }
  };
  _proto.deleteRule = function deleteRule(cssRule) {
    var sheet = this.element.sheet;
    var index3 = this.indexOf(cssRule);
    if (index3 === -1)
      return false;
    sheet.deleteRule(index3);
    this.cssRules.splice(index3, 1);
    return true;
  };
  _proto.indexOf = function indexOf(cssRule) {
    return this.cssRules.indexOf(cssRule);
  };
  _proto.replaceRule = function replaceRule(cssRule, rule) {
    var index3 = this.indexOf(cssRule);
    if (index3 === -1)
      return false;
    this.element.sheet.deleteRule(index3);
    this.cssRules.splice(index3, 1);
    return this.insertRule(rule, index3);
  };
  _proto.getRules = function getRules() {
    return this.element.sheet.cssRules;
  };
  return DomRenderer2;
}();
var instanceCounter = 0;
var Jss = /* @__PURE__ */ function() {
  function Jss2(options) {
    this.id = instanceCounter++;
    this.version = "10.8.0";
    this.plugins = new PluginsRegistry();
    this.options = {
      id: {
        minify: false
      },
      createGenerateId,
      Renderer: module_default ? DomRenderer : null,
      plugins: []
    };
    this.generateId = createGenerateId({
      minify: false
    });
    for (var i2 = 0; i2 < plugins.length; i2++) {
      this.plugins.use(plugins[i2], {
        queue: "internal"
      });
    }
    this.setup(options);
  }
  var _proto = Jss2.prototype;
  _proto.setup = function setup(options) {
    if (options === void 0) {
      options = {};
    }
    if (options.createGenerateId) {
      this.options.createGenerateId = options.createGenerateId;
    }
    if (options.id) {
      this.options.id = _extends({}, this.options.id, options.id);
    }
    if (options.createGenerateId || options.id) {
      this.generateId = this.options.createGenerateId(this.options.id);
    }
    if (options.insertionPoint != null)
      this.options.insertionPoint = options.insertionPoint;
    if ("Renderer" in options) {
      this.options.Renderer = options.Renderer;
    }
    if (options.plugins)
      this.use.apply(this, options.plugins);
    return this;
  };
  _proto.createStyleSheet = function createStyleSheet(styles11, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, index3 = _options.index;
    if (typeof index3 !== "number") {
      index3 = sheets.index === 0 ? 0 : sheets.index + 1;
    }
    var sheet = new StyleSheet(styles11, _extends({}, options, {
      jss: this,
      generateId: options.generateId || this.generateId,
      insertionPoint: this.options.insertionPoint,
      Renderer: this.options.Renderer,
      index: index3
    }));
    this.plugins.onProcessSheet(sheet);
    return sheet;
  };
  _proto.removeStyleSheet = function removeStyleSheet(sheet) {
    sheet.detach();
    sheets.remove(sheet);
    return this;
  };
  _proto.createRule = function createRule$1(name, style, options) {
    if (style === void 0) {
      style = {};
    }
    if (options === void 0) {
      options = {};
    }
    if (typeof name === "object") {
      return this.createRule(void 0, name, style);
    }
    var ruleOptions = _extends({}, options, {
      name,
      jss: this,
      Renderer: this.options.Renderer
    });
    if (!ruleOptions.generateId)
      ruleOptions.generateId = this.generateId;
    if (!ruleOptions.classes)
      ruleOptions.classes = {};
    if (!ruleOptions.keyframes)
      ruleOptions.keyframes = {};
    var rule = createRule(name, style, ruleOptions);
    if (rule)
      this.plugins.onProcessRule(rule);
    return rule;
  };
  _proto.use = function use() {
    var _this = this;
    for (var _len = arguments.length, plugins3 = new Array(_len), _key = 0; _key < _len; _key++) {
      plugins3[_key] = arguments[_key];
    }
    plugins3.forEach(function(plugin) {
      _this.plugins.use(plugin);
    });
    return this;
  };
  return Jss2;
}();
var createJss = function createJss2(options) {
  return new Jss(options);
};
var hasCSSTOMSupport = typeof CSS === "object" && CSS != null && "number" in CSS;
function getDynamicStyles(styles11) {
  var to = null;
  for (var key in styles11) {
    var value = styles11[key];
    var type3 = typeof value;
    if (type3 === "function") {
      if (!to)
        to = {};
      to[key] = value;
    } else if (type3 === "object" && value !== null && !Array.isArray(value)) {
      var extracted = getDynamicStyles(value);
      if (extracted) {
        if (!to)
          to = {};
        to[key] = extracted;
      }
    }
  }
  return to;
}
var index = createJss();

// node_modules/jss-plugin-rule-value-function/dist/jss-plugin-rule-value-function.esm.js
var now = Date.now();
var fnValuesNs = "fnValues" + now;
var fnRuleNs = "fnStyle" + ++now;
var functionPlugin = function functionPlugin2() {
  return {
    onCreateRule: function onCreateRule8(name, decl, options) {
      if (typeof decl !== "function")
        return null;
      var rule = createRule(name, {}, options);
      rule[fnRuleNs] = decl;
      return rule;
    },
    onProcessStyle: function onProcessStyle2(style, rule) {
      if (fnValuesNs in rule || fnRuleNs in rule)
        return style;
      var fnValues = {};
      for (var prop in style) {
        var value = style[prop];
        if (typeof value !== "function")
          continue;
        delete style[prop];
        fnValues[prop] = value;
      }
      rule[fnValuesNs] = fnValues;
      return style;
    },
    onUpdate: function onUpdate2(data, rule, sheet, options) {
      var styleRule = rule;
      var fnRule = styleRule[fnRuleNs];
      if (fnRule) {
        styleRule.style = fnRule(data) || {};
        if (true) {
          for (var prop in styleRule.style) {
            if (typeof styleRule.style[prop] === "function") {
              true ? tiny_warning_esm_default(false, "[JSS] Function values inside function rules are not supported.") : void 0;
              break;
            }
          }
        }
      }
      var fnValues = styleRule[fnValuesNs];
      if (fnValues) {
        for (var _prop in fnValues) {
          styleRule.prop(_prop, fnValues[_prop](data), options);
        }
      }
    }
  };
};
var jss_plugin_rule_value_function_esm_default = functionPlugin;

// node_modules/jss-plugin-global/dist/jss-plugin-global.esm.js
var at = "@global";
var atPrefix = "@global ";
var GlobalContainerRule = /* @__PURE__ */ function() {
  function GlobalContainerRule2(key, styles11, options) {
    this.type = "global";
    this.at = at;
    this.isProcessed = false;
    this.key = key;
    this.options = options;
    this.rules = new RuleList(_extends({}, options, {
      parent: this
    }));
    for (var selector in styles11) {
      this.rules.add(selector, styles11[selector]);
    }
    this.rules.process();
  }
  var _proto = GlobalContainerRule2.prototype;
  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  };
  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    if (rule)
      this.options.jss.plugins.onProcessRule(rule);
    return rule;
  };
  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  };
  _proto.toString = function toString() {
    return this.rules.toString();
  };
  return GlobalContainerRule2;
}();
var GlobalPrefixedRule = /* @__PURE__ */ function() {
  function GlobalPrefixedRule2(key, style, options) {
    this.type = "global";
    this.at = at;
    this.isProcessed = false;
    this.key = key;
    this.options = options;
    var selector = key.substr(atPrefix.length);
    this.rule = options.jss.createRule(selector, style, _extends({}, options, {
      parent: this
    }));
  }
  var _proto2 = GlobalPrefixedRule2.prototype;
  _proto2.toString = function toString(options) {
    return this.rule ? this.rule.toString(options) : "";
  };
  return GlobalPrefixedRule2;
}();
var separatorRegExp = /\s*,\s*/g;
function addScope(selector, scope) {
  var parts = selector.split(separatorRegExp);
  var scoped = "";
  for (var i2 = 0; i2 < parts.length; i2++) {
    scoped += scope + " " + parts[i2].trim();
    if (parts[i2 + 1])
      scoped += ", ";
  }
  return scoped;
}
function handleNestedGlobalContainerRule(rule, sheet) {
  var options = rule.options, style = rule.style;
  var rules = style ? style[at] : null;
  if (!rules)
    return;
  for (var name in rules) {
    sheet.addRule(name, rules[name], _extends({}, options, {
      selector: addScope(name, rule.selector)
    }));
  }
  delete style[at];
}
function handlePrefixedGlobalRule(rule, sheet) {
  var options = rule.options, style = rule.style;
  for (var prop in style) {
    if (prop[0] !== "@" || prop.substr(0, at.length) !== at)
      continue;
    var selector = addScope(prop.substr(at.length), rule.selector);
    sheet.addRule(selector, style[prop], _extends({}, options, {
      selector
    }));
    delete style[prop];
  }
}
function jssGlobal() {
  function onCreateRule8(name, styles11, options) {
    if (!name)
      return null;
    if (name === at) {
      return new GlobalContainerRule(name, styles11, options);
    }
    if (name[0] === "@" && name.substr(0, atPrefix.length) === atPrefix) {
      return new GlobalPrefixedRule(name, styles11, options);
    }
    var parent = options.parent;
    if (parent) {
      if (parent.type === "global" || parent.options.parent && parent.options.parent.type === "global") {
        options.scoped = false;
      }
    }
    if (options.scoped === false) {
      options.selector = name;
    }
    return null;
  }
  function onProcessRule(rule, sheet) {
    if (rule.type !== "style" || !sheet)
      return;
    handleNestedGlobalContainerRule(rule, sheet);
    handlePrefixedGlobalRule(rule, sheet);
  }
  return {
    onCreateRule: onCreateRule8,
    onProcessRule
  };
}
var jss_plugin_global_esm_default = jssGlobal;

// node_modules/jss-plugin-nested/dist/jss-plugin-nested.esm.js
var separatorRegExp2 = /\s*,\s*/g;
var parentRegExp = /&/g;
var refRegExp2 = /\$([\w-]+)/g;
function jssNested() {
  function getReplaceRef(container, sheet) {
    return function(match, key) {
      var rule = container.getRule(key) || sheet && sheet.getRule(key);
      if (rule) {
        return rule.selector;
      }
      true ? tiny_warning_esm_default(false, '[JSS] Could not find the referenced rule "' + key + '" in "' + (container.options.meta || container.toString()) + '".') : void 0;
      return key;
    };
  }
  function replaceParentRefs(nestedProp, parentProp) {
    var parentSelectors = parentProp.split(separatorRegExp2);
    var nestedSelectors = nestedProp.split(separatorRegExp2);
    var result = "";
    for (var i2 = 0; i2 < parentSelectors.length; i2++) {
      var parent = parentSelectors[i2];
      for (var j2 = 0; j2 < nestedSelectors.length; j2++) {
        var nested = nestedSelectors[j2];
        if (result)
          result += ", ";
        result += nested.indexOf("&") !== -1 ? nested.replace(parentRegExp, parent) : parent + " " + nested;
      }
    }
    return result;
  }
  function getOptions(rule, container, prevOptions) {
    if (prevOptions)
      return _extends({}, prevOptions, {
        index: prevOptions.index + 1
      });
    var nestingLevel = rule.options.nestingLevel;
    nestingLevel = nestingLevel === void 0 ? 1 : nestingLevel + 1;
    var options = _extends({}, rule.options, {
      nestingLevel,
      index: container.indexOf(rule) + 1
    });
    delete options.name;
    return options;
  }
  function onProcessStyle2(style, rule, sheet) {
    if (rule.type !== "style")
      return style;
    var styleRule = rule;
    var container = styleRule.options.parent;
    var options;
    var replaceRef3;
    for (var prop in style) {
      var isNested = prop.indexOf("&") !== -1;
      var isNestedConditional = prop[0] === "@";
      if (!isNested && !isNestedConditional)
        continue;
      options = getOptions(styleRule, container, options);
      if (isNested) {
        var selector = replaceParentRefs(prop, styleRule.selector);
        if (!replaceRef3)
          replaceRef3 = getReplaceRef(container, sheet);
        selector = selector.replace(refRegExp2, replaceRef3);
        container.addRule(selector, style[prop], _extends({}, options, {
          selector
        }));
      } else if (isNestedConditional) {
        container.addRule(prop, {}, options).addRule(styleRule.key, style[prop], {
          selector: styleRule.selector
        });
      }
      delete style[prop];
    }
    return style;
  }
  return {
    onProcessStyle: onProcessStyle2
  };
}
var jss_plugin_nested_esm_default = jssNested;

// node_modules/hyphenate-style-name/index.js
var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};
function toHyphenLower(match) {
  return "-" + match.toLowerCase();
}
function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name];
  }
  var hName = name.replace(uppercasePattern, toHyphenLower);
  return cache[name] = msPattern.test(hName) ? "-" + hName : hName;
}
var hyphenate_style_name_default = hyphenateStyleName;

// node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js
function convertCase(style) {
  var converted = {};
  for (var prop in style) {
    var key = prop.indexOf("--") === 0 ? prop : hyphenate_style_name_default(prop);
    converted[key] = style[prop];
  }
  if (style.fallbacks) {
    if (Array.isArray(style.fallbacks))
      converted.fallbacks = style.fallbacks.map(convertCase);
    else
      converted.fallbacks = convertCase(style.fallbacks);
  }
  return converted;
}
function camelCase() {
  function onProcessStyle2(style) {
    if (Array.isArray(style)) {
      for (var index3 = 0; index3 < style.length; index3++) {
        style[index3] = convertCase(style[index3]);
      }
      return style;
    }
    return convertCase(style);
  }
  function onChangeValue2(value, prop, rule) {
    if (prop.indexOf("--") === 0) {
      return value;
    }
    var hyphenatedProp = hyphenate_style_name_default(prop);
    if (prop === hyphenatedProp)
      return value;
    rule.prop(hyphenatedProp, value);
    return null;
  }
  return {
    onProcessStyle: onProcessStyle2,
    onChangeValue: onChangeValue2
  };
}
var jss_plugin_camel_case_esm_default = camelCase;

// node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js
var px = hasCSSTOMSupport && CSS ? CSS.px : "px";
var ms = hasCSSTOMSupport && CSS ? CSS.ms : "ms";
var percent = hasCSSTOMSupport && CSS ? CSS.percent : "%";
var defaultUnits = {
  "animation-delay": ms,
  "animation-duration": ms,
  "background-position": px,
  "background-position-x": px,
  "background-position-y": px,
  "background-size": px,
  border: px,
  "border-bottom": px,
  "border-bottom-left-radius": px,
  "border-bottom-right-radius": px,
  "border-bottom-width": px,
  "border-left": px,
  "border-left-width": px,
  "border-radius": px,
  "border-right": px,
  "border-right-width": px,
  "border-top": px,
  "border-top-left-radius": px,
  "border-top-right-radius": px,
  "border-top-width": px,
  "border-width": px,
  "border-block": px,
  "border-block-end": px,
  "border-block-end-width": px,
  "border-block-start": px,
  "border-block-start-width": px,
  "border-block-width": px,
  "border-inline": px,
  "border-inline-end": px,
  "border-inline-end-width": px,
  "border-inline-start": px,
  "border-inline-start-width": px,
  "border-inline-width": px,
  "border-start-start-radius": px,
  "border-start-end-radius": px,
  "border-end-start-radius": px,
  "border-end-end-radius": px,
  margin: px,
  "margin-bottom": px,
  "margin-left": px,
  "margin-right": px,
  "margin-top": px,
  "margin-block": px,
  "margin-block-end": px,
  "margin-block-start": px,
  "margin-inline": px,
  "margin-inline-end": px,
  "margin-inline-start": px,
  padding: px,
  "padding-bottom": px,
  "padding-left": px,
  "padding-right": px,
  "padding-top": px,
  "padding-block": px,
  "padding-block-end": px,
  "padding-block-start": px,
  "padding-inline": px,
  "padding-inline-end": px,
  "padding-inline-start": px,
  "mask-position-x": px,
  "mask-position-y": px,
  "mask-size": px,
  height: px,
  width: px,
  "min-height": px,
  "max-height": px,
  "min-width": px,
  "max-width": px,
  bottom: px,
  left: px,
  top: px,
  right: px,
  inset: px,
  "inset-block": px,
  "inset-block-end": px,
  "inset-block-start": px,
  "inset-inline": px,
  "inset-inline-end": px,
  "inset-inline-start": px,
  "box-shadow": px,
  "text-shadow": px,
  "column-gap": px,
  "column-rule": px,
  "column-rule-width": px,
  "column-width": px,
  "font-size": px,
  "font-size-delta": px,
  "letter-spacing": px,
  "text-decoration-thickness": px,
  "text-indent": px,
  "text-stroke": px,
  "text-stroke-width": px,
  "word-spacing": px,
  motion: px,
  "motion-offset": px,
  outline: px,
  "outline-offset": px,
  "outline-width": px,
  perspective: px,
  "perspective-origin-x": percent,
  "perspective-origin-y": percent,
  "transform-origin": percent,
  "transform-origin-x": percent,
  "transform-origin-y": percent,
  "transform-origin-z": percent,
  "transition-delay": ms,
  "transition-duration": ms,
  "vertical-align": px,
  "flex-basis": px,
  "shape-margin": px,
  size: px,
  gap: px,
  grid: px,
  "grid-gap": px,
  "row-gap": px,
  "grid-row-gap": px,
  "grid-column-gap": px,
  "grid-template-rows": px,
  "grid-template-columns": px,
  "grid-auto-rows": px,
  "grid-auto-columns": px,
  "box-shadow-x": px,
  "box-shadow-y": px,
  "box-shadow-blur": px,
  "box-shadow-spread": px,
  "font-line-height": px,
  "text-shadow-x": px,
  "text-shadow-y": px,
  "text-shadow-blur": px
};
function addCamelCasedVersion(obj) {
  var regExp2 = /(-[a-z])/g;
  var replace = function replace2(str) {
    return str[1].toUpperCase();
  };
  var newObj = {};
  for (var key in obj) {
    newObj[key] = obj[key];
    newObj[key.replace(regExp2, replace)] = obj[key];
  }
  return newObj;
}
var units = addCamelCasedVersion(defaultUnits);
function iterate(prop, value, options) {
  if (value == null)
    return value;
  if (Array.isArray(value)) {
    for (var i2 = 0; i2 < value.length; i2++) {
      value[i2] = iterate(prop, value[i2], options);
    }
  } else if (typeof value === "object") {
    if (prop === "fallbacks") {
      for (var innerProp in value) {
        value[innerProp] = iterate(innerProp, value[innerProp], options);
      }
    } else {
      for (var _innerProp in value) {
        value[_innerProp] = iterate(prop + "-" + _innerProp, value[_innerProp], options);
      }
    }
  } else if (typeof value === "number" && isNaN(value) === false) {
    var unit = options[prop] || units[prop];
    if (unit && !(value === 0 && unit === px)) {
      return typeof unit === "function" ? unit(value).toString() : "" + value + unit;
    }
    return value.toString();
  }
  return value;
}
function defaultUnit(options) {
  if (options === void 0) {
    options = {};
  }
  var camelCasedOptions = addCamelCasedVersion(options);
  function onProcessStyle2(style, rule) {
    if (rule.type !== "style")
      return style;
    for (var prop in style) {
      style[prop] = iterate(prop, style[prop], camelCasedOptions);
    }
    return style;
  }
  function onChangeValue2(value, prop) {
    return iterate(prop, value, camelCasedOptions);
  }
  return {
    onProcessStyle: onProcessStyle2,
    onChangeValue: onChangeValue2
  };
}
var jss_plugin_default_unit_esm_default = defaultUnit;

// node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
    arr2[i2] = arr[i2];
  }
  return arr2;
}

// node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}

// node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}

// node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor)
    n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray(o2, minLen);
}

// node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

// node_modules/css-vendor/dist/css-vendor.esm.js
var js = "";
var css = "";
var vendor = "";
var browser = "";
var isTouch = module_default && "ontouchstart" in document.documentElement;
if (module_default) {
  jsCssMap = {
    Moz: "-moz-",
    ms: "-ms-",
    O: "-o-",
    Webkit: "-webkit-"
  };
  _document$createEleme = document.createElement("p"), style = _document$createEleme.style;
  testProp = "Transform";
  for (key in jsCssMap) {
    if (key + testProp in style) {
      js = key;
      css = jsCssMap[key];
      break;
    }
  }
  if (js === "Webkit" && "msHyphens" in style) {
    js = "ms";
    css = jsCssMap.ms;
    browser = "edge";
  }
  if (js === "Webkit" && "-apple-trailing-word" in style) {
    vendor = "apple";
  }
}
var jsCssMap;
var _document$createEleme;
var style;
var testProp;
var key;
var prefix = {
  js,
  css,
  vendor,
  browser,
  isTouch
};
function supportedKeyframes(key) {
  if (key[1] === "-")
    return key;
  if (prefix.js === "ms")
    return key;
  return "@" + prefix.css + "keyframes" + key.substr(10);
}
var appearence = {
  noPrefill: ["appearance"],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== "appearance")
      return false;
    if (prefix.js === "ms")
      return "-webkit-" + prop;
    return prefix.css + prop;
  }
};
var colorAdjust = {
  noPrefill: ["color-adjust"],
  supportedProperty: function supportedProperty2(prop) {
    if (prop !== "color-adjust")
      return false;
    if (prefix.js === "Webkit")
      return prefix.css + "print-" + prop;
    return prop;
  }
};
var regExp = /[-\s]+(.)?/g;
function toUpper(match, c2) {
  return c2 ? c2.toUpperCase() : "";
}
function camelize(str) {
  return str.replace(regExp, toUpper);
}
function pascalize(str) {
  return camelize("-" + str);
}
var mask = {
  noPrefill: ["mask"],
  supportedProperty: function supportedProperty3(prop, style) {
    if (!/^mask/.test(prop))
      return false;
    if (prefix.js === "Webkit") {
      var longhand = "mask-image";
      if (camelize(longhand) in style) {
        return prop;
      }
      if (prefix.js + pascalize(longhand) in style) {
        return prefix.css + prop;
      }
    }
    return prop;
  }
};
var textOrientation = {
  noPrefill: ["text-orientation"],
  supportedProperty: function supportedProperty4(prop) {
    if (prop !== "text-orientation")
      return false;
    if (prefix.vendor === "apple" && !prefix.isTouch) {
      return prefix.css + prop;
    }
    return prop;
  }
};
var transform = {
  noPrefill: ["transform"],
  supportedProperty: function supportedProperty5(prop, style, options) {
    if (prop !== "transform")
      return false;
    if (options.transform) {
      return prop;
    }
    return prefix.css + prop;
  }
};
var transition = {
  noPrefill: ["transition"],
  supportedProperty: function supportedProperty6(prop, style, options) {
    if (prop !== "transition")
      return false;
    if (options.transition) {
      return prop;
    }
    return prefix.css + prop;
  }
};
var writingMode = {
  noPrefill: ["writing-mode"],
  supportedProperty: function supportedProperty7(prop) {
    if (prop !== "writing-mode")
      return false;
    if (prefix.js === "Webkit" || prefix.js === "ms" && prefix.browser !== "edge") {
      return prefix.css + prop;
    }
    return prop;
  }
};
var userSelect = {
  noPrefill: ["user-select"],
  supportedProperty: function supportedProperty8(prop) {
    if (prop !== "user-select")
      return false;
    if (prefix.js === "Moz" || prefix.js === "ms" || prefix.vendor === "apple") {
      return prefix.css + prop;
    }
    return prop;
  }
};
var breakPropsOld = {
  supportedProperty: function supportedProperty9(prop, style) {
    if (!/^break-/.test(prop))
      return false;
    if (prefix.js === "Webkit") {
      var jsProp = "WebkitColumn" + pascalize(prop);
      return jsProp in style ? prefix.css + "column-" + prop : false;
    }
    if (prefix.js === "Moz") {
      var _jsProp = "page" + pascalize(prop);
      return _jsProp in style ? "page-" + prop : false;
    }
    return false;
  }
};
var inlineLogicalOld = {
  supportedProperty: function supportedProperty10(prop, style) {
    if (!/^(border|margin|padding)-inline/.test(prop))
      return false;
    if (prefix.js === "Moz")
      return prop;
    var newProp = prop.replace("-inline", "");
    return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
  }
};
var unprefixed = {
  supportedProperty: function supportedProperty11(prop, style) {
    return camelize(prop) in style ? prop : false;
  }
};
var prefixed = {
  supportedProperty: function supportedProperty12(prop, style) {
    var pascalized = pascalize(prop);
    if (prop[0] === "-")
      return prop;
    if (prop[0] === "-" && prop[1] === "-")
      return prop;
    if (prefix.js + pascalized in style)
      return prefix.css + prop;
    if (prefix.js !== "Webkit" && "Webkit" + pascalized in style)
      return "-webkit-" + prop;
    return false;
  }
};
var scrollSnap = {
  supportedProperty: function supportedProperty13(prop) {
    if (prop.substring(0, 11) !== "scroll-snap")
      return false;
    if (prefix.js === "ms") {
      return "" + prefix.css + prop;
    }
    return prop;
  }
};
var overscrollBehavior = {
  supportedProperty: function supportedProperty14(prop) {
    if (prop !== "overscroll-behavior")
      return false;
    if (prefix.js === "ms") {
      return prefix.css + "scroll-chaining";
    }
    return prop;
  }
};
var propMap = {
  "flex-grow": "flex-positive",
  "flex-shrink": "flex-negative",
  "flex-basis": "flex-preferred-size",
  "justify-content": "flex-pack",
  order: "flex-order",
  "align-items": "flex-align",
  "align-content": "flex-line-pack"
};
var flex2012 = {
  supportedProperty: function supportedProperty15(prop, style) {
    var newProp = propMap[prop];
    if (!newProp)
      return false;
    return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
  }
};
var propMap$1 = {
  flex: "box-flex",
  "flex-grow": "box-flex",
  "flex-direction": ["box-orient", "box-direction"],
  order: "box-ordinal-group",
  "align-items": "box-align",
  "flex-flow": ["box-orient", "box-direction"],
  "justify-content": "box-pack"
};
var propKeys = Object.keys(propMap$1);
var prefixCss = function prefixCss2(p) {
  return prefix.css + p;
};
var flex2009 = {
  supportedProperty: function supportedProperty16(prop, style, _ref) {
    var multiple = _ref.multiple;
    if (propKeys.indexOf(prop) > -1) {
      var newProp = propMap$1[prop];
      if (!Array.isArray(newProp)) {
        return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
      }
      if (!multiple)
        return false;
      for (var i2 = 0; i2 < newProp.length; i2++) {
        if (!(prefix.js + pascalize(newProp[0]) in style)) {
          return false;
        }
      }
      return newProp.map(prefixCss);
    }
    return false;
  }
};
var plugins2 = [appearence, colorAdjust, mask, textOrientation, transform, transition, writingMode, userSelect, breakPropsOld, inlineLogicalOld, unprefixed, prefixed, scrollSnap, overscrollBehavior, flex2012, flex2009];
var propertyDetectors = plugins2.filter(function(p) {
  return p.supportedProperty;
}).map(function(p) {
  return p.supportedProperty;
});
var noPrefill = plugins2.filter(function(p) {
  return p.noPrefill;
}).reduce(function(a2, p) {
  a2.push.apply(a2, _toConsumableArray(p.noPrefill));
  return a2;
}, []);
var el;
var cache2 = {};
if (module_default) {
  el = document.createElement("p");
  computed = window.getComputedStyle(document.documentElement, "");
  for (key$1 in computed) {
    if (!isNaN(key$1))
      cache2[computed[key$1]] = computed[key$1];
  }
  noPrefill.forEach(function(x2) {
    return delete cache2[x2];
  });
}
var computed;
var key$1;
function supportedProperty17(prop, options) {
  if (options === void 0) {
    options = {};
  }
  if (!el)
    return prop;
  if (cache2[prop] != null) {
    return cache2[prop];
  }
  if (prop === "transition" || prop === "transform") {
    options[prop] = prop in el.style;
  }
  for (var i2 = 0; i2 < propertyDetectors.length; i2++) {
    cache2[prop] = propertyDetectors[i2](prop, el.style, options);
    if (cache2[prop])
      break;
  }
  try {
    el.style[prop] = "";
  } catch (err) {
    return false;
  }
  return cache2[prop];
}
var cache$1 = {};
var transitionProperties = {
  transition: 1,
  "transition-property": 1,
  "-webkit-transition": 1,
  "-webkit-transition-property": 1
};
var transPropsRegExp = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
var el$1;
function prefixTransitionCallback(match, p1, p2) {
  if (p1 === "var")
    return "var";
  if (p1 === "all")
    return "all";
  if (p2 === "all")
    return ", all";
  var prefixedValue = p1 ? supportedProperty17(p1) : ", " + supportedProperty17(p2);
  if (!prefixedValue)
    return p1 || p2;
  return prefixedValue;
}
if (module_default)
  el$1 = document.createElement("p");
function supportedValue(property, value) {
  var prefixedValue = value;
  if (!el$1 || property === "content")
    return value;
  if (typeof prefixedValue !== "string" || !isNaN(parseInt(prefixedValue, 10))) {
    return prefixedValue;
  }
  var cacheKey = property + prefixedValue;
  if (cache$1[cacheKey] != null) {
    return cache$1[cacheKey];
  }
  try {
    el$1.style[property] = prefixedValue;
  } catch (err) {
    cache$1[cacheKey] = false;
    return false;
  }
  if (transitionProperties[property]) {
    prefixedValue = prefixedValue.replace(transPropsRegExp, prefixTransitionCallback);
  } else if (el$1.style[property] === "") {
    prefixedValue = prefix.css + prefixedValue;
    if (prefixedValue === "-ms-flex")
      el$1.style[property] = "-ms-flexbox";
    el$1.style[property] = prefixedValue;
    if (el$1.style[property] === "") {
      cache$1[cacheKey] = false;
      return false;
    }
  }
  el$1.style[property] = "";
  cache$1[cacheKey] = prefixedValue;
  return cache$1[cacheKey];
}

// node_modules/jss-plugin-vendor-prefixer/dist/jss-plugin-vendor-prefixer.esm.js
function jssVendorPrefixer() {
  function onProcessRule(rule) {
    if (rule.type === "keyframes") {
      var atRule = rule;
      atRule.at = supportedKeyframes(atRule.at);
    }
  }
  function prefixStyle(style) {
    for (var prop in style) {
      var value = style[prop];
      if (prop === "fallbacks" && Array.isArray(value)) {
        style[prop] = value.map(prefixStyle);
        continue;
      }
      var changeProp = false;
      var supportedProp = supportedProperty17(prop);
      if (supportedProp && supportedProp !== prop)
        changeProp = true;
      var changeValue = false;
      var supportedValue$1 = supportedValue(supportedProp, toCssValue(value));
      if (supportedValue$1 && supportedValue$1 !== value)
        changeValue = true;
      if (changeProp || changeValue) {
        if (changeProp)
          delete style[prop];
        style[supportedProp || prop] = supportedValue$1 || value;
      }
    }
    return style;
  }
  function onProcessStyle2(style, rule) {
    if (rule.type !== "style")
      return style;
    return prefixStyle(style);
  }
  function onChangeValue2(value, prop) {
    return supportedValue(prop, toCssValue(value)) || value;
  }
  return {
    onProcessRule,
    onProcessStyle: onProcessStyle2,
    onChangeValue: onChangeValue2
  };
}
var jss_plugin_vendor_prefixer_esm_default = jssVendorPrefixer;

// node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js
function jssPropsSort() {
  var sort = function sort2(prop0, prop1) {
    if (prop0.length === prop1.length) {
      return prop0 > prop1 ? 1 : -1;
    }
    return prop0.length - prop1.length;
  };
  return {
    onProcessStyle: function onProcessStyle2(style, rule) {
      if (rule.type !== "style")
        return style;
      var newStyle = {};
      var props = Object.keys(style).sort(sort);
      for (var i2 = 0; i2 < props.length; i2++) {
        newStyle[props[i2]] = style[props[i2]];
      }
      return newStyle;
    }
  };
}
var jss_plugin_props_sort_esm_default = jssPropsSort;

// node_modules/@material-ui/styles/esm/jssPreset/jssPreset.js
function jssPreset() {
  return {
    plugins: [
      jss_plugin_rule_value_function_esm_default(),
      jss_plugin_global_esm_default(),
      jss_plugin_nested_esm_default(),
      jss_plugin_camel_case_esm_default(),
      jss_plugin_default_unit_esm_default(),
      typeof window === "undefined" ? null : jss_plugin_vendor_prefixer_esm_default(),
      jss_plugin_props_sort_esm_default()
    ]
  };
}

// node_modules/@material-ui/styles/esm/makeStyles/makeStyles.js
import React4 from "react";

// node_modules/@material-ui/styles/esm/mergeClasses/mergeClasses.js
var import_utils = __toModule(require_utils());
function mergeClasses() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var baseClasses = options.baseClasses, newClasses = options.newClasses, Component3 = options.Component;
  if (!newClasses) {
    return baseClasses;
  }
  var nextClasses = _extends({}, baseClasses);
  if (true) {
    if (typeof newClasses === "string") {
      console.error(["Material-UI: The value `".concat(newClasses, "` ") + "provided to the classes prop of ".concat((0, import_utils.getDisplayName)(Component3), " is incorrect."), "You might want to use the className prop instead."].join("\n"));
      return baseClasses;
    }
  }
  Object.keys(newClasses).forEach(function(key) {
    if (true) {
      if (!baseClasses[key] && newClasses[key]) {
        console.error(["Material-UI: The key `".concat(key, "` ") + "provided to the classes prop is not implemented in ".concat((0, import_utils.getDisplayName)(Component3), "."), "You can only override one of the following: ".concat(Object.keys(baseClasses).join(","), ".")].join("\n"));
      }
      if (newClasses[key] && typeof newClasses[key] !== "string") {
        console.error(["Material-UI: The key `".concat(key, "` ") + "provided to the classes prop is not valid for ".concat((0, import_utils.getDisplayName)(Component3), "."), "You need to provide a non empty string instead of: ".concat(newClasses[key], ".")].join("\n"));
      }
    }
    if (newClasses[key]) {
      nextClasses[key] = "".concat(baseClasses[key], " ").concat(newClasses[key]);
    }
  });
  return nextClasses;
}

// node_modules/@material-ui/styles/esm/makeStyles/multiKeyStore.js
var multiKeyStore = {
  set: function set(cache3, key1, key2, value) {
    var subCache = cache3.get(key1);
    if (!subCache) {
      subCache = new Map();
      cache3.set(key1, subCache);
    }
    subCache.set(key2, value);
  },
  get: function get(cache3, key1, key2) {
    var subCache = cache3.get(key1);
    return subCache ? subCache.get(key2) : void 0;
  },
  delete: function _delete(cache3, key1, key2) {
    var subCache = cache3.get(key1);
    subCache.delete(key2);
  }
};
var multiKeyStore_default = multiKeyStore;

// node_modules/@material-ui/styles/esm/useTheme/useTheme.js
import React2 from "react";

// node_modules/@material-ui/styles/esm/useTheme/ThemeContext.js
import React from "react";
var ThemeContext = React.createContext(null);
if (true) {
  ThemeContext.displayName = "ThemeContext";
}
var ThemeContext_default = ThemeContext;

// node_modules/@material-ui/styles/esm/useTheme/useTheme.js
function useTheme() {
  var theme = React2.useContext(ThemeContext_default);
  if (true) {
    React2.useDebugValue(theme);
  }
  return theme;
}

// node_modules/@material-ui/styles/esm/StylesProvider/StylesProvider.js
var import_prop_types = __toModule(require_prop_types());
var import_utils2 = __toModule(require_utils());
import React3 from "react";
var jss = createJss(jssPreset());
var generateClassName = createGenerateClassName();
var sheetsManager = new Map();
var defaultOptions = {
  disableGeneration: false,
  generateClassName,
  jss,
  sheetsCache: null,
  sheetsManager,
  sheetsRegistry: null
};
var StylesContext = React3.createContext(defaultOptions);
if (true) {
  StylesContext.displayName = "StylesContext";
}
var injectFirstNode;
function StylesProvider(props) {
  var children = props.children, _props$injectFirst = props.injectFirst, injectFirst = _props$injectFirst === void 0 ? false : _props$injectFirst, _props$disableGenerat = props.disableGeneration, disableGeneration = _props$disableGenerat === void 0 ? false : _props$disableGenerat, localOptions = _objectWithoutProperties(props, ["children", "injectFirst", "disableGeneration"]);
  var outerOptions = React3.useContext(StylesContext);
  var context = _extends({}, outerOptions, {
    disableGeneration
  }, localOptions);
  if (true) {
    if (typeof window === "undefined" && !context.sheetsManager) {
      console.error("Material-UI: You need to use the ServerStyleSheets API when rendering on the server.");
    }
  }
  if (true) {
    if (context.jss.options.insertionPoint && injectFirst) {
      console.error("Material-UI: You cannot use a custom insertionPoint and <StylesContext injectFirst> at the same time.");
    }
  }
  if (true) {
    if (injectFirst && localOptions.jss) {
      console.error("Material-UI: You cannot use the jss and injectFirst props at the same time.");
    }
  }
  if (!context.jss.options.insertionPoint && injectFirst && typeof window !== "undefined") {
    if (!injectFirstNode) {
      var head = document.head;
      injectFirstNode = document.createComment("mui-inject-first");
      head.insertBefore(injectFirstNode, head.firstChild);
    }
    context.jss = createJss({
      plugins: jssPreset().plugins,
      insertionPoint: injectFirstNode
    });
  }
  return /* @__PURE__ */ React3.createElement(StylesContext.Provider, {
    value: context
  }, children);
}
true ? StylesProvider.propTypes = {
  children: import_prop_types.default.node.isRequired,
  disableGeneration: import_prop_types.default.bool,
  generateClassName: import_prop_types.default.func,
  injectFirst: import_prop_types.default.bool,
  jss: import_prop_types.default.object,
  serverGenerateClassName: import_prop_types.default.func,
  sheetsCache: import_prop_types.default.object,
  sheetsManager: import_prop_types.default.object,
  sheetsRegistry: import_prop_types.default.object
} : void 0;
if (true) {
  true ? StylesProvider.propTypes = (0, import_utils2.exactProp)(StylesProvider.propTypes) : void 0;
}

// node_modules/@material-ui/styles/esm/makeStyles/indexCounter.js
var indexCounter = -1e9;
function increment() {
  indexCounter += 1;
  if (true) {
    if (indexCounter >= 0) {
      console.warn(["Material-UI: You might have a memory leak.", "The indexCounter is not supposed to grow that much."].join("\n"));
    }
  }
  return indexCounter;
}

// node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof2(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof2 = function _typeof3(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof2 = function _typeof3(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof2(obj);
}

// node_modules/@material-ui/styles/esm/getStylesCreator/getStylesCreator.js
var import_utils3 = __toModule(require_utils());

// node_modules/@material-ui/styles/esm/getStylesCreator/noopTheme.js
var noopTheme = {};
var noopTheme_default = noopTheme;

// node_modules/@material-ui/styles/esm/getStylesCreator/getStylesCreator.js
function getStylesCreator(stylesOrCreator) {
  var themingEnabled = typeof stylesOrCreator === "function";
  if (true) {
    if (_typeof2(stylesOrCreator) !== "object" && !themingEnabled) {
      console.error(["Material-UI: The `styles` argument provided is invalid.", "You need to provide a function generating the styles or a styles object."].join("\n"));
    }
  }
  return {
    create: function create2(theme, name) {
      var styles11;
      try {
        styles11 = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;
      } catch (err) {
        if (true) {
          if (themingEnabled === true && theme === noopTheme_default) {
            console.error(["Material-UI: The `styles` argument provided is invalid.", "You are providing a function without a theme in the context.", "One of the parent elements needs to use a ThemeProvider."].join("\n"));
          }
        }
        throw err;
      }
      if (!name || !theme.overrides || !theme.overrides[name]) {
        return styles11;
      }
      var overrides = theme.overrides[name];
      var stylesWithOverrides = _extends({}, styles11);
      Object.keys(overrides).forEach(function(key) {
        if (true) {
          if (!stylesWithOverrides[key]) {
            console.warn(["Material-UI: You are trying to override a style that does not exist.", "Fix the `".concat(key, "` key of `theme.overrides.").concat(name, "`.")].join("\n"));
          }
        }
        stylesWithOverrides[key] = (0, import_utils3.deepmerge)(stylesWithOverrides[key], overrides[key]);
      });
      return stylesWithOverrides;
    },
    options: {}
  };
}

// node_modules/@material-ui/styles/esm/makeStyles/makeStyles.js
function getClasses(_ref, classes, Component3) {
  var state = _ref.state, stylesOptions = _ref.stylesOptions;
  if (stylesOptions.disableGeneration) {
    return classes || {};
  }
  if (!state.cacheClasses) {
    state.cacheClasses = {
      value: null,
      lastProp: null,
      lastJSS: {}
    };
  }
  var generate = false;
  if (state.classes !== state.cacheClasses.lastJSS) {
    state.cacheClasses.lastJSS = state.classes;
    generate = true;
  }
  if (classes !== state.cacheClasses.lastProp) {
    state.cacheClasses.lastProp = classes;
    generate = true;
  }
  if (generate) {
    state.cacheClasses.value = mergeClasses({
      baseClasses: state.cacheClasses.lastJSS,
      newClasses: classes,
      Component: Component3
    });
  }
  return state.cacheClasses.value;
}
function attach(_ref2, props) {
  var state = _ref2.state, theme = _ref2.theme, stylesOptions = _ref2.stylesOptions, stylesCreator = _ref2.stylesCreator, name = _ref2.name;
  if (stylesOptions.disableGeneration) {
    return;
  }
  var sheetManager = multiKeyStore_default.get(stylesOptions.sheetsManager, stylesCreator, theme);
  if (!sheetManager) {
    sheetManager = {
      refs: 0,
      staticSheet: null,
      dynamicStyles: null
    };
    multiKeyStore_default.set(stylesOptions.sheetsManager, stylesCreator, theme, sheetManager);
  }
  var options = _extends({}, stylesCreator.options, stylesOptions, {
    theme,
    flip: typeof stylesOptions.flip === "boolean" ? stylesOptions.flip : theme.direction === "rtl"
  });
  options.generateId = options.serverGenerateClassName || options.generateClassName;
  var sheetsRegistry = stylesOptions.sheetsRegistry;
  if (sheetManager.refs === 0) {
    var staticSheet;
    if (stylesOptions.sheetsCache) {
      staticSheet = multiKeyStore_default.get(stylesOptions.sheetsCache, stylesCreator, theme);
    }
    var styles11 = stylesCreator.create(theme, name);
    if (!staticSheet) {
      staticSheet = stylesOptions.jss.createStyleSheet(styles11, _extends({
        link: false
      }, options));
      staticSheet.attach();
      if (stylesOptions.sheetsCache) {
        multiKeyStore_default.set(stylesOptions.sheetsCache, stylesCreator, theme, staticSheet);
      }
    }
    if (sheetsRegistry) {
      sheetsRegistry.add(staticSheet);
    }
    sheetManager.staticSheet = staticSheet;
    sheetManager.dynamicStyles = getDynamicStyles(styles11);
  }
  if (sheetManager.dynamicStyles) {
    var dynamicSheet = stylesOptions.jss.createStyleSheet(sheetManager.dynamicStyles, _extends({
      link: true
    }, options));
    dynamicSheet.update(props);
    dynamicSheet.attach();
    state.dynamicSheet = dynamicSheet;
    state.classes = mergeClasses({
      baseClasses: sheetManager.staticSheet.classes,
      newClasses: dynamicSheet.classes
    });
    if (sheetsRegistry) {
      sheetsRegistry.add(dynamicSheet);
    }
  } else {
    state.classes = sheetManager.staticSheet.classes;
  }
  sheetManager.refs += 1;
}
function update(_ref3, props) {
  var state = _ref3.state;
  if (state.dynamicSheet) {
    state.dynamicSheet.update(props);
  }
}
function detach(_ref4) {
  var state = _ref4.state, theme = _ref4.theme, stylesOptions = _ref4.stylesOptions, stylesCreator = _ref4.stylesCreator;
  if (stylesOptions.disableGeneration) {
    return;
  }
  var sheetManager = multiKeyStore_default.get(stylesOptions.sheetsManager, stylesCreator, theme);
  sheetManager.refs -= 1;
  var sheetsRegistry = stylesOptions.sheetsRegistry;
  if (sheetManager.refs === 0) {
    multiKeyStore_default.delete(stylesOptions.sheetsManager, stylesCreator, theme);
    stylesOptions.jss.removeStyleSheet(sheetManager.staticSheet);
    if (sheetsRegistry) {
      sheetsRegistry.remove(sheetManager.staticSheet);
    }
  }
  if (state.dynamicSheet) {
    stylesOptions.jss.removeStyleSheet(state.dynamicSheet);
    if (sheetsRegistry) {
      sheetsRegistry.remove(state.dynamicSheet);
    }
  }
}
function useSynchronousEffect(func, values4) {
  var key = React4.useRef([]);
  var output;
  var currentKey = React4.useMemo(function() {
    return {};
  }, values4);
  if (key.current !== currentKey) {
    key.current = currentKey;
    output = func();
  }
  React4.useEffect(function() {
    return function() {
      if (output) {
        output();
      }
    };
  }, [currentKey]);
}
function makeStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var name = options.name, classNamePrefixOption = options.classNamePrefix, Component3 = options.Component, _options$defaultTheme = options.defaultTheme, defaultTheme2 = _options$defaultTheme === void 0 ? noopTheme_default : _options$defaultTheme, stylesOptions2 = _objectWithoutProperties(options, ["name", "classNamePrefix", "Component", "defaultTheme"]);
  var stylesCreator = getStylesCreator(stylesOrCreator);
  var classNamePrefix = name || classNamePrefixOption || "makeStyles";
  stylesCreator.options = {
    index: increment(),
    name,
    meta: classNamePrefix,
    classNamePrefix
  };
  var useStyles = function useStyles2() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var theme = useTheme() || defaultTheme2;
    var stylesOptions = _extends({}, React4.useContext(StylesContext), stylesOptions2);
    var instance = React4.useRef();
    var shouldUpdate = React4.useRef();
    useSynchronousEffect(function() {
      var current = {
        name,
        state: {},
        stylesCreator,
        stylesOptions,
        theme
      };
      attach(current, props);
      shouldUpdate.current = false;
      instance.current = current;
      return function() {
        detach(current);
      };
    }, [theme, stylesCreator]);
    React4.useEffect(function() {
      if (shouldUpdate.current) {
        update(instance.current, props);
      }
      shouldUpdate.current = true;
    });
    var classes = getClasses(instance.current, props.classes, Component3);
    if (true) {
      React4.useDebugValue(classes);
    }
    return classes;
  };
  return useStyles;
}

// node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js
var import_prop_types2 = __toModule(require_prop_types());
var import_utils4 = __toModule(require_utils());
import React5 from "react";
function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === "function") {
    var mergedTheme = localTheme(outerTheme);
    if (true) {
      if (!mergedTheme) {
        console.error(["Material-UI: You should return an object from your theme function, i.e.", "<ThemeProvider theme={() => ({})} />"].join("\n"));
      }
    }
    return mergedTheme;
  }
  return _extends({}, outerTheme, localTheme);
}
function ThemeProvider(props) {
  var children = props.children, localTheme = props.theme;
  var outerTheme = useTheme();
  if (true) {
    if (outerTheme === null && typeof localTheme === "function") {
      console.error(["Material-UI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join("\n"));
    }
  }
  var theme = React5.useMemo(function() {
    var output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);
    if (output != null) {
      output[nested_default] = outerTheme !== null;
    }
    return output;
  }, [localTheme, outerTheme]);
  return /* @__PURE__ */ React5.createElement(ThemeContext_default.Provider, {
    value: theme
  }, children);
}
true ? ThemeProvider.propTypes = {
  children: import_prop_types2.default.node.isRequired,
  theme: import_prop_types2.default.oneOfType([import_prop_types2.default.object, import_prop_types2.default.func]).isRequired
} : void 0;
if (true) {
  true ? ThemeProvider.propTypes = (0, import_utils4.exactProp)(ThemeProvider.propTypes) : void 0;
}
var ThemeProvider_default = ThemeProvider;

// node_modules/@material-ui/styles/esm/withStyles/withStyles.js
var import_prop_types3 = __toModule(require_prop_types());
var import_hoist_non_react_statics = __toModule(require_hoist_non_react_statics_cjs());
var import_utils5 = __toModule(require_utils());
import React6 from "react";
var withStyles = function withStyles2(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function(Component3) {
    var defaultTheme2 = options.defaultTheme, _options$withTheme = options.withTheme, withTheme2 = _options$withTheme === void 0 ? false : _options$withTheme, name = options.name, stylesOptions = _objectWithoutProperties(options, ["defaultTheme", "withTheme", "name"]);
    if (true) {
      if (Component3 === void 0) {
        throw new Error(["You are calling withStyles(styles)(Component) with an undefined component.", "You may have forgotten to import it."].join("\n"));
      }
    }
    var classNamePrefix = name;
    if (true) {
      if (!name) {
        var displayName = (0, import_utils5.getDisplayName)(Component3);
        if (displayName !== void 0) {
          classNamePrefix = displayName;
        }
      }
    }
    var useStyles = makeStyles(stylesOrCreator, _extends({
      defaultTheme: defaultTheme2,
      Component: Component3,
      name: name || Component3.displayName,
      classNamePrefix
    }, stylesOptions));
    var WithStyles = /* @__PURE__ */ React6.forwardRef(function WithStyles2(props, ref) {
      var classesProp = props.classes, innerRef = props.innerRef, other = _objectWithoutProperties(props, ["classes", "innerRef"]);
      var classes = useStyles(_extends({}, Component3.defaultProps, props));
      var theme;
      var more = other;
      if (typeof name === "string" || withTheme2) {
        theme = useTheme() || defaultTheme2;
        if (name) {
          more = getThemeProps({
            theme,
            name,
            props: other
          });
        }
        if (withTheme2 && !more.theme) {
          more.theme = theme;
        }
      }
      return /* @__PURE__ */ React6.createElement(Component3, _extends({
        ref: innerRef || ref,
        classes
      }, more));
    });
    true ? WithStyles.propTypes = {
      classes: import_prop_types3.default.object,
      innerRef: (0, import_utils5.chainPropTypes)(import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object]), function(props) {
        if (props.innerRef == null) {
          return null;
        }
        return null;
      })
    } : void 0;
    if (true) {
      WithStyles.displayName = "WithStyles(".concat((0, import_utils5.getDisplayName)(Component3), ")");
    }
    (0, import_hoist_non_react_statics.default)(WithStyles, Component3);
    if (true) {
      WithStyles.Naked = Component3;
      WithStyles.options = options;
      WithStyles.useStyles = useStyles;
    }
    return WithStyles;
  };
};
var withStyles_default = withStyles;

// node_modules/@material-ui/styles/esm/index.js
if (typeof window !== "undefined") {
  import_utils6.ponyfillGlobal["__@material-ui/styles-init__"] = import_utils6.ponyfillGlobal["__@material-ui/styles-init__"] || 0;
  if (import_utils6.ponyfillGlobal["__@material-ui/styles-init__"] === 1) {
    console.warn(["It looks like there are several instances of `@material-ui/styles` initialized in this application.", "This may cause theme propagation issues, broken class names, specificity issues, and makes your application bigger without a good reason.", "", "See https://material-ui.com/r/styles-instance-warning for more info."].join("\n"));
  }
  import_utils6.ponyfillGlobal["__@material-ui/styles-init__"] += 1;
}

// node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// node_modules/@material-ui/core/esm/styles/createTheme.js
var import_utils10 = __toModule(require_utils());

// node_modules/@material-ui/core/esm/styles/createBreakpoints.js
var keys = ["xs", "sm", "md", "lg", "xl"];
function createBreakpoints(breakpoints) {
  var _breakpoints$values = breakpoints.values, values4 = _breakpoints$values === void 0 ? {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  } : _breakpoints$values, _breakpoints$unit = breakpoints.unit, unit = _breakpoints$unit === void 0 ? "px" : _breakpoints$unit, _breakpoints$step = breakpoints.step, step = _breakpoints$step === void 0 ? 5 : _breakpoints$step, other = _objectWithoutProperties(breakpoints, ["values", "unit", "step"]);
  function up2(key) {
    var value = typeof values4[key] === "number" ? values4[key] : key;
    return "@media (min-width:".concat(value).concat(unit, ")");
  }
  function down(key) {
    var endIndex = keys.indexOf(key) + 1;
    var upperbound = values4[keys[endIndex]];
    if (endIndex === keys.length) {
      return up2("xs");
    }
    var value = typeof upperbound === "number" && endIndex > 0 ? upperbound : key;
    return "@media (max-width:".concat(value - step / 100).concat(unit, ")");
  }
  function between(start, end) {
    var endIndex = keys.indexOf(end);
    if (endIndex === keys.length - 1) {
      return up2(start);
    }
    return "@media (min-width:".concat(typeof values4[start] === "number" ? values4[start] : start).concat(unit, ") and ") + "(max-width:".concat((endIndex !== -1 && typeof values4[keys[endIndex + 1]] === "number" ? values4[keys[endIndex + 1]] : end) - step / 100).concat(unit, ")");
  }
  function only(key) {
    return between(key, key);
  }
  var warnedOnce3 = false;
  function width(key) {
    if (true) {
      if (!warnedOnce3) {
        warnedOnce3 = true;
        console.warn(["Material-UI: The `theme.breakpoints.width` utility is deprecated because it's redundant.", "Use the `theme.breakpoints.values` instead."].join("\n"));
      }
    }
    return values4[key];
  }
  return _extends({
    keys,
    values: values4,
    up: up2,
    down,
    between,
    only,
    width
  }, other);
}

// node_modules/@material-ui/core/esm/styles/createMixins.js
function createMixins(breakpoints, spacing3, mixins) {
  var _toolbar;
  return _extends({
    gutters: function gutters() {
      var styles11 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      console.warn(["Material-UI: theme.mixins.gutters() is deprecated.", "You can use the source of the mixin directly:", "\n      paddingLeft: theme.spacing(2),\n      paddingRight: theme.spacing(2),\n      [theme.breakpoints.up('sm')]: {\n        paddingLeft: theme.spacing(3),\n        paddingRight: theme.spacing(3),\n      },\n      "].join("\n"));
      return _extends({
        paddingLeft: spacing3(2),
        paddingRight: spacing3(2)
      }, styles11, _defineProperty({}, breakpoints.up("sm"), _extends({
        paddingLeft: spacing3(3),
        paddingRight: spacing3(3)
      }, styles11[breakpoints.up("sm")])));
    },
    toolbar: (_toolbar = {
      minHeight: 56
    }, _defineProperty(_toolbar, "".concat(breakpoints.up("xs"), " and (orientation: landscape)"), {
      minHeight: 48
    }), _defineProperty(_toolbar, breakpoints.up("sm"), {
      minHeight: 64
    }), _toolbar)
  }, mixins);
}

// node_modules/@material-ui/core/esm/styles/createPalette.js
var import_utils7 = __toModule(require_utils());

// node_modules/@material-ui/core/esm/colors/common.js
var common = {
  black: "#000",
  white: "#fff"
};
var common_default = common;

// node_modules/@material-ui/core/esm/colors/grey.js
var grey = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#d5d5d5",
  A200: "#aaaaaa",
  A400: "#303030",
  A700: "#616161"
};
var grey_default = grey;

// node_modules/@material-ui/core/esm/colors/indigo.js
var indigo = {
  50: "#e8eaf6",
  100: "#c5cae9",
  200: "#9fa8da",
  300: "#7986cb",
  400: "#5c6bc0",
  500: "#3f51b5",
  600: "#3949ab",
  700: "#303f9f",
  800: "#283593",
  900: "#1a237e",
  A100: "#8c9eff",
  A200: "#536dfe",
  A400: "#3d5afe",
  A700: "#304ffe"
};
var indigo_default = indigo;

// node_modules/@material-ui/core/esm/colors/pink.js
var pink = {
  50: "#fce4ec",
  100: "#f8bbd0",
  200: "#f48fb1",
  300: "#f06292",
  400: "#ec407a",
  500: "#e91e63",
  600: "#d81b60",
  700: "#c2185b",
  800: "#ad1457",
  900: "#880e4f",
  A100: "#ff80ab",
  A200: "#ff4081",
  A400: "#f50057",
  A700: "#c51162"
};
var pink_default = pink;

// node_modules/@material-ui/core/esm/colors/red.js
var red = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
};
var red_default = red;

// node_modules/@material-ui/core/esm/colors/orange.js
var orange = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
};
var orange_default = orange;

// node_modules/@material-ui/core/esm/colors/blue.js
var blue = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
};
var blue_default = blue;

// node_modules/@material-ui/core/esm/colors/green.js
var green = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
};
var green_default = green;

// node_modules/@material-ui/core/esm/styles/colorManipulator.js
function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  if (true) {
    if (value < min || value > max) {
      console.error("Material-UI: The value provided ".concat(value, " is out of range [").concat(min, ", ").concat(max, "]."));
    }
  }
  return Math.min(Math.max(min, value), max);
}
function hexToRgb(color) {
  color = color.substr(1);
  var re2 = new RegExp(".{1,".concat(color.length >= 6 ? 2 : 1, "}"), "g");
  var colors = color.match(re2);
  if (colors && colors[0].length === 1) {
    colors = colors.map(function(n2) {
      return n2 + n2;
    });
  }
  return colors ? "rgb".concat(colors.length === 4 ? "a" : "", "(").concat(colors.map(function(n2, index3) {
    return index3 < 3 ? parseInt(n2, 16) : Math.round(parseInt(n2, 16) / 255 * 1e3) / 1e3;
  }).join(", "), ")") : "";
}
function hslToRgb(color) {
  color = decomposeColor(color);
  var _color = color, values4 = _color.values;
  var h2 = values4[0];
  var s2 = values4[1] / 100;
  var l2 = values4[2] / 100;
  var a2 = s2 * Math.min(l2, 1 - l2);
  var f = function f2(n2) {
    var k2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : (n2 + h2 / 30) % 12;
    return l2 - a2 * Math.max(Math.min(k2 - 3, 9 - k2, 1), -1);
  };
  var type3 = "rgb";
  var rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
  if (color.type === "hsla") {
    type3 += "a";
    rgb.push(values4[3]);
  }
  return recomposeColor({
    type: type3,
    values: rgb
  });
}
function decomposeColor(color) {
  if (color.type) {
    return color;
  }
  if (color.charAt(0) === "#") {
    return decomposeColor(hexToRgb(color));
  }
  var marker = color.indexOf("(");
  var type3 = color.substring(0, marker);
  if (["rgb", "rgba", "hsl", "hsla"].indexOf(type3) === -1) {
    throw new Error(true ? "Material-UI: Unsupported `".concat(color, "` color.\nWe support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().") : (0, import_utils.formatMuiErrorMessage)(3, color));
  }
  var values4 = color.substring(marker + 1, color.length - 1).split(",");
  values4 = values4.map(function(value) {
    return parseFloat(value);
  });
  return {
    type: type3,
    values: values4
  };
}
function recomposeColor(color) {
  var type3 = color.type;
  var values4 = color.values;
  if (type3.indexOf("rgb") !== -1) {
    values4 = values4.map(function(n2, i2) {
      return i2 < 3 ? parseInt(n2, 10) : n2;
    });
  } else if (type3.indexOf("hsl") !== -1) {
    values4[1] = "".concat(values4[1], "%");
    values4[2] = "".concat(values4[2], "%");
  }
  return "".concat(type3, "(").concat(values4.join(", "), ")");
}
function getContrastRatio(foreground, background) {
  var lumA = getLuminance(foreground);
  var lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
function getLuminance(color) {
  color = decomposeColor(color);
  var rgb = color.type === "hsl" ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map(function(val) {
    val /= 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
function alpha(color, value) {
  color = decomposeColor(color);
  value = clamp(value);
  if (color.type === "rgb" || color.type === "hsl") {
    color.type += "a";
  }
  color.values[3] = value;
  return recomposeColor(color);
}
function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);
  if (color.type.indexOf("hsl") !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf("rgb") !== -1) {
    for (var i2 = 0; i2 < 3; i2 += 1) {
      color.values[i2] *= 1 - coefficient;
    }
  }
  return recomposeColor(color);
}
function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);
  if (color.type.indexOf("hsl") !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf("rgb") !== -1) {
    for (var i2 = 0; i2 < 3; i2 += 1) {
      color.values[i2] += (255 - color.values[i2]) * coefficient;
    }
  }
  return recomposeColor(color);
}

// node_modules/@material-ui/core/esm/styles/createPalette.js
var light = {
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.54)",
    disabled: "rgba(0, 0, 0, 0.38)",
    hint: "rgba(0, 0, 0, 0.38)"
  },
  divider: "rgba(0, 0, 0, 0.12)",
  background: {
    paper: common_default.white,
    default: grey_default[50]
  },
  action: {
    active: "rgba(0, 0, 0, 0.54)",
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    disabled: "rgba(0, 0, 0, 0.26)",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
};
var dark = {
  text: {
    primary: common_default.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    hint: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: grey_default[800],
    default: "#303030"
  },
  action: {
    active: common_default.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function addLightOrDark(intent, direction, shade, tonalOffset) {
  var tonalOffsetLight = tonalOffset.light || tonalOffset;
  var tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === "light") {
      intent.light = lighten(intent.main, tonalOffsetLight);
    } else if (direction === "dark") {
      intent.dark = darken(intent.main, tonalOffsetDark);
    }
  }
}
function createPalette(palette) {
  var _palette$primary = palette.primary, primary3 = _palette$primary === void 0 ? {
    light: indigo_default[300],
    main: indigo_default[500],
    dark: indigo_default[700]
  } : _palette$primary, _palette$secondary = palette.secondary, secondary3 = _palette$secondary === void 0 ? {
    light: pink_default.A200,
    main: pink_default.A400,
    dark: pink_default.A700
  } : _palette$secondary, _palette$error = palette.error, error3 = _palette$error === void 0 ? {
    light: red_default[300],
    main: red_default[500],
    dark: red_default[700]
  } : _palette$error, _palette$warning = palette.warning, warning4 = _palette$warning === void 0 ? {
    light: orange_default[300],
    main: orange_default[500],
    dark: orange_default[700]
  } : _palette$warning, _palette$info = palette.info, info3 = _palette$info === void 0 ? {
    light: blue_default[300],
    main: blue_default[500],
    dark: blue_default[700]
  } : _palette$info, _palette$success = palette.success, success3 = _palette$success === void 0 ? {
    light: green_default[300],
    main: green_default[500],
    dark: green_default[700]
  } : _palette$success, _palette$type = palette.type, type3 = _palette$type === void 0 ? "light" : _palette$type, _palette$contrastThre = palette.contrastThreshold, contrastThreshold = _palette$contrastThre === void 0 ? 3 : _palette$contrastThre, _palette$tonalOffset = palette.tonalOffset, tonalOffset = _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset, other = _objectWithoutProperties(palette, ["primary", "secondary", "error", "warning", "info", "success", "type", "contrastThreshold", "tonalOffset"]);
  function getContrastText(background) {
    var contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
    if (true) {
      var contrast = getContrastRatio(background, contrastText);
      if (contrast < 3) {
        console.error(["Material-UI: The contrast ratio of ".concat(contrast, ":1 for ").concat(contrastText, " on ").concat(background), "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join("\n"));
      }
    }
    return contrastText;
  }
  var augmentColor = function augmentColor2(color) {
    var mainShade = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 500;
    var lightShade = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 300;
    var darkShade = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 700;
    color = _extends({}, color);
    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }
    if (!color.main) {
      throw new Error(true ? "Material-UI: The color provided to augmentColor(color) is invalid.\nThe color object needs to have a `main` property or a `".concat(mainShade, "` property.") : (0, import_utils.formatMuiErrorMessage)(4, mainShade));
    }
    if (typeof color.main !== "string") {
      throw new Error(true ? "Material-UI: The color provided to augmentColor(color) is invalid.\n`color.main` should be a string, but `".concat(JSON.stringify(color.main), '` was provided instead.\n\nDid you intend to use one of the following approaches?\n\nimport {\xA0green } from "@material-ui/core/colors";\n\nconst theme1 = createTheme({ palette: {\n  primary: green,\n} });\n\nconst theme2 = createTheme({ palette: {\n  primary: { main: green[500] },\n} });') : (0, import_utils.formatMuiErrorMessage)(5, JSON.stringify(color.main)));
    }
    addLightOrDark(color, "light", lightShade, tonalOffset);
    addLightOrDark(color, "dark", darkShade, tonalOffset);
    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }
    return color;
  };
  var types = {
    dark,
    light
  };
  if (true) {
    if (!types[type3]) {
      console.error("Material-UI: The palette type `".concat(type3, "` is not supported."));
    }
  }
  var paletteOutput = (0, import_utils7.deepmerge)(_extends({
    common: common_default,
    type: type3,
    primary: augmentColor(primary3),
    secondary: augmentColor(secondary3, "A400", "A200", "A700"),
    error: augmentColor(error3),
    warning: augmentColor(warning4),
    info: augmentColor(info3),
    success: augmentColor(success3),
    grey: grey_default,
    contrastThreshold,
    getContrastText,
    augmentColor,
    tonalOffset
  }, types[type3]), other);
  return paletteOutput;
}

// node_modules/@material-ui/core/esm/styles/createTypography.js
var import_utils8 = __toModule(require_utils());
function round(value) {
  return Math.round(value * 1e5) / 1e5;
}
var warnedOnce = false;
function roundWithDeprecationWarning(value) {
  if (true) {
    if (!warnedOnce) {
      console.warn(["Material-UI: The `theme.typography.round` helper is deprecated.", "Head to https://material-ui.com/r/migration-v4/#theme for a migration path."].join("\n"));
      warnedOnce = true;
    }
  }
  return round(value);
}
var caseAllCaps = {
  textTransform: "uppercase"
};
var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
function createTypography(palette, typography2) {
  var _ref = typeof typography2 === "function" ? typography2(palette) : typography2, _ref$fontFamily = _ref.fontFamily, fontFamily2 = _ref$fontFamily === void 0 ? defaultFontFamily : _ref$fontFamily, _ref$fontSize = _ref.fontSize, fontSize2 = _ref$fontSize === void 0 ? 14 : _ref$fontSize, _ref$fontWeightLight = _ref.fontWeightLight, fontWeightLight2 = _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight, _ref$fontWeightRegula = _ref.fontWeightRegular, fontWeightRegular2 = _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula, _ref$fontWeightMedium = _ref.fontWeightMedium, fontWeightMedium2 = _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium, _ref$fontWeightBold = _ref.fontWeightBold, fontWeightBold2 = _ref$fontWeightBold === void 0 ? 700 : _ref$fontWeightBold, _ref$htmlFontSize = _ref.htmlFontSize, htmlFontSize2 = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize, allVariants = _ref.allVariants, pxToRem2 = _ref.pxToRem, other = _objectWithoutProperties(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"]);
  if (true) {
    if (typeof fontSize2 !== "number") {
      console.error("Material-UI: `fontSize` is required to be a number.");
    }
    if (typeof htmlFontSize2 !== "number") {
      console.error("Material-UI: `htmlFontSize` is required to be a number.");
    }
  }
  var coef = fontSize2 / 14;
  var pxToRem = pxToRem2 || function(size) {
    return "".concat(size / htmlFontSize2 * coef, "rem");
  };
  var buildVariant = function buildVariant2(fontWeight, size, lineHeight, letterSpacing, casing) {
    return _extends({
      fontFamily: fontFamily2,
      fontWeight,
      fontSize: pxToRem(size),
      lineHeight
    }, fontFamily2 === defaultFontFamily ? {
      letterSpacing: "".concat(round(letterSpacing / size), "em")
    } : {}, casing, allVariants);
  };
  var variants = {
    h1: buildVariant(fontWeightLight2, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight2, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular2, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular2, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular2, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium2, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular2, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium2, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular2, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular2, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium2, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular2, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular2, 12, 2.66, 1, caseAllCaps)
  };
  return (0, import_utils8.deepmerge)(_extends({
    htmlFontSize: htmlFontSize2,
    pxToRem,
    round: roundWithDeprecationWarning,
    fontFamily: fontFamily2,
    fontSize: fontSize2,
    fontWeightLight: fontWeightLight2,
    fontWeightRegular: fontWeightRegular2,
    fontWeightMedium: fontWeightMedium2,
    fontWeightBold: fontWeightBold2
  }, variants), other, {
    clone: false
  });
}

// node_modules/@material-ui/core/esm/styles/shadows.js
var shadowKeyUmbraOpacity = 0.2;
var shadowKeyPenumbraOpacity = 0.14;
var shadowAmbientShadowOpacity = 0.12;
function createShadow() {
  return ["".concat(arguments.length <= 0 ? void 0 : arguments[0], "px ").concat(arguments.length <= 1 ? void 0 : arguments[1], "px ").concat(arguments.length <= 2 ? void 0 : arguments[2], "px ").concat(arguments.length <= 3 ? void 0 : arguments[3], "px rgba(0,0,0,").concat(shadowKeyUmbraOpacity, ")"), "".concat(arguments.length <= 4 ? void 0 : arguments[4], "px ").concat(arguments.length <= 5 ? void 0 : arguments[5], "px ").concat(arguments.length <= 6 ? void 0 : arguments[6], "px ").concat(arguments.length <= 7 ? void 0 : arguments[7], "px rgba(0,0,0,").concat(shadowKeyPenumbraOpacity, ")"), "".concat(arguments.length <= 8 ? void 0 : arguments[8], "px ").concat(arguments.length <= 9 ? void 0 : arguments[9], "px ").concat(arguments.length <= 10 ? void 0 : arguments[10], "px ").concat(arguments.length <= 11 ? void 0 : arguments[11], "px rgba(0,0,0,").concat(shadowAmbientShadowOpacity, ")")].join(",");
}
var shadows = ["none", createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
var shadows_default = shadows;

// node_modules/@material-ui/core/esm/styles/shape.js
var shape = {
  borderRadius: 4
};
var shape_default = shape;

// node_modules/@material-ui/system/esm/responsivePropType.js
var import_prop_types4 = __toModule(require_prop_types());
var responsivePropType = true ? import_prop_types4.default.oneOfType([import_prop_types4.default.number, import_prop_types4.default.string, import_prop_types4.default.object, import_prop_types4.default.array]) : {};
var responsivePropType_default = responsivePropType;

// node_modules/@material-ui/system/esm/breakpoints.js
var import_prop_types5 = __toModule(require_prop_types());

// node_modules/@material-ui/system/esm/merge.js
var import_utils9 = __toModule(require_utils());
function merge(acc, item) {
  if (!item) {
    return acc;
  }
  return (0, import_utils9.deepmerge)(acc, item, {
    clone: false
  });
}
var merge_default = merge;

// node_modules/@material-ui/system/esm/breakpoints.js
var values = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
};
var defaultBreakpoints = {
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: function up(key) {
    return "@media (min-width:".concat(values[key], "px)");
  }
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  if (true) {
    if (!props.theme) {
      console.error("Material-UI: You are calling a style function without a theme value.");
    }
  }
  if (Array.isArray(propValue)) {
    var themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;
    return propValue.reduce(function(acc, item, index3) {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index3])] = styleFromPropValue(propValue[index3]);
      return acc;
    }, {});
  }
  if (_typeof2(propValue) === "object") {
    var _themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;
    return Object.keys(propValue).reduce(function(acc, breakpoint) {
      acc[_themeBreakpoints.up(breakpoint)] = styleFromPropValue(propValue[breakpoint]);
      return acc;
    }, {});
  }
  var output = styleFromPropValue(propValue);
  return output;
}

// node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}

// node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i2) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e2;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i2 && _arr.length === i2)
        break;
    }
  } catch (err) {
    _d = true;
    _e2 = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e2;
    }
  }
  return _arr;
}

// node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/@babel/runtime/helpers/esm/slicedToArray.js
function _slicedToArray(arr, i2) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
}

// node_modules/@material-ui/system/esm/memoize.js
function memoize3(fn) {
  var cache3 = {};
  return function(arg) {
    if (cache3[arg] === void 0) {
      cache3[arg] = fn(arg);
    }
    return cache3[arg];
  };
}

// node_modules/@material-ui/system/esm/spacing.js
var properties = {
  m: "margin",
  p: "padding"
};
var directions = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
};
var aliases = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
};
var getCssProperties = memoize3(function(prop) {
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }
  var _prop$split = prop.split(""), _prop$split2 = _slicedToArray(_prop$split, 2), a2 = _prop$split2[0], b2 = _prop$split2[1];
  var property = properties[a2];
  var direction = directions[b2] || "";
  return Array.isArray(direction) ? direction.map(function(dir) {
    return property + dir;
  }) : [property + direction];
});
var spacingKeys = ["m", "mt", "mr", "mb", "ml", "mx", "my", "p", "pt", "pr", "pb", "pl", "px", "py", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY"];
function createUnarySpacing(theme) {
  var themeSpacing = theme.spacing || 8;
  if (typeof themeSpacing === "number") {
    return function(abs) {
      if (true) {
        if (typeof abs !== "number") {
          console.error("Material-UI: Expected spacing argument to be a number, got ".concat(abs, "."));
        }
      }
      return themeSpacing * abs;
    };
  }
  if (Array.isArray(themeSpacing)) {
    return function(abs) {
      if (true) {
        if (abs > themeSpacing.length - 1) {
          console.error(["Material-UI: The value provided (".concat(abs, ") overflows."), "The supported values are: ".concat(JSON.stringify(themeSpacing), "."), "".concat(abs, " > ").concat(themeSpacing.length - 1, ", you need to add the missing values.")].join("\n"));
        }
      }
      return themeSpacing[abs];
    };
  }
  if (typeof themeSpacing === "function") {
    return themeSpacing;
  }
  if (true) {
    console.error(["Material-UI: The `theme.spacing` value (".concat(themeSpacing, ") is invalid."), "It should be a number, an array or a function."].join("\n"));
  }
  return function() {
    return void 0;
  };
}
function getValue(transformer, propValue) {
  if (typeof propValue === "string" || propValue == null) {
    return propValue;
  }
  var abs = Math.abs(propValue);
  var transformed = transformer(abs);
  if (propValue >= 0) {
    return transformed;
  }
  if (typeof transformed === "number") {
    return -transformed;
  }
  return "-".concat(transformed);
}
function getStyleFromPropValue(cssProperties, transformer) {
  return function(propValue) {
    return cssProperties.reduce(function(acc, cssProperty) {
      acc[cssProperty] = getValue(transformer, propValue);
      return acc;
    }, {});
  };
}
function spacing(props) {
  var theme = props.theme;
  var transformer = createUnarySpacing(theme);
  return Object.keys(props).map(function(prop) {
    if (spacingKeys.indexOf(prop) === -1) {
      return null;
    }
    var cssProperties = getCssProperties(prop);
    var styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
    var propValue = props[prop];
    return handleBreakpoints(props, propValue, styleFromPropValue);
  }).reduce(merge_default, {});
}
spacing.propTypes = true ? spacingKeys.reduce(function(obj, key) {
  obj[key] = responsivePropType_default;
  return obj;
}, {}) : {};
spacing.filterProps = spacingKeys;

// node_modules/@material-ui/core/esm/styles/createSpacing.js
var warnOnce;
function createSpacing() {
  var spacingInput = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 8;
  if (spacingInput.mui) {
    return spacingInput;
  }
  var transform2 = createUnarySpacing({
    spacing: spacingInput
  });
  var spacing3 = function spacing4() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (true) {
      if (!(args.length <= 4)) {
        console.error("Material-UI: Too many arguments provided, expected between 0 and 4, got ".concat(args.length));
      }
    }
    if (args.length === 0) {
      return transform2(1);
    }
    if (args.length === 1) {
      return transform2(args[0]);
    }
    return args.map(function(argument) {
      if (typeof argument === "string") {
        return argument;
      }
      var output = transform2(argument);
      return typeof output === "number" ? "".concat(output, "px") : output;
    }).join(" ");
  };
  Object.defineProperty(spacing3, "unit", {
    get: function get3() {
      if (true) {
        if (!warnOnce || false) {
          console.error(["Material-UI: theme.spacing.unit usage has been deprecated.", "It will be removed in v5.", "You can replace `theme.spacing.unit * y` with `theme.spacing(y)`.", "", "You can use the `https://github.com/mui-org/material-ui/tree/master/packages/material-ui-codemod/README.md#theme-spacing-api` migration helper to make the process smoother."].join("\n"));
        }
        warnOnce = true;
      }
      return spacingInput;
    }
  });
  spacing3.mui = true;
  return spacing3;
}

// node_modules/@material-ui/core/esm/styles/transitions.js
var easing = {
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
};
var duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  complex: 375,
  enteringScreen: 225,
  leavingScreen: 195
};
function formatMs(milliseconds) {
  return "".concat(Math.round(milliseconds), "ms");
}
var transitions_default = {
  easing,
  duration,
  create: function create() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["all"];
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _options$duration = options.duration, durationOption = _options$duration === void 0 ? duration.standard : _options$duration, _options$easing = options.easing, easingOption = _options$easing === void 0 ? easing.easeInOut : _options$easing, _options$delay = options.delay, delay = _options$delay === void 0 ? 0 : _options$delay, other = _objectWithoutProperties(options, ["duration", "easing", "delay"]);
    if (true) {
      var isString = function isString2(value) {
        return typeof value === "string";
      };
      var isNumber = function isNumber2(value) {
        return !isNaN(parseFloat(value));
      };
      if (!isString(props) && !Array.isArray(props)) {
        console.error('Material-UI: Argument "props" must be a string or Array.');
      }
      if (!isNumber(durationOption) && !isString(durationOption)) {
        console.error('Material-UI: Argument "duration" must be a number or a string but found '.concat(durationOption, "."));
      }
      if (!isString(easingOption)) {
        console.error('Material-UI: Argument "easing" must be a string.');
      }
      if (!isNumber(delay) && !isString(delay)) {
        console.error('Material-UI: Argument "delay" must be a number or a string.');
      }
      if (Object.keys(other).length !== 0) {
        console.error("Material-UI: Unrecognized argument(s) [".concat(Object.keys(other).join(","), "]."));
      }
    }
    return (Array.isArray(props) ? props : [props]).map(function(animatedProp) {
      return "".concat(animatedProp, " ").concat(typeof durationOption === "string" ? durationOption : formatMs(durationOption), " ").concat(easingOption, " ").concat(typeof delay === "string" ? delay : formatMs(delay));
    }).join(",");
  },
  getAutoHeightDuration: function getAutoHeightDuration(height) {
    if (!height) {
      return 0;
    }
    var constant = height / 36;
    return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
  }
};

// node_modules/@material-ui/core/esm/styles/zIndex.js
var zIndex = {
  mobileStepper: 1e3,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
var zIndex_default = zIndex;

// node_modules/@material-ui/core/esm/styles/createTheme.js
function createTheme() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var _options$breakpoints = options.breakpoints, breakpointsInput = _options$breakpoints === void 0 ? {} : _options$breakpoints, _options$mixins = options.mixins, mixinsInput = _options$mixins === void 0 ? {} : _options$mixins, _options$palette = options.palette, paletteInput = _options$palette === void 0 ? {} : _options$palette, spacingInput = options.spacing, _options$typography = options.typography, typographyInput = _options$typography === void 0 ? {} : _options$typography, other = _objectWithoutProperties(options, ["breakpoints", "mixins", "palette", "spacing", "typography"]);
  var palette = createPalette(paletteInput);
  var breakpoints = createBreakpoints(breakpointsInput);
  var spacing3 = createSpacing(spacingInput);
  var muiTheme = (0, import_utils10.deepmerge)({
    breakpoints,
    direction: "ltr",
    mixins: createMixins(breakpoints, spacing3, mixinsInput),
    overrides: {},
    palette,
    props: {},
    shadows: shadows_default,
    typography: createTypography(palette, typographyInput),
    spacing: spacing3,
    shape: shape_default,
    transitions: transitions_default,
    zIndex: zIndex_default
  }, other);
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  muiTheme = args.reduce(function(acc, argument) {
    return (0, import_utils10.deepmerge)(acc, argument);
  }, muiTheme);
  if (true) {
    var pseudoClasses2 = ["checked", "disabled", "error", "focused", "focusVisible", "required", "expanded", "selected"];
    var traverse = function traverse2(node, parentKey) {
      var depth = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
      var key;
      for (key in node) {
        var child = node[key];
        if (depth === 1) {
          if (key.indexOf("Mui") === 0 && child) {
            traverse2(child, key, depth + 1);
          }
        } else if (pseudoClasses2.indexOf(key) !== -1 && Object.keys(child).length > 0) {
          if (true) {
            console.error(["Material-UI: The `".concat(parentKey, "` component increases ") + "the CSS specificity of the `".concat(key, "` internal state."), "You can not override it like this: ", JSON.stringify(node, null, 2), "", "Instead, you need to use the $ruleName syntax:", JSON.stringify({
              root: _defineProperty({}, "&$".concat(key), child)
            }, null, 2), "", "https://material-ui.com/r/pseudo-classes-guide"].join("\n"));
          }
          node[key] = {};
        }
      }
    };
    traverse(muiTheme.overrides);
  }
  return muiTheme;
}
var warnedOnce2 = false;
function createMuiTheme() {
  if (true) {
    if (!warnedOnce2) {
      warnedOnce2 = true;
      console.error(["Material-UI: the createMuiTheme function was renamed to createTheme.", "", "You should use `import { createTheme } from '@material-ui/core/styles'`"].join("\n"));
    }
  }
  return createTheme.apply(void 0, arguments);
}
var createTheme_default = createTheme;

// node_modules/@material-ui/core/esm/styles/defaultTheme.js
var defaultTheme = createTheme_default();
var defaultTheme_default = defaultTheme;

// node_modules/@material-ui/core/esm/styles/withStyles.js
function withStyles3(stylesOrCreator, options) {
  return withStyles_default(stylesOrCreator, _extends({
    defaultTheme: defaultTheme_default
  }, options));
}
var withStyles_default2 = withStyles3;

// node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js
var import_prop_types11 = __toModule(require_prop_types());
import {
  createElement as createElement3,
  forwardRef as forwardRef2,
  useEffect as useEffect4,
  useImperativeHandle as useImperativeHandle2,
  useRef as useRef3,
  useState as useState3
} from "react";
import {
  findDOMNode as findDOMNode2
} from "react-dom";
var import_utils11 = __toModule(require_utils());

// node_modules/@material-ui/core/esm/utils/useForkRef.js
import {
  useMemo
} from "react";

// node_modules/@material-ui/core/esm/utils/setRef.js
function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

// node_modules/@material-ui/core/esm/utils/useForkRef.js
function useForkRef(refA, refB) {
  return useMemo(function() {
    if (refA == null && refB == null) {
      return null;
    }
    return function(refValue) {
      setRef(refA, refValue);
      setRef(refB, refValue);
    };
  }, [refA, refB]);
}

// node_modules/@material-ui/core/esm/utils/useEventCallback.js
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef
} from "react";
var useEnhancedEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
function useEventCallback(fn) {
  var ref = useRef(fn);
  useEnhancedEffect(function() {
    ref.current = fn;
  });
  return useCallback(function() {
    return (0, ref.current).apply(void 0, arguments);
  }, []);
}

// node_modules/@material-ui/core/esm/utils/deprecatedPropType.js
function deprecatedPropType(validator, reason) {
  if (false) {
    return function() {
      return null;
    };
  }
  return function(props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || "<<anonymous>>";
    var propFullNameSafe = propFullName || propName;
    if (typeof props[propName] !== "undefined") {
      return new Error("The ".concat(location, " `").concat(propFullNameSafe, "` of ") + "`".concat(componentNameSafe, "` is deprecated. ").concat(reason));
    }
    return null;
  };
}

// node_modules/@material-ui/core/esm/utils/useIsFocusVisible.js
import {
  useCallback as useCallback2,
  useDebugValue
} from "react";
import {
  findDOMNode
} from "react-dom";
var hadKeyboardEvent = true;
var hadFocusVisibleRecently = false;
var hadFocusVisibleRecentlyTimeout = null;
var inputTypesWhitelist = {
  text: true,
  search: true,
  url: true,
  tel: true,
  email: true,
  password: true,
  number: true,
  date: true,
  month: true,
  week: true,
  time: true,
  datetime: true,
  "datetime-local": true
};
function focusTriggersKeyboardModality(node) {
  var type3 = node.type, tagName = node.tagName;
  if (tagName === "INPUT" && inputTypesWhitelist[type3] && !node.readOnly) {
    return true;
  }
  if (tagName === "TEXTAREA" && !node.readOnly) {
    return true;
  }
  if (node.isContentEditable) {
    return true;
  }
  return false;
}
function handleKeyDown(event) {
  if (event.metaKey || event.altKey || event.ctrlKey) {
    return;
  }
  hadKeyboardEvent = true;
}
function handlePointerDown() {
  hadKeyboardEvent = false;
}
function handleVisibilityChange() {
  if (this.visibilityState === "hidden") {
    if (hadFocusVisibleRecently) {
      hadKeyboardEvent = true;
    }
  }
}
function prepare(doc) {
  doc.addEventListener("keydown", handleKeyDown, true);
  doc.addEventListener("mousedown", handlePointerDown, true);
  doc.addEventListener("pointerdown", handlePointerDown, true);
  doc.addEventListener("touchstart", handlePointerDown, true);
  doc.addEventListener("visibilitychange", handleVisibilityChange, true);
}
function isFocusVisible(event) {
  var target = event.target;
  try {
    return target.matches(":focus-visible");
  } catch (error3) {
  }
  return hadKeyboardEvent || focusTriggersKeyboardModality(target);
}
function handleBlurVisible() {
  hadFocusVisibleRecently = true;
  window.clearTimeout(hadFocusVisibleRecentlyTimeout);
  hadFocusVisibleRecentlyTimeout = window.setTimeout(function() {
    hadFocusVisibleRecently = false;
  }, 100);
}
function useIsFocusVisible() {
  var ref = useCallback2(function(instance) {
    var node = findDOMNode(instance);
    if (node != null) {
      prepare(node.ownerDocument);
    }
  }, []);
  if (true) {
    useDebugValue(isFocusVisible);
  }
  return {
    isFocusVisible,
    onBlurVisible: handleBlurVisible,
    ref
  };
}

// node_modules/@material-ui/core/esm/ButtonBase/TouchRipple.js
var import_prop_types10 = __toModule(require_prop_types());
import {
  createElement as createElement2,
  forwardRef,
  memo,
  useCallback as useCallback3,
  useEffect as useEffect3,
  useImperativeHandle,
  useRef as useRef2,
  useState as useState2
} from "react";

// node_modules/react-transition-group/esm/Transition.js
var import_prop_types7 = __toModule(require_prop_types());
import React11 from "react";
import ReactDOM2 from "react-dom";

// node_modules/react-transition-group/esm/config.js
var config_default = {
  disabled: false
};

// node_modules/react-transition-group/esm/utils/PropTypes.js
var import_prop_types6 = __toModule(require_prop_types());
var timeoutsShape = true ? import_prop_types6.default.oneOfType([import_prop_types6.default.number, import_prop_types6.default.shape({
  enter: import_prop_types6.default.number,
  exit: import_prop_types6.default.number,
  appear: import_prop_types6.default.number
}).isRequired]) : null;
var classNamesShape = true ? import_prop_types6.default.oneOfType([import_prop_types6.default.string, import_prop_types6.default.shape({
  enter: import_prop_types6.default.string,
  exit: import_prop_types6.default.string,
  active: import_prop_types6.default.string
}), import_prop_types6.default.shape({
  enter: import_prop_types6.default.string,
  enterDone: import_prop_types6.default.string,
  enterActive: import_prop_types6.default.string,
  exit: import_prop_types6.default.string,
  exitDone: import_prop_types6.default.string,
  exitActive: import_prop_types6.default.string
})]) : null;

// node_modules/react-transition-group/esm/TransitionGroupContext.js
import React10 from "react";
var TransitionGroupContext_default = React10.createContext(null);

// node_modules/react-transition-group/esm/Transition.js
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
var Transition = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Transition2, _React$Component);
  function Transition2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context;
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
  Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;
    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }
    return null;
  };
  var _proto = Transition2.prototype;
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
    var timeout2 = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout2;
    if (timeout2 != null && typeof timeout2 !== "number") {
      exit = timeout2.exit;
      enter = timeout2.enter;
      appear = timeout2.appear !== void 0 ? timeout2.appear : enter;
    }
    return {
      exit,
      enter,
      appear
    };
  };
  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }
    if (nextStatus !== null) {
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
    var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM2.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
    if (!mounting && !enter || config_default.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function() {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }
    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function() {
      _this2.props.onEntering(maybeNode, maybeAppearing);
      _this2.onTransitionEnd(enterTimeout, function() {
        _this2.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };
  _proto.performExit = function performExit() {
    var _this3 = this;
    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? void 0 : ReactDOM2.findDOMNode(this);
    if (!exit || config_default.disabled) {
      this.safeSetState({
        status: EXITED
      }, function() {
        _this3.props.onExited(maybeNode);
      });
      return;
    }
    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function() {
      _this3.props.onExiting(maybeNode);
      _this3.onTransitionEnd(timeouts.exit, function() {
        _this3.safeSetState({
          status: EXITED
        }, function() {
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
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };
  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;
    var active = true;
    this.nextCallback = function(event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };
    this.nextCallback.cancel = function() {
      active = false;
    };
    return this.nextCallback;
  };
  _proto.onTransitionEnd = function onTransitionEnd(timeout2, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM2.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout2 == null && !this.props.addEndListener;
    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
      this.props.addEndListener(maybeNode, maybeNextCallback);
    }
    if (timeout2 != null) {
      setTimeout(this.nextCallback, timeout2);
    }
  };
  _proto.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }
    var _this$props = this.props, children = _this$props.children, _in = _this$props.in, _mountOnEnter = _this$props.mountOnEnter, _unmountOnExit = _this$props.unmountOnExit, _appear = _this$props.appear, _enter = _this$props.enter, _exit = _this$props.exit, _timeout = _this$props.timeout, _addEndListener = _this$props.addEndListener, _onEnter = _this$props.onEnter, _onEntering = _this$props.onEntering, _onEntered = _this$props.onEntered, _onExit = _this$props.onExit, _onExiting = _this$props.onExiting, _onExited = _this$props.onExited, _nodeRef = _this$props.nodeRef, childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return /* @__PURE__ */ React11.createElement(TransitionGroupContext_default.Provider, {
      value: null
    }, typeof children === "function" ? children(status, childProps) : React11.cloneElement(React11.Children.only(children), childProps));
  };
  return Transition2;
}(React11.Component);
Transition.contextType = TransitionGroupContext_default;
Transition.propTypes = true ? {
  nodeRef: import_prop_types7.default.shape({
    current: typeof Element === "undefined" ? import_prop_types7.default.any : function(propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return import_prop_types7.default.instanceOf(value && "ownerDocument" in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),
  children: import_prop_types7.default.oneOfType([import_prop_types7.default.func.isRequired, import_prop_types7.default.element.isRequired]).isRequired,
  in: import_prop_types7.default.bool,
  mountOnEnter: import_prop_types7.default.bool,
  unmountOnExit: import_prop_types7.default.bool,
  appear: import_prop_types7.default.bool,
  enter: import_prop_types7.default.bool,
  exit: import_prop_types7.default.bool,
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener)
      pt = pt.isRequired;
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return pt.apply(void 0, [props].concat(args));
  },
  addEndListener: import_prop_types7.default.func,
  onEnter: import_prop_types7.default.func,
  onEntering: import_prop_types7.default.func,
  onEntered: import_prop_types7.default.func,
  onExit: import_prop_types7.default.func,
  onExiting: import_prop_types7.default.func,
  onExited: import_prop_types7.default.func
} : {};
function noop() {
}
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
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
var Transition_default = Transition;

// node_modules/react-transition-group/esm/TransitionGroup.js
var import_prop_types8 = __toModule(require_prop_types());
import React12 from "react";

// node_modules/react-transition-group/esm/utils/ChildMapping.js
import { Children, cloneElement, isValidElement } from "react";
function getChildMapping(children, mapFn) {
  var mapper = function mapper2(child) {
    return mapFn && isValidElement(child) ? mapFn(child) : child;
  };
  var result = Object.create(null);
  if (children)
    Children.map(children, function(c2) {
      return c2;
    }).forEach(function(child) {
      result[child.key] = mapper(child);
    });
  return result;
}
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};
  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  }
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
  var i2;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i2 = 0; i2 < nextKeysPending[nextKey].length; i2++) {
        var pendingNextKey = nextKeysPending[nextKey][i2];
        childMapping[nextKeysPending[nextKey][i2]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }
  for (i2 = 0; i2 < pendingKeys.length; i2++) {
    childMapping[pendingKeys[i2]] = getValueForKey(pendingKeys[i2]);
  }
  return childMapping;
}
function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}
function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function(child) {
    return cloneElement(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, "appear", props),
      enter: getProp(child, "enter", props),
      exit: getProp(child, "exit", props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function(key) {
    var child = children[key];
    if (!isValidElement(child))
      return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = isValidElement(prevChild) && !prevChild.props.in;
    if (hasNext && (!hasPrev || isLeaving)) {
      children[key] = cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      children[key] = cloneElement(child, {
        in: false
      });
    } else if (hasNext && hasPrev && isValidElement(prevChild)) {
      children[key] = cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    }
  });
  return children;
}

// node_modules/react-transition-group/esm/TransitionGroup.js
var values2 = Object.values || function(obj) {
  return Object.keys(obj).map(function(k2) {
    return obj[k2];
  });
};
var defaultProps = {
  component: "div",
  childFactory: function childFactory(child) {
    return child;
  }
};
var TransitionGroup = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(TransitionGroup2, _React$Component);
  function TransitionGroup2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this));
    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited,
      firstRender: true
    };
    return _this;
  }
  var _proto = TransitionGroup2.prototype;
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
  TransitionGroup2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };
  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping)
      return;
    if (child.props.onExited) {
      child.props.onExited(node);
    }
    if (this.mounted) {
      this.setState(function(state) {
        var children = _extends({}, state.children);
        delete children[child.key];
        return {
          children
        };
      });
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, Component3 = _this$props.component, childFactory2 = _this$props.childFactory, props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);
    var contextValue = this.state.contextValue;
    var children = values2(this.state.children).map(childFactory2);
    delete props.appear;
    delete props.enter;
    delete props.exit;
    if (Component3 === null) {
      return /* @__PURE__ */ React12.createElement(TransitionGroupContext_default.Provider, {
        value: contextValue
      }, children);
    }
    return /* @__PURE__ */ React12.createElement(TransitionGroupContext_default.Provider, {
      value: contextValue
    }, /* @__PURE__ */ React12.createElement(Component3, props, children));
  };
  return TransitionGroup2;
}(React12.Component);
TransitionGroup.propTypes = true ? {
  component: import_prop_types8.default.any,
  children: import_prop_types8.default.node,
  appear: import_prop_types8.default.bool,
  enter: import_prop_types8.default.bool,
  exit: import_prop_types8.default.bool,
  childFactory: import_prop_types8.default.func
} : {};
TransitionGroup.defaultProps = defaultProps;
var TransitionGroup_default = TransitionGroup;

// node_modules/@material-ui/core/esm/ButtonBase/Ripple.js
var import_prop_types9 = __toModule(require_prop_types());
import {
  createElement,
  useEffect as useEffect2,
  useLayoutEffect as useLayoutEffect2,
  useState
} from "react";
var useEnhancedEffect2 = typeof window === "undefined" ? useEffect2 : useLayoutEffect2;
function Ripple(props) {
  var classes = props.classes, _props$pulsate = props.pulsate, pulsate = _props$pulsate === void 0 ? false : _props$pulsate, rippleX = props.rippleX, rippleY = props.rippleY, rippleSize = props.rippleSize, inProp = props.in, _props$onExited = props.onExited, onExited = _props$onExited === void 0 ? function() {
  } : _props$onExited, timeout2 = props.timeout;
  var _React$useState = useState(false), leaving = _React$useState[0], setLeaving = _React$useState[1];
  var rippleClassName = clsx_m_default(classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
  var rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  var childClassName = clsx_m_default(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
  var handleExited = useEventCallback(onExited);
  useEnhancedEffect2(function() {
    if (!inProp) {
      setLeaving(true);
      var timeoutId = setTimeout(handleExited, timeout2);
      return function() {
        clearTimeout(timeoutId);
      };
    }
    return void 0;
  }, [handleExited, inProp, timeout2]);
  return /* @__PURE__ */ createElement("span", {
    className: rippleClassName,
    style: rippleStyles
  }, /* @__PURE__ */ createElement("span", {
    className: childClassName
  }));
}
true ? Ripple.propTypes = {
  classes: import_prop_types9.default.object.isRequired,
  in: import_prop_types9.default.bool,
  onExited: import_prop_types9.default.func,
  pulsate: import_prop_types9.default.bool,
  rippleSize: import_prop_types9.default.number,
  rippleX: import_prop_types9.default.number,
  rippleY: import_prop_types9.default.number,
  timeout: import_prop_types9.default.number.isRequired
} : void 0;
var Ripple_default = Ripple;

// node_modules/@material-ui/core/esm/ButtonBase/TouchRipple.js
var DURATION = 550;
var DELAY_RIPPLE = 80;
var styles = function styles2(theme) {
  return {
    root: {
      overflow: "hidden",
      pointerEvents: "none",
      position: "absolute",
      zIndex: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      borderRadius: "inherit"
    },
    ripple: {
      opacity: 0,
      position: "absolute"
    },
    rippleVisible: {
      opacity: 0.3,
      transform: "scale(1)",
      animation: "$enter ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
    },
    ripplePulsate: {
      animationDuration: "".concat(theme.transitions.duration.shorter, "ms")
    },
    child: {
      opacity: 1,
      display: "block",
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      backgroundColor: "currentColor"
    },
    childLeaving: {
      opacity: 0,
      animation: "$exit ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
    },
    childPulsate: {
      position: "absolute",
      left: 0,
      top: 0,
      animation: "$pulsate 2500ms ".concat(theme.transitions.easing.easeInOut, " 200ms infinite")
    },
    "@keyframes enter": {
      "0%": {
        transform: "scale(0)",
        opacity: 0.1
      },
      "100%": {
        transform: "scale(1)",
        opacity: 0.3
      }
    },
    "@keyframes exit": {
      "0%": {
        opacity: 1
      },
      "100%": {
        opacity: 0
      }
    },
    "@keyframes pulsate": {
      "0%": {
        transform: "scale(1)"
      },
      "50%": {
        transform: "scale(0.92)"
      },
      "100%": {
        transform: "scale(1)"
      }
    }
  };
};
var TouchRipple = /* @__PURE__ */ forwardRef(function TouchRipple2(props, ref) {
  var _props$center = props.center, centerProp = _props$center === void 0 ? false : _props$center, classes = props.classes, className = props.className, other = _objectWithoutProperties(props, ["center", "classes", "className"]);
  var _React$useState = useState2([]), ripples = _React$useState[0], setRipples = _React$useState[1];
  var nextKey = useRef2(0);
  var rippleCallback = useRef2(null);
  useEffect3(function() {
    if (rippleCallback.current) {
      rippleCallback.current();
      rippleCallback.current = null;
    }
  }, [ripples]);
  var ignoringMouseDown = useRef2(false);
  var startTimer = useRef2(null);
  var startTimerCommit = useRef2(null);
  var container = useRef2(null);
  useEffect3(function() {
    return function() {
      clearTimeout(startTimer.current);
    };
  }, []);
  var startCommit = useCallback3(function(params) {
    var pulsate2 = params.pulsate, rippleX = params.rippleX, rippleY = params.rippleY, rippleSize = params.rippleSize, cb = params.cb;
    setRipples(function(oldRipples) {
      return [].concat(_toConsumableArray(oldRipples), [/* @__PURE__ */ createElement2(Ripple_default, {
        key: nextKey.current,
        classes,
        timeout: DURATION,
        pulsate: pulsate2,
        rippleX,
        rippleY,
        rippleSize
      })]);
    });
    nextKey.current += 1;
    rippleCallback.current = cb;
  }, [classes]);
  var start = useCallback3(function() {
    var event = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var cb = arguments.length > 2 ? arguments[2] : void 0;
    var _options$pulsate = options.pulsate, pulsate2 = _options$pulsate === void 0 ? false : _options$pulsate, _options$center = options.center, center = _options$center === void 0 ? centerProp || options.pulsate : _options$center, _options$fakeElement = options.fakeElement, fakeElement = _options$fakeElement === void 0 ? false : _options$fakeElement;
    if (event.type === "mousedown" && ignoringMouseDown.current) {
      ignoringMouseDown.current = false;
      return;
    }
    if (event.type === "touchstart") {
      ignoringMouseDown.current = true;
    }
    var element = fakeElement ? null : container.current;
    var rect = element ? element.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    var rippleX;
    var rippleY;
    var rippleSize;
    if (center || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      var _ref = event.touches ? event.touches[0] : event, clientX = _ref.clientX, clientY = _ref.clientY;
      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }
    if (center) {
      rippleSize = Math.sqrt((2 * Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / 3);
      if (rippleSize % 2 === 0) {
        rippleSize += 1;
      }
    } else {
      var sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      var sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));
    }
    if (event.touches) {
      if (startTimerCommit.current === null) {
        startTimerCommit.current = function() {
          startCommit({
            pulsate: pulsate2,
            rippleX,
            rippleY,
            rippleSize,
            cb
          });
        };
        startTimer.current = setTimeout(function() {
          if (startTimerCommit.current) {
            startTimerCommit.current();
            startTimerCommit.current = null;
          }
        }, DELAY_RIPPLE);
      }
    } else {
      startCommit({
        pulsate: pulsate2,
        rippleX,
        rippleY,
        rippleSize,
        cb
      });
    }
  }, [centerProp, startCommit]);
  var pulsate = useCallback3(function() {
    start({}, {
      pulsate: true
    });
  }, [start]);
  var stop = useCallback3(function(event, cb) {
    clearTimeout(startTimer.current);
    if (event.type === "touchend" && startTimerCommit.current) {
      event.persist();
      startTimerCommit.current();
      startTimerCommit.current = null;
      startTimer.current = setTimeout(function() {
        stop(event, cb);
      });
      return;
    }
    startTimerCommit.current = null;
    setRipples(function(oldRipples) {
      if (oldRipples.length > 0) {
        return oldRipples.slice(1);
      }
      return oldRipples;
    });
    rippleCallback.current = cb;
  }, []);
  useImperativeHandle(ref, function() {
    return {
      pulsate,
      start,
      stop
    };
  }, [pulsate, start, stop]);
  return /* @__PURE__ */ createElement2("span", _extends({
    className: clsx_m_default(classes.root, className),
    ref: container
  }, other), /* @__PURE__ */ createElement2(TransitionGroup_default, {
    component: null,
    exit: true
  }, ripples));
});
true ? TouchRipple.propTypes = {
  center: import_prop_types10.default.bool,
  classes: import_prop_types10.default.object.isRequired,
  className: import_prop_types10.default.string
} : void 0;
var TouchRipple_default = withStyles_default2(styles, {
  flip: false,
  name: "MuiTouchRipple"
})(/* @__PURE__ */ memo(TouchRipple));

// node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js
var styles3 = {
  root: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    "-moz-appearance": "none",
    "-webkit-appearance": "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": {
      borderStyle: "none"
    },
    "&$disabled": {
      pointerEvents: "none",
      cursor: "default"
    },
    "@media print": {
      colorAdjust: "exact"
    }
  },
  disabled: {},
  focusVisible: {}
};
var ButtonBase = /* @__PURE__ */ forwardRef2(function ButtonBase2(props, ref) {
  var action3 = props.action, buttonRefProp = props.buttonRef, _props$centerRipple = props.centerRipple, centerRipple = _props$centerRipple === void 0 ? false : _props$centerRipple, children = props.children, classes = props.classes, className = props.className, _props$component = props.component, component = _props$component === void 0 ? "button" : _props$component, _props$disabled = props.disabled, disabled3 = _props$disabled === void 0 ? false : _props$disabled, _props$disableRipple = props.disableRipple, disableRipple = _props$disableRipple === void 0 ? false : _props$disableRipple, _props$disableTouchRi = props.disableTouchRipple, disableTouchRipple = _props$disableTouchRi === void 0 ? false : _props$disableTouchRi, _props$focusRipple = props.focusRipple, focusRipple = _props$focusRipple === void 0 ? false : _props$focusRipple, focusVisibleClassName = props.focusVisibleClassName, onBlur = props.onBlur, onClick = props.onClick, onFocus = props.onFocus, onFocusVisible = props.onFocusVisible, onKeyDown = props.onKeyDown, onKeyUp = props.onKeyUp, onMouseDown = props.onMouseDown, onMouseLeave = props.onMouseLeave, onMouseUp = props.onMouseUp, onTouchEnd = props.onTouchEnd, onTouchMove = props.onTouchMove, onTouchStart = props.onTouchStart, onDragLeave = props.onDragLeave, _props$tabIndex = props.tabIndex, tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex, TouchRippleProps = props.TouchRippleProps, _props$type = props.type, type3 = _props$type === void 0 ? "button" : _props$type, other = _objectWithoutProperties(props, ["action", "buttonRef", "centerRipple", "children", "classes", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "onBlur", "onClick", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "onDragLeave", "tabIndex", "TouchRippleProps", "type"]);
  var buttonRef = useRef3(null);
  function getButtonNode() {
    return findDOMNode2(buttonRef.current);
  }
  var rippleRef = useRef3(null);
  var _React$useState = useState3(false), focusVisible2 = _React$useState[0], setFocusVisible = _React$useState[1];
  if (disabled3 && focusVisible2) {
    setFocusVisible(false);
  }
  var _useIsFocusVisible = useIsFocusVisible(), isFocusVisible2 = _useIsFocusVisible.isFocusVisible, onBlurVisible = _useIsFocusVisible.onBlurVisible, focusVisibleRef = _useIsFocusVisible.ref;
  useImperativeHandle2(action3, function() {
    return {
      focusVisible: function focusVisible3() {
        setFocusVisible(true);
        buttonRef.current.focus();
      }
    };
  }, []);
  useEffect4(function() {
    if (focusVisible2 && focusRipple && !disableRipple) {
      rippleRef.current.pulsate();
    }
  }, [disableRipple, focusRipple, focusVisible2]);
  function useRippleHandler(rippleAction, eventCallback) {
    var skipRippleAction = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : disableTouchRipple;
    return useEventCallback(function(event) {
      if (eventCallback) {
        eventCallback(event);
      }
      var ignore = skipRippleAction;
      if (!ignore && rippleRef.current) {
        rippleRef.current[rippleAction](event);
      }
      return true;
    });
  }
  var handleMouseDown = useRippleHandler("start", onMouseDown);
  var handleDragLeave = useRippleHandler("stop", onDragLeave);
  var handleMouseUp = useRippleHandler("stop", onMouseUp);
  var handleMouseLeave = useRippleHandler("stop", function(event) {
    if (focusVisible2) {
      event.preventDefault();
    }
    if (onMouseLeave) {
      onMouseLeave(event);
    }
  });
  var handleTouchStart = useRippleHandler("start", onTouchStart);
  var handleTouchEnd = useRippleHandler("stop", onTouchEnd);
  var handleTouchMove = useRippleHandler("stop", onTouchMove);
  var handleBlur = useRippleHandler("stop", function(event) {
    if (focusVisible2) {
      onBlurVisible(event);
      setFocusVisible(false);
    }
    if (onBlur) {
      onBlur(event);
    }
  }, false);
  var handleFocus = useEventCallback(function(event) {
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }
    if (isFocusVisible2(event)) {
      setFocusVisible(true);
      if (onFocusVisible) {
        onFocusVisible(event);
      }
    }
    if (onFocus) {
      onFocus(event);
    }
  });
  var isNonNativeButton = function isNonNativeButton2() {
    var button2 = getButtonNode();
    return component && component !== "button" && !(button2.tagName === "A" && button2.href);
  };
  var keydownRef = useRef3(false);
  var handleKeyDown2 = useEventCallback(function(event) {
    if (focusRipple && !keydownRef.current && focusVisible2 && rippleRef.current && event.key === " ") {
      keydownRef.current = true;
      event.persist();
      rippleRef.current.stop(event, function() {
        rippleRef.current.start(event);
      });
    }
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === " ") {
      event.preventDefault();
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === "Enter" && !disabled3) {
      event.preventDefault();
      if (onClick) {
        onClick(event);
      }
    }
  });
  var handleKeyUp = useEventCallback(function(event) {
    if (focusRipple && event.key === " " && rippleRef.current && focusVisible2 && !event.defaultPrevented) {
      keydownRef.current = false;
      event.persist();
      rippleRef.current.stop(event, function() {
        rippleRef.current.pulsate(event);
      });
    }
    if (onKeyUp) {
      onKeyUp(event);
    }
    if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === " " && !event.defaultPrevented) {
      onClick(event);
    }
  });
  var ComponentProp = component;
  if (ComponentProp === "button" && other.href) {
    ComponentProp = "a";
  }
  var buttonProps = {};
  if (ComponentProp === "button") {
    buttonProps.type = type3;
    buttonProps.disabled = disabled3;
  } else {
    if (ComponentProp !== "a" || !other.href) {
      buttonProps.role = "button";
    }
    buttonProps["aria-disabled"] = disabled3;
  }
  var handleUserRef = useForkRef(buttonRefProp, ref);
  var handleOwnRef = useForkRef(focusVisibleRef, buttonRef);
  var handleRef = useForkRef(handleUserRef, handleOwnRef);
  var _React$useState2 = useState3(false), mountedState = _React$useState2[0], setMountedState = _React$useState2[1];
  useEffect4(function() {
    setMountedState(true);
  }, []);
  var enableTouchRipple = mountedState && !disableRipple && !disabled3;
  if (true) {
    useEffect4(function() {
      if (enableTouchRipple && !rippleRef.current) {
        console.error(["Material-UI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join("\n"));
      }
    }, [enableTouchRipple]);
  }
  return /* @__PURE__ */ createElement3(ComponentProp, _extends({
    className: clsx_m_default(classes.root, className, focusVisible2 && [classes.focusVisible, focusVisibleClassName], disabled3 && classes.disabled),
    onBlur: handleBlur,
    onClick,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown2,
    onKeyUp: handleKeyUp,
    onMouseDown: handleMouseDown,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onDragLeave: handleDragLeave,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    onTouchStart: handleTouchStart,
    ref: handleRef,
    tabIndex: disabled3 ? -1 : tabIndex
  }, buttonProps, other), children, enableTouchRipple ? /* @__PURE__ */ createElement3(TouchRipple_default, _extends({
    ref: rippleRef,
    center: centerRipple
  }, TouchRippleProps)) : null);
});
true ? ButtonBase.propTypes = {
  action: import_utils11.refType,
  buttonRef: deprecatedPropType(import_utils11.refType, "Use `ref` instead."),
  centerRipple: import_prop_types11.default.bool,
  children: import_prop_types11.default.node,
  classes: import_prop_types11.default.object,
  className: import_prop_types11.default.string,
  component: import_utils11.elementTypeAcceptingRef,
  disabled: import_prop_types11.default.bool,
  disableRipple: import_prop_types11.default.bool,
  disableTouchRipple: import_prop_types11.default.bool,
  focusRipple: import_prop_types11.default.bool,
  focusVisibleClassName: import_prop_types11.default.string,
  href: import_prop_types11.default.string,
  onBlur: import_prop_types11.default.func,
  onClick: import_prop_types11.default.func,
  onDragLeave: import_prop_types11.default.func,
  onFocus: import_prop_types11.default.func,
  onFocusVisible: import_prop_types11.default.func,
  onKeyDown: import_prop_types11.default.func,
  onKeyUp: import_prop_types11.default.func,
  onMouseDown: import_prop_types11.default.func,
  onMouseLeave: import_prop_types11.default.func,
  onMouseUp: import_prop_types11.default.func,
  onTouchEnd: import_prop_types11.default.func,
  onTouchMove: import_prop_types11.default.func,
  onTouchStart: import_prop_types11.default.func,
  tabIndex: import_prop_types11.default.oneOfType([import_prop_types11.default.number, import_prop_types11.default.string]),
  TouchRippleProps: import_prop_types11.default.object,
  type: import_prop_types11.default.oneOfType([import_prop_types11.default.oneOf(["button", "reset", "submit"]), import_prop_types11.default.string])
} : void 0;
var ButtonBase_default = withStyles_default2(styles3, {
  name: "MuiButtonBase"
})(ButtonBase);

// node_modules/@material-ui/core/esm/utils/capitalize.js
function capitalize(string) {
  if (typeof string !== "string") {
    throw new Error(true ? "Material-UI: capitalize(string) expects a string argument." : (0, import_utils.formatMuiErrorMessage)(7));
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// node_modules/@material-ui/core/esm/Button/Button.js
var styles4 = function styles5(theme) {
  return {
    root: _extends({}, theme.typography.button, {
      boxSizing: "border-box",
      minWidth: 64,
      padding: "6px 16px",
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.text.primary,
      transition: theme.transitions.create(["background-color", "box-shadow", "border"], {
        duration: theme.transitions.duration.short
      }),
      "&:hover": {
        textDecoration: "none",
        backgroundColor: alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        },
        "&$disabled": {
          backgroundColor: "transparent"
        }
      },
      "&$disabled": {
        color: theme.palette.action.disabled
      }
    }),
    label: {
      width: "100%",
      display: "inherit",
      alignItems: "inherit",
      justifyContent: "inherit"
    },
    text: {
      padding: "6px 8px"
    },
    textPrimary: {
      color: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    },
    textSecondary: {
      color: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: alpha(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    },
    outlined: {
      padding: "5px 15px",
      border: "1px solid ".concat(theme.palette.type === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"),
      "&$disabled": {
        border: "1px solid ".concat(theme.palette.action.disabledBackground)
      }
    },
    outlinedPrimary: {
      color: theme.palette.primary.main,
      border: "1px solid ".concat(alpha(theme.palette.primary.main, 0.5)),
      "&:hover": {
        border: "1px solid ".concat(theme.palette.primary.main),
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    },
    outlinedSecondary: {
      color: theme.palette.secondary.main,
      border: "1px solid ".concat(alpha(theme.palette.secondary.main, 0.5)),
      "&:hover": {
        border: "1px solid ".concat(theme.palette.secondary.main),
        backgroundColor: alpha(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      },
      "&$disabled": {
        border: "1px solid ".concat(theme.palette.action.disabled)
      }
    },
    contained: {
      color: theme.palette.getContrastText(theme.palette.grey[300]),
      backgroundColor: theme.palette.grey[300],
      boxShadow: theme.shadows[2],
      "&:hover": {
        backgroundColor: theme.palette.grey.A100,
        boxShadow: theme.shadows[4],
        "@media (hover: none)": {
          boxShadow: theme.shadows[2],
          backgroundColor: theme.palette.grey[300]
        },
        "&$disabled": {
          backgroundColor: theme.palette.action.disabledBackground
        }
      },
      "&$focusVisible": {
        boxShadow: theme.shadows[6]
      },
      "&:active": {
        boxShadow: theme.shadows[8]
      },
      "&$disabled": {
        color: theme.palette.action.disabled,
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.action.disabledBackground
      }
    },
    containedPrimary: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
        "@media (hover: none)": {
          backgroundColor: theme.palette.primary.main
        }
      }
    },
    containedSecondary: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: theme.palette.secondary.dark,
        "@media (hover: none)": {
          backgroundColor: theme.palette.secondary.main
        }
      }
    },
    disableElevation: {
      boxShadow: "none",
      "&:hover": {
        boxShadow: "none"
      },
      "&$focusVisible": {
        boxShadow: "none"
      },
      "&:active": {
        boxShadow: "none"
      },
      "&$disabled": {
        boxShadow: "none"
      }
    },
    focusVisible: {},
    disabled: {},
    colorInherit: {
      color: "inherit",
      borderColor: "currentColor"
    },
    textSizeSmall: {
      padding: "4px 5px",
      fontSize: theme.typography.pxToRem(13)
    },
    textSizeLarge: {
      padding: "8px 11px",
      fontSize: theme.typography.pxToRem(15)
    },
    outlinedSizeSmall: {
      padding: "3px 9px",
      fontSize: theme.typography.pxToRem(13)
    },
    outlinedSizeLarge: {
      padding: "7px 21px",
      fontSize: theme.typography.pxToRem(15)
    },
    containedSizeSmall: {
      padding: "4px 10px",
      fontSize: theme.typography.pxToRem(13)
    },
    containedSizeLarge: {
      padding: "8px 22px",
      fontSize: theme.typography.pxToRem(15)
    },
    sizeSmall: {},
    sizeLarge: {},
    fullWidth: {
      width: "100%"
    },
    startIcon: {
      display: "inherit",
      marginRight: 8,
      marginLeft: -4,
      "&$iconSizeSmall": {
        marginLeft: -2
      }
    },
    endIcon: {
      display: "inherit",
      marginRight: -4,
      marginLeft: 8,
      "&$iconSizeSmall": {
        marginRight: -2
      }
    },
    iconSizeSmall: {
      "& > *:first-child": {
        fontSize: 18
      }
    },
    iconSizeMedium: {
      "& > *:first-child": {
        fontSize: 20
      }
    },
    iconSizeLarge: {
      "& > *:first-child": {
        fontSize: 22
      }
    }
  };
};
var Button = /* @__PURE__ */ forwardRef3(function Button2(props, ref) {
  var children = props.children, classes = props.classes, className = props.className, _props$color = props.color, color = _props$color === void 0 ? "default" : _props$color, _props$component = props.component, component = _props$component === void 0 ? "button" : _props$component, _props$disabled = props.disabled, disabled3 = _props$disabled === void 0 ? false : _props$disabled, _props$disableElevati = props.disableElevation, disableElevation = _props$disableElevati === void 0 ? false : _props$disableElevati, _props$disableFocusRi = props.disableFocusRipple, disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi, endIconProp = props.endIcon, focusVisibleClassName = props.focusVisibleClassName, _props$fullWidth = props.fullWidth, fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth, _props$size = props.size, size = _props$size === void 0 ? "medium" : _props$size, startIconProp = props.startIcon, _props$type = props.type, type3 = _props$type === void 0 ? "button" : _props$type, _props$variant = props.variant, variant = _props$variant === void 0 ? "text" : _props$variant, other = _objectWithoutProperties(props, ["children", "classes", "className", "color", "component", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"]);
  var startIcon = startIconProp && /* @__PURE__ */ createElement4("span", {
    className: clsx_m_default(classes.startIcon, classes["iconSize".concat(capitalize(size))])
  }, startIconProp);
  var endIcon = endIconProp && /* @__PURE__ */ createElement4("span", {
    className: clsx_m_default(classes.endIcon, classes["iconSize".concat(capitalize(size))])
  }, endIconProp);
  return /* @__PURE__ */ createElement4(ButtonBase_default, _extends({
    className: clsx_m_default(classes.root, classes[variant], className, color === "inherit" ? classes.colorInherit : color !== "default" && classes["".concat(variant).concat(capitalize(color))], size !== "medium" && [classes["".concat(variant, "Size").concat(capitalize(size))], classes["size".concat(capitalize(size))]], disableElevation && classes.disableElevation, disabled3 && classes.disabled, fullWidth && classes.fullWidth),
    component,
    disabled: disabled3,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: clsx_m_default(classes.focusVisible, focusVisibleClassName),
    ref,
    type: type3
  }, other), /* @__PURE__ */ createElement4("span", {
    className: classes.label
  }, startIcon, children, endIcon));
});
true ? Button.propTypes = {
  children: import_prop_types12.default.node,
  classes: import_prop_types12.default.object,
  className: import_prop_types12.default.string,
  color: import_prop_types12.default.oneOf(["default", "inherit", "primary", "secondary"]),
  component: import_prop_types12.default.elementType,
  disabled: import_prop_types12.default.bool,
  disableElevation: import_prop_types12.default.bool,
  disableFocusRipple: import_prop_types12.default.bool,
  disableRipple: import_prop_types12.default.bool,
  endIcon: import_prop_types12.default.node,
  focusVisibleClassName: import_prop_types12.default.string,
  fullWidth: import_prop_types12.default.bool,
  href: import_prop_types12.default.string,
  size: import_prop_types12.default.oneOf(["large", "medium", "small"]),
  startIcon: import_prop_types12.default.node,
  type: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["button", "reset", "submit"]), import_prop_types12.default.string]),
  variant: import_prop_types12.default.oneOf(["contained", "outlined", "text"])
} : void 0;
var Button_default = withStyles_default2(styles4, {
  name: "MuiButton"
})(Button);

// node_modules/@ringcentral/juno/es6/components/Buttons/Button/Button.js
import React32, { forwardRef as forwardRef15, useCallback as useCallback7, useLayoutEffect as useLayoutEffect6, useMemo as useMemo5, useRef as useRef14 } from "react";

// node_modules/@material-ui/core/esm/styles/useTheme.js
import React17 from "react";
function useTheme2() {
  var theme = useTheme() || defaultTheme_default;
  if (true) {
    React17.useDebugValue(theme);
  }
  return theme;
}

// node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm_exports = {};
__export(styled_components_browser_esm_exports, {
  ServerStyleSheet: () => Je,
  StyleSheetConsumer: () => le,
  StyleSheetContext: () => ue,
  StyleSheetManager: () => ye,
  ThemeConsumer: () => Ge,
  ThemeContext: () => Le,
  ThemeProvider: () => Fe,
  __PRIVATE__: () => Ke,
  createGlobalStyle: () => We,
  css: () => Ce,
  default: () => styled_components_browser_esm_default,
  isStyledComponent: () => N,
  keyframes: () => Ue,
  useTheme: () => Ze,
  version: () => C,
  withTheme: () => Xe
});
var import_react_is = __toModule(require_react_is2());
var import_shallowequal = __toModule(require_shallowequal());
import r, { useState as o, useContext as s, useMemo as i, useEffect as a, useRef as c, createElement as u, useDebugValue as l, useLayoutEffect as d } from "react";

// node_modules/@emotion/stylis/dist/stylis.browser.esm.js
function stylis_min(W2) {
  function M2(d2, c2, e2, h2, a2) {
    for (var m = 0, b2 = 0, v2 = 0, n2 = 0, q2, g2, x2 = 0, K2 = 0, k2, u2 = k2 = q2 = 0, l2 = 0, r2 = 0, I2 = 0, t2 = 0, B3 = e2.length, J2 = B3 - 1, y2, f = "", p = "", F3 = "", G3 = "", C2; l2 < B3; ) {
      g2 = e2.charCodeAt(l2);
      l2 === J2 && b2 + n2 + v2 + m !== 0 && (b2 !== 0 && (g2 = b2 === 47 ? 10 : 47), n2 = v2 = m = 0, B3++, J2++);
      if (b2 + n2 + v2 + m === 0) {
        if (l2 === J2 && (0 < r2 && (f = f.replace(N2, "")), 0 < f.trim().length)) {
          switch (g2) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              f += e2.charAt(l2);
          }
          g2 = 59;
        }
        switch (g2) {
          case 123:
            f = f.trim();
            q2 = f.charCodeAt(0);
            k2 = 1;
            for (t2 = ++l2; l2 < B3; ) {
              switch (g2 = e2.charCodeAt(l2)) {
                case 123:
                  k2++;
                  break;
                case 125:
                  k2--;
                  break;
                case 47:
                  switch (g2 = e2.charCodeAt(l2 + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u2 = l2 + 1; u2 < J2; ++u2) {
                          switch (e2.charCodeAt(u2)) {
                            case 47:
                              if (g2 === 42 && e2.charCodeAt(u2 - 1) === 42 && l2 + 2 !== u2) {
                                l2 = u2 + 1;
                                break a;
                              }
                              break;
                            case 10:
                              if (g2 === 47) {
                                l2 = u2 + 1;
                                break a;
                              }
                          }
                        }
                        l2 = u2;
                      }
                  }
                  break;
                case 91:
                  g2++;
                case 40:
                  g2++;
                case 34:
                case 39:
                  for (; l2++ < J2 && e2.charCodeAt(l2) !== g2; ) {
                  }
              }
              if (k2 === 0)
                break;
              l2++;
            }
            k2 = e2.substring(t2, l2);
            q2 === 0 && (q2 = (f = f.replace(ca, "").trim()).charCodeAt(0));
            switch (q2) {
              case 64:
                0 < r2 && (f = f.replace(N2, ""));
                g2 = f.charCodeAt(1);
                switch (g2) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r2 = c2;
                    break;
                  default:
                    r2 = O2;
                }
                k2 = M2(c2, r2, k2, g2, a2 + 1);
                t2 = k2.length;
                0 < A2 && (r2 = X2(O2, f, I2), C2 = H2(3, k2, r2, c2, D2, z2, t2, g2, a2, h2), f = r2.join(""), C2 !== void 0 && (t2 = (k2 = C2.trim()).length) === 0 && (g2 = 0, k2 = ""));
                if (0 < t2)
                  switch (g2) {
                    case 115:
                      f = f.replace(da, ea);
                    case 100:
                    case 109:
                    case 45:
                      k2 = f + "{" + k2 + "}";
                      break;
                    case 107:
                      f = f.replace(fa, "$1 $2");
                      k2 = f + "{" + k2 + "}";
                      k2 = w2 === 1 || w2 === 2 && L2("@" + k2, 3) ? "@-webkit-" + k2 + "@" + k2 : "@" + k2;
                      break;
                    default:
                      k2 = f + k2, h2 === 112 && (k2 = (p += k2, ""));
                  }
                else
                  k2 = "";
                break;
              default:
                k2 = M2(c2, X2(c2, f, I2), k2, h2, a2 + 1);
            }
            F3 += k2;
            k2 = I2 = r2 = u2 = q2 = 0;
            f = "";
            g2 = e2.charCodeAt(++l2);
            break;
          case 125:
          case 59:
            f = (0 < r2 ? f.replace(N2, "") : f).trim();
            if (1 < (t2 = f.length))
              switch (u2 === 0 && (q2 = f.charCodeAt(0), q2 === 45 || 96 < q2 && 123 > q2) && (t2 = (f = f.replace(" ", ":")).length), 0 < A2 && (C2 = H2(1, f, c2, d2, D2, z2, p.length, h2, a2, h2)) !== void 0 && (t2 = (f = C2.trim()).length) === 0 && (f = "\0\0"), q2 = f.charCodeAt(0), g2 = f.charCodeAt(1), q2) {
                case 0:
                  break;
                case 64:
                  if (g2 === 105 || g2 === 99) {
                    G3 += f + e2.charAt(l2);
                    break;
                  }
                default:
                  f.charCodeAt(t2 - 1) !== 58 && (p += P2(f, q2, g2, f.charCodeAt(2)));
              }
            I2 = r2 = u2 = q2 = 0;
            f = "";
            g2 = e2.charCodeAt(++l2);
        }
      }
      switch (g2) {
        case 13:
        case 10:
          b2 === 47 ? b2 = 0 : 1 + q2 === 0 && h2 !== 107 && 0 < f.length && (r2 = 1, f += "\0");
          0 < A2 * Y2 && H2(0, f, c2, d2, D2, z2, p.length, h2, a2, h2);
          z2 = 1;
          D2++;
          break;
        case 59:
        case 125:
          if (b2 + n2 + v2 + m === 0) {
            z2++;
            break;
          }
        default:
          z2++;
          y2 = e2.charAt(l2);
          switch (g2) {
            case 9:
            case 32:
              if (n2 + m + b2 === 0)
                switch (x2) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    y2 = "";
                    break;
                  default:
                    g2 !== 32 && (y2 = " ");
                }
              break;
            case 0:
              y2 = "\\0";
              break;
            case 12:
              y2 = "\\f";
              break;
            case 11:
              y2 = "\\v";
              break;
            case 38:
              n2 + b2 + m === 0 && (r2 = I2 = 1, y2 = "\f" + y2);
              break;
            case 108:
              if (n2 + b2 + m + E2 === 0 && 0 < u2)
                switch (l2 - u2) {
                  case 2:
                    x2 === 112 && e2.charCodeAt(l2 - 3) === 58 && (E2 = x2);
                  case 8:
                    K2 === 111 && (E2 = K2);
                }
              break;
            case 58:
              n2 + b2 + m === 0 && (u2 = l2);
              break;
            case 44:
              b2 + v2 + n2 + m === 0 && (r2 = 1, y2 += "\r");
              break;
            case 34:
            case 39:
              b2 === 0 && (n2 = n2 === g2 ? 0 : n2 === 0 ? g2 : n2);
              break;
            case 91:
              n2 + b2 + v2 === 0 && m++;
              break;
            case 93:
              n2 + b2 + v2 === 0 && m--;
              break;
            case 41:
              n2 + b2 + m === 0 && v2--;
              break;
            case 40:
              if (n2 + b2 + m === 0) {
                if (q2 === 0)
                  switch (2 * x2 + 3 * K2) {
                    case 533:
                      break;
                    default:
                      q2 = 1;
                  }
                v2++;
              }
              break;
            case 64:
              b2 + v2 + n2 + m + u2 + k2 === 0 && (k2 = 1);
              break;
            case 42:
            case 47:
              if (!(0 < n2 + m + v2))
                switch (b2) {
                  case 0:
                    switch (2 * g2 + 3 * e2.charCodeAt(l2 + 1)) {
                      case 235:
                        b2 = 47;
                        break;
                      case 220:
                        t2 = l2, b2 = 42;
                    }
                    break;
                  case 42:
                    g2 === 47 && x2 === 42 && t2 + 2 !== l2 && (e2.charCodeAt(t2 + 2) === 33 && (p += e2.substring(t2, l2 + 1)), y2 = "", b2 = 0);
                }
          }
          b2 === 0 && (f += y2);
      }
      K2 = x2;
      x2 = g2;
      l2++;
    }
    t2 = p.length;
    if (0 < t2) {
      r2 = c2;
      if (0 < A2 && (C2 = H2(2, p, r2, d2, D2, z2, t2, h2, a2, h2), C2 !== void 0 && (p = C2).length === 0))
        return G3 + p + F3;
      p = r2.join(",") + "{" + p + "}";
      if (w2 * E2 !== 0) {
        w2 !== 2 || L2(p, 2) || (E2 = 0);
        switch (E2) {
          case 111:
            p = p.replace(ha, ":-moz-$1") + p;
            break;
          case 112:
            p = p.replace(Q2, "::-webkit-input-$1") + p.replace(Q2, "::-moz-$1") + p.replace(Q2, ":-ms-input-$1") + p;
        }
        E2 = 0;
      }
    }
    return G3 + p + F3;
  }
  function X2(d2, c2, e2) {
    var h2 = c2.trim().split(ia);
    c2 = h2;
    var a2 = h2.length, m = d2.length;
    switch (m) {
      case 0:
      case 1:
        var b2 = 0;
        for (d2 = m === 0 ? "" : d2[0] + " "; b2 < a2; ++b2) {
          c2[b2] = Z2(d2, c2[b2], e2).trim();
        }
        break;
      default:
        var v2 = b2 = 0;
        for (c2 = []; b2 < a2; ++b2) {
          for (var n2 = 0; n2 < m; ++n2) {
            c2[v2++] = Z2(d2[n2] + " ", h2[b2], e2).trim();
          }
        }
    }
    return c2;
  }
  function Z2(d2, c2, e2) {
    var h2 = c2.charCodeAt(0);
    33 > h2 && (h2 = (c2 = c2.trim()).charCodeAt(0));
    switch (h2) {
      case 38:
        return c2.replace(F2, "$1" + d2.trim());
      case 58:
        return d2.trim() + c2.replace(F2, "$1" + d2.trim());
      default:
        if (0 < 1 * e2 && 0 < c2.indexOf("\f"))
          return c2.replace(F2, (d2.charCodeAt(0) === 58 ? "" : "$1") + d2.trim());
    }
    return d2 + c2;
  }
  function P2(d2, c2, e2, h2) {
    var a2 = d2 + ";", m = 2 * c2 + 3 * e2 + 4 * h2;
    if (m === 944) {
      d2 = a2.indexOf(":", 9) + 1;
      var b2 = a2.substring(d2, a2.length - 1).trim();
      b2 = a2.substring(0, d2).trim() + b2 + ";";
      return w2 === 1 || w2 === 2 && L2(b2, 1) ? "-webkit-" + b2 + b2 : b2;
    }
    if (w2 === 0 || w2 === 2 && !L2(a2, 1))
      return a2;
    switch (m) {
      case 1015:
        return a2.charCodeAt(10) === 97 ? "-webkit-" + a2 + a2 : a2;
      case 951:
        return a2.charCodeAt(3) === 116 ? "-webkit-" + a2 + a2 : a2;
      case 963:
        return a2.charCodeAt(5) === 110 ? "-webkit-" + a2 + a2 : a2;
      case 1009:
        if (a2.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + a2 + a2;
      case 978:
        return "-webkit-" + a2 + "-moz-" + a2 + a2;
      case 1019:
      case 983:
        return "-webkit-" + a2 + "-moz-" + a2 + "-ms-" + a2 + a2;
      case 883:
        if (a2.charCodeAt(8) === 45)
          return "-webkit-" + a2 + a2;
        if (0 < a2.indexOf("image-set(", 11))
          return a2.replace(ja, "$1-webkit-$2") + a2;
        break;
      case 932:
        if (a2.charCodeAt(4) === 45)
          switch (a2.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + a2.replace("-grow", "") + "-webkit-" + a2 + "-ms-" + a2.replace("grow", "positive") + a2;
            case 115:
              return "-webkit-" + a2 + "-ms-" + a2.replace("shrink", "negative") + a2;
            case 98:
              return "-webkit-" + a2 + "-ms-" + a2.replace("basis", "preferred-size") + a2;
          }
        return "-webkit-" + a2 + "-ms-" + a2 + a2;
      case 964:
        return "-webkit-" + a2 + "-ms-flex-" + a2 + a2;
      case 1023:
        if (a2.charCodeAt(8) !== 99)
          break;
        b2 = a2.substring(a2.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify");
        return "-webkit-box-pack" + b2 + "-webkit-" + a2 + "-ms-flex-pack" + b2 + a2;
      case 1005:
        return ka.test(a2) ? a2.replace(aa, ":-webkit-") + a2.replace(aa, ":-moz-") + a2 : a2;
      case 1e3:
        b2 = a2.substring(13).trim();
        c2 = b2.indexOf("-") + 1;
        switch (b2.charCodeAt(0) + b2.charCodeAt(c2)) {
          case 226:
            b2 = a2.replace(G2, "tb");
            break;
          case 232:
            b2 = a2.replace(G2, "tb-rl");
            break;
          case 220:
            b2 = a2.replace(G2, "lr");
            break;
          default:
            return a2;
        }
        return "-webkit-" + a2 + "-ms-" + b2 + a2;
      case 1017:
        if (a2.indexOf("sticky", 9) === -1)
          break;
      case 975:
        c2 = (a2 = d2).length - 10;
        b2 = (a2.charCodeAt(c2) === 33 ? a2.substring(0, c2) : a2).substring(d2.indexOf(":", 7) + 1).trim();
        switch (m = b2.charCodeAt(0) + (b2.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b2.charCodeAt(8))
              break;
          case 115:
            a2 = a2.replace(b2, "-webkit-" + b2) + ";" + a2;
            break;
          case 207:
          case 102:
            a2 = a2.replace(b2, "-webkit-" + (102 < m ? "inline-" : "") + "box") + ";" + a2.replace(b2, "-webkit-" + b2) + ";" + a2.replace(b2, "-ms-" + b2 + "box") + ";" + a2;
        }
        return a2 + ";";
      case 938:
        if (a2.charCodeAt(5) === 45)
          switch (a2.charCodeAt(6)) {
            case 105:
              return b2 = a2.replace("-items", ""), "-webkit-" + a2 + "-webkit-box-" + b2 + "-ms-flex-" + b2 + a2;
            case 115:
              return "-webkit-" + a2 + "-ms-flex-item-" + a2.replace(ba, "") + a2;
            default:
              return "-webkit-" + a2 + "-ms-flex-line-pack" + a2.replace("align-content", "").replace(ba, "") + a2;
          }
        break;
      case 973:
      case 989:
        if (a2.charCodeAt(3) !== 45 || a2.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (la.test(d2) === true)
          return (b2 = d2.substring(d2.indexOf(":") + 1)).charCodeAt(0) === 115 ? P2(d2.replace("stretch", "fill-available"), c2, e2, h2).replace(":fill-available", ":stretch") : a2.replace(b2, "-webkit-" + b2) + a2.replace(b2, "-moz-" + b2.replace("fill-", "")) + a2;
        break;
      case 962:
        if (a2 = "-webkit-" + a2 + (a2.charCodeAt(5) === 102 ? "-ms-" + a2 : "") + a2, e2 + h2 === 211 && a2.charCodeAt(13) === 105 && 0 < a2.indexOf("transform", 10))
          return a2.substring(0, a2.indexOf(";", 27) + 1).replace(ma, "$1-webkit-$2") + a2;
    }
    return a2;
  }
  function L2(d2, c2) {
    var e2 = d2.indexOf(c2 === 1 ? ":" : "{"), h2 = d2.substring(0, c2 !== 3 ? e2 : 10);
    e2 = d2.substring(e2 + 1, d2.length - 1);
    return R2(c2 !== 2 ? h2 : h2.replace(na, "$1"), e2, c2);
  }
  function ea(d2, c2) {
    var e2 = P2(c2, c2.charCodeAt(0), c2.charCodeAt(1), c2.charCodeAt(2));
    return e2 !== c2 + ";" ? e2.replace(oa, " or ($1)").substring(4) : "(" + c2 + ")";
  }
  function H2(d2, c2, e2, h2, a2, m, b2, v2, n2, q2) {
    for (var g2 = 0, x2 = c2, w3; g2 < A2; ++g2) {
      switch (w3 = S2[g2].call(B2, d2, x2, e2, h2, a2, m, b2, v2, n2, q2)) {
        case void 0:
        case false:
        case true:
        case null:
          break;
        default:
          x2 = w3;
      }
    }
    if (x2 !== c2)
      return x2;
  }
  function T2(d2) {
    switch (d2) {
      case void 0:
      case null:
        A2 = S2.length = 0;
        break;
      default:
        if (typeof d2 === "function")
          S2[A2++] = d2;
        else if (typeof d2 === "object")
          for (var c2 = 0, e2 = d2.length; c2 < e2; ++c2) {
            T2(d2[c2]);
          }
        else
          Y2 = !!d2 | 0;
    }
    return T2;
  }
  function U2(d2) {
    d2 = d2.prefix;
    d2 !== void 0 && (R2 = null, d2 ? typeof d2 !== "function" ? w2 = 1 : (w2 = 2, R2 = d2) : w2 = 0);
    return U2;
  }
  function B2(d2, c2) {
    var e2 = d2;
    33 > e2.charCodeAt(0) && (e2 = e2.trim());
    V2 = e2;
    e2 = [V2];
    if (0 < A2) {
      var h2 = H2(-1, c2, e2, e2, D2, z2, 0, 0, 0, 0);
      h2 !== void 0 && typeof h2 === "string" && (c2 = h2);
    }
    var a2 = M2(O2, e2, c2, 0, 0);
    0 < A2 && (h2 = H2(-2, a2, e2, e2, D2, z2, a2.length, 0, 0, 0), h2 !== void 0 && (a2 = h2));
    V2 = "";
    E2 = 0;
    z2 = D2 = 1;
    return a2;
  }
  var ca = /^\0+/g, N2 = /[\0\r\f]/g, aa = /: */g, ka = /zoo|gra/, ma = /([,: ])(transform)/g, ia = /,\r+?/g, F2 = /([\t\r\n ])*\f?&/g, fa = /@(k\w+)\s*(\S*)\s*/, Q2 = /::(place)/g, ha = /:(read-only)/g, G2 = /[svh]\w+-[tblr]{2}/, da = /\(\s*(.*)\s*\)/g, oa = /([\s\S]*?);/g, ba = /-self|flex-/g, na = /[^]*?(:[rp][el]a[\w-]+)[^]*/, la = /stretch|:\s*\w+\-(?:conte|avail)/, ja = /([^-])(image-set\()/, z2 = 1, D2 = 1, E2 = 0, w2 = 1, O2 = [], S2 = [], A2 = 0, R2 = null, Y2 = 0, V2 = "";
  B2.use = T2;
  B2.set = U2;
  W2 !== void 0 && U2(W2);
  return B2;
}
var stylis_browser_esm_default = stylis_min;

// node_modules/@emotion/unitless/dist/unitless.browser.esm.js
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
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var unitless_browser_esm_default = unitlessKeys;

// node_modules/@emotion/memoize/dist/memoize.browser.esm.js
function memoize4(fn) {
  var cache3 = {};
  return function(arg) {
    if (cache3[arg] === void 0)
      cache3[arg] = fn(arg);
    return cache3[arg];
  };
}
var memoize_browser_esm_default = memoize4;

// node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var index2 = memoize_browser_esm_default(function(prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
});
var is_prop_valid_browser_esm_default = index2;

// node_modules/styled-components/dist/styled-components.browser.esm.js
var import_hoist_non_react_statics2 = __toModule(require_hoist_non_react_statics_cjs());
function v() {
  return (v = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }).apply(this, arguments);
}
var g = function(e2, t2) {
  for (var n2 = [e2[0]], r2 = 0, o2 = t2.length; r2 < o2; r2 += 1)
    n2.push(t2[r2], e2[r2 + 1]);
  return n2;
};
var S = function(t2) {
  return t2 !== null && typeof t2 == "object" && (t2.toString ? t2.toString() : Object.prototype.toString.call(t2)) === "[object Object]" && !(0, import_react_is.typeOf)(t2);
};
var w = Object.freeze([]);
var E = Object.freeze({});
function b(e2) {
  return typeof e2 == "function";
}
function _(e2) {
  return typeof e2 == "string" && e2 || e2.displayName || e2.name || "Component";
}
function N(e2) {
  return e2 && typeof e2.styledComponentId == "string";
}
var A = typeof process != "undefined" && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled";
var C = "5.3.1";
var I = typeof window != "undefined" && "HTMLElement" in window;
var P = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process != "undefined" && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process != "undefined" && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : true);
var O = {};
var R = true ? { 1: "Cannot create styled-component for component: %s.\n\n", 2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n", 3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n", 4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n", 5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n", 6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n", 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: 'ThemeProvider: Please make your "theme" prop an object.\n\n', 9: "Missing document `<head>`\n\n", 10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n", 11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n", 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n", 14: 'ThemeProvider: "theme" prop is required.\n\n', 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n", 17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n" } : {};
function D() {
  for (var e2 = arguments.length <= 0 ? void 0 : arguments[0], t2 = [], n2 = 1, r2 = arguments.length; n2 < r2; n2 += 1)
    t2.push(n2 < 0 || arguments.length <= n2 ? void 0 : arguments[n2]);
  return t2.forEach(function(t3) {
    e2 = e2.replace(/%[a-z]/, t3);
  }), e2;
}
function j(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
    n2[r2 - 1] = arguments[r2];
  throw false ? new Error("An error occurred. See https://git.io/JUIaE#" + e2 + " for more information." + (n2.length > 0 ? " Args: " + n2.join(", ") : "")) : new Error(D.apply(void 0, [R[e2]].concat(n2)).trim());
}
var T = function() {
  function e2(e3) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e3;
  }
  var t2 = e2.prototype;
  return t2.indexOfGroup = function(e3) {
    for (var t3 = 0, n2 = 0; n2 < e3; n2++)
      t3 += this.groupSizes[n2];
    return t3;
  }, t2.insertRules = function(e3, t3) {
    if (e3 >= this.groupSizes.length) {
      for (var n2 = this.groupSizes, r2 = n2.length, o2 = r2; e3 >= o2; )
        (o2 <<= 1) < 0 && j(16, "" + e3);
      this.groupSizes = new Uint32Array(o2), this.groupSizes.set(n2), this.length = o2;
      for (var s2 = r2; s2 < o2; s2++)
        this.groupSizes[s2] = 0;
    }
    for (var i2 = this.indexOfGroup(e3 + 1), a2 = 0, c2 = t3.length; a2 < c2; a2++)
      this.tag.insertRule(i2, t3[a2]) && (this.groupSizes[e3]++, i2++);
  }, t2.clearGroup = function(e3) {
    if (e3 < this.length) {
      var t3 = this.groupSizes[e3], n2 = this.indexOfGroup(e3), r2 = n2 + t3;
      this.groupSizes[e3] = 0;
      for (var o2 = n2; o2 < r2; o2++)
        this.tag.deleteRule(n2);
    }
  }, t2.getGroup = function(e3) {
    var t3 = "";
    if (e3 >= this.length || this.groupSizes[e3] === 0)
      return t3;
    for (var n2 = this.groupSizes[e3], r2 = this.indexOfGroup(e3), o2 = r2 + n2, s2 = r2; s2 < o2; s2++)
      t3 += this.tag.getRule(s2) + "/*!sc*/\n";
    return t3;
  }, e2;
}();
var k = new Map();
var x = new Map();
var V = 1;
var B = function(e2) {
  if (k.has(e2))
    return k.get(e2);
  for (; x.has(V); )
    V++;
  var t2 = V++;
  return ((0 | t2) < 0 || t2 > 1 << 30) && j(16, "" + t2), k.set(e2, t2), x.set(t2, e2), t2;
};
var M = function(e2) {
  return x.get(e2);
};
var z = function(e2, t2) {
  t2 >= V && (V = t2 + 1), k.set(e2, t2), x.set(t2, e2);
};
var L = "style[" + A + '][data-styled-version="5.3.1"]';
var G = new RegExp("^" + A + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)');
var F = function(e2, t2, n2) {
  for (var r2, o2 = n2.split(","), s2 = 0, i2 = o2.length; s2 < i2; s2++)
    (r2 = o2[s2]) && e2.registerName(t2, r2);
};
var Y = function(e2, t2) {
  for (var n2 = (t2.innerHTML || "").split("/*!sc*/\n"), r2 = [], o2 = 0, s2 = n2.length; o2 < s2; o2++) {
    var i2 = n2[o2].trim();
    if (i2) {
      var a2 = i2.match(G);
      if (a2) {
        var c2 = 0 | parseInt(a2[1], 10), u2 = a2[2];
        c2 !== 0 && (z(u2, c2), F(e2, u2, a2[3]), e2.getTag().insertRules(c2, r2)), r2.length = 0;
      } else
        r2.push(i2);
    }
  }
};
var q = function() {
  return typeof window != "undefined" && window.__webpack_nonce__ !== void 0 ? window.__webpack_nonce__ : null;
};
var H = function(e2) {
  var t2 = document.head, n2 = e2 || t2, r2 = document.createElement("style"), o2 = function(e3) {
    for (var t3 = e3.childNodes, n3 = t3.length; n3 >= 0; n3--) {
      var r3 = t3[n3];
      if (r3 && r3.nodeType === 1 && r3.hasAttribute(A))
        return r3;
    }
  }(n2), s2 = o2 !== void 0 ? o2.nextSibling : null;
  r2.setAttribute(A, "active"), r2.setAttribute("data-styled-version", "5.3.1");
  var i2 = q();
  return i2 && r2.setAttribute("nonce", i2), n2.insertBefore(r2, s2), r2;
};
var $ = function() {
  function e2(e3) {
    var t3 = this.element = H(e3);
    t3.appendChild(document.createTextNode("")), this.sheet = function(e4) {
      if (e4.sheet)
        return e4.sheet;
      for (var t4 = document.styleSheets, n2 = 0, r2 = t4.length; n2 < r2; n2++) {
        var o2 = t4[n2];
        if (o2.ownerNode === e4)
          return o2;
      }
      j(17);
    }(t3), this.length = 0;
  }
  var t2 = e2.prototype;
  return t2.insertRule = function(e3, t3) {
    try {
      return this.sheet.insertRule(t3, e3), this.length++, true;
    } catch (e4) {
      return false;
    }
  }, t2.deleteRule = function(e3) {
    this.sheet.deleteRule(e3), this.length--;
  }, t2.getRule = function(e3) {
    var t3 = this.sheet.cssRules[e3];
    return t3 !== void 0 && typeof t3.cssText == "string" ? t3.cssText : "";
  }, e2;
}();
var W = function() {
  function e2(e3) {
    var t3 = this.element = H(e3);
    this.nodes = t3.childNodes, this.length = 0;
  }
  var t2 = e2.prototype;
  return t2.insertRule = function(e3, t3) {
    if (e3 <= this.length && e3 >= 0) {
      var n2 = document.createTextNode(t3), r2 = this.nodes[e3];
      return this.element.insertBefore(n2, r2 || null), this.length++, true;
    }
    return false;
  }, t2.deleteRule = function(e3) {
    this.element.removeChild(this.nodes[e3]), this.length--;
  }, t2.getRule = function(e3) {
    return e3 < this.length ? this.nodes[e3].textContent : "";
  }, e2;
}();
var U = function() {
  function e2(e3) {
    this.rules = [], this.length = 0;
  }
  var t2 = e2.prototype;
  return t2.insertRule = function(e3, t3) {
    return e3 <= this.length && (this.rules.splice(e3, 0, t3), this.length++, true);
  }, t2.deleteRule = function(e3) {
    this.rules.splice(e3, 1), this.length--;
  }, t2.getRule = function(e3) {
    return e3 < this.length ? this.rules[e3] : "";
  }, e2;
}();
var J = I;
var X = { isServer: !I, useCSSOMInjection: !P };
var Z = function() {
  function e2(e3, t3, n2) {
    e3 === void 0 && (e3 = E), t3 === void 0 && (t3 = {}), this.options = v({}, X, {}, e3), this.gs = t3, this.names = new Map(n2), this.server = !!e3.isServer, !this.server && I && J && (J = false, function(e4) {
      for (var t4 = document.querySelectorAll(L), n3 = 0, r2 = t4.length; n3 < r2; n3++) {
        var o2 = t4[n3];
        o2 && o2.getAttribute(A) !== "active" && (Y(e4, o2), o2.parentNode && o2.parentNode.removeChild(o2));
      }
    }(this));
  }
  e2.registerId = function(e3) {
    return B(e3);
  };
  var t2 = e2.prototype;
  return t2.reconstructWithOptions = function(t3, n2) {
    return n2 === void 0 && (n2 = true), new e2(v({}, this.options, {}, t3), this.gs, n2 && this.names || void 0);
  }, t2.allocateGSInstance = function(e3) {
    return this.gs[e3] = (this.gs[e3] || 0) + 1;
  }, t2.getTag = function() {
    return this.tag || (this.tag = (n2 = (t3 = this.options).isServer, r2 = t3.useCSSOMInjection, o2 = t3.target, e3 = n2 ? new U(o2) : r2 ? new $(o2) : new W(o2), new T(e3)));
    var e3, t3, n2, r2, o2;
  }, t2.hasNameForId = function(e3, t3) {
    return this.names.has(e3) && this.names.get(e3).has(t3);
  }, t2.registerName = function(e3, t3) {
    if (B(e3), this.names.has(e3))
      this.names.get(e3).add(t3);
    else {
      var n2 = new Set();
      n2.add(t3), this.names.set(e3, n2);
    }
  }, t2.insertRules = function(e3, t3, n2) {
    this.registerName(e3, t3), this.getTag().insertRules(B(e3), n2);
  }, t2.clearNames = function(e3) {
    this.names.has(e3) && this.names.get(e3).clear();
  }, t2.clearRules = function(e3) {
    this.getTag().clearGroup(B(e3)), this.clearNames(e3);
  }, t2.clearTag = function() {
    this.tag = void 0;
  }, t2.toString = function() {
    return function(e3) {
      for (var t3 = e3.getTag(), n2 = t3.length, r2 = "", o2 = 0; o2 < n2; o2++) {
        var s2 = M(o2);
        if (s2 !== void 0) {
          var i2 = e3.names.get(s2), a2 = t3.getGroup(o2);
          if (i2 && a2 && i2.size) {
            var c2 = A + ".g" + o2 + '[id="' + s2 + '"]', u2 = "";
            i2 !== void 0 && i2.forEach(function(e4) {
              e4.length > 0 && (u2 += e4 + ",");
            }), r2 += "" + a2 + c2 + '{content:"' + u2 + '"}/*!sc*/\n';
          }
        }
      }
      return r2;
    }(this);
  }, e2;
}();
var K = /(a)(d)/gi;
var Q = function(e2) {
  return String.fromCharCode(e2 + (e2 > 25 ? 39 : 97));
};
function ee(e2) {
  var t2, n2 = "";
  for (t2 = Math.abs(e2); t2 > 52; t2 = t2 / 52 | 0)
    n2 = Q(t2 % 52) + n2;
  return (Q(t2 % 52) + n2).replace(K, "$1-$2");
}
var te = function(e2, t2) {
  for (var n2 = t2.length; n2; )
    e2 = 33 * e2 ^ t2.charCodeAt(--n2);
  return e2;
};
var ne = function(e2) {
  return te(5381, e2);
};
function re(e2) {
  for (var t2 = 0; t2 < e2.length; t2 += 1) {
    var n2 = e2[t2];
    if (b(n2) && !N(n2))
      return false;
  }
  return true;
}
var oe = ne("5.3.1");
var se = function() {
  function e2(e3, t2, n2) {
    this.rules = e3, this.staticRulesId = "", this.isStatic = false, this.componentId = t2, this.baseHash = te(oe, t2), this.baseStyle = n2, Z.registerId(t2);
  }
  return e2.prototype.generateAndInjectStyles = function(e3, t2, n2) {
    var r2 = this.componentId, o2 = [];
    if (this.baseStyle && o2.push(this.baseStyle.generateAndInjectStyles(e3, t2, n2)), this.isStatic && !n2.hash)
      if (this.staticRulesId && t2.hasNameForId(r2, this.staticRulesId))
        o2.push(this.staticRulesId);
      else {
        var s2 = Ne(this.rules, e3, t2, n2).join(""), i2 = ee(te(this.baseHash, s2) >>> 0);
        if (!t2.hasNameForId(r2, i2)) {
          var a2 = n2(s2, "." + i2, void 0, r2);
          t2.insertRules(r2, i2, a2);
        }
        o2.push(i2), this.staticRulesId = i2;
      }
    else {
      for (var c2 = this.rules.length, u2 = te(this.baseHash, n2.hash), l2 = "", d2 = 0; d2 < c2; d2++) {
        var h2 = this.rules[d2];
        if (typeof h2 == "string")
          l2 += h2, u2 = te(u2, h2 + d2);
        else if (h2) {
          var p = Ne(h2, e3, t2, n2), f = Array.isArray(p) ? p.join("") : p;
          u2 = te(u2, f + d2), l2 += f;
        }
      }
      if (l2) {
        var m = ee(u2 >>> 0);
        if (!t2.hasNameForId(r2, m)) {
          var y2 = n2(l2, "." + m, void 0, r2);
          t2.insertRules(r2, m, y2);
        }
        o2.push(m);
      }
    }
    return o2.join(" ");
  }, e2;
}();
var ie = /^\s*\/\/.*$/gm;
var ae = [":", "[", ".", "#"];
function ce(e2) {
  var t2, n2, r2, o2, s2 = e2 === void 0 ? E : e2, i2 = s2.options, a2 = i2 === void 0 ? E : i2, c2 = s2.plugins, u2 = c2 === void 0 ? w : c2, l2 = new stylis_browser_esm_default(a2), d2 = [], h2 = function(e3) {
    function t3(t4) {
      if (t4)
        try {
          e3(t4 + "}");
        } catch (e4) {
        }
    }
    return function(n3, r3, o3, s3, i3, a3, c3, u3, l3, d3) {
      switch (n3) {
        case 1:
          if (l3 === 0 && r3.charCodeAt(0) === 64)
            return e3(r3 + ";"), "";
          break;
        case 2:
          if (u3 === 0)
            return r3 + "/*|*/";
          break;
        case 3:
          switch (u3) {
            case 102:
            case 112:
              return e3(o3[0] + r3), "";
            default:
              return r3 + (d3 === 0 ? "/*|*/" : "");
          }
        case -2:
          r3.split("/*|*/}").forEach(t3);
      }
    };
  }(function(e3) {
    d2.push(e3);
  }), f = function(e3, r3, s3) {
    return r3 === 0 && ae.indexOf(s3[n2.length]) !== -1 || s3.match(o2) ? e3 : "." + t2;
  };
  function m(e3, s3, i3, a3) {
    a3 === void 0 && (a3 = "&");
    var c3 = e3.replace(ie, ""), u3 = s3 && i3 ? i3 + " " + s3 + " { " + c3 + " }" : c3;
    return t2 = a3, n2 = s3, r2 = new RegExp("\\" + n2 + "\\b", "g"), o2 = new RegExp("(\\" + n2 + "\\b){2,}"), l2(i3 || !s3 ? "" : s3, u3);
  }
  return l2.use([].concat(u2, [function(e3, t3, o3) {
    e3 === 2 && o3.length && o3[0].lastIndexOf(n2) > 0 && (o3[0] = o3[0].replace(r2, f));
  }, h2, function(e3) {
    if (e3 === -2) {
      var t3 = d2;
      return d2 = [], t3;
    }
  }])), m.hash = u2.length ? u2.reduce(function(e3, t3) {
    return t3.name || j(15), te(e3, t3.name);
  }, 5381).toString() : "", m;
}
var ue = r.createContext();
var le = ue.Consumer;
var de = r.createContext();
var he = (de.Consumer, new Z());
var pe = ce();
function fe() {
  return s(ue) || he;
}
function me() {
  return s(de) || pe;
}
function ye(e2) {
  var t2 = o(e2.stylisPlugins), n2 = t2[0], s2 = t2[1], c2 = fe(), u2 = i(function() {
    var t3 = c2;
    return e2.sheet ? t3 = e2.sheet : e2.target && (t3 = t3.reconstructWithOptions({ target: e2.target }, false)), e2.disableCSSOMInjection && (t3 = t3.reconstructWithOptions({ useCSSOMInjection: false })), t3;
  }, [e2.disableCSSOMInjection, e2.sheet, e2.target]), l2 = i(function() {
    return ce({ options: { prefix: !e2.disableVendorPrefixes }, plugins: n2 });
  }, [e2.disableVendorPrefixes, n2]);
  return a(function() {
    (0, import_shallowequal.default)(n2, e2.stylisPlugins) || s2(e2.stylisPlugins);
  }, [e2.stylisPlugins]), r.createElement(ue.Provider, { value: u2 }, r.createElement(de.Provider, { value: l2 }, true ? r.Children.only(e2.children) : e2.children));
}
var ve = function() {
  function e2(e3, t2) {
    var n2 = this;
    this.inject = function(e4, t3) {
      t3 === void 0 && (t3 = pe);
      var r2 = n2.name + t3.hash;
      e4.hasNameForId(n2.id, r2) || e4.insertRules(n2.id, r2, t3(n2.rules, r2, "@keyframes"));
    }, this.toString = function() {
      return j(12, String(n2.name));
    }, this.name = e3, this.id = "sc-keyframes-" + e3, this.rules = t2;
  }
  return e2.prototype.getName = function(e3) {
    return e3 === void 0 && (e3 = pe), this.name + e3.hash;
  }, e2;
}();
var ge = /([A-Z])/;
var Se = /([A-Z])/g;
var we = /^ms-/;
var Ee = function(e2) {
  return "-" + e2.toLowerCase();
};
function be(e2) {
  return ge.test(e2) ? e2.replace(Se, Ee).replace(we, "-ms-") : e2;
}
var _e = function(e2) {
  return e2 == null || e2 === false || e2 === "";
};
function Ne(e2, n2, r2, o2) {
  if (Array.isArray(e2)) {
    for (var s2, i2 = [], a2 = 0, c2 = e2.length; a2 < c2; a2 += 1)
      (s2 = Ne(e2[a2], n2, r2, o2)) !== "" && (Array.isArray(s2) ? i2.push.apply(i2, s2) : i2.push(s2));
    return i2;
  }
  if (_e(e2))
    return "";
  if (N(e2))
    return "." + e2.styledComponentId;
  if (b(e2)) {
    if (typeof (l2 = e2) != "function" || l2.prototype && l2.prototype.isReactComponent || !n2)
      return e2;
    var u2 = e2(n2);
    return (0, import_react_is.isElement)(u2) && console.warn(_(e2) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Ne(u2, n2, r2, o2);
  }
  var l2;
  return e2 instanceof ve ? r2 ? (e2.inject(r2, o2), e2.getName(o2)) : e2 : S(e2) ? function e3(t2, n3) {
    var r3, o3, s3 = [];
    for (var i3 in t2)
      t2.hasOwnProperty(i3) && !_e(t2[i3]) && (Array.isArray(t2[i3]) && t2[i3].isCss || b(t2[i3]) ? s3.push(be(i3) + ":", t2[i3], ";") : S(t2[i3]) ? s3.push.apply(s3, e3(t2[i3], i3)) : s3.push(be(i3) + ": " + (r3 = i3, (o3 = t2[i3]) == null || typeof o3 == "boolean" || o3 === "" ? "" : typeof o3 != "number" || o3 === 0 || r3 in unitless_browser_esm_default ? String(o3).trim() : o3 + "px") + ";"));
    return n3 ? [n3 + " {"].concat(s3, ["}"]) : s3;
  }(e2) : e2.toString();
}
var Ae = function(e2) {
  return Array.isArray(e2) && (e2.isCss = true), e2;
};
function Ce(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
    n2[r2 - 1] = arguments[r2];
  return b(e2) || S(e2) ? Ae(Ne(g(w, [e2].concat(n2)))) : n2.length === 0 && e2.length === 1 && typeof e2[0] == "string" ? e2 : Ae(Ne(g(e2, n2)));
}
var Ie = /invalid hook call/i;
var Pe = new Set();
var Oe = function(e2, t2) {
  if (true) {
    var n2 = "The component " + e2 + (t2 ? ' with the id of "' + t2 + '"' : "") + " has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.", r2 = console.error;
    try {
      var o2 = true;
      console.error = function(e3) {
        if (Ie.test(e3))
          o2 = false, Pe.delete(n2);
        else {
          for (var t3 = arguments.length, s2 = new Array(t3 > 1 ? t3 - 1 : 0), i2 = 1; i2 < t3; i2++)
            s2[i2 - 1] = arguments[i2];
          r2.apply(void 0, [e3].concat(s2));
        }
      }, c(), o2 && !Pe.has(n2) && (console.warn(n2), Pe.add(n2));
    } catch (e3) {
      Ie.test(e3.message) && Pe.delete(n2);
    } finally {
      console.error = r2;
    }
  }
};
var Re = function(e2, t2, n2) {
  return n2 === void 0 && (n2 = E), e2.theme !== n2.theme && e2.theme || t2 || n2.theme;
};
var De = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
var je = /(^-|-$)/g;
function Te(e2) {
  return e2.replace(De, "-").replace(je, "");
}
var ke = function(e2) {
  return ee(ne(e2) >>> 0);
};
function xe(e2) {
  return typeof e2 == "string" && e2.charAt(0) === e2.charAt(0).toLowerCase();
}
var Ve = function(e2) {
  return typeof e2 == "function" || typeof e2 == "object" && e2 !== null && !Array.isArray(e2);
};
var Be = function(e2) {
  return e2 !== "__proto__" && e2 !== "constructor" && e2 !== "prototype";
};
function Me(e2, t2, n2) {
  var r2 = e2[n2];
  Ve(t2) && Ve(r2) ? ze(r2, t2) : e2[n2] = t2;
}
function ze(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
    n2[r2 - 1] = arguments[r2];
  for (var o2 = 0, s2 = n2; o2 < s2.length; o2++) {
    var i2 = s2[o2];
    if (Ve(i2))
      for (var a2 in i2)
        Be(a2) && Me(e2, i2[a2], a2);
  }
  return e2;
}
var Le = r.createContext();
var Ge = Le.Consumer;
function Fe(e2) {
  var t2 = s(Le), n2 = i(function() {
    return function(e3, t3) {
      if (!e3)
        return j(14);
      if (b(e3)) {
        var n3 = e3(t3);
        return n3 !== null && !Array.isArray(n3) && typeof n3 == "object" ? n3 : j(7);
      }
      return Array.isArray(e3) || typeof e3 != "object" ? j(8) : t3 ? v({}, t3, {}, e3) : e3;
    }(e2.theme, t2);
  }, [e2.theme, t2]);
  return e2.children ? r.createElement(Le.Provider, { value: n2 }, e2.children) : null;
}
var Ye = {};
function qe(e2, t2, n2) {
  var o2 = N(e2), i2 = !xe(e2), a2 = t2.attrs, c2 = a2 === void 0 ? w : a2, d2 = t2.componentId, h2 = d2 === void 0 ? function(e3, t3) {
    var n3 = typeof e3 != "string" ? "sc" : Te(e3);
    Ye[n3] = (Ye[n3] || 0) + 1;
    var r2 = n3 + "-" + ke("5.3.1" + n3 + Ye[n3]);
    return t3 ? t3 + "-" + r2 : r2;
  }(t2.displayName, t2.parentComponentId) : d2, p = t2.displayName, f = p === void 0 ? function(e3) {
    return xe(e3) ? "styled." + e3 : "Styled(" + _(e3) + ")";
  }(e2) : p, g2 = t2.displayName && t2.componentId ? Te(t2.displayName) + "-" + t2.componentId : t2.componentId || h2, S2 = o2 && e2.attrs ? Array.prototype.concat(e2.attrs, c2).filter(Boolean) : c2, A2 = t2.shouldForwardProp;
  o2 && e2.shouldForwardProp && (A2 = t2.shouldForwardProp ? function(n3, r2, o3) {
    return e2.shouldForwardProp(n3, r2, o3) && t2.shouldForwardProp(n3, r2, o3);
  } : e2.shouldForwardProp);
  var C2, I2 = new se(n2, g2, o2 ? e2.componentStyle : void 0), P2 = I2.isStatic && c2.length === 0, O2 = function(e3, t3) {
    return function(e4, t4, n3, r2) {
      var o3 = e4.attrs, i3 = e4.componentStyle, a3 = e4.defaultProps, c3 = e4.foldedComponentIds, d3 = e4.shouldForwardProp, h3 = e4.styledComponentId, p2 = e4.target;
      l(h3);
      var f2 = function(e5, t5, n4) {
        e5 === void 0 && (e5 = E);
        var r3 = v({}, t5, { theme: e5 }), o4 = {};
        return n4.forEach(function(e6) {
          var t6, n5, s2, i4 = e6;
          for (t6 in b(i4) && (i4 = i4(r3)), i4)
            r3[t6] = o4[t6] = t6 === "className" ? (n5 = o4[t6], s2 = i4[t6], n5 && s2 ? n5 + " " + s2 : n5 || s2) : i4[t6];
        }), [r3, o4];
      }(Re(t4, s(Le), a3) || E, t4, o3), y2 = f2[0], g3 = f2[1], S3 = function(e5, t5, n4, r3) {
        var o4 = fe(), s2 = me(), i4 = t5 ? e5.generateAndInjectStyles(E, o4, s2) : e5.generateAndInjectStyles(n4, o4, s2);
        return l(i4), !t5 && r3 && r3(i4), i4;
      }(i3, r2, y2, true ? e4.warnTooManyClasses : void 0), w2 = n3, _3 = g3.$as || t4.$as || g3.as || t4.as || p2, N2 = xe(_3), A3 = g3 !== t4 ? v({}, t4, {}, g3) : t4, C3 = {};
      for (var I3 in A3)
        I3[0] !== "$" && I3 !== "as" && (I3 === "forwardedAs" ? C3.as = A3[I3] : (d3 ? d3(I3, is_prop_valid_browser_esm_default, _3) : !N2 || is_prop_valid_browser_esm_default(I3)) && (C3[I3] = A3[I3]));
      return t4.style && g3.style !== t4.style && (C3.style = v({}, t4.style, {}, g3.style)), C3.className = Array.prototype.concat(c3, h3, S3 !== h3 ? S3 : null, t4.className, g3.className).filter(Boolean).join(" "), C3.ref = w2, u(_3, C3);
    }(C2, e3, t3, P2);
  };
  return O2.displayName = f, (C2 = r.forwardRef(O2)).attrs = S2, C2.componentStyle = I2, C2.displayName = f, C2.shouldForwardProp = A2, C2.foldedComponentIds = o2 ? Array.prototype.concat(e2.foldedComponentIds, e2.styledComponentId) : w, C2.styledComponentId = g2, C2.target = o2 ? e2.target : e2, C2.withComponent = function(e3) {
    var r2 = t2.componentId, o3 = function(e4, t3) {
      if (e4 == null)
        return {};
      var n3, r3, o4 = {}, s3 = Object.keys(e4);
      for (r3 = 0; r3 < s3.length; r3++)
        n3 = s3[r3], t3.indexOf(n3) >= 0 || (o4[n3] = e4[n3]);
      return o4;
    }(t2, ["componentId"]), s2 = r2 && r2 + "-" + (xe(e3) ? e3 : Te(_(e3)));
    return qe(e3, v({}, o3, { attrs: S2, componentId: s2 }), n2);
  }, Object.defineProperty(C2, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(t3) {
    this._foldedDefaultProps = o2 ? ze({}, e2.defaultProps, t3) : t3;
  } }), Oe(f, g2), C2.warnTooManyClasses = function(e3, t3) {
    var n3 = {}, r2 = false;
    return function(o3) {
      if (!r2 && (n3[o3] = true, Object.keys(n3).length >= 200)) {
        var s2 = t3 ? ' with the id of "' + t3 + '"' : "";
        console.warn("Over 200 classes were generated for component " + e3 + s2 + ".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"), r2 = true, n3 = {};
      }
    };
  }(f, g2), C2.toString = function() {
    return "." + C2.styledComponentId;
  }, i2 && (0, import_hoist_non_react_statics2.default)(C2, e2, { attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true, withComponent: true }), C2;
}
var He = function(e2) {
  return function e3(t2, r2, o2) {
    if (o2 === void 0 && (o2 = E), !(0, import_react_is.isValidElementType)(r2))
      return j(1, String(r2));
    var s2 = function() {
      return t2(r2, o2, Ce.apply(void 0, arguments));
    };
    return s2.withConfig = function(n2) {
      return e3(t2, r2, v({}, o2, {}, n2));
    }, s2.attrs = function(n2) {
      return e3(t2, r2, v({}, o2, { attrs: Array.prototype.concat(o2.attrs, n2).filter(Boolean) }));
    }, s2;
  }(qe, e2);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e2) {
  He[e2] = He(e2);
});
var $e = function() {
  function e2(e3, t3) {
    this.rules = e3, this.componentId = t3, this.isStatic = re(e3), Z.registerId(this.componentId + 1);
  }
  var t2 = e2.prototype;
  return t2.createStyles = function(e3, t3, n2, r2) {
    var o2 = r2(Ne(this.rules, t3, n2, r2).join(""), ""), s2 = this.componentId + e3;
    n2.insertRules(s2, s2, o2);
  }, t2.removeStyles = function(e3, t3) {
    t3.clearRules(this.componentId + e3);
  }, t2.renderStyles = function(e3, t3, n2, r2) {
    e3 > 2 && Z.registerId(this.componentId + e3), this.removeStyles(e3, n2), this.createStyles(e3, t3, n2, r2);
  }, e2;
}();
function We(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), o2 = 1; o2 < t2; o2++)
    n2[o2 - 1] = arguments[o2];
  var i2 = Ce.apply(void 0, [e2].concat(n2)), a2 = "sc-global-" + ke(JSON.stringify(i2)), u2 = new $e(i2, a2);
  function l2(e3) {
    var t3 = fe(), n3 = me(), o3 = s(Le), l3 = c(t3.allocateGSInstance(a2)).current;
    return r.Children.count(e3.children) && console.warn("The global style component " + a2 + " was given child JSX. createGlobalStyle does not render children."), i2.some(function(e4) {
      return typeof e4 == "string" && e4.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), t3.server && h2(l3, e3, t3, o3, n3), d(function() {
      if (!t3.server)
        return h2(l3, e3, t3, o3, n3), function() {
          return u2.removeStyles(l3, t3);
        };
    }, [l3, e3, t3, o3, n3]), null;
  }
  function h2(e3, t3, n3, r2, o3) {
    if (u2.isStatic)
      u2.renderStyles(e3, O, n3, o3);
    else {
      var s2 = v({}, t3, { theme: Re(t3, r2, l2.defaultProps) });
      u2.renderStyles(e3, s2, n3, o3);
    }
  }
  return Oe(a2), r.memo(l2);
}
function Ue(e2) {
  typeof navigator != "undefined" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
    n2[r2 - 1] = arguments[r2];
  var o2 = Ce.apply(void 0, [e2].concat(n2)).join(""), s2 = ke(o2);
  return new ve(s2, o2);
}
var Je = function() {
  function e2() {
    var e3 = this;
    this._emitSheetCSS = function() {
      var t3 = e3.instance.toString();
      if (!t3)
        return "";
      var n2 = q();
      return "<style " + [n2 && 'nonce="' + n2 + '"', A + '="true"', 'data-styled-version="5.3.1"'].filter(Boolean).join(" ") + ">" + t3 + "</style>";
    }, this.getStyleTags = function() {
      return e3.sealed ? j(2) : e3._emitSheetCSS();
    }, this.getStyleElement = function() {
      var t3;
      if (e3.sealed)
        return j(2);
      var n2 = ((t3 = {})[A] = "", t3["data-styled-version"] = "5.3.1", t3.dangerouslySetInnerHTML = { __html: e3.instance.toString() }, t3), o2 = q();
      return o2 && (n2.nonce = o2), [r.createElement("style", v({}, n2, { key: "sc-0-0" }))];
    }, this.seal = function() {
      e3.sealed = true;
    }, this.instance = new Z({ isServer: true }), this.sealed = false;
  }
  var t2 = e2.prototype;
  return t2.collectStyles = function(e3) {
    return this.sealed ? j(2) : r.createElement(ye, { sheet: this.instance }, e3);
  }, t2.interleaveWithNodeStream = function(e3) {
    return j(3);
  }, e2;
}();
var Xe = function(e2) {
  var t2 = r.forwardRef(function(t3, n2) {
    var o2 = s(Le), i2 = e2.defaultProps, a2 = Re(t3, o2, i2);
    return a2 === void 0 && console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "' + _(e2) + '"'), r.createElement(e2, v({}, t3, { theme: a2, ref: n2 }));
  });
  return (0, import_hoist_non_react_statics2.default)(t2, e2), t2.displayName = "WithTheme(" + _(e2) + ")", t2;
};
var Ze = function() {
  return s(Le);
};
var Ke = { StyleSheet: Z, masterSheet: he };
typeof navigator != "undefined" && navigator.product === "ReactNative" && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), typeof window != "undefined" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."), window["__styled-components-init__"] += 1);
var styled_components_browser_esm_default = He;

// node_modules/@ringcentral/juno/es6/foundation/styled-components.js
var _a = styled_components_browser_esm_exports;
var styled = _a.default;
var css2 = _a.css;
var keyframes = _a.keyframes;
var createGlobalStyle = _a.createGlobalStyle;
var withTheme = _a.withTheme;
var ThemeProvider2 = _a.ThemeProvider;
var ThemeConsumer = _a.ThemeConsumer;
var RcUseTheme = function() {
  return useTheme2();
};
var styled_components_default = styled;

// node_modules/@ringcentral/juno/es6/foundation/config.js
var JUNO_WARNING_IGNORE_KEY = "__JUNO_WARNING_IGNORE__";
var RcConfig = function() {
  function RcConfig2() {
    var _a2;
    this._WARNING_IGNORE = false;
    this._WARNING_FUNCTION = function(message, options) {
      console[(options === null || options === void 0 ? void 0 : options.level) || "warn"](message);
    };
    this._WARNING_IGNORE = ((_a2 = window === null || window === void 0 ? void 0 : window.localStorage) === null || _a2 === void 0 ? void 0 : _a2.getItem(JUNO_WARNING_IGNORE_KEY)) === "true";
    window.__JUNO__ = this;
  }
  Object.defineProperty(RcConfig2.prototype, "WARNING_IGNORE", {
    get: function() {
      return this._WARNING_IGNORE;
    },
    set: function(value) {
      var _a2;
      if (value) {
        console.log("---------------- [Juno] ----------------");
        console.log("Don't recommended you close it, we should avoid use any deprecated props or methods.");
        console.log("---------------- [Juno] ----------------");
      }
      this._WARNING_IGNORE = !!value;
      (_a2 = window === null || window === void 0 ? void 0 : window.localStorage) === null || _a2 === void 0 ? void 0 : _a2.setItem(JUNO_WARNING_IGNORE_KEY, "" + this._WARNING_IGNORE);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RcConfig2.prototype, "WARNING_FUNCTION", {
    get: function() {
      return this._WARNING_FUNCTION;
    },
    set: function(func) {
      if (typeof func === "function") {
        this._WARNING_FUNCTION = func;
      } else {
        console.warn("[Juno] config warningFunction is not a function.");
      }
    },
    enumerable: true,
    configurable: true
  });
  return RcConfig2;
}();
var rcConfiguration = new RcConfig();

// node_modules/@ringcentral/juno/es6/foundation/contexts/PortalWindowContext.js
import { createContext, useContext } from "react";
var RcPortalWindowContext = createContext({
  document
});
var useRcPortalWindowContext = function() {
  return useContext(RcPortalWindowContext);
};

// node_modules/@material-ui/core/esm/utils/createChainedFunction.js
function createChainedFunction() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  return funcs.reduce(function(acc, func) {
    if (func == null) {
      return acc;
    }
    if (true) {
      if (typeof func !== "function") {
        console.error("Material-UI: Invalid Argument Type, must only provide functions, undefined, or null.");
      }
    }
    return function chainedFunction() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      acc.apply(this, args);
      func.apply(this, args);
    };
  }, function() {
  });
}

// node_modules/@material-ui/core/esm/utils/useControlled.js
import {
  useCallback as useCallback4,
  useEffect as useEffect5,
  useRef as useRef4,
  useState as useState4
} from "react";
function useControlled(_ref) {
  var controlled = _ref.controlled, defaultProp = _ref.default, name = _ref.name, _ref$state = _ref.state, state = _ref$state === void 0 ? "value" : _ref$state;
  var _React$useRef = useRef4(controlled !== void 0), isControlled = _React$useRef.current;
  var _React$useState = useState4(defaultProp), valueState = _React$useState[0], setValue = _React$useState[1];
  var value = isControlled ? controlled : valueState;
  if (true) {
    useEffect5(function() {
      if (isControlled !== (controlled !== void 0)) {
        console.error(["Material-UI: A component is changing the ".concat(isControlled ? "" : "un", "controlled ").concat(state, " state of ").concat(name, " to be ").concat(isControlled ? "un" : "", "controlled."), "Elements should not switch from uncontrolled to controlled (or vice versa).", "Decide between using a controlled or uncontrolled ".concat(name, " ") + "element for the lifetime of the component.", "The nature of the state is determined during the first render, it's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join("\n"));
      }
    }, [controlled]);
    var _React$useRef2 = useRef4(defaultProp), defaultValue = _React$useRef2.current;
    useEffect5(function() {
      if (!isControlled && defaultValue !== defaultProp) {
        console.error(["Material-UI: A component is changing the default ".concat(state, " state of an uncontrolled ").concat(name, " after being initialized. ") + "To suppress this warning opt to use a controlled ".concat(name, ".")].join("\n"));
      }
    }, [JSON.stringify(defaultProp)]);
  }
  var setValueIfUncontrolled = useCallback4(function(newValue) {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}

// node_modules/@material-ui/core/esm/utils/unstable_useId.js
import {
  useEffect as useEffect6,
  useState as useState5
} from "react";
function useId(idOverride) {
  var _React$useState = useState5(idOverride), defaultId = _React$useState[0], setDefaultId = _React$useState[1];
  var id = idOverride || defaultId;
  useEffect6(function() {
    if (defaultId == null) {
      setDefaultId("mui-".concat(Math.round(Math.random() * 1e5)));
    }
  }, [defaultId]);
  return id;
}

// node_modules/@ringcentral/juno/es6/foundation/hooks/useEventCallback/useEventCallback.js
var useEventCallback2 = function(func) {
  return useEventCallback(func);
};

// node_modules/@ringcentral/juno/es6/foundation/hooks/useChange/useChange.js
import { useRef as useRef6 } from "react";

// node_modules/@ringcentral/juno/es6/foundation/hooks/usePrevious/usePrevious.js
import { useEffect as useEffect7, useRef as useRef5 } from "react";
function usePrevious(cb, isDefault) {
  var ref = useRef5(isDefault ? cb() : void 0);
  useEffect7(function() {
    ref.current = cb();
  });
  return ref.current;
}

// node_modules/@ringcentral/juno/es6/foundation/hooks/useChange/useChange.js
var useChange = function(cb, listenCb) {
  var countRef = useRef6(0);
  var valueRef = useRef6();
  var prev = usePrevious(listenCb);
  var curr = listenCb();
  if (countRef.current === 0 || prev !== curr) {
    countRef.current = 1;
    valueRef.current = cb(prev, curr);
  }
  return valueRef.current;
};

// node_modules/@ringcentral/juno/es6/foundation/hooks/useEventListener/useEventListener.js
import { useEffect as useEffect8, useRef as useRef7 } from "react";

// node_modules/@ringcentral/juno/es6/foundation/utils/isRef.js
var isRef = function(obj) {
  return obj && "current" in obj;
};

// node_modules/@ringcentral/juno/es6/foundation/hooks/useEventListener/useEventListener.js
var __read = function(o2, n2) {
  var m = typeof Symbol === "function" && o2[Symbol.iterator];
  if (!m)
    return o2;
  var i2 = m.call(o2), r2, ar = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done)
      ar.push(r2.value);
  } catch (error3) {
    e2 = { error: error3 };
  } finally {
    try {
      if (r2 && !r2.done && (m = i2["return"]))
        m.call(i2);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
};
function useEventListener(target) {
  var o2 = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    o2[_i - 1] = arguments[_i];
  }
  var _a2 = __read(o2, 3), key = _a2[0], cb = _a2[1], options = _a2[2];
  var listener = useEventCallback2(cb);
  var cancelRef = useRef7(function() {
  });
  var bindRef = useRef7(function() {
  });
  var currentRefElm = isRef(target) && target.current;
  useEffect8(function() {
    if (!target)
      return;
    var elm = isRef(target) ? target.current : target;
    if (!elm) {
      return cancelRef.current;
    }
    bindRef.current = function() {
      return elm.addEventListener(key, listener, options);
    };
    cancelRef.current = function() {
      return elm.removeEventListener(key, listener, options);
    };
    bindRef.current();
    return cancelRef.current;
  }, [target, currentRefElm]);
  return {
    listen: function() {
      return bindRef.current();
    },
    remove: function() {
      return cancelRef.current();
    }
  };
}

// node_modules/@ringcentral/juno/es6/foundation/hooks/useForceUpdate/useForceUpdate.js
import { useState as useState6 } from "react";
var __read2 = function(o2, n2) {
  var m = typeof Symbol === "function" && o2[Symbol.iterator];
  if (!m)
    return o2;
  var i2 = m.call(o2), r2, ar = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done)
      ar.push(r2.value);
  } catch (error3) {
    e2 = { error: error3 };
  } finally {
    try {
      if (r2 && !r2.done && (m = i2["return"]))
        m.call(i2);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
};
function useForceUpdate() {
  var _a2 = __read2(useState6(Object.create(null)), 2), dispatch = _a2[1];
  var memoizedDispatch = useEventCallback2(function() {
    dispatch(Object.create(null));
  });
  return memoizedDispatch;
}

// node_modules/@material-ui/core/esm/transitions/utils.js
var reflow = function reflow2(node) {
  return node.scrollTop;
};
function getTransitionProps(props, options) {
  var timeout2 = props.timeout, _props$style = props.style, style = _props$style === void 0 ? {} : _props$style;
  return {
    duration: style.transitionDuration || typeof timeout2 === "number" ? timeout2 : timeout2[options.mode] || 0,
    delay: style.transitionDelay
  };
}

// node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js
var import_prop_types13 = __toModule(require_prop_types());
import {
  createElement as createElement5,
  forwardRef as forwardRef4
} from "react";
var import_utils13 = __toModule(require_utils());
var SIZE = 44;
var styles6 = function styles7(theme) {
  return {
    root: {
      display: "inline-block"
    },
    static: {
      transition: theme.transitions.create("transform")
    },
    indeterminate: {
      animation: "$circular-rotate 1.4s linear infinite"
    },
    determinate: {
      transition: theme.transitions.create("transform")
    },
    colorPrimary: {
      color: theme.palette.primary.main
    },
    colorSecondary: {
      color: theme.palette.secondary.main
    },
    svg: {
      display: "block"
    },
    circle: {
      stroke: "currentColor"
    },
    circleStatic: {
      transition: theme.transitions.create("stroke-dashoffset")
    },
    circleIndeterminate: {
      animation: "$circular-dash 1.4s ease-in-out infinite",
      strokeDasharray: "80px, 200px",
      strokeDashoffset: "0px"
    },
    circleDeterminate: {
      transition: theme.transitions.create("stroke-dashoffset")
    },
    "@keyframes circular-rotate": {
      "0%": {
        transformOrigin: "50% 50%"
      },
      "100%": {
        transform: "rotate(360deg)"
      }
    },
    "@keyframes circular-dash": {
      "0%": {
        strokeDasharray: "1px, 200px",
        strokeDashoffset: "0px"
      },
      "50%": {
        strokeDasharray: "100px, 200px",
        strokeDashoffset: "-15px"
      },
      "100%": {
        strokeDasharray: "100px, 200px",
        strokeDashoffset: "-125px"
      }
    },
    circleDisableShrink: {
      animation: "none"
    }
  };
};
var CircularProgress = /* @__PURE__ */ forwardRef4(function CircularProgress2(props, ref) {
  var classes = props.classes, className = props.className, _props$color = props.color, color = _props$color === void 0 ? "primary" : _props$color, _props$disableShrink = props.disableShrink, disableShrink = _props$disableShrink === void 0 ? false : _props$disableShrink, _props$size = props.size, size = _props$size === void 0 ? 40 : _props$size, style = props.style, _props$thickness = props.thickness, thickness = _props$thickness === void 0 ? 3.6 : _props$thickness, _props$value = props.value, value = _props$value === void 0 ? 0 : _props$value, _props$variant = props.variant, variant = _props$variant === void 0 ? "indeterminate" : _props$variant, other = _objectWithoutProperties(props, ["classes", "className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"]);
  var circleStyle = {};
  var rootStyle = {};
  var rootProps = {};
  if (variant === "determinate" || variant === "static") {
    var circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
    circleStyle.strokeDasharray = circumference.toFixed(3);
    rootProps["aria-valuenow"] = Math.round(value);
    circleStyle.strokeDashoffset = "".concat(((100 - value) / 100 * circumference).toFixed(3), "px");
    rootStyle.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ createElement5("div", _extends({
    className: clsx_m_default(classes.root, className, color !== "inherit" && classes["color".concat(capitalize(color))], {
      "determinate": classes.determinate,
      "indeterminate": classes.indeterminate,
      "static": classes.static
    }[variant]),
    style: _extends({
      width: size,
      height: size
    }, rootStyle, style),
    ref,
    role: "progressbar"
  }, rootProps, other), /* @__PURE__ */ createElement5("svg", {
    className: classes.svg,
    viewBox: "".concat(SIZE / 2, " ").concat(SIZE / 2, " ").concat(SIZE, " ").concat(SIZE)
  }, /* @__PURE__ */ createElement5("circle", {
    className: clsx_m_default(classes.circle, disableShrink && classes.circleDisableShrink, {
      "determinate": classes.circleDeterminate,
      "indeterminate": classes.circleIndeterminate,
      "static": classes.circleStatic
    }[variant]),
    style: circleStyle,
    cx: SIZE,
    cy: SIZE,
    r: (SIZE - thickness) / 2,
    fill: "none",
    strokeWidth: thickness
  })));
});
true ? CircularProgress.propTypes = {
  classes: import_prop_types13.default.object,
  className: import_prop_types13.default.string,
  color: import_prop_types13.default.oneOf(["inherit", "primary", "secondary"]),
  disableShrink: (0, import_utils13.chainPropTypes)(import_prop_types13.default.bool, function(props) {
    if (props.disableShrink && props.variant && props.variant !== "indeterminate") {
      return new Error("Material-UI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.");
    }
    return null;
  }),
  size: import_prop_types13.default.oneOfType([import_prop_types13.default.number, import_prop_types13.default.string]),
  style: import_prop_types13.default.object,
  thickness: import_prop_types13.default.number,
  value: import_prop_types13.default.number,
  variant: (0, import_utils13.chainPropTypes)(import_prop_types13.default.oneOf(["determinate", "indeterminate", "static"]), function(props) {
    var variant = props.variant;
    if (variant === "static") {
      throw new Error('Material-UI: `variant="static"` was deprecated. Use `variant="determinate"` instead.');
    }
    return null;
  })
} : void 0;
var CircularProgress_default = withStyles_default2(styles6, {
  name: "MuiCircularProgress",
  flip: false
})(CircularProgress);

// node_modules/@material-ui/core/esm/Portal/Portal.js
var import_prop_types14 = __toModule(require_prop_types());
var import_utils14 = __toModule(require_utils());
import {
  Component,
  cloneElement as cloneElement2,
  forwardRef as forwardRef5,
  isValidElement as isValidElement2,
  useEffect as useEffect9,
  useLayoutEffect as useLayoutEffect3,
  useState as useState7
} from "react";
import {
  createPortal,
  findDOMNode as findDOMNode3
} from "react-dom";
function getContainer(container) {
  container = typeof container === "function" ? container() : container;
  return findDOMNode3(container);
}
var useEnhancedEffect3 = typeof window !== "undefined" ? useLayoutEffect3 : useEffect9;
var Portal = /* @__PURE__ */ forwardRef5(function Portal2(props, ref) {
  var children = props.children, container = props.container, _props$disablePortal = props.disablePortal, disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal, onRendered = props.onRendered;
  var _React$useState = useState7(null), mountNode = _React$useState[0], setMountNode = _React$useState[1];
  var handleRef = useForkRef(/* @__PURE__ */ isValidElement2(children) ? children.ref : null, ref);
  useEnhancedEffect3(function() {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect3(function() {
    if (mountNode && !disablePortal) {
      setRef(ref, mountNode);
      return function() {
        setRef(ref, null);
      };
    }
    return void 0;
  }, [ref, mountNode, disablePortal]);
  useEnhancedEffect3(function() {
    if (onRendered && (mountNode || disablePortal)) {
      onRendered();
    }
  }, [onRendered, mountNode, disablePortal]);
  if (disablePortal) {
    if (/* @__PURE__ */ isValidElement2(children)) {
      return /* @__PURE__ */ cloneElement2(children, {
        ref: handleRef
      });
    }
    return children;
  }
  return mountNode ? /* @__PURE__ */ createPortal(children, mountNode) : mountNode;
});
true ? Portal.propTypes = {
  children: import_prop_types14.default.node,
  container: import_prop_types14.default.oneOfType([import_utils14.HTMLElementType, import_prop_types14.default.instanceOf(Component), import_prop_types14.default.func]),
  disablePortal: import_prop_types14.default.bool,
  onRendered: deprecatedPropType(import_prop_types14.default.func, "Use the ref instead.")
} : void 0;
if (true) {
  Portal["propTypes"] = (0, import_utils14.exactProp)(Portal.propTypes);
}
var Portal_default = Portal;

// node_modules/@material-ui/core/esm/Grow/Grow.js
var import_prop_types15 = __toModule(require_prop_types());
import {
  cloneElement as cloneElement3,
  createElement as createElement6,
  forwardRef as forwardRef6,
  useEffect as useEffect10,
  useRef as useRef8
} from "react";
function getScale(value) {
  return "scale(".concat(value, ", ").concat(Math.pow(value, 2), ")");
}
var styles8 = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
};
var Grow = /* @__PURE__ */ forwardRef6(function Grow2(props, ref) {
  var children = props.children, _props$disableStrictM = props.disableStrictModeCompat, disableStrictModeCompat = _props$disableStrictM === void 0 ? false : _props$disableStrictM, inProp = props.in, onEnter = props.onEnter, onEntered = props.onEntered, onEntering = props.onEntering, onExit = props.onExit, onExited = props.onExited, onExiting = props.onExiting, style = props.style, _props$timeout = props.timeout, timeout2 = _props$timeout === void 0 ? "auto" : _props$timeout, _props$TransitionComp = props.TransitionComponent, TransitionComponent = _props$TransitionComp === void 0 ? Transition_default : _props$TransitionComp, other = _objectWithoutProperties(props, ["children", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"]);
  var timer = useRef8();
  var autoTimeout = useRef8();
  var theme = useTheme2();
  var enableStrictModeCompat = theme.unstable_strictMode && !disableStrictModeCompat;
  var nodeRef = useRef8(null);
  var foreignRef = useForkRef(children.ref, ref);
  var handleRef = useForkRef(enableStrictModeCompat ? nodeRef : void 0, foreignRef);
  var normalizedTransitionCallback = function normalizedTransitionCallback2(callback) {
    return function(nodeOrAppearing, maybeAppearing) {
      if (callback) {
        var _ref = enableStrictModeCompat ? [nodeRef.current, nodeOrAppearing] : [nodeOrAppearing, maybeAppearing], _ref2 = _slicedToArray(_ref, 2), node = _ref2[0], isAppearing = _ref2[1];
        if (isAppearing === void 0) {
          callback(node);
        } else {
          callback(node, isAppearing);
        }
      }
    };
  };
  var handleEntering = normalizedTransitionCallback(onEntering);
  var handleEnter = normalizedTransitionCallback(function(node, isAppearing) {
    reflow(node);
    var _getTransitionProps = getTransitionProps({
      style,
      timeout: timeout2
    }, {
      mode: "enter"
    }), transitionDuration = _getTransitionProps.duration, delay = _getTransitionProps.delay;
    var duration3;
    if (timeout2 === "auto") {
      duration3 = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration3;
    } else {
      duration3 = transitionDuration;
    }
    node.style.transition = [theme.transitions.create("opacity", {
      duration: duration3,
      delay
    }), theme.transitions.create("transform", {
      duration: duration3 * 0.666,
      delay
    })].join(",");
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  var handleEntered = normalizedTransitionCallback(onEntered);
  var handleExiting = normalizedTransitionCallback(onExiting);
  var handleExit = normalizedTransitionCallback(function(node) {
    var _getTransitionProps2 = getTransitionProps({
      style,
      timeout: timeout2
    }, {
      mode: "exit"
    }), transitionDuration = _getTransitionProps2.duration, delay = _getTransitionProps2.delay;
    var duration3;
    if (timeout2 === "auto") {
      duration3 = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration3;
    } else {
      duration3 = transitionDuration;
    }
    node.style.transition = [theme.transitions.create("opacity", {
      duration: duration3,
      delay
    }), theme.transitions.create("transform", {
      duration: duration3 * 0.666,
      delay: delay || duration3 * 0.333
    })].join(",");
    node.style.opacity = "0";
    node.style.transform = getScale(0.75);
    if (onExit) {
      onExit(node);
    }
  });
  var handleExited = normalizedTransitionCallback(onExited);
  var addEndListener = function addEndListener2(nodeOrNext, maybeNext) {
    var next = enableStrictModeCompat ? nodeOrNext : maybeNext;
    if (timeout2 === "auto") {
      timer.current = setTimeout(next, autoTimeout.current || 0);
    }
  };
  useEffect10(function() {
    return function() {
      clearTimeout(timer.current);
    };
  }, []);
  return /* @__PURE__ */ createElement6(TransitionComponent, _extends({
    appear: true,
    in: inProp,
    nodeRef: enableStrictModeCompat ? nodeRef : void 0,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener,
    timeout: timeout2 === "auto" ? null : timeout2
  }, other), function(state, childProps) {
    return /* @__PURE__ */ cloneElement3(children, _extends({
      style: _extends({
        opacity: 0,
        transform: getScale(0.75),
        visibility: state === "exited" && !inProp ? "hidden" : void 0
      }, styles8[state], style, children.props.style),
      ref: handleRef
    }, childProps));
  });
});
true ? Grow.propTypes = {
  children: import_prop_types15.default.element,
  disableStrictModeCompat: import_prop_types15.default.bool,
  in: import_prop_types15.default.bool,
  onEnter: import_prop_types15.default.func,
  onEntered: import_prop_types15.default.func,
  onEntering: import_prop_types15.default.func,
  onExit: import_prop_types15.default.func,
  onExited: import_prop_types15.default.func,
  onExiting: import_prop_types15.default.func,
  style: import_prop_types15.default.object,
  timeout: import_prop_types15.default.oneOfType([import_prop_types15.default.oneOf(["auto"]), import_prop_types15.default.number, import_prop_types15.default.shape({
    appear: import_prop_types15.default.number,
    enter: import_prop_types15.default.number,
    exit: import_prop_types15.default.number
  })])
} : void 0;
Grow.muiSupportAuto = true;
var Grow_default = Grow;

// node_modules/@material-ui/core/esm/Popper/Popper.js
var import_prop_types16 = __toModule(require_prop_types());
import {
  Component as Component2,
  createElement as createElement7,
  forwardRef as forwardRef7,
  useCallback as useCallback5,
  useEffect as useEffect11,
  useImperativeHandle as useImperativeHandle3,
  useLayoutEffect as useLayoutEffect4,
  useRef as useRef9,
  useState as useState8
} from "react";

// node_modules/popper.js/dist/esm/popper.js
var isBrowser2 = typeof window !== "undefined" && typeof document !== "undefined" && typeof navigator !== "undefined";
var timeoutDuration = function() {
  var longerTimeoutBrowsers = ["Edge", "Trident", "Firefox"];
  for (var i2 = 0; i2 < longerTimeoutBrowsers.length; i2 += 1) {
    if (isBrowser2 && navigator.userAgent.indexOf(longerTimeoutBrowsers[i2]) >= 0) {
      return 1;
    }
  }
  return 0;
}();
function microtaskDebounce(fn) {
  var called = false;
  return function() {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function() {
      called = false;
      fn();
    });
  };
}
function taskDebounce(fn) {
  var scheduled = false;
  return function() {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function() {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}
var supportsMicroTasks = isBrowser2 && window.Promise;
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === "[object Function]";
}
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  var window2 = element.ownerDocument.defaultView;
  var css3 = window2.getComputedStyle(element, null);
  return property ? css3[property] : css3;
}
function getParentNode(element) {
  if (element.nodeName === "HTML") {
    return element;
  }
  return element.parentNode || element.host;
}
function getScrollParent(element) {
  if (!element) {
    return document.body;
  }
  switch (element.nodeName) {
    case "HTML":
    case "BODY":
      return element.ownerDocument.body;
    case "#document":
      return element.body;
  }
  var _getStyleComputedProp = getStyleComputedProperty(element), overflow = _getStyleComputedProp.overflow, overflowX = _getStyleComputedProp.overflowX, overflowY = _getStyleComputedProp.overflowY;
  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }
  return getScrollParent(getParentNode(element));
}
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}
var isIE11 = isBrowser2 && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser2 && /MSIE 10/.test(navigator.userAgent);
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }
  var noOffsetParent = isIE(10) ? document.body : null;
  var offsetParent = element.offsetParent || null;
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }
  var nodeName = offsetParent && offsetParent.nodeName;
  if (!nodeName || nodeName === "BODY" || nodeName === "HTML") {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }
  if (["TH", "TD", "TABLE"].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, "position") === "static") {
    return getOffsetParent(offsetParent);
  }
  return offsetParent;
}
function isOffsetContainer(element) {
  var nodeName = element.nodeName;
  if (nodeName === "BODY") {
    return false;
  }
  return nodeName === "HTML" || getOffsetParent(element.firstElementChild) === element;
}
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }
  return node;
}
function findCommonOffsetParent(element1, element2) {
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;
  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }
    return getOffsetParent(commonAncestorContainer);
  }
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "top";
  var upperSide = side === "top" ? "scrollTop" : "scrollLeft";
  var nodeName = element.nodeName;
  if (nodeName === "BODY" || nodeName === "HTML") {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }
  return element[upperSide];
}
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  var scrollTop = getScroll(element, "top");
  var scrollLeft = getScroll(element, "left");
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}
function getBordersSize(styles11, axis) {
  var sideA = axis === "x" ? "Left" : "Top";
  var sideB = sideA === "Left" ? "Right" : "Bottom";
  return parseFloat(styles11["border" + sideA + "Width"]) + parseFloat(styles11["border" + sideB + "Width"]);
}
function getSize(axis, body, html, computedStyle) {
  return Math.max(body["offset" + axis], body["scroll" + axis], html["client" + axis], html["offset" + axis], html["scroll" + axis], isIE(10) ? parseInt(html["offset" + axis]) + parseInt(computedStyle["margin" + (axis === "Height" ? "Top" : "Left")]) + parseInt(computedStyle["margin" + (axis === "Height" ? "Bottom" : "Right")]) : 0);
}
function getWindowSizes(document2) {
  var body = document2.body;
  var html = document2.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);
  return {
    height: getSize("Height", body, html, computedStyle),
    width: getSize("Width", body, html, computedStyle)
  };
}
var classCallCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
var createClass = function() {
  function defineProperties(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var defineProperty = function(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
};
var _extends2 = Object.assign || function(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function getClientRect(offsets) {
  return _extends2({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}
function getBoundingClientRect(element) {
  var rect = {};
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, "top");
      var scrollLeft = getScroll(element, "left");
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e2) {
  }
  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };
  var sizes = element.nodeName === "HTML" ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;
  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;
  if (horizScrollbar || vertScrollbar) {
    var styles11 = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles11, "x");
    vertScrollbar -= getBordersSize(styles11, "y");
    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }
  return getClientRect(result);
}
function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  var isIE102 = isIE(10);
  var isHTML = parent.nodeName === "HTML";
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);
  var styles11 = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles11.borderTopWidth);
  var borderLeftWidth = parseFloat(styles11.borderLeftWidth);
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;
  if (!isIE102 && isHTML) {
    var marginTop = parseFloat(styles11.marginTop);
    var marginLeft = parseFloat(styles11.marginLeft);
    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }
  if (isIE102 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== "BODY") {
    offsets = includeScroll(offsets, parent);
  }
  return offsets;
}
function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);
  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, "left") : 0;
  var offset2 = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width,
    height
  };
  return getClientRect(offset2);
}
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === "BODY" || nodeName === "HTML") {
    return false;
  }
  if (getStyleComputedProperty(element, "position") === "fixed") {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}
function getFixedPositionOffsetParent(element) {
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el2 = element.parentElement;
  while (el2 && getStyleComputedProperty(el2, "transform") === "none") {
    el2 = el2.parentElement;
  }
  return el2 || document.documentElement;
}
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  if (boundariesElement === "viewport") {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    var boundariesNode = void 0;
    if (boundariesElement === "scrollParent") {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === "BODY") {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === "window") {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }
    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);
    if (boundariesNode.nodeName === "HTML" && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument), height = _getWindowSizes.height, width = _getWindowSizes.width;
      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      boundaries = offsets;
    }
  }
  padding = padding || 0;
  var isPaddingNumber = typeof padding === "number";
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
  return boundaries;
}
function getArea(_ref) {
  var width = _ref.width, height = _ref.height;
  return width * height;
}
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
  if (placement.indexOf("auto") === -1) {
    return placement;
  }
  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };
  var sortedAreas = Object.keys(rects).map(function(key) {
    return _extends2({
      key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function(a2, b2) {
    return b2.area - a2.area;
  });
  var filteredAreas = sortedAreas.filter(function(_ref2) {
    var width = _ref2.width, height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });
  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
  var variation = placement.split("-")[1];
  return computedPlacement + (variation ? "-" + variation : "");
}
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}
function getOuterSizes(element) {
  var window2 = element.ownerDocument.defaultView;
  var styles11 = window2.getComputedStyle(element);
  var x2 = parseFloat(styles11.marginTop || 0) + parseFloat(styles11.marginBottom || 0);
  var y2 = parseFloat(styles11.marginLeft || 0) + parseFloat(styles11.marginRight || 0);
  var result = {
    width: element.offsetWidth + y2,
    height: element.offsetHeight + x2
  };
  return result;
}
function getOppositePlacement(placement) {
  var hash = { left: "right", right: "left", bottom: "top", top: "bottom" };
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split("-")[0];
  var popperRect = getOuterSizes(popper);
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };
  var isHoriz = ["right", "left"].indexOf(placement) !== -1;
  var mainSide = isHoriz ? "top" : "left";
  var secondarySide = isHoriz ? "left" : "top";
  var measurement = isHoriz ? "height" : "width";
  var secondaryMeasurement = !isHoriz ? "height" : "width";
  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }
  return popperOffsets;
}
function find(arr, check) {
  if (Array.prototype.find) {
    return arr.find(check);
  }
  return arr.filter(check)[0];
}
function findIndex(arr, prop, value) {
  if (Array.prototype.findIndex) {
    return arr.findIndex(function(cur) {
      return cur[prop] === value;
    });
  }
  var match = find(arr, function(obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}
function runModifiers(modifiers2, data, ends) {
  var modifiersToRun = ends === void 0 ? modifiers2 : modifiers2.slice(0, findIndex(modifiers2, "name", ends));
  modifiersToRun.forEach(function(modifier) {
    if (modifier["function"]) {
      console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
    }
    var fn = modifier["function"] || modifier.fn;
    if (modifier.enabled && isFunction(fn)) {
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);
      data = fn(data, modifier);
    }
  });
  return data;
}
function update2() {
  if (this.state.isDestroyed) {
    return;
  }
  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);
  data.originalPlacement = data.placement;
  data.positionFixed = this.options.positionFixed;
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute";
  data = runModifiers(this.modifiers, data);
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}
function isModifierEnabled(modifiers2, modifierName) {
  return modifiers2.some(function(_ref) {
    var name = _ref.name, enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}
function getSupportedPropertyName(property) {
  var prefixes = [false, "ms", "Webkit", "Moz", "O"];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);
  for (var i2 = 0; i2 < prefixes.length; i2++) {
    var prefix2 = prefixes[i2];
    var toCheck = prefix2 ? "" + prefix2 + upperProp : property;
    if (typeof document.body.style[toCheck] !== "undefined") {
      return toCheck;
    }
  }
  return null;
}
function destroy() {
  this.state.isDestroyed = true;
  if (isModifierEnabled(this.modifiers, "applyStyle")) {
    this.popper.removeAttribute("x-placement");
    this.popper.style.position = "";
    this.popper.style.top = "";
    this.popper.style.left = "";
    this.popper.style.right = "";
    this.popper.style.bottom = "";
    this.popper.style.willChange = "";
    this.popper.style[getSupportedPropertyName("transform")] = "";
  }
  this.disableEventListeners();
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}
function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === "BODY";
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });
  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}
function setupEventListeners(reference, options, state, updateBound) {
  state.updateBound = updateBound;
  getWindow(reference).addEventListener("resize", state.updateBound, { passive: true });
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, "scroll", state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;
  return state;
}
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}
function removeEventListeners(reference, state) {
  getWindow(reference).removeEventListener("resize", state.updateBound);
  state.scrollParents.forEach(function(target) {
    target.removeEventListener("scroll", state.updateBound);
  });
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}
function isNumeric(n2) {
  return n2 !== "" && !isNaN(parseFloat(n2)) && isFinite(n2);
}
function setStyles(element, styles11) {
  Object.keys(styles11).forEach(function(prop) {
    var unit = "";
    if (["width", "height", "top", "right", "bottom", "left"].indexOf(prop) !== -1 && isNumeric(styles11[prop])) {
      unit = "px";
    }
    element.style[prop] = styles11[prop] + unit;
  });
}
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function(prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}
function applyStyle(data) {
  setStyles(data.instance.popper, data.styles);
  setAttributes(data.instance.popper, data.attributes);
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }
  return data;
}
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
  popper.setAttribute("x-placement", placement);
  setStyles(popper, { position: options.positionFixed ? "fixed" : "absolute" });
  return options;
}
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
  var round4 = Math.round, floor = Math.floor;
  var noRound = function noRound2(v2) {
    return v2;
  };
  var referenceWidth = round4(reference.width);
  var popperWidth = round4(popper.width);
  var isVertical = ["left", "right"].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf("-") !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round4 : floor;
  var verticalToInteger = !shouldRound ? noRound : round4;
  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}
var isFirefox = isBrowser2 && /Firefox/i.test(navigator.userAgent);
function computeStyle(data, options) {
  var x2 = options.x, y2 = options.y;
  var popper = data.offsets.popper;
  var legacyGpuAccelerationOption = find(data.instance.modifiers, function(modifier) {
    return modifier.name === "applyStyle";
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== void 0) {
    console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== void 0 ? legacyGpuAccelerationOption : options.gpuAcceleration;
  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);
  var styles11 = {
    position: popper.position
  };
  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
  var sideA = x2 === "bottom" ? "top" : "bottom";
  var sideB = y2 === "right" ? "left" : "right";
  var prefixedProperty = getSupportedPropertyName("transform");
  var left = void 0, top = void 0;
  if (sideA === "bottom") {
    if (offsetParent.nodeName === "HTML") {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === "right") {
    if (offsetParent.nodeName === "HTML") {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles11[prefixedProperty] = "translate3d(" + left + "px, " + top + "px, 0)";
    styles11[sideA] = 0;
    styles11[sideB] = 0;
    styles11.willChange = "transform";
  } else {
    var invertTop = sideA === "bottom" ? -1 : 1;
    var invertLeft = sideB === "right" ? -1 : 1;
    styles11[sideA] = top * invertTop;
    styles11[sideB] = left * invertLeft;
    styles11.willChange = sideA + ", " + sideB;
  }
  var attributes = {
    "x-placement": data.placement
  };
  data.attributes = _extends2({}, attributes, data.attributes);
  data.styles = _extends2({}, styles11, data.styles);
  data.arrowStyles = _extends2({}, data.offsets.arrow, data.arrowStyles);
  return data;
}
function isModifierRequired(modifiers2, requestingName, requestedName) {
  var requesting = find(modifiers2, function(_ref) {
    var name = _ref.name;
    return name === requestingName;
  });
  var isRequired = !!requesting && modifiers2.some(function(modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });
  if (!isRequired) {
    var _requesting = "`" + requestingName + "`";
    var requested = "`" + requestedName + "`";
    console.warn(requested + " modifier is required by " + _requesting + " modifier in order to work, be sure to include it before " + _requesting + "!");
  }
  return isRequired;
}
function arrow(data, options) {
  var _data$offsets$arrow;
  if (!isModifierRequired(data.instance.modifiers, "arrow", "keepTogether")) {
    return data;
  }
  var arrowElement = options.element;
  if (typeof arrowElement === "string") {
    arrowElement = data.instance.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return data;
    }
  } else {
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn("WARNING: `arrow.element` must be child of its popper element!");
      return data;
    }
  }
  var placement = data.placement.split("-")[0];
  var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
  var isVertical = ["left", "right"].indexOf(placement) !== -1;
  var len = isVertical ? "height" : "width";
  var sideCapitalized = isVertical ? "Top" : "Left";
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? "left" : "top";
  var opSide = isVertical ? "bottom" : "right";
  var arrowElementSize = getOuterSizes(arrowElement)[len];
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;
  var css3 = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css3["margin" + sideCapitalized]);
  var popperBorderSide = parseFloat(css3["border" + sideCapitalized + "Width"]);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ""), _data$offsets$arrow);
  return data;
}
function getOppositeVariation(variation) {
  if (variation === "end") {
    return "start";
  } else if (variation === "start") {
    return "end";
  }
  return variation;
}
var placements = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"];
var validPlacements = placements.slice(3);
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var index3 = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index3 + 1).concat(validPlacements.slice(0, index3));
  return counter ? arr.reverse() : arr;
}
var BEHAVIORS = {
  FLIP: "flip",
  CLOCKWISE: "clockwise",
  COUNTERCLOCKWISE: "counterclockwise"
};
function flip(data, options) {
  if (isModifierEnabled(data.instance.modifiers, "inner")) {
    return data;
  }
  if (data.flipped && data.placement === data.originalPlacement) {
    return data;
  }
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
  var placement = data.placement.split("-")[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split("-")[1] || "";
  var flipOrder = [];
  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }
  flipOrder.forEach(function(step, index3) {
    if (placement !== step || flipOrder.length === index3 + 1) {
      return data;
    }
    placement = data.placement.split("-")[0];
    placementOpposite = getOppositePlacement(placement);
    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;
    var floor = Math.floor;
    var overlapsRef = placement === "left" && floor(popperOffsets.right) > floor(refOffsets.left) || placement === "right" && floor(popperOffsets.left) < floor(refOffsets.right) || placement === "top" && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === "bottom" && floor(popperOffsets.top) < floor(refOffsets.bottom);
    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
    var overflowsBoundaries = placement === "left" && overflowsLeft || placement === "right" && overflowsRight || placement === "top" && overflowsTop || placement === "bottom" && overflowsBottom;
    var isVertical = ["top", "bottom"].indexOf(placement) !== -1;
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === "start" && overflowsLeft || isVertical && variation === "end" && overflowsRight || !isVertical && variation === "start" && overflowsTop || !isVertical && variation === "end" && overflowsBottom);
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === "start" && overflowsRight || isVertical && variation === "end" && overflowsLeft || !isVertical && variation === "start" && overflowsBottom || !isVertical && variation === "end" && overflowsTop);
    var flippedVariation = flippedVariationByRef || flippedVariationByContent;
    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      data.flipped = true;
      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index3 + 1];
      }
      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }
      data.placement = placement + (variation ? "-" + variation : "");
      data.offsets.popper = _extends2({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
      data = runModifiers(data.instance.modifiers, data, "flip");
    }
  });
  return data;
}
function keepTogether(data) {
  var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
  var placement = data.placement.split("-")[0];
  var floor = Math.floor;
  var isVertical = ["top", "bottom"].indexOf(placement) !== -1;
  var side = isVertical ? "right" : "bottom";
  var opSide = isVertical ? "left" : "top";
  var measurement = isVertical ? "width" : "height";
  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }
  return data;
}
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];
  if (!value) {
    return str;
  }
  if (unit.indexOf("%") === 0) {
    var element = void 0;
    switch (unit) {
      case "%p":
        element = popperOffsets;
        break;
      case "%":
      case "%r":
      default:
        element = referenceOffsets;
    }
    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === "vh" || unit === "vw") {
    var size = void 0;
    if (unit === "vh") {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    return value;
  }
}
function parseOffset(offset2, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];
  var useHeight = ["right", "left"].indexOf(basePlacement) !== -1;
  var fragments = offset2.split(/(\+|\-)/).map(function(frag) {
    return frag.trim();
  });
  var divider = fragments.indexOf(find(fragments, function(frag) {
    return frag.search(/,|\s/) !== -1;
  }));
  if (fragments[divider] && fragments[divider].indexOf(",") === -1) {
    console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
  }
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];
  ops = ops.map(function(op, index3) {
    var measurement = (index3 === 1 ? !useHeight : useHeight) ? "height" : "width";
    var mergeWithPrevious = false;
    return op.reduce(function(a2, b2) {
      if (a2[a2.length - 1] === "" && ["+", "-"].indexOf(b2) !== -1) {
        a2[a2.length - 1] = b2;
        mergeWithPrevious = true;
        return a2;
      } else if (mergeWithPrevious) {
        a2[a2.length - 1] += b2;
        mergeWithPrevious = false;
        return a2;
      } else {
        return a2.concat(b2);
      }
    }, []).map(function(str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });
  ops.forEach(function(op, index3) {
    op.forEach(function(frag, index22) {
      if (isNumeric(frag)) {
        offsets[index3] += frag * (op[index22 - 1] === "-" ? -1 : 1);
      }
    });
  });
  return offsets;
}
function offset(data, _ref) {
  var offset2 = _ref.offset;
  var placement = data.placement, _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
  var basePlacement = placement.split("-")[0];
  var offsets = void 0;
  if (isNumeric(+offset2)) {
    offsets = [+offset2, 0];
  } else {
    offsets = parseOffset(offset2, popper, reference, basePlacement);
  }
  if (basePlacement === "left") {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === "right") {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === "top") {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === "bottom") {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }
  data.popper = popper;
  return data;
}
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }
  var transformProp = getSupportedPropertyName("transform");
  var popperStyles = data.instance.popper.style;
  var top = popperStyles.top, left = popperStyles.left, transform2 = popperStyles[transformProp];
  popperStyles.top = "";
  popperStyles.left = "";
  popperStyles[transformProp] = "";
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform2;
  options.boundaries = boundaries;
  var order = options.priority;
  var popper = data.offsets.popper;
  var check = {
    primary: function primary3(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary3(placement) {
      var mainSide = placement === "right" ? "left" : "top";
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === "right" ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };
  order.forEach(function(placement) {
    var side = ["left", "top"].indexOf(placement) !== -1 ? "primary" : "secondary";
    popper = _extends2({}, popper, check[side](placement));
  });
  data.offsets.popper = popper;
  return data;
}
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split("-")[0];
  var shiftvariation = placement.split("-")[1];
  if (shiftvariation) {
    var _data$offsets = data.offsets, reference = _data$offsets.reference, popper = _data$offsets.popper;
    var isVertical = ["bottom", "top"].indexOf(basePlacement) !== -1;
    var side = isVertical ? "left" : "top";
    var measurement = isVertical ? "width" : "height";
    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };
    data.offsets.popper = _extends2({}, popper, shiftOffsets[shiftvariation]);
  }
  return data;
}
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, "hide", "preventOverflow")) {
    return data;
  }
  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function(modifier) {
    return modifier.name === "preventOverflow";
  }).boundaries;
  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    if (data.hide === true) {
      return data;
    }
    data.hide = true;
    data.attributes["x-out-of-boundaries"] = "";
  } else {
    if (data.hide === false) {
      return data;
    }
    data.hide = false;
    data.attributes["x-out-of-boundaries"] = false;
  }
  return data;
}
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split("-")[0];
  var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
  var isHoriz = ["left", "right"].indexOf(basePlacement) !== -1;
  var subtractLength = ["top", "left"].indexOf(basePlacement) === -1;
  popper[isHoriz ? "left" : "top"] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? "width" : "height"] : 0);
  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);
  return data;
}
var modifiers = {
  shift: {
    order: 100,
    enabled: true,
    fn: shift
  },
  offset: {
    order: 200,
    enabled: true,
    fn: offset,
    offset: 0
  },
  preventOverflow: {
    order: 300,
    enabled: true,
    fn: preventOverflow,
    priority: ["left", "right", "top", "bottom"],
    padding: 5,
    boundariesElement: "scrollParent"
  },
  keepTogether: {
    order: 400,
    enabled: true,
    fn: keepTogether
  },
  arrow: {
    order: 500,
    enabled: true,
    fn: arrow,
    element: "[x-arrow]"
  },
  flip: {
    order: 600,
    enabled: true,
    fn: flip,
    behavior: "flip",
    padding: 5,
    boundariesElement: "viewport",
    flipVariations: false,
    flipVariationsByContent: false
  },
  inner: {
    order: 700,
    enabled: false,
    fn: inner
  },
  hide: {
    order: 800,
    enabled: true,
    fn: hide
  },
  computeStyle: {
    order: 850,
    enabled: true,
    fn: computeStyle,
    gpuAcceleration: true,
    x: "bottom",
    y: "right"
  },
  applyStyle: {
    order: 900,
    enabled: true,
    fn: applyStyle,
    onLoad: applyStyleOnLoad,
    gpuAcceleration: void 0
  }
};
var Defaults = {
  placement: "bottom",
  positionFixed: false,
  eventsEnabled: true,
  removeOnDestroy: false,
  onCreate: function onCreate() {
  },
  onUpdate: function onUpdate() {
  },
  modifiers
};
var Popper = function() {
  function Popper4(reference, popper) {
    var _this = this;
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    classCallCheck(this, Popper4);
    this.scheduleUpdate = function() {
      return requestAnimationFrame(_this.update);
    };
    this.update = debounce(this.update.bind(this));
    this.options = _extends2({}, Popper4.Defaults, options);
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;
    this.options.modifiers = {};
    Object.keys(_extends2({}, Popper4.Defaults.modifiers, options.modifiers)).forEach(function(name) {
      _this.options.modifiers[name] = _extends2({}, Popper4.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });
    this.modifiers = Object.keys(this.options.modifiers).map(function(name) {
      return _extends2({
        name
      }, _this.options.modifiers[name]);
    }).sort(function(a2, b2) {
      return a2.order - b2.order;
    });
    this.modifiers.forEach(function(modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });
    this.update();
    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      this.enableEventListeners();
    }
    this.state.eventsEnabled = eventsEnabled;
  }
  createClass(Popper4, [{
    key: "update",
    value: function update$$1() {
      return update2.call(this);
    }
  }, {
    key: "destroy",
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: "enableEventListeners",
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: "disableEventListeners",
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }
  }]);
  return Popper4;
}();
Popper.Utils = (typeof window !== "undefined" ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;
var popper_default = Popper;

// node_modules/@material-ui/core/esm/Popper/Popper.js
var import_utils16 = __toModule(require_utils());
function flipPlacement(placement, theme) {
  var direction = theme && theme.direction || "ltr";
  if (direction === "ltr") {
    return placement;
  }
  switch (placement) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return placement;
  }
}
function getAnchorEl(anchorEl) {
  return typeof anchorEl === "function" ? anchorEl() : anchorEl;
}
var useEnhancedEffect4 = typeof window !== "undefined" ? useLayoutEffect4 : useEffect11;
var defaultPopperOptions = {};
var Popper2 = /* @__PURE__ */ forwardRef7(function Popper3(props, ref) {
  var anchorEl = props.anchorEl, children = props.children, container = props.container, _props$disablePortal = props.disablePortal, disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal, _props$keepMounted = props.keepMounted, keepMounted = _props$keepMounted === void 0 ? false : _props$keepMounted, modifiers2 = props.modifiers, open = props.open, _props$placement = props.placement, initialPlacement = _props$placement === void 0 ? "bottom" : _props$placement, _props$popperOptions = props.popperOptions, popperOptions = _props$popperOptions === void 0 ? defaultPopperOptions : _props$popperOptions, popperRefProp = props.popperRef, style = props.style, _props$transition = props.transition, transition2 = _props$transition === void 0 ? false : _props$transition, other = _objectWithoutProperties(props, ["anchorEl", "children", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition"]);
  var tooltipRef = useRef9(null);
  var ownRef = useForkRef(tooltipRef, ref);
  var popperRef = useRef9(null);
  var handlePopperRef = useForkRef(popperRef, popperRefProp);
  var handlePopperRefRef = useRef9(handlePopperRef);
  useEnhancedEffect4(function() {
    handlePopperRefRef.current = handlePopperRef;
  }, [handlePopperRef]);
  useImperativeHandle3(popperRefProp, function() {
    return popperRef.current;
  }, []);
  var _React$useState = useState8(true), exited = _React$useState[0], setExited = _React$useState[1];
  var theme = useTheme();
  var rtlPlacement = flipPlacement(initialPlacement, theme);
  var _React$useState2 = useState8(rtlPlacement), placement = _React$useState2[0], setPlacement = _React$useState2[1];
  useEffect11(function() {
    if (popperRef.current) {
      popperRef.current.update();
    }
  });
  var handleOpen = useCallback5(function() {
    if (!tooltipRef.current || !anchorEl || !open) {
      return;
    }
    if (popperRef.current) {
      popperRef.current.destroy();
      handlePopperRefRef.current(null);
    }
    var handlePopperUpdate = function handlePopperUpdate2(data) {
      setPlacement(data.placement);
    };
    var resolvedAnchorEl = getAnchorEl(anchorEl);
    if (true) {
      if (resolvedAnchorEl && resolvedAnchorEl.nodeType === 1) {
        var box = resolvedAnchorEl.getBoundingClientRect();
        if (box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          console.warn(["Material-UI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join("\n"));
        }
      }
    }
    var popper = new popper_default(getAnchorEl(anchorEl), tooltipRef.current, _extends({
      placement: rtlPlacement
    }, popperOptions, {
      modifiers: _extends({}, disablePortal ? {} : {
        preventOverflow: {
          boundariesElement: "window"
        }
      }, modifiers2, popperOptions.modifiers),
      onCreate: createChainedFunction(handlePopperUpdate, popperOptions.onCreate),
      onUpdate: createChainedFunction(handlePopperUpdate, popperOptions.onUpdate)
    }));
    handlePopperRefRef.current(popper);
  }, [anchorEl, disablePortal, modifiers2, open, rtlPlacement, popperOptions]);
  var handleRef = useCallback5(function(node) {
    setRef(ownRef, node);
    handleOpen();
  }, [ownRef, handleOpen]);
  var handleEnter = function handleEnter2() {
    setExited(false);
  };
  var handleClose = function handleClose2() {
    if (!popperRef.current) {
      return;
    }
    popperRef.current.destroy();
    handlePopperRefRef.current(null);
  };
  var handleExited = function handleExited2() {
    setExited(true);
    handleClose();
  };
  useEffect11(function() {
    return function() {
      handleClose();
    };
  }, []);
  useEffect11(function() {
    if (!open && !transition2) {
      handleClose();
    }
  }, [open, transition2]);
  if (!keepMounted && !open && (!transition2 || exited)) {
    return null;
  }
  var childProps = {
    placement
  };
  if (transition2) {
    childProps.TransitionProps = {
      in: open,
      onEnter: handleEnter,
      onExited: handleExited
    };
  }
  return /* @__PURE__ */ createElement7(Portal_default, {
    disablePortal,
    container
  }, /* @__PURE__ */ createElement7("div", _extends({
    ref: handleRef,
    role: "tooltip"
  }, other, {
    style: _extends({
      position: "fixed",
      top: 0,
      left: 0,
      display: !open && keepMounted && !transition2 ? "none" : null
    }, style)
  }), typeof children === "function" ? children(childProps) : children));
});
true ? Popper2.propTypes = {
  anchorEl: (0, import_utils16.chainPropTypes)(import_prop_types16.default.oneOfType([import_utils16.HTMLElementType, import_prop_types16.default.object, import_prop_types16.default.func]), function(props) {
    if (props.open) {
      var resolvedAnchorEl = getAnchorEl(props.anchorEl);
      if (resolvedAnchorEl && resolvedAnchorEl.nodeType === 1) {
        var box = resolvedAnchorEl.getBoundingClientRect();
        if (box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          return new Error(["Material-UI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join("\n"));
        }
      } else if (!resolvedAnchorEl || typeof resolvedAnchorEl.clientWidth !== "number" || typeof resolvedAnchorEl.clientHeight !== "number" || typeof resolvedAnchorEl.getBoundingClientRect !== "function") {
        return new Error(["Material-UI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a referenceObject ", "(https://popper.js.org/docs/v1/#referenceObject)."].join("\n"));
      }
    }
    return null;
  }),
  children: import_prop_types16.default.oneOfType([import_prop_types16.default.node, import_prop_types16.default.func]).isRequired,
  container: import_prop_types16.default.oneOfType([import_utils16.HTMLElementType, import_prop_types16.default.instanceOf(Component2), import_prop_types16.default.func]),
  disablePortal: import_prop_types16.default.bool,
  keepMounted: import_prop_types16.default.bool,
  modifiers: import_prop_types16.default.object,
  open: import_prop_types16.default.bool.isRequired,
  placement: import_prop_types16.default.oneOf(["bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  popperOptions: import_prop_types16.default.object,
  popperRef: import_utils16.refType,
  style: import_prop_types16.default.object,
  transition: import_prop_types16.default.bool
} : void 0;
var Popper_default = Popper2;

// node_modules/@material-ui/core/esm/Tooltip/Tooltip.js
var import_prop_types17 = __toModule(require_prop_types());
import {
  Fragment,
  cloneElement as cloneElement4,
  createElement as createElement8,
  forwardRef as forwardRef8,
  useCallback as useCallback6,
  useEffect as useEffect12,
  useMemo as useMemo2,
  useRef as useRef10,
  useState as useState9
} from "react";
import {
  findDOMNode as findDOMNode4
} from "react-dom";
var import_utils17 = __toModule(require_utils());
function round2(value) {
  return Math.round(value * 1e5) / 1e5;
}
function arrowGenerator() {
  return {
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: "-0.71em",
      marginLeft: 4,
      marginRight: 4,
      "&::before": {
        transformOrigin: "0 100%"
      }
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: "-0.71em",
      marginLeft: 4,
      marginRight: 4,
      "&::before": {
        transformOrigin: "100% 0"
      }
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: "-0.71em",
      height: "1em",
      width: "0.71em",
      marginTop: 4,
      marginBottom: 4,
      "&::before": {
        transformOrigin: "100% 100%"
      }
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: "-0.71em",
      height: "1em",
      width: "0.71em",
      marginTop: 4,
      marginBottom: 4,
      "&::before": {
        transformOrigin: "0 0"
      }
    }
  };
}
var styles9 = function styles10(theme) {
  return {
    popper: {
      zIndex: theme.zIndex.tooltip,
      pointerEvents: "none"
    },
    popperInteractive: {
      pointerEvents: "auto"
    },
    popperArrow: arrowGenerator(),
    tooltip: {
      backgroundColor: alpha(theme.palette.grey[700], 0.9),
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.common.white,
      fontFamily: theme.typography.fontFamily,
      padding: "4px 8px",
      fontSize: theme.typography.pxToRem(10),
      lineHeight: "".concat(round2(14 / 10), "em"),
      maxWidth: 300,
      wordWrap: "break-word",
      fontWeight: theme.typography.fontWeightMedium
    },
    tooltipArrow: {
      position: "relative",
      margin: "0"
    },
    arrow: {
      overflow: "hidden",
      position: "absolute",
      width: "1em",
      height: "0.71em",
      boxSizing: "border-box",
      color: alpha(theme.palette.grey[700], 0.9),
      "&::before": {
        content: '""',
        margin: "auto",
        display: "block",
        width: "100%",
        height: "100%",
        backgroundColor: "currentColor",
        transform: "rotate(45deg)"
      }
    },
    touch: {
      padding: "8px 16px",
      fontSize: theme.typography.pxToRem(14),
      lineHeight: "".concat(round2(16 / 14), "em"),
      fontWeight: theme.typography.fontWeightRegular
    },
    tooltipPlacementLeft: _defineProperty({
      transformOrigin: "right center",
      margin: "0 24px "
    }, theme.breakpoints.up("sm"), {
      margin: "0 14px"
    }),
    tooltipPlacementRight: _defineProperty({
      transformOrigin: "left center",
      margin: "0 24px"
    }, theme.breakpoints.up("sm"), {
      margin: "0 14px"
    }),
    tooltipPlacementTop: _defineProperty({
      transformOrigin: "center bottom",
      margin: "24px 0"
    }, theme.breakpoints.up("sm"), {
      margin: "14px 0"
    }),
    tooltipPlacementBottom: _defineProperty({
      transformOrigin: "center top",
      margin: "24px 0"
    }, theme.breakpoints.up("sm"), {
      margin: "14px 0"
    })
  };
};
var hystersisOpen = false;
var hystersisTimer = null;
var Tooltip = /* @__PURE__ */ forwardRef8(function Tooltip2(props, ref) {
  var _props$arrow = props.arrow, arrow2 = _props$arrow === void 0 ? false : _props$arrow, children = props.children, classes = props.classes, _props$disableFocusLi = props.disableFocusListener, disableFocusListener = _props$disableFocusLi === void 0 ? false : _props$disableFocusLi, _props$disableHoverLi = props.disableHoverListener, disableHoverListener = _props$disableHoverLi === void 0 ? false : _props$disableHoverLi, _props$disableTouchLi = props.disableTouchListener, disableTouchListener = _props$disableTouchLi === void 0 ? false : _props$disableTouchLi, _props$enterDelay = props.enterDelay, enterDelay = _props$enterDelay === void 0 ? 100 : _props$enterDelay, _props$enterNextDelay = props.enterNextDelay, enterNextDelay = _props$enterNextDelay === void 0 ? 0 : _props$enterNextDelay, _props$enterTouchDela = props.enterTouchDelay, enterTouchDelay = _props$enterTouchDela === void 0 ? 700 : _props$enterTouchDela, idProp = props.id, _props$interactive = props.interactive, interactive3 = _props$interactive === void 0 ? false : _props$interactive, _props$leaveDelay = props.leaveDelay, leaveDelay = _props$leaveDelay === void 0 ? 0 : _props$leaveDelay, _props$leaveTouchDela = props.leaveTouchDelay, leaveTouchDelay = _props$leaveTouchDela === void 0 ? 1500 : _props$leaveTouchDela, onClose = props.onClose, onOpen = props.onOpen, openProp = props.open, _props$placement = props.placement, placement = _props$placement === void 0 ? "bottom" : _props$placement, _props$PopperComponen = props.PopperComponent, PopperComponent = _props$PopperComponen === void 0 ? Popper_default : _props$PopperComponen, PopperProps = props.PopperProps, title = props.title, _props$TransitionComp = props.TransitionComponent, TransitionComponent = _props$TransitionComp === void 0 ? Grow_default : _props$TransitionComp, TransitionProps = props.TransitionProps, other = _objectWithoutProperties(props, ["arrow", "children", "classes", "disableFocusListener", "disableHoverListener", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "id", "interactive", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "title", "TransitionComponent", "TransitionProps"]);
  var theme = useTheme2();
  var _React$useState = useState9(), childNode = _React$useState[0], setChildNode = _React$useState[1];
  var _React$useState2 = useState9(null), arrowRef = _React$useState2[0], setArrowRef = _React$useState2[1];
  var ignoreNonTouchEvents = useRef10(false);
  var closeTimer = useRef10();
  var enterTimer = useRef10();
  var leaveTimer = useRef10();
  var touchTimer = useRef10();
  var _useControlled = useControlled({
    controlled: openProp,
    default: false,
    name: "Tooltip",
    state: "open"
  }), _useControlled2 = _slicedToArray(_useControlled, 2), openState = _useControlled2[0], setOpenState = _useControlled2[1];
  var open = openState;
  if (true) {
    var _React$useRef = useRef10(openProp !== void 0), isControlled = _React$useRef.current;
    useEffect12(function() {
      if (childNode && childNode.disabled && !isControlled && title !== "" && childNode.tagName.toLowerCase() === "button") {
        console.error(["Material-UI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join("\n"));
      }
    }, [title, childNode, isControlled]);
  }
  var id = useId(idProp);
  useEffect12(function() {
    return function() {
      clearTimeout(closeTimer.current);
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);
      clearTimeout(touchTimer.current);
    };
  }, []);
  var handleOpen = function handleOpen2(event) {
    clearTimeout(hystersisTimer);
    hystersisOpen = true;
    setOpenState(true);
    if (onOpen) {
      onOpen(event);
    }
  };
  var handleEnter = function handleEnter2() {
    var forward = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    return function(event) {
      var childrenProps2 = children.props;
      if (event.type === "mouseover" && childrenProps2.onMouseOver && forward) {
        childrenProps2.onMouseOver(event);
      }
      if (ignoreNonTouchEvents.current && event.type !== "touchstart") {
        return;
      }
      if (childNode) {
        childNode.removeAttribute("title");
      }
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);
      if (enterDelay || hystersisOpen && enterNextDelay) {
        event.persist();
        enterTimer.current = setTimeout(function() {
          handleOpen(event);
        }, hystersisOpen ? enterNextDelay : enterDelay);
      } else {
        handleOpen(event);
      }
    };
  };
  var _useIsFocusVisible = useIsFocusVisible(), isFocusVisible2 = _useIsFocusVisible.isFocusVisible, onBlurVisible = _useIsFocusVisible.onBlurVisible, focusVisibleRef = _useIsFocusVisible.ref;
  var _React$useState3 = useState9(false), childIsFocusVisible = _React$useState3[0], setChildIsFocusVisible = _React$useState3[1];
  var handleBlur = function handleBlur2() {
    if (childIsFocusVisible) {
      setChildIsFocusVisible(false);
      onBlurVisible();
    }
  };
  var handleFocus = function handleFocus2() {
    var forward = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    return function(event) {
      if (!childNode) {
        setChildNode(event.currentTarget);
      }
      if (isFocusVisible2(event)) {
        setChildIsFocusVisible(true);
        handleEnter()(event);
      }
      var childrenProps2 = children.props;
      if (childrenProps2.onFocus && forward) {
        childrenProps2.onFocus(event);
      }
    };
  };
  var handleClose = function handleClose2(event) {
    clearTimeout(hystersisTimer);
    hystersisTimer = setTimeout(function() {
      hystersisOpen = false;
    }, 800 + leaveDelay);
    setOpenState(false);
    if (onClose) {
      onClose(event);
    }
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(function() {
      ignoreNonTouchEvents.current = false;
    }, theme.transitions.duration.shortest);
  };
  var handleLeave = function handleLeave2() {
    var forward = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    return function(event) {
      var childrenProps2 = children.props;
      if (event.type === "blur") {
        if (childrenProps2.onBlur && forward) {
          childrenProps2.onBlur(event);
        }
        handleBlur();
      }
      if (event.type === "mouseleave" && childrenProps2.onMouseLeave && event.currentTarget === childNode) {
        childrenProps2.onMouseLeave(event);
      }
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);
      event.persist();
      leaveTimer.current = setTimeout(function() {
        handleClose(event);
      }, leaveDelay);
    };
  };
  var detectTouchStart = function detectTouchStart2(event) {
    ignoreNonTouchEvents.current = true;
    var childrenProps2 = children.props;
    if (childrenProps2.onTouchStart) {
      childrenProps2.onTouchStart(event);
    }
  };
  var handleTouchStart = function handleTouchStart2(event) {
    detectTouchStart(event);
    clearTimeout(leaveTimer.current);
    clearTimeout(closeTimer.current);
    clearTimeout(touchTimer.current);
    event.persist();
    touchTimer.current = setTimeout(function() {
      handleEnter()(event);
    }, enterTouchDelay);
  };
  var handleTouchEnd = function handleTouchEnd2(event) {
    if (children.props.onTouchEnd) {
      children.props.onTouchEnd(event);
    }
    clearTimeout(touchTimer.current);
    clearTimeout(leaveTimer.current);
    event.persist();
    leaveTimer.current = setTimeout(function() {
      handleClose(event);
    }, leaveTouchDelay);
  };
  var handleUseRef = useForkRef(setChildNode, ref);
  var handleFocusRef = useForkRef(focusVisibleRef, handleUseRef);
  var handleOwnRef = useCallback6(function(instance) {
    setRef(handleFocusRef, findDOMNode4(instance));
  }, [handleFocusRef]);
  var handleRef = useForkRef(children.ref, handleOwnRef);
  if (title === "") {
    open = false;
  }
  var shouldShowNativeTitle = !open && !disableHoverListener;
  var childrenProps = _extends({
    "aria-describedby": open ? id : null,
    title: shouldShowNativeTitle && typeof title === "string" ? title : null
  }, other, children.props, {
    className: clsx_m_default(other.className, children.props.className),
    onTouchStart: detectTouchStart,
    ref: handleRef
  });
  var interactiveWrapperListeners = {};
  if (!disableTouchListener) {
    childrenProps.onTouchStart = handleTouchStart;
    childrenProps.onTouchEnd = handleTouchEnd;
  }
  if (!disableHoverListener) {
    childrenProps.onMouseOver = handleEnter();
    childrenProps.onMouseLeave = handleLeave();
    if (interactive3) {
      interactiveWrapperListeners.onMouseOver = handleEnter(false);
      interactiveWrapperListeners.onMouseLeave = handleLeave(false);
    }
  }
  if (!disableFocusListener) {
    childrenProps.onFocus = handleFocus();
    childrenProps.onBlur = handleLeave();
    if (interactive3) {
      interactiveWrapperListeners.onFocus = handleFocus(false);
      interactiveWrapperListeners.onBlur = handleLeave(false);
    }
  }
  if (true) {
    if (children.props.title) {
      console.error(["Material-UI: You have provided a `title` prop to the child of <Tooltip />.", "Remove this title prop `".concat(children.props.title, "` or the Tooltip component.")].join("\n"));
    }
  }
  var mergedPopperProps = useMemo2(function() {
    return (0, import_utils17.deepmerge)({
      popperOptions: {
        modifiers: {
          arrow: {
            enabled: Boolean(arrowRef),
            element: arrowRef
          }
        }
      }
    }, PopperProps);
  }, [arrowRef, PopperProps]);
  return /* @__PURE__ */ createElement8(Fragment, null, /* @__PURE__ */ cloneElement4(children, childrenProps), /* @__PURE__ */ createElement8(PopperComponent, _extends({
    className: clsx_m_default(classes.popper, interactive3 && classes.popperInteractive, arrow2 && classes.popperArrow),
    placement,
    anchorEl: childNode,
    open: childNode ? open : false,
    id: childrenProps["aria-describedby"],
    transition: true
  }, interactiveWrapperListeners, mergedPopperProps), function(_ref) {
    var placementInner = _ref.placement, TransitionPropsInner = _ref.TransitionProps;
    return /* @__PURE__ */ createElement8(TransitionComponent, _extends({
      timeout: theme.transitions.duration.shorter
    }, TransitionPropsInner, TransitionProps), /* @__PURE__ */ createElement8("div", {
      className: clsx_m_default(classes.tooltip, classes["tooltipPlacement".concat(capitalize(placementInner.split("-")[0]))], ignoreNonTouchEvents.current && classes.touch, arrow2 && classes.tooltipArrow)
    }, title, arrow2 ? /* @__PURE__ */ createElement8("span", {
      className: classes.arrow,
      ref: setArrowRef
    }) : null));
  }));
});
true ? Tooltip.propTypes = {
  arrow: import_prop_types17.default.bool,
  children: import_utils17.elementAcceptingRef.isRequired,
  classes: import_prop_types17.default.object,
  className: import_prop_types17.default.string,
  disableFocusListener: import_prop_types17.default.bool,
  disableHoverListener: import_prop_types17.default.bool,
  disableTouchListener: import_prop_types17.default.bool,
  enterDelay: import_prop_types17.default.number,
  enterNextDelay: import_prop_types17.default.number,
  enterTouchDelay: import_prop_types17.default.number,
  id: import_prop_types17.default.string,
  interactive: import_prop_types17.default.bool,
  leaveDelay: import_prop_types17.default.number,
  leaveTouchDelay: import_prop_types17.default.number,
  onClose: import_prop_types17.default.func,
  onOpen: import_prop_types17.default.func,
  open: import_prop_types17.default.bool,
  placement: import_prop_types17.default.oneOf(["bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  PopperComponent: import_prop_types17.default.elementType,
  PopperProps: import_prop_types17.default.object,
  title: import_prop_types17.default.node.isRequired,
  TransitionComponent: import_prop_types17.default.elementType,
  TransitionProps: import_prop_types17.default.object
} : void 0;
var Tooltip_default = withStyles_default2(styles9, {
  name: "MuiTooltip",
  flip: false
})(Tooltip);

// node_modules/@ringcentral/juno/es6/foundation/hooks/useForkRef/useForkRef.js
var useForkRef2 = useForkRef;

// node_modules/@ringcentral/juno/es6/foundation/utils/classes.js
var RcClasses = function(classes, prefix2) {
  return classes.reduce(function(prev, curr) {
    prev[curr] = prefix2 + "-" + curr;
    return prev;
  }, {});
};

// node_modules/@ringcentral/juno/es6/foundation/utils/withDeprecatedCheck.js
import React25, { forwardRef as forwardRef9, useEffect as useEffect13 } from "react";

// node_modules/@ringcentral/juno/es6/foundation/utils/isShowJunoWarning.js
var isShowJunoWarning = !rcConfiguration.WARNING_IGNORE && true;

// node_modules/@ringcentral/juno/es6/foundation/utils/withDeprecatedCheck.js
var __assign = function() {
  __assign = Object.assign || function(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p))
          t2[p] = s2[p];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
function showDeprecated(_a2) {
  var component = _a2.component, target = _a2.target, time = _a2.time, comment = _a2.comment, message = _a2.message, level = _a2.level;
  var showMessage = message || "props => (" + target + ") be deprecated, that will be remove in " + time + " release" + (comment ? ", " + comment : "");
  rcConfiguration.WARNING_FUNCTION("JUNO [" + component + "]: " + showMessage, {
    level
  });
}
function logInDev(args, cb) {
  if (isShowJunoWarning) {
    showDeprecated(args);
    cb === null || cb === void 0 ? void 0 : cb();
  }
}
function withDeprecatedCheck(Component3, depreciates, source) {
  if (!isShowJunoWarning) {
    return Component3;
  }
  var name = Component3.displayName || source || "";
  return forwardRef9(function(props, ref) {
    useEffect13(function() {
      depreciates.forEach(function(_a2) {
        var prop = _a2.prop, comment = _a2.comment, time = _a2.time;
        var _b;
        if (props[prop] !== void 0 && props[prop] !== ((_b = Component3.defaultProps) === null || _b === void 0 ? void 0 : _b[prop])) {
          showDeprecated({
            component: name,
            target: prop,
            time,
            comment
          });
        }
      });
    }, []);
    return React25.createElement(Component3, __assign({}, props, { ref }));
  });
}

// node_modules/@ringcentral/juno/es6/foundation/utils/combineProps.js
var import_isPlainObject = __toModule(require_isPlainObject());
import { isValidElement as isValidElement3 } from "react";
var __assign2 = function() {
  __assign2 = Object.assign || function(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p))
          t2[p] = s2[p];
    }
    return t2;
  };
  return __assign2.apply(this, arguments);
};
var __read3 = function(o2, n2) {
  var m = typeof Symbol === "function" && o2[Symbol.iterator];
  if (!m)
    return o2;
  var i2 = m.call(o2), r2, ar = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done)
      ar.push(r2.value);
  } catch (error3) {
    e2 = { error: error3 };
  } finally {
    try {
      if (r2 && !r2.done && (m = i2["return"]))
        m.call(i2);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
};
var __spread = function() {
  for (var ar = [], i2 = 0; i2 < arguments.length; i2++)
    ar = ar.concat(__read3(arguments[i2]));
  return ar;
};
var combineProps = function(baseProps, newProps, coverPropKeys) {
  return innerCombineProps({
    baseProps,
    newProps,
    coverPropKeys
  });
};
var combineClasses = function(baseClasses, newClasses) {
  return innerCombineProps({
    baseProps: baseClasses,
    newProps: newClasses,
    combineAllString: true
  });
};
var innerCombineProps = function(params) {
  var baseProps = params.baseProps, newProps = params.newProps;
  if (!newProps || Object.keys(newProps).length === 0) {
    return baseProps;
  }
  var outputProps = mergeChildProps(params);
  return __assign2(__assign2({}, newProps), outputProps);
};
function mergeChildProps(_a2) {
  var baseProps = _a2.baseProps, newProps = _a2.newProps, combineAllString = _a2.combineAllString, coverPropKeys = _a2.coverPropKeys;
  var result = Object.keys(baseProps || {}).reduce(function(output, curr) {
    var prop = baseProps[curr];
    var propTo = newProps[curr];
    if (propTo !== void 0) {
      switch (typeof prop) {
        case "undefined":
          output[curr] = propTo;
          break;
        case "object": {
          if (!isValidElement3(propTo) && !isValidElement3(prop) && (0, import_isPlainObject.default)(propTo) && (0, import_isPlainObject.default)(prop)) {
            output[curr] = mergeChildProps({
              baseProps: prop,
              newProps: propTo || {},
              combineAllString: combineAllString || curr === "classes"
            });
          } else {
            output[curr] = propTo;
          }
          break;
        }
        case "string":
          if (combineAllString || curr === "className") {
            output[curr] = [prop, propTo].filter(function(x2) {
              return typeof x2 === "string" && x2;
            }).join(" ");
          } else {
            output[curr] = propTo;
          }
          break;
        case "boolean":
        case "symbol":
        case "bigint":
        case "number":
          output[curr] = propTo;
          break;
        case "function":
          if (coverPropKeys && coverPropKeys.includes(curr) && propTo) {
            output[curr] = propTo;
          } else {
            output[curr] = function() {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              propTo === null || propTo === void 0 ? void 0 : propTo.apply(void 0, __spread(args));
              prop === null || prop === void 0 ? void 0 : prop.apply(void 0, __spread(args));
            };
          }
          break;
        default:
      }
    } else {
      output[curr] = prop;
    }
    return output;
  }, {});
  if (Object.keys(result).length === 0) {
    return void 0;
  }
  return __assign2(__assign2({}, newProps), result);
}

// node_modules/@ringcentral/juno/es6/foundation/utils/deepmerge.js
var import_utils18 = __toModule(require_utils());
var __read4 = function(o2, n2) {
  var m = typeof Symbol === "function" && o2[Symbol.iterator];
  if (!m)
    return o2;
  var i2 = m.call(o2), r2, ar = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done)
      ar.push(r2.value);
  } catch (error3) {
    e2 = { error: error3 };
  } finally {
    try {
      if (r2 && !r2.done && (m = i2["return"]))
        m.call(i2);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
};
var __spread2 = function() {
  for (var ar = [], i2 = 0; i2 < arguments.length; i2++)
    ar = ar.concat(__read4(arguments[i2]));
  return ar;
};
function deepmerge7() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return import_utils18.deepmerge.apply(void 0, __spread2(args));
}

// node_modules/@ringcentral/juno/es6/foundation/utils/isRcElement.js
import { isValidElement as isValidElement4 } from "react";
function isRcElement(element, names) {
  var _a2;
  return isValidElement4(element) && names.indexOf((_a2 = element.type) === null || _a2 === void 0 ? void 0 : _a2.displayName) !== -1;
}

// node_modules/@ringcentral/juno/es6/foundation/utils/parseColor.js
function parseColor(color, defaultColor, useMain) {
  if (useMain === void 0) {
    useMain = true;
  }
  if (!color && defaultColor !== void 0) {
    return defaultColor;
  }
  var result = ["primary", "main"];
  if (color) {
    if (color instanceof Array) {
      result = color;
    } else if (typeof color === "string") {
      var colors = color.split(".");
      result = colors;
    } else {
      return color;
    }
  }
  if (useMain) {
    if (!result[0]) {
      result[0] = "primary";
    }
    if (!result[1]) {
      result[1] = "main";
    }
  }
  return result;
}

// node_modules/@ringcentral/juno/es6/foundation/utils/removeClassName.js
function removeClassName(elmRef, removeClass) {
  var elm = elmRef.current;
  if (!elm)
    return;
  if (elm.className.includes(removeClass)) {
    elm.className = cleanClass(elm, removeClass);
  }
  var icons = elm.querySelectorAll("." + removeClass);
  if ((icons === null || icons === void 0 ? void 0 : icons.length) > 0) {
    icons.forEach(function(x2) {
      return x2.className = cleanClass(x2, removeClass);
    });
  }
}
function cleanClass(elm, removeClass) {
  return elm.className.replace(removeClass, "").trim();
}

// node_modules/@ringcentral/juno/es6/foundation/hooks/useRefState/useRefState.js
import { useRef as useRef11 } from "react";
var useRefState = function(value, customUpdate) {
  var forceUpdate = customUpdate !== null && customUpdate !== void 0 ? customUpdate : useForceUpdate();
  var innerValueRef = useRef11(value);
  var setInnerValue = useEventCallback2(function(toValue2, isUpdate) {
    if (isUpdate === void 0) {
      isUpdate = true;
    }
    innerValueRef.current = toValue2;
    if (isUpdate) {
      forceUpdate();
    }
  });
  return [innerValueRef, setInnerValue];
};

// node_modules/@ringcentral/juno/es6/foundation/theme/assets/breakpoints.json
var keys2 = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl"
];
var values3 = {
  xs: 0,
  sm: 641,
  md: 960,
  lg: 1280,
  xl: 1920
};
var breakpoints_default = {
  keys: keys2,
  values: values3
};

// node_modules/@ringcentral/juno/es6/foundation/theme/assets/opacity.json
var _8 = 0.08;
var _2 = 0.12;
var _6 = 0.16;
var _4 = 0.24;
var _22 = 0.32;
var _0 = 0.4;
var _82 = 0.48;
var _62 = 0.56;
var _42 = 0.64;
var _23 = 0.72;
var _02 = 0.8;
var _83 = 0.88;
var _63 = 0.96;
var opacity_default = {
  "08": _8,
  "12": _2,
  "16": _6,
  "24": _4,
  "32": _22,
  "40": _0,
  "48": _82,
  "56": _62,
  "64": _42,
  "72": _23,
  "80": _02,
  "88": _83,
  "96": _63
};

// node_modules/@ringcentral/juno/es6/foundation/theme/assets/palette.dark.json
var action = {
  grayDark: "#FFFFFF",
  grayLight: "#A0A2A9",
  primary: "#729AFF"
};
var avatar = {
  ash: "#666666",
  blueberry: "#5A5ABF",
  brass: "#8E6B2B",
  global: "#6990FD",
  gold: "#7A7000",
  lake: "#1A70C1",
  oasis: "#04549F",
  pear: "#3C7E44",
  persimmon: "#A14B00",
  sage: "#047C68",
  tomato: "#C93637"
};
var content = {
  brand: "#729AFF"
};
var danger = {
  b01: "#391D19",
  b02: "#49241F",
  b03: "#D53C32",
  b04: "#D53C32",
  f01: "#49241F",
  f02: "#E68B85",
  f11: "#E68B85"
};
var dialHeader = {
  avatarBg: "#6990FD",
  avatarIcon: "#FFFFFF",
  bg: "#383A43",
  focusBorder: "#729AFF",
  icon: "#FFFFFF",
  text: "#FFFFFF",
  textHint: "#898B94"
};
var disabled = {
  b01: "#44464E",
  f01: "#72747E",
  f02: "#54565E"
};
var error = {
  main: "#DD6057"
};
var header = {
  bgLeft: "#30323A",
  bgOverlay: "rgba(137,139,148,0.16)",
  bgOverlayDisabled: "rgba(137,139,148,0.08)",
  bgRight: "#30323A",
  border: "transparent",
  divider: "rgba(0,0,0,0.12)",
  fabBg: "#282A32",
  fabIcon: "#FFFFFF",
  focusBorder: "#FFFFFF",
  icon: "#FFFFFF",
  iconDisabled: "rgba(255,255,255,0.32)",
  text: "#FFFFFF",
  textHint: "#898B94"
};
var highContrast = "transparent";
var highlight = {
  b01: "#FFFFFF",
  b02: "#3E2A19",
  b03: "#884C12",
  f01: "#FF8800",
  f02: "#FF8800"
};
var info = {
  main: "#A0A2A9"
};
var informative = {
  b01: "#282A32",
  f01: "#222E49",
  f02: "#729AFF"
};
var interactive = {
  b01: "#29334C",
  b02: "#356AFD",
  f01: "#729AFF"
};
var label = {
  black02: "#FFFFFF",
  blue01: "#729AFF",
  blue02: "#729AFF",
  green01: "#72B375",
  green02: "#72B375",
  orange01: "#FF8800",
  orange02: "#FF8800",
  purple01: "#A89CD6",
  purple02: "#A89CD6",
  red01: "#E68B85",
  red02: "#E68B85",
  teal01: "#71ADBA",
  teal02: "#71ADBA",
  yellow01: "#D99F26",
  yellow02: "#D99F26"
};
var nav = {
  b01: "#1e2027",
  b02: "#282A32",
  bookmark: "#729AFF",
  ctlDefault: "#72747E",
  ctlSelected: "#729AFF",
  f01: "#898B94",
  f02: "#A0A2A9",
  f03: "#BCBDC2",
  f04: "#FFFFFF",
  iconDefault: "#FFFFFF",
  iconSelected: "#729AFF",
  line: "#383A43",
  mention: "#FF8800",
  menuBg: "#356AFD",
  menuText: "#FFFFFF"
};
var neutral = {
  b01: "#1e2027",
  b02: "#30323A",
  b03: "#383A43",
  b04: "#72747E",
  b05: "#72747E",
  b06: "#1e2027",
  elevation: "#282A32",
  f01: "#FFFFFF",
  f02: "#72747E",
  f03: "#898B94",
  f04: "#A0A2A9",
  f05: "#BCBDC2",
  f06: "#FFFFFF",
  f07: "#1e2027",
  f11: "#FFFFFF",
  l01: "#1e2027",
  l02: "#383A43",
  l03: "#54565E",
  l04: "#A0A2A9",
  transparent: "transparent"
};
var presence = {
  available: "#3D9A4A",
  busy: "#DD6057",
  invisible: "#72747E"
};
var primary = {
  main: "#356AFD"
};
var secondary = {
  main: "#884C12"
};
var subAction = "#729AFF";
var success = {
  b01: "#1C281B",
  b02: "#223221",
  b03: "#368440",
  b04: "#368440",
  b05: "#A0A2A9",
  f01: "#223221",
  f02: "#72B375",
  f11: "#72B375",
  main: "#3D9A4A"
};
var tab = {
  default: "#FFFFFF",
  selected: "#729AFF"
};
var type = "dark";
var umi = {
  bg: "#72747E",
  mentioned: "#FF8800",
  text: "#FFFFFF"
};
var vDanger = {
  f01: "#DD6057"
};
var vDisabled = {
  f01: "#54565E"
};
var vNeutral = {
  b01: "#1e2027",
  b02: "#282A32",
  b03: "#30323A",
  b04: "#383A43",
  f01: "#FFFFFF"
};
var warning2 = {
  b01: "#2B2416",
  b02: "#373D1B",
  b03: "#D99F26",
  f01: "#D99F26",
  f02: "#D99F26",
  f11: "#D99F26",
  main: "#74561D"
};
var palette_dark_default = {
  action,
  avatar,
  content,
  danger,
  dialHeader,
  disabled,
  error,
  header,
  highContrast,
  highlight,
  info,
  informative,
  interactive,
  label,
  nav,
  neutral,
  presence,
  primary,
  secondary,
  subAction,
  success,
  tab,
  type,
  umi,
  vDanger,
  vDisabled,
  vNeutral,
  warning: warning2
};

// node_modules/@ringcentral/juno/es6/foundation/theme/assets/palette.light.json
var action2 = {
  grayDark: "#494949",
  grayLight: "#666666",
  primary: "#066FAC"
};
var avatar2 = {
  ash: "#666666",
  blueberry: "#5A5ABF",
  brass: "#8E6B2B",
  global: "#509AC4",
  gold: "#7A7000",
  lake: "#1A70C1",
  oasis: "#04549F",
  pear: "#3C7E44",
  persimmon: "#A14B00",
  sage: "#047C68",
  tomato: "#C93637"
};
var content2 = {
  brand: "#066FAC"
};
var danger2 = {
  b01: "#FFF7F5",
  b02: "#FFE5E0",
  b03: "#E6413C",
  b04: "#D63E39",
  f01: "#FFE5E0",
  f02: "#BE3933",
  f11: "#F88878"
};
var dialHeader2 = {
  avatarBg: "#FFFFFF",
  avatarIcon: "#066FAC",
  bg: "#066FAC",
  focusBorder: "#FFFFFF",
  icon: "#FFFFFF",
  text: "#FFFFFF",
  textHint: "rgba(255,255,255,0.88)"
};
var disabled2 = {
  b01: "#B9B9B9",
  f01: "#FFFFFF",
  f02: "#B9B9B9"
};
var error2 = {
  main: "#D63E39"
};
var header2 = {
  bgLeft: "#066FAC",
  bgOverlay: "rgba(255,255,255,0.16)",
  bgOverlayDisabled: "rgba(255,255,255,0.08)",
  bgRight: "#509AC4",
  border: "transparent",
  divider: "rgba(0,0,0,0.12)",
  fabBg: "#FFFFFF",
  fabIcon: "#121212",
  focusBorder: "#FFFFFF",
  icon: "#FFFFFF",
  iconDisabled: "rgba(255,255,255,0.32)",
  text: "#FFFFFF",
  textHint: "rgba(255,255,255,0.48)"
};
var highContrast2 = "transparent";
var highlight2 = {
  b01: "#FF8800",
  b02: "#FFDFB1",
  b03: "#FF8800",
  f01: "#121212",
  f02: "#FF8800"
};
var info2 = {
  main: "#666666"
};
var informative2 = {
  b01: "#F6F9FC",
  f01: "#E3EBF4",
  f02: "#066FAC"
};
var interactive2 = {
  b01: "#E6F2F8",
  b02: "#066FAC",
  f01: "#066FAC"
};
var label2 = {
  black02: "#121212",
  blue01: "#066FAC",
  blue02: "#066FAC",
  green01: "#3C9949",
  green02: "#32773B",
  orange01: "#CD6E0D",
  orange02: "#A15600",
  purple01: "#8A77E3",
  purple02: "#6C5DAF",
  red01: "#E6413C",
  red02: "#BE3933",
  teal01: "#3093A4",
  teal02: "#2B727F",
  yellow01: "#B17D1A",
  yellow02: "#896219"
};
var nav2 = {
  b01: "#FFFFFF",
  b02: "#F9F9F9",
  bookmark: "#066FAC",
  ctlDefault: "#939393",
  ctlSelected: "#066FAC",
  f01: "#757575",
  f02: "#666666",
  f03: "#494949",
  f04: "#121212",
  iconDefault: "#121212",
  iconSelected: "#066FAC",
  line: "#E5E5E5",
  mention: "#FF8800",
  menuBg: "#066FAC",
  menuText: "#FFFFFF"
};
var neutral2 = {
  b01: "#FFFFFF",
  b02: "#F9F9F9",
  b03: "#F3F3F3",
  b04: "#666666",
  b05: "#494949",
  b06: "#000000",
  elevation: "#FFFFFF",
  f01: "#FFFFFF",
  f02: "#939393",
  f03: "#757575",
  f04: "#666666",
  f05: "#494949",
  f06: "#121212",
  f07: "#121212",
  f11: "#FFFFFF",
  l01: "#FFFFFF",
  l02: "#E5E5E5",
  l03: "#C7C7C7",
  l04: "#666666",
  transparent: "transparent"
};
var presence2 = {
  available: "#3C9949",
  busy: "#E6413C",
  invisible: "#939393"
};
var primary2 = {
  main: "#066FAC"
};
var secondary2 = {
  main: "#FF8800"
};
var subAction2 = "#066FAC";
var success2 = {
  b01: "#F0FCEF",
  b02: "#CEF4CE",
  b03: "#3C9949",
  b04: "#368541",
  b05: "#3C9949",
  f01: "#CEF4CE",
  f02: "#32773B",
  f11: "#46BE59",
  main: "#368541"
};
var tab2 = {
  default: "#121212",
  selected: "#066FAC"
};
var type2 = "light";
var umi2 = {
  bg: "#666666",
  mentioned: "#FF8800",
  text: "#FFFFFF"
};
var vDanger2 = {
  f01: "#DD6057"
};
var vDisabled2 = {
  f01: "#54565E"
};
var vNeutral2 = {
  b01: "#1e2027",
  b02: "#282A32",
  b03: "#30323A",
  b04: "#383A43",
  f01: "#FFFFFF"
};
var warning3 = {
  b01: "#FFF7EB",
  b02: "#FFE7C1",
  b03: "#F6AD16",
  f01: "#F6AD16",
  f02: "#896219",
  f11: "#F6AD16",
  main: "#F6AD16"
};
var palette_light_default = {
  action: action2,
  avatar: avatar2,
  content: content2,
  danger: danger2,
  dialHeader: dialHeader2,
  disabled: disabled2,
  error: error2,
  header: header2,
  highContrast: highContrast2,
  highlight: highlight2,
  info: info2,
  informative: informative2,
  interactive: interactive2,
  label: label2,
  nav: nav2,
  neutral: neutral2,
  presence: presence2,
  primary: primary2,
  secondary: secondary2,
  subAction: subAction2,
  success: success2,
  tab: tab2,
  type: type2,
  umi: umi2,
  vDanger: vDanger2,
  vDisabled: vDisabled2,
  vNeutral: vNeutral2,
  warning: warning3
};

// node_modules/@ringcentral/juno/es6/foundation/theme/assets/radius.json
var circle = "50%";
var lg = "4px";
var md = "3px";
var round3 = "100vw";
var sm = "2px";
var xl = "8px";
var xxl = "16px";
var zero = "0px";
var radius_default = {
  circle,
  lg,
  md,
  round: round3,
  sm,
  xl,
  xxl,
  zero
};

// node_modules/@ringcentral/juno/es6/foundation/theme/assets/shadows.json
var shadows_default2 = [
  "none",
  "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)",
  "0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)",
  "0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)",
  "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
  "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
  "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
  "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
  "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
  "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
  "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
  "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
  "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
  "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
  "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
  "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
  "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
  "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
  "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
  "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
  "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
  "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
  "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
  "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
  "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)"
];

// node_modules/@ringcentral/juno/es6/foundation/theme/assets/shape.json
var borderRadius = 4;
var shape_default2 = {
  borderRadius
};

// node_modules/@ringcentral/juno/es6/foundation/theme/assets/transition.json
var duration2 = {
  complex: 375,
  enteringScreen: 225,
  leavingScreen: 195,
  short: 250,
  shorter: 200,
  shortest: 150,
  standard: 300
};
var easing2 = {
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
};
var transition_default = {
  duration: duration2,
  easing: easing2
};

// node_modules/@ringcentral/juno/es6/foundation/theme/assets/typography.json
var body1 = {
  fontSize: "0.9375rem",
  fontWeight: 400,
  lineHeight: "22px"
};
var body2 = {
  fontSize: "0.9375rem",
  fontWeight: 700,
  lineHeight: "22px"
};
var button = {
  fontSize: "0.9375rem",
  fontWeight: 700,
  lineHeight: "20px",
  textTransform: "none"
};
var caption1 = {
  fontSize: "0.75rem",
  fontWeight: 400,
  lineHeight: "16px"
};
var caption2 = {
  fontSize: "0.75rem",
  fontWeight: 700,
  lineHeight: "16px"
};
var codeFontFamily = "Courier";
var display1 = {
  fontSize: "2.125rem",
  fontWeight: 400,
  lineHeight: "40px"
};
var display2 = {
  fontSize: "2.8125rem",
  fontWeight: 400,
  lineHeight: "56px"
};
var display3 = {
  fontSize: "3.5rem",
  fontWeight: 700,
  lineHeight: "72px"
};
var display4 = {
  fontSize: "6rem",
  fontWeight: 700,
  lineHeight: "112px"
};
var fontFamily = "Lato, Helvetica, Arial, sans-serif";
var fontSize = 14;
var fontWeightBold = 700;
var fontWeightLight = 300;
var fontWeightMedium = 500;
var fontWeightRegular = 400;
var headline1 = {
  fontSize: "1.5rem",
  fontWeight: 400,
  lineHeight: "32px"
};
var headline2 = {
  fontSize: "1.5rem",
  fontWeight: 700,
  lineHeight: "32px"
};
var htmlFontSize = 16;
var subheading1 = {
  fontSize: "1rem",
  fontWeight: 400,
  lineHeight: "24px"
};
var subheading2 = {
  fontSize: "1rem",
  fontWeight: 700,
  lineHeight: "24px"
};
var title1 = {
  fontSize: "1.25rem",
  fontWeight: 400,
  lineHeight: "28px"
};
var title2 = {
  fontSize: "1.25rem",
  fontWeight: 700,
  lineHeight: "28px"
};
var typography_default = {
  body1,
  body2,
  button,
  caption1,
  caption2,
  codeFontFamily,
  display1,
  display2,
  display3,
  display4,
  fontFamily,
  fontSize,
  fontWeightBold,
  fontWeightLight,
  fontWeightMedium,
  fontWeightRegular,
  headline1,
  headline2,
  htmlFontSize,
  subheading1,
  subheading2,
  title1,
  title2
};

// node_modules/@ringcentral/juno/es6/foundation/theme/assets/zIndex.json
var appBar = 1100;
var drawer = 1200;
var mobileStepper = 1e3;
var modal = 1300;
var snackbar = 1400;
var speedDial = 1050;
var tooltip = 1500;
var zIndex_default2 = {
  appBar,
  drawer,
  mobileStepper,
  modal,
  snackbar,
  speedDial,
  tooltip
};

// node_modules/@ringcentral/juno/es6/foundation/theme/createTheme.js
var __assign3 = function() {
  __assign3 = Object.assign || function(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p))
          t2[p] = s2[p];
    }
    return t2;
  };
  return __assign3.apply(this, arguments);
};
function createTheme2(options) {
  if (options === void 0) {
    options = {};
  }
  var _a2 = options.palette, paletteInput = _a2 === void 0 ? {} : _a2, _b = options.typography, typographyInput = _b === void 0 ? {} : _b, _c = options.opacity, opacityInput = _c === void 0 ? {} : _c, _d = options.radius, radiusInput = _d === void 0 ? {} : _d, _e2 = options.zIndex, zIndexInput = _e2 === void 0 ? {} : _e2, _f = options.breakpoints, breakpointsInput = _f === void 0 ? {} : _f, _g = options.shape, shapeInput = _g === void 0 ? {} : _g, _h = options.shadows, shadowsInput = _h === void 0 ? [] : _h, _j = options.transitions, transitionsInput = _j === void 0 ? {} : _j;
  var _breakpoints = Object.keys(breakpointsInput).length > 0 ? breakpointsInput : breakpoints_default;
  var _shadows = (shadowsInput === null || shadowsInput === void 0 ? void 0 : shadowsInput.length) > 0 ? shadowsInput : shadows_default2;
  var _palette = deepmerge7(paletteInput["type"] === "dark" ? palette_dark_default : palette_light_default, paletteInput);
  var theme = __assign3(__assign3({}, options), { spacing: 4, palette: _palette, typography: deepmerge7(typography_default, typographyInput), opacity: deepmerge7(opacity_default, opacityInput), radius: deepmerge7(radius_default, radiusInput), shadows: _shadows, transitions: deepmerge7(transition_default, transitionsInput), zIndex: deepmerge7(zIndex_default2, zIndexInput), breakpoints: _breakpoints, shape: deepmerge7(shape_default2, shapeInput) });
  return createMuiTheme(theme);
}
var createTheme_default2 = createTheme2;

// node_modules/@ringcentral/juno/es6/foundation/theme/ThemeProvider.js
var import_focus_visible = __toModule(require_focus_visible());
import React26 from "react";
var __assign4 = function() {
  __assign4 = Object.assign || function(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p))
          t2[p] = s2[p];
    }
    return t2;
  };
  return __assign4.apply(this, arguments);
};
var RcSubThemeProvider = function(_a2) {
  var themeProp = _a2.theme, children = _a2.children;
  var theme = createTheme_default2(themeProp);
  return React26.createElement(ThemeProvider_default, { theme }, React26.createElement(ThemeProvider2, { theme }, React26.createElement(React26.Fragment, null, children)));
};
var RcThemeProvider = function(props) {
  return React26.createElement(StylesProvider, { injectFirst: true }, React26.createElement(RcSubThemeProvider, __assign4({}, props)));
};

// node_modules/@ringcentral/juno/es6/foundation/theme/useThemeProps.js
function useThemeProps(_a2) {
  var props = _a2.props, name = _a2.name;
  var _b;
  var theme = RcUseTheme();
  return combineProps((_b = theme.props) === null || _b === void 0 ? void 0 : _b[name], props);
}

// node_modules/@ringcentral/juno/es6/foundation/styles/opacity.js
var import_colorManipulator4 = __toModule(require_colorManipulator());
function doAlpha(color, opacity, theme) {
  var alpha2 = String(opacity).indexOf(".") > -1 ? opacity : theme.palette.action.hoverOpacity * opacity;
  try {
    return (0, import_colorManipulator4.fade)(color, +alpha2.toFixed(2));
  } catch (error3) {
    logInDev({
      component: "setOpacity",
      message: "your color pass into setOpacity is error color, check your color again, please"
    });
    return color;
  }
}

// node_modules/@ringcentral/juno/es6/foundation/styles/newPalette.js
var __read5 = function(o2, n2) {
  var m = typeof Symbol === "function" && o2[Symbol.iterator];
  if (!m)
    return o2;
  var i2 = m.call(o2), r2, ar = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done)
      ar.push(r2.value);
  } catch (error3) {
    e2 = { error: error3 };
  } finally {
    try {
      if (r2 && !r2.done && (m = i2["return"]))
        m.call(i2);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
};
var __spread3 = function() {
  for (var ar = [], i2 = 0; i2 < arguments.length; i2++)
    ar = ar.concat(__read5(arguments[i2]));
  return ar;
};
function palette2(category) {
  var keys3 = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    keys3[_i - 1] = arguments[_i];
  }
  return getPaletteColor.apply(void 0, __spread3([category], keys3));
}
function getPaletteColor() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var _a2 = __read5(args), category = _a2[0], keys3 = _a2.slice(1);
  return function(_a3) {
    var theme = _a3.theme;
    var colorMap = theme.palette[category];
    if (!colorMap) {
      return category;
    }
    if (typeof colorMap === "string") {
      return colorMap;
    }
    return keys3.reduce(function(acc, curr, i2) {
      if (i2 === keys3.length - 1) {
        if (typeof curr === "number") {
          return doAlpha(acc, curr, theme);
        }
      }
      return acc == null ? "" : acc[curr];
    }, colorMap);
  };
}
function getParsePaletteColor(color, defaultColor, useMain) {
  if (useMain === void 0) {
    useMain = true;
  }
  var args = parseColor(color, defaultColor, useMain);
  if (!args) {
    return function() {
      return null;
    };
  }
  if (typeof args === "string") {
    return function() {
      return args;
    };
  }
  if (typeof args === "function") {
    return args;
  }
  return getPaletteColor.apply(void 0, __spread3(args));
}

// node_modules/@ringcentral/juno/es6/foundation/styles/radius.js
function radius(name) {
  return function(_a2) {
    var theme = _a2.theme;
    return theme.radius[name];
  };
}

// node_modules/@ringcentral/juno/es6/foundation/styles/focusVisible.js
var __makeTemplateObject = function(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
};
var focusVisible = "&.focus-visible, &[data-focus-visible-added]";
var focusVisibleColor = palette2("interactive", "f01");
var shadowBorder = function(r2, color, inset, size) {
  if (r2 === void 0) {
    r2 = "zero";
  }
  if (color === void 0) {
    color = focusVisibleColor;
  }
  if (inset === void 0) {
    inset = true;
  }
  if (size === void 0) {
    size = 1;
  }
  return css2(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    box-shadow: ", " 0 0 0 ", "px ", ";\n    border-radius: ", ";\n    pointer-events: none;\n  }\n"], ["\n  &:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    box-shadow: ", " 0 0 0 ", "px ", ";\n    border-radius: ", ";\n    pointer-events: none;\n  }\n"])), inset ? "inset" : "", size, color, radius(r2));
};
var templateObject_1;

// node_modules/@ringcentral/juno/es6/foundation/styles/fakeBorder.js
var __makeTemplateObject2 = function(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
};
var fakeBorder = function(_a2) {
  var _b = _a2 === void 0 ? {} : _a2, pseudo = _b.pseudo, _c = _b.inset, inset = _c === void 0 ? true : _c, radius2 = _b.radius, _d = _b.size, size = _d === void 0 ? 1 : _d, _e2 = _b.color, color = _e2 === void 0 ? palette2("highContrast") : _e2, allowTransparent = _b.allowTransparent;
  return function(_a3) {
    var theme = _a3.theme;
    var colorValue = typeof color === "function" && theme ? color({ theme }) : color;
    if (!allowTransparent && colorValue === "transparent")
      return;
    if (pseudo) {
      return shadowBorder(radius2, colorValue, inset, size);
    }
    return css2(templateObject_12 || (templateObject_12 = __makeTemplateObject2(["\n      box-shadow: ", " 0 0 0 ", "px ", ";\n    "], ["\n      box-shadow: ", " 0 0 0 ", "px ", ";\n    "])), inset ? "inset" : "", size, colorValue);
  };
};
var templateObject_12;

// node_modules/@ringcentral/juno/es6/foundation/styles/px.js
function px2() {
  var values4 = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    values4[_i] = arguments[_i];
  }
  return values4.map(function(n2) {
    return n2 + "px";
  }).join(" ");
}

// node_modules/@ringcentral/juno/es6/foundation/styles/nonTouchHoverMedia.js
var nonTouchHoverMedia = "@media (hover: hover) and (pointer: fine)";

// node_modules/@ringcentral/juno/es6/foundation/styles/palette.js
var import_get = __toModule(require_get());
function setOpacity(colorFn, opacityName, reverse) {
  if (reverse === void 0) {
    reverse = false;
  }
  return function(props) {
    var theme = props.theme;
    var currentOpacity = theme.opacity[opacityName];
    return doAlpha(colorFn(props), reverse ? 1 - currentOpacity : currentOpacity, theme);
  };
}

// node_modules/@ringcentral/juno/es6/foundation/styles/paletteContrastText.js
function paletteContrastText(colorFn) {
  return function(_a2) {
    var theme = _a2.theme;
    return theme.palette.getContrastText(colorFn({ theme }));
  };
}

// node_modules/@ringcentral/juno/es6/foundation/styles/spacing.js
var __read6 = function(o2, n2) {
  var m = typeof Symbol === "function" && o2[Symbol.iterator];
  if (!m)
    return o2;
  var i2 = m.call(o2), r2, ar = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done)
      ar.push(r2.value);
  } catch (error3) {
    e2 = { error: error3 };
  } finally {
    try {
      if (r2 && !r2.done && (m = i2["return"]))
        m.call(i2);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
};
var __spread4 = function() {
  for (var ar = [], i2 = 0; i2 < arguments.length; i2++)
    ar = ar.concat(__read6(arguments[i2]));
  return ar;
};
function spacing2() {
  var values4 = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    values4[_i] = arguments[_i];
  }
  return function(_a2) {
    var theme = _a2.theme;
    var unit = theme.spacing(1);
    return px2.apply(void 0, __spread4(values4.map(function(n2) {
      return n2 * unit;
    })));
  };
}

// node_modules/@ringcentral/juno/es6/foundation/styles/typography.js
var __makeTemplateObject3 = function(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
};
function typographyProp(name, key) {
  if (name === "inherit") {
    return void 0;
  }
  return function(_a2) {
    var theme = _a2.theme;
    var themeOfTypography = theme.typography[name];
    if (typeof themeOfTypography !== "object") {
      throw new Error("Unexpected typography name: " + name);
    }
    return themeOfTypography[key];
  };
}
function typography(name, fontOnly) {
  if (fontOnly === void 0) {
    fontOnly = false;
  }
  var fontCss = css2(templateObject_13 || (templateObject_13 = __makeTemplateObject3(["\n    font-size: ", ";\n    font-weight: ", ";\n    font-family: ", ";\n  "], ["\n    font-size: ", ";\n    font-weight: ", ";\n    font-family: ", ";\n  "])), typographyProp(name, "fontSize"), typographyProp(name, "fontWeight"), function(_a2) {
    var theme = _a2.theme;
    return theme.typography["fontFamily"];
  });
  return fontOnly ? fontCss : css2(templateObject_2 || (templateObject_2 = __makeTemplateObject3(["\n        ", ";\n        line-height: ", ";\n      "], ["\n        ", ";\n        line-height: ", ";\n      "])), fontCss, typographyProp(name, "lineHeight"));
}
var templateObject_13;
var templateObject_2;

// node_modules/@ringcentral/juno/es6/components/Icon/Icon.js
import React29, { forwardRef as forwardRef12, memo as memo2 } from "react";

// node_modules/@ringcentral/juno/es6/components/Progress/CircularProgress/CircularProgress.js
import React27, { forwardRef as forwardRef10, useMemo as useMemo3 } from "react";

// node_modules/@ringcentral/juno/es6/components/Progress/CircularProgress/styles/CircularProgressStyle.js
var __makeTemplateObject4 = function(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
};
var CircularProgressStyle = function(props) {
  var color = props.color;
  var currColor = getParsePaletteColor(color);
  return css2(templateObject_14 || (templateObject_14 = __makeTemplateObject4(["\n    color: ", ";\n  "], ["\n    color: ", ";\n  "])), currColor);
};
var templateObject_14;

// node_modules/@ringcentral/juno/es6/components/Progress/CircularProgress/utils/CircularProgressUtils.js
var RcCircularProgressClasses = RcClasses([], "RcCircularProgress");

// node_modules/@ringcentral/juno/es6/components/Progress/CircularProgress/CircularProgress.js
var __makeTemplateObject5 = function(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
};
var __assign5 = function() {
  __assign5 = Object.assign || function(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p))
          t2[p] = s2[p];
    }
    return t2;
  };
  return __assign5.apply(this, arguments);
};
var __rest = function(s2, e2) {
  var t2 = {};
  for (var p in s2)
    if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
      t2[p] = s2[p];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
        t2[p[i2]] = s2[p[i2]];
    }
  return t2;
};
var _RcCircularProgress = forwardRef10(function(inProps, ref) {
  var props = useThemeProps({ props: inProps, name: "RcCircularProgress" });
  var classesProp = props.classes, color = props.color, rest = __rest(props, ["classes", "color"]);
  var classes = useMemo3(function() {
    return combineClasses(RcCircularProgressClasses, classesProp);
  }, [classesProp]);
  return React27.createElement(CircularProgress_default, __assign5({}, rest, { color: "inherit", ref, classes }));
});
var RcCircularProgress = styled_components_default(_RcCircularProgress)(templateObject_15 || (templateObject_15 = __makeTemplateObject5(["\n  ", "\n"], ["\n  ", "\n"])), CircularProgressStyle);
RcCircularProgress.defaultProps = {
  size: 24,
  color: "interactive.f01"
};
RcCircularProgress.displayName = "RcCircularProgress";
var templateObject_15;

// node_modules/@ringcentral/juno/es6/components/Icon/utils/IconUtils.js
var RcIconSizes = {
  xxxlarge: 36,
  xxlarge: 32,
  xlarge: 28,
  large: 24,
  medium: 20,
  small: 16,
  xsmall: 12,
  inherit: "inherit"
};
function switchSize(size) {
  switch (size) {
    case "extraSmall":
      logInDev({
        component: "RcIcon",
        message: "please change extraSmall to xsmall"
      });
      return "xsmall";
    case "moreLarge":
      logInDev({
        component: "RcIcon",
        message: "please change moreLarge to xlarge"
      });
      return "xlarge";
    case "mediumLarge":
      logInDev({
        component: "RcIcon",
        message: "please change mediumLarge to xxlarge"
      });
      return "xxlarge";
    case "extraLarge":
      logInDev({
        component: "RcIcon",
        message: "please change extraLarge to xxxlarge"
      });
      return "xxxlarge";
    default:
      return size;
  }
}

// node_modules/@ringcentral/juno/es6/components/Icon/styles/IconStyle.js
var __makeTemplateObject6 = function(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
};
var IconStyle = function(props) {
  var onClick = props.onClick, sizeProp = props.size, color = props.color, iconColorProp = props.iconColor, iconSize = props.iconSize;
  var size = switchSize(iconSize || sizeProp);
  var currentSize = RcIconSizes[size];
  var fontSize2 = typeof currentSize === "number" ? px2(currentSize) : currentSize;
  var iconColor = getParsePaletteColor(color || iconColorProp, null);
  return css2(templateObject_16 || (templateObject_16 = __makeTemplateObject6(["\n    display: inline-flex;\n    cursor: ", ";\n    font-size: ", ";\n    color: ", ";\n  "], ["\n    display: inline-flex;\n    cursor: ", ";\n    font-size: ", ";\n    color: ", ";\n  "])), onClick && "pointer", fontSize2, iconColor);
};
var templateObject_16;

// node_modules/@ringcentral/juno/es6/components/Icon/styles/iconSvg.js
import React28, { forwardRef as forwardRef11 } from "react";
var __makeTemplateObject7 = function(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
};
var __assign6 = function() {
  __assign6 = Object.assign || function(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p))
          t2[p] = s2[p];
    }
    return t2;
  };
  return __assign6.apply(this, arguments);
};
var __rest2 = function(s2, e2) {
  var t2 = {};
  for (var p in s2)
    if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
      t2[p] = s2[p];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
        t2[p[i2]] = s2[p[i2]];
    }
  return t2;
};
var _StyledSvg = forwardRef11(function(_a2, ref) {
  var children = _a2.children, props = __rest2(_a2, ["children"]);
  return React28.cloneElement(children, __assign6({ ref }, props));
});
var StyledSvg = styled_components_default(_StyledSvg)(templateObject_17 || (templateObject_17 = __makeTemplateObject7(["\n  width: 1em;\n  height: 1em;\n  stroke-width: 0;\n  stroke: currentColor;\n  fill: currentColor;\n  pointer-events: none;\n"], ["\n  width: 1em;\n  height: 1em;\n  stroke-width: 0;\n  stroke: currentColor;\n  fill: currentColor;\n  pointer-events: none;\n"])));
var templateObject_17;

// node_modules/@ringcentral/juno/es6/components/Icon/utils/IconService.js
import { useState as useState10, useEffect as useEffect14 } from "react";
var __read7 = function(o2, n2) {
  var m = typeof Symbol === "function" && o2[Symbol.iterator];
  if (!m)
    return o2;
  var i2 = m.call(o2), r2, ar = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done)
      ar.push(r2.value);
  } catch (error3) {
    e2 = { error: error3 };
  } finally {
    try {
      if (r2 && !r2.done && (m = i2["return"]))
        m.call(i2);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
};
var RcIconService = function() {
  function RcIconService2() {
    this._iconMapChangeListeners = [];
  }
  RcIconService2.getInstance = function() {
    if (!RcIconService2.instance) {
      RcIconService2.instance = new RcIconService2();
    }
    return RcIconService2.instance;
  };
  RcIconService2.setInstance = function(icons) {
    var _icon = RcIconService2.getInstance();
    _icon.setIconMap(icons);
    return _icon;
  };
  RcIconService2.prototype.setIconMap = function(iconMap) {
    if (iconMap === this._iconMap)
      return;
    this._iconMap = iconMap;
    this._iconMapChangeListeners.forEach(function(listener) {
      return listener(iconMap);
    });
  };
  RcIconService2.prototype.getIconMap = function() {
    return this._iconMap;
  };
  RcIconService2.prototype.onIconMapChange = function(listener) {
    this._iconMapChangeListeners.push(listener);
  };
  RcIconService2.prototype.offIconMapChange = function(listener) {
    this._iconMapChangeListeners = this._iconMapChangeListeners.filter(function(item) {
      return item !== listener;
    });
  };
  return RcIconService2;
}();
function useIconService() {
  var iconService = RcIconService.getInstance();
  var _a2 = __read7(useState10(iconService.getIconMap()), 2), iconMap = _a2[0], setIconMap = _a2[1];
  useEffect14(function() {
    iconService.onIconMapChange(setIconMap);
    return function() {
      iconService.offIconMapChange(setIconMap);
    };
  }, [iconService]);
  return { iconMap };
}

// node_modules/@ringcentral/juno/es6/components/Icon/Icon.js
var __makeTemplateObject8 = function(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
};
var __assign7 = function() {
  __assign7 = Object.assign || function(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p))
          t2[p] = s2[p];
    }
    return t2;
  };
  return __assign7.apply(this, arguments);
};
var __rest3 = function(s2, e2) {
  var t2 = {};
  for (var p in s2)
    if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
      t2[p] = s2[p];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
        t2[p[i2]] = s2[p[i2]];
    }
  return t2;
};
var _RcIcon = memo2(forwardRef12(function(inProps, ref) {
  var props = useThemeProps({ props: inProps, name: "RcIcon" });
  var loadingSize = props.loadingSize, useLoading = props.useLoading, iconColor = props.iconColor, iconSize = props.iconSize, icon = props.icon, desc = props.desc, className = props.className, _a2 = props.loading, loading = _a2 === void 0 ? useLoading : _a2, CircularProgressProps = props.CircularProgressProps, symbol = props.symbol, children = props.children, color = props.color, size = props.size, rest = __rest3(props, ["loadingSize", "useLoading", "iconColor", "iconSize", "icon", "desc", "className", "loading", "CircularProgressProps", "symbol", "children", "color", "size"]);
  var _b = useIconService().iconMap, iconMap = _b === void 0 ? {} : _b;
  var href = "";
  var Icon = null;
  var iconName = "";
  var renderDom;
  if (symbol) {
    if (typeof symbol === "object" && symbol.id) {
      href = "#" + symbol.id;
      iconName = "" + symbol.id;
    } else {
      Icon = symbol;
      renderDom = React29.createElement(Icon, null);
      iconName = symbol["iconName"];
    }
  } else if (typeof children === "string" || icon) {
    var childrenIconKey = children && children.toString() || icon || "";
    Icon = iconMap[childrenIconKey];
    iconName = childrenIconKey;
    if (Icon) {
      renderDom = React29.createElement(Icon, null);
    }
  } else {
    renderDom = children;
  }
  var _className = clsx_m_default(className, iconName, "icon");
  if (loading) {
    var progressSize = RcIconSizes[size];
    return React29.createElement(RcCircularProgress, __assign7({
      size: loadingSize || typeof progressSize === "string" ? "1em" : progressSize,
      ref
    }, CircularProgressProps));
  }
  return React29.createElement("span", __assign7({ className: _className }, rest, { ref }), renderDom && React29.createElement(StyledSvg, null, renderDom), href && React29.createElement(StyledSvg, null, React29.createElement("svg", { role: "img" }, !!desc && React29.createElement("title", null, desc), React29.createElement("use", { xlinkHref: href, href }))));
}));
var RcIcon = styled_components_default(withDeprecatedCheck(_RcIcon, [
  {
    prop: "icon",
    time: "2021-1",
    comment: "please use symbol to replace icon"
  },
  {
    prop: "children",
    time: "2021-1",
    comment: "please use symbol to replace children"
  },
  {
    prop: "iconSize",
    time: "2021-1",
    comment: "please use size"
  },
  {
    prop: "iconColor",
    time: "2021-1",
    comment: "please use color"
  },
  {
    prop: "useLoading",
    time: "2021-1",
    comment: "please use loading"
  },
  {
    prop: "loadingSize",
    time: "2021-1",
    comment: "please use CircularProgressProps={{ size: 24 }} to set custom loading size"
  },
  {
    prop: "desc",
    time: "2021-1",
    comment: "please use symbol"
  }
], "RcIcon"))(templateObject_18 || (templateObject_18 = __makeTemplateObject8(["\n  ", "\n"], ["\n  ", "\n"])), IconStyle);
RcIcon.defaultProps = {
  size: "large"
};
RcIcon.displayName = "RcIcon";
var templateObject_18;

// node_modules/@ringcentral/juno/es6/components/Tooltip/Tooltip.js
import React30, { forwardRef as forwardRef13, useLayoutEffect as useLayoutEffect5, useMemo as useMemo4, useRef as useRef13, useState as useState11 } from "react";

// node_modules/@ringcentral/juno/es6/components/Tooltip/styles/Mask.js
var __makeTemplateObject9 = function(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
};
var Mask = styled_components_default.span(templateObject_19 || (templateObject_19 = __makeTemplateObject9(["\n  display: inline-block;\n  outline: none;\n"], ["\n  display: inline-block;\n  outline: none;\n"])));
var templateObject_19;

// node_modules/@ringcentral/juno/es6/components/Tooltip/utils/TooltipUtils.js
var RcTooltipClasses = RcClasses([
  "popper",
  "tooltip",
  "arrow",
  "tooltipPlacementBottom",
  "tooltipPlacementLeft",
  "tooltipPlacementRight",
  "tooltipPlacementTop"
], "RcTooltip");
var RcTooltipTypography = {
  medium: typography("caption1"),
  large: typography("body1"),
  xlarge: typography("body1")
};
var RcTooltipSpace = {
  medium: spacing2(2),
  large: spacing2(3),
  xlarge: spacing2(3)
};
var RcTooltipPadding = {
  medium: spacing2(1, 2),
  large: spacing2(1, 2),
  xlarge: spacing2(3, 3)
};

// node_modules/@ringcentral/juno/es6/components/Tooltip/utils/useTooltipForceHide.js
import { useRef as useRef12 } from "react";
var __read8 = function(o2, n2) {
  var m = typeof Symbol === "function" && o2[Symbol.iterator];
  if (!m)
    return o2;
  var i2 = m.call(o2), r2, ar = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done)
      ar.push(r2.value);
  } catch (error3) {
    e2 = { error: error3 };
  } finally {
    try {
      if (r2 && !r2.done && (m = i2["return"]))
        m.call(i2);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
};
var useTooltipForceHide = function(_a2) {
  var tooltipForceHide = _a2.tooltipForceHide, openProp = _a2.open, onClose = _a2.onClose, onOpen = _a2.onOpen, ref = _a2.ref;
  var _b = __read8(useRefState(false), 2), openRef = _b[0], setOpen = _b[1];
  var isOverRef = useRef12(false);
  var openState = tooltipForceHide ? false : openProp !== null && openProp !== void 0 ? openProp : openRef.current;
  var prevOpenState = usePrevious(function() {
    return openState;
  });
  useChange(function() {
    if (tooltipForceHide === false && isOverRef.current === true) {
      openState = openProp !== null && openProp !== void 0 ? openProp : true;
    }
    if (tooltipForceHide && prevOpenState) {
      setOpen(false, false);
      onClose === null || onClose === void 0 ? void 0 : onClose({});
    } else if (openState) {
      setOpen(true, false);
      onOpen === null || onOpen === void 0 ? void 0 : onOpen({});
    }
  }, function() {
    return tooltipForceHide;
  });
  useEventListener(ref, "mouseover", function() {
    return isOverRef.current = true;
  });
  var leaveFn = function() {
    return isOverRef.current = false;
  };
  useEventListener(ref, "mouseleave", leaveFn);
  useEventListener(ref, "blur", leaveFn);
  var handleOpen = useEventCallback2(function(event) {
    setOpen(true);
    onOpen === null || onOpen === void 0 ? void 0 : onOpen(event);
  });
  var handleClose = useEventCallback2(function(event) {
    setOpen(false);
    onClose === null || onClose === void 0 ? void 0 : onClose(event);
  });
  return tooltipForceHide !== void 0 ? {
    disableFocusListener: tooltipForceHide,
    disableHoverListener: tooltipForceHide,
    disableTouchListener: tooltipForceHide,
    open: openState,
    onOpen: handleOpen,
    onClose: handleClose
  } : void 0;
};

// node_modules/@ringcentral/juno/es6/components/Tooltip/styles/StyledTooltip.js
var __makeTemplateObject10 = function(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
};
var tooltipTypography = function(_a2) {
  var size = _a2.size;
  return RcTooltipTypography[size];
};
var placementSpace = function(_a2) {
  var size = _a2.size;
  return RcTooltipSpace[size];
};
var tooltipPadding = function(_a2) {
  var size = _a2.size;
  return RcTooltipPadding[size];
};
var tooltipColor = function(_a2) {
  var color = _a2.color;
  return getParsePaletteColor(color);
};
var tooltipTextColor = function(_a2) {
  var textColor = _a2.textColor;
  return getParsePaletteColor(textColor);
};
var arrowSize = {
  vertical: css2(templateObject_110 || (templateObject_110 = __makeTemplateObject10(["\n    height: 0.4em;\n    width: 0.6em;\n  "], ["\n    height: 0.4em;\n    width: 0.6em;\n  "]))),
  horizontal: css2(templateObject_22 || (templateObject_22 = __makeTemplateObject10(["\n    height: 0.6em;\n    width: 0.4em;\n  "], ["\n    height: 0.6em;\n    width: 0.4em;\n  "])))
};
var marginOffset = "-0.4em";
var horizontalMarginTopAndMarginBottom = css2(templateObject_3 || (templateObject_3 = __makeTemplateObject10(["\n  margin-top: 3px;\n  margin-bottom: 3px;\n"], ["\n  margin-top: 3px;\n  margin-bottom: 3px;\n"])));
var tooltipStyle = function() {
  return css2(templateObject_4 || (templateObject_4 = __makeTemplateObject10(["\n    .", " {\n      ", ";\n      background-color: ", ";\n      color: ", ";\n      padding: ", ";\n      word-break: break-word;\n      position: relative;\n    }\n\n    .", ",\n      .", " {\n      margin: ", " 0;\n    }\n\n    .", ",\n      .", " {\n      margin: 0 ", ";\n    }\n\n    .", " {\n      color: ", ";\n    }\n\n    .", " {\n      .", " {\n        margin-bottom: ", ";\n        ", "\n      }\n    }\n\n    .", " {\n      .", " {\n        margin-top: ", ";\n        ", "\n      }\n    }\n\n    .", " {\n      .", " {\n        margin-right: ", ";\n        ", "\n        ", "\n      }\n    }\n\n    .", " {\n      .", " {\n        margin-left: ", ";\n        ", "\n        ", "\n      }\n    }\n  "], ["\n    .", " {\n      ", ";\n      background-color: ", ";\n      color: ", ";\n      padding: ", ";\n      word-break: break-word;\n      position: relative;\n    }\n\n    .", ",\n      .", " {\n      margin: ", " 0;\n    }\n\n    .", ",\n      .", " {\n      margin: 0 ", ";\n    }\n\n    .", " {\n      color: ", ";\n    }\n\n    .", " {\n      .", " {\n        margin-bottom: ", ";\n        ", "\n      }\n    }\n\n    .", " {\n      .", " {\n        margin-top: ", ";\n        ", "\n      }\n    }\n\n    .", " {\n      .", " {\n        margin-right: ", ";\n        ", "\n        ", "\n      }\n    }\n\n    .", " {\n      .", " {\n        margin-left: ", ";\n        ", "\n        ", "\n      }\n    }\n  "])), RcTooltipClasses.tooltip, tooltipTypography, tooltipColor, tooltipTextColor, tooltipPadding, RcTooltipClasses.tooltipPlacementTop, RcTooltipClasses.tooltipPlacementBottom, placementSpace, RcTooltipClasses.tooltipPlacementRight, RcTooltipClasses.tooltipPlacementLeft, placementSpace, RcTooltipClasses.arrow, tooltipColor, RcTooltipClasses.tooltipPlacementTop, RcTooltipClasses.arrow, marginOffset, arrowSize.vertical, RcTooltipClasses.tooltipPlacementBottom, RcTooltipClasses.arrow, marginOffset, arrowSize.vertical, RcTooltipClasses.tooltipPlacementLeft, RcTooltipClasses.arrow, marginOffset, arrowSize.horizontal, horizontalMarginTopAndMarginBottom, RcTooltipClasses.tooltipPlacementRight, RcTooltipClasses.arrow, marginOffset, arrowSize.horizontal, horizontalMarginTopAndMarginBottom);
};
var templateObject_110;
var templateObject_22;
var templateObject_3;
var templateObject_4;

// node_modules/@ringcentral/juno/es6/components/Tooltip/Tooltip.js
var __makeTemplateObject11 = function(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
};
var __assign8 = function() {
  __assign8 = Object.assign || function(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p))
          t2[p] = s2[p];
    }
    return t2;
  };
  return __assign8.apply(this, arguments);
};
var __rest4 = function(s2, e2) {
  var t2 = {};
  for (var p in s2)
    if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
      t2[p] = s2[p];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
        t2[p[i2]] = s2[p[i2]];
    }
  return t2;
};
var __read9 = function(o2, n2) {
  var m = typeof Symbol === "function" && o2[Symbol.iterator];
  if (!m)
    return o2;
  var i2 = m.call(o2), r2, ar = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done)
      ar.push(r2.value);
  } catch (error3) {
    e2 = { error: error3 };
  } finally {
    try {
      if (r2 && !r2.done && (m = i2["return"]))
        m.call(i2);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
};
var _RcTooltip = forwardRef13(function(inProps, ref) {
  var props = useThemeProps({ props: inProps, name: "RcTooltip" });
  var children = props.children, tooltipForceHide = props.tooltipForceHide, openProp = props.open, onOpen = props.onOpen, onClose = props.onClose, classNameProp = props.className, classesProp = props.classes, PopperPropsProp = props.PopperProps, textColor = props.textColor, color = props.color, ignorePointer = props.ignorePointer, size = props.size, maskProps = props.maskProps, title = props.title, injectGlobalStyle = props.injectGlobalStyle, rest = __rest4(props, ["children", "tooltipForceHide", "open", "onOpen", "onClose", "className", "classes", "PopperProps", "textColor", "color", "ignorePointer", "size", "maskProps", "title", "injectGlobalStyle"]);
  var externalWindow = useRcPortalWindowContext().externalWindow;
  var _a2 = __read9(useState11(false), 2), isDisabledButton = _a2[0], setIsDisabledButton = _a2[1];
  var innerRef = useRef13(null);
  var tooltipRef = useForkRef2(ref, innerRef);
  var classes = useMemo4(function() {
    return combineClasses(combineClasses({ popper: classNameProp }, RcTooltipClasses), classesProp);
  }, [classNameProp, classesProp]);
  var PopperProps = useMemo4(function() {
    return combineProps({
      container: externalWindow === null || externalWindow === void 0 ? void 0 : externalWindow.document.body
    }, PopperPropsProp);
  }, [PopperPropsProp, externalWindow === null || externalWindow === void 0 ? void 0 : externalWindow.document.body]);
  var forceHideAdditionProps = useTooltipForceHide({
    ref: innerRef,
    tooltipForceHide,
    open: openProp,
    onClose,
    onOpen
  });
  var additionProp = forceHideAdditionProps !== null && forceHideAdditionProps !== void 0 ? forceHideAdditionProps : {
    open: openProp,
    onOpen,
    onClose
  };
  useLayoutEffect5(function() {
    var childNode = innerRef.current;
    if (isDisabledButton && childNode && childNode.tagName.toLowerCase() === "button" && childNode.disabled) {
      setIsDisabledButton(true);
      logInDev({
        component: "RcTooltip",
        message: "You have set a tooltip on disabled button, A disabled element does not fire events."
      });
    } else if (isDisabledButton) {
      setIsDisabledButton(false);
    }
  });
  return React30.createElement(Tooltip_default, __assign8({ ref: tooltipRef, title: isDisabledButton ? "" : title, arrow: true, classes, PopperProps }, additionProp, rest), ignorePointer ? React30.createElement(Mask, __assign8({}, maskProps), children) : children);
});
var RcTooltip = styled_components_default(withDeprecatedCheck(_RcTooltip, [
  {
    prop: "injectGlobalStyle",
    time: "2021-3",
    comment: "@deprecated now need anymore */"
  }
], "RcTooltip"))(templateObject_111 || (templateObject_111 = __makeTemplateObject11(["\n  ", ";\n"], ["\n  ", ";\n"])), tooltipStyle);
RcTooltip.defaultProps = {
  placement: "bottom",
  color: "neutral.b04",
  textColor: "neutral.f01",
  size: "large"
};
RcTooltip.displayName = "RcTooltip";
var templateObject_111;

// node_modules/@ringcentral/juno/es6/components/Tooltip/withTooltip/withTooltip.js
import React31, { forwardRef as forwardRef14 } from "react";
var __assign9 = function() {
  __assign9 = Object.assign || function(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p))
          t2[p] = s2[p];
    }
    return t2;
  };
  return __assign9.apply(this, arguments);
};
var __rest5 = function(s2, e2) {
  var t2 = {};
  for (var p in s2)
    if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
      t2[p] = s2[p];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
        t2[p[i2]] = s2[p[i2]];
    }
  return t2;
};
function withTooltip(Component3) {
  return forwardRef14(function(props, ref) {
    var title = props.title, useRcTooltip = props.useRcTooltip, TooltipProps = props.TooltipProps, rest = __rest5(props, ["title", "useRcTooltip", "TooltipProps"]);
    if (title && useRcTooltip) {
      return React31.createElement(RcTooltip, __assign9({ title }, TooltipProps), React31.createElement(Component3, __assign9({}, rest, { ref })));
    }
    return React31.createElement(Component3, __assign9({ title }, rest, { ref }));
  });
}

// node_modules/@ringcentral/juno/es6/components/Buttons/Button/utils/ButtonUtils.js
var RcButtonClasses = RcClasses(["disabled", "contained", "text", "outlined", "endIcon", "startIcon"], "RcButton");
var RcButtonColors = {
  primary: palette2("interactive", "b02"),
  secondary: palette2("highlight", "b03"),
  negative: palette2("danger", "b04"),
  positive: palette2("success", "b04"),
  action: palette2("neutral", "elevation"),
  neutral: palette2("neutral", "b04")
};
var RcButtonTextColors = {
  primary: palette2("interactive", "f01"),
  secondary: palette2("highlight", "f02"),
  negative: palette2("danger", "f02"),
  positive: palette2("success", "f02"),
  action: palette2("neutral", "f01"),
  neutral: palette2("neutral", "f04")
};
var RcButtonTypographies = {
  xsmall: "caption1",
  small: "caption2",
  medium: "body2",
  large: "body2",
  xlarge: "subheading2"
};
var RcButtonHeights = {
  xsmall: 24,
  small: 28,
  medium: 32,
  large: 36,
  xlarge: 48
};
var RcButtonMinWidths = {
  xsmall: 0,
  small: 0,
  medium: 88,
  large: 96,
  xlarge: 140
};
var RcButtonPadding = {
  xsmall: 2,
  small: 4,
  medium: 3,
  large: 4,
  xlarge: 5
};
var RcButtonIconSpace = {
  xsmall: 1,
  small: 1.5,
  medium: 2,
  large: 2,
  xlarge: 3
};

// node_modules/@ringcentral/juno/es6/components/Buttons/Button/utils/getButtonIconSize.js
function getButtonIconSize(size) {
  switch (size) {
    case "xlarge":
      return "large";
    case "large":
      return "medium";
    case "small":
    case "medium":
      return "small";
    case "xsmall":
      return "xsmall";
    default:
      return "inherit";
  }
}

// node_modules/@ringcentral/juno/es6/components/Buttons/Button/styles/StyledButton.js
var __makeTemplateObject12 = function(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
};
var buttonColor = function(_a2) {
  var color = _a2.color;
  return RcButtonColors[color] || getParsePaletteColor(color);
};
var plainButtonTextColor = function(_a2) {
  var color = _a2.color;
  return RcButtonTextColors[color] || getParsePaletteColor(color);
};
var buttonTextColor = function(props) {
  return paletteContrastText(buttonColor(props));
};
var buttonHoverColor = function(props) {
  return setOpacity(buttonColor(props), "08");
};
var containedButtonHoverColor = function(props) {
  return setOpacity(buttonColor(props), "08", true);
};
var buttonStyle = function(props) {
  var variant = props.variant, size = props.size, radiusProp = props.radius, keepElevation = props.keepElevation, loading = props.loading, disabled3 = props.disabled, disabledVariant = props.disabledVariant;
  var isMask = loading || disabled3 && disabledVariant === "mask";
  var textDisabledColor = !isMask ? palette2("disabled", "f02") : void 0;
  var plainTextColor = plainButtonTextColor(props);
  var iconSpace = spacing2(RcButtonIconSpace[size]);
  var isPlain = variant === "plain";
  return css2(templateObject_7 || (templateObject_7 = __makeTemplateObject12(["\n    text-transform: none;\n    ", ";\n    text-align: center;\n    box-shadow: ", ";\n    border-radius: ", ";\n\n    ", ";\n\n    ", ";\n\n    .", " {\n      margin-right: ", ";\n\n      ", ";\n    }\n\n    .", " {\n      margin-left: ", ";\n\n      ", ";\n    }\n\n    &.", " {\n      color: ", ";\n\n      &.", " {\n        color: ", ";\n      }\n\n      ", " {\n        &:hover {\n          background-color: ", ";\n        }\n      }\n\n      ", ";\n    }\n\n    &.", " {\n      color: ", ";\n      background-color: ", ";\n\n      ", " {\n        &:hover {\n          background-color: ", ";\n        }\n      }\n\n      ", "\n    }\n\n    &.", " {\n      color: ", ";\n      border-color: ", ";\n      padding: ", ";\n\n      ", " {\n        &:hover {\n          background-color: ", ";\n        }\n      }\n\n      &.", " {\n        color: ", ";\n        border-color: ", ";\n      }\n\n      &:after {\n        top: -1px;\n        bottom: -1px;\n        left: -1px;\n        right: -1px;\n        border: 1px solid transparent;\n      }\n    }\n  "], [
    "\n    text-transform: none;\n    ",
    ";\n    text-align: center;\n    box-shadow: ",
    ";\n    border-radius: ",
    ";\n\n    ",
    ";\n\n    ",
    ";\n\n    .",
    " {\n      margin-right: ",
    ";\n\n      ",
    ";\n    }\n\n    .",
    " {\n      margin-left: ",
    ";\n\n      ",
    ";\n    }\n\n    &.",
    " {\n      color: ",
    ";\n\n      &.",
    " {\n        color: ",
    ";\n      }\n\n      ",
    " {\n        &:hover {\n          background-color: ",
    ";\n        }\n      }\n\n      ",
    ";\n    }\n\n    &.",
    " {\n      color: ",
    ";\n      background-color: ",
    ";\n\n      ",
    " {\n        &:hover {\n          background-color: ",
    ";\n        }\n      }\n\n      ",
    "\n    }\n\n    &.",
    " {\n      color: ",
    ";\n      border-color: ",
    ";\n      padding: ",
    ";\n\n      ",
    " {\n        &:hover {\n          background-color: ",
    ";\n        }\n      }\n\n      &.",
    " {\n        color: ",
    ";\n        border-color: ",
    ";\n      }\n\n      &:after {\n        top: -1px;\n        bottom: -1px;\n        left: -1px;\n        right: -1px;\n        border: 1px solid transparent;\n      }\n    }\n  "
  ])), typography(RcButtonTypographies[size], true), !keepElevation && "unset", radiusProp && radius(radiusProp), isMask && css2(templateObject_112 || (templateObject_112 = __makeTemplateObject12(["\n        &:after {\n          content: '';\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          height: 100%;\n          width: 100%;\n          display: block;\n          background: ", ";\n          width: 100%;\n          height: 100%;\n          border-radius: ", ";\n        }\n      "], ["\n        &:after {\n          content: '';\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          height: 100%;\n          width: 100%;\n          display: block;\n          background: ", ";\n          width: 100%;\n          height: 100%;\n          border-radius: ", ";\n        }\n      "])), setOpacity(palette2("neutral", "b01"), "32"), radius(radiusProp !== null && radiusProp !== void 0 ? radiusProp : "lg")), !isPlain && css2(templateObject_23 || (templateObject_23 = __makeTemplateObject12(["\n        min-width: ", ";\n        min-height: ", ";\n        padding: ", ";\n      "], ["\n        min-width: ", ";\n        min-height: ", ";\n        padding: ", ";\n      "])), px2(RcButtonMinWidths[size]), px2(RcButtonHeights[size]), spacing2(0, RcButtonPadding[size])), RcButtonClasses.startIcon, iconSpace, isPlain && css2(templateObject_32 || (templateObject_32 = __makeTemplateObject12(["\n          margin-left: 0;\n        "], ["\n          margin-left: 0;\n        "]))), RcButtonClasses.endIcon, iconSpace, isPlain && css2(templateObject_42 || (templateObject_42 = __makeTemplateObject12(["\n          margin-right: 0;\n        "], ["\n          margin-right: 0;\n        "]))), RcButtonClasses.text, plainButtonTextColor, RcButtonClasses.disabled, textDisabledColor, nonTouchHoverMedia, buttonHoverColor, isPlain && css2(templateObject_5 || (templateObject_5 = __makeTemplateObject12(["\n          padding: ", ";\n          min-width: unset;\n          line-height: 1;\n\n          ", " {\n            &:hover {\n              color: ", ";\n              background-color: transparent;\n            }\n          }\n\n          ", " {\n            ", "\n          }\n\n          &:active {\n            &.", " {\n              color: ", ";\n            }\n          }\n        "], ["\n          padding: ", ";\n          min-width: unset;\n          line-height: 1;\n\n          ", " {\n            &:hover {\n              color: ", ";\n              background-color: transparent;\n            }\n          }\n\n          ", " {\n            ", "\n          }\n\n          &:active {\n            &.", " {\n              color: ", ";\n            }\n          }\n        "])), spacing2(1), nonTouchHoverMedia, setOpacity(plainTextColor, "80"), focusVisible, fakeBorder({ color: plainButtonTextColor(props) }), RcButtonClasses.text, setOpacity(plainTextColor, "64")), RcButtonClasses.contained, buttonTextColor, buttonColor, nonTouchHoverMedia, containedButtonHoverColor, !isMask && css2(templateObject_6 || (templateObject_6 = __makeTemplateObject12(["\n          &.", " {\n            background-color: ", ";\n            color: ", ";\n          }\n        "], ["\n          &.", " {\n            background-color: ", ";\n            color: ", ";\n          }\n        "])), RcButtonClasses.disabled, palette2("disabled", "b01"), palette2("disabled", "f01")), RcButtonClasses.outlined, plainButtonTextColor, plainButtonTextColor, spacing2(0, RcButtonPadding[size] - 0.25), nonTouchHoverMedia, buttonHoverColor, RcButtonClasses.disabled, textDisabledColor, textDisabledColor);
};
var templateObject_112;
var templateObject_23;
var templateObject_32;
var templateObject_42;
var templateObject_5;
var templateObject_6;
var templateObject_7;

// node_modules/@ringcentral/juno/es6/components/Buttons/Button/Button.js
var __makeTemplateObject13 = function(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
};
var __assign10 = function() {
  __assign10 = Object.assign || function(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p))
          t2[p] = s2[p];
    }
    return t2;
  };
  return __assign10.apply(this, arguments);
};
var __rest6 = function(s2, e2) {
  var t2 = {};
  for (var p in s2)
    if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
      t2[p] = s2[p];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
        t2[p[i2]] = s2[p[i2]];
    }
  return t2;
};
var _RcButton = forwardRef15(function(inProps, ref) {
  var _a2, _b;
  var props = useThemeProps({ props: inProps, name: "RcButton" });
  var childrenProp = props.children, classesProp = props.classes, startIconProp = props.startIcon, endIconProp = props.endIcon, loading = props.loading, loadingMode = props.loadingMode, disabled3 = props.disabled, IconProps = props.IconProps, size = props.size, color = props.color, CircularProgressProps = props.CircularProgressProps, variant = props.variant, disabledVariant = props.disabledVariant, radius2 = props.radius, keepElevation = props.keepElevation, rest = __rest6(props, ["children", "classes", "startIcon", "endIcon", "loading", "loadingMode", "disabled", "IconProps", "size", "color", "CircularProgressProps", "variant", "disabledVariant", "radius", "keepElevation"]);
  var theme = RcUseTheme();
  var innerRef = useRef14(null);
  var buttonRef = useForkRef2(innerRef, ref);
  var isPlain = variant === "plain";
  var isReplace = loadingMode === "replace";
  var iconSize = getButtonIconSize(size);
  var loadingElm = useMemo5(function() {
    if (loading) {
      var progressSize = RcIconSizes[iconSize];
      return React32.createElement(RcCircularProgress, __assign10({ size: progressSize, color: "inherit" }, CircularProgressProps));
    }
    return void 0;
  }, [CircularProgressProps, iconSize, loading]);
  var getCurrIcon = useCallback7(function(currIcon) {
    if (isRcElement(currIcon, ["RcIcon"]) && currIcon.props.size === RcIcon.defaultProps.size) {
      return React32.cloneElement(currIcon, { size: iconSize });
    }
    return currIcon;
  }, [iconSize]);
  var startIcon = useMemo5(function() {
    if (loadingElm) {
      switch (loadingMode) {
        case "prefix":
          return loadingElm;
        case "replace":
          return void 0;
        default:
          break;
      }
    }
    if (startIconProp) {
      return getCurrIcon(startIconProp);
    }
    if (IconProps) {
      return React32.createElement(RcIcon, __assign10({ size: iconSize }, IconProps));
    }
    return void 0;
  }, [
    IconProps,
    getCurrIcon,
    iconSize,
    loadingElm,
    loadingMode,
    startIconProp
  ]);
  var endIcon = useMemo5(function() {
    if (loadingElm) {
      switch (loadingMode) {
        case "suffix":
          return loadingElm;
        case "replace":
          return void 0;
        default:
          break;
      }
    }
    if (endIconProp) {
      return getCurrIcon(endIconProp);
    }
    return void 0;
  }, [loadingElm, endIconProp, loadingMode, getCurrIcon]);
  var classes = useMemo5(function() {
    return combineClasses(RcButtonClasses, classesProp);
  }, [classesProp]);
  useLayoutEffect6(function() {
    removeClassName(innerRef, "MuiButton-iconSizeMedium");
  });
  return React32.createElement(Button_default, __assign10({ ref: buttonRef, disabled: disabled3 || loading, variant: isPlain ? void 0 : variant, disableRipple: ((_b = (_a2 = theme === null || theme === void 0 ? void 0 : theme.props) === null || _a2 === void 0 ? void 0 : _a2.MuiButton) === null || _b === void 0 ? void 0 : _b.disableRipple) || isPlain, startIcon, endIcon, classes }, rest), loading && isReplace ? loadingElm : childrenProp);
});
var RcButton = styled_components_default(withDeprecatedCheck(withTooltip(_RcButton), [
  {
    prop: "IconProps",
    time: "2021-4",
    comment: "@deprecated Icon, please use startIcon with `<RcIcon />` */"
  }
], "RcButton"))(templateObject_113 || (templateObject_113 = __makeTemplateObject13(["\n  ", "\n"], ["\n  ", "\n"])), buttonStyle);
RcButton.defaultProps = {
  size: "large",
  color: "primary",
  variant: "contained",
  loadingMode: "replace"
};
RcButton.displayName = "RcButton";
var templateObject_113;

// src/Battery.tsx
import React33 from "react";
var Battery = (_a2) => {
  var _b = _a2, { children2 } = _b, rest = __objRest(_b, ["children2"]);
  return /* @__PURE__ */ React33.createElement(RcThemeProvider, null, /* @__PURE__ */ React33.createElement(RcButton, __spreadValues({}, rest), children2));
};
export {
  Battery
};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */
/** @license Material-UI v4.11.2
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license Material-UI v4.11.4
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1-lts
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
