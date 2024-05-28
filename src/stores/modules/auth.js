import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')),
        token: JSON.parse(localStorage.getItem('token')),
        statusToken: [],
    }),
    getters: {
        isLoggedIn: (state) => state.user,
    },
    actions: {
        async login(userLogin, passwordLogin) {
            try {
                const response = await axios.post(
                    import.meta.env.VITE_API_BASE_URL +
                    '/12Trading/login',
                    {
                        username: userLogin,
                        password: passwordLogin
                    },
                );
                const result = response.data
                if (result) {
                    this.user = user;
                    this.token = user.token
                    localStorage.setItem('user', JSON.stringify(user));
                    localStorage.setItem('token', JSON.stringify(user.token));
                } else {
                    this.logout()
                }
                console.log('login', result.data)
            } catch (error) {
                console.error(error)
            }
        },
        async checkToken() {
            try {
                z
                const token = JSON.parse(localStorage.getItem('token'));
                const response = await axios.post(
                    import.meta.env.VITE_API_URL +
                    '/12Trading/checkToken',
                    {},
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );
                this.statusToken = response.status
                console.log(response.status)
            } catch (error) {
                console.log(error.response.status)
            }
        },
        logout() {
            this.user = null;
            this.token = null;
            localStorage.clear()
        },
    },
});
