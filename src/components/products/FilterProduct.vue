<template>
    <div class="container mx-auto flex justify-between">
        <span class="text-tile-filter text-color-filter font-bold">
            <slot
                class="drop-shadow-md"
                name="title"
            />
        </span>
        <div class="flex items-center">
            <div
                v-for="filter in filters"
                :key="filter.id"
            >
                <span class="pr-5 text-color-filter">{{ filter.name }}</span>
            </div>
            <v-menu transition="scale-transition">
                <template #activator="{ props }">
                    <v-btn
                        v-bind="props"
                        class="bg-menu-button text-white"
                        rounded="xl"
                    >
                        <template #append>
                            <span>
                                <font-awesome-icon
                                    class="text-white"
                                    :icon="['fas', 'caret-down']"
                                />
                            </span>
                        </template>
                        <span class="normal-case font-bold">
                            Any action
                        </span>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                        v-for="(item, i) in items"
                        :key="i"
                    >
                        <v-list-item-title>
                            {{ item.title }}
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
    </div>
</template>
<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCaretDown)
export default {
    name: 'FilterProduct',
    components: {
        FontAwesomeIcon,
    },
    data() {
        return {
            items: [
                {title: "Option-1"},
                {title: "Option-2"},
                {title: "Option-3"}
            ],
            filters: [
                {
                    id: 1,
                    name: "All"
                },
                {
                    id: 2,
                    name: "filter"
                },
                {
                    id: 3,
                    name: "filter"
                },
                {
                    id: 4,
                    name: "filter"
                },
                {
                    id: 5,
                    name: "filter"
                }
            ]
        }
    }
}
</script>

<style lang="sass">
    @import '../../scss/UI/filter_product.sass'
</style>