import {
    s as X,
    E as q,
    l as I,
    h as p,
    X as le,
    w as j,
    x as B,
    p as w,
    e as S,
    d as U,
    f as z,
    Z as ne,
    z as L,
    u as x,
    q as $,
    r as ee,
    O as ve,
    D as k,
    a as J,
    c as K,
    j as M,
    m as E,
    N as ke,
    F as pe,
    Y as re,
    t as D,
    i as R,
    n as he,
    o as Ce
} from "./scheduler.c64253f0.js";
import {
    S as te,
    i as ae,
    t as C,
    b as P,
    c as F,
    a as T,
    m as V,
    g as de,
    e as _e,
    d as O
} from "./index.9bbe2ba6.js";
import {
    g as se
} from "./navigation.63b52091.js";
import {
    p as ye
} from "./stores.d2a90a39.js";
import {
    a as oe
} from "./formatters.2d4ded0c.js";
import {
    e as ie
} from "./Icon.5bad6787.js";
import {
    t as Q
} from "./bundle-mjs.290c8c95.js";
import {
    g as Pe
} from "./spread.8a54911c.js";

function H(t) {
    let e, a, r, l, n;
    const i = t[7].default,
        c = w(i, t, t[6], null);
    let d = [{
            href: t[0]
        }, {
            class: t[1]
        }, {
            role: a = t[0] ? "button" : void 0
        }],
        _ = {};
    for (let s = 0; s < d.length; s += 1) _ = j(_, d[s]);
    return {
        c() {
            e = S(t[0] ? "a" : "button"), c && c.c(), this.h()
        },
        l(s) {
            e = U(s, ((t[0] ? "a" : "button") || "null").toUpperCase(), {
                href: !0,
                class: !0,
                role: !0
            });
            var u = z(e);
            c && c.l(u), u.forEach(p), this.h()
        },
        h() {
            ne(t[0] ? "a" : "button")(e, _)
        },
        m(s, u) {
            I(s, e, u), c && c.m(e, null), r = !0, l || (n = [L(e, "blur", t[8]), L(e, "change", t[9]), L(e, "click", t[10]), L(e, "focus", t[11]), L(e, "keydown", t[12]), L(e, "keypress", t[13]), L(e, "keyup", t[14]), L(e, "mouseenter", t[15]), L(e, "mouseleave", t[16]), L(e, "mouseover", t[17])], l = !0)
        },
        p(s, u) {
            c && c.p && (!r || u & 64) && x(c, i, s, s[6], r ? ee(i, s[6], u, null) : $(s[6]), null), ne(s[0] ? "a" : "button")(e, _ = Pe(d, [(!r || u & 1) && {
                href: s[0]
            }, (!r || u & 2) && {
                class: s[1]
            }, (!r || u & 1 && a !== (a = s[0] ? "button" : void 0)) && {
                role: a
            }]))
        },
        i(s) {
            r || (C(c, s), r = !0)
        },
        o(s) {
            P(c, s), r = !1
        },
        d(s) {
            s && p(e), c && c.d(s), l = !1, ve(n)
        }
    }
}

function Ne(t) {
    let e = t[0] ? "a" : "button",
        a, r, l = (t[0] ? "a" : "button") && H(t);
    return {
        c() {
            l && l.c(), a = q()
        },
        l(n) {
            l && l.l(n), a = q()
        },
        m(n, i) {
            l && l.m(n, i), I(n, a, i), r = !0
        },
        p(n, [i]) {
            n[0], e ? X(e, n[0] ? "a" : "button") ? (l.d(1), l = H(n), e = n[0] ? "a" : "button", l.c(), l.m(a.parentNode, a)) : l.p(n, i) : (l = H(n), e = n[0] ? "a" : "button", l.c(), l.m(a.parentNode, a))
        },
        i(n) {
            r || (C(l, n), r = !0)
        },
        o(n) {
            P(l, n), r = !1
        },
        d(n) {
            n && p(a), l && l.d(n)
        }
    }
}

