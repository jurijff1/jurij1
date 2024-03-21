import {
    s as _,
    w as l,
    x as i,
    p,
    u as m,
    q as d,
    r as h
} from "./scheduler.c64253f0.js";
import {
    S as g,
    i as $,
    c as M,
    a as H,
    m as b,
    t as f,
    b as u,
    d as C
} from "./index.9bbe2ba6.js";
import {
    g as N,
    a as T
} from "./spread.8a54911c.js";
import {
    I as V
} from "./Icon.5bad6787.js";

function q(r) {
    let e;
    const s = r[2].default,
        a = p(s, r, r[3], null);
    return {
        c() {
            a && a.c()
        },
        l(o) {
            a && a.l(o)
        },
        m(o, t) {
            a && a.m(o, t), e = !0
        },
        p(o, t) {
            a && a.p && (!e || t & 8) && m(a, s, o, o[3], e ? h(s, o[3], t, null) : d(o[3]), null)
        },
        i(o) {
            e || (f(a, o), e = !0)
        },
        o(o) {
            u(a, o), e = !1
        },
        d(o) {
            a && a.d(o)
        }
    }
}

function v(r) {
    let e, s;
    const a = [{
        name: "trophy"
    }, r[1], {
        iconNode: r[0]
    }];
    let o = {
        $$slots: {
            default: [q]
        },
        $$scope: {
            ctx: r
        }
    };
    for (let t = 0; t < a.length; t += 1) o = l(o, a[t]);
    return e = new V({
        props: o
    }), {
        c() {
            M(e.$$.fragment)
        },
        l(t) {
            H(e.$$.fragment, t)
        },
        m(t, n) {
            b(e, t, n), s = !0
        },
        p(t, [n]) {
            const c = n & 3 ? N(a, [a[0], n & 2 && T(t[1]), n & 1 && {
                iconNode: t[0]
            }]) : {};
            n & 8 && (c.$$scope = {
                dirty: n,
                ctx: t
            }), e.$set(c)
        },
        i(t) {
            s || (f(e.$$.fragment, t), s = !0)
        },
        o(t) {
            u(e.$$.fragment, t), s = !1
        },
        d(t) {
            C(e, t)
        }
    }
}

function I(r, e, s) {
    let {
        $$slots: a = {},
        $$scope: o
    } = e;
    const t = [
        ["path", {
            d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6"
        }],
        ["path", {
            d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18"
        }],
        ["path", {
            d: "M4 22h16"
        }],
        ["path", {
            d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"
        }],
        ["path", {
            d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"
        }],
        ["path", {
            d: "M18 2H6v7a6 6 0 0 0 12 0V2Z"
        }]
    ];
    return r.$$set = n => {
        s(1, e = l(l({}, e), i(n))), "$$scope" in n && s(3, o = n.$$scope)
    }, e = i(e), [t, e, a, o]
}
class S extends g {
    constructor(e) {
        super(), $(this, e, I, v, _, {})
    }
}
const y = S;
export {
    y as T
};