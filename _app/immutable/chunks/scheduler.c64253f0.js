var R = Object.defineProperty;
var F = (t, e, n) => e in t ? R(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n;
var f = (t, e, n) => (F(t, typeof e != "symbol" ? e + "" : e, n), n);

function S() {}
const _t = t => t;

function G(t, e) {
    for (const n in e) t[n] = e[n];
    return t
}

function ht(t) {
    return !!t && (typeof t == "object" || typeof t == "function") && typeof t.then == "function"
}

function I(t) {
    return t()
}

function dt() {
    return Object.create(null)
}

function z(t) {
    t.forEach(I)
}

function U(t) {
    return typeof t == "function"
}

function mt(t, e) {
    return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function"
}
let p;

function pt(t, e) {
    return t === e ? !0 : (p || (p = document.createElement("a")), p.href = e, t === p.href)
}

function yt(t) {
    return Object.keys(t).length === 0
}

function W(t, ...e) {
    if (t == null) {
        for (const i of e) i(void 0);
        return S
    }
    const n = t.subscribe(...e);
    return n.unsubscribe ? () => n.unsubscribe() : n
}

function gt(t, e, n) {
    t.$$.on_destroy.push(W(e, n))
}

function bt(t, e, n, i) {
    if (t) {
        const s = H(t, e, n, i);
        return t[0](s)
    }
}

function H(t, e, n, i) {
    return t[1] && i ? G(n.ctx.slice(), t[1](i(e))) : n.ctx
}

function xt(t, e, n, i) {
    if (t[2] && i) {
        const s = t[2](i(n));
        if (e.dirty === void 0) return s;
        if (typeof s == "object") {
            const o = [],
                c = Math.max(e.dirty.length, s.length);
            for (let l = 0; l < c; l += 1) o[l] = e.dirty[l] | s[l];
            return o
        }
        return e.dirty | s
    }
    return e.dirty
}

function wt(t, e, n, i, s, o) {
    if (s) {
        const c = H(e, n, i, o);
        t.p(c, s)
    }
}

function Et(t) {
    if (t.ctx.length > 32) {
        const e = [],
            n = t.ctx.length / 32;
        for (let i = 0; i < n; i++) e[i] = -1;
        return e
    }
    return -1
}

function Nt(t) {
    const e = {};
    for (const n in t) n[0] !== "$" && (e[n] = t[n]);
    return e
}

function Tt(t, e) {
    const n = {};
    e = new Set(e);
    for (const i in t) !e.has(i) && i[0] !== "$" && (n[i] = t[i]);
    return n
}

function kt(t) {
    const e = {};
    for (const n in t) e[n] = !0;
    return e
}

function At(t, e, n) {
    return t.set(n), e
}

function vt(t) {
    return t && U(t.destroy) ? t.destroy : S
}

function jt(t) {
    const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
    return e ? [parseFloat(e[1]), e[2] || "px"] : [t, "px"]
}
let g = !1;

function Ct() {
    g = !0
}

function Dt() {
    g = !1
}

function J(t, e, n, i) {
    for (; t < e;) {
        const s = t + (e - t >> 1);
        n(s) <= i ? t = s + 1 : e = s
    }
    return t
}

function K(t) {
    if (t.hydrate_init) return;
    t.hydrate_init = !0;
    let e = t.childNodes;
    if (t.nodeName === "HEAD") {
        const r = [];
        for (let a = 0; a < e.length; a++) {
            const u = e[a];
            u.claim_order !== void 0 && r.push(u)
        }
        e = r
    }
    const n = new Int32Array(e.length + 1),
        i = new Int32Array(e.length);
    n[0] = -1;
    let s = 0;
    for (let r = 0; r < e.length; r++) {
        const a = e[r].claim_order,
            u = (s > 0 && e[n[s]].claim_order <= a ? s + 1 : J(1, s, B => e[n[B]].claim_order, a)) - 1;
        i[r] = n[u] + 1;
        const j = u + 1;
        n[j] = r, s = Math.max(j, s)
    }
    const o = [],
        c = [];
    let l = e.length - 1;
    for (let r = n[s] + 1; r != 0; r = i[r - 1]) {
        for (o.push(e[r - 1]); l >= r; l--) c.push(e[l]);
        l--
    }
    for (; l >= 0; l--) c.push(e[l]);
    o.reverse(), c.sort((r, a) => r.claim_order - a.claim_order);
    for (let r = 0, a = 0; r < c.length; r++) {
        for (; a < o.length && c[r].claim_order >= o[a].claim_order;) a++;
        const u = a < o.length ? o[a] : null;
        t.insertBefore(c[r], u)
    }
}

function Q(t, e) {
    t.appendChild(e)
}

function V(t) {
    if (!t) return document;
    const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
    return e && e.host ? e : t.ownerDocument
}

function St(t) {
    const e = k("style");
    return e.textContent = "/* empty */", X(V(t), e), e.sheet
}

function X(t, e) {
    return Q(t.head || t, e), e.sheet
}

function Y(t, e) {
    if (g) {
        for (K(t), (t.actual_end_child === void 0 || t.actual_end_child !== null && t.actual_end_child.parentNode !== t) && (t.actual_end_child = t.firstChild); t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;) t.actual_end_child = t.actual_end_child.nextSibling;
        e !== t.actual_end_child ? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child) : t.actual_end_child = e.nextSibling
    } else(e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e)
}

