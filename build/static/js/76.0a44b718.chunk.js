/*! For license information please see 76.0a44b718.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [76],
  {
    1236: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(1237),
        a = r(0),
        o = function () {
          return (o =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var a in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
        };
      function i(e, t) {
        switch (t.type) {
          case "collapse":
            return { collapse: !e.collapse };
          case "show":
            return { collapse: !0 };
          default:
            return e;
        }
      }
      t.Accordion = function (e) {
        var t,
          r = e.title,
          c = void 0 === r ? "" : r,
          s = e.show,
          l = void 0 !== s && s,
          u = e.children,
          f = a.useRef(null),
          d = a.useReducer(i, { collapse: l }),
          h = d[0].collapse,
          p = d[1],
          m = a.useRef(
            window.crypto.getRandomValues(new Uint32Array(1))[0].toString(36)
          );
        return (
          a.useEffect(
            function () {
              l && p({ type: "show" });
            },
            [l]
          ),
          n.jsxs(
            "div",
            o(
              { className: "accordion-item" },
              {
                children: [
                  n.jsx(
                    "h2",
                    o(
                      {
                        className: "accordion-header",
                        id: "heading-" + m.current,
                      },
                      {
                        children: n.jsx(
                          "button",
                          o(
                            {
                              className:
                                "accordion-button" + (h ? "" : " collapsed"),
                              type: "button",
                              "aria-expanded": h,
                              "aria-controls": "collapse-" + m.current,
                              onClick: function () {
                                return p({ type: "collapse" });
                              },
                            },
                            { children: c }
                          ),
                          void 0
                        ),
                      }
                    ),
                    void 0
                  ),
                  n.jsx(
                    "div",
                    o(
                      {
                        id: "collapse-" + m.current,
                        "aria-labelledby": "heading-" + m.current,
                        className: "accordion-collapse",
                        style: h
                          ? {
                              height:
                                null === (t = f.current) || void 0 === t
                                  ? void 0
                                  : t.clientHeight,
                              transition: "height 0.2s ease",
                              overflow: "hidden",
                            }
                          : {
                              height: 0,
                              transition: "height 0.2s ease",
                              overflow: "hidden",
                            },
                      },
                      {
                        children: n.jsx(
                          "div",
                          o(
                            { className: "accordion-body", ref: f },
                            {
                              children:
                                u ||
                                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem illum odit similique quibusdam ea eaque pariatur laboriosam repellendus voluptas, aspernatur in id tenetur eligendi nobis quam saepe cumque enim esse.",
                            }
                          ),
                          void 0
                        ),
                      }
                    ),
                    void 0
                  ),
                ],
              }
            ),
            void 0
          )
        );
      };
    },
    1237: function (e, t, r) {
      "use strict";
      e.exports = r(1238);
    },
    1238: function (e, t, r) {
      "use strict";
      var n = r(0),
        a = 60103;
      if (((t.Fragment = 60107), "function" === typeof Symbol && Symbol.for)) {
        var o = Symbol.for;
        (a = o("react.element")), (t.Fragment = o("react.fragment"));
      }
      var i =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = Object.prototype.hasOwnProperty,
        s = { key: !0, ref: !0, __self: !0, __source: !0 };
      function l(e, t, r) {
        var n,
          o = {},
          l = null,
          u = null;
        for (n in (void 0 !== r && (l = "" + r),
        void 0 !== t.key && (l = "" + t.key),
        void 0 !== t.ref && (u = t.ref),
        t))
          c.call(t, n) && !s.hasOwnProperty(n) && (o[n] = t[n]);
        if (e && e.defaultProps)
          for (n in (t = e.defaultProps)) void 0 === o[n] && (o[n] = t[n]);
        return {
          $$typeof: a,
          type: e,
          key: l,
          ref: u,
          props: o,
          _owner: i.current,
        };
      }
      (t.jsx = l), (t.jsxs = l);
    },
    1976: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "AddFaq", function () {
          return E;
        });
      var n = r(71),
        a = r(51),
        o = r(13),
        i = r(14),
        c = r(16),
        s = r(15),
        l = r(0),
        u = r.n(l),
        f = r(1083),
        d = r(1081),
        h = r(1082),
        p = r(171),
        m = r(1086),
        v = r(795),
        y = r(793),
        g = r(791),
        b = r(56),
        w = r(561),
        O = r(1236);
      function j() {
        j = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          a = n.iterator || "@@iterator",
          o = n.asyncIterator || "@@asyncIterator",
          i = n.toStringTag || "@@toStringTag";
        function c(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          c({}, "");
        } catch (_) {
          c = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function s(e, t, r, n) {
          var a = t && t.prototype instanceof f ? t : f,
            o = Object.create(a.prototype),
            i = new E(n || []);
          return (
            (o._invoke = (function (e, t, r) {
              var n = "suspendedStart";
              return function (a, o) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === a) throw o;
                  return L();
                }
                for (r.method = a, r.arg = o; ; ) {
                  var i = r.delegate;
                  if (i) {
                    var c = w(i, r);
                    if (c) {
                      if (c === u) continue;
                      return c;
                    }
                  }
                  if ("next" === r.method) r.sent = r._sent = r.arg;
                  else if ("throw" === r.method) {
                    if ("suspendedStart" === n)
                      throw ((n = "completed"), r.arg);
                    r.dispatchException(r.arg);
                  } else "return" === r.method && r.abrupt("return", r.arg);
                  n = "executing";
                  var s = l(e, t, r);
                  if ("normal" === s.type) {
                    if (
                      ((n = r.done ? "completed" : "suspendedYield"),
                      s.arg === u)
                    )
                      continue;
                    return { value: s.arg, done: r.done };
                  }
                  "throw" === s.type &&
                    ((n = "completed"), (r.method = "throw"), (r.arg = s.arg));
                }
              };
            })(e, r, i)),
            o
          );
        }
        function l(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (_) {
            return { type: "throw", arg: _ };
          }
        }
        e.wrap = s;
        var u = {};
        function f() {}
        function d() {}
        function h() {}
        var p = {};
        c(p, a, function () {
          return this;
        });
        var m = Object.getPrototypeOf,
          v = m && m(m(N([])));
        v && v !== t && r.call(v, a) && (p = v);
        var y = (h.prototype = f.prototype = Object.create(p));
        function g(e) {
          ["next", "throw", "return"].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var n;
          this._invoke = function (a, o) {
            function i() {
              return new t(function (n, i) {
                !(function n(a, o, i, c) {
                  var s = l(e[a], e, o);
                  if ("throw" !== s.type) {
                    var u = s.arg,
                      f = u.value;
                    return f && "object" == typeof f && r.call(f, "__await")
                      ? t.resolve(f.__await).then(
                          function (e) {
                            n("next", e, i, c);
                          },
                          function (e) {
                            n("throw", e, i, c);
                          }
                        )
                      : t.resolve(f).then(
                          function (e) {
                            (u.value = e), i(u);
                          },
                          function (e) {
                            return n("throw", e, i, c);
                          }
                        );
                  }
                  c(s.arg);
                })(a, o, n, i);
              });
            }
            return (n = n ? n.then(i, i) : i());
          };
        }
        function w(e, t) {
          var r = e.iterator[t.method];
          if (void 0 === r) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                w(e, t),
                "throw" === t.method)
              )
                return u;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return u;
          }
          var n = l(r, e.iterator, t.arg);
          if ("throw" === n.type)
            return (
              (t.method = "throw"), (t.arg = n.arg), (t.delegate = null), u
            );
          var a = n.arg;
          return a
            ? a.done
              ? ((t[e.resultName] = a.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                u)
              : a
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              u);
        }
        function O(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function x(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function E(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(O, this),
            this.reset(!0);
        }
        function N(e) {
          if (e) {
            var t = e[a];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                o = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (o.next = o);
            }
          }
          return { next: L };
        }
        function L() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = h),
          c(y, "constructor", h),
          c(h, "constructor", d),
          (d.displayName = c(h, i, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === d || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, h)
                : ((e.__proto__ = h), c(e, i, "GeneratorFunction")),
              (e.prototype = Object.create(y)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          g(b.prototype),
          c(b.prototype, o, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(s(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          g(y),
          c(y, i, "Generator"),
          c(y, a, function () {
            return this;
          }),
          c(y, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var r in e) t.push(r);
            return (
              t.reverse(),
              function r() {
                for (; t.length; ) {
                  var n = t.pop();
                  if (n in e) return (r.value = n), (r.done = !1), r;
                }
                return (r.done = !0), r;
              }
            );
          }),
          (e.values = N),
          (E.prototype = {
            constructor: E,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(x),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, "catchLoc"),
                    s = r.call(o, "finallyLoc");
                  if (c && s) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
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
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), u)
                  : this.complete(i)
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
                u
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), x(r), u;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var a = n.arg;
                    x(r);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: N(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                u
              );
            },
          }),
          e
        );
      }
      var x = [],
        E = (function (e) {
          Object(c.a)(r, e);
          var t = Object(s.a)(r);
          function r(e) {
            var n;
            return (
              Object(o.a)(this, r),
              ((n = t.call(this, e)).handleChange = function (e) {
                n.setState({ dealer: e }, function () {
                  return console.log("Option selected:", n.state.dealer);
                });
              }),
              (n.changeHandler = function (e) {
                n.setState(Object(a.a)({}, e.target.name, e.target.value));
              }),
              (n.submitHandler = function (e) {
                e.preventDefault(),
                  w.a
                    .post("/admin/addnotification", n.state)
                    .then(function (e) {
                      console.log(e),
                        n.props.history.push(
                          "/app/notification/notificationList"
                        );
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
              }),
              (n.state = { dealer: null, desc: "" }),
              n
            );
          }
          return (
            Object(i.a)(r, [
              {
                key: "componentDidMount",
                value: (function () {
                  var e = Object(n.a)(
                    j().mark(function e() {
                      return j().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              w.a
                                .get("/dealer/alldealers")
                                .then(function (e) {
                                  var t, r;
                                  console.log(e),
                                    null === (t = e.data) ||
                                      void 0 === t ||
                                      null === (r = t.data) ||
                                      void 0 === r ||
                                      r.map(function (e) {
                                        var t = {
                                          label: e.dealer_name,
                                          value: e._id,
                                        };
                                        x.push(t);
                                      });
                                })
                                .catch(function (e) {
                                  console.log(e);
                                });
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "render",
                value: function () {
                  this.state.dealer;
                  return u.a.createElement(
                    "div",
                    null,
                    u.a.createElement(
                      f.a,
                      null,
                      u.a.createElement(
                        d.a,
                        { className: "m-2" },
                        u.a.createElement(
                          h.a,
                          null,
                          u.a.createElement(
                            "h1",
                            { "col-sm-6": !0, className: "float-left" },
                            "Add FAQ"
                          )
                        ),
                        u.a.createElement(
                          h.a,
                          null,
                          u.a.createElement(b.b, {
                            render: function (e) {
                              var t = e.history;
                              return u.a.createElement(
                                p.a,
                                {
                                  className: " btn btn-danger float-right",
                                  onClick: function () {
                                    return t.push("/app/faq/faqList");
                                  },
                                },
                                "Back"
                              );
                            },
                          })
                        )
                      ),
                      u.a.createElement(
                        m.a,
                        null,
                        u.a.createElement(
                          v.a,
                          { className: "m-1", onSubmit: this.submitHandler },
                          u.a.createElement(
                            d.a,
                            { className: "mb-2" },
                            u.a.createElement(
                              O.Accordion,
                              null,
                              "I have received a call/sms/email asking for money?\xa0",
                              "We NEVER request our customers for unsolicited financial\xa0information or advance payments in exchange for rewards. Please DO NOT respond to any call/sms/email claiming to offer rewards/lucky draw prizes on behalf of Agricoin.\xa0",
                              "What are the payment options available for my orders at Agricoin?",
                              "Cash-on-Delivery (COD), UPI, Net Banking. All these options are available for payment.\xa0",
                              "Why can\u2019t I see the COD option on the payment page?\xa0",
                              "If you do not see the COD option, then either your order value is less than Rs299 or above Rs49,999.\xa0\xa0",
                              "Agricoin reserves the right to determine the COD limit for every customer and/or orders. The COD limit includes any undelivered, unpaid orders and any new orders being placed.\xa0"
                            ),
                            u.a.createElement(
                              h.a,
                              { lg: "12", md: "12", className: "mb-2" },
                              u.a.createElement(y.a, null, "Descripiton"),
                              u.a.createElement(g.a, {
                                type: "textarea",
                                name: "desc",
                                value: this.state.desc,
                                onChange: this.changeHandler,
                              })
                            )
                          ),
                          u.a.createElement(
                            d.a,
                            null,
                            u.a.createElement(
                              p.a.Ripple,
                              {
                                className: "mr-1 mb-1",
                                type: "submit",
                                color: "primary",
                              },
                              "Add FAQ List"
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            r
          );
        })(l.Component);
      t.default = E;
    },
    791: function (e, t, r) {
      "use strict";
      var n = r(5),
        a = r(9),
        o = r(11),
        i = r(12),
        c = r(0),
        s = r.n(c),
        l = r(1),
        u = r.n(l),
        f = r(4),
        d = r.n(f),
        h = r(3),
        p = [
          "className",
          "cssModule",
          "type",
          "bsSize",
          "valid",
          "invalid",
          "tag",
          "addon",
          "plaintext",
          "innerRef",
        ],
        m = {
          children: u.a.node,
          type: u.a.string,
          size: u.a.oneOfType([u.a.number, u.a.string]),
          bsSize: u.a.string,
          valid: u.a.bool,
          invalid: u.a.bool,
          tag: h.tagPropType,
          innerRef: u.a.oneOfType([u.a.object, u.a.func, u.a.string]),
          plaintext: u.a.bool,
          addon: u.a.bool,
          className: u.a.string,
          cssModule: u.a.object,
        },
        v = (function (e) {
          function t(t) {
            var r;
            return (
              ((r = e.call(this, t) || this).getRef = r.getRef.bind(
                Object(o.a)(r)
              )),
              (r.focus = r.focus.bind(Object(o.a)(r))),
              r
            );
          }
          Object(i.a)(t, e);
          var r = t.prototype;
          return (
            (r.getRef = function (e) {
              this.props.innerRef && this.props.innerRef(e), (this.ref = e);
            }),
            (r.focus = function () {
              this.ref && this.ref.focus();
            }),
            (r.render = function () {
              var e = this.props,
                t = e.className,
                r = e.cssModule,
                o = e.type,
                i = e.bsSize,
                c = e.valid,
                l = e.invalid,
                u = e.tag,
                f = e.addon,
                m = e.plaintext,
                v = e.innerRef,
                y = Object(a.a)(e, p),
                g = ["radio", "checkbox"].indexOf(o) > -1,
                b = new RegExp("\\D", "g"),
                w = u || ("select" === o || "textarea" === o ? o : "input"),
                O = "form-control";
              m
                ? ((O += "-plaintext"), (w = u || "input"))
                : "file" === o
                ? (O += "-file")
                : "range" === o
                ? (O += "-range")
                : g && (O = f ? null : "form-check-input"),
                y.size &&
                  b.test(y.size) &&
                  (Object(h.warnOnce)(
                    'Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'
                  ),
                  (i = y.size),
                  delete y.size);
              var j = Object(h.mapToCssModules)(
                d()(
                  t,
                  l && "is-invalid",
                  c && "is-valid",
                  !!i && "form-control-" + i,
                  O
                ),
                r
              );
              return (
                ("input" === w || (u && "function" === typeof u)) &&
                  (y.type = o),
                y.children &&
                  !m &&
                  "select" !== o &&
                  "string" === typeof w &&
                  "select" !== w &&
                  (Object(h.warnOnce)(
                    'Input with a type of "' +
                      o +
                      '" cannot have children. Please use "value"/"defaultValue" instead.'
                  ),
                  delete y.children),
                s.a.createElement(
                  w,
                  Object(n.a)({}, y, {
                    ref: v,
                    className: j,
                    "aria-invalid": l,
                  })
                )
              );
            }),
            t
          );
        })(s.a.Component);
      (v.propTypes = m), (v.defaultProps = { type: "text" }), (t.a = v);
    },
    793: function (e, t, r) {
      "use strict";
      var n = r(5),
        a = r(9),
        o = r(0),
        i = r.n(o),
        c = r(1),
        s = r.n(c),
        l = r(4),
        u = r.n(l),
        f = r(3),
        d = [
          "className",
          "cssModule",
          "hidden",
          "widths",
          "tag",
          "check",
          "size",
          "for",
        ],
        h = s.a.oneOfType([s.a.number, s.a.string]),
        p = s.a.oneOfType([
          s.a.bool,
          s.a.string,
          s.a.number,
          s.a.shape({ size: h, order: h, offset: h }),
        ]),
        m = {
          children: s.a.node,
          hidden: s.a.bool,
          check: s.a.bool,
          size: s.a.string,
          for: s.a.string,
          tag: f.tagPropType,
          className: s.a.string,
          cssModule: s.a.object,
          xs: p,
          sm: p,
          md: p,
          lg: p,
          xl: p,
          widths: s.a.array,
        },
        v = { tag: "label", widths: ["xs", "sm", "md", "lg", "xl"] },
        y = function (e, t, r) {
          return !0 === r || "" === r
            ? e
              ? "col"
              : "col-" + t
            : "auto" === r
            ? e
              ? "col-auto"
              : "col-" + t + "-auto"
            : e
            ? "col-" + r
            : "col-" + t + "-" + r;
        },
        g = function (e) {
          var t = e.className,
            r = e.cssModule,
            o = e.hidden,
            c = e.widths,
            s = e.tag,
            l = e.check,
            h = e.size,
            p = e.for,
            m = Object(a.a)(e, d),
            v = [];
          c.forEach(function (t, n) {
            var a = e[t];
            if ((delete m[t], a || "" === a)) {
              var o,
                i = !n;
              if (Object(f.isObject)(a)) {
                var c,
                  s = i ? "-" : "-" + t + "-";
                (o = y(i, t, a.size)),
                  v.push(
                    Object(f.mapToCssModules)(
                      u()(
                        (((c = {})[o] = a.size || "" === a.size),
                        (c["order" + s + a.order] = a.order || 0 === a.order),
                        (c["offset" + s + a.offset] =
                          a.offset || 0 === a.offset),
                        c)
                      )
                    ),
                    r
                  );
              } else (o = y(i, t, a)), v.push(o);
            }
          });
          var g = Object(f.mapToCssModules)(
            u()(
              t,
              !!o && "sr-only",
              !!l && "form-check-label",
              !!h && "col-form-label-" + h,
              v,
              !!v.length && "col-form-label"
            ),
            r
          );
          return i.a.createElement(
            s,
            Object(n.a)({ htmlFor: p }, m, { className: g })
          );
        };
      (g.propTypes = m), (g.defaultProps = v), (t.a = g);
    },
    795: function (e, t, r) {
      "use strict";
      var n = r(5),
        a = r(9),
        o = r(11),
        i = r(12),
        c = r(0),
        s = r.n(c),
        l = r(1),
        u = r.n(l),
        f = r(4),
        d = r.n(f),
        h = r(3),
        p = ["className", "cssModule", "inline", "tag", "innerRef"],
        m = {
          children: u.a.node,
          inline: u.a.bool,
          tag: h.tagPropType,
          innerRef: u.a.oneOfType([u.a.object, u.a.func, u.a.string]),
          className: u.a.string,
          cssModule: u.a.object,
        },
        v = (function (e) {
          function t(t) {
            var r;
            return (
              ((r = e.call(this, t) || this).getRef = r.getRef.bind(
                Object(o.a)(r)
              )),
              (r.submit = r.submit.bind(Object(o.a)(r))),
              r
            );
          }
          Object(i.a)(t, e);
          var r = t.prototype;
          return (
            (r.getRef = function (e) {
              this.props.innerRef && this.props.innerRef(e), (this.ref = e);
            }),
            (r.submit = function () {
              this.ref && this.ref.submit();
            }),
            (r.render = function () {
              var e = this.props,
                t = e.className,
                r = e.cssModule,
                o = e.inline,
                i = e.tag,
                c = e.innerRef,
                l = Object(a.a)(e, p),
                u = Object(h.mapToCssModules)(d()(t, !!o && "form-inline"), r);
              return s.a.createElement(
                i,
                Object(n.a)({}, l, { ref: c, className: u })
              );
            }),
            t
          );
        })(c.Component);
      (v.propTypes = m), (v.defaultProps = { tag: "form" }), (t.a = v);
    },
  },
]);
//# sourceMappingURL=76.0a44b718.chunk.js.map
