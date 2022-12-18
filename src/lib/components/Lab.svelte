<script lang="ts">
  import Student from "./Student.svelte";
  import { gameState } from "../../stores";

  // gameState.adssda
</script>

<div class="wrapper">
  {#each Object.values($gameState.students).filter((s) => s.selected) as student}
    <Student studentName={student.name} />
  {/each}
</div>

<style>
  .wrapper {
    background-image: url("images/lab/background.jpg");
    background-size: contain;
    background-repeat: no-repeat;
    height: 100%;
    width: 49.3vw;
  }
</style>
