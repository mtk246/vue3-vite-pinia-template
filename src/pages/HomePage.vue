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
                                {{ $t('main.button_shop') }}
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
                                {{ $t('main.button_login') }}
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
    <CardProduct />
</template>

<script>
import CardProduct from '../components/CardProduct.vue';

export default {
    name: "HomePage",
    components: {
        CardProduct
    },
    data() {
        return {
            msg: 'Hello World!'
        }
    }
};
</script>


<style lang="sass">
    @import '../scss/main.sass'
    @import '../scss/home_page.sass'
</style>