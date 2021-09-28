var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
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
        var ForwardRef2 = REACT_FORWARD_REF_TYPE;
        var Fragment2 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo2 = REACT_MEMO_TYPE;
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
        exports.ForwardRef = ForwardRef2;
        exports.Fragment = Fragment2;
        exports.Lazy = Lazy;
        exports.Memo = Memo2;
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
    var hasOwnProperty2 = Object.prototype.hasOwnProperty;
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
      var from2;
      var to = toObject(target);
      var symbols;
      for (var s2 = 1; s2 < arguments.length; s2++) {
        from2 = Object(arguments[s2]);
        for (var key in from2) {
          if (hasOwnProperty2.call(from2, key)) {
            to[key] = from2[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from2);
          for (var i2 = 0; i2 < symbols.length; i2++) {
            if (propIsEnumerable.call(from2, symbols[i2])) {
              to[symbols[i2]] = from2[symbols[i2]];
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
    function checkPropTypes(typeSpecs, values5, location, componentName, getStack) {
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
              error3 = typeSpecs[typeSpecName](values5, typeSpecName, componentName, location, null, ReactPropTypesSecret);
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
    module.exports = function(isValidElement6, throwOnDirectAccess) {
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
          if (!isValidElement6(propValue)) {
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
            if (propValue === null || isValidElement6(propValue)) {
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
        var ForwardRef2 = REACT_FORWARD_REF_TYPE;
        var Fragment2 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo2 = REACT_MEMO_TYPE;
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
        exports.ForwardRef = ForwardRef2;
        exports.Fragment = Fragment2;
        exports.Lazy = Lazy;
        exports.Memo = Memo2;
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
        var ForwardRef2 = REACT_FORWARD_REF_TYPE;
        var Fragment2 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo2 = REACT_MEMO_TYPE;
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
        exports.ForwardRef = ForwardRef2;
        exports.Fragment = Fragment2;
        exports.Lazy = Lazy;
        exports.Memo = Memo2;
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
    exports.default = chainPropTypes6;
    function chainPropTypes6(propType1, propType2) {
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
    exports.isPlainObject = isPlainObject3;
    exports.default = deepmerge9;
    var _extends22 = _interopRequireDefault(require_extends());
    var _typeof22 = _interopRequireDefault(require_typeof());
    function isPlainObject3(item) {
      return item && (0, _typeof22.default)(item) === "object" && item.constructor === Object;
    }
    function deepmerge9(target, source) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
        clone: true
      };
      var output = options.clone ? (0, _extends22.default)({}, target) : target;
      if (isPlainObject3(target) && isPlainObject3(source)) {
        Object.keys(source).forEach(function(key) {
          if (key === "__proto__") {
            return;
          }
          if (isPlainObject3(source[key]) && key in target) {
            output[key] = deepmerge9(target[key], source[key], options);
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
    function isClassComponent2(elementType) {
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
      if (typeof elementType === "function" && !isClassComponent2(elementType)) {
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
    var PropTypes31 = _interopRequireWildcard(require_prop_types());
    var _chainPropTypes = _interopRequireDefault(require_chainPropTypes());
    function isClassComponent2(elementType) {
      var _elementType$prototyp = elementType.prototype, prototype = _elementType$prototyp === void 0 ? {} : _elementType$prototyp;
      return Boolean(prototype.isReactComponent);
    }
    function elementTypeAcceptingRef3(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var safePropName = propFullName || propName;
      if (propValue == null) {
        return null;
      }
      var warningHint;
      if (typeof propValue === "function" && !isClassComponent2(propValue)) {
        warningHint = "Did you accidentally provide a plain function component instead?";
      }
      if (warningHint !== void 0) {
        return new Error("Invalid ".concat(location, " `").concat(safePropName, "` supplied to `").concat(componentName, "`. ") + "Expected an element type that can hold a ref. ".concat(warningHint, " ") + "For more information see https://material-ui.com/r/caveat-with-refs-guide");
      }
      return null;
    }
    var _default = (0, _chainPropTypes.default)(PropTypes31.elementType, elementTypeAcceptingRef3);
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

// node_modules/@material-ui/utils/getDisplayName.js
var require_getDisplayName = __commonJS({
  "node_modules/@material-ui/utils/getDisplayName.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getFunctionName = getFunctionName2;
    exports.default = getDisplayName4;
    var _typeof22 = _interopRequireDefault(require_typeof());
    var _reactIs = require_react_is2();
    var fnNameMatchRegex2 = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
    function getFunctionName2(fn) {
      var match2 = "".concat(fn).match(fnNameMatchRegex2);
      var name = match2 && match2[1];
      return name || "";
    }
    function getFunctionComponentName2(Component3) {
      var fallback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      return Component3.displayName || Component3.name || getFunctionName2(Component3) || fallback;
    }
    function getWrappedName2(outerType, innerType, wrapperName) {
      var functionName = getFunctionComponentName2(innerType);
      return outerType.displayName || (functionName !== "" ? "".concat(wrapperName, "(").concat(functionName, ")") : wrapperName);
    }
    function getDisplayName4(Component3) {
      if (Component3 == null) {
        return void 0;
      }
      if (typeof Component3 === "string") {
        return Component3;
      }
      if (typeof Component3 === "function") {
        return getFunctionComponentName2(Component3, "Component");
      }
      if ((0, _typeof22.default)(Component3) === "object") {
        switch (Component3.$$typeof) {
          case _reactIs.ForwardRef:
            return getWrappedName2(Component3, Component3.render, "ForwardRef");
          case _reactIs.Memo:
            return getWrappedName2(Component3, Component3.type, "memo");
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
    var refType7 = _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]);
    var _default = refType7;
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
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty2.call(value, symToStringTag), tag = value[symToStringTag];
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
    function overArg(func, transform3) {
      return function(arg) {
        return func(transform3(arg));
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
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    var objectCtorString = funcToString.call(Object);
    function isPlainObject3(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty2.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }
    module.exports = isPlainObject3;
  }
});

// node_modules/lodash/_arrayMap.js
var require_arrayMap = __commonJS({
  "node_modules/lodash/_arrayMap.js"(exports, module) {
    function arrayMap(array, iteratee) {
      var index3 = -1, length2 = array == null ? 0 : array.length, result = Array(length2);
      while (++index3 < length2) {
        result[index3] = iteratee(array[index3], index3, array);
      }
      return result;
    }
    module.exports = arrayMap;
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
      var length2 = array.length;
      while (length2--) {
        if (eq(array[length2][0], key)) {
          return length2;
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
      var index3 = -1, length2 = entries == null ? 0 : entries.length;
      this.clear();
      while (++index3 < length2) {
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

// node_modules/lodash/_stackClear.js
var require_stackClear = __commonJS({
  "node_modules/lodash/_stackClear.js"(exports, module) {
    var ListCache = require_ListCache();
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    module.exports = stackClear;
  }
});

// node_modules/lodash/_stackDelete.js
var require_stackDelete = __commonJS({
  "node_modules/lodash/_stackDelete.js"(exports, module) {
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    module.exports = stackDelete;
  }
});

// node_modules/lodash/_stackGet.js
var require_stackGet = __commonJS({
  "node_modules/lodash/_stackGet.js"(exports, module) {
    function stackGet(key) {
      return this.__data__.get(key);
    }
    module.exports = stackGet;
  }
});

// node_modules/lodash/_stackHas.js
var require_stackHas = __commonJS({
  "node_modules/lodash/_stackHas.js"(exports, module) {
    function stackHas(key) {
      return this.__data__.has(key);
    }
    module.exports = stackHas;
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
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
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
    function getValue4(object, key) {
      return object == null ? void 0 : object[key];
    }
    module.exports = getValue4;
  }
});

// node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "node_modules/lodash/_getNative.js"(exports, module) {
    var baseIsNative = require_baseIsNative();
    var getValue4 = require_getValue();
    function getNative(object, key) {
      var value = getValue4(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    module.exports = getNative;
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
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty2.call(data, key) ? data[key] : void 0;
    }
    module.exports = hashGet;
  }
});

// node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "node_modules/lodash/_hashHas.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty2.call(data, key);
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
      var index3 = -1, length2 = entries == null ? 0 : entries.length;
      this.clear();
      while (++index3 < length2) {
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
      var index3 = -1, length2 = entries == null ? 0 : entries.length;
      this.clear();
      while (++index3 < length2) {
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

// node_modules/lodash/_stackSet.js
var require_stackSet = __commonJS({
  "node_modules/lodash/_stackSet.js"(exports, module) {
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    var MapCache = require_MapCache();
    var LARGE_ARRAY_SIZE = 200;
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    module.exports = stackSet;
  }
});

// node_modules/lodash/_Stack.js
var require_Stack = __commonJS({
  "node_modules/lodash/_Stack.js"(exports, module) {
    var ListCache = require_ListCache();
    var stackClear = require_stackClear();
    var stackDelete = require_stackDelete();
    var stackGet = require_stackGet();
    var stackHas = require_stackHas();
    var stackSet = require_stackSet();
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module.exports = Stack;
  }
});

// node_modules/lodash/_arrayEach.js
var require_arrayEach = __commonJS({
  "node_modules/lodash/_arrayEach.js"(exports, module) {
    function arrayEach(array, iteratee) {
      var index3 = -1, length2 = array == null ? 0 : array.length;
      while (++index3 < length2) {
        if (iteratee(array[index3], index3, array) === false) {
          break;
        }
      }
      return array;
    }
    module.exports = arrayEach;
  }
});

// node_modules/lodash/_defineProperty.js
var require_defineProperty2 = __commonJS({
  "node_modules/lodash/_defineProperty.js"(exports, module) {
    var getNative = require_getNative();
    var defineProperty2 = function() {
      try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e2) {
      }
    }();
    module.exports = defineProperty2;
  }
});

// node_modules/lodash/_baseAssignValue.js
var require_baseAssignValue = __commonJS({
  "node_modules/lodash/_baseAssignValue.js"(exports, module) {
    var defineProperty2 = require_defineProperty2();
    function baseAssignValue(object, key, value) {
      if (key == "__proto__" && defineProperty2) {
        defineProperty2(object, key, {
          "configurable": true,
          "enumerable": true,
          "value": value,
          "writable": true
        });
      } else {
        object[key] = value;
      }
    }
    module.exports = baseAssignValue;
  }
});

// node_modules/lodash/_assignValue.js
var require_assignValue = __commonJS({
  "node_modules/lodash/_assignValue.js"(exports, module) {
    var baseAssignValue = require_baseAssignValue();
    var eq = require_eq();
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty2.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    module.exports = assignValue;
  }
});

// node_modules/lodash/_copyObject.js
var require_copyObject = __commonJS({
  "node_modules/lodash/_copyObject.js"(exports, module) {
    var assignValue = require_assignValue();
    var baseAssignValue = require_baseAssignValue();
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});
      var index3 = -1, length2 = props.length;
      while (++index3 < length2) {
        var key = props[index3];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
        if (newValue === void 0) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }
    module.exports = copyObject;
  }
});

// node_modules/lodash/_baseTimes.js
var require_baseTimes = __commonJS({
  "node_modules/lodash/_baseTimes.js"(exports, module) {
    function baseTimes(n2, iteratee) {
      var index3 = -1, result = Array(n2);
      while (++index3 < n2) {
        result[index3] = iteratee(index3);
      }
      return result;
    }
    module.exports = baseTimes;
  }
});

// node_modules/lodash/_baseIsArguments.js
var require_baseIsArguments = __commonJS({
  "node_modules/lodash/_baseIsArguments.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    module.exports = baseIsArguments;
  }
});

// node_modules/lodash/isArguments.js
var require_isArguments = __commonJS({
  "node_modules/lodash/isArguments.js"(exports, module) {
    var baseIsArguments = require_baseIsArguments();
    var isObjectLike = require_isObjectLike();
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var isArguments = baseIsArguments(function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty2.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    module.exports = isArguments;
  }
});

// node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS({
  "node_modules/lodash/stubFalse.js"(exports, module) {
    function stubFalse() {
      return false;
    }
    module.exports = stubFalse;
  }
});

// node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS({
  "node_modules/lodash/isBuffer.js"(exports, module) {
    var root = require_root();
    var stubFalse = require_stubFalse();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var isBuffer = nativeIsBuffer || stubFalse;
    module.exports = isBuffer;
  }
});

// node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS({
  "node_modules/lodash/_isIndex.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length2) {
      var type3 = typeof value;
      length2 = length2 == null ? MAX_SAFE_INTEGER : length2;
      return !!length2 && (type3 == "number" || type3 != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length2);
    }
    module.exports = isIndex;
  }
});

// node_modules/lodash/isLength.js
var require_isLength = __commonJS({
  "node_modules/lodash/isLength.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    module.exports = isLength;
  }
});

// node_modules/lodash/_baseIsTypedArray.js
var require_baseIsTypedArray = __commonJS({
  "node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isLength = require_isLength();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    module.exports = baseIsTypedArray;
  }
});

// node_modules/lodash/_baseUnary.js
var require_baseUnary = __commonJS({
  "node_modules/lodash/_baseUnary.js"(exports, module) {
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    module.exports = baseUnary;
  }
});

// node_modules/lodash/_nodeUtil.js
var require_nodeUtil = __commonJS({
  "node_modules/lodash/_nodeUtil.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e2) {
      }
    }();
    module.exports = nodeUtil;
  }
});

// node_modules/lodash/isTypedArray.js
var require_isTypedArray = __commonJS({
  "node_modules/lodash/isTypedArray.js"(exports, module) {
    var baseIsTypedArray = require_baseIsTypedArray();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module.exports = isTypedArray;
  }
});

// node_modules/lodash/_arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS({
  "node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
    var baseTimes = require_baseTimes();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isIndex = require_isIndex();
    var isTypedArray = require_isTypedArray();
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length2 = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty2.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length2)))) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = arrayLikeKeys;
  }
});

// node_modules/lodash/_isPrototype.js
var require_isPrototype = __commonJS({
  "node_modules/lodash/_isPrototype.js"(exports, module) {
    var objectProto = Object.prototype;
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    module.exports = isPrototype;
  }
});

// node_modules/lodash/_nativeKeys.js
var require_nativeKeys = __commonJS({
  "node_modules/lodash/_nativeKeys.js"(exports, module) {
    var overArg = require_overArg();
    var nativeKeys = overArg(Object.keys, Object);
    module.exports = nativeKeys;
  }
});

// node_modules/lodash/_baseKeys.js
var require_baseKeys = __commonJS({
  "node_modules/lodash/_baseKeys.js"(exports, module) {
    var isPrototype = require_isPrototype();
    var nativeKeys = require_nativeKeys();
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty2.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = baseKeys;
  }
});

// node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "node_modules/lodash/isArrayLike.js"(exports, module) {
    var isFunction2 = require_isFunction();
    var isLength = require_isLength();
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction2(value);
    }
    module.exports = isArrayLike;
  }
});

// node_modules/lodash/keys.js
var require_keys = __commonJS({
  "node_modules/lodash/keys.js"(exports, module) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeys = require_baseKeys();
    var isArrayLike = require_isArrayLike();
    function keys3(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    module.exports = keys3;
  }
});

// node_modules/lodash/_baseAssign.js
var require_baseAssign = __commonJS({
  "node_modules/lodash/_baseAssign.js"(exports, module) {
    var copyObject = require_copyObject();
    var keys3 = require_keys();
    function baseAssign(object, source) {
      return object && copyObject(source, keys3(source), object);
    }
    module.exports = baseAssign;
  }
});

// node_modules/lodash/_nativeKeysIn.js
var require_nativeKeysIn = __commonJS({
  "node_modules/lodash/_nativeKeysIn.js"(exports, module) {
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = nativeKeysIn;
  }
});

// node_modules/lodash/_baseKeysIn.js
var require_baseKeysIn = __commonJS({
  "node_modules/lodash/_baseKeysIn.js"(exports, module) {
    var isObject = require_isObject();
    var isPrototype = require_isPrototype();
    var nativeKeysIn = require_nativeKeysIn();
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object), result = [];
      for (var key in object) {
        if (!(key == "constructor" && (isProto || !hasOwnProperty2.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = baseKeysIn;
  }
});

// node_modules/lodash/keysIn.js
var require_keysIn = __commonJS({
  "node_modules/lodash/keysIn.js"(exports, module) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeysIn = require_baseKeysIn();
    var isArrayLike = require_isArrayLike();
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }
    module.exports = keysIn;
  }
});

// node_modules/lodash/_baseAssignIn.js
var require_baseAssignIn = __commonJS({
  "node_modules/lodash/_baseAssignIn.js"(exports, module) {
    var copyObject = require_copyObject();
    var keysIn = require_keysIn();
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }
    module.exports = baseAssignIn;
  }
});

// node_modules/lodash/_cloneBuffer.js
var require_cloneBuffer = __commonJS({
  "node_modules/lodash/_cloneBuffer.js"(exports, module) {
    var root = require_root();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length2 = buffer.length, result = allocUnsafe ? allocUnsafe(length2) : new buffer.constructor(length2);
      buffer.copy(result);
      return result;
    }
    module.exports = cloneBuffer;
  }
});

// node_modules/lodash/_copyArray.js
var require_copyArray = __commonJS({
  "node_modules/lodash/_copyArray.js"(exports, module) {
    function copyArray(source, array) {
      var index3 = -1, length2 = source.length;
      array || (array = Array(length2));
      while (++index3 < length2) {
        array[index3] = source[index3];
      }
      return array;
    }
    module.exports = copyArray;
  }
});

// node_modules/lodash/_arrayFilter.js
var require_arrayFilter = __commonJS({
  "node_modules/lodash/_arrayFilter.js"(exports, module) {
    function arrayFilter(array, predicate) {
      var index3 = -1, length2 = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index3 < length2) {
        var value = array[index3];
        if (predicate(value, index3, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    module.exports = arrayFilter;
  }
});

// node_modules/lodash/stubArray.js
var require_stubArray = __commonJS({
  "node_modules/lodash/stubArray.js"(exports, module) {
    function stubArray() {
      return [];
    }
    module.exports = stubArray;
  }
});

// node_modules/lodash/_getSymbols.js
var require_getSymbols = __commonJS({
  "node_modules/lodash/_getSymbols.js"(exports, module) {
    var arrayFilter = require_arrayFilter();
    var stubArray = require_stubArray();
    var objectProto = Object.prototype;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    module.exports = getSymbols;
  }
});

// node_modules/lodash/_copySymbols.js
var require_copySymbols = __commonJS({
  "node_modules/lodash/_copySymbols.js"(exports, module) {
    var copyObject = require_copyObject();
    var getSymbols = require_getSymbols();
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }
    module.exports = copySymbols;
  }
});

// node_modules/lodash/_arrayPush.js
var require_arrayPush = __commonJS({
  "node_modules/lodash/_arrayPush.js"(exports, module) {
    function arrayPush(array, values5) {
      var index3 = -1, length2 = values5.length, offset2 = array.length;
      while (++index3 < length2) {
        array[offset2 + index3] = values5[index3];
      }
      return array;
    }
    module.exports = arrayPush;
  }
});

// node_modules/lodash/_getSymbolsIn.js
var require_getSymbolsIn = __commonJS({
  "node_modules/lodash/_getSymbolsIn.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var getPrototype = require_getPrototype();
    var getSymbols = require_getSymbols();
    var stubArray = require_stubArray();
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };
    module.exports = getSymbolsIn;
  }
});

// node_modules/lodash/_copySymbolsIn.js
var require_copySymbolsIn = __commonJS({
  "node_modules/lodash/_copySymbolsIn.js"(exports, module) {
    var copyObject = require_copyObject();
    var getSymbolsIn = require_getSymbolsIn();
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }
    module.exports = copySymbolsIn;
  }
});

// node_modules/lodash/_baseGetAllKeys.js
var require_baseGetAllKeys = __commonJS({
  "node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var isArray = require_isArray();
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    module.exports = baseGetAllKeys;
  }
});

// node_modules/lodash/_getAllKeys.js
var require_getAllKeys = __commonJS({
  "node_modules/lodash/_getAllKeys.js"(exports, module) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbols = require_getSymbols();
    var keys3 = require_keys();
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys3, getSymbols);
    }
    module.exports = getAllKeys;
  }
});

// node_modules/lodash/_getAllKeysIn.js
var require_getAllKeysIn = __commonJS({
  "node_modules/lodash/_getAllKeysIn.js"(exports, module) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbolsIn = require_getSymbolsIn();
    var keysIn = require_keysIn();
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }
    module.exports = getAllKeysIn;
  }
});

// node_modules/lodash/_DataView.js
var require_DataView = __commonJS({
  "node_modules/lodash/_DataView.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var DataView = getNative(root, "DataView");
    module.exports = DataView;
  }
});

// node_modules/lodash/_Promise.js
var require_Promise = __commonJS({
  "node_modules/lodash/_Promise.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Promise2 = getNative(root, "Promise");
    module.exports = Promise2;
  }
});

// node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "node_modules/lodash/_Set.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Set2 = getNative(root, "Set");
    module.exports = Set2;
  }
});

// node_modules/lodash/_WeakMap.js
var require_WeakMap = __commonJS({
  "node_modules/lodash/_WeakMap.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var WeakMap2 = getNative(root, "WeakMap");
    module.exports = WeakMap2;
  }
});

// node_modules/lodash/_getTag.js
var require_getTag = __commonJS({
  "node_modules/lodash/_getTag.js"(exports, module) {
    var DataView = require_DataView();
    var Map2 = require_Map();
    var Promise2 = require_Promise();
    var Set2 = require_Set();
    var WeakMap2 = require_WeakMap();
    var baseGetTag = require_baseGetTag();
    var toSource = require_toSource();
    var mapTag = "[object Map]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var setTag = "[object Set]";
    var weakMapTag = "[object WeakMap]";
    var dataViewTag = "[object DataView]";
    var dataViewCtorString = toSource(DataView);
    var mapCtorString = toSource(Map2);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set2);
    var weakMapCtorString = toSource(WeakMap2);
    var getTag = baseGetTag;
    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
      getTag = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    module.exports = getTag;
  }
});

// node_modules/lodash/_initCloneArray.js
var require_initCloneArray = __commonJS({
  "node_modules/lodash/_initCloneArray.js"(exports, module) {
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    function initCloneArray(array) {
      var length2 = array.length, result = new array.constructor(length2);
      if (length2 && typeof array[0] == "string" && hasOwnProperty2.call(array, "index")) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }
    module.exports = initCloneArray;
  }
});

// node_modules/lodash/_Uint8Array.js
var require_Uint8Array = __commonJS({
  "node_modules/lodash/_Uint8Array.js"(exports, module) {
    var root = require_root();
    var Uint8Array2 = root.Uint8Array;
    module.exports = Uint8Array2;
  }
});

// node_modules/lodash/_cloneArrayBuffer.js
var require_cloneArrayBuffer = __commonJS({
  "node_modules/lodash/_cloneArrayBuffer.js"(exports, module) {
    var Uint8Array2 = require_Uint8Array();
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
      return result;
    }
    module.exports = cloneArrayBuffer;
  }
});

// node_modules/lodash/_cloneDataView.js
var require_cloneDataView = __commonJS({
  "node_modules/lodash/_cloneDataView.js"(exports, module) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }
    module.exports = cloneDataView;
  }
});

// node_modules/lodash/_cloneRegExp.js
var require_cloneRegExp = __commonJS({
  "node_modules/lodash/_cloneRegExp.js"(exports, module) {
    var reFlags = /\w*$/;
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }
    module.exports = cloneRegExp;
  }
});

// node_modules/lodash/_cloneSymbol.js
var require_cloneSymbol = __commonJS({
  "node_modules/lodash/_cloneSymbol.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }
    module.exports = cloneSymbol;
  }
});

// node_modules/lodash/_cloneTypedArray.js
var require_cloneTypedArray = __commonJS({
  "node_modules/lodash/_cloneTypedArray.js"(exports, module) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    module.exports = cloneTypedArray;
  }
});

// node_modules/lodash/_initCloneByTag.js
var require_initCloneByTag = __commonJS({
  "node_modules/lodash/_initCloneByTag.js"(exports, module) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    var cloneDataView = require_cloneDataView();
    var cloneRegExp = require_cloneRegExp();
    var cloneSymbol = require_cloneSymbol();
    var cloneTypedArray = require_cloneTypedArray();
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);
        case boolTag:
        case dateTag:
          return new Ctor(+object);
        case dataViewTag:
          return cloneDataView(object, isDeep);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
          return cloneTypedArray(object, isDeep);
        case mapTag:
          return new Ctor();
        case numberTag:
        case stringTag:
          return new Ctor(object);
        case regexpTag:
          return cloneRegExp(object);
        case setTag:
          return new Ctor();
        case symbolTag:
          return cloneSymbol(object);
      }
    }
    module.exports = initCloneByTag;
  }
});

// node_modules/lodash/_baseCreate.js
var require_baseCreate = __commonJS({
  "node_modules/lodash/_baseCreate.js"(exports, module) {
    var isObject = require_isObject();
    var objectCreate = Object.create;
    var baseCreate = function() {
      function object() {
      }
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object();
        object.prototype = void 0;
        return result;
      };
    }();
    module.exports = baseCreate;
  }
});

// node_modules/lodash/_initCloneObject.js
var require_initCloneObject = __commonJS({
  "node_modules/lodash/_initCloneObject.js"(exports, module) {
    var baseCreate = require_baseCreate();
    var getPrototype = require_getPrototype();
    var isPrototype = require_isPrototype();
    function initCloneObject(object) {
      return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
    }
    module.exports = initCloneObject;
  }
});

// node_modules/lodash/_baseIsMap.js
var require_baseIsMap = __commonJS({
  "node_modules/lodash/_baseIsMap.js"(exports, module) {
    var getTag = require_getTag();
    var isObjectLike = require_isObjectLike();
    var mapTag = "[object Map]";
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }
    module.exports = baseIsMap;
  }
});

// node_modules/lodash/isMap.js
var require_isMap = __commonJS({
  "node_modules/lodash/isMap.js"(exports, module) {
    var baseIsMap = require_baseIsMap();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsMap = nodeUtil && nodeUtil.isMap;
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
    module.exports = isMap;
  }
});

// node_modules/lodash/_baseIsSet.js
var require_baseIsSet = __commonJS({
  "node_modules/lodash/_baseIsSet.js"(exports, module) {
    var getTag = require_getTag();
    var isObjectLike = require_isObjectLike();
    var setTag = "[object Set]";
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }
    module.exports = baseIsSet;
  }
});

// node_modules/lodash/isSet.js
var require_isSet = __commonJS({
  "node_modules/lodash/isSet.js"(exports, module) {
    var baseIsSet = require_baseIsSet();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsSet = nodeUtil && nodeUtil.isSet;
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
    module.exports = isSet;
  }
});

// node_modules/lodash/_baseClone.js
var require_baseClone = __commonJS({
  "node_modules/lodash/_baseClone.js"(exports, module) {
    var Stack = require_Stack();
    var arrayEach = require_arrayEach();
    var assignValue = require_assignValue();
    var baseAssign = require_baseAssign();
    var baseAssignIn = require_baseAssignIn();
    var cloneBuffer = require_cloneBuffer();
    var copyArray = require_copyArray();
    var copySymbols = require_copySymbols();
    var copySymbolsIn = require_copySymbolsIn();
    var getAllKeys = require_getAllKeys();
    var getAllKeysIn = require_getAllKeysIn();
    var getTag = require_getTag();
    var initCloneArray = require_initCloneArray();
    var initCloneByTag = require_initCloneByTag();
    var initCloneObject = require_initCloneObject();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isMap = require_isMap();
    var isObject = require_isObject();
    var isSet = require_isSet();
    var keys3 = require_keys();
    var keysIn = require_keysIn();
    var CLONE_DEEP_FLAG = 1;
    var CLONE_FLAT_FLAG = 2;
    var CLONE_SYMBOLS_FLAG = 4;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== void 0) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || isFunc && !object) {
          result = isFlat || isFunc ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, isDeep);
        }
      }
      stack || (stack = new Stack());
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);
      if (isSet(value)) {
        value.forEach(function(subValue) {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
      } else if (isMap(value)) {
        value.forEach(function(subValue, key2) {
          result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
        });
      }
      var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys3;
      var props = isArr ? void 0 : keysFunc(value);
      arrayEach(props || value, function(subValue, key2) {
        if (props) {
          key2 = subValue;
          subValue = value[key2];
        }
        assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
      });
      return result;
    }
    module.exports = baseClone;
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

// node_modules/lodash/memoize.js
var require_memoize = __commonJS({
  "node_modules/lodash/memoize.js"(exports, module) {
    var MapCache = require_MapCache();
    var FUNC_ERROR_TEXT = "Expected a function";
    function memoize6(func, resolver) {
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
      memoized.cache = new (memoize6.Cache || MapCache)();
      return memoized;
    }
    memoize6.Cache = MapCache;
    module.exports = memoize6;
  }
});

// node_modules/lodash/_memoizeCapped.js
var require_memoizeCapped = __commonJS({
  "node_modules/lodash/_memoizeCapped.js"(exports, module) {
    var memoize6 = require_memoize();
    var MAX_MEMOIZE_SIZE = 500;
    function memoizeCapped(func) {
      var result = memoize6(func, function(key) {
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
      string.replace(rePropName, function(match2, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match2);
      });
      return result;
    });
    module.exports = stringToPath;
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

// node_modules/lodash/last.js
var require_last = __commonJS({
  "node_modules/lodash/last.js"(exports, module) {
    function last3(array) {
      var length2 = array == null ? 0 : array.length;
      return length2 ? array[length2 - 1] : void 0;
    }
    module.exports = last3;
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
      var index3 = 0, length2 = path.length;
      while (object != null && index3 < length2) {
        object = object[toKey(path[index3++])];
      }
      return index3 && index3 == length2 ? object : void 0;
    }
    module.exports = baseGet;
  }
});

// node_modules/lodash/_baseSlice.js
var require_baseSlice = __commonJS({
  "node_modules/lodash/_baseSlice.js"(exports, module) {
    function baseSlice(array, start, end) {
      var index3 = -1, length2 = array.length;
      if (start < 0) {
        start = -start > length2 ? 0 : length2 + start;
      }
      end = end > length2 ? length2 : end;
      if (end < 0) {
        end += length2;
      }
      length2 = start > end ? 0 : end - start >>> 0;
      start >>>= 0;
      var result = Array(length2);
      while (++index3 < length2) {
        result[index3] = array[index3 + start];
      }
      return result;
    }
    module.exports = baseSlice;
  }
});

// node_modules/lodash/_parent.js
var require_parent = __commonJS({
  "node_modules/lodash/_parent.js"(exports, module) {
    var baseGet = require_baseGet();
    var baseSlice = require_baseSlice();
    function parent(object, path) {
      return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
    }
    module.exports = parent;
  }
});

// node_modules/lodash/_baseUnset.js
var require_baseUnset = __commonJS({
  "node_modules/lodash/_baseUnset.js"(exports, module) {
    var castPath = require_castPath();
    var last3 = require_last();
    var parent = require_parent();
    var toKey = require_toKey();
    function baseUnset(object, path) {
      path = castPath(path, object);
      object = parent(object, path);
      return object == null || delete object[toKey(last3(path))];
    }
    module.exports = baseUnset;
  }
});

// node_modules/lodash/_customOmitClone.js
var require_customOmitClone = __commonJS({
  "node_modules/lodash/_customOmitClone.js"(exports, module) {
    var isPlainObject3 = require_isPlainObject();
    function customOmitClone(value) {
      return isPlainObject3(value) ? void 0 : value;
    }
    module.exports = customOmitClone;
  }
});

// node_modules/lodash/_isFlattenable.js
var require_isFlattenable = __commonJS({
  "node_modules/lodash/_isFlattenable.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : void 0;
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
    }
    module.exports = isFlattenable;
  }
});

// node_modules/lodash/_baseFlatten.js
var require_baseFlatten = __commonJS({
  "node_modules/lodash/_baseFlatten.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var isFlattenable = require_isFlattenable();
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index3 = -1, length2 = array.length;
      predicate || (predicate = isFlattenable);
      result || (result = []);
      while (++index3 < length2) {
        var value = array[index3];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }
    module.exports = baseFlatten;
  }
});

// node_modules/lodash/flatten.js
var require_flatten = __commonJS({
  "node_modules/lodash/flatten.js"(exports, module) {
    var baseFlatten = require_baseFlatten();
    function flatten(array) {
      var length2 = array == null ? 0 : array.length;
      return length2 ? baseFlatten(array, 1) : [];
    }
    module.exports = flatten;
  }
});

// node_modules/lodash/_apply.js
var require_apply = __commonJS({
  "node_modules/lodash/_apply.js"(exports, module) {
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    module.exports = apply;
  }
});

// node_modules/lodash/_overRest.js
var require_overRest = __commonJS({
  "node_modules/lodash/_overRest.js"(exports, module) {
    var apply = require_apply();
    var nativeMax = Math.max;
    function overRest(func, start, transform3) {
      start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
      return function() {
        var args = arguments, index3 = -1, length2 = nativeMax(args.length - start, 0), array = Array(length2);
        while (++index3 < length2) {
          array[index3] = args[start + index3];
        }
        index3 = -1;
        var otherArgs = Array(start + 1);
        while (++index3 < start) {
          otherArgs[index3] = args[index3];
        }
        otherArgs[start] = transform3(array);
        return apply(func, this, otherArgs);
      };
    }
    module.exports = overRest;
  }
});

// node_modules/lodash/constant.js
var require_constant = __commonJS({
  "node_modules/lodash/constant.js"(exports, module) {
    function constant(value) {
      return function() {
        return value;
      };
    }
    module.exports = constant;
  }
});

// node_modules/lodash/identity.js
var require_identity = __commonJS({
  "node_modules/lodash/identity.js"(exports, module) {
    function identity(value) {
      return value;
    }
    module.exports = identity;
  }
});

// node_modules/lodash/_baseSetToString.js
var require_baseSetToString = __commonJS({
  "node_modules/lodash/_baseSetToString.js"(exports, module) {
    var constant = require_constant();
    var defineProperty2 = require_defineProperty2();
    var identity = require_identity();
    var baseSetToString = !defineProperty2 ? identity : function(func, string) {
      return defineProperty2(func, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": constant(string),
        "writable": true
      });
    };
    module.exports = baseSetToString;
  }
});

// node_modules/lodash/_shortOut.js
var require_shortOut = __commonJS({
  "node_modules/lodash/_shortOut.js"(exports, module) {
    var HOT_COUNT = 800;
    var HOT_SPAN = 16;
    var nativeNow = Date.now;
    function shortOut(func) {
      var count = 0, lastCalled = 0;
      return function() {
        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(void 0, arguments);
      };
    }
    module.exports = shortOut;
  }
});

// node_modules/lodash/_setToString.js
var require_setToString = __commonJS({
  "node_modules/lodash/_setToString.js"(exports, module) {
    var baseSetToString = require_baseSetToString();
    var shortOut = require_shortOut();
    var setToString = shortOut(baseSetToString);
    module.exports = setToString;
  }
});

// node_modules/lodash/_flatRest.js
var require_flatRest = __commonJS({
  "node_modules/lodash/_flatRest.js"(exports, module) {
    var flatten = require_flatten();
    var overRest = require_overRest();
    var setToString = require_setToString();
    function flatRest(func) {
      return setToString(overRest(func, void 0, flatten), func + "");
    }
    module.exports = flatRest;
  }
});

// node_modules/lodash/omit.js
var require_omit = __commonJS({
  "node_modules/lodash/omit.js"(exports, module) {
    var arrayMap = require_arrayMap();
    var baseClone = require_baseClone();
    var baseUnset = require_baseUnset();
    var castPath = require_castPath();
    var copyObject = require_copyObject();
    var customOmitClone = require_customOmitClone();
    var flatRest = require_flatRest();
    var getAllKeysIn = require_getAllKeysIn();
    var CLONE_DEEP_FLAG = 1;
    var CLONE_FLAT_FLAG = 2;
    var CLONE_SYMBOLS_FLAG = 4;
    var omit2 = flatRest(function(object, paths) {
      var result = {};
      if (object == null) {
        return result;
      }
      var isDeep = false;
      paths = arrayMap(paths, function(path) {
        path = castPath(path, object);
        isDeep || (isDeep = path.length > 1);
        return path;
      });
      copyObject(object, getAllKeysIn(object), result);
      if (isDeep) {
        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
      }
      var length2 = paths.length;
      while (length2--) {
        baseUnset(result, paths[length2]);
      }
      return result;
    });
    module.exports = omit2;
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
        var hadKeyboardEvent3 = true;
        var hadFocusVisibleRecently3 = false;
        var hadFocusVisibleRecentlyTimeout3 = null;
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
        function focusTriggersKeyboardModality3(el2) {
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
          hadKeyboardEvent3 = true;
        }
        function onPointerDown(e2) {
          hadKeyboardEvent3 = false;
        }
        function onFocus(e2) {
          if (!isValidFocusTarget(e2.target)) {
            return;
          }
          if (hadKeyboardEvent3 || focusTriggersKeyboardModality3(e2.target)) {
            addFocusVisibleClass(e2.target);
          }
        }
        function onBlur(e2) {
          if (!isValidFocusTarget(e2.target)) {
            return;
          }
          if (e2.target.classList.contains("focus-visible") || e2.target.hasAttribute("data-focus-visible-added")) {
            hadFocusVisibleRecently3 = true;
            window.clearTimeout(hadFocusVisibleRecentlyTimeout3);
            hadFocusVisibleRecentlyTimeout3 = window.setTimeout(function() {
              hadFocusVisibleRecently3 = false;
            }, 100);
            removeFocusVisibleClass(e2.target);
          }
        }
        function onVisibilityChange(e2) {
          if (document.visibilityState === "hidden") {
            if (hadFocusVisibleRecently3) {
              hadKeyboardEvent3 = true;
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
          hadKeyboardEvent3 = false;
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
    exports.hexToRgb = hexToRgb3;
    exports.rgbToHex = rgbToHex;
    exports.hslToRgb = hslToRgb3;
    exports.decomposeColor = decomposeColor3;
    exports.recomposeColor = recomposeColor3;
    exports.getContrastRatio = getContrastRatio3;
    exports.getLuminance = getLuminance3;
    exports.emphasize = emphasize;
    exports.fade = fade2;
    exports.alpha = alpha3;
    exports.darken = darken3;
    exports.lighten = lighten3;
    var _utils = require_utils();
    function clamp3(value) {
      var min = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      var max = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
      if (true) {
        if (value < min || value > max) {
          console.error("Material-UI: The value provided ".concat(value, " is out of range [").concat(min, ", ").concat(max, "]."));
        }
      }
      return Math.min(Math.max(min, value), max);
    }
    function hexToRgb3(color2) {
      color2 = color2.substr(1);
      var re2 = new RegExp(".{1,".concat(color2.length >= 6 ? 2 : 1, "}"), "g");
      var colors = color2.match(re2);
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
    function rgbToHex(color2) {
      if (color2.indexOf("#") === 0) {
        return color2;
      }
      var _decomposeColor = decomposeColor3(color2), values5 = _decomposeColor.values;
      return "#".concat(values5.map(function(n2) {
        return intToHex(n2);
      }).join(""));
    }
    function hslToRgb3(color2) {
      color2 = decomposeColor3(color2);
      var _color = color2, values5 = _color.values;
      var h2 = values5[0];
      var s2 = values5[1] / 100;
      var l2 = values5[2] / 100;
      var a2 = s2 * Math.min(l2, 1 - l2);
      var f = function f2(n2) {
        var k2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : (n2 + h2 / 30) % 12;
        return l2 - a2 * Math.max(Math.min(k2 - 3, 9 - k2, 1), -1);
      };
      var type3 = "rgb";
      var rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
      if (color2.type === "hsla") {
        type3 += "a";
        rgb.push(values5[3]);
      }
      return recomposeColor3({
        type: type3,
        values: rgb
      });
    }
    function decomposeColor3(color2) {
      if (color2.type) {
        return color2;
      }
      if (color2.charAt(0) === "#") {
        return decomposeColor3(hexToRgb3(color2));
      }
      var marker = color2.indexOf("(");
      var type3 = color2.substring(0, marker);
      if (["rgb", "rgba", "hsl", "hsla"].indexOf(type3) === -1) {
        throw new Error(true ? "Material-UI: Unsupported `".concat(color2, "` color.\nWe support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().") : (0, _utils.formatMuiErrorMessage)(3, color2));
      }
      var values5 = color2.substring(marker + 1, color2.length - 1).split(",");
      values5 = values5.map(function(value) {
        return parseFloat(value);
      });
      return {
        type: type3,
        values: values5
      };
    }
    function recomposeColor3(color2) {
      var type3 = color2.type;
      var values5 = color2.values;
      if (type3.indexOf("rgb") !== -1) {
        values5 = values5.map(function(n2, i2) {
          return i2 < 3 ? parseInt(n2, 10) : n2;
        });
      } else if (type3.indexOf("hsl") !== -1) {
        values5[1] = "".concat(values5[1], "%");
        values5[2] = "".concat(values5[2], "%");
      }
      return "".concat(type3, "(").concat(values5.join(", "), ")");
    }
    function getContrastRatio3(foreground, background) {
      var lumA = getLuminance3(foreground);
      var lumB = getLuminance3(background);
      return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
    }
    function getLuminance3(color2) {
      color2 = decomposeColor3(color2);
      var rgb = color2.type === "hsl" ? decomposeColor3(hslToRgb3(color2)).values : color2.values;
      rgb = rgb.map(function(val) {
        val /= 255;
        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
      });
      return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
    }
    function emphasize(color2) {
      var coefficient = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.15;
      return getLuminance3(color2) > 0.5 ? darken3(color2, coefficient) : lighten3(color2, coefficient);
    }
    var warnedOnce3 = false;
    function fade2(color2, value) {
      if (true) {
        if (!warnedOnce3) {
          warnedOnce3 = true;
          console.error(["Material-UI: The `fade` color utility was renamed to `alpha` to better describe its functionality.", "", "You should use `import { alpha } from '@material-ui/core/styles'`"].join("\n"));
        }
      }
      return alpha3(color2, value);
    }
    function alpha3(color2, value) {
      color2 = decomposeColor3(color2);
      value = clamp3(value);
      if (color2.type === "rgb" || color2.type === "hsl") {
        color2.type += "a";
      }
      color2.values[3] = value;
      return recomposeColor3(color2);
    }
    function darken3(color2, coefficient) {
      color2 = decomposeColor3(color2);
      coefficient = clamp3(coefficient);
      if (color2.type.indexOf("hsl") !== -1) {
        color2.values[2] *= 1 - coefficient;
      } else if (color2.type.indexOf("rgb") !== -1) {
        for (var i2 = 0; i2 < 3; i2 += 1) {
          color2.values[i2] *= 1 - coefficient;
        }
      }
      return recomposeColor3(color2);
    }
    function lighten3(color2, coefficient) {
      color2 = decomposeColor3(color2);
      coefficient = clamp3(coefficient);
      if (color2.type.indexOf("hsl") !== -1) {
        color2.values[2] += (100 - color2.values[2]) * coefficient;
      } else if (color2.type.indexOf("rgb") !== -1) {
        for (var i2 = 0; i2 < 3; i2 += 1) {
          color2.values[i2] += (255 - color2.values[i2]) * coefficient;
        }
      }
      return recomposeColor3(color2);
    }
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

// node_modules/@mui/material/Button/Button.js
var import_prop_types11 = __toModule(require_prop_types());
import {
  forwardRef as forwardRef4
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

// node_modules/@mui/utils/esm/chainPropTypes.js
function chainPropTypes(propType1, propType2) {
  if (false) {
    return () => null;
  }
  return function validate(...args) {
    return propType1(...args) || propType2(...args);
  };
}

// node_modules/@mui/utils/esm/deepmerge.js
function isPlainObject(item) {
  return item !== null && typeof item === "object" && item.constructor === Object;
}
function deepmerge(target, source, options = {
  clone: true
}) {
  const output = options.clone ? _extends({}, target) : target;
  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach((key) => {
      if (key === "__proto__") {
        return;
      }
      if (isPlainObject(source[key]) && key in target && isPlainObject(target[key])) {
        output[key] = deepmerge(target[key], source[key], options);
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
}

// node_modules/@mui/utils/esm/elementTypeAcceptingRef.js
var import_prop_types = __toModule(require_prop_types());
function isClassComponent(elementType) {
  const {
    prototype = {}
  } = elementType;
  return Boolean(prototype.isReactComponent);
}
function elementTypeAcceptingRef(props, propName, componentName, location, propFullName) {
  const propValue = props[propName];
  const safePropName = propFullName || propName;
  if (propValue == null || typeof window === "undefined") {
    return null;
  }
  let warningHint;
  if (typeof propValue === "function" && !isClassComponent(propValue)) {
    warningHint = "Did you accidentally provide a plain function component instead?";
  }
  if (warningHint !== void 0) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. Expected an element type that can hold a ref. ${warningHint} For more information see https://mui.com/r/caveat-with-refs-guide`);
  }
  return null;
}
var elementTypeAcceptingRef_default = chainPropTypes(import_prop_types.default.elementType, elementTypeAcceptingRef);

// node_modules/@mui/utils/esm/getDisplayName.js
var import_react_is = __toModule(require_react_is2());
var fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function getFunctionName(fn) {
  const match2 = `${fn}`.match(fnNameMatchRegex);
  const name = match2 && match2[1];
  return name || "";
}
function getFunctionComponentName(Component3, fallback = "") {
  return Component3.displayName || Component3.name || getFunctionName(Component3) || fallback;
}
function getWrappedName(outerType, innerType, wrapperName) {
  const functionName = getFunctionComponentName(innerType);
  return outerType.displayName || (functionName !== "" ? `${wrapperName}(${functionName})` : wrapperName);
}
function getDisplayName(Component3) {
  if (Component3 == null) {
    return void 0;
  }
  if (typeof Component3 === "string") {
    return Component3;
  }
  if (typeof Component3 === "function") {
    return getFunctionComponentName(Component3, "Component");
  }
  if (typeof Component3 === "object") {
    switch (Component3.$$typeof) {
      case import_react_is.ForwardRef:
        return getWrappedName(Component3, Component3.render, "ForwardRef");
      case import_react_is.Memo:
        return getWrappedName(Component3, Component3.type, "memo");
      default:
        return void 0;
    }
  }
  return void 0;
}

// node_modules/@mui/utils/esm/refType.js
var import_prop_types2 = __toModule(require_prop_types());
var refType = import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object]);
var refType_default = refType;

// node_modules/@mui/utils/esm/capitalize.js
function capitalize(string) {
  if (typeof string !== "string") {
    throw new Error(true ? `MUI: \`capitalize(string)\` expects a string argument.` : formatMuiErrorMessage(7));
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// node_modules/@mui/utils/esm/setRef.js
function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

// node_modules/@mui/utils/esm/useEnhancedEffect.js
import {
  useEffect,
  useLayoutEffect
} from "react";
var useEnhancedEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
var useEnhancedEffect_default = useEnhancedEffect;

// node_modules/@mui/utils/esm/useEventCallback.js
import {
  useCallback,
  useRef
} from "react";
function useEventCallback(fn) {
  const ref = useRef(fn);
  useEnhancedEffect_default(() => {
    ref.current = fn;
  });
  return useCallback((...args) => (0, ref.current)(...args), []);
}

// node_modules/@mui/utils/esm/useForkRef.js
import {
  useMemo
} from "react";
function useForkRef(refA, refB) {
  return useMemo(() => {
    if (refA == null && refB == null) {
      return null;
    }
    return (refValue) => {
      setRef(refA, refValue);
      setRef(refB, refValue);
    };
  }, [refA, refB]);
}

// node_modules/@mui/utils/esm/useIsFocusVisible.js
import {
  useCallback as useCallback2,
  useRef as useRef2
} from "react";
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
function focusTriggersKeyboardModality(node2) {
  const {
    type: type3,
    tagName
  } = node2;
  if (tagName === "INPUT" && inputTypesWhitelist[type3] && !node2.readOnly) {
    return true;
  }
  if (tagName === "TEXTAREA" && !node2.readOnly) {
    return true;
  }
  if (node2.isContentEditable) {
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
  const {
    target
  } = event;
  try {
    return target.matches(":focus-visible");
  } catch (error3) {
  }
  return hadKeyboardEvent || focusTriggersKeyboardModality(target);
}
function useIsFocusVisible() {
  const ref = useCallback2((node2) => {
    if (node2 != null) {
      prepare(node2.ownerDocument);
    }
  }, []);
  const isFocusVisibleRef = useRef2(false);
  function handleBlurVisible2() {
    if (isFocusVisibleRef.current) {
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(() => {
        hadFocusVisibleRecently = false;
      }, 100);
      isFocusVisibleRef.current = false;
      return true;
    }
    return false;
  }
  function handleFocusVisible(event) {
    if (isFocusVisible(event)) {
      isFocusVisibleRef.current = true;
      return true;
    }
    return false;
  }
  return {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible2,
    ref
  };
}

// node_modules/@mui/core/composeClasses/composeClasses.js
function composeClasses(slots, getUtilityClass, classes) {
  const output = {};
  Object.keys(slots).forEach((slot) => {
    output[slot] = slots[slot].reduce((acc, key) => {
      if (key) {
        if (classes && classes[key]) {
          acc.push(classes[key]);
        }
        acc.push(getUtilityClass(key));
      }
      return acc;
    }, []).join(" ");
  });
  return output;
}

// node_modules/@mui/core/generateUtilityClass/generateUtilityClass.js
var globalStateClassesMapping = {
  active: "Mui-active",
  checked: "Mui-checked",
  completed: "Mui-completed",
  disabled: "Mui-disabled",
  error: "Mui-error",
  expanded: "Mui-expanded",
  focused: "Mui-focused",
  focusVisible: "Mui-focusVisible",
  required: "Mui-required",
  selected: "Mui-selected"
};
function generateUtilityClass(componentName, slot) {
  const globalStateClass = globalStateClassesMapping[slot];
  return globalStateClass || `${componentName}-${slot}`;
}

// node_modules/@mui/core/generateUtilityClasses/generateUtilityClasses.js
function generateUtilityClasses(componentName, slots) {
  const result = {};
  slots.forEach((slot) => {
    result[slot] = generateUtilityClass(componentName, slot);
  });
  return result;
}

// node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js
import "react";

// node_modules/@emotion/memoize/dist/memoize.browser.esm.js
function memoize(fn) {
  var cache3 = {};
  return function(arg) {
    if (cache3[arg] === void 0)
      cache3[arg] = fn(arg);
    return cache3[arg];
  };
}
var memoize_browser_esm_default = memoize;

// node_modules/@emotion/styled/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.browser.esm.js
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = /* @__PURE__ */ memoize_browser_esm_default(function(prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
});
var emotion_is_prop_valid_browser_esm_default = isPropValid;

// node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js
import { useContext as useContext3, createElement as createElement3 } from "react";

// node_modules/@emotion/react/dist/emotion-react.browser.esm.js
import { createElement as createElement2, useContext as useContext2, useRef as useRef3, useLayoutEffect as useLayoutEffect2 } from "react";

// node_modules/@emotion/cache/node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js
function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i2 = 0; i2 < document.styleSheets.length; i2++) {
    if (document.styleSheets[i2].ownerNode === tag) {
      return document.styleSheets[i2];
    }
  }
}
function createStyleElement(options) {
  var tag = document.createElement("style");
  tag.setAttribute("data-emotion", options.key);
  if (options.nonce !== void 0) {
    tag.setAttribute("nonce", options.nonce);
  }
  tag.appendChild(document.createTextNode(""));
  tag.setAttribute("data-s", "");
  return tag;
}
var StyleSheet = /* @__PURE__ */ function() {
  function StyleSheet4(options) {
    var _this = this;
    this._insertTag = function(tag) {
      var before;
      if (_this.tags.length === 0) {
        before = _this.prepend ? _this.container.firstChild : _this.before;
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options.speedy === void 0 ? false : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce;
    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.before = null;
  }
  var _proto = StyleSheet4.prototype;
  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag = this.tags[this.tags.length - 1];
    if (true) {
      var isImportRule3 = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;
      if (isImportRule3 && this._alreadyInsertedOrderInsensitiveRule) {
        console.error("You're attempting to insert the following rule:\n" + rule + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.");
      }
      this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule3;
    }
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e2) {
        if (!/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear){/.test(rule)) {
          console.error('There was a problem inserting the following rule: "' + rule + '"', e2);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function(tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
    if (true) {
      this._alreadyInsertedOrderInsensitiveRule = false;
    }
  };
  return StyleSheet4;
}();

// node_modules/stylis/src/Enum.js
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";

// node_modules/stylis/src/Utility.js
var abs = Math.abs;
var from = String.fromCharCode;
function hash(value, length2) {
  return (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3);
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search) {
  return value.indexOf(search);
}
function charat(value, index3) {
  return value.charCodeAt(index3) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}

// node_modules/stylis/src/Tokenizer.js
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type3, props, children, length2) {
  return { value, root, parent, type: type3, props, children, line, column, length: length2, return: "" };
}
function copy(value, root, type3) {
  return node(value, root.root, root.parent, type3, root.props, root.children, 0);
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type3) {
  switch (type3) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type3) {
  return trim(slice(position - 1, delimiter(type3 === 91 ? type3 + 2 : type3 === 40 ? type3 + 1 : type3)));
}
function whitespace(type3) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type3) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index3, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index3, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type3) {
  while (next())
    switch (character) {
      case type3:
        return position;
      case 34:
      case 39:
        return delimiter(type3 === 34 || type3 === 39 ? type3 : character);
      case 40:
        if (type3 === 41)
          delimiter(type3);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type3, index3) {
  while (next())
    if (type3 + character === 47 + 10)
      break;
    else if (type3 + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index3, position - 1) + "*" + from(type3 === 47 ? type3 : next());
}
function identifier(index3) {
  while (!token(peek()))
    next();
  return slice(index3, position);
}

// node_modules/stylis/src/Parser.js
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index3 = 0;
  var offset2 = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type3 = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type3;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      case 34:
      case 39:
      case 91:
      case 40:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index3++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset2:
            if (property > 0 && strlen(characters2) - length2)
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append(reference = ruleset(characters2, root, parent, index3, offset2, rules, points, type3, props = [], children = [], length2), rulesets);
            if (character2 === 123)
              if (offset2 === 0)
                parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule) {
                  case 100:
                  case 109:
                  case 115:
                    parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type3, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference, reference, reference, [""], children, length2, points, children);
                }
        }
        index3 = offset2 = property = 0, variable = ampersand = 1, type3 = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset2 > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index3++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset2 = strlen(type3 = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index3, offset2, rules, points, type3, props, children, length2) {
  var post = offset2 - 1;
  var rule = offset2 === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i2 = 0, j2 = 0, k2 = 0; i2 < index3; ++i2)
    for (var x2 = 0, y2 = substr(value, post + 1, post = abs(j2 = points[i2])), z2 = value; x2 < size; ++x2)
      if (z2 = trim(j2 > 0 ? rule[x2] + " " + y2 : replace(y2, /&\f/g, rule[x2])))
        props[k2++] = z2;
  return node(value, root, parent, offset2 === 0 ? RULESET : type3, props, children, length2);
}
function comment(value, root, parent) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
function declaration(value, root, parent, length2) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
}

// node_modules/stylis/src/Prefixer.js
function prefix(value, length2) {
  switch (hash(value, length2)) {
    case 5103:
      return WEBKIT + "print-" + value + value;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    case 5292:
      return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
    case 6060:
      return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value) - 1 - length2 > 6)
        switch (charat(value, length2 + 1)) {
          case 109:
            if (charat(value, length2 + 4) !== 45)
              break;
          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
          case 115:
            return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length2) + value : value;
        }
      break;
    case 4949:
      if (charat(value, length2 + 1) !== 115)
        break;
    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
        case 107:
          return replace(value, ":", ":" + WEBKIT) + value;
        case 101:
          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
      }
      break;
    case 5936:
      switch (charat(value, length2 + 11)) {
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
      return WEBKIT + value + MS + value + value;
  }
  return value;
}

// node_modules/stylis/src/Serializer.js
function serialize(children, callback) {
  var output = "";
  var length2 = sizeof(children);
  for (var i2 = 0; i2 < length2; i2++)
    output += callback(children[i2], i2, children, callback) || "";
  return output;
}
function stringify(element, index3, children, callback) {
  switch (element.type) {
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case RULESET:
      element.value = element.props.join(",");
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}

// node_modules/stylis/src/Middleware.js
function middleware(collection) {
  var length2 = sizeof(collection);
  return function(element, index3, children, callback) {
    var output = "";
    for (var i2 = 0; i2 < length2; i2++)
      output += collection[i2](element, index3, children, callback) || "";
    return output;
  };
}
function prefixer(element, index3, children, callback) {
  if (!element.return)
    switch (element.type) {
      case DECLARATION:
        element.return = prefix(element.value, element.length);
        break;
      case KEYFRAMES:
        return serialize([copy(replace(element.value, "@", "@" + WEBKIT), element, "")], callback);
      case RULESET:
        if (element.length)
          return combine(element.props, function(value) {
            switch (match(value, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return serialize([copy(replace(value, /:(read-\w+)/, ":" + MOZ + "$1"), element, "")], callback);
              case "::placeholder":
                return serialize([
                  copy(replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1"), element, ""),
                  copy(replace(value, /:(plac\w+)/, ":" + MOZ + "$1"), element, ""),
                  copy(replace(value, /:(plac\w+)/, MS + "input-$1"), element, "")
                ], callback);
            }
            return "";
          });
    }
}

// node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js
var last = function last2(arr) {
  return arr.length ? arr[arr.length - 1] : null;
};
var toRules = function toRules2(parsed, points) {
  var index3 = -1;
  var character2 = 44;
  do {
    switch (token(character2)) {
      case 0:
        if (character2 === 38 && peek() === 12) {
          points[index3] = 1;
        }
        parsed[index3] += identifier(position - 1);
        break;
      case 2:
        parsed[index3] += delimit(character2);
        break;
      case 4:
        if (character2 === 44) {
          parsed[++index3] = peek() === 58 ? "&\f" : "";
          points[index3] = parsed[index3].length;
          break;
        }
      default:
        parsed[index3] += from(character2);
    }
  } while (character2 = next());
  return parsed;
};
var getRules = function getRules2(value, points) {
  return dealloc(toRules(alloc(value), points));
};
var fixedElements = /* @__PURE__ */ new WeakMap();
var compat = function compat2(element) {
  if (element.type !== "rule" || !element.parent || !element.length) {
    return;
  }
  var value = element.value, parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== "rule") {
    parent = parent.parent;
    if (!parent)
      return;
  }
  if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
    return;
  }
  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;
  for (var i2 = 0, k2 = 0; i2 < rules.length; i2++) {
    for (var j2 = 0; j2 < parentRules.length; j2++, k2++) {
      element.props[k2] = points[i2] ? rules[i2].replace(/&\f/g, parentRules[j2]) : parentRules[j2] + " " + rules[i2];
    }
  }
};
var removeLabel = function removeLabel2(element) {
  if (element.type === "decl") {
    var value = element.value;
    if (value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98) {
      element["return"] = "";
      element.value = "";
    }
  }
};
var ignoreFlag = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason";
var isIgnoringComment = function isIgnoringComment2(element) {
  return !!element && element.type === "comm" && element.children.indexOf(ignoreFlag) > -1;
};
var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm2(cache3) {
  return function(element, index3, children) {
    if (element.type !== "rule")
      return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);
    if (unsafePseudoClasses && cache3.compat !== true) {
      var prevElement = index3 > 0 ? children[index3 - 1] : null;
      if (prevElement && isIgnoringComment(last(prevElement.children))) {
        return;
      }
      unsafePseudoClasses.forEach(function(unsafePseudoClass) {
        console.error('The pseudo class "' + unsafePseudoClass + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + unsafePseudoClass.split("-child")[0] + '-of-type".');
      });
    }
  };
};
var isImportRule = function isImportRule2(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};
var isPrependedWithRegularRules = function isPrependedWithRegularRules2(index3, children) {
  for (var i2 = index3 - 1; i2 >= 0; i2--) {
    if (!isImportRule(children[i2])) {
      return true;
    }
  }
  return false;
};
var nullifyElement = function nullifyElement2(element) {
  element.type = "";
  element.value = "";
  element["return"] = "";
  element.children = "";
  element.props = "";
};
var incorrectImportAlarm = function incorrectImportAlarm2(element, index3, children) {
  if (!isImportRule(element)) {
    return;
  }
  if (element.parent) {
    console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index3, children)) {
    console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
    nullifyElement(element);
  }
};
var defaultStylisPlugins = [prefixer];
var createCache = function createCache2(options) {
  var key = options.key;
  if (!key) {
    throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\nIf multiple caches share the same key they might \"fight\" for each other's style elements.");
  }
  if (key === "css") {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(ssrStyles, function(node2) {
      var dataEmotionAttribute = node2.getAttribute("data-emotion");
      if (dataEmotionAttribute.indexOf(" ") === -1) {
        return;
      }
      document.head.appendChild(node2);
      node2.setAttribute("data-s", "");
    });
  }
  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
  if (true) {
    if (/[^a-z-]/.test(key)) {
      throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + key + '" was passed');
    }
  }
  var inserted = {};
  var container;
  var nodesToHydrate = [];
  {
    container = options.container || document.head;
    Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + key + ' "]'), function(node2) {
      var attrib = node2.getAttribute("data-emotion").split(" ");
      for (var i2 = 1; i2 < attrib.length; i2++) {
        inserted[attrib[i2]] = true;
      }
      nodesToHydrate.push(node2);
    });
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  if (true) {
    omnipresentPlugins.push(createUnsafeSelectorsAlarm({
      get compat() {
        return cache3.compat;
      }
    }), incorrectImportAlarm);
  }
  {
    var currentSheet;
    var finalizingPlugins = [stringify, true ? function(element) {
      if (!element.root) {
        if (element["return"]) {
          currentSheet.insert(element["return"]);
        } else if (element.value && element.type !== COMMENT) {
          currentSheet.insert(element.value + "{}");
        }
      }
    } : rulesheet(function(rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis2(styles20) {
      return serialize(compile(styles20), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      if (serialized.map !== void 0) {
        currentSheet = {
          insert: function insert2(rule) {
            sheet.insert(rule + serialized.map);
          }
        };
      }
      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache3.inserted[serialized.name] = true;
      }
    };
  }
  var cache3 = {
    key,
    sheet: new StyleSheet({
      key,
      container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend
    }),
    nonce: options.nonce,
    inserted,
    registered: {},
    insert: _insert
  };
  cache3.sheet.hydrate(nodesToHydrate);
  return cache3;
};
var emotion_cache_browser_esm_default = createCache;

// node_modules/@emotion/react/dist/emotion-element-99289b21.browser.esm.js
import { createContext, useContext, forwardRef, createElement } from "react";

// node_modules/@emotion/react/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
var isBrowser = true;
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = "";
  classNames.split(" ").forEach(function(className) {
    if (registered[className] !== void 0) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles2(cache3, serialized, isStringTag) {
  var className = cache3.key + "-" + serialized.name;
  if ((isStringTag === false || isBrowser === false) && cache3.registered[className] === void 0) {
    cache3.registered[className] = serialized.styles;
  }
  if (cache3.inserted[serialized.name] === void 0) {
    var current = serialized;
    do {
      var maybeStyles = cache3.insert(serialized === current ? "." + className : "", current, cache3.sheet, true);
      current = current.next;
    } while (current !== void 0);
  }
};

// node_modules/@emotion/hash/dist/hash.browser.esm.js
function murmur2(str) {
  var h2 = 0;
  var k2, i2 = 0, len = str.length;
  for (; len >= 4; ++i2, len -= 4) {
    k2 = str.charCodeAt(i2) & 255 | (str.charCodeAt(++i2) & 255) << 8 | (str.charCodeAt(++i2) & 255) << 16 | (str.charCodeAt(++i2) & 255) << 24;
    k2 = (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16);
    k2 ^= k2 >>> 24;
    h2 = (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16) ^ (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h2 ^= (str.charCodeAt(i2 + 2) & 255) << 16;
    case 2:
      h2 ^= (str.charCodeAt(i2 + 1) & 255) << 8;
    case 1:
      h2 ^= str.charCodeAt(i2) & 255;
      h2 = (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  h2 ^= h2 >>> 13;
  h2 = (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  return ((h2 ^ h2 >>> 15) >>> 0).toString(36);
}
var hash_browser_esm_default = murmur2;

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

// node_modules/@emotion/react/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`;
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty2(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue2(value) {
  return value != null && typeof value !== "boolean";
};
var processStyleName = /* @__PURE__ */ memoize_browser_esm_default(function(styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue2(key, value) {
  switch (key) {
    case "animation":
    case "animationName": {
      if (typeof value === "string") {
        return value.replace(animationRegex, function(match2, p1, p2) {
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
  if (unitless_browser_esm_default[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
    return value + "px";
  }
  return value;
};
if (true) {
  contentValuePattern = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
  contentValues = ["normal", "none", "initial", "inherit", "unset"];
  oldProcessStyleValue = processStyleValue;
  msPattern2 = /^-ms-/;
  hyphenPattern = /-(.)/g;
  hyphenatedCache = {};
  processStyleValue = function processStyleValue5(key, value) {
    if (key === "content") {
      if (typeof value !== "string" || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }
    var processed = oldProcessStyleValue(key, value);
    if (processed !== "" && !isCustomProperty(key) && key.indexOf("-") !== -1 && hyphenatedCache[key] === void 0) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern2, "ms-").replace(hyphenPattern, function(str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }
    return processed;
  };
}
var contentValuePattern;
var contentValues;
var oldProcessStyleValue;
var msPattern2;
var hyphenPattern;
var hyphenatedCache;
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return "";
  }
  if (interpolation.__emotion_styles !== void 0) {
    if (interpolation.toString() === "NO_COMPONENT_SELECTOR") {
      throw new Error("Component selectors can only be used in conjunction with @emotion/babel-plugin.");
    }
    return interpolation;
  }
  switch (typeof interpolation) {
    case "boolean": {
      return "";
    }
    case "object": {
      if (interpolation.anim === 1) {
        cursor = {
          name: interpolation.name,
          styles: interpolation.styles,
          next: cursor
        };
        return interpolation.name;
      }
      if (interpolation.styles !== void 0) {
        var next2 = interpolation.next;
        if (next2 !== void 0) {
          while (next2 !== void 0) {
            cursor = {
              name: next2.name,
              styles: next2.styles,
              next: cursor
            };
            next2 = next2.next;
          }
        }
        var styles20 = interpolation.styles + ";";
        if (interpolation.map !== void 0) {
          styles20 += interpolation.map;
        }
        return styles20;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor;
        var result = interpolation(mergedProps);
        cursor = previousCursor;
        return handleInterpolation(mergedProps, registered, result);
      } else if (true) {
        console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      }
      break;
    }
    case "string":
      if (true) {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function(match2, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, "") + "`");
          return "${" + fakeVarName + "}";
        });
        if (matched.length) {
          console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(matched, ["`" + replaced + "`"]).join("\n") + "\n\nYou should wrap it with `css` like this:\n\n" + ("css`" + replaced + "`"));
        }
      }
      break;
  }
  if (registered == null) {
    return interpolation;
  }
  var cached = registered[interpolation];
  return cached !== void 0 ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = "";
  if (Array.isArray(obj)) {
    for (var i2 = 0; i2 < obj.length; i2++) {
      string += handleInterpolation(mergedProps, registered, obj[i2]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];
      if (typeof value !== "object") {
        if (registered != null && registered[value] !== void 0) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === "NO_COMPONENT_SELECTOR" && true) {
          throw new Error("Component selectors can only be used in conjunction with @emotion/babel-plugin.");
        }
        if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (_key) {
            case "animation":
            case "animationName": {
              string += processStyleName(_key) + ":" + interpolated + ";";
              break;
            }
            default: {
              if (_key === "undefined") {
                console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
              }
              string += _key + "{" + interpolated + "}";
            }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var sourceMapPattern;
if (true) {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
}
var cursor;
var serializeStyles = function serializeStyles2(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
    return args[0];
  }
  var stringMode = true;
  var styles20 = "";
  cursor = void 0;
  var strings = args[0];
  if (strings == null || strings.raw === void 0) {
    stringMode = false;
    styles20 += handleInterpolation(mergedProps, registered, strings);
  } else {
    if (strings[0] === void 0) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }
    styles20 += strings[0];
  }
  for (var i2 = 1; i2 < args.length; i2++) {
    styles20 += handleInterpolation(mergedProps, registered, args[i2]);
    if (stringMode) {
      if (strings[i2] === void 0) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }
      styles20 += strings[i2];
    }
  }
  var sourceMap;
  if (true) {
    styles20 = styles20.replace(sourceMapPattern, function(match3) {
      sourceMap = match3;
      return "";
    });
  }
  labelPattern.lastIndex = 0;
  var identifierName = "";
  var match2;
  while ((match2 = labelPattern.exec(styles20)) !== null) {
    identifierName += "-" + match2[1];
  }
  var name = hash_browser_esm_default(styles20) + identifierName;
  if (true) {
    return {
      name,
      styles: styles20,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }
  return {
    name,
    styles: styles20,
    next: cursor
  };
};

// node_modules/@emotion/react/dist/emotion-element-99289b21.browser.esm.js
var hasOwnProperty = Object.prototype.hasOwnProperty;
var EmotionCacheContext = /* @__PURE__ */ createContext(typeof HTMLElement !== "undefined" ? /* @__PURE__ */ emotion_cache_browser_esm_default({
  key: "css"
}) : null);
if (true) {
  EmotionCacheContext.displayName = "EmotionCacheContext";
}
var CacheProvider = EmotionCacheContext.Provider;
var withEmotionCache = function withEmotionCache2(func) {
  return /* @__PURE__ */ forwardRef(function(props, ref) {
    var cache3 = useContext(EmotionCacheContext);
    return func(props, cache3, ref);
  });
};
var ThemeContext = /* @__PURE__ */ createContext({});
if (true) {
  ThemeContext.displayName = "EmotionThemeContext";
}
var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
var labelPropName = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__";
var Emotion = /* @__PURE__ */ withEmotionCache(function(props, cache3, ref) {
  var cssProp = props.css;
  if (typeof cssProp === "string" && cache3.registered[cssProp] !== void 0) {
    cssProp = cache3.registered[cssProp];
  }
  var type3 = props[typePropName];
  var registeredStyles = [cssProp];
  var className = "";
  if (typeof props.className === "string") {
    className = getRegisteredStyles(cache3.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }
  var serialized = serializeStyles(registeredStyles, void 0, useContext(ThemeContext));
  if (serialized.name.indexOf("-") === -1) {
    var labelFromStack = props[labelPropName];
    if (labelFromStack) {
      serialized = serializeStyles([serialized, "label:" + labelFromStack + ";"]);
    }
  }
  var rules = insertStyles(cache3, serialized, typeof type3 === "string");
  className += cache3.key + "-" + serialized.name;
  var newProps = {};
  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== "css" && key !== typePropName && key !== labelPropName) {
      newProps[key] = props[key];
    }
  }
  newProps.ref = ref;
  newProps.className = className;
  var ele = /* @__PURE__ */ createElement(type3, newProps);
  return ele;
});
if (true) {
  Emotion.displayName = "EmotionCssPropInternal";
}

// node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var import_hoist_non_react_statics = __toModule(require_hoist_non_react_statics_cjs());

// node_modules/@emotion/react/node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js
function sheetForTag2(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i2 = 0; i2 < document.styleSheets.length; i2++) {
    if (document.styleSheets[i2].ownerNode === tag) {
      return document.styleSheets[i2];
    }
  }
}
function createStyleElement2(options) {
  var tag = document.createElement("style");
  tag.setAttribute("data-emotion", options.key);
  if (options.nonce !== void 0) {
    tag.setAttribute("nonce", options.nonce);
  }
  tag.appendChild(document.createTextNode(""));
  tag.setAttribute("data-s", "");
  return tag;
}
var StyleSheet2 = /* @__PURE__ */ function() {
  function StyleSheet4(options) {
    var _this = this;
    this._insertTag = function(tag) {
      var before;
      if (_this.tags.length === 0) {
        before = _this.prepend ? _this.container.firstChild : _this.before;
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options.speedy === void 0 ? false : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce;
    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.before = null;
  }
  var _proto = StyleSheet4.prototype;
  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      this._insertTag(createStyleElement2(this));
    }
    var tag = this.tags[this.tags.length - 1];
    if (true) {
      var isImportRule3 = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;
      if (isImportRule3 && this._alreadyInsertedOrderInsensitiveRule) {
        console.error("You're attempting to insert the following rule:\n" + rule + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.");
      }
      this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule3;
    }
    if (this.isSpeedy) {
      var sheet = sheetForTag2(tag);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e2) {
        if (!/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear){/.test(rule)) {
          console.error('There was a problem inserting the following rule: "' + rule + '"', e2);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function(tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
    if (true) {
      this._alreadyInsertedOrderInsensitiveRule = false;
    }
  };
  return StyleSheet4;
}();

// node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var pkg = {
  name: "@emotion/react",
  version: "11.4.1",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.cjs.js": "./dist/emotion-react.browser.cjs.js",
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "isolated-hoist-non-react-statics-do-not-use-this-in-your-code",
    "types/*.d.ts",
    "macro.js",
    "macro.d.ts",
    "macro.js.flow"
  ],
  sideEffects: false,
  author: "mitchellhamilton <mitchell@mitchellhamilton.me>",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.13.10",
    "@emotion/cache": "^11.4.0",
    "@emotion/serialize": "^1.0.2",
    "@emotion/sheet": "^1.0.2",
    "@emotion/utils": "^1.0.0",
    "@emotion/weak-memoize": "^0.2.5",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    "@babel/core": "^7.0.0",
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@babel/core": {
      optional: true
    },
    "@types/react": {
      optional: true
    }
  },
  devDependencies: {
    "@babel/core": "^7.13.10",
    "@emotion/css": "11.1.3",
    "@emotion/css-prettifier": "1.0.0",
    "@emotion/server": "11.4.0",
    "@emotion/styled": "11.3.0",
    "@types/react": "^16.9.11",
    dtslint: "^0.3.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./isolated-hoist-non-react-statics-do-not-use-this-in-your-code.js"
    ],
    umdName: "emotionReact"
  }
};
var warnedAboutCssPropForGlobal = false;
var Global = /* @__PURE__ */ withEmotionCache(function(props, cache3) {
  if (!warnedAboutCssPropForGlobal && (props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }
  var styles20 = props.styles;
  var serialized = serializeStyles([styles20], void 0, useContext2(ThemeContext));
  var sheetRef = useRef3();
  useLayoutEffect2(function() {
    var key = cache3.key + "-global";
    var sheet = new StyleSheet2({
      key,
      nonce: cache3.sheet.nonce,
      container: cache3.sheet.container,
      speedy: cache3.sheet.isSpeedy
    });
    var rehydrating = false;
    var node2 = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
    if (cache3.sheet.tags.length) {
      sheet.before = cache3.sheet.tags[0];
    }
    if (node2 !== null) {
      rehydrating = true;
      node2.setAttribute("data-emotion", key);
      sheet.hydrate([node2]);
    }
    sheetRef.current = [sheet, rehydrating];
    return function() {
      sheet.flush();
    };
  }, [cache3]);
  useLayoutEffect2(function() {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }
    if (serialized.next !== void 0) {
      insertStyles(cache3, serialized.next, true);
    }
    if (sheet.tags.length) {
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }
    cache3.insert("", serialized, sheet, false);
  }, [cache3, serialized.name]);
  return null;
});
if (true) {
  Global.displayName = "EmotionGlobal";
}
function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return serializeStyles(args);
}
var keyframes = function keyframes2() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name;
  return {
    name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
var classnames = function classnames2(args) {
  var len = args.length;
  var i2 = 0;
  var cls = "";
  for (; i2 < len; i2++) {
    var arg = args[i2];
    if (arg == null)
      continue;
    var toAdd = void 0;
    switch (typeof arg) {
      case "boolean":
        break;
      case "object": {
        if (Array.isArray(arg)) {
          toAdd = classnames2(arg);
        } else {
          if (arg.styles !== void 0 && arg.name !== void 0) {
            console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.");
          }
          toAdd = "";
          for (var k2 in arg) {
            if (arg[k2] && k2) {
              toAdd && (toAdd += " ");
              toAdd += k2;
            }
          }
        }
        break;
      }
      default: {
        toAdd = arg;
      }
    }
    if (toAdd) {
      cls && (cls += " ");
      cls += toAdd;
    }
  }
  return cls;
};
function merge(registered, css4, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);
  if (registeredStyles.length < 2) {
    return className;
  }
  return rawClassName + css4(registeredStyles);
}
var ClassNames = /* @__PURE__ */ withEmotionCache(function(props, cache3) {
  var hasRendered = false;
  var css4 = function css5() {
    if (hasRendered && true) {
      throw new Error("css can only be used during render");
    }
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var serialized = serializeStyles(args, cache3.registered);
    {
      insertStyles(cache3, serialized, false);
    }
    return cache3.key + "-" + serialized.name;
  };
  var cx = function cx2() {
    if (hasRendered && true) {
      throw new Error("cx can only be used during render");
    }
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return merge(cache3.registered, css4, classnames(args));
  };
  var content3 = {
    css: css4,
    cx,
    theme: useContext2(ThemeContext)
  };
  var ele = props.children(content3);
  hasRendered = true;
  return ele;
});
if (true) {
  ClassNames.displayName = "EmotionClassNames";
}
if (true) {
  isBrowser5 = true;
  isJest = typeof jest !== "undefined";
  if (isBrowser5 && !isJest) {
    globalContext = isBrowser5 ? window : global;
    globalKey = "__EMOTION_REACT_" + pkg.version.split(".")[0] + "__";
    if (globalContext[globalKey]) {
      console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used.");
    }
    globalContext[globalKey] = true;
  }
}
var isBrowser5;
var isJest;
var globalContext;
var globalKey;

// node_modules/@emotion/styled/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
var isBrowser2 = true;
function getRegisteredStyles2(registered, registeredStyles, classNames) {
  var rawClassName = "";
  classNames.split(" ").forEach(function(className) {
    if (registered[className] !== void 0) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles3 = function insertStyles4(cache3, serialized, isStringTag) {
  var className = cache3.key + "-" + serialized.name;
  if ((isStringTag === false || isBrowser2 === false) && cache3.registered[className] === void 0) {
    cache3.registered[className] = serialized.styles;
  }
  if (cache3.inserted[serialized.name] === void 0) {
    var current = serialized;
    do {
      var maybeStyles = cache3.insert(serialized === current ? "." + className : "", current, cache3.sheet, true);
      current = current.next;
    } while (current !== void 0);
  }
};

// node_modules/@emotion/styled/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js
var ILLEGAL_ESCAPE_SEQUENCE_ERROR2 = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`;
var UNDEFINED_AS_OBJECT_KEY_ERROR2 = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex2 = /[A-Z]|^ms/g;
var animationRegex2 = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty3 = function isCustomProperty4(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue3 = function isProcessableValue4(value) {
  return value != null && typeof value !== "boolean";
};
var processStyleName2 = /* @__PURE__ */ memoize_browser_esm_default(function(styleName) {
  return isCustomProperty3(styleName) ? styleName : styleName.replace(hyphenateRegex2, "-$&").toLowerCase();
});
var processStyleValue3 = function processStyleValue4(key, value) {
  switch (key) {
    case "animation":
    case "animationName": {
      if (typeof value === "string") {
        return value.replace(animationRegex2, function(match2, p1, p2) {
          cursor2 = {
            name: p1,
            styles: p2,
            next: cursor2
          };
          return p1;
        });
      }
    }
  }
  if (unitless_browser_esm_default[key] !== 1 && !isCustomProperty3(key) && typeof value === "number" && value !== 0) {
    return value + "px";
  }
  return value;
};
if (true) {
  contentValuePattern = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
  contentValues = ["normal", "none", "initial", "inherit", "unset"];
  oldProcessStyleValue = processStyleValue3;
  msPattern2 = /^-ms-/;
  hyphenPattern = /-(.)/g;
  hyphenatedCache = {};
  processStyleValue3 = function processStyleValue5(key, value) {
    if (key === "content") {
      if (typeof value !== "string" || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }
    var processed = oldProcessStyleValue(key, value);
    if (processed !== "" && !isCustomProperty3(key) && key.indexOf("-") !== -1 && hyphenatedCache[key] === void 0) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern2, "ms-").replace(hyphenPattern, function(str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }
    return processed;
  };
}
var contentValuePattern;
var contentValues;
var oldProcessStyleValue;
var msPattern2;
var hyphenPattern;
var hyphenatedCache;
function handleInterpolation2(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return "";
  }
  if (interpolation.__emotion_styles !== void 0) {
    if (interpolation.toString() === "NO_COMPONENT_SELECTOR") {
      throw new Error("Component selectors can only be used in conjunction with @emotion/babel-plugin.");
    }
    return interpolation;
  }
  switch (typeof interpolation) {
    case "boolean": {
      return "";
    }
    case "object": {
      if (interpolation.anim === 1) {
        cursor2 = {
          name: interpolation.name,
          styles: interpolation.styles,
          next: cursor2
        };
        return interpolation.name;
      }
      if (interpolation.styles !== void 0) {
        var next2 = interpolation.next;
        if (next2 !== void 0) {
          while (next2 !== void 0) {
            cursor2 = {
              name: next2.name,
              styles: next2.styles,
              next: cursor2
            };
            next2 = next2.next;
          }
        }
        var styles20 = interpolation.styles + ";";
        if (interpolation.map !== void 0) {
          styles20 += interpolation.map;
        }
        return styles20;
      }
      return createStringFromObject2(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor2;
        var result = interpolation(mergedProps);
        cursor2 = previousCursor;
        return handleInterpolation2(mergedProps, registered, result);
      } else if (true) {
        console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      }
      break;
    }
    case "string":
      if (true) {
        var matched = [];
        var replaced = interpolation.replace(animationRegex2, function(match2, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, "") + "`");
          return "${" + fakeVarName + "}";
        });
        if (matched.length) {
          console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(matched, ["`" + replaced + "`"]).join("\n") + "\n\nYou should wrap it with `css` like this:\n\n" + ("css`" + replaced + "`"));
        }
      }
      break;
  }
  if (registered == null) {
    return interpolation;
  }
  var cached = registered[interpolation];
  return cached !== void 0 ? cached : interpolation;
}
function createStringFromObject2(mergedProps, registered, obj) {
  var string = "";
  if (Array.isArray(obj)) {
    for (var i2 = 0; i2 < obj.length; i2++) {
      string += handleInterpolation2(mergedProps, registered, obj[i2]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];
      if (typeof value !== "object") {
        if (registered != null && registered[value] !== void 0) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue3(value)) {
          string += processStyleName2(_key) + ":" + processStyleValue3(_key, value) + ";";
        }
      } else {
        if (_key === "NO_COMPONENT_SELECTOR" && true) {
          throw new Error("Component selectors can only be used in conjunction with @emotion/babel-plugin.");
        }
        if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue3(value[_i])) {
              string += processStyleName2(_key) + ":" + processStyleValue3(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation2(mergedProps, registered, value);
          switch (_key) {
            case "animation":
            case "animationName": {
              string += processStyleName2(_key) + ":" + interpolated + ";";
              break;
            }
            default: {
              if (_key === "undefined") {
                console.error(UNDEFINED_AS_OBJECT_KEY_ERROR2);
              }
              string += _key + "{" + interpolated + "}";
            }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern2 = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var sourceMapPattern2;
if (true) {
  sourceMapPattern2 = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
}
var cursor2;
var serializeStyles3 = function serializeStyles4(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
    return args[0];
  }
  var stringMode = true;
  var styles20 = "";
  cursor2 = void 0;
  var strings = args[0];
  if (strings == null || strings.raw === void 0) {
    stringMode = false;
    styles20 += handleInterpolation2(mergedProps, registered, strings);
  } else {
    if (strings[0] === void 0) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR2);
    }
    styles20 += strings[0];
  }
  for (var i2 = 1; i2 < args.length; i2++) {
    styles20 += handleInterpolation2(mergedProps, registered, args[i2]);
    if (stringMode) {
      if (strings[i2] === void 0) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR2);
      }
      styles20 += strings[i2];
    }
  }
  var sourceMap;
  if (true) {
    styles20 = styles20.replace(sourceMapPattern2, function(match3) {
      sourceMap = match3;
      return "";
    });
  }
  labelPattern2.lastIndex = 0;
  var identifierName = "";
  var match2;
  while ((match2 = labelPattern2.exec(styles20)) !== null) {
    identifierName += "-" + match2[1];
  }
  var name = hash_browser_esm_default(styles20) + identifierName;
  if (true) {
    return {
      name,
      styles: styles20,
      map: sourceMap,
      next: cursor2,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }
  return {
    name,
    styles: styles20,
    next: cursor2
  };
};

// node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js
var testOmitPropsOnStringTag = emotion_is_prop_valid_browser_esm_default;
var testOmitPropsOnComponent = function testOmitPropsOnComponent2(key) {
  return key !== "theme";
};
var getDefaultShouldForwardProp = function getDefaultShouldForwardProp2(tag) {
  return typeof tag === "string" && tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps2(tag, options, isReal) {
  var shouldForwardProp2;
  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp2 = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }
  if (typeof shouldForwardProp2 !== "function" && isReal) {
    shouldForwardProp2 = tag.__emotion_forwardProp;
  }
  return shouldForwardProp2;
};
var ILLEGAL_ESCAPE_SEQUENCE_ERROR3 = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`;
var createStyled = function createStyled2(tag, options) {
  if (true) {
    if (tag === void 0) {
      throw new Error("You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.");
    }
  }
  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  var identifierName;
  var targetClassName;
  if (options !== void 0) {
    identifierName = options.label;
    targetClassName = options.target;
  }
  var shouldForwardProp2 = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp2 || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp("as");
  return function() {
    var args = arguments;
    var styles20 = isReal && tag.__emotion_styles !== void 0 ? tag.__emotion_styles.slice(0) : [];
    if (identifierName !== void 0) {
      styles20.push("label:" + identifierName + ";");
    }
    if (args[0] == null || args[0].raw === void 0) {
      styles20.push.apply(styles20, args);
    } else {
      if (args[0][0] === void 0) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR3);
      }
      styles20.push(args[0][0]);
      var len = args.length;
      var i2 = 1;
      for (; i2 < len; i2++) {
        if (args[0][i2] === void 0) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR3);
        }
        styles20.push(args[i2], args[0][i2]);
      }
    }
    var Styled = withEmotionCache(function(props, cache3, ref) {
      var finalTag = shouldUseAs && props.as || baseTag;
      var className = "";
      var classInterpolations = [];
      var mergedProps = props;
      if (props.theme == null) {
        mergedProps = {};
        for (var key in props) {
          mergedProps[key] = props[key];
        }
        mergedProps.theme = useContext3(ThemeContext);
      }
      if (typeof props.className === "string") {
        className = getRegisteredStyles2(cache3.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }
      var serialized = serializeStyles3(styles20.concat(classInterpolations), cache3.registered, mergedProps);
      var rules = insertStyles3(cache3, serialized, typeof finalTag === "string");
      className += cache3.key + "-" + serialized.name;
      if (targetClassName !== void 0) {
        className += " " + targetClassName;
      }
      var finalShouldForwardProp = shouldUseAs && shouldForwardProp2 === void 0 ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
      var newProps = {};
      for (var _key in props) {
        if (shouldUseAs && _key === "as")
          continue;
        if (finalShouldForwardProp(_key)) {
          newProps[_key] = props[_key];
        }
      }
      newProps.className = className;
      newProps.ref = ref;
      var ele = /* @__PURE__ */ createElement3(finalTag, newProps);
      return ele;
    });
    Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag === "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles20;
    Styled.__emotion_forwardProp = shouldForwardProp2;
    Object.defineProperty(Styled, "toString", {
      value: function value() {
        if (targetClassName === void 0 && true) {
          return "NO_COMPONENT_SELECTOR";
        }
        return "." + targetClassName;
      }
    });
    Styled.withComponent = function(nextTag, nextOptions) {
      return createStyled2(nextTag, _extends({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })).apply(void 0, styles20);
    };
    return Styled;
  };
};
var emotion_styled_base_browser_esm_default = createStyled;

// node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js
var tags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
];
var newStyled = emotion_styled_base_browser_esm_default.bind();
tags.forEach(function(tagName) {
  newStyled[tagName] = newStyled(tagName);
});
var emotion_styled_browser_esm_default = newStyled;

// node_modules/@mui/styled-engine/index.js
function styled(tag, options) {
  const stylesFactory = emotion_styled_browser_esm_default(tag, options);
  if (true) {
    return (...styles20) => {
      const component = typeof tag === "string" ? `"${tag}"` : "component";
      if (styles20.length === 0) {
        console.error([`MUI: Seems like you called \`styled(${component})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join("\n"));
      } else if (styles20.some((style3) => style3 === void 0)) {
        console.error(`MUI: the styled(${component})(...args) API requires all its args to be defined.`);
      }
      return stylesFactory(...styles20);
    };
  }
  return stylesFactory;
}

// node_modules/@mui/system/esm/responsivePropType.js
var import_prop_types3 = __toModule(require_prop_types());
var responsivePropType = true ? import_prop_types3.default.oneOfType([import_prop_types3.default.number, import_prop_types3.default.string, import_prop_types3.default.object, import_prop_types3.default.array]) : {};
var responsivePropType_default = responsivePropType;

// node_modules/@mui/system/esm/breakpoints.js
var import_prop_types4 = __toModule(require_prop_types());

// node_modules/@mui/system/esm/merge.js
function merge2(acc, item) {
  if (!item) {
    return acc;
  }
  return deepmerge(acc, item, {
    clone: false
  });
}
var merge_default = merge2;

// node_modules/@mui/system/esm/breakpoints.js
var values = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536
};
var defaultBreakpoints = {
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (key) => `@media (min-width:${values[key]}px)`
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  const theme = props.theme || {};
  if (Array.isArray(propValue)) {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return propValue.reduce((acc, item, index3) => {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index3])] = styleFromPropValue(propValue[index3]);
      return acc;
    }, {});
  }
  if (typeof propValue === "object") {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return Object.keys(propValue).reduce((acc, breakpoint) => {
      if (Object.keys(themeBreakpoints.values || values).indexOf(breakpoint) !== -1) {
        const mediaKey = themeBreakpoints.up(breakpoint);
        acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
      } else {
        const cssKey = breakpoint;
        acc[cssKey] = propValue[cssKey];
      }
      return acc;
    }, {});
  }
  const output = styleFromPropValue(propValue);
  return output;
}
function createEmptyBreakpointObject(breakpointsInput = {}) {
  var _breakpointsInput$key;
  const breakpointsInOrder = breakpointsInput == null ? void 0 : (_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce((acc, key) => {
    const breakpointStyleKey = breakpointsInput.up(key);
    acc[breakpointStyleKey] = {};
    return acc;
  }, {});
  return breakpointsInOrder || {};
}
function removeUnusedBreakpoints(breakpointKeys, style3) {
  return breakpointKeys.reduce((acc, key) => {
    const breakpointOutput = acc[key];
    const isBreakpointUnused = Object.keys(breakpointOutput).length === 0;
    if (isBreakpointUnused) {
      delete acc[key];
    }
    return acc;
  }, style3);
}

// node_modules/@mui/system/esm/style.js
function getPath(obj, path) {
  if (!path || typeof path !== "string") {
    return null;
  }
  return path.split(".").reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
}
function getValue(themeMapping, transform3, propValueFinal, userValue = propValueFinal) {
  let value;
  if (typeof themeMapping === "function") {
    value = themeMapping(propValueFinal);
  } else if (Array.isArray(themeMapping)) {
    value = themeMapping[propValueFinal] || userValue;
  } else {
    value = getPath(themeMapping, propValueFinal) || userValue;
  }
  if (transform3) {
    value = transform3(value);
  }
  return value;
}
function style(options) {
  const {
    prop,
    cssProperty = options.prop,
    themeKey,
    transform: transform3
  } = options;
  const fn = (props) => {
    if (props[prop] == null) {
      return null;
    }
    const propValue = props[prop];
    const theme = props.theme;
    const themeMapping = getPath(theme, themeKey) || {};
    const styleFromPropValue = (propValueFinal) => {
      let value = getValue(themeMapping, transform3, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === "string") {
        value = getValue(themeMapping, transform3, `${prop}${propValueFinal === "default" ? "" : capitalize(propValueFinal)}`, propValueFinal);
      }
      if (cssProperty === false) {
        return value;
      }
      return {
        [cssProperty]: value
      };
    };
    return handleBreakpoints(props, propValue, styleFromPropValue);
  };
  fn.propTypes = true ? {
    [prop]: responsivePropType_default
  } : {};
  fn.filterProps = [prop];
  return fn;
}
var style_default = style;

// node_modules/@mui/system/esm/compose.js
function compose(...styles20) {
  const handlers = styles20.reduce((acc, style3) => {
    style3.filterProps.forEach((prop) => {
      acc[prop] = style3;
    });
    return acc;
  }, {});
  const fn = (props) => {
    return Object.keys(props).reduce((acc, prop) => {
      if (handlers[prop]) {
        return merge_default(acc, handlers[prop](props));
      }
      return acc;
    }, {});
  };
  fn.propTypes = true ? styles20.reduce((acc, style3) => Object.assign(acc, style3.propTypes), {}) : {};
  fn.filterProps = styles20.reduce((acc, style3) => acc.concat(style3.filterProps), []);
  return fn;
}
var compose_default = compose;

// node_modules/@mui/system/esm/memoize.js
function memoize2(fn) {
  const cache3 = {};
  return (arg) => {
    if (cache3[arg] === void 0) {
      cache3[arg] = fn(arg);
    }
    return cache3[arg];
  };
}

// node_modules/@mui/system/esm/spacing.js
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
var getCssProperties = memoize2((prop) => {
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }
  const [a2, b2] = prop.split("");
  const property = properties[a2];
  const direction = directions[b2] || "";
  return Array.isArray(direction) ? direction.map((dir) => property + dir) : [property + direction];
});
var marginKeys = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY"];
var paddingKeys = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY"];
var spacingKeys = [...marginKeys, ...paddingKeys];
function createUnaryUnit(theme, themeKey, defaultValue, propName) {
  const themeSpacing = getPath(theme, themeKey) || defaultValue;
  if (typeof themeSpacing === "number") {
    return (abs2) => {
      if (typeof abs2 === "string") {
        return abs2;
      }
      if (true) {
        if (typeof abs2 !== "number") {
          console.error(`MUI: Expected ${propName} argument to be a number or a string, got ${abs2}.`);
        }
      }
      return themeSpacing * abs2;
    };
  }
  if (Array.isArray(themeSpacing)) {
    return (abs2) => {
      if (typeof abs2 === "string") {
        return abs2;
      }
      if (true) {
        if (!Number.isInteger(abs2)) {
          console.error([`MUI: The \`theme.${themeKey}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${themeKey}\` as a number.`].join("\n"));
        } else if (abs2 > themeSpacing.length - 1) {
          console.error([`MUI: The value provided (${abs2}) overflows.`, `The supported values are: ${JSON.stringify(themeSpacing)}.`, `${abs2} > ${themeSpacing.length - 1}, you need to add the missing values.`].join("\n"));
        }
      }
      return themeSpacing[abs2];
    };
  }
  if (typeof themeSpacing === "function") {
    return themeSpacing;
  }
  if (true) {
    console.error([`MUI: The \`theme.${themeKey}\` value (${themeSpacing}) is invalid.`, "It should be a number, an array or a function."].join("\n"));
  }
  return () => void 0;
}
function createUnarySpacing(theme) {
  return createUnaryUnit(theme, "spacing", 8, "spacing");
}
function getValue2(transformer, propValue) {
  if (typeof propValue === "string" || propValue == null) {
    return propValue;
  }
  const abs2 = Math.abs(propValue);
  const transformed = transformer(abs2);
  if (propValue >= 0) {
    return transformed;
  }
  if (typeof transformed === "number") {
    return -transformed;
  }
  return `-${transformed}`;
}
function getStyleFromPropValue(cssProperties, transformer) {
  return (propValue) => cssProperties.reduce((acc, cssProperty) => {
    acc[cssProperty] = getValue2(transformer, propValue);
    return acc;
  }, {});
}
function resolveCssProperty(props, keys3, prop, transformer) {
  if (keys3.indexOf(prop) === -1) {
    return null;
  }
  const cssProperties = getCssProperties(prop);
  const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
  const propValue = props[prop];
  return handleBreakpoints(props, propValue, styleFromPropValue);
}
function style2(props, keys3) {
  const transformer = createUnarySpacing(props.theme);
  return Object.keys(props).map((prop) => resolveCssProperty(props, keys3, prop, transformer)).reduce(merge_default, {});
}
function margin(props) {
  return style2(props, marginKeys);
}
margin.propTypes = true ? marginKeys.reduce((obj, key) => {
  obj[key] = responsivePropType_default;
  return obj;
}, {}) : {};
margin.filterProps = marginKeys;
function padding(props) {
  return style2(props, paddingKeys);
}
padding.propTypes = true ? paddingKeys.reduce((obj, key) => {
  obj[key] = responsivePropType_default;
  return obj;
}, {}) : {};
padding.filterProps = paddingKeys;
function spacing(props) {
  return style2(props, spacingKeys);
}
spacing.propTypes = true ? spacingKeys.reduce((obj, key) => {
  obj[key] = responsivePropType_default;
  return obj;
}, {}) : {};
spacing.filterProps = spacingKeys;
var spacing_default = spacing;

// node_modules/@mui/system/esm/borders.js
function getBorder(value) {
  if (typeof value !== "number") {
    return value;
  }
  return `${value}px solid`;
}
var border = style_default({
  prop: "border",
  themeKey: "borders",
  transform: getBorder
});
var borderTop = style_default({
  prop: "borderTop",
  themeKey: "borders",
  transform: getBorder
});
var borderRight = style_default({
  prop: "borderRight",
  themeKey: "borders",
  transform: getBorder
});
var borderBottom = style_default({
  prop: "borderBottom",
  themeKey: "borders",
  transform: getBorder
});
var borderLeft = style_default({
  prop: "borderLeft",
  themeKey: "borders",
  transform: getBorder
});
var borderColor = style_default({
  prop: "borderColor",
  themeKey: "palette"
});
var borderTopColor = style_default({
  prop: "borderTopColor",
  themeKey: "palette"
});
var borderRightColor = style_default({
  prop: "borderRightColor",
  themeKey: "palette"
});
var borderBottomColor = style_default({
  prop: "borderBottomColor",
  themeKey: "palette"
});
var borderLeftColor = style_default({
  prop: "borderLeftColor",
  themeKey: "palette"
});
var borderRadius = (props) => {
  if (props.borderRadius !== void 0 && props.borderRadius !== null) {
    const transformer = createUnaryUnit(props.theme, "shape.borderRadius", 4, "borderRadius");
    const styleFromPropValue = (propValue) => ({
      borderRadius: getValue2(transformer, propValue)
    });
    return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
  }
  return null;
};
borderRadius.propTypes = true ? {
  borderRadius: responsivePropType_default
} : {};
borderRadius.filterProps = ["borderRadius"];
var borders = compose_default(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius);
var borders_default = borders;

// node_modules/@mui/system/esm/display.js
var displayPrint = style_default({
  prop: "displayPrint",
  cssProperty: false,
  transform: (value) => ({
    "@media print": {
      display: value
    }
  })
});
var displayRaw = style_default({
  prop: "display"
});
var overflow = style_default({
  prop: "overflow"
});
var textOverflow = style_default({
  prop: "textOverflow"
});
var visibility = style_default({
  prop: "visibility"
});
var whiteSpace = style_default({
  prop: "whiteSpace"
});
var display_default = compose_default(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace);

// node_modules/@mui/system/esm/flexbox.js
var flexBasis = style_default({
  prop: "flexBasis"
});
var flexDirection = style_default({
  prop: "flexDirection"
});
var flexWrap = style_default({
  prop: "flexWrap"
});
var justifyContent = style_default({
  prop: "justifyContent"
});
var alignItems = style_default({
  prop: "alignItems"
});
var alignContent = style_default({
  prop: "alignContent"
});
var order = style_default({
  prop: "order"
});
var flex = style_default({
  prop: "flex"
});
var flexGrow = style_default({
  prop: "flexGrow"
});
var flexShrink = style_default({
  prop: "flexShrink"
});
var alignSelf = style_default({
  prop: "alignSelf"
});
var justifyItems = style_default({
  prop: "justifyItems"
});
var justifySelf = style_default({
  prop: "justifySelf"
});
var flexbox = compose_default(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf);
var flexbox_default = flexbox;

// node_modules/@mui/system/esm/grid.js
var gap = (props) => {
  if (props.gap !== void 0 && props.gap !== null) {
    const transformer = createUnaryUnit(props.theme, "spacing", 8, "gap");
    const styleFromPropValue = (propValue) => ({
      gap: getValue2(transformer, propValue)
    });
    return handleBreakpoints(props, props.gap, styleFromPropValue);
  }
  return null;
};
gap.propTypes = true ? {
  gap: responsivePropType_default
} : {};
gap.filterProps = ["gap"];
var columnGap = (props) => {
  if (props.columnGap !== void 0 && props.columnGap !== null) {
    const transformer = createUnaryUnit(props.theme, "spacing", 8, "columnGap");
    const styleFromPropValue = (propValue) => ({
      columnGap: getValue2(transformer, propValue)
    });
    return handleBreakpoints(props, props.columnGap, styleFromPropValue);
  }
  return null;
};
columnGap.propTypes = true ? {
  columnGap: responsivePropType_default
} : {};
columnGap.filterProps = ["columnGap"];
var rowGap = (props) => {
  if (props.rowGap !== void 0 && props.rowGap !== null) {
    const transformer = createUnaryUnit(props.theme, "spacing", 8, "rowGap");
    const styleFromPropValue = (propValue) => ({
      rowGap: getValue2(transformer, propValue)
    });
    return handleBreakpoints(props, props.rowGap, styleFromPropValue);
  }
  return null;
};
rowGap.propTypes = true ? {
  rowGap: responsivePropType_default
} : {};
rowGap.filterProps = ["rowGap"];
var gridColumn = style_default({
  prop: "gridColumn"
});
var gridRow = style_default({
  prop: "gridRow"
});
var gridAutoFlow = style_default({
  prop: "gridAutoFlow"
});
var gridAutoColumns = style_default({
  prop: "gridAutoColumns"
});
var gridAutoRows = style_default({
  prop: "gridAutoRows"
});
var gridTemplateColumns = style_default({
  prop: "gridTemplateColumns"
});
var gridTemplateRows = style_default({
  prop: "gridTemplateRows"
});
var gridTemplateAreas = style_default({
  prop: "gridTemplateAreas"
});
var gridArea = style_default({
  prop: "gridArea"
});
var grid = compose_default(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
var grid_default = grid;

// node_modules/@mui/system/esm/palette.js
var color = style_default({
  prop: "color",
  themeKey: "palette"
});
var bgcolor = style_default({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette"
});
var backgroundColor = style_default({
  prop: "backgroundColor",
  themeKey: "palette"
});
var palette = compose_default(color, bgcolor, backgroundColor);
var palette_default = palette;

// node_modules/@mui/system/esm/positions.js
var position2 = style_default({
  prop: "position"
});
var zIndex = style_default({
  prop: "zIndex",
  themeKey: "zIndex"
});
var top = style_default({
  prop: "top"
});
var right = style_default({
  prop: "right"
});
var bottom = style_default({
  prop: "bottom"
});
var left = style_default({
  prop: "left"
});
var positions_default = compose_default(position2, zIndex, top, right, bottom, left);

// node_modules/@mui/system/esm/shadows.js
var boxShadow = style_default({
  prop: "boxShadow",
  themeKey: "shadows"
});
var shadows_default = boxShadow;

// node_modules/@mui/system/esm/sizing.js
function transform(value) {
  return value <= 1 && value !== 0 ? `${value * 100}%` : value;
}
var width = style_default({
  prop: "width",
  transform
});
var maxWidth = (props) => {
  if (props.maxWidth !== void 0 && props.maxWidth !== null) {
    const styleFromPropValue = (propValue) => {
      var _props$theme, _props$theme$breakpoi, _props$theme$breakpoi2;
      const breakpoint = ((_props$theme = props.theme) == null ? void 0 : (_props$theme$breakpoi = _props$theme.breakpoints) == null ? void 0 : (_props$theme$breakpoi2 = _props$theme$breakpoi.values) == null ? void 0 : _props$theme$breakpoi2[propValue]) || values[propValue];
      return {
        maxWidth: breakpoint || transform(propValue)
      };
    };
    return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
  }
  return null;
};
maxWidth.filterProps = ["maxWidth"];
var minWidth = style_default({
  prop: "minWidth",
  transform
});
var height = style_default({
  prop: "height",
  transform
});
var maxHeight = style_default({
  prop: "maxHeight",
  transform
});
var minHeight = style_default({
  prop: "minHeight",
  transform
});
var sizeWidth = style_default({
  prop: "size",
  cssProperty: "width",
  transform
});
var sizeHeight = style_default({
  prop: "size",
  cssProperty: "height",
  transform
});
var boxSizing = style_default({
  prop: "boxSizing"
});
var sizing = compose_default(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
var sizing_default = sizing;

// node_modules/@mui/system/esm/typography.js
var fontFamily = style_default({
  prop: "fontFamily",
  themeKey: "typography"
});
var fontSize = style_default({
  prop: "fontSize",
  themeKey: "typography"
});
var fontStyle = style_default({
  prop: "fontStyle",
  themeKey: "typography"
});
var fontWeight = style_default({
  prop: "fontWeight",
  themeKey: "typography"
});
var letterSpacing = style_default({
  prop: "letterSpacing"
});
var lineHeight = style_default({
  prop: "lineHeight"
});
var textAlign = style_default({
  prop: "textAlign"
});
var typographyVariant = style_default({
  prop: "typography",
  cssProperty: false,
  themeKey: "typography"
});
var typography = compose_default(typographyVariant, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign);
var typography_default = typography;

// node_modules/@mui/system/esm/getThemeValue.js
var filterPropsMapping = {
  borders: borders_default.filterProps,
  display: display_default.filterProps,
  flexbox: flexbox_default.filterProps,
  grid: grid_default.filterProps,
  positions: positions_default.filterProps,
  palette: palette_default.filterProps,
  shadows: shadows_default.filterProps,
  sizing: sizing_default.filterProps,
  spacing: spacing_default.filterProps,
  typography: typography_default.filterProps
};
var styleFunctionMapping = {
  borders: borders_default,
  display: display_default,
  flexbox: flexbox_default,
  grid: grid_default,
  positions: positions_default,
  palette: palette_default,
  shadows: shadows_default,
  sizing: sizing_default,
  spacing: spacing_default,
  typography: typography_default
};
var propToStyleFunction = Object.keys(filterPropsMapping).reduce((acc, styleFnName) => {
  filterPropsMapping[styleFnName].forEach((propName) => {
    acc[propName] = styleFunctionMapping[styleFnName];
  });
  return acc;
}, {});
function getThemeValue(prop, value, theme) {
  const inputProps = {
    [prop]: value,
    theme
  };
  const styleFunction = propToStyleFunction[prop];
  return styleFunction ? styleFunction(inputProps) : {
    [prop]: value
  };
}
var getThemeValue_default = getThemeValue;

// node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js
function objectsHaveSameKeys(...objects) {
  const allKeys = objects.reduce((keys3, object) => keys3.concat(Object.keys(object)), []);
  const union = new Set(allKeys);
  return objects.every((object) => union.size === Object.keys(object).length);
}
function callIfFn(maybeFn, arg) {
  return typeof maybeFn === "function" ? maybeFn(arg) : maybeFn;
}
function styleFunctionSx(props) {
  const {
    sx: styles20,
    theme = {}
  } = props || {};
  if (!styles20) {
    return null;
  }
  if (typeof styles20 === "function") {
    return styles20(theme);
  }
  if (typeof styles20 !== "object") {
    return styles20;
  }
  const emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
  const breakpointsKeys = Object.keys(emptyBreakpoints);
  let css4 = emptyBreakpoints;
  Object.keys(styles20).forEach((styleKey) => {
    const value = callIfFn(styles20[styleKey], theme);
    if (typeof value === "object") {
      if (propToStyleFunction[styleKey]) {
        css4 = merge_default(css4, getThemeValue_default(styleKey, value, theme));
      } else {
        const breakpointsValues = handleBreakpoints({
          theme
        }, value, (x2) => ({
          [styleKey]: x2
        }));
        if (objectsHaveSameKeys(breakpointsValues, value)) {
          css4[styleKey] = styleFunctionSx({
            sx: value,
            theme
          });
        } else {
          css4 = merge_default(css4, breakpointsValues);
        }
      }
    } else {
      css4 = merge_default(css4, getThemeValue_default(styleKey, value, theme));
    }
  });
  return removeUnusedBreakpoints(breakpointsKeys, css4);
}
styleFunctionSx.filterProps = ["sx"];
var styleFunctionSx_default = styleFunctionSx;

// node_modules/@mui/system/esm/createTheme/createBreakpoints.js
var _excluded = ["values", "unit", "step"];
function createBreakpoints(breakpoints) {
  const {
    values: values5 = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    },
    unit = "px",
    step = 5
  } = breakpoints, other = _objectWithoutPropertiesLoose(breakpoints, _excluded);
  const keys3 = Object.keys(values5);
  function up2(key) {
    const value = typeof values5[key] === "number" ? values5[key] : key;
    return `@media (min-width:${value}${unit})`;
  }
  function down(key) {
    const value = typeof values5[key] === "number" ? values5[key] : key;
    return `@media (max-width:${value - step / 100}${unit})`;
  }
  function between(start, end) {
    const endIndex = keys3.indexOf(end);
    return `@media (min-width:${typeof values5[start] === "number" ? values5[start] : start}${unit}) and (max-width:${(endIndex !== -1 && typeof values5[keys3[endIndex]] === "number" ? values5[keys3[endIndex]] : end) - step / 100}${unit})`;
  }
  function only(key) {
    if (keys3.indexOf(key) + 1 < keys3.length) {
      return between(key, keys3[keys3.indexOf(key) + 1]);
    }
    return up2(key);
  }
  return _extends({
    keys: keys3,
    values: values5,
    up: up2,
    down,
    between,
    only,
    unit
  }, other);
}

// node_modules/@mui/system/esm/createTheme/shape.js
var shape = {
  borderRadius: 4
};
var shape_default = shape;

// node_modules/@mui/system/esm/createTheme/createSpacing.js
function createSpacing(spacingInput = 8) {
  if (spacingInput.mui) {
    return spacingInput;
  }
  const transform3 = createUnarySpacing({
    spacing: spacingInput
  });
  const spacing4 = (...argsInput) => {
    if (true) {
      if (!(argsInput.length <= 4)) {
        console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${argsInput.length}`);
      }
    }
    const args = argsInput.length === 0 ? [1] : argsInput;
    return args.map((argument) => {
      const output = transform3(argument);
      return typeof output === "number" ? `${output}px` : output;
    }).join(" ");
  };
  spacing4.mui = true;
  return spacing4;
}

// node_modules/@mui/system/esm/createTheme/createTheme.js
var _excluded2 = ["breakpoints", "palette", "spacing", "shape"];
function createTheme(options = {}, ...args) {
  const {
    breakpoints: breakpointsInput = {},
    palette: paletteInput = {},
    spacing: spacingInput,
    shape: shapeInput = {}
  } = options, other = _objectWithoutPropertiesLoose(options, _excluded2);
  const breakpoints = createBreakpoints(breakpointsInput);
  const spacing4 = createSpacing(spacingInput);
  let muiTheme = deepmerge({
    breakpoints,
    direction: "ltr",
    components: {},
    palette: _extends({
      mode: "light"
    }, paletteInput),
    spacing: spacing4,
    shape: _extends({}, shape_default, shapeInput)
  }, other);
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  return muiTheme;
}
var createTheme_default = createTheme;

// node_modules/@mui/private-theming/useTheme/ThemeContext.js
import {
  createContext as createContext2
} from "react";
var ThemeContext2 = /* @__PURE__ */ createContext2(null);
if (true) {
  ThemeContext2.displayName = "ThemeContext";
}
var ThemeContext_default = ThemeContext2;

// node_modules/@mui/private-theming/useTheme/useTheme.js
import {
  useContext as useContext4,
  useDebugValue
} from "react";
function useTheme2() {
  const theme = useContext4(ThemeContext_default);
  if (true) {
    useDebugValue(theme);
  }
  return theme;
}

// node_modules/@mui/system/esm/useThemeWithoutDefault.js
function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
function useTheme3(defaultTheme3 = null) {
  const contextTheme = useTheme2();
  return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme3 : contextTheme;
}
var useThemeWithoutDefault_default = useTheme3;

// node_modules/@mui/system/esm/useTheme.js
var systemDefaultTheme = createTheme_default();
function useTheme4(defaultTheme3 = systemDefaultTheme) {
  return useThemeWithoutDefault_default(defaultTheme3);
}
var useTheme_default = useTheme4;

// node_modules/@mui/system/esm/propsToClassKey.js
var _excluded3 = ["variant"];
function isEmpty(string) {
  return string.length === 0;
}
function propsToClassKey(props) {
  const {
    variant
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded3);
  let classKey = variant || "";
  Object.keys(other).sort().forEach((key) => {
    if (key === "color") {
      classKey += isEmpty(classKey) ? props[key] : capitalize(props[key]);
    } else {
      classKey += `${isEmpty(classKey) ? key : capitalize(key)}${capitalize(props[key].toString())}`;
    }
  });
  return classKey;
}

// node_modules/@mui/system/esm/createStyled.js
var _excluded4 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
var _excluded22 = ["theme"];
var _excluded32 = ["theme"];
function isEmpty2(obj) {
  return Object.keys(obj).length === 0;
}
var getStyleOverrides = (name, theme) => {
  if (theme.components && theme.components[name] && theme.components[name].styleOverrides) {
    return theme.components[name].styleOverrides;
  }
  return null;
};
var getVariantStyles = (name, theme) => {
  let variants = [];
  if (theme && theme.components && theme.components[name] && theme.components[name].variants) {
    variants = theme.components[name].variants;
  }
  const variantsStyles = {};
  variants.forEach((definition) => {
    const key = propsToClassKey(definition.props);
    variantsStyles[key] = definition.style;
  });
  return variantsStyles;
};
var variantsResolver = (props, styles20, theme, name) => {
  var _theme$components, _theme$components$nam;
  const {
    ownerState = {}
  } = props;
  const variantsStyles = [];
  const themeVariants = theme == null ? void 0 : (_theme$components = theme.components) == null ? void 0 : (_theme$components$nam = _theme$components[name]) == null ? void 0 : _theme$components$nam.variants;
  if (themeVariants) {
    themeVariants.forEach((themeVariant) => {
      let isMatch = true;
      Object.keys(themeVariant.props).forEach((key) => {
        if (ownerState[key] !== themeVariant.props[key] && props[key] !== themeVariant.props[key]) {
          isMatch = false;
        }
      });
      if (isMatch) {
        variantsStyles.push(styles20[propsToClassKey(themeVariant.props)]);
      }
    });
  }
  return variantsStyles;
};
function shouldForwardProp(prop) {
  return prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as";
}
var systemDefaultTheme2 = createTheme_default();
var lowercaseFirstLetter = (string) => {
  return string.charAt(0).toLowerCase() + string.slice(1);
};
function createStyled3(input = {}) {
  const {
    defaultTheme: defaultTheme3 = systemDefaultTheme2,
    rootShouldForwardProp: rootShouldForwardProp2 = shouldForwardProp,
    slotShouldForwardProp = shouldForwardProp
  } = input;
  return (tag, inputOptions = {}) => {
    const {
      name: componentName,
      slot: componentSlot,
      skipVariantsResolver: inputSkipVariantsResolver,
      skipSx: inputSkipSx,
      overridesResolver
    } = inputOptions, options = _objectWithoutPropertiesLoose(inputOptions, _excluded4);
    const skipVariantsResolver = inputSkipVariantsResolver !== void 0 ? inputSkipVariantsResolver : componentSlot && componentSlot !== "Root" || false;
    const skipSx = inputSkipSx || false;
    let label3;
    if (true) {
      if (componentName) {
        label3 = `${componentName}-${lowercaseFirstLetter(componentSlot || "Root")}`;
      }
    }
    let shouldForwardPropOption = shouldForwardProp;
    if (componentSlot === "Root") {
      shouldForwardPropOption = rootShouldForwardProp2;
    } else if (componentSlot) {
      shouldForwardPropOption = slotShouldForwardProp;
    }
    const defaultStyledResolver = styled(tag, _extends({
      shouldForwardProp: shouldForwardPropOption,
      label: label3
    }, options));
    const muiStyledResolver = (styleArg, ...expressions) => {
      const expressionsWithDefaultTheme = expressions ? expressions.map((stylesArg) => {
        return typeof stylesArg === "function" ? (_ref) => {
          let {
            theme: themeInput
          } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded22);
          return stylesArg(_extends({
            theme: isEmpty2(themeInput) ? defaultTheme3 : themeInput
          }, other));
        } : stylesArg;
      }) : [];
      let transformedStyleArg = styleArg;
      if (componentName && overridesResolver) {
        expressionsWithDefaultTheme.push((props) => {
          const theme = isEmpty2(props.theme) ? defaultTheme3 : props.theme;
          const styleOverrides = getStyleOverrides(componentName, theme);
          if (styleOverrides) {
            return overridesResolver(props, styleOverrides);
          }
          return null;
        });
      }
      if (componentName && !skipVariantsResolver) {
        expressionsWithDefaultTheme.push((props) => {
          const theme = isEmpty2(props.theme) ? defaultTheme3 : props.theme;
          return variantsResolver(props, getVariantStyles(componentName, theme), theme, componentName);
        });
      }
      if (!skipSx) {
        expressionsWithDefaultTheme.push((props) => {
          const theme = isEmpty2(props.theme) ? defaultTheme3 : props.theme;
          return styleFunctionSx_default(_extends({}, props, {
            theme
          }));
        });
      }
      const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;
      if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
        const placeholders = new Array(numOfCustomFnsApplied).fill("");
        transformedStyleArg = [...styleArg, ...placeholders];
        transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
      } else if (typeof styleArg === "function") {
        transformedStyleArg = (_ref2) => {
          let {
            theme: themeInput
          } = _ref2, other = _objectWithoutPropertiesLoose(_ref2, _excluded32);
          return styleArg(_extends({
            theme: isEmpty2(themeInput) ? defaultTheme3 : themeInput
          }, other));
        };
      }
      const Component3 = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);
      if (true) {
        let displayName;
        if (componentName) {
          displayName = `${componentName}${componentSlot || ""}`;
        }
        if (displayName === void 0) {
          displayName = `Styled(${getDisplayName(tag)})`;
        }
        Component3.displayName = displayName;
      }
      return Component3;
    };
    return muiStyledResolver;
  };
}

// node_modules/@mui/system/esm/useThemeProps/getThemeProps.js
function getThemeProps(params) {
  const {
    theme,
    name,
    props
  } = params;
  if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
    return props;
  }
  const output = _extends({}, props);
  const defaultProps2 = theme.components[name].defaultProps;
  let propName;
  for (propName in defaultProps2) {
    if (output[propName] === void 0) {
      output[propName] = defaultProps2[propName];
    }
  }
  return output;
}

// node_modules/@mui/system/esm/useThemeProps/useThemeProps.js
function useThemeProps({
  props,
  name,
  defaultTheme: defaultTheme3
}) {
  const theme = useTheme_default(defaultTheme3);
  const mergedProps = getThemeProps({
    theme,
    name,
    props
  });
  return mergedProps;
}

// node_modules/@mui/system/esm/colorManipulator.js
function clamp(value, min = 0, max = 1) {
  if (true) {
    if (value < min || value > max) {
      console.error(`MUI: The value provided ${value} is out of range [${min}, ${max}].`);
    }
  }
  return Math.min(Math.max(min, value), max);
}
function hexToRgb(color2) {
  color2 = color2.substr(1);
  const re2 = new RegExp(`.{1,${color2.length >= 6 ? 2 : 1}}`, "g");
  let colors = color2.match(re2);
  if (colors && colors[0].length === 1) {
    colors = colors.map((n2) => n2 + n2);
  }
  return colors ? `rgb${colors.length === 4 ? "a" : ""}(${colors.map((n2, index3) => {
    return index3 < 3 ? parseInt(n2, 16) : Math.round(parseInt(n2, 16) / 255 * 1e3) / 1e3;
  }).join(", ")})` : "";
}
function decomposeColor(color2) {
  if (color2.type) {
    return color2;
  }
  if (color2.charAt(0) === "#") {
    return decomposeColor(hexToRgb(color2));
  }
  const marker = color2.indexOf("(");
  const type3 = color2.substring(0, marker);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(type3) === -1) {
    throw new Error(true ? `MUI: Unsupported \`${color2}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : formatMuiErrorMessage(9, color2));
  }
  let values5 = color2.substring(marker + 1, color2.length - 1);
  let colorSpace;
  if (type3 === "color") {
    values5 = values5.split(" ");
    colorSpace = values5.shift();
    if (values5.length === 4 && values5[3].charAt(0) === "/") {
      values5[3] = values5[3].substr(1);
    }
    if (["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(colorSpace) === -1) {
      throw new Error(true ? `MUI: unsupported \`${colorSpace}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : formatMuiErrorMessage(10, colorSpace));
    }
  } else {
    values5 = values5.split(",");
  }
  values5 = values5.map((value) => parseFloat(value));
  return {
    type: type3,
    values: values5,
    colorSpace
  };
}
function recomposeColor(color2) {
  const {
    type: type3,
    colorSpace
  } = color2;
  let {
    values: values5
  } = color2;
  if (type3.indexOf("rgb") !== -1) {
    values5 = values5.map((n2, i2) => i2 < 3 ? parseInt(n2, 10) : n2);
  } else if (type3.indexOf("hsl") !== -1) {
    values5[1] = `${values5[1]}%`;
    values5[2] = `${values5[2]}%`;
  }
  if (type3.indexOf("color") !== -1) {
    values5 = `${colorSpace} ${values5.join(" ")}`;
  } else {
    values5 = `${values5.join(", ")}`;
  }
  return `${type3}(${values5})`;
}
function hslToRgb(color2) {
  color2 = decomposeColor(color2);
  const {
    values: values5
  } = color2;
  const h2 = values5[0];
  const s2 = values5[1] / 100;
  const l2 = values5[2] / 100;
  const a2 = s2 * Math.min(l2, 1 - l2);
  const f = (n2, k2 = (n2 + h2 / 30) % 12) => l2 - a2 * Math.max(Math.min(k2 - 3, 9 - k2, 1), -1);
  let type3 = "rgb";
  const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
  if (color2.type === "hsla") {
    type3 += "a";
    rgb.push(values5[3]);
  }
  return recomposeColor({
    type: type3,
    values: rgb
  });
}
function getLuminance(color2) {
  color2 = decomposeColor(color2);
  let rgb = color2.type === "hsl" ? decomposeColor(hslToRgb(color2)).values : color2.values;
  rgb = rgb.map((val) => {
    if (color2.type !== "color") {
      val /= 255;
    }
    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  });
  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
function getContrastRatio(foreground, background) {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
function alpha(color2, value) {
  color2 = decomposeColor(color2);
  value = clamp(value);
  if (color2.type === "rgb" || color2.type === "hsl") {
    color2.type += "a";
  }
  if (color2.type === "color") {
    color2.values[3] = `/${value}`;
  } else {
    color2.values[3] = value;
  }
  return recomposeColor(color2);
}
function darken(color2, coefficient) {
  color2 = decomposeColor(color2);
  coefficient = clamp(coefficient);
  if (color2.type.indexOf("hsl") !== -1) {
    color2.values[2] *= 1 - coefficient;
  } else if (color2.type.indexOf("rgb") !== -1 || color2.type.indexOf("color") !== -1) {
    for (let i2 = 0; i2 < 3; i2 += 1) {
      color2.values[i2] *= 1 - coefficient;
    }
  }
  return recomposeColor(color2);
}
function lighten(color2, coefficient) {
  color2 = decomposeColor(color2);
  coefficient = clamp(coefficient);
  if (color2.type.indexOf("hsl") !== -1) {
    color2.values[2] += (100 - color2.values[2]) * coefficient;
  } else if (color2.type.indexOf("rgb") !== -1) {
    for (let i2 = 0; i2 < 3; i2 += 1) {
      color2.values[i2] += (255 - color2.values[i2]) * coefficient;
    }
  } else if (color2.type.indexOf("color") !== -1) {
    for (let i2 = 0; i2 < 3; i2 += 1) {
      color2.values[i2] += (1 - color2.values[i2]) * coefficient;
    }
  }
  return recomposeColor(color2);
}

// node_modules/@mui/material/styles/createMixins.js
function createMixins(breakpoints, spacing4, mixins) {
  return _extends({
    toolbar: {
      minHeight: 56,
      [`${breakpoints.up("xs")} and (orientation: landscape)`]: {
        minHeight: 48
      },
      [breakpoints.up("sm")]: {
        minHeight: 64
      }
    }
  }, mixins);
}

// node_modules/@mui/material/colors/common.js
var common = {
  black: "#000",
  white: "#fff"
};
var common_default = common;

// node_modules/@mui/material/colors/grey.js
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
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
};
var grey_default = grey;

// node_modules/@mui/material/colors/purple.js
var purple = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
};
var purple_default = purple;

// node_modules/@mui/material/colors/red.js
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

// node_modules/@mui/material/colors/orange.js
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

// node_modules/@mui/material/colors/blue.js
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

// node_modules/@mui/material/colors/lightBlue.js
var lightBlue = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
};
var lightBlue_default = lightBlue;

// node_modules/@mui/material/colors/green.js
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

// node_modules/@mui/material/styles/createPalette.js
var _excluded5 = ["mode", "contrastThreshold", "tonalOffset"];
var light = {
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.6)",
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  divider: "rgba(0, 0, 0, 0.12)",
  background: {
    paper: common_default.white,
    default: common_default.white
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
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
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
  const tonalOffsetLight = tonalOffset.light || tonalOffset;
  const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
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
function getDefaultPrimary(mode = "light") {
  if (mode === "dark") {
    return {
      main: blue_default[200],
      light: blue_default[50],
      dark: blue_default[400]
    };
  }
  return {
    main: blue_default[700],
    light: blue_default[400],
    dark: blue_default[800]
  };
}
function getDefaultSecondary(mode = "light") {
  if (mode === "dark") {
    return {
      main: purple_default[200],
      light: purple_default[50],
      dark: purple_default[400]
    };
  }
  return {
    main: purple_default[500],
    light: purple_default[300],
    dark: purple_default[700]
  };
}
function getDefaultError(mode = "light") {
  if (mode === "dark") {
    return {
      main: red_default[500],
      light: red_default[300],
      dark: red_default[700]
    };
  }
  return {
    main: red_default[700],
    light: red_default[400],
    dark: red_default[800]
  };
}
function getDefaultInfo(mode = "light") {
  if (mode === "dark") {
    return {
      main: lightBlue_default[400],
      light: lightBlue_default[300],
      dark: lightBlue_default[700]
    };
  }
  return {
    main: lightBlue_default[700],
    light: lightBlue_default[500],
    dark: lightBlue_default[900]
  };
}
function getDefaultSuccess(mode = "light") {
  if (mode === "dark") {
    return {
      main: green_default[400],
      light: green_default[300],
      dark: green_default[700]
    };
  }
  return {
    main: green_default[800],
    light: green_default[500],
    dark: green_default[900]
  };
}
function getDefaultWarning(mode = "light") {
  if (mode === "dark") {
    return {
      main: orange_default[400],
      light: orange_default[300],
      dark: orange_default[700]
    };
  }
  return {
    main: "#ED6C02",
    light: orange_default[500],
    dark: orange_default[900]
  };
}
function createPalette(palette3) {
  const {
    mode = "light",
    contrastThreshold = 3,
    tonalOffset = 0.2
  } = palette3, other = _objectWithoutPropertiesLoose(palette3, _excluded5);
  const primary3 = palette3.primary || getDefaultPrimary(mode);
  const secondary3 = palette3.secondary || getDefaultSecondary(mode);
  const error3 = palette3.error || getDefaultError(mode);
  const info3 = palette3.info || getDefaultInfo(mode);
  const success3 = palette3.success || getDefaultSuccess(mode);
  const warning4 = palette3.warning || getDefaultWarning(mode);
  function getContrastText(background) {
    const contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
    if (true) {
      const contrast = getContrastRatio(background, contrastText);
      if (contrast < 3) {
        console.error([`MUI: The contrast ratio of ${contrast}:1 for ${contrastText} on ${background}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join("\n"));
      }
    }
    return contrastText;
  }
  const augmentColor = ({
    color: color2,
    name,
    mainShade = 500,
    lightShade = 300,
    darkShade = 700
  }) => {
    color2 = _extends({}, color2);
    if (!color2.main && color2[mainShade]) {
      color2.main = color2[mainShade];
    }
    if (!color2.hasOwnProperty("main")) {
      throw new Error(true ? `MUI: The color${name ? ` (${name})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${mainShade}\` property.` : formatMuiErrorMessage(11, name ? ` (${name})` : "", mainShade));
    }
    if (typeof color2.main !== "string") {
      throw new Error(true ? `MUI: The color${name ? ` (${name})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(color2.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : formatMuiErrorMessage(12, name ? ` (${name})` : "", JSON.stringify(color2.main)));
    }
    addLightOrDark(color2, "light", lightShade, tonalOffset);
    addLightOrDark(color2, "dark", darkShade, tonalOffset);
    if (!color2.contrastText) {
      color2.contrastText = getContrastText(color2.main);
    }
    return color2;
  };
  const modes = {
    dark,
    light
  };
  if (true) {
    if (!modes[mode]) {
      console.error(`MUI: The palette mode \`${mode}\` is not supported.`);
    }
  }
  const paletteOutput = deepmerge(_extends({
    common: common_default,
    mode,
    primary: augmentColor({
      color: primary3,
      name: "primary"
    }),
    secondary: augmentColor({
      color: secondary3,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    error: augmentColor({
      color: error3,
      name: "error"
    }),
    warning: augmentColor({
      color: warning4,
      name: "warning"
    }),
    info: augmentColor({
      color: info3,
      name: "info"
    }),
    success: augmentColor({
      color: success3,
      name: "success"
    }),
    grey: grey_default,
    contrastThreshold,
    getContrastText,
    augmentColor,
    tonalOffset
  }, modes[mode]), other);
  return paletteOutput;
}

// node_modules/@mui/material/styles/createTypography.js
var _excluded6 = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function round(value) {
  return Math.round(value * 1e5) / 1e5;
}
var caseAllCaps = {
  textTransform: "uppercase"
};
var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
function createTypography(palette3, typography3) {
  const _ref = typeof typography3 === "function" ? typography3(palette3) : typography3, {
    fontFamily: fontFamily3 = defaultFontFamily,
    fontSize: fontSize3 = 14,
    fontWeightLight: fontWeightLight2 = 300,
    fontWeightRegular: fontWeightRegular2 = 400,
    fontWeightMedium: fontWeightMedium2 = 500,
    fontWeightBold: fontWeightBold2 = 700,
    htmlFontSize: htmlFontSize2 = 16,
    allVariants,
    pxToRem: pxToRem2
  } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded6);
  if (true) {
    if (typeof fontSize3 !== "number") {
      console.error("MUI: `fontSize` is required to be a number.");
    }
    if (typeof htmlFontSize2 !== "number") {
      console.error("MUI: `htmlFontSize` is required to be a number.");
    }
  }
  const coef = fontSize3 / 14;
  const pxToRem = pxToRem2 || ((size) => `${size / htmlFontSize2 * coef}rem`);
  const buildVariant = (fontWeight2, size, lineHeight2, letterSpacing2, casing) => _extends({
    fontFamily: fontFamily3,
    fontWeight: fontWeight2,
    fontSize: pxToRem(size),
    lineHeight: lineHeight2
  }, fontFamily3 === defaultFontFamily ? {
    letterSpacing: `${round(letterSpacing2 / size)}em`
  } : {}, casing, allVariants);
  const variants = {
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
  return deepmerge(_extends({
    htmlFontSize: htmlFontSize2,
    pxToRem,
    fontFamily: fontFamily3,
    fontSize: fontSize3,
    fontWeightLight: fontWeightLight2,
    fontWeightRegular: fontWeightRegular2,
    fontWeightMedium: fontWeightMedium2,
    fontWeightBold: fontWeightBold2
  }, variants), other, {
    clone: false
  });
}

// node_modules/@mui/material/styles/shadows.js
var shadowKeyUmbraOpacity = 0.2;
var shadowKeyPenumbraOpacity = 0.14;
var shadowAmbientShadowOpacity = 0.12;
function createShadow(...px3) {
  return [`${px3[0]}px ${px3[1]}px ${px3[2]}px ${px3[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px3[4]}px ${px3[5]}px ${px3[6]}px ${px3[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px3[8]}px ${px3[9]}px ${px3[10]}px ${px3[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(",");
}
var shadows = ["none", createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
var shadows_default2 = shadows;

// node_modules/@mui/material/styles/createTransitions.js
var _excluded7 = ["duration", "easing", "delay"];
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
  return `${Math.round(milliseconds)}ms`;
}
function getAutoHeightDuration(height2) {
  if (!height2) {
    return 0;
  }
  const constant = height2 / 36;
  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}
function createTransitions(inputTransitions) {
  const mergedEasing = _extends({}, easing, inputTransitions.easing);
  const mergedDuration = _extends({}, duration, inputTransitions.duration);
  const create2 = (props = ["all"], options = {}) => {
    const {
      duration: durationOption = mergedDuration.standard,
      easing: easingOption = mergedEasing.easeInOut,
      delay = 0
    } = options, other = _objectWithoutPropertiesLoose(options, _excluded7);
    if (true) {
      const isString = (value) => typeof value === "string";
      const isNumber = (value) => !isNaN(parseFloat(value));
      if (!isString(props) && !Array.isArray(props)) {
        console.error('MUI: Argument "props" must be a string or Array.');
      }
      if (!isNumber(durationOption) && !isString(durationOption)) {
        console.error(`MUI: Argument "duration" must be a number or a string but found ${durationOption}.`);
      }
      if (!isString(easingOption)) {
        console.error('MUI: Argument "easing" must be a string.');
      }
      if (!isNumber(delay) && !isString(delay)) {
        console.error('MUI: Argument "delay" must be a number or a string.');
      }
      if (Object.keys(other).length !== 0) {
        console.error(`MUI: Unrecognized argument(s) [${Object.keys(other).join(",")}].`);
      }
    }
    return (Array.isArray(props) ? props : [props]).map((animatedProp) => `${animatedProp} ${typeof durationOption === "string" ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === "string" ? delay : formatMs(delay)}`).join(",");
  };
  return _extends({
    getAutoHeightDuration,
    create: create2
  }, inputTransitions, {
    easing: mergedEasing,
    duration: mergedDuration
  });
}

// node_modules/@mui/material/styles/zIndex.js
var zIndex2 = {
  mobileStepper: 1e3,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
var zIndex_default = zIndex2;

// node_modules/@mui/material/styles/createTheme.js
var _excluded8 = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function createTheme2(options = {}, ...args) {
  const {
    mixins: mixinsInput = {},
    palette: paletteInput = {},
    transitions: transitionsInput = {},
    typography: typographyInput = {}
  } = options, other = _objectWithoutPropertiesLoose(options, _excluded8);
  const palette3 = createPalette(paletteInput);
  const systemTheme = createTheme_default(options);
  let muiTheme = deepmerge(systemTheme, {
    mixins: createMixins(systemTheme.breakpoints, systemTheme.spacing, mixinsInput),
    palette: palette3,
    shadows: shadows_default2.slice(),
    typography: createTypography(palette3, typographyInput),
    transitions: createTransitions(transitionsInput),
    zIndex: _extends({}, zIndex_default)
  });
  muiTheme = deepmerge(muiTheme, other);
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  if (true) {
    const stateClasses = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"];
    const traverse = (node2, component) => {
      let key;
      for (key in node2) {
        const child = node2[key];
        if (stateClasses.indexOf(key) !== -1 && Object.keys(child).length > 0) {
          if (true) {
            const stateClass = generateUtilityClass("", key);
            console.error([`MUI: The \`${component}\` component increases the CSS specificity of the \`${key}\` internal state.`, "You can not override it like this: ", JSON.stringify(node2, null, 2), "", `Instead, you need to use the '&.${stateClass}' syntax:`, JSON.stringify({
              root: {
                [`&.${stateClass}`]: child
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join("\n"));
          }
          node2[key] = {};
        }
      }
    };
    Object.keys(muiTheme.components).forEach((component) => {
      const styleOverrides = muiTheme.components[component].styleOverrides;
      if (styleOverrides && component.indexOf("Mui") === 0) {
        traverse(styleOverrides, component);
      }
    });
  }
  return muiTheme;
}
var createTheme_default2 = createTheme2;

// node_modules/@mui/material/styles/defaultTheme.js
var defaultTheme = createTheme_default2();
var defaultTheme_default = defaultTheme;

// node_modules/@mui/material/styles/styled.js
var rootShouldForwardProp = (prop) => shouldForwardProp(prop) && prop !== "classes";
var styled2 = createStyled3({
  defaultTheme: defaultTheme_default,
  rootShouldForwardProp
});
var styled_default = styled2;

// node_modules/@mui/material/styles/useThemeProps.js
function useThemeProps2({
  props,
  name
}) {
  return useThemeProps({
    props,
    name,
    defaultTheme: defaultTheme_default
  });
}

// node_modules/@mui/material/ButtonBase/ButtonBase.js
var import_prop_types10 = __toModule(require_prop_types());
import {
  forwardRef as forwardRef3,
  useEffect as useEffect4,
  useImperativeHandle as useImperativeHandle2,
  useRef as useRef5,
  useState as useState3
} from "react";

// node_modules/@mui/material/utils/useForkRef.js
var useForkRef_default = useForkRef;

// node_modules/@mui/material/utils/useEventCallback.js
var useEventCallback_default = useEventCallback;

// node_modules/@mui/material/utils/useIsFocusVisible.js
var useIsFocusVisible_default = useIsFocusVisible;

// node_modules/@mui/material/ButtonBase/TouchRipple.js
var import_prop_types9 = __toModule(require_prop_types());
import {
  forwardRef as forwardRef2,
  useCallback as useCallback3,
  useEffect as useEffect3,
  useImperativeHandle,
  useRef as useRef4,
  useState as useState2
} from "react";

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

// node_modules/react-transition-group/esm/Transition.js
var import_prop_types6 = __toModule(require_prop_types());
import React8 from "react";
import ReactDOM from "react-dom";

// node_modules/react-transition-group/esm/config.js
var config_default = {
  disabled: false
};

// node_modules/react-transition-group/esm/utils/PropTypes.js
var import_prop_types5 = __toModule(require_prop_types());
var timeoutsShape = true ? import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.shape({
  enter: import_prop_types5.default.number,
  exit: import_prop_types5.default.number,
  appear: import_prop_types5.default.number
}).isRequired]) : null;
var classNamesShape = true ? import_prop_types5.default.oneOfType([import_prop_types5.default.string, import_prop_types5.default.shape({
  enter: import_prop_types5.default.string,
  exit: import_prop_types5.default.string,
  active: import_prop_types5.default.string
}), import_prop_types5.default.shape({
  enter: import_prop_types5.default.string,
  enterDone: import_prop_types5.default.string,
  enterActive: import_prop_types5.default.string,
  exit: import_prop_types5.default.string,
  exitDone: import_prop_types5.default.string,
  exitActive: import_prop_types5.default.string
})]) : null;

// node_modules/react-transition-group/esm/TransitionGroupContext.js
import React7 from "react";
var TransitionGroupContext_default = React7.createContext(null);

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
    var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
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
    var maybeNode = this.props.nodeRef ? void 0 : ReactDOM.findDOMNode(this);
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
    var node2 = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout2 == null && !this.props.addEndListener;
    if (!node2 || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node2, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
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
    return /* @__PURE__ */ React8.createElement(TransitionGroupContext_default.Provider, {
      value: null
    }, typeof children === "function" ? children(status, childProps) : React8.cloneElement(React8.Children.only(children), childProps));
  };
  return Transition2;
}(React8.Component);
Transition.contextType = TransitionGroupContext_default;
Transition.propTypes = true ? {
  nodeRef: import_prop_types6.default.shape({
    current: typeof Element === "undefined" ? import_prop_types6.default.any : function(propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return import_prop_types6.default.instanceOf(value && "ownerDocument" in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),
  children: import_prop_types6.default.oneOfType([import_prop_types6.default.func.isRequired, import_prop_types6.default.element.isRequired]).isRequired,
  in: import_prop_types6.default.bool,
  mountOnEnter: import_prop_types6.default.bool,
  unmountOnExit: import_prop_types6.default.bool,
  appear: import_prop_types6.default.bool,
  enter: import_prop_types6.default.bool,
  exit: import_prop_types6.default.bool,
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener)
      pt = pt.isRequired;
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return pt.apply(void 0, [props].concat(args));
  },
  addEndListener: import_prop_types6.default.func,
  onEnter: import_prop_types6.default.func,
  onEntering: import_prop_types6.default.func,
  onEntered: import_prop_types6.default.func,
  onExit: import_prop_types6.default.func,
  onExiting: import_prop_types6.default.func,
  onExited: import_prop_types6.default.func
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

// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}

// node_modules/react-transition-group/esm/TransitionGroup.js
var import_prop_types7 = __toModule(require_prop_types());
import React9 from "react";

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
function mergeChildMappings(prev2, next2) {
  prev2 = prev2 || {};
  next2 = next2 || {};
  function getValueForKey(key) {
    return key in next2 ? next2[key] : prev2[key];
  }
  var nextKeysPending = Object.create(null);
  var pendingKeys = [];
  for (var prevKey in prev2) {
    if (prevKey in next2) {
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
  for (var nextKey in next2) {
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
  _proto.handleExited = function handleExited(child, node2) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping)
      return;
    if (child.props.onExited) {
      child.props.onExited(node2);
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
      return /* @__PURE__ */ React9.createElement(TransitionGroupContext_default.Provider, {
        value: contextValue
      }, children);
    }
    return /* @__PURE__ */ React9.createElement(TransitionGroupContext_default.Provider, {
      value: contextValue
    }, /* @__PURE__ */ React9.createElement(Component3, props, children));
  };
  return TransitionGroup2;
}(React9.Component);
TransitionGroup.propTypes = true ? {
  component: import_prop_types7.default.any,
  children: import_prop_types7.default.node,
  appear: import_prop_types7.default.bool,
  enter: import_prop_types7.default.bool,
  exit: import_prop_types7.default.bool,
  childFactory: import_prop_types7.default.func
} : {};
TransitionGroup.defaultProps = defaultProps;
var TransitionGroup_default = TransitionGroup;

// node_modules/@mui/material/ButtonBase/Ripple.js
var import_prop_types8 = __toModule(require_prop_types());
import {
  useEffect as useEffect2,
  useState
} from "react";
import { jsx as _jsx } from "react/jsx-runtime";
function Ripple(props) {
  const {
    className,
    classes,
    pulsate = false,
    rippleX,
    rippleY,
    rippleSize,
    in: inProp,
    onExited,
    timeout: timeout2
  } = props;
  const [leaving, setLeaving] = useState(false);
  const rippleClassName = clsx_m_default(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
  const rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  const childClassName = clsx_m_default(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
  if (!inProp && !leaving) {
    setLeaving(true);
  }
  useEffect2(() => {
    if (!inProp && onExited != null) {
      const timeoutId = setTimeout(onExited, timeout2);
      return () => {
        clearTimeout(timeoutId);
      };
    }
    return void 0;
  }, [onExited, inProp, timeout2]);
  return /* @__PURE__ */ _jsx("span", {
    className: rippleClassName,
    style: rippleStyles,
    children: /* @__PURE__ */ _jsx("span", {
      className: childClassName
    })
  });
}
true ? Ripple.propTypes = {
  classes: import_prop_types8.default.object.isRequired,
  className: import_prop_types8.default.string,
  in: import_prop_types8.default.bool,
  onExited: import_prop_types8.default.func,
  pulsate: import_prop_types8.default.bool,
  rippleSize: import_prop_types8.default.number,
  rippleX: import_prop_types8.default.number,
  rippleY: import_prop_types8.default.number,
  timeout: import_prop_types8.default.number.isRequired
} : void 0;
var Ripple_default = Ripple;

// node_modules/@mui/material/ButtonBase/touchRippleClasses.js
var touchRippleClasses = generateUtilityClasses("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]);
var touchRippleClasses_default = touchRippleClasses;

// node_modules/@mui/material/ButtonBase/TouchRipple.js
import { jsx as _jsx2 } from "react/jsx-runtime";
var _excluded9 = ["center", "classes", "className"];
var _ = (t2) => t2;
var _t;
var _t2;
var _t3;
var _t4;
var DURATION = 550;
var DELAY_RIPPLE = 80;
var enterKeyframe = keyframes(_t || (_t = _`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`));
var exitKeyframe = keyframes(_t2 || (_t2 = _`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`));
var pulsateKeyframe = keyframes(_t3 || (_t3 = _`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`));
var TouchRippleRoot = styled_default("span", {
  name: "MuiTouchRipple",
  slot: "Root",
  skipSx: true
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
});
var TouchRippleRipple = styled_default(Ripple_default, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(_t4 || (_t4 = _`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), touchRippleClasses_default.rippleVisible, enterKeyframe, DURATION, ({
  theme
}) => theme.transitions.easing.easeInOut, touchRippleClasses_default.ripplePulsate, ({
  theme
}) => theme.transitions.duration.shorter, touchRippleClasses_default.child, touchRippleClasses_default.childLeaving, exitKeyframe, DURATION, ({
  theme
}) => theme.transitions.easing.easeInOut, touchRippleClasses_default.childPulsate, pulsateKeyframe, ({
  theme
}) => theme.transitions.easing.easeInOut);
var TouchRipple = /* @__PURE__ */ forwardRef2(function TouchRipple2(inProps, ref) {
  const props = useThemeProps2({
    props: inProps,
    name: "MuiTouchRipple"
  });
  const {
    center: centerProp = false,
    classes = {},
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded9);
  const [ripples, setRipples] = useState2([]);
  const nextKey = useRef4(0);
  const rippleCallback = useRef4(null);
  useEffect3(() => {
    if (rippleCallback.current) {
      rippleCallback.current();
      rippleCallback.current = null;
    }
  }, [ripples]);
  const ignoringMouseDown = useRef4(false);
  const startTimer = useRef4(null);
  const startTimerCommit = useRef4(null);
  const container = useRef4(null);
  useEffect3(() => {
    return () => {
      clearTimeout(startTimer.current);
    };
  }, []);
  const startCommit = useCallback3((params) => {
    const {
      pulsate: pulsate2,
      rippleX,
      rippleY,
      rippleSize,
      cb
    } = params;
    setRipples((oldRipples) => [...oldRipples, /* @__PURE__ */ _jsx2(TouchRippleRipple, {
      classes: {
        ripple: clsx_m_default(classes.ripple, touchRippleClasses_default.ripple),
        rippleVisible: clsx_m_default(classes.rippleVisible, touchRippleClasses_default.rippleVisible),
        ripplePulsate: clsx_m_default(classes.ripplePulsate, touchRippleClasses_default.ripplePulsate),
        child: clsx_m_default(classes.child, touchRippleClasses_default.child),
        childLeaving: clsx_m_default(classes.childLeaving, touchRippleClasses_default.childLeaving),
        childPulsate: clsx_m_default(classes.childPulsate, touchRippleClasses_default.childPulsate)
      },
      timeout: DURATION,
      pulsate: pulsate2,
      rippleX,
      rippleY,
      rippleSize
    }, nextKey.current)]);
    nextKey.current += 1;
    rippleCallback.current = cb;
  }, [classes]);
  const start = useCallback3((event = {}, options = {}, cb) => {
    const {
      pulsate: pulsate2 = false,
      center = centerProp || options.pulsate,
      fakeElement = false
    } = options;
    if (event.type === "mousedown" && ignoringMouseDown.current) {
      ignoringMouseDown.current = false;
      return;
    }
    if (event.type === "touchstart") {
      ignoringMouseDown.current = true;
    }
    const element = fakeElement ? null : container.current;
    const rect = element ? element.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let rippleX;
    let rippleY;
    let rippleSize;
    if (center || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      const {
        clientX,
        clientY
      } = event.touches ? event.touches[0] : event;
      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }
    if (center) {
      rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);
      if (rippleSize % 2 === 0) {
        rippleSize += 1;
      }
    } else {
      const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
    }
    if (event.touches) {
      if (startTimerCommit.current === null) {
        startTimerCommit.current = () => {
          startCommit({
            pulsate: pulsate2,
            rippleX,
            rippleY,
            rippleSize,
            cb
          });
        };
        startTimer.current = setTimeout(() => {
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
  const pulsate = useCallback3(() => {
    start({}, {
      pulsate: true
    });
  }, [start]);
  const stop = useCallback3((event, cb) => {
    clearTimeout(startTimer.current);
    if (event.type === "touchend" && startTimerCommit.current) {
      startTimerCommit.current();
      startTimerCommit.current = null;
      startTimer.current = setTimeout(() => {
        stop(event, cb);
      });
      return;
    }
    startTimerCommit.current = null;
    setRipples((oldRipples) => {
      if (oldRipples.length > 0) {
        return oldRipples.slice(1);
      }
      return oldRipples;
    });
    rippleCallback.current = cb;
  }, []);
  useImperativeHandle(ref, () => ({
    pulsate,
    start,
    stop
  }), [pulsate, start, stop]);
  return /* @__PURE__ */ _jsx2(TouchRippleRoot, _extends({
    className: clsx_m_default(classes.root, touchRippleClasses_default.root, className),
    ref: container
  }, other, {
    children: /* @__PURE__ */ _jsx2(TransitionGroup_default, {
      component: null,
      exit: true,
      children: ripples
    })
  }));
});
true ? TouchRipple.propTypes = {
  center: import_prop_types9.default.bool,
  classes: import_prop_types9.default.object,
  className: import_prop_types9.default.string
} : void 0;
var TouchRipple_default = TouchRipple;

// node_modules/@mui/material/ButtonBase/buttonBaseClasses.js
function getButtonBaseUtilityClass(slot) {
  return generateUtilityClass("MuiButtonBase", slot);
}
var buttonBaseClasses = generateUtilityClasses("MuiButtonBase", ["root", "disabled", "focusVisible"]);
var buttonBaseClasses_default = buttonBaseClasses;

// node_modules/@mui/material/ButtonBase/ButtonBase.js
import { jsx as _jsx3 } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var _excluded10 = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "type"];
var useUtilityClasses = (ownerState) => {
  const {
    disabled: disabled3,
    focusVisible: focusVisible2,
    focusVisibleClassName,
    classes
  } = ownerState;
  const slots = {
    root: ["root", disabled3 && "disabled", focusVisible2 && "focusVisible"]
  };
  const composedClasses = composeClasses(slots, getButtonBaseUtilityClass, classes);
  if (focusVisible2 && focusVisibleClassName) {
    composedClasses.root += ` ${focusVisibleClassName}`;
  }
  return composedClasses;
};
var ButtonBaseRoot = styled_default("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (props, styles20) => styles20.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
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
  MozAppearance: "none",
  WebkitAppearance: "none",
  textDecoration: "none",
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
  },
  [`&.${buttonBaseClasses_default.disabled}`]: {
    pointerEvents: "none",
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
});
var ButtonBase = /* @__PURE__ */ forwardRef3(function ButtonBase2(inProps, ref) {
  const props = useThemeProps2({
    props: inProps,
    name: "MuiButtonBase"
  });
  const {
    action: action3,
    centerRipple = false,
    children,
    className,
    component = "button",
    disabled: disabled3 = false,
    disableRipple = false,
    disableTouchRipple = false,
    focusRipple = false,
    LinkComponent = "a",
    onBlur,
    onClick,
    onContextMenu,
    onDragLeave,
    onFocus,
    onFocusVisible,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    tabIndex = 0,
    TouchRippleProps,
    type: type3
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded10);
  const buttonRef = useRef5(null);
  const rippleRef = useRef5(null);
  const {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible2,
    ref: focusVisibleRef
  } = useIsFocusVisible_default();
  const [focusVisible2, setFocusVisible] = useState3(false);
  if (disabled3 && focusVisible2) {
    setFocusVisible(false);
  }
  useImperativeHandle2(action3, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      buttonRef.current.focus();
    }
  }), []);
  useEffect4(() => {
    if (focusVisible2 && focusRipple && !disableRipple) {
      rippleRef.current.pulsate();
    }
  }, [disableRipple, focusRipple, focusVisible2]);
  function useRippleHandler(rippleAction, eventCallback, skipRippleAction = disableTouchRipple) {
    return useEventCallback_default((event) => {
      if (eventCallback) {
        eventCallback(event);
      }
      const ignore = skipRippleAction;
      if (!ignore && rippleRef.current) {
        rippleRef.current[rippleAction](event);
      }
      return true;
    });
  }
  const handleMouseDown = useRippleHandler("start", onMouseDown);
  const handleContextMenu = useRippleHandler("stop", onContextMenu);
  const handleDragLeave = useRippleHandler("stop", onDragLeave);
  const handleMouseUp = useRippleHandler("stop", onMouseUp);
  const handleMouseLeave = useRippleHandler("stop", (event) => {
    if (focusVisible2) {
      event.preventDefault();
    }
    if (onMouseLeave) {
      onMouseLeave(event);
    }
  });
  const handleTouchStart = useRippleHandler("start", onTouchStart);
  const handleTouchEnd = useRippleHandler("stop", onTouchEnd);
  const handleTouchMove = useRippleHandler("stop", onTouchMove);
  const handleBlur = useRippleHandler("stop", (event) => {
    handleBlurVisible2(event);
    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }
    if (onBlur) {
      onBlur(event);
    }
  }, false);
  const handleFocus = useEventCallback_default((event) => {
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);
      if (onFocusVisible) {
        onFocusVisible(event);
      }
    }
    if (onFocus) {
      onFocus(event);
    }
  });
  const isNonNativeButton = () => {
    const button2 = buttonRef.current;
    return component && component !== "button" && !(button2.tagName === "A" && button2.href);
  };
  const keydownRef = useRef5(false);
  const handleKeyDown3 = useEventCallback_default((event) => {
    if (focusRipple && !keydownRef.current && focusVisible2 && rippleRef.current && event.key === " ") {
      keydownRef.current = true;
      rippleRef.current.stop(event, () => {
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
  const handleKeyUp = useEventCallback_default((event) => {
    if (focusRipple && event.key === " " && rippleRef.current && focusVisible2 && !event.defaultPrevented) {
      keydownRef.current = false;
      rippleRef.current.stop(event, () => {
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
  let ComponentProp = component;
  if (ComponentProp === "button" && (other.href || other.to)) {
    ComponentProp = LinkComponent;
  }
  const buttonProps = {};
  if (ComponentProp === "button") {
    buttonProps.type = type3 === void 0 ? "button" : type3;
    buttonProps.disabled = disabled3;
  } else {
    if (!other.href && !other.to) {
      buttonProps.role = "button";
    }
    if (disabled3) {
      buttonProps["aria-disabled"] = disabled3;
    }
  }
  const handleOwnRef = useForkRef_default(focusVisibleRef, buttonRef);
  const handleRef = useForkRef_default(ref, handleOwnRef);
  const [mountedState, setMountedState] = useState3(false);
  useEffect4(() => {
    setMountedState(true);
  }, []);
  const enableTouchRipple = mountedState && !disableRipple && !disabled3;
  if (true) {
    useEffect4(() => {
      if (enableTouchRipple && !rippleRef.current) {
        console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join("\n"));
      }
    }, [enableTouchRipple]);
  }
  const ownerState = _extends({}, props, {
    centerRipple,
    component,
    disabled: disabled3,
    disableRipple,
    disableTouchRipple,
    focusRipple,
    tabIndex,
    focusVisible: focusVisible2
  });
  const classes = useUtilityClasses(ownerState);
  return /* @__PURE__ */ _jsxs(ButtonBaseRoot, _extends({
    as: ComponentProp,
    className: clsx_m_default(classes.root, className),
    ownerState,
    onBlur: handleBlur,
    onClick,
    onContextMenu: handleContextMenu,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown3,
    onKeyUp: handleKeyUp,
    onMouseDown: handleMouseDown,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onDragLeave: handleDragLeave,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    onTouchStart: handleTouchStart,
    ref: handleRef,
    tabIndex: disabled3 ? -1 : tabIndex,
    type: type3
  }, buttonProps, other, {
    children: [children, enableTouchRipple ? /* @__PURE__ */ _jsx3(TouchRipple_default, _extends({
      ref: rippleRef,
      center: centerRipple
    }, TouchRippleProps)) : null]
  }));
});
true ? ButtonBase.propTypes = {
  action: refType_default,
  centerRipple: import_prop_types10.default.bool,
  children: import_prop_types10.default.node,
  classes: import_prop_types10.default.object,
  className: import_prop_types10.default.string,
  component: elementTypeAcceptingRef_default,
  disabled: import_prop_types10.default.bool,
  disableRipple: import_prop_types10.default.bool,
  disableTouchRipple: import_prop_types10.default.bool,
  focusRipple: import_prop_types10.default.bool,
  focusVisibleClassName: import_prop_types10.default.string,
  href: import_prop_types10.default.any,
  LinkComponent: import_prop_types10.default.elementType,
  onBlur: import_prop_types10.default.func,
  onClick: import_prop_types10.default.func,
  onContextMenu: import_prop_types10.default.func,
  onDragLeave: import_prop_types10.default.func,
  onFocus: import_prop_types10.default.func,
  onFocusVisible: import_prop_types10.default.func,
  onKeyDown: import_prop_types10.default.func,
  onKeyUp: import_prop_types10.default.func,
  onMouseDown: import_prop_types10.default.func,
  onMouseLeave: import_prop_types10.default.func,
  onMouseUp: import_prop_types10.default.func,
  onTouchEnd: import_prop_types10.default.func,
  onTouchMove: import_prop_types10.default.func,
  onTouchStart: import_prop_types10.default.func,
  sx: import_prop_types10.default.object,
  tabIndex: import_prop_types10.default.number,
  TouchRippleProps: import_prop_types10.default.object,
  type: import_prop_types10.default.oneOfType([import_prop_types10.default.oneOf(["button", "reset", "submit"]), import_prop_types10.default.string])
} : void 0;
var ButtonBase_default = ButtonBase;

// node_modules/@mui/material/utils/capitalize.js
var capitalize_default = capitalize;

// node_modules/@mui/material/Button/buttonClasses.js
function getButtonUtilityClass(slot) {
  return generateUtilityClass("MuiButton", slot);
}
var buttonClasses = generateUtilityClasses("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "contained", "containedInherit", "containedPrimary", "containedSecondary", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]);
var buttonClasses_default = buttonClasses;

// node_modules/@mui/material/Button/Button.js
import { jsx as _jsx4 } from "react/jsx-runtime";
import { jsxs as _jsxs2 } from "react/jsx-runtime";
var _excluded11 = ["children", "color", "component", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"];
var useUtilityClasses2 = (ownerState) => {
  const {
    color: color2,
    disableElevation,
    fullWidth,
    size,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ["root", variant, `${variant}${capitalize_default(color2)}`, `size${capitalize_default(size)}`, `${variant}Size${capitalize_default(size)}`, color2 === "inherit" && "colorInherit", disableElevation && "disableElevation", fullWidth && "fullWidth"],
    label: ["label"],
    startIcon: ["startIcon", `iconSize${capitalize_default(size)}`],
    endIcon: ["endIcon", `iconSize${capitalize_default(size)}`]
  };
  const composedClasses = composeClasses(slots, getButtonUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
var commonIconStyles = (ownerState) => _extends({}, ownerState.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, ownerState.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, ownerState.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
});
var ButtonRoot = styled_default(ButtonBase_default, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (props, styles20) => {
    const {
      ownerState
    } = props;
    return [styles20.root, styles20[ownerState.variant], styles20[`${ownerState.variant}${capitalize_default(ownerState.color)}`], styles20[`size${capitalize_default(ownerState.size)}`], styles20[`${ownerState.variant}Size${capitalize_default(ownerState.size)}`], ownerState.color === "inherit" && styles20.colorInherit, ownerState.disableElevation && styles20.disableElevation, ownerState.fullWidth && styles20.fullWidth];
  }
})(({
  theme,
  ownerState
}) => _extends({}, theme.typography.button, {
  minWidth: 64,
  padding: "6px 16px",
  borderRadius: theme.shape.borderRadius,
  transition: theme.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
    duration: theme.transitions.duration.short
  }),
  "&:hover": _extends({
    textDecoration: "none",
    backgroundColor: alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity),
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }, ownerState.variant === "text" && ownerState.color !== "inherit" && {
    backgroundColor: alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }, ownerState.variant === "outlined" && ownerState.color !== "inherit" && {
    border: `1px solid ${theme.palette[ownerState.color].main}`,
    backgroundColor: alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }, ownerState.variant === "contained" && {
    backgroundColor: theme.palette.grey.A100,
    boxShadow: theme.shadows[4],
    "@media (hover: none)": {
      boxShadow: theme.shadows[2],
      backgroundColor: theme.palette.grey[300]
    }
  }, ownerState.variant === "contained" && ownerState.color !== "inherit" && {
    backgroundColor: theme.palette[ownerState.color].dark,
    "@media (hover: none)": {
      backgroundColor: theme.palette[ownerState.color].main
    }
  }),
  "&:active": _extends({}, ownerState.variant === "contained" && {
    boxShadow: theme.shadows[8]
  }),
  [`&.${buttonClasses_default.focusVisible}`]: _extends({}, ownerState.variant === "contained" && {
    boxShadow: theme.shadows[6]
  }),
  [`&.${buttonClasses_default.disabled}`]: _extends({
    color: theme.palette.action.disabled
  }, ownerState.variant === "outlined" && {
    border: `1px solid ${theme.palette.action.disabledBackground}`
  }, ownerState.variant === "outlined" && ownerState.color === "secondary" && {
    border: `1px solid ${theme.palette.action.disabled}`
  }, ownerState.variant === "contained" && {
    color: theme.palette.action.disabled,
    boxShadow: theme.shadows[0],
    backgroundColor: theme.palette.action.disabledBackground
  })
}, ownerState.variant === "text" && {
  padding: "6px 8px"
}, ownerState.variant === "text" && ownerState.color !== "inherit" && {
  color: theme.palette[ownerState.color].main
}, ownerState.variant === "outlined" && {
  padding: "5px 15px",
  border: `1px solid ${theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"}`
}, ownerState.variant === "outlined" && ownerState.color !== "inherit" && {
  color: theme.palette[ownerState.color].main,
  border: `1px solid ${alpha(theme.palette[ownerState.color].main, 0.5)}`
}, ownerState.variant === "contained" && {
  color: theme.palette.getContrastText(theme.palette.grey[300]),
  backgroundColor: theme.palette.grey[300],
  boxShadow: theme.shadows[2]
}, ownerState.variant === "contained" && ownerState.color !== "inherit" && {
  color: theme.palette[ownerState.color].contrastText,
  backgroundColor: theme.palette[ownerState.color].main
}, ownerState.color === "inherit" && {
  color: "inherit",
  borderColor: "currentColor"
}, ownerState.size === "small" && ownerState.variant === "text" && {
  padding: "4px 5px",
  fontSize: theme.typography.pxToRem(13)
}, ownerState.size === "large" && ownerState.variant === "text" && {
  padding: "8px 11px",
  fontSize: theme.typography.pxToRem(15)
}, ownerState.size === "small" && ownerState.variant === "outlined" && {
  padding: "3px 9px",
  fontSize: theme.typography.pxToRem(13)
}, ownerState.size === "large" && ownerState.variant === "outlined" && {
  padding: "7px 21px",
  fontSize: theme.typography.pxToRem(15)
}, ownerState.size === "small" && ownerState.variant === "contained" && {
  padding: "4px 10px",
  fontSize: theme.typography.pxToRem(13)
}, ownerState.size === "large" && ownerState.variant === "contained" && {
  padding: "8px 22px",
  fontSize: theme.typography.pxToRem(15)
}, ownerState.fullWidth && {
  width: "100%"
}), ({
  ownerState
}) => ownerState.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${buttonClasses_default.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${buttonClasses_default.disabled}`]: {
    boxShadow: "none"
  }
});
var ButtonStartIcon = styled_default("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (props, styles20) => {
    const {
      ownerState
    } = props;
    return [styles20.startIcon, styles20[`iconSize${capitalize_default(ownerState.size)}`]];
  }
})(({
  ownerState
}) => _extends({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, ownerState.size === "small" && {
  marginLeft: -2
}, commonIconStyles(ownerState)));
var ButtonEndIcon = styled_default("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (props, styles20) => {
    const {
      ownerState
    } = props;
    return [styles20.endIcon, styles20[`iconSize${capitalize_default(ownerState.size)}`]];
  }
})(({
  ownerState
}) => _extends({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, ownerState.size === "small" && {
  marginRight: -2
}, commonIconStyles(ownerState)));
var Button = /* @__PURE__ */ forwardRef4(function Button2(inProps, ref) {
  const props = useThemeProps2({
    props: inProps,
    name: "MuiButton"
  });
  const {
    children,
    color: color2 = "primary",
    component = "button",
    disabled: disabled3 = false,
    disableElevation = false,
    disableFocusRipple = false,
    endIcon: endIconProp,
    focusVisibleClassName,
    fullWidth = false,
    size = "medium",
    startIcon: startIconProp,
    type: type3,
    variant = "text"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded11);
  const ownerState = _extends({}, props, {
    color: color2,
    component,
    disabled: disabled3,
    disableElevation,
    disableFocusRipple,
    fullWidth,
    size,
    type: type3,
    variant
  });
  const classes = useUtilityClasses2(ownerState);
  const startIcon = startIconProp && /* @__PURE__ */ _jsx4(ButtonStartIcon, {
    className: classes.startIcon,
    ownerState,
    children: startIconProp
  });
  const endIcon = endIconProp && /* @__PURE__ */ _jsx4(ButtonEndIcon, {
    className: classes.endIcon,
    ownerState,
    children: endIconProp
  });
  return /* @__PURE__ */ _jsxs2(ButtonRoot, _extends({
    ownerState,
    component,
    disabled: disabled3,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: clsx_m_default(classes.focusVisible, focusVisibleClassName),
    ref,
    type: type3
  }, other, {
    classes,
    children: [startIcon, children, endIcon]
  }));
});
true ? Button.propTypes = {
  children: import_prop_types11.default.node,
  classes: import_prop_types11.default.object,
  color: import_prop_types11.default.oneOfType([import_prop_types11.default.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), import_prop_types11.default.string]),
  component: import_prop_types11.default.elementType,
  disabled: import_prop_types11.default.bool,
  disableElevation: import_prop_types11.default.bool,
  disableFocusRipple: import_prop_types11.default.bool,
  disableRipple: import_prop_types11.default.bool,
  endIcon: import_prop_types11.default.node,
  focusVisibleClassName: import_prop_types11.default.string,
  fullWidth: import_prop_types11.default.bool,
  href: import_prop_types11.default.string,
  size: import_prop_types11.default.oneOfType([import_prop_types11.default.oneOf(["small", "medium", "large"]), import_prop_types11.default.string]),
  startIcon: import_prop_types11.default.node,
  sx: import_prop_types11.default.object,
  type: import_prop_types11.default.oneOfType([import_prop_types11.default.oneOf(["button", "reset", "submit"]), import_prop_types11.default.string]),
  variant: import_prop_types11.default.oneOfType([import_prop_types11.default.oneOf(["contained", "outlined", "text"]), import_prop_types11.default.string])
} : void 0;
var Button_default = Button;

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

// node_modules/@material-ui/core/esm/Button/Button.js
var import_prop_types20 = __toModule(require_prop_types());
import {
  createElement as createElement7,
  forwardRef as forwardRef7
} from "react";

// node_modules/@material-ui/styles/esm/index.js
var import_utils23 = __toModule(require_utils());

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
      var prefix3 = "".concat(seedPrefix).concat(name, "-").concat(rule.key);
      if (!styleSheet.options.theme[nested_default] || seed !== "") {
        return prefix3;
      }
      return "".concat(prefix3, "-").concat(getNextCounterId());
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
function getThemeProps2(params) {
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
var isBrowser3 = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === "object" && document.nodeType === 9;
var module_default = isBrowser3;

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

// node_modules/jss/dist/jss.esm.js
var plainObjectConstrurctor = {}.constructor;
function cloneStyle(style3) {
  if (style3 == null || typeof style3 !== "object")
    return style3;
  if (Array.isArray(style3))
    return style3.map(cloneStyle);
  if (style3.constructor !== plainObjectConstrurctor)
    return style3;
  var newStyle = {};
  for (var name in style3) {
    newStyle[name] = cloneStyle(style3[name]);
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
function toCss(selector, style3, options) {
  if (options === void 0) {
    options = {};
  }
  var result = "";
  if (!style3)
    return result;
  var _options = options, _options$indent = _options.indent, indent = _options$indent === void 0 ? 0 : _options$indent;
  var fallbacks = style3.fallbacks;
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
  for (var _prop2 in style3) {
    var _value2 = style3[_prop2];
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
  function BaseStyleRule2(key, style3, options) {
    this.type = "style";
    this.isProcessed = false;
    var sheet = options.sheet, Renderer = options.Renderer;
    this.key = key;
    this.options = options;
    this.style = style3;
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
    var isEmpty3 = newValue == null || newValue === false;
    var isDefined = name in this.style;
    if (isEmpty3 && !isDefined && !force)
      return this;
    var remove = isEmpty3 && isDefined;
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
  function StyleRule2(key, style3, options) {
    var _this;
    _this = _BaseStyleRule.call(this, key, style3, options) || this;
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
  onCreateRule: function onCreateRule(key, style3, options) {
    if (key[0] === "@" || options.parent && options.parent.type === "keyframes") {
      return null;
    }
    return new StyleRule(key, style3, options);
  }
};
var defaultToStringOptions = {
  indent: 1,
  children: true
};
var atRegExp = /@([\w-]+)/;
var ConditionalRule = /* @__PURE__ */ function() {
  function ConditionalRule2(key, styles20, options) {
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
    for (var name in styles20) {
      this.rules.add(name, styles20[name]);
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
  _proto.addRule = function addRule(name, style3, options) {
    var rule = this.rules.add(name, style3, options);
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
  onCreateRule: function onCreateRule2(key, styles20, options) {
    return keyRegExp.test(key) ? new ConditionalRule(key, styles20, options) : null;
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
var findReferencedKeyframe = function findReferencedKeyframe2(val, keyframes4) {
  if (typeof val === "string") {
    return val.replace(refRegExp, function(match2, name) {
      if (name in keyframes4) {
        return keyframes4[name];
      }
      true ? tiny_warning_esm_default(false, '[JSS] Referenced keyframes rule "' + name + '" is not defined.') : void 0;
      return match2;
    });
  }
  return val;
};
var replaceRef = function replaceRef2(style3, prop, keyframes4) {
  var value = style3[prop];
  var refKeyframe = findReferencedKeyframe(value, keyframes4);
  if (refKeyframe !== value) {
    style3[prop] = refKeyframe;
  }
};
var pluginKeyframesRule = {
  onCreateRule: function onCreateRule3(key, frames, options) {
    return typeof key === "string" && keyRegExp$1.test(key) ? new KeyframesRule(key, frames, options) : null;
  },
  onProcessStyle: function onProcessStyle(style3, rule, sheet) {
    if (rule.type !== "style" || !sheet)
      return style3;
    if ("animation-name" in style3)
      replaceRef(style3, "animation-name", sheet.keyframes);
    if ("animation" in style3)
      replaceRef(style3, "animation", sheet.keyframes);
    return style3;
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
  onCreateRule: function onCreateRule4(key, style3, options) {
    if (options.parent && options.parent.type === "keyframes") {
      return new KeyframeRule(key, style3, options);
    }
    return null;
  }
};
var FontFaceRule = /* @__PURE__ */ function() {
  function FontFaceRule2(key, style3, options) {
    this.type = "font-face";
    this.at = "@font-face";
    this.isProcessed = false;
    this.key = key;
    this.style = style3;
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
  onCreateRule: function onCreateRule5(key, style3, options) {
    return keyRegExp$2.test(key) ? new FontFaceRule(key, style3, options) : null;
  }
};
var ViewportRule = /* @__PURE__ */ function() {
  function ViewportRule2(key, style3, options) {
    this.type = "viewport";
    this.at = "@viewport";
    this.isProcessed = false;
    this.key = key;
    this.style = style3;
    this.options = options;
  }
  var _proto = ViewportRule2.prototype;
  _proto.toString = function toString(options) {
    return toCss(this.key, this.style, options);
  };
  return ViewportRule2;
}();
var pluginViewportRule = {
  onCreateRule: function onCreateRule6(key, style3, options) {
    return key === "@viewport" || key === "@-ms-viewport" ? new ViewportRule(key, style3, options) : null;
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
    var style3 = rule.style;
    plugins3.onUpdate(data, rule, sheet, options);
    if (options.process && style3 && style3 !== rule.style) {
      plugins3.onProcessStyle(rule.style, rule, sheet);
      for (var prop in rule.style) {
        var nextValue = rule.style[prop];
        var prevValue = style3[prop];
        if (nextValue !== prevValue) {
          rule.prop(prop, nextValue, forceUpdateOptions);
        }
      }
      for (var _prop in style3) {
        var _nextValue = rule.style[_prop];
        var _prevValue = style3[_prop];
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
      var css4 = rule.toString(options);
      if (!css4 && !link)
        continue;
      if (str)
        str += linebreak;
      str += css4;
    }
    return str;
  };
  return RuleList2;
}();
var StyleSheet3 = /* @__PURE__ */ function() {
  function StyleSheet4(styles20, options) {
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
    for (var name in styles20) {
      this.rules.add(name, styles20[name]);
    }
    this.rules.process();
  }
  var _proto = StyleSheet4.prototype;
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
  _proto.addRules = function addRules(styles20, options) {
    var added = [];
    for (var name in styles20) {
      var rule = this.addRule(name, styles20[name], options);
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
  return StyleSheet4;
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
  _proto.onProcessStyle = function onProcessStyle2(style3, rule, sheet) {
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
    var css4 = "";
    for (var i2 = 0; i2 < this.registry.length; i2++) {
      var sheet = this.registry[i2];
      if (attached != null && sheet.attached !== attached) {
        continue;
      }
      if (css4)
        css4 += linebreak;
      css4 += sheet.toString(options);
    }
    return css4;
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
    var prefix3 = "";
    if (sheet) {
      if (sheet.options.classNamePrefix) {
        prefix3 = sheet.options.classNamePrefix;
      }
      if (sheet.options.jss.id != null) {
        jssId = String(sheet.options.jss.id);
      }
    }
    if (options.minify) {
      return "" + (prefix3 || "c") + moduleId + jssId + ruleCounter;
    }
    return prefix3 + rule.key + "-" + moduleId + (jssId ? "-" + jssId : "") + "-" + ruleCounter;
  };
  return generateId;
};
var memoize3 = function memoize4(fn) {
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
var getHead = memoize3(function() {
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
    var node2 = head.childNodes[i2];
    if (node2.nodeType === 8 && node2.nodeValue.trim() === text) {
      return node2;
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
    var comment2 = findCommentNode(insertionPoint);
    if (comment2) {
      return {
        parent: comment2.parentNode,
        node: comment2.nextSibling
      };
    }
    true ? tiny_warning_esm_default(false, '[JSS] Insertion point "' + insertionPoint + '" not found.') : void 0;
  }
  return false;
}
function insertStyle(style3, options) {
  var insertionPoint = options.insertionPoint;
  var nextNode = findPrevNode(options);
  if (nextNode !== false && nextNode.parent) {
    nextNode.parent.insertBefore(style3, nextNode.node);
    return;
  }
  if (insertionPoint && typeof insertionPoint.nodeType === "number") {
    var insertionPointElement = insertionPoint;
    var parentNode = insertionPointElement.parentNode;
    if (parentNode)
      parentNode.insertBefore(style3, insertionPointElement.nextSibling);
    else
      true ? tiny_warning_esm_default(false, "[JSS] Insertion point is not in the DOM.") : void 0;
    return;
  }
  getHead().appendChild(style3);
}
var getNonce = memoize3(function() {
  var node2 = document.querySelector('meta[property="csp-nonce"]');
  return node2 ? node2.getAttribute("content") : null;
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
    if (rule.options.parent instanceof StyleSheet3) {
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
  _proto.getRules = function getRules3() {
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
  _proto.createStyleSheet = function createStyleSheet(styles20, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, index3 = _options.index;
    if (typeof index3 !== "number") {
      index3 = sheets.index === 0 ? 0 : sheets.index + 1;
    }
    var sheet = new StyleSheet3(styles20, _extends({}, options, {
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
  _proto.createRule = function createRule$1(name, style3, options) {
    if (style3 === void 0) {
      style3 = {};
    }
    if (options === void 0) {
      options = {};
    }
    if (typeof name === "object") {
      return this.createRule(void 0, name, style3);
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
    var rule = createRule(name, style3, ruleOptions);
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
function getDynamicStyles(styles20) {
  var to = null;
  for (var key in styles20) {
    var value = styles20[key];
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
    onProcessStyle: function onProcessStyle2(style3, rule) {
      if (fnValuesNs in rule || fnRuleNs in rule)
        return style3;
      var fnValues = {};
      for (var prop in style3) {
        var value = style3[prop];
        if (typeof value !== "function")
          continue;
        delete style3[prop];
        fnValues[prop] = value;
      }
      rule[fnValuesNs] = fnValues;
      return style3;
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
  function GlobalContainerRule2(key, styles20, options) {
    this.type = "global";
    this.at = at;
    this.isProcessed = false;
    this.key = key;
    this.options = options;
    this.rules = new RuleList(_extends({}, options, {
      parent: this
    }));
    for (var selector in styles20) {
      this.rules.add(selector, styles20[selector]);
    }
    this.rules.process();
  }
  var _proto = GlobalContainerRule2.prototype;
  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  };
  _proto.addRule = function addRule(name, style3, options) {
    var rule = this.rules.add(name, style3, options);
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
  function GlobalPrefixedRule2(key, style3, options) {
    this.type = "global";
    this.at = at;
    this.isProcessed = false;
    this.key = key;
    this.options = options;
    var selector = key.substr(atPrefix.length);
    this.rule = options.jss.createRule(selector, style3, _extends({}, options, {
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
  var options = rule.options, style3 = rule.style;
  var rules = style3 ? style3[at] : null;
  if (!rules)
    return;
  for (var name in rules) {
    sheet.addRule(name, rules[name], _extends({}, options, {
      selector: addScope(name, rule.selector)
    }));
  }
  delete style3[at];
}
function handlePrefixedGlobalRule(rule, sheet) {
  var options = rule.options, style3 = rule.style;
  for (var prop in style3) {
    if (prop[0] !== "@" || prop.substr(0, at.length) !== at)
      continue;
    var selector = addScope(prop.substr(at.length), rule.selector);
    sheet.addRule(selector, style3[prop], _extends({}, options, {
      selector
    }));
    delete style3[prop];
  }
}
function jssGlobal() {
  function onCreateRule8(name, styles20, options) {
    if (!name)
      return null;
    if (name === at) {
      return new GlobalContainerRule(name, styles20, options);
    }
    if (name[0] === "@" && name.substr(0, atPrefix.length) === atPrefix) {
      return new GlobalPrefixedRule(name, styles20, options);
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
    return function(match2, key) {
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
  function onProcessStyle2(style3, rule, sheet) {
    if (rule.type !== "style")
      return style3;
    var styleRule = rule;
    var container = styleRule.options.parent;
    var options;
    var replaceRef3;
    for (var prop in style3) {
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
        container.addRule(selector, style3[prop], _extends({}, options, {
          selector
        }));
      } else if (isNestedConditional) {
        container.addRule(prop, {}, options).addRule(styleRule.key, style3[prop], {
          selector: styleRule.selector
        });
      }
      delete style3[prop];
    }
    return style3;
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
function toHyphenLower(match2) {
  return "-" + match2.toLowerCase();
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
function convertCase(style3) {
  var converted = {};
  for (var prop in style3) {
    var key = prop.indexOf("--") === 0 ? prop : hyphenate_style_name_default(prop);
    converted[key] = style3[prop];
  }
  if (style3.fallbacks) {
    if (Array.isArray(style3.fallbacks))
      converted.fallbacks = style3.fallbacks.map(convertCase);
    else
      converted.fallbacks = convertCase(style3.fallbacks);
  }
  return converted;
}
function camelCase() {
  function onProcessStyle2(style3) {
    if (Array.isArray(style3)) {
      for (var index3 = 0; index3 < style3.length; index3++) {
        style3[index3] = convertCase(style3[index3]);
      }
      return style3;
    }
    return convertCase(style3);
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
  var replace2 = function replace3(str) {
    return str[1].toUpperCase();
  };
  var newObj = {};
  for (var key in obj) {
    newObj[key] = obj[key];
    newObj[key.replace(regExp2, replace2)] = obj[key];
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
  function onProcessStyle2(style3, rule) {
    if (rule.type !== "style")
      return style3;
    for (var prop in style3) {
      style3[prop] = iterate(prop, style3[prop], camelCasedOptions);
    }
    return style3;
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
var css2 = "";
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
  _document$createEleme = document.createElement("p"), style3 = _document$createEleme.style;
  testProp = "Transform";
  for (key in jsCssMap) {
    if (key + testProp in style3) {
      js = key;
      css2 = jsCssMap[key];
      break;
    }
  }
  if (js === "Webkit" && "msHyphens" in style3) {
    js = "ms";
    css2 = jsCssMap.ms;
    browser = "edge";
  }
  if (js === "Webkit" && "-apple-trailing-word" in style3) {
    vendor = "apple";
  }
}
var jsCssMap;
var _document$createEleme;
var style3;
var testProp;
var key;
var prefix2 = {
  js,
  css: css2,
  vendor,
  browser,
  isTouch
};
function supportedKeyframes(key) {
  if (key[1] === "-")
    return key;
  if (prefix2.js === "ms")
    return key;
  return "@" + prefix2.css + "keyframes" + key.substr(10);
}
var appearence = {
  noPrefill: ["appearance"],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== "appearance")
      return false;
    if (prefix2.js === "ms")
      return "-webkit-" + prop;
    return prefix2.css + prop;
  }
};
var colorAdjust = {
  noPrefill: ["color-adjust"],
  supportedProperty: function supportedProperty2(prop) {
    if (prop !== "color-adjust")
      return false;
    if (prefix2.js === "Webkit")
      return prefix2.css + "print-" + prop;
    return prop;
  }
};
var regExp = /[-\s]+(.)?/g;
function toUpper(match2, c2) {
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
  supportedProperty: function supportedProperty3(prop, style3) {
    if (!/^mask/.test(prop))
      return false;
    if (prefix2.js === "Webkit") {
      var longhand = "mask-image";
      if (camelize(longhand) in style3) {
        return prop;
      }
      if (prefix2.js + pascalize(longhand) in style3) {
        return prefix2.css + prop;
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
    if (prefix2.vendor === "apple" && !prefix2.isTouch) {
      return prefix2.css + prop;
    }
    return prop;
  }
};
var transform2 = {
  noPrefill: ["transform"],
  supportedProperty: function supportedProperty5(prop, style3, options) {
    if (prop !== "transform")
      return false;
    if (options.transform) {
      return prop;
    }
    return prefix2.css + prop;
  }
};
var transition = {
  noPrefill: ["transition"],
  supportedProperty: function supportedProperty6(prop, style3, options) {
    if (prop !== "transition")
      return false;
    if (options.transition) {
      return prop;
    }
    return prefix2.css + prop;
  }
};
var writingMode = {
  noPrefill: ["writing-mode"],
  supportedProperty: function supportedProperty7(prop) {
    if (prop !== "writing-mode")
      return false;
    if (prefix2.js === "Webkit" || prefix2.js === "ms" && prefix2.browser !== "edge") {
      return prefix2.css + prop;
    }
    return prop;
  }
};
var userSelect = {
  noPrefill: ["user-select"],
  supportedProperty: function supportedProperty8(prop) {
    if (prop !== "user-select")
      return false;
    if (prefix2.js === "Moz" || prefix2.js === "ms" || prefix2.vendor === "apple") {
      return prefix2.css + prop;
    }
    return prop;
  }
};
var breakPropsOld = {
  supportedProperty: function supportedProperty9(prop, style3) {
    if (!/^break-/.test(prop))
      return false;
    if (prefix2.js === "Webkit") {
      var jsProp = "WebkitColumn" + pascalize(prop);
      return jsProp in style3 ? prefix2.css + "column-" + prop : false;
    }
    if (prefix2.js === "Moz") {
      var _jsProp = "page" + pascalize(prop);
      return _jsProp in style3 ? "page-" + prop : false;
    }
    return false;
  }
};
var inlineLogicalOld = {
  supportedProperty: function supportedProperty10(prop, style3) {
    if (!/^(border|margin|padding)-inline/.test(prop))
      return false;
    if (prefix2.js === "Moz")
      return prop;
    var newProp = prop.replace("-inline", "");
    return prefix2.js + pascalize(newProp) in style3 ? prefix2.css + newProp : false;
  }
};
var unprefixed = {
  supportedProperty: function supportedProperty11(prop, style3) {
    return camelize(prop) in style3 ? prop : false;
  }
};
var prefixed = {
  supportedProperty: function supportedProperty12(prop, style3) {
    var pascalized = pascalize(prop);
    if (prop[0] === "-")
      return prop;
    if (prop[0] === "-" && prop[1] === "-")
      return prop;
    if (prefix2.js + pascalized in style3)
      return prefix2.css + prop;
    if (prefix2.js !== "Webkit" && "Webkit" + pascalized in style3)
      return "-webkit-" + prop;
    return false;
  }
};
var scrollSnap = {
  supportedProperty: function supportedProperty13(prop) {
    if (prop.substring(0, 11) !== "scroll-snap")
      return false;
    if (prefix2.js === "ms") {
      return "" + prefix2.css + prop;
    }
    return prop;
  }
};
var overscrollBehavior = {
  supportedProperty: function supportedProperty14(prop) {
    if (prop !== "overscroll-behavior")
      return false;
    if (prefix2.js === "ms") {
      return prefix2.css + "scroll-chaining";
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
  supportedProperty: function supportedProperty15(prop, style3) {
    var newProp = propMap[prop];
    if (!newProp)
      return false;
    return prefix2.js + pascalize(newProp) in style3 ? prefix2.css + newProp : false;
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
  return prefix2.css + p;
};
var flex2009 = {
  supportedProperty: function supportedProperty16(prop, style3, _ref) {
    var multiple = _ref.multiple;
    if (propKeys.indexOf(prop) > -1) {
      var newProp = propMap$1[prop];
      if (!Array.isArray(newProp)) {
        return prefix2.js + pascalize(newProp) in style3 ? prefix2.css + newProp : false;
      }
      if (!multiple)
        return false;
      for (var i2 = 0; i2 < newProp.length; i2++) {
        if (!(prefix2.js + pascalize(newProp[0]) in style3)) {
          return false;
        }
      }
      return newProp.map(prefixCss);
    }
    return false;
  }
};
var plugins2 = [appearence, colorAdjust, mask, textOrientation, transform2, transition, writingMode, userSelect, breakPropsOld, inlineLogicalOld, unprefixed, prefixed, scrollSnap, overscrollBehavior, flex2012, flex2009];
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
function prefixTransitionCallback(match2, p1, p2) {
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
    prefixedValue = prefix2.css + prefixedValue;
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
  function prefixStyle(style3) {
    for (var prop in style3) {
      var value = style3[prop];
      if (prop === "fallbacks" && Array.isArray(value)) {
        style3[prop] = value.map(prefixStyle);
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
          delete style3[prop];
        style3[supportedProp || prop] = supportedValue$1 || value;
      }
    }
    return style3;
  }
  function onProcessStyle2(style3, rule) {
    if (rule.type !== "style")
      return style3;
    return prefixStyle(style3);
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
    onProcessStyle: function onProcessStyle2(style3, rule) {
      if (rule.type !== "style")
        return style3;
      var newStyle = {};
      var props = Object.keys(style3).sort(sort);
      for (var i2 = 0; i2 < props.length; i2++) {
        newStyle[props[i2]] = style3[props[i2]];
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
import React17 from "react";

// node_modules/@material-ui/styles/esm/mergeClasses/mergeClasses.js
var import_utils18 = __toModule(require_utils());
function mergeClasses() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var baseClasses = options.baseClasses, newClasses = options.newClasses, Component3 = options.Component;
  if (!newClasses) {
    return baseClasses;
  }
  var nextClasses = _extends({}, baseClasses);
  if (true) {
    if (typeof newClasses === "string") {
      console.error(["Material-UI: The value `".concat(newClasses, "` ") + "provided to the classes prop of ".concat((0, import_utils18.getDisplayName)(Component3), " is incorrect."), "You might want to use the className prop instead."].join("\n"));
      return baseClasses;
    }
  }
  Object.keys(newClasses).forEach(function(key) {
    if (true) {
      if (!baseClasses[key] && newClasses[key]) {
        console.error(["Material-UI: The key `".concat(key, "` ") + "provided to the classes prop is not implemented in ".concat((0, import_utils18.getDisplayName)(Component3), "."), "You can only override one of the following: ".concat(Object.keys(baseClasses).join(","), ".")].join("\n"));
      }
      if (newClasses[key] && typeof newClasses[key] !== "string") {
        console.error(["Material-UI: The key `".concat(key, "` ") + "provided to the classes prop is not valid for ".concat((0, import_utils18.getDisplayName)(Component3), "."), "You need to provide a non empty string instead of: ".concat(newClasses[key], ".")].join("\n"));
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
import React15 from "react";

// node_modules/@material-ui/styles/esm/useTheme/ThemeContext.js
import React14 from "react";
var ThemeContext3 = React14.createContext(null);
if (true) {
  ThemeContext3.displayName = "ThemeContext";
}
var ThemeContext_default2 = ThemeContext3;

// node_modules/@material-ui/styles/esm/useTheme/useTheme.js
function useTheme5() {
  var theme = React15.useContext(ThemeContext_default2);
  if (true) {
    React15.useDebugValue(theme);
  }
  return theme;
}

// node_modules/@material-ui/styles/esm/StylesProvider/StylesProvider.js
var import_prop_types12 = __toModule(require_prop_types());
var import_utils19 = __toModule(require_utils());
import React16 from "react";
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
var StylesContext = React16.createContext(defaultOptions);
if (true) {
  StylesContext.displayName = "StylesContext";
}
var injectFirstNode;
function StylesProvider(props) {
  var children = props.children, _props$injectFirst = props.injectFirst, injectFirst = _props$injectFirst === void 0 ? false : _props$injectFirst, _props$disableGenerat = props.disableGeneration, disableGeneration = _props$disableGenerat === void 0 ? false : _props$disableGenerat, localOptions = _objectWithoutProperties(props, ["children", "injectFirst", "disableGeneration"]);
  var outerOptions = React16.useContext(StylesContext);
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
  return /* @__PURE__ */ React16.createElement(StylesContext.Provider, {
    value: context
  }, children);
}
true ? StylesProvider.propTypes = {
  children: import_prop_types12.default.node.isRequired,
  disableGeneration: import_prop_types12.default.bool,
  generateClassName: import_prop_types12.default.func,
  injectFirst: import_prop_types12.default.bool,
  jss: import_prop_types12.default.object,
  serverGenerateClassName: import_prop_types12.default.func,
  sheetsCache: import_prop_types12.default.object,
  sheetsManager: import_prop_types12.default.object,
  sheetsRegistry: import_prop_types12.default.object
} : void 0;
if (true) {
  true ? StylesProvider.propTypes = (0, import_utils19.exactProp)(StylesProvider.propTypes) : void 0;
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
var import_utils20 = __toModule(require_utils());

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
      var styles20;
      try {
        styles20 = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;
      } catch (err) {
        if (true) {
          if (themingEnabled === true && theme === noopTheme_default) {
            console.error(["Material-UI: The `styles` argument provided is invalid.", "You are providing a function without a theme in the context.", "One of the parent elements needs to use a ThemeProvider."].join("\n"));
          }
        }
        throw err;
      }
      if (!name || !theme.overrides || !theme.overrides[name]) {
        return styles20;
      }
      var overrides = theme.overrides[name];
      var stylesWithOverrides = _extends({}, styles20);
      Object.keys(overrides).forEach(function(key) {
        if (true) {
          if (!stylesWithOverrides[key]) {
            console.warn(["Material-UI: You are trying to override a style that does not exist.", "Fix the `".concat(key, "` key of `theme.overrides.").concat(name, "`.")].join("\n"));
          }
        }
        stylesWithOverrides[key] = (0, import_utils20.deepmerge)(stylesWithOverrides[key], overrides[key]);
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
    var styles20 = stylesCreator.create(theme, name);
    if (!staticSheet) {
      staticSheet = stylesOptions.jss.createStyleSheet(styles20, _extends({
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
    sheetManager.dynamicStyles = getDynamicStyles(styles20);
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
function useSynchronousEffect(func, values5) {
  var key = React17.useRef([]);
  var output;
  var currentKey = React17.useMemo(function() {
    return {};
  }, values5);
  if (key.current !== currentKey) {
    key.current = currentKey;
    output = func();
  }
  React17.useEffect(function() {
    return function() {
      if (output) {
        output();
      }
    };
  }, [currentKey]);
}
function makeStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var name = options.name, classNamePrefixOption = options.classNamePrefix, Component3 = options.Component, _options$defaultTheme = options.defaultTheme, defaultTheme3 = _options$defaultTheme === void 0 ? noopTheme_default : _options$defaultTheme, stylesOptions2 = _objectWithoutProperties(options, ["name", "classNamePrefix", "Component", "defaultTheme"]);
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
    var theme = useTheme5() || defaultTheme3;
    var stylesOptions = _extends({}, React17.useContext(StylesContext), stylesOptions2);
    var instance = React17.useRef();
    var shouldUpdate = React17.useRef();
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
    React17.useEffect(function() {
      if (shouldUpdate.current) {
        update(instance.current, props);
      }
      shouldUpdate.current = true;
    });
    var classes = getClasses(instance.current, props.classes, Component3);
    if (true) {
      React17.useDebugValue(classes);
    }
    return classes;
  };
  return useStyles;
}

// node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js
var import_prop_types13 = __toModule(require_prop_types());
var import_utils21 = __toModule(require_utils());
import React18 from "react";
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
function ThemeProvider2(props) {
  var children = props.children, localTheme = props.theme;
  var outerTheme = useTheme5();
  if (true) {
    if (outerTheme === null && typeof localTheme === "function") {
      console.error(["Material-UI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join("\n"));
    }
  }
  var theme = React18.useMemo(function() {
    var output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);
    if (output != null) {
      output[nested_default] = outerTheme !== null;
    }
    return output;
  }, [localTheme, outerTheme]);
  return /* @__PURE__ */ React18.createElement(ThemeContext_default2.Provider, {
    value: theme
  }, children);
}
true ? ThemeProvider2.propTypes = {
  children: import_prop_types13.default.node.isRequired,
  theme: import_prop_types13.default.oneOfType([import_prop_types13.default.object, import_prop_types13.default.func]).isRequired
} : void 0;
if (true) {
  true ? ThemeProvider2.propTypes = (0, import_utils21.exactProp)(ThemeProvider2.propTypes) : void 0;
}
var ThemeProvider_default = ThemeProvider2;

// node_modules/@material-ui/styles/esm/withStyles/withStyles.js
var import_prop_types14 = __toModule(require_prop_types());
var import_hoist_non_react_statics2 = __toModule(require_hoist_non_react_statics_cjs());
var import_utils22 = __toModule(require_utils());
import React19 from "react";
var withStyles = function withStyles2(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function(Component3) {
    var defaultTheme3 = options.defaultTheme, _options$withTheme = options.withTheme, withTheme3 = _options$withTheme === void 0 ? false : _options$withTheme, name = options.name, stylesOptions = _objectWithoutProperties(options, ["defaultTheme", "withTheme", "name"]);
    if (true) {
      if (Component3 === void 0) {
        throw new Error(["You are calling withStyles(styles)(Component) with an undefined component.", "You may have forgotten to import it."].join("\n"));
      }
    }
    var classNamePrefix = name;
    if (true) {
      if (!name) {
        var displayName = (0, import_utils22.getDisplayName)(Component3);
        if (displayName !== void 0) {
          classNamePrefix = displayName;
        }
      }
    }
    var useStyles = makeStyles(stylesOrCreator, _extends({
      defaultTheme: defaultTheme3,
      Component: Component3,
      name: name || Component3.displayName,
      classNamePrefix
    }, stylesOptions));
    var WithStyles = /* @__PURE__ */ React19.forwardRef(function WithStyles2(props, ref) {
      var classesProp = props.classes, innerRef = props.innerRef, other = _objectWithoutProperties(props, ["classes", "innerRef"]);
      var classes = useStyles(_extends({}, Component3.defaultProps, props));
      var theme;
      var more = other;
      if (typeof name === "string" || withTheme3) {
        theme = useTheme5() || defaultTheme3;
        if (name) {
          more = getThemeProps2({
            theme,
            name,
            props: other
          });
        }
        if (withTheme3 && !more.theme) {
          more.theme = theme;
        }
      }
      return /* @__PURE__ */ React19.createElement(Component3, _extends({
        ref: innerRef || ref,
        classes
      }, more));
    });
    true ? WithStyles.propTypes = {
      classes: import_prop_types14.default.object,
      innerRef: (0, import_utils22.chainPropTypes)(import_prop_types14.default.oneOfType([import_prop_types14.default.func, import_prop_types14.default.object]), function(props) {
        if (props.innerRef == null) {
          return null;
        }
        return null;
      })
    } : void 0;
    if (true) {
      WithStyles.displayName = "WithStyles(".concat((0, import_utils22.getDisplayName)(Component3), ")");
    }
    (0, import_hoist_non_react_statics2.default)(WithStyles, Component3);
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
  import_utils23.ponyfillGlobal["__@material-ui/styles-init__"] = import_utils23.ponyfillGlobal["__@material-ui/styles-init__"] || 0;
  if (import_utils23.ponyfillGlobal["__@material-ui/styles-init__"] === 1) {
    console.warn(["It looks like there are several instances of `@material-ui/styles` initialized in this application.", "This may cause theme propagation issues, broken class names, specificity issues, and makes your application bigger without a good reason.", "", "See https://material-ui.com/r/styles-instance-warning for more info."].join("\n"));
  }
  import_utils23.ponyfillGlobal["__@material-ui/styles-init__"] += 1;
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
var import_utils27 = __toModule(require_utils());

// node_modules/@material-ui/core/esm/styles/createBreakpoints.js
var keys = ["xs", "sm", "md", "lg", "xl"];
function createBreakpoints2(breakpoints) {
  var _breakpoints$values = breakpoints.values, values5 = _breakpoints$values === void 0 ? {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  } : _breakpoints$values, _breakpoints$unit = breakpoints.unit, unit = _breakpoints$unit === void 0 ? "px" : _breakpoints$unit, _breakpoints$step = breakpoints.step, step = _breakpoints$step === void 0 ? 5 : _breakpoints$step, other = _objectWithoutProperties(breakpoints, ["values", "unit", "step"]);
  function up2(key) {
    var value = typeof values5[key] === "number" ? values5[key] : key;
    return "@media (min-width:".concat(value).concat(unit, ")");
  }
  function down(key) {
    var endIndex = keys.indexOf(key) + 1;
    var upperbound = values5[keys[endIndex]];
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
    return "@media (min-width:".concat(typeof values5[start] === "number" ? values5[start] : start).concat(unit, ") and ") + "(max-width:".concat((endIndex !== -1 && typeof values5[keys[endIndex + 1]] === "number" ? values5[keys[endIndex + 1]] : end) - step / 100).concat(unit, ")");
  }
  function only(key) {
    return between(key, key);
  }
  var warnedOnce3 = false;
  function width2(key) {
    if (true) {
      if (!warnedOnce3) {
        warnedOnce3 = true;
        console.warn(["Material-UI: The `theme.breakpoints.width` utility is deprecated because it's redundant.", "Use the `theme.breakpoints.values` instead."].join("\n"));
      }
    }
    return values5[key];
  }
  return _extends({
    keys,
    values: values5,
    up: up2,
    down,
    between,
    only,
    width: width2
  }, other);
}

// node_modules/@material-ui/core/esm/styles/createMixins.js
function createMixins2(breakpoints, spacing4, mixins) {
  var _toolbar;
  return _extends({
    gutters: function gutters() {
      var styles20 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      console.warn(["Material-UI: theme.mixins.gutters() is deprecated.", "You can use the source of the mixin directly:", "\n      paddingLeft: theme.spacing(2),\n      paddingRight: theme.spacing(2),\n      [theme.breakpoints.up('sm')]: {\n        paddingLeft: theme.spacing(3),\n        paddingRight: theme.spacing(3),\n      },\n      "].join("\n"));
      return _extends({
        paddingLeft: spacing4(2),
        paddingRight: spacing4(2)
      }, styles20, _defineProperty({}, breakpoints.up("sm"), _extends({
        paddingLeft: spacing4(3),
        paddingRight: spacing4(3)
      }, styles20[breakpoints.up("sm")])));
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
var import_utils24 = __toModule(require_utils());

// node_modules/@material-ui/core/esm/colors/common.js
var common2 = {
  black: "#000",
  white: "#fff"
};
var common_default2 = common2;

// node_modules/@material-ui/core/esm/colors/grey.js
var grey2 = {
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
var grey_default2 = grey2;

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
var red2 = {
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
var red_default2 = red2;

// node_modules/@material-ui/core/esm/colors/orange.js
var orange2 = {
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
var orange_default2 = orange2;

// node_modules/@material-ui/core/esm/colors/blue.js
var blue2 = {
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
var blue_default2 = blue2;

// node_modules/@material-ui/core/esm/colors/green.js
var green2 = {
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
var green_default2 = green2;

// node_modules/@material-ui/core/esm/styles/colorManipulator.js
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
function hexToRgb2(color2) {
  color2 = color2.substr(1);
  var re2 = new RegExp(".{1,".concat(color2.length >= 6 ? 2 : 1, "}"), "g");
  var colors = color2.match(re2);
  if (colors && colors[0].length === 1) {
    colors = colors.map(function(n2) {
      return n2 + n2;
    });
  }
  return colors ? "rgb".concat(colors.length === 4 ? "a" : "", "(").concat(colors.map(function(n2, index3) {
    return index3 < 3 ? parseInt(n2, 16) : Math.round(parseInt(n2, 16) / 255 * 1e3) / 1e3;
  }).join(", "), ")") : "";
}
function hslToRgb2(color2) {
  color2 = decomposeColor2(color2);
  var _color = color2, values5 = _color.values;
  var h2 = values5[0];
  var s2 = values5[1] / 100;
  var l2 = values5[2] / 100;
  var a2 = s2 * Math.min(l2, 1 - l2);
  var f = function f2(n2) {
    var k2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : (n2 + h2 / 30) % 12;
    return l2 - a2 * Math.max(Math.min(k2 - 3, 9 - k2, 1), -1);
  };
  var type3 = "rgb";
  var rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
  if (color2.type === "hsla") {
    type3 += "a";
    rgb.push(values5[3]);
  }
  return recomposeColor2({
    type: type3,
    values: rgb
  });
}
function decomposeColor2(color2) {
  if (color2.type) {
    return color2;
  }
  if (color2.charAt(0) === "#") {
    return decomposeColor2(hexToRgb2(color2));
  }
  var marker = color2.indexOf("(");
  var type3 = color2.substring(0, marker);
  if (["rgb", "rgba", "hsl", "hsla"].indexOf(type3) === -1) {
    throw new Error(true ? "Material-UI: Unsupported `".concat(color2, "` color.\nWe support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().") : (0, import_utils.formatMuiErrorMessage)(3, color2));
  }
  var values5 = color2.substring(marker + 1, color2.length - 1).split(",");
  values5 = values5.map(function(value) {
    return parseFloat(value);
  });
  return {
    type: type3,
    values: values5
  };
}
function recomposeColor2(color2) {
  var type3 = color2.type;
  var values5 = color2.values;
  if (type3.indexOf("rgb") !== -1) {
    values5 = values5.map(function(n2, i2) {
      return i2 < 3 ? parseInt(n2, 10) : n2;
    });
  } else if (type3.indexOf("hsl") !== -1) {
    values5[1] = "".concat(values5[1], "%");
    values5[2] = "".concat(values5[2], "%");
  }
  return "".concat(type3, "(").concat(values5.join(", "), ")");
}
function getContrastRatio2(foreground, background) {
  var lumA = getLuminance2(foreground);
  var lumB = getLuminance2(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
function getLuminance2(color2) {
  color2 = decomposeColor2(color2);
  var rgb = color2.type === "hsl" ? decomposeColor2(hslToRgb2(color2)).values : color2.values;
  rgb = rgb.map(function(val) {
    val /= 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
function alpha2(color2, value) {
  color2 = decomposeColor2(color2);
  value = clamp2(value);
  if (color2.type === "rgb" || color2.type === "hsl") {
    color2.type += "a";
  }
  color2.values[3] = value;
  return recomposeColor2(color2);
}
function darken2(color2, coefficient) {
  color2 = decomposeColor2(color2);
  coefficient = clamp2(coefficient);
  if (color2.type.indexOf("hsl") !== -1) {
    color2.values[2] *= 1 - coefficient;
  } else if (color2.type.indexOf("rgb") !== -1) {
    for (var i2 = 0; i2 < 3; i2 += 1) {
      color2.values[i2] *= 1 - coefficient;
    }
  }
  return recomposeColor2(color2);
}
function lighten2(color2, coefficient) {
  color2 = decomposeColor2(color2);
  coefficient = clamp2(coefficient);
  if (color2.type.indexOf("hsl") !== -1) {
    color2.values[2] += (100 - color2.values[2]) * coefficient;
  } else if (color2.type.indexOf("rgb") !== -1) {
    for (var i2 = 0; i2 < 3; i2 += 1) {
      color2.values[i2] += (255 - color2.values[i2]) * coefficient;
    }
  }
  return recomposeColor2(color2);
}

// node_modules/@material-ui/core/esm/styles/createPalette.js
var light2 = {
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.54)",
    disabled: "rgba(0, 0, 0, 0.38)",
    hint: "rgba(0, 0, 0, 0.38)"
  },
  divider: "rgba(0, 0, 0, 0.12)",
  background: {
    paper: common_default2.white,
    default: grey_default2[50]
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
var dark2 = {
  text: {
    primary: common_default2.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    hint: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: grey_default2[800],
    default: "#303030"
  },
  action: {
    active: common_default2.white,
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
function addLightOrDark2(intent, direction, shade, tonalOffset) {
  var tonalOffsetLight = tonalOffset.light || tonalOffset;
  var tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === "light") {
      intent.light = lighten2(intent.main, tonalOffsetLight);
    } else if (direction === "dark") {
      intent.dark = darken2(intent.main, tonalOffsetDark);
    }
  }
}
function createPalette2(palette3) {
  var _palette$primary = palette3.primary, primary3 = _palette$primary === void 0 ? {
    light: indigo_default[300],
    main: indigo_default[500],
    dark: indigo_default[700]
  } : _palette$primary, _palette$secondary = palette3.secondary, secondary3 = _palette$secondary === void 0 ? {
    light: pink_default.A200,
    main: pink_default.A400,
    dark: pink_default.A700
  } : _palette$secondary, _palette$error = palette3.error, error3 = _palette$error === void 0 ? {
    light: red_default2[300],
    main: red_default2[500],
    dark: red_default2[700]
  } : _palette$error, _palette$warning = palette3.warning, warning4 = _palette$warning === void 0 ? {
    light: orange_default2[300],
    main: orange_default2[500],
    dark: orange_default2[700]
  } : _palette$warning, _palette$info = palette3.info, info3 = _palette$info === void 0 ? {
    light: blue_default2[300],
    main: blue_default2[500],
    dark: blue_default2[700]
  } : _palette$info, _palette$success = palette3.success, success3 = _palette$success === void 0 ? {
    light: green_default2[300],
    main: green_default2[500],
    dark: green_default2[700]
  } : _palette$success, _palette$type = palette3.type, type3 = _palette$type === void 0 ? "light" : _palette$type, _palette$contrastThre = palette3.contrastThreshold, contrastThreshold = _palette$contrastThre === void 0 ? 3 : _palette$contrastThre, _palette$tonalOffset = palette3.tonalOffset, tonalOffset = _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset, other = _objectWithoutProperties(palette3, ["primary", "secondary", "error", "warning", "info", "success", "type", "contrastThreshold", "tonalOffset"]);
  function getContrastText(background) {
    var contrastText = getContrastRatio2(background, dark2.text.primary) >= contrastThreshold ? dark2.text.primary : light2.text.primary;
    if (true) {
      var contrast = getContrastRatio2(background, contrastText);
      if (contrast < 3) {
        console.error(["Material-UI: The contrast ratio of ".concat(contrast, ":1 for ").concat(contrastText, " on ").concat(background), "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join("\n"));
      }
    }
    return contrastText;
  }
  var augmentColor = function augmentColor2(color2) {
    var mainShade = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 500;
    var lightShade = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 300;
    var darkShade = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 700;
    color2 = _extends({}, color2);
    if (!color2.main && color2[mainShade]) {
      color2.main = color2[mainShade];
    }
    if (!color2.main) {
      throw new Error(true ? "Material-UI: The color provided to augmentColor(color) is invalid.\nThe color object needs to have a `main` property or a `".concat(mainShade, "` property.") : (0, import_utils.formatMuiErrorMessage)(4, mainShade));
    }
    if (typeof color2.main !== "string") {
      throw new Error(true ? "Material-UI: The color provided to augmentColor(color) is invalid.\n`color.main` should be a string, but `".concat(JSON.stringify(color2.main), '` was provided instead.\n\nDid you intend to use one of the following approaches?\n\nimport {\xA0green } from "@material-ui/core/colors";\n\nconst theme1 = createTheme({ palette: {\n  primary: green,\n} });\n\nconst theme2 = createTheme({ palette: {\n  primary: { main: green[500] },\n} });') : (0, import_utils.formatMuiErrorMessage)(5, JSON.stringify(color2.main)));
    }
    addLightOrDark2(color2, "light", lightShade, tonalOffset);
    addLightOrDark2(color2, "dark", darkShade, tonalOffset);
    if (!color2.contrastText) {
      color2.contrastText = getContrastText(color2.main);
    }
    return color2;
  };
  var types = {
    dark: dark2,
    light: light2
  };
  if (true) {
    if (!types[type3]) {
      console.error("Material-UI: The palette type `".concat(type3, "` is not supported."));
    }
  }
  var paletteOutput = (0, import_utils24.deepmerge)(_extends({
    common: common_default2,
    type: type3,
    primary: augmentColor(primary3),
    secondary: augmentColor(secondary3, "A400", "A200", "A700"),
    error: augmentColor(error3),
    warning: augmentColor(warning4),
    info: augmentColor(info3),
    success: augmentColor(success3),
    grey: grey_default2,
    contrastThreshold,
    getContrastText,
    augmentColor,
    tonalOffset
  }, types[type3]), other);
  return paletteOutput;
}

// node_modules/@material-ui/core/esm/styles/createTypography.js
var import_utils25 = __toModule(require_utils());
function round2(value) {
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
  return round2(value);
}
var caseAllCaps2 = {
  textTransform: "uppercase"
};
var defaultFontFamily2 = '"Roboto", "Helvetica", "Arial", sans-serif';
function createTypography2(palette3, typography3) {
  var _ref = typeof typography3 === "function" ? typography3(palette3) : typography3, _ref$fontFamily = _ref.fontFamily, fontFamily3 = _ref$fontFamily === void 0 ? defaultFontFamily2 : _ref$fontFamily, _ref$fontSize = _ref.fontSize, fontSize3 = _ref$fontSize === void 0 ? 14 : _ref$fontSize, _ref$fontWeightLight = _ref.fontWeightLight, fontWeightLight2 = _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight, _ref$fontWeightRegula = _ref.fontWeightRegular, fontWeightRegular2 = _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula, _ref$fontWeightMedium = _ref.fontWeightMedium, fontWeightMedium2 = _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium, _ref$fontWeightBold = _ref.fontWeightBold, fontWeightBold2 = _ref$fontWeightBold === void 0 ? 700 : _ref$fontWeightBold, _ref$htmlFontSize = _ref.htmlFontSize, htmlFontSize2 = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize, allVariants = _ref.allVariants, pxToRem2 = _ref.pxToRem, other = _objectWithoutProperties(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"]);
  if (true) {
    if (typeof fontSize3 !== "number") {
      console.error("Material-UI: `fontSize` is required to be a number.");
    }
    if (typeof htmlFontSize2 !== "number") {
      console.error("Material-UI: `htmlFontSize` is required to be a number.");
    }
  }
  var coef = fontSize3 / 14;
  var pxToRem = pxToRem2 || function(size) {
    return "".concat(size / htmlFontSize2 * coef, "rem");
  };
  var buildVariant = function buildVariant2(fontWeight2, size, lineHeight2, letterSpacing2, casing) {
    return _extends({
      fontFamily: fontFamily3,
      fontWeight: fontWeight2,
      fontSize: pxToRem(size),
      lineHeight: lineHeight2
    }, fontFamily3 === defaultFontFamily2 ? {
      letterSpacing: "".concat(round2(letterSpacing2 / size), "em")
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
    button: buildVariant(fontWeightMedium2, 14, 1.75, 0.4, caseAllCaps2),
    caption: buildVariant(fontWeightRegular2, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular2, 12, 2.66, 1, caseAllCaps2)
  };
  return (0, import_utils25.deepmerge)(_extends({
    htmlFontSize: htmlFontSize2,
    pxToRem,
    round: roundWithDeprecationWarning,
    fontFamily: fontFamily3,
    fontSize: fontSize3,
    fontWeightLight: fontWeightLight2,
    fontWeightRegular: fontWeightRegular2,
    fontWeightMedium: fontWeightMedium2,
    fontWeightBold: fontWeightBold2
  }, variants), other, {
    clone: false
  });
}

// node_modules/@material-ui/core/esm/styles/shadows.js
var shadowKeyUmbraOpacity2 = 0.2;
var shadowKeyPenumbraOpacity2 = 0.14;
var shadowAmbientShadowOpacity2 = 0.12;
function createShadow2() {
  return ["".concat(arguments.length <= 0 ? void 0 : arguments[0], "px ").concat(arguments.length <= 1 ? void 0 : arguments[1], "px ").concat(arguments.length <= 2 ? void 0 : arguments[2], "px ").concat(arguments.length <= 3 ? void 0 : arguments[3], "px rgba(0,0,0,").concat(shadowKeyUmbraOpacity2, ")"), "".concat(arguments.length <= 4 ? void 0 : arguments[4], "px ").concat(arguments.length <= 5 ? void 0 : arguments[5], "px ").concat(arguments.length <= 6 ? void 0 : arguments[6], "px ").concat(arguments.length <= 7 ? void 0 : arguments[7], "px rgba(0,0,0,").concat(shadowKeyPenumbraOpacity2, ")"), "".concat(arguments.length <= 8 ? void 0 : arguments[8], "px ").concat(arguments.length <= 9 ? void 0 : arguments[9], "px ").concat(arguments.length <= 10 ? void 0 : arguments[10], "px ").concat(arguments.length <= 11 ? void 0 : arguments[11], "px rgba(0,0,0,").concat(shadowAmbientShadowOpacity2, ")")].join(",");
}
var shadows2 = ["none", createShadow2(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow2(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow2(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow2(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow2(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow2(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow2(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow2(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow2(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow2(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow2(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow2(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow2(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow2(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow2(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow2(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow2(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow2(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow2(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow2(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow2(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow2(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow2(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow2(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
var shadows_default3 = shadows2;

// node_modules/@material-ui/core/esm/styles/shape.js
var shape2 = {
  borderRadius: 4
};
var shape_default2 = shape2;

// node_modules/@material-ui/system/esm/responsivePropType.js
var import_prop_types15 = __toModule(require_prop_types());
var responsivePropType2 = true ? import_prop_types15.default.oneOfType([import_prop_types15.default.number, import_prop_types15.default.string, import_prop_types15.default.object, import_prop_types15.default.array]) : {};
var responsivePropType_default2 = responsivePropType2;

// node_modules/@material-ui/system/esm/breakpoints.js
var import_prop_types16 = __toModule(require_prop_types());

// node_modules/@material-ui/system/esm/merge.js
var import_utils26 = __toModule(require_utils());
function merge3(acc, item) {
  if (!item) {
    return acc;
  }
  return (0, import_utils26.deepmerge)(acc, item, {
    clone: false
  });
}
var merge_default2 = merge3;

// node_modules/@material-ui/system/esm/breakpoints.js
var values3 = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
};
var defaultBreakpoints2 = {
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: function up(key) {
    return "@media (min-width:".concat(values3[key], "px)");
  }
};
function handleBreakpoints2(props, propValue, styleFromPropValue) {
  if (true) {
    if (!props.theme) {
      console.error("Material-UI: You are calling a style function without a theme value.");
    }
  }
  if (Array.isArray(propValue)) {
    var themeBreakpoints = props.theme.breakpoints || defaultBreakpoints2;
    return propValue.reduce(function(acc, item, index3) {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index3])] = styleFromPropValue(propValue[index3]);
      return acc;
    }, {});
  }
  if (_typeof2(propValue) === "object") {
    var _themeBreakpoints = props.theme.breakpoints || defaultBreakpoints2;
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
function memoize5(fn) {
  var cache3 = {};
  return function(arg) {
    if (cache3[arg] === void 0) {
      cache3[arg] = fn(arg);
    }
    return cache3[arg];
  };
}

// node_modules/@material-ui/system/esm/spacing.js
var properties2 = {
  m: "margin",
  p: "padding"
};
var directions2 = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
};
var aliases2 = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
};
var getCssProperties2 = memoize5(function(prop) {
  if (prop.length > 2) {
    if (aliases2[prop]) {
      prop = aliases2[prop];
    } else {
      return [prop];
    }
  }
  var _prop$split = prop.split(""), _prop$split2 = _slicedToArray(_prop$split, 2), a2 = _prop$split2[0], b2 = _prop$split2[1];
  var property = properties2[a2];
  var direction = directions2[b2] || "";
  return Array.isArray(direction) ? direction.map(function(dir) {
    return property + dir;
  }) : [property + direction];
});
var spacingKeys2 = ["m", "mt", "mr", "mb", "ml", "mx", "my", "p", "pt", "pr", "pb", "pl", "px", "py", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY"];
function createUnarySpacing2(theme) {
  var themeSpacing = theme.spacing || 8;
  if (typeof themeSpacing === "number") {
    return function(abs2) {
      if (true) {
        if (typeof abs2 !== "number") {
          console.error("Material-UI: Expected spacing argument to be a number, got ".concat(abs2, "."));
        }
      }
      return themeSpacing * abs2;
    };
  }
  if (Array.isArray(themeSpacing)) {
    return function(abs2) {
      if (true) {
        if (abs2 > themeSpacing.length - 1) {
          console.error(["Material-UI: The value provided (".concat(abs2, ") overflows."), "The supported values are: ".concat(JSON.stringify(themeSpacing), "."), "".concat(abs2, " > ").concat(themeSpacing.length - 1, ", you need to add the missing values.")].join("\n"));
        }
      }
      return themeSpacing[abs2];
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
function getValue3(transformer, propValue) {
  if (typeof propValue === "string" || propValue == null) {
    return propValue;
  }
  var abs2 = Math.abs(propValue);
  var transformed = transformer(abs2);
  if (propValue >= 0) {
    return transformed;
  }
  if (typeof transformed === "number") {
    return -transformed;
  }
  return "-".concat(transformed);
}
function getStyleFromPropValue2(cssProperties, transformer) {
  return function(propValue) {
    return cssProperties.reduce(function(acc, cssProperty) {
      acc[cssProperty] = getValue3(transformer, propValue);
      return acc;
    }, {});
  };
}
function spacing2(props) {
  var theme = props.theme;
  var transformer = createUnarySpacing2(theme);
  return Object.keys(props).map(function(prop) {
    if (spacingKeys2.indexOf(prop) === -1) {
      return null;
    }
    var cssProperties = getCssProperties2(prop);
    var styleFromPropValue = getStyleFromPropValue2(cssProperties, transformer);
    var propValue = props[prop];
    return handleBreakpoints2(props, propValue, styleFromPropValue);
  }).reduce(merge_default2, {});
}
spacing2.propTypes = true ? spacingKeys2.reduce(function(obj, key) {
  obj[key] = responsivePropType_default2;
  return obj;
}, {}) : {};
spacing2.filterProps = spacingKeys2;

// node_modules/@material-ui/core/esm/styles/createSpacing.js
var warnOnce;
function createSpacing2() {
  var spacingInput = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 8;
  if (spacingInput.mui) {
    return spacingInput;
  }
  var transform3 = createUnarySpacing2({
    spacing: spacingInput
  });
  var spacing4 = function spacing5() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (true) {
      if (!(args.length <= 4)) {
        console.error("Material-UI: Too many arguments provided, expected between 0 and 4, got ".concat(args.length));
      }
    }
    if (args.length === 0) {
      return transform3(1);
    }
    if (args.length === 1) {
      return transform3(args[0]);
    }
    return args.map(function(argument) {
      if (typeof argument === "string") {
        return argument;
      }
      var output = transform3(argument);
      return typeof output === "number" ? "".concat(output, "px") : output;
    }).join(" ");
  };
  Object.defineProperty(spacing4, "unit", {
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
  spacing4.mui = true;
  return spacing4;
}

// node_modules/@material-ui/core/esm/styles/transitions.js
var easing2 = {
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
};
var duration2 = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  complex: 375,
  enteringScreen: 225,
  leavingScreen: 195
};
function formatMs2(milliseconds) {
  return "".concat(Math.round(milliseconds), "ms");
}
var transitions_default = {
  easing: easing2,
  duration: duration2,
  create: function create() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["all"];
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _options$duration = options.duration, durationOption = _options$duration === void 0 ? duration2.standard : _options$duration, _options$easing = options.easing, easingOption = _options$easing === void 0 ? easing2.easeInOut : _options$easing, _options$delay = options.delay, delay = _options$delay === void 0 ? 0 : _options$delay, other = _objectWithoutProperties(options, ["duration", "easing", "delay"]);
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
      return "".concat(animatedProp, " ").concat(typeof durationOption === "string" ? durationOption : formatMs2(durationOption), " ").concat(easingOption, " ").concat(typeof delay === "string" ? delay : formatMs2(delay));
    }).join(",");
  },
  getAutoHeightDuration: function getAutoHeightDuration2(height2) {
    if (!height2) {
      return 0;
    }
    var constant = height2 / 36;
    return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
  }
};

// node_modules/@material-ui/core/esm/styles/zIndex.js
var zIndex3 = {
  mobileStepper: 1e3,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
var zIndex_default2 = zIndex3;

// node_modules/@material-ui/core/esm/styles/createTheme.js
function createTheme3() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var _options$breakpoints = options.breakpoints, breakpointsInput = _options$breakpoints === void 0 ? {} : _options$breakpoints, _options$mixins = options.mixins, mixinsInput = _options$mixins === void 0 ? {} : _options$mixins, _options$palette = options.palette, paletteInput = _options$palette === void 0 ? {} : _options$palette, spacingInput = options.spacing, _options$typography = options.typography, typographyInput = _options$typography === void 0 ? {} : _options$typography, other = _objectWithoutProperties(options, ["breakpoints", "mixins", "palette", "spacing", "typography"]);
  var palette3 = createPalette2(paletteInput);
  var breakpoints = createBreakpoints2(breakpointsInput);
  var spacing4 = createSpacing2(spacingInput);
  var muiTheme = (0, import_utils27.deepmerge)({
    breakpoints,
    direction: "ltr",
    mixins: createMixins2(breakpoints, spacing4, mixinsInput),
    overrides: {},
    palette: palette3,
    props: {},
    shadows: shadows_default3,
    typography: createTypography2(palette3, typographyInput),
    spacing: spacing4,
    shape: shape_default2,
    transitions: transitions_default,
    zIndex: zIndex_default2
  }, other);
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  muiTheme = args.reduce(function(acc, argument) {
    return (0, import_utils27.deepmerge)(acc, argument);
  }, muiTheme);
  if (true) {
    var pseudoClasses2 = ["checked", "disabled", "error", "focused", "focusVisible", "required", "expanded", "selected"];
    var traverse = function traverse2(node2, parentKey) {
      var depth = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
      var key;
      for (key in node2) {
        var child = node2[key];
        if (depth === 1) {
          if (key.indexOf("Mui") === 0 && child) {
            traverse2(child, key, depth + 1);
          }
        } else if (pseudoClasses2.indexOf(key) !== -1 && Object.keys(child).length > 0) {
          if (true) {
            console.error(["Material-UI: The `".concat(parentKey, "` component increases ") + "the CSS specificity of the `".concat(key, "` internal state."), "You can not override it like this: ", JSON.stringify(node2, null, 2), "", "Instead, you need to use the $ruleName syntax:", JSON.stringify({
              root: _defineProperty({}, "&$".concat(key), child)
            }, null, 2), "", "https://material-ui.com/r/pseudo-classes-guide"].join("\n"));
          }
          node2[key] = {};
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
  return createTheme3.apply(void 0, arguments);
}
var createTheme_default3 = createTheme3;

// node_modules/@material-ui/core/esm/styles/defaultTheme.js
var defaultTheme2 = createTheme_default3();
var defaultTheme_default2 = defaultTheme2;

// node_modules/@material-ui/core/esm/styles/withStyles.js
function withStyles3(stylesOrCreator, options) {
  return withStyles_default(stylesOrCreator, _extends({
    defaultTheme: defaultTheme_default2
  }, options));
}
var withStyles_default2 = withStyles3;

// node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js
var import_prop_types19 = __toModule(require_prop_types());
import {
  createElement as createElement6,
  forwardRef as forwardRef6,
  useEffect as useEffect8,
  useImperativeHandle as useImperativeHandle4,
  useRef as useRef8,
  useState as useState6
} from "react";
import {
  findDOMNode as findDOMNode2
} from "react-dom";
var import_utils28 = __toModule(require_utils());

// node_modules/@material-ui/core/esm/utils/useForkRef.js
import {
  useMemo as useMemo2
} from "react";

// node_modules/@material-ui/core/esm/utils/setRef.js
function setRef2(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

// node_modules/@material-ui/core/esm/utils/useForkRef.js
function useForkRef2(refA, refB) {
  return useMemo2(function() {
    if (refA == null && refB == null) {
      return null;
    }
    return function(refValue) {
      setRef2(refA, refValue);
      setRef2(refB, refValue);
    };
  }, [refA, refB]);
}

// node_modules/@material-ui/core/esm/utils/useEventCallback.js
import {
  useCallback as useCallback4,
  useEffect as useEffect5,
  useLayoutEffect as useLayoutEffect3,
  useRef as useRef6
} from "react";
var useEnhancedEffect2 = typeof window !== "undefined" ? useLayoutEffect3 : useEffect5;
function useEventCallback2(fn) {
  var ref = useRef6(fn);
  useEnhancedEffect2(function() {
    ref.current = fn;
  });
  return useCallback4(function() {
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
  useCallback as useCallback5,
  useDebugValue as useDebugValue2
} from "react";
import {
  findDOMNode
} from "react-dom";
var hadKeyboardEvent2 = true;
var hadFocusVisibleRecently2 = false;
var hadFocusVisibleRecentlyTimeout2 = null;
var inputTypesWhitelist2 = {
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
function focusTriggersKeyboardModality2(node2) {
  var type3 = node2.type, tagName = node2.tagName;
  if (tagName === "INPUT" && inputTypesWhitelist2[type3] && !node2.readOnly) {
    return true;
  }
  if (tagName === "TEXTAREA" && !node2.readOnly) {
    return true;
  }
  if (node2.isContentEditable) {
    return true;
  }
  return false;
}
function handleKeyDown2(event) {
  if (event.metaKey || event.altKey || event.ctrlKey) {
    return;
  }
  hadKeyboardEvent2 = true;
}
function handlePointerDown2() {
  hadKeyboardEvent2 = false;
}
function handleVisibilityChange2() {
  if (this.visibilityState === "hidden") {
    if (hadFocusVisibleRecently2) {
      hadKeyboardEvent2 = true;
    }
  }
}
function prepare2(doc) {
  doc.addEventListener("keydown", handleKeyDown2, true);
  doc.addEventListener("mousedown", handlePointerDown2, true);
  doc.addEventListener("pointerdown", handlePointerDown2, true);
  doc.addEventListener("touchstart", handlePointerDown2, true);
  doc.addEventListener("visibilitychange", handleVisibilityChange2, true);
}
function isFocusVisible2(event) {
  var target = event.target;
  try {
    return target.matches(":focus-visible");
  } catch (error3) {
  }
  return hadKeyboardEvent2 || focusTriggersKeyboardModality2(target);
}
function handleBlurVisible() {
  hadFocusVisibleRecently2 = true;
  window.clearTimeout(hadFocusVisibleRecentlyTimeout2);
  hadFocusVisibleRecentlyTimeout2 = window.setTimeout(function() {
    hadFocusVisibleRecently2 = false;
  }, 100);
}
function useIsFocusVisible2() {
  var ref = useCallback5(function(instance) {
    var node2 = findDOMNode(instance);
    if (node2 != null) {
      prepare2(node2.ownerDocument);
    }
  }, []);
  if (true) {
    useDebugValue2(isFocusVisible2);
  }
  return {
    isFocusVisible: isFocusVisible2,
    onBlurVisible: handleBlurVisible,
    ref
  };
}

// node_modules/@material-ui/core/esm/ButtonBase/TouchRipple.js
var import_prop_types18 = __toModule(require_prop_types());
import {
  createElement as createElement5,
  forwardRef as forwardRef5,
  memo,
  useCallback as useCallback6,
  useEffect as useEffect7,
  useImperativeHandle as useImperativeHandle3,
  useRef as useRef7,
  useState as useState5
} from "react";

// node_modules/@material-ui/core/esm/ButtonBase/Ripple.js
var import_prop_types17 = __toModule(require_prop_types());
import {
  createElement as createElement4,
  useEffect as useEffect6,
  useLayoutEffect as useLayoutEffect4,
  useState as useState4
} from "react";
var useEnhancedEffect3 = typeof window === "undefined" ? useEffect6 : useLayoutEffect4;
function Ripple2(props) {
  var classes = props.classes, _props$pulsate = props.pulsate, pulsate = _props$pulsate === void 0 ? false : _props$pulsate, rippleX = props.rippleX, rippleY = props.rippleY, rippleSize = props.rippleSize, inProp = props.in, _props$onExited = props.onExited, onExited = _props$onExited === void 0 ? function() {
  } : _props$onExited, timeout2 = props.timeout;
  var _React$useState = useState4(false), leaving = _React$useState[0], setLeaving = _React$useState[1];
  var rippleClassName = clsx_m_default(classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
  var rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  var childClassName = clsx_m_default(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
  var handleExited = useEventCallback2(onExited);
  useEnhancedEffect3(function() {
    if (!inProp) {
      setLeaving(true);
      var timeoutId = setTimeout(handleExited, timeout2);
      return function() {
        clearTimeout(timeoutId);
      };
    }
    return void 0;
  }, [handleExited, inProp, timeout2]);
  return /* @__PURE__ */ createElement4("span", {
    className: rippleClassName,
    style: rippleStyles
  }, /* @__PURE__ */ createElement4("span", {
    className: childClassName
  }));
}
true ? Ripple2.propTypes = {
  classes: import_prop_types17.default.object.isRequired,
  in: import_prop_types17.default.bool,
  onExited: import_prop_types17.default.func,
  pulsate: import_prop_types17.default.bool,
  rippleSize: import_prop_types17.default.number,
  rippleX: import_prop_types17.default.number,
  rippleY: import_prop_types17.default.number,
  timeout: import_prop_types17.default.number.isRequired
} : void 0;
var Ripple_default2 = Ripple2;

// node_modules/@material-ui/core/esm/ButtonBase/TouchRipple.js
var DURATION2 = 550;
var DELAY_RIPPLE2 = 80;
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
      animation: "$enter ".concat(DURATION2, "ms ").concat(theme.transitions.easing.easeInOut)
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
      animation: "$exit ".concat(DURATION2, "ms ").concat(theme.transitions.easing.easeInOut)
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
var TouchRipple3 = /* @__PURE__ */ forwardRef5(function TouchRipple4(props, ref) {
  var _props$center = props.center, centerProp = _props$center === void 0 ? false : _props$center, classes = props.classes, className = props.className, other = _objectWithoutProperties(props, ["center", "classes", "className"]);
  var _React$useState = useState5([]), ripples = _React$useState[0], setRipples = _React$useState[1];
  var nextKey = useRef7(0);
  var rippleCallback = useRef7(null);
  useEffect7(function() {
    if (rippleCallback.current) {
      rippleCallback.current();
      rippleCallback.current = null;
    }
  }, [ripples]);
  var ignoringMouseDown = useRef7(false);
  var startTimer = useRef7(null);
  var startTimerCommit = useRef7(null);
  var container = useRef7(null);
  useEffect7(function() {
    return function() {
      clearTimeout(startTimer.current);
    };
  }, []);
  var startCommit = useCallback6(function(params) {
    var pulsate2 = params.pulsate, rippleX = params.rippleX, rippleY = params.rippleY, rippleSize = params.rippleSize, cb = params.cb;
    setRipples(function(oldRipples) {
      return [].concat(_toConsumableArray(oldRipples), [/* @__PURE__ */ createElement5(Ripple_default2, {
        key: nextKey.current,
        classes,
        timeout: DURATION2,
        pulsate: pulsate2,
        rippleX,
        rippleY,
        rippleSize
      })]);
    });
    nextKey.current += 1;
    rippleCallback.current = cb;
  }, [classes]);
  var start = useCallback6(function() {
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
        }, DELAY_RIPPLE2);
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
  var pulsate = useCallback6(function() {
    start({}, {
      pulsate: true
    });
  }, [start]);
  var stop = useCallback6(function(event, cb) {
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
  useImperativeHandle3(ref, function() {
    return {
      pulsate,
      start,
      stop
    };
  }, [pulsate, start, stop]);
  return /* @__PURE__ */ createElement5("span", _extends({
    className: clsx_m_default(classes.root, className),
    ref: container
  }, other), /* @__PURE__ */ createElement5(TransitionGroup_default, {
    component: null,
    exit: true
  }, ripples));
});
true ? TouchRipple3.propTypes = {
  center: import_prop_types18.default.bool,
  classes: import_prop_types18.default.object.isRequired,
  className: import_prop_types18.default.string
} : void 0;
var TouchRipple_default2 = withStyles_default2(styles, {
  flip: false,
  name: "MuiTouchRipple"
})(/* @__PURE__ */ memo(TouchRipple3));

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
var ButtonBase3 = /* @__PURE__ */ forwardRef6(function ButtonBase4(props, ref) {
  var action3 = props.action, buttonRefProp = props.buttonRef, _props$centerRipple = props.centerRipple, centerRipple = _props$centerRipple === void 0 ? false : _props$centerRipple, children = props.children, classes = props.classes, className = props.className, _props$component = props.component, component = _props$component === void 0 ? "button" : _props$component, _props$disabled = props.disabled, disabled3 = _props$disabled === void 0 ? false : _props$disabled, _props$disableRipple = props.disableRipple, disableRipple = _props$disableRipple === void 0 ? false : _props$disableRipple, _props$disableTouchRi = props.disableTouchRipple, disableTouchRipple = _props$disableTouchRi === void 0 ? false : _props$disableTouchRi, _props$focusRipple = props.focusRipple, focusRipple = _props$focusRipple === void 0 ? false : _props$focusRipple, focusVisibleClassName = props.focusVisibleClassName, onBlur = props.onBlur, onClick = props.onClick, onFocus = props.onFocus, onFocusVisible = props.onFocusVisible, onKeyDown = props.onKeyDown, onKeyUp = props.onKeyUp, onMouseDown = props.onMouseDown, onMouseLeave = props.onMouseLeave, onMouseUp = props.onMouseUp, onTouchEnd = props.onTouchEnd, onTouchMove = props.onTouchMove, onTouchStart = props.onTouchStart, onDragLeave = props.onDragLeave, _props$tabIndex = props.tabIndex, tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex, TouchRippleProps = props.TouchRippleProps, _props$type = props.type, type3 = _props$type === void 0 ? "button" : _props$type, other = _objectWithoutProperties(props, ["action", "buttonRef", "centerRipple", "children", "classes", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "onBlur", "onClick", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "onDragLeave", "tabIndex", "TouchRippleProps", "type"]);
  var buttonRef = useRef8(null);
  function getButtonNode() {
    return findDOMNode2(buttonRef.current);
  }
  var rippleRef = useRef8(null);
  var _React$useState = useState6(false), focusVisible2 = _React$useState[0], setFocusVisible = _React$useState[1];
  if (disabled3 && focusVisible2) {
    setFocusVisible(false);
  }
  var _useIsFocusVisible = useIsFocusVisible2(), isFocusVisible3 = _useIsFocusVisible.isFocusVisible, onBlurVisible = _useIsFocusVisible.onBlurVisible, focusVisibleRef = _useIsFocusVisible.ref;
  useImperativeHandle4(action3, function() {
    return {
      focusVisible: function focusVisible3() {
        setFocusVisible(true);
        buttonRef.current.focus();
      }
    };
  }, []);
  useEffect8(function() {
    if (focusVisible2 && focusRipple && !disableRipple) {
      rippleRef.current.pulsate();
    }
  }, [disableRipple, focusRipple, focusVisible2]);
  function useRippleHandler(rippleAction, eventCallback) {
    var skipRippleAction = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : disableTouchRipple;
    return useEventCallback2(function(event) {
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
  var handleFocus = useEventCallback2(function(event) {
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }
    if (isFocusVisible3(event)) {
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
  var keydownRef = useRef8(false);
  var handleKeyDown3 = useEventCallback2(function(event) {
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
  var handleKeyUp = useEventCallback2(function(event) {
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
  var handleUserRef = useForkRef2(buttonRefProp, ref);
  var handleOwnRef = useForkRef2(focusVisibleRef, buttonRef);
  var handleRef = useForkRef2(handleUserRef, handleOwnRef);
  var _React$useState2 = useState6(false), mountedState = _React$useState2[0], setMountedState = _React$useState2[1];
  useEffect8(function() {
    setMountedState(true);
  }, []);
  var enableTouchRipple = mountedState && !disableRipple && !disabled3;
  if (true) {
    useEffect8(function() {
      if (enableTouchRipple && !rippleRef.current) {
        console.error(["Material-UI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join("\n"));
      }
    }, [enableTouchRipple]);
  }
  return /* @__PURE__ */ createElement6(ComponentProp, _extends({
    className: clsx_m_default(classes.root, className, focusVisible2 && [classes.focusVisible, focusVisibleClassName], disabled3 && classes.disabled),
    onBlur: handleBlur,
    onClick,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown3,
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
  }, buttonProps, other), children, enableTouchRipple ? /* @__PURE__ */ createElement6(TouchRipple_default2, _extends({
    ref: rippleRef,
    center: centerRipple
  }, TouchRippleProps)) : null);
});
true ? ButtonBase3.propTypes = {
  action: import_utils28.refType,
  buttonRef: deprecatedPropType(import_utils28.refType, "Use `ref` instead."),
  centerRipple: import_prop_types19.default.bool,
  children: import_prop_types19.default.node,
  classes: import_prop_types19.default.object,
  className: import_prop_types19.default.string,
  component: import_utils28.elementTypeAcceptingRef,
  disabled: import_prop_types19.default.bool,
  disableRipple: import_prop_types19.default.bool,
  disableTouchRipple: import_prop_types19.default.bool,
  focusRipple: import_prop_types19.default.bool,
  focusVisibleClassName: import_prop_types19.default.string,
  href: import_prop_types19.default.string,
  onBlur: import_prop_types19.default.func,
  onClick: import_prop_types19.default.func,
  onDragLeave: import_prop_types19.default.func,
  onFocus: import_prop_types19.default.func,
  onFocusVisible: import_prop_types19.default.func,
  onKeyDown: import_prop_types19.default.func,
  onKeyUp: import_prop_types19.default.func,
  onMouseDown: import_prop_types19.default.func,
  onMouseLeave: import_prop_types19.default.func,
  onMouseUp: import_prop_types19.default.func,
  onTouchEnd: import_prop_types19.default.func,
  onTouchMove: import_prop_types19.default.func,
  onTouchStart: import_prop_types19.default.func,
  tabIndex: import_prop_types19.default.oneOfType([import_prop_types19.default.number, import_prop_types19.default.string]),
  TouchRippleProps: import_prop_types19.default.object,
  type: import_prop_types19.default.oneOfType([import_prop_types19.default.oneOf(["button", "reset", "submit"]), import_prop_types19.default.string])
} : void 0;
var ButtonBase_default2 = withStyles_default2(styles3, {
  name: "MuiButtonBase"
})(ButtonBase3);

// node_modules/@material-ui/core/esm/utils/capitalize.js
function capitalize2(string) {
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
        backgroundColor: alpha2(theme.palette.text.primary, theme.palette.action.hoverOpacity),
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
        backgroundColor: alpha2(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    },
    textSecondary: {
      color: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: alpha2(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
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
      border: "1px solid ".concat(alpha2(theme.palette.primary.main, 0.5)),
      "&:hover": {
        border: "1px solid ".concat(theme.palette.primary.main),
        backgroundColor: alpha2(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    },
    outlinedSecondary: {
      color: theme.palette.secondary.main,
      border: "1px solid ".concat(alpha2(theme.palette.secondary.main, 0.5)),
      "&:hover": {
        border: "1px solid ".concat(theme.palette.secondary.main),
        backgroundColor: alpha2(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
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
var Button3 = /* @__PURE__ */ forwardRef7(function Button4(props, ref) {
  var children = props.children, classes = props.classes, className = props.className, _props$color = props.color, color2 = _props$color === void 0 ? "default" : _props$color, _props$component = props.component, component = _props$component === void 0 ? "button" : _props$component, _props$disabled = props.disabled, disabled3 = _props$disabled === void 0 ? false : _props$disabled, _props$disableElevati = props.disableElevation, disableElevation = _props$disableElevati === void 0 ? false : _props$disableElevati, _props$disableFocusRi = props.disableFocusRipple, disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi, endIconProp = props.endIcon, focusVisibleClassName = props.focusVisibleClassName, _props$fullWidth = props.fullWidth, fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth, _props$size = props.size, size = _props$size === void 0 ? "medium" : _props$size, startIconProp = props.startIcon, _props$type = props.type, type3 = _props$type === void 0 ? "button" : _props$type, _props$variant = props.variant, variant = _props$variant === void 0 ? "text" : _props$variant, other = _objectWithoutProperties(props, ["children", "classes", "className", "color", "component", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"]);
  var startIcon = startIconProp && /* @__PURE__ */ createElement7("span", {
    className: clsx_m_default(classes.startIcon, classes["iconSize".concat(capitalize2(size))])
  }, startIconProp);
  var endIcon = endIconProp && /* @__PURE__ */ createElement7("span", {
    className: clsx_m_default(classes.endIcon, classes["iconSize".concat(capitalize2(size))])
  }, endIconProp);
  return /* @__PURE__ */ createElement7(ButtonBase_default2, _extends({
    className: clsx_m_default(classes.root, classes[variant], className, color2 === "inherit" ? classes.colorInherit : color2 !== "default" && classes["".concat(variant).concat(capitalize2(color2))], size !== "medium" && [classes["".concat(variant, "Size").concat(capitalize2(size))], classes["size".concat(capitalize2(size))]], disableElevation && classes.disableElevation, disabled3 && classes.disabled, fullWidth && classes.fullWidth),
    component,
    disabled: disabled3,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: clsx_m_default(classes.focusVisible, focusVisibleClassName),
    ref,
    type: type3
  }, other), /* @__PURE__ */ createElement7("span", {
    className: classes.label
  }, startIcon, children, endIcon));
});
true ? Button3.propTypes = {
  children: import_prop_types20.default.node,
  classes: import_prop_types20.default.object,
  className: import_prop_types20.default.string,
  color: import_prop_types20.default.oneOf(["default", "inherit", "primary", "secondary"]),
  component: import_prop_types20.default.elementType,
  disabled: import_prop_types20.default.bool,
  disableElevation: import_prop_types20.default.bool,
  disableFocusRipple: import_prop_types20.default.bool,
  disableRipple: import_prop_types20.default.bool,
  endIcon: import_prop_types20.default.node,
  focusVisibleClassName: import_prop_types20.default.string,
  fullWidth: import_prop_types20.default.bool,
  href: import_prop_types20.default.string,
  size: import_prop_types20.default.oneOf(["large", "medium", "small"]),
  startIcon: import_prop_types20.default.node,
  type: import_prop_types20.default.oneOfType([import_prop_types20.default.oneOf(["button", "reset", "submit"]), import_prop_types20.default.string]),
  variant: import_prop_types20.default.oneOf(["contained", "outlined", "text"])
} : void 0;
var Button_default2 = withStyles_default2(styles4, {
  name: "MuiButton"
})(Button3);

// node_modules/@ringcentral/juno/es6/components/Buttons/Button/Button.js
import React49, { forwardRef as forwardRef24, useCallback as useCallback10, useLayoutEffect as useLayoutEffect8, useMemo as useMemo6, useRef as useRef19 } from "react";

// node_modules/@material-ui/core/esm/styles/useTheme.js
import React27 from "react";
function useTheme6() {
  var theme = useTheme5() || defaultTheme_default2;
  if (true) {
    React27.useDebugValue(theme);
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
var import_react_is2 = __toModule(require_react_is2());
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

// node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js
var reactPropsRegex2 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var index2 = memoize_browser_esm_default(function(prop) {
  return reactPropsRegex2.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
});
var is_prop_valid_browser_esm_default = index2;

// node_modules/styled-components/dist/styled-components.browser.esm.js
var import_hoist_non_react_statics3 = __toModule(require_hoist_non_react_statics_cjs());
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
  return t2 !== null && typeof t2 == "object" && (t2.toString ? t2.toString() : Object.prototype.toString.call(t2)) === "[object Object]" && !(0, import_react_is2.typeOf)(t2);
};
var w = Object.freeze([]);
var E = Object.freeze({});
function b(e2) {
  return typeof e2 == "function";
}
function _2(e2) {
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
    return (0, import_react_is2.isElement)(u2) && console.warn(_2(e2) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Ne(u2, n2, r2, o2);
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
    return xe(e3) ? "styled." + e3 : "Styled(" + _2(e3) + ")";
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
    }(t2, ["componentId"]), s2 = r2 && r2 + "-" + (xe(e3) ? e3 : Te(_2(e3)));
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
  }, i2 && (0, import_hoist_non_react_statics3.default)(C2, e2, { attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true, withComponent: true }), C2;
}
var He = function(e2) {
  return function e3(t2, r2, o2) {
    if (o2 === void 0 && (o2 = E), !(0, import_react_is2.isValidElementType)(r2))
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
    return a2 === void 0 && console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "' + _2(e2) + '"'), r.createElement(e2, v({}, t3, { theme: a2, ref: n2 }));
  });
  return (0, import_hoist_non_react_statics3.default)(t2, e2), t2.displayName = "WithTheme(" + _2(e2) + ")", t2;
};
var Ze = function() {
  return s(Le);
};
var Ke = { StyleSheet: Z, masterSheet: he };
typeof navigator != "undefined" && navigator.product === "ReactNative" && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), typeof window != "undefined" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."), window["__styled-components-init__"] += 1);
var styled_components_browser_esm_default = He;

// node_modules/@ringcentral/juno/es6/foundation/styled-components.js
var _a = styled_components_browser_esm_exports;
var styled3 = _a.default;
var css3 = _a.css;
var keyframes3 = _a.keyframes;
var createGlobalStyle = _a.createGlobalStyle;
var withTheme2 = _a.withTheme;
var ThemeProvider3 = _a.ThemeProvider;
var ThemeConsumer = _a.ThemeConsumer;
var RcUseTheme = function() {
  return useTheme6();
};
var styled_components_default = styled3;

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
import { createContext as createContext3, useContext as useContext5 } from "react";
var RcPortalWindowContext = createContext3({
  document
});
var useRcPortalWindowContext = function() {
  return useContext5(RcPortalWindowContext);
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
  useCallback as useCallback7,
  useEffect as useEffect9,
  useRef as useRef9,
  useState as useState7
} from "react";
function useControlled(_ref) {
  var controlled = _ref.controlled, defaultProp = _ref.default, name = _ref.name, _ref$state = _ref.state, state = _ref$state === void 0 ? "value" : _ref$state;
  var _React$useRef = useRef9(controlled !== void 0), isControlled = _React$useRef.current;
  var _React$useState = useState7(defaultProp), valueState = _React$useState[0], setValue = _React$useState[1];
  var value = isControlled ? controlled : valueState;
  if (true) {
    useEffect9(function() {
      if (isControlled !== (controlled !== void 0)) {
        console.error(["Material-UI: A component is changing the ".concat(isControlled ? "" : "un", "controlled ").concat(state, " state of ").concat(name, " to be ").concat(isControlled ? "un" : "", "controlled."), "Elements should not switch from uncontrolled to controlled (or vice versa).", "Decide between using a controlled or uncontrolled ".concat(name, " ") + "element for the lifetime of the component.", "The nature of the state is determined during the first render, it's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join("\n"));
      }
    }, [controlled]);
    var _React$useRef2 = useRef9(defaultProp), defaultValue = _React$useRef2.current;
    useEffect9(function() {
      if (!isControlled && defaultValue !== defaultProp) {
        console.error(["Material-UI: A component is changing the default ".concat(state, " state of an uncontrolled ").concat(name, " after being initialized. ") + "To suppress this warning opt to use a controlled ".concat(name, ".")].join("\n"));
      }
    }, [JSON.stringify(defaultProp)]);
  }
  var setValueIfUncontrolled = useCallback7(function(newValue) {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}

// node_modules/@material-ui/core/esm/utils/unstable_useId.js
import {
  useEffect as useEffect10,
  useState as useState8
} from "react";
function useId(idOverride) {
  var _React$useState = useState8(idOverride), defaultId = _React$useState[0], setDefaultId = _React$useState[1];
  var id = idOverride || defaultId;
  useEffect10(function() {
    if (defaultId == null) {
      setDefaultId("mui-".concat(Math.round(Math.random() * 1e5)));
    }
  }, [defaultId]);
  return id;
}

// node_modules/@ringcentral/juno/es6/foundation/hooks/useEventCallback/useEventCallback.js
var useEventCallback3 = function(func) {
  return useEventCallback2(func);
};

// node_modules/@ringcentral/juno/es6/foundation/hooks/useChange/useChange.js
import { useRef as useRef11 } from "react";

// node_modules/@ringcentral/juno/es6/foundation/hooks/usePrevious/usePrevious.js
import { useEffect as useEffect11, useRef as useRef10 } from "react";
function usePrevious(cb, isDefault) {
  var ref = useRef10(isDefault ? cb() : void 0);
  useEffect11(function() {
    ref.current = cb();
  });
  return ref.current;
}

// node_modules/@ringcentral/juno/es6/foundation/hooks/useChange/useChange.js
var useChange = function(cb, listenCb) {
  var countRef = useRef11(0);
  var valueRef = useRef11();
  var prev2 = usePrevious(listenCb);
  var curr = listenCb();
  if (countRef.current === 0 || prev2 !== curr) {
    countRef.current = 1;
    valueRef.current = cb(prev2, curr);
  }
  return valueRef.current;
};

// node_modules/@ringcentral/juno/es6/foundation/hooks/useEventListener/useEventListener.js
import { useEffect as useEffect12, useRef as useRef12 } from "react";

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
  var listener = useEventCallback3(cb);
  var cancelRef = useRef12(function() {
  });
  var bindRef = useRef12(function() {
  });
  var currentRefElm = isRef(target) && target.current;
  useEffect12(function() {
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
import { useState as useState9 } from "react";
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
  var _a2 = __read2(useState9(Object.create(null)), 2), dispatch = _a2[1];
  var memoizedDispatch = useEventCallback3(function() {
    dispatch(Object.create(null));
  });
  return memoizedDispatch;
}

// node_modules/@material-ui/core/esm/transitions/utils.js
var reflow = function reflow2(node2) {
  return node2.scrollTop;
};
function getTransitionProps(props, options) {
  var timeout2 = props.timeout, _props$style = props.style, style3 = _props$style === void 0 ? {} : _props$style;
  return {
    duration: style3.transitionDuration || typeof timeout2 === "number" ? timeout2 : timeout2[options.mode] || 0,
    delay: style3.transitionDelay
  };
}

// node_modules/@material-ui/core/esm/IconButton/IconButton.js
var import_prop_types21 = __toModule(require_prop_types());
import {
  Children as Children2,
  createElement as createElement8,
  forwardRef as forwardRef8,
  isValidElement as isValidElement2
} from "react";
var import_utils30 = __toModule(require_utils());
var styles6 = function styles7(theme) {
  return {
    root: {
      textAlign: "center",
      flex: "0 0 auto",
      fontSize: theme.typography.pxToRem(24),
      padding: 12,
      borderRadius: "50%",
      overflow: "visible",
      color: theme.palette.action.active,
      transition: theme.transitions.create("background-color", {
        duration: theme.transitions.duration.shortest
      }),
      "&:hover": {
        backgroundColor: alpha2(theme.palette.action.active, theme.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      },
      "&$disabled": {
        backgroundColor: "transparent",
        color: theme.palette.action.disabled
      }
    },
    edgeStart: {
      marginLeft: -12,
      "$sizeSmall&": {
        marginLeft: -3
      }
    },
    edgeEnd: {
      marginRight: -12,
      "$sizeSmall&": {
        marginRight: -3
      }
    },
    colorInherit: {
      color: "inherit"
    },
    colorPrimary: {
      color: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: alpha2(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    },
    colorSecondary: {
      color: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: alpha2(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    },
    disabled: {},
    sizeSmall: {
      padding: 3,
      fontSize: theme.typography.pxToRem(18)
    },
    label: {
      width: "100%",
      display: "flex",
      alignItems: "inherit",
      justifyContent: "inherit"
    }
  };
};
var IconButton = /* @__PURE__ */ forwardRef8(function IconButton2(props, ref) {
  var _props$edge = props.edge, edge = _props$edge === void 0 ? false : _props$edge, children = props.children, classes = props.classes, className = props.className, _props$color = props.color, color2 = _props$color === void 0 ? "default" : _props$color, _props$disabled = props.disabled, disabled3 = _props$disabled === void 0 ? false : _props$disabled, _props$disableFocusRi = props.disableFocusRipple, disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi, _props$size = props.size, size = _props$size === void 0 ? "medium" : _props$size, other = _objectWithoutProperties(props, ["edge", "children", "classes", "className", "color", "disabled", "disableFocusRipple", "size"]);
  return /* @__PURE__ */ createElement8(ButtonBase_default2, _extends({
    className: clsx_m_default(classes.root, className, color2 !== "default" && classes["color".concat(capitalize2(color2))], disabled3 && classes.disabled, size === "small" && classes["size".concat(capitalize2(size))], {
      "start": classes.edgeStart,
      "end": classes.edgeEnd
    }[edge]),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled: disabled3,
    ref
  }, other), /* @__PURE__ */ createElement8("span", {
    className: classes.label
  }, children));
});
true ? IconButton.propTypes = {
  children: (0, import_utils30.chainPropTypes)(import_prop_types21.default.node, function(props) {
    var found = Children2.toArray(props.children).some(function(child) {
      return /* @__PURE__ */ isValidElement2(child) && child.props.onClick;
    });
    if (found) {
      return new Error(["Material-UI: You are providing an onClick event listener to a child of a button element.", "Firefox will never trigger the event.", "You should move the onClick listener to the parent button element.", "https://github.com/mui-org/material-ui/issues/13957"].join("\n"));
    }
    return null;
  }),
  classes: import_prop_types21.default.object.isRequired,
  className: import_prop_types21.default.string,
  color: import_prop_types21.default.oneOf(["default", "inherit", "primary", "secondary"]),
  disabled: import_prop_types21.default.bool,
  disableFocusRipple: import_prop_types21.default.bool,
  disableRipple: import_prop_types21.default.bool,
  edge: import_prop_types21.default.oneOf(["start", "end", false]),
  size: import_prop_types21.default.oneOf(["small", "medium"])
} : void 0;
var IconButton_default = withStyles_default2(styles6, {
  name: "MuiIconButton"
})(IconButton);

// node_modules/@material-ui/core/esm/Typography/Typography.js
var import_prop_types22 = __toModule(require_prop_types());
import {
  createElement as createElement9,
  forwardRef as forwardRef9
} from "react";
var styles8 = function styles9(theme) {
  return {
    root: {
      margin: 0
    },
    body2: theme.typography.body2,
    body1: theme.typography.body1,
    caption: theme.typography.caption,
    button: theme.typography.button,
    h1: theme.typography.h1,
    h2: theme.typography.h2,
    h3: theme.typography.h3,
    h4: theme.typography.h4,
    h5: theme.typography.h5,
    h6: theme.typography.h6,
    subtitle1: theme.typography.subtitle1,
    subtitle2: theme.typography.subtitle2,
    overline: theme.typography.overline,
    srOnly: {
      position: "absolute",
      height: 1,
      width: 1,
      overflow: "hidden"
    },
    alignLeft: {
      textAlign: "left"
    },
    alignCenter: {
      textAlign: "center"
    },
    alignRight: {
      textAlign: "right"
    },
    alignJustify: {
      textAlign: "justify"
    },
    noWrap: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    },
    gutterBottom: {
      marginBottom: "0.35em"
    },
    paragraph: {
      marginBottom: 16
    },
    colorInherit: {
      color: "inherit"
    },
    colorPrimary: {
      color: theme.palette.primary.main
    },
    colorSecondary: {
      color: theme.palette.secondary.main
    },
    colorTextPrimary: {
      color: theme.palette.text.primary
    },
    colorTextSecondary: {
      color: theme.palette.text.secondary
    },
    colorError: {
      color: theme.palette.error.main
    },
    displayInline: {
      display: "inline"
    },
    displayBlock: {
      display: "block"
    }
  };
};
var defaultVariantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p"
};
var Typography = /* @__PURE__ */ forwardRef9(function Typography2(props, ref) {
  var _props$align = props.align, align = _props$align === void 0 ? "inherit" : _props$align, classes = props.classes, className = props.className, _props$color = props.color, color2 = _props$color === void 0 ? "initial" : _props$color, component = props.component, _props$display = props.display, display = _props$display === void 0 ? "initial" : _props$display, _props$gutterBottom = props.gutterBottom, gutterBottom = _props$gutterBottom === void 0 ? false : _props$gutterBottom, _props$noWrap = props.noWrap, noWrap = _props$noWrap === void 0 ? false : _props$noWrap, _props$paragraph = props.paragraph, paragraph = _props$paragraph === void 0 ? false : _props$paragraph, _props$variant = props.variant, variant = _props$variant === void 0 ? "body1" : _props$variant, _props$variantMapping = props.variantMapping, variantMapping = _props$variantMapping === void 0 ? defaultVariantMapping : _props$variantMapping, other = _objectWithoutProperties(props, ["align", "classes", "className", "color", "component", "display", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"]);
  var Component3 = component || (paragraph ? "p" : variantMapping[variant] || defaultVariantMapping[variant]) || "span";
  return /* @__PURE__ */ createElement9(Component3, _extends({
    className: clsx_m_default(classes.root, className, variant !== "inherit" && classes[variant], color2 !== "initial" && classes["color".concat(capitalize2(color2))], noWrap && classes.noWrap, gutterBottom && classes.gutterBottom, paragraph && classes.paragraph, align !== "inherit" && classes["align".concat(capitalize2(align))], display !== "initial" && classes["display".concat(capitalize2(display))]),
    ref
  }, other));
});
true ? Typography.propTypes = {
  align: import_prop_types22.default.oneOf(["inherit", "left", "center", "right", "justify"]),
  children: import_prop_types22.default.node,
  classes: import_prop_types22.default.object.isRequired,
  className: import_prop_types22.default.string,
  color: import_prop_types22.default.oneOf(["initial", "inherit", "primary", "secondary", "textPrimary", "textSecondary", "error"]),
  component: import_prop_types22.default.elementType,
  display: import_prop_types22.default.oneOf(["initial", "block", "inline"]),
  gutterBottom: import_prop_types22.default.bool,
  noWrap: import_prop_types22.default.bool,
  paragraph: import_prop_types22.default.bool,
  variant: import_prop_types22.default.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "caption", "button", "overline", "srOnly", "inherit"]),
  variantMapping: import_prop_types22.default.object
} : void 0;
var Typography_default = withStyles_default2(styles8, {
  name: "MuiTypography"
})(Typography);

// node_modules/@material-ui/core/esm/internal/SwitchBase.js
var import_prop_types23 = __toModule(require_prop_types());
import {
  createElement as createElement10,
  forwardRef as forwardRef10
} from "react";
var import_utils31 = __toModule(require_utils());

// node_modules/@material-ui/core/esm/FormControl/useFormControl.js
import {
  useContext as useContext7
} from "react";

// node_modules/@material-ui/core/esm/FormControl/FormControlContext.js
import {
  createContext as createContext4,
  useContext as useContext6
} from "react";
var FormControlContext = createContext4();
if (true) {
  FormControlContext.displayName = "FormControlContext";
}
var FormControlContext_default = FormControlContext;

// node_modules/@material-ui/core/esm/FormControl/useFormControl.js
function useFormControl() {
  return useContext7(FormControlContext_default);
}

// node_modules/@material-ui/core/esm/internal/SwitchBase.js
var styles10 = {
  root: {
    padding: 9
  },
  checked: {},
  disabled: {},
  input: {
    cursor: "inherit",
    position: "absolute",
    opacity: 0,
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1
  }
};
var SwitchBase = /* @__PURE__ */ forwardRef10(function SwitchBase2(props, ref) {
  var autoFocus = props.autoFocus, checkedProp = props.checked, checkedIcon = props.checkedIcon, classes = props.classes, className = props.className, defaultChecked = props.defaultChecked, disabledProp = props.disabled, icon = props.icon, id = props.id, inputProps = props.inputProps, inputRef = props.inputRef, name = props.name, onBlur = props.onBlur, onChange = props.onChange, onFocus = props.onFocus, readOnly = props.readOnly, required = props.required, tabIndex = props.tabIndex, type3 = props.type, value = props.value, other = _objectWithoutProperties(props, ["autoFocus", "checked", "checkedIcon", "classes", "className", "defaultChecked", "disabled", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"]);
  var _useControlled = useControlled({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: "SwitchBase",
    state: "checked"
  }), _useControlled2 = _slicedToArray(_useControlled, 2), checked = _useControlled2[0], setCheckedState = _useControlled2[1];
  var muiFormControl = useFormControl();
  var handleFocus = function handleFocus2(event) {
    if (onFocus) {
      onFocus(event);
    }
    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    }
  };
  var handleBlur = function handleBlur2(event) {
    if (onBlur) {
      onBlur(event);
    }
    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    }
  };
  var handleInputChange = function handleInputChange2(event) {
    var newChecked = event.target.checked;
    setCheckedState(newChecked);
    if (onChange) {
      onChange(event, newChecked);
    }
  };
  var disabled3 = disabledProp;
  if (muiFormControl) {
    if (typeof disabled3 === "undefined") {
      disabled3 = muiFormControl.disabled;
    }
  }
  var hasLabelFor = type3 === "checkbox" || type3 === "radio";
  return /* @__PURE__ */ createElement10(IconButton_default, _extends({
    component: "span",
    className: clsx_m_default(classes.root, className, checked && classes.checked, disabled3 && classes.disabled),
    disabled: disabled3,
    tabIndex: null,
    role: void 0,
    onFocus: handleFocus,
    onBlur: handleBlur,
    ref
  }, other), /* @__PURE__ */ createElement10("input", _extends({
    autoFocus,
    checked: checkedProp,
    defaultChecked,
    className: classes.input,
    disabled: disabled3,
    id: hasLabelFor && id,
    name,
    onChange: handleInputChange,
    readOnly,
    ref: inputRef,
    required,
    tabIndex,
    type: type3,
    value
  }, inputProps)), checked ? checkedIcon : icon);
});
true ? SwitchBase.propTypes = {
  autoFocus: import_prop_types23.default.bool,
  checked: import_prop_types23.default.bool,
  checkedIcon: import_prop_types23.default.node.isRequired,
  classes: import_prop_types23.default.object.isRequired,
  className: import_prop_types23.default.string,
  defaultChecked: import_prop_types23.default.bool,
  disabled: import_prop_types23.default.bool,
  icon: import_prop_types23.default.node.isRequired,
  id: import_prop_types23.default.string,
  inputProps: import_prop_types23.default.object,
  inputRef: import_utils31.refType,
  name: import_prop_types23.default.string,
  onBlur: import_prop_types23.default.func,
  onChange: import_prop_types23.default.func,
  onFocus: import_prop_types23.default.func,
  readOnly: import_prop_types23.default.bool,
  required: import_prop_types23.default.bool,
  tabIndex: import_prop_types23.default.oneOfType([import_prop_types23.default.number, import_prop_types23.default.string]),
  type: import_prop_types23.default.string.isRequired,
  value: import_prop_types23.default.any
} : void 0;
var SwitchBase_default = withStyles_default2(styles10, {
  name: "PrivateSwitchBase"
})(SwitchBase);

// node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js
var import_prop_types24 = __toModule(require_prop_types());
import {
  createElement as createElement11,
  forwardRef as forwardRef11
} from "react";
var import_utils32 = __toModule(require_utils());
var SIZE = 44;
var styles11 = function styles12(theme) {
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
var CircularProgress = /* @__PURE__ */ forwardRef11(function CircularProgress2(props, ref) {
  var classes = props.classes, className = props.className, _props$color = props.color, color2 = _props$color === void 0 ? "primary" : _props$color, _props$disableShrink = props.disableShrink, disableShrink = _props$disableShrink === void 0 ? false : _props$disableShrink, _props$size = props.size, size = _props$size === void 0 ? 40 : _props$size, style3 = props.style, _props$thickness = props.thickness, thickness = _props$thickness === void 0 ? 3.6 : _props$thickness, _props$value = props.value, value = _props$value === void 0 ? 0 : _props$value, _props$variant = props.variant, variant = _props$variant === void 0 ? "indeterminate" : _props$variant, other = _objectWithoutProperties(props, ["classes", "className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"]);
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
  return /* @__PURE__ */ createElement11("div", _extends({
    className: clsx_m_default(classes.root, className, color2 !== "inherit" && classes["color".concat(capitalize2(color2))], {
      "determinate": classes.determinate,
      "indeterminate": classes.indeterminate,
      "static": classes.static
    }[variant]),
    style: _extends({
      width: size,
      height: size
    }, rootStyle, style3),
    ref,
    role: "progressbar"
  }, rootProps, other), /* @__PURE__ */ createElement11("svg", {
    className: classes.svg,
    viewBox: "".concat(SIZE / 2, " ").concat(SIZE / 2, " ").concat(SIZE, " ").concat(SIZE)
  }, /* @__PURE__ */ createElement11("circle", {
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
  classes: import_prop_types24.default.object,
  className: import_prop_types24.default.string,
  color: import_prop_types24.default.oneOf(["inherit", "primary", "secondary"]),
  disableShrink: (0, import_utils32.chainPropTypes)(import_prop_types24.default.bool, function(props) {
    if (props.disableShrink && props.variant && props.variant !== "indeterminate") {
      return new Error("Material-UI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.");
    }
    return null;
  }),
  size: import_prop_types24.default.oneOfType([import_prop_types24.default.number, import_prop_types24.default.string]),
  style: import_prop_types24.default.object,
  thickness: import_prop_types24.default.number,
  value: import_prop_types24.default.number,
  variant: (0, import_utils32.chainPropTypes)(import_prop_types24.default.oneOf(["determinate", "indeterminate", "static"]), function(props) {
    var variant = props.variant;
    if (variant === "static") {
      throw new Error('Material-UI: `variant="static"` was deprecated. Use `variant="determinate"` instead.');
    }
    return null;
  })
} : void 0;
var CircularProgress_default = withStyles_default2(styles11, {
  name: "MuiCircularProgress",
  flip: false
})(CircularProgress);

// node_modules/@material-ui/core/esm/Portal/Portal.js
var import_prop_types25 = __toModule(require_prop_types());
var import_utils33 = __toModule(require_utils());
import {
  Component,
  cloneElement as cloneElement2,
  forwardRef as forwardRef12,
  isValidElement as isValidElement3,
  useEffect as useEffect13,
  useLayoutEffect as useLayoutEffect5,
  useState as useState10
} from "react";
import {
  createPortal,
  findDOMNode as findDOMNode3
} from "react-dom";
function getContainer(container) {
  container = typeof container === "function" ? container() : container;
  return findDOMNode3(container);
}
var useEnhancedEffect4 = typeof window !== "undefined" ? useLayoutEffect5 : useEffect13;
var Portal = /* @__PURE__ */ forwardRef12(function Portal2(props, ref) {
  var children = props.children, container = props.container, _props$disablePortal = props.disablePortal, disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal, onRendered = props.onRendered;
  var _React$useState = useState10(null), mountNode = _React$useState[0], setMountNode = _React$useState[1];
  var handleRef = useForkRef2(/* @__PURE__ */ isValidElement3(children) ? children.ref : null, ref);
  useEnhancedEffect4(function() {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect4(function() {
    if (mountNode && !disablePortal) {
      setRef2(ref, mountNode);
      return function() {
        setRef2(ref, null);
      };
    }
    return void 0;
  }, [ref, mountNode, disablePortal]);
  useEnhancedEffect4(function() {
    if (onRendered && (mountNode || disablePortal)) {
      onRendered();
    }
  }, [onRendered, mountNode, disablePortal]);
  if (disablePortal) {
    if (/* @__PURE__ */ isValidElement3(children)) {
      return /* @__PURE__ */ cloneElement2(children, {
        ref: handleRef
      });
    }
    return children;
  }
  return mountNode ? /* @__PURE__ */ createPortal(children, mountNode) : mountNode;
});
true ? Portal.propTypes = {
  children: import_prop_types25.default.node,
  container: import_prop_types25.default.oneOfType([import_utils33.HTMLElementType, import_prop_types25.default.instanceOf(Component), import_prop_types25.default.func]),
  disablePortal: import_prop_types25.default.bool,
  onRendered: deprecatedPropType(import_prop_types25.default.func, "Use the ref instead.")
} : void 0;
if (true) {
  Portal["propTypes"] = (0, import_utils33.exactProp)(Portal.propTypes);
}
var Portal_default = Portal;

// node_modules/@material-ui/core/esm/FormControlLabel/FormControlLabel.js
var import_prop_types26 = __toModule(require_prop_types());
import {
  cloneElement as cloneElement3,
  createElement as createElement12,
  forwardRef as forwardRef13
} from "react";
var import_utils34 = __toModule(require_utils());
var styles13 = function styles14(theme) {
  return {
    root: {
      display: "inline-flex",
      alignItems: "center",
      cursor: "pointer",
      verticalAlign: "middle",
      WebkitTapHighlightColor: "transparent",
      marginLeft: -11,
      marginRight: 16,
      "&$disabled": {
        cursor: "default"
      }
    },
    labelPlacementStart: {
      flexDirection: "row-reverse",
      marginLeft: 16,
      marginRight: -11
    },
    labelPlacementTop: {
      flexDirection: "column-reverse",
      marginLeft: 16
    },
    labelPlacementBottom: {
      flexDirection: "column",
      marginLeft: 16
    },
    disabled: {},
    label: {
      "&$disabled": {
        color: theme.palette.text.disabled
      }
    }
  };
};
var FormControlLabel = /* @__PURE__ */ forwardRef13(function FormControlLabel2(props, ref) {
  var checked = props.checked, classes = props.classes, className = props.className, control = props.control, disabledProp = props.disabled, inputRef = props.inputRef, label3 = props.label, _props$labelPlacement = props.labelPlacement, labelPlacement = _props$labelPlacement === void 0 ? "end" : _props$labelPlacement, name = props.name, onChange = props.onChange, value = props.value, other = _objectWithoutProperties(props, ["checked", "classes", "className", "control", "disabled", "inputRef", "label", "labelPlacement", "name", "onChange", "value"]);
  var muiFormControl = useFormControl();
  var disabled3 = disabledProp;
  if (typeof disabled3 === "undefined" && typeof control.props.disabled !== "undefined") {
    disabled3 = control.props.disabled;
  }
  if (typeof disabled3 === "undefined" && muiFormControl) {
    disabled3 = muiFormControl.disabled;
  }
  var controlProps = {
    disabled: disabled3
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach(function(key) {
    if (typeof control.props[key] === "undefined" && typeof props[key] !== "undefined") {
      controlProps[key] = props[key];
    }
  });
  return /* @__PURE__ */ createElement12("label", _extends({
    className: clsx_m_default(classes.root, className, labelPlacement !== "end" && classes["labelPlacement".concat(capitalize2(labelPlacement))], disabled3 && classes.disabled),
    ref
  }, other), /* @__PURE__ */ cloneElement3(control, controlProps), /* @__PURE__ */ createElement12(Typography_default, {
    component: "span",
    className: clsx_m_default(classes.label, disabled3 && classes.disabled)
  }, label3));
});
true ? FormControlLabel.propTypes = {
  checked: import_prop_types26.default.bool,
  classes: import_prop_types26.default.object,
  className: import_prop_types26.default.string,
  control: import_prop_types26.default.element.isRequired,
  disabled: import_prop_types26.default.bool,
  inputRef: import_utils34.refType,
  label: import_prop_types26.default.node,
  labelPlacement: import_prop_types26.default.oneOf(["bottom", "end", "start", "top"]),
  name: import_prop_types26.default.string,
  onChange: import_prop_types26.default.func,
  value: import_prop_types26.default.any
} : void 0;
var FormControlLabel_default = withStyles_default2(styles13, {
  name: "MuiFormControlLabel"
})(FormControlLabel);

// node_modules/@material-ui/core/esm/Grow/Grow.js
var import_prop_types27 = __toModule(require_prop_types());
import {
  cloneElement as cloneElement4,
  createElement as createElement13,
  forwardRef as forwardRef14,
  useEffect as useEffect14,
  useRef as useRef13
} from "react";
function getScale(value) {
  return "scale(".concat(value, ", ").concat(Math.pow(value, 2), ")");
}
var styles15 = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
};
var Grow = /* @__PURE__ */ forwardRef14(function Grow2(props, ref) {
  var children = props.children, _props$disableStrictM = props.disableStrictModeCompat, disableStrictModeCompat = _props$disableStrictM === void 0 ? false : _props$disableStrictM, inProp = props.in, onEnter = props.onEnter, onEntered = props.onEntered, onEntering = props.onEntering, onExit = props.onExit, onExited = props.onExited, onExiting = props.onExiting, style3 = props.style, _props$timeout = props.timeout, timeout2 = _props$timeout === void 0 ? "auto" : _props$timeout, _props$TransitionComp = props.TransitionComponent, TransitionComponent = _props$TransitionComp === void 0 ? Transition_default : _props$TransitionComp, other = _objectWithoutProperties(props, ["children", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"]);
  var timer = useRef13();
  var autoTimeout = useRef13();
  var theme = useTheme6();
  var enableStrictModeCompat = theme.unstable_strictMode && !disableStrictModeCompat;
  var nodeRef = useRef13(null);
  var foreignRef = useForkRef2(children.ref, ref);
  var handleRef = useForkRef2(enableStrictModeCompat ? nodeRef : void 0, foreignRef);
  var normalizedTransitionCallback = function normalizedTransitionCallback2(callback) {
    return function(nodeOrAppearing, maybeAppearing) {
      if (callback) {
        var _ref = enableStrictModeCompat ? [nodeRef.current, nodeOrAppearing] : [nodeOrAppearing, maybeAppearing], _ref2 = _slicedToArray(_ref, 2), node2 = _ref2[0], isAppearing = _ref2[1];
        if (isAppearing === void 0) {
          callback(node2);
        } else {
          callback(node2, isAppearing);
        }
      }
    };
  };
  var handleEntering = normalizedTransitionCallback(onEntering);
  var handleEnter = normalizedTransitionCallback(function(node2, isAppearing) {
    reflow(node2);
    var _getTransitionProps = getTransitionProps({
      style: style3,
      timeout: timeout2
    }, {
      mode: "enter"
    }), transitionDuration = _getTransitionProps.duration, delay = _getTransitionProps.delay;
    var duration4;
    if (timeout2 === "auto") {
      duration4 = theme.transitions.getAutoHeightDuration(node2.clientHeight);
      autoTimeout.current = duration4;
    } else {
      duration4 = transitionDuration;
    }
    node2.style.transition = [theme.transitions.create("opacity", {
      duration: duration4,
      delay
    }), theme.transitions.create("transform", {
      duration: duration4 * 0.666,
      delay
    })].join(",");
    if (onEnter) {
      onEnter(node2, isAppearing);
    }
  });
  var handleEntered = normalizedTransitionCallback(onEntered);
  var handleExiting = normalizedTransitionCallback(onExiting);
  var handleExit = normalizedTransitionCallback(function(node2) {
    var _getTransitionProps2 = getTransitionProps({
      style: style3,
      timeout: timeout2
    }, {
      mode: "exit"
    }), transitionDuration = _getTransitionProps2.duration, delay = _getTransitionProps2.delay;
    var duration4;
    if (timeout2 === "auto") {
      duration4 = theme.transitions.getAutoHeightDuration(node2.clientHeight);
      autoTimeout.current = duration4;
    } else {
      duration4 = transitionDuration;
    }
    node2.style.transition = [theme.transitions.create("opacity", {
      duration: duration4,
      delay
    }), theme.transitions.create("transform", {
      duration: duration4 * 0.666,
      delay: delay || duration4 * 0.333
    })].join(",");
    node2.style.opacity = "0";
    node2.style.transform = getScale(0.75);
    if (onExit) {
      onExit(node2);
    }
  });
  var handleExited = normalizedTransitionCallback(onExited);
  var addEndListener = function addEndListener2(nodeOrNext, maybeNext) {
    var next2 = enableStrictModeCompat ? nodeOrNext : maybeNext;
    if (timeout2 === "auto") {
      timer.current = setTimeout(next2, autoTimeout.current || 0);
    }
  };
  useEffect14(function() {
    return function() {
      clearTimeout(timer.current);
    };
  }, []);
  return /* @__PURE__ */ createElement13(TransitionComponent, _extends({
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
    return /* @__PURE__ */ cloneElement4(children, _extends({
      style: _extends({
        opacity: 0,
        transform: getScale(0.75),
        visibility: state === "exited" && !inProp ? "hidden" : void 0
      }, styles15[state], style3, children.props.style),
      ref: handleRef
    }, childProps));
  });
});
true ? Grow.propTypes = {
  children: import_prop_types27.default.element,
  disableStrictModeCompat: import_prop_types27.default.bool,
  in: import_prop_types27.default.bool,
  onEnter: import_prop_types27.default.func,
  onEntered: import_prop_types27.default.func,
  onEntering: import_prop_types27.default.func,
  onExit: import_prop_types27.default.func,
  onExited: import_prop_types27.default.func,
  onExiting: import_prop_types27.default.func,
  style: import_prop_types27.default.object,
  timeout: import_prop_types27.default.oneOfType([import_prop_types27.default.oneOf(["auto"]), import_prop_types27.default.number, import_prop_types27.default.shape({
    appear: import_prop_types27.default.number,
    enter: import_prop_types27.default.number,
    exit: import_prop_types27.default.number
  })])
} : void 0;
Grow.muiSupportAuto = true;
var Grow_default = Grow;

// node_modules/@material-ui/core/esm/Popper/Popper.js
var import_prop_types28 = __toModule(require_prop_types());
import {
  Component as Component2,
  createElement as createElement14,
  forwardRef as forwardRef15,
  useCallback as useCallback8,
  useEffect as useEffect15,
  useImperativeHandle as useImperativeHandle5,
  useLayoutEffect as useLayoutEffect6,
  useRef as useRef14,
  useState as useState11
} from "react";

// node_modules/popper.js/dist/esm/popper.js
var isBrowser4 = typeof window !== "undefined" && typeof document !== "undefined" && typeof navigator !== "undefined";
var timeoutDuration = function() {
  var longerTimeoutBrowsers = ["Edge", "Trident", "Firefox"];
  for (var i2 = 0; i2 < longerTimeoutBrowsers.length; i2 += 1) {
    if (isBrowser4 && navigator.userAgent.indexOf(longerTimeoutBrowsers[i2]) >= 0) {
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
var supportsMicroTasks = isBrowser4 && window.Promise;
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
  var css4 = window2.getComputedStyle(element, null);
  return property ? css4[property] : css4;
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
  var _getStyleComputedProp = getStyleComputedProperty(element), overflow2 = _getStyleComputedProp.overflow, overflowX = _getStyleComputedProp.overflowX, overflowY = _getStyleComputedProp.overflowY;
  if (/(auto|scroll|overlay)/.test(overflow2 + overflowY + overflowX)) {
    return element;
  }
  return getScrollParent(getParentNode(element));
}
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}
var isIE11 = isBrowser4 && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser4 && /MSIE 10/.test(navigator.userAgent);
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
function getRoot(node2) {
  if (node2.parentNode !== null) {
    return getRoot(node2.parentNode);
  }
  return node2;
}
function findCommonOffsetParent(element1, element2) {
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }
  var order2 = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order2 ? element1 : element2;
  var end = order2 ? element2 : element1;
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
function getBordersSize(styles20, axis) {
  var sideA = axis === "x" ? "Left" : "Top";
  var sideB = sideA === "Left" ? "Right" : "Bottom";
  return parseFloat(styles20["border" + sideA + "Width"]) + parseFloat(styles20["border" + sideB + "Width"]);
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
  var width2 = sizes.width || element.clientWidth || result.width;
  var height2 = sizes.height || element.clientHeight || result.height;
  var horizScrollbar = element.offsetWidth - width2;
  var vertScrollbar = element.offsetHeight - height2;
  if (horizScrollbar || vertScrollbar) {
    var styles20 = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles20, "x");
    vertScrollbar -= getBordersSize(styles20, "y");
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
  var styles20 = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles20.borderTopWidth);
  var borderLeftWidth = parseFloat(styles20.borderLeftWidth);
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
    var marginTop = parseFloat(styles20.marginTop);
    var marginLeft = parseFloat(styles20.marginLeft);
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
  var width2 = Math.max(html.clientWidth, window.innerWidth || 0);
  var height2 = Math.max(html.clientHeight, window.innerHeight || 0);
  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, "left") : 0;
  var offset2 = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width2,
    height: height2
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
function getBoundaries(popper, reference, padding2, boundariesElement) {
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
      var _getWindowSizes = getWindowSizes(popper.ownerDocument), height2 = _getWindowSizes.height, width2 = _getWindowSizes.width;
      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height2 + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width2 + offsets.left;
    } else {
      boundaries = offsets;
    }
  }
  padding2 = padding2 || 0;
  var isPaddingNumber = typeof padding2 === "number";
  boundaries.left += isPaddingNumber ? padding2 : padding2.left || 0;
  boundaries.top += isPaddingNumber ? padding2 : padding2.top || 0;
  boundaries.right -= isPaddingNumber ? padding2 : padding2.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding2 : padding2.bottom || 0;
  return boundaries;
}
function getArea(_ref) {
  var width2 = _ref.width, height2 = _ref.height;
  return width2 * height2;
}
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding2 = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
  if (placement.indexOf("auto") === -1) {
    return placement;
  }
  var boundaries = getBoundaries(popper, reference, padding2, boundariesElement);
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
    var width2 = _ref2.width, height2 = _ref2.height;
    return width2 >= popper.clientWidth && height2 >= popper.clientHeight;
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
  var styles20 = window2.getComputedStyle(element);
  var x2 = parseFloat(styles20.marginTop || 0) + parseFloat(styles20.marginBottom || 0);
  var y2 = parseFloat(styles20.marginLeft || 0) + parseFloat(styles20.marginRight || 0);
  var result = {
    width: element.offsetWidth + y2,
    height: element.offsetHeight + x2
  };
  return result;
}
function getOppositePlacement(placement) {
  var hash2 = { left: "right", right: "left", bottom: "top", top: "bottom" };
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash2[matched];
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
  var match2 = find(arr, function(obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match2);
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
    var prefix3 = prefixes[i2];
    var toCheck = prefix3 ? "" + prefix3 + upperProp : property;
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
function setStyles(element, styles20) {
  Object.keys(styles20).forEach(function(prop) {
    var unit = "";
    if (["width", "height", "top", "right", "bottom", "left"].indexOf(prop) !== -1 && isNumeric(styles20[prop])) {
      unit = "px";
    }
    element.style[prop] = styles20[prop] + unit;
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
  var round5 = Math.round, floor = Math.floor;
  var noRound = function noRound2(v2) {
    return v2;
  };
  var referenceWidth = round5(reference.width);
  var popperWidth = round5(popper.width);
  var isVertical = ["left", "right"].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf("-") !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round5 : floor;
  var verticalToInteger = !shouldRound ? noRound : round5;
  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}
var isFirefox = isBrowser4 && /Firefox/i.test(navigator.userAgent);
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
  var styles20 = {
    position: popper.position
  };
  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
  var sideA = x2 === "bottom" ? "top" : "bottom";
  var sideB = y2 === "right" ? "left" : "right";
  var prefixedProperty = getSupportedPropertyName("transform");
  var left2 = void 0, top2 = void 0;
  if (sideA === "bottom") {
    if (offsetParent.nodeName === "HTML") {
      top2 = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top2 = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top2 = offsets.top;
  }
  if (sideB === "right") {
    if (offsetParent.nodeName === "HTML") {
      left2 = -offsetParent.clientWidth + offsets.right;
    } else {
      left2 = -offsetParentRect.width + offsets.right;
    }
  } else {
    left2 = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles20[prefixedProperty] = "translate3d(" + left2 + "px, " + top2 + "px, 0)";
    styles20[sideA] = 0;
    styles20[sideB] = 0;
    styles20.willChange = "transform";
  } else {
    var invertTop = sideA === "bottom" ? -1 : 1;
    var invertLeft = sideB === "right" ? -1 : 1;
    styles20[sideA] = top2 * invertTop;
    styles20[sideB] = left2 * invertLeft;
    styles20.willChange = sideA + ", " + sideB;
  }
  var attributes = {
    "x-placement": data.placement
  };
  data.attributes = _extends2({}, attributes, data.attributes);
  data.styles = _extends2({}, styles20, data.styles);
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
  var css4 = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css4["margin" + sideCapitalized]);
  var popperBorderSide = parseFloat(css4["border" + sideCapitalized + "Width"]);
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
  var top2 = popperStyles.top, left2 = popperStyles.left, transform3 = popperStyles[transformProp];
  popperStyles.top = "";
  popperStyles.left = "";
  popperStyles[transformProp] = "";
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);
  popperStyles.top = top2;
  popperStyles.left = left2;
  popperStyles[transformProp] = transform3;
  options.boundaries = boundaries;
  var order2 = options.priority;
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
  order2.forEach(function(placement) {
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
var import_utils36 = __toModule(require_utils());
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
var useEnhancedEffect5 = typeof window !== "undefined" ? useLayoutEffect6 : useEffect15;
var defaultPopperOptions = {};
var Popper2 = /* @__PURE__ */ forwardRef15(function Popper3(props, ref) {
  var anchorEl = props.anchorEl, children = props.children, container = props.container, _props$disablePortal = props.disablePortal, disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal, _props$keepMounted = props.keepMounted, keepMounted = _props$keepMounted === void 0 ? false : _props$keepMounted, modifiers2 = props.modifiers, open = props.open, _props$placement = props.placement, initialPlacement = _props$placement === void 0 ? "bottom" : _props$placement, _props$popperOptions = props.popperOptions, popperOptions = _props$popperOptions === void 0 ? defaultPopperOptions : _props$popperOptions, popperRefProp = props.popperRef, style3 = props.style, _props$transition = props.transition, transition2 = _props$transition === void 0 ? false : _props$transition, other = _objectWithoutProperties(props, ["anchorEl", "children", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition"]);
  var tooltipRef = useRef14(null);
  var ownRef = useForkRef2(tooltipRef, ref);
  var popperRef = useRef14(null);
  var handlePopperRef = useForkRef2(popperRef, popperRefProp);
  var handlePopperRefRef = useRef14(handlePopperRef);
  useEnhancedEffect5(function() {
    handlePopperRefRef.current = handlePopperRef;
  }, [handlePopperRef]);
  useImperativeHandle5(popperRefProp, function() {
    return popperRef.current;
  }, []);
  var _React$useState = useState11(true), exited = _React$useState[0], setExited = _React$useState[1];
  var theme = useTheme5();
  var rtlPlacement = flipPlacement(initialPlacement, theme);
  var _React$useState2 = useState11(rtlPlacement), placement = _React$useState2[0], setPlacement = _React$useState2[1];
  useEffect15(function() {
    if (popperRef.current) {
      popperRef.current.update();
    }
  });
  var handleOpen = useCallback8(function() {
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
  var handleRef = useCallback8(function(node2) {
    setRef2(ownRef, node2);
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
  useEffect15(function() {
    return function() {
      handleClose();
    };
  }, []);
  useEffect15(function() {
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
  return /* @__PURE__ */ createElement14(Portal_default, {
    disablePortal,
    container
  }, /* @__PURE__ */ createElement14("div", _extends({
    ref: handleRef,
    role: "tooltip"
  }, other, {
    style: _extends({
      position: "fixed",
      top: 0,
      left: 0,
      display: !open && keepMounted && !transition2 ? "none" : null
    }, style3)
  }), typeof children === "function" ? children(childProps) : children));
});
true ? Popper2.propTypes = {
  anchorEl: (0, import_utils36.chainPropTypes)(import_prop_types28.default.oneOfType([import_utils36.HTMLElementType, import_prop_types28.default.object, import_prop_types28.default.func]), function(props) {
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
  children: import_prop_types28.default.oneOfType([import_prop_types28.default.node, import_prop_types28.default.func]).isRequired,
  container: import_prop_types28.default.oneOfType([import_utils36.HTMLElementType, import_prop_types28.default.instanceOf(Component2), import_prop_types28.default.func]),
  disablePortal: import_prop_types28.default.bool,
  keepMounted: import_prop_types28.default.bool,
  modifiers: import_prop_types28.default.object,
  open: import_prop_types28.default.bool.isRequired,
  placement: import_prop_types28.default.oneOf(["bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  popperOptions: import_prop_types28.default.object,
  popperRef: import_utils36.refType,
  style: import_prop_types28.default.object,
  transition: import_prop_types28.default.bool
} : void 0;
var Popper_default = Popper2;

// node_modules/@material-ui/core/esm/Switch/Switch.js
var import_prop_types29 = __toModule(require_prop_types());
import {
  createElement as createElement15,
  forwardRef as forwardRef16
} from "react";
var import_utils37 = __toModule(require_utils());
var styles16 = function styles17(theme) {
  return {
    root: {
      display: "inline-flex",
      width: 34 + 12 * 2,
      height: 14 + 12 * 2,
      overflow: "hidden",
      padding: 12,
      boxSizing: "border-box",
      position: "relative",
      flexShrink: 0,
      zIndex: 0,
      verticalAlign: "middle",
      "@media print": {
        colorAdjust: "exact"
      }
    },
    edgeStart: {
      marginLeft: -8
    },
    edgeEnd: {
      marginRight: -8
    },
    switchBase: {
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1,
      color: theme.palette.type === "light" ? theme.palette.grey[50] : theme.palette.grey[400],
      transition: theme.transitions.create(["left", "transform"], {
        duration: theme.transitions.duration.shortest
      }),
      "&$checked": {
        transform: "translateX(20px)"
      },
      "&$disabled": {
        color: theme.palette.type === "light" ? theme.palette.grey[400] : theme.palette.grey[800]
      },
      "&$checked + $track": {
        opacity: 0.5
      },
      "&$disabled + $track": {
        opacity: theme.palette.type === "light" ? 0.12 : 0.1
      }
    },
    colorPrimary: {
      "&$checked": {
        color: theme.palette.primary.main,
        "&:hover": {
          backgroundColor: alpha2(theme.palette.primary.main, theme.palette.action.hoverOpacity),
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        }
      },
      "&$disabled": {
        color: theme.palette.type === "light" ? theme.palette.grey[400] : theme.palette.grey[800]
      },
      "&$checked + $track": {
        backgroundColor: theme.palette.primary.main
      },
      "&$disabled + $track": {
        backgroundColor: theme.palette.type === "light" ? theme.palette.common.black : theme.palette.common.white
      }
    },
    colorSecondary: {
      "&$checked": {
        color: theme.palette.secondary.main,
        "&:hover": {
          backgroundColor: alpha2(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        }
      },
      "&$disabled": {
        color: theme.palette.type === "light" ? theme.palette.grey[400] : theme.palette.grey[800]
      },
      "&$checked + $track": {
        backgroundColor: theme.palette.secondary.main
      },
      "&$disabled + $track": {
        backgroundColor: theme.palette.type === "light" ? theme.palette.common.black : theme.palette.common.white
      }
    },
    sizeSmall: {
      width: 40,
      height: 24,
      padding: 7,
      "& $thumb": {
        width: 16,
        height: 16
      },
      "& $switchBase": {
        padding: 4,
        "&$checked": {
          transform: "translateX(16px)"
        }
      }
    },
    checked: {},
    disabled: {},
    input: {
      left: "-100%",
      width: "300%"
    },
    thumb: {
      boxShadow: theme.shadows[1],
      backgroundColor: "currentColor",
      width: 20,
      height: 20,
      borderRadius: "50%"
    },
    track: {
      height: "100%",
      width: "100%",
      borderRadius: 14 / 2,
      zIndex: -1,
      transition: theme.transitions.create(["opacity", "background-color"], {
        duration: theme.transitions.duration.shortest
      }),
      backgroundColor: theme.palette.type === "light" ? theme.palette.common.black : theme.palette.common.white,
      opacity: theme.palette.type === "light" ? 0.38 : 0.3
    }
  };
};
var Switch = /* @__PURE__ */ forwardRef16(function Switch2(props, ref) {
  var classes = props.classes, className = props.className, _props$color = props.color, color2 = _props$color === void 0 ? "secondary" : _props$color, _props$edge = props.edge, edge = _props$edge === void 0 ? false : _props$edge, _props$size = props.size, size = _props$size === void 0 ? "medium" : _props$size, other = _objectWithoutProperties(props, ["classes", "className", "color", "edge", "size"]);
  var icon = /* @__PURE__ */ createElement15("span", {
    className: classes.thumb
  });
  return /* @__PURE__ */ createElement15("span", {
    className: clsx_m_default(classes.root, className, {
      "start": classes.edgeStart,
      "end": classes.edgeEnd
    }[edge], size === "small" && classes["size".concat(capitalize2(size))])
  }, /* @__PURE__ */ createElement15(SwitchBase_default, _extends({
    type: "checkbox",
    icon,
    checkedIcon: icon,
    classes: {
      root: clsx_m_default(classes.switchBase, classes["color".concat(capitalize2(color2))]),
      input: classes.input,
      checked: classes.checked,
      disabled: classes.disabled
    },
    ref
  }, other)), /* @__PURE__ */ createElement15("span", {
    className: classes.track
  }));
});
true ? Switch.propTypes = {
  checked: import_prop_types29.default.bool,
  checkedIcon: import_prop_types29.default.node,
  classes: import_prop_types29.default.object,
  className: import_prop_types29.default.string,
  color: import_prop_types29.default.oneOf(["default", "primary", "secondary"]),
  defaultChecked: import_prop_types29.default.bool,
  disabled: import_prop_types29.default.bool,
  disableRipple: import_prop_types29.default.bool,
  edge: import_prop_types29.default.oneOf(["end", "start", false]),
  icon: import_prop_types29.default.node,
  id: import_prop_types29.default.string,
  inputProps: import_prop_types29.default.object,
  inputRef: import_utils37.refType,
  onChange: import_prop_types29.default.func,
  required: import_prop_types29.default.bool,
  size: import_prop_types29.default.oneOf(["medium", "small"]),
  value: import_prop_types29.default.any
} : void 0;
var Switch_default = withStyles_default2(styles16, {
  name: "MuiSwitch"
})(Switch);

// node_modules/@material-ui/core/esm/Tooltip/Tooltip.js
var import_prop_types30 = __toModule(require_prop_types());
import {
  Fragment,
  cloneElement as cloneElement5,
  createElement as createElement16,
  forwardRef as forwardRef17,
  useCallback as useCallback9,
  useEffect as useEffect16,
  useMemo as useMemo3,
  useRef as useRef15,
  useState as useState12
} from "react";
import {
  findDOMNode as findDOMNode4
} from "react-dom";
var import_utils38 = __toModule(require_utils());
function round3(value) {
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
var styles18 = function styles19(theme) {
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
      backgroundColor: alpha2(theme.palette.grey[700], 0.9),
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.common.white,
      fontFamily: theme.typography.fontFamily,
      padding: "4px 8px",
      fontSize: theme.typography.pxToRem(10),
      lineHeight: "".concat(round3(14 / 10), "em"),
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
      color: alpha2(theme.palette.grey[700], 0.9),
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
      lineHeight: "".concat(round3(16 / 14), "em"),
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
var Tooltip = /* @__PURE__ */ forwardRef17(function Tooltip2(props, ref) {
  var _props$arrow = props.arrow, arrow2 = _props$arrow === void 0 ? false : _props$arrow, children = props.children, classes = props.classes, _props$disableFocusLi = props.disableFocusListener, disableFocusListener = _props$disableFocusLi === void 0 ? false : _props$disableFocusLi, _props$disableHoverLi = props.disableHoverListener, disableHoverListener = _props$disableHoverLi === void 0 ? false : _props$disableHoverLi, _props$disableTouchLi = props.disableTouchListener, disableTouchListener = _props$disableTouchLi === void 0 ? false : _props$disableTouchLi, _props$enterDelay = props.enterDelay, enterDelay = _props$enterDelay === void 0 ? 100 : _props$enterDelay, _props$enterNextDelay = props.enterNextDelay, enterNextDelay = _props$enterNextDelay === void 0 ? 0 : _props$enterNextDelay, _props$enterTouchDela = props.enterTouchDelay, enterTouchDelay = _props$enterTouchDela === void 0 ? 700 : _props$enterTouchDela, idProp = props.id, _props$interactive = props.interactive, interactive3 = _props$interactive === void 0 ? false : _props$interactive, _props$leaveDelay = props.leaveDelay, leaveDelay = _props$leaveDelay === void 0 ? 0 : _props$leaveDelay, _props$leaveTouchDela = props.leaveTouchDelay, leaveTouchDelay = _props$leaveTouchDela === void 0 ? 1500 : _props$leaveTouchDela, onClose = props.onClose, onOpen = props.onOpen, openProp = props.open, _props$placement = props.placement, placement = _props$placement === void 0 ? "bottom" : _props$placement, _props$PopperComponen = props.PopperComponent, PopperComponent = _props$PopperComponen === void 0 ? Popper_default : _props$PopperComponen, PopperProps = props.PopperProps, title = props.title, _props$TransitionComp = props.TransitionComponent, TransitionComponent = _props$TransitionComp === void 0 ? Grow_default : _props$TransitionComp, TransitionProps = props.TransitionProps, other = _objectWithoutProperties(props, ["arrow", "children", "classes", "disableFocusListener", "disableHoverListener", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "id", "interactive", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "title", "TransitionComponent", "TransitionProps"]);
  var theme = useTheme6();
  var _React$useState = useState12(), childNode = _React$useState[0], setChildNode = _React$useState[1];
  var _React$useState2 = useState12(null), arrowRef = _React$useState2[0], setArrowRef = _React$useState2[1];
  var ignoreNonTouchEvents = useRef15(false);
  var closeTimer = useRef15();
  var enterTimer = useRef15();
  var leaveTimer = useRef15();
  var touchTimer = useRef15();
  var _useControlled = useControlled({
    controlled: openProp,
    default: false,
    name: "Tooltip",
    state: "open"
  }), _useControlled2 = _slicedToArray(_useControlled, 2), openState = _useControlled2[0], setOpenState = _useControlled2[1];
  var open = openState;
  if (true) {
    var _React$useRef = useRef15(openProp !== void 0), isControlled = _React$useRef.current;
    useEffect16(function() {
      if (childNode && childNode.disabled && !isControlled && title !== "" && childNode.tagName.toLowerCase() === "button") {
        console.error(["Material-UI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join("\n"));
      }
    }, [title, childNode, isControlled]);
  }
  var id = useId(idProp);
  useEffect16(function() {
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
  var _useIsFocusVisible = useIsFocusVisible2(), isFocusVisible3 = _useIsFocusVisible.isFocusVisible, onBlurVisible = _useIsFocusVisible.onBlurVisible, focusVisibleRef = _useIsFocusVisible.ref;
  var _React$useState3 = useState12(false), childIsFocusVisible = _React$useState3[0], setChildIsFocusVisible = _React$useState3[1];
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
      if (isFocusVisible3(event)) {
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
  var handleUseRef = useForkRef2(setChildNode, ref);
  var handleFocusRef = useForkRef2(focusVisibleRef, handleUseRef);
  var handleOwnRef = useCallback9(function(instance) {
    setRef2(handleFocusRef, findDOMNode4(instance));
  }, [handleFocusRef]);
  var handleRef = useForkRef2(children.ref, handleOwnRef);
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
  var mergedPopperProps = useMemo3(function() {
    return (0, import_utils38.deepmerge)({
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
  return /* @__PURE__ */ createElement16(Fragment, null, /* @__PURE__ */ cloneElement5(children, childrenProps), /* @__PURE__ */ createElement16(PopperComponent, _extends({
    className: clsx_m_default(classes.popper, interactive3 && classes.popperInteractive, arrow2 && classes.popperArrow),
    placement,
    anchorEl: childNode,
    open: childNode ? open : false,
    id: childrenProps["aria-describedby"],
    transition: true
  }, interactiveWrapperListeners, mergedPopperProps), function(_ref) {
    var placementInner = _ref.placement, TransitionPropsInner = _ref.TransitionProps;
    return /* @__PURE__ */ createElement16(TransitionComponent, _extends({
      timeout: theme.transitions.duration.shorter
    }, TransitionPropsInner, TransitionProps), /* @__PURE__ */ createElement16("div", {
      className: clsx_m_default(classes.tooltip, classes["tooltipPlacement".concat(capitalize2(placementInner.split("-")[0]))], ignoreNonTouchEvents.current && classes.touch, arrow2 && classes.tooltipArrow)
    }, title, arrow2 ? /* @__PURE__ */ createElement16("span", {
      className: classes.arrow,
      ref: setArrowRef
    }) : null));
  }));
});
true ? Tooltip.propTypes = {
  arrow: import_prop_types30.default.bool,
  children: import_utils38.elementAcceptingRef.isRequired,
  classes: import_prop_types30.default.object,
  className: import_prop_types30.default.string,
  disableFocusListener: import_prop_types30.default.bool,
  disableHoverListener: import_prop_types30.default.bool,
  disableTouchListener: import_prop_types30.default.bool,
  enterDelay: import_prop_types30.default.number,
  enterNextDelay: import_prop_types30.default.number,
  enterTouchDelay: import_prop_types30.default.number,
  id: import_prop_types30.default.string,
  interactive: import_prop_types30.default.bool,
  leaveDelay: import_prop_types30.default.number,
  leaveTouchDelay: import_prop_types30.default.number,
  onClose: import_prop_types30.default.func,
  onOpen: import_prop_types30.default.func,
  open: import_prop_types30.default.bool,
  placement: import_prop_types30.default.oneOf(["bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  PopperComponent: import_prop_types30.default.elementType,
  PopperProps: import_prop_types30.default.object,
  title: import_prop_types30.default.node.isRequired,
  TransitionComponent: import_prop_types30.default.elementType,
  TransitionProps: import_prop_types30.default.object
} : void 0;
var Tooltip_default = withStyles_default2(styles18, {
  name: "MuiTooltip",
  flip: false
})(Tooltip);

// node_modules/@ringcentral/juno/es6/foundation/hooks/useForkRef/useForkRef.js
var useForkRef3 = useForkRef2;

// node_modules/@ringcentral/juno/es6/foundation/utils/classes.js
var RcClasses = function(classes, prefix3) {
  return classes.reduce(function(prev2, curr) {
    prev2[curr] = prefix3 + "-" + curr;
    return prev2;
  }, {});
};

// node_modules/@ringcentral/juno/es6/foundation/utils/withDeprecatedCheck.js
import React42, { forwardRef as forwardRef18, useEffect as useEffect17 } from "react";

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
  var component = _a2.component, target = _a2.target, time = _a2.time, comment2 = _a2.comment, message = _a2.message, level = _a2.level;
  var showMessage = message || "props => (" + target + ") be deprecated, that will be remove in " + time + " release" + (comment2 ? ", " + comment2 : "");
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
  return forwardRef18(function(props, ref) {
    useEffect17(function() {
      depreciates.forEach(function(_a2) {
        var prop = _a2.prop, comment2 = _a2.comment, time = _a2.time;
        var _b;
        if (props[prop] !== void 0 && props[prop] !== ((_b = Component3.defaultProps) === null || _b === void 0 ? void 0 : _b[prop])) {
          showDeprecated({
            component: name,
            target: prop,
            time,
            comment: comment2
          });
        }
      });
    }, []);
    return React42.createElement(Component3, __assign({}, props, { ref }));
  });
}

// node_modules/@ringcentral/juno/es6/foundation/utils/combineProps.js
var import_isPlainObject = __toModule(require_isPlainObject());
import { isValidElement as isValidElement4 } from "react";
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
          if (!isValidElement4(propTo) && !isValidElement4(prop) && (0, import_isPlainObject.default)(propTo) && (0, import_isPlainObject.default)(prop)) {
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
var import_utils39 = __toModule(require_utils());
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
function deepmerge8() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return import_utils39.deepmerge.apply(void 0, __spread2(args));
}

// node_modules/@ringcentral/juno/es6/foundation/utils/isRcElement.js
import { isValidElement as isValidElement5 } from "react";
function isRcElement(element, names) {
  var _a2;
  return isValidElement5(element) && names.indexOf((_a2 = element.type) === null || _a2 === void 0 ? void 0 : _a2.displayName) !== -1;
}

// node_modules/@ringcentral/juno/es6/foundation/utils/omit.js
var import_omit = __toModule(require_omit());
var omit = function(classes, keys3) {
  return (0, import_omit.default)(classes, keys3);
};

// node_modules/@ringcentral/juno/es6/foundation/utils/parseColor.js
function parseColor(color2, defaultColor, useMain) {
  if (useMain === void 0) {
    useMain = true;
  }
  if (!color2 && defaultColor !== void 0) {
    return defaultColor;
  }
  var result = ["primary", "main"];
  if (color2) {
    if (color2 instanceof Array) {
      result = color2;
    } else if (typeof color2 === "string") {
      var colors = color2.split(".");
      result = colors;
    } else {
      return color2;
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
import { useRef as useRef16 } from "react";
var useRefState = function(value, customUpdate) {
  var forceUpdate = customUpdate !== null && customUpdate !== void 0 ? customUpdate : useForceUpdate();
  var innerValueRef = useRef16(value);
  var setInnerValue = useEventCallback3(function(toValue2, isUpdate) {
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
var values4 = {
  xs: 0,
  sm: 641,
  md: 960,
  lg: 1280,
  xl: 1920
};
var breakpoints_default = {
  keys: keys2,
  values: values4
};

// node_modules/@ringcentral/juno/es6/foundation/theme/assets/opacity.json
var _8 = 0.08;
var _22 = 0.12;
var _6 = 0.16;
var _4 = 0.24;
var _23 = 0.32;
var _0 = 0.4;
var _82 = 0.48;
var _62 = 0.56;
var _42 = 0.64;
var _24 = 0.72;
var _02 = 0.8;
var _83 = 0.88;
var _63 = 0.96;
var opacity_default = {
  "08": _8,
  "12": _22,
  "16": _6,
  "24": _4,
  "32": _23,
  "40": _0,
  "48": _82,
  "56": _62,
  "64": _42,
  "72": _24,
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
var round4 = "100vw";
var sm = "2px";
var xl = "8px";
var xxl = "16px";
var zero = "0px";
var radius_default = {
  circle,
  lg,
  md,
  round: round4,
  sm,
  xl,
  xxl,
  zero
};

// node_modules/@ringcentral/juno/es6/foundation/theme/assets/shadows.json
var shadows_default4 = [
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
var borderRadius2 = 4;
var shape_default3 = {
  borderRadius: borderRadius2
};

// node_modules/@ringcentral/juno/es6/foundation/theme/assets/transition.json
var duration3 = {
  complex: 375,
  enteringScreen: 225,
  leavingScreen: 195,
  short: 250,
  shorter: 200,
  shortest: 150,
  standard: 300
};
var easing3 = {
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
};
var transition_default = {
  duration: duration3,
  easing: easing3
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
var fontFamily2 = "Lato, Helvetica, Arial, sans-serif";
var fontSize2 = 14;
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
var typography_default2 = {
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
  fontFamily: fontFamily2,
  fontSize: fontSize2,
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
var zIndex_default3 = {
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
function createTheme4(options) {
  if (options === void 0) {
    options = {};
  }
  var _a2 = options.palette, paletteInput = _a2 === void 0 ? {} : _a2, _b = options.typography, typographyInput = _b === void 0 ? {} : _b, _c = options.opacity, opacityInput = _c === void 0 ? {} : _c, _d = options.radius, radiusInput = _d === void 0 ? {} : _d, _e2 = options.zIndex, zIndexInput = _e2 === void 0 ? {} : _e2, _f = options.breakpoints, breakpointsInput = _f === void 0 ? {} : _f, _g = options.shape, shapeInput = _g === void 0 ? {} : _g, _h = options.shadows, shadowsInput = _h === void 0 ? [] : _h, _j = options.transitions, transitionsInput = _j === void 0 ? {} : _j;
  var _breakpoints = Object.keys(breakpointsInput).length > 0 ? breakpointsInput : breakpoints_default;
  var _shadows = (shadowsInput === null || shadowsInput === void 0 ? void 0 : shadowsInput.length) > 0 ? shadowsInput : shadows_default4;
  var _palette = deepmerge8(paletteInput["type"] === "dark" ? palette_dark_default : palette_light_default, paletteInput);
  var theme = __assign3(__assign3({}, options), { spacing: 4, palette: _palette, typography: deepmerge8(typography_default2, typographyInput), opacity: deepmerge8(opacity_default, opacityInput), radius: deepmerge8(radius_default, radiusInput), shadows: _shadows, transitions: deepmerge8(transition_default, transitionsInput), zIndex: deepmerge8(zIndex_default3, zIndexInput), breakpoints: _breakpoints, shape: deepmerge8(shape_default3, shapeInput) });
  return createMuiTheme(theme);
}
var createTheme_default4 = createTheme4;

// node_modules/@ringcentral/juno/es6/foundation/theme/ThemeProvider.js
var import_focus_visible = __toModule(require_focus_visible());
import React43 from "react";
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
  var theme = createTheme_default4(themeProp);
  return React43.createElement(ThemeProvider_default, { theme }, React43.createElement(ThemeProvider3, { theme }, React43.createElement(React43.Fragment, null, children)));
};
var RcThemeProvider = function(props) {
  return React43.createElement(StylesProvider, { injectFirst: true }, React43.createElement(RcSubThemeProvider, __assign4({}, props)));
};

// node_modules/@ringcentral/juno/es6/foundation/theme/useThemeProps.js
function useThemeProps3(_a2) {
  var props = _a2.props, name = _a2.name;
  var _b;
  var theme = RcUseTheme();
  return combineProps((_b = theme.props) === null || _b === void 0 ? void 0 : _b[name], props);
}

// node_modules/@ringcentral/juno/es6/foundation/styles/opacity.js
var import_colorManipulator6 = __toModule(require_colorManipulator());
function doAlpha(color2, opacity, theme) {
  var alpha3 = String(opacity).indexOf(".") > -1 ? opacity : theme.palette.action.hoverOpacity * opacity;
  try {
    return (0, import_colorManipulator6.fade)(color2, +alpha3.toFixed(2));
  } catch (error3) {
    logInDev({
      component: "setOpacity",
      message: "your color pass into setOpacity is error color, check your color again, please"
    });
    return color2;
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
function getParsePaletteColor(color2, defaultColor, useMain) {
  if (useMain === void 0) {
    useMain = true;
  }
  var args = parseColor(color2, defaultColor, useMain);
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
var shadowBorder = function(r2, color2, inset, size) {
  if (r2 === void 0) {
    r2 = "zero";
  }
  if (color2 === void 0) {
    color2 = focusVisibleColor;
  }
  if (inset === void 0) {
    inset = true;
  }
  if (size === void 0) {
    size = 1;
  }
  return css3(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    box-shadow: ", " 0 0 0 ", "px ", ";\n    border-radius: ", ";\n    pointer-events: none;\n  }\n"], ["\n  &:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    box-shadow: ", " 0 0 0 ", "px ", ";\n    border-radius: ", ";\n    pointer-events: none;\n  }\n"])), inset ? "inset" : "", size, color2, radius(r2));
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
  var _b = _a2 === void 0 ? {} : _a2, pseudo = _b.pseudo, _c = _b.inset, inset = _c === void 0 ? true : _c, radius2 = _b.radius, _d = _b.size, size = _d === void 0 ? 1 : _d, _e2 = _b.color, color2 = _e2 === void 0 ? palette2("highContrast") : _e2, allowTransparent = _b.allowTransparent;
  return function(_a3) {
    var theme = _a3.theme;
    var colorValue = typeof color2 === "function" && theme ? color2({ theme }) : color2;
    if (!allowTransparent && colorValue === "transparent")
      return;
    if (pseudo) {
      return shadowBorder(radius2, colorValue, inset, size);
    }
    return css3(templateObject_12 || (templateObject_12 = __makeTemplateObject2(["\n      box-shadow: ", " 0 0 0 ", "px ", ";\n    "], ["\n      box-shadow: ", " 0 0 0 ", "px ", ";\n    "])), inset ? "inset" : "", size, colorValue);
  };
};
var templateObject_12;

// node_modules/@ringcentral/juno/es6/foundation/styles/px.js
function px2() {
  var values5 = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    values5[_i] = arguments[_i];
  }
  return values5.map(function(n2) {
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
function spacing3() {
  var values5 = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    values5[_i] = arguments[_i];
  }
  return function(_a2) {
    var theme = _a2.theme;
    var unit = theme.spacing(1);
    return px2.apply(void 0, __spread4(values5.map(function(n2) {
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
function typography2(name, fontOnly) {
  if (fontOnly === void 0) {
    fontOnly = false;
  }
  var fontCss = css3(templateObject_13 || (templateObject_13 = __makeTemplateObject3(["\n    font-size: ", ";\n    font-weight: ", ";\n    font-family: ", ";\n  "], ["\n    font-size: ", ";\n    font-weight: ", ";\n    font-family: ", ";\n  "])), typographyProp(name, "fontSize"), typographyProp(name, "fontWeight"), function(_a2) {
    var theme = _a2.theme;
    return theme.typography["fontFamily"];
  });
  return fontOnly ? fontCss : css3(templateObject_2 || (templateObject_2 = __makeTemplateObject3(["\n        ", ";\n        line-height: ", ";\n      "], ["\n        ", ";\n        line-height: ", ";\n      "])), fontCss, typographyProp(name, "lineHeight"));
}
var templateObject_13;
var templateObject_2;

// node_modules/@ringcentral/juno/es6/components/Icon/Icon.js
import React46, { forwardRef as forwardRef21, memo as memo2 } from "react";

// node_modules/@ringcentral/juno/es6/components/Progress/CircularProgress/CircularProgress.js
import React44, { forwardRef as forwardRef19, useMemo as useMemo4 } from "react";

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
  var color2 = props.color;
  var currColor = getParsePaletteColor(color2);
  return css3(templateObject_14 || (templateObject_14 = __makeTemplateObject4(["\n    color: ", ";\n  "], ["\n    color: ", ";\n  "])), currColor);
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
var _RcCircularProgress = forwardRef19(function(inProps, ref) {
  var props = useThemeProps3({ props: inProps, name: "RcCircularProgress" });
  var classesProp = props.classes, color2 = props.color, rest = __rest(props, ["classes", "color"]);
  var classes = useMemo4(function() {
    return combineClasses(RcCircularProgressClasses, classesProp);
  }, [classesProp]);
  return React44.createElement(CircularProgress_default, __assign5({}, rest, { color: "inherit", ref, classes }));
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
  var onClick = props.onClick, sizeProp = props.size, color2 = props.color, iconColorProp = props.iconColor, iconSize = props.iconSize;
  var size = switchSize(iconSize || sizeProp);
  var currentSize = RcIconSizes[size];
  var fontSize3 = typeof currentSize === "number" ? px2(currentSize) : currentSize;
  var iconColor = getParsePaletteColor(color2 || iconColorProp, null);
  return css3(templateObject_16 || (templateObject_16 = __makeTemplateObject6(["\n    display: inline-flex;\n    cursor: ", ";\n    font-size: ", ";\n    color: ", ";\n  "], ["\n    display: inline-flex;\n    cursor: ", ";\n    font-size: ", ";\n    color: ", ";\n  "])), onClick && "pointer", fontSize3, iconColor);
};
var templateObject_16;

// node_modules/@ringcentral/juno/es6/components/Icon/styles/iconSvg.js
import React45, { forwardRef as forwardRef20 } from "react";
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
var _StyledSvg = forwardRef20(function(_a2, ref) {
  var children = _a2.children, props = __rest2(_a2, ["children"]);
  return React45.cloneElement(children, __assign6({ ref }, props));
});
var StyledSvg = styled_components_default(_StyledSvg)(templateObject_17 || (templateObject_17 = __makeTemplateObject7(["\n  width: 1em;\n  height: 1em;\n  stroke-width: 0;\n  stroke: currentColor;\n  fill: currentColor;\n  pointer-events: none;\n"], ["\n  width: 1em;\n  height: 1em;\n  stroke-width: 0;\n  stroke: currentColor;\n  fill: currentColor;\n  pointer-events: none;\n"])));
var templateObject_17;

// node_modules/@ringcentral/juno/es6/components/Icon/utils/IconService.js
import { useState as useState13, useEffect as useEffect18 } from "react";
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
  var _a2 = __read7(useState13(iconService.getIconMap()), 2), iconMap = _a2[0], setIconMap = _a2[1];
  useEffect18(function() {
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
var _RcIcon = memo2(forwardRef21(function(inProps, ref) {
  var props = useThemeProps3({ props: inProps, name: "RcIcon" });
  var loadingSize = props.loadingSize, useLoading = props.useLoading, iconColor = props.iconColor, iconSize = props.iconSize, icon = props.icon, desc = props.desc, className = props.className, _a2 = props.loading, loading = _a2 === void 0 ? useLoading : _a2, CircularProgressProps = props.CircularProgressProps, symbol = props.symbol, children = props.children, color2 = props.color, size = props.size, rest = __rest3(props, ["loadingSize", "useLoading", "iconColor", "iconSize", "icon", "desc", "className", "loading", "CircularProgressProps", "symbol", "children", "color", "size"]);
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
      renderDom = React46.createElement(Icon, null);
      iconName = symbol["iconName"];
    }
  } else if (typeof children === "string" || icon) {
    var childrenIconKey = children && children.toString() || icon || "";
    Icon = iconMap[childrenIconKey];
    iconName = childrenIconKey;
    if (Icon) {
      renderDom = React46.createElement(Icon, null);
    }
  } else {
    renderDom = children;
  }
  var _className = clsx_m_default(className, iconName, "icon");
  if (loading) {
    var progressSize = RcIconSizes[size];
    return React46.createElement(RcCircularProgress, __assign7({
      size: loadingSize || typeof progressSize === "string" ? "1em" : progressSize,
      ref
    }, CircularProgressProps));
  }
  return React46.createElement("span", __assign7({ className: _className }, rest, { ref }), renderDom && React46.createElement(StyledSvg, null, renderDom), href && React46.createElement(StyledSvg, null, React46.createElement("svg", { role: "img" }, !!desc && React46.createElement("title", null, desc), React46.createElement("use", { xlinkHref: href, href }))));
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
import React47, { forwardRef as forwardRef22, useLayoutEffect as useLayoutEffect7, useMemo as useMemo5, useRef as useRef18, useState as useState14 } from "react";

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
  medium: typography2("caption1"),
  large: typography2("body1"),
  xlarge: typography2("body1")
};
var RcTooltipSpace = {
  medium: spacing3(2),
  large: spacing3(3),
  xlarge: spacing3(3)
};
var RcTooltipPadding = {
  medium: spacing3(1, 2),
  large: spacing3(1, 2),
  xlarge: spacing3(3, 3)
};

// node_modules/@ringcentral/juno/es6/components/Tooltip/utils/useTooltipForceHide.js
import { useRef as useRef17 } from "react";
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
  var isOverRef = useRef17(false);
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
  var handleOpen = useEventCallback3(function(event) {
    setOpen(true);
    onOpen === null || onOpen === void 0 ? void 0 : onOpen(event);
  });
  var handleClose = useEventCallback3(function(event) {
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
  var color2 = _a2.color;
  return getParsePaletteColor(color2);
};
var tooltipTextColor = function(_a2) {
  var textColor = _a2.textColor;
  return getParsePaletteColor(textColor);
};
var arrowSize = {
  vertical: css3(templateObject_110 || (templateObject_110 = __makeTemplateObject10(["\n    height: 0.4em;\n    width: 0.6em;\n  "], ["\n    height: 0.4em;\n    width: 0.6em;\n  "]))),
  horizontal: css3(templateObject_22 || (templateObject_22 = __makeTemplateObject10(["\n    height: 0.6em;\n    width: 0.4em;\n  "], ["\n    height: 0.6em;\n    width: 0.4em;\n  "])))
};
var marginOffset = "-0.4em";
var horizontalMarginTopAndMarginBottom = css3(templateObject_3 || (templateObject_3 = __makeTemplateObject10(["\n  margin-top: 3px;\n  margin-bottom: 3px;\n"], ["\n  margin-top: 3px;\n  margin-bottom: 3px;\n"])));
var tooltipStyle = function() {
  return css3(templateObject_4 || (templateObject_4 = __makeTemplateObject10(["\n    .", " {\n      ", ";\n      background-color: ", ";\n      color: ", ";\n      padding: ", ";\n      word-break: break-word;\n      position: relative;\n    }\n\n    .", ",\n      .", " {\n      margin: ", " 0;\n    }\n\n    .", ",\n      .", " {\n      margin: 0 ", ";\n    }\n\n    .", " {\n      color: ", ";\n    }\n\n    .", " {\n      .", " {\n        margin-bottom: ", ";\n        ", "\n      }\n    }\n\n    .", " {\n      .", " {\n        margin-top: ", ";\n        ", "\n      }\n    }\n\n    .", " {\n      .", " {\n        margin-right: ", ";\n        ", "\n        ", "\n      }\n    }\n\n    .", " {\n      .", " {\n        margin-left: ", ";\n        ", "\n        ", "\n      }\n    }\n  "], ["\n    .", " {\n      ", ";\n      background-color: ", ";\n      color: ", ";\n      padding: ", ";\n      word-break: break-word;\n      position: relative;\n    }\n\n    .", ",\n      .", " {\n      margin: ", " 0;\n    }\n\n    .", ",\n      .", " {\n      margin: 0 ", ";\n    }\n\n    .", " {\n      color: ", ";\n    }\n\n    .", " {\n      .", " {\n        margin-bottom: ", ";\n        ", "\n      }\n    }\n\n    .", " {\n      .", " {\n        margin-top: ", ";\n        ", "\n      }\n    }\n\n    .", " {\n      .", " {\n        margin-right: ", ";\n        ", "\n        ", "\n      }\n    }\n\n    .", " {\n      .", " {\n        margin-left: ", ";\n        ", "\n        ", "\n      }\n    }\n  "])), RcTooltipClasses.tooltip, tooltipTypography, tooltipColor, tooltipTextColor, tooltipPadding, RcTooltipClasses.tooltipPlacementTop, RcTooltipClasses.tooltipPlacementBottom, placementSpace, RcTooltipClasses.tooltipPlacementRight, RcTooltipClasses.tooltipPlacementLeft, placementSpace, RcTooltipClasses.arrow, tooltipColor, RcTooltipClasses.tooltipPlacementTop, RcTooltipClasses.arrow, marginOffset, arrowSize.vertical, RcTooltipClasses.tooltipPlacementBottom, RcTooltipClasses.arrow, marginOffset, arrowSize.vertical, RcTooltipClasses.tooltipPlacementLeft, RcTooltipClasses.arrow, marginOffset, arrowSize.horizontal, horizontalMarginTopAndMarginBottom, RcTooltipClasses.tooltipPlacementRight, RcTooltipClasses.arrow, marginOffset, arrowSize.horizontal, horizontalMarginTopAndMarginBottom);
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
var _RcTooltip = forwardRef22(function(inProps, ref) {
  var props = useThemeProps3({ props: inProps, name: "RcTooltip" });
  var children = props.children, tooltipForceHide = props.tooltipForceHide, openProp = props.open, onOpen = props.onOpen, onClose = props.onClose, classNameProp = props.className, classesProp = props.classes, PopperPropsProp = props.PopperProps, textColor = props.textColor, color2 = props.color, ignorePointer = props.ignorePointer, size = props.size, maskProps = props.maskProps, title = props.title, injectGlobalStyle = props.injectGlobalStyle, rest = __rest4(props, ["children", "tooltipForceHide", "open", "onOpen", "onClose", "className", "classes", "PopperProps", "textColor", "color", "ignorePointer", "size", "maskProps", "title", "injectGlobalStyle"]);
  var externalWindow = useRcPortalWindowContext().externalWindow;
  var _a2 = __read9(useState14(false), 2), isDisabledButton = _a2[0], setIsDisabledButton = _a2[1];
  var innerRef = useRef18(null);
  var tooltipRef = useForkRef3(ref, innerRef);
  var classes = useMemo5(function() {
    return combineClasses(combineClasses({ popper: classNameProp }, RcTooltipClasses), classesProp);
  }, [classNameProp, classesProp]);
  var PopperProps = useMemo5(function() {
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
  useLayoutEffect7(function() {
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
  return React47.createElement(Tooltip_default, __assign8({ ref: tooltipRef, title: isDisabledButton ? "" : title, arrow: true, classes, PopperProps }, additionProp, rest), ignorePointer ? React47.createElement(Mask, __assign8({}, maskProps), children) : children);
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
import React48, { forwardRef as forwardRef23 } from "react";
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
  return forwardRef23(function(props, ref) {
    var title = props.title, useRcTooltip = props.useRcTooltip, TooltipProps = props.TooltipProps, rest = __rest5(props, ["title", "useRcTooltip", "TooltipProps"]);
    if (title && useRcTooltip) {
      return React48.createElement(RcTooltip, __assign9({ title }, TooltipProps), React48.createElement(Component3, __assign9({}, rest, { ref })));
    }
    return React48.createElement(Component3, __assign9({ title }, rest, { ref }));
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
  var color2 = _a2.color;
  return RcButtonColors[color2] || getParsePaletteColor(color2);
};
var plainButtonTextColor = function(_a2) {
  var color2 = _a2.color;
  return RcButtonTextColors[color2] || getParsePaletteColor(color2);
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
  var iconSpace = spacing3(RcButtonIconSpace[size]);
  var isPlain = variant === "plain";
  return css3(templateObject_7 || (templateObject_7 = __makeTemplateObject12(["\n    text-transform: none;\n    ", ";\n    text-align: center;\n    box-shadow: ", ";\n    border-radius: ", ";\n\n    ", ";\n\n    ", ";\n\n    .", " {\n      margin-right: ", ";\n\n      ", ";\n    }\n\n    .", " {\n      margin-left: ", ";\n\n      ", ";\n    }\n\n    &.", " {\n      color: ", ";\n\n      &.", " {\n        color: ", ";\n      }\n\n      ", " {\n        &:hover {\n          background-color: ", ";\n        }\n      }\n\n      ", ";\n    }\n\n    &.", " {\n      color: ", ";\n      background-color: ", ";\n\n      ", " {\n        &:hover {\n          background-color: ", ";\n        }\n      }\n\n      ", "\n    }\n\n    &.", " {\n      color: ", ";\n      border-color: ", ";\n      padding: ", ";\n\n      ", " {\n        &:hover {\n          background-color: ", ";\n        }\n      }\n\n      &.", " {\n        color: ", ";\n        border-color: ", ";\n      }\n\n      &:after {\n        top: -1px;\n        bottom: -1px;\n        left: -1px;\n        right: -1px;\n        border: 1px solid transparent;\n      }\n    }\n  "], [
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
  ])), typography2(RcButtonTypographies[size], true), !keepElevation && "unset", radiusProp && radius(radiusProp), isMask && css3(templateObject_112 || (templateObject_112 = __makeTemplateObject12(["\n        &:after {\n          content: '';\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          height: 100%;\n          width: 100%;\n          display: block;\n          background: ", ";\n          width: 100%;\n          height: 100%;\n          border-radius: ", ";\n        }\n      "], ["\n        &:after {\n          content: '';\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          height: 100%;\n          width: 100%;\n          display: block;\n          background: ", ";\n          width: 100%;\n          height: 100%;\n          border-radius: ", ";\n        }\n      "])), setOpacity(palette2("neutral", "b01"), "32"), radius(radiusProp !== null && radiusProp !== void 0 ? radiusProp : "lg")), !isPlain && css3(templateObject_23 || (templateObject_23 = __makeTemplateObject12(["\n        min-width: ", ";\n        min-height: ", ";\n        padding: ", ";\n      "], ["\n        min-width: ", ";\n        min-height: ", ";\n        padding: ", ";\n      "])), px2(RcButtonMinWidths[size]), px2(RcButtonHeights[size]), spacing3(0, RcButtonPadding[size])), RcButtonClasses.startIcon, iconSpace, isPlain && css3(templateObject_32 || (templateObject_32 = __makeTemplateObject12(["\n          margin-left: 0;\n        "], ["\n          margin-left: 0;\n        "]))), RcButtonClasses.endIcon, iconSpace, isPlain && css3(templateObject_42 || (templateObject_42 = __makeTemplateObject12(["\n          margin-right: 0;\n        "], ["\n          margin-right: 0;\n        "]))), RcButtonClasses.text, plainButtonTextColor, RcButtonClasses.disabled, textDisabledColor, nonTouchHoverMedia, buttonHoverColor, isPlain && css3(templateObject_5 || (templateObject_5 = __makeTemplateObject12(["\n          padding: ", ";\n          min-width: unset;\n          line-height: 1;\n\n          ", " {\n            &:hover {\n              color: ", ";\n              background-color: transparent;\n            }\n          }\n\n          ", " {\n            ", "\n          }\n\n          &:active {\n            &.", " {\n              color: ", ";\n            }\n          }\n        "], ["\n          padding: ", ";\n          min-width: unset;\n          line-height: 1;\n\n          ", " {\n            &:hover {\n              color: ", ";\n              background-color: transparent;\n            }\n          }\n\n          ", " {\n            ", "\n          }\n\n          &:active {\n            &.", " {\n              color: ", ";\n            }\n          }\n        "])), spacing3(1), nonTouchHoverMedia, setOpacity(plainTextColor, "80"), focusVisible, fakeBorder({ color: plainButtonTextColor(props) }), RcButtonClasses.text, setOpacity(plainTextColor, "64")), RcButtonClasses.contained, buttonTextColor, buttonColor, nonTouchHoverMedia, containedButtonHoverColor, !isMask && css3(templateObject_6 || (templateObject_6 = __makeTemplateObject12(["\n          &.", " {\n            background-color: ", ";\n            color: ", ";\n          }\n        "], ["\n          &.", " {\n            background-color: ", ";\n            color: ", ";\n          }\n        "])), RcButtonClasses.disabled, palette2("disabled", "b01"), palette2("disabled", "f01")), RcButtonClasses.outlined, plainButtonTextColor, plainButtonTextColor, spacing3(0, RcButtonPadding[size] - 0.25), nonTouchHoverMedia, buttonHoverColor, RcButtonClasses.disabled, textDisabledColor, textDisabledColor);
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
var _RcButton = forwardRef24(function(inProps, ref) {
  var _a2, _b;
  var props = useThemeProps3({ props: inProps, name: "RcButton" });
  var childrenProp = props.children, classesProp = props.classes, startIconProp = props.startIcon, endIconProp = props.endIcon, loading = props.loading, loadingMode = props.loadingMode, disabled3 = props.disabled, IconProps = props.IconProps, size = props.size, color2 = props.color, CircularProgressProps = props.CircularProgressProps, variant = props.variant, disabledVariant = props.disabledVariant, radius2 = props.radius, keepElevation = props.keepElevation, rest = __rest6(props, ["children", "classes", "startIcon", "endIcon", "loading", "loadingMode", "disabled", "IconProps", "size", "color", "CircularProgressProps", "variant", "disabledVariant", "radius", "keepElevation"]);
  var theme = RcUseTheme();
  var innerRef = useRef19(null);
  var buttonRef = useForkRef3(innerRef, ref);
  var isPlain = variant === "plain";
  var isReplace = loadingMode === "replace";
  var iconSize = getButtonIconSize(size);
  var loadingElm = useMemo6(function() {
    if (loading) {
      var progressSize = RcIconSizes[iconSize];
      return React49.createElement(RcCircularProgress, __assign10({ size: progressSize, color: "inherit" }, CircularProgressProps));
    }
    return void 0;
  }, [CircularProgressProps, iconSize, loading]);
  var getCurrIcon = useCallback10(function(currIcon) {
    if (isRcElement(currIcon, ["RcIcon"]) && currIcon.props.size === RcIcon.defaultProps.size) {
      return React49.cloneElement(currIcon, { size: iconSize });
    }
    return currIcon;
  }, [iconSize]);
  var startIcon = useMemo6(function() {
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
      return React49.createElement(RcIcon, __assign10({ size: iconSize }, IconProps));
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
  var endIcon = useMemo6(function() {
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
  var classes = useMemo6(function() {
    return combineClasses(RcButtonClasses, classesProp);
  }, [classesProp]);
  useLayoutEffect8(function() {
    removeClassName(innerRef, "MuiButton-iconSizeMedium");
  });
  return React49.createElement(Button_default2, __assign10({ ref: buttonRef, disabled: disabled3 || loading, variant: isPlain ? void 0 : variant, disableRipple: ((_b = (_a2 = theme === null || theme === void 0 ? void 0 : theme.props) === null || _a2 === void 0 ? void 0 : _a2.MuiButton) === null || _b === void 0 ? void 0 : _b.disableRipple) || isPlain, startIcon, endIcon, classes }, rest), loading && isReplace ? loadingElm : childrenProp);
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

// node_modules/@ringcentral/juno/es6/components/Forms/Switch/Switch.js
import React51, { forwardRef as forwardRef26, useMemo as useMemo8 } from "react";

// node_modules/@ringcentral/juno/es6/components/Forms/FormControlLabel/FormControlLabel.js
import React50, { forwardRef as forwardRef25, useMemo as useMemo7 } from "react";

// node_modules/@ringcentral/juno/es6/components/Forms/Checkbox/utils/CheckboxUtils.js
var RcCheckboxClasses = RcClasses(["root", "disabled", "checked"], "RcCheckbox");

// node_modules/@ringcentral/juno/es6/components/Forms/Radio/utils/RadioUtils.js
var RcRadioClasses = RcClasses(["root", "checked", "disabled"], "RcRadio");
var RadioButtonIconClasses = RcClasses(["root"], "RadioButtonIcon");

// node_modules/@ringcentral/juno/es6/components/Forms/Switch/utils/SwitchUtils.js
var RcSwitchClasses = RcClasses([
  "root",
  "switchBase",
  "thumb",
  "track",
  "checked",
  "disabled",
  "focusVisible"
], "RcSwitch");

// node_modules/@ringcentral/juno/es6/components/Forms/FormControlLabel/utils/FormControlLabelUtils.js
var RcFormControlLabelClasses = RcClasses(["root", "disabled", "labelPlacementStart"], "RcFormControlLabel");

// node_modules/@ringcentral/juno/es6/components/Forms/FormControlLabel/styles/FormControlLabelStyle.js
var __makeTemplateObject14 = function(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
};
var controlsClassName = "." + RcCheckboxClasses.root + ", ." + RcRadioClasses.root;
var FormControlLabelStyle = function() {
  return css3(templateObject_114 || (templateObject_114 = __makeTemplateObject14(["\n    color: ", ";\n    ", ";\n\n    .", " {\n      color: ", ";\n    }\n\n    ", " {\n      margin-left: 0;\n      margin-right: ", ";\n    }\n\n    .", " {\n      margin: ", ";\n    }\n\n    &.", " {\n      ", " {\n        margin-left: ", ";\n        margin-right: 0;\n      }\n    }\n  "], ["\n    color: ", ";\n    ", ";\n\n    .", " {\n      color: ", ";\n    }\n\n    ", " {\n      margin-left: 0;\n      margin-right: ", ";\n    }\n\n    .", " {\n      margin: ", ";\n    }\n\n    &.", " {\n      ", " {\n        margin-left: ", ";\n        margin-right: 0;\n      }\n    }\n  "])), palette2("neutral", "f06"), typography2("body2"), RcFormControlLabelClasses.disabled, palette2("disabled", "f02"), controlsClassName, spacing3(1), RcSwitchClasses.root, spacing3(3), RcFormControlLabelClasses.labelPlacementStart, controlsClassName, spacing3(1));
};
var templateObject_114;

// node_modules/@ringcentral/juno/es6/components/Forms/FormControlLabel/FormControlLabel.js
var __makeTemplateObject15 = function(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
};
var __assign11 = function() {
  __assign11 = Object.assign || function(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p))
          t2[p] = s2[p];
    }
    return t2;
  };
  return __assign11.apply(this, arguments);
};
var __rest7 = function(s2, e2) {
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
var _RcFormControlLabel = forwardRef25(function(inProps, ref) {
  var props = useThemeProps3({ props: inProps, name: "RcFormControlLabel" });
  var classesProp = props.classes, rest = __rest7(props, ["classes"]);
  var classes = useMemo7(function() {
    return combineClasses(RcFormControlLabelClasses, classesProp);
  }, [classesProp]);
  return React50.createElement(FormControlLabel_default, __assign11({}, rest, { ref, classes }));
});
var RcFormControlLabel = styled_components_default(_RcFormControlLabel)(templateObject_115 || (templateObject_115 = __makeTemplateObject15(["\n  ", "\n"], ["\n  ", "\n"])), FormControlLabelStyle);
RcFormControlLabel.defaultProps = {};
RcFormControlLabel.displayName = "RcFormControlLabel";
var templateObject_115;

// node_modules/@ringcentral/juno/es6/components/Forms/Switch/styles/SwitchStyle.js
var __makeTemplateObject16 = function(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
};
var thumbColor = palette2("neutral", "f01");
var disabledColor = palette2("disabled", "f02");
var defaultTrackColorArray = ["neutral", "f02"];
var heightCss = css3(templateObject_116 || (templateObject_116 = __makeTemplateObject16(["\n  height: 20px;\n"], ["\n  height: 20px;\n"])));
var widthCss = css3(templateObject_24 || (templateObject_24 = __makeTemplateObject16(["\n  width: 36px;\n"], ["\n  width: 36px;\n"])));
var thumbSize = css3(templateObject_33 || (templateObject_33 = __makeTemplateObject16(["\n  height: 12px;\n  width: 12px;\n"], ["\n  height: 12px;\n  width: 12px;\n"])));
var notDisabledSwitchBase = function(opacity, checkedColor, trackedColor) {
  return css3(templateObject_43 || (templateObject_43 = __makeTemplateObject16(["\n  .", " {\n    &:not(.", ") {\n      & + .", " {\n        background-color: ", ";\n      }\n\n      &.", " + .", " {\n        background-color: ", ";\n      }\n    }\n  }\n"], ["\n  .", " {\n    &:not(.", ") {\n      & + .", " {\n        background-color: ", ";\n      }\n\n      &.", " + .", " {\n        background-color: ", ";\n      }\n    }\n  }\n"])), RcSwitchClasses.switchBase, RcSwitchClasses.disabled, RcSwitchClasses.track, setOpacity(trackedColor, opacity, true), RcSwitchClasses.checked, RcSwitchClasses.track, setOpacity(checkedColor, opacity, true));
};
var SwitchStyle = function(_a2) {
  var colorProp = _a2.color, trackColorProp = _a2.trackColor;
  var checkedColor = getParsePaletteColor(colorProp);
  var trackColor = getParsePaletteColor(trackColorProp, defaultTrackColorArray);
  return css3(templateObject_52 || (templateObject_52 = __makeTemplateObject16(["\n    &.", " {\n      padding: 0px;\n      ", ";\n      ", ";\n\n      .", " {\n        ", ";\n        ", ";\n        padding: 0;\n        background-color: transparent;\n        transform: translateX(", ");\n\n        &.", " {\n          transform: translateX(", ");\n        }\n      }\n\n      .", " {\n        ", ";\n        background-color: ", ";\n        box-shadow: none;\n      }\n\n      .", " {\n        ", ";\n        opacity: 1;\n        margin: 0;\n        border-radius: ", ";\n        background-color: ", ";\n      }\n\n      .", " + .", " {\n        background-color: ", ";\n      }\n\n      .", " + .", " {\n        background-color: ", ";\n      }\n\n      .", " + .", " {\n        &:after {\n          content: '';\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          box-sizing: border-box;\n          border-radius: ", ";\n          border: 1px solid ", ";\n          ", "\n        }\n      }\n\n      ", " {\n        &:hover {\n          ", ";\n        }\n      }\n\n      &:active {\n        ", ";\n      }\n    }\n  "], ["\n    &.", " {\n      padding: 0px;\n      ", ";\n      ", ";\n\n      .", " {\n        ", ";\n        ", ";\n        padding: 0;\n        background-color: transparent;\n        transform: translateX(", ");\n\n        &.", " {\n          transform: translateX(", ");\n        }\n      }\n\n      .", " {\n        ", ";\n        background-color: ", ";\n        box-shadow: none;\n      }\n\n      .", " {\n        ", ";\n        opacity: 1;\n        margin: 0;\n        border-radius: ", ";\n        background-color: ", ";\n      }\n\n      .", " + .", " {\n        background-color: ", ";\n      }\n\n      .", " + .", " {\n        background-color: ", ";\n      }\n\n      .", " + .", " {\n        &:after {\n          content: '';\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          box-sizing: border-box;\n          border-radius: ", ";\n          border: 1px solid ", ";\n          ", "\n        }\n      }\n\n      ", " {\n        &:hover {\n          ", ";\n        }\n      }\n\n      &:active {\n        ", ";\n      }\n    }\n  "])), RcSwitchClasses.root, widthCss, heightCss, RcSwitchClasses.switchBase, widthCss, heightCss, spacing3(-2), RcSwitchClasses.checked, spacing3(2), RcSwitchClasses.thumb, thumbSize, thumbColor, RcSwitchClasses.track, heightCss, radius("round"), trackColor, RcSwitchClasses.checked, RcSwitchClasses.track, checkedColor, RcSwitchClasses.disabled, RcSwitchClasses.track, disabledColor, RcSwitchClasses.focusVisible, RcSwitchClasses.track, radius("round"), palette2("interactive", "f01"), fakeBorder({ color: palette2("neutral", "f11") }), nonTouchHoverMedia, notDisabledSwitchBase("08", checkedColor, trackColor), notDisabledSwitchBase("24", checkedColor, trackColor));
};
var templateObject_116;
var templateObject_24;
var templateObject_33;
var templateObject_43;
var templateObject_52;

// node_modules/@ringcentral/juno/es6/components/Forms/Switch/Switch.js
var __makeTemplateObject17 = function(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
};
var __assign12 = function() {
  __assign12 = Object.assign || function(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p))
          t2[p] = s2[p];
    }
    return t2;
  };
  return __assign12.apply(this, arguments);
};
var __rest8 = function(s2, e2) {
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
var _RcSwitch = forwardRef26(function(inProps, ref) {
  var props = useThemeProps3({ props: inProps, name: "RcSwitch" });
  var label3 = props.label, _a2 = props.formControlLabelProps, formControlLabelProps = _a2 === void 0 ? {} : _a2, focusVisibleClassNameProp = props.focusVisibleClassName, classesProp = props.classes, color2 = props.color, trackColor = props.trackColor, rest = __rest8(props, ["label", "formControlLabelProps", "focusVisibleClassName", "classes", "color", "trackColor"]);
  var classes = useMemo8(function() {
    return combineClasses(omit(RcSwitchClasses, ["focusVisible"]), classesProp);
  }, [classesProp]);
  var focusVisibleClassName = useMemo8(function() {
    return clsx_m_default(RcSwitchClasses.focusVisible, focusVisibleClassNameProp);
  }, [focusVisibleClassNameProp]);
  var Switch3 = React51.createElement(Switch_default, __assign12({ ref, focusVisibleClassName, classes }, rest, { color: "default", size: "medium", disableRipple: true, disableTouchRipple: true }));
  if (label3) {
    return React51.createElement(RcFormControlLabel, __assign12({}, formControlLabelProps, { label: label3, control: Switch3 }));
  }
  return Switch3;
});
var RcSwitch = styled_components_default(_RcSwitch)(templateObject_117 || (templateObject_117 = __makeTemplateObject17(["\n  ", "\n"], ["\n  ", "\n"])), SwitchStyle);
RcSwitch.defaultProps = {
  color: "interactive.f01"
};
RcSwitch.displayName = "RcSwitch";
var templateObject_117;

// src/Battery.tsx
import React52 from "react";
var Battery = () => {
  return /* @__PURE__ */ React52.createElement("div", null, /* @__PURE__ */ React52.createElement(RcThemeProvider, null, /* @__PURE__ */ React52.createElement(Button_default, {
    variant: "contained"
  }, "Hello World"), /* @__PURE__ */ React52.createElement(RcButton, null, "Abc"), /* @__PURE__ */ React52.createElement(RcSwitch, {
    label: "cool"
  })));
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
/** @license MUI v5.0.0-alpha.48
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license MUI v5.0.1
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
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
