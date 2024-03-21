import {
    s as ne,
    w as te,
    x as me,
    p as $e,
    u as ie,
    q as oe,
    r as ue,
    e as C,
    a as S,
    d as T,
    f as M,
    c as k,
    h as c,
    j as N,
    J as D,
    l as w,
    m as A,
    o as pe,
    y as we,
    t as V,
    i as B,
    I as j,
    A as O,
    k as He
} from "../chunks/scheduler.c64253f0.js";
import {
    S as re,
    i as ae,
    c as p,
    a as g,
    m as _,
    t as i,
    b as u,
    d,
    g as Se,
    e as ke
} from "../chunks/index.9bbe2ba6.js";
import {
    p as ge
} from "../chunks/stores.d2a90a39.js";
import {
    P as Pe,
    N as je,
    a as Ge,
    b as Je,
    c as Re,
    d as K
} from "../chunks/profile-item.18b6d5a2.js";
import {
    B as Ee
} from "../chunks/Badge.ffbab6d0.js";
import {
    g as De,
    a as Ie
} from "../chunks/spread.8a54911c.js";
import {
    I as Le
} from "../chunks/Icon.5bad6787.js";
import {
    B as qe
} from "../chunks/bar-chart.54e5d08b.js";
import {
    T as Ce
} from "../chunks/trophy.9f973511.js";
import {
    S as Te
} from "../chunks/star.713724bc.js";
import {
    T as Ve
} from "../chunks/ticket.18eb9a76.js";
import {
    I as Be
} from "../chunks/info.76d42bc9.js";
import {
    M as Fe
} from "../chunks/message-square.9200979a.js";
import {
    D as Me
} from "../chunks/dollar-sign.0b29b758.js";
import {
    U as We
} from "../chunks/users.07cac3bd.js";

