<script lang="ts">
  import ChooseStudents from "./lib/screens/ChooseStudents.svelte";
  import ChooseSupervisor from "./lib/screens/ChooseSupervisor.svelte";
  import End from "./lib/screens/End.svelte";
  import Game from "./lib/screens/Game.svelte";
  import Rules from "./lib/screens/Rules.svelte";
  import Splash from "./lib/screens/Splash.svelte";
  import { gameScreen, gameState } from "./stores";
</script>

<main>
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
</style>
