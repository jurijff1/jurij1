import {
    s as W,
    E as M,
    l as i,
    h as f,
    a as C,
    c as x,
    t as u,
    i as $,
    I as w,
    e as k,
    d as z,
    n as S,
    B as J,
    H as K,
    f as j,
    y as q,
    j as U,
    m as D
} from "./scheduler.c64253f0.js";
import {
    S as V,
    i as G,
    g as Q,
    b as m,
    e as X,
    t as p,
    c as _,
    a as b,
    m as d,
    d as g,
    h as Z
} from "./index.9bbe2ba6.js";
import {
    B as y
} from "./Badge.ffbab6d0.js";
import {
    b as E,
    H as R
} from "./table.5e269678.js";
import {
    A as N
} from "./enums.c4d7a959.js";
import {
    B as H
} from "./Button.0ff68f55.js";
import {
    M as ee
} from "./Modal.aa4ba158.js";
import {
    A as te
} from "./alert-triangle.c52f97b8.js";
import {
    T as re
} from "./trash.f3456534.js";

function ne(s) {
    let t, r, l, n;
    return t = new y({
        props: {
            border: !0,
            class: "badge-error min-w-[150px] cursor-help",
            $$slots: {
                default: [ge]
            },
            $$scope: {
                ctx: s
            }
        }
    }), l = new E({
        props: {
            placement: "bottom",
            class: "bg-zinc-800 border border-zinc-700 text-zinc-100 min-w-[150px] ",
            $$slots: {
                default: [Se]
            },
            $$scope: {
                ctx: s
            }
        }
    }), {
        c() {
            _(t.$$.fragment), r = C(), _(l.$$.fragment)
        },
        l(e) {
            b(t.$$.fragment, e), r = x(e), b(l.$$.fragment, e)
        },
        m(e, o) {
            d(t, e, o), i(e, r, o), d(l, e, o), n = !0
        },
        p(e, o) {
            const c = {};
            o & 3 && (c.$$scope = {
                dirty: o,
                ctx: e
            }), t.$set(c);
            const a = {};
            o & 3 && (a.$$scope = {
                dirty: o,
                ctx: e
            }), l.$set(a)
        },
        i(e) {
            n || (p(t.$$.fragment, e), p(l.$$.fragment, e), n = !0)
        },
        o(e) {
            m(t.$$.fragment, e), m(l.$$.fragment, e), n = !1
        },
        d(e) {
            e && f(r), g(t, e), g(l, e)
        }
    }
}

function le(s) {
    let t, r, l, n;
    return t = new y({
        props: {
            border: !0,
            class: "badge-yellow min-w-[150px] cursor-help",
            $$slots: {
                default: [Ue]
            },
            $$scope: {
                ctx: s
            }
        }
    }), l = new E({
        props: {
            placement: "bottom",
            class: "bg-zinc-800 border border-zinc-700 text-zinc-100 min-w-[250px] max-w-sm break-words",
            $$slots: {
                default: [Le]
            },
            $$scope: {
                ctx: s
            }
        }
    }), {
        c() {
            _(t.$$.fragment), r = C(), _(l.$$.fragment)
        },
        l(e) {
            b(t.$$.fragment, e), r = x(e), b(l.$$.fragment, e)
        },
        m(e, o) {
            d(t, e, o), i(e, r, o), d(l, e, o), n = !0
        },
        p(e, o) {
            const c = {};
            o & 2 && (c.$$scope = {
                dirty: o,
                ctx: e
            }), t.$set(c);
            const a = {};
            o & 2 && (a.$$scope = {
                dirty: o,
                ctx: e
            }), l.$set(a)
        },
        i(e) {
            n || (p(t.$$.fragment, e), p(l.$$.fragment, e), n = !0)
        },
        o(e) {
            m(t.$$.fragment, e), m(l.$$.fragment, e), n = !1
        },
        d(e) {
            e && f(r), g(t, e), g(l, e)
        }
    }
}

function oe(s) {
    let t, r, l, n;
    return t = new y({
        props: {
            border: !0,
            class: "badge-yellow min-w-[150px] cursor-help",
            $$slots: {
                default: [Me]
            },
            $$scope: {
                ctx: s
            }
        }
    }), l = new E({
        props: {
            placement: "bottom",
            class: "bg-zinc-800 border border-zinc-700 text-zinc-100 min-w-[250px] max-w-sm break-words",
            $$slots: {
                default: [Ye]
            },
            $$scope: {
                ctx: s
            }
        }
    }), {
        c() {
            _(t.$$.fragment), r = C(), _(l.$$.fragment)
        },
        l(e) {
            b(t.$$.fragment, e), r = x(e), b(l.$$.fragment, e)
        },
        m(e, o) {
            d(t, e, o), i(e, r, o), d(l, e, o), n = !0
        },
        p(e, o) {
            const c = {};
            o & 2 && (c.$$scope = {
                dirty: o,
                ctx: e
            }), t.$set(c);
            const a = {};
            o & 2 && (a.$$scope = {
                dirty: o,
                ctx: e
            }), l.$set(a)
        },
        i(e) {
            n || (p(t.$$.fragment, e), p(l.$$.fragment, e), n = !0)
        },
        o(e) {
            m(t.$$.fragment, e), m(l.$$.fragment, e), n = !1
        },
        d(e) {
            e && f(r), g(t, e), g(l, e)
        }
    }
}

