import {
    s as x,
    w as L,
    x as k,
    p as N,
    u as I,
    q as j,
    r as q,
    E as M,
    l as b,
    h as f,
    b as C,
    g as h,
    f as d,
    j as r,
    J as g,
    m as Z,
    I as p
} from "./scheduler.c64253f0.js";
import {
    S as y,
    i as P,
    c as z,
    a as E,
    m as $,
    t as _,
    b as m,
    d as B,
    g as S,
    e as J
} from "./index.9bbe2ba6.js";
import {
    P as v
} from "./enums.c4d7a959.js";
import {
    g as X,
    a as A
} from "./spread.8a54911c.js";
import {
    I as D
} from "./Icon.5bad6787.js";

function F(i) {
    let e;
    const l = i[2].default,
        t = N(l, i, i[3], null);
    return {
        c() {
            t && t.c()
        },
        l(s) {
            t && t.l(s)
        },
        m(s, n) {
            t && t.m(s, n), e = !0
        },
        p(s, n) {
            t && t.p && (!e || n & 8) && I(t, l, s, s[3], e ? q(l, s[3], n, null) : j(s[3]), null)
        },
        i(s) {
            e || (_(t, s), e = !0)
        },
        o(s) {
            m(t, s), e = !1
        },
        d(s) {
            t && t.d(s)
        }
    }
}

function G(i) {
    let e, l;
    const t = [{
        name: "monitor"
    }, i[1], {
        iconNode: i[0]
    }];
    let s = {
        $$slots: {
            default: [F]
        },
        $$scope: {
            ctx: i
        }
    };
    for (let n = 0; n < t.length; n += 1) s = L(s, t[n]);
    return e = new D({
        props: s
    }), {
        c() {
            z(e.$$.fragment)
        },
        l(n) {
            E(e.$$.fragment, n)
        },
        m(n, o) {
            $(e, n, o), l = !0
        },
        p(n, [o]) {
            const u = o & 3 ? X(t, [t[0], o & 2 && A(n[1]), o & 1 && {
                iconNode: n[0]
            }]) : {};
            o & 8 && (u.$$scope = {
                dirty: o,
                ctx: n
            }), e.$set(u)
        },
        i(n) {
            l || (_(e.$$.fragment, n), l = !0)
        },
        o(n) {
            m(e.$$.fragment, n), l = !1
        },
        d(n) {
            B(e, n)
        }
    }
}

function H(i, e, l) {
    let {
        $$slots: t = {},
        $$scope: s
    } = e;
    const n = [
        ["rect", {
            width: "20",
            height: "14",
            x: "2",
            y: "3",
            rx: "2"
        }],
        ["line", {
            x1: "8",
            x2: "16",
            y1: "21",
            y2: "21"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "17",
            y2: "21"
        }]
    ];
    return i.$$set = o => {
        l(1, e = L(L({}, e), k(o))), "$$scope" in o && l(3, s = o.$$scope)
    }, e = k(e), [n, e, t, s]
}
class K extends y {
    constructor(e) {
        super(), P(this, e, H, G, x, {})
    }
}
const O = K;

function Q(i) {
    let e, l;
    return e = new O({
        props: {
            size: i[1],
            class: "text-zinc-500"
        }
    }), {
        c() {
            z(e.$$.fragment)
        },
        l(t) {
            E(e.$$.fragment, t)
        },
        m(t, s) {
            $(e, t, s), l = !0
        },
        p(t, s) {
            const n = {};
            s & 2 && (n.size = t[1]), e.$set(n)
        },
        i(t) {
            l || (_(e.$$.fragment, t), l = !0)
        },
        o(t) {
            m(e.$$.fragment, t), l = !1
        },
        d(t) {
            B(e, t)
        }
    }
}

