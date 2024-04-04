<script lang="ts">
    import ProductServiceCard from "$lib/components/components/ProductServiceCard.svelte";
    import SearchInput from "$lib/components/components/SearchInput.svelte";
    import ButtonWIthElement from "$lib/components/ui/ButtonWIthElement.svelte";
    import CategoriesSvg from '$lib/svg/categoriesSvg.svelte'
    import FilterSvg from "$lib/svg/filterSvg.svelte";

    let count = 567;
</script>

<div class="search">
    <div class="search__params">
        <ButtonWIthElement>
            <CategoriesSvg/>
            <span>Все категории</span>
        </ButtonWIthElement>
        <ButtonWIthElement>
            <FilterSvg/>
            <span>Фильтры</span>
        </ButtonWIthElement>
        <SearchInput placeholder={"Поиск по продукту"}/>
    </div>
    <div class="search__items">
        {#each Array(5) as star}
            <ProductServiceCard
                title={"Logitech K380"}
                type={"товар"}
                countOfcomment = {567}
                img = {"https://img.mvideo.ru/Pdb/50174954b.jpg"}
                rating = {100}
            />
        {/each}
    </div>
</div>

<style lang="scss">
    @import '../../../styles.scss';
    .search{
        padding: 1rem;
        border-radius: 0.5rem;
        background-color:$Black;
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
    }
    .search__params{
        text-wrap: nowrap;
        display: flex;
        gap: 10px;
        height: 32px;
    }
    .search__items{
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>
