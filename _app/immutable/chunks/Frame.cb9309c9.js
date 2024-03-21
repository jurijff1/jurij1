import {
    s as F,
    E as w,
    l as N,
    h as v,
    C as U,
    Y as S,
    w as h,
    x as q,
    p as H,
    e as I,
    d as J,
    f as K,
    Z as E,
    S as L,
    z as y,
    u as Q,
    q as R,
    r as T,
    A as V,
    O as W,
    D as k,
    B as X
} from "./scheduler.c64253f0.js";
import {
    S as $,
    i as ee,
    t as z,
    b as A
} from "./index.9bbe2ba6.js";
import {
    g as re
} from "./spread.8a54911c.js";
import {
    t as ae
} from "./bundle-mjs.290c8c95.js";

function c(a) {
    let e, d, l, t, o;
    const u = a[12].default,
        n = H(u, a, a[11], null);
    let b = [{
            role: a[4]
        }, a[6], {
            class: a[5]
        }],
        s = {};
    for (let i = 0; i < b.length; i += 1) s = h(s, b[i]);
    return {
        c() {
            e = I(a[1]), n && n.c(), this.h()
        },
        l(i) {
            e = J(i, (a[1] || "null").toUpperCase(), {
                role: !0,
                class: !0
            });
            var g = K(e);
            n && n.l(g), g.forEach(v), this.h()
        },
        h() {
            E(a[1])(e, s)
        },
        m(i, g) {
            N(i, e, g), n && n.m(e, null), a[18](e), l = !0, t || (o = [L(d = a[2].call(null, e, a[3])), y(e, "click", a[13]), y(e, "mouseenter", a[14]), y(e, "mouseleave", a[15]), y(e, "focusin", a[16]), y(e, "focusout", a[17])], t = !0)
        },
        p(i, g) {
            n && n.p && (!l || g & 2048) && Q(n, u, i, i[11], l ? T(u, i[11], g, null) : R(i[11]), null), E(i[1])(e, s = re(b, [(!l || g & 16) && {
                role: i[4]
            }, g & 64 && i[6], (!l || g & 32) && {
                class: i[5]
            }])), d && V(d.update) && g & 8 && d.update.call(null, i[3])
        },
        i(i) {
            l || (z(n, i), l = !0)
        },
        o(i) {
            A(n, i), l = !1
        },
        d(i) {
            i && v(e), n && n.d(i), a[18](null), t = !1, W(o)
        }
    }
}

function de(a) {
    let e = a[1],
        d, l, t = a[1] && c(a);
    return {
        c() {
            t && t.c(), d = w()
        },
        l(o) {
            t && t.l(o), d = w()
        },
        m(o, u) {
            t && t.m(o, u), N(o, d, u), l = !0
        },
        p(o, [u]) {
            o[1] ? e ? F(e, o[1]) ? (t.d(1), t = c(o), e = o[1], t.c(), t.m(d.parentNode, d)) : t.p(o, u) : (t = c(o), e = o[1], t.c(), t.m(d.parentNode, d)) : e && (t.d(1), t = null, e = o[1])
        },
        i(o) {
            l || (z(t, o), l = !0)
        },
        o(o) {
            A(t, o), l = !1
        },
        d(o) {
            o && v(d), t && t.d(o)
        }
    }
}

