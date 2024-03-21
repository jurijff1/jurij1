import {
    s as _,
    w as l,
    x as c,
    p as m,
    u as d,
    q as p,
    r as g
} from "./scheduler.c64253f0.js";
import {
    S as $,
    i as h,
    c as V,
    a as b,
    m as N,
    t as f,
    b as u,
    d as q
} from "./index.9bbe2ba6.js";
import {
    g as v,
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
            s && s.p && (!e || t & 8) && d(s, n, o, o[3], e ? g(n, o[3], t, null) : p(o[3]), null)
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

function w(r) {
    let e, n;
    const s = [{
        name: "video"
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
            V(e.$$.fragment)
        },
        l(t) {
            b(e.$$.fragment, t)
        },
        m(t, a) {
            N(e, t, a), n = !0
        },
        p(t, [a]) {
            const i = a & 3 ? v(s, [s[0], a & 2 && I(t[1]), a & 1 && {
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
            u(e.$$.fragment, t), n = !1
        },
        d(t) {
            q(e, t)
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
            d: "m22 8-6 4 6 4V8Z"
        }],
        ["rect", {
            width: "14",
            height: "12",
            x: "2",
            y: "6",
            rx: "2",
            ry: "2"
        }]
    ];
    return r.$$set = a => {
        n(1, e = l(l({}, e), c(a))), "$$scope" in a && n(3, o = a.$$scope)
    }, e = c(e), [t, e, s, o]
}
class Z extends $ {
    constructor(e) {
        super(), h(this, e, C, w, _, {})
    }
}
const D = Z;
export {
    D as V
};