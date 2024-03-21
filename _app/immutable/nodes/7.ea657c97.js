import {
    s as qe,
    e as y,
    a as B,
    d as N,
    f as F,
    h as u,
    c as z,
    j as P,
    l as C,
    m as E,
    I as se,
    B as Ie,
    A as We,
    y as Se,
    P as me,
    z as Te,
    S as he,
    H as Oe,
    O as Ye,
    o as Ze,
    t as j,
    i as H,
    E as ye,
    J as ce,
    n as ee
} from "../chunks/scheduler.c64253f0.js";
import {
    S as Je,
    i as Xe,
    c as T,
    a as A,
    m as D,
    t as c,
    b as _,
    d as I,
    h as Ne,
    e as _e,
    g as ge
} from "../chunks/index.9bbe2ba6.js";
import {
    S as Ae
} from "../chunks/stat-card.95596afd.js";
import {
    C as xe
} from "../chunks/coins.8da6f909.js";
import {
    T as et,
    a as tt
} from "../chunks/triangle-right.e8b71bf8.js";
import {
    A as st
} from "../chunks/accounts-create-drawer.21006789.js";
import {
    B as ke
} from "../chunks/Button.0ff68f55.js";
import {
    D as at,
    a as De
} from "../chunks/DropdownItem.53dbc169.js";
import {
    T as nt,
    a as x
} from "../chunks/table.5e269678.js";
import {
    p as lt
} from "../chunks/stores.d2a90a39.js";
import {
    e as we
} from "../chunks/forms.08853d46.js";
import {
    n as Pe
} from "../chunks/form.71209947.js";
import {
    P as rt
} from "../chunks/pagination.0d698629.js";
import {
    A as ft,
    a as ot
} from "../chunks/account-delete-modal.9463e4d7.js";
import {
    a as W
} from "../chunks/formatters.2d4ded0c.js";
import {
    P as it
} from "../chunks/platform-icon.a9422b72.js";
import {
    S as $t
} from "../chunks/search.cfd30a4f.js";
import {
    P as ut
} from "../chunks/party-popper.d77bc44a.js";
import {
    X as mt
} from "../chunks/x.a1f5ce3e.js";
import {
    A as ct
} from "../chunks/arrow-right.ad853942.js";
import {
    C as pt
} from "../chunks/chevron-down.18bdbddd.js";
import {
    P as dt
} from "../chunks/plus.c6b857ba.js";
import {
    P as _t
} from "../chunks/play.4c58d376.js";
import {
    P as gt
} from "../chunks/pause.f68cb708.js";
import {
    T as bt
} from "../chunks/trash.f3456534.js";
import {
    E as vt
} from "../chunks/pen-square.7ccaa73d.js";
import {
    S as ht
} from "../chunks/star.713724bc.js";

function wt(n) {
    let e, a;
    return e = new xe({
        props: {
            size: 28
        }
    }), {
        c() {
            T(e.$$.fragment)
        },
        l(t) {
            A(e.$$.fragment, t)
        },
        m(t, s) {
            D(e, t, s), a = !0
        },
        p: se,
        i(t) {
            a || (c(e.$$.fragment, t), a = !0)
        },
        o(t) {
            _(e.$$.fragment, t), a = !1
        },
        d(t) {
            I(e, t)
        }
    }
}

function Pt(n) {
    let e, a;
    return e = new et({
        props: {
            size: 28
        }
    }), {
        c() {
            T(e.$$.fragment)
        },
        l(t) {
            A(e.$$.fragment, t)
        },
        m(t, s) {
            D(e, t, s), a = !0
        },
        p: se,
        i(t) {
            a || (c(e.$$.fragment, t), a = !0)
        },
        o(t) {
            _(e.$$.fragment, t), a = !1
        },
        d(t) {
            I(e, t)
        }
    }
}

function Et(n) {
    let e, a;
    return e = new tt({
        props: {
            size: 28
        }
    }), {
        c() {
            T(e.$$.fragment)
        },
        l(t) {
            A(e.$$.fragment, t)
        },
        m(t, s) {
            D(e, t, s), a = !0
        },
        p: se,
        i(t) {
            a || (c(e.$$.fragment, t), a = !0)
        },
        o(t) {
            _(e.$$.fragment, t), a = !1
        },
        d(t) {
            I(e, t)
        }
    }
}

