import {
    s as Ye,
    w as ge,
    C as Re,
    x as Ue,
    D as j,
    e as v,
    d as w,
    K as We,
    l as h,
    z as V,
    h as d,
    O as ot,
    G as it,
    B as be,
    H as Fe,
    o as ut,
    a as k,
    E as Xe,
    f as T,
    y as ie,
    c as P,
    j as I,
    m as $,
    S as Ze,
    t as ue,
    i as fe,
    I as Ne,
    P as Oe
} from "./scheduler.c64253f0.js";
import {
    S as et,
    i as tt,
    c as S,
    a as y,
    m as z,
    t as C,
    b as E,
    d as D,
    h as Ve,
    g as ft,
    e as ct
} from "./index.9bbe2ba6.js";
import {
    e as nt
} from "./forms.08853d46.js";
import {
    p as mt
} from "./stores.d2a90a39.js";
import {
    P as Ae
} from "./enums.c4d7a959.js";
import {
    n as at
} from "./form.71209947.js";
import {
    s as pt
} from "./index.6762df30.js";
import {
    C as dt
} from "./CloseButton.1b14ac1f.js";
import {
    B as Ke
} from "./Button.0ff68f55.js";
import {
    D as _t
} from "./Drawer.d6d30cc3.js";
import {
    L as de
} from "./Label.a046bb2e.js";
import {
    g as st,
    a as $t
} from "./spread.8a54911c.js";
import {
    t as Je
} from "./bundle-mjs.290c8c95.js";
import {
    I as he
} from "./Input.96587e6f.js";
import {
    S as ht
} from "./Select.c14c6a94.js";
import {
    S as gt
} from "./send.7add5c12.js";
import {
    P as bt
} from "./plus.c6b857ba.js";

function vt(n) {
    let e, t, s, a = [{
            type: "file"
        }, n[17]],
        r = {};
    for (let o = 0; o < a.length; o += 1) r = ge(r, a[o]);
    return {
        c() {
            e = v("input"), this.h()
        },
        l(o) {
            e = w(o, "INPUT", {
                type: !0
            }), this.h()
        },
        h() {
            We(e, r)
        },
        m(o, i) {
            h(o, e, i), e.autofocus && e.focus(), t || (s = [V(e, "change", n[5]), V(e, "keyup", n[6]), V(e, "keydown", n[7]), V(e, "keypress", n[8]), V(e, "focus", n[9]), V(e, "blur", n[10]), V(e, "click", n[11]), V(e, "mouseover", n[12]), V(e, "mouseenter", n[13]), V(e, "mouseleave", n[14]), V(e, "paste", n[15]), V(e, "change", n[16])], t = !0)
        },
        p(o, i) {
            We(e, r = st(a, [{
                type: "file"
            }, i & 131072 && o[17]]))
        },
        d(o) {
            o && d(e), t = !1, ot(s)
        }
    }
}

function wt(n) {
    let e, t;
    const s = [n[3], {
        class: Je(n[2], n[4].class)
    }];
    let a = {
        $$slots: {
            default: [vt, ({
                props: r
            }) => ({
                17: r
            }), ({
                props: r
            }) => r ? 131072 : 0]
        },
        $$scope: {
            ctx: n
        }
    };
    for (let r = 0; r < s.length; r += 1) a = ge(a, s[r]);
    return e = new he({
        props: a
    }), {
        c() {
            S(e.$$.fragment)
        },
        l(r) {
            y(e.$$.fragment, r)
        },
        m(r, o) {
            z(e, r, o), t = !0
        },
        p(r, [o]) {
            const i = o & 28 ? st(s, [o & 8 && $t(r[3]), o & 20 && {
                class: Je(r[2], r[4].class)
            }]) : {};
            o & 393219 && (i.$$scope = {
                dirty: o,
                ctx: r
            }), e.$set(i)
        },
        i(r) {
            t || (C(e.$$.fragment, r), t = !0)
        },
        o(r) {
            E(e.$$.fragment, r), t = !1
        },
        d(r) {
            D(e, r)
        }
    }
}

