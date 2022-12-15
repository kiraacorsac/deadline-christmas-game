<script lang="ts">
    import { makePaper } from "../../paperMaker";
    import PaperSourceElement from "./PaperSourceElement.svelte";
</script>

<div class="paper-source">
    <PaperSourceElement paper={makePaper()} />
</div>

<style>
    .paper-source {
        margin: 0.4vw;
        border: 0.2vw darkblue solid;
        display: flex;
        /* place-content: center; */
        align-items: center;
    }
</style>
