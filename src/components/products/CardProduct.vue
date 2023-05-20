<template>
    <div class="container mx-auto flex flex-col items-center">
        <div class="pt-4 pb-4 grid grid-cols-4 gap-4">
            <div
                v-for="product in productsTest"
                :key="product.id"
                class="flex justify-center pr-8 pt-4"
            >
                <div
                    :class="classTheme.background"
                    class="card-size shadow-md rounded-md"
                >
                    <div class="px-4 pt-5 flex justify-center relative">
                        <img
                            class="img-card rounded-md"
                            src="../../assets/door.jpg"
                            alt="door img"
                        >
                        <div
                            v-if="showStock"
                            class="absolute left-7 top-1 bg-store rounded-lg p-1"
                        >
                            <span class="text-secondary-dark">
                                <span>
                                    <font-awesome-icon :icon="['fas', 'box-open']" />
                                </span>
                                {{ product.quantityStore }}
                            </span>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-2 px-4 pt-2 pb-4 flex items-center">
                        <span
                            :class="classDescription"
                            class="text-xxs-card"
                        >
                            {{ product.decription }}
                        </span>
                        <span
                            v-if="showPrice"
                            class="text-right text-card text-green-secondary"
                        >
                            {{ product.price }}
                        </span>
                        <span class="text-xxs-card">
                            <span v-if="showTime">
                                <span class="text-primary-color text-card">
                                    <font-awesome-icon :icon="['fas', 'clock']" />
                                </span>
                                {{ product.time }}
                            </span>
                            <span
                                v-for="n in 3"
                                v-else
                                :key="n"
                                class="color-star pr-1"
                            >
                                <font-awesome-icon :icon="['fas', 'star']" />
                            </span>
                        </span>
                        <div class="ml-4">
                            <v-btn
                                class="text-white bg-secondary-color"
                                rounded="xl"
                                size="small"
                                block
                            >
                                <span class="normal-case font-bold">
                                    <slot name="text-button" />
                                </span>
                            </v-btn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            v-if="viewAll"
            class="py-4"
        >
            <v-btn
                v-bind="props"
                class="bg-view-all-button text-white"
                rounded="xl"
            >
                <span class="normal-case font-bold">
                    {{ $t('main.view_all') }}
                </span>
            </v-btn>
        </div>
    </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBoxOpen, faClock, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBoxOpen, faClock, faStar)

export default {
    name: 'CardProduct',
    components: {
        FontAwesomeIcon
    },
    props: {
        showStock: {type: Boolean, default: true},
        showTime: {type: Boolean, default: true},
        showDescription: {type: Boolean, default: true},
        showPrice: {type: Boolean, default: true},
        whiteTheme: {
            type: Boolean,
            default: true
        },
        viewAll: {type: Boolean, default: true},
        productsTest: {
            type: Array,
            default() {
                return []
            }
        }
    },
    computed: {
        classTheme() {
            return !this.whiteTheme
                ? {
                    background: {'bg-theme-dark': true},
                    color: {'text-white': true}
                }
                : {
                    background: {'bg-theme-white': true},
                    color: {'text-secondary-dark': true}
                };
        },
        classDescription() {
            return !this.showDescription && !this.whiteTheme
                ? {'col-start-1 col-end-3 text-white': true}
                : '';
        }
    }
}
</script>

<style lang="sass">
    @import '../../scss/UI/card_product.sass'
</style>