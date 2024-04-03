<script lang="ts">
    
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
        height: 60px;
        width: 100%;
        background-color: $Black;
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
    </header>
    <div class="wrapper">
        <slot></slot>
    </div>
</div>