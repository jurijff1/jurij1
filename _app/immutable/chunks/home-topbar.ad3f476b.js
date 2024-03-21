import {
    s as U,
    G as V,
    z as J,
    o as K,
    A as E,
    a as z,
    e as L,
    c as x,
    d as R,
    f as O,
    h as _,
    j as N,
    l as g,
    k as T,
    I as C,
    t as S,
    i as D,
    E as M,
    y as G
} from "./scheduler.c64253f0.js";
import {
    S as X,
    i as Y,
    c as b,
    a as d,
    m as v,
    t as m,
    b as c,
    d as w,
    g as P,
    e as Q
} from "./index.9bbe2ba6.js";
import {
    p as Z
} from "./stores.d2a90a39.js";
import {
    B as j
} from "./Button.0ff68f55.js";
import {
    N as ee,
    a as te,
    b as re,
    c as ne,
    d as q,
    H as F,
    P as W
} from "./profile-item.18b6d5a2.js";
import {
    I as se
} from "./info.76d42bc9.js";
import {
    M as le
} from "./message-square.9200979a.js";
import {
    R as fe
} from "./rocket.62f3882a.js";
import {
    L as y
} from "./log-in.64eb44ab.js";

function ae(f) {
    let e, s;
    return {
        c() {
            e = L("img"), this.h()
        },
        l(r) {
            e = R(r, "IMG", {
                src: !0,
                class: !0,
                alt: !0
            }), this.h()
        },
        h() {
            T(e.src, s = "/logo-white.png") || N(e, "src", s), N(e, "class", "mr-4 h-6 sm:h-7"), N(e, "alt", "FcEarn Logo")
        },
        m(r, t) {
            g(r, e, t)
        },
        p: C,
        d(r) {
            r && _(e)
        }
    }
}

function $e(f) {
    let e, s, r;
    return e = new F({
        props: {
            size: 18
        }
    }), {
        c() {
            b(e.$$.fragment), s = S(" Home")
        },
        l(t) {
            d(e.$$.fragment, t), s = D(t, " Home")
        },
        m(t, n) {
            v(e, t, n), g(t, s, n), r = !0
        },
        p: C,
        i(t) {
            r || (m(e.$$.fragment, t), r = !0)
        },
        o(t) {
            c(e.$$.fragment, t), r = !1
        },
        d(t) {
            t && _(s), w(e, t)
        }
    }
}

function ie(f) {
    let e, s, r;
    return e = new se({
        props: {
            size: 18
        }
    }), {
        c() {
            b(e.$$.fragment), s = S(`
      FAQs`)
        },
        l(t) {
            d(e.$$.fragment, t), s = D(t, `
      FAQs`)
        },
        m(t, n) {
            v(e, t, n), g(t, s, n), r = !0
        },
        p: C,
        i(t) {
            r || (m(e.$$.fragment, t), r = !0)
        },
        o(t) {
            c(e.$$.fragment, t), r = !1
        },
        d(t) {
            t && _(s), w(e, t)
        }
    }
}

function ue(f) {
    let e, s, r;
    return e = new le({
        props: {
            size: 19
        }
    }), {
        c() {
            b(e.$$.fragment), s = S(`
      Discord`)
        },
        l(t) {
            d(e.$$.fragment, t), s = D(t, `
      Discord`)
        },
        m(t, n) {
            v(e, t, n), g(t, s, n), r = !0
        },
        p: C,
        i(t) {
            r || (m(e.$$.fragment, t), r = !0)
        },
        o(t) {
            c(e.$$.fragment, t), r = !1
        },
        d(t) {
            t && _(s), w(e, t)
        }
    }
}

function oe(f) {
    let e, s, r;
    return e = new fe({
        props: {
            size: 18
        }
    }), {
        c() {
            b(e.$$.fragment), s = S(`
      Start Now`)
        },
        l(t) {
            d(e.$$.fragment, t), s = D(t, `
      Start Now`)
        },
        m(t, n) {
            v(e, t, n), g(t, s, n), r = !0
        },
        p: C,
        i(t) {
            r || (m(e.$$.fragment, t), r = !0)
        },
        o(t) {
            c(e.$$.fragment, t), r = !1
        },
        d(t) {
            t && _(s), w(e, t)
        }
    }
}

