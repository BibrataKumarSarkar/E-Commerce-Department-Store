! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Elemental", [], t) : "object" == typeof exports ? exports.Elemental = t() : e.Elemental = t()
}(window, function() {
    return function(n) {
        var r = {};

        function o(e) {
            if (r[e]) return r[e].exports;
            var t = r[e] = {
                i: e,
                l: !1,
                exports: {}
            };
            return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports
        }
        return o.m = n, o.c = r, o.d = function(e, t, n) {
            o.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, o.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, o.t = function(t, e) {
            if (1 & e && (t = o(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (o.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var r in t) o.d(n, r, function(e) {
                    return t[e]
                }.bind(null, r));
            return n
        }, o.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return o.d(t, "a", t), t
        }, o.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, o.p = "", o(o.s = 0)
    }([function(e, t, n) {
        "use strict";

        function r() {
            return (r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        /*! SmokinSexySoftware: sss-elemental
         * https://github.com/Natteke
         * Copyright (c) 2019-present Andrey Ponomarenko; */
        n.r(t);
        var o = {
            regexp: function(e) {
                return new RegExp("(\\s|^)".concat(e, "(\\s|$)"))
            },
            hasClass: function(e, t) {
                return o.regexp(t).test(e.className)
            },
            get: function(e) {
                return [].slice.call(document.querySelectorAll(e))
            },
            addClass: function(e, t) {
                var n = e.className;
                if (!o.hasClass(e, t)) {
                    var r = 0 < n.length ? " " : "";
                    n += "".concat(r).concat(t)
                }
                return e.setAttribute("class", n), e
            },
            removeClass: function(e, t) {
                var n = e.className.split(" ").filter(function(e) {
                    return e !== t
                }).join(" ");
                return e.setAttribute("class", n), e
            },
            toggleClass: function(e, t) {
                return o.hasClass(e, t) ? o.removeClass(e, t) : o.addClass(e, t), e
            },
            eject: function() {
                Object.getOwnPropertyNames(o).filter(function(e) {
                    return 0 <= o.propsToEject.indexOf(e)
                }).forEach(function(t) {
                    Element.prototype[t] = function(e) {
                        return o[t](this, e)
                    }
                })
            },
            injectCss: function(e, t) {
                return r(e.style, t)
            },
            propsToEject: ["addClass", "removeClass", "hasClass", "toggleClass", "injectCss"]
        };
        t.default = o
    }]).default
});