import { writable } from 'svelte/store';
import { initialGameState } from './initialSettings';
import type { GameScreen, GameState } from './types';



export const gameScreen = writable<GameScreen>("splash");

export const gameState = writable<GameState>(initialGameState);

export const onTick = writable<Array<(tick: number) => void>>([]);