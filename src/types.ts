
export type GameScreen =
    | "splash"
    | "rules"
    | "choose-supervisor"
    | "choose-students"
    | "game"
    | "end";


export type Supervisor = "bara" | "honza" //| "katka" | "david" | "jirka" | "marek";


export type Student = "kiraa" | "palko" //| "matus" | "matej" | "david" | "hanka" | "vojta";
export type StudentModel = {
    name: Student,
    displayName: string,
    selected: boolean,
    abilities: Array<Ability>,
    status: "working" | "slacking" | "confuzed" | "idle"
};


export type Ability = "Furry" | "Cycling" | "Software" | "Writing" | "Design"

export type BasePaper = {
    id: string,
    name: string,
    abilities: Array<Ability>,
}

export type StartedPaper = BasePaper & {
    progress: number,
    currentAuthor: Student | undefined,
    authors: Array<Student>,
}


export type GameState = {
    supervisor: Supervisor,
    students: Record<Student, StudentModel>,
    finishedPapers: Array<StartedPaper>,
    workedOnPapers: Array<StartedPaper>,
    ticks: number,
    deadlineLength: number,
}