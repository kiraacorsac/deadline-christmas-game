<script lang="ts">
    import { abilityAttributes } from "../../initialSettings";
    import type { BasePaper } from "../../types";

    export let paper: BasePaper;
</script>

<div class="paper">
    <div class="paper-name">{paper.name}{paper.name}</div>
    
    {#each paper.abilities as ability}
        {abilityAttributes[ability].emojiRepresentation}
    {/each}
</div>

<style>
    .paper-name {
        height: 2.4vw;
        overflow: hidden;
    }

    .paper {
        width: 15vw;
        height: 5vw;
        background-color: lightblue;
        margin: 0.4vw;
        padding: 0.4vw;
    }
</style>
