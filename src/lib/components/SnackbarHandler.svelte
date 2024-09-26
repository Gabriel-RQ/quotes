<script>
  import { Snackbar, snackbarHandlerStore } from "$lib";
</script>

<Snackbar open={$snackbarHandlerStore.open}>
  <svelte:fragment slot="content">
    {$snackbarHandlerStore.content}
  </svelte:fragment>
</Snackbar>
