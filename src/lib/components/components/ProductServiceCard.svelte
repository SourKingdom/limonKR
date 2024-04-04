<script lang="ts">
  import Stars from "../ui/Stars.svelte";

  export let img: string;
  export let title: string;
  export let type: string;
  export let rating: number;
  export let countOfcomment: number;
</script>

<div class="wrapper">
  <div class="top">
    <h3>{title}</h3>
    <span>{type}</span>
  </div>
  <div class="middle">
    <img src={img} alt="" />
  </div>
  <div class="bootom">
    <Stars {rating} />
    <span>{countOfcomment} отзывов</span>
  </div>
</div>

<style lang="scss">
  @import "../../../styles.scss";
  .wrapper {
    background-color: $Gray;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    border-radius: 0.5rem;
    width: 100%;
    max-width: 315px;
    gap: 0.5rem;
  }
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > span {
      font-size: 0.75rem;
      color: #818386;
      font-weight: 500;
    }
  }
  .middle {
    position: relative;
    width: 100%;
    height: 130px;
    border-radius: 0.5rem;
    overflow: hidden;
    img {
      position: absolute;
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
  .bootom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > span {
      font-size: 0.75rem;
      font-weight: 500;
    }
  }
</style>
