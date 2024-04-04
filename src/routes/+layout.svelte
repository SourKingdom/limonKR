<script lang="ts">
    import ButtonWIthElemt from "$lib/components/ui/ButtonWIthElemt.svelte";
import UserIcon from "$lib/components/ui/UserIcon.svelte";

    
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400..800&display=swap');
    @import '../styles.scss';
    .main{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background-color:$Gray;
        

    }
    :global(body) {
        width: 100%;
        height: 100%;
        min-height: 100vh;
        padding: 0;
        margin: 0;
    }
    :global(*) {
        color: $White;
        font-size:1rem;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Rubik", sans-serif;
        font-weight: 400; 
    }
    
    header{
        display: flex;
        justify-content: space-between;
        padding: 0.75rem 2rem;
        width: 100%;
        background-color: $Black;
        :last-child{
            display: flex;
            gap:1rem;
        }
    }
    .wrapper{
        max-width: 1350px;
        width: 100%;
        height: 100%;
        margin: 0 auto;
    }
</style>

<div class="main">
    <header>
        <div class="">

        </div>
        <div class="">
            <ButtonWIthElemt>Добавить отзыв</ButtonWIthElemt>
            <UserIcon url='https://p16-capcut-sign-va.ibyteimg.com/tos-maliva-v-be9c48-us/oQCBHfDbFA62WY3TA11MDC6pVxmIQJAfQl732E~tplv-nhvfeczskr-1:250:0.webp?lk3s=44acef4b&x-expires=1735045602&x-signature=gB8TYMK0%2B0GyrkG54Leouw9SL6M%3D'/>
        </div>
    </header>
    <div class="wrapper">
        <slot></slot>
    </div>
</div>