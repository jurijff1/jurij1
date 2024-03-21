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
    S as h,
    i as $,
    c as b,
    a as v,
    m as M,
    t as f,
    b as u,
    d as N
} from "./index.9bbe2ba6.js";
import {
    g as T,
    a as q
} from "./spread.8a54911c.js";
import {
    I
} from "./Icon.5bad6787.js";

function S(r) {
    let e;
    const o = r[2].default,
        n = m(o, r, r[3], null);
    return {
        c() {
            n && n.c()
        },
        l(s) {
            n && n.l(s)
        },
        m(s, t) {
            n && n.m(s, t), e = !0
        },
        p(s, t) {
            n && n.p && (!e || t & 8) && p(n, o, s, s[3], e ? g(o, s[3], t, null) : d(s[3]), null)
        },
        i(s) {
            e || (f(n, s), e = !0)
        },
        o(s) {
            u(n, s), e = !1
        },
        d(s) {
            n && n.d(s)
        }
    }
}

function V(r) {
    let e, o;
    const n = [{
        name: "trash"
    }, r[1], {
        iconNode: r[0]
    }];
    let s = {
        $$slots: {
            default: [S]
        },
        $$scope: {
            ctx: r
        }
    };
    for (let t = 0; t < n.length; t += 1) s = l(s, n[t]);
    return e = new I({
        props: s
    }), {
        c() {
            b(e.$$.fragment)
        },
        l(t) {
            v(e.$$.fragment, t)
        },
        m(t, a) {
            M(e, t, a), o = !0
        },
        p(t, [a]) {
            const c = a & 3 ? T(n, [n[0], a & 2 && q(t[1]), a & 1 && {
                iconNode: t[0]
            }]) : {};
            a & 8 && (c.$$scope = {
                dirty: a,
                ctx: t
            }), e.$set(c)
        },
        i(t) {
            o || (f(e.$$.fragment, t), o = !0)
        },
        o(t) {
            u(e.$$.fragment, t), o = !1
        },
        d(t) {
            N(e, t)
        }
    }
}

function j(r, e, o) {
    let {
        $$slots: n = {},
        $$scope: s
    } = e;
    const t = [
        ["path", {
            d: "M3 6h18"
        }],
        ["path", {
            d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
        }],
        ["path", {
            d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
        }]
    ];
    return r.$$set = a => {
        o(1, e = l(l({}, e), i(a))), "$$scope" in a && o(3, s = a.$$scope)
    }, e = i(e), [t, e, n, s]
}
class C extends h {
    constructor(e) {
        super(), $(this, e, j, V, _, {})
    }
}
const A = C;
export {
    A as T
};