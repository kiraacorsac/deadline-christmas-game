<script lang="ts">
  import { studentAttributes, abilityAttributes } from "../../initialSettings";
  import { gameState } from "../../stores";
  import type { Student } from "../../types";

  export let studentName: Student;
  export let remaining: number;

  let abilities =
    studentAttributes[$gameState.students[studentName].name].abilities;

  function toggleStudentSelection() {
    gameState.update((v) => {
      const isSelected = v.students[studentName].selected;
      if (remaining <= 0 && !isSelected) {
        return v;
      }
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
<div
  class="student-pick"
  class:selected={$gameState.students[studentName].selected}
  on:click={toggleStudentSelection}
>
  <img
    src={`images/students/${studentName}.png`}
    alt={studentName}
    draggable="false"
    on:dragstart={() => false}
  />
  {studentAttributes[studentName].displayName}

  <ul class="abilities">
    {#each abilities as a}
      <li>
        {abilityAttributes[a].emojiRepresentation}{abilityAttributes[a]
          .displayName}
      </li>
    {/each}
  </ul>
</div>

<style>
  .student-pick {
    width: 11vw;
    font-size: 2rem;
    border-radius: 1vw;
    padding: 1vw;
    border: white none;
    transition: 120ms;
  }
  .student-pick:hover {
    border: 0.3vw solid whitesmoke;
  }

  .student-pick > img {
    width: 100%;
    border-radius: 1vw;
  }

  .selected,
  .selected:hover {
    border: 0.3vw solid darkblue;
    transition: 120ms;
  }

  .abilities {
    margin-top: 2vw;
    font-size: 1.3rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: left;

    border: aliceblue 0.3vw solid;
  }
  ul :nth-child(odd) {
    background-color: aliceblue;
  }

  li {
    /* height: 3.3vw; */
    padding: 0.6vw;
    margin: -0.1vw;
    font-size: 1rem;
  }
</style>
