import {
    w as u
} from "./index.4538fb25.js";
var p;
const k = ((p = globalThis.__sveltekit_10qrmew) == null ? void 0 : p.base) ? ? "";
var h;
const w = ((h = globalThis.__sveltekit_10qrmew) == null ? void 0 : h.assets) ? ? k,
    T = "1710935669862",
    y = "sveltekit:snapshot",
    I = "sveltekit:scroll",
    S = "sveltekit:index",
    f = {
        tap: 1,
        hover: 2,
        viewport: 3,
        eager: 4,
        off: -1,
        false: -1
    },
    g = location.origin;

function x(e) {
    let t = e.baseURI;
    if (!t) {
        const n = e.getElementsByTagName("base");
        t = n.length ? n[0].href : e.URL
    }
    return t
}

function O() {
    return {
        x: pageXOffset,
        y: pageYOffset
    }
}

function c(e, t) {
    return e.getAttribute(`data-sveltekit-${t}`)
}
const d = { ...f,
    "": f.hover
};

function b(e) {
    let t = e.assignedSlot ? ? e.parentNode;
    return (t == null ? void 0 : t.nodeType) === 11 && (t = t.host), t
}

function U(e, t) {
    for (; e && e !== t;) {
        if (e.nodeName.toUpperCase() === "A" && e.hasAttribute("href")) return e;
        e = b(e)
    }
}

function L(e, t) {
    let n;
    try {
        n = new URL(e instanceof SVGAElement ? e.href.baseVal : e.href, document.baseURI)
    } catch {}
    const a = e instanceof SVGAElement ? e.target.baseVal : e.target,
        o = !n || !!a || A(n, t) || (e.getAttribute("rel") || "").split(/\s+/).includes("external"),
        r = (n == null ? void 0 : n.origin) === g && e.hasAttribute("download");
    return {
        url: n,
        external: o,
        target: a,
        download: r
    }
}

function N(e) {
    let t = null,
        n = null,
        a = null,
        o = null,
        r = null,
        l = null,
        s = e;
    for (; s && s !== document.documentElement;) a === null && (a = c(s, "preload-code")), o === null && (o = c(s, "preload-data")), t === null && (t = c(s, "keepfocus")), n === null && (n = c(s, "noscroll")), r === null && (r = c(s, "reload")), l === null && (l = c(s, "replacestate")), s = b(s);

    function i(m) {
        switch (m) {
            case "":
            case "true":
                return !0;
            case "off":
            case "false":
                return !1;
            default:
                return null
        }
    }
    return {
        preload_code: d[a ? ? "off"],
        preload_data: d[o ? ? "off"],
        keep_focus: i(t),
        noscroll: i(n),
        reload: i(r),
        replace_state: i(l)
    }
}

function _(e) {
    const t = u(e);
    let n = !0;

    function a() {
        n = !0, t.update(l => l)
    }

    function o(l) {
        n = !1, t.set(l)
    }

    function r(l) {
        let s;
        return t.subscribe(i => {
            (s === void 0 || n && i !== s) && l(s = i)
        })
    }
    return {
        notify: a,
        set: o,
        subscribe: r
    }
}

function E() {
    const {
        set: e,
        subscribe: t
    } = u(!1), n = 5e3;
    let a;
    async function o() {
        clearTimeout(a), a = setTimeout(o, n);
        try {
            const r = await fetch(`${w}/_app/version.json`, {
                headers: {
                    pragma: "no-cache",
                    "cache-control": "no-cache"
                }
            });
            if (!r.ok) return !1;
            const s = (await r.json()).version !== T;
            return s && (e(!0), clearTimeout(a)), s
        } catch {
            return !1
        }
    }
    return a = setTimeout(o, n), {
        subscribe: t,
        check: o
    }
}

function A(e, t) {
    return e.origin !== g || !e.pathname.startsWith(t)
}
let v;

function P(e) {
    v = e.client
}

function V(e) {
    return (...t) => v[e](...t)
}
const Y = {
    url: _({}),
    page: _({}),
    navigating: u(null),
    updated: E()
};
export {
    S as I, f as P, I as S, V as a, y as b, v as c, L as d, N as e, U as f, x as g, O as h, A as i, k as j, P as k, g as o, Y as s
};