function Ct(n, e, t) {
    const s = ["value", "files", "inputClass"];
    let a = Re(e, s),
        {
            value: r = ""
        } = e,
        {
            files: o = void 0
        } = e,
        {
            inputClass: i = "border !p-0 dark:text-gray-400"
        } = e;

    function f(p) {
        j.call(this, n, p)
    }

    function m(p) {
        j.call(this, n, p)
    }

    function u(p) {
        j.call(this, n, p)
    }

    function c(p) {
        j.call(this, n, p)
    }

    function O(p) {
        j.call(this, n, p)
    }

    function N(p) {
        j.call(this, n, p)
    }

    function J(p) {
        j.call(this, n, p)
    }

    function A(p) {
        j.call(this, n, p)
    }

    function Q(p) {
        j.call(this, n, p)
    }

    function Y(p) {
        j.call(this, n, p)
    }

    function g(p) {
        j.call(this, n, p)
    }

    function x() {
        r = this.value, o = this.files, t(0, r), t(1, o)
    }
    return n.$$set = p => {
        t(4, e = ge(ge({}, e), Ue(p))), t(3, a = Re(e, s)), "value" in p && t(0, r = p.value), "files" in p && t(1, o = p.files), "inputClass" in p && t(2, i = p.inputClass)
    }, e = Ue(e), [r, o, i, a, e, f, m, u, c, O, N, J, A, Q, Y, g, x]
}
class kt extends et {
    constructor(e) {
        super(), tt(this, e, Ct, wt, Ye, {
            value: 0,
            files: 1,
            inputClass: 2
        })
    }
}

function Pt(n) {
    let e;
    return {
        c() {
            e = ue("EA FC Email")
        },
        l(t) {
            e = fe(t, "EA FC Email")
        },
        m(t, s) {
            h(t, e, s)
        },
        d(t) {
            t && d(e)
        }
    }
}

function Et(n) {
    let e;
    return {
        c() {
            e = ue("EA FC Password")
        },
        l(t) {
            e = fe(t, "EA FC Password")
        },
        m(t, s) {
            h(t, e, s)
        },
        d(t) {
            t && d(e)
        }
    }
}

function It(n) {
    let e;
    return {
        c() {
            e = ue("Code")
        },
        l(t) {
            e = fe(t, "Code")
        },
        m(t, s) {
            h(t, e, s)
        },
        d(t) {
            t && d(e)
        }
    }
}

function St(n) {
    let e, t, s;
    return e = new gt({
        props: {
            size: 12
        }
    }), {
        c() {
            S(e.$$.fragment), t = ue(`
            Send code?`)
        },
        l(a) {
            y(e.$$.fragment, a), t = fe(a, `
            Send code?`)
        },
        m(a, r) {
            z(e, a, r), h(a, t, r), s = !0
        },
        p: Ne,
        i(a) {
            s || (C(e.$$.fragment, a), s = !0)
        },
        o(a) {
            E(e.$$.fragment, a), s = !1
        },
        d(a) {
            a && d(t), D(e, a)
        }
    }
}

function yt(n) {
    let e;
    return {
        c() {
            e = ue("Platform")
        },
        l(t) {
            e = fe(t, "Platform")
        },
        m(t, s) {
            h(t, e, s)
        },
        d(t) {
            t && d(e)
        }
    }
}

function zt(n) {
    let e, t = "Xbox",
        s, a, r = "Playstation",
        o, i, f = "Pc";
    return {
        c() {
            e = v("option"), e.textContent = t, s = k(), a = v("option"), a.textContent = r, o = k(), i = v("option"), i.textContent = f, this.h()
        },
        l(m) {
            e = w(m, "OPTION", {
                "data-svelte-h": !0
            }), ie(e) !== "svelte-175geix" && (e.textContent = t), s = P(m), a = w(m, "OPTION", {
                "data-svelte-h": !0
            }), ie(a) !== "svelte-wx2baz" && (a.textContent = r), o = P(m), i = w(m, "OPTION", {
                "data-svelte-h": !0
            }), ie(i) !== "svelte-ifp78t" && (i.textContent = f), this.h()
        },
        h() {
            e.__value = Ae.Xbox, Oe(e, e.__value), a.__value = Ae.Playstation, Oe(a, a.__value), i.__value = Ae.Pc, Oe(i, i.__value)
        },
        m(m, u) {
            h(m, e, u), h(m, s, u), h(m, a, u), h(m, o, u), h(m, i, u)
        },
        p: Ne,
        d(m) {
            m && (d(e), d(s), d(a), d(o), d(i))
        }
    }
}

