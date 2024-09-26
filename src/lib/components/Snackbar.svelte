<script>
  import { scale, fly } from "svelte/transition";

  /** @type {boolean} */
  export let open = false;
</script>

{#if open}
  <span in:scale out:fly={{ y: 25 }}>
    <slot name="content" />
  </span>
{/if}

<style>
  span {
    background: var(--font-color);
    bottom: 4rem;
    border-radius: 1.5rem;
    box-shadow: #fdfdfd 0 0 0.35rem 2px;
    color: var(--bg-color);
    left: 50%;
    padding: 1rem 0.75rem;
    position: absolute;
    transform: translateX(-50%);
    z-index: 10;
  }
</style>
