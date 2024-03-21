const a = new Intl.NumberFormat("en", {
        compactDisplay: "long"
    }),
    c = Intl.NumberFormat("en", {
        notation: "compact"
    }),
    o = {
        one: "st",
        two: "nd",
        few: "rd",
        other: "th"
    },
    r = new Intl.PluralRules("en", {
        type: "ordinal"
    });

function l(t) {
    if (t < 1) throw new RangeError(`Expected a number > 0 but received ${t}`);
    const n = r.select(t),
        e = o[n];
    return `${t}${e}`
}
export {
    a,
    c,
    l as w
};