function Dt(n) {
    let e, t, s;
    return e = new bt({
        props: {
            size: 18
        }
    }), {
        c() {
            S(e.$$.fragment), t = ue(`
        Create`)
        },
        l(a) {
            y(e.$$.fragment, a), t = fe(a, `
        Create`)
        },
        m(a, r) {
            z(e, a, r), h(a, t, r), s = !0
        },
        p: Ne,
        i(a) {
            s || (C(e.$$.fragment, a), s = !0)
        },
        o(a) {
            E(e.$$.fragment, a), s = !1
        },
        d(a) {
            a && d(t), D(e, a)
        }
    }
}

function Qe(n) {
    let e, t, s, a, r, o, i, f, m;
    return a = new de({
        props: {
            class: "label mb-2",
            $$slots: {
                default: [Ot]
            },
            $$scope: {
                ctx: n
            }
        }
    }), o = new kt({
        props: {
            name: "file",
            accept: ".csv"
        }
    }), o.$on("change", n[7]), {
        c() {
            e = v("div"), t = k(), s = v("form"), S(a.$$.fragment), r = k(), S(o.$$.fragment), this.h()
        },
        l(u) {
            e = w(u, "DIV", {
                class: !0
            }), T(e).forEach(d), t = P(u), s = w(u, "FORM", {
                action: !0,
                method: !0,
                enctype: !0
            });
            var c = T(s);
            y(a.$$.fragment, c), r = P(c), y(o.$$.fragment, c), c.forEach(d), this.h()
        },
        h() {
            I(e, "class", "border-b border-zinc-700 h-1"), I(s, "action", "/accounts?/_import"), I(s, "method", "POST"), I(s, "enctype", "multipart/form-data")
        },
        m(u, c) {
            h(u, e, c), h(u, t, c), h(u, s, c), z(a, s, null), $(s, r), z(o, s, null), n[13](s), i = !0, f || (m = Ze(nt.call(null, s, at)), f = !0)
        },
        p(u, c) {
            const O = {};
            c & 32768 && (O.$$scope = {
                dirty: c,
                ctx: u
            }), a.$set(O)
        },
        i(u) {
            i || (C(a.$$.fragment, u), C(o.$$.fragment, u), i = !0)
        },
        o(u) {
            E(a.$$.fragment, u), E(o.$$.fragment, u), i = !1
        },
        d(u) {
            u && (d(e), d(t), d(s)), D(a), D(o), n[13](null), f = !1, m()
        }
    }
}

function Ot(n) {
    let e;
    return {
        c() {
            e = ue("Import")
        },
        l(t) {
            e = fe(t, "Import")
        },
        m(t, s) {
            h(t, e, s)
        },
        d(t) {
            t && d(e)
        }
    }
}

