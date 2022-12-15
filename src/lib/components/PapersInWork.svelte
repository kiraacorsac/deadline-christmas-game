<script lang="ts">
    import { gameState } from "../../stores";
    import PapersInWorkElement from "./PapersInWorkElement.svelte";
</script>

<div>
    {#each [...$gameState.workedOnPapers.values()] as paper}
        <PapersInWorkElement {paper} />
    {/each}
</div>
