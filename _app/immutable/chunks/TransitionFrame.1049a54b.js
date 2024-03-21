import {
    s as J,
    E as d,
    l as b,
    h as p,
    C as k,
    F as K,
    w as g,
    x as L,
    e as M,
    d as O,
    f as Q,
    G as R,
    p as q,
    u as y,
    q as C,
    r as D
} from "./scheduler.c64253f0.js";
import {
    S as U,
    i as W,
    g as N,
    b as u,
    e as S,
    t as c,
    c as T,
    a as j,
    m as G,
    d as I,
    f as h
} from "./index.9bbe2ba6.js";
import {
    g as V,
    a as z
} from "./spread.8a54911c.js";
import {
    f as X
} from "./index.6762df30.js";
import {
    F as A
} from "./Frame.cb9309c9.js";
const Y = o => ({}),
    F = o => ({
        close: o[4]
    }),
    Z = o => ({}),
    E = o => ({
        close: o[4]
    });

function v(o) {
    let t, a;
    const e = [o[5]];
    let s = {
        $$slots: {
            default: [w]
        },
        $$scope: {
            ctx: o
        }
    };
    for (let r = 0; r < e.length; r += 1) s = g(s, e[r]);
    return t = new A({
        props: s
    }), {
        c() {
            T(t.$$.fragment)
        },
        l(r) {
            j(t.$$.fragment, r)
        },
        m(r, i) {
            G(t, r, i), a = !0
        },
        p(r, i) {
            const l = i & 32 ? V(e, [z(r[5])]) : {};
            i & 128 && (l.$$scope = {
                dirty: i,
                ctx: r
            }), t.$set(l)
        },
        i(r) {
            a || (c(t.$$.fragment, r), a = !0)
        },
        o(r) {
            u(t.$$.fragment, r), a = !1
        },
        d(r) {
            I(t, r)
        }
    }
}

function $(o) {
    let t, a, e = o[0] && P(o);
    return {
        c() {
            e && e.c(), t = d()
        },
        l(s) {
            e && e.l(s), t = d()
        },
        m(s, r) {
            e && e.m(s, r), b(s, t, r), a = !0
        },
        p(s, r) {
            s[0] ? e ? (e.p(s, r), r & 1 && c(e, 1)) : (e = P(s), e.c(), c(e, 1), e.m(t.parentNode, t)) : e && (N(), u(e, 1, 1, () => {
                e = null
            }), S())
        },
        i(s) {
            a || (c(e), a = !0)
        },
        o(s) {
            u(e), a = !1
        },
        d(s) {
            s && p(t), e && e.d(s)
        }
    }
}

function w(o) {
    let t;
    const a = o[6].default,
        e = q(a, o, o[7], F);
    return {
        c() {
            e && e.c()
        },
        l(s) {
            e && e.l(s)
        },
        m(s, r) {
            e && e.m(s, r), t = !0
        },
        p(s, r) {
            e && e.p && (!t || r & 128) && y(e, a, s, s[7], t ? D(a, s[7], r, Y) : C(s[7]), F)
        },
        i(s) {
            t || (c(e, s), t = !0)
        },
        o(s) {
            u(e, s), t = !1
        },
        d(s) {
            e && e.d(s)
        }
    }
}

function P(o) {
    let t, a, e, s;
    const r = [o[5]];
    let i = {
        $$slots: {
            default: [x]
        },
        $$scope: {
            ctx: o
        }
    };
    for (let l = 0; l < r.length; l += 1) i = g(i, r[l]);
    return a = new A({
        props: i
    }), {
        c() {
            t = M("div"), T(a.$$.fragment)
        },
        l(l) {
            t = O(l, "DIV", {});
            var n = Q(t);
            j(a.$$.fragment, n), n.forEach(p)
        },
        m(l, n) {
            b(l, t, n), G(a, t, null), s = !0
        },
        p(l, n) {
            o = l;
            const _ = n & 32 ? V(r, [z(o[5])]) : {};
            n & 128 && (_.$$scope = {
                dirty: n,
                ctx: o
            }), a.$set(_)
        },
        i(l) {
            s || (c(a.$$.fragment, l), l && R(() => {
                s && (e || (e = h(t, o[1], o[2], !0)), e.run(1))
            }), s = !0)
        },
        o(l) {
            u(a.$$.fragment, l), l && (e || (e = h(t, o[1], o[2], !1)), e.run(0)), s = !1
        },
        d(l) {
            l && p(t), I(a), l && e && e.end()
        }
    }
}

function x(o) {
    let t;
    const a = o[6].default,
        e = q(a, o, o[7], E);
    return {
        c() {
            e && e.c()
        },
        l(s) {
            e && e.l(s)
        },
        m(s, r) {
            e && e.m(s, r), t = !0
        },
        p(s, r) {
            e && e.p && (!t || r & 128) && y(e, a, s, s[7], t ? D(a, s[7], r, Z) : C(s[7]), E)
        },
        i(s) {
            t || (c(e, s), t = !0)
        },
        o(s) {
            u(e, s), t = !1
        },
        d(s) {
            e && e.d(s)
        }
    }
}

function ee(o) {
    let t, a, e, s;
    const r = [$, v],
        i = [];

    function l(n, _) {
        return n[3] ? 0 : 1
    }
    return t = l(o), a = i[t] = r[t](o), {
        c() {
            a.c(), e = d()
        },
        l(n) {
            a.l(n), e = d()
        },
        m(n, _) {
            i[t].m(n, _), b(n, e, _), s = !0
        },
        p(n, [_]) {
            let m = t;
            t = l(n), t === m ? i[t].p(n, _) : (N(), u(i[m], 1, 1, () => {
                i[m] = null
            }), S(), a = i[t], a ? a.p(n, _) : (a = i[t] = r[t](n), a.c()), c(a, 1), a.m(e.parentNode, e))
        },
        i(n) {
            s || (c(a), s = !0)
        },
        o(n) {
            u(a), s = !1
        },
        d(n) {
            n && p(e), i[t].d(n)
        }
    }
}

function te(o, t, a) {
    const e = ["transition", "params", "open", "dismissable"];
    let s = k(t, e),
        {
            $$slots: r = {},
            $$scope: i
        } = t,
        {
            transition: l = X
        } = t,
        {
            params: n = {}
        } = t,
        {
            open: _ = !0
        } = t,
        {
            dismissable: m = !1
        } = t;
    const B = K();

    function H(f) {
        f != null && f.stopPropagation && f.stopPropagation(), a(0, _ = !1)
    }
    return o.$$set = f => {
        t = g(g({}, t), L(f)), a(5, s = k(t, e)), "transition" in f && a(1, l = f.transition), "params" in f && a(2, n = f.params), "open" in f && a(0, _ = f.open), "dismissable" in f && a(3, m = f.dismissable), "$$scope" in f && a(7, i = f.$$scope)
    }, o.$$.update = () => {
        o.$$.dirty & 1 && B(_ ? "open" : "close")
    }, [_, l, n, m, H, s, r, i]
}
class le extends U {
    constructor(t) {
        super(), W(this, t, te, ee, J, {
            transition: 1,
            params: 2,
            open: 0,
            dismissable: 3
        })
    }
}
export {
    le as T
};