function me(f) {
    let e, s, r, t = "Register →",
        n;
    return e = new j({
        props: {
            class: "button-teal flex gap-1",
            size: "xs",
            href: "/auth/login",
            $$slots: {
                default: [pe]
            },
            $$scope: {
                ctx: f
            }
        }
    }), {
        c() {
            b(e.$$.fragment), s = z(), r = L("a"), r.textContent = t, this.h()
        },
        l(l) {
            d(e.$$.fragment, l), s = x(l), r = R(l, "A", {
                href: !0,
                class: !0,
                "data-svelte-h": !0
            }), G(r) !== "svelte-1khes7t" && (r.textContent = t), this.h()
        },
        h() {
            N(r, "href", "/auth/register"), N(r, "class", "w-full text-center")
        },
        m(l, u) {
            v(e, l, u), g(l, s, u), g(l, r, u), n = !0
        },
        i(l) {
            n || (m(e.$$.fragment, l), n = !0)
        },
        o(l) {
            c(e.$$.fragment, l), n = !1
        },
        d(l) {
            l && (_(s), _(r)), w(e, l)
        }
    }
}

function ce(f) {
    let e, s, r, t;
    return e = new j({
        props: {
            class: "button-teal flex gap-1",
            size: "xs",
            href: "/auth/login",
            $$slots: {
                default: [_e]
            },
            $$scope: {
                ctx: f
            }
        }
    }), r = new W({}), {
        c() {
            b(e.$$.fragment), s = z(), b(r.$$.fragment)
        },
        l(n) {
            d(e.$$.fragment, n), s = x(n), d(r.$$.fragment, n)
        },
        m(n, l) {
            v(e, n, l), g(n, s, l), v(r, n, l), t = !0
        },
        i(n) {
            t || (m(e.$$.fragment, n), m(r.$$.fragment, n), t = !0)
        },
        o(n) {
            c(e.$$.fragment, n), c(r.$$.fragment, n), t = !1
        },
        d(n) {
            n && _(s), w(e, n), w(r, n)
        }
    }
}

function pe(f) {
    let e, s, r;
    return e = new y({
        props: {
            size: 18
        }
    }), {
        c() {
            b(e.$$.fragment), s = S(`
          Sign in`)
        },
        l(t) {
            d(e.$$.fragment, t), s = D(t, `
          Sign in`)
        },
        m(t, n) {
            v(e, t, n), g(t, s, n), r = !0
        },
        p: C,
        i(t) {
            r || (m(e.$$.fragment, t), r = !0)
        },
        o(t) {
            c(e.$$.fragment, t), r = !1
        },
        d(t) {
            t && _(s), w(e, t)
        }
    }
}

function _e(f) {
    let e, s, r;
    return e = new F({
        props: {
            size: 18
        }
    }), {
        c() {
            b(e.$$.fragment), s = S(`
          Dashboard`)
        },
        l(t) {
            d(e.$$.fragment, t), s = D(t, `
          Dashboard`)
        },
        m(t, n) {
            v(e, t, n), g(t, s, n), r = !0
        },
        p: C,
        i(t) {
            r || (m(e.$$.fragment, t), r = !0)
        },
        o(t) {
            c(e.$$.fragment, t), r = !1
        },
        d(t) {
            t && _(s), w(e, t)
        }
    }
}