function R(i) {
    let e, l, t;
    return {
        c() {
            e = C("svg"), l = C("path"), this.h()
        },
        l(s) {
            e = h(s, "svg", {
                class: !0,
                width: !0,
                xmlns: !0,
                viewBox: !0
            });
            var n = d(e);
            l = h(n, "path", {
                d: !0
            }), d(l).forEach(f), n.forEach(f), this.h()
        },
        h() {
            r(l, "d", "M 9 3.1875 L 9 19.8125 L 12.59375 20.90625 L 12.59375 7 C 12.59375 6.601563 12.613281 6.386719 12.8125 6.1875 C 12.914063 5.988281 13.113281 5.992188 13.3125 6.09375 C 13.8125 6.292969 14.09375 6.699219 14.09375 7.5 L 14.09375 13 C 15.292969 13.601563 16.292969 13.601563 17.09375 13 C 17.894531 12.398438 18.3125 11.5 18.3125 10 C 18.3125 8.398438 18.011719 7.394531 17.3125 6.59375 C 16.710938 5.792969 15.601563 5.09375 14 4.59375 C 12 3.992188 10.300781 3.488281 9 3.1875 Z M 8 13.59375 L 3.40625 15.1875 L 2.6875 15.5 C 1.585938 16 1 16.5 1 17 C 1.101563 17.601563 1.3125 18.40625 2.8125 18.90625 C 4.210938 19.40625 5.292969 19.613281 8.09375 18.8125 L 8.09375 17 C 5.394531 17.898438 4.992188 17.792969 4.59375 17.59375 C 4.195313 17.394531 4.210938 17.195313 4.3125 17.09375 C 4.613281 16.894531 5.6875 16.5 5.6875 16.5 L 8 15.6875 Z M 18.1875 14.375 C 17.863281 14.363281 17.511719 14.382813 17.1875 14.40625 C 16.085938 14.40625 15.105469 14.605469 13.90625 14.90625 L 13.90625 17 L 16.09375 16.1875 L 17.3125 15.8125 C 17.3125 15.8125 17.792969 15.695313 18.09375 15.59375 C 18.59375 15.492188 19.1875 15.6875 19.1875 15.6875 C 19.488281 15.6875 19.6875 15.800781 19.6875 16 C 19.789063 16.199219 19.59375 16.300781 19.09375 16.5 L 18 16.90625 L 14 18.40625 L 14 20.5 L 15.8125 19.90625 L 20.8125 18.09375 L 21.40625 17.8125 C 22.605469 17.414063 23.101563 16.914063 23 16.3125 C 23 15.710938 22.292969 15.304688 21.09375 14.90625 C 20.117188 14.605469 19.164063 14.40625 18.1875 14.375 Z"), r(e, "class", "fill-zinc-500"), r(e, "width", t = i[1] + "px"), r(e, "xmlns", "http://www.w3.org/2000/svg"), r(e, "viewBox", "0 0 24 24"), g(e, "fill-teal-300", i[2])
        },
        m(s, n) {
            b(s, e, n), Z(e, l)
        },
        p(s, n) {
            n & 2 && t !== (t = s[1] + "px") && r(e, "width", t), n & 4 && g(e, "fill-teal-300", s[2])
        },
        i: p,
        o: p,
        d(s) {
            s && f(e)
        }
    }
}

