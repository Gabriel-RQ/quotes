<script>
  import { Quote, copyQuote } from "$lib";
  import { circOut } from "svelte/easing";
  import { scale } from "svelte/transition";

  /** @type  {import('./$types').PageData} */
  export let data;
</script>

<section in:scale={{ duration: 300, easing: circOut }} class="container">
  <a href="/">Back</a>

  <div>
    {#each data.quotes as quote}
      <Quote
        action={() => copyQuote(quote.q, quote.a)}
        quote={quote.q}
        author={quote.a}
      />
    {/each}
  </div>
</section>

<style>
  section {
    overflow: hidden;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 4rem 0;
    height: calc(100% - 4rem);
    overflow-y: scroll;
  }

  a {
    display: block;
    width: fit-content;
    margin-bottom: 2rem;
  }
</style>
