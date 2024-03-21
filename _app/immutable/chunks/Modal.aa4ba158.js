import {
    s as Ee,
    E as w,
    l as y,
    h as k,
    C as R,
    W as je,
    F as we,
    w as q,
    x as Z,
    e as D,
    a as z,
    d as N,
    f as S,
    c as O,
    j as v,
    m as A,
    z as j,
    _ as Te,
    S as x,
    O as ne,
    D as $,
    p as B,
    $ as ee,
    u as K,
    q as U,
    r as X,
    t as De,
    i as ze,
    n as Ne
} from "./scheduler.c64253f0.js";
import {
    S as Se,
    i as Oe,
    t as h,
    g as F,
    b as p,
    e as H,
    c as I,
    a as M,
    m as W,
    d as L
} from "./index.9bbe2ba6.js";
import {
    g as Fe,
    a as He
} from "./spread.8a54911c.js";
import {
    t as T
} from "./bundle-mjs.290c8c95.js";
import {
    F as Y
} from "./Frame.cb9309c9.js";
import {
    C as fe
} from "./CloseButton.1b14ac1f.js";
const Ie = `
  a[href], area[href], input:not([disabled]):not([tabindex='-1']),
  button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),
  textarea:not([disabled]):not([tabindex='-1']),
  iframe, object, embed, *[tabindex]:not([tabindex='-1']):not([disabled]), *[contenteditable=true]
`;

function Me(a) {
    function t(l) {
        if (!(l.key === "Tab" || l.keyCode === 9)) return;
        const s = Array.from(a.querySelectorAll(Ie));
        let o = s.indexOf(document.activeElement ? ? a);
        o === -1 && l.shiftKey && (o = 0), o += s.length + (l.shiftKey ? -1 : 1), o %= s.length, s[o].focus(), l.preventDefault()
    }
    return document.addEventListener("keydown", t, !0), {
        destroy() {
            document.removeEventListener("keydown", t, !0)
        }
    }
}
const We = a => ({}),
    te = a => ({}),
    Le = a => ({}),
    le = a => ({});

function se(a) {
    let t, l, e, s, o, d, u, f, g, _;
    const m = [{
        rounded: !0
    }, {
        shadow: !0
    }, a[15], {
        class: a[5]
    }];
    let C = {
        $$slots: {
            default: [Ae]
        },
        $$scope: {
            ctx: a
        }
    };
    for (let n = 0; n < m.length; n += 1) C = q(C, m[n]);
    return o = new Y({
        props: C
    }), {
        c() {
            t = D("div"), l = z(), e = D("div"), s = D("div"), I(o.$$.fragment), this.h()
        },
        l(n) {
            t = N(n, "DIV", {
                class: !0
            }), S(t).forEach(k), l = O(n), e = N(n, "DIV", {
                class: !0,
                tabindex: !0,
                "aria-modal": !0,
                role: !0
            });
            var c = S(e);
            s = N(c, "DIV", {
                class: !0
            });
            var r = S(s);
            M(o.$$.fragment, r), r.forEach(k), c.forEach(k), this.h()
        },
        h() {
            v(t, "class", a[12]), v(s, "class", d = "flex relative " + a[8][a[2]] + " w-full max-h-full"), v(e, "class", u = T(a[4], a[14].classDialog, ...a[7]())), v(e, "tabindex", "-1"), v(e, "aria-modal", "true"), v(e, "role", "dialog")
        },
        m(n, c) {
            y(n, t, c), y(n, l, c), y(n, e, c), A(e, s), W(o, s, null), f = !0, g || (_ = [j(e, "keydown", a[13]), j(e, "wheel", Te(a[23]), {
                passive: !1
            }), x(a[6].call(null, e)), x(Me.call(null, e)), j(e, "click", a[9]), j(e, "mousedown", a[10])], g = !0)
        },
        p(n, c) {
            const r = c & 32800 ? Fe(m, [m[0], m[1], c & 32768 && He(n[15]), c & 32 && {
                class: n[5]
            }]) : {};
            c & 33669130 && (r.$$scope = {
                dirty: c,
                ctx: n
            }), o.$set(r), (!f || c & 4 && d !== (d = "flex relative " + n[8][n[2]] + " w-full max-h-full")) && v(s, "class", d), (!f || c & 16400 && u !== (u = T(n[4], n[14].classDialog, ...n[7]()))) && v(e, "class", u)
        },
        i(n) {
            f || (h(o.$$.fragment, n), f = !0)
        },
        o(n) {
            p(o.$$.fragment, n), f = !1
        },
        d(n) {
            n && (k(t), k(l), k(e)), L(o), g = !1, ne(_)
        }
    }
}

