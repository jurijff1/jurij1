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
    c as I,
    a as b,
    m as N,
    t as f,
    b as u,
    d as q
} from "./index.9bbe2ba6.js";
import {
    g as v,
    a as M
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
            o && o.p && (!e || t & 8) && p(o, s, n, n[3], e ? g(s, n[3], t, null) : d(n[3]), null)
        },
        i(n) {
            e || (f(o, n), e = !0)
        },
        o(n) {
            u(o, n), e = !1
        },
        d(n) {
            o && o.d(n)
        }
    }
}

function C(l) {
    let e, s;
    const o = [{
        name: "info"
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
            I(e.$$.fragment)
        },
        l(t) {
            b(e.$$.fragment, t)
        },
        m(t, a) {
            N(e, t, a), s = !0
        },
        p(t, [a]) {
            const c = a & 3 ? v(o, [o[0], a & 2 && M(t[1]), a & 1 && {
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

function k(l, e, s) {
    let {
        $$slots: o = {},
        $$scope: n
    } = e;
    const t = [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["path", {
            d: "M12 16v-4"
        }],
        ["path", {
            d: "M12 8h.01"
        }]
    ];
    return l.$$set = a => {
        s(1, e = r(r({}, e), i(a))), "$$scope" in a && s(3, n = a.$$scope)
    }, e = i(e), [t, e, o, n]
}
class w extends $ {
    constructor(e) {
        super(), h(this, e, k, C, _, {})
    }
}
const E = w;
export {
    E as I
};