import {
    s as h,
    w as f,
    x as g,
    p as S,
    u as I,
    q as P,
    r as N,
    B as k,
    H as q,
    o as w,
    I as A
} from "./scheduler.c64253f0.js";
import {
    S as b,
    i as v,
    c as m,
    a as p,
    m as _,
    t as i,
    b as u,
    d as $,
    h as j
} from "./index.9bbe2ba6.js";
import {
    g as d
} from "./navigation.63b52091.js";
import {
    p as z
} from "./stores.d2a90a39.js";
import {
    I as B
} from "./Input.96587e6f.js";
import {
    g as C,
    a as H
} from "./spread.8a54911c.js";
import {
    I as D
} from "./Icon.5bad6787.js";

function E(o) {
    let e;
    const r = o[2].default,
        t = S(r, o, o[3], null);
    return {
        c() {
            t && t.c()
        },
        l(a) {
            t && t.l(a)
        },
        m(a, n) {
            t && t.m(a, n), e = !0
        },
        p(a, n) {
            t && t.p && (!e || n & 8) && I(t, r, a, a[3], e ? N(r, a[3], n, null) : P(a[3]), null)
        },
        i(a) {
            e || (i(t, a), e = !0)
        },
        o(a) {
            u(t, a), e = !1
        },
        d(a) {
            t && t.d(a)
        }
    }
}

function F(o) {
    let e, r;
    const t = [{
        name: "search"
    }, o[1], {
        iconNode: o[0]
    }];
    let a = {
        $$slots: {
            default: [E]
        },
        $$scope: {
            ctx: o
        }
    };
    for (let n = 0; n < t.length; n += 1) a = f(a, t[n]);
    return e = new D({
        props: a
    }), {
        c() {
            m(e.$$.fragment)
        },
        l(n) {
            p(e.$$.fragment, n)
        },
        m(n, s) {
            _(e, n, s), r = !0
        },
        p(n, [s]) {
            const c = s & 3 ? C(t, [t[0], s & 2 && H(n[1]), s & 1 && {
                iconNode: n[0]
            }]) : {};
            s & 8 && (c.$$scope = {
                dirty: s,
                ctx: n
            }), e.$set(c)
        },
        i(n) {
            r || (i(e.$$.fragment, n), r = !0)
        },
        o(n) {
            u(e.$$.fragment, n), r = !1
        },
        d(n) {
            $(e, n)
        }
    }
}

function G(o, e, r) {
    let {
        $$slots: t = {},
        $$scope: a
    } = e;
    const n = [
        ["circle", {
            cx: "11",
            cy: "11",
            r: "8"
        }],
        ["path", {
            d: "m21 21-4.3-4.3"
        }]
    ];
    return o.$$set = s => {
        r(1, e = f(f({}, e), g(s))), "$$scope" in s && r(3, a = s.$$scope)
    }, e = g(e), [n, e, t, a]
}
class J extends b {
    constructor(e) {
        super(), v(this, e, G, F, h, {})
    }
}
const K = J;

function L(o) {
    let e, r;
    return e = new K({
        props: {
            slot: "left",
            size: 18,
            class: "mx-2"
        }
    }), {
        c() {
            m(e.$$.fragment)
        },
        l(t) {
            p(e.$$.fragment, t)
        },
        m(t, a) {
            _(e, t, a), r = !0
        },
        p: A,
        i(t) {
            r || (i(e.$$.fragment, t), r = !0)
        },
        o(t) {
            u(e.$$.fragment, t), r = !1
        },
        d(t) {
            $(e, t)
        }
    }
}

function M(o) {
    let e, r, t;

    function a(s) {
        o[2](s)
    }
    let n = {
        name: "email",
        type: "email",
        class: "pl-8",
        placeholder: "Search by anything...",
        $$slots: {
            left: [L]
        },
        $$scope: {
            ctx: o
        }
    };
    return o[0] !== void 0 && (n.value = o[0]), e = new B({
        props: n
    }), k.push(() => j(e, "value", a)), e.$on("blur", o[1]), {
        c() {
            m(e.$$.fragment)
        },
        l(s) {
            p(e.$$.fragment, s)
        },
        m(s, c) {
            _(e, s, c), t = !0
        },
        p(s, [c]) {
            const l = {};
            c & 32 && (l.$$scope = {
                dirty: c,
                ctx: s
            }), !r && c & 1 && (r = !0, l.value = s[0], q(() => r = !1)), e.$set(l)
        },
        i(s) {
            t || (i(e.$$.fragment, s), t = !0)
        },
        o(s) {
            u(e.$$.fragment, s), t = !1
        },
        d(s) {
            $(e, s)
        }
    }
}

function O(o, e, r) {
    let t;
    w(o, z, l => r(4, t = l));
    let a = t.url.searchParams.get("search") ? ? "",
        n = "";

    function s() {
        const l = t.url;
        if (a !== n && l.searchParams.delete("page"), !a || a === "") {
            l.searchParams.delete("search"), d(l, {
                invalidateAll: !0
            });
            return
        }
        n = a, l.searchParams.set("search", a), d(l, {
            invalidateAll: !0
        })
    }

    function c(l) {
        a = l, r(0, a)
    }
    return [a, s, c]
}
class Y extends b {
    constructor(e) {
        super(), v(this, e, O, M, h, {})
    }
}
export {
    Y as S
};