function Ke(s) {
    let e;
    const n = s[2].default,
        t = $e(n, s, s[3], null);
    return {
        c() {
            t && t.c()
        },
        l(a) {
            t && t.l(a)
        },
        m(a, r) {
            t && t.m(a, r), e = !0
        },
        p(a, r) {
            t && t.p && (!e || r & 8) && ie(t, n, a, a[3], e ? ue(n, a[3], r, null) : oe(a[3]), null)
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

function Oe(s) {
    let e, n;
    const t = [{
        name: "layers"
    }, s[1], {
        iconNode: s[0]
    }];
    let a = {
        $$slots: {
            default: [Ke]
        },
        $$scope: {
            ctx: s
        }
    };
    for (let r = 0; r < t.length; r += 1) a = te(a, t[r]);
    return e = new Le({
        props: a
    }), {
        c() {
            p(e.$$.fragment)
        },
        l(r) {
            g(e.$$.fragment, r)
        },
        m(r, l) {
            _(e, r, l), n = !0
        },
        p(r, [l]) {
            const f = l & 3 ? De(t, [t[0], l & 2 && Ie(r[1]), l & 1 && {
                iconNode: r[0]
            }]) : {};
            l & 8 && (f.$$scope = {
                dirty: l,
                ctx: r
            }), e.$set(f)
        },
        i(r) {
            n || (i(e.$$.fragment, r), n = !0)
        },
        o(r) {
            u(e.$$.fragment, r), n = !1
        },
        d(r) {
            d(e, r)
        }
    }
}

function Xe(s, e, n) {
    let {
        $$slots: t = {},
        $$scope: a
    } = e;
    const r = [
        ["polygon", {
            points: "12 2 2 7 12 12 22 7 12 2"
        }],
        ["polyline", {
            points: "2 17 12 22 22 17"
        }],
        ["polyline", {
            points: "2 12 12 17 22 12"
        }]
    ];
    return s.$$set = l => {
        n(1, e = te(te({}, e), me(l))), "$$scope" in l && n(3, a = l.$$scope)
    }, e = me(e), [r, e, t, a]
}
class Ye extends re {
    constructor(e) {
        super(), ae(this, e, Xe, Oe, ne, {})
    }
}
const Ue = Ye;

function Ze(s) {
    let e;
    const n = s[2].default,
        t = $e(n, s, s[3], null);
    return {
        c() {
            t && t.c()
        },
        l(a) {
            t && t.l(a)
        },
        m(a, r) {
            t && t.m(a, r), e = !0
        },
        p(a, r) {
            t && t.p && (!e || r & 8) && ie(t, n, a, a[3], e ? ue(n, a[3], r, null) : oe(a[3]), null)
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

function ye(s) {
    let e, n;
    const t = [{
        name: "toggle-right"
    }, s[1], {
        iconNode: s[0]
    }];
    let a = {
        $$slots: {
            default: [Ze]
        },
        $$scope: {
            ctx: s
        }
    };
    for (let r = 0; r < t.length; r += 1) a = te(a, t[r]);
    return e = new Le({
        props: a
    }), {
        c() {
            p(e.$$.fragment)
        },
        l(r) {
            g(e.$$.fragment, r)
        },
        m(r, l) {
            _(e, r, l), n = !0
        },
        p(r, [l]) {
            const f = l & 3 ? De(t, [t[0], l & 2 && Ie(r[1]), l & 1 && {
                iconNode: r[0]
            }]) : {};
            l & 8 && (f.$$scope = {
                dirty: l,
                ctx: r
            }), e.$set(f)
        },
        i(r) {
            n || (i(e.$$.fragment, r), n = !0)
        },
        o(r) {
            u(e.$$.fragment, r), n = !1
        },
        d(r) {
            d(e, r)
        }
    }
}

function xe(s, e, n) {
    let {
        $$slots: t = {},
        $$scope: a
    } = e;
    const r = [
        ["rect", {
            width: "20",
            height: "12",
            x: "2",
            y: "6",
            rx: "6",
            ry: "6"
        }],
        ["circle", {
            cx: "16",
            cy: "12",
            r: "2"
        }]
    ];
    return s.$$set = l => {
        n(1, e = te(te({}, e), me(l))), "$$scope" in l && n(3, a = l.$$scope)
    }, e = me(e), [r, e, t, a]
}
class et extends re {
    constructor(e) {
        super(), ae(this, e, xe, ye, ne, {})
    }
}
const Qe = et,
    tt = s => ({}),
    ze = s => ({});

function nt(s) {
    let e, n, t, a;
    const r = s[5].icon,
        l = $e(r, s, s[4], ze),
        f = s[5].default,
        o = $e(f, s, s[4], null);
    return {
        c() {
            e = C("a"), n = C("div"), l && l.c(), t = S(), o && o.c(), this.h()
        },
        l(m) {
            e = T(m, "A", {
                href: !0,
                target: !0,
                class: !0
            });
            var b = M(e);
            n = T(b, "DIV", {
                class: !0
            });
            var h = M(n);
            l && l.l(h), t = k(h), o && o.l(h), h.forEach(c), b.forEach(c), this.h()
        },
        h() {
            N(n, "class", "flex items-center gap-4 p-3 hover:bg-zinc-800 rounded-md cursor-pointer transition-all border border-transparent"), D(n, "text-teal-300", s[2]), D(n, "bg-zinc-800", s[2]), D(n, "border-zinc-700", s[2]), N(e, "href", s[0]), N(e, "target", s[1]), N(e, "class", "font-medium tracking-tight"), D(e, "text-teal-300", s[2])
        },
        m(m, b) {
            w(m, e, b), A(e, n), l && l.m(n, null), A(n, t), o && o.m(n, null), a = !0
        },
        p(m, [b]) {
            l && l.p && (!a || b & 16) && ie(l, r, m, m[4], a ? ue(r, m[4], b, tt) : oe(m[4]), ze), o && o.p && (!a || b & 16) && ie(o, f, m, m[4], a ? ue(f, m[4], b, null) : oe(m[4]), null), (!a || b & 4) && D(n, "text-teal-300", m[2]), (!a || b & 4) && D(n, "bg-zinc-800", m[2]), (!a || b & 4) && D(n, "border-zinc-700", m[2]), (!a || b & 1) && N(e, "href", m[0]), (!a || b & 2) && N(e, "target", m[1]), (!a || b & 4) && D(e, "text-teal-300", m[2])
        },
        i(m) {
            a || (i(l, m), i(o, m), a = !0)
        },
        o(m) {
            u(l, m), u(o, m), a = !1
        },
        d(m) {
            m && c(e), l && l.d(m), o && o.d(m)
        }
    }
}

function rt(s, e, n) {
    let t, a;
    pe(s, ge, m => n(3, a = m));
    let {
        $$slots: r = {},
        $$scope: l
    } = e, {
        href: f
    } = e, {
        target: o = ""
    } = e;
    return s.$$set = m => {
        "href" in m && n(0, f = m.href), "target" in m && n(1, o = m.target), "$$scope" in m && n(4, l = m.$$scope)
    }, s.$$.update = () => {
        s.$$.dirty & 9 && n(2, t = a.url.pathname.startsWith(f) || a.url.pathname === `${f}/get-started`)
    }, [f, o, t, a, l, r]
}
class X extends re {
    constructor(e) {
        super(), ae(this, e, rt, nt, ne, {
            href: 0,
            target: 1
        })
    }
}

function at(s) {
    let e;
    return {
        c() {
            e = V("Accounts")
        },
        l(n) {
            e = B(n, "Accounts")
        },
        m(n, t) {
            w(n, e, t)
        },
        d(n) {
            n && c(e)
        }
    }
}

function st(s) {
    let e, n;
    return e = new Qe({
        props: {
            size: 22
        }
    }), {
        c() {
            p(e.$$.fragment)
        },
        l(t) {
            g(e.$$.fragment, t)
        },
        m(t, a) {
            _(e, t, a), n = !0
        },
        p: j,
        i(t) {
            n || (i(e.$$.fragment, t), n = !0)
        },
        o(t) {
            u(e.$$.fragment, t), n = !1
        },
        d(t) {
            d(e, t)
        }
    }
}

function lt(s) {
    let e;
    return {
        c() {
            e = V("Statistics")
        },
        l(n) {
            e = B(n, "Statistics")
        },
        m(n, t) {
            w(n, e, t)
        },
        d(n) {
            n && c(e)
        }
    }
}

function ft(s) {
    let e, n;
    return e = new qe({
        props: {
            size: 22
        }
    }), {
        c() {
            p(e.$$.fragment)
        },
        l(t) {
            g(e.$$.fragment, t)
        },
        m(t, a) {
            _(e, t, a), n = !0
        },
        p: j,
        i(t) {
            n || (i(e.$$.fragment, t), n = !0)
        },
        o(t) {
            u(e.$$.fragment, t), n = !1
        },
        d(t) {
            d(e, t)
        }
    }
}

function $t(s) {
    let e;
    return {
        c() {
            e = V("Leaderboard")
        },
        l(n) {
            e = B(n, "Leaderboard")
        },
        m(n, t) {
            w(n, e, t)
        },
        d(n) {
            n && c(e)
        }
    }
}

function it(s) {
    let e, n;
    return e = new Ce({
        props: {
            size: 22
        }
    }), {
        c() {
            p(e.$$.fragment)
        },
        l(t) {
            g(e.$$.fragment, t)
        },
        m(t, a) {
            _(e, t, a), n = !0
        },
        p: j,
        i(t) {
            n || (i(e.$$.fragment, t), n = !0)
        },
        o(t) {
            u(e.$$.fragment, t), n = !1
        },
        d(t) {
            d(e, t)
        }
    }
}

function ot(s) {
    let e;
    return {
        c() {
            e = V("New")
        },
        l(n) {
            e = B(n, "New")
        },
        m(n, t) {
            w(n, e, t)
        },
        d(n) {
            n && c(e)
        }
    }
}

function ut(s) {
    let e, n, t;
    return n = new Ee({
        props: {
            border: !0,
            class: "badge font-semibold bg-teal-300 text-teal-900",
            $$slots: {
                default: [ot]
            },
            $$scope: {
                ctx: s
            }
        }
    }), {
        c() {
            e = V("Premium "), p(n.$$.fragment)
        },
        l(a) {
            e = B(a, "Premium "), g(n.$$.fragment, a)
        },
        m(a, r) {
            w(a, e, r), _(n, a, r), t = !0
        },
        p(a, r) {
            const l = {};
            r & 2 && (l.$$scope = {
                dirty: r,
                ctx: a
            }), n.$set(l)
        },
        i(a) {
            t || (i(n.$$.fragment, a), t = !0)
        },
        o(a) {
            u(n.$$.fragment, a), t = !1
        },
        d(a) {
            a && c(e), d(n, a)
        }
    }
}

function mt(s) {
    let e, n;
    return e = new Te({
        props: {
            size: 22
        }
    }), {
        c() {
            p(e.$$.fragment)
        },
        l(t) {
            g(e.$$.fragment, t)
        },
        m(t, a) {
            _(e, t, a), n = !0
        },
        p: j,
        i(t) {
            n || (i(e.$$.fragment, t), n = !0)
        },
        o(t) {
            u(e.$$.fragment, t), n = !1
        },
        d(t) {
            d(e, t)
        }
    }
}

function ct(s) {
    let e;
    return {
        c() {
            e = V("Affiliates")
        },
        l(n) {
            e = B(n, "Affiliates")
        },
        m(n, t) {
            w(n, e, t)
        },
        d(n) {
            n && c(e)
        }
    }
}

function pt(s) {
    let e, n;
    return e = new Ve({
        props: {
            size: 22
        }
    }), {
        c() {
            p(e.$$.fragment)
        },
        l(t) {
            g(e.$$.fragment, t)
        },
        m(t, a) {
            _(e, t, a), n = !0
        },
        p: j,
        i(t) {
            n || (i(e.$$.fragment, t), n = !0)
        },
        o(t) {
            u(e.$$.fragment, t), n = !1
        },
        d(t) {
            d(e, t)
        }
    }
}

function gt(s) {
    let e;
    return {
        c() {
            e = V("FAQs")
        },
        l(n) {
            e = B(n, "FAQs")
        },
        m(n, t) {
            w(n, e, t)
        },
        d(n) {
            n && c(e)
        }
    }
}

function _t(s) {
    let e, n;
    return e = new Be({
        props: {
            size: 22
        }
    }), {
        c() {
            p(e.$$.fragment)
        },
        l(t) {
            g(e.$$.fragment, t)
        },
        m(t, a) {
            _(e, t, a), n = !0
        },
        p: j,
        i(t) {
            n || (i(e.$$.fragment, t), n = !0)
        },
        o(t) {
            u(e.$$.fragment, t), n = !1
        },
        d(t) {
            d(e, t)
        }
    }
}

function dt(s) {
    let e;
    return {
        c() {
            e = V("Discord")
        },
        l(n) {
            e = B(n, "Discord")
        },
        m(n, t) {
            w(n, e, t)
        },
        d(n) {
            n && c(e)
        }
    }
}

function ht(s) {
    let e, n;
    return e = new Fe({
        props: {
            size: 22
        }
    }), {
        c() {
            p(e.$$.fragment)
        },
        l(t) {
            g(e.$$.fragment, t)
        },
        m(t, a) {
            _(e, t, a), n = !0
        },
        p: j,
        i(t) {
            n || (i(e.$$.fragment, t), n = !0)
        },
        o(t) {
            u(e.$$.fragment, t), n = !1
        },
        d(t) {
            d(e, t)
        }
    }
}

function Ae(s) {
    let e, n, t, a, r, l;
    return e = new X({
        props: {
            href: "/admin/players",
            $$slots: {
                icon: [vt],
                default: [bt]
            },
            $$scope: {
                ctx: s
            }
        }
    }), t = new X({
        props: {
            href: "/admin/sell-api",
            $$slots: {
                icon: [zt],
                default: [wt]
            },
            $$scope: {
                ctx: s
            }
        }
    }), r = new X({
        props: {
            href: "/admin/users",
            $$slots: {
                icon: [Nt],
                default: [At]
            },
            $$scope: {
                ctx: s
            }
        }
    }), {
        c() {
            p(e.$$.fragment), n = S(), p(t.$$.fragment), a = S(), p(r.$$.fragment)
        },
        l(f) {
            g(e.$$.fragment, f), n = k(f), g(t.$$.fragment, f), a = k(f), g(r.$$.fragment, f)
        },
        m(f, o) {
            _(e, f, o), w(f, n, o), _(t, f, o), w(f, a, o), _(r, f, o), l = !0
        },
        i(f) {
            l || (i(e.$$.fragment, f), i(t.$$.fragment, f), i(r.$$.fragment, f), l = !0)
        },
        o(f) {
            u(e.$$.fragment, f), u(t.$$.fragment, f), u(r.$$.fragment, f), l = !1
        },
        d(f) {
            f && (c(n), c(a)), d(e, f), d(t, f), d(r, f)
        }
    }
}

function bt(s) {
    let e;
    return {
        c() {
            e = V("Players")
        },
        l(n) {
            e = B(n, "Players")
        },
        m(n, t) {
            w(n, e, t)
        },
        d(n) {
            n && c(e)
        }
    }
}

function vt(s) {
    let e, n;
    return e = new Ue({
        props: {
            size: 22
        }
    }), {
        c() {
            p(e.$$.fragment)
        },
        l(t) {
            g(e.$$.fragment, t)
        },
        m(t, a) {
            _(e, t, a), n = !0
        },
        p: j,
        i(t) {
            n || (i(e.$$.fragment, t), n = !0)
        },
        o(t) {
            u(e.$$.fragment, t), n = !1
        },
        d(t) {
            d(e, t)
        }
    }
}

function wt(s) {
    let e;
    return {
        c() {
            e = V("Sell Api")
        },
        l(n) {
            e = B(n, "Sell Api")
        },
        m(n, t) {
            w(n, e, t)
        },
        d(n) {
            n && c(e)
        }
    }
}

function zt(s) {
    let e, n;
    return e = new Me({
        props: {
            size: 22
        }
    }), {
        c() {
            p(e.$$.fragment)
        },
        l(t) {
            g(e.$$.fragment, t)
        },
        m(t, a) {
            _(e, t, a), n = !0
        },
        p: j,
        i(t) {
            n || (i(e.$$.fragment, t), n = !0)
        },
        o(t) {
            u(e.$$.fragment, t), n = !1
        },
        d(t) {
            d(e, t)
        }
    }
}

function At(s) {
    let e;
    return {
        c() {
            e = V("Users")
        },
        l(n) {
            e = B(n, "Users")
        },
        m(n, t) {
            w(n, e, t)
        },
        d(n) {
            n && c(e)
        }
    }
}

function Nt(s) {
    let e, n;
    return e = new We({
        props: {
            size: 22
        }
    }), {
        c() {
            p(e.$$.fragment)
        },
        l(t) {
            g(e.$$.fragment, t)
        },
        m(t, a) {
            _(e, t, a), n = !0
        },
        p: j,
        i(t) {
            n || (i(e.$$.fragment, t), n = !0)
        },
        o(t) {
            u(e.$$.fragment, t), n = !1
        },
        d(t) {
            d(e, t)
        }
    }
}

function St(s) {
    var se, le;
    let e, n, t, a, r = '<img class="w-40 mb-6" src="/logo-white.png" alt="logo"/>',
        l, f, o, m = "Navigation",
        b, h, F, I, G, U, H, Q, P, J, y, $, v, R, x, ee, W, Z;
    h = new X({
        props: {
            href: "/accounts",
            $$slots: {
                icon: [st],
                default: [at]
            },
            $$scope: {
                ctx: s
            }
        }
    }), I = new X({
        props: {
            href: "/statistics",
            $$slots: {
                icon: [ft],
                default: [lt]
            },
            $$scope: {
                ctx: s
            }
        }
    }), U = new X({
        props: {
            href: "/leaderboard",
            $$slots: {
                icon: [it],
                default: [$t]
            },
            $$scope: {
                ctx: s
            }
        }
    }), Q = new X({
        props: {
            href: "/premium",
            $$slots: {
                icon: [mt],
                default: [ut]
            },
            $$scope: {
                ctx: s
            }
        }
    }), J = new X({
        props: {
            href: ((se = s[0].data.user) == null ? void 0 : se.role) === "admin" ? "/admin/affiliates" : "/affiliates",
            $$slots: {
                icon: [pt],
                default: [ct]
            },
            $$scope: {
                ctx: s
            }
        }
    }), $ = new X({
        props: {
            href: "/faqs",
            $$slots: {
                icon: [_t],
                default: [gt]
            },
            $$scope: {
                ctx: s
            }
        }
    }), R = new X({
        props: {
            href: "https://discord.gg/futearn",
            target: "_blank",
            $$slots: {
                icon: [ht],
                default: [dt]
            },
            $$scope: {
                ctx: s
            }
        }
    });
    let L = ((le = s[0].data.user) == null ? void 0 : le.role) === "admin" && Ae(s);
    return W = new Pe({}), {
        c() {
            e = C("div"), n = C("div"), t = C("div"), a = C("a"), a.innerHTML = r, l = S(), f = C("div"), o = C("span"), o.textContent = m, b = S(), p(h.$$.fragment), F = S(), p(I.$$.fragment), G = S(), p(U.$$.fragment), H = S(), p(Q.$$.fragment), P = S(), p(J.$$.fragment), y = S(), p($.$$.fragment), v = S(), p(R.$$.fragment), x = S(), L && L.c(), ee = S(), p(W.$$.fragment), this.h()
        },
        l(z) {
            e = T(z, "DIV", {
                class: !0
            });
            var E = M(e);
            n = T(E, "DIV", {
                class: !0
            });
            var fe = M(n);
            t = T(fe, "DIV", {
                class: !0
            });
            var Y = M(t);
            a = T(Y, "A", {
                href: !0,
                "data-svelte-h": !0
            }), we(a) !== "svelte-1libntn" && (a.innerHTML = r), l = k(Y), f = T(Y, "DIV", {
                class: !0
            });
            var q = M(f);
            o = T(q, "SPAN", {
                class: !0,
                "data-svelte-h": !0
            }), we(o) !== "svelte-1plw6a9" && (o.textContent = m), b = k(q), g(h.$$.fragment, q), F = k(q), g(I.$$.fragment, q), G = k(q), g(U.$$.fragment, q), H = k(q), g(Q.$$.fragment, q), P = k(q), g(J.$$.fragment, q), y = k(q), g($.$$.fragment, q), v = k(q), g(R.$$.fragment, q), x = k(q), L && L.l(q), q.forEach(c), ee = k(Y), g(W.$$.fragment, Y), Y.forEach(c), fe.forEach(c), E.forEach(c), this.h()
        },
        h() {
            N(a, "href", "/accounts"), N(o, "class", "label"), N(f, "class", "flex flex-col gap-2 border-b border-zinc-700 pb-3"), N(t, "class", "flex flex-col gap-4"), N(n, "class", "flex flex-col px-4 py-8"), N(e, "class", "w-[272px] w h-screen border-r bg-zinc-900 border-zinc-800 shadow-xl hidden lg:block fixed")
        },
        m(z, E) {
            w(z, e, E), A(e, n), A(n, t), A(t, a), A(t, l), A(t, f), A(f, o), A(f, b), _(h, f, null), A(f, F), _(I, f, null), A(f, G), _(U, f, null), A(f, H), _(Q, f, null), A(f, P), _(J, f, null), A(f, y), _($, f, null), A(f, v), _(R, f, null), A(f, x), L && L.m(f, null), A(t, ee), _(W, t, null), Z = !0
        },
        p(z, [E]) {
            var be, ve;
            const fe = {};
            E & 2 && (fe.$$scope = {
                dirty: E,
                ctx: z
            }), h.$set(fe);
            const Y = {};
            E & 2 && (Y.$$scope = {
                dirty: E,
                ctx: z
            }), I.$set(Y);
            const q = {};
            E & 2 && (q.$$scope = {
                dirty: E,
                ctx: z
            }), U.$set(q);
            const _e = {};
            E & 2 && (_e.$$scope = {
                dirty: E,
                ctx: z
            }), Q.$set(_e);
            const ce = {};
            E & 1 && (ce.href = ((be = z[0].data.user) == null ? void 0 : be.role) === "admin" ? "/admin/affiliates" : "/affiliates"), E & 2 && (ce.$$scope = {
                dirty: E,
                ctx: z
            }), J.$set(ce);
            const de = {};
            E & 2 && (de.$$scope = {
                dirty: E,
                ctx: z
            }), $.$set(de);
            const he = {};
            E & 2 && (he.$$scope = {
                dirty: E,
                ctx: z
            }), R.$set(he), ((ve = z[0].data.user) == null ? void 0 : ve.role) === "admin" ? L ? E & 1 && i(L, 1) : (L = Ae(z), L.c(), i(L, 1), L.m(f, null)) : L && (Se(), u(L, 1, 1, () => {
                L = null
            }), ke())
        },
        i(z) {
            Z || (i(h.$$.fragment, z), i(I.$$.fragment, z), i(U.$$.fragment, z), i(Q.$$.fragment, z), i(J.$$.fragment, z), i($.$$.fragment, z), i(R.$$.fragment, z), i(L), i(W.$$.fragment, z), Z = !0)
        },
        o(z) {
            u(h.$$.fragment, z), u(I.$$.fragment, z), u(U.$$.fragment, z), u(Q.$$.fragment, z), u(J.$$.fragment, z), u($.$$.fragment, z), u(R.$$.fragment, z), u(L), u(W.$$.fragment, z), Z = !1
        },
        d(z) {
            z && c(e), d(h), d(I), d(U), d(Q), d(J), d($), d(R), L && L.d(), d(W)
        }
    }
}

function kt(s, e, n) {
    let t;
    return pe(s, ge, a => n(0, t = a)), [t]
}
class Pt extends re {
    constructor(e) {
        super(), ae(this, e, kt, St, ne, {})
    }
}

function Et(s) {
    let e, n;
    return {
        c() {
            e = C("img"), this.h()
        },
        l(t) {
            e = T(t, "IMG", {
                src: !0,
                class: !0,
                alt: !0
            }), this.h()
        },
        h() {
            He(e.src, n = "/logo-white.png") || N(e, "src", n), N(e, "class", "mr-3 h-6 sm:h-9"), N(e, "alt", "FcEarn Logo")
        },
        m(t, a) {
            w(t, e, a)
        },
        p: j,
        d(t) {
            t && c(e)
        }
    }
}

function Dt(s) {
    let e, n, t, a;
    return n = new Qe({
        props: {
            size: 18
        }
    }), {
        c() {
            e = C("span"), p(n.$$.fragment), t = V(`
        Accounts`), this.h()
        },
        l(r) {
            e = T(r, "SPAN", {
                class: !0
            });
            var l = M(e);
            g(n.$$.fragment, l), t = B(l, `
        Accounts`), l.forEach(c), this.h()
        },
        h() {
            N(e, "class", "flex items-center gap-1"), D(e, "text-teal-300", s[0].url.pathname === "/accounts")
        },
        m(r, l) {
            w(r, e, l), _(n, e, null), A(e, t), a = !0
        },
        p(r, l) {
            (!a || l & 1) && D(e, "text-teal-300", r[0].url.pathname === "/accounts")
        },
        i(r) {
            a || (i(n.$$.fragment, r), a = !0)
        },
        o(r) {
            u(n.$$.fragment, r), a = !1
        },
        d(r) {
            r && c(e), d(n)
        }
    }
}

function It(s) {
    let e, n, t, a;
    return n = new qe({
        props: {
            size: 18
        }
    }), {
        c() {
            e = C("span"), p(n.$$.fragment), t = V(`
        Statistics`), this.h()
        },
        l(r) {
            e = T(r, "SPAN", {
                class: !0
            });
            var l = M(e);
            g(n.$$.fragment, l), t = B(l, `
        Statistics`), l.forEach(c), this.h()
        },
        h() {
            N(e, "class", "flex items-center gap-1"), D(e, "text-teal-300", s[0].url.pathname === "/statistics")
        },
        m(r, l) {
            w(r, e, l), _(n, e, null), A(e, t), a = !0
        },
        p(r, l) {
            (!a || l & 1) && D(e, "text-teal-300", r[0].url.pathname === "/statistics")
        },
        i(r) {
            a || (i(n.$$.fragment, r), a = !0)
        },
        o(r) {
            u(n.$$.fragment, r), a = !1
        },
        d(r) {
            r && c(e), d(n)
        }
    }
}

function Lt(s) {
    let e, n, t, a;
    return n = new Ce({
        props: {
            size: 18
        }
    }), {
        c() {
            e = C("span"), p(n.$$.fragment), t = V(`
        Leaderboard`), this.h()
        },
        l(r) {
            e = T(r, "SPAN", {
                class: !0
            });
            var l = M(e);
            g(n.$$.fragment, l), t = B(l, `
        Leaderboard`), l.forEach(c), this.h()
        },
        h() {
            N(e, "class", "flex items-center gap-1"), D(e, "text-teal-300", s[0].url.pathname === "/leaderboard")
        },
        m(r, l) {
            w(r, e, l), _(n, e, null), A(e, t), a = !0
        },
        p(r, l) {
            (!a || l & 1) && D(e, "text-teal-300", r[0].url.pathname === "/leaderboard")
        },
        i(r) {
            a || (i(n.$$.fragment, r), a = !0)
        },
        o(r) {
            u(n.$$.fragment, r), a = !1
        },
        d(r) {
            r && c(e), d(n)
        }
    }
}

function qt(s) {
    let e;
    return {
        c() {
            e = V("New")
        },
        l(n) {
            e = B(n, "New")
        },
        m(n, t) {
            w(n, e, t)
        },
        d(n) {
            n && c(e)
        }
    }
}

function Ct(s) {
    let e, n, t, a, r;
    return n = new Te({
        props: {
            size: 18
        }
    }), a = new Ee({
        props: {
            border: !0,
            class: "badge font-semibold bg-teal-300 text-teal-900",
            $$slots: {
                default: [qt]
            },
            $$scope: {
                ctx: s
            }
        }
    }), {
        c() {
            e = C("span"), p(n.$$.fragment), t = V(`
        Premium `), p(a.$$.fragment), this.h()
        },
        l(l) {
            e = T(l, "SPAN", {
                class: !0
            });
            var f = M(e);
            g(n.$$.fragment, f), t = B(f, `
        Premium `), g(a.$$.fragment, f), f.forEach(c), this.h()
        },
        h() {
            N(e, "class", "flex items-center gap-1"), D(e, "text-teal-300", s[0].url.pathname === "/premium")
        },
        m(l, f) {
            w(l, e, f), _(n, e, null), A(e, t), _(a, e, null), r = !0
        },
        p(l, f) {
            const o = {};
            f & 8 && (o.$$scope = {
                dirty: f,
                ctx: l
            }), a.$set(o), (!r || f & 1) && D(e, "text-teal-300", l[0].url.pathname === "/premium")
        },
        i(l) {
            r || (i(n.$$.fragment, l), i(a.$$.fragment, l), r = !0)
        },
        o(l) {
            u(n.$$.fragment, l), u(a.$$.fragment, l), r = !1
        },
        d(l) {
            l && c(e), d(n), d(a)
        }
    }
}

function Tt(s) {
    let e, n, t, a;
    return n = new Fe({
        props: {
            size: 18
        }
    }), {
        c() {
            e = C("span"), p(n.$$.fragment), t = V(`
        Discord`), this.h()
        },
        l(r) {
            e = T(r, "SPAN", {
                class: !0
            });
            var l = M(e);
            g(n.$$.fragment, l), t = B(l, `
        Discord`), l.forEach(c), this.h()
        },
        h() {
            N(e, "class", "flex items-center gap-1")
        },
        m(r, l) {
            w(r, e, l), _(n, e, null), A(e, t), a = !0
        },
        p: j,
        i(r) {
            a || (i(n.$$.fragment, r), a = !0)
        },
        o(r) {
            u(n.$$.fragment, r), a = !1
        },
        d(r) {
            r && c(e), d(n)
        }
    }
}

function Vt(s) {
    let e, n, t, a;
    return n = new Ve({
        props: {
            size: 18
        }
    }), {
        c() {
            e = C("span"), p(n.$$.fragment), t = V(`
        Affiliates`), this.h()
        },
        l(r) {
            e = T(r, "SPAN", {
                class: !0
            });
            var l = M(e);
            g(n.$$.fragment, l), t = B(l, `
        Affiliates`), l.forEach(c), this.h()
        },
        h() {
            N(e, "class", "flex items-center gap-1"), D(e, "text-teal-300", s[0].url.pathname === "/affiliates")
        },
        m(r, l) {
            w(r, e, l), _(n, e, null), A(e, t), a = !0
        },
        p(r, l) {
            (!a || l & 1) && D(e, "text-teal-300", r[0].url.pathname === "/affiliates")
        },
        i(r) {
            a || (i(n.$$.fragment, r), a = !0)
        },
        o(r) {
            u(n.$$.fragment, r), a = !1
        },
        d(r) {
            r && c(e), d(n)
        }
    }
}

function Bt(s) {
    let e, n, t, a;
    return n = new Be({
        props: {
            size: 18
        }
    }), {
        c() {
            e = C("span"), p(n.$$.fragment), t = V(`
        FAQs`), this.h()
        },
        l(r) {
            e = T(r, "SPAN", {
                class: !0
            });
            var l = M(e);
            g(n.$$.fragment, l), t = B(l, `
        FAQs`), l.forEach(c), this.h()
        },
        h() {
            N(e, "class", "flex items-center gap-1"), D(e, "text-teal-300", s[0].url.pathname === "/faqs")
        },
        m(r, l) {
            w(r, e, l), _(n, e, null), A(e, t), a = !0
        },
        p(r, l) {
            (!a || l & 1) && D(e, "text-teal-300", r[0].url.pathname === "/faqs")
        },
        i(r) {
            a || (i(n.$$.fragment, r), a = !0)
        },
        o(r) {
            u(n.$$.fragment, r), a = !1
        },
        d(r) {
            r && c(e), d(n)
        }
    }
}

function Ne(s) {
    let e, n, t, a;
    return e = new K({
        props: {
            href: "/admin/players",
            $$slots: {
                default: [Ft]
            },
            $$scope: {
                ctx: s
            }
        }
    }), e.$on("click", function() {
        O(s[1]) && s[1].apply(this, arguments)
    }), t = new K({
        props: {
            href: "/admin/sell-api",
            $$slots: {
                default: [Mt]
            },
            $$scope: {
                ctx: s
            }
        }
    }), t.$on("click", function() {
        O(s[1]) && s[1].apply(this, arguments)
    }), {
        c() {
            p(e.$$.fragment), n = S(), p(t.$$.fragment)
        },
        l(r) {
            g(e.$$.fragment, r), n = k(r), g(t.$$.fragment, r)
        },
        m(r, l) {
            _(e, r, l), w(r, n, l), _(t, r, l), a = !0
        },
        p(r, l) {
            s = r;
            const f = {};
            l & 9 && (f.$$scope = {
                dirty: l,
                ctx: s
            }), e.$set(f);
            const o = {};
            l & 9 && (o.$$scope = {
                dirty: l,
                ctx: s
            }), t.$set(o)
        },
        i(r) {
            a || (i(e.$$.fragment, r), i(t.$$.fragment, r), a = !0)
        },
        o(r) {
            u(e.$$.fragment, r), u(t.$$.fragment, r), a = !1
        },
        d(r) {
            r && c(n), d(e, r), d(t, r)
        }
    }
}

function Ft(s) {
    let e, n, t, a;
    return n = new Ue({
        props: {
            size: 18
        }
    }), {
        c() {
            e = C("span"), p(n.$$.fragment), t = V(`
          Players`), this.h()
        },
        l(r) {
            e = T(r, "SPAN", {
                class: !0
            });
            var l = M(e);
            g(n.$$.fragment, l), t = B(l, `
          Players`), l.forEach(c), this.h()
        },
        h() {
            N(e, "class", "flex items-center gap-1"), D(e, "text-teal-300", s[0].url.pathname === "/admin/players")
        },
        m(r, l) {
            w(r, e, l), _(n, e, null), A(e, t), a = !0
        },
        p(r, l) {
            (!a || l & 1) && D(e, "text-teal-300", r[0].url.pathname === "/admin/players")
        },
        i(r) {
            a || (i(n.$$.fragment, r), a = !0)
        },
        o(r) {
            u(n.$$.fragment, r), a = !1
        },
        d(r) {
            r && c(e), d(n)
        }
    }
}

function Mt(s) {
    let e, n, t, a;
    return n = new Me({
        props: {
            size: 18
        }
    }), {
        c() {
            e = C("span"), p(n.$$.fragment), t = V(`
          Sell Api`), this.h()
        },
        l(r) {
            e = T(r, "SPAN", {
                class: !0
            });
            var l = M(e);
            g(n.$$.fragment, l), t = B(l, `
          Sell Api`), l.forEach(c), this.h()
        },
        h() {
            N(e, "class", "flex items-center gap-1"), D(e, "text-teal-300", s[0].url.pathname === "/admin/sell-api")
        },
        m(r, l) {
            w(r, e, l), _(n, e, null), A(e, t), a = !0
        },
        p(r, l) {
            (!a || l & 1) && D(e, "text-teal-300", r[0].url.pathname === "/admin/sell-api")
        },
        i(r) {
            a || (i(n.$$.fragment, r), a = !0)
        },
        o(r) {
            u(n.$$.fragment, r), a = !1
        },
        d(r) {
            r && c(e), d(n)
        }
    }
}

function Ut(s) {
    let e, n;
    return e = new Pe({}), {
        c() {
            p(e.$$.fragment)
        },
        l(t) {
            g(e.$$.fragment, t)
        },
        m(t, a) {
            _(e, t, a), n = !0
        },
        i(t) {
            n || (i(e.$$.fragment, t), n = !0)
        },
        o(t) {
            u(e.$$.fragment, t), n = !1
        },
        d(t) {
            d(e, t)
        }
    }
}

function Qt(s) {
    var J, y;
    let e, n, t, a, r, l, f, o, m, b, h, F, I, G, U, H, Q;
    e = new K({
        props: {
            href: "/accounts/",
            $$slots: {
                default: [Dt]
            },
            $$scope: {
                ctx: s
            }
        }
    }), e.$on("click", function() {
        O(s[1]) && s[1].apply(this, arguments)
    }), t = new K({
        props: {
            href: "/statistics",
            $$slots: {
                default: [It]
            },
            $$scope: {
                ctx: s
            }
        }
    }), t.$on("click", function() {
        O(s[1]) && s[1].apply(this, arguments)
    }), r = new K({
        props: {
            href: "/leaderboard",
            $$slots: {
                default: [Lt]
            },
            $$scope: {
                ctx: s
            }
        }
    }), r.$on("click", function() {
        O(s[1]) && s[1].apply(this, arguments)
    }), f = new K({
        props: {
            href: "/premium",
            $$slots: {
                default: [Ct]
            },
            $$scope: {
                ctx: s
            }
        }
    }), f.$on("click", function() {
        O(s[1]) && s[1].apply(this, arguments)
    }), m = new K({
        props: {
            href: "https://discord.gg/futearn",
            target: "_blank",
            $$slots: {
                default: [Tt]
            },
            $$scope: {
                ctx: s
            }
        }
    }), m.$on("click", function() {
        O(s[1]) && s[1].apply(this, arguments)
    }), h = new K({
        props: {
            href: ((J = s[0].data.user) == null ? void 0 : J.role) === "admin" ? "/admin/affiliates" : "/affiliates",
            $$slots: {
                default: [Vt]
            },
            $$scope: {
                ctx: s
            }
        }
    }), h.$on("click", function() {
        O(s[1]) && s[1].apply(this, arguments)
    }), I = new K({
        props: {
            href: "/faqs",
            $$slots: {
                default: [Bt]
            },
            $$scope: {
                ctx: s
            }
        }
    }), I.$on("click", function() {
        O(s[1]) && s[1].apply(this, arguments)
    });
    let P = ((y = s[0].data.user) == null ? void 0 : y.role) === "admin" && Ne(s);
    return H = new K({
        props: {
            $$slots: {
                default: [Ut]
            },
            $$scope: {
                ctx: s
            }
        }
    }), {
        c() {
            p(e.$$.fragment), n = S(), p(t.$$.fragment), a = S(), p(r.$$.fragment), l = S(), p(f.$$.fragment), o = S(), p(m.$$.fragment), b = S(), p(h.$$.fragment), F = S(), p(I.$$.fragment), G = S(), P && P.c(), U = S(), p(H.$$.fragment)
        },
        l($) {
            g(e.$$.fragment, $), n = k($), g(t.$$.fragment, $), a = k($), g(r.$$.fragment, $), l = k($), g(f.$$.fragment, $), o = k($), g(m.$$.fragment, $), b = k($), g(h.$$.fragment, $), F = k($), g(I.$$.fragment, $), G = k($), P && P.l($), U = k($), g(H.$$.fragment, $)
        },
        m($, v) {
            _(e, $, v), w($, n, v), _(t, $, v), w($, a, v), _(r, $, v), w($, l, v), _(f, $, v), w($, o, v), _(m, $, v), w($, b, v), _(h, $, v), w($, F, v), _(I, $, v), w($, G, v), P && P.m($, v), w($, U, v), _(H, $, v), Q = !0
        },
        p($, v) {
            var z, E;
            s = $;
            const R = {};
            v & 9 && (R.$$scope = {
                dirty: v,
                ctx: s
            }), e.$set(R);
            const x = {};
            v & 9 && (x.$$scope = {
                dirty: v,
                ctx: s
            }), t.$set(x);
            const ee = {};
            v & 9 && (ee.$$scope = {
                dirty: v,
                ctx: s
            }), r.$set(ee);
            const W = {};
            v & 9 && (W.$$scope = {
                dirty: v,
                ctx: s
            }), f.$set(W);
            const Z = {};
            v & 8 && (Z.$$scope = {
                dirty: v,
                ctx: s
            }), m.$set(Z);
            const L = {};
            v & 1 && (L.href = ((z = s[0].data.user) == null ? void 0 : z.role) === "admin" ? "/admin/affiliates" : "/affiliates"), v & 9 && (L.$$scope = {
                dirty: v,
                ctx: s
            }), h.$set(L);
            const se = {};
            v & 9 && (se.$$scope = {
                dirty: v,
                ctx: s
            }), I.$set(se), ((E = s[0].data.user) == null ? void 0 : E.role) === "admin" ? P ? (P.p(s, v), v & 1 && i(P, 1)) : (P = Ne(s), P.c(), i(P, 1), P.m(U.parentNode, U)) : P && (Se(), u(P, 1, 1, () => {
                P = null
            }), ke());
            const le = {};
            v & 8 && (le.$$scope = {
                dirty: v,
                ctx: s
            }), H.$set(le)
        },
        i($) {
            Q || (i(e.$$.fragment, $), i(t.$$.fragment, $), i(r.$$.fragment, $), i(f.$$.fragment, $), i(m.$$.fragment, $), i(h.$$.fragment, $), i(I.$$.fragment, $), i(P), i(H.$$.fragment, $), Q = !0)
        },
        o($) {
            u(e.$$.fragment, $), u(t.$$.fragment, $), u(r.$$.fragment, $), u(f.$$.fragment, $), u(m.$$.fragment, $), u(h.$$.fragment, $), u(I.$$.fragment, $), u(P), u(H.$$.fragment, $), Q = !1
        },
        d($) {
            $ && (c(n), c(a), c(l), c(o), c(b), c(F), c(G), c(U)), d(e, $), d(t, $), d(r, $), d(f, $), d(m, $), d(h, $), d(I, $), P && P.d($), d(H, $)
        }
    }
}

function Ht(s) {
    let e, n, t, a, r, l;
    return e = new Ge({
        props: {
            href: "/accounts/",
            $$slots: {
                default: [Et]
            },
            $$scope: {
                ctx: s
            }
        }
    }), t = new Je({
        props: {
            class: "hover:bg-zinc-800"
        }
    }), t.$on("click", function() {
        O(s[1]) && s[1].apply(this, arguments)
    }), r = new Re({
        props: {
            hidden: s[2],
            divClass: "w-full",
            ulClass: "bg-transparent border-0 pt-3",
            activeClass: "!text-teal-300",
            nonActiveClass: "text-zinc-100",
            $$slots: {
                default: [Qt]
            },
            $$scope: {
                ctx: s
            }
        }
    }), {
        c() {
            p(e.$$.fragment), n = S(), p(t.$$.fragment), a = S(), p(r.$$.fragment)
        },
        l(f) {
            g(e.$$.fragment, f), n = k(f), g(t.$$.fragment, f), a = k(f), g(r.$$.fragment, f)
        },
        m(f, o) {
            _(e, f, o), w(f, n, o), _(t, f, o), w(f, a, o), _(r, f, o), l = !0
        },
        p(f, o) {
            s = f;
            const m = {};
            o & 8 && (m.$$scope = {
                dirty: o,
                ctx: s
            }), e.$set(m);
            const b = {};
            o & 4 && (b.hidden = s[2]), o & 11 && (b.$$scope = {
                dirty: o,
                ctx: s
            }), r.$set(b)
        },
        i(f) {
            l || (i(e.$$.fragment, f), i(t.$$.fragment, f), i(r.$$.fragment, f), l = !0)
        },
        o(f) {
            u(e.$$.fragment, f), u(t.$$.fragment, f), u(r.$$.fragment, f), l = !1
        },
        d(f) {
            f && (c(n), c(a)), d(e, f), d(t, f), d(r, f)
        }
    }
}

function jt(s) {
    let e, n;
    return e = new je({
        props: {
            class: `flex lg:hidden bg-zinc-900/75 backdrop-blur-sm p-4 fixed w-full z-20
  top-0 left-0 border-b border-zinc-800`,
            $$slots: {
                default: [Ht, ({
                    toggle: t,
                    hidden: a
                }) => ({
                    1: t,
                    2: a
                }), ({
                    toggle: t,
                    hidden: a
                }) => (t ? 2 : 0) | (a ? 4 : 0)]
            },
            $$scope: {
                ctx: s
            }
        }
    }), {
        c() {
            p(e.$$.fragment)
        },
        l(t) {
            g(e.$$.fragment, t)
        },
        m(t, a) {
            _(e, t, a), n = !0
        },
        p(t, [a]) {
            const r = {};
            a & 15 && (r.$$scope = {
                dirty: a,
                ctx: t
            }), e.$set(r)
        },
        i(t) {
            n || (i(e.$$.fragment, t), n = !0)
        },
        o(t) {
            u(e.$$.fragment, t), n = !1
        },
        d(t) {
            d(e, t)
        }
    }
}

function Gt(s, e, n) {
    let t;
    return pe(s, ge, a => n(0, t = a)), [t]
}
class Jt extends re {
    constructor(e) {
        super(), ae(this, e, Gt, jt, ne, {})
    }
}

function Rt(s) {
    let e, n, t, a, r, l, f, o;
    n = new Pt({}), r = new Jt({});
    const m = s[1].default,
        b = $e(m, s, s[0], null);
    return {
        c() {
            e = C("div"), p(n.$$.fragment), t = S(), a = C("div"), p(r.$$.fragment), l = S(), f = C("div"), b && b.c(), this.h()
        },
        l(h) {
            e = T(h, "DIV", {
                class: !0
            });
            var F = M(e);
            g(n.$$.fragment, F), t = k(F), a = T(F, "DIV", {
                class: !0
            });
            var I = M(a);
            g(r.$$.fragment, I), l = k(I), f = T(I, "DIV", {
                class: !0
            });
            var G = M(f);
            b && b.l(G), G.forEach(c), I.forEach(c), F.forEach(c), this.h()
        },
        h() {
            N(f, "class", "flex-1 p-4 lg:p-8 pb-4 h-full"), N(a, "class", "overflow-auto lg:pl-[272px] pt-[73px] lg:pt-0 w-full h-full pb-4"), N(e, "class", "flex")
        },
        m(h, F) {
            w(h, e, F), _(n, e, null), A(e, t), A(e, a), _(r, a, null), A(a, l), A(a, f), b && b.m(f, null), o = !0
        },
        p(h, [F]) {
            b && b.p && (!o || F & 1) && ie(b, m, h, h[0], o ? ue(m, h[0], F, null) : oe(h[0]), null)
        },
        i(h) {
            o || (i(n.$$.fragment, h), i(r.$$.fragment, h), i(b, h), o = !0)
        },
        o(h) {
            u(n.$$.fragment, h), u(r.$$.fragment, h), u(b, h), o = !1
        },
        d(h) {
            h && c(e), d(n), d(r), b && b.d(h)
        }
    }
}

function Wt(s, e, n) {
    let {
        $$slots: t = {},
        $$scope: a
    } = e;
    return s.$$set = r => {
        "$$scope" in r && n(0, a = r.$$scope)
    }, [a, t]
}
class $n extends re {
    constructor(e) {
        super(), ae(this, e, Wt, Rt, ne, {})
    }
}
export {
    $n as component
};