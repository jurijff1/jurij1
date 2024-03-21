import {
    s as w,
    E as K,
    l as y,
    h as m,
    C as M,
    w as T,
    x as W,
    p,
    a as x,
    e as S,
    c as $,
    d as V,
    f as q,
    K as A,
    S as tt,
    u as et,
    q as it,
    r as lt,
    G as st,
    j as D,
    I as J,
    z as at
} from "./scheduler.c64253f0.js";
import {
    S as ft,
    i as rt,
    t as C,
    g as nt,
    b as I,
    e as ot,
    f as B
} from "./index.9bbe2ba6.js";
import {
    g as ut
} from "./spread.8a54911c.js";
import {
    t as z
} from "./bundle-mjs.290c8c95.js";
import {
    a as ct,
    f as dt,
    b as mt,
    c as bt
} from "./index.6762df30.js";
const ht = (e, t) => {
        const i = s => {
            s != null && s.target && e && !e.contains(s.target) && !s.defaultPrevented && t()
        };
        return document.addEventListener("click", i, !0), {
            destroy() {
                document.removeEventListener("click", i, !0)
            }
        }
    },
    Ot = e => ({
        hidden: e & 1
    }),
    F = e => ({
        hidden: e[0]
    });

function H(e) {
    let t, i, s, f, r, _, b;

    function c(a, o) {
        if (a[4] && a[1]) return _t;
        if (a[4] && !a[1]) return gt
    }
    let d = c(e),
        n = d && d(e);
    const h = e[25].default,
        u = p(h, e, e[24], F);
    let O = [{
            id: e[6]
        }, e[15], {
            class: s = z(e[7], e[3], e[2], e[10][e[5]], e[16].class)
        }, {
            tabindex: "-1"
        }, {
            "aria-controls": e[6]
        }, {
            "aria-labelledby": e[6]
        }],
        g = {};
    for (let a = 0; a < O.length; a += 1) g = T(g, O[a]);
    return {
        c() {
            n && n.c(), t = x(), i = S("div"), u && u.c(), this.h()
        },
        l(a) {
            n && n.l(a), t = $(a), i = V(a, "DIV", {
                id: !0,
                class: !0,
                tabindex: !0,
                "aria-controls": !0,
                "aria-labelledby": !0
            });
            var o = q(i);
            u && u.l(o), o.forEach(m), this.h()
        },
        h() {
            A(i, g)
        },
        m(a, o) {
            n && n.m(a, o), y(a, t, o), y(a, i, o), u && u.m(i, null), r = !0, _ || (b = tt(e[14].call(null, i, e[12])), _ = !0)
        },
        p(a, o) {
            e = a, d === (d = c(e)) && n ? n.p(e, o) : (n && n.d(1), n = d && d(e), n && (n.c(), n.m(t.parentNode, t))), u && u.p && (!r || o & 16777217) && et(u, h, e, e[24], r ? lt(h, e[24], o, Ot) : it(e[24]), F), A(i, g = ut(O, [(!r || o & 64) && {
                id: e[6]
            }, o & 32768 && e[15], (!r || o & 65708 && s !== (s = z(e[7], e[3], e[2], e[10][e[5]], e[16].class))) && {
                class: s
            }, {
                tabindex: "-1"
            }, (!r || o & 64) && {
                "aria-controls": e[6]
            }, (!r || o & 64) && {
                "aria-labelledby": e[6]
            }]))
        },
        i(a) {
            r || (C(u, a), a && st(() => {
                r && (f || (f = B(i, e[9], e[8], !0)), f.run(1))
            }), r = !0)
        },
        o(a) {
            I(u, a), a && (f || (f = B(i, e[9], e[8], !1)), f.run(0)), r = !1
        },
        d(a) {
            a && (m(t), m(i)), n && n.d(a), u && u.d(a), a && f && f.end(), _ = !1, b()
        }
    }
}

function gt(e) {
    let t;
    return {
        c() {
            t = S("div"), this.h()
        },
        l(i) {
            t = V(i, "DIV", {
                role: !0,
                class: !0
            }), q(t).forEach(m), this.h()
        },
        h() {
            D(t, "role", "presentation"), D(t, "class", e[13])
        },
        m(i, s) {
            y(i, t, s)
        },
        p: J,
        d(i) {
            i && m(t)
        }
    }
}

function _t(e) {
    let t, i, s;
    return {
        c() {
            t = S("div"), this.h()
        },
        l(f) {
            t = V(f, "DIV", {
                role: !0,
                class: !0
            }), q(t).forEach(m), this.h()
        },
        h() {
            D(t, "role", "presentation"), D(t, "class", e[13])
        },
        m(f, r) {
            y(f, t, r), i || (s = at(t, "click", e[26]), i = !0)
        },
        p: J,
        d(f) {
            f && m(t), i = !1, s()
        }
    }
}

