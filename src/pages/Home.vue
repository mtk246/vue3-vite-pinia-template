<script setup>
import { ref } from 'vue'

defineProps({
    msg: {
      type: String,
      default: 'Welcome',
    },
})

const count = ref(0)
</script>

<template>
    <h1>{{ msg }}</h1>

    <div class="card">
        <h1>Welcome to Production</h1>
        <button
            type="button"
            @click="count++"
        >
            count is {{ count }}
        </button>
    </div>
    <router-link to="/about">
        Go to About Page
    </router-link>
</template>
  
<script>
    export default {
        name: 'HomeComponent',
    }
</script>
  
<style scoped>
    .home {
        text-align: center;
        margin-top: 100px;
    }
    .read-the-docs {
        color: #888;
    }
</style>
  