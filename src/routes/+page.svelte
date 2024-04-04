<script lang="ts">
  import { page } from "$app/stores";
</script>

{#if $page.data.session?.user != null}
  <h1>Logged in</h1>
{:else}
  <h1>Not logged in</h1>
{/if}
