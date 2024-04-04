<script lang="ts">
  export let rating: number;
  import StarSvg from "$lib/svg/starSvg.svelte";
  const count = 5;
  const stars = Array.from(Array(count), (_, index) =>
    index < rating ? true : false,
  );
</script>

<div>
  {#each stars as star}
    <StarSvg hovered={star} />
  {/each}
</div>

<style>
  div {
    display: flex;
    gap: 0.6rem;
  }
</style>