function Ct(n) {
    let e, a, t, s, l, f, o, p, v, $;
    return t = new Ae({
        props: {
            value: n[0].totalProfit,
            label: "Profit",
            $$slots: {
                default: [wt]
            },
            $$scope: {
                ctx: n
            }
        }
    }), f = new Ae({
        props: {
            value: n[0].totalVolume,
            label: "Buy Volume",
            $$slots: {
                default: [Pt]
            },
            $$scope: {
                ctx: n
            }
        }
    }), v = new Ae({
        props: {
            value: n[0].totalTrades,
            label: "Trades",
            $$slots: {
                default: [Et]
            },
            $$scope: {
                ctx: n
            }
        }
    }), {
        c() {
            e = y("div"), a = y("div"), T(t.$$.fragment), s = B(), l = y("div"), T(f.$$.fragment), o = B(), p = y("div"), T(v.$$.fragment), this.h()
        },
        l(i) {
            e = N(i, "DIV", {
                class: !0
            });
            var m = F(e);
            a = N(m, "DIV", {
                class: !0
            });
            var b = F(a);
            A(t.$$.fragment, b), b.forEach(u), s = z(m), l = N(m, "DIV", {
                class: !0
            });
            var h = F(l);
            A(f.$$.fragment, h), h.forEach(u), o = z(m), p = N(m, "DIV", {
                class: !0
            });
            var k = F(p);
            A(v.$$.fragment, k), k.forEach(u), m.forEach(u), this.h()
        },
        h() {
            P(a, "class", "col-span-12 lg:col-span-4"), P(l, "class", "col-span-12 lg:col-span-4"), P(p, "class", "col-span-12 lg:col-span-4"), P(e, "class", "grid grid-cols-12 gap-6")
        },
        m(i, m) {
            C(i, e, m), E(e, a), D(t, a, null), E(e, s), E(e, l), D(f, l, null), E(e, o), E(e, p), D(v, p, null), $ = !0
        },
        p(i, [m]) {
            const b = {};
            m & 1 && (b.value = i[0].totalProfit), m & 2 && (b.$$scope = {
                dirty: m,
                ctx: i
            }), t.$set(b);
            const h = {};
            m & 1 && (h.value = i[0].totalVolume), m & 2 && (h.$$scope = {
                dirty: m,
                ctx: i
            }), f.$set(h);
            const k = {};
            m & 1 && (k.value = i[0].totalTrades), m & 2 && (k.$$scope = {
                dirty: m,
                ctx: i
            }), v.$set(k)
        },
        i(i) {
            $ || (c(t.$$.fragment, i), c(f.$$.fragment, i), c(v.$$.fragment, i), $ = !0)
        },
        o(i) {
            _(t.$$.fragment, i), _(f.$$.fragment, i), _(v.$$.fragment, i), $ = !1
        },
        d(i) {
            i && u(e), I(t), I(f), I(v)
        }
    }
}

function Tt(n, e, a) {
    let {
        statistics: t
    } = e;
    return n.$$set = s => {
        "statistics" in s && a(0, t = s.statistics)
    }, [t]
}
class At extends Je {
    constructor(e) {
        super(), Xe(this, e, Tt, Ct, qe, {
            statistics: 0
        })
    }
}

function Fe(n) {
    var s;
    const e = n[0].todayStatistics.find(function(...f) {
        return n[12](n[16], ...f)
    });
    n[17] = e;
    const a = n[0].totalStatistics.find(function(...f) {
        return n[13](n[16], ...f)
    });
    n[18] = a;
    const t = (s = n[0].tpCoins) == null ? void 0 : s.find(function(...f) {
        return n[14](n[16], ...f)
    });
    n[19] = t
}

function Ue(n) {
    let e, a, t, s, l, f, o = "Invite friends, earn instantly 10,000 coins & more!",
        p, v, $, i, m, b, h, k, U, G;
    return s = new ut({
        props: {
            class: "!text-teal-300"
        }
    }), $ = new ke({
        props: {
            class: "button-teal",
            size: "xs",
            href: "/affiliates",
            $$slots: {
                default: [Dt]
            },
            $$scope: {
                ctx: n
            }
        }
    }), h = new mt({
        props: {
            size: 18
        }
    }), {
        c() {
            e = y("div"), a = y("div"), t = y("div"), T(s.$$.fragment), l = B(), f = y("span"), f.textContent = o, p = B(), v = y("div"), T($.$$.fragment), i = B(), m = y("form"), b = y("button"), T(h.$$.fragment), this.h()
        },
        l(O) {
            e = N(O, "DIV", {
                class: !0
            });
            var q = F(e);
            a = N(q, "DIV", {
                class: !0
            });
            var w = F(a);
            t = N(w, "DIV", {
                class: !0
            });
            var S = F(t);
            A(s.$$.fragment, S), l = z(S), f = N(S, "SPAN", {
                class: !0,
                "data-svelte-h": !0
            }), Se(f) !== "svelte-1mvsn3b" && (f.textContent = o), S.forEach(u), w.forEach(u), p = z(q), v = N(q, "DIV", {
                class: !0
            });
            var Y = F(v);
            A($.$$.fragment, Y), i = z(Y), m = N(Y, "FORM", {
                action: !0,
                method: !0
            });
            var J = F(m);
            b = N(J, "BUTTON", {
                type: !0,
                class: !0
            });
            var r = F(b);
            A(h.$$.fragment, r), r.forEach(u), J.forEach(u), Y.forEach(u), q.forEach(u), this.h()
        },
        h() {
            P(f, "class", "font-medium text-sm lg:text-base"), P(t, "class", "flex items-center gap-3"), P(a, "class", "flex justify-between items-center gap-3"), P(b, "type", "submit"), P(b, "class", "flex items-center text-sm"), P(m, "action", "/accounts?/closeAffiliatesBonus"), P(m, "method", "post"), P(v, "class", "flex items-center gap-4"), P(e, "class", "card flex flex-col lg:flex-row gap-3 !p-4 justify-between items-center")
        },
        m(O, q) {
            C(O, e, q), E(e, a), E(a, t), D(s, t, null), E(t, l), E(t, f), E(e, p), E(e, v), D($, v, null), E(v, i), E(v, m), E(m, b), D(h, b, null), k = !0, U || (G = he(we.call(null, m, Pe)), U = !0)
        },
        i(O) {
            k || (c(s.$$.fragment, O), c($.$$.fragment, O), c(h.$$.fragment, O), k = !0)
        },
        o(O) {
            _(s.$$.fragment, O), _($.$$.fragment, O), _(h.$$.fragment, O), k = !1
        },
        d(O) {
            O && u(e), I(s), I($), I(h), U = !1, G()
        }
    }
}

function Dt(n) {
    let e, a, t;
    return e = new ct({
        props: {
            size: 14,
            class: "mr-1"
        }
    }), {
        c() {
            T(e.$$.fragment), a = j(" Affiliates")
        },
        l(s) {
            A(e.$$.fragment, s), a = H(s, " Affiliates")
        },
        m(s, l) {
            D(e, s, l), C(s, a, l), t = !0
        },
        p: se,
        i(s) {
            t || (c(e.$$.fragment, s), t = !0)
        },
        o(s) {
            _(e.$$.fragment, s), t = !1
        },
        d(s) {
            s && u(a), I(e, s)
        }
    }
}

