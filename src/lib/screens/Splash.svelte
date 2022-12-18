<script lang="ts">
  import { gameScreen } from "../../stores";
  import type { GameScreen } from "../../types";

  function changeScreen(newScreen: GameScreen) {
    gameScreen.update((v) => newScreen);
  }
</script>

<div class="splash-screen">
  <div>
    <div class="title">The deadline at</div>
    <img
      class="visitlab-logo"
      src="images/visitlab_logo.png"
      alt="visitlab-logo"
    />
  </div>

  <div class="flavor">
    Visitlab haven't submited enough papers this year yet, and it's memebers
    need your managerial skills to help them write as many as they can before
    the New Year's Eve is here and the deadline is up. How many papers can you
    make them write?
  </div>

  <div class="buttons">
    <button on:click={() => changeScreen("rules")}>How to play</button>
    <button on:click={() => changeScreen("choose-supervisor")}
      >Start the game</button
    >
  </div>
</div>

<style>
  .title {
    font-size: 5vw;
  }
  .visitlab-logo {
    width: 40vw;
  }

  .buttons {
    margin: 2vw;
  }
  .splash-screen {
    height: 100%;
    display: flex;
    flex-direction: column;
    place-content: center;

  }

  .flavor {
    width: 50vw;
    margin: 4vw auto;
  }
</style>
