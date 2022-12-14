<script lang="ts">
    import { onMount } from "svelte";
    import { initialGameState } from "../../initialSettings";
    import { gameScreen, gameState, onTick } from "../../stores";
    import DeadlineCounter from "../components/DeadlineCounter.svelte";
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
            $gameState.ticks += 1;
        });

        $onTick.push(() => {
            if ($gameState.ticks == $gameState.deadlineLength + 1) {
                $gameScreen = "end";
            }
        });

        $gameState.ticks = 0;
        const interval = setInterval(tick, 10);
        return () => {
            clearTimeout(interval);
            $gameState = initialGameState;
            $onTick = [];
        };
    });
</script>

<DeadlineCounter />
<PaperSource />
<Lab />
<PapersInWork />