function Re(n) {
    let e, a, t, s;
    return e = new ke({
        props: {
            class: "button-secondary flex gap-1",
            size: "xs",
            $$slots: {
                default: [It]
            },
            $$scope: {
                ctx: n
            }
        }
    }), t = new at({
        props: {
            placement: "bottom-end",
            class: "dropdown",
            $$slots: {
                default: [zt]
            },
            $$scope: {
                ctx: n
            }
        }
    }), {
        c() {
            T(e.$$.fragment), a = B(), T(t.$$.fragment)
        },
        l(l) {
            A(e.$$.fragment, l), a = z(l), A(t.$$.fragment, l)
        },
        m(l, f) {
            D(e, l, f), C(l, a, f), D(t, l, f), s = !0
        },
        p(l, f) {
            const o = {};
            f & 1048576 && (o.$$scope = {
                dirty: f,
                ctx: l
            }), e.$set(o);
            const p = {};
            f & 1048584 && (p.$$scope = {
                dirty: f,
                ctx: l
            }), t.$set(p)
        },
        i(l) {
            s || (c(e.$$.fragment, l), c(t.$$.fragment, l), s = !0)
        },
        o(l) {
            _(e.$$.fragment, l), _(t.$$.fragment, l), s = !1
        },
        d(l) {
            l && u(a), I(e, l), I(t, l)
        }
    }
}

function It(n) {
    let e, a, t;
    return e = new pt({
        props: {
            size: 18
        }
    }), {
        c() {
            T(e.$$.fragment), a = j(`
            Actions`)
        },
        l(s) {
            A(e.$$.fragment, s), a = H(s, `
            Actions`)
        },
        m(s, l) {
            D(e, s, l), C(s, a, l), t = !0
        },
        p: se,
        i(s) {
            t || (c(e.$$.fragment, s), t = !0)
        },
        o(s) {
            _(e.$$.fragment, s), t = !1
        },
        d(s) {
            s && u(a), I(e, s)
        }
    }
}

function St(n) {
    let e, a, t;
    return e = new _t({
        props: {
            size: 15
        }
    }), {
        c() {
            T(e.$$.fragment), a = j(" Start")
        },
        l(s) {
            A(e.$$.fragment, s), a = H(s, " Start")
        },
        m(s, l) {
            D(e, s, l), C(s, a, l), t = !0
        },
        p: se,
        i(s) {
            t || (c(e.$$.fragment, s), t = !0)
        },
        o(s) {
            _(e.$$.fragment, s), t = !1
        },
        d(s) {
            s && u(a), I(e, s)
        }
    }
}

function kt(n) {
    let e, a, t;
    return e = new gt({
        props: {
            size: 15
        }
    }), {
        c() {
            T(e.$$.fragment), a = j(" Pause")
        },
        l(s) {
            A(e.$$.fragment, s), a = H(s, " Pause")
        },
        m(s, l) {
            D(e, s, l), C(s, a, l), t = !0
        },
        p: se,
        i(s) {
            t || (c(e.$$.fragment, s), t = !0)
        },
        o(s) {
            _(e.$$.fragment, s), t = !1
        },
        d(s) {
            s && u(a), I(e, s)
        }
    }
}

function Bt(n) {
    let e, a, t;
    return e = new bt({
        props: {
            size: 15
        }
    }), {
        c() {
            T(e.$$.fragment), a = j(" Delete")
        },
        l(s) {
            A(e.$$.fragment, s), a = H(s, " Delete")
        },
        m(s, l) {
            D(e, s, l), C(s, a, l), t = !0
        },
        p: se,
        i(s) {
            t || (c(e.$$.fragment, s), t = !0)
        },
        o(s) {
            _(e.$$.fragment, s), t = !1
        },
        d(s) {
            s && u(a), I(e, s)
        }
    }
}

function zt(n) {
    let e, a, t, s, l, f;
    return e = new De({
        props: {
            class: "dropdown-item",
            type: "submit",
            form: "start-form",
            $$slots: {
                default: [St]
            },
            $$scope: {
                ctx: n
            }
        }
    }), t = new De({
        props: {
            class: "dropdown-item",
            type: "submit",
            form: "pause-form",
            $$slots: {
                default: [kt]
            },
            $$scope: {
                ctx: n
            }
        }
    }), l = new De({
        props: {
            class: "text-red-400 dropdown-item",
            $$slots: {
                default: [Bt]
            },
            $$scope: {
                ctx: n
            }
        }
    }), l.$on("click", n[11]), {
        c() {
            T(e.$$.fragment), a = B(), T(t.$$.fragment), s = B(), T(l.$$.fragment)
        },
        l(o) {
            A(e.$$.fragment, o), a = z(o), A(t.$$.fragment, o), s = z(o), A(l.$$.fragment, o)
        },
        m(o, p) {
            D(e, o, p), C(o, a, p), D(t, o, p), C(o, s, p), D(l, o, p), f = !0
        },
        p(o, p) {
            const v = {};
            p & 1048576 && (v.$$scope = {
                dirty: p,
                ctx: o
            }), e.$set(v);
            const $ = {};
            p & 1048576 && ($.$$scope = {
                dirty: p,
                ctx: o
            }), t.$set($);
            const i = {};
            p & 1048576 && (i.$$scope = {
                dirty: p,
                ctx: o
            }), l.$set(i)
        },
        i(o) {
            f || (c(e.$$.fragment, o), c(t.$$.fragment, o), c(l.$$.fragment, o), f = !0)
        },
        o(o) {
            _(e.$$.fragment, o), _(t.$$.fragment, o), _(l.$$.fragment, o), f = !1
        },
        d(o) {
            o && (u(a), u(s)), I(e, o), I(t, o), I(l, o)
        }
    }
}

