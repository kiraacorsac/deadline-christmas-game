<script lang="ts">
    import { gameState } from "../../stores";
    import type { Student } from "../../types";




    export let studentName: Student;
    export let remaining: number;

    function toggleStudentSelection() {
        gameState.update((v) => {
            if (remaining <= 0) {
                return v;
            }
            const isSelected = v.students[studentName].selected;
            const newStudents = {
                ...v.students,
            };
            newStudents[studentName].selected = !isSelected;

            v.students = newStudents;
            return v;
        });
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={toggleStudentSelection}>
    <p>
        {studentName}
    </p>
    <br />
    <p>
        {#if $gameState.students[studentName].selected}
            Selected
        {/if}
        <br />
        {$gameState.students[studentName].abilities[0]}
        {$gameState.students[studentName].abilities[1]}
        {$gameState.students[studentName].abilities[2]}
    </p>
</div>
