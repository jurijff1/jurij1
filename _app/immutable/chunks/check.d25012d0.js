import {
    s as _,
    w as c,
    x as i,
    p as m,
    u as p,
    q as d,
    r as g
} from "./scheduler.c64253f0.js";
import {
    S as $,
    i as h,
    c as C,
    a as b,
    m as k,
    t as f,
    b as u,
    d as N
} from "./index.9bbe2ba6.js";
import {
    g as q,
    a as I
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

function v(l) {
    let e, s;
    const o = [{
        name: "check"
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
    for (let t = 0; t < o.length; t += 1) n = c(n, o[t]);
    return e = new S({
        props: n
    }), {
        c() {
            C(e.$$.fragment)
        },
        l(t) {
            b(e.$$.fragment, t)
        },
        m(t, a) {
            k(e, t, a), s = !0
        },
        p(t, [a]) {
            const r = a & 3 ? q(o, [o[0], a & 2 && I(t[1]), a & 1 && {
                iconNode: t[0]
            }]) : {};
            a & 8 && (r.$$scope = {
                dirty: a,
                ctx: t
            }), e.$set(r)
        },
        i(t) {
            s || (f(e.$$.fragment, t), s = !0)
        },
        o(t) {
            u(e.$$.fragment, t), s = !1
        },
        d(t) {
            N(e, t)
        }
    }
}

function w(l, e, s) {
    let {
        $$slots: o = {},
        $$scope: n
    } = e;
    const t = [
        ["polyline", {
            points: "20 6 9 17 4 12"
        }]
    ];
    return l.$$set = a => {
        s(1, e = c(c({}, e), i(a))), "$$scope" in a && s(3, n = a.$$scope)
    }, e = i(e), [t, e, o, n]
}
class z extends $ {
    constructor(e) {
        super(), h(this, e, w, v, _, {})
    }
}
const F = z;
export {
    F as C
};