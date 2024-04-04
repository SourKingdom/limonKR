<script>
  export let url = "";
</script>

<div class="userImg">
  <img src={url} alt="" />
</div>

<style lang="scss">
  .userImg {
    width: 3rem;
    height: 3rem;
    border-radius: 0.5rem;
    overflow: hidden;
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>
