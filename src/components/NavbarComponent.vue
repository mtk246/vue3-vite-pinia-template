<template>
    <div class="shadow-md">
        <div class="container mx-auto">
            <nav class="flex justify-between py-5 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
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
                    <input
                        class="shadow-md input-search rounded-full"
                        type="text"
                    >
                    <span class="text-primary pl-9">shop</span>
                    <span class="text-primary pl-9">user</span>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavbarComponent",
};
</script>

<style lang="sass">
    @import '../scss/main.sass'
    @import '../scss/navbar.sass'
</style>