function ge(f) {
    let e, s, r, t;
    const n = [ce, me],
        l = [];

    function u(i, p) {
        return i[1].data.session ? 0 : 1
    }
    return e = u(f), s = l[e] = n[e](f), {
        c() {
            s.c(), r = M()
        },
        l(i) {
            s.l(i), r = M()
        },
        m(i, p) {
            l[e].m(i, p), g(i, r, p), t = !0
        },
        p(i, p) {
            let h = e;
            e = u(i), e !== h && (P(), c(l[h], 1, 1, () => {
                l[h] = null
            }), Q(), s = l[e], s || (s = l[e] = n[e](i), s.c()), m(s, 1), s.m(r.parentNode, r))
        },
        i(i) {
            t || (m(s), t = !0)
        },
        o(i) {
            c(s), t = !1
        },
        d(i) {
            i && _(r), l[e].d(i)
        }
    }
}

function be(f) {
    let e, s, r, t, n, l, u, i, p, h;
    return e = new q({
        props: {
            class: "flex items-center gap-1 ",
            href: "/",
            $$slots: {
                default: [$e]
            },
            $$scope: {
                ctx: f
            }
        }
    }), e.$on("click", function() {
        E(f[0] < 1024 ? f[6] : f[3]) && (f[0] < 1024 ? f[6] : f[3]).apply(this, arguments)
    }), r = new q({
        props: {
            class: "flex items-center gap-1 text-center",
            href: "/#faq",
            $$slots: {
                default: [ie]
            },
            $$scope: {
                ctx: f
            }
        }
    }), r.$on("click", function() {
        E(f[0] < 1024 ? f[6] : f[4]) && (f[0] < 1024 ? f[6] : f[4]).apply(this, arguments)
    }), n = new q({
        props: {
            href: "https://discord.gg/futearn",
            target: "_blank",
            class: "flex items-center gap-1 text-center text-purple-300",
            $$slots: {
                default: [ue]
            },
            $$scope: {
                ctx: f
            }
        }
    }), u = new q({
        props: {
            href: "/auth/register",
            class: "flex items-center gap-1 text-center text-teal-300",
            $$slots: {
                default: [oe]
            },
            $$scope: {
                ctx: f
            }
        }
    }), p = new q({
        props: {
            class: "flex flex-col lg:hidden gap-4",
            $$slots: {
                default: [ge]
            },
            $$scope: {
                ctx: f
            }
        }
    }), {
        c() {
            b(e.$$.fragment), s = z(), b(r.$$.fragment), t = z(), b(n.$$.fragment), l = z(), b(u.$$.fragment), i = z(), b(p.$$.fragment)
        },
        l(a) {
            d(e.$$.fragment, a), s = x(a), d(r.$$.fragment, a), t = x(a), d(n.$$.fragment, a), l = x(a), d(u.$$.fragment, a), i = x(a), d(p.$$.fragment, a)
        },
        m(a, o) {
            v(e, a, o), g(a, s, o), v(r, a, o), g(a, t, o), v(n, a, o), g(a, l, o), v(u, a, o), g(a, i, o), v(p, a, o), h = !0
        },
        p(a, o) {
            f = a;
            const A = {};
            o & 128 && (A.$$scope = {
                dirty: o,
                ctx: f
            }), e.$set(A);
            const $ = {};
            o & 128 && ($.$$scope = {
                dirty: o,
                ctx: f
            }), r.$set($);
            const k = {};
            o & 128 && (k.$$scope = {
                dirty: o,
                ctx: f
            }), n.$set(k);
            const I = {};
            o & 128 && (I.$$scope = {
                dirty: o,
                ctx: f
            }), u.$set(I);
            const H = {};
            o & 130 && (H.$$scope = {
                dirty: o,
                ctx: f
            }), p.$set(H)
        },
        i(a) {
            h || (m(e.$$.fragment, a), m(r.$$.fragment, a), m(n.$$.fragment, a), m(u.$$.fragment, a), m(p.$$.fragment, a), h = !0)
        },
        o(a) {
            c(e.$$.fragment, a), c(r.$$.fragment, a), c(n.$$.fragment, a), c(u.$$.fragment, a), c(p.$$.fragment, a), h = !1
        },
        d(a) {
            a && (_(s), _(t), _(l), _(i)), w(e, a), w(r, a), w(n, a), w(u, a), w(p, a)
        }
    }
}

