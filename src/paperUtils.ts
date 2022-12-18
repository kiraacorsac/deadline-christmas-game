import { initialSettings } from "./initialSettings";
import type { StartedPaper } from "./types";
import type { Ability, PotentialPaper } from "./types";
import { v4 as uuid } from 'uuid';
import { getRandomPaperName } from "./paper-name-generator"
import _, { random } from "lodash";


export function makePaper(studentAbilities: Ability[], badAbilities: Ability[]): PotentialPaper {
    const id = uuid();
    const isUnsolvable = random(1, 10);
    let paperAbilities = [];
    paperAbilities = _.shuffle(studentAbilities).slice(0, 3)
    if (isUnsolvable == 10) {
        paperAbilities = _.shuffle(badAbilities).slice(0, 3)
    }

    return {
        id,
        name: getRandomPaperName(),
        abilities: paperAbilities,
        life: 1200,
        picked: false
    }
}
export function paperIsDone(paper: StartedPaper): boolean {
    for (let value of paper.progress.values()) {
        if (value < initialSettings.paperDoneAt) {
            return false
        }
    }
    return true;
}