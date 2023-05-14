<template>
    <div class="flex items-center justify-center h-screen">
        <h1 class="text-center pt-8">
            {{ msg }}
        </h1>
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
</script>