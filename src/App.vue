<template>
    <NavbarComponent v-if="hideComponents" />
    <AdminNavbarComponent v-if="isAdmin" />
    <div id="app">
        <router-view />
    </div>
    <FooterComponent v-if="hideComponents" />
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { userAuthStore } from './stores/authUser'
import NavbarComponent from "./components/NavbarComponent.vue";
import AdminNavbarComponent from "./components/AdminNavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import { PATH_ARR, ADMIN_PATH_ARR } from "./utils/constants";

export default {
    name: "App",
    components: {
        NavbarComponent,
        AdminNavbarComponent,
        FooterComponent,
    },
    data() {
        return {
            hideComponents: true,
            isAdmin: true,
        }
    },
    computed: {
        ...mapState(userAuthStore, ['getIsLoggedIn']),
    },
    watch: {
        $route(newValue) {
            const path = newValue.path;
            this.hideComponents = !PATH_ARR.includes(path);
            this.isAdmin = ADMIN_PATH_ARR.includes(path);
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