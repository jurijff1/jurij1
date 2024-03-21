import {
    s as d,
    w as u,
    C as i,
    x as _,
    D as b,
    b as f,
    g,
    f as p,
    h as m,
    j as c,
    l as v,
    m as w
} from "./scheduler.c64253f0.js";
import {
    S as C,
    i as B,
    c as L,
    a as j,
    m as k,
    t as E,
    b as M,
    d as S
} from "./index.9bbe2ba6.js";
import {
    g as T,
    a as q
} from "./spread.8a54911c.js";
import {
    t as h
} from "./bundle-mjs.290c8c95.js";
import {
    T as x
} from "./ToolbarButton.ede59d15.js";

function z(n) {
    let e, a, o;
    return {
        c() {
            e = f("svg"), a = f("path"), this.h()
        },
        l(s) {
            e = g(s, "svg", {
                class: !0,
                fill: !0,
                viewBox: !0,
                xmlns: !0
            });
            var t = p(e);
            a = g(t, "path", {
                "fill-rule": !0,
                d: !0,
                "clip-rule": !0
            }), p(a).forEach(m), t.forEach(m), this.h()
        },
        h() {
            c(a, "fill-rule", "evenodd"), c(a, "d", "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"), c(a, "clip-rule", "evenodd"), c(e, "class", o = n[4]), c(e, "fill", "currentColor"), c(e, "viewBox", "0 0 20 20"), c(e, "xmlns", "http://www.w3.org/2000/svg")
        },
        m(s, t) {
            v(s, e, t), w(e, a)
        },
        p(s, t) {
            t & 16 && o !== (o = s[4]) && c(e, "class", o)
        },
        d(s) {
            s && m(e)
        }
    }
}

function D(n) {
    let e, a;
    const o = [{
        name: n[0]
    }, n[1], {
        class: h("ms-auto", n[2].class)
    }];
    let s = {
        $$slots: {
            default: [z, ({
                svgSize: t
            }) => ({
                4: t
            }), ({
                svgSize: t
            }) => t ? 16 : 0]
        },
        $$scope: {
            ctx: n
        }
    };
    for (let t = 0; t < o.length; t += 1) s = u(s, o[t]);
    return e = new x({
        props: s
    }), e.$on("click", n[3]), {
        c() {
            L(e.$$.fragment)
        },
        l(t) {
            j(e.$$.fragment, t)
        },
        m(t, l) {
            k(e, t, l), a = !0
        },
        p(t, [l]) {
            const r = l & 7 ? T(o, [l & 1 && {
                name: t[0]
            }, l & 2 && q(t[1]), l & 4 && {
                class: h("ms-auto", t[2].class)
            }]) : {};
            l & 48 && (r.$$scope = {
                dirty: l,
                ctx: t
            }), e.$set(r)
        },
        i(t) {
            a || (E(e.$$.fragment, t), a = !0)
        },
        o(t) {
            M(e.$$.fragment, t), a = !1
        },
        d(t) {
            S(e, t)
        }
    }
}

function P(n, e, a) {
    const o = ["name"];
    let s = i(e, o),
        {
            name: t = "Close"
        } = e;

    function l(r) {
        b.call(this, n, r)
    }
    return n.$$set = r => {
        a(2, e = u(u({}, e), _(r))), a(1, s = i(e, o)), "name" in r && a(0, t = r.name)
    }, e = _(e), [t, s, e, l]
}
class J extends C {
    constructor(e) {
        super(), B(this, e, P, D, d, {
            name: 0
        })
    }
}
export {
    J as C
};