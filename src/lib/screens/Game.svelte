<script lang="ts">
  import _, { cloneDeep } from "lodash";
  import { onMount } from "svelte";
  import { initialGameState, initialSettings } from "../../initialSettings";
  import { gameScreen, gameState, onTick } from "../../stores";
  import DeadlineCounter from "../components/DeadlineCounter.svelte";
  import { setInterval, clearInterval } from "requestanimationframe-timer";
  import Info from "../components/Info.svelte";
  import Lab from "../components/Lab.svelte";
  import PapersInWork from "../components/PapersInWork.svelte";
  import PaperSource from "../components/PaperSource.svelte";

  let audio: HTMLAudioElement;
  let tickInterval: number;

  const realDeadlineLength =
    $gameState.supervisor == "honza"
      ? initialSettings.deadlineLength + 10_00
      : initialSettings.deadlineLength;

  function tick() {
    const tick = $gameState.ticks;
    for (const f of $onTick) {
      f(tick);
    }
  }

  onMount(() => {
    $onTick.push(() => {
      $gameState.ticks += 1;
    });

    $onTick.push(() => {
      if ($gameState.ticks == realDeadlineLength + 1) {
        $gameScreen = "end";
      }
    });

    $onTick.push(() => {
      for (const student of Object.values($gameState.students)) {
        student.motivation = Math.max(-1000, student.motivation - 1);
      }
    });

    if ($gameState.supervisor == "david") {
      $onTick.push((t) => {
        if (t % 10 != 0) {
          return;
        }

        const paperOfChoiceId = _.shuffle([
          ...$gameState.workedOnPapers.keys(),
        ])[0];

        if (paperOfChoiceId == undefined) {
          return;
        }

        const paperOfChoice = $gameState.workedOnPapers.get(paperOfChoiceId);
        const needOfChoice = _.shuffle([...paperOfChoice.progress.keys()])[0];
        const progress = paperOfChoice.progress.get(needOfChoice);
        if (progress < initialSettings.paperDoneAt) {
          paperOfChoice.progress.set(needOfChoice, progress + 1);
        }
      });
    }

    audio.play();

    window.onblur = (e) => {
      audio.pause();
      clearInterval(tickInterval);
    };

    window.onfocus = (e) => {
      audio.play();
      tickInterval = setInterval(tick, 10);
    };

    $gameState.ticks = 0;
    tickInterval = setInterval(tick, 10);
    return () => {
      clearInterval(tickInterval);
      $gameState = cloneDeep(initialGameState);
      $onTick = [];
      window.onblur = () => {};
      window.onfocus = () => {};
    };
  });
</script>

<audio src="audio/timer_music.mp3" bind:this={audio} />

<div class="wrapper">
  <div class="deadline">
    <DeadlineCounter deadlineLength={realDeadlineLength} />
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
  <div class="in-work">
    <PapersInWork />
  </div>
</div>

<style>
  .wrapper {
    height: 100%;
    display: grid;
    grid-template-columns: 0.5fr 1fr 0.75fr;
    grid-template-rows: 0.05fr 0.21fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      "deadline deadline deadline"
      "new-papers new-papers new-papers"
      "info lab in-work";
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
  .in-work {
    grid-area: in-work;
    height: 100%;
  }
</style>
