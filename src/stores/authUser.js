import { defineStore } from 'pinia'
import { API_URL } from '../utils/constants'
import { useToast } from "vue-toastification";
import axios from 'axios'
import jsCookie from 'js-cookie'

const AUTH_STORAGE_KEY = 'userAuth'

export const userAuthStore = defineStore('userAuth', {
    state: () => ({
        authUser: {},
        isLoggedIn: false,
    }),
    getters: {
        getIsLoggedIn: (state) => state.isLoggedIn,
    },
    actions: {
        async login(userData) {
            try {
                const response = await axios.post(API_URL + '/login', userData);

                if (response.data) {
                    this.authUser = { user: userData.user_name, token: response.data.token }
                    this.isLoggedIn = true

                    const authData = {
                        isLoggedIn: this.isLoggedIn,
                        token: response.data.token
                    }

                    jsCookie.set(AUTH_STORAGE_KEY, JSON.stringify(authData))

                    useToast().success(response.data.message);
                }

            } catch (error) {
                const errorData = error.response.data
                useToast().error(errorData.message ?? errorData.error);
            }
        },
        async register(userData) {
            try {
                const response = await axios.post(API_URL + '/createUser', userData);
                const data = response.data;

                if (response.data) {
                    this.authUser = { name: userData.name , token: data.token }
                    this.isLoggedIn = true

                    const authData = {
                        isLoggedIn: this.isLoggedIn,
                        token: data.token,
                    }

                    jsCookie.set(AUTH_STORAGE_KEY, JSON.stringify(authData))

                    useToast().success(response.data.message);
                }

            } catch (error) {
                const errorData = error.response.data
                useToast().error(errorData.message ?? errorData.error);
            }
        },
        logout() {
            this.isLoggedIn = false
            this.authUser = {}

            jsCookie.remove(AUTH_STORAGE_KEY)
        },
        initialize() {
            const storedAuthData = jsCookie.get(AUTH_STORAGE_KEY)

            if (storedAuthData) {
                const { isLoggedIn, token } = JSON.parse(storedAuthData)
                this.isLoggedIn = isLoggedIn
                this.authUser = { user: '', token }
            }
        },
    },
    initialize() {
        this.initialize()
    },
})