function T(i) {
    let e, l, t;
    return {
        c() {
            e = C("svg"), l = C("path"), this.h()
        },
        l(s) {
            e = h(s, "svg", {
                class: !0,
                width: !0,
                xmlns: !0,
                viewBox: !0
            });
            var n = d(e);
            l = h(n, "path", {
                d: !0
            }), d(l).forEach(f), n.forEach(f), this.h()
        },
        h() {
            r(l, "d", "M 12 2 C 10.375 2 8.375 2.503906 6.875 3.40625 C 6.816406 3.441406 6.707031 3.535156 6.59375 3.625 C 8.234375 2.6875 11.917969 5.621094 12 5.6875 C 12.082031 5.621094 15.765625 2.691406 17.40625 3.625 C 17.292969 3.535156 17.183594 3.441406 17.125 3.40625 C 15.625 2.503906 13.878906 2 12 2 Z M 5.6875 4.59375 C 5.351563 4.648438 4.980469 4.871094 4.65625 5.21875 C 3.003906 7.003906 2 9.378906 2 12 C 2 14.589844 2.976563 16.941406 4.59375 18.71875 C 4.0625 16.152344 4.554688 14.351563 6 12 C 7.449219 9.648438 10 7 10 7 C 7.898438 5.015625 6.410156 4.664063 6.03125 4.59375 C 5.929688 4.574219 5.800781 4.574219 5.6875 4.59375 Z M 4.59375 18.71875 C 6.421875 20.730469 9.078125 22 12 22 C 14.929688 22 17.578125 20.726563 19.40625 18.71875 C 19.402344 18.691406 19.191406 17.394531 17.84375 15.53125 C 16.792969 14.078125 13.667969 10.582031 12 9 C 10.332031 10.582031 7.207031 14.046875 6.15625 15.5 C 4.808594 17.359375 4.597656 18.6875 4.59375 18.71875 Z M 19.40625 18.71875 C 21.019531 16.941406 22 14.589844 22 12 C 22 9.378906 20.996094 7.003906 19.34375 5.21875 C 18.914063 4.753906 18.367188 4.519531 17.96875 4.59375 C 17.589844 4.664063 16.101563 5.015625 14 7 C 14 7 16.550781 9.648438 18 12 C 19.445313 14.351563 19.9375 16.152344 19.40625 18.71875 Z"), r(e, "class", "fill-zinc-500"), r(e, "width", t = i[1] + "px"), r(e, "xmlns", "http://www.w3.org/2000/svg"), r(e, "viewBox", "0 0 24 24"), g(e, "fill-teal-300", i[2])
        },
        m(s, n) {
            b(s, e, n), Z(e, l)
        },
        p(s, n) {
            n & 2 && t !== (t = s[1] + "px") && r(e, "width", t), n & 4 && g(e, "fill-teal-300", s[2])
        },
        i: p,
        o: p,
        d(s) {
            s && f(e)
        }
    }
}

function U(i) {
    let e, l, t, s;
    const n = [T, R, Q],
        o = [];

    function u(a, c) {
        return a[0] === v.Xbox ? 0 : a[0] === v.Playstation ? 1 : a[0] === v.Pc ? 2 : -1
    }
    return ~(e = u(i)) && (l = o[e] = n[e](i)), {
        c() {
            l && l.c(), t = M()
        },
        l(a) {
            l && l.l(a), t = M()
        },
        m(a, c) {
            ~e && o[e].m(a, c), b(a, t, c), s = !0
        },
        p(a, [c]) {
            let w = e;
            e = u(a), e === w ? ~e && o[e].p(a, c) : (l && (S(), m(o[w], 1, 1, () => {
                o[w] = null
            }), J()), ~e ? (l = o[e], l ? l.p(a, c) : (l = o[e] = n[e](a), l.c()), _(l, 1), l.m(t.parentNode, t)) : l = null)
        },
        i(a) {
            s || (_(l), s = !0)
        },
        o(a) {
            m(l), s = !1
        },
        d(a) {
            a && f(t), ~e && o[e].d(a)
        }
    }
}

function V(i, e, l) {
    let {
        platform: t
    } = e, {
        width: s = 22
    } = e, {
        teal: n = !1
    } = e;
    return i.$$set = o => {
        "platform" in o && l(0, t = o.platform), "width" in o && l(1, s = o.width), "teal" in o && l(2, n = o.teal)
    }, [t, s, n]
}
class l1 extends y {
    constructor(e) {
        super(), P(this, e, V, U, x, {
            platform: 0,
            width: 1,
            teal: 2
        })
    }
}
export {
    O as M, l1 as P
};