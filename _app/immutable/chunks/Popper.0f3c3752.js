import {
    s as ne,
    a as Vt,
    E as lt,
    c as Wt,
    l as Q,
    h as z,
    C as _t,
    F as oe,
    U as ie,
    w as yt,
    x as Lt,
    e as Ht,
    d as It,
    f as zt,
    I as re,
    A as rt,
    B as se,
    p as le,
    u as ce,
    q as fe,
    r as ae,
    j as Tt,
    S as ue
} from "./scheduler.c64253f0.js";
import {
    S as de,
    i as me,
    t as tt,
    g as ge,
    b as ct,
    e as he,
    c as pe,
    a as ye,
    m as we,
    d as be
} from "./index.9bbe2ba6.js";
import {
    g as xe,
    a as ve
} from "./spread.8a54911c.js";
import {
    a as Ee
} from "./bundle-mjs.290c8c95.js";
import {
    F as Ae
} from "./Frame.cb9309c9.js";
const Z = Math.min,
    U = Math.max,
    ft = Math.round,
    st = Math.floor,
    j = t => ({
        x: t,
        y: t
    }),
    Ce = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    },
    Oe = {
        start: "end",
        end: "start"
    };

function wt(t, e, n) {
    return U(t, Z(e, n))
}

function nt(t, e) {
    return typeof t == "function" ? t(e) : t
}

function J(t) {
    return t.split("-")[0]
}

function ot(t) {
    return t.split("-")[1]
}

function jt(t) {
    return t === "x" ? "y" : "x"
}

function xt(t) {
    return t === "y" ? "height" : "width"
}

function dt(t) {
    return ["top", "bottom"].includes(J(t)) ? "y" : "x"
}

function vt(t) {
    return jt(dt(t))
}

function Re(t, e, n) {
    n === void 0 && (n = !1);
    const i = ot(t),
        s = vt(t),
        o = xt(s);
    let r = s === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
    return e.reference[o] > e.floating[o] && (r = at(r)), [r, at(r)]
}

function _e(t) {
    const e = at(t);
    return [bt(t), e, bt(e)]
}

function bt(t) {
    return t.replace(/start|end/g, e => Oe[e])
}

function Le(t, e, n) {
    const i = ["left", "right"],
        s = ["right", "left"],
        o = ["top", "bottom"],
        r = ["bottom", "top"];
    switch (t) {
        case "top":
        case "bottom":
            return n ? e ? s : i : e ? i : s;
        case "left":
        case "right":
            return e ? o : r;
        default:
            return []
    }
}

function Te(t, e, n, i) {
    const s = ot(t);
    let o = Le(J(t), n === "start", i);
    return s && (o = o.map(r => r + "-" + s), e && (o = o.concat(o.map(bt)))), o
}

function at(t) {
    return t.replace(/left|right|bottom|top/g, e => Ce[e])
}

function ke(t) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...t
    }
}

function qt(t) {
    return typeof t != "number" ? ke(t) : {
        top: t,
        right: t,
        bottom: t,
        left: t
    }
}

function ut(t) {
    return { ...t,
        top: t.y,
        left: t.x,
        right: t.x + t.width,
        bottom: t.y + t.height
    }
}