function ae(a) {
    let t, l;
    return t = new Y({
        props: {
            color: a[15].color,
            class: "flex justify-between items-center p-4 rounded-t-lg",
            $$slots: {
                default: [Ve]
            },
            $$scope: {
                ctx: a
            }
        }
    }), {
        c() {
            I(t.$$.fragment)
        },
        l(e) {
            M(t.$$.fragment, e)
        },
        m(e, s) {
            W(t, e, s), l = !0
        },
        p(e, s) {
            const o = {};
            s & 32768 && (o.color = e[15].color), s & 33587210 && (o.$$scope = {
                dirty: s,
                ctx: e
            }), t.$set(o)
        },
        i(e) {
            l || (h(t.$$.fragment, e), l = !0)
        },
        o(e) {
            p(t.$$.fragment, e), l = !1
        },
        d(e) {
            L(t, e)
        }
    }
}

function Pe(a) {
    let t, l, e;
    return {
        c() {
            t = D("h3"), l = De(a[1]), this.h()
        },
        l(s) {
            t = N(s, "H3", {
                class: !0
            });
            var o = S(t);
            l = ze(o, a[1]), o.forEach(k), this.h()
        },
        h() {
            v(t, "class", e = "text-xl font-semibold " + (a[15].color ? "" : "text-gray-900 dark:text-white") + " p-0")
        },
        m(s, o) {
            y(s, t, o), A(t, l)
        },
        p(s, o) {
            o & 2 && Ne(l, s[1]), o & 32768 && e !== (e = "text-xl font-semibold " + (s[15].color ? "" : "text-gray-900 dark:text-white") + " p-0") && v(t, "class", e)
        },
        d(s) {
            s && k(t)
        }
    }
}

function oe(a) {
    let t, l;
    return t = new fe({
        props: {
            name: "Close modal",
            color: a[15].color
        }
    }), t.$on("click", a[11]), {
        c() {
            I(t.$$.fragment)
        },
        l(e) {
            M(t.$$.fragment, e)
        },
        m(e, s) {
            W(t, e, s), l = !0
        },
        p(e, s) {
            const o = {};
            s & 32768 && (o.color = e[15].color), t.$set(o)
        },
        i(e) {
            l || (h(t.$$.fragment, e), l = !0)
        },
        o(e) {
            p(t.$$.fragment, e), l = !1
        },
        d(e) {
            L(t, e)
        }
    }
}

function Ve(a) {
    let t, l, e;
    const s = a[22].header,
        o = B(s, a, a[25], le),
        d = o || Pe(a);
    let u = a[3] && oe(a);
    return {
        c() {
            d && d.c(), t = z(), u && u.c(), l = w()
        },
        l(f) {
            d && d.l(f), t = O(f), u && u.l(f), l = w()
        },
        m(f, g) {
            d && d.m(f, g), y(f, t, g), u && u.m(f, g), y(f, l, g), e = !0
        },
        p(f, g) {
            o ? o.p && (!e || g & 33554432) && K(o, s, f, f[25], e ? X(s, f[25], g, Le) : U(f[25]), le) : d && d.p && (!e || g & 32770) && d.p(f, e ? g : -1), f[3] ? u ? (u.p(f, g), g & 8 && h(u, 1)) : (u = oe(f), u.c(), h(u, 1), u.m(l.parentNode, l)) : u && (F(), p(u, 1, 1, () => {
                u = null
            }), H())
        },
        i(f) {
            e || (h(d, f), h(u), e = !0)
        },
        o(f) {
            p(d, f), p(u), e = !1
        },
        d(f) {
            f && (k(t), k(l)), d && d.d(f), u && u.d(f)
        }
    }
}

function re(a) {
    let t, l;
    return t = new fe({
        props: {
            name: "Close modal",
            class: "absolute top-3 end-2.5",
            color: a[15].color
        }
    }), t.$on("click", a[11]), {
        c() {
            I(t.$$.fragment)
        },
        l(e) {
            M(t.$$.fragment, e)
        },
        m(e, s) {
            W(t, e, s), l = !0
        },
        p(e, s) {
            const o = {};
            s & 32768 && (o.color = e[15].color), t.$set(o)
        },
        i(e) {
            l || (h(t.$$.fragment, e), l = !0)
        },
        o(e) {
            p(t.$$.fragment, e), l = !1
        },
        d(e) {
            L(t, e)
        }
    }
}

