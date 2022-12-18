<script lang="ts">
  import { gameState, gameScreen, finishedPapers } from "../../stores";
  import PaperEnd from "../components/PaperEnd.svelte";
</script>

<div class="endscreen">
  <h2>
    You have submitted {$finishedPapers.length}
    paper{$finishedPapers.length == 1 ? "" : "s"} for the visualization conference.
  </h2>
  <p>Maybe some of them get accepted?</p>

  <button
    on:click={() => {
      $finishedPapers = [];
      $gameScreen = "splash";
    }}>Play Again</button
  >
  <button>Submit Score???</button>

  <div class="papers">
    {#each $finishedPapers as paper}
      <PaperEnd {paper} />
    {/each}
  </div>
</div>

<style>
  .endscreen {
    height: 100%;
    overflow-y: scroll;
  }

  .papers {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    place-content: center;
    gap: 0.5vw;
    margin: 1vw;
  }
</style>
