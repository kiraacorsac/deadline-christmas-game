<script lang="ts">
    import { gameState, gameScreen} from "../../stores";
    import type { GameScreen } from "../../types";


    import StudentPickElement from "../components/StudentPickElement.svelte";

    console.log($gameState);
    let remaining = 4;
    gameState.subscribe(v => {
        remaining = 4 - Object.values(v.students).filter(s => s.selected).length;
    })

    function changeScreen(newScreen: GameScreen) {
        gameScreen.update((v) => newScreen);
    }
</script>

<h2>Choose up to 4 students ({remaining} remaining)</h2>

<StudentPickElement studentName="palko" remaining={remaining}/>
<StudentPickElement studentName="kiraa" remaining={remaining}/>

<button on:click={() => changeScreen("game")}>Continue</button>