function se(s) {
    let t, r, l, n;
    return t = new y({
        props: {
            border: !0,
            class: "badge-yellow min-w-[150px] cursor-help",
            $$slots: {
                default: [je]
            },
            $$scope: {
                ctx: s
            }
        }
    }), l = new E({
        props: {
            placement: "bottom",
            class: "bg-zinc-800 border border-zinc-700 text-zinc-100 min-w-[250px] max-w-sm break-words",
            $$slots: {
                default: [qe]
            },
            $$scope: {
                ctx: s
            }
        }
    }), {
        c() {
            _(t.$$.fragment), r = C(), _(l.$$.fragment)
        },
        l(e) {
            b(t.$$.fragment, e), r = x(e), b(l.$$.fragment, e)
        },
        m(e, o) {
            d(t, e, o), i(e, r, o), d(l, e, o), n = !0
        },
        p(e, o) {
            const c = {};
            o & 2 && (c.$$scope = {
                dirty: o,
                ctx: e
            }), t.$set(c);
            const a = {};
            o & 2 && (a.$$scope = {
                dirty: o,
                ctx: e
            }), l.$set(a)
        },
        i(e) {
            n || (p(t.$$.fragment, e), p(l.$$.fragment, e), n = !0)
        },
        o(e) {
            m(t.$$.fragment, e), m(l.$$.fragment, e), n = !1
        },
        d(e) {
            e && f(r), g(t, e), g(l, e)
        }
    }
}

function fe(s) {
    let t, r, l, n;
    return t = new y({
        props: {
            border: !0,
            class: "badge-blue min-w-[150px] cursor-help",
            $$slots: {
                default: [He]
            },
            $$scope: {
                ctx: s
            }
        }
    }), l = new E({
        props: {
            placement: "bottom",
            class: "bg-zinc-800 border border-zinc-700 text-zinc-100 min-w-[250px] max-w-sm break-words",
            $$slots: {
                default: [We]
            },
            $$scope: {
                ctx: s
            }
        }
    }), {
        c() {
            _(t.$$.fragment), r = C(), _(l.$$.fragment)
        },
        l(e) {
            b(t.$$.fragment, e), r = x(e), b(l.$$.fragment, e)
        },
        m(e, o) {
            d(t, e, o), i(e, r, o), d(l, e, o), n = !0
        },
        p(e, o) {
            const c = {};
            o & 2 && (c.$$scope = {
                dirty: o,
                ctx: e
            }), t.$set(c);
            const a = {};
            o & 2 && (a.$$scope = {
                dirty: o,
                ctx: e
            }), l.$set(a)
        },
        i(e) {
            n || (p(t.$$.fragment, e), p(l.$$.fragment, e), n = !0)
        },
        o(e) {
            m(t.$$.fragment, e), m(l.$$.fragment, e), n = !1
        },
        d(e) {
            e && f(r), g(t, e), g(l, e)
        }
    }
}

function ie(s) {
    let t, r, l, n;
    return t = new y({
        props: {
            border: !0,
            class: "badge-yellow min-w-[150px] cursor-help",
            $$slots: {
                default: [Ve]
            },
            $$scope: {
                ctx: s
            }
        }
    }), l = new E({
        props: {
            placement: "bottom",
            class: "bg-zinc-800 border border-zinc-700 text-zinc-100 min-w-[250px] max-w-sm break-words",
            $$slots: {
                default: [Ge]
            },
            $$scope: {
                ctx: s
            }
        }
    }), {
        c() {
            _(t.$$.fragment), r = C(), _(l.$$.fragment)
        },
        l(e) {
            b(t.$$.fragment, e), r = x(e), b(l.$$.fragment, e)
        },
        m(e, o) {
            d(t, e, o), i(e, r, o), d(l, e, o), n = !0
        },
        p(e, o) {
            const c = {};
            o & 2 && (c.$$scope = {
                dirty: o,
                ctx: e
            }), t.$set(c);
            const a = {};
            o & 2 && (a.$$scope = {
                dirty: o,
                ctx: e
            }), l.$set(a)
        },
        i(e) {
            n || (p(t.$$.fragment, e), p(l.$$.fragment, e), n = !0)
        },
        o(e) {
            m(t.$$.fragment, e), m(l.$$.fragment, e), n = !1
        },
        d(e) {
            e && f(r), g(t, e), g(l, e)
        }
    }
}

function ae(s) {
    let t, r, l, n;
    return t = new y({
        props: {
            border: !0,
            class: "badge-secondary min-w-[150px]",
            $$slots: {
                default: [Je]
            },
            $$scope: {
                ctx: s
            }
        }
    }), l = new E({
        props: {
            placement: "bottom",
            class: "bg-zinc-800 border border-zinc-700 text-zinc-100 min-w-[250px] ",
            $$slots: {
                default: [Ke]
            },
            $$scope: {
                ctx: s
            }
        }
    }), {
        c() {
            _(t.$$.fragment), r = C(), _(l.$$.fragment)
        },
        l(e) {
            b(t.$$.fragment, e), r = x(e), b(l.$$.fragment, e)
        },
        m(e, o) {
            d(t, e, o), i(e, r, o), d(l, e, o), n = !0
        },
        p(e, o) {
            const c = {};
            o & 3 && (c.$$scope = {
                dirty: o,
                ctx: e
            }), t.$set(c);
            const a = {};
            o & 2 && (a.$$scope = {
                dirty: o,
                ctx: e
            }), l.$set(a)
        },
        i(e) {
            n || (p(t.$$.fragment, e), p(l.$$.fragment, e), n = !0)
        },
        o(e) {
            m(t.$$.fragment, e), m(l.$$.fragment, e), n = !1
        },
        d(e) {
            e && f(r), g(t, e), g(l, e)
        }
    }
}

function ce(s) {
    let t, r, l, n;
    return t = new y({
        props: {
            border: !0,
            class: "badge-yellow min-w-[150px] cursor-help",
            $$slots: {
                default: [Qe]
            },
            $$scope: {
                ctx: s
            }
        }
    }), l = new E({
        props: {
            placement: "bottom",
            class: "bg-zinc-800 border border-zinc-700 text-zinc-100 min-w-[250px]",
            $$slots: {
                default: [Xe]
            },
            $$scope: {
                ctx: s
            }
        }
    }), {
        c() {
            _(t.$$.fragment), r = C(), _(l.$$.fragment)
        },
        l(e) {
            b(t.$$.fragment, e), r = x(e), b(l.$$.fragment, e)
        },
        m(e, o) {
            d(t, e, o), i(e, r, o), d(l, e, o), n = !0
        },
        p(e, o) {
            const c = {};
            o & 3 && (c.$$scope = {
                dirty: o,
                ctx: e
            }), t.$set(c);
            const a = {};
            o & 2 && (a.$$scope = {
                dirty: o,
                ctx: e
            }), l.$set(a)
        },
        i(e) {
            n || (p(t.$$.fragment, e), p(l.$$.fragment, e), n = !0)
        },
        o(e) {
            m(t.$$.fragment, e), m(l.$$.fragment, e), n = !1
        },
        d(e) {
            e && f(r), g(t, e), g(l, e)
        }
    }
}

