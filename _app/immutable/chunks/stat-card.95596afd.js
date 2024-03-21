import {
    s as F,
    p as k,
    e as h,
    a as y,
    t as z,
    d as b,
    f as p,
    h as m,
    c as A,
    i as N,
    j as E,
    l as B,
    m as f,
    u as G,
    q as H,
    r as J,
    n as P
} from "./scheduler.c64253f0.js";
import {
    S as K,
    i as L,
    t as M,
    b as O
} from "./index.9bbe2ba6.js";
import {
    c as C
} from "./formatters.2d4ded0c.js";

function Q(r) {
    let t, a, c, _, n, i, d = (r[2] ? r[2].format(r[0]) : C.format(r[0])) + "",
        s, I, v, S, u;
    const V = r[4].default,
        l = k(V, r, r[3], null);
    return {
        c() {
            t = h("div"), a = h("div"), c = h("div"), l && l.c(), _ = y(), n = h("div"), i = h("span"), s = z(d), I = y(), v = h("span"), S = z(r[1]), this.h()
        },
        l(e) {
            t = b(e, "DIV", {
                class: !0
            });
            var o = p(t);
            a = b(o, "DIV", {
                class: !0
            });
            var g = p(a);
            c = b(g, "DIV", {
                class: !0
            });
            var j = p(c);
            l && l.l(j), j.forEach(m), _ = A(g), n = b(g, "DIV", {
                class: !0
            });
            var D = p(n);
            i = b(D, "SPAN", {
                class: !0
            });
            var q = p(i);
            s = N(q, d), q.forEach(m), I = A(D), v = b(D, "SPAN", {
                class: !0
            });
            var w = p(v);
            S = N(w, r[1]), w.forEach(m), D.forEach(m), g.forEach(m), o.forEach(m), this.h()
        },
        h() {
            E(c, "class", "bg-zinc-800 border border-zinc-700 text-teal-300 rounded-full flex items-center justify-center p-3"), E(i, "class", "text-2xl font-semibold"), E(v, "class", "label"), E(n, "class", "flex flex-col text-right"), E(a, "class", "flex items-center justify-between"), E(t, "class", "card rounded-md p-4 shadow-sm")
        },
        m(e, o) {
            B(e, t, o), f(t, a), f(a, c), l && l.m(c, null), f(a, _), f(a, n), f(n, i), f(i, s), f(n, I), f(n, v), f(v, S), u = !0
        },
        p(e, [o]) {
            l && l.p && (!u || o & 8) && G(l, V, e, e[3], u ? J(V, e[3], o, null) : H(e[3]), null), (!u || o & 5) && d !== (d = (e[2] ? e[2].format(e[0]) : C.format(e[0])) + "") && P(s, d), (!u || o & 2) && P(S, e[1])
        },
        i(e) {
            u || (M(l, e), u = !0)
        },
        o(e) {
            O(l, e), u = !1
        },
        d(e) {
            e && m(t), l && l.d(e)
        }
    }
}

function R(r, t, a) {
    let {
        $$slots: c = {},
        $$scope: _
    } = t, {
        value: n
    } = t, {
        label: i
    } = t, {
        formatter: d = void 0
    } = t;
    return r.$$set = s => {
        "value" in s && a(0, n = s.value), "label" in s && a(1, i = s.label), "formatter" in s && a(2, d = s.formatter), "$$scope" in s && a(3, _ = s.$$scope)
    }, [n, i, d, _, c]
}
class X extends K {
    constructor(t) {
        super(), L(this, t, R, Q, F, {
            value: 0,
            label: 1,
            formatter: 2
        })
    }
}
export {
    X as S
};