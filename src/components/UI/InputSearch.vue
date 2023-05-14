<template>
    <div class="relative">
        <div class="bg-secondary-dark ">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <font-awesome-icon
                    class="icon-search"
                    :icon="['fas', 'magnifying-glass']"
                />
            </span>
        </div>
        <input
            class="
                p-2
                pl-10
                pr-36
                text-search
                input-search
                block
                w-full
                shadow-md
                rounded-full
                dark:placeholder-gray-400
            "
            type="text"
            placeholder="Search"
        >
        <div class="bg-secondary-dark">
            <span
                class="
                    pr-3
                    pl-3
                    text-search
                    text-gray-400
                    absolute
                    inset-y-0
                    right-0
                    flex
                    items-center
                    pointer-events-none
                "
            >
                <span class="text-search text-gray-400 pr-2">/</span>
                {{ recommended }}
            </span>
        </div>
    </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faMagnifyingGlass)

export default {
    name: "InputSearch",
    components: {
        FontAwesomeIcon,
    },
    data() {
        return {
            recommended: 'Some thing...'
        }
    }
};
</script>

<style lang="sass">
    @import '../../scss/main.sass'
    @import '../../scss/UI/input_search.sass'
</style>