function ue(s) {
    let t, r, l, n;
    return t = new y({
        props: {
            border: !0,
            class: "badge-secondary min-w-[150px] cursor-help",
            $$slots: {
                default: [Ze]
            },
            $$scope: {
                ctx: s
            }
        }
    }), l = new E({
        props: {
            placement: "bottom",
            class: "bg-zinc-800 border border-zinc-700 text-zinc-100 min-w-[250px] ",
            $$slots: {
                default: [et]
            },
            $$scope: {
                ctx: s
            }
        }
    }), {
        c() {
            _(t.$$.fragment), r = C(), _(l.$$.fragment)
        },
        l(e) {
            b(t.$$.fragment, e), r = x(e), b(l.$$.fragment, e)
        },
        m(e, o) {
            d(t, e, o), i(e, r, o), d(l, e, o), n = !0
        },
        p(e, o) {
            const c = {};
            o & 3 && (c.$$scope = {
                dirty: o,
                ctx: e
            }), t.$set(c);
            const a = {};
            o & 2 && (a.$$scope = {
                dirty: o,
                ctx: e
            }), l.$set(a)
        },
        i(e) {
            n || (p(t.$$.fragment, e), p(l.$$.fragment, e), n = !0)
        },
        o(e) {
            m(t.$$.fragment, e), m(l.$$.fragment, e), n = !1
        },
        d(e) {
            e && f(r), g(t, e), g(l, e)
        }
    }
}

function $e(s) {
    let t, r, l, n;
    return t = new y({
        props: {
            border: !0,
            class: "badge-secondary min-w-[150px] cursor-help",
            $$slots: {
                default: [tt]
            },
            $$scope: {
                ctx: s
            }
        }
    }), l = new E({
        props: {
            placement: "bottom",
            class: "bg-zinc-800 border border-zinc-700 text-zinc-100 min-w-[250px] ",
            $$slots: {
                default: [rt]
            },
            $$scope: {
                ctx: s
            }
        }
    }), {
        c() {
            _(t.$$.fragment), r = C(), _(l.$$.fragment)
        },
        l(e) {
            b(t.$$.fragment, e), r = x(e), b(l.$$.fragment, e)
        },
        m(e, o) {
            d(t, e, o), i(e, r, o), d(l, e, o), n = !0
        },
        p(e, o) {
            const c = {};
            o & 3 && (c.$$scope = {
                dirty: o,
                ctx: e
            }), t.$set(c);
            const a = {};
            o & 2 && (a.$$scope = {
                dirty: o,
                ctx: e
            }), l.$set(a)
        },
        i(e) {
            n || (p(t.$$.fragment, e), p(l.$$.fragment, e), n = !0)
        },
        o(e) {
            m(t.$$.fragment, e), m(l.$$.fragment, e), n = !1
        },
        d(e) {
            e && f(r), g(t, e), g(l, e)
        }
    }
}

function me(s) {
    let t, r, l, n;
    return t = new y({
        props: {
            border: !0,
            class: "badge-teal min-w-[150px] cursor-help",
            $$slots: {
                default: [nt]
            },
            $$scope: {
                ctx: s
            }
        }
    }), l = new E({
        props: {
            placement: "bottom",
            class: "bg-zinc-800 border border-zinc-700 text-zinc-100 min-w-[250px]",
            $$slots: {
                default: [lt]
            },
            $$scope: {
                ctx: s
            }
        }
    }), {
        c() {
            _(t.$$.fragment), r = C(), _(l.$$.fragment)
        },
        l(e) {
            b(t.$$.fragment, e), r = x(e), b(l.$$.fragment, e)
        },
        m(e, o) {
            d(t, e, o), i(e, r, o), d(l, e, o), n = !0
        },
        p(e, o) {
            const c = {};
            o & 3 && (c.$$scope = {
                dirty: o,
                ctx: e
            }), t.$set(c);
            const a = {};
            o & 2 && (a.$$scope = {
                dirty: o,
                ctx: e
            }), l.$set(a)
        },
        i(e) {
            n || (p(t.$$.fragment, e), p(l.$$.fragment, e), n = !0)
        },
        o(e) {
            m(t.$$.fragment, e), m(l.$$.fragment, e), n = !1
        },
        d(e) {
            e && f(r), g(t, e), g(l, e)
        }
    }
}

function pe(s) {
    let t;
    return {
        c() {
            t = u(s[0])
        },
        l(r) {
            t = $(r, s[0])
        },
        m(r, l) {
            i(r, t, l)
        },
        p(r, l) {
            l & 1 && S(t, r[0])
        },
        d(r) {
            r && f(t)
        }
    }
}

function _e(s) {
    let t;
    return {
        c() {
            t = u("FullUnassigned")
        },
        l(r) {
            t = $(r, "FullUnassigned")
        },
        m(r, l) {
            i(r, t, l)
        },
        p: w,
        d(r) {
            r && f(t)
        }
    }
}

function be(s) {
    let t;
    return {
        c() {
            t = u("FullTransferlist")
        },
        l(r) {
            t = $(r, "FullTransferlist")
        },
        m(r, l) {
            i(r, t, l)
        },
        p: w,
        d(r) {
            r && f(t)
        }
    }
}

function de(s) {
    let t;
    return {
        c() {
            t = u("NoCoins")
        },
        l(r) {
            t = $(r, "NoCoins")
        },
        m(r, l) {
            i(r, t, l)
        },
        p: w,
        d(r) {
            r && f(t)
        }
    }
}

