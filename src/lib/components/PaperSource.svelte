<script lang="ts">
  import _ from "lodash";
  import { initialSettings } from "../../initialSettings";
  import { makePaper } from "../../paperUtils";
  import { gameState, onTick, selectedStudentsAbilities } from "../../stores";
  import { abilityList } from "../../types";
  import PaperSourceElement from "./PaperSourceElement.svelte";

  $onTick.push((t) => {
    if (t % 200 == 0) {
      $gameState.potentialPapers.push(
        makePaper($selectedStudentsAbilities, _.difference(abilityList, $selectedStudentsAbilities))
      );
      $gameState.potentialPapers = $gameState.potentialPapers;
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
    height: 7vw;
    overflow: hidden;
    /* place-content: center; */
    align-items: center;
  }
</style>
