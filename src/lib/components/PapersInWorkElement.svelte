<script lang="ts">
  import { abilityAttributes } from "../../initialSettings";
  import { paperIsDone } from "../../paperUtils";
  import { gameState } from "../../stores";
  import type { StartedPaper } from "../../types";

  export let paper: StartedPaper;

  function submitPaper() {
    $gameState.finishedPapers.push(paper);
    $gameState.finishedPapers = $gameState.finishedPapers;
    dropPaper();
  }

  function dropPaper() {
    $gameState.workedOnPapers.delete(paper.id);
    $gameState.workedOnPapers = $gameState.workedOnPapers;
  }

  function handleDragPaperInWorks(e: DragEvent, paperId: string) {
    console.log(paperId);

    e.dataTransfer.setData("text/plain", paperId);
  }
</script>

<div draggable="true" on:dragstart={(e) => handleDragPaperInWorks(e, paper.id)}>
  {paper.name}
  <br />
  Progress:
  <ul>
    {#each paper.abilities as ability}
      <li>
        {abilityAttributes[ability].emojiRepresentation}
        {paper.progress.get(ability)}
      </li>
    {/each}
  </ul>
  <br />
  {#if paperIsDone(paper)}
    <button on:click={submitPaper}>Submit!</button>
  {:else}
    <button on:click={dropPaper}>Drop topic</button>
  {/if}
  <!-- Assigned: {paper.currentAuthor ?? "Nobody!"} -->
</div>
