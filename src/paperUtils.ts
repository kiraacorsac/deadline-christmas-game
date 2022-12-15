import { initialGameState, initialSettings } from "./initialSettings";
import type { StartedPaper } from "./types";

export function paperIsDone(paper: StartedPaper): boolean {
    for (let value of paper.progress.values()) {
        if (value < initialSettings.paperDoneAt) {
            return false
        }
    }
    return true;
}