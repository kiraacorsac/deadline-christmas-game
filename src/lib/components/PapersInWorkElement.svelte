<script lang="ts">
    import { abilityEmojis } from "../../initialSettings";
    import type { StartedPaper } from "../../types";

    export let paper: StartedPaper;
</script>

<div>
    {paper.name}
    Abilities: {#each paper.abilities as ability}
        {abilityEmojis[ability]}
    {/each}
    Assigned: {paper.currentAuthor ?? "Nobody!"}
</div>
