<template>
    <NavbarComponent v-if="hideComponents" />
    <div id="app">
        <router-view />
    </div>
    <FooterComponent v-if="hideComponents" />
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { userAuthStore } from './stores/authUser'
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
    name: "App",
    components: {
        NavbarComponent,
        FooterComponent,
    },
    data() {
        return {
            hideComponents: true
        }
    },
    computed: {
        ...mapState(userAuthStore, ['getIsLoggedIn']),
    },
    watch:{
        $route(newValue) {
            const path = newValue.path

            path == '/login' || path == '/register'
                ? this.hideComponents = false
                : this.hideComponents = true
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