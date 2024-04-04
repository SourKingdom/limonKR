<script>
  import SearchSvg from "$lib/svg/searchSvg.svelte";
  import Button from "../ui/Button.svelte";
  export let placeholder = "";
</script>

<div class="wrapper">
  <div class="input-area">
    <SearchSvg />
    <input type="text" {placeholder} />
  </div>
  <Button>Найти</Button>
</div>

<style lang="scss">
  @import "../../styles.scss";
  .wrapper {
    position: relative;
    width: 100%;
    display: flex;
    border-radius: 0.5rem;
    background-color: $Primary;
  }
  .input-area {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 6px;
    background-color: $Gray;
    padding: 0.5rem;
    border-radius: 0.5rem;

    &::after {
      content: "";
      position: absolute;
      background-color: $Gray;
      display: block;
      width: 1.875rem;
      height: 100%;
      top: 0px;
      left: -0.06rem;
      border-radius: 0.48rem;
    }
  }
  input {
    width: 100%;
    border: none;
    background-color: rgba(240, 248, 255, 0);
  }
</style>
