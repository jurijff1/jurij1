import {
    p as g
} from "./parse.bee59afc.js";
import {
    c as E
} from "./singletons.c7bd1800.js";
import {
    i as w
} from "./navigation.63b52091.js";

function L(t) {
    return E.apply_action(t)
}

function M(t) {
    const i = JSON.parse(t);
    return i.data && (i.data = g(i.data)), i
}

function y(t) {
    return HTMLElement.prototype.cloneNode.call(t)
}

function H(t, i = () => {}) {
    const l = async ({
        action: e,
        result: c,
        reset: n = !0,
        invalidateAll: r = !0
    }) => {
        c.type === "success" && (n && HTMLFormElement.prototype.reset.call(t), r && await w()), (location.origin + location.pathname === e.origin + e.pathname || c.type === "redirect" || c.type === "error") && L(c)
    };
    async function s(e) {
        var p, f, b, h;
        if (((p = e.submitter) != null && p.hasAttribute("formmethod") ? e.submitter.formMethod : y(t).method) !== "post") return;
        e.preventDefault();
        const n = new URL((f = e.submitter) != null && f.hasAttribute("formaction") ? e.submitter.formAction : y(t).action),
            r = new FormData(t),
            u = (b = e.submitter) == null ? void 0 : b.getAttribute("name");
        u && r.append(u, ((h = e.submitter) == null ? void 0 : h.getAttribute("value")) ? ? "");
        const m = new AbortController;
        let d = !1;
        const A = await i({
            action: n,
            cancel: () => d = !0,
            controller: m,
            get data() {
                return r
            },
            formData: r,
            get form() {
                return t
            },
            formElement: t,
            submitter: e.submitter
        }) ? ? l;
        if (d) return;
        let o;
        try {
            const a = await fetch(n, {
                method: "POST",
                headers: {
                    accept: "application/json",
                    "x-sveltekit-action": "true"
                },
                cache: "no-store",
                body: r,
                signal: m.signal
            });
            o = M(await a.text()), o.type === "error" && (o.status = a.status)
        } catch (a) {
            if ((a == null ? void 0 : a.name) === "AbortError") return;
            o = {
                type: "error",
                error: a
            }
        }
        A({
            action: n,
            get data() {
                return r
            },
            formData: r,
            get form() {
                return t
            },
            formElement: t,
            update: a => l({
                action: n,
                result: o,
                reset: a == null ? void 0 : a.reset,
                invalidateAll: a == null ? void 0 : a.invalidateAll
            }),
            result: o
        })
    }
    return HTMLFormElement.prototype.addEventListener.call(t, "submit", s), {
        destroy() {
            HTMLFormElement.prototype.removeEventListener.call(t, "submit", s)
        }
    }
}
export {
    L as a, H as e
};