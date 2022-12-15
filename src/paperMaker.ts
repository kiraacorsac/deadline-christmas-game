import type { BasePaper, PotentialPaper } from "./types";
import { v4 as uuid } from 'uuid';


export function makePaper(): PotentialPaper {
    const id = uuid();
    return {
        id,
        name: `${id.substring(0, 3)}`,
        abilities: ["furry", "writing", "design"],
        life: 1200
    }
}