function Le(t, e, a) {
    let {
        $$slots: r = {},
        $$scope: l
    } = e, {
        href: n = void 0
    } = e, {
        active: i = !1
    } = e, {
        activeClass: c = "text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
    } = e, {
        normalClass: d = "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    } = e, {
        large: _ = !1
    } = e;
    const s = le("group"),
        u = le("table");
    let f;

    function A(m) {
        k.call(this, t, m)
    }

    function o(m) {
        k.call(this, t, m)
    }

    function h(m) {
        k.call(this, t, m)
    }

    function v(m) {
        k.call(this, t, m)
    }

    function y(m) {
        k.call(this, t, m)
    }

    function b(m) {
        k.call(this, t, m)
    }

    function N(m) {
        k.call(this, t, m)
    }

    function Y(m) {
        k.call(this, t, m)
    }

    function Z(m) {
        k.call(this, t, m)
    }

    function G(m) {
        k.call(this, t, m)
    }
    return t.$$set = m => {
        a(20, e = j(j({}, e), B(m))), "href" in m && a(0, n = m.href), "active" in m && a(2, i = m.active), "activeClass" in m && a(3, c = m.activeClass), "normalClass" in m && a(4, d = m.normalClass), "large" in m && a(5, _ = m.large), "$$scope" in m && a(6, l = m.$$scope)
    }, t.$$.update = () => {
        a(1, f = Q("flex items-center font-medium", _ ? "h-10 px-4 text-base" : "h-8 px-3 text-sm", s ? "" : u ? "rounded" : "rounded-lg", u ? "" : "border", i ? c : d, e.class))
    }, e = B(e), [n, f, i, c, d, _, l, r, A, o, h, v, y, b, N, Y, Z, G]
}
class W extends te {
    constructor(e) {
        super(), ae(this, e, Le, Ne, X, {
            href: 0,
            active: 2,
            activeClass: 3,
            normalClass: 4,
            large: 5
        })
    }
}
const Ee = t => ({}),
    ue = t => ({});

function fe(t, e, a) {
    const r = t.slice();
    return r[23] = e[a].name, r[24] = e[a].href, r[25] = e[a].active, r
}
const Ie = t => ({}),
    ce = t => ({});

function Se(t) {
    let e;
    return {
        c() {
            e = D("Previous")
        },
        l(a) {
            e = R(a, "Previous")
        },
        m(a, r) {
            I(a, e, r)
        },
        d(a) {
            a && p(e)
        }
    }
}

function Ue(t) {
    let e;
    const a = t[10].prev,
        r = w(a, t, t[21], ce),
        l = r || Se();
    return {
        c() {
            l && l.c()
        },
        l(n) {
            l && l.l(n)
        },
        m(n, i) {
            l && l.m(n, i), e = !0
        },
        p(n, i) {
            r && r.p && (!e || i & 2097152) && x(r, a, n, n[21], e ? ee(a, n[21], i, Ie) : $(n[21]), ce)
        },
        i(n) {
            e || (C(l, n), e = !0)
        },
        o(n) {
            P(l, n), e = !1
        },
        d(n) {
            l && l.d(n)
        }
    }
}

function ze(t) {
    let e = t[23] + "",
        a;
    return {
        c() {
            a = D(e)
        },
        l(r) {
            a = R(r, e)
        },
        m(r, l) {
            I(r, a, l)
        },
        p(r, l) {
            l & 1 && e !== (e = r[23] + "") && he(a, e)
        },
        d(r) {
            r && p(a)
        }
    }
}

function ge(t) {
    let e, a, r;
    return a = new W({
        props: {
            large: t[5],
            active: t[25],
            activeClass: t[1],
            normalClass: t[2],
            href: t[24],
            $$slots: {
                default: [ze]
            },
            $$scope: {
                ctx: t
            }
        }
    }), a.$on("blur", t[11]), a.$on("change", t[12]), a.$on("click", t[13]), a.$on("focus", t[14]), a.$on("keydown", t[15]), a.$on("keypress", t[16]), a.$on("keyup", t[17]), a.$on("mouseenter", t[18]), a.$on("mouseleave", t[19]), a.$on("mouseover", t[20]), {
        c() {
            e = S("li"), F(a.$$.fragment)
        },
        l(l) {
            e = U(l, "LI", {});
            var n = z(e);
            T(a.$$.fragment, n), n.forEach(p)
        },
        m(l, n) {
            I(l, e, n), V(a, e, null), r = !0
        },
        p(l, n) {
            const i = {};
            n & 32 && (i.large = l[5]), n & 1 && (i.active = l[25]), n & 2 && (i.activeClass = l[1]), n & 4 && (i.normalClass = l[2]), n & 1 && (i.href = l[24]), n & 2097153 && (i.$$scope = {
                dirty: n,
                ctx: l
            }), a.$set(i)
        },
        i(l) {
            r || (C(a.$$.fragment, l), r = !0)
        },
        o(l) {
            P(a.$$.fragment, l), r = !1
        },
        d(l) {
            l && p(e), O(a)
        }
    }
}