function te(a, e, d) {
    const l = ["tag", "color", "rounded", "border", "shadow", "node", "use", "options", "role"];
    let t = U(e, l),
        {
            $$slots: o = {},
            $$scope: u
        } = e;
    const n = () => {};
    S("background", !0);
    let {
        tag: b = t.href ? "a" : "div"
    } = e, {
        color: s = "default"
    } = e, {
        rounded: i = !1
    } = e, {
        border: g = !1
    } = e, {
        shadow: m = !1
    } = e, {
        node: f = void 0
    } = e, {
        use: _ = n
    } = e, {
        options: p = {}
    } = e, {
        role: C = void 0
    } = e;
    const B = {
            gray: "bg-gray-50 dark:bg-gray-800",
            red: "bg-red-50 dark:bg-gray-800",
            yellow: "bg-yellow-50 dark:bg-gray-800 ",
            green: "bg-green-50 dark:bg-gray-800 ",
            indigo: "bg-indigo-50 dark:bg-gray-800 ",
            purple: "bg-purple-50 dark:bg-gray-800 ",
            pink: "bg-pink-50 dark:bg-gray-800 ",
            blue: "bg-blue-50 dark:bg-gray-800 ",
            light: "bg-gray-50 dark:bg-gray-700",
            dark: "bg-gray-50 dark:bg-gray-800",
            default: "bg-white dark:bg-gray-800",
            dropdown: "bg-white dark:bg-gray-700",
            navbar: "bg-white dark:bg-gray-900",
            navbarUl: "bg-gray-50 dark:bg-gray-800",
            form: "bg-gray-50 dark:bg-gray-700",
            primary: "bg-primary-50 dark:bg-gray-800 ",
            orange: "bg-orange-50 dark:bg-orange-800",
            none: ""
        },
        D = {
            gray: "text-gray-800 dark:text-gray-300",
            red: "text-red-800 dark:text-red-400",
            yellow: "text-yellow-800 dark:text-yellow-300",
            green: "text-green-800 dark:text-green-400",
            indigo: "text-indigo-800 dark:text-indigo-400",
            purple: "text-purple-800 dark:text-purple-400",
            pink: "text-pink-800 dark:text-pink-400",
            blue: "text-blue-800 dark:text-blue-400",
            light: "text-gray-700 dark:text-gray-300",
            dark: "text-gray-700 dark:text-gray-300",
            default: "text-gray-500 dark:text-gray-400",
            dropdown: "text-gray-700 dark:text-gray-200",
            navbar: "text-gray-700 dark:text-gray-200",
            navbarUl: "text-gray-700 dark:text-gray-400",
            form: "text-gray-900 dark:text-white",
            primary: "text-primary-800 dark:text-primary-400",
            orange: "text-orange-800 dark:text-orange-400",
            none: ""
        },
        M = {
            gray: "border-gray-300 dark:border-gray-800 divide-gray-300 dark:divide-gray-800",
            red: "border-red-300 dark:border-red-800 divide-red-300 dark:divide-red-800",
            yellow: "border-yellow-300 dark:border-yellow-800 divide-yellow-300 dark:divide-yellow-800",
            green: "border-green-300 dark:border-green-800 divide-green-300 dark:divide-green-800",
            indigo: "border-indigo-300 dark:border-indigo-800 divide-indigo-300 dark:divide-indigo-800",
            purple: "border-purple-300 dark:border-purple-800 divide-purple-300 dark:divide-purple-800",
            pink: "border-pink-300 dark:border-pink-800 divide-pink-300 dark:divide-pink-800",
            blue: "border-blue-300 dark:border-blue-800 divide-blue-300 dark:divide-blue-800",
            light: "border-gray-500 divide-gray-500",
            dark: "border-gray-500 divide-gray-500",
            default: "border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700",
            dropdown: "border-gray-100 dark:border-gray-600 divide-gray-100 dark:divide-gray-600",
            navbar: "border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",
            navbarUl: "border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",
            form: "border-gray-300 dark:border-gray-700 divide-gray-300 dark:divide-gray-700",
            primary: "border-primary-500 dark:border-primary-200  divide-primary-500 dark:divide-primary-200 ",
            orange: "border-orange-300 dark:border-orange-800 divide-orange-300 dark:divide-orange-800",
            none: ""
        };
    let x;

    function O(r) {
        k.call(this, a, r)
    }

    function P(r) {
        k.call(this, a, r)
    }

    function Y(r) {
        k.call(this, a, r)
    }

    function Z(r) {
        k.call(this, a, r)
    }

    function j(r) {
        k.call(this, a, r)
    }

    function G(r) {
        X[r ? "unshift" : "push"](() => {
            f = r, d(0, f)
        })
    }
    return a.$$set = r => {
        d(23, e = h(h({}, e), q(r))), d(6, t = U(e, l)), "tag" in r && d(1, b = r.tag), "color" in r && d(7, s = r.color), "rounded" in r && d(8, i = r.rounded), "border" in r && d(9, g = r.border), "shadow" in r && d(10, m = r.shadow), "node" in r && d(0, f = r.node), "use" in r && d(2, _ = r.use), "options" in r && d(3, p = r.options), "role" in r && d(4, C = r.role), "$$scope" in r && d(11, u = r.$$scope)
    }, a.$$.update = () => {
        a.$$.dirty & 128 && d(7, s = s ? ? "default"), a.$$.dirty & 128 && S("color", s), d(5, x = ae(B[s], D[s], i && "rounded-lg", g && "border", M[s], m && "shadow-md", e.class))
    }, e = q(e), [f, b, _, p, C, x, t, s, i, g, m, u, o, O, P, Y, Z, j, G]
}
class ge extends $ {
    constructor(e) {
        super(), ee(this, e, te, de, F, {
            tag: 1,
            color: 7,
            rounded: 8,
            border: 9,
            shadow: 10,
            node: 0,
            use: 2,
            options: 3,
            role: 4
        })
    }
}
export {
    ge as F
};