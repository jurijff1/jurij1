import {
    s as A,
    p as D,
    w as _,
    b as j,
    E as k,
    g as w,
    f as B,
    h as g,
    a6 as v,
    l as N,
    m as F,
    u as G,
    q as H,
    r as J,
    N as K,
    C as S,
    x as z
} from "./scheduler.c64253f0.js";
import {
    S as L,
    i as M,
    t as O,
    b as Q
} from "./index.9bbe2ba6.js";
import {
    g as P
} from "./spread.8a54911c.js";

function C(n) {
    return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n)
}
const E = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": 2,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
};

function I(n, e, i) {
    const s = n.slice();
    return s[10] = e[i][0], s[11] = e[i][1], s
}

function b(n) {
    let e, i = [n[11]],
        s = {};
    for (let l = 0; l < i.length; l += 1) s = _(s, i[l]);
    return {
        c() {
            e = j(n[10]), this.h()
        },
        l(l) {
            e = w(l, n[10], {}), B(e).forEach(g), this.h()
        },
        h() {
            v(e, s)
        },
        m(l, u) {
            N(l, e, u)
        },
        p(l, u) {
            v(e, s = P(i, [u & 32 && l[11]]))
        },
        d(l) {
            l && g(e)
        }
    }
}

function q(n) {
    let e = n[10],
        i, s = n[10] && b(n);
    return {
        c() {
            s && s.c(), i = k()
        },
        l(l) {
            s && s.l(l), i = k()
        },
        m(l, u) {
            s && s.m(l, u), N(l, i, u)
        },
        p(l, u) {
            l[10] ? e ? A(e, l[10]) ? (s.d(1), s = b(l), e = l[10], s.c(), s.m(i.parentNode, i)) : s.p(l, u) : (s = b(l), e = l[10], s.c(), s.m(i.parentNode, i)) : e && (s.d(1), s = null, e = l[10])
        },
        d(l) {
            l && g(i), s && s.d(l)
        }
    }
}

function R(n) {
    let e, i, s, l, u, r = C(n[5]),
        a = [];
    for (let t = 0; t < r.length; t += 1) a[t] = q(I(n, r, t));
    const c = n[9].default,
        f = D(c, n, n[8], null);
    let m = [E, n[6], {
            width: n[2]
        }, {
            height: n[2]
        }, {
            stroke: n[1]
        }, {
            "stroke-width": s = n[4] ? Number(n[3]) * 24 / Number(n[2]) : n[3]
        }, {
            class: l = `lucide-icon lucide lucide-${n[0]} ${n[7].class??""}`
        }],
        d = {};
    for (let t = 0; t < m.length; t += 1) d = _(d, m[t]);
    return {
        c() {
            e = j("svg");
            for (let t = 0; t < a.length; t += 1) a[t].c();
            i = k(), f && f.c(), this.h()
        },
        l(t) {
            e = w(t, "svg", {
                width: !0,
                height: !0,
                stroke: !0,
                "stroke-width": !0,
                class: !0
            });
            var o = B(e);
            for (let h = 0; h < a.length; h += 1) a[h].l(o);
            i = k(), f && f.l(o), o.forEach(g), this.h()
        },
        h() {
            v(e, d)
        },
        m(t, o) {
            N(t, e, o);
            for (let h = 0; h < a.length; h += 1) a[h] && a[h].m(e, null);
            F(e, i), f && f.m(e, null), u = !0
        },
        p(t, [o]) {
            if (o & 32) {
                r = C(t[5]);
                let h;
                for (h = 0; h < r.length; h += 1) {
                    const W = I(t, r, h);
                    a[h] ? a[h].p(W, o) : (a[h] = q(W), a[h].c(), a[h].m(e, i))
                }
                for (; h < a.length; h += 1) a[h].d(1);
                a.length = r.length
            }
            f && f.p && (!u || o & 256) && G(f, c, t, t[8], u ? J(c, t[8], o, null) : H(t[8]), null), v(e, d = P(m, [E, o & 64 && t[6], (!u || o & 4) && {
                width: t[2]
            }, (!u || o & 4) && {
                height: t[2]
            }, (!u || o & 2) && {
                stroke: t[1]
            }, (!u || o & 28 && s !== (s = t[4] ? Number(t[3]) * 24 / Number(t[2]) : t[3])) && {
                "stroke-width": s
            }, (!u || o & 129 && l !== (l = `lucide-icon lucide lucide-${t[0]} ${t[7].class??""}`)) && {
                class: l
            }]))
        },
        i(t) {
            u || (O(f, t), u = !0)
        },
        o(t) {
            Q(f, t), u = !1
        },
        d(t) {
            t && g(e), K(a, t), f && f.d(t)
        }
    }
}

function T(n, e, i) {
    const s = ["name", "color", "size", "strokeWidth", "absoluteStrokeWidth", "iconNode"];
    let l = S(e, s),
        {
            $$slots: u = {},
            $$scope: r
        } = e,
        {
            name: a
        } = e,
        {
            color: c = "currentColor"
        } = e,
        {
            size: f = 24
        } = e,
        {
            strokeWidth: m = 2
        } = e,
        {
            absoluteStrokeWidth: d = !1
        } = e,
        {
            iconNode: t
        } = e;
    return n.$$set = o => {
        i(7, e = _(_({}, e), z(o))), i(6, l = S(e, s)), "name" in o && i(0, a = o.name), "color" in o && i(1, c = o.color), "size" in o && i(2, f = o.size), "strokeWidth" in o && i(3, m = o.strokeWidth), "absoluteStrokeWidth" in o && i(4, d = o.absoluteStrokeWidth), "iconNode" in o && i(5, t = o.iconNode), "$$scope" in o && i(8, r = o.$$scope)
    }, e = z(e), [a, c, f, m, d, t, l, e, r, u]
}
class U extends L {
    constructor(e) {
        super(), M(this, e, T, R, A, {
            name: 0,
            color: 1,
            size: 2,
            strokeWidth: 3,
            absoluteStrokeWidth: 4,
            iconNode: 5
        })
    }
}
const Z = U;
export {
    Z as I, C as e
};