function Vt(n) {
    let e, a, t;
    return e = new dt({
        props: {
            size: 18
        }
    }), {
        c() {
            T(e.$$.fragment), a = j(`
          Create`)
        },
        l(s) {
            A(e.$$.fragment, s), a = H(s, `
          Create`)
        },
        m(s, l) {
            D(e, s, l), C(s, a, l), t = !0
        },
        p: se,
        i(s) {
            t || (c(e.$$.fragment, s), t = !0)
        },
        o(s) {
            _(e.$$.fragment, s), t = !1
        },
        d(s) {
            s && u(a), I(e, s)
        }
    }
}

function Me(n) {
    let e, a;
    return e = new ht({
        props: {
            size: 14,
            class: "mr-1"
        }
    }), {
        c() {
            T(e.$$.fragment)
        },
        l(t) {
            A(e.$$.fragment, t)
        },
        m(t, s) {
            D(e, t, s), a = !0
        },
        i(t) {
            a || (c(e.$$.fragment, t), a = !0)
        },
        o(t) {
            _(e.$$.fragment, t), a = !1
        },
        d(t) {
            I(e, t)
        }
    }
}

function je(n) {
    let e, a = n[16].createdBy.email + "",
        t, s, l, f, o = n[16].createdBy.role + "",
        p, v;
    return {
        c() {
            e = y("span"), t = j(a), s = B(), l = y("span"), f = j("("), p = j(o), v = j(")"), this.h()
        },
        l($) {
            e = N($, "SPAN", {
                class: !0
            });
            var i = F(e);
            t = H(i, a), s = z(i), l = N(i, "SPAN", {});
            var m = F(l);
            f = H(m, "("), p = H(m, o), v = H(m, ")"), m.forEach(u), i.forEach(u), this.h()
        },
        h() {
            ce(l, "text-yellow-500", n[16].createdBy.role.includes("vip")), ce(l, "text-teal-500", n[16].createdBy.role === "admin"), P(e, "class", "text-xs text-zinc-500")
        },
        m($, i) {
            C($, e, i), E(e, t), E(e, s), E(e, l), E(l, f), E(l, p), E(l, v)
        },
        p($, i) {
            i & 65536 && a !== (a = $[16].createdBy.email + "") && ee(t, a), i & 65536 && o !== (o = $[16].createdBy.role + "") && ee(p, o), i & 65536 && ce(l, "text-yellow-500", $[16].createdBy.role.includes("vip")), i & 65536 && ce(l, "text-teal-500", $[16].createdBy.role === "admin")
        },
        d($) {
            $ && u(e)
        }
    }
}

function Ot(n) {
    var m;
    let e, a, t, s, l, f = n[16].email + "",
        o, p, v;
    e = new it({
        props: {
            platform: n[16].platform
        }
    });
    let $ = n[16].hasPremiumBenefits && Me(),
        i = ((m = n[5].data.user) == null ? void 0 : m.role) === "admin" && je(n);
    return {
        c() {
            T(e.$$.fragment), a = B(), t = y("div"), s = y("span"), $ && $.c(), l = B(), o = j(f), p = B(), i && i.c(), this.h()
        },
        l(b) {
            A(e.$$.fragment, b), a = z(b), t = N(b, "DIV", {
                class: !0
            });
            var h = F(t);
            s = N(h, "SPAN", {
                class: !0
            });
            var k = F(s);
            $ && $.l(k), l = z(k), o = H(k, f), k.forEach(u), p = z(h), i && i.l(h), h.forEach(u), this.h()
        },
        h() {
            P(s, "class", "flex items-center"), ce(s, "text-yellow-500", n[16].hasPremiumBenefits), P(t, "class", "flex flex-col gap-1")
        },
        m(b, h) {
            D(e, b, h), C(b, a, h), C(b, t, h), E(t, s), $ && $.m(s, null), E(s, l), E(s, o), E(t, p), i && i.m(t, null), v = !0
        },
        p(b, h) {
            var U;
            const k = {};
            h & 65536 && (k.platform = b[16].platform), e.$set(k), b[16].hasPremiumBenefits ? $ ? h & 65536 && c($, 1) : ($ = Me(), $.c(), c($, 1), $.m(s, l)) : $ && (ge(), _($, 1, 1, () => {
                $ = null
            }), _e()), (!v || h & 65536) && f !== (f = b[16].email + "") && ee(o, f), (!v || h & 65536) && ce(s, "text-yellow-500", b[16].hasPremiumBenefits), ((U = b[5].data.user) == null ? void 0 : U.role) === "admin" ? i ? i.p(b, h) : (i = je(b), i.c(), i.m(t, null)) : i && (i.d(1), i = null)
        },
        i(b) {
            v || (c(e.$$.fragment, b), c($), v = !0)
        },
        o(b) {
            _(e.$$.fragment, b), _($), v = !1
        },
        d(b) {
            b && (u(a), u(t)), I(e, b), $ && $.d(), i && i.d()
        }
    }
}

