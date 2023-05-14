<template>
    <div>
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
export default {
    name: "HomePage",
    data() {
        return {
            msg: 'Hello World!'
        }
    }
};

// import { ref, onMounted, reactive } from 'vue';
// import axios from 'axios';

// const msg = 'Welcome';
// const count = ref(0);
// const responseData = reactive({});

// onMounted(async () => {
//     try {
//         const response = await axios.get(import.meta.env.VITE_API_URL + '/getUser');
//         responseData.value = response.data;
//     } catch (error) {
//         console.error(error);
//     }
// });
</script>