function Ae(t) {
    let e;
    return {
        c() {
            e = D("Next")
        },
        l(a) {
            e = R(a, "Next")
        },
        m(a, r) {
            I(a, e, r)
        },
        d(a) {
            a && p(e)
        }
    }
}

function Me(t) {
    let e;
    const a = t[10].next,
        r = w(a, t, t[21], ue),
        l = r || Ae();
    return {
        c() {
            l && l.c()
        },
        l(n) {
            l && l.l(n)
        },
        m(n, i) {
            l && l.m(n, i), e = !0
        },
        p(n, i) {
            r && r.p && (!e || i & 2097152) && x(r, a, n, n[21], e ? ee(a, n[21], i, Ee) : $(n[21]), ue)
        },
        i(n) {
            e || (C(l, n), e = !0)
        },
        o(n) {
            P(l, n), e = !1
        },
        d(n) {
            l && l.d(n)
        }
    }
}

function De(t) {
    let e, a, r, l, n, i, c, d, _, s;
    l = new W({
        props: {
            large: t[5],
            normalClass: t[2],
            class: t[4] ? "rounded-l" : "rounded-s-lg",
            $$slots: {
                default: [Ue]
            },
            $$scope: {
                ctx: t
            }
        }
    }), l.$on("click", t[7]);
    let u = ie(t[0]),
        f = [];
    for (let o = 0; o < u.length; o += 1) f[o] = ge(fe(t, u, o));
    const A = o => P(f[o], 1, 1, () => {
        f[o] = null
    });
    return d = new W({
        props: {
            large: t[5],
            normalClass: t[2],
            class: t[4] ? "rounded-r" : "rounded-e-lg",
            $$slots: {
                default: [Me]
            },
            $$scope: {
                ctx: t
            }
        }
    }), d.$on("click", t[8]), {
        c() {
            e = S("nav"), a = S("ul"), r = S("li"), F(l.$$.fragment), n = J();
            for (let o = 0; o < f.length; o += 1) f[o].c();
            i = J(), c = S("li"), F(d.$$.fragment), this.h()
        },
        l(o) {
            e = U(o, "NAV", {
                "aria-label": !0
            });
            var h = z(e);
            a = U(h, "UL", {
                class: !0
            });
            var v = z(a);
            r = U(v, "LI", {});
            var y = z(r);
            T(l.$$.fragment, y), y.forEach(p), n = K(v);
            for (let N = 0; N < f.length; N += 1) f[N].l(v);
            i = K(v), c = U(v, "LI", {});
            var b = z(c);
            T(d.$$.fragment, b), b.forEach(p), v.forEach(p), h.forEach(p), this.h()
        },
        h() {
            M(a, "class", _ = Q(t[3], t[4] && "divide-x rtl:divide-x-reverse dark divide-gray-700 dark:divide-gray-700", t[9].class)), M(e, "aria-label", t[6])
        },
        m(o, h) {
            I(o, e, h), E(e, a), E(a, r), V(l, r, null), E(a, n);
            for (let v = 0; v < f.length; v += 1) f[v] && f[v].m(a, null);
            E(a, i), E(a, c), V(d, c, null), s = !0
        },
        p(o, [h]) {
            const v = {};
            if (h & 32 && (v.large = o[5]), h & 4 && (v.normalClass = o[2]), h & 16 && (v.class = o[4] ? "rounded-l" : "rounded-s-lg"), h & 2097152 && (v.$$scope = {
                    dirty: h,
                    ctx: o
                }), l.$set(v), h & 39) {
                u = ie(o[0]);
                let b;
                for (b = 0; b < u.length; b += 1) {
                    const N = fe(o, u, b);
                    f[b] ? (f[b].p(N, h), C(f[b], 1)) : (f[b] = ge(N), f[b].c(), C(f[b], 1), f[b].m(a, i))
                }
                for (de(), b = u.length; b < f.length; b += 1) A(b);
                _e()
            }
            const y = {};
            h & 32 && (y.large = o[5]), h & 4 && (y.normalClass = o[2]), h & 16 && (y.class = o[4] ? "rounded-r" : "rounded-e-lg"), h & 2097152 && (y.$$scope = {
                dirty: h,
                ctx: o
            }), d.$set(y), (!s || h & 536 && _ !== (_ = Q(o[3], o[4] && "divide-x rtl:divide-x-reverse dark divide-gray-700 dark:divide-gray-700", o[9].class))) && M(a, "class", _), (!s || h & 64) && M(e, "aria-label", o[6])
        },
        i(o) {
            if (!s) {
                C(l.$$.fragment, o);
                for (let h = 0; h < u.length; h += 1) C(f[h]);
                C(d.$$.fragment, o), s = !0
            }
        },
        o(o) {
            P(l.$$.fragment, o), f = f.filter(Boolean);
            for (let h = 0; h < f.length; h += 1) P(f[h]);
            P(d.$$.fragment, o), s = !1
        },
        d(o) {
            o && p(e), O(l), ke(f, o), O(d)
        }
    }
}

