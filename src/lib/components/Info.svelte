<script lang="ts">
  import { abilityAttributes, studentAttributes } from "../../initialSettings";
  import { gameState } from "../../stores";

  let supervisorName = $gameState.supervisor;
  let abilities = [];
  for (let s of Object.values($gameState.students).filter((s) => s.selected)) {
    abilities.push(...studentAttributes[s.name].abilities);
  }
  abilities = [...new Set(abilities)];
</script>

<div class="supervisor-portrait">
  <img
    src={`images/supervisors/${supervisorName}.png`}
    alt={supervisorName}
    draggable="false"
    on:dragstart={() => false}
  />
</div>

<div class="info-text">
  You have submitted {$gameState.finishedPapers.length} paper{$gameState.finishedPapers
    .length == 1
    ? ""
    : "s"} so far.
</div>
<div class="info-text">
  Your team has the following abilities:
  <ul>
    {#each abilities as a}
      <li>
        {abilityAttributes[a].emojiRepresentation}
        {abilityAttributes[a].displayName}
      </li>
    {/each}
  </ul>
</div>

<style>
  img {
    width: 10vw;
  }

  .info-text {
    padding: 0.3vw;
  }
</style>
