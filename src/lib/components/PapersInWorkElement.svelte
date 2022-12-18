<script lang="ts">
  import {
    abilityAttributes,
    initialSettings,
    studentAttributes,
  } from "../../initialSettings";
  import { paperIsDone } from "../../paperUtils";
  import { gameState, finishedPapers } from "../../stores";
  import type { StartedPaper, studentList } from "../../types";
  import Bar from "./Bar.svelte";

  export let paper: StartedPaper;

  let currentAuthors = [];
  $: currentAuthors = Object.values($gameState.students).filter(
    (s) => s.assignedPaper?.id == paper.id
  );

  function submitPaper() {
    $finishedPapers.push(paper);
    $finishedPapers = $finishedPapers;
    dropPaper();
  }

  function dropPaper() {
    $gameState.workedOnPapers.delete(paper.id);
    $gameState.workedOnPapers = $gameState.workedOnPapers;
  }

  function handleDragPaperInWorks(e: DragEvent, paperId: string) {
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
        <span class="emoji-representation"
          >{abilityAttributes[ability].emojiRepresentation}</span
        >
        <div class="progress-container">
          <Bar
            spotValue={paper.progress.get(ability)}
            maxValue={initialSettings.paperDoneAt}
          />
        </div>
      </li>
    {/each}
  </ul>
  Currently assigned to
  {#if currentAuthors.length == 0}
    nobody.
  {/if}
  {#each currentAuthors as s, i}
    {studentAttributes[s.name].displayName}{#if i < currentAuthors.length - 1},<span> </span>{:else}.{/if}
  {/each}
  <br />
  {#if paperIsDone(paper)}
    <button on:click={submitPaper}>Submit!</button>
  {:else}
    <button on:click={dropPaper}>Drop idea</button>
  {/if}
</div>

<style>
  .progress-container {
    display: inline-block;
    width: calc(100% - 2vw);
  }
  .emoji-representation {
    width: 2vw;
  }
</style>