function At(n) {
    var qe, Ge;
    let e, t, s, a = "Create Account",
        r, o, i, f, m = "Enter your EA FC account details here. Make sure the transfer market is unlocked on web app.",
        u, c, O, N, J, A, Q, Y, g, x, p, M, ve, we, Z, H, L, Ce, B, R, ke, ee, Te = "or",
        Pe, q, je = "Get backup code?",
        Ee, te, Ie, ne, U, Se, W, ye, me, X, _e, ze = ((qe = n[6].data.user) == null ? void 0 : qe.role) === "admin" || ((Ge = n[6].data.user) == null ? void 0 : Ge.role.includes("vip")),
        ce, $e, De, xe;
    o = new dt({
        props: {
            class: "hover:bg-zinc-700"
        }
    }), o.$on("click", n[10]), N = new de({
        props: {
            for: "email",
            class: "label pb-2",
            $$slots: {
                default: [Pt]
            },
            $$scope: {
                ctx: n
            }
        }
    });

    function lt(l) {
        n[11](l)
    }
    let Be = {
        name: "email",
        type: "email",
        placeholder: "account@gmail.com"
    };
    n[3] !== void 0 && (Be.value = n[3]), A = new he({
        props: Be
    }), be.push(() => Ve(A, "value", lt)), x = new de({
        props: {
            for: "password",
            class: "label pb-2",
            $$slots: {
                default: [Et]
            },
            $$scope: {
                ctx: n
            }
        }
    });

    function rt(l) {
        n[12](l)
    }
    let Me = {
        name: "password",
        type: "text",
        placeholder: "*******"
    };
    n[4] !== void 0 && (Me.value = n[4]), M = new he({
        props: Me
    }), be.push(() => Ve(M, "value", rt)), L = new de({
        props: {
            for: "code",
            class: "label pb-2",
            $$slots: {
                default: [It]
            },
            $$scope: {
                ctx: n
            }
        }
    }), R = new Ke({
        props: {
            size: "xs",
            formaction: "/accounts?/sendCode",
            type: "submit",
            class: "flex items-center mb-2 gap-1 button-secondary",
            disabled: !n[3] || !n[4],
            $$slots: {
                default: [St]
            },
            $$scope: {
                ctx: n
            }
        }
    }), te = new he({
        props: {
            name: "code",
            type: "text",
            placeholder: "12345678",
            onkeyup: "this.value=this.value.replace(/[^\\d]/,'')"
        }
    }), U = new de({
        props: {
            for: "password",
            class: "label pb-2",
            $$slots: {
                default: [yt]
            },
            $$scope: {
                ctx: n
            }
        }
    }), W = new ht({
        props: {
            name: "platform",
            class: "input",
            $$slots: {
                default: [zt]
            },
            $$scope: {
                ctx: n
            }
        }
    }), X = new Ke({
        props: {
            type: "submit",
            class: "button-teal w-full flex gap-1",
            $$slots: {
                default: [Dt]
            },
            $$scope: {
                ctx: n
            }
        }
    });
    let b = ze && Qe(n);
    return {
        c() {
            e = v("div"), t = v("div"), s = v("span"), s.textContent = a, r = k(), S(o.$$.fragment), i = k(), f = v("span"), f.textContent = m, u = k(), c = v("form"), O = v("div"), S(N.$$.fragment), J = k(), S(A.$$.fragment), Y = k(), g = v("div"), S(x.$$.fragment), p = k(), S(M.$$.fragment), we = k(), Z = v("div"), H = v("div"), S(L.$$.fragment), Ce = k(), B = v("div"), S(R.$$.fragment), ke = k(), ee = v("span"), ee.textContent = Te, Pe = k(), q = v("a"), q.textContent = je, Ee = k(), S(te.$$.fragment), Ie = k(), ne = v("div"), S(U.$$.fragment), Se = k(), S(W.$$.fragment), ye = k(), me = v("div"), S(X.$$.fragment), _e = k(), b && b.c(), ce = Xe(), this.h()
        },
        l(l) {
            e = w(l, "DIV", {
                class: !0
            });
            var _ = T(e);
            t = w(_, "DIV", {
                class: !0
            });
            var ae = T(t);
            s = w(ae, "SPAN", {
                class: !0,
                "data-svelte-h": !0
            }), ie(s) !== "svelte-shiyoj" && (s.textContent = a), r = P(ae), y(o.$$.fragment, ae), ae.forEach(d), i = P(_), f = w(_, "SPAN", {
                class: !0,
                "data-svelte-h": !0
            }), ie(f) !== "svelte-67hcrn" && (f.textContent = m), _.forEach(d), u = P(l), c = w(l, "FORM", {
                method: !0,
                action: !0,
                class: !0
            });
            var F = T(c);
            O = w(F, "DIV", {});
            var se = T(O);
            y(N.$$.fragment, se), J = P(se), y(A.$$.fragment, se), se.forEach(d), Y = P(F), g = w(F, "DIV", {});
            var le = T(g);
            y(x.$$.fragment, le), p = P(le), y(M.$$.fragment, le), le.forEach(d), we = P(F), Z = w(F, "DIV", {});
            var re = T(Z);
            H = w(re, "DIV", {
                class: !0
            });
            var K = T(H);
            y(L.$$.fragment, K), Ce = P(K), B = w(K, "DIV", {
                class: !0
            });
            var G = T(B);
            y(R.$$.fragment, G), ke = P(G), ee = w(G, "SPAN", {
                class: !0,
                "data-svelte-h": !0
            }), ie(ee) !== "svelte-1sycwyp" && (ee.textContent = Te), Pe = P(G), q = w(G, "A", {
                target: !0,
                href: !0,
                class: !0,
                "data-svelte-h": !0
            }), ie(q) !== "svelte-vqeekm" && (q.textContent = je), G.forEach(d), K.forEach(d), Ee = P(re), y(te.$$.fragment, re), re.forEach(d), Ie = P(F), ne = w(F, "DIV", {});
            var oe = T(ne);
            y(U.$$.fragment, oe), Se = P(oe), y(W.$$.fragment, oe), oe.forEach(d), ye = P(F), me = w(F, "DIV", {});
            var pe = T(me);
            y(X.$$.fragment, pe), pe.forEach(d), F.forEach(d), _e = P(l), b && b.l(l), ce = Xe(), this.h()
        },
        h() {
            I(s, "class", "text-2xl font-semibold"), I(t, "class", "flex items-center justify-between"), I(f, "class", "text-zinc-400 text-sm"), I(e, "class", "flex flex-col gap-3"), I(ee, "class", "text-xs mb-2"), I(q, "target", "_blank"), I(q, "href", "https://myaccount.ea.com/cp-ui/security/index"), I(q, "class", "text-xs mb-2 text-teal-400"), I(B, "class", "flex items-center gap-2"), I(H, "class", "flex items-center justify-between"), I(c, "method", "POST"), I(c, "action", "/accounts?/create"), I(c, "class", "flex flex-col gap-6")
        },
        m(l, _) {
            h(l, e, _), $(e, t), $(t, s), $(t, r), z(o, t, null), $(e, i), $(e, f), h(l, u, _), h(l, c, _), $(c, O), z(N, O, null), $(O, J), z(A, O, null), $(c, Y), $(c, g), z(x, g, null), $(g, p), z(M, g, null), $(c, we), $(c, Z), $(Z, H), z(L, H, null), $(H, Ce), $(H, B), z(R, B, null), $(B, ke), $(B, ee), $(B, Pe), $(B, q), $(Z, Ee), z(te, Z, null), $(c, Ie), $(c, ne), z(U, ne, null), $(ne, Se), z(W, ne, null), $(c, ye), $(c, me), z(X, me, null), h(l, _e, _), b && b.m(l, _), h(l, ce, _), $e = !0, De || (xe = Ze(nt.call(null, c, at)), De = !0)
        },
        p(l, _) {
            var He, Le;
            const ae = {};
            _ & 32768 && (ae.$$scope = {
                dirty: _,
                ctx: l
            }), N.$set(ae);
            const F = {};
            !Q && _ & 8 && (Q = !0, F.value = l[3], Fe(() => Q = !1)), A.$set(F);
            const se = {};
            _ & 32768 && (se.$$scope = {
                dirty: _,
                ctx: l
            }), x.$set(se);
            const le = {};
            !ve && _ & 16 && (ve = !0, le.value = l[4], Fe(() => ve = !1)), M.$set(le);
            const re = {};
            _ & 32768 && (re.$$scope = {
                dirty: _,
                ctx: l
            }), L.$set(re);
            const K = {};
            _ & 24 && (K.disabled = !l[3] || !l[4]), _ & 32768 && (K.$$scope = {
                dirty: _,
                ctx: l
            }), R.$set(K);
            const G = {};
            _ & 32768 && (G.$$scope = {
                dirty: _,
                ctx: l
            }), U.$set(G);
            const oe = {};
            _ & 32768 && (oe.$$scope = {
                dirty: _,
                ctx: l
            }), W.$set(oe);
            const pe = {};
            _ & 32768 && (pe.$$scope = {
                dirty: _,
                ctx: l
            }), X.$set(pe), _ & 64 && (ze = ((He = l[6].data.user) == null ? void 0 : He.role) === "admin" || ((Le = l[6].data.user) == null ? void 0 : Le.role.includes("vip"))), ze ? b ? (b.p(l, _), _ & 64 && C(b, 1)) : (b = Qe(l), b.c(), C(b, 1), b.m(ce.parentNode, ce)) : b && (ft(), E(b, 1, 1, () => {
                b = null
            }), ct())
        },
        i(l) {
            $e || (C(o.$$.fragment, l), C(N.$$.fragment, l), C(A.$$.fragment, l), C(x.$$.fragment, l), C(M.$$.fragment, l), C(L.$$.fragment, l), C(R.$$.fragment, l), C(te.$$.fragment, l), C(U.$$.fragment, l), C(W.$$.fragment, l), C(X.$$.fragment, l), C(b), $e = !0)
        },
        o(l) {
            E(o.$$.fragment, l), E(N.$$.fragment, l), E(A.$$.fragment, l), E(x.$$.fragment, l), E(M.$$.fragment, l), E(L.$$.fragment, l), E(R.$$.fragment, l), E(te.$$.fragment, l), E(U.$$.fragment, l), E(W.$$.fragment, l), E(X.$$.fragment, l), E(b), $e = !1
        },
        d(l) {
            l && (d(e), d(u), d(c), d(_e), d(ce)), D(o), D(N), D(A), D(x), D(M), D(L), D(R), D(te), D(U), D(W), D(X), b && b.d(l), De = !1, xe()
        }
    }
}

