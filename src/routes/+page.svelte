<script lang="ts">
    import UserIcon from "$lib/components/ui/UserIcon.svelte";
    import Search from "../containers/main/search-section/search.svelte";
    
</script>


<main class="main">
    <Search/>
</main>

<style>
    .main{
         width: 100%;
         height: 100%;
         display: flex;
         flex-direction: column;
         padding: 1rem;
    }
</style>