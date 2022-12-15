
export type GameScreen =
    | "splash"
    | "rules"
    | "choose-supervisor"
    | "choose-students"
    | "game"
    | "end";




type AnyElementOf<T extends ReadonlyArray<string>> = T[number];

export const studentList = ["kiraa", "palko", "matus", "matej", "david", "hanka", "vojta"] as const;
export type Student = AnyElementOf<typeof studentList>;

export const supervisorList = ["bara", "honza", "katka", "david", "jirka", "marek"] as const;
export type Supervisor = AnyElementOf<typeof supervisorList>;

export type ActiveStudent = {
    name: Student,
    selected: boolean,
    assignedPaper: StartedPaper,
    motivation: number,
    status: "working" | "slacking" | "confuzed" | "idle",
    isWhipped: boolean
};

export type SpecialAbility = "furry" | "cycling" | "lego" | "plants" | "inline" | "driving" | "handstands";
export type RegularAbility = "writing" | "coding" | "vr" | "design" | "graphics";
export type Ability = SpecialAbility | RegularAbility;

export type BasePaper = {
    id: string,
    name: string,
    abilities: Array<Ability>,
}

export type StartedPaper = BasePaper & {
    progress: Map<Ability, number>,
    currentAuthor: Student | undefined,
    authors: Array<Student>,
}


export type GameState = {
    supervisor: Supervisor,
    students: Record<Student, ActiveStudent>,
    finishedPapers: Array<StartedPaper>,
    workedOnPapers: Array<StartedPaper>,
    ticks: number,
    deadlineLength: number,
}