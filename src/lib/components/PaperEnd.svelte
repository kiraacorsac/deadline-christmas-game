<script lang="ts">
  import {
    abilityAttributes,
    studentAttributes,
    supervisorAttributes,
  } from "../../initialSettings";
  import type { StartedPaper } from "../../types";
  import { gameState } from "../../stores";

  export let paper: StartedPaper;
</script>

<div class="paper-end">
  <div class="paper-name">
    {paper.name}
  </div>
  <div class="hr" />
  <div>
    {#each paper.abilities as ability}
      <div>
        {abilityAttributes[ability].emojiRepresentation}
        {abilityAttributes[ability].displayName}
      </div>
    {/each}
  </div>
  <div class="hr" />
  <div>
    {#each paper.authors as author}
      {`${studentAttributes[author].displayName}, `}
    {/each}
    {supervisorAttributes[$gameState.supervisor].displayName}
  </div>
</div>

<style>
  .paper-name {
    font-weight: 800;
    font-size: 1.5rem;
  }

  .paper-end {
    width: 14vw;
    background-color: lightblue;
  }
</style>
