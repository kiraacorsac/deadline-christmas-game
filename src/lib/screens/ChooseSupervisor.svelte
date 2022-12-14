<script lang="ts">
    import { gameScreen } from "../../stores";
    import type { GameScreen } from "../../types";
    import SupervisorPickElement from "../components/SupervisorPickElement.svelte";

    function changeScreen(newScreen: GameScreen) {
        gameScreen.update((v) => newScreen);
    }
</script>

<h2>Choose the supervisor</h2>

<SupervisorPickElement supervisorName="bara" />
<SupervisorPickElement supervisorName="honza" />


<button on:click={() => changeScreen("choose-students")}>Continue</button>
