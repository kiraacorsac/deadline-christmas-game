<script lang="ts">
  import { makePaper } from "../../paperMaker";
  import { gameState, onTick } from "../../stores";
  import PaperSourceElement from "./PaperSourceElement.svelte";

  $onTick.push((t) => {
    if (t % 200 == 0) {
      $gameState.potentialPapers.push(makePaper());
      $gameState.potentialPapers = $gameState.potentialPapers;
      console.log($gameState.potentialPapers)
    }
  });
</script>

<div class="paper-source">
  {#each $gameState.potentialPapers as paper}
    <PaperSourceElement {paper} />
  {/each}
</div>

<style>
  .paper-source {
    margin: 0.4vw;
    border: 0.2vw darkblue solid;
    position: absolute;
    display: flex;
    width: calc(100% - 0.8vw);
    height: 5.5vw;
    overflow: hidden;
    /* place-content: center; */
    align-items: center;
  }
</style>
