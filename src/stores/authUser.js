import { defineStore } from 'pinia'
import axios from 'axios'
import { API_URL } from '../utils/constants'

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
                    // Save isLoggedIn state and token to localStorage
                    const authData = {
                        isLoggedIn: this.isLoggedIn,
                        token: response.data.token,
                    }
                    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authData))
                }
            } catch (error) {
                console.error(error)
            }
        },
        logout() {
            this.isLoggedIn = false
            this.authUser = {}
            // Remove isLoggedIn state and token from localStorage
            localStorage.removeItem(AUTH_STORAGE_KEY)
        },
        initialize() {
            // Load isLoggedIn state and token from localStorage during initialization
            const storedAuthData = localStorage.getItem(AUTH_STORAGE_KEY)
            console.log(storedAuthData)
            if (storedAuthData) {
                const { isLoggedIn, token } = JSON.parse(storedAuthData)
                this.isLoggedIn = isLoggedIn
                this.authUser = { user: '', token } // Set the authUser object correctly
            }
        },
    },
    // Call initialize during store creation
    initialize() {
        this.initialize()
    },
})
