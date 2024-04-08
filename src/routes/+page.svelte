<script lang="ts">
  import { page } from "$app/stores";
  import { signOut } from "@auth/sveltekit/client";
  import Search from "../lib/containers/Search.svelte";
  import Button from "$lib/ui/Button.svelte";
</script>

<main class="main">
  <Search />
  {#if $page.data.session?.user}
    <Button on:click={() => signOut()}>Sign out</Button>
  {/if}
</main>

<style>
  .main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    padding: 1rem;
  }
</style>
