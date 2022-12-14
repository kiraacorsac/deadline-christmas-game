<script lang="ts">
    import { gameState } from "../../stores";
</script>

<div
    class="deadline-counter"
    style:width="{($gameState.ticks / $gameState.deadlineLength) * 100}%"
    style:background-color={$gameState.ticks > $gameState.deadlineLength - 300
        ? "darkred"
        : "darkblue"}
/>

<style>
    .deadline-counter {
        height: 2vw;
        padding: 0.4vw;
        background-clip: content-box;
    }
</style>
