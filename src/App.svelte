<script lang="ts">
  import ChooseStudents from "./lib/screens/ChooseStudents.svelte";
  import ChooseSupervisor from "./lib/screens/ChooseSupervisor.svelte";
  import End from "./lib/screens/End.svelte";
  import Game from "./lib/screens/Game.svelte";
  import Rules from "./lib/screens/Rules.svelte";
  import Splash from "./lib/screens/Splash.svelte";
  import { gameScreen } from "./stores";

  let isWhipped = false;
</script>

<main
  class:whipped={isWhipped}
  on:mousedown={() => {
    isWhipped = true;
  }}
  on:mouseup={() => {
    isWhipped = false;
  }}
  on:mouseleave={() => {
    isWhipped = false;
  }}
>
  {#if $gameScreen == "splash"}
    <Splash />
  {:else if $gameScreen == "rules"}
    <Rules />
  {:else if $gameScreen == "choose-supervisor"}
    <ChooseSupervisor />
  {:else if $gameScreen == "choose-students"}
    <ChooseStudents />
  {:else if $gameScreen == "game"}
    <Game />
  {:else if $gameScreen == "end"}
    <End />
  {/if}
</main>

<style>
  main {
    width: calc(16 * 5.2vw);
    height: calc(9 * 5.2vw);
    background-color: white;
    cursor: url("images/cursors/cursor-bara.png") 117 12, auto;
  }

  .whipped {
    cursor: url("images/cursors/cursor-bara-click.png") 100 45, auto;
  }
</style>
