import {
    t as l
} from "./toasts.779a04f1.js";
import {
    g as f,
    i as p
} from "./navigation.63b52091.js";
import {
    a as g
} from "./forms.08853d46.js";
import "./singletons.c7bd1800.js";
const E = ({
    formElement: m,
    submitter: a
}) => {
    const n = document.createElement("svg"),
        r = a == null ? void 0 : a.firstElementChild;
    return n.classList.add("loader", "mr-1"), r && (r.classList.add("hidden"), a.insertBefore(n, r)), a == null || a.setAttribute("disabled", ""), async ({
        result: e,
        update: v
    }) => {
        var t, i, c;
        a == null || a.removeAttribute("disabled"), r && (r.classList.remove("hidden"), n.remove());
        for (const o of Array.from(m.elements))
            if (e.type === "failure" && e.data.errors && e.data.errors[o.name]) {
                const s = `${o.name}-label-error`;
                let d = document.getElementById(s) ? ? document.createElement("div");
                d.remove(), e.data.errors[o.name][0] && (d.id = `${o.name}-label-error`, d.classList.add("text-red-400", "text-sm", "mt-1"), d.innerText = e.data.errors[o.name][0], (t = o.parentNode) == null || t.append(d)), o.classList.add("!border-red-400")
            } else {
                const s = `${o.name}-label-error`,
                    d = document.getElementById(s);
                d == null || d.remove(), o.classList.remove("!border-red-400")
            }
        e.type === "failure" && (i = e.data) != null && i.errorMessage && l.pushDanger(e.data.errorMessage), e.type === "redirect" && f(e.location), e.type === "success" && ((c = e.data) != null && c.message && l.pushSucess(e.data.message), await p()), await g(e)
    }
};
export {
    E as n
};