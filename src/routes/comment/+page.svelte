<script lang="ts">
    import Comments from '$lib/containers/Comments.svelte';
import type { PageData } from './$types';
    
</script>


<main class="main">
   <Comments/>
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