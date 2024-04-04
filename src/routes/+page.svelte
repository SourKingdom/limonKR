<script lang="ts">
  import { page } from "$app/stores";
  import Search from "../lib/containers/Search.svelte";
</script>

{#if $page.data.session?.user != null}
  <h1>Logged in as {$page.data.session.user.name}</h1>
{:else}
  <h1>Not logged in</h1>
{/if}
<a href="/login"><h1>Go to login page</h1></a>

<main class="main">
  <Search />
</main>

<style>
  .main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
</style>