function kt(t, e, n) {
    let {
        reference: i,
        floating: s
    } = t;
    const o = dt(e),
        r = vt(e),
        l = xt(r),
        c = J(e),
        f = o === "y",
        g = i.x + i.width / 2 - s.width / 2,
        m = i.y + i.height / 2 - s.height / 2,
        p = i[l] / 2 - s[l] / 2;
    let a;
    switch (c) {
        case "top":
            a = {
                x: g,
                y: i.y - s.height
            };
            break;
        case "bottom":
            a = {
                x: g,
                y: i.y + i.height
            };
            break;
        case "right":
            a = {
                x: i.x + i.width,
                y: m
            };
            break;
        case "left":
            a = {
                x: i.x - s.width,
                y: m
            };
            break;
        default:
            a = {
                x: i.x,
                y: i.y
            }
    }
    switch (ot(e)) {
        case "start":
            a[r] -= p * (n && f ? -1 : 1);
            break;
        case "end":
            a[r] += p * (n && f ? -1 : 1);
            break
    }
    return a
}
const Se = async (t, e, n) => {
    const {
        placement: i = "bottom",
        strategy: s = "absolute",
        middleware: o = [],
        platform: r
    } = n, l = o.filter(Boolean), c = await (r.isRTL == null ? void 0 : r.isRTL(e));
    let f = await r.getElementRects({
            reference: t,
            floating: e,
            strategy: s
        }),
        {
            x: g,
            y: m
        } = kt(f, i, c),
        p = i,
        a = {},
        d = 0;
    for (let y = 0; y < l.length; y++) {
        const {
            name: w,
            fn: h
        } = l[y], {
            x,
            y: E,
            data: A,
            reset: b
        } = await h({
            x: g,
            y: m,
            initialPlacement: i,
            placement: p,
            strategy: s,
            middlewareData: a,
            rects: f,
            platform: r,
            elements: {
                reference: t,
                floating: e
            }
        });
        if (g = x ? ? g, m = E ? ? m, a = { ...a,
                [w]: { ...a[w],
                    ...A
                }
            }, b && d <= 50) {
            d++, typeof b == "object" && (b.placement && (p = b.placement), b.rects && (f = b.rects === !0 ? await r.getElementRects({
                reference: t,
                floating: e,
                strategy: s
            }) : b.rects), {
                x: g,
                y: m
            } = kt(f, p, c)), y = -1;
            continue
        }
    }
    return {
        x: g,
        y: m,
        placement: p,
        strategy: s,
        middlewareData: a
    }
};
async function Xt(t, e) {
    var n;
    e === void 0 && (e = {});
    const {
        x: i,
        y: s,
        platform: o,
        rects: r,
        elements: l,
        strategy: c
    } = t, {
        boundary: f = "clippingAncestors",
        rootBoundary: g = "viewport",
        elementContext: m = "floating",
        altBoundary: p = !1,
        padding: a = 0
    } = nt(e, t), d = qt(a), w = l[p ? m === "floating" ? "reference" : "floating" : m], h = ut(await o.getClippingRect({
        element: (n = await (o.isElement == null ? void 0 : o.isElement(w))) == null || n ? w : w.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating)),
        boundary: f,
        rootBoundary: g,
        strategy: c
    })), x = m === "floating" ? { ...r.floating,
        x: i,
        y: s
    } : r.reference, E = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating)), A = await (o.isElement == null ? void 0 : o.isElement(E)) ? await (o.getScale == null ? void 0 : o.getScale(E)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, b = ut(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
        rect: x,
        offsetParent: E,
        strategy: c
    }) : x);
    return {
        top: (h.top - b.top + d.top) / A.y,
        bottom: (b.bottom - h.bottom + d.bottom) / A.y,
        left: (h.left - b.left + d.left) / A.x,
        right: (b.right - h.right + d.right) / A.x
    }
}
const Pe = t => ({
        name: "arrow",
        options: t,
        async fn(e) {
            const {
                x: n,
                y: i,
                placement: s,
                rects: o,
                platform: r,
                elements: l,
                middlewareData: c
            } = e, {
                element: f,
                padding: g = 0
            } = nt(t, e) || {};
            if (f == null) return {};
            const m = qt(g),
                p = {
                    x: n,
                    y: i
                },
                a = vt(s),
                d = xt(a),
                y = await r.getDimensions(f),
                w = a === "y",
                h = w ? "top" : "left",
                x = w ? "bottom" : "right",
                E = w ? "clientHeight" : "clientWidth",
                A = o.reference[d] + o.reference[a] - p[a] - o.floating[d],
                b = p[a] - o.reference[a],
                C = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(f));
            let v = C ? C[E] : 0;
            (!v || !await (r.isElement == null ? void 0 : r.isElement(C))) && (v = l.floating[E] || o.floating[d]);
            const S = A / 2 - b / 2,
                k = v / 2 - y[d] / 2 - 1,
                M = Z(m[h], k),
                H = Z(m[x], k),
                R = M,
                X = v - y[d] - H,
                T = v / 2 - y[d] / 2 + S,
                L = wt(R, T, X),
                O = !c.arrow && ot(s) != null && T != L && o.reference[d] / 2 - (T < R ? M : H) - y[d] / 2 < 0,
                _ = O ? T < R ? T - R : T - X : 0;
            return {
                [a]: p[a] + _,
                data: {
                    [a]: L,
                    centerOffset: T - L - _,
                    ...O && {
                        alignmentOffset: _
                    }
                },
                reset: O
            }
        }
    }),
    De = function(t) {
        return t === void 0 && (t = {}), {
            name: "flip",
            options: t,
            async fn(e) {
                var n, i;
                const {
                    placement: s,
                    middlewareData: o,
                    rects: r,
                    initialPlacement: l,
                    platform: c,
                    elements: f
                } = e, {
                    mainAxis: g = !0,
                    crossAxis: m = !0,
                    fallbackPlacements: p,
                    fallbackStrategy: a = "bestFit",
                    fallbackAxisSideDirection: d = "none",
                    flipAlignment: y = !0,
                    ...w
                } = nt(t, e);
                if ((n = o.arrow) != null && n.alignmentOffset) return {};
                const h = J(s),
                    x = J(l) === l,
                    E = await (c.isRTL == null ? void 0 : c.isRTL(f.floating)),
                    A = p || (x || !y ? [at(l)] : _e(l));
                !p && d !== "none" && A.push(...Te(l, y, d, E));
                const b = [l, ...A],
                    C = await Xt(e, w),
                    v = [];
                let S = ((i = o.flip) == null ? void 0 : i.overflows) || [];
                if (g && v.push(C[h]), m) {
                    const R = Re(s, r, E);
                    v.push(C[R[0]], C[R[1]])
                }
                if (S = [...S, {
                        placement: s,
                        overflows: v
                    }], !v.every(R => R <= 0)) {
                    var k, M;
                    const R = (((k = o.flip) == null ? void 0 : k.index) || 0) + 1,
                        X = b[R];
                    if (X) return {
                        data: {
                            index: R,
                            overflows: S
                        },
                        reset: {
                            placement: X
                        }
                    };
                    let T = (M = S.filter(L => L.overflows[0] <= 0).sort((L, O) => L.overflows[1] - O.overflows[1])[0]) == null ? void 0 : M.placement;
                    if (!T) switch (a) {
                        case "bestFit":
                            {
                                var H;
                                const L = (H = S.map(O => [O.placement, O.overflows.filter(_ => _ > 0).reduce((_, ht) => _ + ht, 0)]).sort((O, _) => O[1] - _[1])[0]) == null ? void 0 : H[0];L && (T = L);
                                break
                            }
                        case "initialPlacement":
                            T = l;
                            break
                    }
                    if (s !== T) return {
                        reset: {
                            placement: T
                        }
                    }
                }
                return {}
            }
        }
    };
