<script lang="ts">
    import { gameState } from "../../stores";
    import PapersInWorkElement from "./PapersInWorkElement.svelte";
</script>

<div class="papers-in-work">
    {#each [...$gameState.workedOnPapers.values()] as paper}
        <PapersInWorkElement {paper} />
    {/each}
</div>

<style>
    .papers-in-work {
        overflow-y: auto;
        max-height: 35vw;
    }
</style>
