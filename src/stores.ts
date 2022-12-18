import { derived, writable } from 'svelte/store';
import { initialGameState, studentAttributes } from './initialSettings';
import type { StartedPaper, Ability, GameScreen, GameState } from './types';
import { cloneDeep } from 'lodash'
import _ from 'lodash';



export const gameScreen = writable<GameScreen>("splash");

export const gameState = writable<GameState>(cloneDeep(initialGameState));
export const finishedPapers = writable<Array<StartedPaper>>([])
export const onTick = writable<Array<(tick: number) => void>>([]);
export const selectedStudentsAbilities = derived(gameState, gameState => _.uniq(
    _.flatten(
        Object.values(gameState.students)
            .filter(s => s.selected)
            .map(s => studentAttributes[s.name].abilities))))