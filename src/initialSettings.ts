import { type Supervisor, type GameScreen, type Student, type Ability, type GameState, type ActiveStudent, studentList, type StartedPaper } from "./types"


export const studentAttributes: Record<Student, { displayName: string, abilities: Array<Ability>, position: { top: number, left: number } }> = {
    "kiraa": {
        displayName: "Filip",
        abilities: ["furry", "coding", "writing"],
        position: {
            top: 11,
            left: 23,
        }
    },
    "palko": {
        displayName: "Palko",
        abilities: ["cycling", "graphics", "design"],
        position: {
            top: 12,
            left: 48,
        }
    },
    "matej": {
        displayName: "Matej",
        abilities: ["lego", "coding", "vr"],
        position: {
            top: 10,
            left: 42,
        }
    },
    "david": {
        displayName: "David",
        abilities: ["driving", "writing", "vr"],
        position: {
            top: 16,
            left: 27,
        }
    },
    "hanka": {
        displayName: "Hanka",
        abilities: ["plants", "design", "writing"],
        position: {
            top: 26,
            left: 20,
        }
    },
    "vojta": {
        displayName: "Vojta",
        abilities: ["handstands", "vr", "writing"],
        position: {
            top: 10,
            left: 30,
        }
    },
    "matus": {
        displayName: "Matúš",
        abilities: ["inline", "graphics", "coding"],
        position: {
            top: 16.5,
            left: 19.5,
        }
    }
}


export const supervisorAttributes: Record<Supervisor, { displayName: string, talent: string }> = {
    "bara": {
        displayName: "Bára",
        talent: "Recruit: pick an additional 1 student in your team."
    },
    "honza": {
        displayName: "Honza",
        talent: "Last minute polish: the deadline timer is extended by 10 seconds."
    },
    "david": {
        displayName: "David",
        talent: "Personal touch: every paper gains slow progress passively, in addition to students' work."
    },
    "jirka": {
        displayName: "Jirka",
        talent: "Consultations: every motivational whip progresses the paper on which the student is working on."
    },
    "katka": {
        displayName: "Katka",
        talent: "Teacher: Student can slowly progress papers' needs that their abilities don't cover."
    },
    "marek": {
        displayName: "Marek",
        talent: "Organization: all ideas' needs are covered by at least one of the selected students abilities. "
    }

}

export const abilityAttributes: Record<Ability, { displayName: string, emojiRepresentation: string }> = {
    'furry': {
        displayName: 'Animal Impersonation',
        emojiRepresentation: '🦊',
    },
    'coding': {
        displayName: "Web-dev",
        emojiRepresentation: '💻',
    },
    'writing': {
        displayName: "Writing",
        emojiRepresentation: '✍'
    },
    'cycling': {
        displayName: 'Cycling',
        emojiRepresentation: '🚲',
    },
    'design': {
        displayName: 'Design',
        emojiRepresentation: '🎨'
    },
    'lego': {
        displayName: 'Lego Building',
        emojiRepresentation: '🏰'
    },
    'plants': {
        displayName: 'Plant overwatering',
        emojiRepresentation: '🪴'
    },
    'driving': {
        displayName: 'Driving',
        emojiRepresentation: '🚗'
    },
    'inline': {
        displayName: 'Inline Skating',
        emojiRepresentation: '🛼'
    },
    'vr': {
        displayName: 'VR',
        emojiRepresentation: '🥽'
    },
    'handstands': {
        displayName: 'Handstands',
        emojiRepresentation: '🤸'
    },
    'graphics': {
        displayName: 'Graphics',
        emojiRepresentation: '🫖'
    }

}

export const initialSettings: {
    supervisor: Supervisor,
    deadlineLength: number,
    screen: GameScreen,
    paperDoneAt: number
} = {
    supervisor: "bara",
    deadlineLength: 87_00,
    screen: "splash",
    paperDoneAt: 3_00
}


function initStudents(): Record<Student, ActiveStudent> {
    let studentsRecord = {} as Record<Student, ActiveStudent>;
    for (const s of studentList) {
        studentsRecord[s] = {
            name: s,
            selected: false,
            motivation: 100,
            assignedPaper: undefined,
            status: 'idle',
            isWhipped: false
        };
    }
    return studentsRecord;
}
export const initialGameState: GameState = {
    supervisor: initialSettings.supervisor,
    students: initStudents(),
    potentialPapers: [],
    ticks: 0,
    workedOnPapers: new Map([]),
    deadlineLength: initialSettings.deadlineLength
}
