import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        infor: JSON.parse(localStorage.getItem('infor')),
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
                    this.infor = result,
                    this.user = result.user
                    this.token = result.token
                    localStorage.setItem('infor', JSON.stringify(result));
                    localStorage.setItem('user', JSON.stringify(result.user));
                    localStorage.setItem('token', JSON.stringify(result.token));
                } else {
                    this.logout()
                }
                console.log('login', result)
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
