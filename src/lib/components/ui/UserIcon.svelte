<script>
    export let url = '';
</script>

<div class="userImg">
    <img src={url} alt="">
</div>

<style lang="scss">
    .userImg{
        width: 40px;
        height: 40px;
        border-radius: 8px;
        overflow: hidden;
        >img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
</style>