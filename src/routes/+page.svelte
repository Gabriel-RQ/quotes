<script>
  import { invalidateAll } from "$app/navigation";
  import { Quote, copyQuote } from "$lib";
  import { circOut } from "svelte/easing";
  import { scale } from "svelte/transition";

  /** @type  {import('./$types').PageData} */
  export let data;
</script>

<section in:scale={{ duration: 300, easing: circOut }} class="container">
  <Quote
    action={() => copyQuote(data.q, data.a)}
    quote={data.q}
    author={data.a}
  />

  <span>
    <button on:click={invalidateAll}>Get a new quote</button>
    <a href="/quotes">Check more quotes</a>
  </span>
</section>

<style>
  section {
    display: grid;
    place-content: space-around center;
    justify-items: center;
  }

  span {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
  }
</style>
