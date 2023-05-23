import { defineStore } from 'pinia'
import axios from "axios";
import { API_URL } from "../utils/constants";

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
                const response = await axios.post(API_URL + '/login', userData)
                if (response.data) {
                    this.authUser = { user: userData.user_name, token: response.data.token }
                    this.isLoggedIn = true;
                }
            } catch (error) {
                console.error(error);
            }
        },
        logout() {
            this.isLoggedIn = false;
        },
    },
})
