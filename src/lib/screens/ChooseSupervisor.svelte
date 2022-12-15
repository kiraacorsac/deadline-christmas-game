<script lang="ts">
  import { gameScreen } from "../../stores";
  import { supervisorList, type GameScreen } from "../../types";
  import SupervisorPickElement from "../components/SupervisorPickElement.svelte";

  function changeScreen(newScreen: GameScreen) {
    gameScreen.update((v) => newScreen);
  }
</script>

<div class="wrapper">
  <h2>Choose the supervisor</h2>

  <div class="supervisor-picker">
    {#each supervisorList as supervisorName}
      <SupervisorPickElement {supervisorName} />
    {/each}
  </div>
</div>

<button on:click={() => changeScreen("choose-students")}>Continue</button>

<style>
  .wrapper {
    padding: 1vw;
  }
  .supervisor-picker {
    display: flex;
    place-content: center;
    gap: 2vw;
    margin-top: 4vw;
    margin-bottom: 2vw;
  }
</style>
