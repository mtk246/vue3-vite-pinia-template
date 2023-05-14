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
                            {{ $t('navbar.name_logo') }}
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
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="flex items-center">
                    <InputSearch />
                    <span class="text-primary pl-9">
                        <font-awesome-icon
                            class="icon-navbar text-3xl"
                            :icon="['fas', 'cart-shopping']"
                        />
                    </span>
                    <span class="text-primary pl-9">
                        <font-awesome-icon
                            class="icon-navbar text-3xl"
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
import { faCartShopping, faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import InputSearch from './UI/InputSearch.vue'

library.add(faCartShopping, faCircleUser)

export default {
    name: "NavbarComponent",
    components: {
        FontAwesomeIcon,
        InputSearch
    }
};
</script>

<style lang="sass">
    @import '../scss/navbar.sass'
</style>