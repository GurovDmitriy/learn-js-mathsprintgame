!(function () {
  let t
  function e(t, e, n, r) {
    Object.defineProperty(t, e, {
      get: n,
      set: r,
      enumerable: !0,
      configurable: !0,
    })
  }
  var n,
    r,
    i,
    o,
    a,
    s,
    u,
    c,
    f,
    l,
    h,
    p,
    d,
    y,
    v,
    _,
    b,
    g,
    m,
    w,
    S,
    x,
    j,
    A,
    O,
    I,
    E,
    R,
    k,
    M,
    q,
    T,
    C,
    D =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof self
          ? self
          : "undefined" != typeof window
            ? window
            : "undefined" != typeof global
              ? global
              : {}
  function P(t) {
    return t && t.__esModule ? t.default : t
  }
  var z = {},
    N = {},
    F = D.parcelRequire7a9f
  null == F &&
    (((F = function (t) {
      if (t in z) return z[t].exports
      if (t in N) {
        var e = N[t]
        delete N[t]
        var n = { id: t, exports: {} }
        return (z[t] = n), e.call(n.exports, n, n.exports), n.exports
      }
      var r = Error("Cannot find module '" + t + "'")
      throw ((r.code = "MODULE_NOT_FOUND"), r)
    }).register = function (t, e) {
      N[t] = e
    }),
    (D.parcelRequire7a9f = F)),
    (0, F.register)("1ACkT", function (t, n) {
      e(t.exports, "isCollection", function () {
        return A
      }),
        e(t.exports, "isKeyed", function () {
          return I
        }),
        e(t.exports, "isIndexed", function () {
          return R
        }),
        e(t.exports, "isAssociative", function () {
          return k
        }),
        e(t.exports, "Collection", function () {
          return M
        }),
        e(t.exports, "Seq", function () {
          return tt
        }),
        e(t.exports, "isSeq", function () {
          return P
        }),
        e(t.exports, "isRecord", function () {
          return N
        }),
        e(t.exports, "isImmutable", function () {
          return F
        }),
        e(t.exports, "isOrdered", function () {
          return B
        }),
        e(t.exports, "isMap", function () {
          return th
        }),
        e(t.exports, "isOrderedMap", function () {
          return tp
        }),
        e(t.exports, "isValueObject", function () {
          return td
        }),
        e(t.exports, "is", function () {
          return ty
        }),
        e(t.exports, "hash", function () {
          return tg
        }),
        e(t.exports, "Map", function () {
          return eE
        }),
        e(t.exports, "OrderedMap", function () {
          return e9
        }),
        e(t.exports, "isPlainObject", function () {
          return t4
        }),
        e(t.exports, "has", function () {
          return t7
        }),
        e(t.exports, "get", function () {
          return t9
        }),
        e(t.exports, "remove", function () {
          return ee
        }),
        e(t.exports, "set", function () {
          return en
        }),
        e(t.exports, "updateIn", function () {
          return er
        }),
        e(t.exports, "setIn", function () {
          return ei
        }),
        e(t.exports, "removeIn", function () {
          return ea
        }),
        e(t.exports, "update", function () {
          return eu
        }),
        e(t.exports, "merge", function () {
          return ed
        }),
        e(t.exports, "mergeWith", function () {
          return ey
        }),
        e(t.exports, "mergeDeep", function () {
          return ev
        }),
        e(t.exports, "mergeDeepWith", function () {
          return e_
        }),
        e(t.exports, "isList", function () {
          return eQ
        }),
        e(t.exports, "List", function () {
          return e$
        }),
        e(t.exports, "isStack", function () {
          return ni
        }),
        e(t.exports, "Stack", function () {
          return no
        }),
        e(t.exports, "isSet", function () {
          return nf
        }),
        e(t.exports, "isOrderedSet", function () {
          return nl
        }),
        e(t.exports, "Set", function () {
          return ny
        }),
        e(t.exports, "OrderedSet", function () {
          return nz
        }),
        e(t.exports, "Range", function () {
          return nm
        }),
        e(t.exports, "getIn", function () {
          return nw
        }),
        e(t.exports, "hasIn", function () {
          return nx
        }),
        e(t.exports, "PairSorting", function () {
          return nB
        }),
        e(t.exports, "Record", function () {
          return nW
        }),
        e(t.exports, "Repeat", function () {
          return nK
        }),
        e(t.exports, "fromJS", function () {
          return nJ
        }),
        e(t.exports, "version", function () {
          return nQ
        }),
        e(t.exports, "Iterable", function () {
          return n$
        }),
        e(t.exports, "default", function () {
          return nX
        })
      var r,
        i,
        o,
        a,
        s,
        u,
        c,
        f,
        l,
        h,
        p = "delete",
        d = {}
      function y() {
        return { value: !1 }
      }
      function v(t) {
        t && (t.value = !0)
      }
      function _() {}
      function b(t) {
        return void 0 === t.size && (t.size = t.__iterate(m)), t.size
      }
      function g(t, e) {
        if ("number" != typeof e) {
          var n = e >>> 0
          if ("" + n !== e || 0xffffffff === n) return NaN
          e = n
        }
        return e < 0 ? b(t) + e : e
      }
      function m() {
        return !0
      }
      function w(t, e, n) {
        return (
          ((0 === t && !x(t)) || (void 0 !== n && t <= -n)) &&
          (void 0 === e || (void 0 !== n && e >= n))
        )
      }
      function S(t, e, n) {
        return void 0 === t
          ? n
          : x(t)
            ? e === 1 / 0
              ? e
              : 0 | Math.max(0, e + t)
            : void 0 === e || e === t
              ? t
              : 0 | Math.min(e, t)
      }
      function x(t) {
        return t < 0 || (0 === t && 1 / t == -1 / 0)
      }
      var j = "@@__IMMUTABLE_ITERABLE__@@"
      function A(t) {
        return !!(t && t[j])
      }
      var O = "@@__IMMUTABLE_KEYED__@@"
      function I(t) {
        return !!(t && t[O])
      }
      var E = "@@__IMMUTABLE_INDEXED__@@"
      function R(t) {
        return !!(t && t[E])
      }
      function k(t) {
        return I(t) || R(t)
      }
      var M = function (t) {
          return A(t) ? t : tt(t)
        },
        q = /*@__PURE__*/ (function (t) {
          function e(t) {
            return I(t) ? t : te(t)
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            e
          )
        })(M),
        T = /*@__PURE__*/ (function (t) {
          function e(t) {
            return R(t) ? t : tn(t)
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            e
          )
        })(M),
        C = /*@__PURE__*/ (function (t) {
          function e(t) {
            return A(t) && !k(t) ? t : tr(t)
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            e
          )
        })(M)
      ;(M.Keyed = q), (M.Indexed = T), (M.Set = C)
      var D = "@@__IMMUTABLE_SEQ__@@"
      function P(t) {
        return !!(t && t[D])
      }
      var z = "@@__IMMUTABLE_RECORD__@@"
      function N(t) {
        return !!(t && t[z])
      }
      function F(t) {
        return A(t) || N(t)
      }
      var V = "@@__IMMUTABLE_ORDERED__@@"
      function B(t) {
        return !!(t && t[V])
      }
      var W = "function" == typeof Symbol && Symbol.iterator,
        U = "@@iterator",
        H = W || U,
        L = function (t) {
          this.next = t
        }
      function G(t, e, n, r) {
        var i = 0 === t ? e : 1 === t ? n : [e, n]
        return r ? (r.value = i) : (r = { value: i, done: !1 }), r
      }
      function K() {
        return { value: void 0, done: !0 }
      }
      function J(t) {
        return !!Array.isArray(t) || !!$(t)
      }
      function Y(t) {
        return t && "function" == typeof t.next
      }
      function Q(t) {
        var e = $(t)
        return e && e.call(t)
      }
      function $(t) {
        var e = t && ((W && t[W]) || t[U])
        if ("function" == typeof e) return e
      }
      ;(L.prototype.toString = function () {
        return "[Iterator]"
      }),
        (L.KEYS = 0),
        (L.VALUES = 1),
        (L.ENTRIES = 2),
        (L.prototype.inspect = L.prototype.toSource =
          function () {
            return this.toString()
          }),
        (L.prototype[H] = function () {
          return this
        })
      var X = Object.prototype.hasOwnProperty
      function Z(t) {
        return (
          !!Array.isArray(t) ||
          "string" == typeof t ||
          (t &&
            "object" == typeof t &&
            Number.isInteger(t.length) &&
            t.length >= 0 &&
            (0 === t.length
              ? 1 === Object.keys(t).length
              : t.hasOwnProperty(t.length - 1)))
        )
      }
      var tt = /*@__PURE__*/ (function (t) {
          function e(t) {
            return null == t
              ? ts()
              : F(t)
                ? t.toSeq()
                : (function (t) {
                    var e,
                      n,
                      r = tf(t)
                    if (r)
                      return (e = $(t)) && e === t.entries
                        ? r.fromEntrySeq()
                        : (n = $(t)) && n === t.keys
                          ? r.toSetSeq()
                          : r
                    if ("object" == typeof t) return new to(t)
                    throw TypeError(
                      "Expected Array or collection object of values, or keyed object: " +
                        t,
                    )
                  })(t)
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            (e.prototype.toSeq = function () {
              return this
            }),
            (e.prototype.toString = function () {
              return this.__toString("Seq {", "}")
            }),
            (e.prototype.cacheResult = function () {
              return (
                !this._cache &&
                  this.__iterateUncached &&
                  ((this._cache = this.entrySeq().toArray()),
                  (this.size = this._cache.length)),
                this
              )
            }),
            (e.prototype.__iterate = function (t, e) {
              var n = this._cache
              if (n) {
                for (var r = n.length, i = 0; i !== r; ) {
                  var o = n[e ? r - ++i : i++]
                  if (!1 === t(o[1], o[0], this)) break
                }
                return i
              }
              return this.__iterateUncached(t, e)
            }),
            (e.prototype.__iterator = function (t, e) {
              var n = this._cache
              if (n) {
                var r = n.length,
                  i = 0
                return new L(function () {
                  if (i === r) return K()
                  var o = n[e ? r - ++i : i++]
                  return G(t, o[0], o[1])
                })
              }
              return this.__iteratorUncached(t, e)
            }),
            e
          )
        })(M),
        te = /*@__PURE__*/ (function (t) {
          function e(t) {
            return null == t
              ? ts().toKeyedSeq()
              : A(t)
                ? I(t)
                  ? t.toSeq()
                  : t.fromEntrySeq()
                : N(t)
                  ? t.toSeq()
                  : tu(t)
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            (e.prototype.toKeyedSeq = function () {
              return this
            }),
            e
          )
        })(tt),
        tn = /*@__PURE__*/ (function (t) {
          function e(t) {
            return null == t
              ? ts()
              : A(t)
                ? I(t)
                  ? t.entrySeq()
                  : t.toIndexedSeq()
                : N(t)
                  ? t.toSeq().entrySeq()
                  : tc(t)
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            (e.of = function () {
              return e(arguments)
            }),
            (e.prototype.toIndexedSeq = function () {
              return this
            }),
            (e.prototype.toString = function () {
              return this.__toString("Seq [", "]")
            }),
            e
          )
        })(tt),
        tr = /*@__PURE__*/ (function (t) {
          function e(t) {
            return (A(t) && !k(t) ? t : tn(t)).toSetSeq()
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            (e.of = function () {
              return e(arguments)
            }),
            (e.prototype.toSetSeq = function () {
              return this
            }),
            e
          )
        })(tt)
      ;(tt.isSeq = P),
        (tt.Keyed = te),
        (tt.Set = tr),
        (tt.Indexed = tn),
        (tt.prototype[D] = !0)
      var ti = /*@__PURE__*/ (function (t) {
          function e(t) {
            ;(this._array = t), (this.size = t.length)
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            (e.prototype.get = function (t, e) {
              return this.has(t) ? this._array[g(this, t)] : e
            }),
            (e.prototype.__iterate = function (t, e) {
              for (var n = this._array, r = n.length, i = 0; i !== r; ) {
                var o = e ? r - ++i : i++
                if (!1 === t(n[o], o, this)) break
              }
              return i
            }),
            (e.prototype.__iterator = function (t, e) {
              var n = this._array,
                r = n.length,
                i = 0
              return new L(function () {
                if (i === r) return K()
                var o = e ? r - ++i : i++
                return G(t, o, n[o])
              })
            }),
            e
          )
        })(tn),
        to = /*@__PURE__*/ (function (t) {
          function e(t) {
            var e = Object.keys(t).concat(
              Object.getOwnPropertySymbols
                ? Object.getOwnPropertySymbols(t)
                : [],
            )
            ;(this._object = t), (this._keys = e), (this.size = e.length)
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            (e.prototype.get = function (t, e) {
              return void 0 === e || this.has(t) ? this._object[t] : e
            }),
            (e.prototype.has = function (t) {
              return X.call(this._object, t)
            }),
            (e.prototype.__iterate = function (t, e) {
              for (
                var n = this._object, r = this._keys, i = r.length, o = 0;
                o !== i;

              ) {
                var a = r[e ? i - ++o : o++]
                if (!1 === t(n[a], a, this)) break
              }
              return o
            }),
            (e.prototype.__iterator = function (t, e) {
              var n = this._object,
                r = this._keys,
                i = r.length,
                o = 0
              return new L(function () {
                if (o === i) return K()
                var a = r[e ? i - ++o : o++]
                return G(t, a, n[a])
              })
            }),
            e
          )
        })(te)
      to.prototype[V] = !0
      var ta = /*@__PURE__*/ (function (t) {
        function e(t) {
          ;(this._collection = t), (this.size = t.length || t.size)
        }
        return (
          t && (e.__proto__ = t),
          (e.prototype = Object.create(t && t.prototype)),
          (e.prototype.constructor = e),
          (e.prototype.__iterateUncached = function (t, e) {
            if (e) return this.cacheResult().__iterate(t, e)
            var n,
              r = Q(this._collection),
              i = 0
            if (Y(r))
              for (; !(n = r.next()).done && !1 !== t(n.value, i++, this); );
            return i
          }),
          (e.prototype.__iteratorUncached = function (t, e) {
            if (e) return this.cacheResult().__iterator(t, e)
            var n = Q(this._collection)
            if (!Y(n)) return new L(K)
            var r = 0
            return new L(function () {
              var e = n.next()
              return e.done ? e : G(t, r++, e.value)
            })
          }),
          e
        )
      })(tn)
      function ts() {
        return r || (r = new ti([]))
      }
      function tu(t) {
        var e = tf(t)
        if (e) return e.fromEntrySeq()
        if ("object" == typeof t) return new to(t)
        throw TypeError(
          "Expected Array or collection object of [k, v] entries, or keyed object: " +
            t,
        )
      }
      function tc(t) {
        var e = tf(t)
        if (e) return e
        throw TypeError("Expected Array or collection object of values: " + t)
      }
      function tf(t) {
        return Z(t) ? new ti(t) : J(t) ? new ta(t) : void 0
      }
      var tl = "@@__IMMUTABLE_MAP__@@"
      function th(t) {
        return !!(t && t[tl])
      }
      function tp(t) {
        return th(t) && B(t)
      }
      function td(t) {
        return !!(
          t &&
          "function" == typeof t.equals &&
          "function" == typeof t.hashCode
        )
      }
      function ty(t, e) {
        if (t === e || (t != t && e != e)) return !0
        if (!t || !e) return !1
        if ("function" == typeof t.valueOf && "function" == typeof e.valueOf) {
          if ((t = t.valueOf()) === (e = e.valueOf()) || (t != t && e != e))
            return !0
          if (!t || !e) return !1
        }
        return !!(td(t) && td(e) && t.equals(e))
      }
      var tv =
        "function" == typeof Math.imul && -2 === Math.imul(0xffffffff, 2)
          ? Math.imul
          : function (t, e) {
              var n = 65535 & (t |= 0),
                r = 65535 & (e |= 0)
              return (
                (n * r + ((((t >>> 16) * r + n * (e >>> 16)) << 16) >>> 0)) | 0
              )
            }
      function t_(t) {
        return ((t >>> 1) & 0x40000000) | (0xbfffffff & t)
      }
      var tb = Object.prototype.valueOf
      function tg(t) {
        if (null == t) return tm(t)
        if ("function" == typeof t.hashCode) return t_(t.hashCode(t))
        var e,
          n,
          r =
            t.valueOf !== tb && "function" == typeof t.valueOf
              ? t.valueOf(t)
              : t
        if (null == r) return tm(r)
        switch (typeof r) {
          case "boolean":
            return r ? 0x42108421 : 0x42108420
          case "number":
            return (function (t) {
              if (t != t || t === 1 / 0) return 0
              var e = 0 | t
              for (e !== t && (e ^= 0xffffffff * t); t > 0xffffffff; )
                (t /= 0xffffffff), (e ^= t)
              return t_(e)
            })(r)
          case "string":
            return r.length > tR
              ? (void 0 === (e = tq[r]) &&
                  ((e = tw(r)),
                  tM === tk && ((tM = 0), (tq = {})),
                  tM++,
                  (tq[r] = e)),
                e)
              : tw(r)
          case "object":
          case "function":
            return (function (t) {
              var e
              if (
                (tA && void 0 !== (e = i.get(t))) ||
                void 0 !== (e = t[tE]) ||
                (!tx &&
                  (void 0 !==
                    (e =
                      t.propertyIsEnumerable && t.propertyIsEnumerable[tE]) ||
                    void 0 !==
                      (e = (function (t) {
                        if (t && t.nodeType > 0)
                          switch (t.nodeType) {
                            case 1:
                              return t.uniqueID
                            case 9:
                              return (
                                t.documentElement && t.documentElement.uniqueID
                              )
                          }
                      })(t))))
              )
                return e
              if (((e = tj()), tA)) i.set(t, e)
              else if (void 0 !== tS && !1 === tS(t))
                throw Error("Non-extensible objects are not allowed as keys.")
              else if (tx)
                Object.defineProperty(t, tE, {
                  enumerable: !1,
                  configurable: !1,
                  writable: !1,
                  value: e,
                })
              else if (
                void 0 !== t.propertyIsEnumerable &&
                t.propertyIsEnumerable ===
                  t.constructor.prototype.propertyIsEnumerable
              )
                (t.propertyIsEnumerable = function () {
                  return this.constructor.prototype.propertyIsEnumerable.apply(
                    this,
                    arguments,
                  )
                }),
                  (t.propertyIsEnumerable[tE] = e)
              else if (void 0 !== t.nodeType) t[tE] = e
              else
                throw Error(
                  "Unable to set a non-enumerable property on object.",
                )
              return e
            })(r)
          case "symbol":
            return void 0 !== (n = tO[r]) || ((n = tj()), (tO[r] = n)), n
          default:
            if ("function" == typeof r.toString) return tw(r.toString())
            throw Error("Value type " + typeof r + " cannot be hashed.")
        }
      }
      function tm(t) {
        return null === t ? 0x42108422 : 0x42108423
      }
      function tw(t) {
        for (var e = 0, n = 0; n < t.length; n++)
          e = (31 * e + t.charCodeAt(n)) | 0
        return t_(e)
      }
      var tS = Object.isExtensible,
        tx = (function () {
          try {
            return Object.defineProperty({}, "@", {}), !0
          } catch (t) {
            return !1
          }
        })()
      function tj() {
        var t = ++tI
        return 0x40000000 & tI && (tI = 0), t
      }
      var tA = "function" == typeof WeakMap
      tA && (i = new WeakMap())
      var tO = Object.create(null),
        tI = 0,
        tE = "__immutablehash__"
      "function" == typeof Symbol && (tE = Symbol(tE))
      var tR = 16,
        tk = 255,
        tM = 0,
        tq = {},
        tT = /*@__PURE__*/ (function (t) {
          function e(t, e) {
            ;(this._iter = t), (this._useKeys = e), (this.size = t.size)
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            (e.prototype.get = function (t, e) {
              return this._iter.get(t, e)
            }),
            (e.prototype.has = function (t) {
              return this._iter.has(t)
            }),
            (e.prototype.valueSeq = function () {
              return this._iter.valueSeq()
            }),
            (e.prototype.reverse = function () {
              var t = this,
                e = tF(this, !0)
              return (
                this._useKeys ||
                  (e.valueSeq = function () {
                    return t._iter.toSeq().reverse()
                  }),
                e
              )
            }),
            (e.prototype.map = function (t, e) {
              var n = this,
                r = tN(this, t, e)
              return (
                this._useKeys ||
                  (r.valueSeq = function () {
                    return n._iter.toSeq().map(t, e)
                  }),
                r
              )
            }),
            (e.prototype.__iterate = function (t, e) {
              var n = this
              return this._iter.__iterate(function (e, r) {
                return t(e, r, n)
              }, e)
            }),
            (e.prototype.__iterator = function (t, e) {
              return this._iter.__iterator(t, e)
            }),
            e
          )
        })(te)
      tT.prototype[V] = !0
      var tC = /*@__PURE__*/ (function (t) {
          function e(t) {
            ;(this._iter = t), (this.size = t.size)
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            (e.prototype.includes = function (t) {
              return this._iter.includes(t)
            }),
            (e.prototype.__iterate = function (t, e) {
              var n = this,
                r = 0
              return (
                e && b(this),
                this._iter.__iterate(function (i) {
                  return t(i, e ? n.size - ++r : r++, n)
                }, e)
              )
            }),
            (e.prototype.__iterator = function (t, e) {
              var n = this,
                r = this._iter.__iterator(1, e),
                i = 0
              return (
                e && b(this),
                new L(function () {
                  var o = r.next()
                  return o.done ? o : G(t, e ? n.size - ++i : i++, o.value, o)
                })
              )
            }),
            e
          )
        })(tn),
        tD = /*@__PURE__*/ (function (t) {
          function e(t) {
            ;(this._iter = t), (this.size = t.size)
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            (e.prototype.has = function (t) {
              return this._iter.includes(t)
            }),
            (e.prototype.__iterate = function (t, e) {
              var n = this
              return this._iter.__iterate(function (e) {
                return t(e, e, n)
              }, e)
            }),
            (e.prototype.__iterator = function (t, e) {
              var n = this._iter.__iterator(1, e)
              return new L(function () {
                var e = n.next()
                return e.done ? e : G(t, e.value, e.value, e)
              })
            }),
            e
          )
        })(tr),
        tP = /*@__PURE__*/ (function (t) {
          function e(t) {
            ;(this._iter = t), (this.size = t.size)
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            (e.prototype.entrySeq = function () {
              return this._iter.toSeq()
            }),
            (e.prototype.__iterate = function (t, e) {
              var n = this
              return this._iter.__iterate(function (e) {
                if (e) {
                  tY(e)
                  var r = A(e)
                  return t(r ? e.get(1) : e[1], r ? e.get(0) : e[0], n)
                }
              }, e)
            }),
            (e.prototype.__iterator = function (t, e) {
              var n = this._iter.__iterator(1, e)
              return new L(function () {
                for (;;) {
                  var e = n.next()
                  if (e.done) return e
                  var r = e.value
                  if (r) {
                    tY(r)
                    var i = A(r)
                    return G(t, i ? r.get(0) : r[0], i ? r.get(1) : r[1], e)
                  }
                }
              })
            }),
            e
          )
        })(te)
      function tz(t) {
        var e = t$(t)
        return (
          (e._iter = t),
          (e.size = t.size),
          (e.flip = function () {
            return t
          }),
          (e.reverse = function () {
            var e = t.reverse.apply(this)
            return (
              (e.flip = function () {
                return t.reverse()
              }),
              e
            )
          }),
          (e.has = function (e) {
            return t.includes(e)
          }),
          (e.includes = function (e) {
            return t.has(e)
          }),
          (e.cacheResult = tX),
          (e.__iterateUncached = function (e, n) {
            var r = this
            return t.__iterate(function (t, n) {
              return !1 !== e(n, t, r)
            }, n)
          }),
          (e.__iteratorUncached = function (e, n) {
            if (2 === e) {
              var r = t.__iterator(e, n)
              return new L(function () {
                var t = r.next()
                if (!t.done) {
                  var e = t.value[0]
                  ;(t.value[0] = t.value[1]), (t.value[1] = e)
                }
                return t
              })
            }
            return t.__iterator(1 === e ? 0 : 1, n)
          }),
          e
        )
      }
      function tN(t, e, n) {
        var r = t$(t)
        return (
          (r.size = t.size),
          (r.has = function (e) {
            return t.has(e)
          }),
          (r.get = function (r, i) {
            var o = t.get(r, d)
            return o === d ? i : e.call(n, o, r, t)
          }),
          (r.__iterateUncached = function (r, i) {
            var o = this
            return t.__iterate(function (t, i, a) {
              return !1 !== r(e.call(n, t, i, a), i, o)
            }, i)
          }),
          (r.__iteratorUncached = function (r, i) {
            var o = t.__iterator(2, i)
            return new L(function () {
              var i = o.next()
              if (i.done) return i
              var a = i.value,
                s = a[0]
              return G(r, s, e.call(n, a[1], s, t), i)
            })
          }),
          r
        )
      }
      function tF(t, e) {
        var n = this,
          r = t$(t)
        return (
          (r._iter = t),
          (r.size = t.size),
          (r.reverse = function () {
            return t
          }),
          t.flip &&
            (r.flip = function () {
              var e = tz(t)
              return (
                (e.reverse = function () {
                  return t.flip()
                }),
                e
              )
            }),
          (r.get = function (n, r) {
            return t.get(e ? n : -1 - n, r)
          }),
          (r.has = function (n) {
            return t.has(e ? n : -1 - n)
          }),
          (r.includes = function (e) {
            return t.includes(e)
          }),
          (r.cacheResult = tX),
          (r.__iterate = function (n, r) {
            var i = this,
              o = 0
            return (
              r && b(t),
              t.__iterate(function (t, a) {
                return n(t, e ? a : r ? i.size - ++o : o++, i)
              }, !r)
            )
          }),
          (r.__iterator = function (r, i) {
            var o = 0
            i && b(t)
            var a = t.__iterator(2, !i)
            return new L(function () {
              var t = a.next()
              if (t.done) return t
              var s = t.value
              return G(r, e ? s[0] : i ? n.size - ++o : o++, s[1], t)
            })
          }),
          r
        )
      }
      function tV(t, e, n, r) {
        var i = t$(t)
        return (
          r &&
            ((i.has = function (r) {
              var i = t.get(r, d)
              return i !== d && !!e.call(n, i, r, t)
            }),
            (i.get = function (r, i) {
              var o = t.get(r, d)
              return o !== d && e.call(n, o, r, t) ? o : i
            })),
          (i.__iterateUncached = function (i, o) {
            var a = this,
              s = 0
            return (
              t.__iterate(function (t, o, u) {
                if (e.call(n, t, o, u)) return s++, i(t, r ? o : s - 1, a)
              }, o),
              s
            )
          }),
          (i.__iteratorUncached = function (i, o) {
            var a = t.__iterator(2, o),
              s = 0
            return new L(function () {
              for (;;) {
                var o = a.next()
                if (o.done) return o
                var u = o.value,
                  c = u[0],
                  f = u[1]
                if (e.call(n, f, c, t)) return G(i, r ? c : s++, f, o)
              }
            })
          }),
          i
        )
      }
      function tB(t, e, n, r) {
        var i,
          o = t.size
        if (w(e, n, o)) return t
        if (void 0 === o && (e < 0 || n < 0))
          return tB(t.toSeq().cacheResult(), e, n, r)
        var a = S(e, o, 0),
          s = S(n, o, o) - a
        s == s && (i = s < 0 ? 0 : s)
        var u = t$(t)
        return (
          (u.size = 0 === i ? i : (t.size && i) || void 0),
          !r &&
            P(t) &&
            i >= 0 &&
            (u.get = function (e, n) {
              return (e = g(this, e)) >= 0 && e < i ? t.get(e + a, n) : n
            }),
          (u.__iterateUncached = function (e, n) {
            var o = this
            if (0 === i) return 0
            if (n) return this.cacheResult().__iterate(e, n)
            var s = 0,
              u = !0,
              c = 0
            return (
              t.__iterate(function (t, n) {
                if (!(u && (u = s++ < a)))
                  return c++, !1 !== e(t, r ? n : c - 1, o) && c !== i
              }),
              c
            )
          }),
          (u.__iteratorUncached = function (e, n) {
            if (0 !== i && n) return this.cacheResult().__iterator(e, n)
            if (0 === i) return new L(K)
            var o = t.__iterator(e, n),
              s = 0,
              u = 0
            return new L(function () {
              for (; s++ < a; ) o.next()
              if (++u > i) return K()
              var t = o.next()
              return r || 1 === e || t.done
                ? t
                : 0 === e
                  ? G(e, u - 1, void 0, t)
                  : G(e, u - 1, t.value[1], t)
            })
          }),
          u
        )
      }
      function tW(t, e, n, r) {
        var i = t$(t)
        return (
          (i.__iterateUncached = function (i, o) {
            var a = this
            if (o) return this.cacheResult().__iterate(i, o)
            var s = !0,
              u = 0
            return (
              t.__iterate(function (t, o, c) {
                if (!(s && (s = e.call(n, t, o, c))))
                  return u++, i(t, r ? o : u - 1, a)
              }),
              u
            )
          }),
          (i.__iteratorUncached = function (i, o) {
            var a = this
            if (o) return this.cacheResult().__iterator(i, o)
            var s = t.__iterator(2, o),
              u = !0,
              c = 0
            return new L(function () {
              do {
                if ((t = s.next()).done) {
                  if (r || 1 === i) return t
                  if (0 === i) return G(i, c++, void 0, t)
                  return G(i, c++, t.value[1], t)
                }
                var t,
                  o,
                  f,
                  l = t.value
                ;(o = l[0]), (f = l[1]), u && (u = e.call(n, f, o, a))
              } while (u)
              return 2 === i ? t : G(i, o, f, t)
            })
          }),
          i
        )
      }
      function tU(t, e, n) {
        var r = t$(t)
        return (
          (r.__iterateUncached = function (i, o) {
            if (o) return this.cacheResult().__iterate(i, o)
            var a = 0,
              s = !1
            return (
              (function t(u, c) {
                u.__iterate(function (o, u) {
                  return (
                    (!e || c < e) && A(o)
                      ? t(o, c + 1)
                      : (a++, !1 === i(o, n ? u : a - 1, r) && (s = !0)),
                    !s
                  )
                }, o)
              })(t, 0),
              a
            )
          }),
          (r.__iteratorUncached = function (r, i) {
            if (i) return this.cacheResult().__iterator(r, i)
            var o = t.__iterator(r, i),
              a = [],
              s = 0
            return new L(function () {
              for (; o; ) {
                var t = o.next()
                if (!1 !== t.done) {
                  o = a.pop()
                  continue
                }
                var u = t.value
                if ((2 === r && (u = u[1]), !((!e || a.length < e) && A(u))))
                  return n ? t : G(r, s++, u, t)
                a.push(o), (o = u.__iterator(r, i))
              }
              return K()
            })
          }),
          r
        )
      }
      function tH(t, e, n) {
        e || (e = tZ)
        var r = I(t),
          i = 0,
          o = t
            .toSeq()
            .map(function (e, r) {
              return [r, e, i++, n ? n(e, r, t) : e]
            })
            .valueSeq()
            .toArray()
        return (
          o
            .sort(function (t, n) {
              return e(t[3], n[3]) || t[2] - n[2]
            })
            .forEach(
              r
                ? function (t, e) {
                    o[e].length = 2
                  }
                : function (t, e) {
                    o[e] = t[1]
                  },
            ),
          r ? te(o) : R(t) ? tn(o) : tr(o)
        )
      }
      function tL(t, e, n) {
        if ((e || (e = tZ), n)) {
          var r = t
            .toSeq()
            .map(function (e, r) {
              return [e, n(e, r, t)]
            })
            .reduce(function (t, n) {
              return tG(e, t[1], n[1]) ? n : t
            })
          return r && r[0]
        }
        return t.reduce(function (t, n) {
          return tG(e, t, n) ? n : t
        })
      }
      function tG(t, e, n) {
        var r = t(n, e)
        return (0 === r && n !== e && (null == n || n != n)) || r > 0
      }
      function tK(t, e, n, r) {
        var i = t$(t),
          o = new ti(n).map(function (t) {
            return t.size
          })
        return (
          (i.size = r ? o.max() : o.min()),
          (i.__iterate = function (t, e) {
            for (
              var n, r = this.__iterator(1, e), i = 0;
              !(n = r.next()).done && !1 !== t(n.value, i++, this);

            );
            return i
          }),
          (i.__iteratorUncached = function (t, i) {
            var o = n.map(function (t) {
                return (t = M(t)), Q(i ? t.reverse() : t)
              }),
              a = 0,
              s = !1
            return new L(function () {
              var n
              return (s ||
                ((n = o.map(function (t) {
                  return t.next()
                })),
                (s = r
                  ? n.every(function (t) {
                      return t.done
                    })
                  : n.some(function (t) {
                      return t.done
                    }))),
              s)
                ? K()
                : G(
                    t,
                    a++,
                    e.apply(
                      null,
                      n.map(function (t) {
                        return t.value
                      }),
                    ),
                  )
            })
          }),
          i
        )
      }
      function tJ(t, e) {
        return t === e ? t : P(t) ? e : t.constructor(e)
      }
      function tY(t) {
        if (t !== Object(t)) throw TypeError("Expected [K, V] tuple: " + t)
      }
      function tQ(t) {
        return I(t) ? q : R(t) ? T : C
      }
      function t$(t) {
        return Object.create((I(t) ? te : R(t) ? tn : tr).prototype)
      }
      function tX() {
        return this._iter.cacheResult
          ? (this._iter.cacheResult(), (this.size = this._iter.size), this)
          : tt.prototype.cacheResult.call(this)
      }
      function tZ(t, e) {
        return void 0 === t && void 0 === e
          ? 0
          : void 0 === t
            ? 1
            : void 0 === e
              ? -1
              : t > e
                ? 1
                : t < e
                  ? -1
                  : 0
      }
      function t0(t, e) {
        e = e || 0
        for (var n = Math.max(0, t.length - e), r = Array(n), i = 0; i < n; i++)
          r[i] = t[i + e]
        return r
      }
      function t1(t, e) {
        if (!t) throw Error(e)
      }
      function t2(t) {
        t1(t !== 1 / 0, "Cannot perform this action with an infinite size.")
      }
      function t3(t) {
        if (Z(t) && "string" != typeof t) return t
        if (B(t)) return t.toArray()
        throw TypeError(
          "Invalid keyPath: expected Ordered Collection or Array: " + t,
        )
      }
      tC.prototype.cacheResult =
        tT.prototype.cacheResult =
        tD.prototype.cacheResult =
        tP.prototype.cacheResult =
          tX
      var t5 = Object.prototype.toString
      function t4(t) {
        if (!t || "object" != typeof t || "[object Object]" !== t5.call(t))
          return !1
        var e = Object.getPrototypeOf(t)
        if (null === e) return !0
        for (var n = e, r = Object.getPrototypeOf(e); null !== r; )
          r = Object.getPrototypeOf((n = r))
        return n === e
      }
      function t6(t) {
        return "object" == typeof t && (F(t) || Array.isArray(t) || t4(t))
      }
      function t8(t) {
        try {
          return "string" == typeof t ? JSON.stringify(t) : String(t)
        } catch (e) {
          return JSON.stringify(t)
        }
      }
      function t7(t, e) {
        return F(t) ? t.has(e) : t6(t) && X.call(t, e)
      }
      function t9(t, e, n) {
        return F(t)
          ? t.get(e, n)
          : t7(t, e)
            ? "function" == typeof t.get
              ? t.get(e)
              : t[e]
            : n
      }
      function et(t) {
        if (Array.isArray(t)) return t0(t)
        var e = {}
        for (var n in t) X.call(t, n) && (e[n] = t[n])
        return e
      }
      function ee(t, e) {
        if (!t6(t))
          throw TypeError("Cannot update non-data-structure value: " + t)
        if (F(t)) {
          if (!t.remove)
            throw TypeError(
              "Cannot update immutable value without .remove() method: " + t,
            )
          return t.remove(e)
        }
        if (!X.call(t, e)) return t
        var n = et(t)
        return Array.isArray(n) ? n.splice(e, 1) : delete n[e], n
      }
      function en(t, e, n) {
        if (!t6(t))
          throw TypeError("Cannot update non-data-structure value: " + t)
        if (F(t)) {
          if (!t.set)
            throw TypeError(
              "Cannot update immutable value without .set() method: " + t,
            )
          return t.set(e, n)
        }
        if (X.call(t, e) && n === t[e]) return t
        var r = et(t)
        return (r[e] = n), r
      }
      function er(t, e, n, r) {
        r || ((r = n), (n = void 0))
        var i = (function t(e, n, r, i, o, a) {
          var s = n === d
          if (i === r.length) {
            var u = s ? o : n,
              c = a(u)
            return c === u ? n : c
          }
          if (!s && !t6(n))
            throw TypeError(
              "Cannot update within non-data-structure value in path [" +
                r.slice(0, i).map(t8) +
                "]: " +
                n,
            )
          var f = r[i],
            l = s ? d : t9(n, f, d),
            h = t(l === d ? e : F(l), l, r, i + 1, o, a)
          return h === l
            ? n
            : h === d
              ? ee(n, f)
              : en(s ? (e ? eF() : {}) : n, f, h)
        })(F(t), t, t3(e), 0, n, r)
        return i === d ? n : i
      }
      function ei(t, e, n) {
        return er(t, e, d, function () {
          return n
        })
      }
      function eo(t, e) {
        return ei(this, t, e)
      }
      function ea(t, e) {
        return er(t, e, function () {
          return d
        })
      }
      function es(t) {
        return ea(this, t)
      }
      function eu(t, e, n, r) {
        return er(t, [e], n, r)
      }
      function ec(t, e, n) {
        return 1 == arguments.length ? t(this) : eu(this, t, e, n)
      }
      function ef(t, e, n) {
        return er(this, t, e, n)
      }
      function el() {
        for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e]
        return ep(this, t)
      }
      function eh(t) {
        for (var e = [], n = arguments.length - 1; n-- > 0; )
          e[n] = arguments[n + 1]
        if ("function" != typeof t)
          throw TypeError("Invalid merger function: " + t)
        return ep(this, e, t)
      }
      function ep(t, e, n) {
        for (var r = [], i = 0; i < e.length; i++) {
          var o = q(e[i])
          0 !== o.size && r.push(o)
        }
        return 0 === r.length
          ? t
          : 0 !== t.toSeq().size || t.__ownerID || 1 !== r.length
            ? t.withMutations(function (t) {
                for (
                  var e = n
                      ? function (e, r) {
                          eu(t, r, d, function (t) {
                            return t === d ? e : n(t, e, r)
                          })
                        }
                      : function (e, n) {
                          t.set(n, e)
                        },
                    i = 0;
                  i < r.length;
                  i++
                )
                  r[i].forEach(e)
              })
            : t.constructor(r[0])
      }
      function ed(t) {
        for (var e = [], n = arguments.length - 1; n-- > 0; )
          e[n] = arguments[n + 1]
        return eg(t, e)
      }
      function ey(t, e) {
        for (var n = [], r = arguments.length - 2; r-- > 0; )
          n[r] = arguments[r + 2]
        return eg(e, n, t)
      }
      function ev(t) {
        for (var e = [], n = arguments.length - 1; n-- > 0; )
          e[n] = arguments[n + 1]
        return eb(t, e)
      }
      function e_(t, e) {
        for (var n = [], r = arguments.length - 2; r-- > 0; )
          n[r] = arguments[r + 2]
        return eb(e, n, t)
      }
      function eb(t, e, n) {
        return eg(t, e, function t(e, r, i) {
          var o, a
          return t6(e) &&
            t6(r) &&
            ((o = tt(e)), (a = tt(r)), R(o) === R(a) && I(o) === I(a))
            ? eg(e, [r], t)
            : n
              ? n(e, r, i)
              : r
        })
      }
      function eg(t, e, n) {
        if (!t6(t))
          throw TypeError("Cannot merge into non-data-structure value: " + t)
        if (F(t))
          return "function" == typeof n && t.mergeWith
            ? t.mergeWith.apply(t, [n].concat(e))
            : t.merge
              ? t.merge.apply(t, e)
              : t.concat.apply(t, e)
        for (
          var r = Array.isArray(t),
            i = t,
            o = r ? T : q,
            a = r
              ? function (e) {
                  i === t && (i = et(i)), i.push(e)
                }
              : function (e, r) {
                  var o = X.call(i, r),
                    a = o && n ? n(i[r], e, r) : e
                  ;(o && a === i[r]) || (i === t && (i = et(i)), (i[r] = a))
                },
            s = 0;
          s < e.length;
          s++
        )
          o(e[s]).forEach(a)
        return i
      }
      function em() {
        for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e]
        return eb(this, t)
      }
      function ew(t) {
        for (var e = [], n = arguments.length - 1; n-- > 0; )
          e[n] = arguments[n + 1]
        return eb(this, e, t)
      }
      function eS(t) {
        for (var e = [], n = arguments.length - 1; n-- > 0; )
          e[n] = arguments[n + 1]
        return er(this, t, eF(), function (t) {
          return eg(t, e)
        })
      }
      function ex(t) {
        for (var e = [], n = arguments.length - 1; n-- > 0; )
          e[n] = arguments[n + 1]
        return er(this, t, eF(), function (t) {
          return eb(t, e)
        })
      }
      function ej(t) {
        var e = this.asMutable()
        return t(e), e.wasAltered() ? e.__ensureOwner(this.__ownerID) : this
      }
      function eA() {
        return this.__ownerID ? this : this.__ensureOwner(new _())
      }
      function eO() {
        return this.__ensureOwner()
      }
      function eI() {
        return this.__altered
      }
      var eE = /*@__PURE__*/ (function (t) {
        function e(e) {
          return null == e
            ? eF()
            : th(e) && !B(e)
              ? e
              : eF().withMutations(function (n) {
                  var r = t(e)
                  t2(r.size),
                    r.forEach(function (t, e) {
                      return n.set(e, t)
                    })
                })
        }
        return (
          t && (e.__proto__ = t),
          (e.prototype = Object.create(t && t.prototype)),
          (e.prototype.constructor = e),
          (e.of = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e]
            return eF().withMutations(function (e) {
              for (var n = 0; n < t.length; n += 2) {
                if (n + 1 >= t.length)
                  throw Error("Missing value for key: " + t[n])
                e.set(t[n], t[n + 1])
              }
            })
          }),
          (e.prototype.toString = function () {
            return this.__toString("Map {", "}")
          }),
          (e.prototype.get = function (t, e) {
            return this._root ? this._root.get(0, void 0, t, e) : e
          }),
          (e.prototype.set = function (t, e) {
            return eV(this, t, e)
          }),
          (e.prototype.remove = function (t) {
            return eV(this, t, d)
          }),
          (e.prototype.deleteAll = function (t) {
            var e = M(t)
            return 0 === e.size
              ? this
              : this.withMutations(function (t) {
                  e.forEach(function (e) {
                    return t.remove(e)
                  })
                })
          }),
          (e.prototype.clear = function () {
            return 0 === this.size
              ? this
              : this.__ownerID
                ? ((this.size = 0),
                  (this._root = null),
                  (this.__hash = void 0),
                  (this.__altered = !0),
                  this)
                : eF()
          }),
          (e.prototype.sort = function (t) {
            return e9(tH(this, t))
          }),
          (e.prototype.sortBy = function (t, e) {
            return e9(tH(this, e, t))
          }),
          (e.prototype.map = function (t, e) {
            var n = this
            return this.withMutations(function (r) {
              r.forEach(function (i, o) {
                r.set(o, t.call(e, i, o, n))
              })
            })
          }),
          (e.prototype.__iterator = function (t, e) {
            return new eD(this, t, e)
          }),
          (e.prototype.__iterate = function (t, e) {
            var n = this,
              r = 0
            return (
              this._root &&
                this._root.iterate(function (e) {
                  return r++, t(e[1], e[0], n)
                }, e),
              r
            )
          }),
          (e.prototype.__ensureOwner = function (t) {
            return t === this.__ownerID
              ? this
              : t
                ? eN(this.size, this._root, t, this.__hash)
                : 0 === this.size
                  ? eF()
                  : ((this.__ownerID = t), (this.__altered = !1), this)
          }),
          e
        )
      })(q)
      eE.isMap = th
      var eR = eE.prototype
      ;(eR[tl] = !0),
        (eR[p] = eR.remove),
        (eR.removeAll = eR.deleteAll),
        (eR.setIn = eo),
        (eR.removeIn = eR.deleteIn = es),
        (eR.update = ec),
        (eR.updateIn = ef),
        (eR.merge = eR.concat = el),
        (eR.mergeWith = eh),
        (eR.mergeDeep = em),
        (eR.mergeDeepWith = ew),
        (eR.mergeIn = eS),
        (eR.mergeDeepIn = ex),
        (eR.withMutations = ej),
        (eR.wasAltered = eI),
        (eR.asImmutable = eO),
        (eR["@@transducer/init"] = eR.asMutable = eA),
        (eR["@@transducer/step"] = function (t, e) {
          return t.set(e[0], e[1])
        }),
        (eR["@@transducer/result"] = function (t) {
          return t.asImmutable()
        })
      var ek = function (t, e) {
        ;(this.ownerID = t), (this.entries = e)
      }
      ;(ek.prototype.get = function (t, e, n, r) {
        for (var i = this.entries, o = 0, a = i.length; o < a; o++)
          if (ty(n, i[o][0])) return i[o][1]
        return r
      }),
        (ek.prototype.update = function (t, e, n, r, i, o, a) {
          for (
            var s = i === d, u = this.entries, c = 0, f = u.length;
            c < f && !ty(r, u[c][0]);
            c++
          );
          var l = c < f
          if (l ? u[c][1] === i : s) return this
          if ((v(a), (s || !l) && v(o), !s || 1 !== u.length)) {
            if (!l && !s && u.length >= eG)
              return (function (t, e, n, r) {
                t || (t = new _())
                for (
                  var i = new eC(t, tg(n), [n, r]), o = 0;
                  o < e.length;
                  o++
                ) {
                  var a = e[o]
                  i = i.update(t, 0, void 0, a[0], a[1])
                }
                return i
              })(t, u, r, i)
            var h = t && t === this.ownerID,
              p = h ? u : t0(u)
            return (l
              ? s
                ? c === f - 1
                  ? p.pop()
                  : (p[c] = p.pop())
                : (p[c] = [r, i])
              : p.push([r, i]),
            h)
              ? ((this.entries = p), this)
              : new ek(t, p)
          }
        })
      var eM = function (t, e, n) {
        ;(this.ownerID = t), (this.bitmap = e), (this.nodes = n)
      }
      ;(eM.prototype.get = function (t, e, n, r) {
        void 0 === e && (e = tg(n))
        var i = 1 << ((0 === t ? e : e >>> t) & 31),
          o = this.bitmap
        return (o & i) == 0
          ? r
          : this.nodes[eH(o & (i - 1))].get(t + 5, e, n, r)
      }),
        (eM.prototype.update = function (t, e, n, r, i, o, a) {
          void 0 === n && (n = tg(r))
          var s = (0 === e ? n : n >>> e) & 31,
            u = 1 << s,
            c = this.bitmap,
            f = (c & u) != 0
          if (!f && i === d) return this
          var l = eH(c & (u - 1)),
            h = this.nodes,
            p = f ? h[l] : void 0,
            y = eB(p, t, e + 5, n, r, i, o, a)
          if (y === p) return this
          if (!f && y && h.length >= eK)
            return (function (t, e, n, r, i) {
              for (var o = 0, a = Array(32), s = 0; 0 !== n; s++, n >>>= 1)
                a[s] = 1 & n ? e[o++] : void 0
              return (a[r] = i), new eq(t, o + 1, a)
            })(t, h, c, s, y)
          if (f && !y && 2 === h.length && eW(h[1 ^ l])) return h[1 ^ l]
          if (f && y && 1 === h.length && eW(y)) return y
          var v = t && t === this.ownerID,
            _ = f ? (y ? c : c ^ u) : c | u,
            b = f
              ? y
                ? eL(h, l, y, v)
                : (function (t, e, n) {
                    var r = t.length - 1
                    if (n && e === r) return t.pop(), t
                    for (var i = Array(r), o = 0, a = 0; a < r; a++)
                      a === e && (o = 1), (i[a] = t[a + o])
                    return i
                  })(h, l, v)
              : (function (t, e, n, r) {
                  var i = t.length + 1
                  if (r && e + 1 === i) return (t[e] = n), t
                  for (var o = Array(i), a = 0, s = 0; s < i; s++)
                    s === e ? ((o[s] = n), (a = -1)) : (o[s] = t[s + a])
                  return o
                })(h, l, y, v)
          return v
            ? ((this.bitmap = _), (this.nodes = b), this)
            : new eM(t, _, b)
        })
      var eq = function (t, e, n) {
        ;(this.ownerID = t), (this.count = e), (this.nodes = n)
      }
      ;(eq.prototype.get = function (t, e, n, r) {
        void 0 === e && (e = tg(n))
        var i = (0 === t ? e : e >>> t) & 31,
          o = this.nodes[i]
        return o ? o.get(t + 5, e, n, r) : r
      }),
        (eq.prototype.update = function (t, e, n, r, i, o, a) {
          void 0 === n && (n = tg(r))
          var s = (0 === e ? n : n >>> e) & 31,
            u = i === d,
            c = this.nodes,
            f = c[s]
          if (u && !f) return this
          var l = eB(f, t, e + 5, n, r, i, o, a)
          if (l === f) return this
          var h = this.count
          if (f) {
            if (!l && --h < eJ)
              return (function (t, e, n, r) {
                for (
                  var i = 0, o = 0, a = Array(n), s = 0, u = 1, c = e.length;
                  s < c;
                  s++, u <<= 1
                ) {
                  var f = e[s]
                  void 0 !== f && s !== r && ((i |= u), (a[o++] = f))
                }
                return new eM(t, i, a)
              })(t, c, h, s)
          } else h++
          var p = t && t === this.ownerID,
            y = eL(c, s, l, p)
          return p
            ? ((this.count = h), (this.nodes = y), this)
            : new eq(t, h, y)
        })
      var eT = function (t, e, n) {
        ;(this.ownerID = t), (this.keyHash = e), (this.entries = n)
      }
      ;(eT.prototype.get = function (t, e, n, r) {
        for (var i = this.entries, o = 0, a = i.length; o < a; o++)
          if (ty(n, i[o][0])) return i[o][1]
        return r
      }),
        (eT.prototype.update = function (t, e, n, r, i, o, a) {
          void 0 === n && (n = tg(r))
          var s = i === d
          if (n !== this.keyHash)
            return s ? this : (v(a), v(o), eU(this, t, e, n, [r, i]))
          for (
            var u = this.entries, c = 0, f = u.length;
            c < f && !ty(r, u[c][0]);
            c++
          );
          var l = c < f
          if (l ? u[c][1] === i : s) return this
          if ((v(a), (s || !l) && v(o), s && 2 === f))
            return new eC(t, this.keyHash, u[1 ^ c])
          var h = t && t === this.ownerID,
            p = h ? u : t0(u)
          return (l
            ? s
              ? c === f - 1
                ? p.pop()
                : (p[c] = p.pop())
              : (p[c] = [r, i])
            : p.push([r, i]),
          h)
            ? ((this.entries = p), this)
            : new eT(t, this.keyHash, p)
        })
      var eC = function (t, e, n) {
        ;(this.ownerID = t), (this.keyHash = e), (this.entry = n)
      }
      ;(eC.prototype.get = function (t, e, n, r) {
        return ty(n, this.entry[0]) ? this.entry[1] : r
      }),
        (eC.prototype.update = function (t, e, n, r, i, o, a) {
          var s = i === d,
            u = ty(r, this.entry[0])
          if (u ? i === this.entry[1] : s) return this
          if ((v(a), s)) {
            v(o)
            return
          }
          return u
            ? t && t === this.ownerID
              ? ((this.entry[1] = i), this)
              : new eC(t, this.keyHash, [r, i])
            : (v(o), eU(this, t, e, tg(r), [r, i]))
        }),
        (ek.prototype.iterate = eT.prototype.iterate =
          function (t, e) {
            for (var n = this.entries, r = 0, i = n.length - 1; r <= i; r++)
              if (!1 === t(n[e ? i - r : r])) return !1
          }),
        (eM.prototype.iterate = eq.prototype.iterate =
          function (t, e) {
            for (var n = this.nodes, r = 0, i = n.length - 1; r <= i; r++) {
              var o = n[e ? i - r : r]
              if (o && !1 === o.iterate(t, e)) return !1
            }
          }),
        (eC.prototype.iterate = function (t, e) {
          return t(this.entry)
        })
      var eD = /*@__PURE__*/ (function (t) {
        function e(t, e, n) {
          ;(this._type = e),
            (this._reverse = n),
            (this._stack = t._root && ez(t._root))
        }
        return (
          t && (e.__proto__ = t),
          (e.prototype = Object.create(t && t.prototype)),
          (e.prototype.constructor = e),
          (e.prototype.next = function () {
            for (var t = this._type, e = this._stack; e; ) {
              var n = e.node,
                r = e.index++,
                i = void 0
              if (n.entry) {
                if (0 === r) return eP(t, n.entry)
              } else if (n.entries) {
                if (r <= (i = n.entries.length - 1))
                  return eP(t, n.entries[this._reverse ? i - r : r])
              } else if (r <= (i = n.nodes.length - 1)) {
                var o = n.nodes[this._reverse ? i - r : r]
                if (o) {
                  if (o.entry) return eP(t, o.entry)
                  e = this._stack = ez(o, e)
                }
                continue
              }
              e = this._stack = this._stack.__prev
            }
            return K()
          }),
          e
        )
      })(L)
      function eP(t, e) {
        return G(t, e[0], e[1])
      }
      function ez(t, e) {
        return { node: t, index: 0, __prev: e }
      }
      function eN(t, e, n, r) {
        var i = Object.create(eR)
        return (
          (i.size = t),
          (i._root = e),
          (i.__ownerID = n),
          (i.__hash = r),
          (i.__altered = !1),
          i
        )
      }
      function eF() {
        return o || (o = eN(0))
      }
      function eV(t, e, n) {
        if (t._root) {
          var r,
            i,
            o = y(),
            a = y()
          if (((r = eB(t._root, t.__ownerID, 0, void 0, e, n, o, a)), !a.value))
            return t
          i = t.size + (o.value ? (n === d ? -1 : 1) : 0)
        } else {
          if (n === d) return t
          ;(i = 1), (r = new ek(t.__ownerID, [[e, n]]))
        }
        return t.__ownerID
          ? ((t.size = i),
            (t._root = r),
            (t.__hash = void 0),
            (t.__altered = !0),
            t)
          : r
            ? eN(i, r)
            : eF()
      }
      function eB(t, e, n, r, i, o, a, s) {
        return t
          ? t.update(e, n, r, i, o, a, s)
          : o === d
            ? t
            : (v(s), v(a), new eC(e, r, [i, o]))
      }
      function eW(t) {
        return t.constructor === eC || t.constructor === eT
      }
      function eU(t, e, n, r, i) {
        if (t.keyHash === r) return new eT(e, r, [t.entry, i])
        var o,
          a = (0 === n ? t.keyHash : t.keyHash >>> n) & 31,
          s = (0 === n ? r : r >>> n) & 31,
          u =
            a === s
              ? [eU(t, e, n + 5, r, i)]
              : ((o = new eC(e, r, i)), a < s ? [t, o] : [o, t])
        return new eM(e, (1 << a) | (1 << s), u)
      }
      function eH(t) {
        return (
          (t -= (t >> 1) & 0x55555555),
          (t =
            ((t = (0x33333333 & t) + ((t >> 2) & 0x33333333)) + (t >> 4)) &
            0xf0f0f0f),
          (t += t >> 8),
          127 & (t += t >> 16)
        )
      }
      function eL(t, e, n, r) {
        var i = r ? t : t0(t)
        return (i[e] = n), i
      }
      var eG = 8,
        eK = 16,
        eJ = 8,
        eY = "@@__IMMUTABLE_LIST__@@"
      function eQ(t) {
        return !!(t && t[eY])
      }
      var e$ = /*@__PURE__*/ (function (t) {
        function e(e) {
          var n = e3()
          if (null == e) return n
          if (eQ(e)) return e
          var r = t(e),
            i = r.size
          return 0 === i
            ? n
            : (t2(i), i > 0 && i < 32)
              ? e2(0, i, 5, null, new eZ(r.toArray()))
              : n.withMutations(function (t) {
                  t.setSize(i),
                    r.forEach(function (e, n) {
                      return t.set(n, e)
                    })
                })
        }
        return (
          t && (e.__proto__ = t),
          (e.prototype = Object.create(t && t.prototype)),
          (e.prototype.constructor = e),
          (e.of = function () {
            return this(arguments)
          }),
          (e.prototype.toString = function () {
            return this.__toString("List [", "]")
          }),
          (e.prototype.get = function (t, e) {
            if ((t = g(this, t)) >= 0 && t < this.size) {
              var n = e6(this, (t += this._origin))
              return n && n.array[31 & t]
            }
            return e
          }),
          (e.prototype.set = function (t, e) {
            return (function (t, e, n) {
              if ((e = g(t, e)) != e) return t
              if (e >= t.size || e < 0)
                return t.withMutations(function (t) {
                  e < 0 ? e8(t, e).set(0, n) : e8(t, 0, e + 1).set(e, n)
                })
              e += t._origin
              var r = t._tail,
                i = t._root,
                o = y()
              return (e >= e7(t._capacity)
                ? (r = e5(r, t.__ownerID, 0, e, n, o))
                : (i = e5(i, t.__ownerID, t._level, e, n, o)),
              o.value)
                ? t.__ownerID
                  ? ((t._root = i),
                    (t._tail = r),
                    (t.__hash = void 0),
                    (t.__altered = !0),
                    t)
                  : e2(t._origin, t._capacity, t._level, i, r)
                : t
            })(this, t, e)
          }),
          (e.prototype.remove = function (t) {
            return this.has(t)
              ? 0 === t
                ? this.shift()
                : t === this.size - 1
                  ? this.pop()
                  : this.splice(t, 1)
              : this
          }),
          (e.prototype.insert = function (t, e) {
            return this.splice(t, 0, e)
          }),
          (e.prototype.clear = function () {
            return 0 === this.size
              ? this
              : this.__ownerID
                ? ((this.size = this._origin = this._capacity = 0),
                  (this._level = 5),
                  (this._root = this._tail = this.__hash = void 0),
                  (this.__altered = !0),
                  this)
                : e3()
          }),
          (e.prototype.push = function () {
            var t = arguments,
              e = this.size
            return this.withMutations(function (n) {
              e8(n, 0, e + t.length)
              for (var r = 0; r < t.length; r++) n.set(e + r, t[r])
            })
          }),
          (e.prototype.pop = function () {
            return e8(this, 0, -1)
          }),
          (e.prototype.unshift = function () {
            var t = arguments
            return this.withMutations(function (e) {
              e8(e, -t.length)
              for (var n = 0; n < t.length; n++) e.set(n, t[n])
            })
          }),
          (e.prototype.shift = function () {
            return e8(this, 1)
          }),
          (e.prototype.concat = function () {
            for (var e = arguments, n = [], r = 0; r < arguments.length; r++) {
              var i = e[r],
                o = t("string" != typeof i && J(i) ? i : [i])
              0 !== o.size && n.push(o)
            }
            return 0 === n.length
              ? this
              : 0 !== this.size || this.__ownerID || 1 !== n.length
                ? this.withMutations(function (t) {
                    n.forEach(function (e) {
                      return e.forEach(function (e) {
                        return t.push(e)
                      })
                    })
                  })
                : this.constructor(n[0])
          }),
          (e.prototype.setSize = function (t) {
            return e8(this, 0, t)
          }),
          (e.prototype.map = function (t, e) {
            var n = this
            return this.withMutations(function (r) {
              for (var i = 0; i < n.size; i++)
                r.set(i, t.call(e, r.get(i), i, n))
            })
          }),
          (e.prototype.slice = function (t, e) {
            var n = this.size
            return w(t, e, n) ? this : e8(this, S(t, n, 0), S(e, n, n))
          }),
          (e.prototype.__iterator = function (t, e) {
            var n = e ? this.size : 0,
              r = e1(this, e)
            return new L(function () {
              var i = r()
              return i === e0 ? K() : G(t, e ? --n : n++, i)
            })
          }),
          (e.prototype.__iterate = function (t, e) {
            for (
              var n, r = e ? this.size : 0, i = e1(this, e);
              (n = i()) !== e0 && !1 !== t(n, e ? --r : r++, this);

            );
            return r
          }),
          (e.prototype.__ensureOwner = function (t) {
            return t === this.__ownerID
              ? this
              : t
                ? e2(
                    this._origin,
                    this._capacity,
                    this._level,
                    this._root,
                    this._tail,
                    t,
                    this.__hash,
                  )
                : 0 === this.size
                  ? e3()
                  : ((this.__ownerID = t), (this.__altered = !1), this)
          }),
          e
        )
      })(T)
      e$.isList = eQ
      var eX = e$.prototype
      ;(eX[eY] = !0),
        (eX[p] = eX.remove),
        (eX.merge = eX.concat),
        (eX.setIn = eo),
        (eX.deleteIn = eX.removeIn = es),
        (eX.update = ec),
        (eX.updateIn = ef),
        (eX.mergeIn = eS),
        (eX.mergeDeepIn = ex),
        (eX.withMutations = ej),
        (eX.wasAltered = eI),
        (eX.asImmutable = eO),
        (eX["@@transducer/init"] = eX.asMutable = eA),
        (eX["@@transducer/step"] = function (t, e) {
          return t.push(e)
        }),
        (eX["@@transducer/result"] = function (t) {
          return t.asImmutable()
        })
      var eZ = function (t, e) {
        ;(this.array = t), (this.ownerID = e)
      }
      ;(eZ.prototype.removeBefore = function (t, e, n) {
        if (n === e ? 1 << e : 0 === this.array.length) return this
        var r,
          i = (n >>> e) & 31
        if (i >= this.array.length) return new eZ([], t)
        var o = 0 === i
        if (e > 0) {
          var a = this.array[i]
          if ((r = a && a.removeBefore(t, e - 5, n)) === a && o) return this
        }
        if (o && !r) return this
        var s = e4(this, t)
        if (!o) for (var u = 0; u < i; u++) s.array[u] = void 0
        return r && (s.array[i] = r), s
      }),
        (eZ.prototype.removeAfter = function (t, e, n) {
          if (n === (e ? 1 << e : 0) || 0 === this.array.length) return this
          var r,
            i = ((n - 1) >>> e) & 31
          if (i >= this.array.length) return this
          if (e > 0) {
            var o = this.array[i]
            if (
              (r = o && o.removeAfter(t, e - 5, n)) === o &&
              i === this.array.length - 1
            )
              return this
          }
          var a = e4(this, t)
          return a.array.splice(i + 1), r && (a.array[i] = r), a
        })
      var e0 = {}
      function e1(t, e) {
        var n = t._origin,
          r = t._capacity,
          i = e7(r),
          o = t._tail
        return (function t(a, s, u) {
          var c, f, l, h, p, d, y
          return 0 === s
            ? ((c = u === i ? o && o.array : a && a.array),
              (f = u > n ? 0 : n - u),
              (l = r - u) > 32 && (l = 32),
              function () {
                if (f === l) return e0
                var t = e ? --l : f++
                return c && c[t]
              })
            : ((p = a && a.array),
              (d = u > n ? 0 : (n - u) >> s),
              (y = ((r - u) >> s) + 1) > 32 && (y = 32),
              function () {
                for (;;) {
                  if (h) {
                    var n = h()
                    if (n !== e0) return n
                    h = null
                  }
                  if (d === y) return e0
                  var r = e ? --y : d++
                  h = t(p && p[r], s - 5, u + (r << s))
                }
              })
        })(t._root, t._level, 0)
      }
      function e2(t, e, n, r, i, o, a) {
        var s = Object.create(eX)
        return (
          (s.size = e - t),
          (s._origin = t),
          (s._capacity = e),
          (s._level = n),
          (s._root = r),
          (s._tail = i),
          (s.__ownerID = o),
          (s.__hash = a),
          (s.__altered = !1),
          s
        )
      }
      function e3() {
        return a || (a = e2(0, 0, 5))
      }
      function e5(t, e, n, r, i, o) {
        var a,
          s = (r >>> n) & 31,
          u = t && s < t.array.length
        if (!u && void 0 === i) return t
        if (n > 0) {
          var c = t && t.array[s],
            f = e5(c, e, n - 5, r, i, o)
          return f === c ? t : (((a = e4(t, e)).array[s] = f), a)
        }
        return u && t.array[s] === i
          ? t
          : (o && v(o),
            (a = e4(t, e)),
            void 0 === i && s === a.array.length - 1
              ? a.array.pop()
              : (a.array[s] = i),
            a)
      }
      function e4(t, e) {
        return e && t && e === t.ownerID
          ? t
          : new eZ(t ? t.array.slice() : [], e)
      }
      function e6(t, e) {
        if (e >= e7(t._capacity)) return t._tail
        if (e < 1 << (t._level + 5)) {
          for (var n = t._root, r = t._level; n && r > 0; )
            (n = n.array[(e >>> r) & 31]), (r -= 5)
          return n
        }
      }
      function e8(t, e, n) {
        void 0 !== e && (e |= 0), void 0 !== n && (n |= 0)
        var r = t.__ownerID || new _(),
          i = t._origin,
          o = t._capacity,
          a = i + e,
          s = void 0 === n ? o : n < 0 ? o + n : i + n
        if (a === i && s === o) return t
        if (a >= s) return t.clear()
        for (var u = t._level, c = t._root, f = 0; a + f < 0; )
          (c = new eZ(c && c.array.length ? [void 0, c] : [], r)),
            (u += 5),
            (f += 1 << u)
        f && ((a += f), (i += f), (s += f), (o += f))
        for (var l = e7(o), h = e7(s); h >= 1 << (u + 5); )
          (c = new eZ(c && c.array.length ? [c] : [], r)), (u += 5)
        var p = t._tail,
          d = h < l ? e6(t, s - 1) : h > l ? new eZ([], r) : p
        if (p && h > l && a < o && p.array.length) {
          for (var y = (c = e4(c, r)), v = u; v > 5; v -= 5) {
            var b = (l >>> v) & 31
            y = y.array[b] = e4(y.array[b], r)
          }
          y.array[(l >>> 5) & 31] = p
        }
        if ((s < o && (d = d && d.removeAfter(r, 0, s)), a >= h))
          (a -= h),
            (s -= h),
            (u = 5),
            (c = null),
            (d = d && d.removeBefore(r, 0, a))
        else if (a > i || h < l) {
          for (f = 0; c; ) {
            var g = (a >>> u) & 31
            if ((g !== h >>> u) & 31) break
            g && (f += (1 << u) * g), (u -= 5), (c = c.array[g])
          }
          c && a > i && (c = c.removeBefore(r, u, a - f)),
            c && h < l && (c = c.removeAfter(r, u, h - f)),
            f && ((a -= f), (s -= f))
        }
        return t.__ownerID
          ? ((t.size = s - a),
            (t._origin = a),
            (t._capacity = s),
            (t._level = u),
            (t._root = c),
            (t._tail = d),
            (t.__hash = void 0),
            (t.__altered = !0),
            t)
          : e2(a, s, u, c, d)
      }
      function e7(t) {
        return t < 32 ? 0 : ((t - 1) >>> 5) << 5
      }
      var e9 = /*@__PURE__*/ (function (t) {
        function e(t) {
          return null == t
            ? ne()
            : tp(t)
              ? t
              : ne().withMutations(function (e) {
                  var n = q(t)
                  t2(n.size),
                    n.forEach(function (t, n) {
                      return e.set(n, t)
                    })
                })
        }
        return (
          t && (e.__proto__ = t),
          (e.prototype = Object.create(t && t.prototype)),
          (e.prototype.constructor = e),
          (e.of = function () {
            return this(arguments)
          }),
          (e.prototype.toString = function () {
            return this.__toString("OrderedMap {", "}")
          }),
          (e.prototype.get = function (t, e) {
            var n = this._map.get(t)
            return void 0 !== n ? this._list.get(n)[1] : e
          }),
          (e.prototype.clear = function () {
            return 0 === this.size
              ? this
              : this.__ownerID
                ? ((this.size = 0),
                  this._map.clear(),
                  this._list.clear(),
                  (this.__altered = !0),
                  this)
                : ne()
          }),
          (e.prototype.set = function (t, e) {
            return nn(this, t, e)
          }),
          (e.prototype.remove = function (t) {
            return nn(this, t, d)
          }),
          (e.prototype.__iterate = function (t, e) {
            var n = this
            return this._list.__iterate(function (e) {
              return e && t(e[1], e[0], n)
            }, e)
          }),
          (e.prototype.__iterator = function (t, e) {
            return this._list.fromEntrySeq().__iterator(t, e)
          }),
          (e.prototype.__ensureOwner = function (t) {
            if (t === this.__ownerID) return this
            var e = this._map.__ensureOwner(t),
              n = this._list.__ensureOwner(t)
            return t
              ? nt(e, n, t, this.__hash)
              : 0 === this.size
                ? ne()
                : ((this.__ownerID = t),
                  (this.__altered = !1),
                  (this._map = e),
                  (this._list = n),
                  this)
          }),
          e
        )
      })(eE)
      function nt(t, e, n, r) {
        var i = Object.create(e9.prototype)
        return (
          (i.size = t ? t.size : 0),
          (i._map = t),
          (i._list = e),
          (i.__ownerID = n),
          (i.__hash = r),
          (i.__altered = !1),
          i
        )
      }
      function ne() {
        return s || (s = nt(eF(), e3()))
      }
      function nn(t, e, n) {
        var r,
          i,
          o = t._map,
          a = t._list,
          s = o.get(e),
          u = void 0 !== s
        if (n === d) {
          if (!u) return t
          a.size >= 32 && a.size >= 2 * o.size
            ? ((r = (i = a.filter(function (t, e) {
                return void 0 !== t && s !== e
              }))
                .toKeyedSeq()
                .map(function (t) {
                  return t[0]
                })
                .flip()
                .toMap()),
              t.__ownerID && (r.__ownerID = i.__ownerID = t.__ownerID))
            : ((r = o.remove(e)),
              (i = s === a.size - 1 ? a.pop() : a.set(s, void 0)))
        } else if (u) {
          if (n === a.get(s)[1]) return t
          ;(r = o), (i = a.set(s, [e, n]))
        } else (r = o.set(e, a.size)), (i = a.set(a.size, [e, n]))
        return t.__ownerID
          ? ((t.size = r.size),
            (t._map = r),
            (t._list = i),
            (t.__hash = void 0),
            (t.__altered = !0),
            t)
          : nt(r, i)
      }
      ;(e9.isOrderedMap = tp),
        (e9.prototype[V] = !0),
        (e9.prototype[p] = e9.prototype.remove)
      var nr = "@@__IMMUTABLE_STACK__@@"
      function ni(t) {
        return !!(t && t[nr])
      }
      var no = /*@__PURE__*/ (function (t) {
        function e(t) {
          return null == t ? nu() : ni(t) ? t : nu().pushAll(t)
        }
        return (
          t && (e.__proto__ = t),
          (e.prototype = Object.create(t && t.prototype)),
          (e.prototype.constructor = e),
          (e.of = function () {
            return this(arguments)
          }),
          (e.prototype.toString = function () {
            return this.__toString("Stack [", "]")
          }),
          (e.prototype.get = function (t, e) {
            var n = this._head
            for (t = g(this, t); n && t--; ) n = n.next
            return n ? n.value : e
          }),
          (e.prototype.peek = function () {
            return this._head && this._head.value
          }),
          (e.prototype.push = function () {
            var t = arguments
            if (0 == arguments.length) return this
            for (
              var e = this.size + arguments.length,
                n = this._head,
                r = arguments.length - 1;
              r >= 0;
              r--
            )
              n = { value: t[r], next: n }
            return this.__ownerID
              ? ((this.size = e),
                (this._head = n),
                (this.__hash = void 0),
                (this.__altered = !0),
                this)
              : ns(e, n)
          }),
          (e.prototype.pushAll = function (e) {
            if (0 === (e = t(e)).size) return this
            if (0 === this.size && ni(e)) return e
            t2(e.size)
            var n = this.size,
              r = this._head
            return (e.__iterate(function (t) {
              n++, (r = { value: t, next: r })
            }, !0),
            this.__ownerID)
              ? ((this.size = n),
                (this._head = r),
                (this.__hash = void 0),
                (this.__altered = !0),
                this)
              : ns(n, r)
          }),
          (e.prototype.pop = function () {
            return this.slice(1)
          }),
          (e.prototype.clear = function () {
            return 0 === this.size
              ? this
              : this.__ownerID
                ? ((this.size = 0),
                  (this._head = void 0),
                  (this.__hash = void 0),
                  (this.__altered = !0),
                  this)
                : nu()
          }),
          (e.prototype.slice = function (e, n) {
            if (w(e, n, this.size)) return this
            var r,
              i = S(e, this.size, 0)
            if (S(n, (r = this.size), r) !== this.size)
              return t.prototype.slice.call(this, e, n)
            for (var o = this.size - i, a = this._head; i--; ) a = a.next
            return this.__ownerID
              ? ((this.size = o),
                (this._head = a),
                (this.__hash = void 0),
                (this.__altered = !0),
                this)
              : ns(o, a)
          }),
          (e.prototype.__ensureOwner = function (t) {
            return t === this.__ownerID
              ? this
              : t
                ? ns(this.size, this._head, t, this.__hash)
                : 0 === this.size
                  ? nu()
                  : ((this.__ownerID = t), (this.__altered = !1), this)
          }),
          (e.prototype.__iterate = function (t, e) {
            var n = this
            if (e)
              return new ti(this.toArray()).__iterate(function (e, r) {
                return t(e, r, n)
              }, e)
            for (var r = 0, i = this._head; i && !1 !== t(i.value, r++, this); )
              i = i.next
            return r
          }),
          (e.prototype.__iterator = function (t, e) {
            if (e) return new ti(this.toArray()).__iterator(t, e)
            var n = 0,
              r = this._head
            return new L(function () {
              if (r) {
                var e = r.value
                return (r = r.next), G(t, n++, e)
              }
              return K()
            })
          }),
          e
        )
      })(T)
      no.isStack = ni
      var na = no.prototype
      function ns(t, e, n, r) {
        var i = Object.create(na)
        return (
          (i.size = t),
          (i._head = e),
          (i.__ownerID = n),
          (i.__hash = r),
          (i.__altered = !1),
          i
        )
      }
      function nu() {
        return u || (u = ns(0))
      }
      ;(na[nr] = !0),
        (na.shift = na.pop),
        (na.unshift = na.push),
        (na.unshiftAll = na.pushAll),
        (na.withMutations = ej),
        (na.wasAltered = eI),
        (na.asImmutable = eO),
        (na["@@transducer/init"] = na.asMutable = eA),
        (na["@@transducer/step"] = function (t, e) {
          return t.unshift(e)
        }),
        (na["@@transducer/result"] = function (t) {
          return t.asImmutable()
        })
      var nc = "@@__IMMUTABLE_SET__@@"
      function nf(t) {
        return !!(t && t[nc])
      }
      function nl(t) {
        return nf(t) && B(t)
      }
      function nh(t, e) {
        if (t === e) return !0
        if (
          !A(e) ||
          (void 0 !== t.size && void 0 !== e.size && t.size !== e.size) ||
          (void 0 !== t.__hash &&
            void 0 !== e.__hash &&
            t.__hash !== e.__hash) ||
          I(t) !== I(e) ||
          R(t) !== R(e) ||
          B(t) !== B(e)
        )
          return !1
        if (0 === t.size && 0 === e.size) return !0
        var n = !k(t)
        if (B(t)) {
          var r = t.entries()
          return (
            e.every(function (t, e) {
              var i = r.next().value
              return i && ty(i[1], t) && (n || ty(i[0], e))
            }) && r.next().done
          )
        }
        var i = !1
        if (void 0 === t.size) {
          if (void 0 === e.size)
            "function" == typeof t.cacheResult && t.cacheResult()
          else {
            i = !0
            var o = t
            ;(t = e), (e = o)
          }
        }
        var a = !0,
          s = e.__iterate(function (e, r) {
            if (n ? !t.has(e) : i ? !ty(e, t.get(r, d)) : !ty(t.get(r, d), e))
              return (a = !1), !1
          })
        return a && t.size === s
      }
      function np(t, e) {
        var n = function (n) {
          t.prototype[n] = e[n]
        }
        return (
          Object.keys(e).forEach(n),
          Object.getOwnPropertySymbols &&
            Object.getOwnPropertySymbols(e).forEach(n),
          t
        )
      }
      function nd(t) {
        if (!t || "object" != typeof t) return t
        if (!A(t)) {
          if (!t6(t)) return t
          t = tt(t)
        }
        if (I(t)) {
          var e = {}
          return (
            t.__iterate(function (t, n) {
              e[n] = nd(t)
            }),
            e
          )
        }
        var n = []
        return (
          t.__iterate(function (t) {
            n.push(nd(t))
          }),
          n
        )
      }
      var ny = /*@__PURE__*/ (function (t) {
        function e(e) {
          return null == e
            ? ng()
            : nf(e) && !B(e)
              ? e
              : ng().withMutations(function (n) {
                  var r = t(e)
                  t2(r.size),
                    r.forEach(function (t) {
                      return n.add(t)
                    })
                })
        }
        return (
          t && (e.__proto__ = t),
          (e.prototype = Object.create(t && t.prototype)),
          (e.prototype.constructor = e),
          (e.of = function () {
            return this(arguments)
          }),
          (e.fromKeys = function (t) {
            return this(q(t).keySeq())
          }),
          (e.intersect = function (t) {
            return (t = M(t).toArray()).length
              ? nv.intersect.apply(e(t.pop()), t)
              : ng()
          }),
          (e.union = function (t) {
            return (t = M(t).toArray()).length
              ? nv.union.apply(e(t.pop()), t)
              : ng()
          }),
          (e.prototype.toString = function () {
            return this.__toString("Set {", "}")
          }),
          (e.prototype.has = function (t) {
            return this._map.has(t)
          }),
          (e.prototype.add = function (t) {
            return n_(this, this._map.set(t, t))
          }),
          (e.prototype.remove = function (t) {
            return n_(this, this._map.remove(t))
          }),
          (e.prototype.clear = function () {
            return n_(this, this._map.clear())
          }),
          (e.prototype.map = function (t, e) {
            var n = this,
              r = !1,
              i = n_(
                this,
                this._map.mapEntries(function (i) {
                  var o = i[1],
                    a = t.call(e, o, o, n)
                  return a !== o && (r = !0), [a, a]
                }, e),
              )
            return r ? i : this
          }),
          (e.prototype.union = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n]
            return 0 ===
              (e = e.filter(function (t) {
                return 0 !== t.size
              })).length
              ? this
              : 0 !== this.size || this.__ownerID || 1 !== e.length
                ? this.withMutations(function (n) {
                    for (var r = 0; r < e.length; r++)
                      "string" == typeof e[r]
                        ? n.add(e[r])
                        : t(e[r]).forEach(function (t) {
                            return n.add(t)
                          })
                  })
                : this.constructor(e[0])
          }),
          (e.prototype.intersect = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n]
            if (0 === e.length) return this
            e = e.map(function (e) {
              return t(e)
            })
            var r = []
            return (
              this.forEach(function (t) {
                e.every(function (e) {
                  return e.includes(t)
                }) || r.push(t)
              }),
              this.withMutations(function (t) {
                r.forEach(function (e) {
                  t.remove(e)
                })
              })
            )
          }),
          (e.prototype.subtract = function () {
            for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n]
            if (0 === e.length) return this
            e = e.map(function (e) {
              return t(e)
            })
            var r = []
            return (
              this.forEach(function (t) {
                e.some(function (e) {
                  return e.includes(t)
                }) && r.push(t)
              }),
              this.withMutations(function (t) {
                r.forEach(function (e) {
                  t.remove(e)
                })
              })
            )
          }),
          (e.prototype.sort = function (t) {
            return nz(tH(this, t))
          }),
          (e.prototype.sortBy = function (t, e) {
            return nz(tH(this, e, t))
          }),
          (e.prototype.wasAltered = function () {
            return this._map.wasAltered()
          }),
          (e.prototype.__iterate = function (t, e) {
            var n = this
            return this._map.__iterate(function (e) {
              return t(e, e, n)
            }, e)
          }),
          (e.prototype.__iterator = function (t, e) {
            return this._map.__iterator(t, e)
          }),
          (e.prototype.__ensureOwner = function (t) {
            if (t === this.__ownerID) return this
            var e = this._map.__ensureOwner(t)
            return t
              ? this.__make(e, t)
              : 0 === this.size
                ? this.__empty()
                : ((this.__ownerID = t), (this._map = e), this)
          }),
          e
        )
      })(C)
      ny.isSet = nf
      var nv = ny.prototype
      function n_(t, e) {
        return t.__ownerID
          ? ((t.size = e.size), (t._map = e), t)
          : e === t._map
            ? t
            : 0 === e.size
              ? t.__empty()
              : t.__make(e)
      }
      function nb(t, e) {
        var n = Object.create(nv)
        return (n.size = t ? t.size : 0), (n._map = t), (n.__ownerID = e), n
      }
      function ng() {
        return c || (c = nb(eF()))
      }
      ;(nv[nc] = !0),
        (nv[p] = nv.remove),
        (nv.merge = nv.concat = nv.union),
        (nv.withMutations = ej),
        (nv.asImmutable = eO),
        (nv["@@transducer/init"] = nv.asMutable = eA),
        (nv["@@transducer/step"] = function (t, e) {
          return t.add(e)
        }),
        (nv["@@transducer/result"] = function (t) {
          return t.asImmutable()
        }),
        (nv.__empty = ng),
        (nv.__make = nb)
      var nm = /*@__PURE__*/ (function (t) {
        function e(t, n, r) {
          if (!(this instanceof e)) return new e(t, n, r)
          if (
            (t1(0 !== r, "Cannot step a Range by 0"),
            (t = t || 0),
            void 0 === n && (n = 1 / 0),
            (r = void 0 === r ? 1 : Math.abs(r)),
            n < t && (r = -r),
            (this._start = t),
            (this._end = n),
            (this._step = r),
            (this.size = Math.max(0, Math.ceil((n - t) / r - 1) + 1)),
            0 === this.size)
          ) {
            if (f) return f
            f = this
          }
        }
        return (
          t && (e.__proto__ = t),
          (e.prototype = Object.create(t && t.prototype)),
          (e.prototype.constructor = e),
          (e.prototype.toString = function () {
            return 0 === this.size
              ? "Range []"
              : "Range [ " +
                  this._start +
                  "..." +
                  this._end +
                  (1 !== this._step ? " by " + this._step : "") +
                  " ]"
          }),
          (e.prototype.get = function (t, e) {
            return this.has(t) ? this._start + g(this, t) * this._step : e
          }),
          (e.prototype.includes = function (t) {
            var e = (t - this._start) / this._step
            return e >= 0 && e < this.size && e === Math.floor(e)
          }),
          (e.prototype.slice = function (t, n) {
            var r
            return w(t, n, this.size)
              ? this
              : ((t = S(t, this.size, 0)), (n = S(n, (r = this.size), r)) <= t)
                ? new e(0, 0)
                : new e(
                    this.get(t, this._end),
                    this.get(n, this._end),
                    this._step,
                  )
          }),
          (e.prototype.indexOf = function (t) {
            var e = t - this._start
            if (e % this._step == 0) {
              var n = e / this._step
              if (n >= 0 && n < this.size) return n
            }
            return -1
          }),
          (e.prototype.lastIndexOf = function (t) {
            return this.indexOf(t)
          }),
          (e.prototype.__iterate = function (t, e) {
            for (
              var n = this.size,
                r = this._step,
                i = e ? this._start + (n - 1) * r : this._start,
                o = 0;
              o !== n && !1 !== t(i, e ? n - ++o : o++, this);

            )
              i += e ? -r : r
            return o
          }),
          (e.prototype.__iterator = function (t, e) {
            var n = this.size,
              r = this._step,
              i = e ? this._start + (n - 1) * r : this._start,
              o = 0
            return new L(function () {
              if (o === n) return K()
              var a = i
              return (i += e ? -r : r), G(t, e ? n - ++o : o++, a)
            })
          }),
          (e.prototype.equals = function (t) {
            return t instanceof e
              ? this._start === t._start &&
                  this._end === t._end &&
                  this._step === t._step
              : nh(this, t)
          }),
          e
        )
      })(tn)
      function nw(t, e, n) {
        for (var r = t3(e), i = 0; i !== r.length; )
          if ((t = t9(t, r[i++], d)) === d) return n
        return t
      }
      function nS(t, e) {
        return nw(this, t, e)
      }
      function nx(t, e) {
        return nw(t, e, d) !== d
      }
      function nj() {
        t2(this.size)
        var t = {}
        return (
          this.__iterate(function (e, n) {
            t[n] = e
          }),
          t
        )
      }
      ;(M.isIterable = A),
        (M.isKeyed = I),
        (M.isIndexed = R),
        (M.isAssociative = k),
        (M.isOrdered = B),
        (M.Iterator = L),
        np(M, {
          toArray: function () {
            t2(this.size)
            var t = Array(this.size || 0),
              e = I(this),
              n = 0
            return (
              this.__iterate(function (r, i) {
                t[n++] = e ? [i, r] : r
              }),
              t
            )
          },
          toIndexedSeq: function () {
            return new tC(this)
          },
          toJS: function () {
            return nd(this)
          },
          toKeyedSeq: function () {
            return new tT(this, !0)
          },
          toMap: function () {
            return eE(this.toKeyedSeq())
          },
          toObject: nj,
          toOrderedMap: function () {
            return e9(this.toKeyedSeq())
          },
          toOrderedSet: function () {
            return nz(I(this) ? this.valueSeq() : this)
          },
          toSet: function () {
            return ny(I(this) ? this.valueSeq() : this)
          },
          toSetSeq: function () {
            return new tD(this)
          },
          toSeq: function () {
            return R(this)
              ? this.toIndexedSeq()
              : I(this)
                ? this.toKeyedSeq()
                : this.toSetSeq()
          },
          toStack: function () {
            return no(I(this) ? this.valueSeq() : this)
          },
          toList: function () {
            return e$(I(this) ? this.valueSeq() : this)
          },
          toString: function () {
            return "[Collection]"
          },
          __toString: function (t, e) {
            return 0 === this.size
              ? t + e
              : t +
                  " " +
                  this.toSeq().map(this.__toStringMapper).join(", ") +
                  " " +
                  e
          },
          concat: function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e]
            return tJ(
              this,
              (function (t, e) {
                var n = I(t),
                  r = [t]
                    .concat(e)
                    .map(function (t) {
                      return (
                        A(t)
                          ? n && (t = q(t))
                          : (t = n ? tu(t) : tc(Array.isArray(t) ? t : [t])),
                        t
                      )
                    })
                    .filter(function (t) {
                      return 0 !== t.size
                    })
                if (0 === r.length) return t
                if (1 === r.length) {
                  var i = r[0]
                  if (i === t || (n && I(i)) || (R(t) && R(i))) return i
                }
                var o = new ti(r)
                return (
                  n ? (o = o.toKeyedSeq()) : R(t) || (o = o.toSetSeq()),
                  ((o = o.flatten(!0)).size = r.reduce(function (t, e) {
                    if (void 0 !== t) {
                      var n = e.size
                      if (void 0 !== n) return t + n
                    }
                  }, 0)),
                  o
                )
              })(this, t),
            )
          },
          includes: function (t) {
            return this.some(function (e) {
              return ty(e, t)
            })
          },
          entries: function () {
            return this.__iterator(2)
          },
          every: function (t, e) {
            t2(this.size)
            var n = !0
            return (
              this.__iterate(function (r, i, o) {
                if (!t.call(e, r, i, o)) return (n = !1), !1
              }),
              n
            )
          },
          filter: function (t, e) {
            return tJ(this, tV(this, t, e, !0))
          },
          partition: function (t, e) {
            return (function (t, e, n) {
              var r = I(t),
                i = [[], []]
              t.__iterate(function (o, a) {
                i[e.call(n, o, a, t) ? 1 : 0].push(r ? [a, o] : o)
              })
              var o = tQ(t)
              return i.map(function (e) {
                return tJ(t, o(e))
              })
            })(this, t, e)
          },
          find: function (t, e, n) {
            var r = this.findEntry(t, e)
            return r ? r[1] : n
          },
          forEach: function (t, e) {
            return t2(this.size), this.__iterate(e ? t.bind(e) : t)
          },
          join: function (t) {
            t2(this.size), (t = void 0 !== t ? "" + t : ",")
            var e = "",
              n = !0
            return (
              this.__iterate(function (r) {
                n ? (n = !1) : (e += t), (e += null != r ? r.toString() : "")
              }),
              e
            )
          },
          keys: function () {
            return this.__iterator(0)
          },
          map: function (t, e) {
            return tJ(this, tN(this, t, e))
          },
          reduce: function (t, e, n) {
            return nR(this, t, e, n, arguments.length < 2, !1)
          },
          reduceRight: function (t, e, n) {
            return nR(this, t, e, n, arguments.length < 2, !0)
          },
          reverse: function () {
            return tJ(this, tF(this, !0))
          },
          slice: function (t, e) {
            return tJ(this, tB(this, t, e, !0))
          },
          some: function (t, e) {
            t2(this.size)
            var n = !1
            return (
              this.__iterate(function (r, i, o) {
                if (t.call(e, r, i, o)) return (n = !0), !1
              }),
              n
            )
          },
          sort: function (t) {
            return tJ(this, tH(this, t))
          },
          values: function () {
            return this.__iterator(1)
          },
          butLast: function () {
            return this.slice(0, -1)
          },
          isEmpty: function () {
            return void 0 !== this.size
              ? 0 === this.size
              : !this.some(function () {
                  return !0
                })
          },
          count: function (t, e) {
            return b(t ? this.toSeq().filter(t, e) : this)
          },
          countBy: function (t, e) {
            var n, r
            return (
              (n = this),
              (r = eE().asMutable()),
              n.__iterate(function (i, o) {
                r.update(t.call(e, i, o, n), 0, function (t) {
                  return t + 1
                })
              }),
              r.asImmutable()
            )
          },
          equals: function (t) {
            return nh(this, t)
          },
          entrySeq: function () {
            var t = this
            if (t._cache) return new ti(t._cache)
            var e = t.toSeq().map(nM).toIndexedSeq()
            return (
              (e.fromEntrySeq = function () {
                return t.toSeq()
              }),
              e
            )
          },
          filterNot: function (t, e) {
            return this.filter(nq(t), e)
          },
          findEntry: function (t, e, n) {
            var r = n
            return (
              this.__iterate(function (n, i, o) {
                if (t.call(e, n, i, o)) return (r = [i, n]), !1
              }),
              r
            )
          },
          findKey: function (t, e) {
            var n = this.findEntry(t, e)
            return n && n[0]
          },
          findLast: function (t, e, n) {
            return this.toKeyedSeq().reverse().find(t, e, n)
          },
          findLastEntry: function (t, e, n) {
            return this.toKeyedSeq().reverse().findEntry(t, e, n)
          },
          findLastKey: function (t, e) {
            return this.toKeyedSeq().reverse().findKey(t, e)
          },
          first: function (t) {
            return this.find(m, null, t)
          },
          flatMap: function (t, e) {
            var n, r
            return tJ(
              this,
              ((n = this),
              (r = tQ(n)),
              n
                .toSeq()
                .map(function (i, o) {
                  return r(t.call(e, i, o, n))
                })
                .flatten(!0)),
            )
          },
          flatten: function (t) {
            return tJ(this, tU(this, t, !0))
          },
          fromEntrySeq: function () {
            return new tP(this)
          },
          get: function (t, e) {
            return this.find(
              function (e, n) {
                return ty(n, t)
              },
              void 0,
              e,
            )
          },
          getIn: nS,
          groupBy: function (t, e) {
            return (function (t, e, n) {
              var r = I(t),
                i = (B(t) ? e9() : eE()).asMutable()
              t.__iterate(function (o, a) {
                i.update(e.call(n, o, a, t), function (t) {
                  return (t = t || []).push(r ? [a, o] : o), t
                })
              })
              var o = tQ(t)
              return i
                .map(function (e) {
                  return tJ(t, o(e))
                })
                .asImmutable()
            })(this, t, e)
          },
          has: function (t) {
            return this.get(t, d) !== d
          },
          hasIn: function (t) {
            return nx(this, t)
          },
          isSubset: function (t) {
            return (
              (t = "function" == typeof t.includes ? t : M(t)),
              this.every(function (e) {
                return t.includes(e)
              })
            )
          },
          isSuperset: function (t) {
            return (t = "function" == typeof t.isSubset ? t : M(t)).isSubset(
              this,
            )
          },
          keyOf: function (t) {
            return this.findKey(function (e) {
              return ty(e, t)
            })
          },
          keySeq: function () {
            return this.toSeq().map(nk).toIndexedSeq()
          },
          last: function (t) {
            return this.toSeq().reverse().first(t)
          },
          lastKeyOf: function (t) {
            return this.toKeyedSeq().reverse().keyOf(t)
          },
          max: function (t) {
            return tL(this, t)
          },
          maxBy: function (t, e) {
            return tL(this, e, t)
          },
          min: function (t) {
            return tL(this, t ? nT(t) : nD)
          },
          minBy: function (t, e) {
            return tL(this, e ? nT(e) : nD, t)
          },
          rest: function () {
            return this.slice(1)
          },
          skip: function (t) {
            return 0 === t ? this : this.slice(Math.max(0, t))
          },
          skipLast: function (t) {
            return 0 === t ? this : this.slice(0, -Math.max(0, t))
          },
          skipWhile: function (t, e) {
            return tJ(this, tW(this, t, e, !0))
          },
          skipUntil: function (t, e) {
            return this.skipWhile(nq(t), e)
          },
          sortBy: function (t, e) {
            return tJ(this, tH(this, e, t))
          },
          take: function (t) {
            return this.slice(0, Math.max(0, t))
          },
          takeLast: function (t) {
            return this.slice(-Math.max(0, t))
          },
          takeWhile: function (t, e) {
            var n, r
            return tJ(
              this,
              ((n = this),
              ((r = t$(n)).__iterateUncached = function (r, i) {
                var o = this
                if (i) return this.cacheResult().__iterate(r, i)
                var a = 0
                return (
                  n.__iterate(function (n, i, s) {
                    return t.call(e, n, i, s) && ++a && r(n, i, o)
                  }),
                  a
                )
              }),
              (r.__iteratorUncached = function (r, i) {
                var o = this
                if (i) return this.cacheResult().__iterator(r, i)
                var a = n.__iterator(2, i),
                  s = !0
                return new L(function () {
                  if (!s) return K()
                  var n = a.next()
                  if (n.done) return n
                  var i = n.value,
                    u = i[0],
                    c = i[1]
                  return t.call(e, c, u, o)
                    ? 2 === r
                      ? n
                      : G(r, u, c, n)
                    : ((s = !1), K())
                })
              }),
              r),
            )
          },
          takeUntil: function (t, e) {
            return this.takeWhile(nq(t), e)
          },
          update: function (t) {
            return t(this)
          },
          valueSeq: function () {
            return this.toIndexedSeq()
          },
          hashCode: function () {
            return (
              this.__hash ||
              (this.__hash = (function (t) {
                if (t.size === 1 / 0) return 0
                var e,
                  n,
                  r = B(t),
                  i = I(t),
                  o = r ? 1 : 0
                return (
                  (e = t.__iterate(
                    i
                      ? r
                        ? function (t, e) {
                            o = (31 * o + nP(tg(t), tg(e))) | 0
                          }
                        : function (t, e) {
                            o = (o + nP(tg(t), tg(e))) | 0
                          }
                      : r
                        ? function (t) {
                            o = (31 * o + tg(t)) | 0
                          }
                        : function (t) {
                            o = (o + tg(t)) | 0
                          },
                  )),
                  (n = tv((n = o), 0xcc9e2d51)),
                  (n = tv((n << 15) | (n >>> -15), 0x1b873593)),
                  (n =
                    (((n = tv((n << 13) | (n >>> -13), 5)) + 0xe6546b64) | 0) ^
                    e),
                  (n = tv(n ^ (n >>> 16), 0x85ebca6b)),
                  (n = t_((n = tv(n ^ (n >>> 13), 0xc2b2ae35)) ^ (n >>> 16)))
                )
              })(this))
            )
          },
        })
      var nA = M.prototype
      ;(nA[j] = !0),
        (nA[H] = nA.values),
        (nA.toJSON = nA.toArray),
        (nA.__toStringMapper = t8),
        (nA.inspect = nA.toSource =
          function () {
            return this.toString()
          }),
        (nA.chain = nA.flatMap),
        (nA.contains = nA.includes),
        np(q, {
          flip: function () {
            return tJ(this, tz(this))
          },
          mapEntries: function (t, e) {
            var n = this,
              r = 0
            return tJ(
              this,
              this.toSeq()
                .map(function (i, o) {
                  return t.call(e, [o, i], r++, n)
                })
                .fromEntrySeq(),
            )
          },
          mapKeys: function (t, e) {
            var n = this
            return tJ(
              this,
              this.toSeq()
                .flip()
                .map(function (r, i) {
                  return t.call(e, r, i, n)
                })
                .flip(),
            )
          },
        })
      var nO = q.prototype
      ;(nO[O] = !0),
        (nO[H] = nA.entries),
        (nO.toJSON = nj),
        (nO.__toStringMapper = function (t, e) {
          return t8(e) + ": " + t8(t)
        }),
        np(T, {
          toKeyedSeq: function () {
            return new tT(this, !1)
          },
          filter: function (t, e) {
            return tJ(this, tV(this, t, e, !1))
          },
          findIndex: function (t, e) {
            var n = this.findEntry(t, e)
            return n ? n[0] : -1
          },
          indexOf: function (t) {
            var e = this.keyOf(t)
            return void 0 === e ? -1 : e
          },
          lastIndexOf: function (t) {
            var e = this.lastKeyOf(t)
            return void 0 === e ? -1 : e
          },
          reverse: function () {
            return tJ(this, tF(this, !1))
          },
          slice: function (t, e) {
            return tJ(this, tB(this, t, e, !1))
          },
          splice: function (t, e) {
            var n = arguments.length
            if (((e = Math.max(e || 0, 0)), 0 === n || (2 === n && !e)))
              return this
            t = S(t, t < 0 ? this.count() : this.size, 0)
            var r = this.slice(0, t)
            return tJ(
              this,
              1 === n ? r : r.concat(t0(arguments, 2), this.slice(t + e)),
            )
          },
          findLastIndex: function (t, e) {
            var n = this.findLastEntry(t, e)
            return n ? n[0] : -1
          },
          first: function (t) {
            return this.get(0, t)
          },
          flatten: function (t) {
            return tJ(this, tU(this, t, !1))
          },
          get: function (t, e) {
            return (t = g(this, t)) < 0 ||
              this.size === 1 / 0 ||
              (void 0 !== this.size && t > this.size)
              ? e
              : this.find(
                  function (e, n) {
                    return n === t
                  },
                  void 0,
                  e,
                )
          },
          has: function (t) {
            return (
              (t = g(this, t)) >= 0 &&
              (void 0 !== this.size
                ? this.size === 1 / 0 || t < this.size
                : -1 !== this.indexOf(t))
            )
          },
          interpose: function (t) {
            var e, n
            return tJ(
              this,
              ((e = this),
              ((n = t$(e)).size = e.size && 2 * e.size - 1),
              (n.__iterateUncached = function (n, r) {
                var i = this,
                  o = 0
                return (
                  e.__iterate(function (e) {
                    return (!o || !1 !== n(t, o++, i)) && !1 !== n(e, o++, i)
                  }, r),
                  o
                )
              }),
              (n.__iteratorUncached = function (n, r) {
                var i,
                  o = e.__iterator(1, r),
                  a = 0
                return new L(function () {
                  return (!i || a % 2) && (i = o.next()).done
                    ? i
                    : a % 2
                      ? G(n, a++, t)
                      : G(n, a++, i.value, i)
                })
              }),
              n),
            )
          },
          interleave: function () {
            var t = [this].concat(t0(arguments)),
              e = tK(this.toSeq(), tn.of, t),
              n = e.flatten(!0)
            return e.size && (n.size = e.size * t.length), tJ(this, n)
          },
          keySeq: function () {
            return nm(0, this.size)
          },
          last: function (t) {
            return this.get(-1, t)
          },
          skipWhile: function (t, e) {
            return tJ(this, tW(this, t, e, !1))
          },
          zip: function () {
            var t = [this].concat(t0(arguments))
            return tJ(this, tK(this, nC, t))
          },
          zipAll: function () {
            var t = [this].concat(t0(arguments))
            return tJ(this, tK(this, nC, t, !0))
          },
          zipWith: function (t) {
            var e = t0(arguments)
            return (e[0] = this), tJ(this, tK(this, t, e))
          },
        })
      var nI = T.prototype
      ;(nI[E] = !0),
        (nI[V] = !0),
        np(C, {
          get: function (t, e) {
            return this.has(t) ? t : e
          },
          includes: function (t) {
            return this.has(t)
          },
          keySeq: function () {
            return this.valueSeq()
          },
        })
      var nE = C.prototype
      function nR(t, e, n, r, i, o) {
        return (
          t2(t.size),
          t.__iterate(function (t, o, a) {
            i ? ((i = !1), (n = t)) : (n = e.call(r, n, t, o, a))
          }, o),
          n
        )
      }
      function nk(t, e) {
        return e
      }
      function nM(t, e) {
        return [e, t]
      }
      function nq(t) {
        return function () {
          return !t.apply(this, arguments)
        }
      }
      function nT(t) {
        return function () {
          return -t.apply(this, arguments)
        }
      }
      function nC() {
        return t0(arguments)
      }
      function nD(t, e) {
        return t < e ? 1 : t > e ? -1 : 0
      }
      function nP(t, e) {
        return (t ^ (e + 0x9e3779b9 + (t << 6) + (t >> 2))) | 0
      }
      ;(nE.has = nA.includes),
        (nE.contains = nE.includes),
        (nE.keys = nE.values),
        np(te, nO),
        np(tn, nI),
        np(tr, nE)
      var nz = /*@__PURE__*/ (function (t) {
        function e(t) {
          return null == t
            ? nV()
            : nl(t)
              ? t
              : nV().withMutations(function (e) {
                  var n = C(t)
                  t2(n.size),
                    n.forEach(function (t) {
                      return e.add(t)
                    })
                })
        }
        return (
          t && (e.__proto__ = t),
          (e.prototype = Object.create(t && t.prototype)),
          (e.prototype.constructor = e),
          (e.of = function () {
            return this(arguments)
          }),
          (e.fromKeys = function (t) {
            return this(q(t).keySeq())
          }),
          (e.prototype.toString = function () {
            return this.__toString("OrderedSet {", "}")
          }),
          e
        )
      })(ny)
      nz.isOrderedSet = nl
      var nN = nz.prototype
      function nF(t, e) {
        var n = Object.create(nN)
        return (n.size = t ? t.size : 0), (n._map = t), (n.__ownerID = e), n
      }
      function nV() {
        return l || (l = nF(ne()))
      }
      ;(nN[V] = !0),
        (nN.zip = nI.zip),
        (nN.zipWith = nI.zipWith),
        (nN.zipAll = nI.zipAll),
        (nN.__empty = nV),
        (nN.__make = nF)
      var nB = { LeftThenRight: -1, RightThenLeft: 1 },
        nW = function (t, e) {
          !(function (t) {
            if (N(t))
              throw Error(
                "Can not call `Record` with an immutable Record as default values. Use a plain javascript object instead.",
              )
            if (F(t))
              throw Error(
                "Can not call `Record` with an immutable Collection as default values. Use a plain javascript object instead.",
              )
            if (null === t || "object" != typeof t)
              throw Error(
                "Can not call `Record` with a non-object as default values. Use a plain javascript object instead.",
              )
          })(t)
          var n,
            r = function (o) {
              var a = this
              if (o instanceof r) return o
              if (!(this instanceof r)) return new r(o)
              if (!n) {
                n = !0
                var s = Object.keys(t),
                  u = (i._indices = {})
                ;(i._name = e), (i._keys = s), (i._defaultValues = t)
                for (var c = 0; c < s.length; c++) {
                  var f = s[c]
                  ;(u[f] = c),
                    i[f]
                      ? "object" == typeof console &&
                        console.warn &&
                        console.warn(
                          "Cannot define " +
                            nL(this) +
                            ' with property "' +
                            f +
                            '" since that property name is part of the Record API.',
                        )
                      : (function (t, e) {
                          try {
                            Object.defineProperty(t, e, {
                              get: function () {
                                return this.get(e)
                              },
                              set: function (t) {
                                t1(
                                  this.__ownerID,
                                  "Cannot set on an immutable record.",
                                ),
                                  this.set(e, t)
                              },
                            })
                          } catch (t) {}
                        })(i, f)
                }
              }
              return (
                (this.__ownerID = void 0),
                (this._values = e$().withMutations(function (t) {
                  t.setSize(a._keys.length),
                    q(o).forEach(function (e, n) {
                      t.set(
                        a._indices[n],
                        e === a._defaultValues[n] ? void 0 : e,
                      )
                    })
                })),
                this
              )
            },
            i = (r.prototype = Object.create(nU))
          return (i.constructor = r), e && (r.displayName = e), r
        }
      ;(nW.prototype.toString = function () {
        for (
          var t, e = nL(this) + " { ", n = this._keys, r = 0, i = n.length;
          r !== i;
          r++
        )
          (t = n[r]), (e += (r ? ", " : "") + t + ": " + t8(this.get(t)))
        return e + " }"
      }),
        (nW.prototype.equals = function (t) {
          return this === t || (N(t) && nG(this).equals(nG(t)))
        }),
        (nW.prototype.hashCode = function () {
          return nG(this).hashCode()
        }),
        (nW.prototype.has = function (t) {
          return this._indices.hasOwnProperty(t)
        }),
        (nW.prototype.get = function (t, e) {
          if (!this.has(t)) return e
          var n = this._indices[t],
            r = this._values.get(n)
          return void 0 === r ? this._defaultValues[t] : r
        }),
        (nW.prototype.set = function (t, e) {
          if (this.has(t)) {
            var n = this._values.set(
              this._indices[t],
              e === this._defaultValues[t] ? void 0 : e,
            )
            if (n !== this._values && !this.__ownerID) return nH(this, n)
          }
          return this
        }),
        (nW.prototype.remove = function (t) {
          return this.set(t)
        }),
        (nW.prototype.clear = function () {
          var t = this._values.clear().setSize(this._keys.length)
          return this.__ownerID ? this : nH(this, t)
        }),
        (nW.prototype.wasAltered = function () {
          return this._values.wasAltered()
        }),
        (nW.prototype.toSeq = function () {
          return nG(this)
        }),
        (nW.prototype.toJS = function () {
          return nd(this)
        }),
        (nW.prototype.entries = function () {
          return this.__iterator(2)
        }),
        (nW.prototype.__iterator = function (t, e) {
          return nG(this).__iterator(t, e)
        }),
        (nW.prototype.__iterate = function (t, e) {
          return nG(this).__iterate(t, e)
        }),
        (nW.prototype.__ensureOwner = function (t) {
          if (t === this.__ownerID) return this
          var e = this._values.__ensureOwner(t)
          return t
            ? nH(this, e, t)
            : ((this.__ownerID = t), (this._values = e), this)
        }),
        (nW.isRecord = N),
        (nW.getDescriptiveName = nL)
      var nU = nW.prototype
      function nH(t, e, n) {
        var r = Object.create(Object.getPrototypeOf(t))
        return (r._values = e), (r.__ownerID = n), r
      }
      function nL(t) {
        return t.constructor.displayName || t.constructor.name || "Record"
      }
      function nG(t) {
        return tu(
          t._keys.map(function (e) {
            return [e, t.get(e)]
          }),
        )
      }
      ;(nU[z] = !0),
        (nU[p] = nU.remove),
        (nU.deleteIn = nU.removeIn = es),
        (nU.getIn = nS),
        (nU.hasIn = nA.hasIn),
        (nU.merge = el),
        (nU.mergeWith = eh),
        (nU.mergeIn = eS),
        (nU.mergeDeep = em),
        (nU.mergeDeepWith = ew),
        (nU.mergeDeepIn = ex),
        (nU.setIn = eo),
        (nU.update = ec),
        (nU.updateIn = ef),
        (nU.withMutations = ej),
        (nU.asMutable = eA),
        (nU.asImmutable = eO),
        (nU[H] = nU.entries),
        (nU.toJSON = nU.toObject = nA.toObject),
        (nU.inspect = nU.toSource =
          function () {
            return this.toString()
          })
      var nK = /*@__PURE__*/ (function (t) {
        function e(t, n) {
          if (!(this instanceof e)) return new e(t, n)
          if (
            ((this._value = t),
            (this.size = void 0 === n ? 1 / 0 : Math.max(0, n)),
            0 === this.size)
          ) {
            if (h) return h
            h = this
          }
        }
        return (
          t && (e.__proto__ = t),
          (e.prototype = Object.create(t && t.prototype)),
          (e.prototype.constructor = e),
          (e.prototype.toString = function () {
            return 0 === this.size
              ? "Repeat []"
              : "Repeat [ " + this._value + " " + this.size + " times ]"
          }),
          (e.prototype.get = function (t, e) {
            return this.has(t) ? this._value : e
          }),
          (e.prototype.includes = function (t) {
            return ty(this._value, t)
          }),
          (e.prototype.slice = function (t, n) {
            var r = this.size
            return w(t, n, r)
              ? this
              : new e(this._value, S(n, r, r) - S(t, r, 0))
          }),
          (e.prototype.reverse = function () {
            return this
          }),
          (e.prototype.indexOf = function (t) {
            return ty(this._value, t) ? 0 : -1
          }),
          (e.prototype.lastIndexOf = function (t) {
            return ty(this._value, t) ? this.size : -1
          }),
          (e.prototype.__iterate = function (t, e) {
            for (
              var n = this.size, r = 0;
              r !== n && !1 !== t(this._value, e ? n - ++r : r++, this);

            );
            return r
          }),
          (e.prototype.__iterator = function (t, e) {
            var n = this,
              r = this.size,
              i = 0
            return new L(function () {
              return i === r ? K() : G(t, e ? r - ++i : i++, n._value)
            })
          }),
          (e.prototype.equals = function (t) {
            return t instanceof e ? ty(this._value, t._value) : nh(this, t)
          }),
          e
        )
      })(tn)
      function nJ(t, e) {
        return (function t(e, n, r, i, o, a) {
          if ("string" != typeof r && !F(r) && (Z(r) || J(r) || t4(r))) {
            if (~e.indexOf(r))
              throw TypeError("Cannot convert circular structure to Immutable")
            e.push(r), o && "" !== i && o.push(i)
            var s = n.call(
              a,
              i,
              tt(r).map(function (i, a) {
                return t(e, n, i, a, o, r)
              }),
              o && o.slice(),
            )
            return e.pop(), o && o.pop(), s
          }
          return r
        })([], e || nY, t, "", e && e.length > 2 ? [] : void 0, { "": t })
      }
      function nY(t, e) {
        return R(e) ? e.toList() : I(e) ? e.toMap() : e.toSet()
      }
      var nQ = "4.3.7",
        n$ = M,
        nX = {
          version: nQ,
          Collection: M,
          Iterable: M,
          Seq: tt,
          Map: eE,
          OrderedMap: e9,
          List: e$,
          Stack: no,
          Set: ny,
          OrderedSet: nz,
          PairSorting: nB,
          Record: nW,
          Range: nm,
          Repeat: nK,
          is: ty,
          fromJS: nJ,
          hash: tg,
          isImmutable: F,
          isCollection: A,
          isKeyed: I,
          isIndexed: R,
          isAssociative: k,
          isOrdered: B,
          isValueObject: td,
          isPlainObject: t4,
          isSeq: P,
          isList: eQ,
          isMap: th,
          isOrderedMap: tp,
          isStack: ni,
          isSet: nf,
          isOrderedSet: nl,
          isRecord: N,
          get: t9,
          getIn: nw,
          has: t7,
          hasIn: nx,
          merge: ed,
          mergeDeep: ev,
          mergeWith: ey,
          mergeDeepWith: e_,
          remove: ee,
          removeIn: ea,
          set: en,
          setIn: ei,
          update: eu,
          updateIn: er,
        }
    }),
    (n = f || (f = {})),
    (function (t) {
      var e =
          "object" == typeof globalThis
            ? globalThis
            : "object" == typeof D
              ? D
              : "object" == typeof self
                ? self
                : "object" == typeof this
                  ? this
                  : (function () {
                      try {
                        return Function("return this;")()
                      } catch (t) {}
                    })() ||
                    (function () {
                      try {
                        return (0, eval)("(function() { return this; })()")
                      } catch (t) {}
                    })(),
        r = i(n)
      function i(t, e) {
        return function (n, r) {
          Object.defineProperty(t, n, {
            configurable: !0,
            writable: !0,
            value: r,
          }),
            e && e(n, r)
        }
      }
      void 0 !== e.Reflect && (r = i(e.Reflect, r)),
        t(r, e),
        void 0 === e.Reflect && (e.Reflect = n)
    })(function (t, e) {
      var n,
        r = Object.prototype.hasOwnProperty,
        i = "function" == typeof Symbol,
        o =
          i && void 0 !== Symbol.toPrimitive
            ? Symbol.toPrimitive
            : "@@toPrimitive",
        a = i && void 0 !== Symbol.iterator ? Symbol.iterator : "@@iterator",
        s = "function" == typeof Object.create,
        u = { __proto__: [] } instanceof Array,
        c = !s && !u,
        f = {
          create: s
            ? function () {
                return z(Object.create(null))
              }
            : u
              ? function () {
                  return z({ __proto__: null })
                }
              : function () {
                  return z({})
                },
          has: c
            ? function (t, e) {
                return r.call(t, e)
              }
            : function (t, e) {
                return e in t
              },
          get: c
            ? function (t, e) {
                return r.call(t, e) ? t[e] : void 0
              }
            : function (t, e) {
                return t[e]
              },
        },
        l = Object.getPrototypeOf(Function),
        h =
          "function" == typeof Map && "function" == typeof Map.prototype.entries
            ? Map
            : (function () {
                var t = {},
                  e = [],
                  n = (function () {
                    function t(t, e, n) {
                      ;(this._index = 0),
                        (this._keys = t),
                        (this._values = e),
                        (this._selector = n)
                    }
                    return (
                      (t.prototype["@@iterator"] = function () {
                        return this
                      }),
                      (t.prototype[a] = function () {
                        return this
                      }),
                      (t.prototype.next = function () {
                        var t = this._index
                        if (t >= 0 && t < this._keys.length) {
                          var n = this._selector(this._keys[t], this._values[t])
                          return (
                            t + 1 >= this._keys.length
                              ? ((this._index = -1),
                                (this._keys = e),
                                (this._values = e))
                              : this._index++,
                            { value: n, done: !1 }
                          )
                        }
                        return { value: void 0, done: !0 }
                      }),
                      (t.prototype.throw = function (t) {
                        throw (
                          (this._index >= 0 &&
                            ((this._index = -1),
                            (this._keys = e),
                            (this._values = e)),
                          t)
                        )
                      }),
                      (t.prototype.return = function (t) {
                        return (
                          this._index >= 0 &&
                            ((this._index = -1),
                            (this._keys = e),
                            (this._values = e)),
                          { value: t, done: !0 }
                        )
                      }),
                      t
                    )
                  })()
                return (function () {
                  function e() {
                    ;(this._keys = []),
                      (this._values = []),
                      (this._cacheKey = t),
                      (this._cacheIndex = -2)
                  }
                  return (
                    Object.defineProperty(e.prototype, "size", {
                      get: function () {
                        return this._keys.length
                      },
                      enumerable: !0,
                      configurable: !0,
                    }),
                    (e.prototype.has = function (t) {
                      return this._find(t, !1) >= 0
                    }),
                    (e.prototype.get = function (t) {
                      var e = this._find(t, !1)
                      return e >= 0 ? this._values[e] : void 0
                    }),
                    (e.prototype.set = function (t, e) {
                      var n = this._find(t, !0)
                      return (this._values[n] = e), this
                    }),
                    (e.prototype.delete = function (e) {
                      var n = this._find(e, !1)
                      if (n >= 0) {
                        for (var r = this._keys.length, i = n + 1; i < r; i++)
                          (this._keys[i - 1] = this._keys[i]),
                            (this._values[i - 1] = this._values[i])
                        return (
                          this._keys.length--,
                          this._values.length--,
                          k(e, this._cacheKey) &&
                            ((this._cacheKey = t), (this._cacheIndex = -2)),
                          !0
                        )
                      }
                      return !1
                    }),
                    (e.prototype.clear = function () {
                      ;(this._keys.length = 0),
                        (this._values.length = 0),
                        (this._cacheKey = t),
                        (this._cacheIndex = -2)
                    }),
                    (e.prototype.keys = function () {
                      return new n(this._keys, this._values, r)
                    }),
                    (e.prototype.values = function () {
                      return new n(this._keys, this._values, i)
                    }),
                    (e.prototype.entries = function () {
                      return new n(this._keys, this._values, o)
                    }),
                    (e.prototype["@@iterator"] = function () {
                      return this.entries()
                    }),
                    (e.prototype[a] = function () {
                      return this.entries()
                    }),
                    (e.prototype._find = function (t, e) {
                      if (!k(this._cacheKey, t)) {
                        this._cacheIndex = -1
                        for (var n = 0; n < this._keys.length; n++)
                          if (k(this._keys[n], t)) {
                            this._cacheIndex = n
                            break
                          }
                      }
                      return (
                        this._cacheIndex < 0 &&
                          e &&
                          ((this._cacheIndex = this._keys.length),
                          this._keys.push(t),
                          this._values.push(void 0)),
                        this._cacheIndex
                      )
                    }),
                    e
                  )
                })()
                function r(t, e) {
                  return t
                }
                function i(t, e) {
                  return e
                }
                function o(t, e) {
                  return [t, e]
                }
              })(),
        p =
          "function" == typeof Set && "function" == typeof Set.prototype.entries
            ? Set
            : (function () {
                function t() {
                  this._map = new h()
                }
                return (
                  Object.defineProperty(t.prototype, "size", {
                    get: function () {
                      return this._map.size
                    },
                    enumerable: !0,
                    configurable: !0,
                  }),
                  (t.prototype.has = function (t) {
                    return this._map.has(t)
                  }),
                  (t.prototype.add = function (t) {
                    return this._map.set(t, t), this
                  }),
                  (t.prototype.delete = function (t) {
                    return this._map.delete(t)
                  }),
                  (t.prototype.clear = function () {
                    this._map.clear()
                  }),
                  (t.prototype.keys = function () {
                    return this._map.keys()
                  }),
                  (t.prototype.values = function () {
                    return this._map.keys()
                  }),
                  (t.prototype.entries = function () {
                    return this._map.entries()
                  }),
                  (t.prototype["@@iterator"] = function () {
                    return this.keys()
                  }),
                  (t.prototype[a] = function () {
                    return this.keys()
                  }),
                  t
                )
              })(),
        d =
          "function" == typeof WeakMap
            ? WeakMap
            : (function () {
                var t = f.create(),
                  e = n()
                return (function () {
                  function t() {
                    this._key = n()
                  }
                  return (
                    (t.prototype.has = function (t) {
                      var e = i(t, !1)
                      return void 0 !== e && f.has(e, this._key)
                    }),
                    (t.prototype.get = function (t) {
                      var e = i(t, !1)
                      return void 0 !== e ? f.get(e, this._key) : void 0
                    }),
                    (t.prototype.set = function (t, e) {
                      return (i(t, !0)[this._key] = e), this
                    }),
                    (t.prototype.delete = function (t) {
                      var e = i(t, !1)
                      return void 0 !== e && delete e[this._key]
                    }),
                    (t.prototype.clear = function () {
                      this._key = n()
                    }),
                    t
                  )
                })()
                function n() {
                  var e
                  do
                    e =
                      "@@WeakMap@@" +
                      (function () {
                        var t = (function (t) {
                          if ("function" == typeof Uint8Array) {
                            var e = new Uint8Array(16)
                            return (
                              "undefined" != typeof crypto
                                ? crypto.getRandomValues(e)
                                : "undefined" != typeof msCrypto
                                  ? msCrypto.getRandomValues(e)
                                  : o(e, 16),
                              e
                            )
                          }
                          return o(Array(16), t)
                        })(16)
                        ;(t[6] = (79 & t[6]) | 64), (t[8] = (191 & t[8]) | 128)
                        for (var e = "", n = 0; n < 16; ++n) {
                          var r = t[n]
                          ;(4 === n || 6 === n || 8 === n) && (e += "-"),
                            r < 16 && (e += "0"),
                            (e += r.toString(16).toLowerCase())
                        }
                        return e
                      })()
                  while (f.has(t, e))
                  return (t[e] = !0), e
                }
                function i(t, n) {
                  if (!r.call(t, e)) {
                    if (!n) return
                    Object.defineProperty(t, e, { value: f.create() })
                  }
                  return t[e]
                }
                function o(t, e) {
                  for (var n = 0; n < e; ++n) t[n] = (255 * Math.random()) | 0
                  return t
                }
              })(),
        y = i ? Symbol.for("@reflect-metadata:registry") : void 0,
        v =
          (!x(y) &&
            A(e.Reflect) &&
            Object.isExtensible(e.Reflect) &&
            (n = e.Reflect[y]),
          x(n) &&
            (n = (function () {
              x(y) ||
                void 0 === e.Reflect ||
                y in e.Reflect ||
                "function" != typeof e.Reflect.defineMetadata ||
                ((n = (t = e.Reflect).defineMetadata),
                (r = t.hasOwnMetadata),
                (i = t.getOwnMetadata),
                (o = t.getOwnMetadataKeys),
                (a = t.deleteMetadata),
                (s = new d()),
                (u = {
                  isProviderFor: function (t, e) {
                    var n = s.get(t)
                    return (
                      !!(!x(n) && n.has(e)) ||
                      (!!o(t, e).length &&
                        (x(n) && ((n = new p()), s.set(t, n)), n.add(e), !0))
                    )
                  },
                  OrdinaryDefineOwnMetadata: n,
                  OrdinaryHasOwnMetadata: r,
                  OrdinaryGetOwnMetadata: i,
                  OrdinaryOwnMetadataKeys: o,
                  OrdinaryDeleteMetadata: a,
                }))
              var t,
                n,
                r,
                i,
                o,
                a,
                s,
                u,
                c,
                f,
                l,
                v = new d(),
                _ = {
                  registerProvider: function (t) {
                    if (!Object.isExtensible(_))
                      throw Error("Cannot add provider to a frozen registry.")
                    switch (!0) {
                      case u === t:
                        break
                      case x(c):
                        c = t
                        break
                      case c === t:
                        break
                      case x(f):
                        f = t
                        break
                      case f === t:
                        break
                      default:
                        void 0 === l && (l = new p()), l.add(t)
                    }
                  },
                  getProvider: b,
                  setProvider: function (t, e, n) {
                    if (
                      !(function (t) {
                        if (x(t)) throw TypeError()
                        return c === t || f === t || (!x(l) && l.has(t))
                      })(n)
                    )
                      throw Error("Metadata provider not registered.")
                    var r = b(t, e)
                    if (r !== n) {
                      if (!x(r)) return !1
                      var i = v.get(t)
                      x(i) && ((i = new h()), v.set(t, i)), i.set(e, n)
                    }
                    return !0
                  },
                }
              return _
              function b(t, e) {
                var n,
                  r = v.get(t)
                return (
                  x(r) || (n = r.get(e)),
                  x(n) &&
                    ((n = (function (t, e) {
                      if (!x(c)) {
                        if (c.isProviderFor(t, e)) return c
                        if (!x(f)) {
                          if (f.isProviderFor(t, e)) return c
                          if (!x(l))
                            for (var n = q(l); ; ) {
                              var r = T(n)
                              if (!r) return
                              var i = r.value
                              if (i.isProviderFor(t, e)) return C(n), i
                            }
                        }
                      }
                      if (!x(u) && u.isProviderFor(t, e)) return u
                    })(t, e)),
                    x(n) ||
                      (x(r) && ((r = new h()), v.set(t, r)), r.set(e, n))),
                  n
                )
              }
            })()),
          !x(y) &&
            A(e.Reflect) &&
            Object.isExtensible(e.Reflect) &&
            Object.defineProperty(e.Reflect, y, {
              enumerable: !1,
              configurable: !1,
              writable: !1,
              value: n,
            }),
          n),
        _ = (function (t) {
          var e = new d(),
            n = {
              isProviderFor: function (t, n) {
                var r = e.get(t)
                return !x(r) && r.has(n)
              },
              OrdinaryDefineOwnMetadata: function (t, e, n, i) {
                r(n, i, !0).set(t, e)
              },
              OrdinaryHasOwnMetadata: function (t, e, n) {
                var i = r(e, n, !1)
                return !x(i) && !!i.has(t)
              },
              OrdinaryGetOwnMetadata: function (t, e, n) {
                var i = r(e, n, !1)
                if (!x(i)) return i.get(t)
              },
              OrdinaryOwnMetadataKeys: function (t, e) {
                var n = [],
                  i = r(t, e, !1)
                if (x(i)) return n
                for (var o = q(i.keys()), a = 0; ; ) {
                  var s = T(o)
                  if (!s) return (n.length = a), n
                  var u = s.value
                  try {
                    n[a] = u
                  } catch (t) {
                    try {
                      C(o)
                    } finally {
                      throw t
                    }
                  }
                  a++
                }
              },
              OrdinaryDeleteMetadata: function (t, n, i) {
                var o = r(n, i, !1)
                if (x(o) || !o.delete(t)) return !1
                if (0 === o.size) {
                  var a = e.get(n)
                  x(a) || (a.delete(i), 0 === a.size && e.delete(a))
                }
                return !0
              },
            }
          return v.registerProvider(n), n
          function r(r, i, o) {
            var a = e.get(r),
              s = !1
            if (x(a)) {
              if (!o) return
              ;(a = new h()), e.set(r, a), (s = !0)
            }
            var u = a.get(i)
            if (x(u)) {
              if (!o) return
              if (((u = new h()), a.set(i, u), !t.setProvider(r, i, n)))
                throw (
                  (a.delete(i),
                  s && e.delete(r),
                  Error("Wrong provider for target."))
                )
            }
            return u
          }
        })(v)
      function b(t, e, n) {
        var r = P(e, n, !1)
        return !x(r) && !!r.OrdinaryHasOwnMetadata(t, e, n)
      }
      function g(t, e, n) {
        var r = P(e, n, !1)
        if (!x(r)) return r.OrdinaryGetOwnMetadata(t, e, n)
      }
      function m(t, e, n, r) {
        P(n, r, !0).OrdinaryDefineOwnMetadata(t, e, n, r)
      }
      function w(t, e) {
        var n = P(t, e, !1)
        return n ? n.OrdinaryOwnMetadataKeys(t, e) : []
      }
      function S(t) {
        if (null === t) return 1
        switch (typeof t) {
          case "undefined":
            return 0
          case "boolean":
            return 2
          case "string":
            return 3
          case "symbol":
            return 4
          case "number":
            return 5
          case "object":
            return null === t ? 1 : 6
          default:
            return 6
        }
      }
      function x(t) {
        return void 0 === t
      }
      function j(t) {
        return null === t
      }
      function A(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
      }
      function O(t) {
        var e = (function (t, e) {
          switch (S(t)) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              return t
          }
          var n = "string",
            r = M(t, o)
          if (void 0 !== r) {
            var i = r.call(t, n)
            if (A(i)) throw TypeError()
            return i
          }
          return (function (t, e) {
            if ("string" === e) {
              var n = t.toString
              if (E(n)) {
                var r = n.call(t)
                if (!A(r)) return r
              }
              var i = t.valueOf
              if (E(i)) {
                var r = i.call(t)
                if (!A(r)) return r
              }
            } else {
              var i = t.valueOf
              if (E(i)) {
                var r = i.call(t)
                if (!A(r)) return r
              }
              var o = t.toString
              if (E(o)) {
                var r = o.call(t)
                if (!A(r)) return r
              }
            }
            throw TypeError()
          })(t, n)
        })(t, 0)
        return "symbol" == typeof e ? e : "" + e
      }
      function I(t) {
        return Array.isArray
          ? Array.isArray(t)
          : t instanceof Object
            ? t instanceof Array
            : "[object Array]" === Object.prototype.toString.call(t)
      }
      function E(t) {
        return "function" == typeof t
      }
      function R(t) {
        return "function" == typeof t
      }
      function k(t, e) {
        return t === e || (t != t && e != e)
      }
      function M(t, e) {
        var n = t[e]
        if (null != n) {
          if (!E(n)) throw TypeError()
          return n
        }
      }
      function q(t) {
        var e = M(t, a)
        if (!E(e)) throw TypeError()
        var n = e.call(t)
        if (!A(n)) throw TypeError()
        return n
      }
      function T(t) {
        var e = t.next()
        return !e.done && e
      }
      function C(t) {
        var e = t.return
        e && e.call(t)
      }
      function D(t) {
        var e = Object.getPrototypeOf(t)
        if ("function" != typeof t || t === l || e !== l) return e
        var n = t.prototype,
          r = n && Object.getPrototypeOf(n)
        if (null == r || r === Object.prototype) return e
        var i = r.constructor
        return "function" != typeof i || i === t ? e : i
      }
      function P(t, e, n) {
        var r = v.getProvider(t, e)
        if (!x(r)) return r
        if (n) {
          if (v.setProvider(t, e, _)) return _
          throw Error("Illegal state.")
        }
      }
      function z(t) {
        return (t.__ = void 0), delete t.__, t
      }
      t("decorate", function (t, e, n, r) {
        if (x(n)) {
          if (!I(t) || !R(e)) throw TypeError()
          return (function (t, e) {
            for (var n = t.length - 1; n >= 0; --n) {
              var r = (0, t[n])(e)
              if (!x(r) && !j(r)) {
                if (!R(r)) throw TypeError()
                e = r
              }
            }
            return e
          })(t, e)
        }
        if (!I(t) || !A(e) || (!A(r) && !x(r) && !j(r))) throw TypeError()
        return (
          j(r) && (r = void 0),
          (function (t, e, n, r) {
            for (var i = t.length - 1; i >= 0; --i) {
              var o = (0, t[i])(e, n, r)
              if (!x(o) && !j(o)) {
                if (!A(o)) throw TypeError()
                r = o
              }
            }
            return r
          })(t, e, (n = O(n)), r)
        )
      }),
        t("metadata", function (t, e) {
          return function (n, r) {
            if (
              !A(n) ||
              (!x(r) &&
                !(function (t) {
                  switch (S(t)) {
                    case 3:
                    case 4:
                      return !0
                    default:
                      return !1
                  }
                })(r))
            )
              throw TypeError()
            m(t, e, n, r)
          }
        }),
        t("defineMetadata", function (t, e, n, r) {
          if (!A(n)) throw TypeError()
          return x(r) || (r = O(r)), m(t, e, n, r)
        }),
        t("hasMetadata", function (t, e, n) {
          if (!A(e)) throw TypeError()
          return (
            x(n) || (n = O(n)),
            (function t(e, n, r) {
              if (b(e, n, r)) return !0
              var i = D(n)
              return !j(i) && t(e, i, r)
            })(t, e, n)
          )
        }),
        t("hasOwnMetadata", function (t, e, n) {
          if (!A(e)) throw TypeError()
          return x(n) || (n = O(n)), b(t, e, n)
        }),
        t("getMetadata", function (t, e, n) {
          if (!A(e)) throw TypeError()
          return (
            x(n) || (n = O(n)),
            (function t(e, n, r) {
              if (b(e, n, r)) return g(e, n, r)
              var i = D(n)
              if (!j(i)) return t(e, i, r)
            })(t, e, n)
          )
        }),
        t("getOwnMetadata", function (t, e, n) {
          if (!A(e)) throw TypeError()
          return x(n) || (n = O(n)), g(t, e, n)
        }),
        t("getMetadataKeys", function (t, e) {
          if (!A(t)) throw TypeError()
          return (
            x(e) || (e = O(e)),
            (function t(e, n) {
              var r = w(e, n),
                i = D(e)
              if (null === i) return r
              var o = t(i, n)
              if (o.length <= 0) return r
              if (r.length <= 0) return o
              for (var a = new p(), s = [], u = 0; u < r.length; u++) {
                var c = r[u],
                  f = a.has(c)
                f || (a.add(c), s.push(c))
              }
              for (var l = 0; l < o.length; l++) {
                var c = o[l],
                  f = a.has(c)
                f || (a.add(c), s.push(c))
              }
              return s
            })(t, e)
          )
        }),
        t("getOwnMetadataKeys", function (t, e) {
          if (!A(t)) throw TypeError()
          return x(e) || (e = O(e)), w(t, e)
        }),
        t("deleteMetadata", function (t, e, n) {
          if (!A(e) || (x(n) || (n = O(n)), !A(e))) throw TypeError()
          x(n) || (n = O(n))
          var r = P(e, n, !1)
          return !x(r) && r.OrdinaryDeleteMetadata(t, e, n)
        })
    })
  var V = {
      Request: "Request",
      Singleton: "Singleton",
      Transient: "Transient",
    },
    B = {
      ConstantValue: "ConstantValue",
      Constructor: "Constructor",
      DynamicValue: "DynamicValue",
      Factory: "Factory",
      Function: "Function",
      Instance: "Instance",
      Invalid: "Invalid",
      Provider: "Provider",
    },
    W = {
      ClassProperty: "ClassProperty",
      ConstructorArgument: "ConstructorArgument",
      Variable: "Variable",
    },
    U = 0,
    H = (function () {
      function t(t, e) {
        ;(this.id = U++),
          (this.activated = !1),
          (this.serviceIdentifier = t),
          (this.scope = e),
          (this.type = B.Invalid),
          (this.constraint = function (t) {
            return !0
          }),
          (this.implementationType = null),
          (this.cache = null),
          (this.factory = null),
          (this.provider = null),
          (this.onActivation = null),
          (this.onDeactivation = null),
          (this.dynamicValue = null)
      }
      return (
        (t.prototype.clone = function () {
          var e = new t(this.serviceIdentifier, this.scope)
          return (
            (e.activated = e.scope === V.Singleton && this.activated),
            (e.implementationType = this.implementationType),
            (e.dynamicValue = this.dynamicValue),
            (e.scope = this.scope),
            (e.type = this.type),
            (e.factory = this.factory),
            (e.provider = this.provider),
            (e.constraint = this.constraint),
            (e.onActivation = this.onActivation),
            (e.onDeactivation = this.onDeactivation),
            (e.cache = this.cache),
            e
          )
        }),
        t
      )
    })(),
    L = "Metadata key was used more than once in a parameter:",
    G = "NULL argument",
    K = "Key Not Found",
    J = "Missing required @injectable annotation in:",
    Y =
      "The @inject @multiInject @tagged and @named decorators must be applied to the parameters of a class constructor or a class property.",
    Q = function () {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
      return (
        "The number of constructor arguments in the derived class " +
        t[0] +
        " must be >= than the number of constructor arguments of its base class."
      )
    },
    $ = function (t, e) {
      return "onDeactivation() error in class " + t + ": " + e
    },
    X = {}
  e(X, "NAMED_TAG", function () {
    return Z
  }),
    e(X, "NAME_TAG", function () {
      return tt
    }),
    e(X, "UNMANAGED_TAG", function () {
      return te
    }),
    e(X, "OPTIONAL_TAG", function () {
      return tn
    }),
    e(X, "INJECT_TAG", function () {
      return tr
    }),
    e(X, "MULTI_INJECT_TAG", function () {
      return ti
    }),
    e(X, "TAGGED", function () {
      return to
    }),
    e(X, "TAGGED_PROP", function () {
      return ta
    }),
    e(X, "PARAM_TYPES", function () {
      return ts
    }),
    e(X, "DESIGN_PARAM_TYPES", function () {
      return tu
    }),
    e(X, "POST_CONSTRUCT", function () {
      return tc
    }),
    e(X, "PRE_DESTROY", function () {
      return tf
    }),
    e(X, "NON_CUSTOM_TAG_KEYS", function () {
      return tl
    })
  var Z = "named",
    tt = "name",
    te = "unmanaged",
    tn = "optional",
    tr = "inject",
    ti = "multi_inject",
    to = "inversify:tagged",
    ta = "inversify:tagged_props",
    ts = "inversify:paramtypes",
    tu = "design:paramtypes",
    tc = "post_construct",
    tf = "pre_destroy",
    tl = [tr, ti, tt, te, Z, tn],
    th = (function () {
      function t() {}
      return (
        (t.prototype.getConstructorMetadata = function (t) {
          return {
            compilerGeneratedMetadata: Reflect.getMetadata(ts, t),
            userGeneratedMetadata: Reflect.getMetadata(to, t) || {},
          }
        }),
        (t.prototype.getPropertiesMetadata = function (t) {
          return Reflect.getMetadata(ta, t) || []
        }),
        t
      )
    })(),
    tp = {
      MultipleBindingsAvailable: 2,
      NoBindingsAvailable: 0,
      OnlyOneBindingAvailable: 1,
    }
  function td(t) {
    return (
      t instanceof RangeError ||
      "Maximum call stack size exceeded" === t.message
    )
  }
  var ty = function (t, e) {
    try {
      return t()
    } catch (t) {
      throw (td(t) && (t = e()), t)
    }
  }
  function tv(t) {
    if ("function" == typeof t) {
      var e = t
      return e.name
    }
    if ("symbol" == typeof t) return t.toString()
    var e = t
    return e
  }
  function t_(t, e, n) {
    var r = "",
      i = n(t, e)
    return (
      0 !== i.length &&
        ((r = "\nRegistered bindings:"),
        i.forEach(function (t) {
          var e = "Object"
          null !== t.implementationType && (e = tb(t.implementationType)),
            (r = r + "\n " + e),
            t.constraint.metaData && (r = r + " - " + t.constraint.metaData)
        })),
      r
    )
  }
  function tb(t) {
    if (t.name) return t.name
    var e = t.toString(),
      n = e.match(/^function\s*([^\s(]+)/)
    return n ? n[1] : "Anonymous function: " + e
  }
  var tg = (function () {
      function t(t) {
        ;(this.id = U++), (this.container = t)
      }
      return (
        (t.prototype.addPlan = function (t) {
          this.plan = t
        }),
        (t.prototype.setCurrentRequest = function (t) {
          this.currentRequest = t
        }),
        t
      )
    })(),
    tm = (function () {
      function t(t, e) {
        ;(this.key = t), (this.value = e)
      }
      return (
        (t.prototype.toString = function () {
          return this.key === Z
            ? "named: " + String(this.value).toString() + " "
            : "tagged: { key:" +
                this.key.toString() +
                ", value: " +
                String(this.value) +
                " }"
        }),
        t
      )
    })(),
    tw = function (t, e) {
      ;(this.parentContext = t), (this.rootRequest = e)
    },
    tS = (function () {
      function t(t) {
        this._cb = t
      }
      return (
        (t.prototype.unwrap = function () {
          return this._cb()
        }),
        t
      )
    })(),
    tx = (function () {
      function t(t) {
        this.str = t
      }
      return (
        (t.prototype.startsWith = function (t) {
          return 0 === this.str.indexOf(t)
        }),
        (t.prototype.endsWith = function (t) {
          var e = "",
            n = t.split("").reverse().join("")
          return (
            (e = this.str.split("").reverse().join("")),
            this.startsWith.call({ str: e }, n)
          )
        }),
        (t.prototype.contains = function (t) {
          return -1 !== this.str.indexOf(t)
        }),
        (t.prototype.equals = function (t) {
          return this.str === t
        }),
        (t.prototype.value = function () {
          return this.str
        }),
        t
      )
    })(),
    tj = (function () {
      function t(t, e, n, r) {
        ;(this.id = U++), (this.type = t), (this.serviceIdentifier = n)
        var i = "symbol" == typeof e ? e.toString().slice(7, -1) : e
        ;(this.name = new tx(i || "")),
          (this.identifier = e),
          (this.metadata = [])
        var o = null
        "string" == typeof r ? (o = new tm(Z, r)) : r instanceof tm && (o = r),
          null !== o && this.metadata.push(o)
      }
      return (
        (t.prototype.hasTag = function (t) {
          for (var e = 0, n = this.metadata; e < n.length; e++)
            if (n[e].key === t) return !0
          return !1
        }),
        (t.prototype.isArray = function () {
          return this.hasTag(ti)
        }),
        (t.prototype.matchesArray = function (t) {
          return this.matchesTag(ti)(t)
        }),
        (t.prototype.isNamed = function () {
          return this.hasTag(Z)
        }),
        (t.prototype.isTagged = function () {
          return this.metadata.some(function (t) {
            return tl.every(function (e) {
              return t.key !== e
            })
          })
        }),
        (t.prototype.isOptional = function () {
          return this.matchesTag(tn)(!0)
        }),
        (t.prototype.getNamedTag = function () {
          return this.isNamed()
            ? this.metadata.filter(function (t) {
                return t.key === Z
              })[0]
            : null
        }),
        (t.prototype.getCustomTags = function () {
          return this.isTagged()
            ? this.metadata.filter(function (t) {
                return tl.every(function (e) {
                  return t.key !== e
                })
              })
            : null
        }),
        (t.prototype.matchesNamedTag = function (t) {
          return this.matchesTag(Z)(t)
        }),
        (t.prototype.matchesTag = function (t) {
          var e = this
          return function (n) {
            for (var r = 0, i = e.metadata; r < i.length; r++) {
              var o = i[r]
              if (o.key === t && o.value === n) return !0
            }
            return !1
          }
        }),
        t
      )
    })(),
    tA = function (t, e, n) {
      if (n || 2 == arguments.length)
        for (var r, i = 0, o = e.length; i < o; i++)
          (!r && i in e) ||
            (r || (r = Array.prototype.slice.call(e, 0, i)), (r[i] = e[i]))
      return t.concat(r || Array.prototype.slice.call(e))
    }
  function tO(t, e, n, r) {
    var i = t.getConstructorMetadata(n),
      o = i.compilerGeneratedMetadata
    if (void 0 === o) throw Error(J + " " + e + ".")
    var a = i.userGeneratedMetadata,
      s = Object.keys(a),
      u = 0 === n.length && s.length > 0,
      c = s.length > n.length,
      f = (function (t, e, n, r, i) {
        for (var o = [], a = 0; a < i; a++) {
          var s = (function (t, e, n, r, i) {
            var o = i[t.toString()] || [],
              a = tI(o),
              s = !0 !== a.unmanaged,
              u = r[t]
            if (
              ((u = a.inject || a.multiInject || u) instanceof tS &&
                (u = u.unwrap()),
              s)
            ) {
              var c = u === Object,
                f = u === Function,
                l = void 0 === u
              if (!e && (c || f || l))
                throw Error(
                  "Missing required @inject or @multiInject annotation in: argument " +
                    t +
                    " in class " +
                    n +
                    ".",
                )
              var h = new tj(W.ConstructorArgument, a.targetName, u)
              return (h.metadata = o), h
            }
            return null
          })(a, t, e, n, r)
          null !== s && o.push(s)
        }
        return o
      })(r, e, o, a, u || c ? s.length : n.length),
      l = (function t(e, n, r) {
        for (
          var i = e.getPropertiesMetadata(n),
            o = [],
            a = Object.getOwnPropertySymbols(i),
            s = Object.keys(i).concat(a),
            u = 0;
          u < s.length;
          u++
        ) {
          var c = s[u],
            f = i[c],
            l = tI(f),
            h = l.targetName || c,
            p = (function (t, e, n, r) {
              var i = t || e
              if (void 0 === i)
                throw Error(
                  J + " for property " + String(n) + " in class " + r + ".",
                )
              return i
            })(l.inject, l.multiInject, c, r),
            d = new tj(W.ClassProperty, h, p)
          ;(d.metadata = f), o.push(d)
        }
        var y = Object.getPrototypeOf(n.prototype).constructor
        if (y !== Object) {
          var v = t(e, y, r)
          o = tA(tA([], o, !0), v, !0)
        }
        return o
      })(t, n, e)
    return tA(tA([], f, !0), l, !0)
  }
  function tI(t) {
    var e = {}
    return (
      t.forEach(function (t) {
        e[t.key.toString()] = t.value
      }),
      { inject: e[tr], multiInject: e[ti], targetName: e[tt], unmanaged: e[te] }
    )
  }
  var tE = (function () {
    function t(t, e, n, r, i) {
      ;(this.id = U++),
        (this.serviceIdentifier = t),
        (this.parentContext = e),
        (this.parentRequest = n),
        (this.target = i),
        (this.childRequests = []),
        (this.bindings = Array.isArray(r) ? r : [r]),
        (this.requestScope = null === n ? new Map() : null)
    }
    return (
      (t.prototype.addChildRequest = function (e, n, r) {
        var i = new t(e, this.parentContext, this, n, r)
        return this.childRequests.push(i), i
      }),
      t
    )
  })()
  function tR(t) {
    return t._bindingDictionary
  }
  function tk(t, e, n, r, i) {
    var o = tM(n.container, i.serviceIdentifier),
      a = []
    return (
      o.length === tp.NoBindingsAvailable &&
        n.container.options.autoBindInjectable &&
        "function" == typeof i.serviceIdentifier &&
        t.getConstructorMetadata(i.serviceIdentifier)
          .compilerGeneratedMetadata &&
        (n.container.bind(i.serviceIdentifier).toSelf(),
        (o = tM(n.container, i.serviceIdentifier))),
      (a = e
        ? o
        : o.filter(function (t) {
            var e = new tE(t.serviceIdentifier, n, r, t, i)
            return t.constraint(e)
          })),
      (function (t, e, n, r) {
        switch (e.length) {
          case tp.NoBindingsAvailable:
            if (n.isOptional()) return
            var i = tv(t),
              o = "No matching bindings found for serviceIdentifier:"
            throw Error(
              (o +=
                (function (t, e) {
                  if (!(e.isTagged() || e.isNamed())) return " " + t
                  var n = "",
                    r = e.getNamedTag(),
                    i = e.getCustomTags()
                  return (
                    null !== r && (n += r.toString() + "\n"),
                    null !== i &&
                      i.forEach(function (t) {
                        n += t.toString() + "\n"
                      }),
                    " " + t + "\n " + t + " - " + n
                  )
                })(i, n) + t_(r, i, tM)),
            )
          case tp.OnlyOneBindingAvailable:
            return
          case tp.MultipleBindingsAvailable:
          default:
            if (n.isArray()) return
            var i = tv(t),
              o = "Ambiguous match found for serviceIdentifier: " + i
            throw Error((o += t_(r, i, tM)))
        }
      })(i.serviceIdentifier, a, i, n.container),
      a
    )
  }
  function tM(t, e) {
    var n = [],
      r = tR(t)
    return (
      r.hasKey(e) ? (n = r.get(e)) : null !== t.parent && (n = tM(t.parent, e)),
      n
    )
  }
  function tq(t) {
    return (
      (("object" == typeof t && null !== t) || "function" == typeof t) &&
      "function" == typeof t.then
    )
  }
  function tT(t) {
    return !!tq(t) || (Array.isArray(t) && t.some(tq))
  }
  var tC = function (t, e) {
      var n,
        r,
        i,
        o,
        a = {
          label: 0,
          sent: function () {
            if (1 & i[0]) throw i[1]
            return i[1]
          },
          trys: [],
          ops: [],
        }
      return (
        (o = { next: s(0), throw: s(1), return: s(2) }),
        "function" == typeof Symbol &&
          (o[Symbol.iterator] = function () {
            return this
          }),
        o
      )
      function s(o) {
        return function (s) {
          return (function (o) {
            if (n) throw TypeError("Generator is already executing.")
            for (; a; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (i =
                      2 & o[0]
                        ? r.return
                        : o[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                    !(i = i.call(r, o[1])).done)
                )
                  return i
                switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                  case 0:
                  case 1:
                    i = o
                    break
                  case 4:
                    return a.label++, { value: o[1], done: !1 }
                  case 5:
                    a.label++, (r = o[1]), (o = [0])
                    continue
                  case 7:
                    ;(o = a.ops.pop()), a.trys.pop()
                    continue
                  default:
                    if (
                      !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                      (6 === o[0] || 2 === o[0])
                    ) {
                      a = 0
                      continue
                    }
                    if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                      a.label = o[1]
                      break
                    }
                    if (6 === o[0] && a.label < i[1]) {
                      ;(a.label = i[1]), (i = o)
                      break
                    }
                    if (i && a.label < i[2]) {
                      ;(a.label = i[2]), a.ops.push(o)
                      break
                    }
                    i[2] && a.ops.pop(), a.trys.pop()
                    continue
                }
                o = e.call(t, a)
              } catch (t) {
                ;(o = [6, t]), (r = 0)
              } finally {
                n = i = 0
              }
            if (5 & o[0]) throw o[1]
            return { value: o[0] ? o[1] : void 0, done: !0 }
          })([o, s])
        }
      }
    },
    tD = function (t, e, n) {
      e.scope === V.Singleton && tz(e, n), e.scope === V.Request && tP(t, e, n)
    },
    tP = function (t, e, n) {
      t.has(e.id) || t.set(e.id, n)
    },
    tz = function (t, e) {
      ;(t.cache = e), (t.activated = !0), tq(e) && tN(t, e)
    },
    tN = function (t, e) {
      var n, r, i, o
      return (
        (n = void 0),
        (r = void 0),
        (i = void 0),
        (o = function () {
          var n, r
          return tC(this, function (i) {
            switch (i.label) {
              case 0:
                return i.trys.push([0, 2, , 3]), [4, e]
              case 1:
                return (n = i.sent()), (t.cache = n), [3, 3]
              case 2:
                throw ((r = i.sent()), (t.cache = null), (t.activated = !1), r)
              case 3:
                return [2]
            }
          })
        }),
        new (i || (i = Promise))(function (t, e) {
          function a(t) {
            try {
              u(o.next(t))
            } catch (t) {
              e(t)
            }
          }
          function s(t) {
            try {
              u(o.throw(t))
            } catch (t) {
              e(t)
            }
          }
          function u(e) {
            var n
            e.done
              ? t(e.value)
              : ((n = e.value) instanceof i
                  ? n
                  : new i(function (t) {
                      t(n)
                    })
                ).then(a, s)
          }
          u((o = o.apply(n, r || [])).next())
        })
      )
    }
  ;((r = l || (l = {})).DynamicValue = "toDynamicValue"),
    (r.Factory = "toFactory"),
    (r.Provider = "toProvider")
  var tF = function (t) {
      var e = null
      switch (t.type) {
        case B.ConstantValue:
        case B.Function:
          e = t.cache
          break
        case B.Constructor:
        case B.Instance:
          e = t.implementationType
          break
        case B.DynamicValue:
          e = t.dynamicValue
          break
        case B.Provider:
          e = t.provider
          break
        case B.Factory:
          e = t.factory
      }
      if (null === e)
        throw Error("Invalid binding type: " + tv(t.serviceIdentifier))
    },
    tV = function (t) {
      switch (t.type) {
        case B.Factory:
          return { factory: t.factory, factoryType: l.Factory }
        case B.Provider:
          return { factory: t.provider, factoryType: l.Provider }
        case B.DynamicValue:
          return { factory: t.dynamicValue, factoryType: l.DynamicValue }
        default:
          throw Error("Unexpected factory type " + t.type)
      }
    },
    tB = function () {
      return (tB =
        Object.assign ||
        function (t) {
          for (var e, n = 1, r = arguments.length; n < r; n++)
            for (var i in (e = arguments[n]))
              Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
          return t
        }).apply(this, arguments)
    },
    tW = function (t, e, n, r) {
      return new (n || (n = Promise))(function (i, o) {
        function a(t) {
          try {
            u(r.next(t))
          } catch (t) {
            o(t)
          }
        }
        function s(t) {
          try {
            u(r.throw(t))
          } catch (t) {
            o(t)
          }
        }
        function u(t) {
          var e
          t.done
            ? i(t.value)
            : ((e = t.value) instanceof n
                ? e
                : new n(function (t) {
                    t(e)
                  })
              ).then(a, s)
        }
        u((r = r.apply(t, e || [])).next())
      })
    },
    tU = function (t, e) {
      var n,
        r,
        i,
        o,
        a = {
          label: 0,
          sent: function () {
            if (1 & i[0]) throw i[1]
            return i[1]
          },
          trys: [],
          ops: [],
        }
      return (
        (o = { next: s(0), throw: s(1), return: s(2) }),
        "function" == typeof Symbol &&
          (o[Symbol.iterator] = function () {
            return this
          }),
        o
      )
      function s(o) {
        return function (s) {
          return (function (o) {
            if (n) throw TypeError("Generator is already executing.")
            for (; a; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (i =
                      2 & o[0]
                        ? r.return
                        : o[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                    !(i = i.call(r, o[1])).done)
                )
                  return i
                switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                  case 0:
                  case 1:
                    i = o
                    break
                  case 4:
                    return a.label++, { value: o[1], done: !1 }
                  case 5:
                    a.label++, (r = o[1]), (o = [0])
                    continue
                  case 7:
                    ;(o = a.ops.pop()), a.trys.pop()
                    continue
                  default:
                    if (
                      !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                      (6 === o[0] || 2 === o[0])
                    ) {
                      a = 0
                      continue
                    }
                    if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                      a.label = o[1]
                      break
                    }
                    if (6 === o[0] && a.label < i[1]) {
                      ;(a.label = i[1]), (i = o)
                      break
                    }
                    if (i && a.label < i[2]) {
                      ;(a.label = i[2]), a.ops.push(o)
                      break
                    }
                    i[2] && a.ops.pop(), a.trys.pop()
                    continue
                }
                o = e.call(t, a)
              } catch (t) {
                ;(o = [6, t]), (r = 0)
              } finally {
                n = i = 0
              }
            if (5 & o[0]) throw o[1]
            return { value: o[0] ? o[1] : void 0, done: !0 }
          })([o, s])
        }
      }
    },
    tH = function (t, e, n) {
      if (n || 2 == arguments.length)
        for (var r, i = 0, o = e.length; i < o; i++)
          (!r && i in e) ||
            (r || (r = Array.prototype.slice.call(e, 0, i)), (r[i] = e[i]))
      return t.concat(r || Array.prototype.slice.call(e))
    }
  function tL(t) {
    var e,
      n = new ((e = t.constr).bind.apply(
        e,
        tH([void 0], t.constructorInjections, !1),
      ))()
    return (
      t.propertyRequests.forEach(function (e, r) {
        var i = e.target.identifier,
          o = t.propertyInjections[r]
        ;(e.target.isOptional() && void 0 === o) || (n[i] = o)
      }),
      n
    )
  }
  function tG(t) {
    return tW(this, void 0, void 0, function () {
      var e, n, r, i
      return tU(this, function (o) {
        for (n = 0, e = [], r = t; n < r.length; n++)
          Array.isArray((i = r[n])) ? e.push(Promise.all(i)) : e.push(i)
        return [2, Promise.all(e)]
      })
    })
  }
  function tK(t, e) {
    var n = (function (t, e) {
      var n
      if (Reflect.hasMetadata(tc, t)) {
        var r = Reflect.getMetadata(tc, t)
        try {
          return null === (n = e[r.value]) || void 0 === n ? void 0 : n.call(e)
        } catch (e) {
          if (e instanceof Error)
            throw Error(
              "@postConstruct error in class " + t.name + ": " + e.message,
            )
        }
      }
    })(t, e)
    return tq(n)
      ? n.then(function () {
          return e
        })
      : e
  }
  var tJ = function (t, e) {
      var n,
        r,
        i,
        o,
        a = {
          label: 0,
          sent: function () {
            if (1 & i[0]) throw i[1]
            return i[1]
          },
          trys: [],
          ops: [],
        }
      return (
        (o = { next: s(0), throw: s(1), return: s(2) }),
        "function" == typeof Symbol &&
          (o[Symbol.iterator] = function () {
            return this
          }),
        o
      )
      function s(o) {
        return function (s) {
          return (function (o) {
            if (n) throw TypeError("Generator is already executing.")
            for (; a; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (i =
                      2 & o[0]
                        ? r.return
                        : o[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                    !(i = i.call(r, o[1])).done)
                )
                  return i
                switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                  case 0:
                  case 1:
                    i = o
                    break
                  case 4:
                    return a.label++, { value: o[1], done: !1 }
                  case 5:
                    a.label++, (r = o[1]), (o = [0])
                    continue
                  case 7:
                    ;(o = a.ops.pop()), a.trys.pop()
                    continue
                  default:
                    if (
                      !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                      (6 === o[0] || 2 === o[0])
                    ) {
                      a = 0
                      continue
                    }
                    if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                      a.label = o[1]
                      break
                    }
                    if (6 === o[0] && a.label < i[1]) {
                      ;(a.label = i[1]), (i = o)
                      break
                    }
                    if (i && a.label < i[2]) {
                      ;(a.label = i[2]), a.ops.push(o)
                      break
                    }
                    i[2] && a.ops.pop(), a.trys.pop()
                    continue
                }
                o = e.call(t, a)
              } catch (t) {
                ;(o = [6, t]), (r = 0)
              } finally {
                n = i = 0
              }
            if (5 & o[0]) throw o[1]
            return { value: o[0] ? o[1] : void 0, done: !0 }
          })([o, s])
        }
      }
    },
    tY = function (t) {
      return function (e) {
        e.parentContext.setCurrentRequest(e)
        var n = e.bindings,
          r = e.childRequests,
          i = e.target && e.target.isArray(),
          o =
            !e.parentRequest ||
            !e.parentRequest.target ||
            !e.target ||
            !e.parentRequest.target.matchesArray(e.target.serviceIdentifier)
        return i && o
          ? r.map(function (e) {
              return tY(t)(e)
            })
          : e.target.isOptional() && 0 === n.length
            ? void 0
            : tZ(t, e, n[0])
      }
    },
    tQ = function (t, e) {
      var n = tV(t)
      return ty(
        function () {
          return n.factory.bind(t)(e)
        },
        function () {
          return Error(
            "It looks like there is a circular dependency in one of the '" +
              n.factoryType +
              "' bindings. Please investigate bindings with service identifier '" +
              e.currentRequest.serviceIdentifier.toString() +
              "'.",
          )
        },
      )
    },
    t$ = function (t, e, n) {
      var r,
        i,
        o,
        a,
        s = e.childRequests
      switch ((tF(n), n.type)) {
        case B.ConstantValue:
        case B.Function:
          a = n.cache
          break
        case B.Constructor:
          a = n.implementationType
          break
        case B.Instance:
          ;(r = n.implementationType),
            (i = tY(t)),
            n.scope !== V.Singleton &&
              (function (t, e) {
                var n =
                  "Class cannot be instantiated in " +
                  (t.scope === V.Request ? "request" : "transient") +
                  " scope."
                if ("function" == typeof t.onDeactivation)
                  throw Error($(e.name, n))
                if (Reflect.hasMetadata(tf, e))
                  throw Error("@preDestroy error in class " + e.name + ": " + n)
              })(n, r),
            (a = tq(
              (o = (function (t, e, n) {
                var r
                if (e.length > 0) {
                  var i = e.reduce(
                      function (t, e) {
                        var r = n(e)
                        return (
                          e.target.type === W.ConstructorArgument
                            ? t.constructorInjections.push(r)
                            : (t.propertyRequests.push(e),
                              t.propertyInjections.push(r)),
                          t.isAsync || (t.isAsync = tT(r)),
                          t
                        )
                      },
                      {
                        constructorInjections: [],
                        propertyInjections: [],
                        propertyRequests: [],
                        isAsync: !1,
                      },
                    ),
                    o = tB(tB({}, i), { constr: t })
                  r = i.isAsync
                    ? (function (t) {
                        return tW(this, void 0, void 0, function () {
                          var e, n
                          return tU(this, function (r) {
                            switch (r.label) {
                              case 0:
                                return [4, tG(t.constructorInjections)]
                              case 1:
                                return (
                                  (e = r.sent()), [4, tG(t.propertyInjections)]
                                )
                              case 2:
                                return (
                                  (n = r.sent()),
                                  [
                                    2,
                                    tL(
                                      tB(tB({}, t), {
                                        constructorInjections: e,
                                        propertyInjections: n,
                                      }),
                                    ),
                                  ]
                                )
                            }
                          })
                        })
                      })(o)
                    : tL(o)
                } else r = new t()
                return r
              })(r, s, i)),
            )
              ? o.then(function (t) {
                  return tK(r, t)
                })
              : tK(r, o))
          break
        default:
          a = tQ(n, e.parentContext)
      }
      return a
    },
    tX = function (t, e, n) {
      var r =
        e.scope === V.Singleton && e.activated
          ? e.cache
          : e.scope === V.Request && t.has(e.id)
            ? t.get(e.id)
            : null
      return null !== r || tD(t, e, (r = n())), r
    },
    tZ = function (t, e, n) {
      return tX(t, n, function () {
        var r = t$(t, e, n)
        return tq(r)
          ? r.then(function (t) {
              return t0(e, n, t)
            })
          : t0(e, n, r)
      })
    }
  function t0(t, e, n) {
    var r,
      i = t1(t.parentContext, e, n),
      o = t4(t.parentContext.container),
      a = o.next()
    do {
      r = a.value
      var s = t.parentContext,
        u = t5(r, t.serviceIdentifier)
      ;(i = tq(i) ? t3(u, s, i) : t2(u, s, i)), (a = o.next())
    } while (!0 !== a.done && !tR(r).hasKey(t.serviceIdentifier))
    return i
  }
  var t1 = function (t, e, n) {
      return "function" == typeof e.onActivation ? e.onActivation(t, n) : n
    },
    t2 = function (t, e, n) {
      for (var r = t.next(); !r.done; ) {
        if (tq((n = r.value(e, n)))) return t3(t, e, n)
        r = t.next()
      }
      return n
    },
    t3 = function (t, e, n) {
      var r, i, o, a
      return (
        (r = void 0),
        (i = void 0),
        (o = void 0),
        (a = function () {
          var r, i
          return tJ(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, n]
              case 1:
                ;(r = o.sent()), (i = t.next()), (o.label = 2)
              case 2:
                if (i.done) return [3, 4]
                return [4, i.value(e, r)]
              case 3:
                return (r = o.sent()), (i = t.next()), [3, 2]
              case 4:
                return [2, r]
            }
          })
        }),
        new (o || (o = Promise))(function (t, e) {
          function n(t) {
            try {
              u(a.next(t))
            } catch (t) {
              e(t)
            }
          }
          function s(t) {
            try {
              u(a.throw(t))
            } catch (t) {
              e(t)
            }
          }
          function u(e) {
            var r
            e.done
              ? t(e.value)
              : ((r = e.value) instanceof o
                  ? r
                  : new o(function (t) {
                      t(r)
                    })
                ).then(n, s)
          }
          u((a = a.apply(r, i || [])).next())
        })
      )
    },
    t5 = function (t, e) {
      var n = t._activations
      return n.hasKey(e) ? n.get(e).values() : [].values()
    },
    t4 = function (t) {
      for (var e = [t], n = t.parent; null !== n; ) e.push(n), (n = n.parent)
      return {
        next: function () {
          var t = e.pop()
          return void 0 !== t
            ? { done: !1, value: t }
            : { done: !0, value: void 0 }
        },
      }
    },
    t6 = function (t, e) {
      var n = t.parentRequest
      return null !== n && (!!e(n) || t6(n, e))
    },
    t8 = function (t) {
      return function (e) {
        var n = function (n) {
          return null !== n && null !== n.target && n.target.matchesTag(t)(e)
        }
        return (n.metaData = new tm(t, e)), n
      }
    },
    t7 = t8(Z),
    t9 = function (t) {
      return function (e) {
        var n = null
        return (
          null !== e &&
          (((n = e.bindings[0]), "string" == typeof t)
            ? n.serviceIdentifier === t
            : t === e.bindings[0].implementationType)
        )
      }
    },
    et = (function () {
      function t(t) {
        this._binding = t
      }
      return (
        (t.prototype.when = function (t) {
          return (this._binding.constraint = t), new ee(this._binding)
        }),
        (t.prototype.whenTargetNamed = function (t) {
          return (this._binding.constraint = t7(t)), new ee(this._binding)
        }),
        (t.prototype.whenTargetIsDefault = function () {
          return (
            (this._binding.constraint = function (t) {
              return (
                null !== t &&
                null !== t.target &&
                !t.target.isNamed() &&
                !t.target.isTagged()
              )
            }),
            new ee(this._binding)
          )
        }),
        (t.prototype.whenTargetTagged = function (t, e) {
          return (this._binding.constraint = t8(t)(e)), new ee(this._binding)
        }),
        (t.prototype.whenInjectedInto = function (t) {
          return (
            (this._binding.constraint = function (e) {
              return null !== e && t9(t)(e.parentRequest)
            }),
            new ee(this._binding)
          )
        }),
        (t.prototype.whenParentNamed = function (t) {
          return (
            (this._binding.constraint = function (e) {
              return null !== e && t7(t)(e.parentRequest)
            }),
            new ee(this._binding)
          )
        }),
        (t.prototype.whenParentTagged = function (t, e) {
          return (
            (this._binding.constraint = function (n) {
              return null !== n && t8(t)(e)(n.parentRequest)
            }),
            new ee(this._binding)
          )
        }),
        (t.prototype.whenAnyAncestorIs = function (t) {
          return (
            (this._binding.constraint = function (e) {
              return null !== e && t6(e, t9(t))
            }),
            new ee(this._binding)
          )
        }),
        (t.prototype.whenNoAncestorIs = function (t) {
          return (
            (this._binding.constraint = function (e) {
              return null !== e && !t6(e, t9(t))
            }),
            new ee(this._binding)
          )
        }),
        (t.prototype.whenAnyAncestorNamed = function (t) {
          return (
            (this._binding.constraint = function (e) {
              return null !== e && t6(e, t7(t))
            }),
            new ee(this._binding)
          )
        }),
        (t.prototype.whenNoAncestorNamed = function (t) {
          return (
            (this._binding.constraint = function (e) {
              return null !== e && !t6(e, t7(t))
            }),
            new ee(this._binding)
          )
        }),
        (t.prototype.whenAnyAncestorTagged = function (t, e) {
          return (
            (this._binding.constraint = function (n) {
              return null !== n && t6(n, t8(t)(e))
            }),
            new ee(this._binding)
          )
        }),
        (t.prototype.whenNoAncestorTagged = function (t, e) {
          return (
            (this._binding.constraint = function (n) {
              return null !== n && !t6(n, t8(t)(e))
            }),
            new ee(this._binding)
          )
        }),
        (t.prototype.whenAnyAncestorMatches = function (t) {
          return (
            (this._binding.constraint = function (e) {
              return null !== e && t6(e, t)
            }),
            new ee(this._binding)
          )
        }),
        (t.prototype.whenNoAncestorMatches = function (t) {
          return (
            (this._binding.constraint = function (e) {
              return null !== e && !t6(e, t)
            }),
            new ee(this._binding)
          )
        }),
        t
      )
    })(),
    ee = (function () {
      function t(t) {
        this._binding = t
      }
      return (
        (t.prototype.onActivation = function (t) {
          return (this._binding.onActivation = t), new et(this._binding)
        }),
        (t.prototype.onDeactivation = function (t) {
          return (this._binding.onDeactivation = t), new et(this._binding)
        }),
        t
      )
    })(),
    en = (function () {
      function t(t) {
        ;(this._binding = t),
          (this._bindingWhenSyntax = new et(this._binding)),
          (this._bindingOnSyntax = new ee(this._binding))
      }
      return (
        (t.prototype.when = function (t) {
          return this._bindingWhenSyntax.when(t)
        }),
        (t.prototype.whenTargetNamed = function (t) {
          return this._bindingWhenSyntax.whenTargetNamed(t)
        }),
        (t.prototype.whenTargetIsDefault = function () {
          return this._bindingWhenSyntax.whenTargetIsDefault()
        }),
        (t.prototype.whenTargetTagged = function (t, e) {
          return this._bindingWhenSyntax.whenTargetTagged(t, e)
        }),
        (t.prototype.whenInjectedInto = function (t) {
          return this._bindingWhenSyntax.whenInjectedInto(t)
        }),
        (t.prototype.whenParentNamed = function (t) {
          return this._bindingWhenSyntax.whenParentNamed(t)
        }),
        (t.prototype.whenParentTagged = function (t, e) {
          return this._bindingWhenSyntax.whenParentTagged(t, e)
        }),
        (t.prototype.whenAnyAncestorIs = function (t) {
          return this._bindingWhenSyntax.whenAnyAncestorIs(t)
        }),
        (t.prototype.whenNoAncestorIs = function (t) {
          return this._bindingWhenSyntax.whenNoAncestorIs(t)
        }),
        (t.prototype.whenAnyAncestorNamed = function (t) {
          return this._bindingWhenSyntax.whenAnyAncestorNamed(t)
        }),
        (t.prototype.whenAnyAncestorTagged = function (t, e) {
          return this._bindingWhenSyntax.whenAnyAncestorTagged(t, e)
        }),
        (t.prototype.whenNoAncestorNamed = function (t) {
          return this._bindingWhenSyntax.whenNoAncestorNamed(t)
        }),
        (t.prototype.whenNoAncestorTagged = function (t, e) {
          return this._bindingWhenSyntax.whenNoAncestorTagged(t, e)
        }),
        (t.prototype.whenAnyAncestorMatches = function (t) {
          return this._bindingWhenSyntax.whenAnyAncestorMatches(t)
        }),
        (t.prototype.whenNoAncestorMatches = function (t) {
          return this._bindingWhenSyntax.whenNoAncestorMatches(t)
        }),
        (t.prototype.onActivation = function (t) {
          return this._bindingOnSyntax.onActivation(t)
        }),
        (t.prototype.onDeactivation = function (t) {
          return this._bindingOnSyntax.onDeactivation(t)
        }),
        t
      )
    })(),
    er = (function () {
      function t(t) {
        this._binding = t
      }
      return (
        (t.prototype.inRequestScope = function () {
          return (this._binding.scope = V.Request), new en(this._binding)
        }),
        (t.prototype.inSingletonScope = function () {
          return (this._binding.scope = V.Singleton), new en(this._binding)
        }),
        (t.prototype.inTransientScope = function () {
          return (this._binding.scope = V.Transient), new en(this._binding)
        }),
        t
      )
    })(),
    ei = (function () {
      function t(t) {
        ;(this._binding = t),
          (this._bindingWhenSyntax = new et(this._binding)),
          (this._bindingOnSyntax = new ee(this._binding)),
          (this._bindingInSyntax = new er(t))
      }
      return (
        (t.prototype.inRequestScope = function () {
          return this._bindingInSyntax.inRequestScope()
        }),
        (t.prototype.inSingletonScope = function () {
          return this._bindingInSyntax.inSingletonScope()
        }),
        (t.prototype.inTransientScope = function () {
          return this._bindingInSyntax.inTransientScope()
        }),
        (t.prototype.when = function (t) {
          return this._bindingWhenSyntax.when(t)
        }),
        (t.prototype.whenTargetNamed = function (t) {
          return this._bindingWhenSyntax.whenTargetNamed(t)
        }),
        (t.prototype.whenTargetIsDefault = function () {
          return this._bindingWhenSyntax.whenTargetIsDefault()
        }),
        (t.prototype.whenTargetTagged = function (t, e) {
          return this._bindingWhenSyntax.whenTargetTagged(t, e)
        }),
        (t.prototype.whenInjectedInto = function (t) {
          return this._bindingWhenSyntax.whenInjectedInto(t)
        }),
        (t.prototype.whenParentNamed = function (t) {
          return this._bindingWhenSyntax.whenParentNamed(t)
        }),
        (t.prototype.whenParentTagged = function (t, e) {
          return this._bindingWhenSyntax.whenParentTagged(t, e)
        }),
        (t.prototype.whenAnyAncestorIs = function (t) {
          return this._bindingWhenSyntax.whenAnyAncestorIs(t)
        }),
        (t.prototype.whenNoAncestorIs = function (t) {
          return this._bindingWhenSyntax.whenNoAncestorIs(t)
        }),
        (t.prototype.whenAnyAncestorNamed = function (t) {
          return this._bindingWhenSyntax.whenAnyAncestorNamed(t)
        }),
        (t.prototype.whenAnyAncestorTagged = function (t, e) {
          return this._bindingWhenSyntax.whenAnyAncestorTagged(t, e)
        }),
        (t.prototype.whenNoAncestorNamed = function (t) {
          return this._bindingWhenSyntax.whenNoAncestorNamed(t)
        }),
        (t.prototype.whenNoAncestorTagged = function (t, e) {
          return this._bindingWhenSyntax.whenNoAncestorTagged(t, e)
        }),
        (t.prototype.whenAnyAncestorMatches = function (t) {
          return this._bindingWhenSyntax.whenAnyAncestorMatches(t)
        }),
        (t.prototype.whenNoAncestorMatches = function (t) {
          return this._bindingWhenSyntax.whenNoAncestorMatches(t)
        }),
        (t.prototype.onActivation = function (t) {
          return this._bindingOnSyntax.onActivation(t)
        }),
        (t.prototype.onDeactivation = function (t) {
          return this._bindingOnSyntax.onDeactivation(t)
        }),
        t
      )
    })(),
    eo = (function () {
      function t(t) {
        this._binding = t
      }
      return (
        (t.prototype.to = function (t) {
          return (
            (this._binding.type = B.Instance),
            (this._binding.implementationType = t),
            new ei(this._binding)
          )
        }),
        (t.prototype.toSelf = function () {
          if ("function" != typeof this._binding.serviceIdentifier)
            throw Error(
              "The toSelf function can only be applied when a constructor is used as service identifier",
            )
          var t = this._binding.serviceIdentifier
          return this.to(t)
        }),
        (t.prototype.toConstantValue = function (t) {
          return (
            (this._binding.type = B.ConstantValue),
            (this._binding.cache = t),
            (this._binding.dynamicValue = null),
            (this._binding.implementationType = null),
            (this._binding.scope = V.Singleton),
            new en(this._binding)
          )
        }),
        (t.prototype.toDynamicValue = function (t) {
          return (
            (this._binding.type = B.DynamicValue),
            (this._binding.cache = null),
            (this._binding.dynamicValue = t),
            (this._binding.implementationType = null),
            new ei(this._binding)
          )
        }),
        (t.prototype.toConstructor = function (t) {
          return (
            (this._binding.type = B.Constructor),
            (this._binding.implementationType = t),
            (this._binding.scope = V.Singleton),
            new en(this._binding)
          )
        }),
        (t.prototype.toFactory = function (t) {
          return (
            (this._binding.type = B.Factory),
            (this._binding.factory = t),
            (this._binding.scope = V.Singleton),
            new en(this._binding)
          )
        }),
        (t.prototype.toFunction = function (t) {
          if ("function" != typeof t)
            throw Error(
              "Value provided to function binding must be a function!",
            )
          var e = this.toConstantValue(t)
          return (
            (this._binding.type = B.Function),
            (this._binding.scope = V.Singleton),
            e
          )
        }),
        (t.prototype.toAutoFactory = function (t) {
          return (
            (this._binding.type = B.Factory),
            (this._binding.factory = function (e) {
              return function () {
                return e.container.get(t)
              }
            }),
            (this._binding.scope = V.Singleton),
            new en(this._binding)
          )
        }),
        (t.prototype.toAutoNamedFactory = function (t) {
          return (
            (this._binding.type = B.Factory),
            (this._binding.factory = function (e) {
              return function (n) {
                return e.container.getNamed(t, n)
              }
            }),
            new en(this._binding)
          )
        }),
        (t.prototype.toProvider = function (t) {
          return (
            (this._binding.type = B.Provider),
            (this._binding.provider = t),
            (this._binding.scope = V.Singleton),
            new en(this._binding)
          )
        }),
        (t.prototype.toService = function (t) {
          this.toDynamicValue(function (e) {
            return e.container.get(t)
          })
        }),
        t
      )
    })(),
    ea = (function () {
      function t() {}
      return (
        (t.of = function (e, n, r, i, o) {
          var a = new t()
          return (
            (a.bindings = e),
            (a.middleware = n),
            (a.deactivations = i),
            (a.activations = r),
            (a.moduleActivationStore = o),
            a
          )
        }),
        t
      )
    })(),
    es = (function () {
      function t() {
        this._map = new Map()
      }
      return (
        (t.prototype.getMap = function () {
          return this._map
        }),
        (t.prototype.add = function (t, e) {
          if (null == t || null == e) throw Error(G)
          var n = this._map.get(t)
          void 0 !== n ? n.push(e) : this._map.set(t, [e])
        }),
        (t.prototype.get = function (t) {
          if (null == t) throw Error(G)
          var e = this._map.get(t)
          if (void 0 !== e) return e
          throw Error(K)
        }),
        (t.prototype.remove = function (t) {
          if (null == t) throw Error(G)
          if (!this._map.delete(t)) throw Error(K)
        }),
        (t.prototype.removeIntersection = function (t) {
          var e = this
          this.traverse(function (n, r) {
            var i = t.hasKey(n) ? t.get(n) : void 0
            if (void 0 !== i) {
              var o = r.filter(function (t) {
                return !i.some(function (e) {
                  return t === e
                })
              })
              e._setValue(n, o)
            }
          })
        }),
        (t.prototype.removeByCondition = function (t) {
          var e = this,
            n = []
          return (
            this._map.forEach(function (r, i) {
              for (var o = [], a = 0; a < r.length; a++) {
                var s = r[a]
                t(s) ? n.push(s) : o.push(s)
              }
              e._setValue(i, o)
            }),
            n
          )
        }),
        (t.prototype.hasKey = function (t) {
          if (null == t) throw Error(G)
          return this._map.has(t)
        }),
        (t.prototype.clone = function () {
          var e = new t()
          return (
            this._map.forEach(function (t, n) {
              t.forEach(function (t) {
                return e.add(
                  n,
                  "object" == typeof t &&
                    null !== t &&
                    "clone" in t &&
                    "function" == typeof t.clone
                    ? t.clone()
                    : t,
                )
              })
            }),
            e
          )
        }),
        (t.prototype.traverse = function (t) {
          this._map.forEach(function (e, n) {
            t(n, e)
          })
        }),
        (t.prototype._setValue = function (t, e) {
          e.length > 0 ? this._map.set(t, e) : this._map.delete(t)
        }),
        t
      )
    })(),
    eu = (function () {
      function t() {
        this._map = new Map()
      }
      return (
        (t.prototype.remove = function (t) {
          if (this._map.has(t)) {
            var e = this._map.get(t)
            return this._map.delete(t), e
          }
          return this._getEmptyHandlersStore()
        }),
        (t.prototype.addDeactivation = function (t, e, n) {
          this._getModuleActivationHandlers(t).onDeactivations.add(e, n)
        }),
        (t.prototype.addActivation = function (t, e, n) {
          this._getModuleActivationHandlers(t).onActivations.add(e, n)
        }),
        (t.prototype.clone = function () {
          var e = new t()
          return (
            this._map.forEach(function (t, n) {
              e._map.set(n, {
                onActivations: t.onActivations.clone(),
                onDeactivations: t.onDeactivations.clone(),
              })
            }),
            e
          )
        }),
        (t.prototype._getModuleActivationHandlers = function (t) {
          var e = this._map.get(t)
          return (
            void 0 === e &&
              ((e = this._getEmptyHandlersStore()), this._map.set(t, e)),
            e
          )
        }),
        (t.prototype._getEmptyHandlersStore = function () {
          return { onActivations: new es(), onDeactivations: new es() }
        }),
        t
      )
    })(),
    ec = function () {
      return (ec =
        Object.assign ||
        function (t) {
          for (var e, n = 1, r = arguments.length; n < r; n++)
            for (var i in (e = arguments[n]))
              Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
          return t
        }).apply(this, arguments)
    },
    ef = function (t, e, n, r) {
      return new (n || (n = Promise))(function (i, o) {
        function a(t) {
          try {
            u(r.next(t))
          } catch (t) {
            o(t)
          }
        }
        function s(t) {
          try {
            u(r.throw(t))
          } catch (t) {
            o(t)
          }
        }
        function u(t) {
          var e
          t.done
            ? i(t.value)
            : ((e = t.value) instanceof n
                ? e
                : new n(function (t) {
                    t(e)
                  })
              ).then(a, s)
        }
        u((r = r.apply(t, e || [])).next())
      })
    },
    el = function (t, e) {
      var n,
        r,
        i,
        o,
        a = {
          label: 0,
          sent: function () {
            if (1 & i[0]) throw i[1]
            return i[1]
          },
          trys: [],
          ops: [],
        }
      return (
        (o = { next: s(0), throw: s(1), return: s(2) }),
        "function" == typeof Symbol &&
          (o[Symbol.iterator] = function () {
            return this
          }),
        o
      )
      function s(o) {
        return function (s) {
          return (function (o) {
            if (n) throw TypeError("Generator is already executing.")
            for (; a; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (i =
                      2 & o[0]
                        ? r.return
                        : o[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                    !(i = i.call(r, o[1])).done)
                )
                  return i
                switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                  case 0:
                  case 1:
                    i = o
                    break
                  case 4:
                    return a.label++, { value: o[1], done: !1 }
                  case 5:
                    a.label++, (r = o[1]), (o = [0])
                    continue
                  case 7:
                    ;(o = a.ops.pop()), a.trys.pop()
                    continue
                  default:
                    if (
                      !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                      (6 === o[0] || 2 === o[0])
                    ) {
                      a = 0
                      continue
                    }
                    if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                      a.label = o[1]
                      break
                    }
                    if (6 === o[0] && a.label < i[1]) {
                      ;(a.label = i[1]), (i = o)
                      break
                    }
                    if (i && a.label < i[2]) {
                      ;(a.label = i[2]), a.ops.push(o)
                      break
                    }
                    i[2] && a.ops.pop(), a.trys.pop()
                    continue
                }
                o = e.call(t, a)
              } catch (t) {
                ;(o = [6, t]), (r = 0)
              } finally {
                n = i = 0
              }
            if (5 & o[0]) throw o[1]
            return { value: o[0] ? o[1] : void 0, done: !0 }
          })([o, s])
        }
      }
    },
    eh = function (t, e, n) {
      if (n || 2 == arguments.length)
        for (var r, i = 0, o = e.length; i < o; i++)
          (!r && i in e) ||
            (r || (r = Array.prototype.slice.call(e, 0, i)), (r[i] = e[i]))
      return t.concat(r || Array.prototype.slice.call(e))
    },
    ep = (function () {
      function t(t) {
        var e = t || {}
        if ("object" != typeof e)
          throw Error(
            "Invalid Container constructor argument. Container options must be an object.",
          )
        if (void 0 === e.defaultScope) e.defaultScope = V.Transient
        else if (
          e.defaultScope !== V.Singleton &&
          e.defaultScope !== V.Transient &&
          e.defaultScope !== V.Request
        )
          throw Error(
            'Invalid Container option. Default scope must be a string ("singleton" or "transient").',
          )
        if (void 0 === e.autoBindInjectable) e.autoBindInjectable = !1
        else if ("boolean" != typeof e.autoBindInjectable)
          throw Error(
            "Invalid Container option. Auto bind injectable must be a boolean",
          )
        if (void 0 === e.skipBaseClassChecks) e.skipBaseClassChecks = !1
        else if ("boolean" != typeof e.skipBaseClassChecks)
          throw Error(
            "Invalid Container option. Skip base check must be a boolean",
          )
        ;(this.options = {
          autoBindInjectable: e.autoBindInjectable,
          defaultScope: e.defaultScope,
          skipBaseClassChecks: e.skipBaseClassChecks,
        }),
          (this.id = U++),
          (this._bindingDictionary = new es()),
          (this._snapshots = []),
          (this._middleware = null),
          (this._activations = new es()),
          (this._deactivations = new es()),
          (this.parent = null),
          (this._metadataReader = new th()),
          (this._moduleActivationStore = new eu())
      }
      return (
        (t.merge = function (e, n) {
          for (var r = [], i = 2; i < arguments.length; i++)
            r[i - 2] = arguments[i]
          var o = new t(),
            a = eh([e, n], r, !0).map(function (t) {
              return tR(t)
            }),
            s = tR(o)
          return (
            a.forEach(function (t) {
              !(function (t, e) {
                t.traverse(function (t, n) {
                  n.forEach(function (t) {
                    e.add(t.serviceIdentifier, t.clone())
                  })
                })
              })(t, s)
            }),
            o
          )
        }),
        (t.prototype.load = function () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
          for (
            var n = this._getContainerModuleHelpersFactory(), r = 0;
            r < t.length;
            r++
          ) {
            var i = t[r],
              o = n(i.id)
            i.registry(
              o.bindFunction,
              o.unbindFunction,
              o.isboundFunction,
              o.rebindFunction,
              o.unbindAsyncFunction,
              o.onActivationFunction,
              o.onDeactivationFunction,
            )
          }
        }),
        (t.prototype.loadAsync = function () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
          return ef(this, void 0, void 0, function () {
            var e, n, r, i, o
            return el(this, function (a) {
              switch (a.label) {
                case 0:
                  ;(e = this._getContainerModuleHelpersFactory()),
                    (n = 0),
                    (r = t),
                    (a.label = 1)
                case 1:
                  if (!(n < r.length)) return [3, 4]
                  return (
                    (i = r[n]),
                    (o = e(i.id)),
                    [
                      4,
                      i.registry(
                        o.bindFunction,
                        o.unbindFunction,
                        o.isboundFunction,
                        o.rebindFunction,
                        o.unbindAsyncFunction,
                        o.onActivationFunction,
                        o.onDeactivationFunction,
                      ),
                    ]
                  )
                case 2:
                  a.sent(), (a.label = 3)
                case 3:
                  return n++, [3, 1]
                case 4:
                  return [2]
              }
            })
          })
        }),
        (t.prototype.unload = function () {
          for (var t = this, e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n]
          e.forEach(function (e) {
            var n = t._removeModuleBindings(e.id)
            t._deactivateSingletons(n), t._removeModuleHandlers(e.id)
          })
        }),
        (t.prototype.unloadAsync = function () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
          return ef(this, void 0, void 0, function () {
            var e, n, r, i
            return el(this, function (o) {
              switch (o.label) {
                case 0:
                  ;(e = 0), (n = t), (o.label = 1)
                case 1:
                  if (!(e < n.length)) return [3, 4]
                  return (
                    (r = n[e]),
                    (i = this._removeModuleBindings(r.id)),
                    [4, this._deactivateSingletonsAsync(i)]
                  )
                case 2:
                  o.sent(), this._removeModuleHandlers(r.id), (o.label = 3)
                case 3:
                  return e++, [3, 1]
                case 4:
                  return [2]
              }
            })
          })
        }),
        (t.prototype.bind = function (t) {
          var e = new H(t, this.options.defaultScope || V.Transient)
          return this._bindingDictionary.add(t, e), new eo(e)
        }),
        (t.prototype.rebind = function (t) {
          return this.unbind(t), this.bind(t)
        }),
        (t.prototype.rebindAsync = function (t) {
          return ef(this, void 0, void 0, function () {
            return el(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, this.unbindAsync(t)]
                case 1:
                  return e.sent(), [2, this.bind(t)]
              }
            })
          })
        }),
        (t.prototype.unbind = function (t) {
          if (this._bindingDictionary.hasKey(t)) {
            var e = this._bindingDictionary.get(t)
            this._deactivateSingletons(e)
          }
          this._removeServiceFromDictionary(t)
        }),
        (t.prototype.unbindAsync = function (t) {
          return ef(this, void 0, void 0, function () {
            var e
            return el(this, function (n) {
              switch (n.label) {
                case 0:
                  if (!this._bindingDictionary.hasKey(t)) return [3, 2]
                  return (
                    (e = this._bindingDictionary.get(t)),
                    [4, this._deactivateSingletonsAsync(e)]
                  )
                case 1:
                  n.sent(), (n.label = 2)
                case 2:
                  return this._removeServiceFromDictionary(t), [2]
              }
            })
          })
        }),
        (t.prototype.unbindAll = function () {
          var t = this
          this._bindingDictionary.traverse(function (e, n) {
            t._deactivateSingletons(n)
          }),
            (this._bindingDictionary = new es())
        }),
        (t.prototype.unbindAllAsync = function () {
          return ef(this, void 0, void 0, function () {
            var t,
              e = this
            return el(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    (t = []),
                    this._bindingDictionary.traverse(function (n, r) {
                      t.push(e._deactivateSingletonsAsync(r))
                    }),
                    [4, Promise.all(t)]
                  )
                case 1:
                  return n.sent(), (this._bindingDictionary = new es()), [2]
              }
            })
          })
        }),
        (t.prototype.onActivation = function (t, e) {
          this._activations.add(t, e)
        }),
        (t.prototype.onDeactivation = function (t, e) {
          this._deactivations.add(t, e)
        }),
        (t.prototype.isBound = function (t) {
          var e = this._bindingDictionary.hasKey(t)
          return !e && this.parent && (e = this.parent.isBound(t)), e
        }),
        (t.prototype.isCurrentBound = function (t) {
          return this._bindingDictionary.hasKey(t)
        }),
        (t.prototype.isBoundNamed = function (t, e) {
          return this.isBoundTagged(t, Z, e)
        }),
        (t.prototype.isBoundTagged = function (t, e, n) {
          var r = !1
          if (this._bindingDictionary.hasKey(t)) {
            var i,
              o = this._bindingDictionary.get(t),
              a =
                ((i = new tj(W.Variable, "", t, new tm(e, n))),
                new tE(t, new tg(this), null, [], i))
            r = o.some(function (t) {
              return t.constraint(a)
            })
          }
          return (
            !r && this.parent && (r = this.parent.isBoundTagged(t, e, n)), r
          )
        }),
        (t.prototype.snapshot = function () {
          this._snapshots.push(
            ea.of(
              this._bindingDictionary.clone(),
              this._middleware,
              this._activations.clone(),
              this._deactivations.clone(),
              this._moduleActivationStore.clone(),
            ),
          )
        }),
        (t.prototype.restore = function () {
          var t = this._snapshots.pop()
          if (void 0 === t) throw Error("No snapshot available to restore.")
          ;(this._bindingDictionary = t.bindings),
            (this._activations = t.activations),
            (this._deactivations = t.deactivations),
            (this._middleware = t.middleware),
            (this._moduleActivationStore = t.moduleActivationStore)
        }),
        (t.prototype.createChild = function (e) {
          var n = new t(e || this.options)
          return (n.parent = this), n
        }),
        (t.prototype.applyMiddleware = function () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
          var n = this._middleware ? this._middleware : this._planAndResolve()
          this._middleware = t.reduce(function (t, e) {
            return e(t)
          }, n)
        }),
        (t.prototype.applyCustomMetadataReader = function (t) {
          this._metadataReader = t
        }),
        (t.prototype.get = function (t) {
          var e = this._getNotAllArgs(t, !1)
          return this._getButThrowIfAsync(e)
        }),
        (t.prototype.getAsync = function (t) {
          return ef(this, void 0, void 0, function () {
            var e
            return el(this, function (n) {
              return (e = this._getNotAllArgs(t, !1)), [2, this._get(e)]
            })
          })
        }),
        (t.prototype.getTagged = function (t, e, n) {
          var r = this._getNotAllArgs(t, !1, e, n)
          return this._getButThrowIfAsync(r)
        }),
        (t.prototype.getTaggedAsync = function (t, e, n) {
          return ef(this, void 0, void 0, function () {
            var r
            return el(this, function (i) {
              return (r = this._getNotAllArgs(t, !1, e, n)), [2, this._get(r)]
            })
          })
        }),
        (t.prototype.getNamed = function (t, e) {
          return this.getTagged(t, Z, e)
        }),
        (t.prototype.getNamedAsync = function (t, e) {
          return this.getTaggedAsync(t, Z, e)
        }),
        (t.prototype.getAll = function (t) {
          var e = this._getAllArgs(t)
          return this._getButThrowIfAsync(e)
        }),
        (t.prototype.getAllAsync = function (t) {
          var e = this._getAllArgs(t)
          return this._getAll(e)
        }),
        (t.prototype.getAllTagged = function (t, e, n) {
          var r = this._getNotAllArgs(t, !0, e, n)
          return this._getButThrowIfAsync(r)
        }),
        (t.prototype.getAllTaggedAsync = function (t, e, n) {
          var r = this._getNotAllArgs(t, !0, e, n)
          return this._getAll(r)
        }),
        (t.prototype.getAllNamed = function (t, e) {
          return this.getAllTagged(t, Z, e)
        }),
        (t.prototype.getAllNamedAsync = function (t, e) {
          return this.getAllTaggedAsync(t, Z, e)
        }),
        (t.prototype.resolve = function (t) {
          var e = this.isBound(t)
          e || this.bind(t).toSelf()
          var n = this.get(t)
          return e || this.unbind(t), n
        }),
        (t.prototype._preDestroy = function (t, e) {
          var n
          if (Reflect.hasMetadata(tf, t))
            return null === (n = e[Reflect.getMetadata(tf, t).value]) ||
              void 0 === n
              ? void 0
              : n.call(e)
        }),
        (t.prototype._removeModuleHandlers = function (t) {
          var e = this._moduleActivationStore.remove(t)
          this._activations.removeIntersection(e.onActivations),
            this._deactivations.removeIntersection(e.onDeactivations)
        }),
        (t.prototype._removeModuleBindings = function (t) {
          return this._bindingDictionary.removeByCondition(function (e) {
            return e.moduleId === t
          })
        }),
        (t.prototype._deactivate = function (t, e) {
          var n = this,
            r = Object.getPrototypeOf(e).constructor
          try {
            if (this._deactivations.hasKey(t.serviceIdentifier)) {
              var i = this._deactivateContainer(
                e,
                this._deactivations.get(t.serviceIdentifier).values(),
              )
              if (tq(i))
                return this._handleDeactivationError(
                  i.then(function () {
                    return n._propagateContainerDeactivationThenBindingAndPreDestroyAsync(
                      t,
                      e,
                      r,
                    )
                  }),
                  r,
                )
            }
            var o =
              this._propagateContainerDeactivationThenBindingAndPreDestroy(
                t,
                e,
                r,
              )
            if (tq(o)) return this._handleDeactivationError(o, r)
          } catch (t) {
            if (t instanceof Error) throw Error($(r.name, t.message))
          }
        }),
        (t.prototype._handleDeactivationError = function (t, e) {
          return ef(this, void 0, void 0, function () {
            var n
            return el(this, function (r) {
              switch (r.label) {
                case 0:
                  return r.trys.push([0, 2, , 3]), [4, t]
                case 1:
                  return r.sent(), [3, 3]
                case 2:
                  if ((n = r.sent()) instanceof Error)
                    throw Error($(e.name, n.message))
                  return [3, 3]
                case 3:
                  return [2]
              }
            })
          })
        }),
        (t.prototype._deactivateContainer = function (t, e) {
          for (var n = this, r = e.next(); r.value; ) {
            var i = r.value(t)
            if (tq(i))
              return i.then(function () {
                return n._deactivateContainerAsync(t, e)
              })
            r = e.next()
          }
        }),
        (t.prototype._deactivateContainerAsync = function (t, e) {
          return ef(this, void 0, void 0, function () {
            var n
            return el(this, function (r) {
              switch (r.label) {
                case 0:
                  ;(n = e.next()), (r.label = 1)
                case 1:
                  if (!n.value) return [3, 3]
                  return [4, n.value(t)]
                case 2:
                  return r.sent(), (n = e.next()), [3, 1]
                case 3:
                  return [2]
              }
            })
          })
        }),
        (t.prototype._getContainerModuleHelpersFactory = function () {
          var t = this,
            e = function (t, e) {
              t._binding.moduleId = e
            }
          return function (n) {
            return {
              bindFunction: function (r) {
                var i = t.bind(r)
                return e(i, n), i
              },
              isboundFunction: function (e) {
                return t.isBound(e)
              },
              onActivationFunction: function (e, r) {
                t._moduleActivationStore.addActivation(n, e, r),
                  t.onActivation(e, r)
              },
              onDeactivationFunction: function (e, r) {
                t._moduleActivationStore.addDeactivation(n, e, r),
                  t.onDeactivation(e, r)
              },
              rebindFunction: function (r) {
                var i = t.rebind(r)
                return e(i, n), i
              },
              unbindFunction: function (e) {
                return t.unbind(e)
              },
              unbindAsyncFunction: function (e) {
                return t.unbindAsync(e)
              },
            }
          }
        }),
        (t.prototype._getAll = function (t) {
          return Promise.all(this._get(t))
        }),
        (t.prototype._get = function (t) {
          var e = ec(ec({}, t), {
            contextInterceptor: function (t) {
              return t
            },
            targetType: W.Variable,
          })
          if (this._middleware) {
            var n = this._middleware(e)
            if (null == n)
              throw Error(
                "Invalid return type in middleware. Middleware must return!",
              )
            return n
          }
          return this._planAndResolve()(e)
        }),
        (t.prototype._getButThrowIfAsync = function (t) {
          var e = this._get(t)
          if (tT(e))
            throw Error(
              "You are attempting to construct '" +
                t.serviceIdentifier +
                "' in a synchronous way\n but it has asynchronous dependencies.",
            )
          return e
        }),
        (t.prototype._getAllArgs = function (t) {
          return {
            avoidConstraints: !0,
            isMultiInject: !0,
            serviceIdentifier: t,
          }
        }),
        (t.prototype._getNotAllArgs = function (t, e, n, r) {
          return {
            avoidConstraints: !1,
            isMultiInject: e,
            serviceIdentifier: t,
            key: n,
            value: r,
          }
        }),
        (t.prototype._planAndResolve = function () {
          var t = this
          return function (e) {
            var n,
              r = (function (t, e, n, r, i, o, a, s) {
                void 0 === s && (s = !1)
                var u = new tg(e),
                  c = (function (t, e, n, r, i, o) {
                    var a = new tm(t ? ti : tr, n),
                      s = new tj(e, "", n, a)
                    if (void 0 !== i) {
                      var u = new tm(i, o)
                      s.metadata.push(u)
                    }
                    return s
                  })(n, r, i, 0, o, a)
                try {
                  return (
                    (function t(e, n, r, i, o, a) {
                      if (null === o) {
                        ;(s = tk(e, n, i, null, a)),
                          (u = new tE(r, i, null, s, a))
                        var s,
                          u,
                          c = new tw(i, u)
                        i.addPlan(c)
                      } else
                        (s = tk(e, n, i, o, a)),
                          (u = o.addChildRequest(a.serviceIdentifier, s, a))
                      s.forEach(function (n) {
                        var r = null
                        if (a.isArray())
                          r = u.addChildRequest(n.serviceIdentifier, n, a)
                        else {
                          if (n.cache) return
                          r = u
                        }
                        if (
                          n.type === B.Instance &&
                          null !== n.implementationType
                        ) {
                          var o,
                            s = tO(e, tb((o = n.implementationType)), o, !1)
                          if (!i.container.options.skipBaseClassChecks) {
                            var c = (function t(e, n) {
                              var r = Object.getPrototypeOf(
                                n.prototype,
                              ).constructor
                              if (r === Object) return 0
                              var i = tO(e, tb(r), r, !0),
                                o = i.map(function (t) {
                                  return t.metadata.filter(function (t) {
                                    return t.key === te
                                  })
                                }),
                                a = [].concat.apply([], o).length,
                                s = i.length - a
                              return s > 0 ? s : t(e, r)
                            })(e, n.implementationType)
                            if (s.length < c)
                              throw Error(Q(tb(n.implementationType)))
                          }
                          s.forEach(function (n) {
                            t(e, !1, n.serviceIdentifier, i, r, n)
                          })
                        }
                      })
                    })(t, s, i, u, null, c),
                    u
                  )
                } catch (t) {
                  throw (
                    (td(t) &&
                      (function t(e) {
                        e.childRequests.forEach(function (e) {
                          if (
                            (function t(e, n) {
                              return (
                                null !== e.parentRequest &&
                                (e.parentRequest.serviceIdentifier === n ||
                                  t(e.parentRequest, n))
                              )
                            })(e, e.serviceIdentifier)
                          )
                            throw Error(
                              "Circular dependency found: " +
                                (function t(e, n) {
                                  void 0 === n && (n = [])
                                  var r = tv(e.serviceIdentifier)
                                  return (n.push(r), null !== e.parentRequest)
                                    ? t(e.parentRequest, n)
                                    : n
                                })(e)
                                  .reverse()
                                  .join(" --> "),
                            )
                          t(e)
                        })
                      })(u.plan.rootRequest),
                    t)
                  )
                }
              })(
                t._metadataReader,
                t,
                e.isMultiInject,
                e.targetType,
                e.serviceIdentifier,
                e.key,
                e.value,
                e.avoidConstraints,
              )
            return tY(
              (n = r = e.contextInterceptor(r)).plan.rootRequest.requestScope,
            )(n.plan.rootRequest)
          }
        }),
        (t.prototype._deactivateIfSingleton = function (t) {
          var e = this
          if (t.activated)
            return tq(t.cache)
              ? t.cache.then(function (n) {
                  return e._deactivate(t, n)
                })
              : this._deactivate(t, t.cache)
        }),
        (t.prototype._deactivateSingletons = function (t) {
          for (var e = 0; e < t.length; e++) {
            var n = t[e]
            if (tq(this._deactivateIfSingleton(n)))
              throw Error(
                "Attempting to unbind dependency with asynchronous destruction (@preDestroy or onDeactivation)",
              )
          }
        }),
        (t.prototype._deactivateSingletonsAsync = function (t) {
          return ef(this, void 0, void 0, function () {
            var e = this
            return el(this, function (n) {
              switch (n.label) {
                case 0:
                  return [
                    4,
                    Promise.all(
                      t.map(function (t) {
                        return e._deactivateIfSingleton(t)
                      }),
                    ),
                  ]
                case 1:
                  return n.sent(), [2]
              }
            })
          })
        }),
        (t.prototype._propagateContainerDeactivationThenBindingAndPreDestroy =
          function (t, e, n) {
            return this.parent
              ? this._deactivate.bind(this.parent)(t, e)
              : this._bindingDeactivationAndPreDestroy(t, e, n)
          }),
        (t.prototype._propagateContainerDeactivationThenBindingAndPreDestroyAsync =
          function (t, e, n) {
            return ef(this, void 0, void 0, function () {
              return el(this, function (r) {
                switch (r.label) {
                  case 0:
                    if (!this.parent) return [3, 2]
                    return [4, this._deactivate.bind(this.parent)(t, e)]
                  case 1:
                    return r.sent(), [3, 4]
                  case 2:
                    return [
                      4,
                      this._bindingDeactivationAndPreDestroyAsync(t, e, n),
                    ]
                  case 3:
                    r.sent(), (r.label = 4)
                  case 4:
                    return [2]
                }
              })
            })
          }),
        (t.prototype._removeServiceFromDictionary = function (t) {
          try {
            this._bindingDictionary.remove(t)
          } catch (e) {
            throw Error("Could not unbind serviceIdentifier: " + tv(t))
          }
        }),
        (t.prototype._bindingDeactivationAndPreDestroy = function (t, e, n) {
          var r = this
          if ("function" == typeof t.onDeactivation) {
            var i = t.onDeactivation(e)
            if (tq(i))
              return i.then(function () {
                return r._preDestroy(n, e)
              })
          }
          return this._preDestroy(n, e)
        }),
        (t.prototype._bindingDeactivationAndPreDestroyAsync = function (
          t,
          e,
          n,
        ) {
          return ef(this, void 0, void 0, function () {
            return el(this, function (r) {
              switch (r.label) {
                case 0:
                  if ("function" != typeof t.onDeactivation) return [3, 2]
                  return [4, t.onDeactivation(e)]
                case 1:
                  r.sent(), (r.label = 2)
                case 2:
                  return [4, this._preDestroy(n, e)]
                case 3:
                  return r.sent(), [2]
              }
            })
          })
        }),
        t
      )
    })()
  function ed(t, e, n, r) {
    var i = (function (t) {
        var e = []
        if (Array.isArray(t)) {
          var n = (function (t) {
            for (var e = new Set(), n = 0; n < t.length; n++) {
              var r = t[n]
              if (e.has(r)) return r
              e.add(r)
            }
          })(
            (e = t).map(function (t) {
              return t.key
            }),
          )
          if (void 0 !== n) throw Error(L + " " + n.toString())
        } else e = [t]
        return e
      })(r),
      o = {}
    Reflect.hasOwnMetadata(t, e) && (o = Reflect.getMetadata(t, e))
    var a = o[n]
    if (void 0 === a) a = []
    else
      for (
        var s = function (t) {
            if (
              i.some(function (e) {
                return e.key === t.key
              })
            )
              throw Error(L + " " + t.key.toString())
          },
          u = 0,
          c = a;
        u < c.length;
        u++
      )
        s(c[u])
    a.push.apply(a, i), (o[n] = a), Reflect.defineMetadata(t, o, e)
  }
  var ey = function (t) {
    return function (e, n, r) {
      var i
      if (void 0 === t)
        throw Error(
          "@inject called with undefined this could mean that the class " +
            ("function" == typeof e ? e.name : e.constructor.name) +
            " has a circular dependency problem. You can use a LazyServiceIdentifier to  overcome this limitation.",
        )
      return ((i = new tm(tr, t)),
      function (t, e, n) {
        "number" == typeof n
          ? ((function (t) {
              if (void 0 !== t) throw Error(Y)
            })(e),
            ed(to, t, n.toString(), i))
          : !(function (t, e, n) {
              if (void 0 !== t.prototype) throw Error(Y)
              ed(ta, t.constructor, e, n)
            })(t, e, i)
      })(e, n, r)
    }
  }
  function ev() {
    return function (t) {
      if (Reflect.hasOwnMetadata(ts, t))
        throw Error("Cannot apply @injectable decorator multiple times.")
      return Reflect.defineMetadata(ts, Reflect.getMetadata(tu, t) || [], t), t
    }
  }
  var e_ = F("1ACkT")
  function eb(t) {
    return (
      null != t && "object" == typeof t && !0 === t["@@functional/placeholder"]
    )
  }
  function eg(t) {
    return function e(n) {
      return 0 == arguments.length || eb(n) ? e : t.apply(this, arguments)
    }
  }
  function em(t) {
    return function e(n, r) {
      switch (arguments.length) {
        case 0:
          return e
        case 1:
          return eb(n)
            ? e
            : eg(function (e) {
                return t(n, e)
              })
        default:
          return eb(n) && eb(r)
            ? e
            : eb(n)
              ? eg(function (e) {
                  return t(e, r)
                })
              : eb(r)
                ? eg(function (e) {
                    return t(n, e)
                  })
                : t(n, r)
      }
    }
  }
  var ew =
    Array.isArray ||
    function (t) {
      return (
        null != t &&
        t.length >= 0 &&
        "[object Array]" === Object.prototype.toString.call(t)
      )
    }
  function eS(t, e, n) {
    return function () {
      if (0 == arguments.length) return n()
      var r = arguments[arguments.length - 1]
      if (!ew(r)) {
        for (var i = 0; i < t.length; ) {
          if ("function" == typeof r[t[i]])
            return r[t[i]].apply(
              r,
              Array.prototype.slice.call(arguments, 0, -1),
            )
          i += 1
        }
        if (null != r && "function" == typeof r["@@transducer/step"]) {
          var o = e.apply(null, Array.prototype.slice.call(arguments, 0, -1))
          return o(r)
        }
      }
      return n.apply(this, arguments)
    }
  }
  var ex = {
      init: function () {
        return this.xf["@@transducer/init"]()
      },
      result: function (t) {
        return this.xf["@@transducer/result"](t)
      },
    },
    ej = /*#__PURE__*/ (function () {
      function t(t, e) {
        ;(this.xf = e), (this.f = t), (this.all = !0)
      }
      return (
        (t.prototype["@@transducer/init"] = ex.init),
        (t.prototype["@@transducer/result"] = function (t) {
          return (
            this.all && (t = this.xf["@@transducer/step"](t, !0)),
            this.xf["@@transducer/result"](t)
          )
        }),
        (t.prototype["@@transducer/step"] = function (t, e) {
          if (!this.f(e)) {
            var n
            ;(this.all = !1),
              (t =
                (n = this.xf["@@transducer/step"](t, !1)) &&
                n["@@transducer/reduced"]
                  ? n
                  : { "@@transducer/value": n, "@@transducer/reduced": !0 })
          }
          return t
        }),
        t
      )
    })(),
    eA = /*#__PURE__*/ em(
      /*#__PURE__*/ eS(
        ["all"],
        function (t) {
          return function (e) {
            return new ej(t, e)
          }
        },
        function (t, e) {
          for (var n = 0; n < e.length; ) {
            if (!t(e[n])) return !1
            n += 1
          }
          return !0
        },
      ),
    )
  function eO(t) {
    for (var e, n = []; !(e = t.next()).done; ) n.push(e.value)
    return n
  }
  function eI(t, e, n) {
    for (var r = 0, i = n.length; r < i; ) {
      if (t(e, n[r])) return !0
      r += 1
    }
    return !1
  }
  function eE(t, e) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }
  var eR =
      "function" == typeof Object.is
        ? Object.is
        : function (t, e) {
            return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
          },
    ek = Object.prototype.toString,
    eM = /*#__PURE__*/ (function () {
      return "[object Arguments]" === ek.call(arguments)
        ? function (t) {
            return "[object Arguments]" === ek.call(t)
          }
        : function (t) {
            return eE("callee", t)
          }
    })(),
    eq = !(/*#__PURE__*/ { toString: null }.propertyIsEnumerable("toString")),
    eT = [
      "constructor",
      "valueOf",
      "isPrototypeOf",
      "toString",
      "propertyIsEnumerable",
      "hasOwnProperty",
      "toLocaleString",
    ],
    eC = /*#__PURE__*/ (function () {
      return arguments.propertyIsEnumerable("length")
    })(),
    eD = function (t, e) {
      for (var n = 0; n < t.length; ) {
        if (t[n] === e) return !0
        n += 1
      }
      return !1
    },
    eP =
      "function" != typeof Object.keys || eC
        ? /*#__PURE__*/ eg(function (t) {
            if (Object(t) !== t) return []
            var e,
              n,
              r = [],
              i = eC && eM(t)
            for (e in t) eE(e, t) && (!i || "length" !== e) && (r[r.length] = e)
            if (eq)
              for (n = eT.length - 1; n >= 0; )
                eE((e = eT[n]), t) && !eD(r, e) && (r[r.length] = e), (n -= 1)
            return r
          })
        : /*#__PURE__*/ eg(function (t) {
            return Object(t) !== t ? [] : Object.keys(t)
          }),
    ez = /*#__PURE__*/ eg(function (t) {
      return null === t
        ? "Null"
        : void 0 === t
          ? "Undefined"
          : Object.prototype.toString.call(t).slice(8, -1)
    })
  function eN(t, e, n, r) {
    var i = eO(t)
    function o(t, e) {
      return eF(t, e, n.slice(), r.slice())
    }
    return !eI(
      function (t, e) {
        return !eI(o, e, t)
      },
      eO(e),
      i,
    )
  }
  function eF(t, e, n, r) {
    if (eR(t, e)) return !0
    var i,
      o = ez(t)
    if (o !== ez(e)) return !1
    if (
      "function" == typeof t["fantasy-land/equals"] ||
      "function" == typeof e["fantasy-land/equals"]
    )
      return (
        "function" == typeof t["fantasy-land/equals"] &&
        t["fantasy-land/equals"](e) &&
        "function" == typeof e["fantasy-land/equals"] &&
        e["fantasy-land/equals"](t)
      )
    if ("function" == typeof t.equals || "function" == typeof e.equals)
      return (
        "function" == typeof t.equals &&
        t.equals(e) &&
        "function" == typeof e.equals &&
        e.equals(t)
      )
    switch (o) {
      case "Arguments":
      case "Array":
      case "Object":
        if (
          "function" == typeof t.constructor &&
          "Promise" ===
            (null == (i = String(t.constructor).match(/^function (\w*)/))
              ? ""
              : i[1])
        )
          return t === e
        break
      case "Boolean":
      case "Number":
      case "String":
        if (!(typeof t == typeof e && eR(t.valueOf(), e.valueOf()))) return !1
        break
      case "Date":
        if (!eR(t.valueOf(), e.valueOf())) return !1
        break
      case "Error":
        return t.name === e.name && t.message === e.message
      case "RegExp":
        if (
          !(
            t.source === e.source &&
            t.global === e.global &&
            t.ignoreCase === e.ignoreCase &&
            t.multiline === e.multiline &&
            t.sticky === e.sticky &&
            t.unicode === e.unicode
          )
        )
          return !1
    }
    for (var a = n.length - 1; a >= 0; ) {
      if (n[a] === t) return r[a] === e
      a -= 1
    }
    switch (o) {
      case "Map":
        if (t.size !== e.size) return !1
        return eN(t.entries(), e.entries(), n.concat([t]), r.concat([e]))
      case "Set":
        if (t.size !== e.size) return !1
        return eN(t.values(), e.values(), n.concat([t]), r.concat([e]))
      case "Arguments":
      case "Array":
      case "Object":
      case "Boolean":
      case "Number":
      case "String":
      case "Date":
      case "Error":
      case "RegExp":
      case "Int8Array":
      case "Uint8Array":
      case "Uint8ClampedArray":
      case "Int16Array":
      case "Uint16Array":
      case "Int32Array":
      case "Uint32Array":
      case "Float32Array":
      case "Float64Array":
      case "ArrayBuffer":
        break
      default:
        return !1
    }
    var s = eP(t)
    if (s.length !== eP(e).length) return !1
    var u = n.concat([t]),
      c = r.concat([e])
    for (a = s.length - 1; a >= 0; ) {
      var f = s[a]
      if (!(eE(f, e) && eF(e[f], t[f], u, c))) return !1
      a -= 1
    }
    return !0
  }
  var eV = /*#__PURE__*/ em(function (t, e) {
    return eF(t, e, [], [])
  })
  function eB(t) {
    return function e(n, r, i) {
      switch (arguments.length) {
        case 0:
          return e
        case 1:
          return eb(n)
            ? e
            : em(function (e, r) {
                return t(n, e, r)
              })
        case 2:
          return eb(n) && eb(r)
            ? e
            : eb(n)
              ? em(function (e, n) {
                  return t(e, r, n)
                })
              : eb(r)
                ? em(function (e, r) {
                    return t(n, e, r)
                  })
                : eg(function (e) {
                    return t(n, r, e)
                  })
        default:
          return eb(n) && eb(r) && eb(i)
            ? e
            : eb(n) && eb(r)
              ? em(function (e, n) {
                  return t(e, n, i)
                })
              : eb(n) && eb(i)
                ? em(function (e, n) {
                    return t(e, r, n)
                  })
                : eb(r) && eb(i)
                  ? em(function (e, r) {
                      return t(n, e, r)
                    })
                  : eb(n)
                    ? eg(function (e) {
                        return t(e, r, i)
                      })
                    : eb(r)
                      ? eg(function (e) {
                          return t(n, e, i)
                        })
                      : eb(i)
                        ? eg(function (e) {
                            return t(n, r, e)
                          })
                        : t(n, r, i)
      }
    }
  }
  function eW(t, e) {
    switch (t) {
      case 0:
        return function () {
          return e.apply(this, arguments)
        }
      case 1:
        return function (t) {
          return e.apply(this, arguments)
        }
      case 2:
        return function (t, n) {
          return e.apply(this, arguments)
        }
      case 3:
        return function (t, n, r) {
          return e.apply(this, arguments)
        }
      case 4:
        return function (t, n, r, i) {
          return e.apply(this, arguments)
        }
      case 5:
        return function (t, n, r, i, o) {
          return e.apply(this, arguments)
        }
      case 6:
        return function (t, n, r, i, o, a) {
          return e.apply(this, arguments)
        }
      case 7:
        return function (t, n, r, i, o, a, s) {
          return e.apply(this, arguments)
        }
      case 8:
        return function (t, n, r, i, o, a, s, u) {
          return e.apply(this, arguments)
        }
      case 9:
        return function (t, n, r, i, o, a, s, u, c) {
          return e.apply(this, arguments)
        }
      case 10:
        return function (t, n, r, i, o, a, s, u, c, f) {
          return e.apply(this, arguments)
        }
      default:
        throw Error(
          "First argument to _arity must be a non-negative integer no greater than ten",
        )
    }
  }
  var eU = /*#__PURE__*/ em(function (t, e) {
      return 1 === t
        ? eg(e)
        : eW(
            t,
            (function t(e, n, r) {
              return function () {
                for (
                  var i, o = [], a = 0, s = e, u = 0, c = !1;
                  u < n.length || a < arguments.length;

                )
                  u < n.length && (!eb(n[u]) || a >= arguments.length)
                    ? (i = n[u])
                    : ((i = arguments[a]), (a += 1)),
                    (o[u] = i),
                    eb(i) ? (c = !0) : (s -= 1),
                    (u += 1)
                return !c && s <= 0
                  ? r.apply(this, o)
                  : eW(Math.max(0, s), t(e, o, r))
              }
            })(t, [], e),
          )
    }),
    eH = /*#__PURE__*/ eB(function (t, e, n) {
      return eU(Math.max(t.length, e.length, n.length), function () {
        return t.apply(this, arguments)
          ? e.apply(this, arguments)
          : n.apply(this, arguments)
      })
    }),
    eL = /*#__PURE__*/ eg(function (t) {
      return null == t
    }),
    eG = /*#__PURE__*/ eg(function (t) {
      return !t
    })
  function eK(t, e) {
    return function () {
      return e.call(this, t.apply(this, arguments))
    }
  }
  function eJ(t) {
    return "[object String]" === Object.prototype.toString.call(t)
  }
  var eY = /*#__PURE__*/ eg(function (t) {
      return (
        !!ew(t) ||
        (!(!t || "object" != typeof t || eJ(t)) &&
          (0 === t.length ||
            (t.length > 0 &&
              t.hasOwnProperty(0) &&
              t.hasOwnProperty(t.length - 1))))
      )
    }),
    eQ = "undefined" != typeof Symbol ? Symbol.iterator : "@@iterator",
    e$ = /*#__PURE__*/ em(function (t, e) {
      return eW(t.length, function () {
        return t.apply(e, arguments)
      })
    }),
    eX =
      ((i = function (t, e, n) {
        for (var r = 0, i = n.length; r < i; ) {
          if (
            (e = t["@@transducer/step"](e, n[r])) &&
            e["@@transducer/reduced"]
          ) {
            e = e["@@transducer/value"]
            break
          }
          r += 1
        }
        return t["@@transducer/result"](e)
      }),
      (o = function (t, e, n, r) {
        return t["@@transducer/result"](n[r](e$(t["@@transducer/step"], t), e))
      }),
      (a = function (t, e, n) {
        for (var r = n.next(); !r.done; ) {
          if (
            (e = t["@@transducer/step"](e, r.value)) &&
            e["@@transducer/reduced"]
          ) {
            e = e["@@transducer/value"]
            break
          }
          r = n.next()
        }
        return t["@@transducer/result"](e)
      }),
      function (t, e, n) {
        if (eY(n)) return i(t, e, n)
        if (null == n) return e
        if ("function" == typeof n["fantasy-land/reduce"])
          return o(t, e, n, "fantasy-land/reduce")
        if (null != n[eQ]) return a(t, e, n[eQ]())
        if ("function" == typeof n.next) return a(t, e, n)
        if ("function" == typeof n.reduce) return o(t, e, n, "reduce")
        throw TypeError("reduce: list must be array or iterable")
      }),
    eZ = /*#__PURE__*/ (function () {
      function t(t) {
        this.f = t
      }
      return (
        (t.prototype["@@transducer/init"] = function () {
          throw Error("init not implemented on XWrap")
        }),
        (t.prototype["@@transducer/result"] = function (t) {
          return t
        }),
        (t.prototype["@@transducer/step"] = function (t, e) {
          return this.f(t, e)
        }),
        t
      )
    })(),
    e0 = /*#__PURE__*/ eB(function (t, e, n) {
      return eX("function" == typeof t ? new eZ(t) : t, e, n)
    })
  function e1(t, e) {
    return function () {
      var n = arguments.length
      if (0 === n) return e()
      var r = arguments[n - 1]
      return ew(r) || "function" != typeof r[t]
        ? e.apply(this, arguments)
        : r[t].apply(r, Array.prototype.slice.call(arguments, 0, n - 1))
    }
  }
  var e2 = /*#__PURE__*/ eB(
      /*#__PURE__*/ e1("slice", function (t, e, n) {
        return Array.prototype.slice.call(n, t, e)
      }),
    ),
    e3 = /*#__PURE__*/ eg(/*#__PURE__*/ e1("tail", /*#__PURE__*/ e2(1, 1 / 0)))
  function e5() {
    if (0 == arguments.length)
      throw Error("pipe requires at least one argument")
    return eW(arguments[0].length, e0(eK, arguments[0], e3(arguments)))
  }
  var e4 = function () {
      return !0
    },
    e6 = function (t, e) {
      return (e6 =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
        })(t, e)
    }
  function e8(t, e) {
    if ("function" != typeof e && null !== e)
      throw TypeError(
        "Class extends value " + String(e) + " is not a constructor or null",
      )
    function n() {
      this.constructor = t
    }
    e6(t, e),
      (t.prototype =
        null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
  }
  function e7(t, e) {
    var n,
      r,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & i[0]) throw i[1]
          return i[1]
        },
        trys: [],
        ops: [],
      },
      a = Object.create(
        ("function" == typeof Iterator ? Iterator : Object).prototype,
      )
    return (
      (a.next = s(0)),
      (a.throw = s(1)),
      (a.return = s(2)),
      "function" == typeof Symbol &&
        (a[Symbol.iterator] = function () {
          return this
        }),
      a
    )
    function s(s) {
      return function (u) {
        return (function (s) {
          if (n) throw TypeError("Generator is already executing.")
          for (; a && ((a = 0), s[0] && (o = 0)), o; )
            try {
              if (
                ((n = 1),
                r &&
                  (i =
                    2 & s[0]
                      ? r.return
                      : s[0]
                        ? r.throw || ((i = r.return) && i.call(r), 0)
                        : r.next) &&
                  !(i = i.call(r, s[1])).done)
              )
                return i
              switch (((r = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                case 0:
                case 1:
                  i = s
                  break
                case 4:
                  return o.label++, { value: s[1], done: !1 }
                case 5:
                  o.label++, (r = s[1]), (s = [0])
                  continue
                case 7:
                  ;(s = o.ops.pop()), o.trys.pop()
                  continue
                default:
                  if (
                    !(i = (i = o.trys).length > 0 && i[i.length - 1]) &&
                    (6 === s[0] || 2 === s[0])
                  ) {
                    o = 0
                    continue
                  }
                  if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                    o.label = s[1]
                    break
                  }
                  if (6 === s[0] && o.label < i[1]) {
                    ;(o.label = i[1]), (i = s)
                    break
                  }
                  if (i && o.label < i[2]) {
                    ;(o.label = i[2]), o.ops.push(s)
                    break
                  }
                  i[2] && o.ops.pop(), o.trys.pop()
                  continue
              }
              s = e.call(t, o)
            } catch (t) {
              ;(s = [6, t]), (r = 0)
            } finally {
              n = i = 0
            }
          if (5 & s[0]) throw s[1]
          return { value: s[0] ? s[1] : void 0, done: !0 }
        })([s, u])
      }
    }
  }
  function e9(t) {
    var e = "function" == typeof Symbol && Symbol.iterator,
      n = e && t[e],
      r = 0
    if (n) return n.call(t)
    if (t && "number" == typeof t.length)
      return {
        next: function () {
          return (
            t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t }
          )
        },
      }
    throw TypeError(
      e ? "Object is not iterable." : "Symbol.iterator is not defined.",
    )
  }
  function nt(t, e) {
    var n = "function" == typeof Symbol && t[Symbol.iterator]
    if (!n) return t
    var r,
      i,
      o = n.call(t),
      a = []
    try {
      for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; )
        a.push(r.value)
    } catch (t) {
      i = { error: t }
    } finally {
      try {
        r && !r.done && (n = o.return) && n.call(o)
      } finally {
        if (i) throw i.error
      }
    }
    return a
  }
  function ne(t, e, n) {
    if (n || 2 == arguments.length)
      for (var r, i = 0, o = e.length; i < o; i++)
        (!r && i in e) ||
          (r || (r = Array.prototype.slice.call(e, 0, i)), (r[i] = e[i]))
    return t.concat(r || Array.prototype.slice.call(e))
  }
  function nn(t) {
    return this instanceof nn ? ((this.v = t), this) : new nn(t)
  }
  function nr(t) {
    return "function" == typeof t
  }
  function ni(t) {
    var e = t(function (t) {
      Error.call(t), (t.stack = Error().stack)
    })
    return (
      (e.prototype = Object.create(Error.prototype)),
      (e.prototype.constructor = e),
      e
    )
  }
  "function" == typeof SuppressedError && SuppressedError
  var no = ni(function (t) {
    return function (e) {
      t(this),
        (this.message = e
          ? e.length +
            " errors occurred during unsubscription:\n" +
            e
              .map(function (t, e) {
                return e + 1 + ") " + t.toString()
              })
              .join("\n  ")
          : ""),
        (this.name = "UnsubscriptionError"),
        (this.errors = e)
    }
  })
  function na(t, e) {
    if (t) {
      var n = t.indexOf(e)
      0 <= n && t.splice(n, 1)
    }
  }
  var ns = (function () {
      var t
      function e(t) {
        ;(this.initialTeardown = t),
          (this.closed = !1),
          (this._parentage = null),
          (this._finalizers = null)
      }
      return (
        (e.prototype.unsubscribe = function () {
          if (!this.closed) {
            this.closed = !0
            var t,
              e,
              n,
              r,
              i,
              o = this._parentage
            if (o) {
              if (((this._parentage = null), Array.isArray(o)))
                try {
                  for (var a = e9(o), s = a.next(); !s.done; s = a.next())
                    s.value.remove(this)
                } catch (e) {
                  t = { error: e }
                } finally {
                  try {
                    s && !s.done && (e = a.return) && e.call(a)
                  } finally {
                    if (t) throw t.error
                  }
                }
              else o.remove(this)
            }
            var u = this.initialTeardown
            if (nr(u))
              try {
                u()
              } catch (t) {
                i = t instanceof no ? t.errors : [t]
              }
            var c = this._finalizers
            if (c) {
              this._finalizers = null
              try {
                for (var f = e9(c), l = f.next(); !l.done; l = f.next()) {
                  var h = l.value
                  try {
                    nf(h)
                  } catch (t) {
                    ;(i = null != i ? i : []),
                      t instanceof no
                        ? (i = ne(ne([], nt(i)), nt(t.errors)))
                        : i.push(t)
                  }
                }
              } catch (t) {
                n = { error: t }
              } finally {
                try {
                  l && !l.done && (r = f.return) && r.call(f)
                } finally {
                  if (n) throw n.error
                }
              }
            }
            if (i) throw new no(i)
          }
        }),
        (e.prototype.add = function (t) {
          var n
          if (t && t !== this) {
            if (this.closed) nf(t)
            else {
              if (t instanceof e) {
                if (t.closed || t._hasParent(this)) return
                t._addParent(this)
              }
              ;(this._finalizers =
                null !== (n = this._finalizers) && void 0 !== n ? n : []).push(
                t,
              )
            }
          }
        }),
        (e.prototype._hasParent = function (t) {
          var e = this._parentage
          return e === t || (Array.isArray(e) && e.includes(t))
        }),
        (e.prototype._addParent = function (t) {
          var e = this._parentage
          this._parentage = Array.isArray(e) ? (e.push(t), e) : e ? [e, t] : t
        }),
        (e.prototype._removeParent = function (t) {
          var e = this._parentage
          e === t ? (this._parentage = null) : Array.isArray(e) && na(e, t)
        }),
        (e.prototype.remove = function (t) {
          var n = this._finalizers
          n && na(n, t), t instanceof e && t._removeParent(this)
        }),
        (e.EMPTY = (((t = new e()).closed = !0), t)),
        e
      )
    })(),
    nu = ns.EMPTY
  function nc(t) {
    return (
      t instanceof ns ||
      (t && "closed" in t && nr(t.remove) && nr(t.add) && nr(t.unsubscribe))
    )
  }
  function nf(t) {
    nr(t) ? t() : t.unsubscribe()
  }
  var nl = (function (t) {
      function e(e, n) {
        return t.call(this) || this
      }
      return (
        e8(e, t),
        (e.prototype.schedule = function (t, e) {
          return void 0 === e && (e = 0), this
        }),
        e
      )
    })(ns),
    nh = {
      setInterval: function (t, e) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r]
        var i = nh.delegate
        return (null == i ? void 0 : i.setInterval)
          ? i.setInterval.apply(i, ne([t, e], nt(n)))
          : setInterval.apply(void 0, ne([t, e], nt(n)))
      },
      clearInterval: function (t) {
        var e = nh.delegate
        return ((null == e ? void 0 : e.clearInterval) || clearInterval)(t)
      },
      delegate: void 0,
    },
    np = (function (t) {
      function e(e, n) {
        var r = t.call(this, e, n) || this
        return (r.scheduler = e), (r.work = n), (r.pending = !1), r
      }
      return (
        e8(e, t),
        (e.prototype.schedule = function (t, e) {
          if ((void 0 === e && (e = 0), this.closed)) return this
          this.state = t
          var n,
            r = this.id,
            i = this.scheduler
          return (
            null != r && (this.id = this.recycleAsyncId(i, r, e)),
            (this.pending = !0),
            (this.delay = e),
            (this.id =
              null !== (n = this.id) && void 0 !== n
                ? n
                : this.requestAsyncId(i, this.id, e)),
            this
          )
        }),
        (e.prototype.requestAsyncId = function (t, e, n) {
          return (
            void 0 === n && (n = 0), nh.setInterval(t.flush.bind(t, this), n)
          )
        }),
        (e.prototype.recycleAsyncId = function (t, e, n) {
          if (
            (void 0 === n && (n = 0),
            null != n && this.delay === n && !1 === this.pending)
          )
            return e
          null != e && nh.clearInterval(e)
        }),
        (e.prototype.execute = function (t, e) {
          if (this.closed) return Error("executing a cancelled action")
          this.pending = !1
          var n = this._execute(t, e)
          if (n) return n
          !1 === this.pending &&
            null != this.id &&
            (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
        }),
        (e.prototype._execute = function (t, e) {
          var n,
            r = !1
          try {
            this.work(t)
          } catch (t) {
            ;(r = !0), (n = t || Error("Scheduled action threw falsy error"))
          }
          if (r) return this.unsubscribe(), n
        }),
        (e.prototype.unsubscribe = function () {
          if (!this.closed) {
            var e = this.id,
              n = this.scheduler,
              r = n.actions
            ;(this.work = this.state = this.scheduler = null),
              (this.pending = !1),
              na(r, this),
              null != e && (this.id = this.recycleAsyncId(n, e, null)),
              (this.delay = null),
              t.prototype.unsubscribe.call(this)
          }
        }),
        e
      )
    })(nl),
    nd = {
      schedule: function (t) {
        var e = requestAnimationFrame,
          n = cancelAnimationFrame,
          r = nd.delegate
        r && ((e = r.requestAnimationFrame), (n = r.cancelAnimationFrame))
        var i = e(function (e) {
          ;(n = void 0), t(e)
        })
        return new ns(function () {
          return null == n ? void 0 : n(i)
        })
      },
      requestAnimationFrame: function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
        var n = nd.delegate
        return (
          (null == n ? void 0 : n.requestAnimationFrame) ||
          requestAnimationFrame
        ).apply(void 0, ne([], nt(t)))
      },
      cancelAnimationFrame: function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
        var n = nd.delegate
        return (
          (null == n ? void 0 : n.cancelAnimationFrame) || cancelAnimationFrame
        ).apply(void 0, ne([], nt(t)))
      },
      delegate: void 0,
    },
    ny = (function (t) {
      function e(e, n) {
        var r = t.call(this, e, n) || this
        return (r.scheduler = e), (r.work = n), r
      }
      return (
        e8(e, t),
        (e.prototype.requestAsyncId = function (e, n, r) {
          return (void 0 === r && (r = 0), null !== r && r > 0)
            ? t.prototype.requestAsyncId.call(this, e, n, r)
            : (e.actions.push(this),
              e._scheduled ||
                (e._scheduled = nd.requestAnimationFrame(function () {
                  return e.flush(void 0)
                })))
        }),
        (e.prototype.recycleAsyncId = function (e, n, r) {
          if ((void 0 === r && (r = 0), null != r ? r > 0 : this.delay > 0))
            return t.prototype.recycleAsyncId.call(this, e, n, r)
          var i,
            o = e.actions
          null != n &&
            (null === (i = o[o.length - 1]) || void 0 === i ? void 0 : i.id) !==
              n &&
            (nd.cancelAnimationFrame(n), (e._scheduled = void 0))
        }),
        e
      )
    })(np),
    nv = {
      now: function () {
        return (nv.delegate || Date).now()
      },
      delegate: void 0,
    },
    n_ = (function () {
      function t(e, n) {
        void 0 === n && (n = t.now),
          (this.schedulerActionCtor = e),
          (this.now = n)
      }
      return (
        (t.prototype.schedule = function (t, e, n) {
          return (
            void 0 === e && (e = 0),
            new this.schedulerActionCtor(this, t).schedule(n, e)
          )
        }),
        (t.now = nv.now),
        t
      )
    })(),
    nb = (function (t) {
      function e(e, n) {
        void 0 === n && (n = n_.now)
        var r = t.call(this, e, n) || this
        return (r.actions = []), (r._active = !1), r
      }
      return (
        e8(e, t),
        (e.prototype.flush = function (t) {
          var e,
            n = this.actions
          if (this._active) {
            n.push(t)
            return
          }
          this._active = !0
          do if ((e = t.execute(t.state, t.delay))) break
          while ((t = n.shift()))
          if (((this._active = !1), e)) {
            for (; (t = n.shift()); ) t.unsubscribe()
            throw e
          }
        }),
        e
      )
    })(n_),
    ng = new ((function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this
      }
      return (
        e8(e, t),
        (e.prototype.flush = function (t) {
          this._active = !0
          var e,
            n = this._scheduled
          this._scheduled = void 0
          var r = this.actions
          t = t || r.shift()
          do if ((e = t.execute(t.state, t.delay))) break
          while ((t = r[0]) && t.id === n && r.shift())
          if (((this._active = !1), e)) {
            for (; (t = r[0]) && t.id === n && r.shift(); ) t.unsubscribe()
            throw e
          }
        }),
        e
      )
    })(nb))(ny)
  function nm(t) {
    return function (e) {
      if (nr(null == e ? void 0 : e.lift))
        return e.lift(function (e) {
          try {
            return t(e, this)
          } catch (t) {
            this.error(t)
          }
        })
      throw TypeError("Unable to lift unknown Observable type")
    }
  }
  var nw = {
      onUnhandledError: null,
      onStoppedNotification: null,
      Promise: void 0,
      useDeprecatedSynchronousErrorHandling: !1,
      useDeprecatedNextContext: !1,
    },
    nS = {
      setTimeout: function (t, e) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r]
        var i = nS.delegate
        return (null == i ? void 0 : i.setTimeout)
          ? i.setTimeout.apply(i, ne([t, e], nt(n)))
          : setTimeout.apply(void 0, ne([t, e], nt(n)))
      },
      clearTimeout: function (t) {
        var e = nS.delegate
        return ((null == e ? void 0 : e.clearTimeout) || clearTimeout)(t)
      },
      delegate: void 0,
    }
  function nx(t) {
    nS.setTimeout(function () {
      var e = nw.onUnhandledError
      if (e) e(t)
      else throw t
    })
  }
  function nj() {}
  var nA = nO("C", void 0, void 0)
  function nO(t, e, n) {
    return { kind: t, value: e, error: n }
  }
  var nI = null
  function nE(t) {
    if (nw.useDeprecatedSynchronousErrorHandling) {
      var e = !nI
      if ((e && (nI = { errorThrown: !1, error: null }), t(), e)) {
        var n = nI,
          r = n.errorThrown,
          i = n.error
        if (((nI = null), r)) throw i
      }
    } else t()
  }
  var nR = (function (t) {
      function e(e) {
        var n = t.call(this) || this
        return (
          (n.isStopped = !1),
          e ? ((n.destination = e), nc(e) && e.add(n)) : (n.destination = nP),
          n
        )
      }
      return (
        e8(e, t),
        (e.create = function (t, e, n) {
          return new nT(t, e, n)
        }),
        (e.prototype.next = function (t) {
          this.isStopped ? nD(nO("N", t, void 0), this) : this._next(t)
        }),
        (e.prototype.error = function (t) {
          this.isStopped
            ? nD(nO("E", void 0, t), this)
            : ((this.isStopped = !0), this._error(t))
        }),
        (e.prototype.complete = function () {
          this.isStopped
            ? nD(nA, this)
            : ((this.isStopped = !0), this._complete())
        }),
        (e.prototype.unsubscribe = function () {
          this.closed ||
            ((this.isStopped = !0),
            t.prototype.unsubscribe.call(this),
            (this.destination = null))
        }),
        (e.prototype._next = function (t) {
          this.destination.next(t)
        }),
        (e.prototype._error = function (t) {
          try {
            this.destination.error(t)
          } finally {
            this.unsubscribe()
          }
        }),
        (e.prototype._complete = function () {
          try {
            this.destination.complete()
          } finally {
            this.unsubscribe()
          }
        }),
        e
      )
    })(ns),
    nk = Function.prototype.bind
  function nM(t, e) {
    return nk.call(t, e)
  }
  var nq = (function () {
      function t(t) {
        this.partialObserver = t
      }
      return (
        (t.prototype.next = function (t) {
          var e = this.partialObserver
          if (e.next)
            try {
              e.next(t)
            } catch (t) {
              nC(t)
            }
        }),
        (t.prototype.error = function (t) {
          var e = this.partialObserver
          if (e.error)
            try {
              e.error(t)
            } catch (t) {
              nC(t)
            }
          else nC(t)
        }),
        (t.prototype.complete = function () {
          var t = this.partialObserver
          if (t.complete)
            try {
              t.complete()
            } catch (t) {
              nC(t)
            }
        }),
        t
      )
    })(),
    nT = (function (t) {
      function e(e, n, r) {
        var i,
          o,
          a = t.call(this) || this
        return (
          nr(e) || !e
            ? (i = {
                next: null != e ? e : void 0,
                error: null != n ? n : void 0,
                complete: null != r ? r : void 0,
              })
            : a && nw.useDeprecatedNextContext
              ? (((o = Object.create(e)).unsubscribe = function () {
                  return a.unsubscribe()
                }),
                (i = {
                  next: e.next && nM(e.next, o),
                  error: e.error && nM(e.error, o),
                  complete: e.complete && nM(e.complete, o),
                }))
              : (i = e),
          (a.destination = new nq(i)),
          a
        )
      }
      return e8(e, t), e
    })(nR)
  function nC(t) {
    nw.useDeprecatedSynchronousErrorHandling
      ? nw.useDeprecatedSynchronousErrorHandling &&
        nI &&
        ((nI.errorThrown = !0), (nI.error = t))
      : nx(t)
  }
  function nD(t, e) {
    var n = nw.onStoppedNotification
    n &&
      nS.setTimeout(function () {
        return n(t, e)
      })
  }
  var nP = {
    closed: !0,
    next: nj,
    error: function (t) {
      throw t
    },
    complete: nj,
  }
  function nz(t, e, n, r, i) {
    return new nN(t, e, n, r, i)
  }
  var nN = (function (t) {
    function e(e, n, r, i, o, a) {
      var s = t.call(this, e) || this
      return (
        (s.onFinalize = o),
        (s.shouldUnsubscribe = a),
        (s._next = n
          ? function (t) {
              try {
                n(t)
              } catch (t) {
                e.error(t)
              }
            }
          : t.prototype._next),
        (s._error = i
          ? function (t) {
              try {
                i(t)
              } catch (t) {
                e.error(t)
              } finally {
                this.unsubscribe()
              }
            }
          : t.prototype._error),
        (s._complete = r
          ? function () {
              try {
                r()
              } catch (t) {
                e.error(t)
              } finally {
                this.unsubscribe()
              }
            }
          : t.prototype._complete),
        s
      )
    }
    return (
      e8(e, t),
      (e.prototype.unsubscribe = function () {
        var e
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
          var n = this.closed
          t.prototype.unsubscribe.call(this),
            n || null === (e = this.onFinalize) || void 0 === e || e.call(this)
        }
      }),
      e
    )
  })(nR)
  function nF(t, e) {
    return nm(function (n, r) {
      var i = 0
      n.subscribe(
        nz(r, function (n) {
          r.next(t.call(e, n, i++))
        }),
      )
    })
  }
  var nV = function (t) {
    return t && "number" == typeof t.length && "function" != typeof t
  }
  function nB(t) {
    return nr(null == t ? void 0 : t.then)
  }
  var nW = ("function" == typeof Symbol && Symbol.observable) || "@@observable"
  function nU(t) {
    return t
  }
  var nH = (function () {
    function t(t) {
      t && (this._subscribe = t)
    }
    return (
      (t.prototype.lift = function (e) {
        var n = new t()
        return (n.source = this), (n.operator = e), n
      }),
      (t.prototype.subscribe = function (t, e, n) {
        var r,
          i = this,
          o =
            ((r = t) && r instanceof nR) ||
            (r && nr(r.next) && nr(r.error) && nr(r.complete) && nc(r))
              ? t
              : new nT(t, e, n)
        return (
          nE(function () {
            var t = i.operator,
              e = i.source
            o.add(t ? t.call(o, e) : e ? i._subscribe(o) : i._trySubscribe(o))
          }),
          o
        )
      }),
      (t.prototype._trySubscribe = function (t) {
        try {
          return this._subscribe(t)
        } catch (e) {
          t.error(e)
        }
      }),
      (t.prototype.forEach = function (t, e) {
        var n = this
        return new (e = nL(e))(function (e, r) {
          var i = new nT({
            next: function (e) {
              try {
                t(e)
              } catch (t) {
                r(t), i.unsubscribe()
              }
            },
            error: r,
            complete: e,
          })
          n.subscribe(i)
        })
      }),
      (t.prototype._subscribe = function (t) {
        var e
        return null === (e = this.source) || void 0 === e
          ? void 0
          : e.subscribe(t)
      }),
      (t.prototype[nW] = function () {
        return this
      }),
      (t.prototype.pipe = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
        return (
          0 === t.length
            ? nU
            : 1 === t.length
              ? t[0]
              : function (e) {
                  return t.reduce(function (t, e) {
                    return e(t)
                  }, e)
                }
        )(this)
      }),
      (t.prototype.toPromise = function (t) {
        var e = this
        return new (t = nL(t))(function (t, n) {
          var r
          e.subscribe(
            function (t) {
              return (r = t)
            },
            function (t) {
              return n(t)
            },
            function () {
              return t(r)
            },
          )
        })
      }),
      (t.create = function (e) {
        return new t(e)
      }),
      t
    )
  })()
  function nL(t) {
    var e
    return null !== (e = null != t ? t : nw.Promise) && void 0 !== e
      ? e
      : Promise
  }
  function nG(t) {
    return (
      Symbol.asyncIterator && nr(null == t ? void 0 : t[Symbol.asyncIterator])
    )
  }
  function nK(t) {
    return TypeError(
      "You provided " +
        (null !== t && "object" == typeof t
          ? "an invalid object"
          : "'" + t + "'") +
        " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.",
    )
  }
  var nJ =
    "function" == typeof Symbol && Symbol.iterator
      ? Symbol.iterator
      : "@@iterator"
  function nY(t) {
    return nr(null == t ? void 0 : t[nJ])
  }
  function nQ(t) {
    return (function (t, e, n) {
      if (!Symbol.asyncIterator)
        throw TypeError("Symbol.asyncIterator is not defined.")
      var r,
        i = n.apply(t, e || []),
        o = []
      return (
        (r = Object.create(
          ("function" == typeof AsyncIterator ? AsyncIterator : Object)
            .prototype,
        )),
        a("next"),
        a("throw"),
        a("return", function (t) {
          return function (e) {
            return Promise.resolve(e).then(t, c)
          }
        }),
        (r[Symbol.asyncIterator] = function () {
          return this
        }),
        r
      )
      function a(t, e) {
        i[t] &&
          ((r[t] = function (e) {
            return new Promise(function (n, r) {
              o.push([t, e, n, r]) > 1 || s(t, e)
            })
          }),
          e && (r[t] = e(r[t])))
      }
      function s(t, e) {
        try {
          var n
          ;(n = i[t](e)).value instanceof nn
            ? Promise.resolve(n.value.v).then(u, c)
            : f(o[0][2], n)
        } catch (t) {
          f(o[0][3], t)
        }
      }
      function u(t) {
        s("next", t)
      }
      function c(t) {
        s("throw", t)
      }
      function f(t, e) {
        t(e), o.shift(), o.length && s(o[0][0], o[0][1])
      }
    })(this, arguments, function () {
      var e, n, r
      return e7(this, function (i) {
        switch (i.label) {
          case 0:
            ;(e = t.getReader()), (i.label = 1)
          case 1:
            i.trys.push([1, , 9, 10]), (i.label = 2)
          case 2:
            return [4, nn(e.read())]
          case 3:
            if (((r = (n = i.sent()).value), !n.done)) return [3, 5]
            return [4, nn(void 0)]
          case 4:
            return [2, i.sent()]
          case 5:
            return [4, nn(r)]
          case 6:
            return [4, i.sent()]
          case 7:
            return i.sent(), [3, 2]
          case 8:
            return [3, 10]
          case 9:
            return e.releaseLock(), [7]
          case 10:
            return [2]
        }
      })
    })
  }
  function n$(t) {
    return nr(null == t ? void 0 : t.getReader)
  }
  function nX(t) {
    if (t instanceof nH) return t
    if (null != t) {
      if (nr(t[nW]))
        return new nH(function (e) {
          var n = t[nW]()
          if (nr(n.subscribe)) return n.subscribe(e)
          throw TypeError(
            "Provided object does not correctly implement Symbol.observable",
          )
        })
      if (nV(t))
        return new nH(function (e) {
          for (var n = 0; n < t.length && !e.closed; n++) e.next(t[n])
          e.complete()
        })
      if (nB(t))
        return new nH(function (e) {
          t.then(
            function (t) {
              e.closed || (e.next(t), e.complete())
            },
            function (t) {
              return e.error(t)
            },
          ).then(null, nx)
        })
      if (nG(t)) return nZ(t)
      if (nY(t))
        return new nH(function (e) {
          var n, r
          try {
            for (var i = e9(t), o = i.next(); !o.done; o = i.next()) {
              var a = o.value
              if ((e.next(a), e.closed)) return
            }
          } catch (t) {
            n = { error: t }
          } finally {
            try {
              o && !o.done && (r = i.return) && r.call(i)
            } finally {
              if (n) throw n.error
            }
          }
          e.complete()
        })
      if (n$(t)) return nZ(nQ(t))
    }
    throw nK(t)
  }
  function nZ(t) {
    return new nH(function (e) {
      ;(function (t, e) {
        var n, r, i, o, a, s, u, c
        return (
          (a = this),
          (s = void 0),
          (u = void 0),
          (c = function () {
            var a
            return e7(this, function (s) {
              switch (s.label) {
                case 0:
                  s.trys.push([0, 5, 6, 11]),
                    (n = (function (t) {
                      if (!Symbol.asyncIterator)
                        throw TypeError("Symbol.asyncIterator is not defined.")
                      var e,
                        n = t[Symbol.asyncIterator]
                      return n
                        ? n.call(t)
                        : ((t = e9(t)),
                          (e = {}),
                          r("next"),
                          r("throw"),
                          r("return"),
                          (e[Symbol.asyncIterator] = function () {
                            return this
                          }),
                          e)
                      function r(n) {
                        e[n] =
                          t[n] &&
                          function (e) {
                            return new Promise(function (r, i) {
                              ;(function (t, e, n, r) {
                                Promise.resolve(r).then(function (e) {
                                  t({ value: e, done: n })
                                }, e)
                              })(r, i, (e = t[n](e)).done, e.value)
                            })
                          }
                      }
                    })(t)),
                    (s.label = 1)
                case 1:
                  return [4, n.next()]
                case 2:
                  if ((r = s.sent()).done) return [3, 4]
                  if (((a = r.value), e.next(a), e.closed)) return [2]
                  s.label = 3
                case 3:
                  return [3, 1]
                case 4:
                  return [3, 11]
                case 5:
                  return (i = { error: s.sent() }), [3, 11]
                case 6:
                  if (
                    (s.trys.push([6, , 9, 10]),
                    !(r && !r.done && (o = n.return)))
                  )
                    return [3, 8]
                  return [4, o.call(n)]
                case 7:
                  s.sent(), (s.label = 8)
                case 8:
                  return [3, 10]
                case 9:
                  if (i) throw i.error
                  return [7]
                case 10:
                  return [7]
                case 11:
                  return e.complete(), [2]
              }
            })
          }),
          new (u || (u = Promise))(function (t, e) {
            function n(t) {
              try {
                i(c.next(t))
              } catch (t) {
                e(t)
              }
            }
            function r(t) {
              try {
                i(c.throw(t))
              } catch (t) {
                e(t)
              }
            }
            function i(e) {
              var i
              e.done
                ? t(e.value)
                : ((i = e.value) instanceof u
                    ? i
                    : new u(function (t) {
                        t(i)
                      })
                  ).then(n, r)
            }
            i((c = c.apply(a, s || [])).next())
          })
        )
      })(t, e).catch(function (t) {
        return e.error(t)
      })
    })
  }
  function n0(t, e, n, r, i) {
    void 0 === r && (r = 0), void 0 === i && (i = !1)
    var o = e.schedule(function () {
      n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe()
    }, r)
    if ((t.add(o), !i)) return o
  }
  function n1(t, e, n) {
    return (void 0 === n && (n = 1 / 0), nr(e))
      ? n1(function (n, r) {
          return nF(function (t, i) {
            return e(n, t, r, i)
          })(nX(t(n, r)))
        }, n)
      : ("number" == typeof e && (n = e),
        nm(function (e, r) {
          var i, o, a, s, u, c, f, l, h
          return (
            (i = n),
            (a = []),
            (s = 0),
            (u = 0),
            (c = !1),
            (f = function () {
              !c || a.length || s || r.complete()
            }),
            (l = function (t) {
              return s < i ? h(t) : a.push(t)
            }),
            (h = function (e) {
              s++
              var n = !1
              nX(t(e, u++)).subscribe(
                nz(
                  r,
                  function (t) {
                    o ? l(t) : r.next(t)
                  },
                  function () {
                    n = !0
                  },
                  void 0,
                  function () {
                    if (n)
                      try {
                        for (s--; a.length && s < i; )
                          !(function () {
                            var t = a.shift()
                            h(t)
                          })()
                        f()
                      } catch (t) {
                        r.error(t)
                      }
                  },
                ),
              )
            }),
            e.subscribe(
              nz(r, l, function () {
                ;(c = !0), f()
              }),
            ),
            function () {}
          )
        }))
  }
  function n2(t, e) {
    return nr(e) ? n1(t, e, 1) : n1(t, 1)
  }
  function n3(t, e) {
    return (
      void 0 === e && (e = nU),
      (t = null != t ? t : n5),
      nm(function (n, r) {
        var i,
          o = !0
        n.subscribe(
          nz(r, function (n) {
            var a = e(n)
            ;(o || !t(i, a)) && ((o = !1), (i = a), r.next(n))
          }),
        )
      })
    )
  }
  function n5(t, e) {
    return t === e
  }
  function n4(t, e) {
    return nm(function (n, r) {
      var i = 0
      n.subscribe(
        nz(r, function (n) {
          return t.call(e, n, i++) && r.next(n)
        }),
      )
    })
  }
  function n6(t, e) {
    return (
      void 0 === e && (e = 0),
      nm(function (n, r) {
        n.subscribe(
          nz(
            r,
            function (n) {
              return n0(
                r,
                t,
                function () {
                  return r.next(n)
                },
                e,
              )
            },
            function () {
              return n0(
                r,
                t,
                function () {
                  return r.complete()
                },
                e,
              )
            },
            function (n) {
              return n0(
                r,
                t,
                function () {
                  return r.error(n)
                },
                e,
              )
            },
          ),
        )
      })
    )
  }
  function n8(t, e) {
    return (
      void 0 === e && (e = 0),
      nm(function (n, r) {
        r.add(
          t.schedule(function () {
            return n.subscribe(r)
          }, e),
        )
      })
    )
  }
  function n7(t, e) {
    if (!t) throw Error("Iterable cannot be null")
    return new nH(function (n) {
      n0(n, e, function () {
        var r = t[Symbol.asyncIterator]()
        n0(
          n,
          e,
          function () {
            r.next().then(function (t) {
              t.done ? n.complete() : n.next(t.value)
            })
          },
          0,
          !0,
        )
      })
    })
  }
  function n9(t, e) {
    return e
      ? (function (t, e) {
          if (null != t) {
            if (nr(t[nW])) return nX(t).pipe(n8(e), n6(e))
            if (nV(t))
              return new nH(function (n) {
                var r = 0
                return e.schedule(function () {
                  r === t.length
                    ? n.complete()
                    : (n.next(t[r++]), n.closed || this.schedule())
                })
              })
            if (nB(t)) return nX(t).pipe(n8(e), n6(e))
            if (nG(t)) return n7(t, e)
            if (nY(t))
              return new nH(function (n) {
                var r
                return (
                  n0(n, e, function () {
                    ;(r = t[nJ]()),
                      n0(
                        n,
                        e,
                        function () {
                          var t, e, i
                          try {
                            ;(e = (t = r.next()).value), (i = t.done)
                          } catch (t) {
                            n.error(t)
                            return
                          }
                          i ? n.complete() : n.next(e)
                        },
                        0,
                        !0,
                      )
                  }),
                  function () {
                    return nr(null == r ? void 0 : r.return) && r.return()
                  }
                )
              })
            if (n$(t)) return n7(nQ(t), e)
          }
          throw nK(t)
        })(t, e)
      : nX(t)
  }
  function rt(t) {
    return n4(function (e, n) {
      return t <= n
    })
  }
  var re = ni(function (t) {
      return function () {
        t(this),
          (this.name = "ObjectUnsubscribedError"),
          (this.message = "object unsubscribed")
      }
    }),
    rn = (function (t) {
      function e() {
        var e = t.call(this) || this
        return (
          (e.closed = !1),
          (e.currentObservers = null),
          (e.observers = []),
          (e.isStopped = !1),
          (e.hasError = !1),
          (e.thrownError = null),
          e
        )
      }
      return (
        e8(e, t),
        (e.prototype.lift = function (t) {
          var e = new rr(this, this)
          return (e.operator = t), e
        }),
        (e.prototype._throwIfClosed = function () {
          if (this.closed) throw new re()
        }),
        (e.prototype.next = function (t) {
          var e = this
          nE(function () {
            var n, r
            if ((e._throwIfClosed(), !e.isStopped)) {
              e.currentObservers ||
                (e.currentObservers = Array.from(e.observers))
              try {
                for (
                  var i = e9(e.currentObservers), o = i.next();
                  !o.done;
                  o = i.next()
                )
                  o.value.next(t)
              } catch (t) {
                n = { error: t }
              } finally {
                try {
                  o && !o.done && (r = i.return) && r.call(i)
                } finally {
                  if (n) throw n.error
                }
              }
            }
          })
        }),
        (e.prototype.error = function (t) {
          var e = this
          nE(function () {
            if ((e._throwIfClosed(), !e.isStopped)) {
              ;(e.hasError = e.isStopped = !0), (e.thrownError = t)
              for (var n = e.observers; n.length; ) n.shift().error(t)
            }
          })
        }),
        (e.prototype.complete = function () {
          var t = this
          nE(function () {
            if ((t._throwIfClosed(), !t.isStopped)) {
              t.isStopped = !0
              for (var e = t.observers; e.length; ) e.shift().complete()
            }
          })
        }),
        (e.prototype.unsubscribe = function () {
          ;(this.isStopped = this.closed = !0),
            (this.observers = this.currentObservers = null)
        }),
        Object.defineProperty(e.prototype, "observed", {
          get: function () {
            var t
            return (
              (null === (t = this.observers) || void 0 === t
                ? void 0
                : t.length) > 0
            )
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype._trySubscribe = function (e) {
          return this._throwIfClosed(), t.prototype._trySubscribe.call(this, e)
        }),
        (e.prototype._subscribe = function (t) {
          return (
            this._throwIfClosed(),
            this._checkFinalizedStatuses(t),
            this._innerSubscribe(t)
          )
        }),
        (e.prototype._innerSubscribe = function (t) {
          var e = this,
            n = this.hasError,
            r = this.isStopped,
            i = this.observers
          return n || r
            ? nu
            : ((this.currentObservers = null),
              i.push(t),
              new ns(function () {
                ;(e.currentObservers = null), na(i, t)
              }))
        }),
        (e.prototype._checkFinalizedStatuses = function (t) {
          var e = this.hasError,
            n = this.thrownError,
            r = this.isStopped
          e ? t.error(n) : r && t.complete()
        }),
        (e.prototype.asObservable = function () {
          var t = new nH()
          return (t.source = this), t
        }),
        (e.create = function (t, e) {
          return new rr(t, e)
        }),
        e
      )
    })(nH),
    rr = (function (t) {
      function e(e, n) {
        var r = t.call(this) || this
        return (r.destination = e), (r.source = n), r
      }
      return (
        e8(e, t),
        (e.prototype.next = function (t) {
          var e, n
          null ===
            (n =
              null === (e = this.destination) || void 0 === e
                ? void 0
                : e.next) ||
            void 0 === n ||
            n.call(e, t)
        }),
        (e.prototype.error = function (t) {
          var e, n
          null ===
            (n =
              null === (e = this.destination) || void 0 === e
                ? void 0
                : e.error) ||
            void 0 === n ||
            n.call(e, t)
        }),
        (e.prototype.complete = function () {
          var t, e
          null ===
            (e =
              null === (t = this.destination) || void 0 === t
                ? void 0
                : t.complete) ||
            void 0 === e ||
            e.call(t)
        }),
        (e.prototype._subscribe = function (t) {
          var e, n
          return null !==
            (n =
              null === (e = this.source) || void 0 === e
                ? void 0
                : e.subscribe(t)) && void 0 !== n
            ? n
            : nu
        }),
        e
      )
    })(rn),
    ri = new nH(function (t) {
      return t.complete()
    })
  function ro(t) {
    return t <= 0
      ? function () {
          return ri
        }
      : nm(function (e, n) {
          var r = 0
          e.subscribe(
            nz(n, function (e) {
              ++r <= t && (n.next(e), t <= r && n.complete())
            }),
          )
        })
  }
  function ra(t) {
    return nm(function (e, n) {
      nX(t).subscribe(
        nz(
          n,
          function () {
            return n.complete()
          },
          nj,
        ),
      ),
        n.closed || e.subscribe(n)
    })
  }
  function rs(t, e, n) {
    var r = nr(t) || e || n ? { next: t, error: e, complete: n } : t
    return r
      ? nm(function (t, e) {
          null === (n = r.subscribe) || void 0 === n || n.call(r)
          var n,
            i = !0
          t.subscribe(
            nz(
              e,
              function (t) {
                var n
                null === (n = r.next) || void 0 === n || n.call(r, t), e.next(t)
              },
              function () {
                var t
                ;(i = !1),
                  null === (t = r.complete) || void 0 === t || t.call(r),
                  e.complete()
              },
              function (t) {
                var n
                ;(i = !1),
                  null === (n = r.error) || void 0 === n || n.call(r, t),
                  e.error(t)
              },
              function () {
                var t, e
                i &&
                  (null === (t = r.unsubscribe) || void 0 === t || t.call(r)),
                  null === (e = r.finalize) || void 0 === e || e.call(r)
              },
            ),
          )
        })
      : nU
  }
  var ru = Object.defineProperty,
    rc = (t) => {
      throw TypeError(t)
    },
    rf = (t, e, n) =>
      e in t
        ? ru(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
        : (t[e] = n),
    rl = (t, e, n) => rf(t, "symbol" != typeof e ? e + "" : e, n),
    rh = (t, e, n) => e.has(t) || rc("Cannot " + n),
    rp = (t, e, n) => (
      rh(t, e, "read from private field"), n ? n.call(t) : e.get(t)
    ),
    rd = (t, e, n) =>
      e.has(t)
        ? rc("Cannot add the same private member more than once")
        : e instanceof WeakSet
          ? e.add(t)
          : e.set(t, n),
    ry = (t, e, n, r) => (
      rh(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n
    )
  let rv = {
    ComponentPure: Symbol.for("class.ComponentPure"),
    ComponentBase: Symbol.for("class.ComponentBase"),
    RootCreator: Symbol.for("class.RootCreator"),
    ComponentId: Symbol.for("class.ComponentId"),
    ElementFinder: Symbol.for("class.ElementFinder"),
  }
  class r_ {
    constructor() {
      rd(this, h, rR.get(rv.ComponentId)),
        rd(this, p, rR.get(rv.ElementFinder)),
        rd(this, d),
        rd(this, y),
        rd(this, v),
        rd(this, _),
        rd(this, b),
        rd(this, g),
        rd(this, m),
        rd(this, w),
        ry(this, d, new rn()),
        ry(this, y, new rn()),
        ry(this, v, rp(this, y).asObservable()),
        ry(this, _, rp(this, h).generate()),
        ry(this, b, document.createElement("div")),
        ry(this, g, void 0),
        ry(this, m, () => !1),
        ry(this, w, () => ({})),
        this._handleSetParent(),
        this._handleStateUpdated(),
        this._handleDestroy(),
        this._handleCleaner()
    }
    onMounted() {}
    onUpdated() {}
    onDestroy() {}
    get id() {
      return rp(this, _)
    }
    get host() {
      return rp(this, b)
    }
    get parent() {
      return rp(this, g)
    }
    get props() {
      return rp(this, w).call(this)
    }
    get slick() {
      return rp(this, m).call(this)
    }
    setSlick(t) {
      return ry(this, m, t), this
    }
    setParent(t) {
      return rp(this, y).next({ name: "setParent", value: t }), this
    }
    setProps(t) {
      return ry(this, w, t), this
    }
    children() {
      return []
    }
    mount() {
      queueMicrotask(() => {
        var t
        eH(
          (t) => !!t,
          (t) => {
            queueMicrotask(() => {
              ;(rp(this, b).innerHTML = this.render()),
                t.replaceChildren(rp(this, b)),
                this.children().forEach((t) => {
                  t.setParent(this).mount()
                }),
                requestAnimationFrame(() => {
                  this.onMounted()
                })
            })
          },
          e4,
        )(
          rp(this, p).find(
            null == (t = rp(this, g)) ? void 0 : t.host,
            rp(this, _),
          ),
        )
      })
    }
    destroy() {
      queueMicrotask(() => {
        rp(this, y).next({ name: "destroy", value: null })
      })
    }
    _handleSetParent() {
      rp(this, v)
        .pipe(
          ra(rp(this, d)),
          n4((t) => eV("setParent", t.name)),
          ro(1),
          rs((t) => {
            ry(this, g, t.value)
          }),
        )
        .subscribe()
    }
    _handleStateUpdated() {
      queueMicrotask(() => {
        this.state
          .pipe(
            ra(rp(this, d)),
            rt(1),
            n3((t, e) => (0, e_.is)(t, e)),
            rs(() => {
              queueMicrotask(() => {
                ;(rp(this, b).innerHTML = this.render()),
                  this.children().forEach((t) => {
                    t.setParent(this).mount()
                  }),
                  requestAnimationFrame(() => {
                    this.onUpdated()
                  })
              })
            }),
          )
          .subscribe()
      })
    }
    _handleDestroy() {
      rp(this, v)
        .pipe(
          ra(rp(this, d)),
          n4((t) => eV("destroy", t.name)),
          rs(() => {
            queueMicrotask(() => {
              this.onDestroy()
            }),
              queueMicrotask(() => {
                eH(
                  () => rp(this, d).observed,
                  () => {
                    rp(this, d).next(),
                      rp(this, d).complete(),
                      rp(this, y).complete(),
                      (rp(this, b).innerHTML = ""),
                      ry(this, g, void 0)
                  },
                  e4,
                )()
              }),
              this.children().forEach((t) => {
                t.destroy()
              })
          }),
        )
        .subscribe()
    }
    _handleCleaner() {
      rp(this, v)
        .pipe(
          ra(rp(this, d)),
          n4((t) => eV("setParent", t.name)),
          ro(1),
          n2(() =>
            rp(this, g).state.pipe(
              ra(rp(this, d)),
              n6(ng),
              rt(1),
              n4(() => eG(rp(this, m).call(this))),
              rs(() => {
                eH(
                  () => {
                    var t
                    return eL(
                      rp(this, p).find(
                        null == (t = rp(this, g)) ? void 0 : t.host,
                        this.id,
                      ),
                    )
                  },
                  () => {
                    this.destroy()
                  },
                  e4,
                )()
              }),
            ),
          ),
        )
        .subscribe()
    }
  }
  ;(h = new WeakMap()),
    (p = new WeakMap()),
    (d = new WeakMap()),
    (y = new WeakMap()),
    (v = new WeakMap()),
    (_ = new WeakMap()),
    (b = new WeakMap()),
    (g = new WeakMap()),
    (m = new WeakMap()),
    (w = new WeakMap())
  class rb {
    constructor() {
      rd(this, S, rR.get(rv.ComponentId)),
        rd(this, x, rR.get(rv.ElementFinder)),
        rd(this, j),
        rd(this, A),
        rd(this, O),
        rd(this, I),
        rd(this, E),
        rd(this, R),
        rd(this, k),
        rd(this, M),
        ry(this, j, new rn()),
        ry(this, A, new rn()),
        ry(this, O, rp(this, A).asObservable()),
        ry(this, I, rp(this, S).generate()),
        ry(this, E, document.createElement("div")),
        ry(this, R, void 0),
        ry(this, k, () => !1),
        ry(this, M, () => ({})),
        this._handleSetParent(),
        this._handleDestroy(),
        this._handleCleaner()
    }
    onMounted() {}
    onDestroy() {}
    get id() {
      return rp(this, I)
    }
    get host() {
      return rp(this, E)
    }
    get parent() {
      return rp(this, R)
    }
    get props() {
      return rp(this, M).call(this)
    }
    get slick() {
      return rp(this, k).call(this)
    }
    setSlick(t) {
      return ry(this, k, t), this
    }
    setParent(t) {
      return rp(this, A).next({ name: "setParent", value: t }), this
    }
    setProps(t) {
      return ry(this, M, t), this
    }
    mount() {
      queueMicrotask(() => {
        var t
        eH(
          (t) => !!t,
          (t) => {
            ;(rp(this, E).innerHTML = this.render()),
              t.replaceChildren(rp(this, E)),
              requestAnimationFrame(() => {
                this.onMounted()
              })
          },
          e4,
        )(
          rp(this, x).find(
            null == (t = rp(this, R)) ? void 0 : t.host,
            rp(this, I),
          ),
        )
      })
    }
    destroy() {
      rp(this, A).next({ name: "destroy", value: null })
    }
    _handleSetParent() {
      rp(this, O)
        .pipe(
          ra(rp(this, j)),
          n4((t) => eV("setParent", t.name)),
          ro(1),
          rs((t) => {
            ry(this, R, t.value)
          }),
        )
        .subscribe()
    }
    _handleDestroy() {
      rp(this, O)
        .pipe(
          ra(rp(this, j)),
          n4((t) => eV("destroy", t.name)),
          rs(() => {
            queueMicrotask(() => {
              this.onDestroy()
            }),
              queueMicrotask(() => {
                eH(
                  () => rp(this, j).observed,
                  () => {
                    rp(this, j).next(),
                      rp(this, j).complete(),
                      rp(this, A).complete(),
                      (rp(this, E).innerHTML = ""),
                      ry(this, R, void 0)
                  },
                  e4,
                )()
              })
          }),
        )
        .subscribe()
    }
    _handleCleaner() {
      rp(this, O)
        .pipe(
          ra(rp(this, j)),
          n4((t) => eV("setParent", t.name)),
          ro(1),
          n2(() =>
            rp(this, R).state.pipe(
              ra(rp(this, j)),
              n6(ng),
              rt(1),
              n4(() => eG(rp(this, k).call(this))),
              rs(() => {
                eH(
                  () => {
                    var t
                    return eL(
                      rp(this, x).find(
                        null == (t = rp(this, R)) ? void 0 : t.host,
                        this.id,
                      ),
                    )
                  },
                  () => {
                    this.destroy()
                  },
                  e4,
                )()
              }),
            ),
          ),
        )
        .subscribe()
    }
  }
  ;(S = new WeakMap()),
    (x = new WeakMap()),
    (j = new WeakMap()),
    (A = new WeakMap()),
    (O = new WeakMap()),
    (I = new WeakMap()),
    (E = new WeakMap()),
    (R = new WeakMap()),
    (k = new WeakMap()),
    (M = new WeakMap())
  let rg = (t = 21) => {
    let e = "",
      n = 0 | t
    for (; n--; )
      e += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[
        (64 * Math.random()) | 0
      ]
    return e
  }
  var rm = Object.defineProperty,
    rw = Object.getOwnPropertyDescriptor
  let rS = class {
    generate() {
      return `b-${rg(10)}`
    }
  }
  rS = ((t, e, n, r) => {
    for (
      var i, o = r > 1 ? void 0 : r ? rw(e, n) : e, a = t.length - 1;
      a >= 0;
      a--
    )
      (i = t[a]) && (o = (r ? i(e, n, o) : i(o)) || o)
    return r && o && rm(e, n, o), o
  })([ev()], rS)
  var rx = Object.defineProperty,
    rj = Object.getOwnPropertyDescriptor
  let rA = class {
    constructor() {
      rl(this, "attr", "data-b-key")
    }
    find(t, e) {
      return eH(
        () => eA(Boolean)([t, e]),
        () => t.querySelector(`[${this.attr}=${e}]`),
        () => null,
      )()
    }
  }
  rA = ((t, e, n, r) => {
    for (
      var i, o = r > 1 ? void 0 : r ? rj(e, n) : e, a = t.length - 1;
      a >= 0;
      a--
    )
      (i = t[a]) && (o = (r ? i(e, n, o) : i(o)) || o)
    return r && o && rx(e, n, o), o
  })([ev()], rA)
  var rO = Object.defineProperty,
    rI = Object.getOwnPropertyDescriptor
  let rE = class {
    constructor(t) {
      this.domFinder = t
    }
    render(t, e) {
      queueMicrotask(() => {
        e5(
          (t) => (t.host.setAttribute(this.domFinder.attr, t.component.id), t),
          (t) => (t.root.replaceChildren(t.host), t),
          (e) => (e.component.setParent({ host: t, state: n9([]) }), e),
          (t) => (t.component.mount(), t),
        )({ root: t, component: e(), host: document.createElement("div") })
      })
    }
  }
  rE = ((t, e, n, r) => {
    for (
      var i, o = r > 1 ? void 0 : r ? rI(e, n) : e, a = t.length - 1;
      a >= 0;
      a--
    )
      (i = t[a]) && (o = (r ? i(e, n, o) : i(o)) || o)
    return r && o && rO(e, n, o), o
  })([ev(), ((t = ey(rv.ElementFinder)), (e, n) => t(e, n, 0))], rE)
  let rR = new ep({ autoBindInjectable: !0, skipBaseClassChecks: !0 })
  rR.bind(rv.ComponentId).to(rS),
    rR.bind(rv.ElementFinder).to(rA),
    rR.bind(rv.RootCreator).to(rE)
  let rk = (q = class extends Error {
    name
    message
    code
    status
    constructor(t, e, n) {
      super(t),
        (this.name = "ErrorHeavy"),
        (this.message = t),
        (this.code = e),
        (this.status = n),
        Error.captureStackTrace && Error.captureStackTrace(this, q)
    }
  })
  rk = q = (function (t, e, n, r) {
    var i,
      o = arguments.length,
      a =
        o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
      a = Reflect.decorate(t, e, n, r)
    else
      for (var s = t.length - 1; s >= 0; s--)
        (i = t[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, n, a) : i(e, n)) || a)
    return o > 3 && a && Object.defineProperty(e, n, a), a
  })(
    [
      ev(),
      (function (t, e) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(t, e)
      })("design:paramtypes", [Object, Object, Object]),
    ],
    rk,
  )
  let rM = class {
    name
    message
    code
    status
    constructor(t, e, n) {
      ;(this.name = "ErrorLight"),
        (this.message = t),
        (this.code = e),
        (this.status = n)
    }
  }
  rM = (function (t, e, n, r) {
    var i,
      o = arguments.length,
      a =
        o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
      a = Reflect.decorate(t, e, n, r)
    else
      for (var s = t.length - 1; s >= 0; s--)
        (i = t[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, n, a) : i(e, n)) || a)
    return o > 3 && a && Object.defineProperty(e, n, a), a
  })(
    [
      ev(),
      (function (t, e) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(t, e)
      })("design:paramtypes", [Object, Object, Object]),
    ],
    rM,
  )
  let rq = class {
    message
    code
    status
    constructor(t, e, n) {
      ;(this.message = t), (this.code = e), (this.status = n)
    }
  }
  rq = (function (t, e, n, r) {
    var i,
      o = arguments.length,
      a =
        o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
      a = Reflect.decorate(t, e, n, r)
    else
      for (var s = t.length - 1; s >= 0; s--)
        (i = t[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, n, a) : i(e, n)) || a)
    return o > 3 && a && Object.defineProperty(e, n, a), a
  })(
    [
      ev(),
      (function (t, e) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(t, e)
      })("design:paramtypes", [Object, Object, Object]),
    ],
    rq,
  )
  var rT =
      Number.isInteger ||
      function (t) {
        return t << 0 === t
      },
    rC = /*#__PURE__*/ eB(function t(e, n, r) {
      if (0 === e.length) return n
      var i = e[0]
      if (e.length > 1) {
        var o =
          !eL(r) && eE(i, r) && "object" == typeof r[i]
            ? r[i]
            : rT(e[1])
              ? []
              : {}
        n = t(Array.prototype.slice.call(e, 1), n, o)
      }
      return (function (t, e, n) {
        if (rT(t) && ew(n)) {
          var r = [].concat(n)
          return (r[t] = e), r
        }
        var i = {}
        for (var o in n) i[o] = n[o]
        return (i[t] = e), i
      })(i, n, r)
    }),
    rD = /*#__PURE__*/ eB(function (t, e, n) {
      return rC([t], e, n)
    })
  function rP(t, e, n) {
    for (var r = 0, i = n.length; r < i; ) (e = t(e, n[r])), (r += 1)
    return e
  }
  function rz(t, e) {
    for (var n = 0, r = e.length, i = Array(r); n < r; )
      (i[n] = t(e[n])), (n += 1)
    return i
  }
  var rN = /*#__PURE__*/ (function () {
      function t(t, e) {
        ;(this.xf = e), (this.f = t)
      }
      return (
        (t.prototype["@@transducer/init"] = ex.init),
        (t.prototype["@@transducer/result"] = ex.result),
        (t.prototype["@@transducer/step"] = function (t, e) {
          return this.xf["@@transducer/step"](t, this.f(e))
        }),
        t
      )
    })(),
    rF = /*#__PURE__*/ em(
      /*#__PURE__*/ eS(
        ["fantasy-land/map", "map"],
        function (t) {
          return function (e) {
            return new rN(t, e)
          }
        },
        function (t, e) {
          switch (Object.prototype.toString.call(e)) {
            case "[object Function]":
              return eU(e.length, function () {
                return t.call(this, e.apply(this, arguments))
              })
            case "[object Object]":
              return rP(
                function (n, r) {
                  return (n[r] = t(e[r])), n
                },
                {},
                eP(e),
              )
            default:
              return rz(t, e)
          }
        },
      ),
    )
  function rV(t) {
    return (
      '"' +
      t
        .replace(/\\/g, "\\\\")
        .replace(/[\b]/g, "\\b")
        .replace(/\f/g, "\\f")
        .replace(/\n/g, "\\n")
        .replace(/\r/g, "\\r")
        .replace(/\t/g, "\\t")
        .replace(/\v/g, "\\v")
        .replace(/\0/g, "\\0")
        .replace(/"/g, '\\"') +
      '"'
    )
  }
  var rB = function (t) {
      return (t < 10 ? "0" : "") + t
    },
    rW =
      "function" == typeof Date.prototype.toISOString
        ? function (t) {
            return t.toISOString()
          }
        : function (t) {
            return (
              t.getUTCFullYear() +
              "-" +
              rB(t.getUTCMonth() + 1) +
              "-" +
              rB(t.getUTCDate()) +
              "T" +
              rB(t.getUTCHours()) +
              ":" +
              rB(t.getUTCMinutes()) +
              ":" +
              rB(t.getUTCSeconds()) +
              "." +
              (t.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) +
              "Z"
            )
          },
    rU = /*#__PURE__*/ (function () {
      function t(t, e) {
        ;(this.xf = e), (this.f = t)
      }
      return (
        (t.prototype["@@transducer/init"] = ex.init),
        (t.prototype["@@transducer/result"] = ex.result),
        (t.prototype["@@transducer/step"] = function (t, e) {
          return this.f(e) ? this.xf["@@transducer/step"](t, e) : t
        }),
        t
      )
    })(),
    rH = /*#__PURE__*/ em(
      /*#__PURE__*/ eS(
        ["fantasy-land/filter", "filter"],
        function (t) {
          return function (e) {
            return new rU(t, e)
          }
        },
        function (t, e) {
          return "[object Object]" === Object.prototype.toString.call(e)
            ? rP(
                function (n, r) {
                  return t(e[r]) && (n[r] = e[r]), n
                },
                {},
                eP(e),
              )
            : (function (t, e) {
                for (var n = 0, r = e.length, i = []; n < r; )
                  t(e[n]) && (i[i.length] = e[n]), (n += 1)
                return i
              })(t, e)
        },
      ),
    ),
    rL = /*#__PURE__*/ em(function (t, e) {
      return rH(function () {
        return !t.apply(this, arguments)
      }, e)
    }),
    rG = /*#__PURE__*/ eg(function (t) {
      return (function t(e, n) {
        var r = function (r) {
            var i = n.concat([e])
            return (function (t, e, n) {
              var r, i
              if ("function" == typeof t.indexOf)
                switch (typeof e) {
                  case "number":
                    if (0 === e) {
                      for (r = 1 / e; n < t.length; ) {
                        if (0 === (i = t[n]) && 1 / i === r) return n
                        n += 1
                      }
                      return -1
                    }
                    if (e != e) {
                      for (; n < t.length; ) {
                        if ("number" == typeof (i = t[n]) && i != i) return n
                        n += 1
                      }
                      return -1
                    }
                    return t.indexOf(e, n)
                  case "string":
                  case "boolean":
                  case "function":
                  case "undefined":
                    return t.indexOf(e, n)
                  case "object":
                    if (null === e) return t.indexOf(e, n)
                }
              for (; n < t.length; ) {
                if (eV(t[n], e)) return n
                n += 1
              }
              return -1
            })(i, r, 0) >= 0
              ? "<Circular>"
              : t(r, i)
          },
          i = function (t, e) {
            return rz(function (e) {
              return rV(e) + ": " + r(t[e])
            }, e.slice().sort())
          }
        switch (Object.prototype.toString.call(e)) {
          case "[object Arguments]":
            return (
              "(function() { return arguments; }(" + rz(r, e).join(", ") + "))"
            )
          case "[object Array]":
            return (
              "[" +
              rz(r, e)
                .concat(
                  i(
                    e,
                    rL(function (t) {
                      return /^\d+$/.test(t)
                    }, eP(e)),
                  ),
                )
                .join(", ") +
              "]"
            )
          case "[object Boolean]":
            return "object" == typeof e
              ? "new Boolean(" + r(e.valueOf()) + ")"
              : e.toString()
          case "[object Date]":
            return "new Date(" + (isNaN(e.valueOf()) ? r(NaN) : rV(rW(e))) + ")"
          case "[object Map]":
            return "new Map(" + r(Array.from(e)) + ")"
          case "[object Null]":
            return "null"
          case "[object Number]":
            return "object" == typeof e
              ? "new Number(" + r(e.valueOf()) + ")"
              : 1 / e == -1 / 0
                ? "-0"
                : e.toString(10)
          case "[object Set]":
            return "new Set(" + r(Array.from(e).sort()) + ")"
          case "[object String]":
            return "object" == typeof e
              ? "new String(" + r(e.valueOf()) + ")"
              : rV(e)
          case "[object Undefined]":
            return "undefined"
          default:
            if ("function" == typeof e.toString) {
              var o = e.toString()
              if ("[object Object]" !== o) return o
            }
            return "{" + i(e, eP(e)).join(", ") + "}"
        }
      })(t, [])
    }),
    rK = /*#__PURE__*/ em(function (t, e) {
      if (t === e) return e
      function n(t, e) {
        if (t > e != e > t) return e > t ? e : t
      }
      var r = n(t, e)
      if (void 0 !== r) return r
      var i = n(typeof t, typeof e)
      if (void 0 !== i) return i === typeof t ? t : e
      var o = rG(t),
        a = n(o, rG(e))
      return void 0 !== a && a === o ? t : e
    }),
    rJ = /*#__PURE__*/ eg(function (t) {
      return eW(
        e0(
          rK,
          0,
          rF(function (t) {
            return t[0].length
          }, t),
        ),
        function () {
          for (var e = 0; e < t.length; ) {
            if (t[e][0].apply(this, arguments))
              return t[e][1].apply(this, arguments)
            e += 1
          }
        },
      )
    })
  let rY = {
    ErrorHeavy: Symbol.for("class.ErrorHeavy"),
    ErrorLight: Symbol.for("class.ErrorLight"),
    ErrorReadable: Symbol.for("class.ErrorReadable"),
    ErrorHeavyFactory: Symbol.for("factory.ErrorHeavy"),
    ErrorLightFactory: Symbol.for("factory.ErrorLight"),
    ErrorReadableFactory: Symbol.for("factory.ErrorReadable"),
    ErrorGlobalHandler: Symbol.for("service.ErrorGlobalHandler"),
    ErrorHandler: Symbol.for("service.ErrorHandler"),
    Game: Symbol.for("service.Game"),
    GameConfig: Symbol.for("service.GameConfig"),
    ErrorConfig: Symbol.for("service.ErrorConfig"),
    Remote: Symbol.for("service.Remote"),
  }
  var rQ = function (t, e) {
    return function (n, r) {
      e(n, r, t)
    }
  }
  let r$ = class {
    _errorConfig
    _errorGlobalHandler
    _errorReadableFactory
    constructor(t, e, n) {
      ;(this._errorConfig = t),
        (this._errorGlobalHandler = e),
        (this._errorReadableFactory = n)
    }
    handle(t) {
      return t
        ? eH(
            (t) => this._isErrorBase(t),
            (t) => {
              let e = {
                status: t.status,
                message:
                  this._errorConfig.config[t.status]?.message ||
                  "Something went wrong",
                code: this._errorConfig.config[t.status]?.code || 200,
                level: this._errorConfig.config[t.status]?.level,
                location: this._errorConfig.config[t.status]?.location,
                errorReadable: null,
              }
              return e5(
                (t) =>
                  rD(
                    "errorReadable",
                    this._errorReadableFactory(t.message, t.code, t.status),
                    t,
                  ),
                rJ([
                  [
                    (t) => eV(t.level, "log"),
                    (t) => (this._handleLevelLog(t.errorReadable), t),
                  ],
                  [
                    (t) => eV(t.level, "warning"),
                    (t) => (this._handleLevelWarn(t.errorReadable), t),
                  ],
                  [
                    (t) => eV(t.level, "error"),
                    (t) => (this._handleLevelError(t.errorReadable), t),
                  ],
                  [e4, (t) => t],
                ]),
                rJ([
                  [
                    (t) => eV(t.location, "global"),
                    (t) => (
                      this._errorGlobalHandler.handle(t.errorReadable), t
                    ),
                  ],
                  [e4, (t) => t],
                ]),
                (t) => t.errorReadable,
              )(e)
            },
            (t) => {
              let e = {
                errorReadable: this._errorReadableFactory(
                  "Something went wrong",
                  200,
                  "unknown",
                ),
              }
              return e5(
                (e) => (
                  this._handleLevelError(t),
                  this._errorGlobalHandler.handle(e.errorReadable),
                  e.errorReadable
                ),
              )(e)
            },
          )(t)
        : null
    }
    _handleLevelLog(t) {
      console.log(t)
    }
    _handleLevelWarn(t) {
      console.warn(t)
    }
    _handleLevelError(t) {
      console.error(t)
    }
    _isErrorBase(t) {
      return t instanceof rM || t instanceof rk
    }
  }
  r$ = (function (t, e, n, r) {
    var i,
      o = arguments.length,
      a =
        o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
      a = Reflect.decorate(t, e, n, r)
    else
      for (var s = t.length - 1; s >= 0; s--)
        (i = t[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, n, a) : i(e, n)) || a)
    return o > 3 && a && Object.defineProperty(e, n, a), a
  })(
    [
      ev(),
      rQ(0, ey(rY.ErrorConfig)),
      rQ(1, ey(rY.ErrorGlobalHandler)),
      rQ(2, ey(rY.ErrorReadableFactory)),
      (function (t, e) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(t, e)
      })("design:paramtypes", [Object, Object, Function]),
    ],
    r$,
  )
  var rX = (function (t) {
      function e(e) {
        var n = t.call(this) || this
        return (n._value = e), n
      }
      return (
        e8(e, t),
        Object.defineProperty(e.prototype, "value", {
          get: function () {
            return this.getValue()
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype._subscribe = function (e) {
          var n = t.prototype._subscribe.call(this, e)
          return n.closed || e.next(this._value), n
        }),
        (e.prototype.getValue = function () {
          var t = this.hasError,
            e = this.thrownError,
            n = this._value
          if (t) throw e
          return this._throwIfClosed(), n
        }),
        (e.prototype.next = function (e) {
          t.prototype.next.call(this, (this._value = e))
        }),
        e
      )
    })(rn),
    e_ = F("1ACkT"),
    rZ = {}
  rZ = (function () {
    /*!
     * mustache.js - Logic-less {{mustache}} templates with JavaScript
     * http://github.com/janl/mustache.js
     */ var t = Object.prototype.toString,
      e =
        Array.isArray ||
        function (e) {
          return "[object Array]" === t.call(e)
        }
    function n(t) {
      return "function" == typeof t
    }
    function r(t) {
      return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    }
    function i(t, e) {
      return null != t && "object" == typeof t && e in t
    }
    var o = RegExp.prototype.test,
      a = /\S/,
      s = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
        "`": "&#x60;",
        "=": "&#x3D;",
      },
      u = /\s*/,
      c = /\s+/,
      f = /\s*=/,
      l = /\s*\}/,
      h = /#|\^|\/|>|\{|&|=|!/
    function p(t) {
      ;(this.string = t), (this.tail = t), (this.pos = 0)
    }
    function d(t, e) {
      ;(this.view = t), (this.cache = { ".": this.view }), (this.parent = e)
    }
    function y() {
      this.templateCache = {
        _cache: {},
        set: function (t, e) {
          this._cache[t] = e
        },
        get: function (t) {
          return this._cache[t]
        },
        clear: function () {
          this._cache = {}
        },
      }
    }
    ;(p.prototype.eos = function () {
      return "" === this.tail
    }),
      (p.prototype.scan = function (t) {
        var e = this.tail.match(t)
        if (!e || 0 !== e.index) return ""
        var n = e[0]
        return (
          (this.tail = this.tail.substring(n.length)), (this.pos += n.length), n
        )
      }),
      (p.prototype.scanUntil = function (t) {
        var e,
          n = this.tail.search(t)
        switch (n) {
          case -1:
            ;(e = this.tail), (this.tail = "")
            break
          case 0:
            e = ""
            break
          default:
            ;(e = this.tail.substring(0, n)),
              (this.tail = this.tail.substring(n))
        }
        return (this.pos += e.length), e
      }),
      (d.prototype.push = function (t) {
        return new d(t, this)
      }),
      (d.prototype.lookup = function (t) {
        var e = this.cache
        if (e.hasOwnProperty(t)) a = e[t]
        else {
          for (var r, o, a, s, u, c, f = this, l = !1; f; ) {
            if (t.indexOf(".") > 0)
              for (
                s = f.view, u = t.split("."), c = 0;
                null != s && c < u.length;

              )
                c === u.length - 1 &&
                  (l =
                    i(s, u[c]) ||
                    ((r = s),
                    (o = u[c]),
                    null != r &&
                      "object" != typeof r &&
                      r.hasOwnProperty &&
                      r.hasOwnProperty(o))),
                  (s = s[u[c++]])
            else (s = f.view[t]), (l = i(f.view, t))
            if (l) {
              a = s
              break
            }
            f = f.parent
          }
          e[t] = a
        }
        return n(a) && (a = a.call(this.view)), a
      }),
      (y.prototype.clearCache = function () {
        void 0 !== this.templateCache && this.templateCache.clear()
      }),
      (y.prototype.parse = function (t, n) {
        var i = this.templateCache,
          s = t + ":" + (n || v.tags).join(":"),
          d = void 0 !== i,
          y = d ? i.get(s) : void 0
        return (
          void 0 == y &&
            ((y = (function (t, n) {
              if (!t) return []
              var i,
                s,
                d,
                y,
                _,
                b,
                g,
                m,
                w,
                S = !1,
                x = [],
                j = [],
                A = [],
                O = !1,
                I = !1,
                E = "",
                R = 0
              function k() {
                if (O && !I) for (; A.length; ) delete j[A.pop()]
                else A = []
                ;(O = !1), (I = !1)
              }
              function M(t) {
                if (
                  ("string" == typeof t && (t = t.split(c, 2)),
                  !e(t) || 2 !== t.length)
                )
                  throw Error("Invalid tags: " + t)
                ;(i = RegExp(r(t[0]) + "\\s*")),
                  (s = RegExp("\\s*" + r(t[1]))),
                  (d = RegExp("\\s*" + r("}" + t[1])))
              }
              M(n || v.tags)
              for (var q = new p(t); !q.eos(); ) {
                if (((y = q.pos), (b = q.scanUntil(i))))
                  for (var T, C = 0, D = b.length; C < D; ++C) {
                    ;((T = g = b.charAt(C)), o.call(a, T))
                      ? ((I = !0), (S = !0), (E += " "))
                      : (A.push(j.length), (E += g)),
                      j.push(["text", g, y, y + 1]),
                      (y += 1),
                      "\n" === g && (k(), (E = ""), (R = 0), (S = !1))
                  }
                if (!q.scan(i)) break
                if (
                  ((O = !0),
                  (_ = q.scan(h) || "name"),
                  q.scan(u),
                  "=" === _
                    ? ((b = q.scanUntil(f)), q.scan(f), q.scanUntil(s))
                    : "{" === _
                      ? ((b = q.scanUntil(d)),
                        q.scan(l),
                        q.scanUntil(s),
                        (_ = "&"))
                      : (b = q.scanUntil(s)),
                  !q.scan(s))
                )
                  throw Error("Unclosed tag at " + q.pos)
                if (
                  ((m =
                    ">" == _ ? [_, b, y, q.pos, E, R, S] : [_, b, y, q.pos]),
                  R++,
                  j.push(m),
                  "#" === _ || "^" === _)
                )
                  x.push(m)
                else if ("/" === _) {
                  if (!(w = x.pop()))
                    throw Error('Unopened section "' + b + '" at ' + y)
                  if (w[1] !== b)
                    throw Error('Unclosed section "' + w[1] + '" at ' + y)
                } else
                  "name" === _ || "{" === _ || "&" === _
                    ? (I = !0)
                    : "=" === _ && M(b)
              }
              if ((k(), (w = x.pop())))
                throw Error('Unclosed section "' + w[1] + '" at ' + q.pos)
              return (function (t) {
                for (
                  var e, n = [], r = n, i = [], o = 0, a = t.length;
                  o < a;
                  ++o
                )
                  switch ((e = t[o])[0]) {
                    case "#":
                    case "^":
                      r.push(e), i.push(e), (r = e[4] = [])
                      break
                    case "/":
                      ;(i.pop()[5] = e[2]),
                        (r = i.length > 0 ? i[i.length - 1][4] : n)
                      break
                    default:
                      r.push(e)
                  }
                return n
              })(
                (function (t) {
                  for (var e, n, r = [], i = 0, o = t.length; i < o; ++i)
                    (e = t[i]) &&
                      ("text" === e[0] && n && "text" === n[0]
                        ? ((n[1] += e[1]), (n[3] = e[3]))
                        : (r.push(e), (n = e)))
                  return r
                })(j),
              )
            })(t, n)),
            d && i.set(s, y)),
          y
        )
      }),
      (y.prototype.render = function (t, e, n, r) {
        var i = this.getConfigTags(r),
          o = this.parse(t, i),
          a = e instanceof d ? e : new d(e, void 0)
        return this.renderTokens(o, a, n, t, r)
      }),
      (y.prototype.renderTokens = function (t, e, n, r, i) {
        for (var o, a, s, u = "", c = 0, f = t.length; c < f; ++c)
          (s = void 0),
            "#" === (a = (o = t[c])[0])
              ? (s = this.renderSection(o, e, n, r, i))
              : "^" === a
                ? (s = this.renderInverted(o, e, n, r, i))
                : ">" === a
                  ? (s = this.renderPartial(o, e, n, i))
                  : "&" === a
                    ? (s = this.unescapedValue(o, e))
                    : "name" === a
                      ? (s = this.escapedValue(o, e, i))
                      : "text" === a && (s = this.rawValue(o)),
            void 0 !== s && (u += s)
        return u
      }),
      (y.prototype.renderSection = function (t, r, i, o, a) {
        var s = this,
          u = "",
          c = r.lookup(t[1])
        if (c) {
          if (e(c))
            for (var f = 0, l = c.length; f < l; ++f)
              u += this.renderTokens(t[4], r.push(c[f]), i, o, a)
          else if (
            "object" == typeof c ||
            "string" == typeof c ||
            "number" == typeof c
          )
            u += this.renderTokens(t[4], r.push(c), i, o, a)
          else if (n(c)) {
            if ("string" != typeof o)
              throw Error(
                "Cannot use higher-order sections without the original template",
              )
            null !=
              (c = c.call(r.view, o.slice(t[3], t[5]), function (t) {
                return s.render(t, r, i, a)
              })) && (u += c)
          } else u += this.renderTokens(t[4], r, i, o, a)
          return u
        }
      }),
      (y.prototype.renderInverted = function (t, n, r, i, o) {
        var a = n.lookup(t[1])
        if (!a || (e(a) && 0 === a.length))
          return this.renderTokens(t[4], n, r, i, o)
      }),
      (y.prototype.indentPartial = function (t, e, n) {
        for (
          var r = e.replace(/[^ \t]/g, ""), i = t.split("\n"), o = 0;
          o < i.length;
          o++
        )
          i[o].length && (o > 0 || !n) && (i[o] = r + i[o])
        return i.join("\n")
      }),
      (y.prototype.renderPartial = function (t, e, r, i) {
        if (r) {
          var o = this.getConfigTags(i),
            a = n(r) ? r(t[1]) : r[t[1]]
          if (null != a) {
            var s = t[6],
              u = t[5],
              c = t[4],
              f = a
            0 == u && c && (f = this.indentPartial(a, c, s))
            var l = this.parse(f, o)
            return this.renderTokens(l, e, r, f, i)
          }
        }
      }),
      (y.prototype.unescapedValue = function (t, e) {
        var n = e.lookup(t[1])
        if (null != n) return n
      }),
      (y.prototype.escapedValue = function (t, e, n) {
        var r = this.getConfigEscape(n) || v.escape,
          i = e.lookup(t[1])
        if (null != i)
          return "number" == typeof i && r === v.escape ? String(i) : r(i)
      }),
      (y.prototype.rawValue = function (t) {
        return t[1]
      }),
      (y.prototype.getConfigTags = function (t) {
        return e(t) ? t : t && "object" == typeof t ? t.tags : void 0
      }),
      (y.prototype.getConfigEscape = function (t) {
        return t && "object" == typeof t && !e(t) ? t.escape : void 0
      })
    var v = {
        name: "mustache.js",
        version: "4.2.0",
        tags: ["{{", "}}"],
        clearCache: void 0,
        escape: void 0,
        parse: void 0,
        render: void 0,
        Scanner: void 0,
        Context: void 0,
        Writer: void 0,
        set templateCache(cache) {
          _.templateCache = cache
        },
        get templateCache() {
          return _.templateCache
        },
      },
      _ = new y()
    return (
      (v.clearCache = function () {
        return _.clearCache()
      }),
      (v.parse = function (t, e) {
        return _.parse(t, e)
      }),
      (v.render = function (t, n, r, i) {
        if ("string" != typeof t)
          throw TypeError(
            'Invalid template! Template should be a "string" but "' +
              (e(t) ? "array" : typeof t) +
              '" was given as the first argument for mustache#render(template, view, partials)',
          )
        return _.render(t, n, r, i)
      }),
      (v.escape = function (t) {
        return String(t).replace(/[&<>"'`=\/]/g, function (t) {
          return s[t]
        })
      }),
      (v.Scanner = p),
      (v.Context = d),
      (v.Writer = y),
      v
    )
  })()
  var r0 = Array.isArray,
    r1 = ["addListener", "removeListener"],
    r2 = ["addEventListener", "removeEventListener"],
    r3 = ["on", "off"]
  function r5(t, e, n, r) {
    if ((nr(n) && ((r = n), (n = void 0)), r))
      return r5(t, e, n).pipe(
        ((i = r),
        nF(function (t) {
          return r0(t) ? i.apply(void 0, ne([], nt(t))) : i(t)
        })),
      )
    var i,
      o = nt(
        nr(t.addEventListener) && nr(t.removeEventListener)
          ? r2.map(function (r) {
              return function (i) {
                return t[r](e, i, n)
              }
            })
          : nr(t.addListener) && nr(t.removeListener)
            ? r1.map(r4(t, e))
            : nr(t.on) && nr(t.off)
              ? r3.map(r4(t, e))
              : [],
        2,
      ),
      a = o[0],
      s = o[1]
    if (!a && nV(t))
      return n1(function (t) {
        return r5(t, e, n)
      })(nX(t))
    if (!a) throw TypeError("Invalid event target")
    return new nH(function (t) {
      var e = function () {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]
        return t.next(1 < e.length ? e : e[0])
      }
      return (
        a(e),
        function () {
          return s(e)
        }
      )
    })
  }
  function r4(t, e) {
    return function (n) {
      return function (r) {
        return t[n](e, r)
      }
    }
  }
  let r6 = class extends rb {
    constructor() {
      super()
    }
    render() {
      let t = `
      <button class="btn {{classes}}">
        {{content}}
      </button>
    `
      return /*@__PURE__*/ P(rZ).render(t, this.props)
    }
  }
  r6 = (function (t, e, n, r) {
    var i,
      o = arguments.length,
      a =
        o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
      a = Reflect.decorate(t, e, n, r)
    else
      for (var s = t.length - 1; s >= 0; s--)
        (i = t[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, n, a) : i(e, n)) || a)
    return o > 3 && a && Object.defineProperty(e, n, a), a
  })(
    [
      ev(),
      (function (t, e) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(t, e)
      })("design:paramtypes", []),
    ],
    r6,
  )
  var e_ = F("1ACkT")
  function r8(t) {
    return {
      forEach: (e) => {
        let n = (t) => {
          ;(0, e_.Map).isMap(t) && e(t.get("component")),
            (0, e_.List).isList(t) && t.forEach((t) => n(t))
        }
        t.getValue()
          .get("children")
          .forEach((t) => n(t))
      },
    }
  }
  function r7(t) {
    return n4((e) => e.target.classList.contains(t))
  }
  let r9 = class extends r_ {
    unsubscribe
    stateSubject
    state
    constructor() {
      super(),
        (this.unsubscribe = new rn()),
        (this.stateSubject = new rX(
          (0, e_.fromJS)({
            children: {
              btn: {
                component: iB
                  .get(r6)
                  .setProps(() => ({
                    content: "Reload",
                    classes: "error-global-btn",
                  })),
              },
            },
          }),
        )),
        (this.state = this.stateSubject.asObservable()),
        this._reload()
    }
    onDestroy() {
      this.unsubscribe.next(), this.unsubscribe.complete()
    }
    children() {
      return r8(this.stateSubject)
    }
    _reload() {
      r5(this.host, "click")
        .pipe(
          ra(this.unsubscribe),
          r7("error-global-btn"),
          rs(() => {
            this.props.reset()
          }),
        )
        .subscribe()
    }
    render() {
      let t = `
      <div class="header-game-box">
        <div class="header-game-box__inner">
          <p class="header-game-box__error-global">{{message}}</p>
        </div>
        <div>
           <div class="header-game-box__error-global-btn" data-b-key="{{btn.id}}"></div>
        </div>
      </div>
    `
      return /*@__PURE__*/ P(rZ).render(t, {
        message: this.props.error.message,
        btn: this.stateSubject
          .getValue()
          .getIn(["children", "btn", "component"]),
      })
    }
  }
  r9 = (function (t, e, n, r) {
    var i,
      o = arguments.length,
      a =
        o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
      a = Reflect.decorate(t, e, n, r)
    else
      for (var s = t.length - 1; s >= 0; s--)
        (i = t[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, n, a) : i(e, n)) || a)
    return o > 3 && a && Object.defineProperty(e, n, a), a
  })(
    [
      ev(),
      (function (t, e) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(t, e)
      })("design:paramtypes", []),
    ],
    r9,
  )
  let it = class {
    _rootCreator
    _errorGlobal
    _errorSubject
    error
    constructor(t, e) {
      ;(this._rootCreator = t),
        (this._errorGlobal = e),
        (this._errorSubject = new rX(null)),
        (this.error = this._errorSubject.asObservable()),
        this._handleErrorScreen()
    }
    handle(t) {
      this._errorSubject.next(t)
    }
    reset() {
      window && window.location.reload()
    }
    _handleErrorScreen() {
      this.error
        .pipe(
          rs((t) =>
            eH(
              (t) => eG(eV(t, null)),
              (t) => {
                let e = document.getElementById("root")
                this._errorGlobal.setProps(() => ({
                  error: t,
                  reset: this.reset,
                })),
                  e && this._rootCreator.render(e, () => this._errorGlobal)
              },
              e4,
            )(t),
          ),
        )
        .subscribe()
    }
  }
  it = (function (t, e, n, r) {
    var i,
      o = arguments.length,
      a =
        o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
      a = Reflect.decorate(t, e, n, r)
    else
      for (var s = t.length - 1; s >= 0; s--)
        (i = t[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, n, a) : i(e, n)) || a)
    return o > 3 && a && Object.defineProperty(e, n, a), a
  })(
    [
      ev(),
      (function (t, e) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(t, e)
      })("design:paramtypes", [
        "function" == typeof (T = void 0 !== rE && rE) ? T : Object,
        "function" == typeof (C = void 0 !== r9 && r9) ? C : Object,
      ]),
    ],
    it,
  )
  var e_ = F("1ACkT"),
    ie = /*#__PURE__*/ em(function (t, e) {
      return Number(t) + Number(e)
    })
  function ir(t, e) {
    e = e || []
    var n,
      r = (t = t || []).length,
      i = e.length,
      o = []
    for (n = 0; n < r; ) (o[o.length] = t[n]), (n += 1)
    for (n = 0; n < i; ) (o[o.length] = e[n]), (n += 1)
    return o
  }
  var ii = /*#__PURE__*/ eg(function (t) {
      return eU(t.length, function () {
        var e = 0,
          n = arguments[0],
          r = arguments[arguments.length - 1],
          i = Array.prototype.slice.call(arguments, 0)
        return (
          (i[0] = function () {
            var t = n.apply(this, ir(arguments, [e, r]))
            return (e += 1), t
          }),
          t.apply(this, i)
        )
      })
    }),
    io = /*#__PURE__*/ em(function (t, e) {
      return t && e
    })
  function ia(t) {
    var e = Object.prototype.toString.call(t)
    return (
      "[object Function]" === e ||
      "[object AsyncFunction]" === e ||
      "[object GeneratorFunction]" === e ||
      "[object AsyncGeneratorFunction]" === e
    )
  }
  var is = /*#__PURE__*/ em(function (t, e) {
      if (ew(t)) {
        if (ew(e)) return t.concat(e)
        throw TypeError(rG(e) + " is not an array")
      }
      if (eJ(t)) {
        if (eJ(e)) return t + e
        throw TypeError(rG(e) + " is not a string")
      }
      if (null != t && ia(t["fantasy-land/concat"]))
        return t["fantasy-land/concat"](e)
      if (null != t && ia(t.concat)) return t.concat(e)
      throw TypeError(
        rG(t) +
          ' does not have a method named "concat" or "fantasy-land/concat"',
      )
    }),
    iu = /*#__PURE__*/ ie(-1),
    ic = /*#__PURE__*/ em(function (t, e) {
      return t / e
    }),
    il = /*#__PURE__*/ em(function (t, e) {
      return t > e
    }),
    ih = /*#__PURE__*/ ie(1),
    ip = /*#__PURE__*/ em(function (t, e) {
      return function (n) {
        return function (r) {
          return rF(
            function (t) {
              return e(t, r)
            },
            n(t(r)),
          )
        }
      }
    }),
    id = /*#__PURE__*/ em(function (t, e) {
      if (null != e) {
        var n
        return rT(t)
          ? ((n = t < 0 ? e.length + t : t), eJ(e) ? e.charAt(n) : e[n])
          : e[t]
      }
    }),
    iy = /*#__PURE__*/ eg(function (t) {
      return ip(id(t), rD(t))
    }),
    iv = /*#__PURE__*/ em(function (t, e) {
      return t < e
    }),
    i_ =
      "function" == typeof Object.assign
        ? Object.assign
        : function (t) {
            if (null == t)
              throw TypeError("Cannot convert undefined or null to object")
            for (var e = Object(t), n = 1, r = arguments.length; n < r; ) {
              var i = arguments[n]
              if (null != i) for (var o in i) eE(o, i) && (e[o] = i[o])
              n += 1
            }
            return e
          },
    ib = /*#__PURE__*/ eg(function (t) {
      return i_.apply(null, [{}].concat(t))
    }),
    ig = /*#__PURE__*/ em(function (t, e) {
      return t * e
    }),
    im = /*#__PURE__*/ em(function (t, e) {
      for (var n = {}, r = {}, i = 0, o = t.length; i < o; )
        (r[t[i]] = 1), (i += 1)
      for (var a in e) r.hasOwnProperty(a) || (n[a] = e[a])
      return n
    }),
    iw = /*#__PURE__*/ em(function (t, e) {
      return t || e
    }),
    iS = function (t) {
      return {
        value: t,
        map: function (e) {
          return iS(e(t))
        },
      }
    },
    ix = /*#__PURE__*/ eB(function (t, e, n) {
      return t(function (t) {
        return iS(e(t))
      })(n).value
    }),
    ij = /*#__PURE__*/ em(function (t, e) {
      return Number(t) - Number(e)
    }),
    iA = /*#__PURE__*/ em(function (t, e) {
      return eW(t.length, function () {
        try {
          return t.apply(this, arguments)
        } catch (t) {
          return e.apply(this, ir([t], arguments))
        }
      })
    }),
    iO = function (t) {
      return {
        value: t,
        "fantasy-land/map": function () {
          return this
        },
      }
    },
    iI = /*#__PURE__*/ em(function (t, e) {
      return t(iO)(e).value
    }),
    iE = /*#__PURE__*/ eB(function (t, e, n) {
      return t(n) ? e(n) : n
    })
  function iR(t) {
    return t && nr(t.schedule)
  }
  function ik(t) {
    return t[t.length - 1]
  }
  function iM() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
    var n = iR(ik(t)) ? t.pop() : void 0
    return n9(t, n)
  }
  let iq = /*#__PURE__*/ eg(function (t) {
      return eU(t.length, t)
    })((t, e) => parseFloat(e.toFixed(t))),
    iT = "questionNotSelected"
  var iC = function (t, e) {
    return function (n, r) {
      e(n, r, t)
    }
  }
  let iD = class {
    _errorLightFactory
    _stateSubject
    _errorSubject
    _unsubscribe
    config
    state
    error
    constructor(t, e) {
      ;(this._errorLightFactory = e),
        (this._unsubscribe = new rn()),
        (this._errorSubject = new rX(null)),
        (this.error = this._errorSubject
          .asObservable()
          .pipe(n3((t, e) => eV(t, e)))),
        (this._stateSubject = new rX(
          (0, e_.fromJS)({
            active: !1,
            end: !1,
            questionValue: 0,
            equationActive: 0,
            equations: [],
            result: { total: 0, base: 0, penalty: 0 },
            score: {},
          }),
        )),
        (this.state = this._stateSubject.asObservable()),
        (this.config = this._getConfig(t)),
        this._handleScore()
    }
    choice(t) {
      iA(
        e5(
          (t) => this._handleIfExistError(t),
          (t) => this._handleChoice(t),
        ),
        (t) => this._errorSubject.next(t),
      )(t)
    }
    play() {
      let t = this._stateSubject.getValue().get("questionValue")
      iA(
        e5(
          (t) => this._handleIfExistError(t),
          eH(
            (t) => il(t, 0),
            () => {
              this._stateSubject.next(
                this._stateSubject.getValue().setIn(["active"], !0),
              )
            },
            () => {
              throw this._errorLightFactory("Question not selected", 200, iT)
            },
          ),
        ),
        (t) => this._errorSubject.next(t),
      )(t)
    }
    reset() {
      iA(
        e5(
          () => this._handleClearError(),
          () => {
            this._stateSubject.next(
              this._stateSubject
                .getValue()
                .merge(
                  (0, e_.fromJS)({
                    active: !1,
                    end: !1,
                    questionValue: 0,
                    equationActive: 0,
                    equations: [],
                    result: { total: 0, base: 0, penalty: 0 },
                  }),
                ),
            )
          },
        ),
        (t) => this._errorSubject.next(t),
      )()
    }
    markRight() {
      iA(
        e5(
          () => this._handleIfExistError(),
          () => this._handleMark(!0),
        ),
        (t) => this._errorSubject.next(t),
      )()
    }
    markWrong() {
      iA(
        e5(
          () => this._handleIfExistError(),
          () => this._handleMark(!1),
        ),
        (t) => this._errorSubject.next(t),
      )()
    }
    _handleIfExistError(t) {
      let e = this._errorSubject.getValue()
      return eH(
        (t) => eV(t, null),
        () => t,
        (t) => {
          throw t
        },
      )(e)
    }
    _handleClearError() {
      this._errorSubject.next(null)
    }
    _handleChoice(t) {
      this._stateSubject.next(
        this._stateSubject
          .getValue()
          .merge(
            (0, e_.fromJS)({
              questionValue: t,
              equations: this._getEquations(t),
            }),
          ),
      )
    }
    _handleMark(t) {
      let { equationActive: e, equations: n, end: r } = this._getStateRaw(),
        i = {
          right: t,
          equationActive: e,
          equationNext: e,
          equationsCount: n.length,
          end: r,
        }
      eH(
        (t) => eV(t.end, !1),
        e5(
          (t) =>
            rD(
              "equationNext",
              iE(
                (t) => iv(t.equationActive, iu(t.equationsCount)),
                () => ih(t.equationActive),
              )(t),
              t,
            ),
          (t) => rD("end", il(ih(t.equationActive), iu(t.equationsCount)), t),
          (t) => (
            this._stateSubject.next(
              this._stateSubject
                .getValue()
                .set("equationActive", t.equationNext)
                .updateIn(["equations", t.equationActive], (e) =>
                  e.set("answer", t.right),
                )
                .setIn(["end"], t.end),
            ),
            t
          ),
        ),
        () => {},
      )(i)
    }
    _handleScore() {
      var t
      let e = (t) => iw(!!t.get("active"), !!t.get("end")),
        n = (t, e) =>
          io(
            eV(t.get("active"), e.get("active")),
            eV(t.get("end"), e.get("end")),
          ),
        r = (t, e) =>
          rJ([
            [
              ({ curr: t }) => io(t.get("active"), eG(t.get("end"))),
              ({ acc: t }) => ({ ...t, start: Date.now() }),
            ],
            [
              ({ curr: t }) => t.get("end"),
              ({ acc: t }) => ({ ...t, end: Date.now() }),
            ],
            [e4, ({ acc: t }) => t],
          ])({ acc: t, curr: e })
      iM({ start: 0, end: 0 })
        .pipe(
          ra(this._unsubscribe),
          ((t = (t) =>
            this.state.pipe(
              n4(e),
              n3(n),
              (function (t, e) {
                var n
                return nm(
                  ((n = arguments.length >= 2),
                  function (r, i) {
                    var o = n,
                      a = e,
                      s = 0
                    r.subscribe(
                      nz(
                        i,
                        function (e) {
                          var n = s++
                          ;(a = o ? t(a, e, n) : ((o = !0), e)), i.next(a)
                        },
                        void 0,
                      ),
                    )
                  }),
                )
              })(r, t),
            )),
          nm(function (e, n) {
            var r = null,
              i = 0,
              o = !1,
              a = function () {
                return o && !r && n.complete()
              }
            e.subscribe(
              nz(
                n,
                function (e) {
                  null == r || r.unsubscribe(),
                    nX(t(e, i++)).subscribe(
                      (r = nz(
                        n,
                        function (t) {
                          return n.next(t)
                        },
                        function () {
                          ;(r = null), a()
                        },
                      )),
                    )
                },
                function () {
                  ;(o = !0), a()
                },
              ),
            )
          })),
          rs(
            e5(
              (t) => this._getResultAndScore(t.start, t.end),
              (t) => (
                this._stateSubject.next(
                  this._stateSubject
                    .getValue()
                    .set("result", (0, e_.fromJS)(t.result))
                    .set("score", (0, e_.fromJS)(t.score)),
                ),
                t
              ),
            ),
          ),
        )
        .subscribe()
    }
    _getResultAndScore(t, e) {
      let n = this._getStateRaw(),
        r = {
          equations: n.equations,
          result: { total: 0, base: 0, penalty: 0 },
          score: n.score,
          questionValue: n.questionValue,
          start: t,
          end: e,
        },
        i = (t) => eV(ig(...t.values), t.result),
        o = (t) => t.answer,
        a = eH(
          (t) => eV(i(t), o(t)),
          () => 0,
          () => this.config.get("penalty"),
        ),
        s = rJ([
          [(t) => eL(t.score[t.questionValue]), (t) => t.result.total],
          [
            (t) => il(t.score[t.questionValue], t.result.total),
            (t) => t.result.total,
          ],
          [e4, (t) => t.score[t.questionValue]],
        ]),
        u = (t) => !!t.end,
        c = (t) => t,
        f = eH(
          u,
          (t) =>
            rC(
              ["result", "penalty"],
              e5(
                (t) => t.equations,
                rF((t) => a(t)),
                e0(ie, 0),
              )(t),
              t,
            ),
          c,
        )
      return e5(
        f,
        eH(
          u,
          (t) =>
            rC(
              ["result", "total"],
              this._getFormatTime()(
                ic(ie(Math.abs(ij(t.end, t.start)), t.result.penalty), 1e3),
              ),
              t,
            ),
          c,
        ),
        eH(
          u,
          (t) => rC(["result", "base"], Math.abs(ij(t.end, t.start)), t),
          c,
        ),
        eH(u, (t) => rC(["score", String(t.questionValue)], s(t), t), c),
        im(["equations", "questionValue", "start", "end"]),
      )(r)
    }
    _getConfig(t) {
      return (0, e_.fromJS)(
        ib([{ penalty: 1500, questions: [10, 25, 50, 99] }, t]),
      )
    }
    _getStateRaw() {
      return this._stateSubject.getValue().toJS()
    }
    _getEquations(t) {
      let e = {
        equationsArr: [],
        rightArr: [],
        wrongArr: [],
        rightCount: this._getNumberRandomInteger(1, t),
        count: t,
      }
      return e5(
        (t) =>
          rD(
            "rightArr",
            Array.from(
              { length: t.rightCount },
              () => this._getEquation(!0),
              this,
            ),
            t,
          ),
        (t) =>
          rD(
            "wrongArr",
            Array.from(
              { length: ij(t.count, t.rightCount) },
              () => this._getEquation(!1),
              this,
            ),
            t,
          ),
        (t) =>
          rD(
            "equationsArr",
            this._getArrayShuffle(is(t.rightArr, t.wrongArr)),
            t,
          ),
        (t) => t.equationsArr,
      )(e)
    }
    _getEquation(t) {
      let e = {
        values: [
          this._getNumberRandomInteger(1, 9),
          this._getNumberRandomInteger(1, 9),
        ],
        type: "multiply",
        result: 0,
        answer: null,
        right: t,
      }
      return e5(
        (t) => rD("result", ig(t.values[0], t.values[1]), t),
        eH(
          (t) => t.right,
          (t) => t,
          (t) => ix(iy("result"), ie(this._getNumberRandomInteger(1, 9)), t),
        ),
        im(["right"]),
      )(e)
    }
    _getArrayShuffle(t) {
      return ii(e0)(
        (t, e, n) => {
          let r = Math.floor(ig(Math.random(), ih(n)))
          return ([t[n], t[r]] = [t[r], t[n]]), t
        },
        [...t],
      )(t)
    }
    _getNumberRandomInteger(t, e) {
      let n = iy("result")
      return e5(
        (t) => rD("result", ij(t.max, t.min), t),
        (t) => ix(n, ih, t),
        (t) => ix(n, ig(Math.random()), t),
        (e) => ix(n, ie(ij(t, 0.5)), e),
        (t) => ix(n, Math.round, t),
        iI(iy("result")),
      )({ min: t, max: e, result: 0 })
    }
    _getFormatTime() {
      return iq(4)
    }
  }
  iD = (function (t, e, n, r) {
    var i,
      o = arguments.length,
      a =
        o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
      a = Reflect.decorate(t, e, n, r)
    else
      for (var s = t.length - 1; s >= 0; s--)
        (i = t[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, n, a) : i(e, n)) || a)
    return o > 3 && a && Object.defineProperty(e, n, a), a
  })(
    [
      ev(),
      iC(0, ey(rY.GameConfig)),
      iC(1, ey(rY.ErrorLightFactory)),
      (function (t, e) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(t, e)
      })("design:paramtypes", [Object, Function]),
    ],
    iD,
  )
  let iP = class {
    _game
    constructor(t) {
      this._game = t
    }
    choice(t) {
      this._game.choice(t)
    }
    start() {
      this._game.play()
    }
    replay() {
      this._game.reset()
    }
    wrong() {
      this._game.markWrong()
    }
    right() {
      this._game.markRight()
    }
  }
  iP = (function (t, e, n, r) {
    var i,
      o = arguments.length,
      a =
        o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
      a = Reflect.decorate(t, e, n, r)
    else
      for (var s = t.length - 1; s >= 0; s--)
        (i = t[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, n, a) : i(e, n)) || a)
    return o > 3 && a && Object.defineProperty(e, n, a), a
  })(
    [
      ev(),
      ((s = ey(rY.Game)),
      function (t, e) {
        s(t, e, 0)
      }),
      (function (t, e) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(t, e)
      })("design:paramtypes", [Object]),
    ],
    iP,
  )
  let iz = class {
    config = {
      [iT]: {
        message: "You not select count question",
        code: 200,
        level: "log",
        location: "local",
      },
    }
  }
  iz = (function (t, e, n, r) {
    var i,
      o = arguments.length,
      a =
        o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
      a = Reflect.decorate(t, e, n, r)
    else
      for (var s = t.length - 1; s >= 0; s--)
        (i = t[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, n, a) : i(e, n)) || a)
    return o > 3 && a && Object.defineProperty(e, n, a), a
  })([ev()], iz)
  let iN = class {
    penalty = 1500
    questions = [10, 25, 50, 99]
  }
  iN = (function (t, e, n, r) {
    var i,
      o = arguments.length,
      a =
        o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
      a = Reflect.decorate(t, e, n, r)
    else
      for (var s = t.length - 1; s >= 0; s--)
        (i = t[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, n, a) : i(e, n)) || a)
    return o > 3 && a && Object.defineProperty(e, n, a), a
  })([ev()], iN)
  let iF = (t = 21) => {
      let e = "",
        n = t
      for (; n--; )
        e += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[
          (64 * Math.random()) | 0
        ]
      return e
    },
    iV = class {
      generate() {
        return `b-${iF(6)}`
      }
    }
  iV = (function (t, e, n, r) {
    var i,
      o = arguments.length,
      a =
        o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
      a = Reflect.decorate(t, e, n, r)
    else
      for (var s = t.length - 1; s >= 0; s--)
        (i = t[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, n, a) : i(e, n)) || a)
    return o > 3 && a && Object.defineProperty(e, n, a), a
  })([ev()], iV)
  let iB = new ep({ autoBindInjectable: !0, skipBaseClassChecks: !0 })
  ;(iB.parent = rR),
    rR.rebind(rv.ComponentId).to(iV),
    iB.bind(rY.ErrorHeavy).to(rk),
    iB.bind(rY.ErrorLight).to(rM),
    iB.bind(rY.ErrorReadable).to(rq),
    iB.bind(rY.ErrorLightFactory).toFactory(() => (t, e, n) => new rM(t, e, n)),
    iB.bind(rY.ErrorHeavyFactory).toFactory(() => (t, e, n) => new rk(t, e, n)),
    iB
      .bind(rY.ErrorReadableFactory)
      .toFactory(() => (t, e, n) => new rq(t, e, n)),
    iB.bind(rY.ErrorConfig).to(iz).inSingletonScope(),
    iB.bind(rY.GameConfig).to(iN).inSingletonScope(),
    iB.bind(rY.ErrorGlobalHandler).to(it).inSingletonScope(),
    iB.bind(rY.ErrorHandler).to(r$).inSingletonScope(),
    iB.bind(rY.Game).to(iD).inSingletonScope(),
    iB.bind(rY.Remote).to(iP).inSingletonScope()
  var e_ = (F("1ACkT"), F("1ACkT")),
    iW = new nb(np)
  let iU = class extends r_ {
    _remote
    unsubscribe
    stateSubject
    state
    constructor(t) {
      super(),
        (this._remote = t),
        (this.unsubscribe = new rn()),
        (this.stateSubject = new rX((0, e_.fromJS)({ timer: 3 }))),
        (this.state = this.stateSubject.asObservable()),
        this._handleTimer()
    }
    onDestroy() {
      this.unsubscribe.next(),
        this.unsubscribe.complete(),
        this.stateSubject.complete()
    }
    _handleTimer() {
      var t, e, n
      ;(void 0 === t && (t = iW),
      (e = -1),
      iR(1e3) ? (t = 1e3) : (e = 1e3),
      new nH(function (n) {
        var r = 0,
          i = 0
        return t.schedule(function () {
          n.closed ||
            (n.next(i++), 0 <= e ? this.schedule(void 0, e) : n.complete())
        }, r)
      }))
        .pipe(
          ra(this.unsubscribe),
          ro(4),
          rs((t) => {
            this.stateSubject.next(
              this.stateSubject.getValue().set("timer", ij(3, t)),
            )
          }),
          ((n = () => {
            this.props.setState("quiz"), this._remote.start()
          }),
          nm(function (t, e) {
            try {
              t.subscribe(e)
            } finally {
              e.add(n)
            }
          })),
        )
        .subscribe()
    }
    render() {
      let t = `
      <header class="header game__header">
        <h1 class="header__caption">Math Sprint Game</h1>

        <!-- nav -->
        <nav class="navigation header__navigation">
          <h2 class="navigation__caption visually-hidden">
            Navigation for Game
          </h2>

          <form class="form navigation__form">
            <div class="form__fieldset-wrapper">
            <!-- countdown page -->
              <fieldset
                class="fieldset form__fieldset"
                id="countdown-page"
              >
                <legend class="fieldset__legend">Countdown</legend>
                <div class="countdown fieldset__countdown">
                  <h3 class="countdown__caption">{{timer}}</h3>
                  <div class="contdown__control-table-box">
                    <table class="control-table coutdown__control-table">
                      <tr>
                        <th colspan="2">controls</th>
                      </tr>
                      <tr>
                        <td>
                          <kbd>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-arrow-left-square"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                              />
                            </svg>
                            <span class="visually-hidden">left arrow</span>
                          </kbd>
                        </td>
                        <td>
                          <kbd>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-arrow-right-square"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                              />
                            </svg>
                            <span class="visually-hidden">right arrow</span>
                          </kbd>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <kbd>w</kbd>
                        </td>
                        <td>
                          <kbd>r</kbd>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <kbd>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-mouse2"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M3 5.188C3 2.341 5.22 0 8 0s5 2.342 5 5.188v5.625C13 13.658 10.78 16 8 16s-5-2.342-5-5.188V5.189zm4.5-4.155C5.541 1.289 4 3.035 4 5.188V5.5h3.5V1.033zm1 0V5.5H12v-.313c0-2.152-1.541-3.898-3.5-4.154zM12 6.5H4v4.313C4 13.145 5.81 15 8 15s4-1.855 4-4.188V6.5z"
                              />
                            </svg>
                            <span class="visually-hidden">mouse</span>
                          </kbd>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </fieldset>
            </div>
            <button class="btn form__btn visually-hidden" type="submit" disabled>
              Play
            </button>
          </form>
        </nav>
        <!-- Button -->
        <section class="btn-box form__btn-box">
          <h2 class="btn-box__caption visually-hidden">Play Buttons</h2>
        </section>
      </header>
    `
      return /*@__PURE__*/ P(rZ).render(t, {
        timer: this.stateSubject.getValue().get("timer"),
      })
    }
  }
  iU = (function (t, e, n, r) {
    var i,
      o = arguments.length,
      a =
        o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
      a = Reflect.decorate(t, e, n, r)
    else
      for (var s = t.length - 1; s >= 0; s--)
        (i = t[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, n, a) : i(e, n)) || a)
    return o > 3 && a && Object.defineProperty(e, n, a), a
  })(
    [
      ev(),
      ((u = ey(rY.Remote)),
      function (t, e) {
        u(t, e, 0)
      }),
      (function (t, e) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(t, e)
      })("design:paramtypes", [Object]),
    ],
    iU,
  )
  var e_ = F("1ACkT"),
    iH = function (t, e) {
      return function (n, r) {
        e(n, r, t)
      }
    }
  let iL = class extends r_ {
    _errorHandler
    _game
    _remote
    unsubscribe
    stateSubject
    state
    constructor(t, e, n) {
      super(),
        (this._errorHandler = t),
        (this._game = e),
        (this._remote = n),
        (this.unsubscribe = new rn()),
        (this.stateSubject = new rX(
          (0, e_.fromJS)({
            error: null,
            children: {
              button: {
                component: iB
                  .get(r6)
                  .setProps(() => ({
                    classes: "btn--play-again btn-box__btn",
                    content: "Try Again",
                  })),
              },
            },
          }),
        )),
        (this.state = this.stateSubject.asObservable()),
        this._handleToggleState(),
        this._handleError()
    }
    onDestroy() {
      this.unsubscribe.next(),
        this.unsubscribe.complete(),
        this.stateSubject.complete()
    }
    children() {
      return r8(this.stateSubject)
    }
    _handleToggleState() {
      r5(this.host, "click")
        .pipe(
          ra(this.unsubscribe),
          r7("btn--play-again"),
          rs(() => {
            this._remote.replay(), this.props.setState("start")
          }),
        )
        .subscribe()
    }
    _handleError() {
      this._game.error
        .pipe(
          ra(this.unsubscribe),
          n3((t, e) => eV(t, e)),
          rs((t) => {
            this.stateSubject.next(
              this.stateSubject
                .getValue()
                .set("error", (0, e_.fromJS)(this._errorHandler.handle(t))),
            )
          }),
        )
        .subscribe()
    }
    render() {
      let t = `
      <header class="header game__header">
        <h1 class="header__caption">Math Sprint Game</h1>

        <!-- nav -->
        <nav class="navigation header__navigation">
          <h2 class="navigation__caption visually-hidden">
            Navigation for Game
          </h2>

          <form class="form navigation__form">
            <div class="form__fieldset-wrapper">
              <!-- Score View -->
              <div class="fieldset form__fieldset" id="score-page">
                <!-- Score Container -->
                <div class="score fieldset__score">
                  <table class="table-score score__table-score">
                    <tr class="score__item score__item--title">
                      <th colspan="2"><h3>Error</h3></th>
                    </tr>
                    <tr class="table-score__item table-score__item--final-time">
                      <th>Message</th>
                      <td>{{state.error.message}}</td>
                    </tr>
                    <tr class="table-score__item table-score__item--base-time">
                      <th>Code</th>
                      <td>{{state.error.code}}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </form>
        </nav>
        <!-- Button -->
        <section class="btn-box form__btn-box">
          <h2 class="btn-box__caption visually-hidden">Play Buttons</h2>
           <div class="btn-quiz-box btn-box__btn-quiz-box" data-b-key="{{state.children.button.component.id}}">
          </div>
        </section>
      </header>
    `
      return /*@__PURE__*/ P(rZ).render(t, {
        state: this.stateSubject.getValue().toJS(),
      })
    }
  }
  iL = (function (t, e, n, r) {
    var i,
      o = arguments.length,
      a =
        o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
      a = Reflect.decorate(t, e, n, r)
    else
      for (var s = t.length - 1; s >= 0; s--)
        (i = t[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, n, a) : i(e, n)) || a)
    return o > 3 && a && Object.defineProperty(e, n, a), a
  })(
    [
      ev(),
      iH(0, ey(rY.ErrorHandler)),
      iH(1, ey(rY.Game)),
      iH(2, ey(rY.Remote)),
      (function (t, e) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(t, e)
      })("design:paramtypes", [Object, Object, Object]),
    ],
    iL,
  )
  var e_ = F("1ACkT")
  function iG(t) {
    return nm(function (e, n) {
      var r,
        i = null,
        o = !1
      ;(i = e.subscribe(
        nz(n, void 0, void 0, function (a) {
          ;(r = nX(t(a, iG(t)(e)))),
            i ? (i.unsubscribe(), (i = null), r.subscribe(n)) : (o = !0)
        }),
      )),
        o && (i.unsubscribe(), (i = null), r.subscribe(n))
    })
  }
  var iK = function (t, e) {
    return function (n, r) {
      e(n, r, t)
    }
  }
  let iJ = class extends r_ {
    _errorHandler
    _game
    _remote
    unsubscribe
    stateSubject
    state
    constructor(t, e, n) {
      super(),
        (this._errorHandler = t),
        (this._game = e),
        (this._remote = n),
        (this.unsubscribe = new rn()),
        (this.stateSubject = new rX(
          (0, e_.fromJS)({
            equations: [],
            children: {
              btnRight: {
                component: iB
                  .get(r6)
                  .setProps(() => ({
                    classes: "btn--right btn-quiz-box__btn",
                    content: "Right",
                  })),
              },
              btnWrong: {
                component: iB
                  .get(r6)
                  .setProps(() => ({
                    classes: "btn--wrong btn-quiz-box__btn",
                    content: "Wrong",
                  })),
              },
            },
          }),
        )),
        (this.state = this.stateSubject.asObservable()),
        this._handleAnswerActive(),
        this._handleToggleState(),
        this._handleBtnAnswer()
    }
    onDestroy() {
      this.unsubscribe.next(),
        this.unsubscribe.complete(),
        this.stateSubject.complete()
    }
    onUpdated() {
      this._handleScrollContainer()
    }
    children() {
      return r8(this.stateSubject)
    }
    _handleAnswerActive() {
      this._game.state
        .pipe(
          ra(this.unsubscribe),
          rs((t) => {
            let e = t.toJS().equations,
              n = t.toJS().equationActive
            this.stateSubject.next(
              this.stateSubject
                .getValue()
                .set(
                  "equations",
                  (0, e_.fromJS)(
                    e.map((t, e) => ({
                      left: t.values[0],
                      right: t.values[1],
                      result: t.result,
                      classActive: e === n ? "quiz__item--active" : "",
                    })),
                  ),
                ),
            )
          }),
        )
        .subscribe()
    }
    _handleToggleState() {
      this._game.state
        .pipe(
          ra(this.unsubscribe),
          n4((t) => eV(t.get("end"), !0)),
          ro(1),
          rs(() => {
            this.props.setState("score")
          }),
        )
        .subscribe()
    }
    _handleBtnAnswer() {
      let t = eH(
        (t) => eV(t, "wrong"),
        () => this._remote.wrong(),
        () => this._remote.right(),
      )
      r5(document, "keydown")
        .pipe(
          ra(this.unsubscribe),
          nF(
            eH(
              (t) => eV("ArrowLeft", t.key),
              () => "wrong",
              () => "right",
            ),
          ),
          rs(t),
        )
        .subscribe(),
        r5(this.host, "click")
          .pipe(
            ra(this.unsubscribe),
            r7("btn-quiz-box__btn"),
            nF(
              eH(
                (t) => t.target.classList.contains("btn--wrong"),
                () => "wrong",
                () => "right",
              ),
            ),
            rs(t),
            iG((t) => (this._errorHandler.handle(t), iM(t))),
          )
          .subscribe()
    }
    _handleScrollContainer() {
      let t = document.querySelector(".quiz__item--active")
      t &&
        queueMicrotask(() => {
          t.scrollIntoView({ block: "center" })
        })
    }
    render() {
      let t = `
      <header class="header game__header">
        <h1 class="header__caption">Math Sprint Game</h1>

        <!-- nav -->
        <nav class="navigation header__navigation">
          <h2 class="navigation__caption visually-hidden">
            Navigation for Game
          </h2>

          <form class="form navigation__form">
            <div class="form__fieldset-wrapper">
            <!-- quiz view -->
              <div class="quiz fieldset__quiz">
                <div>
                  {{#state.equations}}
                  <p class="quiz__item {{classActive}}">
                     {{left}} <span>x</span> {{right}} <span>=</span> {{result}}
                  </p>
                  {{/state.equations}}
                </div>
              </div>
            </div>
            <button class="btn form__btn visually-hidden" type="submit" disabled>
              Play
            </button>
          </form>
        </nav>
        <!-- Button -->
        <section class="btn-box form__btn-box">
          <h2 class="btn-box__caption visually-hidden">Play Buttons</h2>
           <div class="btn-quiz-box btn-box__btn-quiz-box">
             <div data-b-key="{{state.children.btnWrong.component.id}}"></div>
             <div data-b-key="{{state.children.btnRight.component.id}}"></div>
          </div>
        </section>
      </header>
    `
      return /*@__PURE__*/ P(rZ).render(t, {
        state: this.stateSubject.getValue().toJS(),
      })
    }
  }
  iJ = (function (t, e, n, r) {
    var i,
      o = arguments.length,
      a =
        o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
      a = Reflect.decorate(t, e, n, r)
    else
      for (var s = t.length - 1; s >= 0; s--)
        (i = t[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, n, a) : i(e, n)) || a)
    return o > 3 && a && Object.defineProperty(e, n, a), a
  })(
    [
      ev(),
      iK(0, ey(rY.ErrorHandler)),
      iK(1, ey(rY.Game)),
      iK(2, ey(rY.Remote)),
      (function (t, e) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(t, e)
      })("design:paramtypes", [Object, Object, Object]),
    ],
    iJ,
  )
  var e_ = F("1ACkT"),
    iY = function (t, e) {
      return function (n, r) {
        e(n, r, t)
      }
    }
  let iQ = class extends r_ {
    _errorHandler
    _game
    _remote
    unsubscribe
    stateSubject
    state
    constructor(t, e, n) {
      super(),
        (this._errorHandler = t),
        (this._game = e),
        (this._remote = n),
        (this.unsubscribe = new rn()),
        (this.stateSubject = new rX(
          (0, e_.fromJS)({
            final: 0,
            base: 0,
            penalty: 0,
            children: {
              playAgain: {
                component: iB
                  .get(r6)
                  .setProps(() => ({
                    classes: "btn--play-again btn-box__btn",
                    content: "Play Again",
                  })),
              },
            },
          }),
        )),
        (this.state = this.stateSubject.asObservable()),
        this._handleResult(),
        this._handleReplay()
    }
    onDestroy() {
      this.unsubscribe.next(),
        this.unsubscribe.complete(),
        this.stateSubject.complete()
    }
    children() {
      return r8(this.stateSubject)
    }
    _handleResult() {
      this._game.state
        .pipe(
          n3((t, e) => (0, e_.default).is(t.get("result"), e.get("result"))),
          rs((t) => {
            let e = t.toJS().result
            this.stateSubject.next(
              this.stateSubject
                .getValue()
                .set("final", e.total)
                .set("base", e.base)
                .set("penalty", e.penalty),
            )
          }),
          iG((t) => (this._errorHandler.handle(t), iM(t))),
        )
        .subscribe()
    }
    _handleReplay() {
      r5(this.host, "click")
        .pipe(
          ra(this.unsubscribe),
          r7("btn--play-again"),
          rs(() => {
            this._remote.replay(), this.props.setState("start")
          }),
          iG((t) => (this._errorHandler.handle(t), iM(t))),
        )
        .subscribe()
    }
    render() {
      let t = `
      <header class="header game__header">
        <h1 class="header__caption">Math Sprint Game</h1>

        <!-- nav -->
        <nav class="navigation header__navigation">
          <h2 class="navigation__caption visually-hidden">
            Navigation for Game
          </h2>

          <form class="form navigation__form">
            <div class="form__fieldset-wrapper">
              <!-- Score View -->
              <div class="fieldset form__fieldset" id="score-page">
                <!-- Score Container -->
                <div class="score fieldset__score">
                  <table class="table-score score__table-score">
                    <tr class="score__item score__item--title">
                      <th colspan="2"><h3>Your Time</h3></th>
                    </tr>
                    <tr class="table-score__item table-score__item--final-time">
                      <th>Final</th>
                      <td>{{final}}</td>
                    </tr>
                    <tr class="table-score__item table-score__item--base-time">
                      <th>Base</th>
                      <td>{{base}}</td>
                    </tr>
                    <tr
                      class="table-score__item table-score__item--penalty-time"
                    >
                      <th>Penalty</th>
                      <td>{{penalty}}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </form>
        </nav>
        <!-- Button -->
        <section class="btn-box form__btn-box">
          <h2 class="btn-box__caption visually-hidden">Play Buttons</h2>
           <div class="btn-quiz-box btn-box__btn-quiz-box" data-b-key="{{playAgain.id}}">
          </div>
        </section>
      </header>
    `
      return /*@__PURE__*/ P(rZ).render(t, {
        final: this.stateSubject.getValue().get("final"),
        base: this.stateSubject.getValue().get("base"),
        penalty: this.stateSubject.getValue().get("penalty"),
        playAgain: this.stateSubject
          .getValue()
          .getIn(["children", "playAgain", "component"]),
      })
    }
  }
  iQ = (function (t, e, n, r) {
    var i,
      o = arguments.length,
      a =
        o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
      a = Reflect.decorate(t, e, n, r)
    else
      for (var s = t.length - 1; s >= 0; s--)
        (i = t[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, n, a) : i(e, n)) || a)
    return o > 3 && a && Object.defineProperty(e, n, a), a
  })(
    [
      ev(),
      iY(0, ey(rY.ErrorHandler)),
      iY(1, ey(rY.Game)),
      iY(2, ey(rY.Remote)),
      (function (t, e) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(t, e)
      })("design:paramtypes", [Object, Object, Object]),
    ],
    iQ,
  )
  var e_ = (F("1ACkT"), F("1ACkT")),
    i$ = function (t, e) {
      return function (n, r) {
        e(n, r, t)
      }
    }
  let iX = class extends r_ {
    _errorHandler
    _game
    _remote
    unsubscribe
    stateSubject
    state
    constructor(t, e, n) {
      super(),
        (this._errorHandler = t),
        (this._game = e),
        (this._remote = n),
        (this.unsubscribe = new rn()),
        (this.stateSubject = new rX((0, e_.fromJS)({ questions: [] }))),
        (this.state = this.stateSubject.asObservable()),
        this._handleQuizFormat(),
        this._handleSelectQuestions()
    }
    onDestroy() {
      this.unsubscribe.next(),
        this.unsubscribe.complete(),
        this.stateSubject.complete()
    }
    _handleSelectQuestions() {
      r5(this.host, "click")
        .pipe(
          ra(this.unsubscribe),
          r7("input-box"),
          nF((t) => Number.parseInt(t.target.dataset.question)),
          rs((t) => this._remote.choice(t)),
          iG((t) => (this._errorHandler.handle(t), iM(t))),
        )
        .subscribe()
    }
    _handleQuizFormat() {
      this._game.state
        .pipe(
          ra(this.unsubscribe),
          n3((t, e) => eV(t.get("questionValue"), e.get("questionValue"))),
          rs((t) => {
            let e = {
              questionValue: t.get("questionValue"),
              stateRaw: t.toJS(),
              questions: this._game.config.get("questions"),
              questionsFormatted: [],
            }
            e5(
              (t) =>
                rD(
                  "questionsFormatted",
                  rF(
                    (e) => ({
                      classSelected: eH(
                        (t) => eV(t, e),
                        () => "input-box--active",
                        () => "",
                      )(t.questionValue),
                      value: e,
                      record: iw(t.stateRaw.score[String(e)], 0),
                    }),
                    t.questions,
                  ),
                  t,
                ),
              (t) => {
                this.stateSubject.next(
                  this.stateSubject
                    .getValue()
                    .set("questions", (0, e_.fromJS)(t.questionsFormatted)),
                )
              },
            )(e)
          }),
          iG((t) => (this._errorHandler.handle(t), iM(t))),
        )
        .subscribe()
    }
    render() {
      let t = `
      <fieldset class="fieldset form__fieldset" id="splash-page">
        <legend class="fieldset__legend">Questions</legend>
        <div class="questions fieldset__questions">
          {{#state.questions}}
            <div class="input-box questions__input-box {{classSelected}}" data-question="{{value}}">
              <label class="input-box__label" for="value-{{value}}" tabindex="0">
                <span>{{value}} Questions</span>
                <div class="best-score input-box__best-score">
                  <h3 class="best-score__caption">Best Score</h3>
                  <strong class="best-score__value">{{record}}</strong>
                </div></label
              >
              <input
                class="input-box__input visually-hidden"
                type="radio"
                name="questions"
                value="{{value}}"
                id="value-{{value}}"
              />
            </div>
          {{/state.questions}}
        </div>
      </fieldset>
    `
      return /*@__PURE__*/ P(rZ).render(t, {
        state: this.stateSubject.getValue().toJS(),
      })
    }
  }
  iX = (function (t, e, n, r) {
    var i,
      o = arguments.length,
      a =
        o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
      a = Reflect.decorate(t, e, n, r)
    else
      for (var s = t.length - 1; s >= 0; s--)
        (i = t[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, n, a) : i(e, n)) || a)
    return o > 3 && a && Object.defineProperty(e, n, a), a
  })(
    [
      ev(),
      i$(0, ey(rY.ErrorHandler)),
      i$(1, ey(rY.Game)),
      i$(2, ey(rY.Remote)),
      (function (t, e) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(t, e)
      })("design:paramtypes", [Object, Object, Object]),
    ],
    iX,
  )
  var iZ = function (t, e) {
    return function (n, r) {
      e(n, r, t)
    }
  }
  let i0 = class extends r_ {
    _errorHandler
    _game
    _remote
    unsubscribe
    stateSubject
    state
    constructor(t, e, n) {
      super(),
        (this._errorHandler = t),
        (this._game = e),
        (this._remote = n),
        (this.unsubscribe = new rn()),
        (this.stateSubject = new rX(
          (0, e_.fromJS)({
            children: {
              selectQuestion: { component: iB.get(iX) },
              startRound: {
                component: iB
                  .get(r6)
                  .setProps(() => ({
                    classes: "btn--start btn-box__btn",
                    content: "Start Round",
                  })),
              },
            },
          }),
        )),
        (this.state = this.stateSubject.asObservable()),
        this._handleStartGame()
    }
    onDestroy() {
      console.log("on destroy"),
        this.unsubscribe.next(),
        this.unsubscribe.complete(),
        this.stateSubject.complete()
    }
    children() {
      return r8(this.stateSubject)
    }
    _handleStartGame() {
      r5(this.host, "click")
        .pipe(
          ra(this.unsubscribe),
          r7("btn--start"),
          (function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e]
            var n = nr(ik(t)) ? t.pop() : void 0
            return nm(function (e, r) {
              for (
                var i = t.length,
                  o = Array(i),
                  a = t.map(function () {
                    return !1
                  }),
                  s = !1,
                  u = function (e) {
                    nX(t[e]).subscribe(
                      nz(
                        r,
                        function (t) {
                          ;(o[e] = t),
                            !s &&
                              !a[e] &&
                              ((a[e] = !0), (s = a.every(nU)) && (a = null))
                        },
                        nj,
                      ),
                    )
                  },
                  c = 0;
                c < i;
                c++
              )
                u(c)
              e.subscribe(
                nz(r, function (t) {
                  if (s) {
                    var e = ne([t], nt(o))
                    r.next(n ? n.apply(void 0, ne([], nt(e))) : e)
                  }
                }),
              )
            })
          })(this._game.state),
          rs(() => {
            this._remote.start()
          }),
          n4((t) => il(t[1].get("questionValue"), 0)),
          rs(() => {
            this.props.setState("countdown")
          }),
          iG((t) => (this._errorHandler.handle(t), iM(t))),
        )
        .subscribe()
    }
    render() {
      let t = `
      <header class="header game__header">
        <h1 class="header__caption">Math Sprint Game</h1>

        <!-- nav -->
        <nav class="navigation header__navigation">
          <h2 class="navigation__caption visually-hidden">
            Navigation for Game
          </h2>

          <form class="form navigation__form">
            <div class="form__fieldset-wrapper" data-b-key="{{selectQuestion.id}}">
            </div>
            <button class="btn form__btn visually-hidden" type="submit" disabled>
              Play
            </button>
          </form>
        </nav>
        <!-- Button -->
        <section class="btn-box form__btn-box">
          <h2 class="btn-box__caption visually-hidden">Play Buttons</h2>
          <div data-b-key="{{startRound.id}}"></div>
        </section>
      </header>
    `
      return /*@__PURE__*/ P(rZ).render(t, {
        selectQuestion: this.stateSubject
          .getValue()
          .getIn(["children", "selectQuestion", "component"]),
        startRound: this.stateSubject
          .getValue()
          .getIn(["children", "startRound", "component"]),
      })
    }
  }
  i0 = (function (t, e, n, r) {
    var i,
      o = arguments.length,
      a =
        o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
      a = Reflect.decorate(t, e, n, r)
    else
      for (var s = t.length - 1; s >= 0; s--)
        (i = t[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, n, a) : i(e, n)) || a)
    return o > 3 && a && Object.defineProperty(e, n, a), a
  })(
    [
      ev(),
      iZ(0, ey(rY.ErrorHandler)),
      iZ(1, ey(rY.Game)),
      iZ(2, ey(rY.Remote)),
      (function (t, e) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(t, e)
      })("design:paramtypes", [Object, Object, Object]),
    ],
    i0,
  )
  let i1 = class extends r_ {
    _game
    unsubscribe
    stateSubject
    state
    childrenMap
    constructor(t) {
      super(),
        (this._game = t),
        (this.unsubscribe = new rn()),
        (this.childrenMap = {
          start: () => ({
            component: iB
              .get(i0)
              .setProps(() => ({ setState: this.setState.bind(this) })),
          }),
          countdown: () => ({
            component: iB
              .get(iU)
              .setProps(() => ({ setState: this.setState.bind(this) })),
          }),
          quiz: () => ({
            component: iB
              .get(iJ)
              .setProps(() => ({ setState: this.setState.bind(this) })),
          }),
          score: () => ({
            component: iB
              .get(iQ)
              .setProps(() => ({ setState: this.setState.bind(this) })),
          }),
          error: () => ({
            component: iB
              .get(iL)
              .setProps(() => ({ setState: this.setState.bind(this) })),
          }),
        }),
        (this.stateSubject = new rX(
          (0, e_.fromJS)({ children: { active: this.childrenMap.start() } }),
        )),
        (this.state = this.stateSubject.asObservable()),
        this._handlerError()
    }
    onDestroy() {
      this.unsubscribe.next(),
        this.unsubscribe.complete(),
        this.stateSubject.complete()
    }
    children() {
      return r8(this.stateSubject)
    }
    setState(t) {
      this.stateSubject.next(
        this.stateSubject
          .getValue()
          .setIn(["children", "active"], (0, e_.fromJS)(this.childrenMap[t]())),
      )
    }
    _handlerError() {
      this._game.error
        .pipe(
          ra(this.unsubscribe),
          n4((t) => null !== t),
          rs((t) => {
            eH(
              (t) => null !== t,
              () => this.setState("error"),
              () => {},
            )(t)
          }),
        )
        .subscribe()
    }
    render() {
      let t = `
      <div class="header-game-box">
        <div class="header-game-box__inner" data-b-key="{{active.id}}"></div>
      </div>
    `
      return /*@__PURE__*/ P(rZ).render(t, {
        active: this.stateSubject
          .getValue()
          .getIn(["children", "active", "component"]),
      })
    }
  }
  i1 = (function (t, e, n, r) {
    var i,
      o = arguments.length,
      a =
        o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
      a = Reflect.decorate(t, e, n, r)
    else
      for (var s = t.length - 1; s >= 0; s--)
        (i = t[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, n, a) : i(e, n)) || a)
    return o > 3 && a && Object.defineProperty(e, n, a), a
  })(
    [
      ev(),
      ((c = ey(rY.Game)),
      function (t, e) {
        c(t, e, 0)
      }),
      (function (t, e) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(t, e)
      })("design:paramtypes", [Object]),
    ],
    i1,
  )
  let i2 = iB.get(rv.RootCreator),
    i3 = document.getElementById("root")
  if (i3) i2.render(i3, () => iB.get(i1))
  else throw Error("Not found root element")
})()
//# sourceMappingURL=index.js.map
