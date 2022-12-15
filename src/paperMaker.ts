import type { BasePaper } from "./types";
import { v4 as uuid } from 'uuid';


export function makePaper(): BasePaper {
    const id = uuid();
    return {
        id,
        name: `Data data data data data dat ${id.substring(0,3)}`,
        abilities: ["furry", "writing", "design"]
    }
}