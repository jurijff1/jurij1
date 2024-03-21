var Q = Object.defineProperty;
var T = (t, e, n) => e in t ? Q(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n;
var P = (t, e, n) => (T(t, typeof e != "symbol" ? e + "" : e, n), n);
import {
    I as v,
    a7 as W,
    a8 as X,
    h as F,
    O,
    A as M,
    G as A,
    a9 as Y,
    a2 as G,
    aa as B,
    f as Z,
    ab as tt,
    ac as et,
    ad as nt,
    ae as it,
    af as D,
    ag as st,
    ah as at,
    ai as rt,
    aj as ot,
    ak as ft
} from "./scheduler.c64253f0.js";
const L = typeof window < "u";
let U = L ? () => window.performance.now() : () => Date.now(),
    N = L ? t => requestAnimationFrame(t) : v;
const x = new Set;

function V(t) {
    x.forEach(e => {
        e.c(t) || (x.delete(e), e.f())
    }), x.size !== 0 && N(V)
}

function q(t) {
    let e;
    return x.size === 0 && N(V), {
        promise: new Promise(n => {
            x.add(e = {
                c: t,
                f: n
            })
        }),
        abort() {
            x.delete(e)
        }
    }
}
const C = new Map;
let I = 0;

function ut(t) {
    let e = 5381,
        n = t.length;
    for (; n--;) e = (e << 5) - e ^ t.charCodeAt(n);
    return e >>> 0
}

function lt(t, e) {
    const n = {
        stylesheet: X(e),
        rules: {}
    };
    return C.set(t, n), n
}

function R(t, e, n, i, l, o, u, s = 0) {
    const c = 16.666 / i;
    let a = `{
`;
    for (let _ = 0; _ <= 1; _ += c) {
        const g = e + (n - e) * o(_);
        a += _ * 100 + `%{${u(g,1-g)}}
`
    }
    const $ = a + `100% {${u(n,1-n)}}
}`,
        f = `__svelte_${ut($)}_${s}`,
        m = W(t),
        {
            stylesheet: h,
            rules: r
        } = C.get(m) || lt(m, t);
    r[f] || (r[f] = !0, h.insertRule(`@keyframes ${f} ${$}`, h.cssRules.length));
    const d = t.style.animation || "";
    return t.style.animation = `${d?`${d}, `:""}${f} ${i}ms linear ${l}ms 1 both`, I += 1, f
}

function z(t, e) {
    const n = (t.style.animation || "").split(", "),
        i = n.filter(e ? o => o.indexOf(e) < 0 : o => o.indexOf("__svelte") === -1),
        l = n.length - i.length;
    l && (t.style.animation = i.join(", "), I -= l, I || ct())
}

function ct() {
    N(() => {
        I || (C.forEach(t => {
            const {
                ownerNode: e
            } = t.stylesheet;
            e && F(e)
        }), C.clear())
    })
}
let E;

function H() {
    return E || (E = Promise.resolve(), E.then(() => {
        E = null
    })), E
}

function S(t, e, n) {
    t.dispatchEvent(Y(`${e?"intro":"outro"}${n}`))
}
const k = new Set;
let p;

function yt() {
    p = {
        r: 0,
        c: [],
        p
    }
}

function wt() {
    p.r || O(p.c), p = p.p
}

function dt(t, e) {
    t && t.i && (k.delete(t), t.i(e))
}

function xt(t, e, n, i) {
    if (t && t.o) {
        if (k.has(t)) return;
        k.add(t), p.c.push(() => {
            k.delete(t), i && (n && t.d(1), i())
        }), t.o(e)
    } else i && i()
}
const J = {
    duration: 0
};

function vt(t, e, n) {
    const i = {
        direction: "in"
    };
    let l = e(t, n, i),
        o = !1,
        u, s, c = 0;

    function a() {
        u && z(t, u)
    }

    function $() {
        const {
            delay: m = 0,
            duration: h = 300,
            easing: r = G,
            tick: d = v,
            css: _
        } = l || J;
        _ && (u = R(t, 0, 1, h, m, r, _, c++)), d(0, 1);
        const g = U() + m,
            b = g + h;
        s && s.abort(), o = !0, A(() => S(t, !0, "start")), s = q(y => {
            if (o) {
                if (y >= b) return d(1, 0), S(t, !0, "end"), a(), o = !1;
                if (y >= g) {
                    const w = r((y - g) / h);
                    d(w, 1 - w)
                }
            }
            return o
        })
    }
    let f = !1;
    return {
        start() {
            f || (f = !0, z(t), M(l) ? (l = l(i), H().then($)) : $())
        },
        invalidate() {
            f = !1
        },
        end() {
            o && (a(), o = !1)
        }
    }
}

function bt(t, e, n, i) {
    let o = e(t, n, {
            direction: "both"
        }),
        u = i ? 0 : 1,
        s = null,
        c = null,
        a = null,
        $;

    function f() {
        a && z(t, a)
    }

    function m(r, d) {
        const _ = r.b - u;
        return d *= Math.abs(_), {
            a: u,
            b: r.b,
            d: _,
            duration: d,
            start: r.start,
            end: r.start + d,
            group: r.group
        }
    }

    function h(r) {
        const {
            delay: d = 0,
            duration: _ = 300,
            easing: g = G,
            tick: b = v,
            css: y
        } = o || J, w = {
            start: U() + d,
            b: r
        };
        r || (w.group = p, p.r += 1), "inert" in t && (r ? $ !== void 0 && (t.inert = $) : ($ = t.inert, t.inert = !0)), s || c ? c = w : (y && (f(), a = R(t, u, r, _, d, g, y)), r && b(0, 1), s = m(w, _), A(() => S(t, r, "start")), q(j => {
            if (c && j > c.start && (s = m(c, _), c = null, S(t, s.b, "start"), y && (f(), a = R(t, u, s.b, s.duration, 0, g, o.css))), s) {
                if (j >= s.end) b(u = s.b, 1 - u), S(t, s.b, "end"), c || (s.b ? f() : --s.group.r || O(s.group.c)), s = null;
                else if (j >= s.start) {
                    const K = j - s.start;
                    u = s.a + s.d * g(K / s.duration), b(u, 1 - u)
                }
            }
            return !!(s || c)
        }))
    }
    return {
        run(r) {
            M(o) ? H().then(() => {
                o = o({
                    direction: r ? "in" : "out"
                }), h(r)
            }) : h(r)
        },
        end() {
            f(), s = c = null
        }
    }
}

function Et(t, e, n) {
    const i = t.$$.props[e];
    i !== void 0 && (t.$$.bound[i] = n, n(t.$$.ctx[i]))
}

function St(t) {
    t && t.c()
}

function Ot(t, e) {
    t && t.l(e)
}

function _t(t, e, n) {
    const {
        fragment: i,
        after_update: l
    } = t.$$;
    i && i.m(e, n), A(() => {
        const o = t.$$.on_mount.map(st).filter(M);
        t.$$.on_destroy ? t.$$.on_destroy.push(...o) : O(o), t.$$.on_mount = []
    }), l.forEach(A)
}

function $t(t, e) {
    const n = t.$$;
    n.fragment !== null && (nt(n.after_update), O(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = [])
}

function ht(t, e) {
    t.$$.dirty[0] === -1 && (at.push(t), rt(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31
}

function jt(t, e, n, i, l, o, u = null, s = [-1]) {
    const c = it;
    D(t);
    const a = t.$$ = {
        fragment: null,
        ctx: [],
        props: o,
        update: v,
        not_equal: l,
        bound: B(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(e.context || (c ? c.$$.context : [])),
        callbacks: B(),
        dirty: s,
        skip_bound: !1,
        root: e.target || c.$$.root
    };
    u && u(a.root);
    let $ = !1;
    if (a.ctx = n ? n(t, e.props || {}, (f, m, ...h) => {
            const r = h.length ? h[0] : m;
            return a.ctx && l(a.ctx[f], a.ctx[f] = r) && (!a.skip_bound && a.bound[f] && a.bound[f](r), $ && ht(t, f)), m
        }) : [], a.update(), $ = !0, O(a.before_update), a.fragment = i ? i(a.ctx) : !1, e.target) {
        if (e.hydrate) {
            ot();
            const f = Z(e.target);
            a.fragment && a.fragment.l(f), f.forEach(F)
        } else a.fragment && a.fragment.c();
        e.intro && dt(t.$$.fragment), _t(t, e.target, e.anchor), ft(), tt()
    }
    D(c)
}
class kt {
    constructor() {
        P(this, "$$");
        P(this, "$$set")
    }
    $destroy() {
        $t(this, 1), this.$destroy = v
    }
    $on(e, n) {
        if (!M(n)) return v;
        const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
        return i.push(n), () => {
            const l = i.indexOf(n);
            l !== -1 && i.splice(l, 1)
        }
    }
    $set(e) {
        this.$$set && !et(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1)
    }
}
const mt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = {
    v: new Set
})).v.add(mt);
export {
    kt as S, Ot as a, xt as b, St as c, $t as d, wt as e, bt as f, yt as g, Et as h, jt as i, vt as j, q as l, _t as m, U as n, dt as t
};