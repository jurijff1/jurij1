import {
    s as F,
    w as u,
    C as p,
    x as c,
    D as M,
    p as w,
    a as N,
    E as k,
    c as P,
    l as _,
    u as C,
    q as v,
    r as B,
    h as y,
    A as R
} from "./scheduler.c64253f0.js";
import {
    S as G,
    i as H,
    c as j,
    a as q,
    m as z,
    t as d,
    b,
    d as S,
    g as I,
    e as J
} from "./index.9bbe2ba6.js";
import {
    g as K,
    a as L
} from "./spread.8a54911c.js";
import {
    T as O
} from "./TransitionFrame.1049a54b.js";
import {
    t as Q
} from "./bundle-mjs.290c8c95.js";
import {
    C as U
} from "./CloseButton.1b14ac1f.js";
const V = a => ({
        close: a & 8192
    }),
    h = a => ({
        close: a[13]
    });

function x(a) {
    let r;
    const n = a[5]["close-button"],
        s = w(n, a, a[7], h),
        l = s || W(a);
    return {
        c() {
            l && l.c()
        },
        l(e) {
            l && l.l(e)
        },
        m(e, t) {
            l && l.m(e, t), r = !0
        },
        p(e, t) {
            s ? s.p && (!r || t & 8320) && C(s, n, e, e[7], r ? B(n, e[7], t, V) : v(e[7]), h) : l && l.p && (!r || t & 8195) && l.p(e, r ? t : -1)
        },
        i(e) {
            r || (d(l, e), r = !0)
        },
        o(e) {
            b(l, e), r = !1
        },
        d(e) {
            l && l.d(e)
        }
    }
}

function W(a) {
    let r, n;
    return r = new U({
        props: {
            color: a[0],
            size: a[1] ? "sm" : "xs",
            name: "Remove badge",
            class: "ms-1.5 -me-1.5"
        }
    }), r.$on("click", function() {
        R(a[13]) && a[13].apply(this, arguments)
    }), {
        c() {
            j(r.$$.fragment)
        },
        l(s) {
            q(r.$$.fragment, s)
        },
        m(s, l) {
            z(r, s, l), n = !0
        },
        p(s, l) {
            a = s;
            const e = {};
            l & 1 && (e.color = a[0]), l & 2 && (e.size = a[1] ? "sm" : "xs"), r.$set(e)
        },
        i(s) {
            n || (d(r.$$.fragment, s), n = !0)
        },
        o(s) {
            b(r.$$.fragment, s), n = !1
        },
        d(s) {
            S(r, s)
        }
    }
}

function X(a) {
    let r, n, s;
    const l = a[5].default,
        e = w(l, a, a[7], null);
    let t = a[2] && x(a);
    return {
        c() {
            e && e.c(), r = N(), t && t.c(), n = k()
        },
        l(o) {
            e && e.l(o), r = P(o), t && t.l(o), n = k()
        },
        m(o, i) {
            e && e.m(o, i), _(o, r, i), t && t.m(o, i), _(o, n, i), s = !0
        },
        p(o, i) {
            e && e.p && (!s || i & 128) && C(e, l, o, o[7], s ? B(l, o[7], i, null) : v(o[7]), null), o[2] ? t ? (t.p(o, i), i & 4 && d(t, 1)) : (t = x(o), t.c(), d(t, 1), t.m(n.parentNode, n)) : t && (I(), b(t, 1, 1, () => {
                t = null
            }), J())
        },
        i(o) {
            s || (d(e, o), d(t), s = !0)
        },
        o(o) {
            b(e, o), b(t), s = !1
        },
        d(o) {
            o && (y(r), y(n)), e && e.d(o), t && t.d(o)
        }
    }
}

