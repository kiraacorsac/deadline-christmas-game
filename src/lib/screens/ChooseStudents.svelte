<script lang="ts">
  import { gameState, gameScreen } from "../../stores";
  import { studentList, type GameScreen } from "../../types";

  import StudentPickElement from "../components/StudentPickElement.svelte";

  console.log($gameState);
  let remaining = 4;
  gameState.subscribe((v) => {
    remaining = 4 - Object.values(v.students).filter((s) => s.selected).length;
  });

  function changeScreen(newScreen: GameScreen) {
    gameScreen.update((v) => newScreen);
  }
</script>

<div class="wrapper">
  <h2>Choose up to 4 students ({remaining} remaining)</h2>

  <div class="student-picker">
    {#each studentList as studentName}
      <StudentPickElement {studentName} {remaining} />
    {/each}
  </div>

  <button on:click={() => changeScreen("game")}>Continue</button>
</div>

<style>
  .wrapper {
    padding: 1vw;
  }
  .student-picker {
    display: flex;
    place-content: center;
    gap: 0.1vw;
    margin-top: 4vw;
    margin-bottom: 2vw;
  }
</style>
