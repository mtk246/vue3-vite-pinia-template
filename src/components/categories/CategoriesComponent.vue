<template>
    <div class="container mx-auto pb-5">
        <span class="drop-shadow-md text-tile-categorie text-color-categorie font-bold">
            {{ $t('categories_component.categories') }}
        </span>
    </div>
    <div class="container mx-auto px-15 flex flex-col justify-center">
        <v-row>
            <template
                v-for="(image, imgIdx) in imageLayout"
                :key="imgIdx"
            >
                <v-col
                    :cols="image.cols"
                >
                    <div class="relative bg-gray-950">
                        <v-img
                            :src="`https://picsum.photos/500/300?image=${image.cols * 20}`"
                            class="absolute opacity-1 opacity-70"
                            cover
                            height="330"
                        />
                        <div class="absolute bottom-0 left-0 right-0 top-0 grid place-items-center">
                            <div class="flex flex-col">
                                <span class="drop-shadow-md text-tile-categorie text-white font-bold drop-shadow-md">
                                    Categorie
                                </span>                            
                                <v-btn class="mt-4 bg-view-button text-white">
                                    <span class="normal-case font-bold">
                                        {{ $t('main.view_category') }}
                                    </span>
                                </v-btn>
                            </div>
                        </div>
                    </div>
                </v-col>
            </template>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'CategoriesComponent',
    data: () => ({
        imageLayout: [
            { cols: 12 },
            { cols: 7 },
            { cols: 5 },
            { cols: 3 },
            { cols: 6 },
            { cols: 3 },
        ],
    }),
}
</script>
<style lang="sass">
    @import '../../scss/UI/categories_component.sass'
</style>