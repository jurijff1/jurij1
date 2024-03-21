import {
    a1 as g,
    a2 as b
} from "./scheduler.c64253f0.js";

function v(t) {
    return t < .5 ? 4 * t * t * t : .5 * Math.pow(2 * t - 2, 3) + 1
}

function h(t) {
    const o = t - 1;
    return o * o * o + 1
}

function w(t) {
    return --t * t * t * t * t + 1
}

function F(t) {
    const o = Math.cos(t * Math.PI * .5);
    return Math.abs(o) < 1e-14 ? 1 : 1 - o
}

function C(t, {
    delay: o = 0,
    duration: p = 400,
    easing: d = v,
    amount: i = 5,
    opacity: n = 0
} = {}) {
    const s = getComputedStyle(t),
        r = +s.opacity,
        l = s.filter === "none" ? "" : s.filter,
        a = r * (1 - n),
        [e, $] = g(i);
    return {
        delay: o,
        duration: p,
        easing: d,
        css: (u, y) => `opacity: ${r-a*y}; filter: ${l} blur(${y*e}${$});`
    }
}

function M(t, {
    delay: o = 0,
    duration: p = 400,
    easing: d = b
} = {}) {
    const i = +getComputedStyle(t).opacity;
    return {
        delay: o,
        duration: p,
        easing: d,
        css: n => `opacity: ${n*i}`
    }
}

function S(t, {
    delay: o = 0,
    duration: p = 400,
    easing: d = h,
    x: i = 0,
    y: n = 0,
    opacity: s = 0
} = {}) {
    const r = getComputedStyle(t),
        l = +r.opacity,
        a = r.transform === "none" ? "" : r.transform,
        e = l * (1 - s),
        [$, u] = g(i),
        [y, _] = g(n);
    return {
        delay: o,
        duration: p,
        easing: d,
        css: (f, m) => `
			transform: ${a} translate(${(1-f)*$}${u}, ${(1-f)*y}${_});
			opacity: ${l-e*m}`
    }
}

function I(t, {
    delay: o = 0,
    duration: p = 400,
    easing: d = h,
    axis: i = "y"
} = {}) {
    const n = getComputedStyle(t),
        s = +n.opacity,
        r = i === "y" ? "height" : "width",
        l = parseFloat(n[r]),
        a = i === "y" ? ["top", "bottom"] : ["left", "right"],
        e = a.map(c => `${c[0].toUpperCase()}${c.slice(1)}`),
        $ = parseFloat(n[`padding${e[0]}`]),
        u = parseFloat(n[`padding${e[1]}`]),
        y = parseFloat(n[`margin${e[0]}`]),
        _ = parseFloat(n[`margin${e[1]}`]),
        f = parseFloat(n[`border${e[0]}Width`]),
        m = parseFloat(n[`border${e[1]}Width`]);
    return {
        delay: o,
        duration: p,
        easing: d,
        css: c => `overflow: hidden;opacity: ${Math.min(c*20,1)*s};${r}: ${c*l}px;padding-${a[0]}: ${c*$}px;padding-${a[1]}: ${c*u}px;margin-${a[0]}: ${c*y}px;margin-${a[1]}: ${c*_}px;border-${a[0]}-width: ${c*f}px;border-${a[1]}-width: ${c*m}px;`
    }
}

function O(t, {
    delay: o = 0,
    duration: p = 400,
    easing: d = h,
    start: i = 0,
    opacity: n = 0
} = {}) {
    const s = getComputedStyle(t),
        r = +s.opacity,
        l = s.transform === "none" ? "" : s.transform,
        a = 1 - i,
        e = r * (1 - n);
    return {
        delay: o,
        duration: p,
        easing: d,
        css: ($, u) => `
			transform: ${l} scale(${1-a*u});
			opacity: ${r-e*u}
		`
    }
}
export {
    S as a, C as b, I as c, h as d, O as e, M as f, w as q, F as s
};