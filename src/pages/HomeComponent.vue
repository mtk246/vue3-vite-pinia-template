<template>
    <div>
        <h1>{{ msg }}</h1>
    
        <div class="card">
            <h1>Welcome to Production</h1>
            <button
                type="button"
                @click="count++"
            >
                Fetch API
            </button>
        </div>
        <router-link to="/about">
            Go to About Page
        </router-link>
    
        <div v-if="responseData">
            <h2>Response Data:</h2>
            <pre>{{ responseData }}</pre>
        </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted, reactive } from 'vue';
import axios from 'axios';

const msg = 'Welcome';
const count = ref(0);
const responseData = reactive({});

onMounted(async () => {
    try {
        const response = await axios.get(import.meta.env.VITE_API_URL + '/getUser');
        responseData.value = response.data;
    } catch (error) {
        console.error(error);
    }
});
</script>
  