function ge(s) {
    let t, r, l;

    function n(c, a) {
        return c[0] === "notEnoughCredit" ? de : c[0] === "destinationFull" ? be : c[0] === "purchasedItemsFull" ? _e : pe
    }
    let e = n(s),
        o = e(s);
    return r = new R({
        props: {
            size: 15,
            class: "ml-1"
        }
    }), {
        c() {
            o.c(), t = C(), _(r.$$.fragment)
        },
        l(c) {
            o.l(c), t = x(c), b(r.$$.fragment, c)
        },
        m(c, a) {
            o.m(c, a), i(c, t, a), d(r, c, a), l = !0
        },
        p(c, a) {
            e === (e = n(c)) && o ? o.p(c, a) : (o.d(1), o = e(c), o && (o.c(), o.m(t.parentNode, t)))
        },
        i(c) {
            l || (p(r.$$.fragment, c), l = !0)
        },
        o(c) {
            m(r.$$.fragment, c), l = !1
        },
        d(c) {
            c && f(t), o.d(c), g(r, c)
        }
    }
}

function we(s) {
    let t;
    return {
        c() {
            t = u(s[0])
        },
        l(r) {
            t = $(r, s[0])
        },
        m(r, l) {
            i(r, t, l)
        },
        p(r, l) {
            l & 1 && S(t, r[0])
        },
        d(r) {
            r && f(t)
        }
    }
}

function ke(s) {
    let t;
    return {
        c() {
            t = u("Likely an EA FC update or something unexpected happened.")
        },
        l(r) {
            t = $(r, "Likely an EA FC update or something unexpected happened.")
        },
        m(r, l) {
            i(r, t, l)
        },
        p: w,
        d(r) {
            r && f(t)
        }
    }
}

function ze(s) {
    let t;
    return {
        c() {
            t = u("Password reset by EA. Update it.")
        },
        l(r) {
            t = $(r, "Password reset by EA. Update it.")
        },
        m(r, l) {
            i(r, t, l)
        },
        p: w,
        d(r) {
            r && f(t)
        }
    }
}

function Ce(s) {
    let t;
    return {
        c() {
            t = u("Account got disabled by EA.")
        },
        l(r) {
            t = $(r, "Account got disabled by EA.")
        },
        m(r, l) {
            i(r, t, l)
        },
        p: w,
        d(r) {
            r && f(t)
        }
    }
}

function xe(s) {
    let t, r, l;
    return {
        c() {
            t = u("Captcha error. "), r = k("br"), l = u("You can retry or wait.")
        },
        l(n) {
            t = $(n, "Captcha error. "), r = z(n, "BR", {}), l = $(n, "You can retry or wait.")
        },
        m(n, e) {
            i(n, t, e), i(n, r, e), i(n, l, e)
        },
        p: w,
        d(n) {
            n && (f(t), f(r), f(l))
        }
    }
}

function ve(s) {
    let t;
    return {
        c() {
            t = u("Clear 5+ unassigned players.")
        },
        l(r) {
            t = $(r, "Clear 5+ unassigned players.")
        },
        m(r, l) {
            i(r, t, l)
        },
        p: w,
        d(r) {
            r && f(t)
        }
    }
}

function Ae(s) {
    let t;
    return {
        c() {
            t = u("Something unexpected happened.")
        },
        l(r) {
            t = $(r, "Something unexpected happened.")
        },
        m(r, l) {
            i(r, t, l)
        },
        p: w,
        d(r) {
            r && f(t)
        }
    }
}

function ye(s) {
    let t, r, l, n, e;
    return {
        c() {
            t = u("Your account is already linked to another email."), r = k("br"), l = u(` Revert to the previous EA email,
      `), n = k("br"), e = u("then update it on your FUTEarn acc settings.")
        },
        l(o) {
            t = $(o, "Your account is already linked to another email."), r = z(o, "BR", {}), l = $(o, ` Revert to the previous EA email,
      `), n = z(o, "BR", {}), e = $(o, "then update it on your FUTEarn acc settings.")
        },
        m(o, c) {
            i(o, t, c), i(o, r, c), i(o, l, c), i(o, n, c), i(o, e, c)
        },
        p: w,
        d(o) {
            o && (f(t), f(r), f(l), f(n), f(e))
        }
    }
}

function Ee(s) {
    let t;
    return {
        c() {
            t = u("Wrong platform selected.")
        },
        l(r) {
            t = $(r, "Wrong platform selected.")
        },
        m(r, l) {
            i(r, t, l)
        },
        p: w,
        d(r) {
            r && f(t)
        }
    }
}

function Re(s) {
    let t, r, l;
    return {
        c() {
            t = u("Proxy issue, "), r = k("br"), l = u("we're on it to fix it.")
        },
        l(n) {
            t = $(n, "Proxy issue, "), r = z(n, "BR", {}), l = $(n, "we're on it to fix it.")
        },
        m(n, e) {
            i(n, t, e), i(n, r, e), i(n, l, e)
        },
        p: w,
        d(n) {
            n && (f(t), f(r), f(l))
        }
    }
}

function he(s) {
    let t, r, l;
    return {
        c() {
            t = u("Your EA login code or backup code"), r = k("br"), l = u(" is incorrect or has expired.")
        },
        l(n) {
            t = $(n, "Your EA login code or backup code"), r = z(n, "BR", {}), l = $(n, " is incorrect or has expired.")
        },
        m(n, e) {
            i(n, t, e), i(n, r, e), i(n, l, e)
        },
        p: w,
        d(n) {
            n && (f(t), f(r), f(l))
        }
    }
}

function Be(s) {
    let t, r, l;
    return {
        c() {
            t = u("FUT acc email "), r = k("br"), l = u("or password is wrong")
        },
        l(n) {
            t = $(n, "FUT acc email "), r = z(n, "BR", {}), l = $(n, "or password is wrong")
        },
        m(n, e) {
            i(n, t, e), i(n, r, e), i(n, l, e)
        },
        p: w,
        d(n) {
            n && (f(t), f(r), f(l))
        }
    }
}

