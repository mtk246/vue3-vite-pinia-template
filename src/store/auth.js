import { defineStore } from 'pinia'

export const userAuthStore = defineStore('userAuth', {
    state: () => ({
        isLoggedIn: false
    }),
    getters: {
        getIsLoggedIn: (state) => state.isLoggedIn,
    },
    actions: {
        login() {
            this.isLoggedIn = true;
        },
        logout() {
            this.isLoggedIn = false;
        },
    },
})