function yt(n) {
    let e, a, t, s, l;
    return a = new vt({
        props: {
            size: 18
        }
    }), {
        c() {
            e = y("a"), T(a.$$.fragment), t = j(" Edit"), this.h()
        },
        l(f) {
            e = N(f, "A", {
                href: !0,
                class: !0
            });
            var o = F(e);
            A(a.$$.fragment, o), t = H(o, " Edit"), o.forEach(u), this.h()
        },
        h() {
            P(e, "href", s = "/accounts/" + n[16].id), P(e, "class", "font-medium hover:underline flex items-center gap-1")
        },
        m(f, o) {
            C(f, e, o), D(a, e, null), E(e, t), l = !0
        },
        p(f, o) {
            (!l || o & 65536 && s !== (s = "/accounts/" + f[16].id)) && P(e, "href", s)
        },
        i(f) {
            l || (c(a.$$.fragment, f), l = !0)
        },
        o(f) {
            _(a.$$.fragment, f), l = !1
        },
        d(f) {
            f && u(e), I(a)
        }
    }
}

function Nt(n) {
    let e, a;
    return e = new ot({
        props: {
            status: n[16].status
        }
    }), {
        c() {
            T(e.$$.fragment)
        },
        l(t) {
            A(e.$$.fragment, t)
        },
        m(t, s) {
            D(e, t, s), a = !0
        },
        p(t, s) {
            const l = {};
            s & 65536 && (l.status = t[16].status), e.$set(l)
        },
        i(t) {
            a || (c(e.$$.fragment, t), a = !0)
        },
        o(t) {
            _(e.$$.fragment, t), a = !1
        },
        d(t) {
            I(e, t)
        }
    }
}

function Ft(n) {
    var t;
    let e = W.format(((t = n[17]) == null ? void 0 : t.todayProfit) ? ? 0) + "",
        a;
    return {
        c() {
            a = j(e)
        },
        l(s) {
            a = H(s, e)
        },
        m(s, l) {
            C(s, a, l)
        },
        p(s, l) {
            var f;
            l & 65537 && e !== (e = W.format(((f = s[17]) == null ? void 0 : f.todayProfit) ? ? 0) + "") && ee(a, e)
        },
        d(s) {
            s && u(a)
        }
    }
}

function He(n) {
    let e, a;
    return e = new x({
        props: {
            $$slots: {
                default: [Ut]
            },
            $$scope: {
                ctx: n
            }
        }
    }), {
        c() {
            T(e.$$.fragment)
        },
        l(t) {
            A(e.$$.fragment, t)
        },
        m(t, s) {
            D(e, t, s), a = !0
        },
        p(t, s) {
            const l = {};
            s & 1114113 && (l.$$scope = {
                dirty: s,
                ctx: t
            }), e.$set(l)
        },
        i(t) {
            a || (c(e.$$.fragment, t), a = !0)
        },
        o(t) {
            _(e.$$.fragment, t), a = !1
        },
        d(t) {
            I(e, t)
        }
    }
}

function Ut(n) {
    var t;
    let e = W.format(((t = n[18]) == null ? void 0 : t.premiumProfit) ? ? 0) + "",
        a;
    return {
        c() {
            a = j(e)
        },
        l(s) {
            a = H(s, e)
        },
        m(s, l) {
            C(s, a, l)
        },
        p(s, l) {
            var f;
            l & 65537 && e !== (e = W.format(((f = s[18]) == null ? void 0 : f.premiumProfit) ? ? 0) + "") && ee(a, e)
        },
        d(s) {
            s && u(a)
        }
    }
}

function Rt(n) {
    var t;
    let e = W.format(((t = n[18]) == null ? void 0 : t.profit) ? ? 0) + "",
        a;
    return {
        c() {
            a = j(e)
        },
        l(s) {
            a = H(s, e)
        },
        m(s, l) {
            C(s, a, l)
        },
        p(s, l) {
            var f;
            l & 65537 && e !== (e = W.format(((f = s[18]) == null ? void 0 : f.profit) ? ? 0) + "") && ee(a, e)
        },
        d(s) {
            s && u(a)
        }
    }
}

function Mt(n) {
    var t;
    let e = W.format(((t = n[18]) == null ? void 0 : t.sold) ? ? 0) + "",
        a;
    return {
        c() {
            a = j(e)
        },
        l(s) {
            a = H(s, e)
        },
        m(s, l) {
            C(s, a, l)
        },
        p(s, l) {
            var f;
            l & 65537 && e !== (e = W.format(((f = s[18]) == null ? void 0 : f.sold) ? ? 0) + "") && ee(a, e)
        },
        d(s) {
            s && u(a)
        }
    }
}

function jt(n) {
    let e = W.format(n[16].coins) + "",
        a;
    return {
        c() {
            a = j(e)
        },
        l(t) {
            a = H(t, e)
        },
        m(t, s) {
            C(t, a, s)
        },
        p(t, s) {
            s & 65536 && e !== (e = W.format(t[16].coins) + "") && ee(a, e)
        },
        d(t) {
            t && u(a)
        }
    }
}

function Ht(n) {
    let e = W.format(n[19] ? n[19].tpCoins ? ? 0 : 0) + "",
        a;
    return {
        c() {
            a = j(e)
        },
        l(t) {
            a = H(t, e)
        },
        m(t, s) {
            C(t, a, s)
        },
        p(t, s) {
            s & 65537 && e !== (e = W.format(t[19] ? t[19].tpCoins ? ? 0 : 0) + "") && ee(a, e)
        },
        d(t) {
            t && u(a)
        }
    }
}

function Ge(n) {
    let e, a;
    return e = new x({
        props: {
            $$slots: {
                default: [Gt]
            },
            $$scope: {
                ctx: n
            }
        }
    }), {
        c() {
            T(e.$$.fragment)
        },
        l(t) {
            A(e.$$.fragment, t)
        },
        m(t, s) {
            D(e, t, s), a = !0
        },
        p(t, s) {
            const l = {};
            s & 1114112 && (l.$$scope = {
                dirty: s,
                ctx: t
            }), e.$set(l)
        },
        i(t) {
            a || (c(e.$$.fragment, t), a = !0)
        },
        o(t) {
            _(e.$$.fragment, t), a = !1
        },
        d(t) {
            I(e, t)
        }
    }
}

