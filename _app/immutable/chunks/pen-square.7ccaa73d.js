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
    c as q,
    a as b,
    m as v,
    t as u,
    b as f,
    d as N
} from "./index.9bbe2ba6.js";
import {
    g as E,
    a as I
} from "./spread.8a54911c.js";
import {
    I as M
} from "./Icon.5bad6787.js";

function S(l) {
    let e;
    const a = l[2].default,
        n = m(a, l, l[3], null);
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
            n && n.p && (!e || t & 8) && p(n, a, s, s[3], e ? g(a, s[3], t, null) : d(s[3]), null)
        },
        i(s) {
            e || (u(n, s), e = !0)
        },
        o(s) {
            f(n, s), e = !1
        },
        d(s) {
            n && n.d(s)
        }
    }
}

function j(l) {
    let e, a;
    const n = [{
        name: "pen-square"
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
            q(e.$$.fragment)
        },
        l(t) {
            b(e.$$.fragment, t)
        },
        m(t, o) {
            v(e, t, o), a = !0
        },
        p(t, [o]) {
            const c = o & 3 ? E(n, [n[0], o & 2 && I(t[1]), o & 1 && {
                iconNode: t[0]
            }]) : {};
            o & 8 && (c.$$scope = {
                dirty: o,
                ctx: t
            }), e.$set(c)
        },
        i(t) {
            a || (u(e.$$.fragment, t), a = !0)
        },
        o(t) {
            f(e.$$.fragment, t), a = !1
        },
        d(t) {
            N(e, t)
        }
    }
}

function C(l, e, a) {
    let {
        $$slots: n = {},
        $$scope: s
    } = e;
    const t = [
        ["path", {
            d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
        }],
        ["path", {
            d: "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"
        }]
    ];
    return l.$$set = o => {
        a(1, e = r(r({}, e), i(o))), "$$scope" in o && a(3, s = o.$$scope)
    }, e = i(e), [t, e, n, s]
}
class H extends $ {
    constructor(e) {
        super(), h(this, e, C, j, _, {})
    }
}
const w = H;
export {
    w as E
};