function Z(t, e, n) {
    t.insertBefore(e, n || null)
}

function $(t, e, n) {
    g && !n ? Y(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null)
}

function E(t) {
    t.parentNode && t.parentNode.removeChild(t)
}

function Ht(t, e) {
    for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e)
}

function k(t) {
    return document.createElement(t)
}

function L(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t)
}

function A(t) {
    return document.createTextNode(t)
}

function Lt() {
    return A(" ")
}

function Mt() {
    return A("")
}

function Pt(t, e, n, i) {
    return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i)
}

function Ot(t) {
    return function(e) {
        return e.preventDefault(), t.call(this, e)
    }
}

function qt(t) {
    return function(e) {
        return e.stopPropagation(), t.call(this, e)
    }
}

function v(t, e, n) {
    n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
}
const tt = ["width", "height"];

function et(t, e) {
    const n = Object.getOwnPropertyDescriptors(t.__proto__);
    for (const i in e) e[i] == null ? t.removeAttribute(i) : i === "style" ? t.style.cssText = e[i] : i === "__value" ? t.value = t[i] = e[i] : n[i] && n[i].set && tt.indexOf(i) === -1 ? t[i] = e[i] : v(t, i, e[i])
}

function Bt(t, e) {
    for (const n in e) v(t, n, e[n])
}

function nt(t, e) {
    Object.keys(e).forEach(n => {
        it(t, n, e[n])
    })
}

function it(t, e, n) {
    const i = e.toLowerCase();
    i in t ? t[i] = typeof t[i] == "boolean" && n === "" ? !0 : n : e in t ? t[e] = typeof t[e] == "boolean" && n === "" ? !0 : n : v(t, e, n)
}

function Rt(t) {
    return /-/.test(t) ? nt : et
}

function Ft(t, e, n) {
    t.setAttributeNS("http://www.w3.org/1999/xlink", e, n)
}

function Gt(t) {
    return t.dataset.svelteH
}

function It(t) {
    return t === "" ? null : +t
}

function zt(t) {
    return Array.from(t.childNodes)
}

function M(t) {
    t.claim_info === void 0 && (t.claim_info = {
        last_index: 0,
        total_claimed: 0
    })
}

