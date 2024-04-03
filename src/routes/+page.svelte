<script lang="ts">
    import ButtonWIthElemt from "$lib/components/ui/ButtonWIthElemt.svelte";
    
</script>

<div class="">
    <ButtonWIthElemt on:click={()=>console.log("Clicked")}>
        <h1 >Добавить отзыв</h1>
    </ButtonWIthElemt>
</div>