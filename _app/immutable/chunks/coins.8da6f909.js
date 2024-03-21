import {
    s as _,
    w as r,
    x as i,
    p as m,
    u as p,
    q as d,
    r as g
} from "./scheduler.c64253f0.js";
import {
    S as $,
    i as h,
    c as C,
    a as b,
    m as N,
    t as f,
    b as u,
    d as q
} from "./index.9bbe2ba6.js";
import {
    g as v,
    a as I
} from "./spread.8a54911c.js";
import {
    I as M
} from "./Icon.5bad6787.js";

function S(l) {
    let e;
    const o = l[2].default,
        n = m(o, l, l[3], null);
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

function j(l) {
    let e, o;
    const n = [{
        name: "coins"
    }, l[1], {
        iconNode: l[0]
    }];
    let s = {
        $$slots: {
            default: [S]
        },
        $$scope: {
            ctx: l
        }
    };
    for (let t = 0; t < n.length; t += 1) s = r(s, n[t]);
    return e = new M({
        props: s
    }), {
        c() {
            C(e.$$.fragment)
        },
        l(t) {
            b(e.$$.fragment, t)
        },
        m(t, a) {
            N(e, t, a), o = !0
        },
        p(t, [a]) {
            const c = a & 3 ? v(n, [n[0], a & 2 && I(t[1]), a & 1 && {
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
            q(e, t)
        }
    }
}

function A(l, e, o) {
    let {
        $$slots: n = {},
        $$scope: s
    } = e;
    const t = [
        ["circle", {
            cx: "8",
            cy: "8",
            r: "6"
        }],
        ["path", {
            d: "M18.09 10.37A6 6 0 1 1 10.34 18"
        }],
        ["path", {
            d: "M7 6h1v4"
        }],
        ["path", {
            d: "m16.71 13.88.7.71-2.82 2.82"
        }]
    ];
    return l.$$set = a => {
        o(1, e = r(r({}, e), i(a))), "$$scope" in a && o(3, s = a.$$scope)
    }, e = i(e), [t, e, n, s]
}
class k extends $ {
    constructor(e) {
        super(), h(this, e, A, j, _, {})
    }
}
const E = k;
export {
    E as C
};