function P(t, e, n, i, s = !1) {
    M(t);
    const o = (() => {
        for (let c = t.claim_info.last_index; c < t.length; c++) {
            const l = t[c];
            if (e(l)) {
                const r = n(l);
                return r === void 0 ? t.splice(c, 1) : t[c] = r, s || (t.claim_info.last_index = c), l
            }
        }
        for (let c = t.claim_info.last_index - 1; c >= 0; c--) {
            const l = t[c];
            if (e(l)) {
                const r = n(l);
                return r === void 0 ? t.splice(c, 1) : t[c] = r, s ? r === void 0 && t.claim_info.last_index-- : t.claim_info.last_index = c, l
            }
        }
        return i()
    })();
    return o.claim_order = t.claim_info.total_claimed, t.claim_info.total_claimed += 1, o
}

function O(t, e, n, i) {
    return P(t, s => s.nodeName === e, s => {
        const o = [];
        for (let c = 0; c < s.attributes.length; c++) {
            const l = s.attributes[c];
            n[l.name] || o.push(l.name)
        }
        o.forEach(c => s.removeAttribute(c))
    }, () => i(e))
}

function Ut(t, e, n) {
    return O(t, e, n, k)
}

function Wt(t, e, n) {
    return O(t, e, n, L)
}

function st(t, e) {
    return P(t, n => n.nodeType === 3, n => {
        const i = "" + e;
        if (n.data.startsWith(i)) {
            if (n.data.length !== i.length) return n.splitText(i.length)
        } else n.data = i
    }, () => A(e), !0)
}

function Jt(t) {
    return st(t, " ")
}

function C(t, e, n) {
    for (let i = n; i < t.length; i += 1) {
        const s = t[i];
        if (s.nodeType === 8 && s.textContent.trim() === e) return i
    }
    return -1
}

function Kt(t, e) {
    const n = C(t, "HTML_TAG_START", 0),
        i = C(t, "HTML_TAG_END", n + 1);
    if (n === -1 || i === -1) return new b(e);
    M(t);
    const s = t.splice(n, i - n + 1);
    E(s[0]), E(s[s.length - 1]);
    const o = s.slice(1, s.length - 1);
    if (o.length === 0) return new b(e);
    for (const c of o) c.claim_order = t.claim_info.total_claimed, t.claim_info.total_claimed += 1;
    return new b(e, o)
}

function Qt(t, e) {
    e = "" + e, t.data !== e && (t.data = e)
}

function Vt(t, e) {
    t.value = e ? ? ""
}

function Xt(t, e, n, i) {
    n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? "important" : "")
}

function Yt(t, e, n) {
    for (let i = 0; i < t.options.length; i += 1) {
        const s = t.options[i];
        if (s.__value === e) {
            s.selected = !0;
            return
        }
    }(!n || e !== void 0) && (t.selectedIndex = -1)
}

function Zt(t, e) {
    for (let n = 0; n < t.options.length; n += 1) {
        const i = t.options[n];
        i.selected = ~e.indexOf(i.__value)
    }
}

function $t(t) {
    const e = t.querySelector(":checked");
    return e && e.__value
}

function te(t, e, n) {
    t.classList.toggle(e, !!n)
}

function ct(t, e, {
    bubbles: n = !1,
    cancelable: i = !1
} = {}) {
    return new CustomEvent(t, {
        detail: e,
        bubbles: n,
        cancelable: i
    })
}

function ee(t, e) {
    const n = [];
    let i = 0;
    for (const s of e.childNodes)
        if (s.nodeType === 8) {
            const o = s.textContent.trim();
            o === `HEAD_${t}_END` ? (i -= 1, n.push(s)) : o === `HEAD_${t}_START` && (i += 1, n.push(s))
        } else i > 0 && n.push(s);
    return n
}
class rt {
    constructor(e = !1) {
        f(this, "is_svg", !1);
        f(this, "e");
        f(this, "n");
        f(this, "t");
        f(this, "a");
        this.is_svg = e, this.e = this.n = null
    }
    c(e) {
        this.h(e)
    }
    m(e, n, i = null) {
        this.e || (this.is_svg ? this.e = L(n.nodeName) : this.e = k(n.nodeType === 11 ? "TEMPLATE" : n.nodeName), this.t = n.tagName !== "TEMPLATE" ? n : n.content, this.c(e)), this.i(i)
    }
    h(e) {
        this.e.innerHTML = e, this.n = Array.from(this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes)
    }
    i(e) {
        for (let n = 0; n < this.n.length; n += 1) Z(this.t, this.n[n], e)
    }
    p(e) {
        this.d(), this.h(e), this.i(this.a)
    }
    d() {
        this.n.forEach(E)
    }
}
class b extends rt {
    constructor(n = !1, i) {
        super(n);
        f(this, "l");
        this.e = this.n = null, this.l = i
    }
    c(n) {
        this.l ? this.n = this.l : super.c(n)
    }
    i(n) {
        for (let i = 0; i < this.n.length; i += 1) $(this.t, this.n[i], n)
    }
}

