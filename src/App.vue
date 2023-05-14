<template>
    <NavbarComponent />
    <div id="app">
        <router-view />
    </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue';

export default {
  name: 'App',
  components: {
      NavbarComponent,
  },
}
</script>