function Y(a) {
    let r, n;
    const s = [{
        dismissable: a[2]
    }, a[4], {
        class: a[3]
    }];
    let l = {
        $$slots: {
            default: [X, ({
                close: e
            }) => ({
                13: e
            }), ({
                close: e
            }) => e ? 8192 : 0]
        },
        $$scope: {
            ctx: a
        }
    };
    for (let e = 0; e < s.length; e += 1) l = u(l, s[e]);
    return r = new O({
        props: l
    }), r.$on("close", a[6]), {
        c() {
            j(r.$$.fragment)
        },
        l(e) {
            q(r.$$.fragment, e)
        },
        m(e, t) {
            z(r, e, t), n = !0
        },
        p(e, [t]) {
            const o = t & 28 ? K(s, [t & 4 && {
                dismissable: e[2]
            }, t & 16 && L(e[4]), t & 8 && {
                class: e[3]
            }]) : {};
            t & 8327 && (o.$$scope = {
                dirty: t,
                ctx: e
            }), r.$set(o)
        },
        i(e) {
            n || (d(r.$$.fragment, e), n = !0)
        },
        o(e) {
            b(r.$$.fragment, e), n = !1
        },
        d(e) {
            S(r, e)
        }
    }
}
const Z = "font-medium inline-flex items-center justify-center px-2.5 py-0.5";

function $(a, r, n) {
    const s = ["color", "large", "dismissable"];
    let l = p(r, s),
        {
            $$slots: e = {},
            $$scope: t
        } = r,
        {
            color: o = "primary"
        } = r,
        {
            large: i = !1
        } = r,
        {
            dismissable: f = !1
        } = r;
    const T = {
            primary: "bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300",
            blue: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
            dark: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
            gray: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
            red: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
            green: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
            yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
            indigo: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
            purple: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
            pink: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
            none: ""
        },
        A = {
            primary: "bg-primary-100 text-primary-800 dark:bg-gray-700 dark:text-primary-400 border-primary-400 dark:border-primary-400",
            blue: "bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-400 border-blue-400 dark:border-blue-400",
            dark: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400 border-gray-500 dark:border-gray-500",
            red: "bg-red-100 text-red-800 dark:bg-gray-700 dark:text-red-400 border-red-400 dark:border-red-400",
            green: "bg-green-100 text-green-800 dark:bg-gray-700 dark:text-green-400 border-green-400 dark:border-green-400",
            yellow: "bg-yellow-100 text-yellow-800 dark:bg-gray-700 dark:text-yellow-300 border-yellow-300 dark:border-yellow-300",
            indigo: "bg-indigo-100 text-indigo-800 dark:bg-gray-700 dark:text-indigo-400 border-indigo-400 dark:border-indigo-400",
            purple: "bg-purple-100 text-purple-800 dark:bg-gray-700 dark:text-purple-400 border-purple-400 dark:border-purple-400",
            pink: "bg-pink-100 text-pink-800 dark:bg-gray-700 dark:text-pink-400 border-pink-400 dark:border-pink-400",
            none: ""
        },
        D = {
            primary: "hover:bg-primary-200",
            blue: "hover:bg-blue-200",
            dark: "hover:bg-gray-200",
            red: "hover:bg-red-200",
            green: "hover:bg-green-200",
            yellow: "hover:bg-yellow-200",
            indigo: "hover:bg-indigo-200",
            purple: "hover:bg-purple-200",
            pink: "hover:bg-pink-200",
            none: ""
        };
    let m;

    function E(g) {
        M.call(this, a, g)
    }
    return a.$$set = g => {
        n(12, r = u(u({}, r), c(g))), n(4, l = p(r, s)), "color" in g && n(0, o = g.color), "large" in g && n(1, i = g.large), "dismissable" in g && n(2, f = g.dismissable), "$$scope" in g && n(7, t = g.$$scope)
    }, a.$$.update = () => {
        n(3, m = Q(Z, i ? "text-sm" : "text-xs", l.border ? `border ${A[o]}` : T[o], l.href && D[o], l.rounded ? "rounded-full" : "rounded", r.class))
    }, r = c(r), [o, i, f, m, l, e, E, t]
}
class se extends G {
    constructor(r) {
        super(), H(this, r, $, Y, F, {
            color: 0,
            large: 1,
            dismissable: 2
        })
    }
}
export {
    se as B
};