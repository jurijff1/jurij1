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
    c as v,
    a as M,
    m as b,
    t as f,
    b as u,
    d as k
} from "./index.9bbe2ba6.js";
import {
    g as N,
    a as T
} from "./spread.8a54911c.js";
import {
    I as q
} from "./Icon.5bad6787.js";

function I(l) {
    let e;
    const n = l[2].default,
        s = m(n, l, l[3], null);
    return {
        c() {
            s && s.c()
        },
        l(a) {
            s && s.l(a)
        },
        m(a, t) {
            s && s.m(a, t), e = !0
        },
        p(a, t) {
            s && s.p && (!e || t & 8) && p(s, n, a, a[3], e ? g(n, a[3], t, null) : d(a[3]), null)
        },
        i(a) {
            e || (f(s, a), e = !0)
        },
        o(a) {
            u(s, a), e = !1
        },
        d(a) {
            s && s.d(a)
        }
    }
}

function S(l) {
    let e, n;
    const s = [{
        name: "ticket"
    }, l[1], {
        iconNode: l[0]
    }];
    let a = {
        $$slots: {
            default: [I]
        },
        $$scope: {
            ctx: l
        }
    };
    for (let t = 0; t < s.length; t += 1) a = r(a, s[t]);
    return e = new q({
        props: a
    }), {
        c() {
            v(e.$$.fragment)
        },
        l(t) {
            M(e.$$.fragment, t)
        },
        m(t, o) {
            b(e, t, o), n = !0
        },
        p(t, [o]) {
            const c = o & 3 ? N(s, [s[0], o & 2 && T(t[1]), o & 1 && {
                iconNode: t[0]
            }]) : {};
            o & 8 && (c.$$scope = {
                dirty: o,
                ctx: t
            }), e.$set(c)
        },
        i(t) {
            n || (f(e.$$.fragment, t), n = !0)
        },
        o(t) {
            u(e.$$.fragment, t), n = !1
        },
        d(t) {
            k(e, t)
        }
    }
}

function j(l, e, n) {
    let {
        $$slots: s = {},
        $$scope: a
    } = e;
    const t = [
        ["path", {
            d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
        }],
        ["path", {
            d: "M13 5v2"
        }],
        ["path", {
            d: "M13 17v2"
        }],
        ["path", {
            d: "M13 11v2"
        }]
    ];
    return l.$$set = o => {
        n(1, e = r(r({}, e), i(o))), "$$scope" in o && n(3, a = o.$$scope)
    }, e = i(e), [t, e, s, a]
}
class C extends $ {
    constructor(e) {
        super(), h(this, e, j, S, _, {})
    }
}
const z = C;
export {
    z as T
};