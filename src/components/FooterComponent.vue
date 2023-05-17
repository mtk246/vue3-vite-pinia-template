<template>
    <footer class="bg-primary-dark shadow dark:bg-gray-800">
        <div class="p-8 container w-full mx-auto text-center">
            <h1 class="text-white pb-8 text-3xl drop-shadow-md">
                {{ $t('main.takeit') }}
            </h1>
            <ul class="pb-4 flex flex-wrap justify-center text-white">
                <li>
                    <a
                        href="#"
                        class="pr-12 font-size-sl"
                    >
                        {{ $t('navbar.home') }}
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        class="pr-12 font-size-sl"
                    >
                        {{ $t('navbar.about') }}
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        class="font-size-sl"
                    >
                        {{ $t('navbar.shop') }}
                    </a>
                </li>
            </ul>
            <ul class="pb-4 flex flex-wrap justify-center text-white">
                <li>
                    <a
                        href="#"
                        class="pr-12 font-size-sm"
                    >
                        {{ $t('footer.term-of-service') }}
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        class="font-size-sm"
                    >
                        {{ $t('footer.privacy-policy') }}
                    </a>
                </li>
            </ul>
            <ul class="pb-4 flex flex-wrap justify-center">
                <li>
                    <a
                        href="#"
                        class="pr-12"
                    >
                        <img
                            src="../assets/square-twitter.svg"
                            alt="twitter"
                            width="29"
                        >
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        class="pr-9"
                    >
                        <img
                            src="../assets/facebook-f.svg"
                            alt="facebook"
                            width="20"
                        >
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        class=""
                    >
                        <img
                            src="../assets/instagram.svg"
                            alt="instagram"
                            width="29"
                        >
                    </a>
                </li>
            </ul>
            <div class="mb-8 h-0.5 bg-gray-400 opacity-20 rounded-full" />
            <span class="font-size-sm text-white">
                © {{ currentYear }} {{ $t('main.takeit') }} | {{ $t('footer.section-1') }}
                <span class="font-bold"> {{ $t('footer.section-2') }}</span>
            </span>
        </div>
    </footer>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faInstagram, faFacebook)

export default {
    name: 'FooterComponent',
    component: {
        FontAwesomeIcon,
    },
    computed: {
        currentYear() {
            const date = new Date();

            return date.getFullYear();
        }
    }
}
</script>
<style lang="sass">
    @import '../scss/main.sass'
    @import '../scss/footer.sass'
</style>