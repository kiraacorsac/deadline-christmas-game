<script lang="ts">
  export let spotValue: number;
  export let maxValue: number;
</script>

<div
  class="bar"
  style:width="{(spotValue / maxValue) * 100}%"
  style:background-color={"darkblue"}
/>

<style>
  .bar {
    display: inline-block;
    height: 1vw;
    padding: 0.1vw;
    background-clip: content-box;
  }
</style>
