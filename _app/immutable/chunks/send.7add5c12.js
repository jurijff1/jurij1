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
    c as S,
    a as b,
    m as N,
    t as f,
    b as u,
    d as q
} from "./index.9bbe2ba6.js";
import {
    g as I,
    a as j
} from "./spread.8a54911c.js";
import {
    I as v
} from "./Icon.5bad6787.js";

function C(l) {
    let e;
    const o = l[2].default,
        s = m(o, l, l[3], null);
    return {
        c() {
            s && s.c()
        },
        l(n) {
            s && s.l(n)
        },
        m(n, t) {
            s && s.m(n, t), e = !0
        },
        p(n, t) {
            s && s.p && (!e || t & 8) && p(s, o, n, n[3], e ? g(o, n[3], t, null) : d(n[3]), null)
        },
        i(n) {
            e || (f(s, n), e = !0)
        },
        o(n) {
            u(s, n), e = !1
        },
        d(n) {
            s && s.d(n)
        }
    }
}

function M(l) {
    let e, o;
    const s = [{
        name: "send"
    }, l[1], {
        iconNode: l[0]
    }];
    let n = {
        $$slots: {
            default: [C]
        },
        $$scope: {
            ctx: l
        }
    };
    for (let t = 0; t < s.length; t += 1) n = r(n, s[t]);
    return e = new v({
        props: n
    }), {
        c() {
            S(e.$$.fragment)
        },
        l(t) {
            b(e.$$.fragment, t)
        },
        m(t, a) {
            N(e, t, a), o = !0
        },
        p(t, [a]) {
            const c = a & 3 ? I(s, [s[0], a & 2 && j(t[1]), a & 1 && {
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

function Z(l, e, o) {
    let {
        $$slots: s = {},
        $$scope: n
    } = e;
    const t = [
        ["path", {
            d: "m22 2-7 20-4-9-9-4Z"
        }],
        ["path", {
            d: "M22 2 11 13"
        }]
    ];
    return l.$$set = a => {
        o(1, e = r(r({}, e), i(a))), "$$scope" in a && o(3, n = a.$$scope)
    }, e = i(e), [t, e, s, n]
}
class k extends $ {
    constructor(e) {
        super(), h(this, e, Z, M, _, {})
    }
}
const D = k;
export {
    D as S
};