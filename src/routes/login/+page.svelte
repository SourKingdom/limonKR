<script>
  import { signIn, signOut } from "@auth/sveltekit/client";
  import { page } from "$app/stores";
  import Button from "$lib/ui/Button.svelte";
  import { redirect } from "@sveltejs/kit";
</script>
  <div class="wrapper">
    <div class="window">
      <h1>Вход</h1>
      <Button on:click={() => signIn("google", { callbackUrl: '/' })}>Войти</Button>
      <span>В данный момент поддерживается аутентификация толькуо через Google</span>
    </div>
  </div>

<style lang="scss">
  @import '../../styles.scss';
  .wrapper{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .window{
    position:absolute;
    background-color:$Black;
    width: 400px;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 0.5rem;
    gap: 1rem;
  }
  span{
    text-align: center;
  }
</style>