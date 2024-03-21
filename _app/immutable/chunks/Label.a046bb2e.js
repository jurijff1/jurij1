import {
    s as K,
    E as h,
    l as p,
    h as b,
    C as k,
    w as g,
    x as C,
    B as M,
    p as L,
    u as E,
    q,
    r as B,
    e as N,
    d as P,
    f as j,
    K as y
} from "./scheduler.c64253f0.js";
import {
    S as z,
    i as D,
    g as F,
    b as d,
    e as G,
    t as m
} from "./index.9bbe2ba6.js";
import {
    g as H
} from "./spread.8a54911c.js";
import {
    t as I
} from "./bundle-mjs.290c8c95.js";

function J(o) {
    let e;
    const l = o[7].default,
        a = L(l, o, o[6], null);
    return {
        c() {
            a && a.c()
        },
        l(t) {
            a && a.l(t)
        },
        m(t, i) {
            a && a.m(t, i), e = !0
        },
        p(t, i) {
            a && a.p && (!e || i & 64) && E(a, l, t, t[6], e ? B(l, t[6], i, null) : q(t[6]), null)
        },
        i(t) {
            e || (m(a, t), e = !0)
        },
        o(t) {
            d(a, t), e = !1
        },
        d(t) {
            a && a.d(t)
        }
    }
}

function O(o) {
    let e, l;
    const a = o[7].default,
        t = L(a, o, o[6], null);
    let i = [o[3], {
            class: o[2]
        }],
        u = {};
    for (let r = 0; r < i.length; r += 1) u = g(u, i[r]);
    return {
        c() {
            e = N("label"), t && t.c(), this.h()
        },
        l(r) {
            e = P(r, "LABEL", {
                class: !0
            });
            var s = j(e);
            t && t.l(s), s.forEach(b), this.h()
        },
        h() {
            y(e, u)
        },
        m(r, s) {
            p(r, e, s), t && t.m(e, null), o[8](e), l = !0
        },
        p(r, s) {
            t && t.p && (!l || s & 64) && E(t, a, r, r[6], l ? B(a, r[6], s, null) : q(r[6]), null), y(e, u = H(i, [s & 8 && r[3], (!l || s & 4) && {
                class: r[2]
            }]))
        },
        i(r) {
            l || (m(t, r), l = !0)
        },
        o(r) {
            d(t, r), l = !1
        },
        d(r) {
            r && b(e), t && t.d(r), o[8](null)
        }
    }
}

function Q(o) {
    let e, l, a, t;
    const i = [O, J],
        u = [];

    function r(s, f) {
        return s[0] ? 0 : 1
    }
    return e = r(o), l = u[e] = i[e](o), {
        c() {
            l.c(), a = h()
        },
        l(s) {
            l.l(s), a = h()
        },
        m(s, f) {
            u[e].m(s, f), p(s, a, f), t = !0
        },
        p(s, [f]) {
            let c = e;
            e = r(s), e === c ? u[e].p(s, f) : (F(), d(u[c], 1, 1, () => {
                u[c] = null
            }), G(), l = u[e], l ? l.p(s, f) : (l = u[e] = i[e](s), l.c()), m(l, 1), l.m(a.parentNode, a))
        },
        i(s) {
            t || (m(l), t = !0)
        },
        o(s) {
            d(l), t = !1
        },
        d(s) {
            s && b(a), u[e].d(s)
        }
    }
}

function R(o, e, l) {
    let a;
    const t = ["color", "defaultClass", "show"];
    let i = k(e, t),
        {
            $$slots: u = {},
            $$scope: r
        } = e,
        {
            color: s = "gray"
        } = e,
        {
            defaultClass: f = "text-sm rtl:text-right font-medium block"
        } = e,
        {
            show: c = !0
        } = e,
        _;
    const S = {
        gray: "text-gray-900 dark:text-gray-300",
        green: "text-green-700 dark:text-green-500",
        red: "text-red-700 dark:text-red-500",
        disabled: "text-gray-400 dark:text-gray-500"
    };

    function A(n) {
        M[n ? "unshift" : "push"](() => {
            _ = n, l(1, _)
        })
    }
    return o.$$set = n => {
        l(10, e = g(g({}, e), C(n))), l(3, i = k(e, t)), "color" in n && l(4, s = n.color), "defaultClass" in n && l(5, f = n.defaultClass), "show" in n && l(0, c = n.show), "$$scope" in n && l(6, r = n.$$scope)
    }, o.$$.update = () => {
        if (o.$$.dirty & 18) {
            const n = _ == null ? void 0 : _.control;
            l(4, s = n != null && n.disabled ? "disabled" : s)
        }
        l(2, a = I(f, S[s], e.class))
    }, e = C(e), [c, _, a, i, s, f, r, u, A]
}
class X extends z {
    constructor(e) {
        super(), D(this, e, R, Q, K, {
            color: 4,
            defaultClass: 5,
            show: 0
        })
    }
}
export {
    X as L
};