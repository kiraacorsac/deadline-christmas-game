import { triples } from "./triples";
import { tuples } from "./tuples";

function clean(word) {
    return word.replace(/[^a-zA-Z]/g, "").toLowerCase();
}

function undef(w, i, depth, probs) {
    if (depth <= 1) return typeof probs[w[i]] === "undefined";
    if (typeof probs[w[i]] === "undefined") return true;
    return undef(w, i + 1, depth - 1, probs[w[i]]);
}


export function scorePronouncability(word) {
    let w = clean(word);
    let score = 0;

    switch (w.length) {
        case 1:
            return 1;

        case 2:
            for (let i = 0; i < w.length - 1; i++) {
                if (undef(w, i, 2, tuples)) {
                    score = score + 0;
                } else {
                    score = score + tuples[w[i]][w[i + 1]];
                }
            }
            break;

        default:
            for (let i = 0; i < w.length - 2; i++) {
                if (undef(w, i, 3, triples)) {
                    score = score + 0;
                } else {
                    score = score + triples[w[i]][w[i + 1]][w[i + 2]];
                }
            }
    }

    return score / w.length;
};