function kt(e) {
    let t, i, s = !e[0] && H(e);
    return {
        c() {
            s && s.c(), t = K()
        },
        l(f) {
            s && s.l(f), t = K()
        },
        m(f, r) {
            s && s.m(f, r), y(f, t, r), i = !0
        },
        p(f, [r]) {
            f[0] ? s && (nt(), I(s, 1, 1, () => {
                s = null
            }), ot()) : s ? (s.p(f, r), r & 1 && C(s, 1)) : (s = H(f), s.c(), C(s, 1), s.m(t.parentNode, t))
        },
        i(f) {
            i || (C(s), i = !0)
        },
        o(f) {
            I(s), i = !1
        },
        d(f) {
            f && m(t), s && s.d(f)
        }
    }
}

function yt(e, t, i) {
    const s = ["activateClickOutside", "hidden", "position", "leftOffset", "rightOffset", "topOffset", "bottomOffset", "width", "backdrop", "bgColor", "bgOpacity", "placement", "id", "divClass", "transitionParams", "transitionType"];
    let f = M(t, s),
        {
            $$slots: r = {},
            $$scope: _
        } = t,
        {
            activateClickOutside: b = !0
        } = t,
        {
            hidden: c = !0
        } = t,
        {
            position: d = "fixed"
        } = t,
        {
            leftOffset: n = "inset-y-0 start-0"
        } = t,
        {
            rightOffset: h = "inset-y-0 end-0"
        } = t,
        {
            topOffset: u = "inset-x-0 top-0"
        } = t,
        {
            bottomOffset: O = "inset-x-0 bottom-0"
        } = t,
        {
            width: g = "w-80"
        } = t,
        {
            backdrop: a = !0
        } = t,
        {
            bgColor: o = "bg-gray-900"
        } = t,
        {
            bgOpacity: P = "bg-opacity-75"
        } = t,
        {
            placement: L = "left"
        } = t,
        {
            id: N = "drawer-example"
        } = t,
        {
            divClass: j = "overflow-y-auto z-50 p-4 bg-white dark:bg-gray-800"
        } = t,
        {
            transitionParams: G = {}
        } = t,
        {
            transitionType: v = "fly"
        } = t;

    function Q(l, k) {
        switch (v) {
            case "slide":
                return bt(l, k);
            case "blur":
                return mt(l, k);
            case "fade":
                return dt(l, k);
            default:
                return ct(l, k)
        }
    }
    const R = {
            left: n,
            right: h,
            top: u,
            bottom: O
        },
        E = () => {
            i(0, c = !c)
        },
        U = () => b && !c && E();
    let X = z("fixed top-0 start-0 z-50 w-full h-full", a && o, a && P);

    function Y(l, k) {
        return b ? ht(l, k) : void 0
    }
    const Z = () => !c && E();
    return e.$$set = l => {
        i(16, t = T(T({}, t), W(l))), i(15, f = M(t, s)), "activateClickOutside" in l && i(1, b = l.activateClickOutside), "hidden" in l && i(0, c = l.hidden), "position" in l && i(2, d = l.position), "leftOffset" in l && i(17, n = l.leftOffset), "rightOffset" in l && i(18, h = l.rightOffset), "topOffset" in l && i(19, u = l.topOffset), "bottomOffset" in l && i(20, O = l.bottomOffset), "width" in l && i(3, g = l.width), "backdrop" in l && i(4, a = l.backdrop), "bgColor" in l && i(21, o = l.bgColor), "bgOpacity" in l && i(22, P = l.bgOpacity), "placement" in l && i(5, L = l.placement), "id" in l && i(6, N = l.id), "divClass" in l && i(7, j = l.divClass), "transitionParams" in l && i(8, G = l.transitionParams), "transitionType" in l && i(23, v = l.transitionType), "$$scope" in l && i(24, _ = l.$$scope)
    }, t = W(t), [c, b, d, g, a, L, N, j, G, Q, R, E, U, X, Y, f, t, n, h, u, O, o, P, v, _, r, Z]
}
class Tt extends ft {
    constructor(t) {
        super(), rt(this, t, yt, kt, w, {
            activateClickOutside: 1,
            hidden: 0,
            position: 2,
            leftOffset: 17,
            rightOffset: 18,
            topOffset: 19,
            bottomOffset: 20,
            width: 3,
            backdrop: 4,
            bgColor: 21,
            bgOpacity: 22,
            placement: 5,
            id: 6,
            divClass: 7,
            transitionParams: 8,
            transitionType: 23
        })
    }
}
export {
    Tt as D
};