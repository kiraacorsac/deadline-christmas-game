<script lang="ts">
  import {
    abilityAttributes,
    initialSettings,
    studentAttributes,
  } from "../../initialSettings";
  import { gameState, onTick } from "../../stores";
  import { paperIsDone } from "../../paperUtils";
  import type {
    Ability,
    ActiveStudent,
    StartedPaper,
    Student,
  } from "../../types";
  export let studentName: Student;

  const student = $gameState.students[studentName];
  const attributes = studentAttributes[studentName];

  function getPossibleAbility(paper: StartedPaper): Ability {
    if (paper == undefined) {
      return undefined;
    }
    for (const neededAbility of paper.abilities) {
      if (
        attributes.abilities.includes(neededAbility) &&
        paper.progress.get(neededAbility) < initialSettings.paperDoneAt
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

    if (
      student.assignedPaper == undefined ||
      paperIsDone(student.assignedPaper)
    ) {
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
    student.motivation = Math.min(1000, student.motivation + 333);
    assignStatus();

    const work = getPossibleAbility(student.assignedPaper);
    if ($gameState.supervisor == "jirka" && work != undefined) {
      student.assignedPaper.progress.set(
        work,
        student.assignedPaper.progress.get(work) + 1
      );
    }

    setTimeout(() => {
      student.isWhipped = false;
    }, 250);
  }

  function tick(t: number) {
    let workToDo = getPossibleAbility(student.assignedPaper);
    assignStatus();

    if (workToDo && student.status == "working") {
      student.assignedPaper.progress.set(
        workToDo,
        student.assignedPaper.progress.get(workToDo) + 1
      );

      if ($gameState.supervisor == "marek" && t % 20 == 0) {
        student.assignedPaper.progress.set(
          workToDo,
          student.assignedPaper.progress.get(workToDo) + 1
        );
      }
      $gameState.students[studentName].assignedPaper = student.assignedPaper;
    }

    if (
      student.status == "confuzed" &&
      $gameState.supervisor == "katka" &&
      t % 10 == 0
    ) {
      const work = [...student.assignedPaper.progress.entries()].find(
        ([a, s]) => s < initialSettings.paperDoneAt
      )[0];

      student.assignedPaper.progress.set(
        work,
        student.assignedPaper.progress.get(work) + 1
      );
      $gameState.students[studentName].assignedPaper = student.assignedPaper;
    }
  }

  function assignPaper(e: DragEvent) {
    e.preventDefault();
    const paper = $gameState.workedOnPapers.get(
      e.dataTransfer.getData("text/plain")
    );
    $gameState.students[student.name].assignedPaper = paper;
    paper.authors.push(student.name);
    $gameState.students = $gameState.students;
  }
  $onTick.push(tick);
</script>

<div
  class="student"
  style:top={`${attributes.position.top}vw`}
  style:left={`${attributes.position.left}vw`}
  on:mousedown={whip}
  on:drop={(e) => assignPaper(e)}
  on:dragover={(e) => e.preventDefault()}
>
  <div>
    <img
      class="image"
      src={`images/lab/student/${
        student.isWhipped ? "whipped" : student.status
      }.png`}
      alt={student.status}
      draggable="false"
    />
  </div>

  <ul class="details">
    <li>{attributes.displayName}</li>
    <!-- <li>{student.motivation}</li> -->
    <li>
      {#each attributes.abilities as ability}
        {abilityAttributes[ability].emojiRepresentation}
      {/each}
    </li>
  </ul>
</div>

<style>
  .image {
    height: 9vw;
  }
  .student {
    background-color: none;
    position: absolute;
  }

  .details {
    background-color: white;
    border-radius: 1vw;
    text-align: center;
    padding-top: 0.2vw;
  }
</style>
