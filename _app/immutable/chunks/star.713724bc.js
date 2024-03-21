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
    S as $,
    i as S,
    c as h,
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

function C(r) {
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
            u(s, o), e = !1
        },
        d(o) {
            s && s.d(o)
        }
    }
}

function k(r) {
    let e, n;
    const s = [{
        name: "star"
    }, r[1], {
        iconNode: r[0]
    }];
    let o = {
        $$slots: {
            default: [C]
        },
        $$scope: {
            ctx: r
        }
    };
    for (let t = 0; t < s.length; t += 1) o = l(o, s[t]);
    return e = new v({
        props: o
    }), {
        c() {
            h(e.$$.fragment)
        },
        l(t) {
            b(e.$$.fragment, t)
        },
        m(t, a) {
            N(e, t, a), n = !0
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
            n || (f(e.$$.fragment, t), n = !0)
        },
        o(t) {
            u(e.$$.fragment, t), n = !1
        },
        d(t) {
            q(e, t)
        }
    }
}

function w(r, e, n) {
    let {
        $$slots: s = {},
        $$scope: o
    } = e;
    const t = [
        ["polygon", {
            points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        }]
    ];
    return r.$$set = a => {
        n(1, e = l(l({}, e), i(a))), "$$scope" in a && n(3, o = a.$$scope)
    }, e = i(e), [t, e, s, o]
}
class z extends $ {
    constructor(e) {
        super(), S(this, e, w, k, _, {})
    }
}
const F = z;
export {
    F as S
};