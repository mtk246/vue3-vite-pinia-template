<template>
    <div class="container mx-auto pt-4 pb-4 grid grid-cols-4 gap-4">
        <div
            v-for="product in productsTest"
            :key="product.id"
            class="flex justify-center"
        >
            <div class="card-size bg-secondary-dark shadow-md rounded-md">
                <div class="px-4 pt-5 flex justify-center relative">
                    <img
                        class="img-card rounded-md"
                        src="../assets/door.jpg"
                        alt="door img"
                    >
                    <div class="absolute left-7 top-1 bg-store rounded-lg p-1">
                        <span class="text-secondary-dark">
                            <span>
                                <font-awesome-icon :icon="['fas', 'box-open']" />
                            </span>
                            {{ product.quantityStore }}
                        </span>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-2 px-4 pt-2 pb-4 flex items-center">
                    <span class="text-xxs-card">
                        {{ product.decription }}
                    </span>
                    <span class="text-right text-card text-green-secondary">
                        {{ product.price }}
                    </span>
                    <span class="text-xxs-card">
                        <span class="text-primary-color text-card">
                            <font-awesome-icon :icon="['fas', 'clock']" />
                        </span>
                        {{ product.time }}
                    </span>
                    <div class="ml-4">
                        <v-btn
                            class="text-white bg-secondary-color"
                            rounded="xl"
                            size="small"
                        >
                            <span class="normal-case font-bold">
                                {{ $t('main.button_add_card') }}
                            </span>
                        </v-btn>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBoxOpen, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBoxOpen, faClock)

export default {
    name: 'CardProduct',
    components: {
        FontAwesomeIcon
    },
    data() {
        return {
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
}
</script>

<style lang="sass">
    @import '../scss/UI/card_product.sass'
</style>