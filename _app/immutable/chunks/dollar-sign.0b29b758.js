import {
    s as u,
    w as r,
    x as c,
    p as m,
    u as p,
    q as d,
    r as g
} from "./scheduler.c64253f0.js";
import {
    S as $,
    i as h,
    c as b,
    a as D,
    m as N,
    t as f,
    b as _,
    d as S
} from "./index.9bbe2ba6.js";
import {
    g as q,
    a as H
} from "./spread.8a54911c.js";
import {
    I
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

function v(l) {
    let e, s;
    const o = [{
        name: "dollar-sign"
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
    return e = new I({
        props: n
    }), {
        c() {
            b(e.$$.fragment)
        },
        l(t) {
            D(e.$$.fragment, t)
        },
        m(t, a) {
            N(e, t, a), s = !0
        },
        p(t, [a]) {
            const i = a & 3 ? q(o, [o[0], a & 2 && H(t[1]), a & 1 && {
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
            S(e, t)
        }
    }
}

function C(l, e, s) {
    let {
        $$slots: o = {},
        $$scope: n
    } = e;
    const t = [
        ["line", {
            x1: "12",
            x2: "12",
            y1: "2",
            y2: "22"
        }],
        ["path", {
            d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
        }]
    ];
    return l.$$set = a => {
        s(1, e = r(r({}, e), c(a))), "$$scope" in a && s(3, n = a.$$scope)
    }, e = c(e), [t, e, o, n]
}
class M extends $ {
    constructor(e) {
        super(), h(this, e, C, v, u, {})
    }
}
const B = M;
export {
    B as D
};