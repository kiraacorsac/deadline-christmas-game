<script lang="ts">
    import { gameState } from "../../stores";
    import type { Supervisor } from "../../types";



    export let supervisorName: Supervisor;

    function setSupervisor(supervisor: Supervisor){
        gameState.update(v => {
            v.supervisor = supervisor
            return v;
        });
    }
</script>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={() => setSupervisor(supervisorName)}>
    {supervisorName}
</div>