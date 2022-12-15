<script lang="ts">
  import { onMount } from "svelte";
  import { initialGameState } from "../../initialSettings";
  import { gameScreen, gameState, onTick } from "../../stores";
  import DeadlineCounter from "../components/DeadlineCounter.svelte";
  import Info from "../components/Info.svelte";
  import Lab from "../components/Lab.svelte";
  import PapersInWork from "../components/PapersInWork.svelte";
  import PaperSource from "../components/PaperSource.svelte";

  function tick() {
    for (const f of $onTick) {
      f();
    }
  }

  onMount(() => {
    $onTick.push(() => {
      // $gameState.ticks += 1;
    });

    $onTick.push(() => {
      if ($gameState.ticks == $gameState.deadlineLength + 1) {
        $gameScreen = "end";
      }
    });

    $onTick.push(() => {
        for(const student of Object.values($gameState.students)){
            student.motivation =-1;
        }
    })

    $gameState.ticks = initialGameState.ticks;
    const interval = setInterval(tick, 10);
    return () => {
      clearTimeout(interval);
      $gameState = initialGameState;
      $onTick = [];
    };
  });
</script>

<div class="wrapper">
  <div class="deadline">
    <DeadlineCounter />
  </div>
  <div class="new-papers">
    <PaperSource />
  </div>
  <div class="info">
    <Info />
  </div>
  <div class="lab">
    <Lab />
  </div>
  <div class="counter">
    <PapersInWork />
  </div>
</div>

<style>
  .wrapper {
    height: 100%;
    display: grid;
    grid-template-columns: 0.5fr 1fr 0.75fr;
    grid-template-rows: 0.075fr 0.175fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      "deadline deadline deadline"
      "new-papers new-papers new-papers"
      "info lab counter";
  }
  .deadline {
    grid-area: deadline;
  }
  .new-papers {
    grid-area: new-papers;
  }
  .lab {
    grid-area: lab;
    display: flex;
    place-content: center;
  }

  .info {
    place-content: info;
  }
  .counter {
    grid-area: counter;
  }
</style>
