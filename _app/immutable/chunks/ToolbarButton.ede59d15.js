import {
    s as R,
    E as C,
    l as b,
    h as _,
    C as N,
    X as V,
    w as m,
    x as T,
    D as W,
    p as B,
    e as y,
    a as j,
    d as z,
    f as S,
    c as D,
    K as k,
    m as E,
    z as Y,
    u as K,
    q as M,
    r as O,
    t as U,
    i as X,
    j as F,
    n as G
} from "./scheduler.c64253f0.js";
import {
    S as Z,
    i as x,
    g as $,
    b as v,
    e as ee,
    t as p
} from "./index.9bbe2ba6.js";
import {
    g as H
} from "./spread.8a54911c.js";
import {
    t as re
} from "./bundle-mjs.290c8c95.js";
const te = r => ({
        svgSize: r & 4
    }),
    A = r => ({
        svgSize: r[5][r[2]]
    }),
    ae = r => ({
        svgSize: r & 4
    }),
    P = r => ({
        svgSize: r[5][r[2]]
    });

function le(r) {
    let e, t, o, a, f, c, s = r[0] && q(r);
    const i = r[9].default,
        u = B(i, r, r[8], A);
    let l = [{
            type: "button"
        }, r[6], {
            class: r[4]
        }, {
            "aria-label": o = r[1] ? ? r[0]
        }],
        g = {};
    for (let n = 0; n < l.length; n += 1) g = m(g, l[n]);
    return {
        c() {
            e = y("button"), s && s.c(), t = j(), u && u.c(), this.h()
        },
        l(n) {
            e = z(n, "BUTTON", {
                type: !0,
                class: !0,
                "aria-label": !0
            });
            var d = S(e);
            s && s.l(d), t = D(d), u && u.l(d), d.forEach(_), this.h()
        },
        h() {
            k(e, g)
        },
        m(n, d) {
            b(n, e, d), s && s.m(e, null), E(e, t), u && u.m(e, null), e.autofocus && e.focus(), a = !0, f || (c = Y(e, "click", r[10]), f = !0)
        },
        p(n, d) {
            n[0] ? s ? s.p(n, d) : (s = q(n), s.c(), s.m(e, t)) : s && (s.d(1), s = null), u && u.p && (!a || d & 260) && K(u, i, n, n[8], a ? O(i, n[8], d, te) : M(n[8]), A), k(e, g = H(l, [{
                type: "button"
            }, d & 64 && n[6], (!a || d & 16) && {
                class: n[4]
            }, (!a || d & 3 && o !== (o = n[1] ? ? n[0])) && {
                "aria-label": o
            }]))
        },
        i(n) {
            a || (p(u, n), a = !0)
        },
        o(n) {
            v(u, n), a = !1
        },
        d(n) {
            n && _(e), s && s.d(), u && u.d(n), f = !1, c()
        }
    }
}

function oe(r) {
    let e, t, o, a, f = r[0] && w(r);
    const c = r[9].default,
        s = B(c, r, r[8], P);
    let i = [{
            href: r[3]
        }, r[6], {
            class: r[4]
        }, {
            "aria-label": o = r[1] ? ? r[0]
        }],
        u = {};
    for (let l = 0; l < i.length; l += 1) u = m(u, i[l]);
    return {
        c() {
            e = y("a"), f && f.c(), t = j(), s && s.c(), this.h()
        },
        l(l) {
            e = z(l, "A", {
                href: !0,
                class: !0,
                "aria-label": !0
            });
            var g = S(e);
            f && f.l(g), t = D(g), s && s.l(g), g.forEach(_), this.h()
        },
        h() {
            k(e, u)
        },
        m(l, g) {
            b(l, e, g), f && f.m(e, null), E(e, t), s && s.m(e, null), a = !0
        },
        p(l, g) {
            l[0] ? f ? f.p(l, g) : (f = w(l), f.c(), f.m(e, t)) : f && (f.d(1), f = null), s && s.p && (!a || g & 260) && K(s, c, l, l[8], a ? O(c, l[8], g, ae) : M(l[8]), P), k(e, u = H(i, [(!a || g & 8) && {
                href: l[3]
            }, g & 64 && l[6], (!a || g & 16) && {
                class: l[4]
            }, (!a || g & 3 && o !== (o = l[1] ? ? l[0])) && {
                "aria-label": o
            }]))
        },
        i(l) {
            a || (p(s, l), a = !0)
        },
        o(l) {
            v(s, l), a = !1
        },
        d(l) {
            l && _(e), f && f.d(), s && s.d(l)
        }
    }
}