function Ft(n) {
    let e, t, s, a, r;
    it(n[9]);

    function o(f) {
        n[14](f)
    }
    let i = {
        placement: n[0] < 1024 ? "bottom" : "right",
        transitionType: "fly",
        class: "bg-zinc-900/75 backdrop-blur-sm flex flex-col gap-6 w-full lg:w-96 border-l border-zinc-800 shadow-xl",
        bgColor: "bg-zinc-950",
        bgOpacity: "bg-opacity-75",
        auto: !0,
        activateClickOutside: !1,
        transitionParams: n[5],
        $$slots: {
            default: [At]
        },
        $$scope: {
            ctx: n
        }
    };
    return n[1] !== void 0 && (i.hidden = n[1]), e = new _t({
        props: i
    }), be.push(() => Ve(e, "hidden", o)), {
        c() {
            S(e.$$.fragment)
        },
        l(f) {
            y(e.$$.fragment, f)
        },
        m(f, m) {
            z(e, f, m), s = !0, a || (r = V(window, "resize", n[9]), a = !0)
        },
        p(f, [m]) {
            const u = {};
            m & 1 && (u.placement = f[0] < 1024 ? "bottom" : "right"), m & 32 && (u.transitionParams = f[5]), m & 32862 && (u.$$scope = {
                dirty: m,
                ctx: f
            }), !t && m & 2 && (t = !0, u.hidden = f[1], Fe(() => t = !1)), e.$set(u)
        },
        i(f) {
            s || (C(e.$$.fragment, f), s = !0)
        },
        o(f) {
            E(e.$$.fragment, f), s = !1
        },
        d(f) {
            D(e, f), a = !1, r()
        }
    }
}

function Vt(n, e, t) {
    let s, a;
    ut(n, mt, g => t(6, a = g));
    let r = !0,
        o = 0,
        i, f = "",
        m = "";

    function u() {
        t(1, r = !1)
    }

    function c() {
        i.dispatchEvent(new SubmitEvent("submit")), i.reset()
    }

    function O() {
        t(0, o = window.innerWidth)
    }
    const N = () => t(1, r = !0);

    function J(g) {
        f = g, t(3, f)
    }

    function A(g) {
        m = g, t(4, m)
    }

    function Q(g) {
        be[g ? "unshift" : "push"](() => {
            i = g, t(2, i)
        })
    }

    function Y(g) {
        r = g, t(1, r)
    }
    return n.$$.update = () => {
        n.$$.dirty & 1 && t(5, s = {
            x: o > 1024 ? 320 : 0,
            y: o < 1024 ? 320 : 0,
            duration: 200,
            easing: pt
        })
    }, [o, r, i, f, m, s, a, c, u, O, N, J, A, Q, Y]
}
class Yt extends et {
    constructor(e) {
        super(), tt(this, e, Vt, Ft, Ye, {
            open: 8
        })
    }
    get open() {
        return this.$$.ctx[8]
    }
}
export {
    Yt as A
};