import type { Supervisor, GameScreen, Student, Ability, GameState } from "./types"

export const initialSettings: {
    supervisor: Supervisor,
    deadlineLength: number,
    screen: GameScreen,
} = {
    supervisor: "bara",
    // seconds_00
    deadlineLength: 5_00,
    screen: "splash",
}

export const initialGameState: GameState = {
    supervisor: initialSettings.supervisor,
    students: {
        kiraa: {
            name: "kiraa",
            displayName: "Filip",
            selected: false,
            abilities: ["Furry", "Software", "Writing"],
            status: 'slacking'
        },
        palko: {
            name: "palko",
            displayName: "Palko",
            selected: false,
            abilities: ["Cycling", "Design", "Software"],
            status: 'slacking'
        }
    },
    finishedPapers: [
        {
            id: 'finished',
            name: 'Finished!',
            abilities: ['Cycling', 'Writing', 'Software'],
            progress: 1,
            currentAuthor: undefined,
            authors: ['palko', 'kiraa']
        }
    ],
    ticks: 0,
    workedOnPapers: [
        {
            id: "worked-on",
            name: "Worked on!",
            abilities: ['Design', 'Software', 'Furry'],
            progress: 0,
            currentAuthor: undefined,
            authors: []
        }
    ],
    deadlineLength: initialSettings.deadlineLength
}

export const studentAttributes: Record<Student, { displayName: string, abilities: Array<Ability> }> = {
    "kiraa": {
        displayName: "Filip",
        abilities: ["Furry", "Software", "Writing"]
    },
    "palko": {
        displayName: "Palko",
        abilities: ["Cycling", "Software", "Design"]
    }
}


export const supervisorAttributes: Record<Supervisor, { displayName: string }> = {
    "bara": {
        displayName: "Baru",
    },
    "honza": {
        displayName: "Honza"
    }
}

export const abilityEmojis = {
    'Furry': '🦊',
    'Software': '💻',
    'Writing': '✍',
    'Cycling': '🚲',
    'Design': '🎨'

}
