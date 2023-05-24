<template>
    <NavbarComponent />
    <div id="app">
        <router-view />
    </div>
    <FooterComponent />
</template>

<script>
import { mapActions } from 'pinia'
import { userAuthStore } from './stores/authUser'
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
    name: "App",
    components: {
        NavbarComponent,
        FooterComponent,
    },
    watch:{
        $route() {
            if (this.$route.path == '/login' || this.$route.path == '/register') {
                this.login;
            } else {
                this.logout;
            }
        }
    },
    created() {
        this.initialize();
    },
    methods: {
        ...mapActions(userAuthStore, ['initialize']),
    },
};
</script>