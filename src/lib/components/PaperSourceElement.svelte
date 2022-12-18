<script lang="ts">
  import { onMount } from "svelte";
  import { abilityAttributes } from "../../initialSettings";
  import { gameState, onTick } from "../../stores";
  import type { PotentialPaper } from "../../types";

  export let paper: PotentialPaper;
  let hidden = false;

  function handleDragPaperNew(e: DragEvent, paperId: string) {
    $gameState.workedOnPapers.set(paperId, {
      ...paper,
      currentAuthor: null,
      progress: new Map([
        [paper.abilities[0], 0],
        [paper.abilities[1], 0],
        [paper.abilities[2], 0],
      ]),
      authors: [],
    });

    $gameState.workedOnPapers = $gameState.workedOnPapers;
    e.dataTransfer.setData("text/plain", paperId);
    paper.picked = true;
  }
  $onTick.push(() => {
    paper.life -= 1;
    if (paper.life <= 0) {
      hidden = false;
      $gameState.potentialPapers = $gameState.potentialPapers.filter(
        (p) => p.id != paper.id
      );
    }
  });
</script>

<div
  class="paper"
  style:left={`${(1000 - paper.life) / 10}vw`}
  on:dragstart={(e) => handleDragPaperNew(e, paper.id)}
  on:dragend={(e) => {
    hidden = true;
  }}
  class:hidden={paper.picked}
  draggable={!paper.picked}
>
  <div class="paper-name">{paper.name}</div>

  <div class="paper-abilities">
    {#each paper.abilities as ability}
      {abilityAttributes[ability].emojiRepresentation}
    {/each}
  </div>
</div>

<style>
  .paper-name {
    height: 3.6vw;
    overflow: hidden;
  }
  
  .paper-abilities {
    background: whitesmoke;
    border-radius: 1vw;
    padding: 0 0.4vw;
  }
  
  .hidden {
    opacity: 0.2;
  }

  .paper {
    position: absolute;
    width: 19vw;
    height: 6vw;
    background-color: lightblue;
    margin: 0.4vw;
    padding: 0.4vw;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    place-content: center;
    place-items: center;
  }
</style>