function ie(a) {
    let t, l;
    return t = new Y({
        props: {
            color: a[15].color,
            class: "flex items-center p-6 space-x-2 rtl:space-x-reverse rounded-b-lg",
            $$slots: {
                default: [qe]
            },
            $$scope: {
                ctx: a
            }
        }
    }), {
        c() {
            I(t.$$.fragment)
        },
        l(e) {
            M(t.$$.fragment, e)
        },
        m(e, s) {
            W(t, e, s), l = !0
        },
        p(e, s) {
            const o = {};
            s & 32768 && (o.color = e[15].color), s & 33554432 && (o.$$scope = {
                dirty: s,
                ctx: e
            }), t.$set(o)
        },
        i(e) {
            l || (h(t.$$.fragment, e), l = !0)
        },
        o(e) {
            p(t.$$.fragment, e), l = !1
        },
        d(e) {
            L(t, e)
        }
    }
}

function qe(a) {
    let t;
    const l = a[22].footer,
        e = B(l, a, a[25], te);
    return {
        c() {
            e && e.c()
        },
        l(s) {
            e && e.l(s)
        },
        m(s, o) {
            e && e.m(s, o), t = !0
        },
        p(s, o) {
            e && e.p && (!t || o & 33554432) && K(e, l, s, s[25], t ? X(l, s[25], o, We) : U(s[25]), te)
        },
        i(s) {
            t || (h(e, s), t = !0)
        },
        o(s) {
            p(e, s), t = !1
        },
        d(s) {
            e && e.d(s)
        }
    }
}

function Ae(a) {
    let t, l, e, s, o, d, u, f, g, _ = (a[16].header || a[1]) && ae(a),
        m = a[3] && !a[16].header && !a[1] && re(a);
    const C = a[22].default,
        n = B(C, a, a[25], null);
    let c = a[16].footer && ie(a);
    return {
        c() {
            _ && _.c(), t = z(), l = D("div"), m && m.c(), e = z(), n && n.c(), o = z(), c && c.c(), d = w(), this.h()
        },
        l(r) {
            _ && _.l(r), t = O(r), l = N(r, "DIV", {
                class: !0,
                role: !0
            });
            var b = S(l);
            m && m.l(b), e = O(b), n && n.l(b), b.forEach(k), o = O(r), c && c.l(r), d = w(), this.h()
        },
        h() {
            v(l, "class", s = T("p-6 space-y-6 flex-1 overflow-y-auto overscroll-contain", a[14].bodyClass)), v(l, "role", "document")
        },
        m(r, b) {
            _ && _.m(r, b), y(r, t, b), y(r, l, b), m && m.m(l, null), A(l, e), n && n.m(l, null), y(r, o, b), c && c.m(r, b), y(r, d, b), u = !0, f || (g = [j(l, "keydown", ee(a[13])), j(l, "wheel", ee(a[24]), {
                passive: !0
            })], f = !0)
        },
        p(r, b) {
            r[16].header || r[1] ? _ ? (_.p(r, b), b & 65538 && h(_, 1)) : (_ = ae(r), _.c(), h(_, 1), _.m(t.parentNode, t)) : _ && (F(), p(_, 1, 1, () => {
                _ = null
            }), H()), r[3] && !r[16].header && !r[1] ? m ? (m.p(r, b), b & 65546 && h(m, 1)) : (m = re(r), m.c(), h(m, 1), m.m(l, e)) : m && (F(), p(m, 1, 1, () => {
                m = null
            }), H()), n && n.p && (!u || b & 33554432) && K(n, C, r, r[25], u ? X(C, r[25], b, null) : U(r[25]), null), (!u || b & 16384 && s !== (s = T("p-6 space-y-6 flex-1 overflow-y-auto overscroll-contain", r[14].bodyClass))) && v(l, "class", s), r[16].footer ? c ? (c.p(r, b), b & 65536 && h(c, 1)) : (c = ie(r), c.c(), h(c, 1), c.m(d.parentNode, d)) : c && (F(), p(c, 1, 1, () => {
                c = null
            }), H())
        },
        i(r) {
            u || (h(_), h(m), h(n, r), h(c), u = !0)
        },
        o(r) {
            p(_), p(m), p(n, r), p(c), u = !1
        },
        d(r) {
            r && (k(t), k(l), k(o), k(d)), _ && _.d(r), m && m.d(), n && n.d(r), c && c.d(r), f = !1, ne(g)
        }
    }
}

function Be(a) {
    let t, l, e = a[0] && se(a);
    return {
        c() {
            e && e.c(), t = w()
        },
        l(s) {
            e && e.l(s), t = w()
        },
        m(s, o) {
            e && e.m(s, o), y(s, t, o), l = !0
        },
        p(s, [o]) {
            s[0] ? e ? (e.p(s, o), o & 1 && h(e, 1)) : (e = se(s), e.c(), h(e, 1), e.m(t.parentNode, t)) : e && (F(), p(e, 1, 1, () => {
                e = null
            }), H())
        },
        i(s) {
            l || (h(e), l = !0)
        },
        o(s) {
            p(e), l = !1
        },
        d(s) {
            s && k(t), e && e.d(s)
        }
    }
}

