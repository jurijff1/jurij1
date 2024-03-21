import {
    s as u,
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
    c as v,
    a as C,
    m as b,
    t as f,
    b as _,
    d as w
} from "./index.9bbe2ba6.js";
import {
    g as N,
    a as q
} from "./spread.8a54911c.js";
import {
    I
} from "./Icon.5bad6787.js";

function S(r) {
    let e;
    const s = r[2].default,
        o = m(s, r, r[3], null);
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
            o && o.p && (!e || t & 8) && p(o, s, n, n[3], e ? g(s, n[3], t, null) : d(n[3]), null)
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

function j(r) {
    let e, s;
    const o = [{
        name: "chevron-down"
    }, r[1], {
        iconNode: r[0]
    }];
    let n = {
        $$slots: {
            default: [S]
        },
        $$scope: {
            ctx: r
        }
    };
    for (let t = 0; t < o.length; t += 1) n = l(n, o[t]);
    return e = new I({
        props: n
    }), {
        c() {
            v(e.$$.fragment)
        },
        l(t) {
            C(e.$$.fragment, t)
        },
        m(t, a) {
            b(e, t, a), s = !0
        },
        p(t, [a]) {
            const c = a & 3 ? N(o, [o[0], a & 2 && q(t[1]), a & 1 && {
                iconNode: t[0]
            }]) : {};
            a & 8 && (c.$$scope = {
                dirty: a,
                ctx: t
            }), e.$set(c)
        },
        i(t) {
            s || (f(e.$$.fragment, t), s = !0)
        },
        o(t) {
            _(e.$$.fragment, t), s = !1
        },
        d(t) {
            w(e, t)
        }
    }
}

function D(r, e, s) {
    let {
        $$slots: o = {},
        $$scope: n
    } = e;
    const t = [
        ["path", {
            d: "m6 9 6 6 6-6"
        }]
    ];
    return r.$$set = a => {
        s(1, e = l(l({}, e), i(a))), "$$scope" in a && s(3, n = a.$$scope)
    }, e = i(e), [t, e, o, n]
}
class k extends $ {
    constructor(e) {
        super(), h(this, e, D, j, u, {})
    }
}
const F = k;
export {
    F as C
};