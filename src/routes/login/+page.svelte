<script>
  import { signIn, signOut } from "@auth/sveltekit/client";
  import { page } from "$app/stores";
  import Button from "$lib/components/ui/Button.svelte";
</script>

{#if $page.data.session?.user}
  <p>Signed in as {$page.data.session.user.email}</p>
  <Button on:click={() => signOut()}>Sign out</Button>
{:else}
  <p>Not signed in.</p>
  <Button on:click={() => signIn("google")}>Sign in</Button>
{/if}