async function Fe(t, e) {
    const {
        placement: n,
        platform: i,
        elements: s
    } = t, o = await (i.isRTL == null ? void 0 : i.isRTL(s.floating)), r = J(n), l = ot(n), c = dt(n) === "y", f = ["left", "top"].includes(r) ? -1 : 1, g = o && c ? -1 : 1, m = nt(e, t);
    let {
        mainAxis: p,
        crossAxis: a,
        alignmentAxis: d
    } = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: 0,
        crossAxis: 0,
        alignmentAxis: null,
        ...m
    };
    return l && typeof d == "number" && (a = l === "end" ? d * -1 : d), c ? {
        x: a * g,
        y: p * f
    } : {
        x: p * f,
        y: a * g
    }
}
const Be = function(t) {
        return t === void 0 && (t = 0), {
            name: "offset",
            options: t,
            async fn(e) {
                var n, i;
                const {
                    x: s,
                    y: o,
                    placement: r,
                    middlewareData: l
                } = e, c = await Fe(e, t);
                return r === ((n = l.offset) == null ? void 0 : n.placement) && (i = l.arrow) != null && i.alignmentOffset ? {} : {
                    x: s + c.x,
                    y: o + c.y,
                    data: { ...c,
                        placement: r
                    }
                }
            }
        }
    },
    Ne = function(t) {
        return t === void 0 && (t = {}), {
            name: "shift",
            options: t,
            async fn(e) {
                const {
                    x: n,
                    y: i,
                    placement: s
                } = e, {
                    mainAxis: o = !0,
                    crossAxis: r = !1,
                    limiter: l = {
                        fn: w => {
                            let {
                                x: h,
                                y: x
                            } = w;
                            return {
                                x: h,
                                y: x
                            }
                        }
                    },
                    ...c
                } = nt(t, e), f = {
                    x: n,
                    y: i
                }, g = await Xt(e, c), m = dt(J(s)), p = jt(m);
                let a = f[p],
                    d = f[m];
                if (o) {
                    const w = p === "y" ? "top" : "left",
                        h = p === "y" ? "bottom" : "right",
                        x = a + g[w],
                        E = a - g[h];
                    a = wt(x, a, E)
                }
                if (r) {
                    const w = m === "y" ? "top" : "left",
                        h = m === "y" ? "bottom" : "right",
                        x = d + g[w],
                        E = d - g[h];
                    d = wt(x, d, E)
                }
                const y = l.fn({ ...e,
                    [p]: a,
                    [m]: d
                });
                return { ...y,
                    data: {
                        x: y.x - n,
                        y: y.y - i
                    }
                }
            }
        }
    };

function q(t) {
    return Yt(t) ? (t.nodeName || "").toLowerCase() : "#document"
}

function D(t) {
    var e;
    return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window
}

