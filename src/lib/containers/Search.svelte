<script lang="ts">
    import ProductServiceCard from "$lib/components/ProductServiceCard.svelte";
    import SearchInput from "$lib/components/SearchInput.svelte";
    import Button from "$lib/ui/Button.svelte";
    import CategoriesSvg from '$lib/svg/categoriesSvg.svelte'
    import FilterSvg from "$lib/svg/filterSvg.svelte";
    
    interface ProductServiceCard{
        id: number;
        title:string
        type:string
        countOfcomment:number
        img:string
        rating:number
    }
    let ProductService: ProductServiceCard[] = [
        {
            title:"Logitech K380",
            id:1,
            type:"товар",
            countOfcomment:1,
            img:"https://img.mvideo.ru/Pdb/50174954b.jpg",
            rating:100,
        }
    ]
</script>

<div class="search">
    <div class="search__params">
        <Button>
            <CategoriesSvg/>
            <span>Все категории</span>
        </Button>
        <Button>
            <FilterSvg/>
            <span>Фильтры</span>
        </Button>
        <SearchInput placeholder={"Поиск по продукту"}/>
    </div>
    <div class="search__items">
        {#each ProductService as item}
            <ProductServiceCard
                {...item}
            />
        {/each}
    </div>
</div>

<style lang="scss">
    @import '../../styles.scss';
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
        gap: 0.6rem;
        height: 2rem;
    }
    .search__items{
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>
