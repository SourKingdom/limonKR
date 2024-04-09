<script lang="ts">
  export let url:string;
  export let userUrl:string = '';
</script>

<a href={`http://localhost:5173/user/${userUrl}`} class="userImg">
  <img src={url} alt="" />
</a>

<style lang="scss">
  .userImg {
    display: block;
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