function Gt(n) {
    let e = n[16].finishedGames + "",
        a;
    return {
        c() {
            a = j(e)
        },
        l(t) {
            a = H(t, e)
        },
        m(t, s) {
            C(t, a, s)
        },
        p(t, s) {
            s & 65536 && e !== (e = t[16].finishedGames + "") && ee(a, e)
        },
        d(t) {
            t && u(a)
        }
    }
}

function qt(n) {
    var Y, J;
    Fe(n);
    let e, a, t, s, l, f, o, p, v, $, i, m, b, h, k, U, G, O, q;
    e = new x({
        props: {
            class: "flex items-center gap-4",
            $$slots: {
                default: [Ot]
            },
            $$scope: {
                ctx: n
            }
        }
    }), t = new x({
        props: {
            $$slots: {
                default: [yt]
            },
            $$scope: {
                ctx: n
            }
        }
    }), l = new x({
        props: {
            $$slots: {
                default: [Nt]
            },
            $$scope: {
                ctx: n
            }
        }
    }), o = new x({
        props: {
            $$slots: {
                default: [Ft]
            },
            $$scope: {
                ctx: n
            }
        }
    });
    let w = ((Y = n[5].data.user) == null ? void 0 : Y.role) === "admin" && He(n);
    $ = new x({
        props: {
            $$slots: {
                default: [Rt]
            },
            $$scope: {
                ctx: n
            }
        }
    }), m = new x({
        props: {
            $$slots: {
                default: [Mt]
            },
            $$scope: {
                ctx: n
            }
        }
    }), h = new x({
        props: {
            $$slots: {
                default: [jt]
            },
            $$scope: {
                ctx: n
            }
        }
    }), U = new x({
        props: {
            $$slots: {
                default: [Ht]
            },
            $$scope: {
                ctx: n
            }
        }
    });
    let S = ((J = n[5].data.user) == null ? void 0 : J.role) === "admin" && Ge(n);
    return {
        c() {
            T(e.$$.fragment), a = B(), T(t.$$.fragment), s = B(), T(l.$$.fragment), f = B(), T(o.$$.fragment), p = B(), w && w.c(), v = B(), T($.$$.fragment), i = B(), T(m.$$.fragment), b = B(), T(h.$$.fragment), k = B(), T(U.$$.fragment), G = B(), S && S.c(), O = ye()
        },
        l(r) {
            A(e.$$.fragment, r), a = z(r), A(t.$$.fragment, r), s = z(r), A(l.$$.fragment, r), f = z(r), A(o.$$.fragment, r), p = z(r), w && w.l(r), v = z(r), A($.$$.fragment, r), i = z(r), A(m.$$.fragment, r), b = z(r), A(h.$$.fragment, r), k = z(r), A(U.$$.fragment, r), G = z(r), S && S.l(r), O = ye()
        },
        m(r, g) {
            D(e, r, g), C(r, a, g), D(t, r, g), C(r, s, g), D(l, r, g), C(r, f, g), D(o, r, g), C(r, p, g), w && w.m(r, g), C(r, v, g), D($, r, g), C(r, i, g), D(m, r, g), C(r, b, g), D(h, r, g), C(r, k, g), D(U, r, g), C(r, G, g), S && S.m(r, g), C(r, O, g), q = !0
        },
        p(r, g) {
            var L, $e;
            Fe(r);
            const pe = {};
            g & 1114144 && (pe.$$scope = {
                dirty: g,
                ctx: r
            }), e.$set(pe);
            const fe = {};
            g & 1114112 && (fe.$$scope = {
                dirty: g,
                ctx: r
            }), t.$set(fe);
            const X = {};
            g & 1114112 && (X.$$scope = {
                dirty: g,
                ctx: r
            }), l.$set(X);
            const le = {};
            g & 1114113 && (le.$$scope = {
                dirty: g,
                ctx: r
            }), o.$set(le), ((L = r[5].data.user) == null ? void 0 : L.role) === "admin" ? w ? (w.p(r, g), g & 32 && c(w, 1)) : (w = He(r), w.c(), c(w, 1), w.m(v.parentNode, v)) : w && (ge(), _(w, 1, 1, () => {
                w = null
            }), _e());
            const Z = {};
            g & 1114113 && (Z.$$scope = {
                dirty: g,
                ctx: r
            }), $.$set(Z);
            const oe = {};
            g & 1114113 && (oe.$$scope = {
                dirty: g,
                ctx: r
            }), m.$set(oe);
            const K = {};
            g & 1114112 && (K.$$scope = {
                dirty: g,
                ctx: r
            }), h.$set(K);
            const ie = {};
            g & 1114113 && (ie.$$scope = {
                dirty: g,
                ctx: r
            }), U.$set(ie), (($e = r[5].data.user) == null ? void 0 : $e.role) === "admin" ? S ? (S.p(r, g), g & 32 && c(S, 1)) : (S = Ge(r), S.c(), c(S, 1), S.m(O.parentNode, O)) : S && (ge(), _(S, 1, 1, () => {
                S = null
            }), _e())
        },
        i(r) {
            q || (c(e.$$.fragment, r), c(t.$$.fragment, r), c(l.$$.fragment, r), c(o.$$.fragment, r), c(w), c($.$$.fragment, r), c(m.$$.fragment, r), c(h.$$.fragment, r), c(U.$$.fragment, r), c(S), q = !0)
        },
        o(r) {
            _(e.$$.fragment, r), _(t.$$.fragment, r), _(l.$$.fragment, r), _(o.$$.fragment, r), _(w), _($.$$.fragment, r), _(m.$$.fragment, r), _(h.$$.fragment, r), _(U.$$.fragment, r), _(S), q = !1
        },
        d(r) {
            r && (u(a), u(s), u(f), u(p), u(v), u(i), u(b), u(k), u(G), u(O)), I(e, r), I(t, r), I(l, r), I(o, r), w && w.d(r), I($, r), I(m, r), I(h, r), I(U, r), S && S.d(r)
        }
    }
}

