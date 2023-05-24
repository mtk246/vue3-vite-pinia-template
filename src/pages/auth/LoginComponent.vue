<template>
    <div class="px-20 bg-primary-dark h-screen flex items-center">
        <div class="w-full rounded-md grid grid-cols-2 gap-2 bg-content">
            <div class="flex flex-col px-20 py-10">
                <div class="text-white text-left pb-15 px-10">
                    <router-link
                        to="/"
                    >
                        <font-awesome-icon :icon="['fas', 'house']" />
                    </router-link>                    
                    <router-link
                        to="/login"
                        class="pl-20"
                        @click="login"
                    >
                        {{ $t('main.login') }}
                    </router-link>
                    <router-link
                        to="/register"
                        class="pl-20"
                        @click="login"
                    >
                        {{ $t('main.sign_up') }}
                    </router-link>
                </div>
                <div class="px-10">
                    <span class="text-white text-title font-bold">{{ $t('main.login') }}</span>
                    <div class="pt-6">
                        <v-form
                            class="flex flex-col"
                            @submit.prevent="submit"
                        >
                            <v-text-field
                                v-model="user"
                                class="text-white"
                                :label="$t('auth.user')"
                                block
                                clearable
                            />
                            <v-text-field
                                v-model="password"
                                class="text-white"
                                :label="$t('auth.password')"
                                type="password"
                                clearable
                            />
                            <div class="mb-2 checkbox-container">
                                <label class="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        class="w-5 h-5"
                                        @click="toggleCheckbox"
                                    >
                                    <span class="text-white">{{ $t('auth.remember_me') }}</span>
                                </label>
                            </div>
                            <v-btn
                                class="mx-28"
                                type="submit"
                                rounded="xl"
                            >
                                <span class="normal-case font-bold">
                                    Login
                                </span>
                            </v-btn>
                        </v-form>
                    </div>
                </div>
                <div class="pt-3 pb-15 px-10 text-center opacity-50">
                    <a
                        href="#"
                        class="text-white"
                    >
                        {{ $t('auth.forgot_password') }}
                    </a>
                </div>
            </div>
            <div class="login-image">
                <img
                    class="rounded-md"
                    src="../../assets/login-bg.jpg"
                    alt="login image"
                >
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'pinia';
import { userAuthStore } from '../../stores/authUser';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHouse)

export default {
    name: "LoginComponent",
    components: {
        FontAwesomeIcon,
    },
    data() {
        return {
            user: '',
            password: '',
            isChecked: false,
        };
    },
    mounted() {
        this.initialize();
    },
    methods: {
        ...mapActions(userAuthStore, [
            'login',
            'initialize'
        ]),
        async submit() {
            await this.login({
                user_name: this.user,
                password: this.password
            });

            this.$router.push('/dashboard')
        },
        toggleCheckbox() {
            this.isChecked = !this.isChecked;
        },
    },
};
</script>

<style lang="sass">
    @import '../../scss/main'
    @import '../../scss/auth'
    @import '../../scss/login_signup'
</style>