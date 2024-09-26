<script>
  /** @type {string}*/
  export let quote;
  /** @type {string}*/
  export let author;
  /** @type {any} */
  export let action = null;

  /**
   *
   * @param event {KeyboardEvent}
   */
  function onKeydown(event) {
    if (event.key === "Enter") {
      if (action !== null) {
        action();
      }
    }
  }
</script>

<div
  title="Copy"
  on:click={action}
  on:keydown={onKeydown}
  role="button"
  tabindex="0"
>
  <blockquote class="quote">"{quote}"</blockquote>
  <p>&mdash; {author}</p>
</div>

<style>
  div {
    text-align: left;
    width: clamp(60vw, 75vw, 85vw);
    cursor: pointer;
  }

  .quote {
    font-size: clamp(1rem, 10vw, 3rem);
  }

  p {
    margin-top: 0.5rem;
  }
</style>