function de(f) {
    let e, s, r, t = "Register →",
        n;
    return e = new j({
        props: {
            class: "button-teal flex gap-1",
            size: "xs",
            href: "/auth/login",
            $$slots: {
                default: [we]
            },
            $$scope: {
                ctx: f
            }
        }
    }), {
        c() {
            b(e.$$.fragment), s = z(), r = L("a"), r.textContent = t, this.h()
        },
        l(l) {
            d(e.$$.fragment, l), s = x(l), r = R(l, "A", {
                href: !0,
                class: !0,
                "data-svelte-h": !0
            }), G(r) !== "svelte-bjdf01" && (r.textContent = t), this.h()
        },
        h() {
            N(r, "href", "/auth/register"), N(r, "class", "text-sm")
        },
        m(l, u) {
            v(e, l, u), g(l, s, u), g(l, r, u), n = !0
        },
        i(l) {
            n || (m(e.$$.fragment, l), n = !0)
        },
        o(l) {
            c(e.$$.fragment, l), n = !1
        },
        d(l) {
            l && (_(s), _(r)), w(e, l)
        }
    }
}

function ve(f) {
    let e, s, r, t;
    return e = new j({
        props: {
            class: "button-teal flex gap-1",
            size: "xs",
            href: "/auth/login",
            $$slots: {
                default: [ke]
            },
            $$scope: {
                ctx: f
            }
        }
    }), r = new W({}), {
        c() {
            b(e.$$.fragment), s = z(), b(r.$$.fragment)
        },
        l(n) {
            d(e.$$.fragment, n), s = x(n), d(r.$$.fragment, n)
        },
        m(n, l) {
            v(e, n, l), g(n, s, l), v(r, n, l), t = !0
        },
        i(n) {
            t || (m(e.$$.fragment, n), m(r.$$.fragment, n), t = !0)
        },
        o(n) {
            c(e.$$.fragment, n), c(r.$$.fragment, n), t = !1
        },
        d(n) {
            n && _(s), w(e, n), w(r, n)
        }
    }
}

function we(f) {
    let e, s, r;
    return e = new y({
        props: {
            size: 18
        }
    }), {
        c() {
            b(e.$$.fragment), s = S(`
        Sign in`)
        },
        l(t) {
            d(e.$$.fragment, t), s = D(t, `
        Sign in`)
        },
        m(t, n) {
            v(e, t, n), g(t, s, n), r = !0
        },
        p: C,
        i(t) {
            r || (m(e.$$.fragment, t), r = !0)
        },
        o(t) {
            c(e.$$.fragment, t), r = !1
        },
        d(t) {
            t && _(s), w(e, t)
        }
    }
}

function ke(f) {
    let e, s, r;
    return e = new F({
        props: {
            size: 18
        }
    }), {
        c() {
            b(e.$$.fragment), s = S(`
        Dashboard`)
        },
        l(t) {
            d(e.$$.fragment, t), s = D(t, `
        Dashboard`)
        },
        m(t, n) {
            v(e, t, n), g(t, s, n), r = !0
        },
        p: C,
        i(t) {
            r || (m(e.$$.fragment, t), r = !0)
        },
        o(t) {
            c(e.$$.fragment, t), r = !1
        },
        d(t) {
            t && _(s), w(e, t)
        }
    }
}