function Re(t, e, a) {
    let {
        $$slots: r = {},
        $$scope: l
    } = e, {
        pages: n = []
    } = e, {
        activeClass: i = "text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
    } = e, {
        normalClass: c = "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    } = e, {
        ulClass: d = "inline-flex -space-x-px rtl:space-x-reverse items-center"
    } = e, {
        table: _ = !1
    } = e, {
        large: s = !1
    } = e, {
        ariaLabel: u = "Page navigation"
    } = e;
    const f = pe();
    re("group", !0), re("table", _);
    const A = () => {
            f("previous")
        },
        o = () => {
            f("next")
        };

    function h(g) {
        k.call(this, t, g)
    }

    function v(g) {
        k.call(this, t, g)
    }

    function y(g) {
        k.call(this, t, g)
    }

    function b(g) {
        k.call(this, t, g)
    }

    function N(g) {
        k.call(this, t, g)
    }

    function Y(g) {
        k.call(this, t, g)
    }

    function Z(g) {
        k.call(this, t, g)
    }

    function G(g) {
        k.call(this, t, g)
    }

    function m(g) {
        k.call(this, t, g)
    }

    function be(g) {
        k.call(this, t, g)
    }
    return t.$$set = g => {
        a(9, e = j(j({}, e), B(g))), "pages" in g && a(0, n = g.pages), "activeClass" in g && a(1, i = g.activeClass), "normalClass" in g && a(2, c = g.normalClass), "ulClass" in g && a(3, d = g.ulClass), "table" in g && a(4, _ = g.table), "large" in g && a(5, s = g.large), "ariaLabel" in g && a(6, u = g.ariaLabel), "$$scope" in g && a(21, l = g.$$scope)
    }, e = B(e), [n, i, c, d, _, s, u, A, o, e, r, h, v, y, b, N, Y, Z, G, m, be, l]
}
class je extends te {
    constructor(e) {
        super(), ae(this, e, Re, De, X, {
            pages: 0,
            activeClass: 1,
            normalClass: 2,
            ulClass: 3,
            table: 4,
            large: 5,
            ariaLabel: 6
        })
    }
}

