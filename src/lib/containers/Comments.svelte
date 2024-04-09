<script lang="ts">
  import Comment from "$lib/components/Comment.svelte";

    interface IComments{
        id: number;
        user:{
            name:string;
            img:string;
            id:number;
        }
        date:Date;
        images:string[];
        advantages:string;
        disadvantages:string;
        comment:string;
        rating:number
    }
    let Comments: IComments[] = [
        {
            id:1,
            user:{
                img:'https://p16-capcut-sign-va.ibyteimg.com/tos-maliva-v-be9c48-us/oQCBHfDbFA62WY3TA11MDC6pVxmIQJAfQl732E~tplv-nhvfeczskr-1:250:0.webp?lk3s=44acef4b&x-expires=1735045602&x-signature=gB8TYMK0%2B0GyrkG54Leouw9SL6M%3D',
                name:'Rula',
                id:1
                },
            date: new Date(),
            images:['https://p16-capcut-sign-va.ibyteimg.com/tos-maliva-v-be9c48-us/oQCBHfDbFA62WY3TA11MDC6pVxmIQJAfQl732E~tplv-nhvfeczskr-1:250:0.webp?lk3s=44acef4b&x-expires=1735045602&x-signature=gB8TYMK0%2B0GyrkG54Leouw9SL6M%3D','https://p16-capcut-sign-va.ibyteimg.com/tos-maliva-v-be9c48-us/oQCBHfDbFA62WY3TA11MDC6pVxmIQJAfQl732E~tplv-nhvfeczskr-1:250:0.webp?lk3s=44acef4b&x-expires=1735045602&x-signature=gB8TYMK0%2B0GyrkG54Leouw9SL6M%3D'],
            advantages:'Отличный',
            disadvantages:'нету',
            comment:'ля кнопку нажитпб',
            rating:5,
        },
        {
            id:1,
            user:{
                img:'https://p16-capcut-sign-va.ibyteimg.com/tos-maliva-v-be9c48-us/oQCBHfDbFA62WY3TA11MDC6pVxmIQJAfQl732E~tplv-nhvfeczskr-1:250:0.webp?lk3s=44acef4b&x-expires=1735045602&x-signature=gB8TYMK0%2B0GyrkG54Leouw9SL6M%3D',
                name:'Rula',
                id:1
                },
            date: new Date(),
            images:['https://p16-capcut-sign-va.ibyteimg.com/tos-maliva-v-be9c48-us/oQCBHfDbFA62WY3TA11MDC6pVxmIQJAfQl732E~tplv-nhvfeczskr-1:250:0.webp?lk3s=44acef4b&x-expires=1735045602&x-signature=gB8TYMK0%2B0GyrkG54Leouw9SL6M%3D','https://p16-capcut-sign-va.ibyteimg.com/tos-maliva-v-be9c48-us/oQCBHfDbFA62WY3TA11MDC6pVxmIQJAfQl732E~tplv-nhvfeczskr-1:250:0.webp?lk3s=44acef4b&x-expires=1735045602&x-signature=gB8TYMK0%2B0GyrkG54Leouw9SL6M%3D'],
            advantages:'Отличный',
            disadvantages:'нету',
            comment:'ля кнопку нажитпб',
            rating:5,
        }
    ]
</script>

<div class="comments">
    <div class="comments__top">
        <h2>Отзывы</h2>
    </div>
    <div class="comments__body">
        {#each Comments as item}
            <Comment
                {...item}
            />
        {/each}
    </div>
</div>

<style lang="scss">
    @import '../../styles.scss';
    .comments{
        padding: 1rem;
        border-radius: 0.5rem;
        background-color:$Black;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .comments__body{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>
