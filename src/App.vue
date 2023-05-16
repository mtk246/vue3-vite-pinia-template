<template>
    <NavbarComponent />
    <div id="app">
        <router-view />
    </div>
    <FooterComponent />
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
    name: "App",
    components: {
        NavbarComponent,
        FooterComponent,
    },
};
</script>