function he(f) {
    let e, s, r, t, n, l, u, i, p, h;
    e = new te({
        props: {
            href: "/#",
            $$slots: {
                default: [ae]
            },
            $$scope: {
                ctx: f
            }
        }
    }), r = new re({
        props: {
            class: "ml-3 lg:hidden hover:bg-zinc-800"
        }
    }), r.$on("click", function() {
        E(f[6]) && f[6].apply(this, arguments)
    }), n = new ne({
        props: {
            hidden: f[5],
            divClass: "w-full lg:block lg:w-auto",
            ulClass: `flex flex-col p-4 mt-4 md:gap-3 lg:gap-8 lg:flex-row lg:mt-0
     lg:text-base bg-transparent border-0 lg:items-center lg:justify-center`,
            activeClass: "text-teal-300",
            nonActiveClass: "text-zinc-100",
            $$slots: {
                default: [be]
            },
            $$scope: {
                ctx: f
            }
        }
    });
    const a = [ve, de],
        o = [];

    function A($, k) {
        return $[1].data.session ? 0 : 1
    }
    return i = A(f), p = o[i] = a[i](f), {
        c() {
            b(e.$$.fragment), s = z(), b(r.$$.fragment), t = z(), b(n.$$.fragment), l = z(), u = L("div"), p.c(), this.h()
        },
        l($) {
            d(e.$$.fragment, $), s = x($), d(r.$$.fragment, $), t = x($), d(n.$$.fragment, $), l = x($), u = R($, "DIV", {
                class: !0
            });
            var k = O(u);
            p.l(k), k.forEach(_), this.h()
        },
        h() {
            N(u, "class", "hidden lg:flex gap-3 items-center")
        },
        m($, k) {
            v(e, $, k), g($, s, k), v(r, $, k), g($, t, k), v(n, $, k), g($, l, k), g($, u, k), o[i].m(u, null), h = !0
        },
        p($, k) {
            f = $;
            const I = {};
            k & 128 && (I.$$scope = {
                dirty: k,
                ctx: f
            }), e.$set(I);
            const H = {};
            k & 32 && (H.hidden = f[5]), k & 195 && (H.$$scope = {
                dirty: k,
                ctx: f
            }), n.$set(H);
            let B = i;
            i = A(f), i !== B && (P(), c(o[B], 1, 1, () => {
                o[B] = null
            }), Q(), p = o[i], p || (p = o[i] = a[i](f), p.c()), m(p, 1), p.m(u, null))
        },
        i($) {
            h || (m(e.$$.fragment, $), m(r.$$.fragment, $), m(n.$$.fragment, $), m(p), h = !0)
        },
        o($) {
            c(e.$$.fragment, $), c(r.$$.fragment, $), c(n.$$.fragment, $), c(p), h = !1
        },
        d($) {
            $ && (_(s), _(t), _(l), _(u)), w(e, $), w(r, $), w(n, $), o[i].d()
        }
    }
}

function ze(f) {
    let e, s, r, t;
    return V(f[2]), e = new ee({
        props: {
            class: "flex bg-zinc-900/75 backdrop-blur-sm p-4 fixed w-full z-20 border-b border-zinc-800",
            $$slots: {
                default: [he, ({
                    hidden: n,
                    toggle: l
                }) => ({
                    5: n,
                    6: l
                }), ({
                    hidden: n,
                    toggle: l
                }) => (n ? 32 : 0) | (l ? 64 : 0)]
            },
            $$scope: {
                ctx: f
            }
        }
    }), {
        c() {
            b(e.$$.fragment)
        },
        l(n) {
            d(e.$$.fragment, n)
        },
        m(n, l) {
            v(e, n, l), s = !0, r || (t = J(window, "resize", f[2]), r = !0)
        },
        p(n, [l]) {
            const u = {};
            l & 227 && (u.$$scope = {
                dirty: l,
                ctx: n
            }), e.$set(u)
        },
        i(n) {
            s || (m(e.$$.fragment, n), s = !0)
        },
        o(n) {
            c(e.$$.fragment, n), s = !1
        },
        d(n) {
            w(e, n), r = !1, t()
        }
    }
}

function xe(f, e, s) {
    let r;
    K(f, Z, i => s(1, r = i));
    let t = 0;

    function n() {
        s(0, t = window.innerWidth)
    }
    return [t, r, n, () => {}, () => {}]
}
class Re extends X {
    constructor(e) {
        super(), Y(this, e, xe, ze, U, {})
    }
}
export {
    Re as H
};