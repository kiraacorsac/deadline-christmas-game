<script lang="ts">
  import { gameState } from "../../stores";
  export let deadlineLength;
</script>

<div
  class="deadline-counter"
  style:width="{($gameState.ticks / deadlineLength) * 100}%"
  style:background-color={$gameState.ticks > deadlineLength - 300
    ? "darkred"
    : "darkblue"}
/>

<style>
  .deadline-counter {
    height: 100%;
    padding: 0.4vw;
    background-clip: content-box;
    transition: 0.4s;
  }
</style>
