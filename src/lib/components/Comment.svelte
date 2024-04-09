<script lang="ts">
  import Stars from "$lib/ui/Stars.svelte";
  import UserIcon from "$lib/ui/UserIcon.svelte";


    export let user:{
        name:string;
        id:number;
        img:string;
    }
    export let date:Date;
    export let images:string[];
    export let advantages:string;
    export let disadvantages:string;
    export let comment:string;
    export let rating:number
    
</script>

<div class="comment">
    <div class="comment__top">
        <div class="comment__user-data">
            <UserIcon url={user.img} userUrl={`user/${user.id}`}/>
            <span>{user.name}</span>
        </div>
        <div class="comment__other-data">
            <Stars rating={rating}/>
            <span>{`${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`}</span>
        </div>
    </div>
    <div class="comment__body">
        <div class="comment__left">
            <div class="comment__images">
                {#each images as item}
                    <div class="comment__image">
                        <img src={item} alt="">
                    </div>
                {/each}
            </div>
            <span>Достоинства: {advantages}</span>
            <span>Недостатки: {disadvantages}</span>
            <span>Коментарий: {comment}</span>
        </div>
    </div>
</div>

<style lang="scss">
    @import '../../styles.scss';
    .comment{
        display: flex;
        flex-direction: column;
        border-radius: 0.5rem;
        overflow: hidden;
        gap:0.5rem;
        >div{
            background-color:$Gray;
            padding: 0.5rem;
        }
    }
    .comment__top{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .comment__body{
        display: flex;
    }
    .comment__images{
        display: flex;
        gap: 0.5rem;
    }
    .comment__image{
        width: 100px;
        height: 100px;
        border-radius: 1rem;
        overflow: hidden;
        img{
            
            width: 100%;
            height: 100%;
        }
    }
    .comment__user-data{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        
    }
    .comment__other-data{
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }
    .comment__left{
        display: flex;
        gap: 0.5rem;
        flex-direction: column;
    }

</style>
