<script lang="ts">
  import { gameState, gameScreen } from "../../stores";
  import { studentList, type GameScreen } from "../../types";

  import StudentPickElement from "../components/StudentPickElement.svelte";

  let studentNumber = $gameState.supervisor == "bara" ? 5 : 4;
  let remaining = studentNumber;
  let selected = 0;
  gameState.subscribe((v) => {
    selected = Object.values(v.students).filter((s) => s.selected).length;
    remaining = studentNumber - selected;
  });

  function changeScreen(newScreen: GameScreen) {
    gameScreen.update((v) => newScreen);
  }
</script>

<div class="wrapper">
  <h2>Choose {studentNumber} students ({remaining} remaining)</h2>

  <div class="student-picker">
    {#each studentList as studentName}
      <StudentPickElement {studentName} {remaining} />
    {/each}
  </div>

  <button on:click={() => (selected < studentNumber ? null : changeScreen("game"))}
    >Start the deadline {#if selected < studentNumber}
      (pick {studentNumber} student first){/if}</button
  >
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
