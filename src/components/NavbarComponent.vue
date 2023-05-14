<template>
    <div class="container mx-auto">
        <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div class="flex justify-start">
                <a
                    href="#"
                    class="flex items-center"
                >
                    <img
                        src="../assets/logo.svg"
                        class="pr-1.5"
                        alt="Takeit Logo"
                        width="30"
                        height="30"
                    >
                    <span class="text-logo font-bold">Takeit</span>
                </a>
                <div class="hidden w-full md:block md:w-auto">
                    <ul class="flex flex-row">
                        <li class="block">
                            Home
                        </li>
                        <li class="block">
                            About
                        </li>
                        <li class="block">
                            Shop
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
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