<script lang="ts">
    import { gameScreen } from "../../stores";
    import type { GameScreen } from "../../types";

    function changeScreen(newScreen: GameScreen) {
        gameScreen.update((v) => newScreen);
    }
</script>

<p>
You whip the students and they like it.
</p>

<button on:click={() => changeScreen("splash")}>Back to splash screen</button>