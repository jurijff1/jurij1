import {
    s as R,
    C,
    W as V,
    X as Y,
    w as b,
    x as S,
    p as Z,
    e as v,
    a as w,
    d as x,
    c as $,
    K as q,
    l as L,
    S as ee,
    z as c,
    A as ne,
    u as le,
    q as se,
    r as ae,
    h as O,
    O as te,
    D as f
} from "./scheduler.c64253f0.js";
import {
    S as ue,
    i as re,
    c as oe,
    a as ie,
    m as ce,
    t as A,
    b as D,
    d as fe
} from "./index.9bbe2ba6.js";
import {
    g as ge
} from "./spread.8a54911c.js";
import {
    t as k
} from "./bundle-mjs.290c8c95.js";
import {
    L as de
} from "./Label.a046bb2e.js";
const me = {
        primary: "text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600",
        secondary: "text-secondary-600 focus:ring-secondary-500 dark:focus:ring-secondary-600",
        red: "text-red-600 focus:ring-red-500 dark:focus:ring-red-600",
        green: "text-green-600 focus:ring-green-500 dark:focus:ring-green-600",
        purple: "text-purple-600 focus:ring-purple-500 dark:focus:ring-purple-600",
        teal: "text-teal-600 focus:ring-teal-500 dark:focus:ring-teal-600",
        yellow: "text-yellow-400 focus:ring-yellow-500 dark:focus:ring-yellow-600",
        orange: "text-orange-500 focus:ring-orange-500 dark:focus:ring-orange-600",
        blue: "text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600"
    },
    P = (n, e) => k(n ? "inline-flex" : "flex", "items-center", e);
let he = "me-2";
const z = (n, e, a, t, o) => k("w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2", he, t ? "dark:bg-gray-600 dark:border-gray-500" : "dark:bg-gray-700 dark:border-gray-600", n && "sr-only peer", a && "rounded", me[e], o);

function _e(n) {
    let e, a, t, o, i, d, _, m = [{
            type: "checkbox"
        }, {
            __value: n[5]
        }, n[12], {
            class: a = k(n[6], z(n[3], n[2], !0, n[7], n[11].default || n[10].class))
        }],
        g = {};
    for (let s = 0; s < m.length; s += 1) g = b(g, m[s]);
    const h = n[13].default,
        r = Z(h, n, n[26], null);
    return {
        c() {
            e = v("input"), o = w(), r && r.c(), this.h()
        },
        l(s) {
            e = x(s, "INPUT", {
                type: !0,
                class: !0
            }), o = $(s), r && r.l(s), this.h()
        },
        h() {
            q(e, g)
        },
        m(s, u) {
            L(s, e, u), e.autofocus && e.focus(), e.checked = n[1], L(s, o, u), r && r.m(s, u), i = !0, d || (_ = [ee(t = n[8].call(null, e, n[0])), c(e, "change", n[25]), c(e, "keyup", n[14]), c(e, "keydown", n[15]), c(e, "keypress", n[16]), c(e, "focus", n[17]), c(e, "blur", n[18]), c(e, "click", n[19]), c(e, "mouseover", n[20]), c(e, "mouseenter", n[21]), c(e, "mouseleave", n[22]), c(e, "paste", n[23]), c(e, "change", n[9]), c(e, "change", n[24])], d = !0)
        },
        p(s, u) {
            q(e, g = ge(m, [{
                type: "checkbox"
            }, (!i || u & 32) && {
                __value: s[5]
            }, u & 4096 && s[12], (!i || u & 3148 && a !== (a = k(s[6], z(s[3], s[2], !0, s[7], s[11].default || s[10].class)))) && {
                class: a
            }])), t && ne(t.update) && u & 1 && t.update.call(null, s[0]), u & 2 && (e.checked = s[1]), r && r.p && (!i || u & 67108864) && le(r, h, s, s[26], i ? ae(h, s[26], u, null) : se(s[26]), null)
        },
        i(s) {
            i || (A(r, s), i = !0)
        },
        o(s) {
            D(r, s), i = !1
        },
        d(s) {
            s && (O(e), O(o)), r && r.d(s), d = !1, te(_)
        }
    }
}

function ke(n) {
    let e, a;
    return e = new de({
        props: {
            class: P(n[4], n[10].class),
            show: n[11].default,
            $$slots: {
                default: [_e]
            },
            $$scope: {
                ctx: n
            }
        }
    }), {
        c() {
            oe(e.$$.fragment)
        },
        l(t) {
            ie(e.$$.fragment, t)
        },
        m(t, o) {
            ce(e, t, o), a = !0
        },
        p(t, [o]) {
            const i = {};
            o & 1040 && (i.class = P(t[4], t[10].class)), o & 2048 && (i.show = t[11].default), o & 67116143 && (i.$$scope = {
                dirty: o,
                ctx: t
            }), e.$set(i)
        },
        i(t) {
            a || (A(e.$$.fragment, t), a = !0)
        },
        o(t) {
            D(e.$$.fragment, t), a = !1
        },
        d(t) {
            fe(e, t)
        }
    }
}

function be(n, e, a) {
    const t = ["color", "custom", "inline", "group", "value", "checked", "spacing"];
    let o = C(e, t),
        {
            $$slots: i = {},
            $$scope: d
        } = e;
    const _ = V(i);
    let {
        color: m = "primary"
    } = e, {
        custom: g = !1
    } = e, {
        inline: h = !1
    } = e, {
        group: r = []
    } = e, {
        value: s = "on"
    } = e, {
        checked: u = void 0
    } = e, {
        spacing: p = "me-2"
    } = e, I = Y("background");

    function K(l, J) {
        return u === void 0 && a(1, u = J.includes(s)), y(), {
            update(Q) {
                a(1, u = Q.includes(s))
            }
        }
    }

    function y() {
        const l = r.indexOf(s);
        u === void 0 && a(1, u = l >= 0), u ? l < 0 && (r.push(s), a(0, r)) : l >= 0 && (r.splice(l, 1), a(0, r))
    }

    function M(l) {
        f.call(this, n, l)
    }

    function N(l) {
        f.call(this, n, l)
    }

    function T(l) {
        f.call(this, n, l)
    }

    function U(l) {
        f.call(this, n, l)
    }

    function W(l) {
        f.call(this, n, l)
    }

    function X(l) {
        f.call(this, n, l)
    }

    function j(l) {
        f.call(this, n, l)
    }

    function B(l) {
        f.call(this, n, l)
    }

    function E(l) {
        f.call(this, n, l)
    }

    function F(l) {
        f.call(this, n, l)
    }

    function G(l) {
        f.call(this, n, l)
    }

    function H() {
        u = this.checked, a(1, u)
    }
    return n.$$set = l => {
        a(10, e = b(b({}, e), S(l))), a(12, o = C(e, t)), "color" in l && a(2, m = l.color), "custom" in l && a(3, g = l.custom), "inline" in l && a(4, h = l.inline), "group" in l && a(0, r = l.group), "value" in l && a(5, s = l.value), "checked" in l && a(1, u = l.checked), "spacing" in l && a(6, p = l.spacing), "$$scope" in l && a(26, d = l.$$scope)
    }, e = S(e), [r, u, m, g, h, s, p, I, K, y, e, _, o, i, M, N, T, U, W, X, j, B, E, F, G, H, d]
}
class Le extends ue {
    constructor(e) {
        super(), re(this, e, be, ke, R, {
            color: 2,
            custom: 3,
            inline: 4,
            group: 0,
            value: 5,
            checked: 1,
            spacing: 6
        })
    }
}
export {
    Le as C
};