function ne(t, e) {
    return new t(e)
}
let y;

function x(t) {
    y = t
}

function d() {
    if (!y) throw new Error("Function called outside component initialization");
    return y
}

function ie(t) {
    d().$$.on_mount.push(t)
}

function se(t) {
    d().$$.after_update.push(t)
}

function ce(t) {
    d().$$.on_destroy.push(t)
}

function re() {
    const t = d();
    return (e, n, {
        cancelable: i = !1
    } = {}) => {
        const s = t.$$.callbacks[e];
        if (s) {
            const o = ct(e, n, {
                cancelable: i
            });
            return s.slice().forEach(c => {
                c.call(t, o)
            }), !o.defaultPrevented
        }
        return !0
    }
}

function oe(t, e) {
    return d().$$.context.set(t, e), e
}

function le(t) {
    return d().$$.context.get(t)
}

function ae(t, e) {
    const n = t.$$.callbacks[e.type];
    n && n.slice().forEach(i => i.call(this, e))
}
const m = [],
    D = [];
let h = [];
const N = [],
    q = Promise.resolve();
let T = !1;

function ot() {
    T || (T = !0, q.then(at))
}

function ue() {
    return ot(), q
}

function lt(t) {
    h.push(t)
}

function fe(t) {
    N.push(t)
}
const w = new Set;
let _ = 0;

function at() {
    if (_ !== 0) return;
    const t = y;
    do {
        try {
            for (; _ < m.length;) {
                const e = m[_];
                _++, x(e), ut(e.$$)
            }
        } catch (e) {
            throw m.length = 0, _ = 0, e
        }
        for (x(null), m.length = 0, _ = 0; D.length;) D.pop()();
        for (let e = 0; e < h.length; e += 1) {
            const n = h[e];
            w.has(n) || (w.add(n), n())
        }
        h.length = 0
    } while (m.length);
    for (; N.length;) N.pop()();
    T = !1, w.clear(), x(t)
}

function ut(t) {
    if (t.fragment !== null) {
        t.update(), z(t.before_update);
        const e = t.dirty;
        t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(lt)
    }
}

function _e(t) {
    const e = [],
        n = [];
    h.forEach(i => t.indexOf(i) === -1 ? e.push(i) : n.push(i)), n.forEach(i => i()), h = e
}
export {
    qt as $, U as A, D as B, Tt as C, ae as D, Mt as E, re as F, lt as G, fe as H, S as I, te as J, et as K, Zt as L, Yt as M, Ht as N, z as O, Vt as P, $t as Q, ee as R, vt as S, Ft as T, ie as U, ce as V, kt as W, le as X, oe as Y, Rt as Z, Ot as _, Lt as a, At as a0, jt as a1, _t as a2, se as a3, ue as a4, ne as a5, Bt as a6, V as a7, St as a8, ct as a9, dt as aa, at as ab, yt as ac, _e as ad, y as ae, x as af, I as ag, m as ah, ot as ai, Ct as aj, Dt as ak, b as al, Kt as am, It as an, ht as ao, d as ap, L as b, Jt as c, Ut as d, k as e, zt as f, Wt as g, E as h, st as i, v as j, pt as k, $ as l, Y as m, Qt as n, gt as o, bt as p, Et as q, xt as r, mt as s, A as t, wt as u, Xt as v, G as w, Nt as x, Gt as y, Pt as z
};