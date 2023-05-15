<template>
    <div class="container mx-auto">
        <div class="grid grid-cols-2 gap-2">
            <div class="text-center">
                <div class="px-3">
                    <span class="text-title font-size-lg font-bold drop-shadow-md">
                        Thousands of people they already trust
                    </span>
                    <span class="text-cyan-500 font-size-lg font-bold drop-shadow-md"> Takeit</span>
                </div>
                <div class="px-3">
                    <span class="drop-shadow-md text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </span>
                </div>
                <div class="px-3 flex items-center">
                    <div>Shop</div>
                    <div>Shop</div>
                </div>
            </div>
            <div>
                World
            </div>
        </div>
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


<style lang="sass">
    @import '../scss/home_page.sass'
</style>