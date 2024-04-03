<script>

</script>


<button on:click>
    <slot></slot>
</button>

<style lang="scss">
    @import '../../../styles.scss';
    button {
        background-color:$Primary;
        padding: 0.5rem 1rem;
        border-radius: 8px;
    }
</style>