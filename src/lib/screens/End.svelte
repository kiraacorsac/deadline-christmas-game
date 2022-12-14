<script lang="ts">
    import { gameState, gameScreen } from "../../stores";
    import PaperEnd from "../components/PaperEnd.svelte";
</script>

<div>
    <h2>
        You have submitted {$gameState.finishedPapers.length} papers for the visualization
        conference.
    </h2>
    <p>Maybe some of them get accepted?</p>

    <button
        on:click={() => {
            $gameScreen = "splash";
        }}>Play Again</button
    >
    <button>Submit Score???</button>

    <div>
        {#each $gameState.finishedPapers as paper}
            <PaperEnd {paper} />
        {/each}
    </div>
</div>


<style>
    
</style>