function Jt(n) {
    let e, a, t, s, l, f, o, p, v, $, i, m, b, h, k, U, G, O, q = "Analytics",
        w, S, Y, J, r, g, pe = "Accounts",
        fe, X, le, Z, oe, K, ie, L, $e, Ee, ae, be, Ce, Be, Ke = {};
    $ = new st({
        props: Ke
    }), n[9]($);

    function Le(d) {
        n[10](d)
    }
    let ze = {
        deleteFormId: "delete-form"
    };
    n[3] !== void 0 && (ze.isOpen = n[3]), m = new ft({
        props: ze
    }), Ie.push(() => Ne(m, "isOpen", Le));
    let M = n[5].data.showAffiliateBonus && Ue(n);
    S = new At({
        props: {
            statistics: n[0].statistics
        }
    });
    let R = n[2].length !== 0 && Re(n);
    Z = new $t({}), K = new ke({
        props: {
            class: "button-teal flex gap-1",
            size: "xs",
            $$slots: {
                default: [Vt]
            },
            $$scope: {
                ctx: n
            }
        }
    }), K.$on("click", function() {
        We(n[1].open) && n[1].open.apply(this, arguments)
    });

    function Qe(d) {
        n[15](d)
    }
    let Ve = {
        headers: n[4],
        data: n[0].accounts,
        $$slots: {
            default: [qt, ({
                item: d
            }) => ({
                16: d
            }), ({
                item: d
            }) => d ? 65536 : 0]
        },
        $$scope: {
            ctx: n
        }
    };
    return n[2] !== void 0 && (Ve.selected = n[2]), L = new nt({
        props: Ve
    }), Ie.push(() => Ne(L, "selected", Qe)), ae = new rt({
        props: {
            count: n[0].accountsCount,
            itemsPerPage: n[5].url.searchParams.get("search") ? 500 : 100
        }
    }), {
        c() {
            e = y("form"), a = y("input"), t = B(), s = y("form"), l = y("input"), f = B(), o = y("form"), p = y("input"), v = B(), T($.$$.fragment), i = B(), T(m.$$.fragment), h = B(), k = y("div"), M && M.c(), U = B(), G = y("div"), O = y("h1"), O.textContent = q, w = B(), T(S.$$.fragment), Y = B(), J = y("div"), r = y("div"), g = y("h1"), g.textContent = pe, fe = B(), X = y("div"), R && R.c(), le = B(), T(Z.$$.fragment), oe = B(), T(K.$$.fragment), ie = B(), T(L.$$.fragment), Ee = B(), T(ae.$$.fragment), this.h()
        },
        l(d) {
            e = N(d, "FORM", {
                id: !0,
                action: !0,
                method: !0,
                class: !0
            });
            var V = F(e);
            a = N(V, "INPUT", {
                type: !0,
                name: !0
            }), V.forEach(u), t = z(d), s = N(d, "FORM", {
                id: !0,
                action: !0,
                method: !0,
                class: !0
            });
            var ve = F(s);
            l = N(ve, "INPUT", {
                type: !0,
                name: !0
            }), ve.forEach(u), f = z(d), o = N(d, "FORM", {
                id: !0,
                action: !0,
                method: !0,
                class: !0
            });
            var de = F(o);
            p = N(de, "INPUT", {
                type: !0,
                name: !0
            }), de.forEach(u), v = z(d), A($.$$.fragment, d), i = z(d), A(m.$$.fragment, d), h = z(d), k = N(d, "DIV", {
                class: !0
            });
            var te = F(k);
            M && M.l(te), U = z(te), G = N(te, "DIV", {
                class: !0
            });
            var re = F(G);
            O = N(re, "H1", {
                class: !0,
                "data-svelte-h": !0
            }), Se(O) !== "svelte-1e8nz0" && (O.textContent = q), w = z(re), A(S.$$.fragment, re), re.forEach(u), Y = z(te), J = N(te, "DIV", {
                class: !0
            });
            var Q = F(J);
            r = N(Q, "DIV", {
                class: !0
            });
            var ne = F(r);
            g = N(ne, "H1", {
                class: !0,
                "data-svelte-h": !0
            }), Se(g) !== "svelte-csit4y" && (g.textContent = pe), fe = z(ne), X = N(ne, "DIV", {
                class: !0
            });
            var ue = F(X);
            R && R.l(ue), le = z(ue), A(Z.$$.fragment, ue), oe = z(ue), A(K.$$.fragment, ue), ue.forEach(u), ne.forEach(u), ie = z(Q), A(L.$$.fragment, Q), Ee = z(Q), A(ae.$$.fragment, Q), Q.forEach(u), te.forEach(u), this.h()
        },
        h() {
            P(a, "type", "hidden"), P(a, "name", "ids"), P(e, "id", "start-form"), P(e, "action", "/accounts?/start"), P(e, "method", "POST"), P(e, "class", "hidden"), P(l, "type", "hidden"), P(l, "name", "ids"), P(s, "id", "pause-form"), P(s, "action", "/accounts?/pause"), P(s, "method", "POST"), P(s, "class", "hidden"), P(p, "type", "hidden"), P(p, "name", "ids"), P(o, "id", "delete-form"), P(o, "action", "/accounts?/destroy"), P(o, "method", "POST"), P(o, "class", "hidden"), P(O, "class", "text-2xl font-semibold"), P(G, "class", "flex flex-col gap-4"), P(g, "class", "text-2xl font-semibold"), P(X, "class", "flex gap-2"), P(r, "class", "flex flex-col lg:flex-row justify-between lg:items-center gap-3"), P(J, "class", "flex flex-col gap-4"), P(k, "class", "flex flex-col gap-8 lg:gap-12")
        },
        m(d, V) {
            C(d, e, V), E(e, a), me(a, n[2]), C(d, t, V), C(d, s, V), E(s, l), me(l, n[2]), C(d, f, V), C(d, o, V), E(o, p), me(p, n[2]), C(d, v, V), D($, d, V), C(d, i, V), D(m, d, V), C(d, h, V), C(d, k, V), M && M.m(k, null), E(k, U), E(k, G), E(G, O), E(G, w), D(S, G, null), E(k, Y), E(k, J), E(J, r), E(r, g), E(r, fe), E(r, X), R && R.m(X, null), E(X, le), D(Z, X, null), E(X, oe), D(K, X, null), E(J, ie), D(L, J, null), E(J, Ee), D(ae, J, null), be = !0, Ce || (Be = [Te(a, "input", n[6]), he(we.call(null, e, Pe)), Te(l, "input", n[7]), he(we.call(null, s, Pe)), Te(p, "input", n[8]), he(we.call(null, o, Pe))], Ce = !0)
        },
        p(d, [V]) {
            n = d, V & 4 && me(a, n[2]), V & 4 && me(l, n[2]), V & 4 && me(p, n[2]);
            const ve = {};
            $.$set(ve);
            const de = {};
            !b && V & 8 && (b = !0, de.isOpen = n[3], Oe(() => b = !1)), m.$set(de), n[5].data.showAffiliateBonus ? M ? V & 32 && c(M, 1) : (M = Ue(n), M.c(), c(M, 1), M.m(k, U)) : M && (ge(), _(M, 1, 1, () => {
                M = null
            }), _e());
            const te = {};
            V & 1 && (te.statistics = n[0].statistics), S.$set(te), n[2].length !== 0 ? R ? (R.p(n, V), V & 4 && c(R, 1)) : (R = Re(n), R.c(), c(R, 1), R.m(X, le)) : R && (ge(), _(R, 1, 1, () => {
                R = null
            }), _e());
            const re = {};
            V & 1048576 && (re.$$scope = {
                dirty: V,
                ctx: n
            }), K.$set(re);
            const Q = {};
            V & 16 && (Q.headers = n[4]), V & 1 && (Q.data = n[0].accounts), V & 1114145 && (Q.$$scope = {
                dirty: V,
                ctx: n
            }), !$e && V & 4 && ($e = !0, Q.selected = n[2], Oe(() => $e = !1)), L.$set(Q);
            const ne = {};
            V & 1 && (ne.count = n[0].accountsCount), V & 32 && (ne.itemsPerPage = n[5].url.searchParams.get("search") ? 500 : 100), ae.$set(ne)
        },
        i(d) {
            be || (c($.$$.fragment, d), c(m.$$.fragment, d), c(M), c(S.$$.fragment, d), c(R), c(Z.$$.fragment, d), c(K.$$.fragment, d), c(L.$$.fragment, d), c(ae.$$.fragment, d), be = !0)
        },
        o(d) {
            _($.$$.fragment, d), _(m.$$.fragment, d), _(M), _(S.$$.fragment, d), _(R), _(Z.$$.fragment, d), _(K.$$.fragment, d), _(L.$$.fragment, d), _(ae.$$.fragment, d), be = !1
        },
        d(d) {
            d && (u(e), u(t), u(s), u(f), u(o), u(v), u(i), u(h), u(k)), n[9](null), I($, d), I(m, d), M && M.d(), I(S), R && R.d(), I(Z), I(K), I(L), I(ae), Ce = !1, Ye(Be)
        }
    }
}

