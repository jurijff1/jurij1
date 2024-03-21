import {
    s as u,
    w as r,
    x as c,
    p as m,
    u as p,
    q as d,
    r as g
} from "./scheduler.c64253f0.js";
import {
    S as h,
    i as $,
    c as A,
    a as b,
    m as N,
    t as f,
    b as _,
    d as q
} from "./index.9bbe2ba6.js";
import {
    g as v,
    a as I
} from "./spread.8a54911c.js";
import {
    I as M
} from "./Icon.5bad6787.js";

function S(l) {
    let e;
    const s = l[2].default,
        a = m(s, l, l[3], null);
    return {
        c() {
            a && a.c()
        },
        l(n) {
            a && a.l(n)
        },
        m(n, t) {
            a && a.m(n, t), e = !0
        },
        p(n, t) {
            a && a.p && (!e || t & 8) && p(a, s, n, n[3], e ? g(s, n[3], t, null) : d(n[3]), null)
        },
        i(n) {
            e || (f(a, n), e = !0)
        },
        o(n) {
            _(a, n), e = !1
        },
        d(n) {
            a && a.d(n)
        }
    }
}

function j(l) {
    let e, s;
    const a = [{
        name: "alert-triangle"
    }, l[1], {
        iconNode: l[0]
    }];
    let n = {
        $$slots: {
            default: [S]
        },
        $$scope: {
            ctx: l
        }
    };
    for (let t = 0; t < a.length; t += 1) n = r(n, a[t]);
    return e = new M({
        props: n
    }), {
        c() {
            A(e.$$.fragment)
        },
        l(t) {
            b(e.$$.fragment, t)
        },
        m(t, o) {
            N(e, t, o), s = !0
        },
        p(t, [o]) {
            const i = o & 3 ? v(a, [a[0], o & 2 && I(t[1]), o & 1 && {
                iconNode: t[0]
            }]) : {};
            o & 8 && (i.$$scope = {
                dirty: o,
                ctx: t
            }), e.$set(i)
        },
        i(t) {
            s || (f(e.$$.fragment, t), s = !0)
        },
        o(t) {
            _(e.$$.fragment, t), s = !1
        },
        d(t) {
            q(e, t)
        }
    }
}

function C(l, e, s) {
    let {
        $$slots: a = {},
        $$scope: n
    } = e;
    const t = [
        ["path", {
            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
        }],
        ["path", {
            d: "M12 9v4"
        }],
        ["path", {
            d: "M12 17h.01"
        }]
    ];
    return l.$$set = o => {
        s(1, e = r(r({}, e), c(o))), "$$scope" in o && s(3, n = o.$$scope)
    }, e = c(e), [t, e, a, n]
}
class T extends h {
    constructor(e) {
        super(), $(this, e, C, j, u, {})
    }
}
const B = T;
export {
    B as A
};