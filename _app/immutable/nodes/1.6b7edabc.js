import {
    s as ce,
    a as y,
    e as f,
    b as ne,
    t as D,
    c as E,
    d as p,
    f as l,
    g as le,
    h as s,
    i as L,
    j as t,
    k as ie,
    l as ue,
    m as a,
    n as me,
    o as fe
} from "../chunks/scheduler.c64253f0.js";
import {
    S as pe,
    i as he,
    c as j,
    a as H,
    m as U,
    t as J,
    b as G,
    d as N
} from "../chunks/index.9bbe2ba6.js";
import {
    p as ge
} from "../chunks/stores.d2a90a39.js";
import {
    H as de
} from "../chunks/home-topbar.ad3f476b.js";
import {
    U as ve
} from "../chunks/users.07cac3bd.js";
import {
    M as _e
} from "../chunks/message-square.9200979a.js";
import {
    V as $e
} from "../chunks/video.9fa470af.js";

function be(n) {
    let i, z, r, h, g, d, P, u, M, Y, m, C, A = n[1][n[0].url.pathname === "/429" ? "429" : n[0].status] + "",
        O, Z, V, B = n[2][n[0].url.pathname === "/429" ? "429" : n[0].status] + "",
        S, F, c, _, b, K, Q, v, w, R, T, $, k, X, x;
    return i = new de({}), b = new ve({
        props: {
            size: 18
        }
    }), w = new _e({
        props: {
            size: 18
        }
    }), k = new $e({
        props: {
            size: 18
        }
    }), {
        c() {
            j(i.$$.fragment), z = y(), r = f("div"), h = f("div"), g = ne("svg"), d = ne("path"), P = y(), u = f("img"), Y = y(), m = f("div"), C = f("h1"), O = D(A), Z = y(), V = f("span"), S = D(B), F = y(), c = f("div"), _ = f("a"), j(b.$$.fragment), K = D(`
        Back to home page`), Q = y(), v = f("a"), j(w.$$.fragment), R = D(`
        Join our discord server`), T = y(), $ = f("a"), j(k.$$.fragment), X = D(`
        Watch tutorial video`), this.h()
        },
        l(e) {
            H(i.$$.fragment, e), z = E(e), r = p(e, "DIV", {
                class: !0
            });
            var o = l(r);
            h = p(o, "DIV", {
                class: !0
            });
            var W = l(h);
            g = le(W, "svg", {
                class: !0,
                viewBox: !0,
                xmlns: !0
            });
            var se = l(g);
            d = le(se, "path", {
                class: !0,
                d: !0,
                transform: !0
            }), l(d).forEach(s), se.forEach(s), P = E(W), u = p(W, "IMG", {
                src: !0,
                alt: !0,
                width: !0,
                class: !0
            }), W.forEach(s), Y = E(o), m = p(o, "DIV", {
                class: !0
            });
            var I = l(m);
            C = p(I, "H1", {
                class: !0
            });
            var re = l(C);
            O = L(re, A), re.forEach(s), Z = E(I), V = p(I, "SPAN", {
                class: !0
            });
            var oe = l(V);
            S = L(oe, B), oe.forEach(s), F = E(I), c = p(I, "DIV", {
                class: !0
            });
            var q = l(c);
            _ = p(q, "A", {
                href: !0,
                class: !0
            });
            var ee = l(_);
            H(b.$$.fragment, ee), K = L(ee, `
        Back to home page`), ee.forEach(s), Q = E(q), v = p(q, "A", {
                href: !0,
                target: !0,
                class: !0
            });
            var te = l(v);
            H(w.$$.fragment, te), R = L(te, `
        Join our discord server`), te.forEach(s), T = E(q), $ = p(q, "A", {
                href: !0,
                class: !0
            });
            var ae = l($);
            H(k.$$.fragment, ae), X = L(ae, `
        Watch tutorial video`), ae.forEach(s), q.forEach(s), I.forEach(s), o.forEach(s), this.h()
        },
        h() {
            t(d, "class", "fill-teal-300/25"), t(d, "d", "M41.1,-14.5C46.9,4.3,40.6,25.8,22,42.2C3.4,58.5,-27.6,69.5,-46.5,57.3C-65.5,45.1,-72.4,9.7,-62.7,-14.7C-52.9,-39,-26.5,-52.3,-4.4,-50.9C17.7,-49.4,35.4,-33.3,41.1,-14.5Z"), t(d, "transform", "translate(100 100), scale(1.2)"), t(g, "class", "absolute -top-10 left-5"), t(g, "viewBox", "0 0 200 200"), t(g, "xmlns", "http://www.w3.org/2000/svg"), ie(u.src, M = "/" + (n[0].url.pathname === "/429" ? "instant" : n[0].status) + ".svg") || t(u, "src", M), t(u, "alt", "illustration"), t(u, "width", "100%"), t(u, "class", "max-w-sm relative"), t(h, "class", "relative mt-12"), t(C, "class", "text-3xl font-semibold"), t(V, "class", "text-lg text-zinc-400"), t(_, "href", "/"), t(_, "class", "text-teal-300 flex items-center gap-3 border-b border-zinc-700 pb-3 cursor-pointer"), t(v, "href", "https://discord.gg/futearn"), t(v, "target", "_blank"), t(v, "class", "flex items-center gap-3 border-b border-zinc-700 pb-3"), t($, "href", "https://youtube.com"), t($, "class", "flex items-center gap-3"), t(c, "class", "flex flex-col gap-3"), t(m, "class", "flex flex-col gap-4"), t(r, "class", "flex flex-col gap-12 max-w-7xl mx-auto px-6 lg:px-8 items-center justify-center pt-36")
        },
        m(e, o) {
            U(i, e, o), ue(e, z, o), ue(e, r, o), a(r, h), a(h, g), a(g, d), a(h, P), a(h, u), a(r, Y), a(r, m), a(m, C), a(C, O), a(m, Z), a(m, V), a(V, S), a(m, F), a(m, c), a(c, _), U(b, _, null), a(_, K), a(c, Q), a(c, v), U(w, v, null), a(v, R), a(c, T), a(c, $), U(k, $, null), a($, X), x = !0
        },
        p(e, [o]) {
            (!x || o & 1 && !ie(u.src, M = "/" + (e[0].url.pathname === "/429" ? "instant" : e[0].status) + ".svg")) && t(u, "src", M), (!x || o & 1) && A !== (A = e[1][e[0].url.pathname === "/429" ? "429" : e[0].status] + "") && me(O, A), (!x || o & 1) && B !== (B = e[2][e[0].url.pathname === "/429" ? "429" : e[0].status] + "") && me(S, B)
        },
        i(e) {
            x || (J(i.$$.fragment, e), J(b.$$.fragment, e), J(w.$$.fragment, e), J(k.$$.fragment, e), x = !0)
        },
        o(e) {
            G(i.$$.fragment, e), G(b.$$.fragment, e), G(w.$$.fragment, e), G(k.$$.fragment, e), x = !1
        },
        d(e) {
            e && (s(z), s(r)), N(i, e), N(b), N(w), N(k)
        }
    }
}

function we(n, i, z) {
    let r;
    return fe(n, ge, d => z(0, r = d)), [r, {
        404: "Oops! Looks like you took a wrong turn.",
        500: "Oops! Looks like we are in technical difficulties.",
        400: "Oops! Looks like we are in technical difficulties.",
        429: "Oops! Looks like you are being too fast."
    }, {
        404: "Use one of the following options to back to your journey with us.",
        500: "We are trying to fix our issues and we plan to back to normal shortly.",
        400: "We are trying to fix our issues and we plan to back to normal shortly.",
        429: "You are interacting with our application to fast, take a breath and try again later."
    }]
}
class Ie extends pe {
    constructor(i) {
        super(), he(this, i, we, be, ce, {})
    }
}
export {
    Ie as component
};