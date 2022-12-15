<script lang="ts">
  import { studentAttributes } from "../../initialSettings";
  import { onTick } from "../../stores";
  import type { Ability, ActiveStudent, StartedPaper } from "../../types";
  export let student: ActiveStudent;

  const attributes = studentAttributes[student.name];

  function getPossibleAbility(paper: StartedPaper): Ability {
    for (const neededAbility of paper.abilities) {
      if (
        attributes.abilities.includes(neededAbility) &&
        paper.progress.get(neededAbility) < 100
      ) {
        // paper.progress.set(neededAbility, paper.progress.get(neededAbility) + 1)
        return neededAbility;
      }
    }
    return undefined;
  }

  function assignStatus() {
    if (student.motivation <= 0) {
      student.status = "slacking";
      return;
    }

    if (student.assignedPaper == undefined) {
      student.status = "idle";
      return;
    }

    if (getPossibleAbility(student.assignedPaper)) {
      student.status = "working";
    } else {
      student.status = "confuzed";
    }
  }

  function whip() {
    student.isWhipped = true;
    student.motivation = Math.min(100, student.motivation + 50);
    assignStatus();
    setTimeout(() => {
      student.isWhipped = false;
    }, 250);
  }

  function tick() {
    let workToDo = getPossibleAbility(student.assignedPaper);
    assignStatus();
    if(workToDo){
        student.assignedPaper.progress[workToDo] += 1;
    }

  }

  $onTick.push(tick);
</script>

<div
  class="student"
  style:top={`${attributes.position.top}vw`}
  style:left={`${attributes.position.left}vw`}
  on:mousedown={whip}
>
  <div>
    <img
      class="image"
      src={`images/lab/student/${student.isWhipped ? 'whipped' : student.status}.png`}
      alt={student.status}
    />
  </div>

  {student.name}
  {student.status}
</div>

<style>
  .image {
    height: 9vw;
  }
  .student {
    background-color: none;
    position: absolute;
  }
</style>
