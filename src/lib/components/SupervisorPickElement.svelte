<script lang="ts">
  import { supervisorAttributes } from "../../initialSettings";
  import { gameState } from "../../stores";
  import type { Supervisor } from "../../types";

  export let supervisorName: Supervisor;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="supervisor-pick"
  class:selected={$gameState.supervisor == supervisorName}
  on:click={() => ($gameState.supervisor = supervisorName)}
>
  <img src={`images/supervisors/${supervisorName}.png`} alt={supervisorName} />
  {supervisorAttributes[supervisorName].displayName}
</div>

<style>
  .supervisor-pick {
    width: 11vw;
    font-size: 2rem;
    border-radius: 1vw;
    /* padding: 1vw; */
    border: white none;
  }

  .supervisor-pick:hover {
    border: 0.3vw solid whitesmoke;
    transition: 120ms;
  }

  .supervisor-pick > img {
    width: 100%;
    border-radius: 1vw;
  }

  .selected,
  .selected:hover {
    border: 0.3vw solid darkblue;
    transition: 120ms;
  }
</style>
