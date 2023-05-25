<template>
    <div class="d-flex items-center align-middle flex-col my-10">
        <div>
            <h1 class="text-4xl">
                {{ $t('page_not_found.page_not_found') }}
            </h1>
        </div>
        <div class="my-4">
            <p>
                {{ $t('page_not_found.content') }}
            </p>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'NotFound',
};
</script>
  