!(function () {
  var e = {
      757: function (e, t, n) {
        e.exports = n(727);
      },
      727: function (e) {
        var t = (function (e) {
          "use strict";
          var t,
            n = Object.prototype,
            r = n.hasOwnProperty,
            a = "function" === typeof Symbol ? Symbol : {},
            i = a.iterator || "@@iterator",
            u = a.asyncIterator || "@@asyncIterator",
            s = a.toStringTag || "@@toStringTag";
          function c(e, t, n) {
            return (
              Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            c({}, "");
          } catch (N) {
            c = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function o(e, t, n, r) {
            var a = t && t.prototype instanceof y ? t : y,
              i = Object.create(a.prototype),
              u = new S(r || []);
            return (
              (i._invoke = (function (e, t, n) {
                var r = f;
                return function (a, i) {
                  if (r === p) throw new Error("Generator is already running");
                  if (r === v) {
                    if ("throw" === a) throw i;
                    return T();
                  }
                  for (n.method = a, n.arg = i; ; ) {
                    var u = n.delegate;
                    if (u) {
                      var s = R(u, n);
                      if (s) {
                        if (s === d) continue;
                        return s;
                      }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg;
                    else if ("throw" === n.method) {
                      if (r === f) throw ((r = v), n.arg);
                      n.dispatchException(n.arg);
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    r = p;
                    var c = h(e, t, n);
                    if ("normal" === c.type) {
                      if (((r = n.done ? v : l), c.arg === d)) continue;
                      return { value: c.arg, done: n.done };
                    }
                    "throw" === c.type &&
                      ((r = v), (n.method = "throw"), (n.arg = c.arg));
                  }
                };
              })(e, n, u)),
              i
            );
          }
          function h(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (N) {
              return { type: "throw", arg: N };
            }
          }
          e.wrap = o;
          var f = "suspendedStart",
            l = "suspendedYield",
            p = "executing",
            v = "completed",
            d = {};
          function y() {}
          function m() {}
          function x() {}
          var g = {};
          c(g, i, function () {
            return this;
          });
          var w = Object.getPrototypeOf,
            b = w && w(w(O([])));
          b && b !== n && r.call(b, i) && (g = b);
          var k = (x.prototype = y.prototype = Object.create(g));
          function _(e) {
            ["next", "throw", "return"].forEach(function (t) {
              c(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function q(e, t) {
            function n(a, i, u, s) {
              var c = h(e[a], e, i);
              if ("throw" !== c.type) {
                var o = c.arg,
                  f = o.value;
                return f && "object" === typeof f && r.call(f, "__await")
                  ? t.resolve(f.__await).then(
                      function (e) {
                        n("next", e, u, s);
                      },
                      function (e) {
                        n("throw", e, u, s);
                      }
                    )
                  : t.resolve(f).then(
                      function (e) {
                        (o.value = e), u(o);
                      },
                      function (e) {
                        return n("throw", e, u, s);
                      }
                    );
              }
              s(c.arg);
            }
            var a;
            this._invoke = function (e, r) {
              function i() {
                return new t(function (t, a) {
                  n(e, r, t, a);
                });
              }
              return (a = a ? a.then(i, i) : i());
            };
          }
          function R(e, n) {
            var r = e.iterator[n.method];
            if (r === t) {
              if (((n.delegate = null), "throw" === n.method)) {
                if (
                  e.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = t),
                  R(e, n),
                  "throw" === n.method)
                )
                  return d;
                (n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return d;
            }
            var a = h(r, e.iterator, n.arg);
            if ("throw" === a.type)
              return (
                (n.method = "throw"), (n.arg = a.arg), (n.delegate = null), d
              );
            var i = a.arg;
            return i
              ? i.done
                ? ((n[e.resultName] = i.value),
                  (n.next = e.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                  (n.delegate = null),
                  d)
                : i
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                d);
          }
          function E(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function L(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function S(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(E, this),
              this.reset(!0);
          }
          function O(e) {
            if (e) {
              var n = e[i];
              if (n) return n.call(e);
              if ("function" === typeof e.next) return e;
              if (!isNaN(e.length)) {
                var a = -1,
                  u = function n() {
                    for (; ++a < e.length; )
                      if (r.call(e, a))
                        return (n.value = e[a]), (n.done = !1), n;
                    return (n.value = t), (n.done = !0), n;
                  };
                return (u.next = u);
              }
            }
            return { next: T };
          }
          function T() {
            return { value: t, done: !0 };
          }
          return (
            (m.prototype = x),
            c(k, "constructor", x),
            c(x, "constructor", m),
            (m.displayName = c(x, s, "GeneratorFunction")),
            (e.isGeneratorFunction = function (e) {
              var t = "function" === typeof e && e.constructor;
              return (
                !!t &&
                (t === m || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (e.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, x)
                  : ((e.__proto__ = x), c(e, s, "GeneratorFunction")),
                (e.prototype = Object.create(k)),
                e
              );
            }),
            (e.awrap = function (e) {
              return { __await: e };
            }),
            _(q.prototype),
            c(q.prototype, u, function () {
              return this;
            }),
            (e.AsyncIterator = q),
            (e.async = function (t, n, r, a, i) {
              void 0 === i && (i = Promise);
              var u = new q(o(t, n, r, a), i);
              return e.isGeneratorFunction(n)
                ? u
                : u.next().then(function (e) {
                    return e.done ? e.value : u.next();
                  });
            }),
            _(k),
            c(k, s, "Generator"),
            c(k, i, function () {
              return this;
            }),
            c(k, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (e) {
              var t = [];
              for (var n in e) t.push(n);
              return (
                t.reverse(),
                function n() {
                  for (; t.length; ) {
                    var r = t.pop();
                    if (r in e) return (n.value = r), (n.done = !1), n;
                  }
                  return (n.done = !0), n;
                }
              );
            }),
            (e.values = O),
            (S.prototype = {
              constructor: S,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(L),
                  !e)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      r.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = t);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var n = this;
                function a(r, a) {
                  return (
                    (s.type = "throw"),
                    (s.arg = e),
                    (n.next = r),
                    a && ((n.method = "next"), (n.arg = t)),
                    !!a
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var u = this.tryEntries[i],
                    s = u.completion;
                  if ("root" === u.tryLoc) return a("end");
                  if (u.tryLoc <= this.prev) {
                    var c = r.call(u, "catchLoc"),
                      o = r.call(u, "finallyLoc");
                    if (c && o) {
                      if (this.prev < u.catchLoc) return a(u.catchLoc, !0);
                      if (this.prev < u.finallyLoc) return a(u.finallyLoc);
                    } else if (c) {
                      if (this.prev < u.catchLoc) return a(u.catchLoc, !0);
                    } else {
                      if (!o)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < u.finallyLoc) return a(u.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var a = this.tryEntries[n];
                  if (
                    a.tryLoc <= this.prev &&
                    r.call(a, "finallyLoc") &&
                    this.prev < a.finallyLoc
                  ) {
                    var i = a;
                    break;
                  }
                }
                i &&
                  ("break" === e || "continue" === e) &&
                  i.tryLoc <= t &&
                  t <= i.finallyLoc &&
                  (i = null);
                var u = i ? i.completion : {};
                return (
                  (u.type = e),
                  (u.arg = t),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), d)
                    : this.complete(u)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  d
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc), L(n), d;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var a = r.arg;
                      L(n);
                    }
                    return a;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, n, r) {
                return (
                  (this.delegate = {
                    iterator: O(e),
                    resultName: n,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = t),
                  d
                );
              },
            }),
            e
          );
        })(e.exports);
        try {
          regeneratorRuntime = t;
        } catch (n) {
          "object" === typeof globalThis
            ? (globalThis.regeneratorRuntime = t)
            : Function("r", "regeneratorRuntime = r")(t);
        }
      },
      45: function () {
        "use strict";
        try {
          self["workbox:background-sync:5.1.4"] && _();
        } catch (e) {}
      },
      923: function () {
        "use strict";
        try {
          self["workbox:core:5.1.4"] && _();
        } catch (e) {}
      },
      190: function () {
        "use strict";
        try {
          self["workbox:expiration:5.1.4"] && _();
        } catch (e) {}
      },
      437: function () {
        "use strict";
        try {
          self["workbox:precaching:5.1.4"] && _();
        } catch (e) {}
      },
      185: function () {
        "use strict";
        try {
          self["workbox:routing:5.1.4"] && _();
        } catch (e) {}
      },
      833: function () {
        "use strict";
        try {
          self["workbox:strategies:5.1.4"] && _();
        } catch (e) {}
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var i = (t[r] = { exports: {} });
    return e[r](i, i.exports, n), i.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      "use strict";
      n(923);
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function t(t, n, r) {
        return (
          n && e(t.prototype, n),
          r && e(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function a(e, t) {
        return (
          (a =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          a(e, t)
        );
      }
      function i(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && a(e, t);
      }
      function u(e) {
        return (
          (u = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          u(e)
        );
      }
      function s() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function c(e) {
        return (
          (c =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          c(e)
        );
      }
      function o(e, t) {
        if (t && ("object" === c(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function h(e) {
        var t = s();
        return function () {
          var n,
            r = u(e);
          if (t) {
            var a = u(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return o(this, n);
        };
      }
      function f(e, t, n) {
        return (
          (f = s()
            ? Reflect.construct
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var i = new (Function.bind.apply(e, r))();
                return n && a(i, n.prototype), i;
              }),
          f.apply(null, arguments)
        );
      }
      function l(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (l = function (e) {
            if (
              null === e ||
              ((n = e),
              -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" !== typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if ("undefined" !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return f(e, arguments, u(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              a(r, e)
            );
          }),
          l(e)
        );
      }
      var p = function (e) {
          for (
            var t = e,
              n = arguments.length,
              r = new Array(n > 1 ? n - 1 : 0),
              a = 1;
            a < n;
            a++
          )
            r[a - 1] = arguments[a];
          return r.length > 0 && (t += " :: ".concat(JSON.stringify(r))), t;
        },
        v = (function (e) {
          i(a, e);
          var n = h(a);
          function a(e, t) {
            var i;
            r(this, a);
            var u = p(e, t);
            return ((i = n.call(this, u)).name = e), (i.details = t), i;
          }
          return t(a);
        })(l(Error)),
        d = new Set();
      function y(e) {
        d.add(e);
      }
      var m = {
          googleAnalytics: "googleAnalytics",
          precache: "precache-v2",
          prefix: "workbox",
          runtime: "runtime",
          suffix: "undefined" !== typeof registration ? registration.scope : "",
        },
        x = function (e) {
          return [m.prefix, e, m.suffix]
            .filter(function (e) {
              return e && e.length > 0;
            })
            .join("-");
        },
        g = function (e) {
          return e || x(m.precache);
        },
        w = function (e) {
          return e || x(m.runtime);
        };
      function b(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function k(e, t) {
        if (e) {
          if ("string" === typeof e) return b(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? b(e, t)
              : void 0
          );
        }
      }
      function _(e, t) {
        var n =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = k(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          u = !0,
          s = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (u = e.done), e;
          },
          e: function (e) {
            (s = !0), (i = e);
          },
          f: function () {
            try {
              u || null == n.return || n.return();
            } finally {
              if (s) throw i;
            }
          },
        };
      }
      function q(e, t, n, r, a, i, u) {
        try {
          var s = e[i](u),
            c = s.value;
        } catch (o) {
          return void n(o);
        }
        s.done ? t(c) : Promise.resolve(c).then(r, a);
      }
      function R(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var i = e.apply(t, n);
            function u(e) {
              q(i, r, a, u, s, "next", e);
            }
            function s(e) {
              q(i, r, a, u, s, "throw", e);
            }
            u(void 0);
          });
        };
      }
      var E = n(757),
        L = n.n(E);
      function S() {
        return O.apply(this, arguments);
      }
      function O() {
        return (O = R(
          L().mark(function e() {
            var t, n, r;
            return L().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      0, (t = _(d)), (e.prev = 2), t.s();
                    case 4:
                      if ((n = t.n()).done) {
                        e.next = 11;
                        break;
                      }
                      return (r = n.value), (e.next = 8), r();
                    case 8:
                      0;
                    case 9:
                      e.next = 4;
                      break;
                    case 11:
                      e.next = 16;
                      break;
                    case 13:
                      (e.prev = 13), (e.t0 = e.catch(2)), t.e(e.t0);
                    case 16:
                      return (e.prev = 16), t.f(), e.finish(16);
                    case 19:
                      0;
                    case 20:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[2, 13, 16, 19]]
            );
          })
        )).apply(this, arguments);
      }
      var T,
        N = function (e) {
          return new URL(String(e), location.href).href.replace(
            new RegExp("^".concat(location.origin)),
            ""
          );
        },
        U = function (e, t) {
          return e.filter(function (e) {
            return t in e;
          });
        },
        A = (function () {
          var e = R(
            L().mark(function e(t) {
              var n, r, a, i, u, s, c, o;
              return L().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (n = t.request),
                          (r = t.mode),
                          (a = t.plugins),
                          (i = U(void 0 === a ? [] : a, "cacheKeyWillBeUsed")),
                          (u = n),
                          (s = _(i)),
                          (e.prev = 4),
                          s.s();
                      case 6:
                        if ((c = s.n()).done) {
                          e.next = 15;
                          break;
                        }
                        return (
                          (o = c.value),
                          (e.next = 10),
                          o.cacheKeyWillBeUsed.call(o, { mode: r, request: u })
                        );
                      case 10:
                        "string" === typeof (u = e.sent) &&
                          (u = new Request(u));
                      case 13:
                        e.next = 6;
                        break;
                      case 15:
                        e.next = 20;
                        break;
                      case 17:
                        (e.prev = 17), (e.t0 = e.catch(4)), s.e(e.t0);
                      case 20:
                        return (e.prev = 20), s.f(), e.finish(20);
                      case 23:
                        return e.abrupt("return", u);
                      case 24:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[4, 17, 20, 23]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        j = (function () {
          var e = R(
            L().mark(function e(t) {
              var n, r, a, i, u, s, c, o, h, f;
              return L().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (n = t.request),
                          (r = t.response),
                          (a = t.event),
                          (i = t.plugins),
                          (u = r),
                          (s = !1),
                          (c = _(void 0 === i ? [] : i)),
                          (e.prev = 4),
                          c.s();
                      case 6:
                        if ((o = c.n()).done) {
                          e.next = 19;
                          break;
                        }
                        if (!("cacheWillUpdate" in (h = o.value))) {
                          e.next = 17;
                          break;
                        }
                        return (
                          (s = !0),
                          (f = h.cacheWillUpdate),
                          (e.next = 13),
                          f.call(h, { request: n, response: u, event: a })
                        );
                      case 13:
                        if ((u = e.sent)) {
                          e.next = 17;
                          break;
                        }
                        return e.abrupt("break", 19);
                      case 17:
                        e.next = 6;
                        break;
                      case 19:
                        e.next = 24;
                        break;
                      case 21:
                        (e.prev = 21), (e.t0 = e.catch(4)), c.e(e.t0);
                      case 24:
                        return (e.prev = 24), c.f(), e.finish(24);
                      case 27:
                        return (
                          s || (u = u && 200 === u.status ? u : void 0),
                          e.abrupt("return", u || null)
                        );
                      case 29:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[4, 21, 24, 27]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        P = (function () {
          var e = R(
            L().mark(function e(t) {
              var n, r, a, i, u, s, c, o, h, f, l, p, v;
              return L().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = t.cacheName),
                          (r = t.request),
                          (a = t.event),
                          (i = t.matchOptions),
                          (u = t.plugins),
                          (s = void 0 === u ? [] : u),
                          (e.next = 3),
                          self.caches.open(n)
                        );
                      case 3:
                        return (
                          (c = e.sent),
                          (e.next = 6),
                          A({ plugins: s, request: r, mode: "read" })
                        );
                      case 6:
                        return (o = e.sent), (e.next = 9), c.match(o, i);
                      case 9:
                        (h = e.sent), (f = _(s)), (e.prev = 12), f.s();
                      case 14:
                        if ((l = f.n()).done) {
                          e.next = 24;
                          break;
                        }
                        if (!("cachedResponseWillBeUsed" in (p = l.value))) {
                          e.next = 22;
                          break;
                        }
                        return (
                          (v = p.cachedResponseWillBeUsed),
                          (e.next = 20),
                          v.call(p, {
                            cacheName: n,
                            event: a,
                            matchOptions: i,
                            cachedResponse: h,
                            request: o,
                          })
                        );
                      case 20:
                        h = e.sent;
                      case 22:
                        e.next = 14;
                        break;
                      case 24:
                        e.next = 29;
                        break;
                      case 26:
                        (e.prev = 26), (e.t0 = e.catch(12)), f.e(e.t0);
                      case 29:
                        return (e.prev = 29), f.f(), e.finish(29);
                      case 32:
                        return e.abrupt("return", h);
                      case 33:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[12, 26, 29, 32]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        D = (function () {
          var e = R(
            L().mark(function e(t) {
              var n, r, a, i, u, s, c, o, h, f, l, p, d, y, m;
              return L().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (n = t.cacheName),
                          (r = t.request),
                          (a = t.response),
                          (i = t.event),
                          (u = t.plugins),
                          (s = void 0 === u ? [] : u),
                          (c = t.matchOptions),
                          (e.next = 4);
                        break;
                      case 4:
                        return (
                          (e.next = 6),
                          A({ plugins: s, request: r, mode: "write" })
                        );
                      case 6:
                        if (((o = e.sent), a)) {
                          e.next = 10;
                          break;
                        }
                        throw new v("cache-put-with-no-response", {
                          url: N(o.url),
                        });
                      case 10:
                        return (
                          (e.next = 12),
                          j({ event: i, plugins: s, response: a, request: o })
                        );
                      case 12:
                        if ((h = e.sent)) {
                          e.next = 16;
                          break;
                        }
                        return e.abrupt("return");
                      case 16:
                        return (e.next = 18), self.caches.open(n);
                      case 18:
                        if (
                          ((f = e.sent),
                          !((l = U(s, "cacheDidUpdate")).length > 0))
                        ) {
                          e.next = 26;
                          break;
                        }
                        return (
                          (e.next = 23),
                          P({ cacheName: n, matchOptions: c, request: o })
                        );
                      case 23:
                        (e.t0 = e.sent), (e.next = 27);
                        break;
                      case 26:
                        e.t0 = null;
                      case 27:
                        return (
                          (p = e.t0), (e.prev = 29), (e.next = 32), f.put(o, h)
                        );
                      case 32:
                        e.next = 40;
                        break;
                      case 34:
                        if (
                          ((e.prev = 34),
                          (e.t1 = e.catch(29)),
                          "QuotaExceededError" !== e.t1.name)
                        ) {
                          e.next = 39;
                          break;
                        }
                        return (e.next = 39), S();
                      case 39:
                        throw e.t1;
                      case 40:
                        (d = _(l)), (e.prev = 41), d.s();
                      case 43:
                        if ((y = d.n()).done) {
                          e.next = 49;
                          break;
                        }
                        return (
                          (m = y.value),
                          (e.next = 47),
                          m.cacheDidUpdate.call(m, {
                            cacheName: n,
                            event: i,
                            oldResponse: p,
                            newResponse: h,
                            request: o,
                          })
                        );
                      case 47:
                        e.next = 43;
                        break;
                      case 49:
                        e.next = 54;
                        break;
                      case 51:
                        (e.prev = 51), (e.t2 = e.catch(41)), d.e(e.t2);
                      case 54:
                        return (e.prev = 54), d.f(), e.finish(54);
                      case 57:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [
                  [29, 34],
                  [41, 51, 54, 57],
                ]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        I = { put: D, match: P };
      function K() {
        if (void 0 === T) {
          var e = new Response("");
          if ("body" in e)
            try {
              new Response(e.body), (T = !0);
            } catch (t) {
              T = !1;
            }
          T = !1;
        }
        return T;
      }
      function M(e) {
        e.then(function () {});
      }
      function C(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                i = [],
                u = !0,
                s = !1;
              try {
                for (
                  n = n.call(e);
                  !(u = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  u = !0
                );
              } catch (c) {
                (s = !0), (a = c);
              } finally {
                try {
                  u || null == n.return || n.return();
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          k(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var F = (function () {
        function e(t, n) {
          var a = this,
            i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            u = i.onupgradeneeded,
            s = i.onversionchange;
          r(this, e),
            (this._db = null),
            (this._name = t),
            (this._version = n),
            (this._onupgradeneeded = u),
            (this._onversionchange =
              s ||
              function () {
                return a.close();
              });
        }
        return (
          t(e, [
            {
              key: "db",
              get: function () {
                return this._db;
              },
            },
            {
              key: "open",
              value: (function () {
                var e = R(
                  L().mark(function e() {
                    var t = this;
                    return L().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!this._db) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return");
                            case 2:
                              return (
                                (e.next = 4),
                                new Promise(function (e, n) {
                                  var r = !1;
                                  setTimeout(function () {
                                    (r = !0),
                                      n(
                                        new Error(
                                          "The open request was blocked and timed out"
                                        )
                                      );
                                  }, t.OPEN_TIMEOUT);
                                  var a = indexedDB.open(t._name, t._version);
                                  (a.onerror = function () {
                                    return n(a.error);
                                  }),
                                    (a.onupgradeneeded = function (e) {
                                      r
                                        ? (a.transaction.abort(),
                                          a.result.close())
                                        : "function" ===
                                            typeof t._onupgradeneeded &&
                                          t._onupgradeneeded(e);
                                    }),
                                    (a.onsuccess = function () {
                                      var n = a.result;
                                      r
                                        ? n.close()
                                        : ((n.onversionchange =
                                            t._onversionchange.bind(t)),
                                          e(n));
                                    });
                                })
                              );
                            case 4:
                              return (
                                (this._db = e.sent), e.abrupt("return", this)
                              );
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getKey",
              value: (function () {
                var e = R(
                  L().mark(function e(t, n) {
                    return L().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.getAllKeys(t, n, 1);
                            case 2:
                              return e.abrupt("return", e.sent[0]);
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getAll",
              value: (function () {
                var e = R(
                  L().mark(function e(t, n, r) {
                    return L().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.getAllMatching(t, { query: n, count: r })
                              );
                            case 2:
                              return e.abrupt("return", e.sent);
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, n, r) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getAllKeys",
              value: (function () {
                var e = R(
                  L().mark(function e(t, n, r) {
                    var a;
                    return L().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.getAllMatching(t, {
                                  query: n,
                                  count: r,
                                  includeKeys: !0,
                                })
                              );
                            case 2:
                              return (
                                (a = e.sent),
                                e.abrupt(
                                  "return",
                                  a.map(function (e) {
                                    return e.key;
                                  })
                                )
                              );
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, n, r) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getAllMatching",
              value: (function () {
                var e = R(
                  L().mark(function e(t) {
                    var n,
                      r,
                      a,
                      i,
                      u,
                      s,
                      c,
                      o,
                      h,
                      f = arguments;
                    return L().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n =
                                  f.length > 1 && void 0 !== f[1] ? f[1] : {}),
                                (r = n.index),
                                (a = n.query),
                                (i = void 0 === a ? null : a),
                                (u = n.direction),
                                (s = void 0 === u ? "next" : u),
                                (c = n.count),
                                (o = n.includeKeys),
                                (h = void 0 !== o && o),
                                (e.next = 3),
                                this.transaction(
                                  [t],
                                  "readonly",
                                  function (e, n) {
                                    var a = e.objectStore(t),
                                      u = r ? a.index(r) : a,
                                      o = [],
                                      f = u.openCursor(i, s);
                                    f.onsuccess = function () {
                                      var e = f.result;
                                      e
                                        ? (o.push(h ? e : e.value),
                                          c && o.length >= c
                                            ? n(o)
                                            : e.continue())
                                        : n(o);
                                    };
                                  }
                                )
                              );
                            case 3:
                              return e.abrupt("return", e.sent);
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "transaction",
              value: (function () {
                var e = R(
                  L().mark(function e(t, n, r) {
                    var a = this;
                    return L().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.open();
                            case 2:
                              return (
                                (e.next = 4),
                                new Promise(function (e, i) {
                                  var u = a._db.transaction(t, n);
                                  (u.onabort = function () {
                                    return i(u.error);
                                  }),
                                    (u.oncomplete = function () {
                                      return e();
                                    }),
                                    r(u, function (t) {
                                      return e(t);
                                    });
                                })
                              );
                            case 4:
                              return e.abrupt("return", e.sent);
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, n, r) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "_call",
              value: (function () {
                var e = R(
                  L().mark(function e(t, n, r) {
                    var a,
                      i,
                      u,
                      s,
                      c = arguments;
                    return L().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              for (
                                a = c.length,
                                  i = new Array(a > 3 ? a - 3 : 0),
                                  u = 3;
                                u < a;
                                u++
                              )
                                i[u - 3] = c[u];
                              return (
                                (s = function (e, r) {
                                  var a = e.objectStore(n),
                                    u = a[t].apply(a, i);
                                  u.onsuccess = function () {
                                    return r(u.result);
                                  };
                                }),
                                (e.next = 4),
                                this.transaction([n], r, s)
                              );
                            case 4:
                              return e.abrupt("return", e.sent);
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, n, r) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "close",
              value: function () {
                this._db && (this._db.close(), (this._db = null));
              },
            },
          ]),
          e
        );
      })();
      F.prototype.OPEN_TIMEOUT = 2e3;
      for (
        var W = function () {
            var e,
              t = C(H[B], 2),
              n = t[0],
              r = _(t[1]);
            try {
              var a = function () {
                var t = e.value;
                (t in IDBObjectStore.prototype) &&
                  (F.prototype[t] = (function () {
                    var e = R(
                      L().mark(function e(r) {
                        var a,
                          i,
                          u,
                          s = arguments;
                        return L().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    a = s.length,
                                      i = new Array(a > 1 ? a - 1 : 0),
                                      u = 1;
                                    u < a;
                                    u++
                                  )
                                    i[u - 1] = s[u];
                                  return (
                                    (e.next = 3),
                                    this._call.apply(this, [t, r, n].concat(i))
                                  );
                                case 3:
                                  return e.abrupt("return", e.sent);
                                case 4:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })());
              };
              for (r.s(); !(e = r.n()).done; ) a();
            } catch (i) {
              r.e(i);
            } finally {
              r.f();
            }
          },
          B = 0,
          H = Object.entries({
            readonly: ["get", "count", "getKey", "getAll", "getAllKeys"],
            readwrite: ["add", "put", "clear", "delete"],
          });
        B < H.length;
        B++
      )
        W();
      var G = (function () {
          var e = R(
            L().mark(function e(t) {
              return L().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        new Promise(function (e, n) {
                          var r = indexedDB.deleteDatabase(t);
                          (r.onerror = function () {
                            n(r.error);
                          }),
                            (r.onblocked = function () {
                              n(new Error("Delete blocked"));
                            }),
                            (r.onsuccess = function () {
                              e();
                            });
                        })
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        Q = (function () {
          var e = R(
            L().mark(function e(t) {
              var n, r, a, i, u, s, c, o, h, f, l, p, d, y, m, x, g, w, b, k, q;
              return L().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((n = t.request),
                          (r = t.fetchOptions),
                          (a = t.event),
                          (i = t.plugins),
                          (u = void 0 === i ? [] : i),
                          "string" === typeof n && (n = new Request(n)),
                          !(a instanceof FetchEvent && a.preloadResponse))
                        ) {
                          e.next = 9;
                          break;
                        }
                        return (e.next = 5), a.preloadResponse;
                      case 5:
                        if (!(s = e.sent)) {
                          e.next = 9;
                          break;
                        }
                        return e.abrupt("return", s);
                      case 9:
                        0,
                          (c = U(u, "fetchDidFail")),
                          (o = c.length > 0 ? n.clone() : null),
                          (e.prev = 12),
                          (h = _(u)),
                          (e.prev = 14),
                          h.s();
                      case 16:
                        if ((f = h.n()).done) {
                          e.next = 27;
                          break;
                        }
                        if (!("requestWillFetch" in (l = f.value))) {
                          e.next = 25;
                          break;
                        }
                        return (
                          (p = l.requestWillFetch),
                          (d = n.clone()),
                          (e.next = 23),
                          p.call(l, { request: d, event: a })
                        );
                      case 23:
                        n = e.sent;
                      case 25:
                        e.next = 16;
                        break;
                      case 27:
                        e.next = 32;
                        break;
                      case 29:
                        (e.prev = 29), (e.t0 = e.catch(14)), h.e(e.t0);
                      case 32:
                        return (e.prev = 32), h.f(), e.finish(32);
                      case 35:
                        e.next = 40;
                        break;
                      case 37:
                        throw (
                          ((e.prev = 37),
                          (e.t1 = e.catch(12)),
                          new v("plugin-error-request-will-fetch", {
                            thrownError: e.t1,
                          }))
                        );
                      case 40:
                        if (
                          ((y = n.clone()),
                          (e.prev = 41),
                          "navigate" !== n.mode)
                        ) {
                          e.next = 48;
                          break;
                        }
                        return (e.next = 45), fetch(n);
                      case 45:
                        (m = e.sent), (e.next = 51);
                        break;
                      case 48:
                        return (e.next = 50), fetch(n, r);
                      case 50:
                        m = e.sent;
                      case 51:
                        0, (x = _(u)), (e.prev = 53), x.s();
                      case 55:
                        if ((g = x.n()).done) {
                          e.next = 64;
                          break;
                        }
                        if (!("fetchDidSucceed" in (w = g.value))) {
                          e.next = 62;
                          break;
                        }
                        return (
                          (e.next = 60),
                          w.fetchDidSucceed.call(w, {
                            event: a,
                            request: y,
                            response: m,
                          })
                        );
                      case 60:
                        m = e.sent;
                      case 62:
                        e.next = 55;
                        break;
                      case 64:
                        e.next = 69;
                        break;
                      case 66:
                        (e.prev = 66), (e.t2 = e.catch(53)), x.e(e.t2);
                      case 69:
                        return (e.prev = 69), x.f(), e.finish(69);
                      case 72:
                        return e.abrupt("return", m);
                      case 75:
                        (e.prev = 75),
                          (e.t3 = e.catch(41)),
                          (b = _(c)),
                          (e.prev = 79),
                          b.s();
                      case 81:
                        if ((k = b.n()).done) {
                          e.next = 87;
                          break;
                        }
                        return (
                          (q = k.value),
                          (e.next = 85),
                          q.fetchDidFail.call(q, {
                            error: e.t3,
                            event: a,
                            originalRequest: o.clone(),
                            request: y.clone(),
                          })
                        );
                      case 85:
                        e.next = 81;
                        break;
                      case 87:
                        e.next = 92;
                        break;
                      case 89:
                        (e.prev = 89), (e.t4 = e.catch(79)), b.e(e.t4);
                      case 92:
                        return (e.prev = 92), b.f(), e.finish(92);
                      case 95:
                        throw e.t3;
                      case 96:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [
                  [12, 37],
                  [14, 29, 32, 35],
                  [41, 75],
                  [53, 66, 69, 72],
                  [79, 89, 92, 95],
                ]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        V = { fetch: Q };
      function Y(e, t) {
        return $.apply(this, arguments);
      }
      function $() {
        return ($ = R(
          L().mark(function e(t, n) {
            var r, a, i, u;
            return L().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((r = t.clone()),
                      (a = {
                        headers: new Headers(r.headers),
                        status: r.status,
                        statusText: r.statusText,
                      }),
                      (i = n ? n(a) : a),
                      !K())
                    ) {
                      e.next = 7;
                      break;
                    }
                    (e.t0 = r.body), (e.next = 10);
                    break;
                  case 7:
                    return (e.next = 9), r.blob();
                  case 9:
                    e.t0 = e.sent;
                  case 10:
                    return (u = e.t0), e.abrupt("return", new Response(u, i));
                  case 12:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      n(190);
      var J = "cache-entries",
        z = function (e) {
          var t = new URL(e, location.href);
          return (t.hash = ""), t.href;
        },
        X = (function () {
          function e(t) {
            var n = this;
            r(this, e),
              (this._cacheName = t),
              (this._db = new F("workbox-expiration", 1, {
                onupgradeneeded: function (e) {
                  return n._handleUpgrade(e);
                },
              }));
          }
          return (
            t(e, [
              {
                key: "_handleUpgrade",
                value: function (e) {
                  var t = e.target.result.createObjectStore(J, {
                    keyPath: "id",
                  });
                  t.createIndex("cacheName", "cacheName", { unique: !1 }),
                    t.createIndex("timestamp", "timestamp", { unique: !1 }),
                    G(this._cacheName);
                },
              },
              {
                key: "setTimestamp",
                value: (function () {
                  var e = R(
                    L().mark(function e(t, n) {
                      var r;
                      return L().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = z(t)),
                                  (r = {
                                    url: t,
                                    timestamp: n,
                                    cacheName: this._cacheName,
                                    id: this._getId(t),
                                  }),
                                  (e.next = 4),
                                  this._db.put(J, r)
                                );
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getTimestamp",
                value: (function () {
                  var e = R(
                    L().mark(function e(t) {
                      var n;
                      return L().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2), this._db.get(J, this._getId(t))
                                );
                              case 2:
                                return (
                                  (n = e.sent), e.abrupt("return", n.timestamp)
                                );
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "expireEntries",
                value: (function () {
                  var e = R(
                    L().mark(function e(t, n) {
                      var r,
                        a,
                        i,
                        u,
                        s,
                        c = this;
                      return L().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this._db.transaction(
                                    J,
                                    "readwrite",
                                    function (e, r) {
                                      var a = e
                                          .objectStore(J)
                                          .index("timestamp")
                                          .openCursor(null, "prev"),
                                        i = [],
                                        u = 0;
                                      a.onsuccess = function () {
                                        var e = a.result;
                                        if (e) {
                                          var s = e.value;
                                          s.cacheName === c._cacheName &&
                                            ((t && s.timestamp < t) ||
                                            (n && u >= n)
                                              ? i.push(e.value)
                                              : u++),
                                            e.continue();
                                        } else r(i);
                                      };
                                    }
                                  )
                                );
                              case 2:
                                (r = e.sent),
                                  (a = []),
                                  (i = _(r)),
                                  (e.prev = 5),
                                  i.s();
                              case 7:
                                if ((u = i.n()).done) {
                                  e.next = 14;
                                  break;
                                }
                                return (
                                  (s = u.value),
                                  (e.next = 11),
                                  this._db.delete(J, s.id)
                                );
                              case 11:
                                a.push(s.url);
                              case 12:
                                e.next = 7;
                                break;
                              case 14:
                                e.next = 19;
                                break;
                              case 16:
                                (e.prev = 16), (e.t0 = e.catch(5)), i.e(e.t0);
                              case 19:
                                return (e.prev = 19), i.f(), e.finish(19);
                              case 22:
                                return e.abrupt("return", a);
                              case 23:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[5, 16, 19, 22]]
                      );
                    })
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_getId",
                value: function (e) {
                  return this._cacheName + "|" + z(e);
                },
              },
            ]),
            e
          );
        })(),
        Z = (function () {
          function e(t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            r(this, e),
              (this._isRunning = !1),
              (this._rerunRequested = !1),
              (this._maxEntries = n.maxEntries),
              (this._maxAgeSeconds = n.maxAgeSeconds),
              (this._cacheName = t),
              (this._timestampModel = new X(t));
          }
          return (
            t(e, [
              {
                key: "expireEntries",
                value: (function () {
                  var e = R(
                    L().mark(function e() {
                      var t, n, r, a, i, u;
                      return L().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!this._isRunning) {
                                  e.next = 3;
                                  break;
                                }
                                return (
                                  (this._rerunRequested = !0),
                                  e.abrupt("return")
                                );
                              case 3:
                                return (
                                  (this._isRunning = !0),
                                  (t = this._maxAgeSeconds
                                    ? Date.now() - 1e3 * this._maxAgeSeconds
                                    : 0),
                                  (e.next = 7),
                                  this._timestampModel.expireEntries(
                                    t,
                                    this._maxEntries
                                  )
                                );
                              case 7:
                                return (
                                  (n = e.sent),
                                  (e.next = 10),
                                  self.caches.open(this._cacheName)
                                );
                              case 10:
                                (r = e.sent), (a = _(n)), (e.prev = 12), a.s();
                              case 14:
                                if ((i = a.n()).done) {
                                  e.next = 20;
                                  break;
                                }
                                return (
                                  (u = i.value), (e.next = 18), r.delete(u)
                                );
                              case 18:
                                e.next = 14;
                                break;
                              case 20:
                                e.next = 25;
                                break;
                              case 22:
                                (e.prev = 22), (e.t0 = e.catch(12)), a.e(e.t0);
                              case 25:
                                return (e.prev = 25), a.f(), e.finish(25);
                              case 28:
                                0,
                                  (this._isRunning = !1),
                                  this._rerunRequested &&
                                    ((this._rerunRequested = !1),
                                    M(this.expireEntries()));
                              case 31:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[12, 22, 25, 28]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "updateTimestamp",
                value: (function () {
                  var e = R(
                    L().mark(function e(t) {
                      return L().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 3),
                                  this._timestampModel.setTimestamp(
                                    t,
                                    Date.now()
                                  )
                                );
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "isURLExpired",
                value: (function () {
                  var e = R(
                    L().mark(function e(t) {
                      var n, r;
                      return L().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this._maxAgeSeconds) {
                                  e.next = 6;
                                  break;
                                }
                                e.next = 3;
                                break;
                              case 3:
                                return e.abrupt("return", !1);
                              case 6:
                                return (
                                  (e.next = 8),
                                  this._timestampModel.getTimestamp(t)
                                );
                              case 8:
                                return (
                                  (n = e.sent),
                                  (r = Date.now() - 1e3 * this._maxAgeSeconds),
                                  e.abrupt("return", n < r)
                                );
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "delete",
                value: (function () {
                  var e = R(
                    L().mark(function e() {
                      return L().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (this._rerunRequested = !1),
                                  (e.next = 3),
                                  this._timestampModel.expireEntries(1 / 0)
                                );
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]),
            e
          );
        })(),
        ee = (function () {
          function e() {
            var t = this,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            r(this, e),
              (this.cachedResponseWillBeUsed = (function () {
                var e = R(
                  L().mark(function e(n) {
                    var r, a, i, u, s, c, o;
                    return L().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((r = n.event),
                              (a = n.request),
                              (i = n.cacheName),
                              (u = n.cachedResponse))
                            ) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return", null);
                          case 3:
                            if (
                              ((s = t._isResponseDateFresh(u)),
                              M((c = t._getCacheExpiration(i)).expireEntries()),
                              (o = c.updateTimestamp(a.url)),
                              r)
                            )
                              try {
                                r.waitUntil(o);
                              } catch (h) {
                                0;
                              }
                            return e.abrupt("return", s ? u : null);
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (this.cacheDidUpdate = (function () {
                var e = R(
                  L().mark(function e(n) {
                    var r, a, i;
                    return L().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (r = n.cacheName),
                              (a = n.request),
                              (i = t._getCacheExpiration(r)),
                              (e.next = 5),
                              i.updateTimestamp(a.url)
                            );
                          case 5:
                            return (e.next = 7), i.expireEntries();
                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (this._config = n),
              (this._maxAgeSeconds = n.maxAgeSeconds),
              (this._cacheExpirations = new Map()),
              n.purgeOnQuotaError &&
                y(function () {
                  return t.deleteCacheAndMetadata();
                });
          }
          return (
            t(e, [
              {
                key: "_getCacheExpiration",
                value: function (e) {
                  if (e === w()) throw new v("expire-custom-caches-only");
                  var t = this._cacheExpirations.get(e);
                  return (
                    t ||
                      ((t = new Z(e, this._config)),
                      this._cacheExpirations.set(e, t)),
                    t
                  );
                },
              },
              {
                key: "_isResponseDateFresh",
                value: function (e) {
                  if (!this._maxAgeSeconds) return !0;
                  var t = this._getDateHeaderTimestamp(e);
                  return (
                    null === t || t >= Date.now() - 1e3 * this._maxAgeSeconds
                  );
                },
              },
              {
                key: "_getDateHeaderTimestamp",
                value: function (e) {
                  if (!e.headers.has("date")) return null;
                  var t = e.headers.get("date"),
                    n = new Date(t).getTime();
                  return isNaN(n) ? null : n;
                },
              },
              {
                key: "deleteCacheAndMetadata",
                value: (function () {
                  var e = R(
                    L().mark(function e() {
                      var t, n, r, a, i;
                      return L().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (t = _(this._cacheExpirations)),
                                  (e.prev = 1),
                                  t.s();
                              case 3:
                                if ((n = t.n()).done) {
                                  e.next = 11;
                                  break;
                                }
                                return (
                                  (r = C(n.value, 2)),
                                  (a = r[0]),
                                  (i = r[1]),
                                  (e.next = 7),
                                  self.caches.delete(a)
                                );
                              case 7:
                                return (e.next = 9), i.delete();
                              case 9:
                                e.next = 3;
                                break;
                              case 11:
                                e.next = 16;
                                break;
                              case 13:
                                (e.prev = 13), (e.t0 = e.catch(1)), t.e(e.t0);
                              case 16:
                                return (e.prev = 16), t.f(), e.finish(16);
                              case 19:
                                this._cacheExpirations = new Map();
                              case 20:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, 13, 16, 19]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]),
            e
          );
        })();
      function te(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return b(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          k(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      n(437);
      var ne = [],
        re = function () {
          return ne;
        };
      function ae(e) {
        if (!e) throw new v("add-to-cache-list-unexpected-type", { entry: e });
        if ("string" === typeof e) {
          var t = new URL(e, location.href);
          return { cacheKey: t.href, url: t.href };
        }
        var n = e.revision,
          r = e.url;
        if (!r) throw new v("add-to-cache-list-unexpected-type", { entry: e });
        if (!n) {
          var a = new URL(r, location.href);
          return { cacheKey: a.href, url: a.href };
        }
        var i = new URL(r, location.href),
          u = new URL(r, location.href);
        return (
          i.searchParams.set("__WB_REVISION__", n),
          { cacheKey: i.href, url: u.href }
        );
      }
      var ie,
        ue = (function () {
          function e(t) {
            r(this, e),
              (this._cacheName = g(t)),
              (this._urlsToCacheKeys = new Map()),
              (this._urlsToCacheModes = new Map()),
              (this._cacheKeysToIntegrities = new Map());
          }
          return (
            t(e, [
              {
                key: "addToCacheList",
                value: function (e) {
                  var t,
                    n = [],
                    r = _(e);
                  try {
                    for (r.s(); !(t = r.n()).done; ) {
                      var a = t.value;
                      "string" === typeof a
                        ? n.push(a)
                        : a && void 0 === a.revision && n.push(a.url);
                      var i = ae(a),
                        u = i.cacheKey,
                        s = i.url,
                        c =
                          "string" !== typeof a && a.revision
                            ? "reload"
                            : "default";
                      if (
                        this._urlsToCacheKeys.has(s) &&
                        this._urlsToCacheKeys.get(s) !== u
                      )
                        throw new v("add-to-cache-list-conflicting-entries", {
                          firstEntry: this._urlsToCacheKeys.get(s),
                          secondEntry: u,
                        });
                      if ("string" !== typeof a && a.integrity) {
                        if (
                          this._cacheKeysToIntegrities.has(u) &&
                          this._cacheKeysToIntegrities.get(u) !== a.integrity
                        )
                          throw new v(
                            "add-to-cache-list-conflicting-integrities",
                            { url: s }
                          );
                        this._cacheKeysToIntegrities.set(u, a.integrity);
                      }
                      if (
                        (this._urlsToCacheKeys.set(s, u),
                        this._urlsToCacheModes.set(s, c),
                        n.length > 0)
                      ) {
                        var o =
                          "Workbox is precaching URLs without revision " +
                          "info: ".concat(
                            n.join(", "),
                            "\nThis is generally NOT safe. "
                          ) +
                          "Learn more at https://bit.ly/wb-precache";
                        console.warn(o);
                      }
                    }
                  } catch (h) {
                    r.e(h);
                  } finally {
                    r.f();
                  }
                },
              },
              {
                key: "install",
                value: (function () {
                  var e = R(
                    L().mark(function e() {
                      var t,
                        n,
                        r,
                        a,
                        i,
                        u,
                        s,
                        c,
                        o,
                        h,
                        f,
                        l,
                        p,
                        v,
                        d,
                        y = this,
                        m = arguments;
                      return L().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t =
                                    m.length > 0 && void 0 !== m[0]
                                      ? m[0]
                                      : {}),
                                  (n = t.event),
                                  (r = t.plugins),
                                  (a = []),
                                  (i = []),
                                  (e.next = 6),
                                  self.caches.open(this._cacheName)
                                );
                              case 6:
                                return (u = e.sent), (e.next = 9), u.keys();
                              case 9:
                                (s = e.sent),
                                  (c = new Set(
                                    s.map(function (e) {
                                      return e.url;
                                    })
                                  )),
                                  (o = _(this._urlsToCacheKeys));
                                try {
                                  for (o.s(); !(h = o.n()).done; )
                                    (f = C(h.value, 2)),
                                      (l = f[0]),
                                      (p = f[1]),
                                      c.has(p)
                                        ? i.push(l)
                                        : a.push({ cacheKey: p, url: l });
                                } catch (x) {
                                  o.e(x);
                                } finally {
                                  o.f();
                                }
                                return (
                                  (v = a.map(function (e) {
                                    var t = e.cacheKey,
                                      a = e.url,
                                      i = y._cacheKeysToIntegrities.get(t),
                                      u = y._urlsToCacheModes.get(a);
                                    return y._addURLToCache({
                                      cacheKey: t,
                                      cacheMode: u,
                                      event: n,
                                      integrity: i,
                                      plugins: r,
                                      url: a,
                                    });
                                  })),
                                  (e.next = 16),
                                  Promise.all(v)
                                );
                              case 16:
                                return (
                                  (d = a.map(function (e) {
                                    return e.url;
                                  })),
                                  e.abrupt("return", {
                                    updatedURLs: d,
                                    notUpdatedURLs: i,
                                  })
                                );
                              case 19:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "activate",
                value: (function () {
                  var e = R(
                    L().mark(function e() {
                      var t, n, r, a, i, u, s;
                      return L().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  self.caches.open(this._cacheName)
                                );
                              case 2:
                                return (t = e.sent), (e.next = 5), t.keys();
                              case 5:
                                (n = e.sent),
                                  (r = new Set(this._urlsToCacheKeys.values())),
                                  (a = []),
                                  (i = _(n)),
                                  (e.prev = 9),
                                  i.s();
                              case 11:
                                if ((u = i.n()).done) {
                                  e.next = 19;
                                  break;
                                }
                                if (((s = u.value), r.has(s.url))) {
                                  e.next = 17;
                                  break;
                                }
                                return (e.next = 16), t.delete(s);
                              case 16:
                                a.push(s.url);
                              case 17:
                                e.next = 11;
                                break;
                              case 19:
                                e.next = 24;
                                break;
                              case 21:
                                (e.prev = 21), (e.t0 = e.catch(9)), i.e(e.t0);
                              case 24:
                                return (e.prev = 24), i.f(), e.finish(24);
                              case 27:
                                return e.abrupt("return", { deletedURLs: a });
                              case 29:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[9, 21, 24, 27]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_addURLToCache",
                value: (function () {
                  var e = R(
                    L().mark(function e(t) {
                      var n, r, a, i, u, s, c, o, h, f, l, p;
                      return L().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = t.cacheKey),
                                  (r = t.url),
                                  (a = t.cacheMode),
                                  (i = t.event),
                                  (u = t.plugins),
                                  (s = t.integrity),
                                  (c = new Request(r, {
                                    integrity: s,
                                    cache: a,
                                    credentials: "same-origin",
                                  })),
                                  (e.next = 4),
                                  V.fetch({ event: i, plugins: u, request: c })
                                );
                              case 4:
                                (o = e.sent), (f = _(u || []));
                                try {
                                  for (f.s(); !(l = f.n()).done; )
                                    "cacheWillUpdate" in (p = l.value) &&
                                      (h = p);
                                } catch (d) {
                                  f.e(d);
                                } finally {
                                  f.f();
                                }
                                if (!h) {
                                  e.next = 13;
                                  break;
                                }
                                return (
                                  (e.next = 10),
                                  h.cacheWillUpdate({
                                    event: i,
                                    request: c,
                                    response: o,
                                  })
                                );
                              case 10:
                                (e.t0 = e.sent), (e.next = 14);
                                break;
                              case 13:
                                e.t0 = o.status < 400;
                              case 14:
                                if (e.t0) {
                                  e.next = 17;
                                  break;
                                }
                                throw new v("bad-precaching-response", {
                                  url: r,
                                  status: o.status,
                                });
                              case 17:
                                if (!o.redirected) {
                                  e.next = 21;
                                  break;
                                }
                                return (e.next = 20), Y(o);
                              case 20:
                                o = e.sent;
                              case 21:
                                return (
                                  (e.next = 23),
                                  I.put({
                                    event: i,
                                    plugins: u,
                                    response: o,
                                    request: n === r ? c : new Request(n),
                                    cacheName: this._cacheName,
                                    matchOptions: { ignoreSearch: !0 },
                                  })
                                );
                              case 23:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getURLsToCacheKeys",
                value: function () {
                  return this._urlsToCacheKeys;
                },
              },
              {
                key: "getCachedURLs",
                value: function () {
                  return te(this._urlsToCacheKeys.keys());
                },
              },
              {
                key: "getCacheKeyForURL",
                value: function (e) {
                  var t = new URL(e, location.href);
                  return this._urlsToCacheKeys.get(t.href);
                },
              },
              {
                key: "matchPrecache",
                value: (function () {
                  var e = R(
                    L().mark(function e(t) {
                      var n, r, a;
                      return L().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((n = t instanceof Request ? t.url : t),
                                  !(r = this.getCacheKeyForURL(n)))
                                ) {
                                  e.next = 7;
                                  break;
                                }
                                return (
                                  (e.next = 5),
                                  self.caches.open(this._cacheName)
                                );
                              case 5:
                                return (
                                  (a = e.sent), e.abrupt("return", a.match(r))
                                );
                              case 7:
                                return e.abrupt("return", void 0);
                              case 8:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "createHandler",
                value: function () {
                  var e = this,
                    t =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0];
                  return (function () {
                    var n = R(
                      L().mark(function n(r) {
                        var a, i;
                        return L().wrap(
                          function (n) {
                            for (;;)
                              switch ((n.prev = n.next)) {
                                case 0:
                                  return (
                                    (a = r.request),
                                    (n.prev = 1),
                                    (n.next = 4),
                                    e.matchPrecache(a)
                                  );
                                case 4:
                                  if (!(i = n.sent)) {
                                    n.next = 7;
                                    break;
                                  }
                                  return n.abrupt("return", i);
                                case 7:
                                  throw new v("missing-precache-entry", {
                                    cacheName: e._cacheName,
                                    url: a instanceof Request ? a.url : a,
                                  });
                                case 10:
                                  if (
                                    ((n.prev = 10), (n.t0 = n.catch(1)), !t)
                                  ) {
                                    n.next = 15;
                                    break;
                                  }
                                  return n.abrupt("return", fetch(a));
                                case 15:
                                  throw n.t0;
                                case 16:
                                case "end":
                                  return n.stop();
                              }
                          },
                          n,
                          null,
                          [[1, 10]]
                        );
                      })
                    );
                    return function (e) {
                      return n.apply(this, arguments);
                    };
                  })();
                },
              },
              {
                key: "createHandlerBoundToURL",
                value: function (e) {
                  var t =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1],
                    n = this.getCacheKeyForURL(e);
                  if (!n) throw new v("non-precached-url", { url: e });
                  var r = this.createHandler(t),
                    a = new Request(e);
                  return function () {
                    return r({ request: a });
                  };
                },
              },
            ]),
            e
          );
        })(),
        se = function () {
          return ie || (ie = new ue()), ie;
        };
      function ce(e) {
        for (
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            n = function () {
              var n = a[r];
              t.some(function (e) {
                return e.test(n);
              }) && e.searchParams.delete(n);
            },
            r = 0,
            a = te(e.searchParams.keys());
          r < a.length;
          r++
        )
          n();
        return e;
      }
      var oe = L().mark(he);
      function he(e) {
        var t,
          n,
          r,
          a,
          i,
          u,
          s,
          c,
          o,
          h,
          f,
          l,
          p,
          v = arguments;
        return L().wrap(
          function (d) {
            for (;;)
              switch ((d.prev = d.next)) {
                case 0:
                  return (
                    (t = v.length > 1 && void 0 !== v[1] ? v[1] : {}),
                    (n = t.ignoreURLParametersMatching),
                    (r = t.directoryIndex),
                    (a = t.cleanURLs),
                    (i = t.urlManipulation),
                    ((u = new URL(e, location.href)).hash = ""),
                    (d.next = 5),
                    u.href
                  );
                case 5:
                  return (s = ce(u, n)), (d.next = 8), s.href;
                case 8:
                  if (!r || !s.pathname.endsWith("/")) {
                    d.next = 13;
                    break;
                  }
                  return (
                    ((c = new URL(s.href)).pathname += r), (d.next = 13), c.href
                  );
                case 13:
                  if (!a) {
                    d.next = 18;
                    break;
                  }
                  return (
                    ((o = new URL(s.href)).pathname += ".html"),
                    (d.next = 18),
                    o.href
                  );
                case 18:
                  if (!i) {
                    d.next = 37;
                    break;
                  }
                  (h = i({ url: u })), (f = _(h)), (d.prev = 21), f.s();
                case 23:
                  if ((l = f.n()).done) {
                    d.next = 29;
                    break;
                  }
                  return (p = l.value), (d.next = 27), p.href;
                case 27:
                  d.next = 23;
                  break;
                case 29:
                  d.next = 34;
                  break;
                case 31:
                  (d.prev = 31), (d.t0 = d.catch(21)), f.e(d.t0);
                case 34:
                  return (d.prev = 34), f.f(), d.finish(34);
                case 37:
                case "end":
                  return d.stop();
              }
          },
          oe,
          null,
          [[21, 31, 34, 37]]
        );
      }
      var fe = function (e, t) {
          var n,
            r = se().getURLsToCacheKeys(),
            a = _(he(e, t));
          try {
            for (a.s(); !(n = a.n()).done; ) {
              var i = n.value,
                u = r.get(i);
              if (u) return u;
            }
          } catch (s) {
            a.e(s);
          } finally {
            a.f();
          }
        },
        le = !1;
      function pe(e) {
        le ||
          (!(function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = e.ignoreURLParametersMatching,
              n = void 0 === t ? [/^utm_/] : t,
              r = e.directoryIndex,
              a = void 0 === r ? "index.html" : r,
              i = e.cleanURLs,
              u = void 0 === i || i,
              s = e.urlManipulation,
              c = g();
            self.addEventListener("fetch", function (e) {
              var t = fe(e.request.url, {
                cleanURLs: u,
                directoryIndex: a,
                ignoreURLParametersMatching: n,
                urlManipulation: s,
              });
              if (t) {
                var r = self.caches
                  .open(c)
                  .then(function (e) {
                    return e.match(t);
                  })
                  .then(function (e) {
                    return e || fetch(t);
                  });
                e.respondWith(r);
              }
            });
          })(e),
          (le = !0));
      }
      var ve = function (e) {
          var t = se(),
            n = re();
          e.waitUntil(
            t.install({ event: e, plugins: n }).catch(function (e) {
              throw e;
            })
          );
        },
        de = function (e) {
          var t = se();
          e.waitUntil(t.activate());
        };
      n(185);
      var ye,
        me = function (e) {
          return e && "object" === typeof e ? e : { handle: e };
        },
        xe = t(function e(t, n) {
          var a =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "GET";
          r(this, e),
            (this.handler = me(n)),
            (this.match = t),
            (this.method = a);
        }),
        ge = (function (e) {
          i(a, e);
          var n = h(a);
          function a(e, t, i) {
            r(this, a);
            return n.call(
              this,
              function (t) {
                var n = t.url,
                  r = e.exec(n.href);
                if (r && (n.origin === location.origin || 0 === r.index))
                  return r.slice(1);
              },
              t,
              i
            );
          }
          return t(a);
        })(xe),
        we = (function () {
          function e() {
            r(this, e), (this._routes = new Map());
          }
          return (
            t(e, [
              {
                key: "routes",
                get: function () {
                  return this._routes;
                },
              },
              {
                key: "addFetchListener",
                value: function () {
                  var e = this;
                  self.addEventListener("fetch", function (t) {
                    var n = t.request,
                      r = e.handleRequest({ request: n, event: t });
                    r && t.respondWith(r);
                  });
                },
              },
              {
                key: "addCacheListener",
                value: function () {
                  var e = this;
                  self.addEventListener("message", function (t) {
                    if (t.data && "CACHE_URLS" === t.data.type) {
                      var n = t.data.payload;
                      0;
                      var r = Promise.all(
                        n.urlsToCache.map(function (t) {
                          "string" === typeof t && (t = [t]);
                          var n = f(Request, te(t));
                          return e.handleRequest({ request: n });
                        })
                      );
                      t.waitUntil(r),
                        t.ports &&
                          t.ports[0] &&
                          r.then(function () {
                            return t.ports[0].postMessage(!0);
                          });
                    }
                  });
                },
              },
              {
                key: "handleRequest",
                value: function (e) {
                  var t = this,
                    n = e.request,
                    r = e.event;
                  var a = new URL(n.url, location.href);
                  if (a.protocol.startsWith("http")) {
                    var i = this.findMatchingRoute({
                        url: a,
                        request: n,
                        event: r,
                      }),
                      u = i.params,
                      s = i.route,
                      c = s && s.handler;
                    if (
                      (!c && this._defaultHandler && (c = this._defaultHandler),
                      c)
                    ) {
                      var o;
                      0;
                      try {
                        o = c.handle({
                          url: a,
                          request: n,
                          event: r,
                          params: u,
                        });
                      } catch (h) {
                        o = Promise.reject(h);
                      }
                      return (
                        o instanceof Promise &&
                          this._catchHandler &&
                          (o = o.catch(function (e) {
                            return t._catchHandler.handle({
                              url: a,
                              request: n,
                              event: r,
                            });
                          })),
                        o
                      );
                    }
                  }
                },
              },
              {
                key: "findMatchingRoute",
                value: function (e) {
                  var t = e.url,
                    n = e.request,
                    r = e.event;
                  var a,
                    i = _(this._routes.get(n.method) || []);
                  try {
                    for (i.s(); !(a = i.n()).done; ) {
                      var u = a.value,
                        s = void 0,
                        c = u.match({ url: t, request: n, event: r });
                      if (c)
                        return (
                          (s = c),
                          ((Array.isArray(c) && 0 === c.length) ||
                            (c.constructor === Object &&
                              0 === Object.keys(c).length) ||
                            "boolean" === typeof c) &&
                            (s = void 0),
                          { route: u, params: s }
                        );
                    }
                  } catch (o) {
                    i.e(o);
                  } finally {
                    i.f();
                  }
                  return {};
                },
              },
              {
                key: "setDefaultHandler",
                value: function (e) {
                  this._defaultHandler = me(e);
                },
              },
              {
                key: "setCatchHandler",
                value: function (e) {
                  this._catchHandler = me(e);
                },
              },
              {
                key: "registerRoute",
                value: function (e) {
                  this._routes.has(e.method) || this._routes.set(e.method, []),
                    this._routes.get(e.method).push(e);
                },
              },
              {
                key: "unregisterRoute",
                value: function (e) {
                  if (!this._routes.has(e.method))
                    throw new v("unregister-route-but-not-found-with-method", {
                      method: e.method,
                    });
                  var t = this._routes.get(e.method).indexOf(e);
                  if (!(t > -1))
                    throw new v("unregister-route-route-not-registered");
                  this._routes.get(e.method).splice(t, 1);
                },
              },
            ]),
            e
          );
        })(),
        be = function () {
          return (
            ye || ((ye = new we()).addFetchListener(), ye.addCacheListener()),
            ye
          );
        };
      function ke(e, t, n) {
        var r;
        if ("string" === typeof e) {
          var a = new URL(e, location.href);
          r = new xe(
            function (e) {
              return e.url.href === a.href;
            },
            t,
            n
          );
        } else if (e instanceof RegExp) r = new ge(e, t, n);
        else if ("function" === typeof e) r = new xe(e, t, n);
        else {
          if (!(e instanceof xe))
            throw new v("unsupported-route-type", {
              moduleName: "workbox-routing",
              funcName: "registerRoute",
              paramName: "capture",
            });
          r = e;
        }
        return be().registerRoute(r), r;
      }
      n(833);
      var _e,
        qe = {
          cacheWillUpdate: (function () {
            var e = R(
              L().mark(function e(t) {
                var n;
                return L().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (200 !== (n = t.response).status && 0 !== n.status) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt("return", n);
                      case 3:
                        return e.abrupt("return", null);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        },
        Re = (function () {
          function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            r(this, e),
              (this._plugins = t.plugins || []),
              (this._fetchOptions = t.fetchOptions);
          }
          return (
            t(e, [
              {
                key: "handle",
                value: (function () {
                  var e = R(
                    L().mark(function e(t) {
                      var n, r, a, i;
                      return L().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = t.event),
                                  "string" === typeof (r = t.request) &&
                                    (r = new Request(r)),
                                  (e.prev = 3),
                                  (e.next = 6),
                                  V.fetch({
                                    request: r,
                                    event: n,
                                    fetchOptions: this._fetchOptions,
                                    plugins: this._plugins,
                                  })
                                );
                              case 6:
                                (i = e.sent), (e.next = 12);
                                break;
                              case 9:
                                (e.prev = 9), (e.t0 = e.catch(3)), (a = e.t0);
                              case 12:
                                if (i) {
                                  e.next = 15;
                                  break;
                                }
                                throw new v("no-response", {
                                  url: r.url,
                                  error: a,
                                });
                              case 15:
                                return e.abrupt("return", i);
                              case 16:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[3, 9]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]),
            e
          );
        })(),
        Ee = (function () {
          function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            if (
              (r(this, e),
              (this._cacheName = w(t.cacheName)),
              (this._plugins = t.plugins || []),
              t.plugins)
            ) {
              var n = t.plugins.some(function (e) {
                return !!e.cacheWillUpdate;
              });
              this._plugins = n ? t.plugins : [qe].concat(te(t.plugins));
            } else this._plugins = [qe];
            (this._fetchOptions = t.fetchOptions),
              (this._matchOptions = t.matchOptions);
          }
          return (
            t(e, [
              {
                key: "handle",
                value: (function () {
                  var e = R(
                    L().mark(function e(t) {
                      var n, r, a, i, u;
                      return L().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = t.event),
                                  (r = t.request),
                                  [],
                                  "string" === typeof r && (r = new Request(r)),
                                  (a = this._getFromNetwork({
                                    request: r,
                                    event: n,
                                  })),
                                  (e.next = 7),
                                  I.match({
                                    cacheName: this._cacheName,
                                    request: r,
                                    event: n,
                                    matchOptions: this._matchOptions,
                                    plugins: this._plugins,
                                  })
                                );
                              case 7:
                                if (!(i = e.sent)) {
                                  e.next = 13;
                                  break;
                                }
                                if (n)
                                  try {
                                    n.waitUntil(a);
                                  } catch (u) {
                                    0;
                                  }
                                e.next = 23;
                                break;
                              case 13:
                                return (e.prev = 14), (e.next = 17), a;
                              case 17:
                                (i = e.sent), (e.next = 23);
                                break;
                              case 20:
                                (e.prev = 20), (e.t0 = e.catch(14)), (u = e.t0);
                              case 23:
                                if (i) {
                                  e.next = 26;
                                  break;
                                }
                                throw new v("no-response", {
                                  url: r.url,
                                  error: u,
                                });
                              case 26:
                                return e.abrupt("return", i);
                              case 27:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[14, 20]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_getFromNetwork",
                value: (function () {
                  var e = R(
                    L().mark(function e(t) {
                      var n, r, a, i;
                      return L().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = t.request),
                                  (r = t.event),
                                  (e.next = 3),
                                  V.fetch({
                                    request: n,
                                    event: r,
                                    fetchOptions: this._fetchOptions,
                                    plugins: this._plugins,
                                  })
                                );
                              case 3:
                                if (
                                  ((a = e.sent),
                                  (i = I.put({
                                    cacheName: this._cacheName,
                                    request: n,
                                    response: a.clone(),
                                    event: r,
                                    plugins: this._plugins,
                                  })),
                                  r)
                                )
                                  try {
                                    r.waitUntil(i);
                                  } catch (u) {
                                    0;
                                  }
                                return e.abrupt("return", a);
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]),
            e
          );
        })(),
        Le = (n(45), "requests"),
        Se = "queueName",
        Oe = (function () {
          function e(t) {
            r(this, e),
              (this._queueName = t),
              (this._db = new F("workbox-background-sync", 3, {
                onupgradeneeded: this._upgradeDb,
              }));
          }
          return (
            t(e, [
              {
                key: "pushEntry",
                value: (function () {
                  var e = R(
                    L().mark(function e(t) {
                      return L().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  delete t.id,
                                  (t.queueName = this._queueName),
                                  (e.next = 5),
                                  this._db.add(Le, t)
                                );
                              case 5:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "unshiftEntry",
                value: (function () {
                  var e = R(
                    L().mark(function e(t) {
                      var n, r, a;
                      return L().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 3),
                                  this._db.getAllMatching(Le, { count: 1 })
                                );
                              case 3:
                                return (
                                  (n = e.sent),
                                  (r = C(n, 1)),
                                  (a = r[0]) ? (t.id = a.id - 1) : delete t.id,
                                  (t.queueName = this._queueName),
                                  (e.next = 10),
                                  this._db.add(Le, t)
                                );
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "popEntry",
                value: (function () {
                  var e = R(
                    L().mark(function e() {
                      return L().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt(
                                  "return",
                                  this._removeEntry({ direction: "prev" })
                                );
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "shiftEntry",
                value: (function () {
                  var e = R(
                    L().mark(function e() {
                      return L().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt(
                                  "return",
                                  this._removeEntry({ direction: "next" })
                                );
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getAll",
                value: (function () {
                  var e = R(
                    L().mark(function e() {
                      return L().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this._db.getAllMatching(Le, {
                                    index: Se,
                                    query: IDBKeyRange.only(this._queueName),
                                  })
                                );
                              case 2:
                                return e.abrupt("return", e.sent);
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "deleteEntry",
                value: (function () {
                  var e = R(
                    L().mark(function e(t) {
                      return L().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this._db.delete(Le, t);
                              case 2:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_removeEntry",
                value: (function () {
                  var e = R(
                    L().mark(function e(t) {
                      var n, r, a, i;
                      return L().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = t.direction),
                                  (e.next = 3),
                                  this._db.getAllMatching(Le, {
                                    direction: n,
                                    index: Se,
                                    query: IDBKeyRange.only(this._queueName),
                                    count: 1,
                                  })
                                );
                              case 3:
                                if (
                                  ((r = e.sent), (a = C(r, 1)), !(i = a[0]))
                                ) {
                                  e.next = 10;
                                  break;
                                }
                                return (e.next = 9), this.deleteEntry(i.id);
                              case 9:
                                return e.abrupt("return", i);
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_upgradeDb",
                value: function (e) {
                  var t = e.target.result;
                  e.oldVersion > 0 &&
                    e.oldVersion < 3 &&
                    t.objectStoreNames.contains(Le) &&
                    t.deleteObjectStore(Le),
                    t
                      .createObjectStore(Le, {
                        autoIncrement: !0,
                        keyPath: "id",
                      })
                      .createIndex(Se, Se, { unique: !1 });
                },
              },
            ]),
            e
          );
        })(),
        Te = [
          "method",
          "referrer",
          "referrerPolicy",
          "mode",
          "credentials",
          "cache",
          "redirect",
          "integrity",
          "keepalive",
        ],
        Ne = (function () {
          function e(t) {
            r(this, e),
              "navigate" === t.mode && (t.mode = "same-origin"),
              (this._requestData = t);
          }
          return (
            t(
              e,
              [
                {
                  key: "toObject",
                  value: function () {
                    var e = Object.assign({}, this._requestData);
                    return (
                      (e.headers = Object.assign(
                        {},
                        this._requestData.headers
                      )),
                      e.body && (e.body = e.body.slice(0)),
                      e
                    );
                  },
                },
                {
                  key: "toRequest",
                  value: function () {
                    return new Request(
                      this._requestData.url,
                      this._requestData
                    );
                  },
                },
                {
                  key: "clone",
                  value: function () {
                    return new e(this.toObject());
                  },
                },
              ],
              [
                {
                  key: "fromRequest",
                  value: (function () {
                    var t = R(
                      L().mark(function t(n) {
                        var r, a, i, u, s, c, o, h, f;
                        return L().wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  ((r = { url: n.url, headers: {} }),
                                  "GET" === n.method)
                                ) {
                                  t.next = 5;
                                  break;
                                }
                                return (t.next = 4), n.clone().arrayBuffer();
                              case 4:
                                r.body = t.sent;
                              case 5:
                                a = _(n.headers.entries());
                                try {
                                  for (a.s(); !(i = a.n()).done; )
                                    (u = C(i.value, 2)),
                                      (s = u[0]),
                                      (c = u[1]),
                                      (r.headers[s] = c);
                                } catch (l) {
                                  a.e(l);
                                } finally {
                                  a.f();
                                }
                                o = _(Te);
                                try {
                                  for (o.s(); !(h = o.n()).done; )
                                    (f = h.value),
                                      void 0 !== n[f] && (r[f] = n[f]);
                                } catch (l) {
                                  o.e(l);
                                } finally {
                                  o.f();
                                }
                                return t.abrupt("return", new e(r));
                              case 10:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                },
              ]
            ),
            e
          );
        })(),
        Ue = "workbox-background-sync",
        Ae = new Set(),
        je = function (e) {
          var t = {
            request: new Ne(e.requestData).toRequest(),
            timestamp: e.timestamp,
          };
          return e.metadata && (t.metadata = e.metadata), t;
        },
        Pe = (function () {
          function e(t) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              a = n.onSync,
              i = n.maxRetentionTime;
            if (
              (r(this, e),
              (this._syncInProgress = !1),
              (this._requestsAddedDuringSync = !1),
              Ae.has(t))
            )
              throw new v("duplicate-queue-name", { name: t });
            Ae.add(t),
              (this._name = t),
              (this._onSync = a || this.replayRequests),
              (this._maxRetentionTime = i || 10080),
              (this._queueStore = new Oe(this._name)),
              this._addSyncListener();
          }
          return (
            t(
              e,
              [
                {
                  key: "name",
                  get: function () {
                    return this._name;
                  },
                },
                {
                  key: "pushRequest",
                  value: (function () {
                    var e = R(
                      L().mark(function e(t) {
                        return L().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 3), this._addRequest(t, "push")
                                  );
                                case 3:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "unshiftRequest",
                  value: (function () {
                    var e = R(
                      L().mark(function e(t) {
                        return L().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 3), this._addRequest(t, "unshift")
                                  );
                                case 3:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "popRequest",
                  value: (function () {
                    var e = R(
                      L().mark(function e() {
                        return L().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return e.abrupt(
                                    "return",
                                    this._removeRequest("pop")
                                  );
                                case 1:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "shiftRequest",
                  value: (function () {
                    var e = R(
                      L().mark(function e() {
                        return L().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return e.abrupt(
                                    "return",
                                    this._removeRequest("shift")
                                  );
                                case 1:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "getAll",
                  value: (function () {
                    var e = R(
                      L().mark(function e() {
                        var t, n, r, a, i, u, s;
                        return L().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2), this._queueStore.getAll()
                                  );
                                case 2:
                                  (t = e.sent),
                                    (n = Date.now()),
                                    (r = []),
                                    (a = _(t)),
                                    (e.prev = 6),
                                    a.s();
                                case 8:
                                  if ((i = a.n()).done) {
                                    e.next = 19;
                                    break;
                                  }
                                  if (
                                    ((u = i.value),
                                    (s = 60 * this._maxRetentionTime * 1e3),
                                    !(n - u.timestamp > s))
                                  ) {
                                    e.next = 16;
                                    break;
                                  }
                                  return (
                                    (e.next = 14),
                                    this._queueStore.deleteEntry(u.id)
                                  );
                                case 14:
                                  e.next = 17;
                                  break;
                                case 16:
                                  r.push(je(u));
                                case 17:
                                  e.next = 8;
                                  break;
                                case 19:
                                  e.next = 24;
                                  break;
                                case 21:
                                  (e.prev = 21), (e.t0 = e.catch(6)), a.e(e.t0);
                                case 24:
                                  return (e.prev = 24), a.f(), e.finish(24);
                                case 27:
                                  return e.abrupt("return", r);
                                case 28:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[6, 21, 24, 27]]
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "_addRequest",
                  value: (function () {
                    var e = R(
                      L().mark(function e(t, n) {
                        var r, a, i, u, s, c;
                        return L().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (r = t.request),
                                    (a = t.metadata),
                                    (i = t.timestamp),
                                    (u = void 0 === i ? Date.now() : i),
                                    (e.next = 3),
                                    Ne.fromRequest(r.clone())
                                  );
                                case 3:
                                  return (
                                    (s = e.sent),
                                    (c = {
                                      requestData: s.toObject(),
                                      timestamp: u,
                                    }),
                                    a && (c.metadata = a),
                                    (e.next = 8),
                                    this._queueStore["".concat(n, "Entry")](c)
                                  );
                                case 8:
                                  if (!this._syncInProgress) {
                                    e.next = 13;
                                    break;
                                  }
                                  (this._requestsAddedDuringSync = !0),
                                    (e.next = 15);
                                  break;
                                case 13:
                                  return (e.next = 15), this.registerSync();
                                case 15:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "_removeRequest",
                  value: (function () {
                    var e = R(
                      L().mark(function e(t) {
                        var n, r, a;
                        return L().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (n = Date.now()),
                                    (e.next = 3),
                                    this._queueStore["".concat(t, "Entry")]()
                                  );
                                case 3:
                                  if (!(r = e.sent)) {
                                    e.next = 11;
                                    break;
                                  }
                                  if (
                                    ((a = 60 * this._maxRetentionTime * 1e3),
                                    !(n - r.timestamp > a))
                                  ) {
                                    e.next = 8;
                                    break;
                                  }
                                  return e.abrupt(
                                    "return",
                                    this._removeRequest(t)
                                  );
                                case 8:
                                  return e.abrupt("return", je(r));
                                case 11:
                                  return e.abrupt("return", void 0);
                                case 12:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "replayRequests",
                  value: (function () {
                    var e = R(
                      L().mark(function e() {
                        var t;
                        return L().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (e.next = 2), this.shiftRequest();
                                case 2:
                                  if (!(t = e.sent)) {
                                    e.next = 17;
                                    break;
                                  }
                                  return (
                                    (e.prev = 3),
                                    (e.next = 6),
                                    fetch(t.request.clone())
                                  );
                                case 6:
                                  0, (e.next = 15);
                                  break;
                                case 9:
                                  return (
                                    (e.prev = 9),
                                    (e.t0 = e.catch(3)),
                                    (e.next = 13),
                                    this.unshiftRequest(t)
                                  );
                                case 13:
                                  throw new v("queue-replay-failed", {
                                    name: this._name,
                                  });
                                case 15:
                                  e.next = 0;
                                  break;
                                case 17:
                                  0;
                                case 18:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[3, 9]]
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "registerSync",
                  value: (function () {
                    var e = R(
                      L().mark(function e() {
                        return L().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (!("sync" in self.registration)) {
                                    e.next = 9;
                                    break;
                                  }
                                  return (
                                    (e.prev = 1),
                                    (e.next = 4),
                                    self.registration.sync.register(
                                      "".concat(Ue, ":").concat(this._name)
                                    )
                                  );
                                case 4:
                                  e.next = 9;
                                  break;
                                case 6:
                                  (e.prev = 6), (e.t0 = e.catch(1));
                                case 9:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[1, 6]]
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "_addSyncListener",
                  value: function () {
                    var e = this;
                    "sync" in self.registration
                      ? self.addEventListener("sync", function (t) {
                          if (t.tag === "".concat(Ue, ":").concat(e._name)) {
                            0;
                            var n = (function () {
                              var n = R(
                                L().mark(function n() {
                                  var r;
                                  return L().wrap(
                                    function (n) {
                                      for (;;)
                                        switch ((n.prev = n.next)) {
                                          case 0:
                                            return (
                                              (e._syncInProgress = !0),
                                              (n.prev = 1),
                                              (n.next = 4),
                                              e._onSync({ queue: e })
                                            );
                                          case 4:
                                            n.next = 10;
                                            break;
                                          case 6:
                                            throw (
                                              ((n.prev = 6),
                                              (n.t0 = n.catch(1)),
                                              (r = n.t0))
                                            );
                                          case 10:
                                            if (
                                              ((n.prev = 10),
                                              !e._requestsAddedDuringSync ||
                                                (r && !t.lastChance))
                                            ) {
                                              n.next = 14;
                                              break;
                                            }
                                            return (
                                              (n.next = 14), e.registerSync()
                                            );
                                          case 14:
                                            return (
                                              (e._syncInProgress = !1),
                                              (e._requestsAddedDuringSync = !1),
                                              n.finish(10)
                                            );
                                          case 17:
                                          case "end":
                                            return n.stop();
                                        }
                                    },
                                    n,
                                    null,
                                    [[1, 6, 10, 17]]
                                  );
                                })
                              );
                              return function () {
                                return n.apply(this, arguments);
                              };
                            })();
                            t.waitUntil(n());
                          }
                        })
                      : this._onSync({ queue: this });
                  },
                },
              ],
              [
                {
                  key: "_queueNames",
                  get: function () {
                    return Ae;
                  },
                },
              ]
            ),
            e
          );
        })(),
        De = t(function e(t, n) {
          var a = this;
          r(this, e),
            (this.fetchDidFail = (function () {
              var e = R(
                L().mark(function e(t) {
                  var n;
                  return L().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t.request),
                            (e.next = 3),
                            a._queue.pushRequest({ request: n })
                          );
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (this._queue = new Pe(t, n));
        });
      self.addEventListener("activate", function () {
        return self.clients.claim();
      }),
        (function (e) {
          se().addToCacheList(e),
            e.length > 0 &&
              (self.addEventListener("install", ve),
              self.addEventListener("activate", de));
        })([
          { revision: "f873de76e87b41471d36d9e642da188e", url: "/index.html" },
          { revision: null, url: "/static/css/main.c02e4706.css" },
          { revision: null, url: "/static/js/377.0ed652e3.chunk.js" },
          { revision: null, url: "/static/js/main.e172f9e4.js" },
        ]),
        pe(_e);
      var Ie,
        Ke = new RegExp("/[^/?]+\\.[^/]+$");
      ke(function (e) {
        var t = e.request,
          n = e.url;
        return (
          "navigate" === t.mode &&
          !n.pathname.startsWith("/_") &&
          !n.pathname.match(Ke)
        );
      }, ((Ie = "/index.html"), se().createHandlerBoundToURL(Ie))),
        ke(function (e) {
          var t = e.url;
          return (
            t.origin === self.location.origin && t.pathname.endsWith(".png")
          );
        }, new Ee({
          cacheName: "images",
          plugins: [new ee({ maxEntries: 50 })],
        })),
        self.addEventListener("message", function (e) {
          e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
        }),
        ke(
          /\api\/groceries/,
          new Re({
            plugins: [new De("myQueueName", { maxRetentionTime: 1440 })],
          }),
          "PUT"
        );
    })();
})();
//# sourceMappingURL=service-worker.js.map
