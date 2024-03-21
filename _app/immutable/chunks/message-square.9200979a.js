import {
    s as _,
    w as l,
    x as i,
    p as m,
    u as p,
    q as g,
    r as d
} from "./scheduler.c64253f0.js";
import {
    S as $,
    i as h,
    c as q,
    a as M,
    m as b,
    t as u,
    b as f,
    d as N
} from "./index.9bbe2ba6.js";
import {
    g as S,
    a as I
} from "./spread.8a54911c.js";
import {
    I as j
} from "./Icon.5bad6787.js";

function v(r) {
    let e;
    const n = r[2].default,
        a = m(n, r, r[3], null);
    return {
        c() {
            a && a.c()
        },
        l(s) {
            a && a.l(s)
        },
        m(s, t) {
            a && a.m(s, t), e = !0
        },
        p(s, t) {
            a && a.p && (!e || t & 8) && p(a, n, s, s[3], e ? d(n, s[3], t, null) : g(s[3]), null)
        },
        i(s) {
            e || (u(a, s), e = !0)
        },
        o(s) {
            f(a, s), e = !1
        },
        d(s) {
            a && a.d(s)
        }
    }
}

function z(r) {
    let e, n;
    const a = [{
        name: "message-square"
    }, r[1], {
        iconNode: r[0]
    }];
    let s = {
        $$slots: {
            default: [v]
        },
        $$scope: {
            ctx: r
        }
    };
    for (let t = 0; t < a.length; t += 1) s = l(s, a[t]);
    return e = new j({
        props: s
    }), {
        c() {
            q(e.$$.fragment)
        },
        l(t) {
            M(e.$$.fragment, t)
        },
        m(t, o) {
            b(e, t, o), n = !0
        },
        p(t, [o]) {
            const c = o & 3 ? S(a, [a[0], o & 2 && I(t[1]), o & 1 && {
                iconNode: t[0]
            }]) : {};
            o & 8 && (c.$$scope = {
                dirty: o,
                ctx: t
            }), e.$set(c)
        },
        i(t) {
            n || (u(e.$$.fragment, t), n = !0)
        },
        o(t) {
            f(e.$$.fragment, t), n = !1
        },
        d(t) {
            N(e, t)
        }
    }
}

function C(r, e, n) {
    let {
        $$slots: a = {},
        $$scope: s
    } = e;
    const t = [
        ["path", {
            d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
        }]
    ];
    return r.$$set = o => {
        n(1, e = l(l({}, e), i(o))), "$$scope" in o && n(3, s = o.$$scope)
    }, e = i(e), [t, e, a, s]
}
class H extends $ {
    constructor(e) {
        super(), h(this, e, C, z, _, {})
    }
}
const B = H;
export {
    B as M
};