function W(t) {
    var e;
    return (e = (Yt(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement
}

function Yt(t) {
    return t instanceof Node || t instanceof D(t).Node
}

function V(t) {
    return t instanceof Element || t instanceof D(t).Element
}

function N(t) {
    return t instanceof HTMLElement || t instanceof D(t).HTMLElement
}

function St(t) {
    return typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof D(t).ShadowRoot
}

function it(t) {
    const {
        overflow: e,
        overflowX: n,
        overflowY: i,
        display: s
    } = F(t);
    return /auto|scroll|overlay|hidden|clip/.test(e + i + n) && !["inline", "contents"].includes(s)
}

function Me(t) {
    return ["table", "td", "th"].includes(q(t))
}

function Et(t) {
    const e = At(),
        n = F(t);
    return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(i => (n.willChange || "").includes(i)) || ["paint", "layout", "strict", "content"].some(i => (n.contain || "").includes(i))
}

function Ve(t) {
    let e = $(t);
    for (; N(e) && !mt(e);) {
        if (Et(e)) return e;
        e = $(e)
    }
    return null
}

function At() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}

function mt(t) {
    return ["html", "body", "#document"].includes(q(t))
}

function F(t) {
    return D(t).getComputedStyle(t)
}

function gt(t) {
    return V(t) ? {
        scrollLeft: t.scrollLeft,
        scrollTop: t.scrollTop
    } : {
        scrollLeft: t.pageXOffset,
        scrollTop: t.pageYOffset
    }
}

function $(t) {
    if (q(t) === "html") return t;
    const e = t.assignedSlot || t.parentNode || St(t) && t.host || W(t);
    return St(e) ? e.host : e
}

function Ut(t) {
    const e = $(t);
    return mt(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : N(e) && it(e) ? e : Ut(e)
}

function et(t, e, n) {
    var i;
    e === void 0 && (e = []), n === void 0 && (n = !0);
    const s = Ut(t),
        o = s === ((i = t.ownerDocument) == null ? void 0 : i.body),
        r = D(s);
    return o ? e.concat(r, r.visualViewport || [], it(s) ? s : [], r.frameElement && n ? et(r.frameElement) : []) : e.concat(s, et(s, [], n))
}

function Jt(t) {
    const e = F(t);
    let n = parseFloat(e.width) || 0,
        i = parseFloat(e.height) || 0;
    const s = N(t),
        o = s ? t.offsetWidth : n,
        r = s ? t.offsetHeight : i,
        l = ft(n) !== o || ft(i) !== r;
    return l && (n = o, i = r), {
        width: n,
        height: i,
        $: l
    }
}

function Ct(t) {
    return V(t) ? t : t.contextElement
}

function G(t) {
    const e = Ct(t);
    if (!N(e)) return j(1);
    const n = e.getBoundingClientRect(),
        {
            width: i,
            height: s,
            $: o
        } = Jt(e);
    let r = (o ? ft(n.width) : n.width) / i,
        l = (o ? ft(n.height) : n.height) / s;
    return (!r || !Number.isFinite(r)) && (r = 1), (!l || !Number.isFinite(l)) && (l = 1), {
        x: r,
        y: l
    }
}
const We = j(0);

function Kt(t) {
    const e = D(t);
    return !At() || !e.visualViewport ? We : {
        x: e.visualViewport.offsetLeft,
        y: e.visualViewport.offsetTop
    }
}

function He(t, e, n) {
    return e === void 0 && (e = !1), !n || e && n !== D(t) ? !1 : e
}

function K(t, e, n, i) {
    e === void 0 && (e = !1), n === void 0 && (n = !1);
    const s = t.getBoundingClientRect(),
        o = Ct(t);
    let r = j(1);
    e && (i ? V(i) && (r = G(i)) : r = G(t));
    const l = He(o, n, i) ? Kt(o) : j(0);
    let c = (s.left + l.x) / r.x,
        f = (s.top + l.y) / r.y,
        g = s.width / r.x,
        m = s.height / r.y;
    if (o) {
        const p = D(o),
            a = i && V(i) ? D(i) : i;
        let d = p.frameElement;
        for (; d && i && a !== p;) {
            const y = G(d),
                w = d.getBoundingClientRect(),
                h = F(d),
                x = w.left + (d.clientLeft + parseFloat(h.paddingLeft)) * y.x,
                E = w.top + (d.clientTop + parseFloat(h.paddingTop)) * y.y;
            c *= y.x, f *= y.y, g *= y.x, m *= y.y, c += x, f += E, d = D(d).frameElement
        }
    }
    return ut({
        width: g,
        height: m,
        x: c,
        y: f
    })
}

function Ie(t) {
    let {
        rect: e,
        offsetParent: n,
        strategy: i
    } = t;
    const s = N(n),
        o = W(n);
    if (n === o) return e;
    let r = {
            scrollLeft: 0,
            scrollTop: 0
        },
        l = j(1);
    const c = j(0);
    if ((s || !s && i !== "fixed") && ((q(n) !== "body" || it(o)) && (r = gt(n)), N(n))) {
        const f = K(n);
        l = G(n), c.x = f.x + n.clientLeft, c.y = f.y + n.clientTop
    }
    return {
        width: e.width * l.x,
        height: e.height * l.y,
        x: e.x * l.x - r.scrollLeft * l.x + c.x,
        y: e.y * l.y - r.scrollTop * l.y + c.y
    }
}

function ze(t) {
    return Array.from(t.getClientRects())
}

function Gt(t) {
    return K(W(t)).left + gt(t).scrollLeft
}

function je(t) {
    const e = W(t),
        n = gt(t),
        i = t.ownerDocument.body,
        s = U(e.scrollWidth, e.clientWidth, i.scrollWidth, i.clientWidth),
        o = U(e.scrollHeight, e.clientHeight, i.scrollHeight, i.clientHeight);
    let r = -n.scrollLeft + Gt(t);
    const l = -n.scrollTop;
    return F(i).direction === "rtl" && (r += U(e.clientWidth, i.clientWidth) - s), {
        width: s,
        height: o,
        x: r,
        y: l
    }
}

function qe(t, e) {
    const n = D(t),
        i = W(t),
        s = n.visualViewport;
    let o = i.clientWidth,
        r = i.clientHeight,
        l = 0,
        c = 0;
    if (s) {
        o = s.width, r = s.height;
        const f = At();
        (!f || f && e === "fixed") && (l = s.offsetLeft, c = s.offsetTop)
    }
    return {
        width: o,
        height: r,
        x: l,
        y: c
    }
}

function Xe(t, e) {
    const n = K(t, !0, e === "fixed"),
        i = n.top + t.clientTop,
        s = n.left + t.clientLeft,
        o = N(t) ? G(t) : j(1),
        r = t.clientWidth * o.x,
        l = t.clientHeight * o.y,
        c = s * o.x,
        f = i * o.y;
    return {
        width: r,
        height: l,
        x: c,
        y: f
    }
}

function Pt(t, e, n) {
    let i;
    if (e === "viewport") i = qe(t, n);
    else if (e === "document") i = je(W(t));
    else if (V(e)) i = Xe(e, n);
    else {
        const s = Kt(t);
        i = { ...e,
            x: e.x - s.x,
            y: e.y - s.y
        }
    }
    return ut(i)
}

function Qt(t, e) {
    const n = $(t);
    return n === e || !V(n) || mt(n) ? !1 : F(n).position === "fixed" || Qt(n, e)
}

function Ye(t, e) {
    const n = e.get(t);
    if (n) return n;
    let i = et(t, [], !1).filter(l => V(l) && q(l) !== "body"),
        s = null;
    const o = F(t).position === "fixed";
    let r = o ? $(t) : t;
    for (; V(r) && !mt(r);) {
        const l = F(r),
            c = Et(r);
        !c && l.position === "fixed" && (s = null), (o ? !c && !s : !c && l.position === "static" && !!s && ["absolute", "fixed"].includes(s.position) || it(r) && !c && Qt(t, r)) ? i = i.filter(g => g !== r) : s = l, r = $(r)
    }
    return e.set(t, i), i
}

function Ue(t) {
    let {
        element: e,
        boundary: n,
        rootBoundary: i,
        strategy: s
    } = t;
    const r = [...n === "clippingAncestors" ? Ye(e, this._c) : [].concat(n), i],
        l = r[0],
        c = r.reduce((f, g) => {
            const m = Pt(e, g, s);
            return f.top = U(m.top, f.top), f.right = Z(m.right, f.right), f.bottom = Z(m.bottom, f.bottom), f.left = U(m.left, f.left), f
        }, Pt(e, l, s));
    return {
        width: c.right - c.left,
        height: c.bottom - c.top,
        x: c.left,
        y: c.top
    }
}

function Je(t) {
    const {
        width: e,
        height: n
    } = Jt(t);
    return {
        width: e,
        height: n
    }
}

function Ke(t, e, n) {
    const i = N(e),
        s = W(e),
        o = n === "fixed",
        r = K(t, !0, o, e);
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const c = j(0);
    if (i || !i && !o)
        if ((q(e) !== "body" || it(s)) && (l = gt(e)), i) {
            const f = K(e, !0, o, e);
            c.x = f.x + e.clientLeft, c.y = f.y + e.clientTop
        } else s && (c.x = Gt(s));
    return {
        x: r.left + l.scrollLeft - c.x,
        y: r.top + l.scrollTop - c.y,
        width: r.width,
        height: r.height
    }
}

function Dt(t, e) {
    return !N(t) || F(t).position === "fixed" ? null : e ? e(t) : t.offsetParent
}

function Zt(t, e) {
    const n = D(t);
    if (!N(t)) return n;
    let i = Dt(t, e);
    for (; i && Me(i) && F(i).position === "static";) i = Dt(i, e);
    return i && (q(i) === "html" || q(i) === "body" && F(i).position === "static" && !Et(i)) ? n : i || Ve(t) || n
}
const Ge = async function(t) {
    let {
        reference: e,
        floating: n,
        strategy: i
    } = t;
    const s = this.getOffsetParent || Zt,
        o = this.getDimensions;
    return {
        reference: Ke(e, await s(n), i),
        floating: {
            x: 0,
            y: 0,
            ...await o(n)
        }
    }
};

function Qe(t) {
    return F(t).direction === "rtl"
}
const Ze = {
    convertOffsetParentRelativeRectToViewportRelativeRect: Ie,
    getDocumentElement: W,
    getClippingRect: Ue,
    getOffsetParent: Zt,
    getElementRects: Ge,
    getClientRects: ze,
    getDimensions: Je,
    getScale: G,
    isElement: V,
    isRTL: Qe
};

function $e(t, e) {
    let n = null,
        i;
    const s = W(t);

    function o() {
        clearTimeout(i), n && n.disconnect(), n = null
    }

    function r(l, c) {
        l === void 0 && (l = !1), c === void 0 && (c = 1), o();
        const {
            left: f,
            top: g,
            width: m,
            height: p
        } = t.getBoundingClientRect();
        if (l || e(), !m || !p) return;
        const a = st(g),
            d = st(s.clientWidth - (f + m)),
            y = st(s.clientHeight - (g + p)),
            w = st(f),
            x = {
                rootMargin: -a + "px " + -d + "px " + -y + "px " + -w + "px",
                threshold: U(0, Z(1, c)) || 1
            };
        let E = !0;

        function A(b) {
            const C = b[0].intersectionRatio;
            if (C !== c) {
                if (!E) return r();
                C ? r(!1, C) : i = setTimeout(() => {
                    r(!1, 1e-7)
                }, 100)
            }
            E = !1
        }
        try {
            n = new IntersectionObserver(A, { ...x,
                root: s.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(A, x)
        }
        n.observe(t)
    }
    return r(!0), o
}

function Ft(t, e, n, i) {
    i === void 0 && (i = {});
    const {
        ancestorScroll: s = !0,
        ancestorResize: o = !0,
        elementResize: r = typeof ResizeObserver == "function",
        layoutShift: l = typeof IntersectionObserver == "function",
        animationFrame: c = !1
    } = i, f = Ct(t), g = s || o ? [...f ? et(f) : [], ...et(e)] : [];
    g.forEach(h => {
        s && h.addEventListener("scroll", n, {
            passive: !0
        }), o && h.addEventListener("resize", n)
    });
    const m = f && l ? $e(f, n) : null;
    let p = -1,
        a = null;
    r && (a = new ResizeObserver(h => {
        let [x] = h;
        x && x.target === f && a && (a.unobserve(e), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
            a && a.observe(e)
        })), n()
    }), f && !c && a.observe(f), a.observe(e));
    let d, y = c ? K(t) : null;
    c && w();

    function w() {
        const h = K(t);
        y && (h.x !== y.x || h.y !== y.y || h.width !== y.width || h.height !== y.height) && n(), y = h, d = requestAnimationFrame(w)
    }
    return n(), () => {
        g.forEach(h => {
            s && h.removeEventListener("scroll", n), o && h.removeEventListener("resize", n)
        }), m && m(), a && a.disconnect(), a = null, c && cancelAnimationFrame(d)
    }
}
const tn = Ne,
    en = De,
    nn = Pe,
    on = (t, e, n) => {
        const i = new Map,
            s = {
                platform: Ze,
                ...n
            },
            o = { ...s.platform,
                _c: i
            };
        return Se(t, e, { ...s,
            platform: o
        })
    };

function Bt(t) {
    let e;
    return {
        c() {
            e = Ht("div")
        },
        l(n) {
            e = It(n, "DIV", {}), zt(e).forEach(z)
        },
        m(n, i) {
            Q(n, e, i), t[23](e)
        },
        p: re,
        d(n) {
            n && z(e), t[23](null)
        }
    }
}

function Nt(t) {
    let e, n;
    const i = [{
        use: t[9]
    }, {
        options: t[3]
    }, {
        role: "tooltip"
    }, {
        tabindex: t[1] ? -1 : void 0
    }, t[11]];
    let s = {
        $$slots: {
            default: [rn]
        },
        $$scope: {
            ctx: t
        }
    };
    for (let o = 0; o < i.length; o += 1) s = yt(s, i[o]);
    return e = new Ae({
        props: s
    }), e.$on("focusin", function() {
        rt(I(t[1], t[7])) && I(t[1], t[7]).apply(this, arguments)
    }), e.$on("focusout", function() {
        rt(I(t[1], t[8])) && I(t[1], t[8]).apply(this, arguments)
    }), e.$on("mouseenter", function() {
        rt(I(t[1] && !t[4], t[7])) && I(t[1] && !t[4], t[7]).apply(this, arguments)
    }), e.$on("mouseleave", function() {
        rt(I(t[1] && !t[4], t[8])) && I(t[1] && !t[4], t[8]).apply(this, arguments)
    }), {
        c() {
            pe(e.$$.fragment)
        },
        l(o) {
            ye(e.$$.fragment, o)
        },
        m(o, r) {
            we(e, o, r), n = !0
        },
        p(o, r) {
            t = o;
            const l = r[0] & 2570 ? xe(i, [r[0] & 512 && {
                use: t[9]
            }, r[0] & 8 && {
                options: t[3]
            }, i[2], r[0] & 2 && {
                tabindex: t[1] ? -1 : void 0
            }, r[0] & 2048 && ve(t[11])]) : {};
            r[0] & 16777284 && (l.$$scope = {
                dirty: r,
                ctx: t
            }), e.$set(l)
        },
        i(o) {
            n || (tt(e.$$.fragment, o), n = !0)
        },
        o(o) {
            ct(e.$$.fragment, o), n = !1
        },
        d(o) {
            be(e, o)
        }
    }
}

function Mt(t) {
    let e, n, i;
    return {
        c() {
            e = Ht("div"), this.h()
        },
        l(s) {
            e = It(s, "DIV", {
                class: !0
            }), zt(e).forEach(z), this.h()
        },
        h() {
            Tt(e, "class", t[6])
        },
        m(s, o) {
            Q(s, e, o), n || (i = ue(t[10].call(null, e)), n = !0)
        },
        p(s, o) {
            o[0] & 64 && Tt(e, "class", s[6])
        },
        d(s) {
            s && z(e), n = !1, i()
        }
    }
}

function rn(t) {
    let e, n, i;
    const s = t[22].default,
        o = le(s, t, t[24], null);
    let r = t[2] && Mt(t);
    return {
        c() {
            o && o.c(), e = Vt(), r && r.c(), n = lt()
        },
        l(l) {
            o && o.l(l), e = Wt(l), r && r.l(l), n = lt()
        },
        m(l, c) {
            o && o.m(l, c), Q(l, e, c), r && r.m(l, c), Q(l, n, c), i = !0
        },
        p(l, c) {
            o && o.p && (!i || c[0] & 16777216) && ce(o, s, l, l[24], i ? ae(s, l[24], c, null) : fe(l[24]), null), l[2] ? r ? r.p(l, c) : (r = Mt(l), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null)
        },
        i(l) {
            i || (tt(o, l), i = !0)
        },
        o(l) {
            ct(o, l), i = !1
        },
        d(l) {
            l && (z(e), z(n)), o && o.d(l), r && r.d(l)
        }
    }
}

function sn(t) {
    let e, n, i, s = !t[3] && Bt(t),
        o = t[0] && t[3] && Nt(t);
    return {
        c() {
            s && s.c(), e = Vt(), o && o.c(), n = lt()
        },
        l(r) {
            s && s.l(r), e = Wt(r), o && o.l(r), n = lt()
        },
        m(r, l) {
            s && s.m(r, l), Q(r, e, l), o && o.m(r, l), Q(r, n, l), i = !0
        },
        p(r, l) {
            r[3] ? s && (s.d(1), s = null) : s ? s.p(r, l) : (s = Bt(r), s.c(), s.m(e.parentNode, e)), r[0] && r[3] ? o ? (o.p(r, l), l[0] & 9 && tt(o, 1)) : (o = Nt(r), o.c(), tt(o, 1), o.m(n.parentNode, n)) : o && (ge(), ct(o, 1, 1, () => {
                o = null
            }), he())
        },
        i(r) {
            i || (tt(o), i = !0)
        },
        o(r) {
            ct(o), i = !1
        },
        d(r) {
            r && (z(e), z(n)), s && s.d(r), o && o.d(r)
        }
    }
}

function I(t, e) {
    return t ? e : () => {}
}

function ln(t, e, n) {
    let i;
    const s = ["activeContent", "arrow", "offset", "placement", "trigger", "triggeredBy", "reference", "strategy", "open", "yOnly", "middlewares"];
    let o = _t(e, s),
        {
            $$slots: r = {},
            $$scope: l
        } = e,
        {
            activeContent: c = !1
        } = e,
        {
            arrow: f = !0
        } = e,
        {
            offset: g = 8
        } = e,
        {
            placement: m = "top"
        } = e,
        {
            trigger: p = "hover"
        } = e,
        {
            triggeredBy: a = void 0
        } = e,
        {
            reference: d = void 0
        } = e,
        {
            strategy: y = "absolute"
        } = e,
        {
            open: w = !1
        } = e,
        {
            yOnly: h = !1
        } = e,
        {
            middlewares: x = [en(), tn()]
        } = e;
    const E = oe();
    let A, b, C, v, S, k = [],
        M = !1;
    const H = () => (M = !0, setTimeout(() => M = !1, 250)),
        R = u => {
            b === void 0 && console.error("trigger undefined"), !d && k.includes(u.target) && b !== u.target && (n(3, b = u.target), H()), A && u.type === "focusin" && !w && H(), n(0, w = A && u.type === "click" && !M ? !w : !0)
        },
        X = u => u.matches(":hover"),
        T = u => u.contains(document.activeElement),
        L = u => u != null ? `${u}px` : "",
        O = u => {
            c ? setTimeout(() => {
                const P = [b, C, ...k].filter(Boolean);
                u.type === "mouseleave" && P.some(X) || u.type === "focusout" && P.some(T) || n(0, w = !1)
            }, 100) : n(0, w = !1)
        };
    let _;
    const ht = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };

    function Ot() {
        on(b, C, {
            placement: m,
            strategy: y,
            middleware: i
        }).then(({
            x: u,
            y: P,
            middlewareData: B,
            placement: Y,
            strategy: pt
        }) => {
            C.style.position = pt, C.style.left = h ? "0" : L(u), C.style.top = L(P), B.arrow && v instanceof HTMLDivElement && (n(20, v.style.left = L(B.arrow.x), v), n(20, v.style.top = L(B.arrow.y), v), n(21, _ = ht[Y.split("-")[0]]), n(20, v.style[_] = L(-v.offsetWidth / 2 - (e.border ? 1 : 0)), v))
        })
    }

    function $t(u, P) {
        C = u;
        let B = Ft(P, C, Ot);
        return {
            update(Y) {
                B(), B = Ft(Y, C, Ot)
            },
            destroy() {
                B()
            }
        }
    }
    ie(() => {
        const u = [
            ["focusin", R, !0],
            ["focusout", O, !0],
            ["click", R, A],
            ["mouseenter", R, !A],
            ["mouseleave", O, !A]
        ];
        return a ? k = [...document.querySelectorAll(a)] : k = S.previousElementSibling ? [S.previousElementSibling] : [], k.length || console.error("No triggers found."), k.forEach(P => {
            P.tabIndex < 0 && (P.tabIndex = 0);
            for (const [B, Y, pt] of u) pt && P.addEventListener(B, Y)
        }), d ? (n(3, b = document.querySelector(d) ? ? document.body), b === document.body ? console.error(`Popup reference not found: '${d}'`) : (b.addEventListener("focusout", O), A || b.addEventListener("mouseleave", O))) : n(3, b = k[0]), () => {
            k.forEach(P => {
                if (P)
                    for (const [B, Y] of u) P.removeEventListener(B, Y)
            }), b && (b.removeEventListener("focusout", O), b.removeEventListener("mouseleave", O))
        }
    });
    let Rt;

    function te(u) {
        return n(20, v = u), {
            destroy() {
                n(20, v = null)
            }
        }
    }

    function ee(u) {
        se[u ? "unshift" : "push"](() => {
            S = u, n(5, S)
        })
    }
    return t.$$set = u => {
        n(36, e = yt(yt({}, e), Lt(u))), n(11, o = _t(e, s)), "activeContent" in u && n(1, c = u.activeContent), "arrow" in u && n(2, f = u.arrow), "offset" in u && n(12, g = u.offset), "placement" in u && n(13, m = u.placement), "trigger" in u && n(14, p = u.trigger), "triggeredBy" in u && n(15, a = u.triggeredBy), "reference" in u && n(16, d = u.reference), "strategy" in u && n(17, y = u.strategy), "open" in u && n(0, w = u.open), "yOnly" in u && n(18, h = u.yOnly), "middlewares" in u && n(19, x = u.middlewares), "$$scope" in u && n(24, l = u.$$scope)
    }, t.$$.update = () => {
        t.$$.dirty[0] & 16384 && n(4, A = p === "click"), t.$$.dirty[0] & 1 && E("show", w), t.$$.dirty[0] & 8200 && m && (n(3, b), n(13, m)), t.$$.dirty[0] & 1576960 && (i = [...x, Be(+g), v && nn({
            element: v,
            padding: 10
        })]), n(6, Rt = Ee("absolute pointer-events-none block w-[10px] h-[10px] rotate-45 bg-inherit border-inherit", e.border && _ === "bottom" && "border-b border-e", e.border && _ === "top" && "border-t border-s ", e.border && _ === "right" && "border-t border-e ", e.border && _ === "left" && "border-b border-s "))
    }, e = Lt(e), [w, c, f, b, A, S, Rt, R, O, $t, te, o, g, m, p, a, d, y, h, x, v, _, r, ee, l]
}
class mn extends de {
    constructor(e) {
        super(), me(this, e, ln, sn, ne, {
            activeContent: 1,
            arrow: 2,
            offset: 12,
            placement: 13,
            trigger: 14,
            triggeredBy: 15,
            reference: 16,
            strategy: 17,
            open: 0,
            yOnly: 18,
            middlewares: 19
        }, null, [-1, -1])
    }
}
export {
    mn as P
};