function me(t) {
    let e, a, r, l = oe.format(t[0]) + "",
        n, i, c, d, _;
    return d = new je({
        props: {
            pages: t[1],
            normalClass: "bg-zinc-900 border-zinc-800",
            activeClass: "!text-teal-400 border-zinc-800"
        }
    }), d.$on("next", t[2]), d.$on("previous", t[3]), {
        c() {
            e = S("div"), a = S("span"), r = D("Total "), n = D(l), i = D(" records"), c = J(), F(d.$$.fragment), this.h()
        },
        l(s) {
            e = U(s, "DIV", {
                class: !0
            });
            var u = z(e);
            a = U(u, "SPAN", {
                class: !0
            });
            var f = z(a);
            r = R(f, "Total "), n = R(f, l), i = R(f, " records"), f.forEach(p), c = K(u), T(d.$$.fragment, u), u.forEach(p), this.h()
        },
        h() {
            M(a, "class", "text-sm ml-1 font-medium"), M(e, "class", "w-full flex flex-col lg:flex-row justify-end items-end lg:items-center gap-4")
        },
        m(s, u) {
            I(s, e, u), E(e, a), E(a, r), E(a, n), E(a, i), E(e, c), V(d, e, null), _ = !0
        },
        p(s, u) {
            (!_ || u & 1) && l !== (l = oe.format(s[0]) + "") && he(n, l);
            const f = {};
            u & 2 && (f.pages = s[1]), d.$set(f)
        },
        i(s) {
            _ || (C(d.$$.fragment, s), _ = !0)
        },
        o(s) {
            P(d.$$.fragment, s), _ = !1
        },
        d(s) {
            s && p(e), O(d)
        }
    }
}

function qe(t) {
    let e, a, r = t[0] !== 0 && me(t);
    return {
        c() {
            r && r.c(), e = q()
        },
        l(l) {
            r && r.l(l), e = q()
        },
        m(l, n) {
            r && r.m(l, n), I(l, e, n), a = !0
        },
        p(l, [n]) {
            l[0] !== 0 ? r ? (r.p(l, n), n & 1 && C(r, 1)) : (r = me(l), r.c(), C(r, 1), r.m(e.parentNode, e)) : r && (de(), P(r, 1, 1, () => {
                r = null
            }), _e())
        },
        i(l) {
            a || (C(r), a = !0)
        },
        o(l) {
            P(r), a = !1
        },
        d(l) {
            l && p(e), r && r.d(l)
        }
    }
}

function Be(t, e, a) {
    let r, l;
    Ce(t, ye, s => a(6, l = s));
    let {
        count: n
    } = e, {
        itemsPerPage: i = 20
    } = e, c = [];
    async function d() {
        const s = new URL(l.url),
            u = Number.parseInt(l.url.searchParams.get("page") ? ? "1");
        s.searchParams.set("page", Math.min(r, u + 1).toString()), se(s)
    }
    async function _() {
        const s = new URL(l.url),
            u = Number.parseInt(l.url.searchParams.get("page") ? ? "1");
        s.searchParams.set("page", Math.max(1, u - 1).toString()), se(s)
    }
    return t.$$set = s => {
        "count" in s && a(0, n = s.count), "itemsPerPage" in s && a(4, i = s.itemsPerPage)
    }, t.$$.update = () => {
        if (t.$$.dirty & 17 && a(5, r = Math.ceil(n / i)), t.$$.dirty & 98) {
            const s = Number.parseInt(l.url.searchParams.get("page") ? ? "1");
            a(1, c = Array.from(Array(r).keys()).map((f, A) => {
                const o = A + 1;
                if (o >= s - 2 && o <= s + 2 || o === 1 || o === r) {
                    const h = new URL(l.url);
                    return h.searchParams.set("page", o.toString()), {
                        name: o.toString(),
                        href: h.toString()
                    }
                }
            }).filter(Boolean));
            const u = {
                name: "...",
                href: ""
            };
            s > 6 && c.splice(1, 0, u), s < r - 5 && c.splice(c.length - 1, 0, u)
        }
        if (t.$$.dirty & 66) {
            const s = Number.parseInt(l.url.searchParams.get("page") ? ? "1"),
                u = c.findIndex(f => f.name === s.toString());
            u !== -1 && (c.forEach(f => f.active = !1), a(1, c[u].active = !0, c))
        }
    }, [n, c, d, _, i, r, l]
}
class He extends te {
    constructor(e) {
        super(), ae(this, e, Be, qe, X, {
            count: 0,
            itemsPerPage: 4
        })
    }
}
export {
    He as P
};