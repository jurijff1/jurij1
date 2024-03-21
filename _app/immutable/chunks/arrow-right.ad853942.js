import {
    s as u,
    w as l,
    x as c,
    p as m,
    u as p,
    q as d,
    r as g
} from "./scheduler.c64253f0.js";
import {
    S as h,
    i as $,
    c as b,
    a as w,
    m as A,
    t as f,
    b as _,
    d as N
} from "./index.9bbe2ba6.js";
import {
    g as q,
    a as I
} from "./spread.8a54911c.js";
import {
    I as S
} from "./Icon.5bad6787.js";

function j(r) {
    let e;
    const n = r[2].default,
        s = m(n, r, r[3], null);
    return {
        c() {
            s && s.c()
        },
        l(o) {
            s && s.l(o)
        },
        m(o, t) {
            s && s.m(o, t), e = !0
        },
        p(o, t) {
            s && s.p && (!e || t & 8) && p(s, n, o, o[3], e ? g(n, o[3], t, null) : d(o[3]), null)
        },
        i(o) {
            e || (f(s, o), e = !0)
        },
        o(o) {
            _(s, o), e = !1
        },
        d(o) {
            s && s.d(o)
        }
    }
}

function v(r) {
    let e, n;
    const s = [{
        name: "arrow-right"
    }, r[1], {
        iconNode: r[0]
    }];
    let o = {
        $$slots: {
            default: [j]
        },
        $$scope: {
            ctx: r
        }
    };
    for (let t = 0; t < s.length; t += 1) o = l(o, s[t]);
    return e = new S({
        props: o
    }), {
        c() {
            b(e.$$.fragment)
        },
        l(t) {
            w(e.$$.fragment, t)
        },
        m(t, a) {
            A(e, t, a), n = !0
        },
        p(t, [a]) {
            const i = a & 3 ? q(s, [s[0], a & 2 && I(t[1]), a & 1 && {
                iconNode: t[0]
            }]) : {};
            a & 8 && (i.$$scope = {
                dirty: a,
                ctx: t
            }), e.$set(i)
        },
        i(t) {
            n || (f(e.$$.fragment, t), n = !0)
        },
        o(t) {
            _(e.$$.fragment, t), n = !1
        },
        d(t) {
            N(e, t)
        }
    }
}

function C(r, e, n) {
    let {
        $$slots: s = {},
        $$scope: o
    } = e;
    const t = [
        ["path", {
            d: "M5 12h14"
        }],
        ["path", {
            d: "m12 5 7 7-7 7"
        }]
    ];
    return r.$$set = a => {
        n(1, e = l(l({}, e), c(a))), "$$scope" in a && n(3, o = a.$$scope)
    }, e = c(e), [t, e, s, o]
}
class M extends h {
    constructor(e) {
        super(), $(this, e, C, v, u, {})
    }
}
const D = M;
export {
    D as A
};