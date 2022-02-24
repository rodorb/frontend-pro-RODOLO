"use strict";

require("regenerator-runtime/runtime.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/web.timers.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var foo = function foo() {
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(2);
    }, 100);
  });
  return promise;
};

_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var r;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return foo();

        case 2:
          r = _context.sent;
          console.log(r);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();

console.log(foo());