function Ke(a, t, l) {
    const e = ["open", "title", "size", "placement", "autoclose", "dismissable", "backdropClass", "defaultClass", "outsideclose", "dialogClass"];
    let s = R(t, e),
        {
            $$slots: o = {},
            $$scope: d
        } = t;
    const u = je(o);
    let {
        open: f = !1
    } = t, {
        title: g = ""
    } = t, {
        size: _ = "md"
    } = t, {
        placement: m = "center"
    } = t, {
        autoclose: C = !1
    } = t, {
        dismissable: n = !0
    } = t, {
        backdropClass: c = "fixed inset-0 z-40 bg-gray-900 bg-opacity-50 dark:bg-opacity-80"
    } = t, {
        defaultClass: r = "relative flex flex-col mx-auto"
    } = t, {
        outsideclose: b = !1
    } = t, {
        dialogClass: G = "fixed top-0 start-0 end-0 h-modal md:inset-0 md:h-full z-50 w-full p-4 flex"
    } = t;
    const ce = we();

    function ue(i) {
        const E = document.createTreeWalker(i, NodeFilter.SHOW_ELEMENT);
        let V;
        for (; V = E.nextNode();)
            if (V instanceof HTMLElement) {
                const Q = V,
                    [Ce, ye] = he(Q);
                (Ce || ye) && (Q.tabIndex = 0)
            }
        i.focus()
    }
    const me = () => {
            switch (m) {
                case "top-left":
                    return ["justify-start", "items-start"];
                case "top-center":
                    return ["justify-center", "items-start"];
                case "top-right":
                    return ["justify-end", "items-start"];
                case "center-left":
                    return ["justify-start", "items-center"];
                case "center":
                    return ["justify-center", "items-center"];
                case "center-right":
                    return ["justify-end", "items-center"];
                case "bottom-left":
                    return ["justify-start", "items-end"];
                case "bottom-center":
                    return ["justify-center", "items-end"];
                case "bottom-right":
                    return ["justify-end", "items-end"];
                default:
                    return ["justify-center", "items-center"]
            }
        },
        de = {
            xs: "max-w-md",
            sm: "max-w-lg",
            md: "max-w-2xl",
            lg: "max-w-4xl",
            xl: "max-w-7xl"
        },
        _e = i => {
            const E = i.target;
            C && (E == null ? void 0 : E.tagName) === "BUTTON" && P(i)
        },
        be = i => {
            const E = i.target;
            b && E === i.currentTarget && P(i)
        },
        P = i => {
            i.preventDefault(), l(0, f = !1)
        };
    let J;
    const he = i => [i.scrollWidth > i.clientWidth && ["scroll", "auto"].indexOf(getComputedStyle(i).overflowX) >= 0, i.scrollHeight > i.clientHeight && ["scroll", "auto"].indexOf(getComputedStyle(i).overflowY) >= 0];
    let ge = T(c, t.classBackdrop);

    function pe(i) {
        if (i.key === "Escape" && n) return P(i)
    }

    function ke(i) {
        $.call(this, a, i)
    }

    function ve(i) {
        $.call(this, a, i)
    }
    return a.$$set = i => {
        l(14, t = q(q({}, t), Z(i))), l(15, s = R(t, e)), "open" in i && l(0, f = i.open), "title" in i && l(1, g = i.title), "size" in i && l(2, _ = i.size), "placement" in i && l(17, m = i.placement), "autoclose" in i && l(18, C = i.autoclose), "dismissable" in i && l(3, n = i.dismissable), "backdropClass" in i && l(19, c = i.backdropClass), "defaultClass" in i && l(20, r = i.defaultClass), "outsideclose" in i && l(21, b = i.outsideclose), "dialogClass" in i && l(4, G = i.dialogClass), "$$scope" in i && l(25, d = i.$$scope)
    }, a.$$.update = () => {
        a.$$.dirty & 1 && ce(f ? "open" : "close"), l(5, J = T(r, "w-full divide-y", t.class))
    }, t = Z(t), [f, g, _, n, G, J, ue, me, de, _e, be, P, ge, pe, t, s, u, m, C, c, r, b, o, ke, ve, d]
}
class Re extends Se {
    constructor(t) {
        super(), Oe(this, t, Ke, Be, Ee, {
            open: 0,
            title: 1,
            size: 2,
            placement: 17,
            autoclose: 18,
            dismissable: 3,
            backdropClass: 19,
            defaultClass: 20,
            outsideclose: 21,
            dialogClass: 4
        })
    }
}
export {
    Re as M
};