function Xt(n, e, a) {
    var q;
    let t;
    Ze(n, lt, w => a(5, t = w));
    let {
        data: s
    } = e, l, f = [], o = !1, p;
    ((q = t.data.user) == null ? void 0 : q.role) !== "admin" ? p = ["Email", "Edit", "Status", "Today Profit", "Total Profit", {
        name: "Commission",
        tooltip: "Up to 50% of the total profit goes to FUTEarn"
    }, "Coins", {
        name: "Tp Coins",
        tooltip: "Players listed on transfer market"
    }]: p = ["Email", "Edit", "Status", "Today Profit", "Premium Profit", "Total Profit", {
        name: "Commission",
        tooltip: "Up to 50% of the total profit goes to FUTEarn"
    }, "Coins", {
        name: "Tp Coins",
        tooltip: "Players listed on transfer market"
    }, "Games"];

    function v() {
        f = this.value, a(2, f)
    }

    function $() {
        f = this.value, a(2, f)
    }

    function i() {
        f = this.value, a(2, f)
    }

    function m(w) {
        Ie[w ? "unshift" : "push"](() => {
            l = w, a(1, l)
        })
    }

    function b(w) {
        o = w, a(3, o)
    }
    const h = () => a(3, o = !0),
        k = (w, S) => S.account === w.id,
        U = (w, S) => S.account === w.id,
        G = (w, S) => S.account === w.id;

    function O(w) {
        f = w, a(2, f)
    }
    return n.$$set = w => {
        "data" in w && a(0, s = w.data)
    }, [s, l, f, o, p, t, v, $, i, m, b, h, k, U, G, O]
}
class hs extends Je {
    constructor(e) {
        super(), Xe(this, e, Xt, Jt, qe, {
            data: 0
        })
    }
}
export {
    hs as component
};