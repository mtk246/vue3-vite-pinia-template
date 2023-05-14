<template>
    <div class="shadow-md">
        <div class="container mx-auto">
            <nav class="flex justify-between py-5 bg-white">
                <div class="flex">
                    <a
                        href="#"
                        class="flex items-center pr-9"
                    >
                        <img
                            src="../assets/logo.svg"
                            class="pr-1.5"
                            alt="Takeit Logo"
                            width="30"
                            height="30"
                        >
                        <span class="text-logo font-bold">
                            {{ $t('main.takeit') }}
                        </span>
                    </a>
                    <div class="block flex items-center">
                        <ul class="flex flex-row">
                            <li class="block pr-12 text-primary">
                                {{ $t('navbar.home') }}
                            </li>
                            <li class="block pr-12 text-primary">
                                {{ $t('navbar.about') }}
                            </li>
                            <li class="block pr-12 text-primary">
                                {{ $t('navbar.shop') }}
                                <span><font-awesome-icon
                                    class="text-primary"
                                    :icon="['fas', 'caret-down']"
                                /></span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="flex items-center">
                    <InputSearch />
                    <div class="relative">
                        <div class="flex items-center shopping-counter absolute">
                            <span class="p-0.5">{{ shoppingCounter }}</span>
                        </div>
                        <span class="text-primary pl-9">
                            <font-awesome-icon
                                class="color-secondary text-3xl"
                                :icon="['fas', 'cart-shopping']"
                            />
                        </span>
                    </div>
                    <span class="text-primary pl-9">
                        <font-awesome-icon
                            class="color-secondary text-3xl"
                            :icon="['fas', 'circle-user']"
                        />
                    </span>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartShopping, faCircleUser, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import InputSearch from './UI/InputSearch.vue'

library.add(faCartShopping, faCircleUser, faCaretDown)

export default {
    name: "NavbarComponent",
    components: {
        FontAwesomeIcon,
        InputSearch
    },
    data() {
        return {
            shoppingCounter: '9+'
        }
    }
};
</script>

<style lang="sass">
    @import '../scss/navbar.sass'
</style>