<script lang="ts">
  import { gameScreen } from "../../stores";
  import type { GameScreen } from "../../types";

  let page = 1;
</script>

<div>
  {#if page == 1}
    <img />
    <p>
      Merry Christmas and welcome to our lab. This year, we prepared a short
      paper writing game. Don’t be scared, there will be no actual writing.
      Instead, you will be the main motivator our our group. Firstly, select a
      senior member from our lab to be your character. Ever member has a unique
      talent that has impact on the gameplay.
    </p>
  {:else if page == 2}
    <img />

    <p>
      These are the Ph.D. students of the visitlab. Be aware of their
      (dis)abilities, as they will be crutial for a successful completion of
      your papers. These abilities are represented by emojis. Please select up
      to four students to write papers for you.
    </p>
  {:else if page == 3}
    <img />
    <p>
      This is our lab, your students are seated and ready to work. Your ideas
      are rolling on the top panel, you can assign them to the students by
      simple drag&drop. Once you drag an idea from the top, the lab starts
      working on it, and you should do your best to turn it into a paper! It
      will appear on the right panel, along with a list of needs covered by your
      students' abilities. Be aware, multiple student with multiple abilities
      are required to complete most of the papers. Note that some of the ideas
      offered to you will have needs that none of your selected students'
      abilities cover! Such an idea can not result in a completed paper in your
      lab.
    </p>
    <p>
      Be effective and assign one paper to more students at the same time. And
      of course, please work on as many papers in the same time as you can until
      the time is up.
    </p>
  {:else if page == 4}
    <img />
    <p>
      Ready, steady.. but before we start, one last piece of advice: studens are
      lazy, motivate them with your Christmas whip!
    </p>
  {/if}
</div>

{#if page < 4}
  <button on:click={() => (page += 1)}>Next page</button>
{/if}
<button on:click={() => ($gameScreen = "splash")}>Back to splash screen</button>
