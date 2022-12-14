<script lang="ts">
    import { gameScreen } from "../../stores";
    import type { GameScreen } from "../../types";


    function changeScreen(newScreen: GameScreen){
        gameScreen.update(v => newScreen);
    }
</script>

<button on:click={() => changeScreen("rules")}>How to play</button>
<button on:click={() => changeScreen("choose-supervisor")}>Start the game</button>