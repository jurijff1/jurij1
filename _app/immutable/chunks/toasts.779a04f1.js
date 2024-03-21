import {
    w as p
} from "./index.4538fb25.js";
const e = p([]),
    u = {
        clear: () => e.set([]),
        subscribe: e.subscribe,
        pushSucess: s => e.update(t => [...t, {
            type: "success",
            text: s
        }]),
        pushDanger: s => e.update(t => [...t, {
            type: "danger",
            text: s
        }]),
        pushInfo: s => e.update(t => [...t, {
            type: "info",
            text: s
        }]),
        push: s => e.update(t => [...t, s])
    };
export {
    u as t
};