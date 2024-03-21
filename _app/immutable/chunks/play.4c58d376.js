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
    c as b,
    a as N,
    m as P,
    t as f,
    b as u,
    d as q
} from "./index.9bbe2ba6.js";
import {
    g as I,
    a as S
} from "./spread.8a54911c.js";
import {
    I as j
} from "./Icon.5bad6787.js";

function v(l) {
    let e;
    const s = l[2].default,
        n = m(s, l, l[3], null);
    return {
        c() {
            n && n.c()
        },
        l(o) {
            n && n.l(o)
        },
        m(o, t) {
            n && n.m(o, t), e = !0
        },
        p(o, t) {
            n && n.p && (!e || t & 8) && p(n, s, o, o[3], e ? g(s, o[3], t, null) : d(o[3]), null)
        },
        i(o) {
            e || (f(n, o), e = !0)
        },
        o(o) {
            u(n, o), e = !1
        },
        d(o) {
            n && n.d(o)
        }
    }
}

function y(l) {
    let e, s;
    const n = [{
        name: "play"
    }, l[1], {
        iconNode: l[0]
    }];
    let o = {
        $$slots: {
            default: [v]
        },
        $$scope: {
            ctx: l
        }
    };
    for (let t = 0; t < n.length; t += 1) o = r(o, n[t]);
    return e = new j({
        props: o
    }), {
        c() {
            b(e.$$.fragment)
        },
        l(t) {
            N(e.$$.fragment, t)
        },
        m(t, a) {
            P(e, t, a), s = !0
        },
        p(t, [a]) {
            const c = a & 3 ? I(n, [n[0], a & 2 && S(t[1]), a & 1 && {
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
            u(e.$$.fragment, t), s = !1
        },
        d(t) {
            q(e, t)
        }
    }
}

function C(l, e, s) {
    let {
        $$slots: n = {},
        $$scope: o
    } = e;
    const t = [
        ["polygon", {
            points: "5 3 19 12 5 21 5 3"
        }]
    ];
    return l.$$set = a => {
        s(1, e = r(r({}, e), i(a))), "$$scope" in a && s(3, o = a.$$scope)
    }, e = i(e), [t, e, n, o]
}
class k extends $ {
    constructor(e) {
        super(), h(this, e, C, y, _, {})
    }
}
const D = k;
export {
    D as P
};