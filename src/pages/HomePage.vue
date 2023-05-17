<template>
    <div class="container mx-auto h-max-content flex items-center">
        <div class="grid grid-cols-2 gap-2">
            <div>
                <div class="px-3 flex flex-col">
                    <span class="text-title font-size-lg font-bold drop-shadow-md">
                        {{ $t('home_page.section-1') }}
                    </span>
                    <span class="text-cyan-500 font-size-lg font-bold drop-shadow-md">
                        {{ $t('main.takeit') }}
                    </span>
                </div>
                <div class="px-3 py-4">
                    <span class="drop-shadow-md text-gray-500 font-bold">
                        {{ $t('home_page.section-2') }}
                    </span>
                </div>
                <div class="px-3 py-4 grid grid-cols-5 gap-2">
                    <div class="col-start-2">
                        <v-btn
                            class="text-white bg-secondary-color"
                            rounded="xl"
                            size="large"
                        >
                            <span class="px-2 normal-case font-bold">
                                {{ $t('main.shop') }}
                            </span>
                        </v-btn>
                    </div>
                    <div class="col-start-4">
                        <v-btn
                            class="text-primary-color bg-secondary-dark"
                            rounded="xl"
                            size="large"
                        >
                            <span class="px-2 normal-case font-bold">
                                {{ $t('main.login') }}
                            </span>
                        </v-btn>
                    </div>
                </div>
            </div>
            <div class="flex justify-center">
                <img
                    src="../assets/market-img.jpg"
                    alt="Market image"
                    width="530"
                >
            </div>
        </div>
    </div>
    <div class="pt-16">
        <FilterProduct>
            <template #title>
                {{ $t('home_page.explorer_title') }}
            </template>
        </FilterProduct>
        <CardProduct :products-test="productsTest">
            <template #text-button>
                {{ $t('main.add_card') }}
            </template>
        </CardProduct>
    </div>
    <div class="pt-16">
        <CategoriesComponent />
    </div>
    <div class="pt-16 pb-16">
        <div class="text-center">
            <span class="font-size-ml font-bold text-title drop-shadow-md">
                {{ $t('home_page.you_might_also_like') }}
            </span>
        </div>
        <CardProduct
            :show-stock="false"
            :show-time="false"
            :show-description="false"
            :show-price="false"
            :white-theme="false"
            :view-all="false"
            :products-test="productsTest"
        >
            <template #text-button>
                {{ $t('main.view') }}
            </template>
        </CardProduct>
    </div>
</template>

<script>
import CategoriesComponent from '../components/categories/CategoriesComponent.vue';
import CardProduct from '../components/products/CardProduct.vue';
import FilterProduct from '../components/products/FilterProduct.vue';

export default {
    name: "HomePage",
    components: {
        CardProduct,
        FilterProduct,
        CategoriesComponent
    },
    data() {
        return {
            msg: 'Hello World!',
            products: [
                {
                    id: 1,
                    decription: 'Lorem sit consectetur adipisicing elit.',
                    price: '22022000',
                    time: '3 minutes ago',
                    quantityStore: 22,
                },
            ]
        }
    },
    computed: {
        productsTest() {
            let products = [];

            for (let i = 0; i < 8; i++) {
                products.push(this.products[0]);
            }

            return products;
        }
    }

};
</script>


<style lang="sass">
    @import '../scss/main.sass'
    @import '../scss/home_page.sass'
</style>