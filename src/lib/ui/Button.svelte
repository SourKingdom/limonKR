<script>
</script>

<button on:click>
  <slot/>
</button>

<style lang="scss">
  @import "../../styles.scss";
  button {
    cursor: pointer;
    background-color: $Primary;
    padding: 0.5rem 1.5rem;
    border-radius: 0.5rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
  }
</style>
