import {
    s as u,
    w as r,
    x as c,
    p as m,
    u as p,
    q as g,
    r as d
} from "./scheduler.c64253f0.js";
import {
    S as $,
    i as h,
    c as b,
    a as I,
    m as L,
    t as f,
    b as _,
    d as N
} from "./index.9bbe2ba6.js";
import {
    g as q,
    a as v
} from "./spread.8a54911c.js";
import {
    I as S
} from "./Icon.5bad6787.js";

function j(l) {
    let e;
    const s = l[2].default,
        o = m(s, l, l[3], null);
    return {
        c() {
            o && o.c()
        },
        l(n) {
            o && o.l(n)
        },
        m(n, t) {
            o && o.m(n, t), e = !0
        },
        p(n, t) {
            o && o.p && (!e || t & 8) && p(o, s, n, n[3], e ? d(s, n[3], t, null) : g(n[3]), null)
        },
        i(n) {
            e || (f(o, n), e = !0)
        },
        o(n) {
            _(o, n), e = !1
        },
        d(n) {
            o && o.d(n)
        }
    }
}

function C(l) {
    let e, s;
    const o = [{
        name: "log-in"
    }, l[1], {
        iconNode: l[0]
    }];
    let n = {
        $$slots: {
            default: [j]
        },
        $$scope: {
            ctx: l
        }
    };
    for (let t = 0; t < o.length; t += 1) n = r(n, o[t]);
    return e = new S({
        props: n
    }), {
        c() {
            b(e.$$.fragment)
        },
        l(t) {
            I(e.$$.fragment, t)
        },
        m(t, a) {
            L(e, t, a), s = !0
        },
        p(t, [a]) {
            const i = a & 3 ? q(o, [o[0], a & 2 && v(t[1]), a & 1 && {
                iconNode: t[0]
            }]) : {};
            a & 8 && (i.$$scope = {
                dirty: a,
                ctx: t
            }), e.$set(i)
        },
        i(t) {
            s || (f(e.$$.fragment, t), s = !0)
        },
        o(t) {
            _(e.$$.fragment, t), s = !1
        },
        d(t) {
            N(e, t)
        }
    }
}

function M(l, e, s) {
    let {
        $$slots: o = {},
        $$scope: n
    } = e;
    const t = [
        ["path", {
            d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
        }],
        ["polyline", {
            points: "10 17 15 12 10 7"
        }],
        ["line", {
            x1: "15",
            x2: "3",
            y1: "12",
            y2: "12"
        }]
    ];
    return l.$$set = a => {
        s(1, e = r(r({}, e), c(a))), "$$scope" in a && s(3, n = a.$$scope)
    }, e = c(e), [t, e, o, n]
}
class k extends $ {
    constructor(e) {
        super(), h(this, e, M, C, u, {})
    }
}
const B = k;
export {
    B as L
};