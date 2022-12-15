<script lang="ts">
  import { abilityAttributes } from "../../initialSettings";
  import type { StartedPaper } from "../../types";

  export let paper: StartedPaper;
</script>

<div>
  {paper.name}
  <br />
  Abilities:
  {#each paper.abilities as ability}
    {abilityAttributes[ability].emojiRepresentation}
  {/each}
  <br />
  Assigned: {paper.currentAuthor ?? "Nobody!"}
</div>