function Fe(s) {
    let t, r, l;
    return {
        c() {
            t = u("No EA FC Club found."), r = k("br"), l = u(" Restart or check platform.")
        },
        l(n) {
            t = $(n, "No EA FC Club found."), r = z(n, "BR", {}), l = $(n, " Restart or check platform.")
        },
        m(n, e) {
            i(n, t, e), i(n, r, e), i(n, l, e)
        },
        p: w,
        d(n) {
            n && (f(t), f(r), f(l))
        }
    }
}

function Te(s) {
    let t, r, l;
    return {
        c() {
            t = u("Enable two-factor"), r = k("br"), l = u(" authentication.")
        },
        l(n) {
            t = $(n, "Enable two-factor"), r = z(n, "BR", {}), l = $(n, " authentication.")
        },
        m(n, e) {
            i(n, t, e), i(n, r, e), i(n, l, e)
        },
        p: w,
        d(n) {
            n && (f(t), f(r), f(l))
        }
    }
}

function Ie(s) {
    let t;
    return {
        c() {
            t = u("Tradepile full. Clear space.")
        },
        l(r) {
            t = $(r, "Tradepile full. Clear space.")
        },
        m(r, l) {
            i(r, t, l)
        },
        p: w,
        d(r) {
            r && f(t)
        }
    }
}

function De(s) {
    let t;
    return {
        c() {
            t = u("No login possible to web app.")
        },
        l(r) {
            t = $(r, "No login possible to web app.")
        },
        m(r, l) {
            i(r, t, l)
        },
        p: w,
        d(r) {
            r && f(t)
        }
    }
}

function Pe(s) {
    let t;
    return {
        c() {
            t = u("A minimum of 1000 coins is required to start the transfer")
        },
        l(r) {
            t = $(r, "A minimum of 1000 coins is required to start the transfer")
        },
        m(r, l) {
            i(r, t, l)
        },
        p: w,
        d(r) {
            r && f(t)
        }
    }
}

function Oe(s) {
    let t, r, l;
    return {
        c() {
            t = u("Early access has ended."), r = k("br"), l = u(" Connect your EA account to your console to activate it.")
        },
        l(n) {
            t = $(n, "Early access has ended."), r = z(n, "BR", {}), l = $(n, " Connect your EA account to your console to activate it.")
        },
        m(n, e) {
            i(n, t, e), i(n, r, e), i(n, l, e)
        },
        p: w,
        d(n) {
            n && (f(t), f(r), f(l))
        }
    }
}

function Ne(s) {
    let t, r, l;
    return {
        c() {
            t = u("Transfer market locked or not unlocked yet"), r = k("br"), l = u(" (Play 3 games daily for fastest unlock).")
        },
        l(n) {
            t = $(n, "Transfer market locked or not unlocked yet"), r = z(n, "BR", {}), l = $(n, " (Play 3 games daily for fastest unlock).")
        },
        m(n, e) {
            i(n, t, e), i(n, r, e), i(n, l, e)
        },
        p: w,
        d(n) {
            n && (f(t), f(r), f(l))
        }
    }
}

function Se(s) {
    let t;

    function r(e, o) {
        return e[0] === "noMarket" ? Ne : e[0] === "trialExpired" ? Oe : e[0] === "notEnoughCredit" ? Pe : e[0] === "eaDown" ? De : e[0] === "destinationFull" ? Ie : e[0] === "noTwoFactor" ? Te : e[0] === "noClub" ? Fe : e[0] === "wrongCredentials" ? Be : e[0] === "wrongCode" ? he : e[0] === "proxyDown" ? Re : e[0] === "wrongPlatform" ? Ee : e[0] === "duplicated" ? ye : e[0] === "unknown" ? Ae : e[0] === "purchasedItemsFull" ? ve : e[0] === "captchaFailed" ? xe : e[0] === "disabled" ? Ce : e[0] === "expiredPassword" ? ze : e[0] === "badRequest" ? ke : we
    }
    let l = r(s),
        n = l(s);
    return {
        c() {
            n.c(), t = M()
        },
        l(e) {
            n.l(e), t = M()
        },
        m(e, o) {
            n.m(e, o), i(e, t, o)
        },
        p(e, o) {
            l === (l = r(e)) && n ? n.p(e, o) : (n.d(1), n = l(e), n && (n.c(), n.m(t.parentNode, t)))
        },
        d(e) {
            e && f(t), n.d(e)
        }
    }
}

function Ue(s) {
    let t, r, l;
    return r = new R({
        props: {
            size: 15,
            class: "ml-1"
        }
    }), {
        c() {
            t = u(`SoftBan
    `), _(r.$$.fragment)
        },
        l(n) {
            t = $(n, `SoftBan
    `), b(r.$$.fragment, n)
        },
        m(n, e) {
            i(n, t, e), d(r, n, e), l = !0
        },
        p: w,
        i(n) {
            l || (p(r.$$.fragment, n), l = !0)
        },
        o(n) {
            m(r.$$.fragment, n), l = !1
        },
        d(n) {
            n && f(t), g(r, n)
        }
    }
}

function Le(s) {
    let t;
    return {
        c() {
            t = u("Temporary market block on web app (5min - 24h).")
        },
        l(r) {
            t = $(r, "Temporary market block on web app (5min - 24h).")
        },
        m(r, l) {
            i(r, t, l)
        },
        d(r) {
            r && f(t)
        }
    }
}

function Me(s) {
    let t, r, l;
    return r = new R({
        props: {
            size: 15,
            class: "ml-1"
        }
    }), {
        c() {
            t = u(`Captcha
    `), _(r.$$.fragment)
        },
        l(n) {
            t = $(n, `Captcha
    `), b(r.$$.fragment, n)
        },
        m(n, e) {
            i(n, t, e), d(r, n, e), l = !0
        },
        p: w,
        i(n) {
            l || (p(r.$$.fragment, n), l = !0)
        },
        o(n) {
            m(r.$$.fragment, n), l = !1
        },
        d(n) {
            n && f(t), g(r, n)
        }
    }
}

