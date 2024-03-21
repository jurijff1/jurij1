import {
    s as _,
    w as l,
    x as i,
    p as m,
    u as p,
    q as d,
    r as g
} from "./scheduler.c64253f0.js";
import {
    S as h,
    i as $,
    c as b,
    a as N,
    m as P,
    t as u,
    b as f,
    d as q
} from "./index.9bbe2ba6.js";
import {
    g as w,
    a as I
} from "./spread.8a54911c.js";
import {
    I as S
} from "./Icon.5bad6787.js";

function j(r) {
    let e;
    const o = r[2].default,
        n = m(o, r, r[3], null);
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

function v(r) {
    let e, o;
    const n = [{
        name: "pause"
    }, r[1], {
        iconNode: r[0]
    }];
    let s = {
        $$slots: {
            default: [j]
        },
        $$scope: {
            ctx: r
        }
    };
    for (let t = 0; t < n.length; t += 1) s = l(s, n[t]);
    return e = new S({
        props: s
    }), {
        c() {
            b(e.$$.fragment)
        },
        l(t) {
            N(e.$$.fragment, t)
        },
        m(t, a) {
            P(e, t, a), o = !0
        },
        p(t, [a]) {
            const c = a & 3 ? w(n, [n[0], a & 2 && I(t[1]), a & 1 && {
                iconNode: t[0]
            }]) : {};
            a & 8 && (c.$$scope = {
                dirty: a,
                ctx: t
            }), e.$set(c)
        },
        i(t) {
            o || (u(e.$$.fragment, t), o = !0)
        },
        o(t) {
            f(e.$$.fragment, t), o = !1
        },
        d(t) {
            q(e, t)
        }
    }
}

function C(r, e, o) {
    let {
        $$slots: n = {},
        $$scope: s
    } = e;
    const t = [
        ["rect", {
            width: "4",
            height: "16",
            x: "6",
            y: "4"
        }],
        ["rect", {
            width: "4",
            height: "16",
            x: "14",
            y: "4"
        }]
    ];
    return r.$$set = a => {
        o(1, e = l(l({}, e), i(a))), "$$scope" in a && o(3, s = a.$$scope)
    }, e = i(e), [t, e, n, s]
}
class k extends h {
    constructor(e) {
        super(), $(this, e, C, v, _, {})
    }
}
const E = k;
export {
    E as P
};