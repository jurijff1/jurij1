import {
    s as _,
    w as l,
    x as i,
    p as m,
    u as p,
    q as d,
    r as g
} from "./scheduler.c64253f0.js";
import {
    S as $,
    i as h,
    c as b,
    a as k,
    m as M,
    t as f,
    b as u,
    d as N
} from "./index.9bbe2ba6.js";
import {
    g as R,
    a as q
} from "./spread.8a54911c.js";
import {
    I as v
} from "./Icon.5bad6787.js";

function z(c) {
    let e;
    const n = c[2].default,
        o = m(n, c, c[3], null);
    return {
        c() {
            o && o.c()
        },
        l(s) {
            o && o.l(s)
        },
        m(s, t) {
            o && o.m(s, t), e = !0
        },
        p(s, t) {
            o && o.p && (!e || t & 8) && p(o, n, s, s[3], e ? g(n, s[3], t, null) : d(s[3]), null)
        },
        i(s) {
            e || (f(o, s), e = !0)
        },
        o(s) {
            u(o, s), e = !1
        },
        d(s) {
            o && o.d(s)
        }
    }
}

function I(c) {
    let e, n;
    const o = [{
        name: "rocket"
    }, c[1], {
        iconNode: c[0]
    }];
    let s = {
        $$slots: {
            default: [z]
        },
        $$scope: {
            ctx: c
        }
    };
    for (let t = 0; t < o.length; t += 1) s = l(s, o[t]);
    return e = new v({
        props: s
    }), {
        c() {
            b(e.$$.fragment)
        },
        l(t) {
            k(e.$$.fragment, t)
        },
        m(t, a) {
            M(e, t, a), n = !0
        },
        p(t, [a]) {
            const r = a & 3 ? R(o, [o[0], a & 2 && q(t[1]), a & 1 && {
                iconNode: t[0]
            }]) : {};
            a & 8 && (r.$$scope = {
                dirty: a,
                ctx: t
            }), e.$set(r)
        },
        i(t) {
            n || (f(e.$$.fragment, t), n = !0)
        },
        o(t) {
            u(e.$$.fragment, t), n = !1
        },
        d(t) {
            N(e, t)
        }
    }
}

function S(c, e, n) {
    let {
        $$slots: o = {},
        $$scope: s
    } = e;
    const t = [
        ["path", {
            d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
        }],
        ["path", {
            d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
        }],
        ["path", {
            d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"
        }],
        ["path", {
            d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"
        }]
    ];
    return c.$$set = a => {
        n(1, e = l(l({}, e), i(a))), "$$scope" in a && n(3, s = a.$$scope)
    }, e = i(e), [t, e, o, s]
}
class j extends $ {
    constructor(e) {
        super(), h(this, e, S, I, _, {})
    }
}
const B = j;
export {
    B as R
};