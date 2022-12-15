<script lang="ts">
  import { abilityAttributes } from "../../initialSettings";
  import { gameState, onTick } from "../../stores";
  import type { PotentialPaper } from "../../types";

  export let paper: PotentialPaper;

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
  }

  $onTick.push(() => {
    paper.life -= 1;
    if(paper.life <= 0){
        $gameState.potentialPapers = $gameState.potentialPapers.filter(p => p.id != paper.id)
    }
  });
</script>

<div
  class="paper"
  style:left={`${(1000-paper.life)/10}vw`}
  on:dragstart={(e) => handleDragPaperNew(e, paper.id)}
  draggable="true"
>
  <div class="paper-name">{paper.name}{paper.name}</div>

  {#each paper.abilities as ability}
    {abilityAttributes[ability].emojiRepresentation}
  {/each}
  {paper.life}
</div>

<style>
  .paper-name {
    height: 2.4vw;
    overflow: hidden;
  }

  .paper {
    position: absolute;
    width: 15vw;
    height: 5vw;
    background-color: lightblue;
    margin: 0.4vw;
    padding: 0.4vw;
    flex-shrink: 0;
  }
</style>