function Ye(s) {
    let t, r, l, n, e;
    return {
        c() {
            t = u("Captcha will be solved shortly."), r = k("br"), l = u(" If it doesn't start in a few minutes"), n = k("br"), e = u(` log in to the web
    app to resolve it.`)
        },
        l(o) {
            t = $(o, "Captcha will be solved shortly."), r = z(o, "BR", {}), l = $(o, " If it doesn't start in a few minutes"), n = z(o, "BR", {}), e = $(o, ` log in to the web
    app to resolve it.`)
        },
        m(o, c) {
            i(o, t, c), i(o, r, c), i(o, l, c), i(o, n, c), i(o, e, c)
        },
        p: w,
        d(o) {
            o && (f(t), f(r), f(l), f(n), f(e))
        }
    }
}

function je(s) {
    let t, r, l;
    return r = new R({
        props: {
            size: 15,
            class: "ml-1"
        }
    }), {
        c() {
            t = u(`LoggedOnOtherDevice
    `), _(r.$$.fragment)
        },
        l(n) {
            t = $(n, `LoggedOnOtherDevice
    `), b(r.$$.fragment, n)
        },
        m(n, e) {
            i(n, t, e), d(r, n, e), l = !0
        },
        p: w,
        i(n) {
            l || (p(r.$$.fragment, n), l = !0)
        },
        o(n) {
            m(r.$$.fragment, n), l = !1
        },
        d(n) {
            n && f(t), g(r, n)
        }
    }
}

function qe(s) {
    let t, r, l;
    return {
        c() {
            t = u("Logout web/companion app or console."), r = k("br"), l = u(" It can take up to 20 mins")
        },
        l(n) {
            t = $(n, "Logout web/companion app or console."), r = z(n, "BR", {}), l = $(n, " It can take up to 20 mins")
        },
        m(n, e) {
            i(n, t, e), i(n, r, e), i(n, l, e)
        },
        p: w,
        d(n) {
            n && (f(t), f(r), f(l))
        }
    }
}

function He(s) {
    let t, r, l;
    return r = new R({
        props: {
            size: 15,
            class: "ml-1"
        }
    }), {
        c() {
            t = u(`Completed
    `), _(r.$$.fragment)
        },
        l(n) {
            t = $(n, `Completed
    `), b(r.$$.fragment, n)
        },
        m(n, e) {
            i(n, t, e), d(r, n, e), l = !0
        },
        p: w,
        i(n) {
            l || (p(r.$$.fragment, n), l = !0)
        },
        o(n) {
            m(r.$$.fragment, n), l = !1
        },
        d(n) {
            n && f(t), g(r, n)
        }
    }
}

function We(s) {
    let t, r, l;
    return {
        c() {
            t = u("Done for the day. Will auto-resume tomorrow."), r = k("br"), l = u(" Runtime can be changed in acc edit page.")
        },
        l(n) {
            t = $(n, "Done for the day. Will auto-resume tomorrow."), r = z(n, "BR", {}), l = $(n, " Runtime can be changed in acc edit page.")
        },
        m(n, e) {
            i(n, t, e), i(n, r, e), i(n, l, e)
        },
        p: w,
        d(n) {
            n && (f(t), f(r), f(l))
        }
    }
}

function Ve(s) {
    let t, r, l;
    return r = new R({
        props: {
            size: 15,
            class: "ml-1"
        }
    }), {
        c() {
            t = u(`MarketCheck
    `), _(r.$$.fragment)
        },
        l(n) {
            t = $(n, `MarketCheck
    `), b(r.$$.fragment, n)
        },
        m(n, e) {
            i(n, t, e), d(r, n, e), l = !0
        },
        p: w,
        i(n) {
            l || (p(r.$$.fragment, n), l = !0)
        },
        o(n) {
            m(r.$$.fragment, n), l = !1
        },
        d(n) {
            n && f(t), g(r, n)
        }
    }
}

function Ge(s) {
    let t, r, l;
    return {
        c() {
            t = u("Paused for optimal market conditions;"), r = k("br"), l = u(" adjust in AI Trading settings")
        },
        l(n) {
            t = $(n, "Paused for optimal market conditions;"), r = z(n, "BR", {}), l = $(n, " adjust in AI Trading settings")
        },
        m(n, e) {
            i(n, t, e), i(n, r, e), i(n, l, e)
        },
        p: w,
        d(n) {
            n && (f(t), f(r), f(l))
        }
    }
}

function Je(s) {
    let t, r, l, n;
    return l = new R({
        props: {
            size: 15,
            class: "ml-1"
        }
    }), {
        c() {
            t = u(s[0]), r = C(), _(l.$$.fragment)
        },
        l(e) {
            t = $(e, s[0]), r = x(e), b(l.$$.fragment, e)
        },
        m(e, o) {
            i(e, t, o), i(e, r, o), d(l, e, o), n = !0
        },
        p(e, o) {
            (!n || o & 1) && S(t, e[0])
        },
        i(e) {
            n || (p(l.$$.fragment, e), n = !0)
        },
        o(e) {
            m(l.$$.fragment, e), n = !1
        },
        d(e) {
            e && (f(t), f(r)), g(l, e)
        }
    }
}

function Ke(s) {
    let t, r, l;
    return {
        c() {
            t = u("Paused just for today. "), r = k("br"), l = u("Delete for longer breaks.")
        },
        l(n) {
            t = $(n, "Paused just for today. "), r = z(n, "BR", {}), l = $(n, "Delete for longer breaks.")
        },
        m(n, e) {
            i(n, t, e), i(n, r, e), i(n, l, e)
        },
        p: w,
        d(n) {
            n && (f(t), f(r), f(l))
        }
    }
}

