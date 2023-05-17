<template>
    <NavbarComponent />
    <div id="app">
        <router-view />
    </div>
    <FooterComponent />
</template>

<script>
import { mapState } from 'pinia'
import { mapActions } from 'pinia'
import { userAuthStore } from './store/auth'
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
    name: "App",
    components: {
        NavbarComponent,
        FooterComponent,
    },
    computed: {
        ...mapState(userAuthStore, ['isLoggedIn'])
    },
    watch:{
        $route() {
            if (this.$route.path == '/login' && this.$route.path == '/register') {
                this.login;
            } else {
                this.logout;
            }
        }
    },
    methods: {
        ...mapActions(userAuthStore, ['login', 'logout']),
    },
};
</script>