function q(r) {
    let e, t;
    return {
        c() {
            e = y("span"), t = U(r[0]), this.h()
        },
        l(o) {
            e = z(o, "SPAN", {
                class: !0
            });
            var a = S(e);
            t = X(a, r[0]), a.forEach(_), this.h()
        },
        h() {
            F(e, "class", "sr-only")
        },
        m(o, a) {
            b(o, e, a), E(e, t)
        },
        p(o, a) {
            a & 1 && G(t, o[0])
        },
        d(o) {
            o && _(e)
        }
    }
}

function w(r) {
    let e, t;
    return {
        c() {
            e = y("span"), t = U(r[0]), this.h()
        },
        l(o) {
            e = z(o, "SPAN", {
                class: !0
            });
            var a = S(e);
            t = X(a, r[0]), a.forEach(_), this.h()
        },
        h() {
            F(e, "class", "sr-only")
        },
        m(o, a) {
            b(o, e, a), E(e, t)
        },
        p(o, a) {
            a & 1 && G(t, o[0])
        },
        d(o) {
            o && _(e)
        }
    }
}

function se(r) {
    let e, t, o, a;
    const f = [oe, le],
        c = [];

    function s(i, u) {
        return i[3] ? 0 : 1
    }
    return e = s(r), t = c[e] = f[e](r), {
        c() {
            t.c(), o = C()
        },
        l(i) {
            t.l(i), o = C()
        },
        m(i, u) {
            c[e].m(i, u), b(i, o, u), a = !0
        },
        p(i, [u]) {
            let l = e;
            e = s(i), e === l ? c[e].p(i, u) : ($(), v(c[l], 1, 1, () => {
                c[l] = null
            }), ee(), t = c[e], t ? t.p(i, u) : (t = c[e] = f[e](i), t.c()), p(t, 1), t.m(o.parentNode, o))
        },
        i(i) {
            a || (p(t), a = !0)
        },
        o(i) {
            v(t), a = !1
        },
        d(i) {
            i && _(o), c[e].d(i)
        }
    }
}

function ie(r, e, t) {
    const o = ["color", "name", "ariaLabel", "size", "href"];
    let a = N(e, o),
        {
            $$slots: f = {},
            $$scope: c
        } = e;
    const s = V("background");
    let {
        color: i = "default"
    } = e, {
        name: u = void 0
    } = e, {
        ariaLabel: l = void 0
    } = e, {
        size: g = "md"
    } = e, {
        href: n = void 0
    } = e;
    const d = {
            dark: "text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",
            gray: "text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300",
            red: "text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-800 dark:hover:text-red-300",
            yellow: "text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-300",
            green: "text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-800 dark:hover:text-green-300",
            indigo: "text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-300",
            purple: "text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-300",
            pink: "text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-300",
            blue: "text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-300",
            primary: "text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 dark:hover:text-primary-300",
            default: "focus:ring-gray-400"
        },
        I = {
            xs: "m-0.5 rounded-sm focus:ring-1 p-0.5",
            sm: "m-0.5 rounded focus:ring-1 p-0.5",
            md: "m-0.5 rounded-lg focus:ring-2 p-1.5",
            lg: "m-0.5 rounded-lg focus:ring-2 p-2.5"
        };
    let L;
    const J = {
        xs: "w-3 h-3",
        sm: "w-3.5 h-3.5",
        md: "w-5 h-5",
        lg: "w-5 h-5"
    };

    function Q(h) {
        W.call(this, r, h)
    }
    return r.$$set = h => {
        t(14, e = m(m({}, e), T(h))), t(6, a = N(e, o)), "color" in h && t(7, i = h.color), "name" in h && t(0, u = h.name), "ariaLabel" in h && t(1, l = h.ariaLabel), "size" in h && t(2, g = h.size), "href" in h && t(3, n = h.href), "$$scope" in h && t(8, c = h.$$scope)
    }, r.$$.update = () => {
        t(4, L = re("focus:outline-none whitespace-normal", I[g], d[i], i === "default" && (s ? "hover:bg-gray-100 dark:hover:bg-gray-600" : "hover:bg-gray-100 dark:hover:bg-gray-700"), e.class))
    }, e = T(e), [u, l, g, n, L, J, a, i, c, f, Q]
}
class ce extends Z {
    constructor(e) {
        super(), x(this, e, ie, se, R, {
            color: 7,
            name: 0,
            ariaLabel: 1,
            size: 2,
            href: 3
        })
    }
}
export {
    ce as T
};