function Qe(s) {
    let t, r, l, n;
    return l = new R({
        props: {
            size: 15,
            class: "ml-1"
        }
    }), {
        c() {
            t = u(s[0]), r = C(), _(l.$$.fragment)
        },
        l(e) {
            t = $(e, s[0]), r = x(e), b(l.$$.fragment, e)
        },
        m(e, o) {
            i(e, t, o), i(e, r, o), d(l, e, o), n = !0
        },
        p(e, o) {
            (!n || o & 1) && S(t, e[0])
        },
        i(e) {
            n || (p(l.$$.fragment, e), n = !0)
        },
        o(e) {
            m(l.$$.fragment, e), n = !1
        },
        d(e) {
            e && (f(t), f(r)), g(l, e)
        }
    }
}

function Xe(s) {
    let t, r, l;
    return {
        c() {
            t = u("On a 15min break or low coins"), r = k("br"), l = u(" (min 1000 coins needed).")
        },
        l(n) {
            t = $(n, "On a 15min break or low coins"), r = z(n, "BR", {}), l = $(n, " (min 1000 coins needed).")
        },
        m(n, e) {
            i(n, t, e), i(n, r, e), i(n, l, e)
        },
        p: w,
        d(n) {
            n && (f(t), f(r), f(l))
        }
    }
}

function Ze(s) {
    let t, r, l, n;
    return l = new R({
        props: {
            size: 15,
            class: "ml-1"
        }
    }), {
        c() {
            t = u(s[0]), r = C(), _(l.$$.fragment)
        },
        l(e) {
            t = $(e, s[0]), r = x(e), b(l.$$.fragment, e)
        },
        m(e, o) {
            i(e, t, o), i(e, r, o), d(l, e, o), n = !0
        },
        p(e, o) {
            (!n || o & 1) && S(t, e[0])
        },
        i(e) {
            n || (p(l.$$.fragment, e), n = !0)
        },
        o(e) {
            m(l.$$.fragment, e), n = !1
        },
        d(e) {
            e && (f(t), f(r)), g(l, e)
        }
    }
}

function et(s) {
    let t;
    return {
        c() {
            t = u("The system is automatically resolving the captcha for you.")
        },
        l(r) {
            t = $(r, "The system is automatically resolving the captcha for you.")
        },
        m(r, l) {
            i(r, t, l)
        },
        d(r) {
            r && f(t)
        }
    }
}

function tt(s) {
    let t, r, l, n;
    return l = new R({
        props: {
            size: 15,
            class: "ml-1"
        }
    }), {
        c() {
            t = u(s[0]), r = C(), _(l.$$.fragment)
        },
        l(e) {
            t = $(e, s[0]), r = x(e), b(l.$$.fragment, e)
        },
        m(e, o) {
            i(e, t, o), i(e, r, o), d(l, e, o), n = !0
        },
        p(e, o) {
            (!n || o & 1) && S(t, e[0])
        },
        i(e) {
            n || (p(l.$$.fragment, e), n = !0)
        },
        o(e) {
            m(l.$$.fragment, e), n = !1
        },
        d(e) {
            e && (f(t), f(r)), g(l, e)
        }
    }
}

function rt(s) {
    let t;
    return {
        c() {
            t = u("Account is starting (30-60 secs).")
        },
        l(r) {
            t = $(r, "Account is starting (30-60 secs).")
        },
        m(r, l) {
            i(r, t, l)
        },
        d(r) {
            r && f(t)
        }
    }
}

function nt(s) {
    let t, r, l, n;
    return l = new R({
        props: {
            size: 15,
            class: "ml-1"
        }
    }), {
        c() {
            t = u(s[0]), r = C(), _(l.$$.fragment)
        },
        l(e) {
            t = $(e, s[0]), r = x(e), b(l.$$.fragment, e)
        },
        m(e, o) {
            i(e, t, o), i(e, r, o), d(l, e, o), n = !0
        },
        p(e, o) {
            (!n || o & 1) && S(t, e[0])
        },
        i(e) {
            n || (p(l.$$.fragment, e), n = !0)
        },
        o(e) {
            m(l.$$.fragment, e), n = !1
        },
        d(e) {
            e && (f(t), f(r)), g(l, e)
        }
    }
}

function lt(s) {
    let t;
    return {
        c() {
            t = u("All good and active.")
        },
        l(r) {
            t = $(r, "All good and active.")
        },
        m(r, l) {
            i(r, t, l)
        },
        d(r) {
            r && f(t)
        }
    }
}

function ot(s) {
    let t, r, l, n;
    const e = [me, $e, ue, ce, ae, ie, fe, se, oe, le, ne],
        o = [];

    function c(a, h) {
        return a[0] === N.Running ? 0 : a[0] === N.Starting ? 1 : a[0] === "solvingCaptcha" ? 2 : a[0] === N.Idle ? 3 : a[0] === N.Paused ? 4 : a[0] === "marketCheck" ? 5 : a[0] === N.MaxDailyRequests ? 6 : a[0] === N.SessionExpired || a[0] === N.LoggedOnConsole ? 7 : a[0] === "captcha" ? 8 : a[0] === "softBan" ? 9 : 10
    }
    return t = c(s), r = o[t] = e[t](s), {
        c() {
            r.c(), l = M()
        },
        l(a) {
            r.l(a), l = M()
        },
        m(a, h) {
            o[t].m(a, h), i(a, l, h), n = !0
        },
        p(a, [h]) {
            let P = t;
            t = c(a), t === P ? o[t].p(a, h) : (Q(), m(o[P], 1, 1, () => {
                o[P] = null
            }), X(), r = o[t], r ? r.p(a, h) : (r = o[t] = e[t](a), r.c()), p(r, 1), r.m(l.parentNode, l))
        },
        i(a) {
            n || (p(r), n = !0)
        },
        o(a) {
            m(r), n = !1
        },
        d(a) {
            a && f(l), o[t].d(a)
        }
    }
}

