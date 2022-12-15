import { makePaper } from "./paperMaker"
import { type Supervisor, type GameScreen, type Student, type Ability, type GameState, type ActiveStudent, studentList } from "./types"


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
        displayName: "Matus",
        abilities: ["inline", "graphics", "coding"],
        position: {
            top: 16.5,
            left: 19.5,
        }
    }
}


export const supervisorAttributes: Record<Supervisor, { displayName: string }> = {
    "bara": {
        displayName: "Baru",
    },
    "honza": {
        displayName: "Honza",
    },
    "david": {
        displayName: "David",
    },
    "jirka": {
        displayName: "Jirka",
    },
    "katka": {
        displayName: "Katka"
    },
    "marek": {
        displayName: "Marek"
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
    // seconds_00
    deadlineLength: 30_00,
    screen: "splash",
    paperDoneAt: 2_00
}


function initStudents(): Record<Student, ActiveStudent> {
    let studentsRecord = {} as Record<Student, ActiveStudent>;
    for (const s of studentList) {
        studentsRecord[s] = {
            name: s,
            selected: true,
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
    finishedPapers: [
        {
            id: 'finished',
            name: 'Finished!',
            abilities: ['cycling', 'writing', 'coding'],
            progress: new Map<Ability, number>(
                [['cycling', 0], ['writing', 0], ['coding', 0]]
            ),
            currentAuthor: undefined,
            authors: ['palko', 'kiraa']
        }
    ],
    ticks: 0,
    workedOnPapers: new Map([
        [
            "worked-on",
            {
                id: "worked-on",
                name: "Worked on!",
                abilities: ['design', 'coding', 'furry'],
                progress: new Map<Ability, number>(
                    [['design', 0], ['coding', 0], ['furry', 0]]
                ),
                currentAuthor: undefined,
                authors: []
            }]
    ]),
    deadlineLength: initialSettings.deadlineLength
}