function st(s, t, r) {
    let {
        status: l
    } = t;
    return s.$$set = n => {
        "status" in n && r(0, l = n.status)
    }, [l]
}
class zt extends V {
    constructor(t) {
        super(), G(this, t, st, ot, W, {
            status: 0
        })
    }
}

function ft(s) {
    let t, r, l;
    return t = new re({
        props: {
            size: 18
        }
    }), {
        c() {
            _(t.$$.fragment), r = u(" Delete")
        },
        l(n) {
            b(t.$$.fragment, n), r = $(n, " Delete")
        },
        m(n, e) {
            d(t, n, e), i(n, r, e), l = !0
        },
        p: w,
        i(n) {
            l || (p(t.$$.fragment, n), l = !0)
        },
        o(n) {
            m(t.$$.fragment, n), l = !1
        },
        d(n) {
            n && f(r), g(t, n)
        }
    }
}

function it(s) {
    let t;
    return {
        c() {
            t = u("Cancel")
        },
        l(r) {
            t = $(r, "Cancel")
        },
        m(r, l) {
            i(r, t, l)
        },
        d(r) {
            r && f(t)
        }
    }
}

function at(s) {
    let t, r, l, n, e, o = "Are you sure?",
        c, a, h = `Are you sure you want to delete this accounts? Recover your account on our platform might take
      time.`,
        P, T, B, Y, F, L;
    return l = new te({
        props: {
            class: "text-zinc-300 ",
            size: 24
        }
    }), B = new H({
        props: {
            class: "button-red flex gap-1 items-center",
            type: "submit",
            form: s[1],
            $$slots: {
                default: [ft]
            },
            $$scope: {
                ctx: s
            }
        }
    }), B.$on("click", s[2]), F = new H({
        props: {
            class: "button-secondary",
            $$slots: {
                default: [it]
            },
            $$scope: {
                ctx: s
            }
        }
    }), F.$on("click", s[3]), {
        c() {
            t = k("div"), r = k("div"), _(l.$$.fragment), n = C(), e = k("span"), e.textContent = o, c = C(), a = k("h3"), a.textContent = h, P = C(), T = k("div"), _(B.$$.fragment), Y = C(), _(F.$$.fragment), this.h()
        },
        l(v) {
            t = z(v, "DIV", {
                class: !0
            });
            var A = j(t);
            r = z(A, "DIV", {
                class: !0
            });
            var I = j(r);
            b(l.$$.fragment, I), n = x(I), e = z(I, "SPAN", {
                class: !0,
                "data-svelte-h": !0
            }), q(e) !== "svelte-hduhrv" && (e.textContent = o), I.forEach(f), c = x(A), a = z(A, "H3", {
                class: !0,
                "data-svelte-h": !0
            }), q(a) !== "svelte-wdaxkm" && (a.textContent = h), P = x(A), T = z(A, "DIV", {
                class: !0
            });
            var O = j(T);
            b(B.$$.fragment, O), Y = x(O), b(F.$$.fragment, O), O.forEach(f), A.forEach(f), this.h()
        },
        h() {
            U(e, "class", "text-lg"), U(r, "class", "flex gap-3"), U(a, "class", "font-normal text-zinc-300 dark:text-zinc-400"), U(T, "class", "flex gap-4"), U(t, "class", "flex flex-col gap-6")
        },
        m(v, A) {
            i(v, t, A), D(t, r), d(l, r, null), D(r, n), D(r, e), D(t, c), D(t, a), D(t, P), D(t, T), d(B, T, null), D(T, Y), d(F, T, null), L = !0
        },
        p(v, A) {
            const I = {};
            A & 2 && (I.form = v[1]), A & 32 && (I.$$scope = {
                dirty: A,
                ctx: v
            }), B.$set(I);
            const O = {};
            A & 32 && (O.$$scope = {
                dirty: A,
                ctx: v
            }), F.$set(O)
        },
        i(v) {
            L || (p(l.$$.fragment, v), p(B.$$.fragment, v), p(F.$$.fragment, v), L = !0)
        },
        o(v) {
            m(l.$$.fragment, v), m(B.$$.fragment, v), m(F.$$.fragment, v), L = !1
        },
        d(v) {
            v && f(t), g(l), g(B), g(F)
        }
    }
}

function ct(s) {
    let t, r, l;

    function n(o) {
        s[4](o)
    }
    let e = {
        size: "sm",
        class: "bg-zinc-900/75 backdrop-blur-sm border border-zinc-800 transition-all overflow-hidden",
        backdropClass: "fixed inset-0 z-40 bg-zinc-950/80",
        $$slots: {
            default: [at]
        },
        $$scope: {
            ctx: s
        }
    };
    return s[0] !== void 0 && (e.open = s[0]), t = new ee({
        props: e
    }), J.push(() => Z(t, "open", n)), {
        c() {
            _(t.$$.fragment)
        },
        l(o) {
            b(t.$$.fragment, o)
        },
        m(o, c) {
            d(t, o, c), l = !0
        },
        p(o, [c]) {
            const a = {};
            c & 35 && (a.$$scope = {
                dirty: c,
                ctx: o
            }), !r && c & 1 && (r = !0, a.open = o[0], K(() => r = !1)), t.$set(a)
        },
        i(o) {
            l || (p(t.$$.fragment, o), l = !0)
        },
        o(o) {
            m(t.$$.fragment, o), l = !1
        },
        d(o) {
            g(t, o)
        }
    }
}

function ut(s, t, r) {
    let {
        isOpen: l
    } = t, {
        deleteFormId: n
    } = t;
    const e = () => setTimeout(() => r(0, l = !1), 500),
        o = () => r(0, l = !1);

    function c(a) {
        l = a, r(0, l)
    }
    return s.$$set = a => {
        "isOpen" in a && r(0, l = a.isOpen), "deleteFormId" in a && r(1, n = a.deleteFormId)
    }, [l, n, e, o, c]
}
class Ct extends V {
    constructor(t) {
        super(), G(this, t, ut, ct, W, {
            isOpen: 0,
            deleteFormId: 1
        })
    }
}
export {
    Ct as A, zt as a
};